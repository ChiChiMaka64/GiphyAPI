var newButton = $("#favorites", "<button>");
$(".top-favorites").on("click", "button", function() {
    // get text from button that you just clicked and save it to a variable.
    var searchWord=$(this).text()
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+ searchWord +'&api_key=9Pqpg72Hn0V2mHELBrXruk5iAK4OLles&limit=10' 
    fetch(queryURL)
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(err => {
    console.log(err);
  });
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
        $("body").append("<img src='" + response.data[0].images.original.url + "' />");
      });
})
function addButton(element) {
  return document.addButton(element)
$("#favorite-things-form").onkeyup("text","button", "submit")
}
   console.log("worked")


      