fetch('./news.json')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('news-list');
      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'news-item';
        li.innerHTML = `
          <time class="news-date">${item.date}</time>
          <div class="news-body">
            <p class="news-title">${item.title}</p>
            <p class="news-text">${item.content}</p>
          </div>`;
        list.appendChild(li);
      });
    })
    .catch(() => {
      const list = document.getElementById('news-list');
      list.innerHTML = '<li class="news-empty">現在お知らせはありません。</li>';
    });

