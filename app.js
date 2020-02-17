require('dotenv').config()
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
app.get("/sitemap", (req, res) => {
  res.sendFile(__dirname + "/sitemap.xml");
});
app.post("/", function (req, res) {
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "dharshan0012@gmail.com",
  //     pass: process.env.GPASS
  //   }
  // });
  // const mailOptions = {
  //   from: "dharshan0012@gmail.com",
  //   to: "dharshan0011@gmail.com",
  //   subject: "New user details",
  //   html: "<h3>Name: " + req.body.name + "</h5>" +
  //     "<h3>Email: " + req.body.email + "</h5>" +
  //     "<h3>Mobile: " + req.body.mob + "</h5>" +
  //     "<h3>Age: " + req.body.age + "</h5>" +
  //     "<h3>Program: " + req.body.program + "</h3>"
  // };
  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //     res.render("admission", {
  //       status: 0
  //     });
  //   } else {
  //     console.log('Email sent: ' + info.messageId);
  //     res.render("admission", {
  //       status: 1
  //     });
  //   }
  // });
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    }
  });

  transporter.sendMail({
    from: process.env.GMAIL_FROM,
    to: process.env.GMAIL_TO,
    subject: "Tiny Land Admission form data",
    html: "<h1>Name: " + req.body.name + "</h1>" +
      "<h1>Email: " + req.body.email + "</h1>" +
      "<h1>Mobile: " + req.body.mob + "</h1>" +
      "<h1>Age: " + req.body.age + "</h1>" +
      "<h1>Program: " + req.body.program + "</h1>",
    auth: {
      user: process.env.GMAIL_FROM,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
      expires: 1484314697598
    }
  });
  res.render("admission.ejs", {
    status: 1
  });


});

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening to port 3000");
});