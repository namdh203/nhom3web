const express = require("express");
const users = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

var SECRET_KEY = "Travelam";

const User = require("../models/user");
const Customer = require("../models/customer")



users.use(cors())

users.post('/register', (req, res) => {
    const userData = {
        role: "user",
        email: req.body.email,
        password: req.body.password
    }

    const customerData = {
        name: req.body.first_name + req.body.last_name,
        email: req.body.email
    }


    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.json({ status: user.email + 'Registered!' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
                Customer.create(customerData)
                    .then(user => {
                        console.log(user.email + 'Registered!')
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            })
        } else {
            res.json({ error: 'User already exists' })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                    // console.log(res)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})


users.get("/", (req, res) => {
    res.json([
        {
            "username": "Zero",
            "age": 20
        },
        {
            "username": "HaNoi",
            "age": 21
        }
    ])
})

users.post('/getCustomer', (req, res) => {
    Customer.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(customer => {
            if (customer) {
                const responseData = {
                    name: customer.name,
                    email: customer.email,
                    avatar: customer.avatar,
                };

                res.json(responseData)
            } else {
                res.status(400).json({ error: 'Customer doesn\'t exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.post('/getCustomerProperties', (req, res) => {
    Customer.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(customer => {
            if (customer) {
                const responseData = {
                    name: customer.name,
                    cardNo: customer.cardNo,
                    address: customer.address,
                    phoneNumber: customer.phoneNumber,
                    email: customer.email,
                    passport: customer.passport,
                    avatar: customer.avatar
                };

                res.json(responseData)
            } else {
                res.status(400).json({ error: 'Customer doesn\'t exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.post('/updateCustomer', (req, res) => {
    const new_user = req.body.new_user

    Customer.update({
        name: new_user.name,
        cardNo: new_user.cardNo,
        address: new_user.address,
        phoneNumber: new_user.phoneNumber,
        passport: new_user.passport,
        avatar: new_user.avatar
    }, { where: { email: new_user.email } }).then(customer => {
        if (customer) {
            const responseData = {
                msg: "Update successfully"
            }

            res.json(responseData)
        }else {
            res.status(400).json({ error: 'Customer doesn\'t exist' })
        }
    })
    .catch(err => {
        res.status(400).json({ error: err })
    });
})

module.exports = users;