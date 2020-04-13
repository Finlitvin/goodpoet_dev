const poemModel = require('../models/poems');

class PoemsRepository {
    getPoem(id) {
        return poemModel.findByPk(id);
    }

    getPoemByUserId(userId) {
        return poemModel.findAll({ where: { userId: userId } });
    }

    getAllPoems() {
        return poemModel.findAll();
    }

    addPoem(poem) {
        return poemModel.create(poem);
    }

    deletePoem(id) {
        return poemModel.destroy({ where: { id: id } });
    }

    async updatePoem(id, newPoemData) {
        const poem = await this.getPoem(id);

        return poem.update(newPoemData);
    }
}

module.exports = new PoemsRepository();