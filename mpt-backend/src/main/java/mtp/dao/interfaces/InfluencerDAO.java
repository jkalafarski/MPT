package mtp.dao.interfaces;

import mtp.model.InfluencerProfile;

import java.util.concurrent.ExecutionException;

public interface InfluencerDAO {
    InfluencerProfile addInfluencerProfile(InfluencerProfile profile) throws ExecutionException, InterruptedException;
}
