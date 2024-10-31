document.addEventListener('DOMContentLoaded', function () {
    // چک می‌کند که آیا تم قبلاً ذخیره شده است یا خیر
    const savedTheme = localStorage.getItem('theme') || 'cupcake';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // تغییر تم با استفاده از چک‌باکس
    const themeController = document.getElementById('theme-controller');
    themeController.checked = savedTheme === 'forest';

    themeController.addEventListener('change', function () {
        const newTheme = themeController.checked ? 'forest' : 'cupcake';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
