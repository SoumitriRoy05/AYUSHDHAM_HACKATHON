// Display username dynamically
    window.onload = function() {
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('username-display').textContent = username;
      }
    }

    // Chart.js Treatment Progress
    const ctx = document.getElementById('treatmentChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Panchakarma Therapy', 'Herbal Oil Massage'],
        datasets: [{
          label: 'Sessions Completed',
          data: [7, 3],
          backgroundColor: ['#2a9d8f', '#40916c'],
        }, {
          label: 'Total Sessions',
          data: [14, 10],
          backgroundColor: ['#e9c46a', '#f4a261'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#1b4332' }
          },
          title: {
            display: true,
            text: 'Treatment Progress Overview',
            color: '#1b4332',
            font: { size: 18 }
          }
        },
        scales: {
          x: { ticks: { color: '#1b4332' } },
          y: { ticks: { color: '#1b4332' }, beginAtZero: true }
        }
      }
    });