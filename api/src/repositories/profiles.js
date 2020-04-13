const profileModel = require('../models/profiles');

class ProfilesRepository {
    getProfileByUserId(userId) {
        return profileModel.findOne({ where: { userId: userId } });
    }
}

module.exports = new ProfilesRepository();