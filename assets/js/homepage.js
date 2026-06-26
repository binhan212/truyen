(function () {

var coverChars = "仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg = [
  "linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)",
  "linear-gradient(135deg,#151a25,#1f2f3d,#152530)",
  "linear-gradient(135deg,#251515,#3d1f1f,#301515)",
  "linear-gradient(135deg,#152520,#1f3d2a,#153020)",
  "linear-gradient(135deg,#251815,#3d281f,#302015)",
  "linear-gradient(135deg,#202515,#303d1f,#253015)",
];

var sliderIndex = 0;
var novels = [];
var sliderTimer = null;

function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

function formatViews(v) { return v || "0"; }
function formatChapters(c) { return c || 0; }

function detailUrl(n) {
  return "detail.html?slug=" + encodeURIComponent(n._slug);
}

function renderSlider() {
  var track = document.getElementById("sliderTrack");
  var dotsEl = document.getElementById("sliderDots");
  if (!track) return;

  var hotNovels = novels.filter(function (n) { return n.hot; }).slice(0, 4);
  if (!hotNovels.length) hotNovels = novels.slice(0, 4);

  var html = "";
  for (var i = 0; i < hotNovels.length; i++) {
    var n = hotNovels[i];
    html += '<a class="slide" href="' + detailUrl(n) + '" style="background:' + (coverBg[i % coverBg.length]) + '">' +
      '<div class="slide-cover">' +
      '<span class="cv-icon">' + coverChars[i * 2 % coverChars.length] + '</span>' +
      '<span class="cv-label">' + n.title.replace(/\s/g, "·").toUpperCase() + '</span>' +
      '</div>' +
      '<div class="slide-info">' +
      '<span class="slide-badge">' + (i === 0 ? '&#x1F525; HOT NHẤT' : i === 1 ? '&#x2B50; ĐỀ CỬ' : i === 2 ? '&#x1F4C8; THỊNH HÀNH' : '&#x2728; NỔI BẬT') + '</span>' +
      '<h2 class="slide-title">' + esc(n.title) + '</h2>' +
      '<div class="slide-author">Tác giả: <strong>' + esc(n.author) + '</strong></div>' +
      '<div class="slide-meta">' +
      '<span><iconify-icon icon="heroicons:star-20-solid" width="14" height="14" style="color:var(--star-active)"></iconify-icon> ' + (n.rating || 0) + '</span>' +
      '<span><iconify-icon icon="heroicons:book-open-20-solid" width="14" height="14"></iconify-icon> ' + formatChapters(n.chapters) + ' chương</span>' +
      '<span><iconify-icon icon="heroicons:eye-20-solid" width="14" height="14"></iconify-icon> ' + formatViews(n.views) + '</span>' +
      '</div>' +
      '<div class="slide-tags">' + (n.tags || []).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join("") + '</div>' +
      '</div>' +
      '</a>';
  }
  track.innerHTML = html;
  track.style.transform = "translateX(0)";

  if (dotsEl) {
    var dhtml = "";
    for (var j = 0; j < hotNovels.length; j++) dhtml += '<button class="dot' + (j === 0 ? ' active' : '') + '" data-idx="' + j + '"></button>';
    dotsEl.innerHTML = dhtml;
    dotsEl.querySelectorAll(".dot").forEach(function (d) {
      d.addEventListener("click", function () { goToSlide(parseInt(this.dataset.idx)); });
    });
  }
}

function goToSlide(idx) {
  if (idx < 0) idx = hotCount() - 1;
  if (idx >= hotCount()) idx = 0;
  sliderIndex = idx;
  var track = document.getElementById("sliderTrack");
  if (track) track.style.transform = "translateX(-" + (idx * 100) + "%)";
  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
  resetSliderTimer();
}

function hotCount() {
  var h = novels.filter(function (n) { return n.hot; });
  return h.length || 1;
}

function nextSlide() { goToSlide(sliderIndex + 1); }
function prevSlide() { goToSlide(sliderIndex - 1); }

function resetSliderTimer() {
  if (sliderTimer) clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 4500);
}

