let apiKey = 'PUT KEY HERE';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getVideos") {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3Lmytq3AlvcJ-34If_jDyw&maxResults=172&order=date&type=video&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                let videos = data.items.map(item => {
                    return {
                        thumbnail: item.snippet.thumbnails.high.url,  // Changed from default to high
                        id: item.id.videoId
                    };
                });

                console.log('Fetched videos:', videos);  // Debug log statement
                console.log('Number of fetched videos:', videos.length);  // Debug log statement

                sendResponse({videos: videos});
            })
            .catch(error => {
                console.error('Failed to fetch videos:', error);  // Debug log statement
                sendResponse({error: error});
            });

        return true;  // This keeps the message channel open until sendResponse is called
    }
});
