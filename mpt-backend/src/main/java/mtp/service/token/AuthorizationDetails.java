package mtp.service.token;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mtp.model.user.UserRole;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthorizationDetails {
    private String username;
    private UserRole role;
}
