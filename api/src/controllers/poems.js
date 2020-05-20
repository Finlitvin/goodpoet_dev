const httpStatus = require('http-status-codes');

const resMessage = require('../helpers/resMessage');
const poemsService = require('../services/poems');

class PoemsController {
    async getPoem(req, res, next) {
        const poems = await poemsService.getPoem();

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get all poems', poems));
    }

    async getPoemById(req, res, next) {
        const poemId = req.params.id;

        const poem = await poemsService.getPoemById(poemId);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get poem', poem));
    }
}

module.exports = new PoemsController();