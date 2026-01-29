// UI-BRIDGE: GLOBAL HEADER & FOOTER INJECTION
const injectGlobalUI = () => {
    const headerHTML = `
    <header class="w-full max-w-md mx-auto px-6 py-4 flex justify-between items-center border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-[1000]">
        <div class="flex items-center gap-2" onclick="location.href='dashboard.html'" style="cursor: pointer;">
            <div class="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-black orbitron italic">CL</div>
            <span class="orbitron text-xs font-black tracking-tighter uppercase">Chicken <span class="brand-red">League</span></span>
        </div>
        <nav class="flex gap-4">
            <button onclick="location.href='1in2.html'" class="text-[9px] font-black uppercase text-gray-400 hover:text-white transition">Lobby</button>
            <button onclick="logout()" class="text-[9px] font-black uppercase text-red-500/80 hover:text-red-500 transition">Exit</button>
        </nav>
    </header>`;

    const footerHTML = `
    <footer class="w-full max-w-md mx-auto px-6 py-10 mt-10 border-t border-white/5 text-center">
        <p class="text-[8px] font-black text-gray-600 uppercase tracking-[0.5em]">© 2026 Chicken League Protocol</p>
        <div class="mt-4 flex justify-center gap-6 opacity-30">
            <span class="text-[10px] orbitron italic">BLACK</span>
            <span class="text-[10px] orbitron italic text-red-600">RED</span>
            <span class="text-[10px] orbitron italic">WHITE</span>
        </div>
    </footer>`;

    // Inject at the start and end of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
};

// Global Logout Function
window.logout = async () => {
    const { error } = await sb.auth.signOut();
    localStorage.clear();
    window.location.href = 'login.html';
};

// Execute injection once DOM is ready
document.addEventListener('DOMContentLoaded', injectGlobalUI);
