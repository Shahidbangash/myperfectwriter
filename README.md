# My Perfect Writer Backend

this doc describe documentation of API usage for [My Perfect Writer](https://www.myperfectwriter.net/).

## How to call this API EndsPoints using Javascript

**I will write an example code to use this API using [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) **

```javascript
// Here is the sample code to use API end points
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

```
## How to use API END POINTS

1. Go to [reqbin.com](https://reqbin.com/). (ReqBin is an online API testing tool for REST and SOAP APIs.).
2. Enter API end points in URL section of website.
3. Specify request type i-e POST,GET.
4. Click on send button.
5. Now Response will be shown at right side.
6. To send post request body, click on content tab and enter a JSON object as body.A common JSON object is given below to undersand the json format.

### Request A Price

To request a price , We need following attributes to get a successful response 
Here is the list of required Attributes

1. email

2. phone

3. academicLevel

4. date

5. time

6. numberOfPages

```http
https://my-perfect-writer.herokuapp.com/calculate-price
```

```javascript
METHOD = POST
```

```javascript
// request data 
// Note this object must be presented in body to request 
{
    "date":"9-26-2021", 
    "time":"20:00", 
    "email":"shahid@gmail.com", 
    "phone":12312321, 
    "documentType":"Physics", 
    "academicLevel": "college-undergraduate",
    "noOfPages":3
}
// On Success , you will receive object with status code 200 or 201 with object like this 

{
  "message": String,
  "price": 48.900000000000006,
  "hoursDifference": 32,
  "sucess":true,
}

```

```http
POST = https://my-perfect-writer.herokuapp.com/create-order
```

```javascript
// Request object data 
{
    "date":"9-26-2021", 
    "time":"20:00", 
    "email":"shahid@gmail.com", 
    "phone":12312321, 
    "documentType":"Physics", 
    "academicLevel": "college-undergraduate",
    "noOfPages":3
}

// Now this will return a response

{
  "message": "Here is the price for requested subject!",
  "price": 54,
  "success": true,
  "hoursDifference": 19
}

```
