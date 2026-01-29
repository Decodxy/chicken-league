// UI-BRIDGE: SOLID HEADER & LEFT-SIDE MENU
const injectGlobalUI = () => {
    // 1. SOLID HEADER (No transparency for maximum legibility)
    const headerHTML = `
    <header class="fixed top-0 left-0 right-0 z-[1001] w-full max-w-md mx-auto px-6 py-4 flex justify-between items-center bg-black border-b border-blue-900/30">
        
        <button onclick="toggleMenu()" class="flex flex-col gap-1.5 p-1 active:scale-90 transition-transform">
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-4 h-0.5 bg-blue-500"></div>
            <div class="w-6 h-0.5 bg-white"></div>
        </button>

        <div class="flex items-center gap-2" onclick="location.href='dashboard.html'" style="cursor: pointer;">
            <div class="w-7 h-7 bg-blue-600 rounded-sm flex items-center justify-center font-black orbitron italic text-[10px] text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]">CL</div>
            <span class="orbitron text-[11px] font-black tracking-widest uppercase text-white">Chicken <span class="text-blue-500">League</span></span>
        </div>
        
        <div class="w-8"></div>

        <div id="side-menu" class="fixed inset-0 bg-black z-[2000] -translate-x-full transition-transform duration-300 flex flex-col p-10 border-r border-blue-900/20 shadow-2xl">
            <button onclick="toggleMenu()" class="self-start text-4xl font-light text-zinc-500 mb-10 hover:text-white transition">&times;</button>
            <nav class="flex flex-col gap-8">
                <a href="dashboard.html" class="orbitron text-xl font-black uppercase text-white hover:text-blue-500 transition-colors">Control Center</a>
                <a href="1in2.html" class="orbitron text-xl font-black uppercase text-white hover:text-blue-500 transition-colors">The Arena</a>
                <a href="1in2leaderboard.html" class="orbitron text-xl font-black uppercase text-white hover:text-blue-500 transition-colors">Standings</a>
                <hr class="border-white/5 my-4">
                <button onclick="logout()" class="orbitron text-xl font-black uppercase text-blue-600 text-left hover:text-blue-400 transition-colors">Sign Out</button>
            </nav>
        </div>
    </header>`;

    // 2. STICKY BOTTOM NAV
    const stickyNavHTML = `
    <nav class="fixed bottom-0 left-0 right-0 z-[1000] max-w-md mx-auto px-4 pb-6">
        <div class="flex justify-around items-center py-4 px-6 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
            <button onclick="location.href='dashboard.html'" class="${window.location.pathname.includes('dashboard') ? 'text-blue-500' : 'text-zinc-600'} transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </button>
            <button onclick="location.href='1in2.html'" class="${window.location.pathname.includes('1in2.html') ? 'text-blue-500' : 'text-zinc-600'} transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2v8h8V2h-8zm0 11v9h8v-9h-8zM2 2v14h8V2H2zm0 17v3h8v-3H2z"/></svg>
            </button>
            <button onclick="location.href='1in2leaderboard.html'" class="${window.location.pathname.includes('leaderboard') ? 'text-blue-500' : 'text-zinc-600'} transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V3H8v6H2v12h20V11h-6zm-6 0V5h4v14h-4v-8zM4 11h4v8H4v-8zm16 8h-4v-6h4v6z"/></svg>
            </button>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', stickyNavHTML);
};

window.toggleMenu = () => document.getElementById('side-menu').classList.toggle('-translate-x-full');

window.logout = async () => {
    const { error } = await sb.auth.signOut();
    localStorage.clear();
    window.location.href = 'login.html';
};

document.addEventListener('DOMContentLoaded', injectGlobalUI);
