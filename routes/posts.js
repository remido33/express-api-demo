const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const {
    getPostController,
    createPostController,
    updatePostController,
    deletePostController,
} = require('../controllers/posts');

router.post(
    '/',
    createPostController
);

router.get(
    '/:id',
    param('id').isInt().withMessage('Post ID must be an integer'),
    getPostController
);

router.patch(
    '/:id',
    [
        param('id').isInt().withMessage('Post ID must be an integer'),
        body('title').isString().notEmpty().withMessage('Title is required'),
        body('content').isString().notEmpty().withMessage('Content is required'),
    ],
    updatePostController
);

router.delete(
    '/:id',
    param('id').isInt().withMessage('Post ID must be an integer'),
    deletePostController
);

module.exports = router;
