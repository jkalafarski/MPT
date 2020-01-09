package mtp.service;

import mtp.dao.interfaces.InfluencerDAO;
import mtp.dto.NewInfluencerProfileDTO;
import mtp.model.InfluencerProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.concurrent.ExecutionException;

@Service
public class InfluencerProfileService {
    @Autowired
    private UserService userService;

    @Autowired
    private InfluencerDAO influencerDAO;

    public NewInfluencerProfileDTO createInfluencerProfile(NewInfluencerProfileDTO profileDTO) throws ExecutionException, InterruptedException {

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

        influencerDAO.addInfluencerProfile(influencerProfile);
        return profileDTO;
    }
}
