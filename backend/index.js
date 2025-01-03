const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require("stripe");
const connectDb = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
// MONGODB CONNACTION
mongoose.set("strictQuery", false);

connectDb(process.env.MONGODB_URL)

// mongoose
//   .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to Database"))
//   .catch((err) => console.error("Database connection error:", err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// model
const userModel = mongoose.model("user", userSchema);

// API
app.get("/", (req, res) => {
  res.send("Server is running");
});
//sign up
app.post("/signup", async (req, res) => {
  const { email } = req.body;
  
  try {
    const result = await userModel.findOne({ email: email });

    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = new userModel(req.body);
      await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred during sign-up");
  }
});
//api login
app.post("/login", async (req, res) => {
  const { email } = req.body;
  
  try {
    const result = await userModel.findOne({ email: email });

    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      res.send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred during login");
  }
});


//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);

//save product in data
//api
app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload successfully" });
});

// get product
app.get("/product", async (req, res) => {
  try {
    const data = await productModel.find({});
    console.log("Data fetched from database:", data);

    // Map the products to cleanly handle image data if it's base64
    const products = data.map((product) => {
      return {
        _id: product._id,
        name: product.name,
        category: product.category,
        image: product.image, // Assuming this contains base64 image data
        price: product.price,
        description: product.description,
      };
    });

    res.json(products); // Send data as a JSON response
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
});


/*****payment getWay */
// console.log(process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1NBY3pSIdZYVEHlOjpjx9hLn" }],

      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              // images : [item.image]
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };

    const session = await stripe.checkout.sessions.create(params);
    // console.log(session)
    res.status(200).json(session.id);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

app.listen(PORT, () => console.log("Server is running at port: " + PORT));
// om12345
