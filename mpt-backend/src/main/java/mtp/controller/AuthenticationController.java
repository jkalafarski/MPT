package mtp.controller;

import mtp.controller.exception.MptNotFoundException;
import mtp.controller.exception.MptUnauthorisedException;
import mtp.dto.UserLoginDTO;
import mtp.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    /** Returns Token(200 OK) if authentication
     * else Returns HTTP 404 NOT_FOUND
     * or 401 UNAUTHORISED(if user was found in db
     * but error occured while creating credentials
     */
    @PostMapping("/login")
    public String login(@RequestBody UserLoginDTO user)
            throws MptUnauthorisedException, MptNotFoundException, ExecutionException, InterruptedException {
        return authenticationService.authenticateUser(user);
    }

    /*
    TODO: POST /sign-up:
        - ags: AuthenticationUser,
        - returns(OK):
            - AuthenticationUser
        - returns(ERROR):
            - Wrong request arguments: 400 BAD REQUEST,
            - User already exists: 409 CONFLICT

    */
}
