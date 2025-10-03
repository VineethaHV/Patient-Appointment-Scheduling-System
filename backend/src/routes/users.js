const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Create user
router.post('/', async (req, res) => {
  try {
    const { username, password, fullName, role } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, passwordHash, fullName, role });
    res.status(201).json({ id: user.id, username: user.username, fullName: user.fullName, role: user.role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ['passwordHash'] } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['passwordHash'] } });
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;