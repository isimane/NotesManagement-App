const prisma = require('../utils/PrismaClients');


async function addTags(req, res) {
    try {
        const data = req.body;
        const tag = await prisma.tag.create({data});
        res.status(200).json({message : 'Tags added successfully'})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function getTags (req, res){
    try {
        const tags =  await prisma.tag.findMany();
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

async function getTagById (req, res){
    try {
        const id = req.params.id;
        const tag = await prisma.tag.findUnique({where: {id: id}});
        if(tag){
            res.status(200).json(tag)
        }else{
            res.status(404).json({message: 'Tag not found'})
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

async function updateTag(req, res){
    try {
        const {id} = req.params;
        const data = req.body;
        const tag = await prisma.tag.findUnique({where: {id: id}});
        if(!tag)
            return res.status(404).json({message: 'tag not found'})

        const updatetag = await prisma.tag.update(
            {where: {id: id}, data}
        );
        res.status(200).json(updatetag);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
async function deleteTag(req, res){
    try {
        const {tagId} = req.params;
        const tag = await prisma.tag.findUnique({where: {id: tagId}});
        if(!tag)
            return res.status(404).json({message: 'Tag not found'})
        const deletedTag = await prisma.tag.delete({where: {id: tagId}});
        
        res.status(200).json(deletedTag);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
async function addTags(req, res) {
    try {
        const data = req.body;
        const tag = await prisma.tag.create({data});
        res.status(200).json({message : 'Tags added successfully'})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
async function getCategory (req, res){
    try {
        const categories =  await prisma.tag.findMany();
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}
//notes
async function addNotes(req, res){
    try {
        const data = req.body;
        const note = await prisma.note.create({data});
        res.status(200).json({message: 'Note added successfully'})
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}





module.exports = {
    addTags,
    getTags,
    getTagById,
    updateTag,
    deleteTag
}