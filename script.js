// XML-HTTP Request (XHR): If interaction has been done
// based on the API then it is called the XML-HTTP request. (to extract data from server)

// 4 Step Process

// Step 1: Create a XHR Object
var request = new XMLHttpRequest()


// Step 2: Initate a requst / Open a request
// Indicates the API your using to extract data
request.open("GET", "https://restcountries.com/v3.1/all")

// Step 3: Trigger a request
request.send()

// Step 4: If server response is successful
// Onload is an Event
// Event is used to perform a specific action/task
// here onload is used since the data has been loaded successfully
request.onload = function () {
    // Use JSON parser converts json string to JavaScript value or object
    var result = JSON.parse(request.response)
    console.log(result)
}