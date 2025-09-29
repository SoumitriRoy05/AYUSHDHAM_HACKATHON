 // Check if user is logged in
        window.onload = function() {
            const userType = localStorage.getItem('userType');
            const username = localStorage.getItem('username');
            
            if (!userType) {
                window.location.href = 'index.html';
            } else if (userType === 'new') {
                // If new user tries to access dashboard, redirect to appointments
                window.location.href = 'appointments.html';
            } else {
                // Display username if available
                if (username) {
                    document.getElementById('username-display').textContent = username;
                }
            }
        };

        // Create the Patients by Age Chart
        const ctx = document.getElementById('ageChart').getContext('2d');
        const ageChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0-18', '19-30', '31-45', '46-60', '60+'],
                datasets: [{
                    label: 'Number of Patients',
                    data: [45, 80, 110, 95, 50],
                    backgroundColor: [
                        'rgba(245, 231, 161, 0.7)',
                        'rgba(230, 214, 144, 0.7)',
                        'rgba(212, 197, 132, 0.7)',
                        'rgba(194, 180, 120, 0.7)',
                        'rgba(176, 163, 108, 0.7)'
                    ],
                    borderColor: [
                        'rgba(245, 231, 161, 1)',
                        'rgba(230, 214, 144, 1)',
                        'rgba(212, 197, 132, 1)',
                        'rgba(194, 180, 120, 1)',
                        'rgba(176, 163, 108, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Add interactivity to department items
        document.querySelectorAll('.department-item').forEach(item => {
            item.addEventListener('click', function() {
                const deptName = this.querySelector('.department-name').textContent;
                alert(`You clicked on ${deptName} department. In a real application, this would navigate to the department details.`);
            });
        });

        // Add interactivity to sidebar menu items
        document.querySelectorAll('.sidebar-menu li').forEach(item => {
            item.addEventListener('click', function() {
                const linkText = this.querySelector('a').textContent.trim();
                if (linkText === 'Logout') {
                    localStorage.removeItem('userType');
                    localStorage.removeItem('username');
                    window.location.href = 'index.html';
                } else {
                    console.log(`Navigating to: ${linkText}`);
                    // In a real application, this would navigate to the appropriate page
                }
            });
        });

        // Add interactivity to data cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                const cardTitle = this.querySelector('.card-title').textContent;
                console.log(`Viewing details for: ${cardTitle}`);
                // In a real application, this would show more details about the metric
            });
        });

        // Add interactivity to gallery images
        document.querySelectorAll('.gallery-image').forEach(img => {
            img.addEventListener('click', function() {
                // Create a modal to show the full image
                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1000';
                
                const modalImg = document.createElement('img');
                modalImg.src = this.src;
                modalImg.style.maxWidth = '90%';
                modalImg.style.maxHeight = '90%';
                modalImg.style.borderRadius = '8px';
                
                modal.appendChild(modalImg);
                document.body.appendChild(modal);
                
                // Close modal when clicked
                modal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
            });
        });