const auth = async (req, res, next) => {
  console.log("Data", req.params);
  if (req.params.id === "123") {
    next();
  } else {
    res.send("You are not authorized");
  }
};

module.exports = auth;
