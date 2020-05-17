const profileModel = require('../models/profiles');

class ProfilesRepository {
    getProfileByUserId(userId) {
        return profileModel.findOne({ where: { userId: userId } });
    }

    addProfile(profile) {
        return profileModel.create(profile);
    }
}

module.exports = new ProfilesRepository();