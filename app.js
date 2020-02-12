const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home.ejs");
});
app.get("/test", function (req, res) {
  res.render("test.ejs");
});
app.get("/admission", function (req, res) {
  res.render("admission.ejs", {
    status: 5
  });
});
app.get("/programs", function (req, res) {
  res.render("programs.ejs");
});
app.get("/about-us", (req, res) => {
  res.render("about.ejs");
});
app.post("/", function (req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dharshan0012@gmail.com",
      pass: "ilmmmSFFGH0011!"
    }
  });
  const mailOptions = {
    from: "dharshan0012@gmail.com",
    to: "dharshan0011@gmail.com",
    subject: "Sending Email using Node.js",
    html: "<h3>Name: " + req.body.name + "</h5>" +
      "<h3>Email: " + req.body.email + "</h5>" +
      "<h3>Mobile: " + req.body.mob + "</h5>" +
      "<h3>Age: " + req.body.age + "</h5>" +
      "<h3>Program: " + req.body.program + "</h3>"
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.render("admission", {
        status: 0
      });
    } else {
      console.log('Email sent: ' + info.messageId);
      res.render("admission", {
        status: 1
      });
    }
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening to port 3000");
});