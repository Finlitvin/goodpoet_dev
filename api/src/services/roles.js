const roleRepository = require('../repositories/roles');
const ConflictError = require('../classes/errors/ConflictError');
const NotFoundError = require('../classes/errors/NotFoundError');

class RoleService {
    getRole(id) {
        return roleRepository.getRole(id);
    }

    getAllRoles() {
        return roleRepository.getAllRoles();
    }

    getRoleByValue(value) {
        return roleRepository.getRoleByValue(value);
    }

    async addRole(value) {
        const role = await this.getRoleByValue(value);

        if(role) {
            throw new ConflictError(`Role ${value} already exist`);
        }

        return roleRepository.addRole(value);
    }

    async deleteRole(id) {
        const role = await this.getRole(id);

        if(!role) {
            throw new NotFoundError(`Role with id ${id} not found`);
        }

        return roleRepository.deleteRole(id);
    }
}

module.exports = new RoleService();