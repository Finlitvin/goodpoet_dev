const roleModel = require('../models/roles');

class RolesRepository {
    getRole(id) {
        return roleModel.findByPk(id);
    }

    getAllRoles() {
        return roleModel.findAll();
    }

    getRoleByValue(value) {
        return roleModel.findOne({ where: { value: value } });
    }
    
    addRole(value) {
        return roleModel.create(value);
    }

    deleteRole(id) {
        return roleModel.destroy({ where: { id: id } });
    }
}

module.exports = new RolesRepository();