class Repository {
  async create(Model) {
    return new Promise((resolve, reject) => {
      console.log("in db");
      Model.save(function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  /*async function list(Model, queryParams) {
      return new Promise((resolve, reject) => {
        Model.find({})
          .limit(parseInt(queryParams.limit))
          .exec(function(err, data) {
            if (err) reject(err);
            resolve(data);
          });
      });
    }*/

  async list(Model, queryParams) {
    try {
      const data = await Model.find({}).limit(parseInt(queryParams.limit));
      return data;
    } catch (err) {
      throw Error("DB Error ya3m");
    }
  }

  async listAggregation(Model, pipline = []) {
    return new Promise((resolve, reject) => {
      Model.aggregate(pipline).exec(function (err, data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}
module.exports = {
  Repository
};
