// function login(userType) {
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;
        
//         if (!username || !password) {
//             alert('Please enter both username and password');
//             return;
//         }
        
//         // Save user type to localStorage
//         localStorage.setItem('userType', userType);
//         localStorage.setItem('username', username);
        
//         // Redirect based on user type
//         if (userType === 'existing') {
//             window.location.href = 'dashboard.html';
//         } else if (userType === 'new') {
//             window.location.href = 'appointment_page.html';  // ✅ Corrected link
//         }
//     }
function bookAppointment() {
      let dept = document.getElementById("department").value;
      let doctor = document.getElementById("doctor").value;
      let type = document.getElementById("appointmentType").value;
      let date = document.getElementById("date").value;
      let time = document.getElementById("time").value;

      if (!dept || !doctor || !type || !date || !time) {
        alert("⚠️ Please fill in all fields!");
        return;
      }

      document.getElementById("output").innerHTML = `
        <h3>✅ Appointment Confirmed</h3>
        <p><b>Department:</b> ${dept}</p>
        <p><b>Doctor:</b> ${doctor}</p>
        <p><b>Type:</b> ${type}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
      `;
    }