document.addEventListener('DOMContentLoaded', function() {
    const themeController = document.querySelector('.theme-controller input[type="checkbox"]');
    const savedTheme = localStorage.getItem('theme');

    // اگر تم ذخیره‌شده وجود داشت، آن را بارگذاری می‌کنیم
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeController.checked = savedTheme === 'forest';
    } else {
        // در صورتی که تم ذخیره نشده، تم پیش‌فرض را تعیین می‌کنیم
        document.documentElement.setAttribute('data-theme', 'cupcake');
    }

    // تغییر تم و ذخیره‌سازی آن در LocalStorage
    themeController.addEventListener('change', function() {
        const newTheme = themeController.checked ? 'forest' : 'cupcake';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
