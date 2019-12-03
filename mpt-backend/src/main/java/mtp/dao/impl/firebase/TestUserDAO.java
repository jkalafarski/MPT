package mtp.dao.impl.firebase;

import com.google.cloud.firestore.QueryDocumentSnapshot;
import mtp.dao.CollectionNames;
import mtp.model.user.TestUser;
import mtp.service.firebase.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TestUserDAO {
    @Autowired
    private FirebaseService firebaseService;

    public List<TestUser> getTestUsers() throws Exception {
        List<QueryDocumentSnapshot> queryResult = firebaseService
                .getCollection(CollectionNames.TEST_USERS)
                .get().get()
                .getDocuments();
        return queryResult.stream()
                .map(doc -> doc.toObject(TestUser.class))
                .collect(Collectors.toList());
    }
}
