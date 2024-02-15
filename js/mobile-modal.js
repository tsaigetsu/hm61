// Находим кнопку для открытия мобильного меню
    const mobileMenuButton = document.querySelector('.menu-open-btn');

    // Находим кнопку для закрытия мобильного меню
    const mobileCloseButton = document.querySelector('.menu-close-btn');

    // Находим модальное окно мобильного меню
    const modalMobile = document.querySelector('.mob-menu');

    // Функция для открытия модального окна мобильного меню
    function openMobileMenu() {
        modalMobile.style.display = 'flex';
    }

    // Функция для закрытия модального окна мобильного меню
    function closeMobileMenu() {
        modalMobile.style.display = 'none';
    }

    // Добавляем обработчик события клика на кнопку для открытия мобильного меню
    mobileMenuButton.addEventListener('click', openMobileMenu);

    // Добавляем обработчик события клика на кнопку для закрытия мобильного меню
    mobileCloseButton.addEventListener('click', closeMobileMenu);