// Находим кнопки меню и кнопку закрытия меню
    const menuLinks = document.querySelectorAll('.mob-menu-link');
    const menuCloseButton = document.querySelector('.menu-close-btn');

    // Находим всю мобильную менюшку
    const mobMenu = document.querySelector('.mob-menu');

    // Функция для закрытия мобильной менюшки
    function closeMobileMenu() {
        mobMenu.style.display = 'none';
    }

    // Добавляем обработчик события клика на кнопки меню
    menuLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
    });

    // Добавляем обработчик события клика на кнопку закрытия меню
    menuCloseButton.addEventListener('click', closeMobileMenu);