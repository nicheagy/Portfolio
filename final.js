// Initialize Chart.js bar chart when the document is loaded
// Grok(AI) for the extra help with the neon colors and the glow effect
document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element for the chart
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Define data for skills and their proficiency levels (arbitrary percentages)
    const skillsData = {
        labels: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python', 'C++', 'x86', 'ARM'],
        datasets: [{
            label: 'Skill Proficiency (%)',
            data: [90, 85, 85, 50, 75, 80, 40, 40], // Example proficiency values
            backgroundColor: [
                'rgba(255, 20, 147, 0.8)',  // Neon Pink for HTML
                'rgba(0, 255, 255, 0.8)',   // Neon Cyan for CSS
                'rgba(50, 205, 50, 0.8)',   // Neon Lime for JavaScript
                'rgba(255, 105, 180, 0.8)', // Neon Hot Pink for jQuery
                'rgba(0, 255, 127, 0.8)',   // Neon Spring Green for Python
                'rgba(255, 0, 255, 0.8)',   // Neon Magenta for C++
                'rgba(127, 255, 0, 0.8)',   // Neon Chartreuse for x86
                'rgba(255, 165, 0, 0.8)'    // Neon Orange for ARM
            ],
            borderColor: [
                'rgba(255, 20, 147, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(50, 205, 50, 1)',
                'rgba(255, 105, 180, 1)',
                'rgba(0, 255, 127, 1)',
                'rgba(255, 0, 255, 1)',
                'rgba(127, 255, 0, 1)',
                'rgba(255, 165, 0, 1)'
            ],
            borderWidth: 2
        }]
    };

    // Create the bar chart using Chart.js with animations
    new Chart(ctx, {
        type: 'bar',
        data: skillsData,
        options: {
            animation: {
                duration: 1500, // Animation duration in milliseconds
                easing: 'easeOutBounce' // Bounce effect for bars
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Proficiency (%)',
                        color: '#FFFFFF'
                    },
                    ticks: {
                        color: '#FFFFFF'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // White grid lines for contrast
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Skills',
                        color: '#FFFFFF'
                    },
                    ticks: {
                        color: '#FFFFFF'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    });
});