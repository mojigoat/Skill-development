// Make a GET request to the Giphy API using the fetch function

function getRandomCheerGif() {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=Flh6UoZP0biXBVo5FHB92qRf9PxWsbL4&q=Cheer&limit=100&offset=0&rating=g&lang=en")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            const results = data.data; // Get the array of results from the response
            const randomIndex = Math.floor(Math.random() * results.length); // Generate a random index
            const randomRecord = results[randomIndex]; // Get the random record from the array

            var gif = randomRecord.images.original.webp;

            console.log(gif); // Log the random record to the console
            // document.getElementById("giphy").src = gif;
            document.getElementById("giphy").src = gif;
            // Save the results or do something else with them
        })
        .catch(error => {
            console.error(error);
        });
}

function getRandomWrongGif() {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=Flh6UoZP0biXBVo5FHB92qRf9PxWsbL4&q=disappointed&limit=100&offset=0&rating=g&lang=en")
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            const results = data.data; // Get the array of results from the response
            const randomIndex = Math.floor(Math.random() * results.length); // Generate a random index
            const randomRecord = results[randomIndex]; // Get the random record from the array

            var gif = randomRecord.images.original.webp;

            console.log(gif); // Log the random record to the console
            // document.getElementById("giphy").src = gif;
            document.getElementById("giphy").src = gif;
            // Save the results or do something else with them
        })
        .catch(error => {
            console.error(error);
        });
}