const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Create a new User
async function createUser(req, res) {
  console.log(req.body)
  try {
    
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all User
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// update a user by ID
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updateuser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    res.json(updateuser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// delete a User by ID
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// async function admindasbhard(req, res) {
//   res.status(200).json({ message: "Admin Dashboard" });
// }

// login a User
// exports.login = async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const user = await User.findOne({ username });
//       if (!user) return res.status(401).json({ error: 'Authentication failed' });
      
//       const isPasswordValid = await bcrypt.compare(password, user.password);
//       if (!isPasswordValid) return res.status(401).json({ error: 'Authentication failed' });
  
//       const token = user.generateToken();
//       res.status(200).json({ token });
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  

// helping function
//generating token
// function GenerateToken(user) {
//   const payload = {
//     role: user.role,
//     id: user._id,
//   };
//   const token = jwt.sign(payload, "aleeza7teveygqbtxrr.");
//   return token;
// }

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  //login,
  //admindasbhard,
};
