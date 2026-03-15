function switchMenuTab(tab) {
  // タブボタン切り替え
  document.querySelectorAll('.menu-tab').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  // セクション切り替え
  const sections = ['nigiri', 'moriawase', 'sashimi', 'ippin', 'drink'];
  sections.forEach(id => {
    const el = document.getElementById('tab-' + id);
    if (el) el.style.display = id === tab ? 'block' : 'none';
  });
}

// 画像モーダル
let savedScrollY = 0;

function openImgModal(src, caption) {
  document.getElementById('img-modal-img').src = src;
  document.getElementById('img-modal-caption').textContent = caption;

  savedScrollY = window.scrollY || window.pageYOffset;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = '100%';

  document.getElementById('img-modal-overlay').style.display = 'block';
  document.getElementById('img-modal').style.display = 'flex';
}

function closeImgModal() {
  document.getElementById('img-modal-overlay').style.display = 'none';
  document.getElementById('img-modal').style.display = 'none';

  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, savedScrollY);
}

// ESCキーで閉じる
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeImgModal();
});
