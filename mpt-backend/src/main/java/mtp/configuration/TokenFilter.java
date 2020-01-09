package mtp.configuration;

import mtp.service.token.AuthorizationDetails;
import mtp.service.token.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@Component
public class TokenFilter extends OncePerRequestFilter {
    @Autowired
    private TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String requestTokenHeader = request.getHeader("Authorization");
        if(request.getServletPath().contains("authentication")) {
            // Skip if no authorization
            filterChain.doFilter(request, response);
            return;
        }
        String jwt = requestTokenHeader.replace("Bearer ", "");
        AuthorizationDetails tokenAuthorizationDetails = tokenService.getAuthorizationDetailsFromToken(jwt);
        User principal = createPrincipal(tokenAuthorizationDetails);
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(principal,
                        "",
                        principal.getAuthorities()
                );
        authenticationToken
                .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request, response);
    }

    private User createPrincipal(AuthorizationDetails authorizationDetails) {
        return new User(authorizationDetails.getUsername(), "", createAuthorities(authorizationDetails));
    }

    private Set<GrantedAuthority> createAuthorities(AuthorizationDetails authorizationDetails) {
        GrantedAuthority authority = new SimpleGrantedAuthority(authorizationDetails.getRole().getValue());
        return Set.of(authority);
    }
}


