package mtp.dao.interfaces;


import mtp.model.user.AuthenticationUser;

import java.util.Optional;
import java.util.concurrent.ExecutionException;

public interface AuthenticationUserDAO {
    Optional<AuthenticationUser> getAuthenticationUser(String username) throws ExecutionException, InterruptedException;

    AuthenticationUser saveAuthenticationUser(AuthenticationUser authenticationUser)
            throws IllegalArgumentException;

}
