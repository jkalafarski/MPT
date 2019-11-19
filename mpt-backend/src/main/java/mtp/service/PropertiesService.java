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

    public BuildVersion getBuildVersion() {
        return new BuildVersion(buildVersion);
    }
}
