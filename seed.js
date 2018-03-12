const { db, Gardener, Plot, Vegetable } = require("./models");

const newGardener1 = new Gardener({
  name: "Billy Joe",
  age: 999
});

const newGardener2 = new Gardener({
  name: "Jane Doe",
  age: 50
});

const newGardener3 = new Gardener({
  name: "John Smith",
  age: 75
});

const newPlot1 = new Plot({
  size: 10,
  shaded: true
});

const newPlot2 = new Plot({
  size: 20,
  shaded: false
});

const newPlot3 = new Plot({
  size: 50,
  shaded: true
});

const newVegetable1 = new Vegetable({
  name: "Carrot",
  color: "Orange",
  planted_on: "2012-01-12"
});

const newVegetable2 = new Vegetable({
  name: "Tomato",
  color: "Red",
  planted_on: "2014-05-24"
});

const newVegetable3 = new Vegetable({
  name: "Lettuce",
  color: "Green",
  planted_on: "2016-06-06"
});


db
  .sync({ force: true })
  .then(() => {
    return Promise.all([newVegetable1.save(), newVegetable2.save(), newVegetable3.save()])
  })
  // .then(() => {
  //   return newVegetable3.save();
  // })
  .then(() => {
    console.log("Database synced!");
    db.close();
  })
  .catch(err => {
    console.log("Disaster! Something went wrong! ");
    console.log(err);
    db.close();
  });
