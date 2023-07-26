const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");

const router = express.Router();

router.route("").post(validate(userValidation.createUser), userController.createUser).get(validate(userValidation.getAllUsers), userController.getUsers);
router.route("/:id").get(validate(userValidation.getUserById), userController.getUserById).put(validate(userValidation.updateUser), userController.updateUser).delete(validate(userValidation.deleteUser), userController.deleteUser);
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a list of users.
 *     description: Retrieve a list of users with optional sorting and pagination.
 *     parameters:
 *       - name: page
 *         description: The page number
 *         in: query
 *         required: false
 *         example: 1
 *         schema:
 *           type: integer
 *       - name: size
 *         description: The number of items per page
 *         in: query
 *         required: false
 *         example: 20
 *         schema:
 *           type: integer
 *       - name: sortBy
 *         description: The field used for sorting
 *         in: query
 *         required: false
 *         example: name
 *         schema:
 *           type: string
 *       - name: sortOrder
 *         description: The sort order ascending or descending
 *         in: query
 *         required: false
 *         example: asc
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       429:
 *         description: Too many requests
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TooManyRequests'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 *   post:
 *     tags: [Users]
 *     summary: Create a new user.
 *     description: Create a new user with the given information.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *       required: true
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       429:
 *         description: Too many requests
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TooManyRequests'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a specific user by id.
 *     description: Retrieve a specific user by id.
 *     parameters:
 *       - name: id
 *         description: The user's id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       429:
 *         description: Too many requests
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TooManyRequests'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 *   put:
 *     tags: [Users]
 *     summary: Update an existing user.
 *     description: Update an existing user with the given information.
 *     parameters:
 *       - name: id
 *         description: The user's id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *       required: true
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequest'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       429:
 *         description: Too many requests
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TooManyRequests'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 *   delete:
 *     tags: [Users]
 *     summary: Delete a specific user by id.
 *     description: Delete a specific user by id.
 *     parameters:
 *       - name: id
 *         description: The user's id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Confirmation message
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       429:
 *         description: Too many requests
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TooManyRequests'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */

module.exports = router;
