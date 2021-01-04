const jwt = require("jsonwebtoken");
const Admin = require("../model/admin-model");

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decordedToken = await jwt.verify(token, "thisisthesecretkey");
    const admin = await Admin.find({
      _id: decordedToken.id,
      "tokens.token": token,
    });

    if(!admin){
      throw new Error('No access')
    }

    req.admin = admin
    req.token = token
    next();

  } catch (err) {
    throw new Error(err);
  }
};

module.exports = auth;
