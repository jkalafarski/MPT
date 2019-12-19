package mtp.dao.impl.firebase;

import com.google.cloud.firestore.QueryDocumentSnapshot;
import mtp.dao.interfaces.AuthenticationUserDAO;
import mtp.model.user.AuthenticationUser;
import mtp.service.firebase.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

import static mtp.dao.CollectionNames.AUTHENTICATION_USER;
import static mtp.dao.CollectionNames.AUTHENTICATION_USER__USERNAME;

public class AuthenticationUserDAOImpl implements AuthenticationUserDAO {
    @Autowired
    private FirebaseService firebaseService;

    @Override
    public Optional<AuthenticationUser> getAuthenticationUser(String username)
            throws ExecutionException, InterruptedException {
        List<QueryDocumentSnapshot> queryResult = firebaseService
                .getCollection(AUTHENTICATION_USER)
                .whereEqualTo(AUTHENTICATION_USER__USERNAME, username)
                .get().get()
                .getDocuments();
        return queryResult.stream()
                .map(doc -> doc.toObject(AuthenticationUser.class))
                .findAny();
    }

    @Override
    public AuthenticationUser saveAuthenticationUser(AuthenticationUser authenticationUser) throws IllegalArgumentException {
        return null;
    }
}
