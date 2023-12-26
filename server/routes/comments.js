const express = require("express");
const comments = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

var SECRET_KEY = "Travelam";

const Comment = require("../models/comment");
const Customer = require("../models/customer")



comments.use(cors())

comments.post('/getComment', (req, res) => {
    const type = req.body.type
    const type_name = req.body.type_name
    // const email = req.body.email
    console.log("type: ", type, " type_name :", type_name)

    Comment.findAll({
        include: [
            {
                model: Customer,
                required: true,
                attributes: ['name', 'avatar'],
            }
        ],
        attributes: ['email', 'comment', 'createAt', 'name', 'avatar'],
        where: {
            type: type,
            type_name: type_name
        }
    }).then(comments => {
        if (comments) {

            // console.log(comments[0].Customer)

            const responseData = comments.map(comment => ({
                comment: comment.comment,
                createAt: comment.createAt,
                email: comment.email,
                name: comment.name,
                avatar: comment.avatar
            }));

            res.json(responseData)
        } else {
            res.json({ status: 'There\s no comment for this tour' })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
})

comments.post('/sendComment', (req, res) => {
    const id = req.body.id
    const email = req.body.email
    const type = req.body.type
    const type_name = req.body.type_name
    const comment = req.body.comment
    const name = req.body.name
    const avatar = req.body.avatar

    console.log("Create: ", id, email, type, type_name, comment)

    Comment.create({
        userId: id,
        email: email,
        type: type,
        type_name: type_name,
        comment: comment,
        name: name,
        avatar: avatar
    }).then(cmt => {
        return response.data
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = comments;