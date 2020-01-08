package mtp.dao.impl.mock;

import mtp.controller.exception.MptNotFoundException;
import mtp.dao.interfaces.AuthenticationUserDAO;
import mtp.model.user.AuthenticationUser;
import mtp.model.user.UserRole;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class AuthenticationUserDAOMock implements AuthenticationUserDAO {
    @Override
    public Optional<AuthenticationUser> getAuthenticationUser(String username) {
        List<AuthenticationUser> users = getMockedAuthenticationUsers();
        return users.stream()
                .filter(val -> username.equals(val.getUsername()))
                .findAny();
    }

    @Override
    public AuthenticationUser saveAuthenticationUser(AuthenticationUser authenticationUser) throws IllegalArgumentException {
        return authenticationUser;
    }

    private List<AuthenticationUser> getMockedAuthenticationUsers() {
        List<AuthenticationUser> authenticationUsers = new ArrayList<>();
        authenticationUsers.add(
                AuthenticationUser.builder()
                        .username("admin_janusz")
                        .password("secret123")
                        .email("janusz@ti-mpt.com")
                        .role(UserRole.ADMINISTRATOR)
                        .build()
        );
        authenticationUsers.add(
                AuthenticationUser.builder()
                        .username("MTP_company")
                        .password("secret123")
                        .email("ti2019mpt@gmail.com")
                        .role(UserRole.COMPANY)
                        .build()
        );
        authenticationUsers.add(
                AuthenticationUser.builder()
                        .username("pjoter-jutuber")
                        .password("secret123")
                        .email("pjoter@gmail.com")
                        .role(UserRole.INFLUENCER)
                        .build()
        );
        return authenticationUsers;
    }
}
