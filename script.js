// お知らせ読み込み
const newsList = document.getElementById('news-list');
if (newsList) {
    fetch('./news.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const li = document.createElement('li');
                li.className = 'news-item';
                li.innerHTML = `
          <time class="news-date">${item.date}</time>
          <div class="news-body">
            <p class="news-title">${item.title}</p>
            <p class="news-text">${item.content}</p>
          </div>`;
                newsList.appendChild(li);
            });
        })
        .catch(() => {
            newsList.innerHTML = '<li class="news-empty">現在お知らせはありません。</li>';
        });
}

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

