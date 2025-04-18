
const tryCatch = require('../helpers/tryCatch');
const { 
    getPostService, 
    createPostService, 
    updatePostService, 
    deletePostService, 
} = require('../services/posts');

const createPostController = tryCatch(async (req, res) => {
    const { title, content } = req.body;
    const newPost = await createPostService({ 
        title, 
        content, 
    });

    res.status(201).json(newPost);
});

const getPostController = tryCatch(async (req, res) => {
    const { id } = req.params;

    const post = await getPostService({ id, });

    res.status(200).json(post);
});

const updatePostController = tryCatch(async (req, res) => {
    const { id, title, content } = req.body;
    const updatedPost = await updatePostService({ 
        id, 
        title, 
        content, 
    });

    res.status(200).json(updatedPost);
});

const deletePostController = tryCatch(async (req, res) => {
    const { id } = req.body;
    await deletePostService({ id, });

    res.status(204).end();
});

module.exports = {
    createPostController,
    getPostController,
    updatePostController,
    deletePostController,
};
