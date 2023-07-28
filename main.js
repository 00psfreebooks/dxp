// y - youtube video ID
// r - rumble video ID
// s - spotify

const videoLinks = {
    meaningVids: [
        { source: 'y', videoId: '6T7pUEZfgdI' }, // Rogan 1/4
        { source: 'y', videoId: '9Xc7DN-noAc' }, // Rogan 2/4
        { source: 'y', videoId: 'vIeFt88Hm8s' }, // Rogan 3/4
        { source: 's', videoId: '4GJZmmvdh4NFbFqdqp9ovm' }, // Rogan 4/4
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
        { source: 'y', videoId: 'f-wWBGo6a2w' }, // Genesis 1/15
        { source: 'y', videoId: 'hdrLQ7DpiWs' }, // Genesis 2/15
        { source: 'y', videoId: 'R_GPAl_q2QQ' }, // Genesis 3/15
        { source: 'y', videoId: 'Ifi5KkXig3s' }, // Genesis 4/15
        { source: 'y', videoId: '44f3mxcsI50' }, // Genesis 5/15
        { source: 'y', videoId: 'wNjbasba-Qw' }, // Genesis 6/15
        { source: 'y', videoId: '6gFjB9FTN58' }, // Genesis 7/15
        { source: 'y', videoId: 'UoQdp2prfmM' }, // Genesis 8/15
        { source: 'y', videoId: 'GmuzUZTJ0GA' }, // Genesis 9/15
        { source: 'y', videoId: '3Y6bCqT85Pc' }, // Genesis 10/15
        { source: 'y', videoId: 'SKzpj0Ev8Xs' }, // Genesis 11/15
        { source: 'y', videoId: '-yUP40gwht0' }, // Genesis 12/15
        { source: 'y', videoId: 'A9JtQN_GoVI' }, // Genesis 13/15
        { source: 'y', videoId: 'DRJKwDfDbco' }, // Genesis 14/15
        { source: 'y', videoId: 'B7V8eZ1BLiI' }, // Genesis 15/15
        { source: 'y', videoId: 'GEASnFvLxhU' }, // Exodus 1/2
        { source: 'y', videoId: '7idDtmKtyZU' }, // Exodus 2/2
    ],
    healthVids: [
        { source: 'r', videoId: 'v30due6' }, // Iron Mind 1/5
        { source: 'r', videoId: 'v30d8ty' }, // Iron Mind 2/5
        { source: 'r', videoId: 'v30dio8' }, // Iron Mind 3/5
        { source: 'r', videoId: 'v30dkak' }, // Iron Mind 4/5
        { source: 'r', videoId: 'v30cucg' }, // Iron Mind 5/5
        { source: 'r', videoId: 'v304z30' }, // Tate Fitness 1/2
        { source: 'r', videoId: 'v304n80' }, // Tate Fitness 2/2
        { source: 'y', videoId: 'RpqSy5V1fFQ' }, // Mozi Diet 1
        { source: 'y', videoId: 'fxyhIXZ6Yog' }, // Mozi Diet 2
        { source: 's', videoId: '1t2TFwYIt2Onq9NWcgz6eQ' }, // SRS Micheal Bagnell 4/4
    ],
    businessVids: [
        { source: 'r', videoId: 'v305cg2' }, // HU 1/8
        { source: 'r', videoId: 'v305dr4' }, // HU 2/8
        { source: 'r', videoId: 'v307dqo' }, // HU 3/8
        { source: 'r', videoId: 'v305kyi' }, // HU 4/8
        { source: 'r', videoId: 'v305n9c' }, // HU 5/8
        { source: 'r', videoId: 'v305kso' }, // HU 6/8
        { source: 'r', videoId: 'v30b5fi' }, // HU 7/8
        { source: 'r', videoId: 'v308iqw' }, // HU 8/8
    ],
    relationshipVids: [
        { source: 'r', videoId: 'v305ics' }, // Network Brilliance
        { source: 'r', videoId: 'v30c4zq' }, // PHD 1/5
        { source: 'r', videoId: 'v30ajxm' }, // PHD 2/5
        { source: 'r', videoId: 'v308b0u' }, // PHD 3/5
        { source: 'r', videoId: 'v30766g' }, // PHD 4/5
        { source: 'r', videoId: 'v306qn8' }, // PHD 5/5
        { source: 'r', videoId: 'v30btyo' }, // GODMODE 1/4
        { source: 'r', videoId: 'v30ayog' }, // GODMODE 2/4
        { source: 'r', videoId: 'v30b4ys' }, // GODMODE 3/4
        { source: 'r', videoId: 'v30aqu4' }, // GODMODE 4/4
    ],
    ozVids: [
        { source: 'y', videoId: 'NSLm__BUnmI' }, // SRS Steven Greer 1
        { source: 'y', videoId: 'p2hk8Qp8dd0' }, // SRS Steven Greer 2
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
    } else if (videoSource === 's') {
        videoLink = `https://open.spotify.com/embed/episode/${videoId}?utm_source=generator&theme=0`;
        console.log('Using Spotify video:', videoId);
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