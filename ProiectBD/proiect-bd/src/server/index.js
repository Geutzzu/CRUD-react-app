import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let database;

const uri = "mongodb+srv://Geutzzu:Tab15987463@cluster0.q0w5fj6.mongodb.net/";

console.log("Connecting to MongoDB...");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    database = client.db("Formula1DB")
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log(client.db("Formula1DB").collection("drivers").find().toArray()); /// FUNCTIONEAZA !!!
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

var PORT = 5500; /// 5500

// start the Express server
app.listen(PORT, () => {
    run().catch(console.dir);
    console.log(`Server listening on port ${PORT}`);
  });


// GET all constructors
app.get("/getConstructors", async (req, res) => {
  try {
    let collection = await database.collection("constructors");
    let constructors = await collection.find().toArray();
    res.status(200).send(constructors);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching constructors");
  }
});

///GET all drivers from a team
app.get("/drivers/:constructorId", async (req, res) => {
  const constructorId = req.params.constructorId;

  let collection = await database.collection("drivers");
  let drivers = await collection.find({ constructorId: new ObjectId(constructorId) }).toArray();

  res.send(drivers).status(200);
});

// GET a driver by ID
app.get("/getDriver/:driverId", async (req, res) => {
  const driverId = req.params.driverId;

  let collection = await database.collection("drivers");
  let driver = await collection.findOne({ _id: new ObjectId(driverId) });

  res.send(driver).status(200);
});



// POST a new driver
app.post("/addDriver", async (req, res) => {
  const { firstName, lastName, constructorId, nationality, age, stats } = req.body;
  const newDocument = {
      firstName,
      lastName,
      constructorId: new ObjectId(constructorId),
      nationality,
      age,
      stats
  }
  let collection = await database.collection("drivers");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(201);
});

// PATCH (update) a driver by ID
app.patch("/updateDriver/:driverId", async (req, res) => {
  const driverId = req.params.driverId;
  const updates = req.body;

  let collection = await database.collection("drivers");
  let result = await collection.updateOne(
      { _id: new ObjectId(driverId) },
      { $set: updates }
  );
  res.send(result).status(200);
});

// DELETE a driver by ID
app.delete("/deleteDriver/:driverId", async (req, res) => {
  const driverId = req.params.driverId;

  let collection = await database.collection("drivers");
  let result = await collection.deleteOne({ _id: new ObjectId(driverId) });

  res.send(result).status(200);
});



