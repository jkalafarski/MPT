package mtp.service;

import lombok.Getter;
import mtp.model.BuildVersion;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Getter
@Service
public class PropertiesService {

    @Value("${mtp.build.application.version}")
    private String buildVersion;
    @Value("${mtp.security.cors.hosts}")
    private String[] corsHosts;
    @Value("${firebase.admin.sdk.key.path}")
    private String firebaseAdminSdkKeyPath;
    @Value("${security.jtw.secret.key}")
    private String jwtSecretKey;
    @Value("${security.jtw.token.validity.time}")
    private String jwtTokenValidityTime;
    @Value("${security.jwt.issuer}")
    private String jwtIssuer;

    public BuildVersion getBuildVersion() {
        return new BuildVersion(buildVersion);
    }
}
