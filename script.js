document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    if (query) {
        const searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    } else {
        alert('请输入搜索内容');
    }
});

document.getElementById('search-button').addEventListener('mouseenter', function() {
    const button = this;
    const container = document.querySelector('.search-container');
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}); 