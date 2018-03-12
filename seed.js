const { db, Gardener, Plot, Vegetable } = require("./models");

const newGardener = new Gardener({
  name: "Billy Joe",
  age: 999
});

db
  .sync({ force: true })
  .then(() => {
    newGardener.save();
  })
  .then(() => {
    console.log("Database synced!");
    db.close();
  })
  .catch(err => {
    console.log("Disaster! Something went wrong! ");
    console.log(err);
    db.close();
  });
