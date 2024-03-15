$("form").on("submit", function(e){
    e.preventDefault()
    const movieTitle = $("#movie-title").val()
    const rating = $("#rating").val()
    $("ul").append(`<li class="list-item"><p>${movieTitle} ${rating}</p><button class="remove-btn">x</button></li>`)
    this.reset()
})

$("ul").on("click", function(e) {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
    }
})