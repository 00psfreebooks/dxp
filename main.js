// y - youtube video ID
// r - rumble video ID
// s - spotify
// i - internet archive
// x - xvideos
// e - eporner

const videoLinks = {
    meaningVids: [
        { source: 'y', videoId: '6T7pUEZfgdI', title: 'Rogan Interview 1/4' },
        { source: 'y', videoId: '9Xc7DN-noAc', title: 'Rogan Interview 2/4' },
        { source: 'y', videoId: 'vIeFt88Hm8s', title: 'Rogan Interview 3/4' },
        { source: 's', videoId: '4GJZmmvdh4NFbFqdqp9ovm', title: 'Rogan Interview 4/4' },
        { source: 'y', videoId: 'jey_CzIOfYE', title: 'Peterson-Harris 1/4' },
        { source: 'y', videoId: 'GEf6X-FueMo', title: 'Peterson-Harris 2/4' },
        { source: 'y', videoId: 'PqpYxD71hJU', title: 'Peterson-Harris 3/4' },
        { source: 'y', videoId: 'aALsFhZKg-Q', title: 'Peterson-Harris 4/4' },
        { source: 'y', videoId: 'I8Xc2_FtpHI', title: 'Maps of Meaning 1/12' },
        { source: 'y', videoId: 'EN2lyN7rM4E', title: 'Maps of Meaning 2/12' },
        { source: 'y', videoId: 'Us979jCjHu8', title: 'Maps of Meaning 3/12' },
        { source: 'y', videoId: 'bV16NEWld8Q', title: 'Maps of Meaning 4/12' },
        { source: 'y', videoId: 'RudKmwzDpNY', title: 'Maps of Meaning 5/12' },
        { source: 'y', videoId: 'nsZ8XqHPjI4', title: 'Maps of Meaning 6/12' },
        { source: 'y', videoId: 'F3n5qtj89QE', title: 'Maps of Meaning 7/12' },
        { source: 'y', videoId: 'Nb5cBkbQpGY', title: 'Maps of Meaning 8/12' },
        { source: 'y', videoId: 'yXZSeiAl4PI', title: 'Maps of Meaning 9/12' },
        { source: 'y', videoId: '7XtEZvLo-Sc', title: 'Maps of Meaning 10/12' },
        { source: 'y', videoId: 'T4fjSrVCDvA', title: 'Maps of Meaning 11/12' },
        { source: 'y', videoId: '6V1eMvGGcXQ', title: 'Maps of Meaning 12/12' },
        { source: 'y', videoId: 'f-wWBGo6a2w', title: 'Genesis 1/15' },
        { source: 'y', videoId: 'hdrLQ7DpiWs', title: 'Genesis 2/15' },
        { source: 'y', videoId: 'R_GPAl_q2QQ', title: 'Genesis 3/15' },
        { source: 'y', videoId: 'Ifi5KkXig3s', title: 'Genesis 4/15' },
        { source: 'y', videoId: '44f3mxcsI50', title: 'Genesis 5/15' },
        { source: 'y', videoId: 'wNjbasba-Qw', title: 'Genesis 6/15' },
        { source: 'y', videoId: '6gFjB9FTN58', title: 'Genesis 7/15' },
        { source: 'y', videoId: 'UoQdp2prfmM', title: 'Genesis 8/15' },
        { source: 'y', videoId: 'GmuzUZTJ0GA', title: 'Genesis 9/15' },
        { source: 'y', videoId: '3Y6bCqT85Pc', title: 'Genesis 10/15' },
        { source: 'y', videoId: 'SKzpj0Ev8Xs', title: 'Genesis 11/15' },
        { source: 'y', videoId: '-yUP40gwht0', title: 'Genesis 12/15' },
        { source: 'y', videoId: 'A9JtQN_GoVI', title: 'Genesis 13/15' },
        { source: 'y', videoId: 'DRJKwDfDbco', title: 'Genesis 14/15' },
        { source: 'y', videoId: 'B7V8eZ1BLiI', title: 'Genesis 15/15' },
        { source: 'y', videoId: 'GEASnFvLxhU', title: 'Exodus 1/3' },
        { source: 'y', videoId: '7idDtmKtyZU', title: 'Exodus 2/3' },
        { source: 'y', videoId: '6q2D5-H71yY', title: 'Exodus 3/3' },
        { source: 'y', videoId: 'IZ-tHaHfB8A', title: 'Relevance Realization Conversation' },
    ],    
    healthVids: [
        { source: 'r', videoId: 'v30due6', title: 'Iron Mind 1/5' },
        { source: 'r', videoId: 'v30d8ty', title: 'Iron Mind 2/5' },
        { source: 'r', videoId: 'v30dio8', title: 'Iron Mind 3/5' },
        { source: 'r', videoId: 'v30dkak', title: 'Iron Mind 4/5' },
        { source: 'r', videoId: 'v30cucg', title: 'Iron Mind 5/5' },
        { source: 'y', videoId: 'PFKGHL1MqkU', title: 'Mozi - Morning Routines' },
        { source: 'r', videoId: 'v304z30', title: 'Tate Fitness 1/2' },
        { source: 'r', videoId: 'v304n80', title: 'Tate Fitness 2/2' },
        { source: 'y', videoId: 'RpqSy5V1fFQ', title: 'Mozi - Diet 1.0' },
        { source: 'y', videoId: 'fxyhIXZ6Yog', title: 'Mozi - Diet 2.0' },
        { source: 's', videoId: '1t2TFwYIt2Onq9NWcgz6eQ', title: 'SRS - Micheal Bagnell 4/4' }
    ],
    businessVids: [
        { source: 'y', videoId: 'YFA8AS5Cu2w', title: 'Tired of Being Broke' },
        { source: 'y', videoId: 'RdAKXJlMIZM', title: 'Mozi - Money' },
        { source: 'y', videoId: 'hBtxSzKhM44', title: '40 Books, 40 Lessons' },
        { source: 'r', videoId: 'v305cg2', title: 'HU 1/8' },
        { source: 'r', videoId: 'v305dr4', title: 'HU 2/8' },
        { source: 'r', videoId: 'v307dqo', title: 'HU 3/8' },
        { source: 'r', videoId: 'v305kyi', title: 'HU 4/8' },
        { source: 'r', videoId: 'v305n9c', title: 'HU 5/8' },
        { source: 'r', videoId: 'v305kso', title: 'HU 6/8' },
        { source: 'r', videoId: 'v30b5fi', title: 'HU 7/8' },
        { source: 'r', videoId: 'v308iqw', title: 'HU 8/8' },
        { source: 'y', videoId: '7sLXhCDRaV8', title: 'Mozi - 10 Ideas' },
        { source: 'y', videoId: 'dZ7xeVCYC5M', title: 'Mozi - Investing' },
        { source: 'y', videoId: '9xAMe0QBFhU', title: 'Mozi - Margins' },
        { source: 'y', videoId: 'oi7bnS8uyJM', title: 'Mozi - Sales Basics' },
        { source: 'y', videoId: 'DpbXWP8fLbc', title: 'Mozi - Unlimited Funding' },
        { source: 'y', videoId: 'WrCt0R3FBFs', title: 'Mozi - More Followers' },
        { source: 'y', videoId: 'yEKu6q0W3gs', title: 'Mozi - More Money Quick' },
        { source: 'y', videoId: 'cq8GyLrEuAk', title: 'Mozi - 14 Lessons' },
    ],
    relationshipsVids: [
        { source: 'r', videoId: 'v305ics', title: 'Network Brilliance' },
        { source: 'y', videoId: 'RsXcCjLtnsA', title: 'Mozi - Networking' },
        { source: 'y', videoId: 'NMsnmzST654', title: 'Tate - The IRL Playboy' },
        { source: 'r', videoId: 'v30c4zq', title: 'PHD 1/5' },
        { source: 'r', videoId: 'v30ajxm', title: 'PHD 2/5' },
        { source: 'r', videoId: 'v308b0u', title: 'PHD 3/5' },
        { source: 'r', videoId: 'v30766g', title: 'PHD 4/5' },
        { source: 'r', videoId: 'v306qn8', title: 'PHD 5/5' },
        { source: 'r', videoId: 'v30btyo', title: 'GODMODE 1/4' },
        { source: 'r', videoId: 'v30ayog', title: 'GODMODE 2/4' },
        { source: 'r', videoId: 'v30b4ys', title: 'GODMODE 3/4' },
        { source: 'r', videoId: 'v30aqu4', title: 'GODMODE 4/4' },
    ],
    ozVids: [
        { source: 'y', videoId: 'hBtxSzKhM44', title: '40 Books 40 Lessons' },
        { source: 'y', videoId: 'NSLm__BUnmI', title: 'SRS - Steven Greer 1/2' },
        { source: 'y', videoId: 'p2hk8Qp8dd0', title: 'SRS - Steven Greer 2/2' },
    ],
    hardcoreVids: [
        { source: 'y', videoId: '3q4vn2z4o-k', title: 'Dirty Talk Overview' },
        { source: 'e', videoId: 'oX0HthvMeJP', title: 'Dirty Talk 1/5' },
        { source: 'e', videoId: 'NzyrZ2ITsCm', title: 'Dirty Talk 2/5' },
        { source: 'e', videoId: 'R7nCReXzysR', title: 'Dirty Talk 3/5' },
        { source: 'e', videoId: 'L4Bo5QumLEu', title: 'Dirty Talk 4/5' },
        { source: 'e', videoId: 'l1icukur3oc', title: 'Dirty Talk 5/5' },
        { source: 'e', videoId: 'J3y9N6pXPHw', title: 'Sexual Dominance Escalation 1/15' },
        { source: 'e', videoId: 'W7QRVATzo4H', title: 'Sexual Dominance Escalation 2/15' },
        { source: 'e', videoId: 'VJo381rHArS', title: 'Sexual Dominance Escalation 3/15' },
        { source: 'e', videoId: 'cAuCJJ8HeN0', title: 'Sexual Dominance Escalation 4/15' },
        { source: 'e', videoId: 'nyUgjFtZaPk', title: 'Sexual Dominance Escalation 5/15' },
        { source: 'e', videoId: 'xxe8ggXCL1S', title: 'Sexual Dominance Escalation 6/15' },
        { source: 'e', videoId: '2Nd642O6ARl', title: 'Sexual Dominance Escalation 7/15' },
        { source: 'e', videoId: 'bh6ooH5mmAH', title: 'Sexual Dominance Escalation 8/15' },
        { source: 'e', videoId: 'bWrnWce0L8i', title: 'Sexual Dominance Escalation 9/15' },
        { source: 'e', videoId: '90Y8u9QRx1d', title: 'Sexual Dominance Escalation 10/15' },
        { source: 'e', videoId: 'gF7fq3iIwYw', title: 'Sexual Dominance Escalation 11/15' },
        { source: 'e', videoId: 'OtkDBybwUX0', title: 'Sexual Dominance Escalation 12/15' },
        { source: 'e', videoId: 'dFspvOfrVRb', title: 'Sexual Dominance Escalation 13/15' },
        //{ source: 'x', videoId: '77984073', title: 'Sexual Dominance Escalation 14/15' },
        //{ source: 'e', videoId: '', title: 'Sexual Dominance Escalation 14/15' },
        { source: 'e', videoId: 'KfVPFTphj0I', title: 'Sexual Dominance Escalation 15/15' },
    ]
};

