const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: "http://localhost:3002"
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./models/db.connect");
require("./routes/student.route")(app);
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch((err) => {
        console.log(err);
        console.log("Cannot connect to the database");
        process.exit();
    })

app.get("/", (req, res) => {
    res.json({ message: "Welcome to KINARA Assessment" });
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

