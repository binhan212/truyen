(function () {

  var reading = [
    { id: 1, title: "Cầu Đạo", author: "Thạch Trư", rating: 4.7, chapters: 771, cover: 0, progress: 85, lastRead: "Chương 746", lastTime: "2 giờ trước" },
    { id: 2, title: "Phàm Nhân Tu Tiên", author: "Vong Ngữ", rating: 4.9, chapters: 2456, cover: 1, progress: 32, lastRead: "Chương 786", lastTime: "Hôm qua" },
    { id: 12, title: "Kiếm Lai", author: "Phong Hỏa Hí Chư Hầu", rating: 4.9, chapters: 1288, cover: 2, progress: 58, lastRead: "Chương 747", lastTime: "3 ngày trước" },
    { id: 7, title: "Trường Sinh Giới", author: "Thần Đông", rating: 4.8, chapters: 1892, cover: 3, progress: 15, lastRead: "Chương 284", lastTime: "1 tuần trước" },
    { id: 19, title: "Nghịch Thiên Tà Thần", author: "Hỏa Tinh", rating: 4.8, chapters: 1987, cover: 4, progress: 41, lastRead: "Chương 815", lastTime: "Hôm qua" }
  ];

  var saved = [
    { id: 8, title: "Hoàn Mỹ Thế Giới", author: "Thần Đông", rating: 4.9, chapters: 2015, cover: 5, savedTime: "Đã lưu 2 tuần trước" },
    { id: 6, title: "Thần Mộ", author: "Thần Đông", rating: 4.9, chapters: 1756, cover: 6, savedTime: "Đã lưu 1 tháng trước" },
    { id: 15, title: "Mục Thần Ký", author: "Trạch Trư", rating: 4.8, chapters: 1872, cover: 7, savedTime: "Đã lưu 3 ngày trước" },
    { id: 13, title: "Tuyết Trung Hám Đao Hành", author: "Phong Hỏa Hí Chư Hầu", rating: 4.9, chapters: 1008, cover: 0, savedTime: "Đã lưu 5 ngày trước" }
  ];

  var history = [
    { id: 3, title: "Đấu Phá Thương Khung", author: "Thiên Tàm Thổ Đậu", rating: 4.8, chapters: 1648, cover: 1, readTime: "Đọc 3 ngày trước", progress: 100 },
    { id: 9, title: "Tiên Nghịch", author: "Nhĩ Căn", rating: 4.8, chapters: 2088, cover: 2, readTime: "Đọc 1 tuần trước", progress: 72 },
    { id: 11, title: "Nhất Niệm Vĩnh Hằng", author: "Nhĩ Căn", rating: 4.8, chapters: 1314, cover: 3, readTime: "Đọc 2 tuần trước", progress: 100 }
  ];

  var coverChars = "仙道劍帝神龍魔尊天玄蒼冥".split("");
  var coverBg = [
    "linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)",
    "linear-gradient(135deg,#151a25,#1f2f3d,#152530)",
    "linear-gradient(135deg,#251515,#3d1f1f,#301515)",
    "linear-gradient(135deg,#152520,#1f3d2a,#153020)",
    "linear-gradient(135deg,#251815,#3d281f,#302015)",
    "linear-gradient(135deg,#202515,#303d1f,#253015)",
    "linear-gradient(135deg,#1a1520,#301a2f,#251535)",
    "linear-gradient(135deg,#151f25,#1a2f38,#152230)"
  ];

  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function renderReading() {
    var el = document.getElementById("shelfList");
    if (!el) return;
    var html = "";
    for (var i = 0; i < reading.length; i++) {
      var n = reading[i];
      var bg = coverBg[n.cover % coverBg.length];
      var ch = coverChars[n.cover % coverChars.length];
      html +=
        '<a class="shelf-card" href="reader.html?ch=0">' +
        '<div class="shelf-cover" style="background:' + bg + '"><span class="cv">' + ch + '</span></div>' +
        '<div class="shelf-info">' +
        '<div class="shelf-title">' + esc(n.title) + '</div>' +
        '<div class="shelf-meta"><span class="author">' + esc(n.author) + '</span><span>&middot;</span><span>' + n.chapters + ' ch</span><span class="shelf-rating"><iconify-icon icon="heroicons:star-20-solid" width="12" height="12"></iconify-icon>' + n.rating + '</span></div>' +
        '<div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:' + n.progress + '%"></div></div><span class="progress-text">' + n.progress + '%</span></div>' +
        '<div class="shelf-meta"><span>' + n.lastRead + '</span><span>&middot;</span><span class="shelf-time">' + n.lastTime + '</span></div>' +
        '<span class="shelf-cta">Đọc tiếp <iconify-icon icon="heroicons:chevron-right-20-solid" width="14" height="14"></iconify-icon></span>' +
        '</div>' +
        '<span class="shelf-actions"><button class="shelf-action" title="Xóa khỏi tủ sách" onclick="event.preventDefault();event.stopPropagation();"><iconify-icon icon="heroicons:trash-20-solid" width="18" height="18"></iconify-icon></button></span>' +
        '</a>';
    }
    el.innerHTML = html || '<div class="empty-shelf"><iconify-icon icon="heroicons:book-open-20-solid" width="56" height="56"></iconify-icon><p>Chưa có truyện nào đang đọc</p><p style="margin-top:8px"><a href="index.html">Khám phá thư viện</a></p></div>';
    updateStats();
  }

  function renderSaved() {
    var el = document.getElementById("shelfList");
    if (!el) return;
    var html = "";
    for (var i = 0; i < saved.length; i++) {
      var n = saved[i];
      var bg = coverBg[n.cover % coverBg.length];
      var ch = coverChars[n.cover % coverChars.length];
      html +=
        '<a class="shelf-card" href="detail.html">' +
        '<div class="shelf-cover" style="background:' + bg + '"><span class="cv">' + ch + '</span></div>' +
        '<div class="shelf-info">' +
        '<div class="shelf-title">' + esc(n.title) + '</div>' +
        '<div class="shelf-meta"><span class="author">' + esc(n.author) + '</span><span>&middot;</span><span>' + n.chapters + ' ch</span><span class="shelf-rating"><iconify-icon icon="heroicons:star-20-solid" width="12" height="12"></iconify-icon>' + n.rating + '</span></div>' +
        '<span class="shelf-time">' + n.savedTime + '</span>' +
        '<span class="shelf-cta">Xem chi tiết <iconify-icon icon="heroicons:chevron-right-20-solid" width="14" height="14"></iconify-icon></span>' +
        '</div>' +
        '<span class="shelf-actions"><button class="shelf-action" title="Bỏ lưu" onclick="event.preventDefault();event.stopPropagation();"><iconify-icon icon="heroicons:bookmark-slash-20-solid" width="18" height="18"></iconify-icon></button></span>' +
        '</a>';
    }
    el.innerHTML = html || '<div class="empty-shelf"><iconify-icon icon="heroicons:bookmark-20-solid" width="56" height="56"></iconify-icon><p>Chưa lưu truyện nào</p><p style="margin-top:8px"><a href="index.html">Khám phá thư viện</a></p></div>';
  }

  function renderHistory() {
    var el = document.getElementById("shelfList");
    if (!el) return;
    var html = "";
    for (var i = 0; i < history.length; i++) {
      var n = history[i];
      var bg = coverBg[n.cover % coverBg.length];
      var ch = coverChars[n.cover % coverChars.length];
      html +=
        '<a class="shelf-card" href="detail.html">' +
        '<div class="shelf-cover" style="background:' + bg + '"><span class="cv">' + ch + '</span></div>' +
        '<div class="shelf-info">' +
        '<div class="shelf-title">' + esc(n.title) + '</div>' +
        '<div class="shelf-meta"><span class="author">' + esc(n.author) + '</span><span>&middot;</span><span>' + n.chapters + ' ch</span><span class="shelf-rating"><iconify-icon icon="heroicons:star-20-solid" width="12" height="12"></iconify-icon>' + n.rating + '</span></div>' +
        (n.progress ? '<div class="progress-wrap"><div class="progress-bar"><div class="progress-fill" style="width:' + n.progress + '%"></div></div><span class="progress-text">' + n.progress + '%</span></div>' : '') +
        '<span class="shelf-time">' + n.readTime + '</span>' +
        '<span class="shelf-cta">Xem chi tiết <iconify-icon icon="heroicons:chevron-right-20-solid" width="14" height="14"></iconify-icon></span>' +
        '</div>' +
        '</a>';
    }
    el.innerHTML = html || '<div class="empty-shelf"><iconify-icon icon="heroicons:clock-20-solid" width="56" height="56"></iconify-icon><p>Chưa có lịch sử đọc</p><p style="margin-top:8px"><a href="index.html">Khám phá thư viện</a></p></div>';
  }

  function updateStats() {
    var sr = document.getElementById("statReading"); if (sr) sr.textContent = reading.length;
    var ss = document.getElementById("statSaved"); if (ss) ss.textContent = saved.length;
    var sh = document.getElementById("statHistory"); if (sh) sh.textContent = history.length;
  }

  function switchTab(tab) {
    if (tab === "reading") renderReading();
    else if (tab === "saved") renderSaved();
    else if (tab === "history") renderHistory();
  }

  function init() {
    renderReading();

    var tabs = document.querySelectorAll("#tabBar .tab-btn");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        for (var j = 0; j < tabs.length; j++) tabs[j].classList.remove("active");
        this.classList.add("active");
        switchTab(this.dataset.tab);
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
