// Display username dynamically
    window.onload = function() {
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('username-display').textContent = username;
      }
    }

    // Report Chart
    const ctx = document.getElementById('reportChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Pain Level (Scale 10)',
            data: [9, 7, 5, 3],
            borderColor: '#2a9d8f',
            backgroundColor: 'rgba(42, 157, 143, 0.2)',
            fill: true,
            tension: 0.4
          },
          {
            label: 'Stress Level (%)',
            data: [80, 70, 60, 55],
            borderColor: '#40916c',
            backgroundColor: 'rgba(64, 145, 108, 0.2)',
            fill: true,
            tension: 0.4
          },
          {
            label: 'Energy Level (%)',
            data: [40, 55, 70, 85],
            borderColor: '#e9c46a',
            backgroundColor: 'rgba(233, 196, 106, 0.2)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // prevents expansion
        plugins: {
          legend: { position: 'top', labels: { color: '#1b4332' } },
          title: {
            display: true,
            text: 'Overall Health Improvement',
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