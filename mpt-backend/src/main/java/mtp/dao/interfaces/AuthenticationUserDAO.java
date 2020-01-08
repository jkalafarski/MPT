package mtp.dao.interfaces;


import mtp.model.user.AuthenticationUser;

import java.util.Optional;

public interface AuthenticationUserDAO {
    Optional<AuthenticationUser> getAuthenticationUser(String username);

    AuthenticationUser saveAuthenticationUser(AuthenticationUser authenticationUser)
            throws IllegalArgumentException;

}
