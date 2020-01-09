package mtp.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InfluencerProfile {
    private String id;
    /** Key connecteg with Authentication user object */
    private String  username;
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
