// UI-BRIDGE: GLOBAL HEADER & STICKY NAV INJECTION
const injectGlobalUI = () => {
    // 1. TOP HEADER (With Nav Menu)
    const headerHTML = `
    <header class="w-full max-w-md mx-auto px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[1000]">
        <div class="flex items-center gap-2" onclick="location.href='dashboard.html'" style="cursor: pointer;">
            <div class="w-7 h-7 bg-red-600 rounded flex items-center justify-center font-black orbitron italic text-[10px]">CL</div>
            <span class="orbitron text-[10px] font-black tracking-widest uppercase text-white">Chicken <span class="text-red-600">League</span></span>
        </div>
        
        <div class="flex items-center gap-4">
            <nav class="hidden sm:flex gap-3">
                <button onclick="location.href='dashboard.html'" class="text-[9px] font-black uppercase text-zinc-500 hover:text-white transition">Home</button>
            </nav>
            <button onclick="logout()" class="p-2 bg-white/5 hover:bg-red-600/20 border border-white/10 rounded-lg transition-all group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-400 group-hover:text-red-500"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            </button>
        </div>
    </header>`;

    // 2. STICKY BOTTOM MENU (The Command Center)
    const stickyNavHTML = `
    <nav class="fixed bottom-0 left-0 right-0 z-[1000] max-w-md mx-auto px-4 pb-6 pt-2">
        <div class="flex justify-around items-center py-4 px-6 rounded-2xl border border-white/10 shadow-2xl bg-black/90 backdrop-blur-2xl">
            
            <button onclick="location.href='dashboard.html'" class="flex flex-col items-center gap-1 group">
                <div class="${window.location.pathname.includes('dashboard') ? 'text-red-600' : 'text-zinc-500'} transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter ${window.location.pathname.includes('dashboard') ? 'text-white' : 'text-zinc-600'}">Home</span>
            </button>

            <button onclick="location.href='1in2.html'" class="flex flex-col items-center gap-1 group">
                <div class="${window.location.pathname.includes('1in2.html') ? 'text-red-600' : 'text-zinc-500'} transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2v8h8V2h-8zm0 11v9h8v-9h-8zM2 2v14h8V2H2zm0 17v3h8v-3H2z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter ${window.location.pathname.includes('1in2.html') ? 'text-white' : 'text-zinc-600'}">Arena</span>
            </button>

            <button onclick="location.href='1in2leaderboard.html'" class="flex flex-col items-center gap-1 group">
                <div class="${window.location.pathname.includes('leaderboard') ? 'text-red-600' : 'text-zinc-500'} transition-colors">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V3H8v6H2v12h20V11h-6zm-6 0V5h4v14h-4v-8zM4 11h4v8H4v-8zm16 8h-4v-6h4v6z"/></svg>
                </div>
                <span class="text-[8px] font-black uppercase tracking-tighter ${window.location.pathname.includes('leaderboard') ? 'text-white' : 'text-zinc-600'}">Ranks</span>
            </button>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', stickyNavHTML);
};

// Global Logout
window.logout = async () => {
    // Direct call to the 'sb' client initialized in security-bridge.js
    await sb.auth.signOut();
    localStorage.clear();
    window.location.href = 'login.html';
};

document.addEventListener('DOMContentLoaded', injectGlobalUI);
