const express = require("express");
const users = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

var SECRET_KEY = "Travelam";

const User = require("../models/user");
const Customer = require("../models/customer")
const Comment = require("../models/comment")



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
                        res.json({ status: 'Registered!' })
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
            res.json({ status: 'User already exists' })
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
                    // res.send(token)
                    // console.log(res)
                    res.json({
                        status: "Success",
                        token: token,
                        userId: user.id
                    })
                } else {
                    res.json({ status: "Password wrong" })
                }
            } else {
                res.json({ status: "Username wrong", error: 'User does not exist' })
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
    console.log("req.body.email", req.body.email)
    // alert("Customer's email: ", req.body.email)
    Customer.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(customer => {
            if (customer) {
                const responseData = {
                    id: customer.userId,
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
    var responseData = ""

    Customer.update({
        name: new_user.name,
        cardNo: new_user.cardNo,
        address: new_user.address,
        phoneNumber: new_user.phoneNumber,
        passport: new_user.passport,
        avatar: new_user.avatar
    }, { where: { email: new_user.email } }).then(customer => {
        if (customer) {
            responseData = {
                msg: "Update successfully"
            }

            // res.json(responseData)
        } else {
            res.status(400).json({ error: 'Customer doesn\'t exist' })
        }
    })
        .catch(err => {
            res.status(400).json({ error: err })
        });

    Comment.update({
        avatar: new_user.avatar
    }, { where: { email: new_user.email } }).then(comment => {
        if (comment) {
            responseData = {
                msg: "Update successfully"
            }

            res.json(responseData)
        } else {
            res.status(400).json({ error: 'Comment doesn\'t exist' })
        }
    })
        .catch(err => {
            res.status(400).json({ error: err })
        });

    // res.json(responseData)

})

// admin findAll user from db (or limit)

users.post('/admin/getCustomerProperties', (req, res) => {
    Customer.findAll({
        limit: 50
    })
        .then(customers => {
            if (customers) {
                const responseData = customers.map(customer => ({
                    userId: customer.userId,
                    name: customer.name,
                    cardNo: customer.cardNo,
                    address: customer.address,
                    phoneNumber: customer.phoneNumber,
                    email: customer.email,
                    passport: customer.passport,
                }));
                res.json(responseData);
            } else {
                res.status(400).json({ error: 'No customers found' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

users.post('/admin/addCustomer', async (req, res) => {
    const new_customer = req.body.new_customer;

    try {
        const existingCustomer = await Customer.findOne({ where: { email: new_customer.email } });
        if (existingCustomer) {
            return res.status(400).json({ error: 'Customer with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(new_customer.password, 10);

        const createdUser = await User.create({
            role: 'user',
            email: new_customer.email,
            password: hashedPassword
        });

        const userId = createdUser.userId;

        const createdCustomer = await Customer.create({
            name: new_customer.name,
            cardNo: new_customer.cardNo,
            address: new_customer.address,
            phoneNumber: new_customer.phoneNumber,
            email: new_customer.email,
            passport: new_customer.passport
        });

        res.json({
            msg: 'Customer added successfully',
            customer: {
                userId: createdCustomer.userId,
                name: createdCustomer.name,
                cardNo: createdCustomer.cardNo,
                address: createdCustomer.address,
                phoneNumber: createdCustomer.phoneNumber,
                email: createdCustomer.email,
                passport: createdCustomer.passport,
            },
            user: {
                userId,
                name: new_customer.name,
                cardNo: new_customer.cardNo,
                address: new_customer.address,
                phoneNumber: new_customer.phoneNumber,
                email: new_customer.email,
                passport: new_customer.passport,
            },
        });
    } catch (error) {
        console.error('Error adding customer:', error);
        res.status(400).json({ error: 'Error adding customer' });
    }
});




module.exports = users;