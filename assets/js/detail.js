(function () {

var MANIFEST = "assets/files/chapters.json";
var novel = null;

function httpGet(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.overrideMimeType("text/plain; charset=utf-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 0 || xhr.status === 200) cb(null, xhr.responseText);
      else cb(new Error("HTTP " + xhr.status), null);
    }
  };
  xhr.onerror = function () { cb(new Error("Network error"), null); };
  xhr.send();
}

function getQueryParam(name) {
  var q = window.location.search.substring(1);
  var pairs = q.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var kv = pairs[i].split("=");
    if (decodeURIComponent(kv[0]) === name) return decodeURIComponent(kv[1] || "");
  }
  return null;
}

function extractChapterNumber(filename) {
  var name = filename.replace(/\.txt$/i, "").replace(/^.*\//, "");
  var cleaned = name.replace(/[^\d]/g, " ");
  var nums = cleaned.split(/\s+/).filter(Boolean);
  for (var i = 0; i < nums.length; i++) {
    var p = parseInt(nums[i], 10);
    if (!isNaN(p)) return p;
  }
  return null;
}

function sortChapters(files) {
  return files.slice().sort(function (a, b) {
    var na = extractChapterNumber(a);
    var nb = extractChapterNumber(b);
    if (na !== null && nb !== null) return na - nb;
    if (na !== null) return -1;
    if (nb !== null) return 1;
    return a.localeCompare(b, undefined, { numeric: true });
  });
}

function renderNovelInfo() {
  if (!novel) return;

  document.title = novel.title + " - " + novel.author;

  var navTitle = document.querySelector(".nav-title");
  if (navTitle) navTitle.textContent = novel.title;

  var nameEl = document.querySelector(".novel-name");
  if (nameEl) nameEl.textContent = novel.title;

  var authorEl = document.querySelector(".author strong");
  if (authorEl) authorEl.textContent = novel.author;

  var coverLabel = document.querySelector(".cover-label");
  if (coverLabel) coverLabel.textContent = novel.title.replace(/\s/g, "\u00B7").toUpperCase();

  var scoreEl = document.querySelector(".rating-score");
  if (scoreEl) scoreEl.textContent = novel.rating || 0;

  var countEl = document.querySelector(".rating-count");
  if (countEl) countEl.textContent = "(245 đánh giá)";

  var tagsEl = document.querySelector(".tags");
  if (tagsEl) {
    tagsEl.innerHTML = (novel.tags || []).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join("");
  }

  var synopsis = document.querySelector(".synopsis");
  if (synopsis) synopsis.innerHTML = "<p>" + esc((novel.desc || "Đang cập nhật...").replace(/\n/g, "</p><p style=\"margin-top:1em;\">")) + "</p>";

  var footer = document.querySelector(".footer");
  if (footer) footer.innerHTML = "&copy; 2024 " + esc(novel.title) + " &mdash; Tất cả chương được lưu trữ tại assets/files/";

  renderStars(novel.rating);
}

function renderStars(rating) {
  r = parseFloat(rating) || 0;
  var heroStars = document.getElementById("heroStars");
  if (!heroStars) return;

  var full = Math.floor(r);
  var half = (r - full) >= 0.5 ? 1 : 0;
  var empty = 5 - full - half;

  var html = "";
  for (var i = 0; i < full; i++) html += '<iconify-icon class="star" icon="heroicons:star-20-solid" width="18" height="18"></iconify-icon>';
  if (half) html += '<iconify-icon class="star half" icon="heroicons:star-20-solid" width="18" height="18" style="opacity:0.7"></iconify-icon>';
  for (var j = 0; j < empty; j++) html += '<iconify-icon class="star empty" icon="heroicons:star-20-solid" width="18" height="18" style="opacity:0.15"></iconify-icon>';
  heroStars.innerHTML = html;
}

function loadChapters() {
  if (!novel || !novel._slug) {
    var grid = document.getElementById("chapterGrid");
    if (grid) grid.innerHTML = '<div class="loading-chapters">Truyện chưa có chương.</div>';
    return;
  }

  httpGet(MANIFEST, function (err, data) {
    var allChapters = [];
    if (!err) {
      try { allChapters = JSON.parse(data); } catch (e) {}
    }

    var prefix = novel._slug + "/";
    var chapters = allChapters.filter(function (f) {
      return f.indexOf(prefix) === 0;
    });

    if (!chapters.length) {
      var grid = document.getElementById("chapterGrid");
      if (grid) grid.innerHTML = '<div class="loading-chapters">Chưa có chương nào. Thêm file .txt vào thư mục assets/files/' + esc(novel._slug) + '/</div>';
      var countEl = document.getElementById("chapterCount");
      if (countEl) countEl.textContent = "0 chương";
      updateStats(0);
      return;
    }

    chapters = sortChapters(chapters);
    renderChapterList(chapters);
    updateStats(chapters.length);
  });
}

function renderChapterList(chapters) {
  var grid = document.getElementById("chapterGrid");
  if (!grid) return;
  grid.innerHTML = "";

  for (var i = 0; i < chapters.length; i++) {
    (function (idx) {
      var fileName = chapters[idx];
      var num = extractChapterNumber(fileName);
      var label = num !== null ? "Chương " + num : fileName.replace(/\.txt$/i, "").replace(/^.*\//, "");

      var a = document.createElement("a");
      a.className = "ch-row";
      a.href = "reader.html?slug=" + encodeURIComponent(novel._slug) + "&ch=" + idx;
      a.innerHTML =
        '<span class="ch-num">' + esc(num !== null ? "#" + num : "#" + (idx + 1)) + '</span>' +
        '<span class="ch-name">' + esc(label) + '</span>' +
        '<span class="ch-arrow">&rsaquo;</span>';
      grid.appendChild(a);
    })(i);
  }

  var countEl = document.getElementById("chapterCount");
  if (countEl) countEl.textContent = chapters.length + " chương";

  updateStats(chapters.length);
}

function updateStats(total) {
  var el = document.getElementById("statChapters");
  if (el) el.textContent = total;
  var wc = document.querySelector(".stat:nth-child(3) strong");
  if (wc && novel) wc.textContent = novel.wordCount || "0";
  var recs = document.querySelector(".stat:nth-child(4) strong");
  if (recs && novel) recs.textContent = novel.recs || "0";
}

function initTabs() {
  var btns = document.querySelectorAll(".tab-btn");
  var contents = document.querySelectorAll(".tab-content");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var tabId = this.dataset.tab;
      for (var j = 0; j < btns.length; j++) btns[j].classList.remove("active");
      for (var k = 0; k < contents.length; k++) contents[k].classList.remove("active");
      this.classList.add("active");
      var target = document.getElementById(tabId);
      if (target) target.classList.add("active");
    });
  }
}

function esc(str) {
  var d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function init() {
  var slug = getQueryParam("slug") || "caudao";

  NovelsData.onReady(function () {
    novel = NovelsData.findBySlug(slug);
    if (!novel) {
      document.title = "Không tìm thấy truyện";
      document.querySelector(".nav-title").textContent = "Lỗi";
      var nameEl = document.querySelector(".novel-name");
      if (nameEl) nameEl.textContent = "Không tìm thấy truyện";
      return;
    }
    renderNovelInfo();
    loadChapters();
  });

  initTabs();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

})();
