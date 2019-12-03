package mtp.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import mtp.controller.exception.MptNotFoundException;
import mtp.controller.exception.MptUnauthorisedException;
import mtp.dao.interfaces.AuthenticationUserDAO;
import mtp.dto.UserLoginDTO;
import mtp.model.user.AuthenticationUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;


@Service
public class AuthenticationService {
    @Autowired
    private AuthenticationUserDAO authenticationUserDAO;

    public String authenticateUser(UserLoginDTO userDTO)
            throws MptUnauthorisedException, MptNotFoundException {
        AuthenticationUser user =authenticationUserDAO
                .getAuthenticationUser(userDTO.getUsername(), userDTO.getPassword());
        return createToken(user);
    }

    private String createToken(AuthenticationUser user)  {
        try {
            return Base64.getEncoder()
                    .encodeToString(new ObjectMapper().writeValueAsBytes(user));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            throw new MptUnauthorisedException("Error while creating token" ,e);
        }
    }
}
