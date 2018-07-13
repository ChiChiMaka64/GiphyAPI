//save for later to add to the top favorites div in html lines 3-8

//var topics = ["Glee", "Community", "SNL", "Brooklyn Nine-Nine", "DuckTales 1987", "DuckTales 2017", "Darkwing Duck", "High School Musical",
  //  "High School Musical 2", "High School Musical 3: Senior Year", "The Office", "Parks and Recreation", "Lizzie McGuire", "Greek", "The Simpsons",
   // "Female Drummers", "Drumming", "Backstreet Boys", "NSYNC", "98 Degrees", "Britney Spears", "Lady Gaga", "Katy Perry", "Meghan Trainor", "DNCE", 
   // "Even Stevens",
   // "Disneyland", "Walt Disney World", "Hamilton", "Grease", "Hairspray", "Prince", "Michael Jackson", "Janet Jackson", "Spice Girls", "Fifth Harmony",
   // "Animaniacs", "Pinky and the Brain"]

var newButton = $("#favorites", "<button>");
//newButton.attr("data-name", topics[i]);
//newButton.text(topics[i]);
//$(".buttons").append(newButton);
$(".top-favorites").on("click", "button", function() {
    // get text from button that you just clicked and save it to a variable.
    var searchWord=$(this).text()
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=9Pqpg72Hn0V2mHELBrXruk5iAK4OLles&q=' + searchWord
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
        $("body").append("<img src='" + response.data[0].images.original.url + "' />");
      });
})
function getGiphyData() {
   console.log("worked")
//    // var searchTerm = document.querySelector("#favorites-input").value
//     //var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=9Pqpg72Hn0V2mHELBrXruk5iAK4OLles&q=' + searchTerm
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//       .then(function(response) {
//         console.log(response);
//         $("body").append("<img src='" + response.data[0].images.original.url + "' />");
//       });
      
}