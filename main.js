// y - youtube video ID
// r - rumble video ID

const videoLinks = {
    meaningVids: [
        { source: 'y', videoId: '6T7pUEZfgdI' }, // Rogan 1
        { source: 'y', videoId: 'vIeFt88Hm8s' }, // Rogan 2
        { source: 'y', videoId: 'jey_CzIOfYE' }, // Harris 1
        { source: 'y', videoId: 'GEf6X-FueMo' }, // Harris 2
        { source: 'y', videoId: 'PqpYxD71hJU' }, // Harris 3
        { source: 'y', videoId: 'aALsFhZKg-Q' }, // Harris 4
        { source: 'y', videoId: 'I8Xc2_FtpHI' }, // MoM 1
        { source: 'y', videoId: 'EN2lyN7rM4E' }, // MoM 2
        { source: 'y', videoId: 'Us979jCjHu8' }, // MoM 3
        { source: 'y', videoId: 'bV16NEWld8Q' }, // MoM 4
        { source: 'y', videoId: 'RudKmwzDpNY' }, // MoM 5
        { source: 'y', videoId: 'nsZ8XqHPjI4' }, // MoM 6
        { source: 'y', videoId: 'F3n5qtj89QE' }, // MoM 7
        { source: 'y', videoId: 'Nb5cBkbQpGY' }, // MoM 8
        { source: 'y', videoId: 'yXZSeiAl4PI' }, // MoM 9
        { source: 'y', videoId: '7XtEZvLo-Sc' }, // MoM 10
        { source: 'y', videoId: 'T4fjSrVCDvA' }, // MoM 11
        { source: 'y', videoId: '6V1eMvGGcXQ' }, // MoM 12
        // Add more video objects as needed
    ],
    healthVids: [
        { source: 'r', videoId: 'v304z30' }, // Tate Fitness 1/2
        { source: 'r', videoId: 'v304n80' }, // Tate Fitness 2/2
        // Add more video objects as needed
    ],
    businessVids: [
        { source: 'r', videoId: 'v307dqo' }, // HU 3/8
        // Add more video objects as needed
    ],
    relationshipVids: [
        { source: 'r', videoId: 'v305ics' }, // Network Brilliance
        // Add more video objects as needed
    ],
    ozVids: [
        { source: 'y', videoId: 'NSLm__BUnmI' }, // SRS Steven Greer 1
        { source: 'y', videoId: 'p2hk8Qp8dd0' }, // SRS Steven Greer 2
        // Add more video objects as needed
    ],
};

let currentVideoCategory = 'meaningVids'; // Initialize with the "Meaning" category
let currentVideoIndex = 0;

const youtubeVideoFrame = document.getElementById('video-player');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const progressTracker = document.getElementById('progress-tracker');

function updateProgressTracker() {
    const numVideosInCategory = Object.keys(videoLinks[currentVideoCategory]).length;
    const percentageCompleted = (currentVideoIndex + 1) / numVideosInCategory * 100;
    const progressTracker = document.getElementById('progress-tracker');
    progressTracker.innerText = `${currentVideoIndex + 1} of ${numVideosInCategory}`;

    const progressBarForeground = document.getElementById('progress-bar-foreground');
    progressBarForeground.style.width = `${percentageCompleted}%`;
}

function updateVideo() {
    const videoData = videoLinks[currentVideoCategory][currentVideoIndex];
    const videoId = videoData.videoId;
    const videoSource = videoData.source;
    let videoLink;
  
    if (videoSource === 'y') {
      videoLink = `https://www.youtube.com/embed/${videoId}`;
      console.log('Using YouTube video:', videoId);
    } else if (videoSource === 'r') {
      videoLink = `https://rumble.com/embed/${videoId}`;
      console.log('Using Rumble video:', videoId);
    } else {
      // Default to YouTube if the source is not recognized
      videoLink = `https://www.youtube.com/embed/${videoId}`;
      console.log('Using default YouTube video:', videoId);
    }
  
    youtubeVideoFrame.src = videoLink;
    previousButton.style.display = currentVideoIndex === 0 ? 'none' : 'inline';
    nextButton.style.display = currentVideoIndex === videoLinks[currentVideoCategory].length - 1 ? 'none' : 'inline';
    
    updateProgressTracker();
}



function resizeVideoFrame() {
    const videoAspectRatio = 16 / 9; // Assuming all videos have a 16:9 aspect ratio
    const availableWidth = window.innerWidth * 0.8; // Take up to 80% of the page width
    const availableHeight = window.innerHeight * 0.5; // Take up to 50% of the page height

    // Calculate the maximum dimensions based on available width and height while maintaining the aspect ratio
    const maxWidth = Math.min(availableWidth, availableHeight * videoAspectRatio);
    const maxHeight = maxWidth / videoAspectRatio; // Calculate height based on the aspect ratio

    // Set the width and height of the iframe to maintain the aspect ratio and fit the available space
    youtubeVideoFrame.style.width = maxWidth + 'px';
    youtubeVideoFrame.style.height = maxHeight + 'px';
}

window.addEventListener('resize', resizeVideoFrame);
youtubeVideoFrame.addEventListener('load', resizeVideoFrame);

nextButton.addEventListener('click', () => {
    if (currentVideoIndex < videoLinks[currentVideoCategory].length - 1) {
        currentVideoIndex++;
        updateVideo();
    }
});

previousButton.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        updateVideo();
    }
});

menuIcon.addEventListener('click', () => {
dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});


// Categorizing videos

const meaningMenu = document.getElementById('meaning-menu');
const healthMenu = document.getElementById('health-menu');
const businessMenu = document.getElementById('business-menu');
const relationshipsMenu = document.getElementById('relationships-menu');
const ozMenu = document.getElementById('oz-menu');

meaningMenu.addEventListener('click', () => {
    currentVideoCategory = 'meaningVids';
    currentVideoIndex = 0;
    updateVideo();
    dropdownMenu.style.display = 'none';
});

healthMenu.addEventListener('click', () => {
    currentVideoCategory = 'healthVids';
    currentVideoIndex = 0;
    updateVideo();
    dropdownMenu.style.display = 'none';
});

businessMenu.addEventListener('click', () => {
    currentVideoCategory = 'businessVids';
    currentVideoIndex = 0;
    updateVideo();
    dropdownMenu.style.display = 'none';
});

relationshipsMenu.addEventListener('click', () => {
    currentVideoCategory = 'relationshipsVids';
    currentVideoIndex = 0;
    updateVideo();
    dropdownMenu.style.display = 'none';
});

ozMenu.addEventListener('click', () => {
    currentVideoCategory = 'ozVids';
    currentVideoIndex = 0;
    updateVideo();
    dropdownMenu.style.display = 'none';
});

// Initialize with the first video of the initial category (meaningVids)
updateVideo();