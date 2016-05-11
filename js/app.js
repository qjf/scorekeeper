$(document).ready(function() {

    //Set initial score to 0 on page load
    var score = 0; // when page loaded, score should be 0

    //Increase score by 5
    $(document).on("click", "#increase-5", function() {
      //Step 1: add 5 to score variable
      //Step 2: Represent the new score on the UI
        score += 5; // score = score + 5 ; we want it to be called same name

        $("#score").html(score + " points");
    });

    $(document).on("click", "#decrease-5", function() {
      //Step 1: substract 5 to score variable
      //Step 2: Represent the new score on the UI
        score -= 5; // score = score + 5 ; we want it to be called same name

        $("#score").html(score + " points");
    });

    //Decrease score by 5, only when it is >= 0
    // $(document).on("click", "#decrease-5", function() {
    //     if (score - 5 >= 0) {
    //         score -= 5;
    //
    //         $("#score").html(score + " Points");
    //     } else {
    //         score = 0;
    //
    //         $("#score").html(score + " Points");
    //     }
    // });

    //Submit custom score and make sure it's a number
    $(document).on("click", "#submit-custom-score", function() {
        var customScore = parseInt($("#custom-score").val());//parseInt takes value to integer retrieve a value of a form
    // score doesn't go negative
    //     if (customScore >= 0) {
    //         score = customScore;
    //
    //         $("#score").html(score + " Points");
    //     }
    //
    //     $("#custom-score").val("");
    // });
        score = customScore;
        $("#score").html(score + " Points");
      });
});
