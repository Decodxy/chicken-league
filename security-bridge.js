// GLOBAL SECURITY SHIELD FOR CHICKEN LEAGUE
const SB_URL = 'https://tbvmgcknkwsucstedigd.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidm1nY2tua3dzdWNzdGVkaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODgwMjQsImV4cCI6MjA4MzU2NDAyNH0.OhfvqWaGLwNvIJq8TBDomdtKWDII5MvC6zhKKJBUD9Q';
const sb = window.supabase.createClient(SB_URL, SB_KEY);

async function enforceSecurity() {
    // 1. Skip check if we are already on login or signup pages
    const path = window.location.pathname;
    if (path.includes("login.html") || path.includes("index.html") || path === "/") {
        return; 
    }

    // 2. Check for active session
    const { data: { session }, error } = await sb.auth.getSession();
    
    if (error || !session) {
        console.error("SECURITY BREACH: No active session.");
        window.location.href = "login.html";
        return;
    }
    
    // 3. Sync Identity to LocalStorage for UI speed
    const user = session.user;
    const username = user.user_metadata.username || user.email.split('@')[0];
    localStorage.setItem('league_user', username);
    
    console.log(`%c ACCESS GRANTED: ${username} `, 'background: #222; color: #ff0000; font-weight: bold;');
}

// Run immediately
enforceSecurity();
