document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const mainContainer = document.getElementById('main-container');
    const contentContainer = document.getElementById('content-container');
    const content = document.getElementById('content');
    const backButton = document.getElementById('back-button');

    const sectionContent = {
        welcome: `<h2>Welcome to Richard's Web Design</h2>
                  <p>At Richard's Web Design, we craft modern, responsive, and visually stunning websites tailored to your needs.</p>`,
        about: `<h2>About Us</h2>
                <p>Learn more about our passion for creating engaging online experiences.</p>`,
        services: `<h2>Our Services</h2>
                   <p>From design to deployment, we offer comprehensive web solutions.</p>`,
        projects: `<h2>Our Projects</h2>
                   <p>Explore our portfolio of successful and impactful web projects.</p>`,
        contact: `<h2>Contact Us</h2>
                  <p>Get in touch to start your web design journey today.</p>`
    };

    // Handle navigation between sections
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const section = circle.getAttribute('data-section');
            content.innerHTML = sectionContent[section] || 'Content not available.';
            mainContainer.style.display = 'none';
            contentContainer.style.display = 'flex';
        });
    });

    backButton.addEventListener('click', () => {
        mainContainer.style.display = 'flex';
        contentContainer.style.display = 'none';
        content.innerHTML = ''; // Clear content on back
    });

    // Add functionality for looping videos
    const videos = document.querySelectorAll('video'); // Select all videos on the page
    videos.forEach(video => {
        video.addEventListener('ended', () => {
            video.currentTime = 0; // Restart video
            video.play(); // Play immediately
        });
    });
});
