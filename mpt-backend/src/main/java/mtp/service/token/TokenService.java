package mtp.service.token;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import mtp.controller.exception.MptUnauthorisedException;
import mtp.model.user.AuthenticationUser;
import mtp.model.user.UserRole;
import mtp.service.PropertiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;
import java.util.Map;

@Component
public class TokenService {
    @Autowired
    private PropertiesService propertiesService;

    public String generateToken(AuthenticationUser authenticationUser) {
        return Jwts.builder()
                .setIssuer(propertiesService.getJwtIssuer())
                .setSubject(authenticationUser.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(createExpiredAtDate())
                .claim(TokenClaimsNames.ROLE, authenticationUser.getRole())
                .signWith(SignatureAlgorithm.HS256,
                        propertiesService.getJwtSecretKey().getBytes())
                .compact();
    }
    public AuthorizationDetails getAuthorizationDetailsFromToken(String strJWT) {
        Jwt jwt = verifyToken(strJWT);
        ObjectMapper om = new ObjectMapper();
        Map body = om.convertValue(jwt.getBody(), Map.class);
        return AuthorizationDetails.builder()
                .username((String)body.get(TokenClaimsNames.SUBJECT))
                .role(UserRole.valueOf((String)body.get(TokenClaimsNames.ROLE)))
                .build();
    }

    private Date createExpiredAtDate() {
        Instant now = Instant.now()
                .plusSeconds(Integer.parseInt(propertiesService.getJwtTokenValidityTime()));
        return new Date(now.toEpochMilli());

    }

    private Jwt verifyToken(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(propertiesService.getJwtSecretKey().getBytes())
                    .parse(token);
        } catch (Exception ex) {
            throw new MptUnauthorisedException("Token validation has failed", ex);
        }
    }
}
