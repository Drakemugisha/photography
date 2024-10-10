const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

const filterCards = e => {

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {

        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));


const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", ()=>{
    loader.style.display = "none";
})

// download image

document.querySelectorAll('.downloadButton').forEach(button => {
    const img = button.parentNode.querySelector('img'); // get the corresponding image
    button.addEventListener("click", () => {
        const link = document.createElement('a');
        link.href = img.src; // use the src of the corresponding image
        link.download = 'captureimage.jpg';
        link.click();
    });
});
// download video
document.querySelectorAll('.downloadButton').forEach(button => {
    const img = button.parentNode.querySelector('video'); // get the corresponding image
    button.addEventListener("click", () => {
        const link = document.createElement('a');
        link.href = img.src; // use the src of the corresponding image
        link.download = 'captureimage.jpg';
        link.click();
    });
});




