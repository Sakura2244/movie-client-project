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
            <button class="fav glyphicon glyphicon-heart" data-src=${srcURL}></button>
            <a href="#"><img class='gif' src=${srcURL}></a>
            </div>
        `);
            $("#home").hide();
            
            
            
        }else {
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
    
    $("body").on('click', '.fav', function(){
        var src = $(this).data('src');
        //$(src).clone().appendTo($("#favorite"));
        // APPEND SRC TO #FAVORITES
        $("#favorite").append("<img src=" + src + ">");
        console.log(src);
    });
    
});
    