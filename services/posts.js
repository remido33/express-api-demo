
const jsonPlaceholder = require('../helpers/jsonPlaceholder');
const getError = require('../helpers/getError');

const createPostService = async ({ title, content, }) => {
    try {
        const response = await jsonPlaceholder.post('/posts', {
            title,
            content,
        });
        return response.data;
    } catch (error) {
        throw getError(500, 'Failed to create post');
    }
};

const getPostService = async ({ id, }) => {
    try {
        const response = await jsonPlaceholder.get(`/posts/${id}`);
        return response.data;
    } catch (error) {

        throw getError(404, 'Post not found');
    }
};

const updatePostService = async ({ id, title, content, }) => {
    try {
        const response = await jsonPlaceholder.put(`/posts/${id}`, {
            title,
            content,
        });
        return response.data;
    } catch (error) {
        throw getError(404, 'Post not found');
    }
};

const deletePostService = async ({ id, }) => {
    try {
        await jsonPlaceholder.delete(`/posts/${id}`);
    } catch (error) {
        throw getError(404, 'Post not found');
    }
};

module.exports = {
    createPostService,
    getPostService,
    updatePostService,
    deletePostService,
};
