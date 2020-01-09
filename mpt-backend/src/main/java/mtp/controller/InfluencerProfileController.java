package mtp.controller;

import mtp.dto.NewInfluencerProfileDTO;
import mtp.service.InfluencerProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/influencer/profile")
public class InfluencerProfileController {
    @Autowired
    private InfluencerProfileService influencerProfileService;

    @PostMapping
    public NewInfluencerProfileDTO createProfile(@RequestBody NewInfluencerProfileDTO profile) {
        return influencerProfileService.createInfluencerProfile(profile);
    }
}
