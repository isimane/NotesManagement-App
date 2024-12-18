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
        const tags = await prisma.tag.findMany();
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

async function getTagById (req, res){
    try {
        const id = req.params.id;
        const tag = await prisma.tag.findUnique({where: {id}});
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
        const tag = await prisma.tag.findUnique({where: {id}});
        if(!tag)
            return res.status(404).json({message: 'tag not found'})
        const updatetag = await prisma.tag.update(
            {where: {id}, data}
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

// Added missing category functions
async function addCategories(req, res) {
    try {
        const data = req.body;
        const category = await prisma.category.create({data});
        res.status(200).json({message : 'Category added successfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function getCategories(req, res){
    try {
        const categories = await prisma.category.findMany();
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

async function getCategoryById(req, res){
    try {
        const id = req.params.id;
        const category = await prisma.category.findUnique({where: {id}});
        if(category){
            res.status(200).json(category)
        }else{
            res.status(404).json({message: 'Category not found'})
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

async function updateCategory(req, res){
    try {
        const {id} = req.params;
        const data = req.body;
        const category = await prisma.category.findUnique({where: {id}});
        if(!category)
            return res.status(404).json({message: 'Category not found'})
        const updatedCategory = await prisma.category.update(
            {where: {id}, data}
        );
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

async function deleteCategory(req, res){
    try {
        const {categoryId} = req.params;
        const category = await prisma.category.findUnique({where: {id: categoryId}});
        if(!category)
            return res.status(404).json({message: 'Category not found'})
        const deletedCategory = await prisma.category.delete({where: {id: categoryId}});
        
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = {
    addTags, 
    getTags, 
    getTagById, 
    updateTag, 
    deleteTag,
    addCategories,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}