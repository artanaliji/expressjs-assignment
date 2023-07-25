const express = require("express");
const validate = require("../middlewares/validate");
const { testValidation } = require("../validations");
const { testController } = require("../controllers");

const router = express.Router();

router.route("").get(validate(testValidation.testSchema), testController.test);

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Test Api
 *     description: Retrieve a list of dummy users.
 *     parameters:
 *       - name: sort
 *         description: The sorting criteria
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of search results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SearchResult'
 */
module.exports = router;
