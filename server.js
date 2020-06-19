const express = require("express")

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = []
const waitlist = []

app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "home.html"))
    );

app.get("/routes/tables", (req, res) => 
    res.sendFile(path.join(__dirname, "tables.html"))
    );

app.get("/routes/reserve", (req, res) => 
    res.sendFile(path.join(__dirname, "reserve.html"))
    );


app.post("/routes/reserve", function(req, res) {
    const newReservation = req.body;
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    if (reservations.length <= 5){
        reservations.push(newReservation);
    }
    else {
        waitlist.push(newReservation);
    }
    res.json(newReservation);
    });












app.listen(PORT, () =>
    console.log("App listening on PORT " + PORT)
    );