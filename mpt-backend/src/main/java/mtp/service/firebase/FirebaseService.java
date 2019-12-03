package mtp.service.firebase;


import com.fasterxml.classmate.GenericType;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import mtp.service.PropertiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;

@Service
public class FirebaseService {
    protected final PropertiesService propertiesService;
    private Firestore db;

    public FirebaseService(PropertiesService propertiesService) throws Exception {
        this.propertiesService = propertiesService;

        initFirebaseApp();
        db = FirestoreClient.getFirestore();
    }

    public CollectionReference getCollection(String collectionName) {
        return db.collection(collectionName);
    }

    private void initFirebaseApp() throws Exception {
        FileInputStream serviceAccount =
                new FileInputStream(propertiesService.getFirebaseAdminSdkKeyPath());

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://ti-2019-mpt.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);
    }
}
