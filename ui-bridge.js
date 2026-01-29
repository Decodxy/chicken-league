// UI-BRIDGE: HAMBURGER HEADER & STICKY NAV
const injectGlobalUI = () => {
    // 1. TOP HEADER WITH HAMBURGER
    const headerHTML = `
    <header class="w-full max-w-md mx-auto px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[1001]">
        <div class="flex items-center gap-2" onclick="location.href='dashboard.html'" style="cursor: pointer;">
            <div class="w-7 h-7 bg-red-600 rounded flex items-center justify-center font-black orbitron italic text-[10px]">CL</div>
            <span class="orbitron text-[10px] font-black tracking-widest uppercase text-white">Chicken <span class="text-red-600">League</span></span>
        </div>
        
        <button onclick="toggleMenu()" class="p-2 flex flex-col gap-1.5 group">
            <div class="w-6 h-0.5 bg-white group-hover:bg-red-600 transition-all"></div>
            <div class="w-6 h-0.5 bg-white group-hover:bg-red-600 transition-all"></div>
            <div class="w-4 h-0.5 bg-red-600 group-hover:bg-white transition-all self-end"></div>
        </button>

        <div id="side-menu" class="fixed inset-0 bg-black/95 z-[2000] translate-x-full transition-transform duration-300 flex flex-col p-10">
            <button onclick="toggleMenu()" class="self-end text-3xl font-light text-zinc-500 mb-10">&times;</button>
            <nav class="flex flex-col gap-8">
                <a href="dashboard.html" class="orbitron text-xl font-black italic uppercase text-white hover:text-red-600">Dashboard</a>
                <a href="1in2.html" class="orbitron text-xl font-black italic uppercase text-white hover:text-red-600">Arena Lobby</a>
                <a href="1in2leaderboard.html" class="orbitron text-xl font-black italic uppercase text-white hover:text-red-600">Leaderboard</a>
                <hr class="border-white/10 my-4">
                <button onclick="logout()" class="orbitron text-xl font-black italic uppercase text-red-600 text-left">Terminate Session</button>
            </nav>
        </div>
    </header>`;

    // 2. STICKY BOTTOM NAV (Kept for quick access)
    const stickyNavHTML = `
    <nav class="fixed bottom-0 left-0 right-0 z-[1000] max-w-md mx-auto px-4 pb-6 pt-2">
        <div class="flex justify-around items-center py-4 px-6 rounded-2xl border border-white/10 shadow-2xl bg-black/90 backdrop-blur-2xl">
            <button onclick="location.href='dashboard.html'" class="flex flex-col items-center gap-1">
                <div class="${window.location.pathname.includes('dashboard') ? 'text-red-600' : 'text-zinc-500'}">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
            </button>
            <button onclick="location.href='1in2.html'" class="flex flex-col items-center gap-1">
                <div class="${window.location.pathname.includes('1in2.html') ? 'text-red-600' : 'text-zinc-500'}">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2v8h8V2h-8zm0 11v9h8v-9h-8zM2 2v14h8V2H2zm0 17v3h8v-3H2z"/></svg>
                </div>
            </button>
            <button onclick="location.href='1in2leaderboard.html'" class="flex flex-col items-center gap-1">
                <div class="${window.location.pathname.includes('leaderboard') ? 'text-red-600' : 'text-zinc-500'}">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V3H8v6H2v12h20V11h-6zm-6 0V5h4v14h-4v-8zM4 11h4v8H4v-8zm16 8h-4v-6h4v6z"/></svg>
                </div>
            </button>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', stickyNavHTML);
};

// Toggle Function
window.toggleMenu = () => {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('translate-x-full');
};

// Global Logout
window.logout = async () => {
    await sb.auth.signOut();
    localStorage.clear();
    window.location.href = 'login.html';
};

document.addEventListener('DOMContentLoaded', injectGlobalUI);
