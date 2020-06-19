const express = require("express");
const e = require("express");

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

<<<<<<< HEAD
app.get("/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.get("/reservationlength", (req, res) => {

    return reservations.length

})
=======
>>>>>>> 6876a0d5bed37307a2aea7a5b3f3be14673b8549

// app.post("/routes/reserve", function (req, res) {
//     const newReservation = req.body;
//     // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
//     console.log(newReservation);
//     if (reservations.length < 5) {
//         reservations.push(newReservation);
//     }
//     else {
//         waitlist.push(newReservation);
//     }
//     res.json(newReservation);
// });



<<<<<<< HEAD
//=======================for tables html

$.ajax({
    url: "http://localhost:3001/reservations",
    type: "GET"
})
    .then(response => {
        response.forEach(el => {
            const newID = el.customerID
            const newIndex = response.indexOf(el) + 1
            $("#currentRes")
        });
    })
=======




>>>>>>> 6876a0d5bed37307a2aea7a5b3f3be14673b8549

$.ajax({
    url: "http://localhost:3001/waitlist",
    type: "GET"
})
    .then(response => {
        response.forEach(el => {
            const newID = el.customerID
            const newIndex = response.indexOf(el) + 1
            $("#waitlist")
        });
    })
//========================for reserve html

< script type = "text/javascript" >
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        const newReservation = {
            customerName: $("#customerName").val().trim(),
            customerEmail: $("#customerEmail").val().trim(),
            customerID: $("#customerID").val().trim(),
            phoneNumber: $("#phoneNumber").val().trim()
        };

        $.ajax({
            url: "http://localhost:3001/reservationlength",
            type: "GET"
        })
        .then(response => {
            if (response < 5) {
                $.post("/reservations", newReservation)
                    .then(function (data) {
                        console.log("add.html", data);
                        alert("Adding reservation...");
                    });
            }

            else {
                $.post("/waitlist", newReservation)
                    .then(function (data) {
                        console.log("add.html", data);
                        alert("Adding to waitlist...");
                    });
            }
        })
</script >



app.listen(PORT, () =>
    console.log("App listening on PORT " + PORT)
);