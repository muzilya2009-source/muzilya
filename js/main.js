// ===== 1. ЛЕНИВАЯ ЗАГРУЗКА ВИДЕО (ПО КЛИКУ) =====
document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadVideoBtn');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoWrapper = document.getElementById('videoWrapper');
    
    if (loadButton) {
        loadButton.addEventListener('click', function() {
            // Создаём iframe с YouTube-видео (можно заменить на своё)
document.addEventListener('DOMContentLoaded', function() {
    const loadBtn = document.getElementById('loadVideoBtn');
    const placeholder = document.getElementById('videoPlaceholder');
    const videoWrapper = document.getElementById('videoWrapper');

    loadBtn.addEventListener('click', function() {
        // Скрываем блок‑заполнитель
        placeholder.style.display = 'none';

        // Показываем контейнер для видео
        videoWrapper.style.display = 'block';

        // Создаём iframe с YouTube‑видео
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.src = 'https://www.youtube.com/embed/Rf6gEn02iVY?autoplay=1&rel=0';
        iframe.title = 'Видео-презентация AR-BLOCK';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.frameBorder = '0'; // Убираем рамку

        // Добавляем класс для стилизации
        iframe.classList.add('youtube-video');

        // Вставляем iframe в контейнер
        videoWrapper.appendChild(iframe);
    });
});

            
            // Очищаем wrapper и добавляем iframe
            videoWrapper.innerHTML = '';
            videoWrapper.appendChild(iframe);
            
            // Прячем placeholder, показываем wrapper
            videoPlaceholder.style.display = 'none';
            videoWrapper.style.display = 'block';
            
            // Добавляем стили для правильного отображения iframe
            videoWrapper.style.position = 'relative';
            videoWrapper.style.paddingBottom = '56.25%'; /* 16:9 */
            videoWrapper.style.height = '0';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
        });
    }
    
    // ===== 2. ПРОВЕРКА ЗАГРУЗКИ ИЗОБРАЖЕНИЙ (ленивая загрузка) =====
    // Все изображения уже имеют атрибут loading="lazy" в HTML
    // Дополнительно логируем успешную загрузку страницы
    console.log('Сайт успешно загружен!');
    
    // ===== 3. ДОБАВЛЯЕМ АНИМАЦИЮ ПРИ СКРОЛЛЕ (опционально) =====
    // Простая анимация появления элементов при скролле
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Применяем анимацию только если браузер поддерживает Intersection Observer
    if ('IntersectionObserver' in window) {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
});
