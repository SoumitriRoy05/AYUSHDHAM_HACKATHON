// Display username dynamically
    window.onload = function() {
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('username-display').textContent = username;
      }
    }

    // Pharmacy Chart
    const ctx = document.getElementById('pharmacyChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Ashwagandha', 'Triphala', 'Chyawanprash'],
        datasets: [{
          label: 'Adherence (%)',
          data: [95, 85, 90],
          backgroundColor: [
            'rgba(72, 201, 176, 0.7)',
            'rgba(38, 166, 154, 0.7)',
            'rgba(3, 169, 244, 0.7)'
          ],
          borderColor: [
            'rgba(72, 201, 176, 1)',
            'rgba(38, 166, 154, 1)',
            'rgba(3, 169, 244, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Medication Adherence Overview',
            color: '#1b4332',
            font: { size: 18 }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { color: '#1b4332' },
            title: { display: true, text: 'Adherence (%)', color: '#1b4332' }
          },
          x: {
            ticks: { color: '#1b4332' }
          }
        }
      }
    });