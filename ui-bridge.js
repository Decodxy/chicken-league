// UI-BRIDGE: SOLID MONOCHROME FOOTER
const injectGlobalUI = () => {
    const headerHTML = `
    <header class="fixed top-0 left-0 right-0 z-[1001] w-full max-w-md mx-auto px-6 py-4 flex justify-between items-center bg-black border-b border-white/5">
        <button onclick="toggleMenu()" class="flex flex-col gap-1.5 p-1 active:scale-90 transition-transform">
            <div class="w-6 h-0.5 bg-white"></div>
            <div class="w-4 h-0.5 bg-zinc-600"></div>
            <div class="w-6 h-0.5 bg-white"></div>
        </button>
        <div class="flex items-center gap-2" onclick="location.href='dashboard.html'" style="cursor: pointer;">
            <div class="w-7 h-7 bg-white rounded-sm flex items-center justify-center font-black orbitron italic text-[10px] text-black">CL</div>
            <span class="font-black text-[12px] tracking-tighter uppercase text-white">CHICKEN <span class="text-zinc-500 italic">LEAGUE</span></span>
        </div>
        <div class="w-8"></div>
        <div id="side-menu" class="fixed inset-0 bg-black z-[2000] -translate-x-full transition-transform duration-300 flex flex-col p-10">
            <button onclick="toggleMenu()" class="self-start text-4xl font-light text-zinc-500 mb-10 hover:text-white">&times;</button>
            <nav class="flex flex-col gap-8">
                <a href="dashboard.html" class="text-xl font-black uppercase text-white">Control Center</a>
                <a href="1in2.html" class="text-xl font-black uppercase text-white">The Arena</a>
                <a href="1in2leaderboard.html" class="text-xl font-black uppercase text-white">Standings</a>
                <hr class="border-white/5 my-4">
                <button onclick="logout()" class="text-xl font-black uppercase text-blue-500 text-left underline decoration-blue-500/30">Sign Out</button>
            </nav>
        </div>
    </header>`;

    // MODIFIED: Nav is now pinned to the absolute bottom (bottom-0) with no side padding
    const stickyNavHTML = `
    <nav class="fixed bottom-0 left-0 right-0 z-[1000] w-full max-w-md mx-auto bg-black border-t border-white/10">
        <div class="flex justify-around items-center pt-4 pb-8 px-6">
            <button onclick="location.href='dashboard.html'" class="${window.location.pathname.includes('dashboard') ? 'text-blue-500' : 'text-zinc-600'} transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </button>
            <button onclick="location.href='1in2.html'" class="${window.location.pathname.includes('1in2.html') ? 'text-blue-500' : 'text-zinc-600'} transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2v8h8V2h-8zm0 11v9h8v-9h-8zM2 2v14h8V2H2zm0 17v3h8v-3H2z"/></svg>
            </button>
            <button onclick="location.href='1in2leaderboard.html'" class="${window.location.pathname.includes('leaderboard') ? 'text-blue-500' : 'text-zinc-600'} transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V3H8v6H2v12h20V11h-6zm-6 0V5h4v14h-4v-8zM4 11h4v8H4v-8zm16 8h-4v-6h4v6z"/></svg>
            </button>
        </div>
    </nav>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', stickyNavHTML);
};

window.toggleMenu = () => document.getElementById('side-menu').classList.toggle('-translate-x-full');
window.logout = async () => { await sb.auth.signOut(); localStorage.clear(); window.location.href = 'login.html'; };
document.addEventListener('DOMContentLoaded', injectGlobalUI);
