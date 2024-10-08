// import express from 'express';
// import mongoose from 'mongoose';
// import Referral from './models/Referrals.js'
// import cors from 'cors';

// import EventEmitter from 'events';
// const emitter = new EventEmitter();

// // Increase the limit to 20 listeners
// emitter.setMaxListeners(20);

// const dbURI = "mongodb+srv://winnerisaac:winner12345@mealcoin.gbd0t.mongodb.net/mealcoin?retryWrites=true&w=majority&appName=Mealcoin";

// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect(dbURI).then((result) => 
//     app.listen(PORT, () => 
//         console.log(`Server running on port ${PORT}`)
//       )
//       ) .catch((err) => console.log(err))


// const app = express();
// app.use(express.json());
// app.use(cors());


// Import the express module, which is a popular Node.js web framework for building web applications
import express from 'express';

// Import the mongoose module, which is a MongoDB object modeling tool designed to work in an asynchronous environment
import mongoose from 'mongoose';

// Import the Referral model from the Referrals.js file, which is a Mongoose model representing a referral
import Referral from './models/Referrals.js'

// Import the cors module, which is a middleware that enables CORS (Cross-Origin Resource Sharing) in Express.js applications
import cors from 'cors';

// Import the EventEmitter class from the events module, which is a built-in Node.js module for creating and managing events
import EventEmitter from 'events';

// Create a new instance of the EventEmitter class
const emitter = new EventEmitter();

// Increase the limit to 20 listeners for the emitter
emitter.setMaxListeners(20);

// Define the connection string for the MongoDB database
const dbURI = "mongodb+srv://winnerisaac:winner12345@mealcoin.gbd0t.mongodb.net/mealcoin?retryWrites=true&w=majority&appName=Mealcoin";

// Define the port number for the server, defaulting to 5000 if not set in the environment
const PORT = process.env.PORT || 5000;

// Connect to the MongoDB database using the mongoose.connect method, which returns a promise
mongoose.connect(dbURI).then((result) => 
    // If the connection is successful, start the server listening on the specified port
    app.listen(PORT, () => 
        // Log a message to the console indicating that the server is running
        console.log(`Server running on port ${PORT}`)
      )
      ) 
      // If the connection fails, log the error to the console
      .catch((err) => console.log(err))

// Create a new instance of the express application
const app = express();

// Enable JSON parsing for incoming requests
app.use(express.json());

// Enable CORS for the application
app.use(cors());

// Define an API endpoint to generate a referral link
app.post('/api/generate-referral', async (req, res) => {
  // Extract the userId from the request body
  const { userId } = req.body;

  // Log the request body to the console for debugging purposes
  // console.log(req.body);

  // Find an existing referral for the user
  let existingReferral = await Referral.findOne({ userId });

  // If an existing referral is found, return the referral code in the response
  if (existingReferral) {
    return res.json({ referralCode: existingReferral.referralCode });
  }


  // Generate a new referral code using the generateReferralCode function
  const referralCode = generateReferralCode(userId);

  // Create a new Referral document with the user ID and referral code
  const newReferral = new Referral({ userId, referralCode });

  // Save the new referral to the database
  await newReferral.save();

  // Return the referral code in the response
  res.json({ referralCode });
});

// Define a function to generate a referral code based on the user ID
const generateReferralCode = (userId) => {

  const userIdtoString = userId.toString();

  const randomIndex = Math.floor(Math.random() * (userIdtoString.length - 5))

   // Extract 6 random characters from the userId
   const referralId = userIdtoString.substring(randomIndex, randomIndex + 6);
  // Return a string in the format "`meal-<first 6 random characters of user ID>"
  return `meal-${referralId}`;
};

// Define an API endpoint to record a referral
app.post('/api/record-referral', async (req, res) => {
  // Extract the referral code and user ID from the request body
  const { referralCode, userId } = req.body;

  // Find the referrer's document based on the referral code
  const referrer = await Referral.findOne({ referralCode });

  // If the referrer is not found, return an error response
  if (!referrer) {
    return res.status(404).json({ error: 'Invalid referral code' });
  }

  // Create a new Referral document for the referred user
  const newReferral = new Referral({ userId, referredBy: referrer.userId });

  // Save the new referral to the database
  await newReferral.save();

  // Return a success message in the response
  res.json({ message: 'Referral recorded' });
});

// Define an API endpoint to get referrals for a user
app.get('/api/get-referrals/:userId', async (req, res) => {
  // Extract the user ID from the URL parameter
  const { userId } = req.params;

  // Find all referrals where the user is the referrer
  const referrals = await Referral.find({ referredBy: userId });

  // Return the referrals in the response
  res.json(referrals);
});