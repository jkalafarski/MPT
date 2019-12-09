package mtp.service;

import mtp.controller.exception.MptNotFoundException;
import mtp.controller.exception.MptUnauthorisedException;
import mtp.dao.interfaces.AuthenticationUserDAO;
import mtp.dto.UserLoginDTO;
import mtp.model.user.AuthenticationUser;
import mtp.service.token.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AuthenticationService {
    @Autowired
    private AuthenticationUserDAO authenticationUserDAO;

    @Autowired
    private TokenService tokenService;

    public String authenticateUser(UserLoginDTO userDTO)
            throws MptUnauthorisedException, MptNotFoundException {
        AuthenticationUser user = authenticationUserDAO
                .getAuthenticationUser(userDTO.getUsername())
                .orElseThrow(() ->
                        new MptUnauthorisedException("User not found in mocked DB"));
        if(!user.getPassword().equals(userDTO.getPassword())) {
            throw new MptUnauthorisedException("Wrong user password");
        }
        return tokenService.generateToken(user);
    }

    /*
    TODO: singUp method:
        - Requirements:
            - Validate entry data
            - Invoke DAO.saveAuthenticationUser()
        - Arguments: AuthenticationUser
        - Returns:  AuthenticationUser
        - Validation:
            - Password strength(length?)
            - Username unique(DAO.getAuthenticationUser())
            - Not sing up andmin(UserRole != ADMINISTRATOR)
     */
}
