import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const userData = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    };

    // Return user data here for frontend
    res.status(201).json({ user: userData });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed', details: err.message });
  }
});


// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    // Exclude password before sending
    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email
    };

    res.status(200).json({ user: userData });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

// Logout route (client clears localStorage/token, so backend can just return status)
router.post('/logout', (req, res) => {
  // If using sessions or tokens, handle logout here (e.g., clear session, blacklist token)
  res.status(200).json({ message: 'Logout successful' });
});

export default router;
