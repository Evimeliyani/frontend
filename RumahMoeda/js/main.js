fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        initDarkMode(); // jalankan setelah header masuk
    });

// fetch('footer/footer.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('footer').innerHTML = data;
//     });