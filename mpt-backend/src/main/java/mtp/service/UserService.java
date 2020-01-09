package mtp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import mtp.model.user.AuthenticationUser;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class UserService {
    public String getUserName() {
        ObjectMapper mapper = new ObjectMapper();
        HashMap principal = mapper
                .convertValue(SecurityContextHolder.getContext().getAuthentication().getPrincipal(), HashMap.class);
        return (String)principal.get("username");
    }
}
