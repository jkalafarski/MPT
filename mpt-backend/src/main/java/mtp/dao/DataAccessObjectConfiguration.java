package mtp.dao;

import mtp.dao.impl.firebase.AuthenticationUserDAOImpl;
import mtp.dao.impl.firebase.InfluencerDAOImpl;
import mtp.dao.interfaces.AuthenticationUserDAO;
import mtp.dao.interfaces.InfluencerDAO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataAccessObjectConfiguration {
    @Bean
    public AuthenticationUserDAO getAuthenticationUserDAO() {
        // TODO: replace with firebase dto implementation
        return new AuthenticationUserDAOImpl();
    }

    @Bean
    public InfluencerDAO getInfluencerDAO() {
        return new InfluencerDAOImpl();
    }
}
