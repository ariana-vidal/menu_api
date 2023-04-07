const router = require('express').Router();
const User = require('../models/User');


router.post('/', async (req, res) =>{
    const { name, email, password } = req.body;

    const user = {
        name,
        email,
        password,
    };

    try {
        await User.create(user)
        res.status(201).json({ message: 'User created successfully!' })
    } catch (error) {
        res.status(500).json({ error: error })
    };
});

module.exports = router;