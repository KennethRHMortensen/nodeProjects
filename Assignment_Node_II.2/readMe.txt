By inputting data in all four input fields within the form, and submitting, the log outputs as following:

Server running, and listening at http://127.0.0.1:3000/
Log: Method: GET
Log: URL: "/?firstName=Kenneth&lastName=Mortensen&email=kenneth%40kennt.dk&password=1234kenneth5678"
Log: Headers:
{
    "host": "localhost:3000",
    "connection": "keep-alive",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "upgrade-insecure-requests": "1",
    "dnt": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-site": "cross-site",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,da-DK;q=0.8,da;q=0.7"
}
Log: Request Body Contents: 

At line 4, we see that the method of the form is GET, meaning it retrieves the formular with inputs upon submit and displays it

At line 5, we see that the URL has added a query string containing all the inputs given in the formular, which happens because the GET method appends the form data into the URL in name/value pairs.
The benefits of GET is the ability to bookmark results, however its not to be used regarding sensitive data as it will be displayed in the URL.

The page must be started with the FILE protocol, because the localhost page isn't set to render the index.html file, but rather the main.js,
which will render a response message when the response calls for res.end(). This means that the http page response only contains some text, and not the formular.

It is true that it is possible to request data with the GET method. However, this data will not be submitted within the http body, but in the head, hence it appends the data to the URL query string.
Therefor it is not used when it comes to submitting sensitive data, as the GET method displays the data, and has a limitation to 3000 characters.
The POST method has no limitations, and will append data to the http body, which is why this is most commonly used as it is able to parse into databases.