let currentVideoCategory = 'meaningVids'; // Initialize with the "Meaning" category
let currentVideoIndex = 0;

const youtubeVideoFrame = document.getElementById('video-player');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const videoTitleElement = document.getElementById('video-title');
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
    //console.log("Video Data:", videoData); // Check if video data is being correctly fetched
    const videoId = videoData.videoId;
    const videoSource = videoData.source;
    const videoTitle = videoData.title;

    let videoLink;
  
    if (videoSource === 'y') {
        videoLink = `https://www.youtube.com/embed/${videoId}`;
        //console.log('Using YouTube video:', videoId);
    } else if (videoSource === 'r') {
        videoLink = `https://rumble.com/embed/${videoId}`;
        //console.log('Using Rumble video:', videoId);
    } else if (videoSource === 's') {
        videoLink = `https://open.spotify.com/embed/episode/${videoId}?utm_source=generator&theme=0`;
        //console.log('Using Spotify video:', videoId);
    } else if (videoSource === 'i') {
        videoLink = `https://archive.org/embed/${videoId}`;
        //console.log('Using Internet Archive video:', videoId);
    } else if (videoSource === 'x') {
        videoLink = `https://www.xvideos.com/embedframe/${videoId}`;
        //console.log('Using XVideos video:', videoId);
    } else if (videoSource === 'e') {
        videoLink = `https://www.eporner.com/embed/${videoId}/`;
        //console.log('Using EPorner video:', videoId);
    } else {
        // Default to YouTube if the source is not recognized
        videoLink = `https://www.youtube.com/embed/${videoId}`;
        //console.log('Using default YouTube video:', videoId);
    }
  
    youtubeVideoFrame.src = videoLink;
    previousButton.style.display = currentVideoIndex === 0 ? 'none' : 'inline';
    nextButton.style.display = currentVideoIndex === videoLinks[currentVideoCategory].length - 1 ? 'none' : 'inline';
    
    videoTitleElement.textContent = videoTitle;

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
const hardcoreMenu = document.getElementById('hardcore-menu');

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

hardcoreMenu.addEventListener('click', () => {
    currentVideoCategory = 'hardcoreVids';
    currentVideoIndex = 0;
    updateVideo();
    dropdownMenu.style.display = 'none';
});

// Initialize with the first video of the initial category (meaningVids)
updateVideo();
