let places = document.querySelector('.places');
let seeMore = document.querySelector(".see-more");
let morePlaces = document.querySelector(".see-more-places");
let seeLess = document.querySelector(".see-less");

seeMore.addEventListener("click", function() {
      morePlaces.style.display = 'block';
      places.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Kandivali West"
      places.lastElementChild.firstElementChild.lastElementChild.innerHTML = "665 Places"
      places.lastElementChild.lastElementChild.classList.remove("fa-angle-down");
      places.lastElementChild.lastElementChild.classList.add("fa-angle-right");
});

seeLess.addEventListener("click", function() {
    if (morePlaces.style.display === 'block') {
        morePlaces.style.display = 'none';
        places.lastElementChild.lastElementChild.classList.add("fa-angle-down");
        places.lastElementChild.lastElementChild.classList.remove("fa-angle-right");
        places.lastElementChild.firstElementChild.firstElementChild.innerHTML = ""
        places.lastElementChild.firstElementChild.lastElementChild.innerHTML = "See More"
      }
});


let contentElements = document.querySelectorAll('.content-1');
let content_1_img = document.querySelectorAll("#content-1-img");

// Add click event listeners to each content element
contentElements.forEach(function(contentElement) {
  contentElement.addEventListener('click', function() {
    // Toggle the visibility of the next sibling element with class answer-1
    let answer = this.nextElementSibling;
    let content_1_img = this.querySelector("i")
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      content_1_img.classList.remove("fa-angle-up");
      content_1_img.classList.add("fa-angle-down");
    } else {
        answer.style.display = 'block';
        content_1_img.classList.add("fa-angle-up");
        content_1_img.classList.remove("fa-angle-down");
    }
  });
});