function renderSection(containerId, list, badgeType) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var html = "";
  for (var i = 0; i < list.length; i++) {
    var n = list[i];
    var bg = coverBg[i % coverBg.length];
    var ch = coverChars[(i * 3 + 1) % coverChars.length];
    var badge = "";
    if (badgeType === "update") badge = '<span class="card-badge update">CH.' + formatChapters(n.chapters) + '</span>';
    else if (badgeType === "new") badge = '<span class="card-badge new">MỚI</span>';
    else if (badgeType === "full") badge = '<span class="card-badge full">FULL</span>';
    else if (badgeType === "hot") badge = '<span class="card-badge hot">HOT</span>';
    html += '<a class="card" href="' + detailUrl(n) + '">' +
      '<div class="card-cover" style="background:' + bg + '">' +
      badge +
      '<span class="cv-char">' + ch + '</span>' +
      '<span class="cv-tagline">' + esc(n.title.substring(0, 12).toUpperCase()) + '</span>' +
      '</div>' +
      '<div class="card-body">' +
      '<div class="card-title">' + esc(n.title) + '</div>' +
      '<div class="card-author">' + esc(n.author) + '</div>' +
      '<div class="card-meta">' +
      '<span class="card-rating"><iconify-icon icon="heroicons:star-20-solid" width="12" height="12"></iconify-icon> ' + (n.rating || 0) + '</span>' +
      '<span>' + formatChapters(n.chapters) + ' ch.</span>' +
      '</div>' +
      '</div>' +
      '</a>';
  }
  c.innerHTML = html;
}

function renderRanking(containerId, list, showChapters) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var html = "";
  for (var i = 0; i < list.length; i++) {
    var n = list[i];
    html += '<a class="rank-item" href="' + detailUrl(n) + '">' +
      '<span class="rank-num">' + (i + 1) + '</span>' +
      '<span class="rank-info">' +
      '<div class="rank-name">' + esc(n.title) + '</div>' +
      '<div class="rank-author">' + esc(n.author) + '</div>' +
      '</span>' +
      (showChapters ? '<span class="rank-ch">' + formatChapters(n.chapters) + ' ch.</span>' : '<span class="rank-ch">' + formatViews(n.views) + '</span>') +
      '</a>';
  }
  c.innerHTML = html;
}

function init() {
  NovelsData.onReady(function (data) {
    novels = data;
    renderSlider();

    var byRating = novels.slice().sort(function (a, b) { return (b.rating || 0) - (a.rating || 0); });
    var byViews = novels.slice().sort(function (a, b) { return (b.vN || 0) - (a.vN || 0); });
    var completed = novels.filter(function (n) { return n.status === "completed"; });
    var ongoing = novels.filter(function (n) { return n.status === "ongoing"; });

    renderSection("sec-recommend", byRating.slice(0, 6), "hot");
    renderSection("sec-latest", novels.slice(0, 6), "update");
    renderSection("sec-mostread", byViews.slice(0, 6), "");
    renderSection("sec-newposted", ongoing.slice(0, 6), "new");
    renderSection("sec-completed", completed.slice(0, 6), "full");

    renderRanking("rank-popular", byViews.slice(0, 10), false);
    renderRanking("rank-recommend", byRating.slice(0, 10), true);

    document.getElementById("btnPrevSlide").addEventListener("click", prevSlide);
    document.getElementById("btnNextSlide").addEventListener("click", nextSlide);
    resetSliderTimer();

    var sliderWrap = document.getElementById("sliderWrap");
    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", function () { if (sliderTimer) clearInterval(sliderTimer); });
      sliderWrap.addEventListener("mouseleave", resetSliderTimer);
    }
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

})();
