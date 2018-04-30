// JavaScript File
$(document).ready(function() {
    
    function callMovieAPIWithSearchTerm(searchTerm) {
        $.ajax({
            url: "https://www.omdbapi.com/?&i=tt3896198&apikey=3ee0cafe&s=" + searchTerm ,
            method: "GET",
            success: function(response) {

                    
                for(i=0; i < response.Search.length; i++){
                        
                    console.log(response.Search[i].Poster)
                    var url=response.Search[i].Poster;
                    appendImageToBody(url)
                    
                }
                
            },
        });
    }
    
    function appendImageToBody(srcURL) {
        if (srcURL !== "N/A"){
            $("#results").append(`
            <div>
            <button id="fav" class="glyphicon glyphicon-heart" ></button>
            <a href="#"><img class='gif' src=  ${srcURL}  ></a>
            </div>
        `);
            $("home").hide();
        }else if (srcURL === "N/A"){
            alert("ERROR");
        }
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
    });
    
    
});
    