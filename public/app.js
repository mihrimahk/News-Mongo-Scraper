// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'><a href='https://www.cbc.ca" + data[i].link + "' target='_blank'>" + data[i].title + "</a> (" + data[i].metadata + ")<br/>");
    $("#articles").append("<img src='" + data[i].image + "' width='200'></p>");
    $("#articles").append("<p data-id='" + data[i]._id + "'>comment</p>");

  }
});


// Whenever someone clicks a p tag
$(document).on("click", "p", function() {
  // Empty the notes from the note section
  $("#notes").empty();
  $("#notes").show();
 
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");


  $("#notes").append("<h2>Comments:</h2>");

  $.getJSON("/comments/"  + thisId, function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#notes").append(data[i].name + " (" + data[i].comment + ")<br/>");
    }
  });
 
  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      console.log(data);
      // The title of the article
      $("#notes").append("<h2>" + data.title + "</h2>");
      // An input to enter a new title
      $("#notes").append("<input id='nameinput' name='name' >");
      // A textarea to add a new note body
      $("#notes").append("<textarea id='commentinput' name='comment'></textarea>");
      $("#notes").append("<button data-id='" + data._id + "' id='addcomment'>Add Comment</button>");

      // If there's a note in the article

    });
});

// When you click the savenote button
$(document).on("click", "#addcomment", function() {
  var thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      name: $("#nameinput").val(),
      comment: $("#commentinput").val(),
      article: thisId
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#nameinput").val("");
  $("#commentinput").val("");
  $("#notes").hide();

});