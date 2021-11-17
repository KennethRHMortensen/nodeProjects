The output of the terminal when running npm test, and submitting another url, gives the following log:

Log: Server started on http://localhost:3000/
2021-10-16T13:32:38 GET /test.html?name=Niels&position=Lecturer&height=183 ref: undefined
Log: No handler found for route /test.html?name=Niels&position=Lecturer&height=183.

The reason no content is found is that no route is defined towards the url or the query string.

By editing the url or the query string we see the following:

Log: No handler found for route /info.html?name=Kenneth&position=Student&height=171.
2021-10-16T13:37:23 GET /favicon.ico ref: http://localhost:3000/info.html?name=Kenneth&position=Student&height=171

Same thing goes here. There's no route for this URL, therefor no content to get.