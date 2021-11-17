By inputting data in all four input fields within the form, and submitting, the log outputs as following:

Server running, and listening at http://127.0.0.1:3000/
Log: Method: POST
Log: URL: "/"
Log: Headers:
{
    "host": "localhost:3000",
    "connection": "keep-alive",
    "content-length": "86",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "origin": "null",
    "upgrade-insecure-requests": "1",
    "dnt": "1",
    "content-type": "application/x-www-form-urlencoded",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-site": "cross-site",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,da-DK;q=0.8,da;q=0.7"
}
Log: Request Body Contents: firstName=Kenneth&lastName=Mortensen&email=kenneth%40kennt.dk&password=1234kenneth5678

At line 4, we see that the method of the form is POST, which appends the input data to the http body thats generated upon submit.

At line 5, we see that the URL has no route and will therefor send us back to our localhost

At line 28, we can see the data from submission has been appended to the http body.
Here it's hidden for the users and can therefor handle sensitive data, as its not displayed in the URL or to anybody, but would normally be send to a database and stored there.

The page must be started with the FILE protocol, because the localhost page isn't set to render the index.html file, but rather the main.js,
which will render a response message when the response calls for res.end(). This means that the http page response only contains some text, and not the formular.