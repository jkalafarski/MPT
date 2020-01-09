package mtp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NewInfluencerProfileDTO {
    private String firstName;
    private String lastName;
    private int birthYear;
    private String phoneNumber;
    private String name;
    private String description;
    private String tag;
    private String price;
    private int followers;
    private int rank;
}
