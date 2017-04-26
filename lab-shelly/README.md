![cf](https://i.imgur.com/7v5ASc8.png) lab-07-cowsay-http-server
======

# Cowsay - What does the cow say?

# Use Cowsay to make GET and POST requests and have it say what you want.  

# Directions
* Clone this repository
* Download dependencies
* Run server
```
node server.js
```

## Server Endpoints
### Users can use GET and POST requests. For all request to `/` the server should respond with the following:
 * a header containing `Content-Type: text/plain`
 * a status code of **200**
 * a response with the string "hello world"

### /cowsay
#### GET REQUEST    
* the query string should have the key value `text=<message>`
* the response header should include `Content-Type: text/plain`
* if the query `text=message` is set, respond with:  
 * a status code of 200
 * a body including the value returned from `cowsay.say({text: <querystring text>})`
* if the query `text=message` is **not** set, respond with:  
 * status code = 400
 * a body including the value returned from `cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'})`

#### POST REQUEST   
* the response header should include `Content-Type: text/plain`
* if the json `{text: message}` is set in the body, respond with:  
 * a status code of 200
 * a body including the value returned from `cowsay.say({text: <querystring text>})`
* if the json`{text: message}`is **not** set in the body, respond with:  
 * status code = 400
 * a body including the value returned from `cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'})`
