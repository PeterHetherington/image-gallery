// get thumbnail div
const thumbnail = document.getElementById('thumbnail-container');

// get display div
const display = document.getElementById('display');

// keep track of current image being displayed
let currentImage = 0;

// keep track if thumbnail is displayed
let displayShow = true; 

// make array of images
let images = [
    {
        src: 'images/night/car.WebP 2000w, images/night/car-1000px.jpg 1000w, images/night/car-500px.jpg 500w, images/night/car-250px.jpg 250w',
        alt: 'traffic on a night in Japan, lit by neon lights',
        tn: 'images/night/car-250px.jpg'
    },
    {
        src: 'images/night/flower.WebP 2000w, images/night/flower-1000px.jpg 1000w, images/night/flower-500px.jpg 500w, images/night/flower-250px.jpg 250w',
        alt: 'Sakura flowers arching over a river',
        tn: 'images/night/flower-250px.jpg'
    },
    {
        src: 'images/night/side-street.WebP 2000w, images/night/side-street-1000px.jpg 1000w, images/night/side-street-500px.jpg 500w, images/night/side-street-250px.jpg 250w',
        alt: 'busy side street in Japan',
        tn: 'images/night/side-street-250px.jpg'
    },
    {
        src: 'images/night/side-street-red.WebP 2000w, images/night/side-street-red-1000px.jpg 1000w, images/night/side-street-red-500px.jpg 500w, images/night/side-street-red-250px.jpg 250w',
        alt: 'blurred side street in japan, focused on a red lantern',
        tn: 'images/night/side-street-red-250px.jpg'
    },
    {
        src: 'images/night/umbrella.WebP 4000w, images/night/umbrella-2000px.jpg 2000w, images/night/umbrella-1000px.jpg 1000w, images/night/umbrella-500px.jpg 500w, images/night/umbrella-250px.jpg 250w',
        alt: 'busy street on a rainy evening in japan',
        tn: 'images/night/umbrella-250px.jpg'
    },
    {
        src: 'images/night/road-close.WebP 2000w, images/night/road-close-1000px.jpg 1000w, images/night/road-close-500px.jpg 500w, images/night/road-close-250px.jpg 250w',
        alt: 'night time road view in japan',
        tn: 'images/night/road-close-250px.jpg'
    },
    {
        src: 'images/night/road.WebP 2000w, images/night/road-1000px.jpg 1000w, images/night/road-500px.jpg 500w, images/night/road-250px.jpg 250w',
        alt: 'night time street overview in japan',
        tn: 'images/night/road-250px.jpg'
    },
]

// keep track of images array length
const length = images.length;

// create thumbnail content
function createThumbnail() {
    images.forEach(function(image, index) {
        const img = document.createElement('img');
        img.src = image.tn;
        img.loading = 'lazy';
        img.alt = image.alt;
        img.className = 'thumbnail-image';
        // add click event to images
        img.addEventListener("click", function(event) {
            // call currentDisplayImage function
            createDisplayImage(image);
            // update current image tracker
            currentImage = index;
        });
        thumbnail.appendChild(img);
    });
};

// call createThumbnail function
createThumbnail();

// create display content
function createDisplayImage(image) {
    // clear current image 
    display.innerHTML = `<button id="left" class="left arrow-left" aria-label="go to previous image" onclick="prev()"></button>
        <button id="right" class="right arrow-right" aria-label="go to next image" onclick="next()"></button>
        <button id="toggle" class="toggle" aria-label="toggle thumbnails" onclick="toggle()" aria-controls="thumbnail-container" aria-Expanded="true"></button>`
    const displayImage = document.createElement('img');
    displayImage.srcset = image.src;
    displayImage.alt = image.alt;
    displayImage.className = 'displayImage';
    displayImage.id = 'displayImage';
    display.appendChild(displayImage);
};

// call createDisplayImage for base case
createDisplayImage(images[0]);

// display prev image
function prev() {
    // check if first image
    if (currentImage > 0){
        currentImage -= 1;
        createDisplayImage(images[currentImage]);
    } else { // if at first image, reset counter to last image 
        currentImage = length - 1;
        createDisplayImage(images[currentImage]);
    };
}

// display next image
function next() {
    // check if last image
    if (currentImage < length - 1){
        currentImage += 1;
        createDisplayImage(images[currentImage]);   
    } else { // if at lase image, reset counter
        currentImage = 0;
        createDisplayImage(images[currentImage]);
    };
}

// check for left & right arrow keys being pressed
document.addEventListener('keydown', function(event) {
    if (event.key == 'ArrowRight'){
        next();
    };
    if (event.key == 'ArrowLeft'){
        prev()
    };
});

// get toggle button
const toggleBtn = document.getElementById('toggle')

// create function to toggle thumbnail display
// give user control over cotent being displayed for a better view of images 
function toggle() {
    // check whether thumbnail is showing
    if (displayShow == true) {
        // hide thumbnail
        thumbnail.style.display = "none";
        displayShow = false;
        // change css class to "animate" button
        toggleBtn.className = "toggle-onclick";
        // update ariaExpanded attribute
        toggleBtn.ariaExpanded = "false";
    } else {
        // show thumbanil
        thumbnail.style.display = "grid";
        displayShow = true;
        // change css class to "animate" button
        toggleBtn.className = "toggle";
        // update ariaExpanded attribute
        toggleBtn.ariaExpanded = "true";
    }
};