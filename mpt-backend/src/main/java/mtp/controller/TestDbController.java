package mtp.controller;

import mtp.model.user.TestUser;
import mtp.service.TestDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/db-test")
public class TestDbController {
    @Autowired
    private TestDbService testDbService;

    @GetMapping
    public List<TestUser> getUsers() throws Exception {
        return testDbService.getUsers();
    }
}
