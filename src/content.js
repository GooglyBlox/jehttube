let videos = [];
let currentIndex = 0;
let processedImages = new Set();

chrome.runtime.sendMessage({action: "getVideos"}, function(response) {
    console.log("Response received from background script:", response);  // Debug log statement

    if (response.error) {
        console.error('Failed to get videos:', response.error);
    } else {
        videos = response.videos;
        shuffleArray(videos);  // Shuffle the videos
        console.log('Received videos:', videos);  // Debug log statement
        console.log('Number of videos:', videos.length);  // Debug log statement

        if (videos.length > 0) { // Check if videos array is populated
            console.log('Video at index 0:', videos[0]);  // Debug log statement
        }

        getVideos();

        // Watch for changes in the document and update thumbnails accordingly
        const observer = new MutationObserver(getVideos);
        observer.observe(document, { childList: true, subtree: true });
    }
});

function getVideos() {
    changeThumbnails();
}

function changeThumbnails() {
    // Find all thumbnail images and links on the page
    const images = Array.from(document.querySelectorAll('img.yt-core-image--loaded'));
    const links = Array.from(document.querySelectorAll('a.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail'));

    // Filter out images and links that have already been processed
    const newImages = images.filter(image => !processedImages.has(image));
    const newLinks = links.filter((link, index) => newImages[index] !== undefined);

    // Iterate over the images and links and change them
    for (let i = 0; i < newImages.length; i++) {
        if (currentIndex >= videos.length) currentIndex = 0;  // loop back to the start if we've used all our videos

        const video = videos[currentIndex];
        console.log(`Video at index ${currentIndex}:`, video);  // Debug log statement

        // Check if video object has the required properties
        if (video && video.thumbnail && video.id) {
            newImages[i].src = video.thumbnail;
            newLinks[i].href = '/watch?v=' + video.id;
            currentIndex++;
        } else {
            console.error(`Video at index ${currentIndex} does not have the required properties.`);
        }
        // Add the image to the set of processed images
        processedImages.add(newImages[i]);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}