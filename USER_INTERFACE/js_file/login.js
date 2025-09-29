 function login(userType) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                alert('Please enter both username and password');
                return;
            }
            
            // Save user type to localStorage
            localStorage.setItem('userType', userType);
            localStorage.setItem('username', username);
            
            // Redirect based on user type
            if (userType === 'existing') {
                window.location.href = "index.html";
            } else {
                window.location.href = "language.html";
            }
        }