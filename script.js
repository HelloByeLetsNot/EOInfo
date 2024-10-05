// Array of video objects
const videos = [
    { title: 'Rick Roll', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Never gonna give you up!' },
    { title: 'Exploring Endless Online', url: 'https://www.youtube.com/embed/xyz123', description: 'A deep dive into the world of Endless Online.' },
    { title: 'Character Creation Guide', url: 'https://www.youtube.com/embed/abc456', description: 'How to create your perfect character in Endless Online.' },
    { title: 'Leveling Tips and Tricks', url: 'https://www.youtube.com/embed/def789', description: 'Learn the fastest ways to level up in Endless Online.' }
];

// Function to render videos on the page
function renderVideos() {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = '';

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        `;
        videoList.appendChild(videoItem);
    });
}

// Filter videos based on search input
function filterVideos() {
    const searchTerm = document.getElementById('video-search').value.toLowerCase();
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach((item, index) => {
        const title = videos[index].title.toLowerCase();
        const description = videos[index].description.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Toggle menu visibility
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('open'); // Add or remove the 'open' class to show/hide the menu
}

// Close the menu when clicking outside
window.onclick = function(event) {
    const nav = document.getElementById('nav-menu');
    const menuButton = document.querySelector('.menu-btn');

    if (nav.classList.contains('open') && !nav.contains(event.target) && !menuButton.contains(event.target)) {
        nav.classList.remove('open'); // Close the menu
    }
}

// Call the renderVideos function when the page loads
window.onload = renderVideos;