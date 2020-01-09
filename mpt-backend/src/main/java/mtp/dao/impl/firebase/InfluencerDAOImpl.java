package mtp.dao.impl.firebase;

import mtp.dao.interfaces.InfluencerDAO;
import mtp.model.InfluencerProfile;
import mtp.service.firebase.FirebaseService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.concurrent.ExecutionException;

import static mtp.dao.CollectionNames.INFLUENCER;

public class InfluencerDAOImpl implements InfluencerDAO {
    @Autowired
    private FirebaseService firebaseService;

    @Override
    public InfluencerProfile addInfluencerProfile(InfluencerProfile profile)
            throws ExecutionException, InterruptedException {
        firebaseService.getCollection(INFLUENCER).document(profile.getId()).set(profile).get();
        return profile;
    }
}
