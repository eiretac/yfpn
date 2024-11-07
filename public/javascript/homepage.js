document.addEventListener('DOMContentLoaded', () => {
    const descriptions = document.querySelectorAll('.description');
    let currentIndex = 0;

    function showNextDescription() {
        descriptions[currentIndex].classList.remove('active');
        descriptions[currentIndex].classList.add('hidden');

        currentIndex = (currentIndex + 1) % descriptions.length;

        descriptions[currentIndex].classList.remove('hidden');
        descriptions[currentIndex].classList.add('active');
    }

    setInterval(showNextDescription, 3000);

    async function fetchEnvVariables() {
        console.log('Fetching environment variables...');
        try {
            const response = await axios.get("https://zopstudios.net/api/auth/config.js");
            console.log('Environment variables fetched:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching OAuth configuration:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    async function handleSignIn() {
        console.log('Handling sign-in...');
        try {
            const config = await fetchEnvVariables();
            if (config) {
                const discordOauthUrl = `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${config.clientId}&redirect_uri=${encodeURIComponent(config.redirectUri)}&scope=${encodeURIComponent(config.scope)}`;
                console.log('Redirecting to Discord OAuth URL:', discordOauthUrl);
                window.location.href = discordOauthUrl;
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    async function handleLogout() {
        console.log('Handling logout...');
        try {
            const response = await fetch('https://zopstudios.net/api/auth/logout.js', { method: 'POST' });
            const data = await response.json();
            if (data.success) {
                document.cookie = 'authToken=; Max-Age=0; path=/; Secure; HttpOnly; SameSite=Strict';
                localStorage.removeItem('user');
                console.log('Logged out successfully. JWT cookie cleared and user data removed.');
                window.location.reload();
            } else {
                console.error('Logout failed:', data.error);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    async function checkAuth() {
        console.log('Checking authentication...');
        try {
            const response = await fetch('https://zopstudios.net//api/auth/status.js', { method: 'GET' });
            const data = await response.json();
            console.log('Authentication status:', data);

            const tokenExists = document.cookie.split(';').some((item) => item.trim().startsWith('authToken='));
            console.log('Auth token exists in cookies:', tokenExists);

            if (tokenExists && data.isAuthenticated) {
                localStorage.setItem('user', JSON.stringify(data.user));
                showUserDetails(data.user);
                console.log('User is authenticated. User data stored and displayed.');
            } else {
                localStorage.removeItem('user');
                console.log('User is not authenticated or token does not exist. User data cleared.');
            }
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    }

    checkAuth();

    const signInButton = document.getElementById('signInButton');
    if (signInButton) {
        signInButton.addEventListener('click', handleSignIn);
        console.log('Sign-in button event listener added.');
    }

    function showUserDetails(user) {
        console.log('Showing user details:', user);
        const signInButton = document.getElementById('signInButton');
        const userDropdown = document.getElementById('userDropdown');

        signInButton.style.display = 'none';
        userDropdown.classList.remove('hidden');
        userDropdown.classList.add('active');

        userDropdown.innerHTML = `
<div class="user-details">
    <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif" alt="User Avatar" class="user-avatar"/>
    <span class="username">${user.username}</span>
    
    <!-- Dropdown for Settings and Log Out -->
    <ul class="user-dropdown">
        <li><a href="#settings">Settings</a></li>
        <li id="logoutLink"><a href="#logout">Log Out</a></li>
    </ul>
</div>
        `;

        const logoutLink = document.getElementById('logoutLink');
        if (logoutLink) {
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                handleLogout();
            });
            console.log('Logout link event listener added.');
        }

        console.log('User details populated in dropdown.');
    }

    const heroSection = document.querySelector('.hero-about');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        heroSection.style.opacity = Math.max(1 - scrollTop / 800, 0);
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});