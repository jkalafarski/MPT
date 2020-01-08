package mtp.dao;

import mtp.dao.impl.mock.AuthenticationUserDAOMock;
import mtp.dao.interfaces.AuthenticationUserDAO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataAccessObjectConfiguration {
    @Bean
    public AuthenticationUserDAO getAuthenticationUserDAO() {
        // TODO: replace with firebase dto implementation
        return new AuthenticationUserDAOMock();
    }
}
