const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/items")
    .then(function (response) {
      res.render("index", {
        items: response.data,
        username: req.user.username,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_item = (req, res) => {
  res.render("add_item", { username: req.user.username });
};

exports.update_item = (req, res) => {
  axios
    .get("http://localhost:3000/api/items", { params: { id: req.query.id } })
    .then(function (itemdata) {
      res.render("update_item", {
        item: itemdata.data,
        username: req.user.username,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.usersRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("users", {
        users: response.data,
        username: req.user.username,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user", { username: req.user.username });
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", {
        user: userdata.data,
        username: req.user.username,

      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.commandesRoutes = (req, res) => {
    res.render('commandes')
 }