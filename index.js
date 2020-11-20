let datePosted = document.getElementById('datePosted');
let jobTypeHeading = document.getElementById('jobTypeHeading');
let categoryHeading = document.getElementById('categoryHeading');
let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');
let minusButtonForJobType = document.getElementById('minusButtonForJobType');
let plusButtonForJobType = document.getElementById('plusButtonForJobType');
let minusButtonForCategory = document.getElementById('minusButtonForCategory');
let plusButtonForCategory = document.getElementById('plusButtonForCategory');

let datePostedValue = 1;
function minimize() {
    if (datePostedValue == 1) {
        datePosted.style.display = 'none';
        minusButton.style.display = 'none';
        plusButton.style.display = 'block';
        datePostedValue = 0;
    }
    else {
        datePosted.style.display = 'block';
        plusButton.style.display = 'none';
        minusButton.style.display = 'block';
        datePostedValue = 1;
    }
}

let jobTypeValue = 1;
function minimizeJobType() {
    if (jobTypeValue == 1) {
        jobTypeHeading.style.display = 'none';
        minusButtonForJobType.style.display = 'none';
        plusButtonForJobType.style.display = 'block';
        jobTypeValue = 0;
    }
    else {
        jobTypeHeading.style.display = 'block';
        plusButtonForJobType.style.display = 'none';
        minusButtonForJobType.style.display = 'block';
        jobTypeValue = 1;
    }
}

let categoryValue = 1;
function minimizeCategory() {
    if (categoryValue == 1) {
        categoryHeading.style.display = 'none';
        minusButtonForCategory.style.display = 'none';
        plusButtonForCategory.style.display = 'block';
        categoryValue = 0;
    }
    else {
        categoryHeading.style.display = 'block';
        plusButtonForCategory.style.display = 'none';
        minusButtonForCategory.style.display = 'block';
        categoryValue = 1;
    }
}

