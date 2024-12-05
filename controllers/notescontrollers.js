const prisma = require('../utils/PrismaClients');
async function addTags(req, res) {
    const data = req.body;
    console.log(data)
}

module.exports = {
    addTags
}