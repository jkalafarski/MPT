package mtp.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationUser {
    private String username; // Unique
    private String password; // //TODO: Should be passhord hash
    private String email;
    private UserRole role;
}
