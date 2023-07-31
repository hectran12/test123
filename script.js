        window.addEventListener('load', function() {
            // Get the honeycomb element
            const honeycombContainer = document.querySelector('.honeycomb');

            // Remove the 'hide-honeycomb' class to show the honeycomb animation
            honeycombContainer.classList.remove('hide-honeycomb');

            // Add a delay to remove the honeycomb after animation is complete (adjust the time accordingly)
            setTimeout(() => {
                honeycombContainer.style.display = 'none';
            }, 2100); // The animation lasts for 2.1 seconds
        });
