const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");
const contactRoutes = require("./routes/contact.js");

const app = express();
const PORT = process.env.PORT || 3001; // Ensure PORT is declared here

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/booking", bookingRoutes);
app.use("/users", userRoutes);
app.use("/api/contact", contactRoutes);

// MongoDB Setup
mongoose
    .connect(process.env.MONGO_URL, {
        dbName: "Code_Crew_Home_Rentals",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        );
    })
    .catch((err) => console.error(`Database connection failed: ${err}`));
