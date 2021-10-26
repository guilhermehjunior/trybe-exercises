const usernameValidation = (username) => {
  if (username.length <= 3) return true;
  return false;
};

const emailValidation = (email) => {
  const regex = /\w+@\w+\.com/i;
  if (!regex.test(email)) return true;
  return false;
};

const passwordValidation = (password) => {
  const regex = /[0-9]{4,8}/
  if (!regex.test(password)) return true;
  return false;
}

module.exports = (req, res, next) => {
  const { username, email, password } = req.body;
  if(
    usernameValidation(username)
    || passwordValidation(password)
    || emailValidation(email)
  ) return res.status(400).json({ "message": "invalid data" });

  res.status(201).json({ "message": "user created" });
  next();
};
