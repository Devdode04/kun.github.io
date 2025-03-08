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
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    let randomX, randomY;
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (isOverlapping(randomX, randomY, button));
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

function isOverlapping(x, y, element) {
    const elements = document.elementsFromPoint(x, y);
    return elements.some(el => el !== element && el !== document.body && el !== document.documentElement);
} 