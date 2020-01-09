package mtp.service;

import mtp.dto.NewInfluencerProfileDTO;
import mtp.model.InfluencerProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class InfluencerProfileService {
    @Autowired
    private UserService userService;

    public NewInfluencerProfileDTO createInfluencerProfile(NewInfluencerProfileDTO profileDTO) {

        InfluencerProfile influencerProfile = InfluencerProfile.builder()
                .id(UUID.randomUUID().toString())
                .username(userService.getUserName())
                .birthYear(profileDTO.getBirthYear())
                .description(profileDTO.getDescription())
                .firstName(profileDTO.getFirstName())
                .followers(profileDTO.getFollowers())
                .lastName(profileDTO.getLastName())
                .name(profileDTO.getName())
                .phoneNumber(profileDTO.getPhoneNumber())
                .price(profileDTO.getPrice())
                .rank(profileDTO.getRank())
                .tag(profileDTO.getTag())
                .build();

        return profileDTO;
    }
}
