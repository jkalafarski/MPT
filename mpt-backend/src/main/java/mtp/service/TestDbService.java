package mtp.service;

import mtp.dao.impl.firebase.TestUserDAO;
import mtp.model.user.TestUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestDbService {
    @Autowired
    private TestUserDAO testUserDAO;

    public List<TestUser> getUsers() throws Exception {
        return testUserDAO.getTestUsers();
    }
}
