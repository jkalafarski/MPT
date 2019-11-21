package mtp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "mtp.security.cors.hosts")
public class MtpApplication {
    public static void main(String[] args) {
        SpringApplication.run(MtpApplication.class, args);
    }
}
