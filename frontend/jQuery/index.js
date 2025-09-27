$("button").on("click", function() {
    $("h1").slideUp().slideDown();
    setTimeout(function() {
        $("h1").css("color", "purple");
    }, 300)
})