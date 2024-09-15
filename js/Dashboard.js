const chart = document.querySelector('#chart').getContext('2d');

// Tabla //
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'],

        datasets: [
            {
                label: '1D',
                data: [1796, 1908, 1936, 1895, 1836, 1807, 1765, 1710, 1660, 1632, 1768, 1822, 1928, 1881],
                borderColor: 'purple',
                borderWidth: 2
            },
            {
                label: '5D',
                data: [2688, 2922, 3282, 2728, 1940, 1071, 1679, 1554, 1328, 1572, 1294, 1194, 1585, 1677],
                borderColor: 'grey',
                borderWidth: 2
            },
            {
                label: '1M',
                data: [1796, 1908, 1936, 1895, 1836, 1807, 1765, 1710, 1660, 1632, 1768, 1822, 1928, 1881],
                borderColor: 'grey',
                borderWidth: 2
            },
            {
                label: 'BSE',
                data: [2688, 2922, 3282, 2728, 1940, 1071, 1679, 1554, 1328, 1572, 1294, 1194, 1585, 1677],
                borderColor: 'grey',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

// Enseñar o quitar la tabla lateral //

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// Cambiar tema //
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})