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
  // gardenerId: newGardener1.id
});
const newPlot2 = new Plot({
  size: 20,
  shaded: false
  // gardenerId: newGardener2.id
});
const newPlot3 = new Plot({
  size: 50,
  shaded: true
  // gardenerId: newGardener3.id
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
    return Promise.all([
      newVegetable1.save(),
      newVegetable2.save(),
      newVegetable3.save()
    ]);
  })
  .then(() => {
    newGardener1.favoriteVegetableId = newVegetable1.id;
    newGardener2.favoriteVegetableId = newVegetable2.id;
    newGardener3.favoriteVegetableId = newVegetable3.id;
    return Promise.all([
      newGardener1.save(),
      newGardener2.save(),
      newGardener3.save()
    ]);
  })
  .then(() => {
    newPlot1.gardenerId = newGardener1.id;
    newPlot2.gardenerId = newGardener2.id;
    newPlot3.gardenerId = newGardener3.id;
    return Promise.all([newPlot1.save(), newPlot2.save(), newPlot3.save()]);
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
