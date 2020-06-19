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

app.get("/reservations", function(req, res) {
    return res.json(reservations);
    });

app.get("/waitlist", function(req, res) {
        return res.json(waitlist);
        });


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



//=======================

$.ajax({
    url: "http://localhost:3001/",
    type: "GET"
})
.then(response =>{
    response.forEach(el => {
        const newID = el.customerID
        const newIndex = response.indexOf(el)+1
        $("#currentRes")
    });
})

//========================for reserve html

<script type="text/javascript">
    $("#add-btn").on("click", function(event) {
      event.preventDefault();
      const newReservation = {
        customerName: $("#customerName").val().trim(),
        customerEmail: $("#customerEmail").val().trim(),
        customerID: $("#customerID").val().trim(),
        phoneNumber: $("#phoneNumber").val().trim()
      };

      // Question: What does this code do??
      $.post("/reservations", newReservation)
        .then(function(data) {
          console.log("add.html", data);
          alert("Adding character...");
        });
    });
  </script>






app.listen(PORT, () =>
    console.log("App listening on PORT " + PORT)
    );