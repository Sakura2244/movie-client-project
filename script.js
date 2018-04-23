// JavaScript File
$(document).ready(function() {
    
    function callMovieAPIWithSearchTerm(searchTerm) {
    
        var i = Math.floor(Math.random() * (10 + 1));
        $.ajax({
            url: "http://www.omdbapi.com/?&i=tt3896198&apikey=3ee0cafe&s=" + searchTerm ,
            method: "GET",
            success: function(response) {
                var url = response.data[i].images.original.url;
                appendImageToBody(url);
            },
        });
    }
    
    function appendImageToBody(srcURL) {
        $("#results").append(`<a href="#"><img class='gif' src=  ${srcURL}  ></a>`);
        $("home").hide();
    }
    var searchTerm;
    $("input").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#search").click();
        }
    });
    $("#search").click(function() {
        searchTerm = $("input").val();
        callMovieAPIWithSearchTerm(searchTerm);
        $("input").val("");
    });
    
});
    