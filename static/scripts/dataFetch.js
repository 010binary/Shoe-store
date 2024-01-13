const image = document.querySelectorAll('.shopImage');
const discountsPercentage = document.querySelectorAll('.discount')
const shoeName = document.querySelectorAll('.shoe__name')
const originalprices = document.querySelectorAll('.slash__price')
const prices = document.querySelectorAll('.mainPrices')
const ratings = document.querySelectorAll('.ratings')
const stars = document.createElement("span")
const emptystars = stars.innerHTML = '<img src="./image/SVG_images/emptyStar.svg" alt="rating" />';
const likedStars = stars.innerHTML = '<img src="./image/SVG_images/star.svg" alt="rating" />'
stars.setAttribute('class', 'stars')
const numReview = document.querySelectorAll('.buys')


// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("shoes_data.json");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let jsonData = await response.json();
        jsonData = shuffleArray(jsonData);

        for (let index = 0; index < jsonData.length; index++) {
            const {
                name,
                Discountprice,
                originalprice,
                discount_percentage,
                liked_stars,
                reviews,
                PATH
            } = jsonData[index];

            shoeName[index].textContent = name;
            discountsPercentage[index].textContent = `-${discount_percentage}%`;
            originalprices[index].textContent = `$${originalprice}`;
            prices[index].textContent = `$${Discountprice}`;
            image[index].src = PATH;
            numReview[index].textContent = `(${reviews})`;

            if (liked_stars < 5) {
                let numemptyStar = 5 - liked_stars;
                let starsHTML = '';
                for (let i = 0; i < liked_stars; i++) {
                    starsHTML += '<img src="{{ url_for(\'static\',filename=\'image\/SVG_images\/star.svg\') }}" alt="rating" />';
                }
                for (let i = 0; i < numemptyStar; i++) {
                    starsHTML += '<img src="{{ url_for(\'static\',filename=\'image\/SVG_images\/emptyStar.svg\') }}" alt="rating" />';
                }
                ratings[index].innerHTML = starsHTML;
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
