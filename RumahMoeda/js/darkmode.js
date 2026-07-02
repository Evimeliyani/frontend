// const toggleBtn = document.getElementById('darkmode-toggle');

// // Cek preferensi user sebelumnya di localStorage
// if (localStorage.getItem('theme') === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
// }

// toggleBtn.addEventListener('click', () => {
//     let currentTheme = document.documentElement.getAttribute('data-theme');
//     if (currentTheme === 'dark') {
//         document.documentElement.removeAttribute('data-theme');
//         localStorage.setItem('theme', 'light');
//         toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//         toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
//     }
// });


function initDarkMode() {
    const toggleBtn = document.getElementById('darkmode-toggle');

    if (!toggleBtn) return;

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggleBtn.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}