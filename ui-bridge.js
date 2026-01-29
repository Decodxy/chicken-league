// UI-BRIDGE: GLOBAL HEADER & STICKY NAV INJECTION
const injectGlobalUI = () => {
    // 1. TOP HEADER (Brand Identity)
    const headerHTML = `
    <header class="w-full max-w-md mx-auto px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[1000]">
        <div class="flex items-center gap-2">
            <div class="w-7 h-7 bg-red-600 rounded flex items-center justify-center font-black orbitron italic text-[10px]">CL</div>
            <span class="orbitron text-[10px] font-black tracking-widest uppercase text-white">Chicken <span class="brand-red">League</span></span>
        </div>
        <div class="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
    </header>`;

    // 2. STICKY BOTTOM MENU (The Command Center)
    const stickyNavHTML = `
    <nav class="fixed bottom-0 left-0 right-0 z-[1000] max-w-md mx-auto px-4 pb-6 pt-2">
        <div class="glass-ui flex justify-around items-center py-4 px-6 rounded-2xl border border-white/10 shadow-2xl bg-black/90 backdrop-blur-2xl">
            
            <button onclick="location.href='dashboard.html'" class="flex flex-col items-center gap-1 group">
                <div class="nav-icon ${window.location.pathname.includes('dashboard') ? 'text-red-600' : 'text-zinc-500'} group-hover:text-red-500 transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter ${window.location.pathname.includes('dashboard') ? 'text-white' : 'text-zinc-600'}">Home</span>
            </button>

            <button onclick="location.href='1in2.html'" class="flex flex-col items-center gap-1 group">
                <div class="nav-icon ${window.location.pathname.includes('1in2.html') ? 'text-red-600' : 'text-zinc-500'} group-hover:text-red-500 transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2v8h8V2h-8zm0 11v9h8v-9h-8zM2 2v14h8V2H2zm0 17v3h8v-3H2z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter ${window.location.pathname.includes('1in2.html') ? 'text-white' : 'text-zinc-600'}">Arena</span>
            </button>

            <button onclick="location.href='1in2leaderboard.html'" class="flex flex-col items-center gap-1 group">
                <div class="nav-icon ${window.location.pathname.includes('leaderboard') ? 'text-red-600' : 'text-zinc-500'} group-hover:text-red-500 transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V3H8v6H2v12h20V11h-6zm-6 0V5h4v14h-4v-8zM4 11h4v8H4v-8zm16 8h-4v-6h4v6z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter ${window.location.pathname.includes('leaderboard') ? 'text-white' : 'text-zinc-600'}">Ranks</span>
            </button>

            <button onclick="logout()" class="flex flex-col items-center gap-1 group">
                <div class="text-zinc-500 group-hover:text-red-500 transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7a6.92 6.92 0 0 1 2.59-5.42L6.17 5.17A8.99 8.99 0 0 0 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter text-zinc-600">Exit</span>
            </button>
        </div>
    </nav>`;

    // Inject to the DOM
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', stickyNavHTML);
};

// Global Logout
window.logout = async () => {
    await sb.auth.signOut();
    localStorage.clear();
    window.location.href = 'login.html';
};

document.addEventListener('DOMContentLoaded', injectGlobalUI);
