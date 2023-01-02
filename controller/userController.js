const userSchema = require("../model/userModel");

const userregister = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = new userSchema(req.body);
  user.save((err, user) => {
    if (err) {
      res.json(err);
    } else {
      res.json(user);
    }
  });
};

const getAllUsers = (req, res) => {
  userSchema.find({}, (err, users) => {
    if (err) {
      res.json(err);
    } else {
      res.json(users);
    }
  });
};

const singleUser = (req, res) => {
  const id = req.params.id;
  userSchema.findOne({ _id: id }, (err, user) => {
    if (err || !user) {
      res.status(404).json("could not find the user");
    } else {
      res.json(user);
    }
  });
};

const isAdmin = (req, res, next) => {
  const adminId = req.params.adminId;
  userSchema.findOne({ _id: adminId }, (err, user) => {
    if (err || !user) {
      res.status(403).json("Not find admin");
    } else {
      if (user.isAdmin == true) {
        next();
      } else {
        res.status(403).send("You Not a admnin");
      }
    }
  });
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  userSchema.findOneAndUpdate({ _id: userId }, req.body, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("User updated");
    }
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  userSchema.findOneAndDelete({ _id: userId }, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json("User deleted");
    }
  });
};

module.exports = {
  userregister,
  getAllUsers,
  singleUser,
  isAdmin,
  updateUser,
  deleteUser,
};
