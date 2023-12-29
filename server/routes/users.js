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

users.post('/register', async (req, res) => {
    try {
        const { email, password, first_name, last_name } = req.body;

        const existingUser = await User.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.json({ status: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            role: 'user',
            email: email,
            password: hashedPassword,
        });

        const newCustomer = await Customer.create({
            userId: newUser.id,
            name: `${first_name} ${last_name}`,
            email: email,
        });

        res.json({ status: 'Registered!' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

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
                        userId: user.id,
                        role: user.role
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

users.post('/admin/getCustomerProperties', async (req, res) => {
    try {
        const usersData = await User.findAll({
            include: [{
                model: Customer,
                attributes: ['userId', 'name', 'cardNo', 'address', 'phoneNumber', 'email', 'passport', 'avatar'],
                as: 'customer'
            }],
            attributes: ['id', 'role', 'email']
        });

        if (usersData) {
            const responseData = usersData.map(userData => ({
                id: userData.id,
                role: userData.role,
                email: userData.email,
                customer: userData.customer
            }));

            res.json(responseData);
        } else {
            res.status(400).json({ error: 'No customers found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

users.post('/admin/addCustomer', async (req, res) => {
    const new_user = req.body.new_user;

    try {
        const existingUser = await User.findOne({ where: { email: new_user.email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(new_user.password, 10);

        const createdUser = await User.create({
            role: new_user.role,
            email: new_user.email,
            password: hashedPassword
        });

        const createdCustomer = await Customer.create({
            userId: createdUser.id,
            name: new_user.name,
            cardNo: new_user.cardNo,
            address: new_user.address,
            phoneNumber: new_user.phoneNumber,
            email: new_user.email,
            passport: new_user.passport
        });

        return res.json({
            msg: 'Customer added successfully',
            customer: {
                userId: createdUser.id,
                name: createdCustomer.name,
                cardNo: createdCustomer.cardNo,
                address: createdCustomer.address,
                phoneNumber: createdCustomer.phoneNumber,
                email: createdCustomer.email,
                passport: createdCustomer.passport,
            },
            user: {
                id: createdUser.id,
                email: createdUser.email,
                role: createdUser.role,
            },
        });


    } catch (error) {
        console.error('Error adding user:', error);
        res.status(400).json({ error: 'Error adding user' });
    }
});

users.post('/admin/deleteCustomer', async (req, res) => {
    const customerEmail = req.body.old_customer.email;

    try {
        const user = await User.findOne({
            where: {
                email: customerEmail
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await User.destroy({
            where: {
                email: customerEmail
            }
        });

        await Customer.destroy({
            where: {
                email: customerEmail
            }
        });

        res.json({ msg: 'Account deleted successfully' });
    } catch (error) {
        console.error('Error deleting account:', error);
        res.status(500).json({ error: 'Error deleting account' });
    }
});


module.exports = users;