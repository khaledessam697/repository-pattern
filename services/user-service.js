const {Repository} = require("../models/repository");
var User = require("../models/user");

function create(user1) {
  return new Promise(function (resolve, reject) {
    let user = new User(user1); // user1 is a object to be saved
    console.log("in service");
   new Repository()
      .create(user)
      .then((data) => {
        resolve({
          data: data,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function list() {
  let params = {
    limit: 10,
  };
  return new Promise(function (resolve, reject) {
    new Repository()
      .list(User, params)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function listAggregation() {
  return new Promise(function (resolve, reject) {
    new Repository()
      .listAggregation(User, [
        {
          $match: { username: "reem" },
        },
      ])
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
module.exports = {
  create,
  list,
  listAggregation
};
