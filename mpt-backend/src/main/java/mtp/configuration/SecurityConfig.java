package mtp.configuration;

import mtp.service.PropertiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private static final String ANY_PATH = "/**";
    private static final String ANY = "*";

    @Autowired
    private PropertiesService propertiesService;

    //TODO:  firebase authorisation

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        configureCorsPolicy(httpSecurity);
    }

    private void configureCorsPolicy(HttpSecurity httpSecurity) throws Exception {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration(ANY_PATH, buildDefaultCorsConfiguration());
        httpSecurity.cors().configurationSource(source);
    }

    private CorsConfiguration buildDefaultCorsConfiguration() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(Arrays.asList(propertiesService.getCorsHosts()));
        corsConfiguration.addAllowedMethod(ANY);
        corsConfiguration.addAllowedHeader(ANY);
        corsConfiguration.setAllowCredentials(true);
        return corsConfiguration;
    }
}
