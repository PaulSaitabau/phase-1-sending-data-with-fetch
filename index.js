// Add your code here
// This function sends user data (name and email) to a server and displays the server's response on the webpage.
function submitData(name, email) {
    // Step 1: Send a POST request to the server with the user's name and email.
    return fetch('http://localhost:3000/users', {
       method: "POST", // Use the POST method to send data.
       headers: {
         "Content-Type": "application/json", // The data is in JSON format.
         "Accept": "application/json" // We expect the response to be in JSON format.
       },
       body: JSON.stringify({ // Convert the data into a JSON string.
         name, // The user's name.
         email // The user's email.
       })
    })
    // Step 2: Wait for the server's response.
    .then(function (response) {
       return response.json(); 
    })
    // Step 3: Display the user's ID on the webpage.
    .then(function (object) {
       document.body.innerHTML = object["id"];
    })
    // Step 4: Handle any errors that occur.
    .catch(function (error) {
       document.body.innerHTML = error.message; 
    });
   }
   