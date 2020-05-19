const poemsRepository = require('../repositories/poems');
const NotFoundError = require('../classes/errors/NotFoundError');

class PoemsService {
    async getPoem(){
        const poems = await poemsRepository.getAllPoems();

        if(!poems.length){
            throw new NotFoundError('sorry');
        }

        return poems;
    }

    async getPoemById(poemId){
        const poem = await poemsRepository.getPoem(poemId);

        if(!poem){
            throw new NotFoundError('sorry');
        }

        return poem;
    }
}

module.exports = new PoemsService();