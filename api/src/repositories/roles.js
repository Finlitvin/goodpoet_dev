const roleModel = require('../models/roles');

class RolesRepository {
    getRole(id) {
        return roleModel.findByPk(id);
    }

    getAllRoles() {
        return roleModel.findAll();
    }
}

module.exports = new RolesRepository();