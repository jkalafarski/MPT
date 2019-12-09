package mtp.controller;

import mtp.model.BuildVersion;
import mtp.service.PropertiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/version")
public class VersionController {
    @Autowired
    private PropertiesService propertiesService;

    @GetMapping
    public BuildVersion getBuildVersion() {
        return propertiesService.getBuildVersion();
    }
}
