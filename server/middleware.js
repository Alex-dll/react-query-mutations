module.exports = (req, res, next) => {
  if (req.method.toLowerCase() === "post") {
    setTimeout(() => {
      // rest.status(400).send();
      next();
    }, 3000);
  } else {
    next();
  }
};
