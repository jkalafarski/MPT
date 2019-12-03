package mtp.dao.interfaces;


import mtp.model.user.AuthenticationUser;

public interface AuthenticationUserDAO {
    AuthenticationUser getAuthenticationUser(String username, String password);

    AuthenticationUser saveAuthenticationUser(AuthenticationUser authenticationUser)
            throws IllegalArgumentException;

}
