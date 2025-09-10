// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/f25/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/f25/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/f25/ice/pizza

let reviewNum = 0;
const REVIEWS = [
    "A burst of warmth and flavor in every spoonful; simple yet irresistible!",
    "The perfect blend of spice and comfort, an easy go-to chili recipe.",
    "Loved the hearty texture and rich taste - a new family favorite!",
    "Quick, flavorful, and satisfying - this chili hits all the right notes!"
];

function displayReview() {
    alert(REVIEWS[reviewNum]);
    reviewNum = (reviewNum + 1) % REVIEWS.length;
}

// TODO Using JavaScript, update the "N" in "Easy N-Ingredient Chili"
//      to be the number of ingredients in the chili.

let title = document.getElementById("recipe-title").innerText;
let len = document.getElementById("ingredients").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
document.getElementById("recipe-title").innerText = `Easy ${len}-Ingredient Chili`

