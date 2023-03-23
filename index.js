var rating_list = document.querySelectorAll(".rating");

for (var i=0; i<rating_list.length; i++) {
    rating_list[i].addEventListener("click", function(){
        for (var n=0; n<rating_list.length; n++) {
            rating_list[n].classList.remove("selected-rating");
        }
        this.classList.add("selected-rating");
        var rating = this.textContent;
        document.querySelector(".user-rating").textContent = rating
    })
}


document.querySelector(".submit").addEventListener("click", function(){
    document.querySelector(".rating-state").classList.add("hidden");
    document.querySelector(".thankyou-state").classList.remove("hidden");
})