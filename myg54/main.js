"use strict";
const routeMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us at:</h1>",
  "/about": "<h1>Learn About Us</h1>",
  "/hello": "<h1>Send Us an Email </h1>",
  "/error": "<h1>The page you wanted doesn't exist</h1>",
};
const http = require("http");
const httpStatus = require("http-status-codes");
const hostname = "127.0.0.1";
const port = 3000;
const app = http.createServer(); // server as an obj

const getJSONString = function (obj) {
  // prettyprint obj
  return JSON.stringify(obj, null, 4);
};

app.on("request", function (req, res) {
  // eventhandler for "request"
  let body = [];
  req.on("data", function (bodyData) {
    // eventhandling for data reception
    body.push(bodyData); // bodyData is an object
  });
  req.on("end", function () {
    // eventhandling for end-of-data
    body = Buffer.concat(body).toString();
    console.log("Log: Request Body Contents: " + body);
  });

  console.log("Log: Method: " + req.method);
  console.log("Log: URL: " + getJSONString(req.url));
  console.log("Log: Headers:\n" + getJSONString(req.headers));
  // prep response header
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html; charset=utf-8",
  });

  let responseMsg;
  if (routeMap[req.url]) {
    // look for route
    responseMsg = routeMap[req.url]; // found, use it
  } else {
    responseMsg = "<h1>Find Wally!</h1>"; // else show something else
  }
  responseMsg += "<p><kbd>myg54</kbd> hid him</p>";
  res.write(responseMsg); // respond
  res.end(); // sends response http
});

app.listen(port, hostname, function () {
  console.log(`Server running, and listening at http://${hostname}:${port}/`);
});
