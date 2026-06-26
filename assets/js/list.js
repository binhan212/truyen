(function () {

var novels = [];

var coverChars = "仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg = [
  "linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)",
  "linear-gradient(135deg,#151a25,#1f2f3d,#152530)",
  "linear-gradient(135deg,#251515,#3d1f1f,#301515)",
  "linear-gradient(135deg,#152520,#1f3d2a,#153020)",
  "linear-gradient(135deg,#251815,#3d281f,#302015)",
  "linear-gradient(135deg,#202515,#303d1f,#253015)",
  "linear-gradient(135deg,#1a1520,#301a2f,#251535)",
  "linear-gradient(135deg,#151f25,#1a2f38,#152230)",
];

var PER_PAGE = 10;
var currentCat = "all";
var currentSort = "default";
var currentStatus = "all";
var currentPage = 1;
var filteredList = [];

function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

function getQueryParam(name) {
  var q = window.location.search.substring(1);
  var pairs = q.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var kv = pairs[i].split("=");
    if (decodeURIComponent(kv[0]) === name) return decodeURIComponent(kv[1] || "");
  }
  return null;
}

function applyFilters() {
  var list = novels.slice();

  if (currentCat === "recommend") list.sort(function (a, b) { return b.rating - a.rating; });
  else if (currentCat === "mostread") list.sort(function (a, b) { return b.vN - a.vN; });
  else if (currentCat === "newposted") list = list.filter(function (n) { return n.status === "ongoing"; });
  else if (currentCat === "completed") list = list.filter(function (n) { return n.status === "completed"; });

  if (currentStatus === "ongoing") list = list.filter(function (n) { return n.status === "ongoing"; });
  else if (currentStatus === "completed") list = list.filter(function (n) { return n.status === "completed"; });

  if (currentSort === "rating") list.sort(function (a, b) { return b.rating - a.rating; });
  else if (currentSort === "views") list.sort(function (a, b) { return b.vN - a.vN; });
  else if (currentSort === "chapters") list.sort(function (a, b) { return b.chapters - a.chapters; });
  else if (currentSort === "newest") list.sort(function (a, b) { return b._idx - a._idx; });

  filteredList = list;
  currentPage = 1;
  render();
  updateSidebarCounts();
}

function getBadgeType(n) {
  if (n.hot && currentCat === "recommend") return "hot";
  if (currentCat === "completed" || n.status === "completed") return "full";
  if (currentCat === "newposted") return "new";
  if (currentCat === "latest") return "update";
  return "";
}

function getCategoryTitle(cat) {
  var map = { recommend: "Đề Cử", latest: "Mới Cập Nhật", mostread: "Đọc Nhiều Nhất", newposted: "Mới Đăng", completed: "Hoàn Thành" };
  return map[cat] || "Tất Cả Truyện";
}

function render() {
  var total = filteredList.length;
  var totalPages = Math.ceil(total / PER_PAGE) || 1;
  var start = (currentPage - 1) * PER_PAGE;
  var end = Math.min(start + PER_PAGE, total);
  var pageItems = filteredList.slice(start, end);

  var html = "";
  for (var i = 0; i < pageItems.length; i++) {
    var n = pageItems[i];
    var bg = coverBg[n._idx % coverBg.length];
    var ch = coverChars[(n._idx * 3 + 1) % coverChars.length];
    var badge = getBadgeType(n);

    html +=
      '<a class="card-h" href="detail.html?slug=' + encodeURIComponent(n._slug) + '">' +
      '<div class="card-h-cover" style="background:' + bg + '">' +
      (badge ? '<span class="card-h-badge ' + badge + '">' + (badge === "full" ? "FULL" : badge === "new" ? "MỚI" : badge === "hot" ? "HOT" : "CH." + n.chapters) + '</span>' : "") +
      '<span class="cv-char">' + ch + '</span>' +
      '</div>' +
      '<div class="card-h-info">' +
      '<div class="card-h-title">' + esc(n.title) + '</div>' +
      '<div class="card-h-meta">' +
      '<span class="author-name">' + esc(n.author) + '</span>' +
      '<span class="dot-sep">&middot;</span>' +
      '<span class="card-h-rating"><iconify-icon icon="heroicons:star-20-solid" width="13" height="13"></iconify-icon> ' + n.rating + '</span>' +
      '<span class="dot-sep">&middot;</span>' +
      '<span>' + n.chapters + ' chương</span>' +
      '<span class="dot-sep">&middot;</span>' +
      '<span>' + n.views + ' lượt</span>' +
      '</div>' +
      (n.tags && n.tags.length ? '<div class="card-h-tags">' + n.tags.slice(0, 3).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join("") + '</div>' : "") +
      '<div class="card-h-desc">' + esc(n.desc) + '</div>' +
      '</div>' +
      '</a>';
  }

  var cardList = document.getElementById("cardList");
  if (cardList) cardList.innerHTML = html || '<div class="empty-state"><iconify-icon icon="heroicons:book-open-20-solid" width="40" height="40"></iconify-icon><p>Không tìm thấy truyện nào</p></div>';

  var countEl = document.getElementById("resultCount");
  if (countEl) countEl.textContent = total + " truyện";

  var pageInfo = document.getElementById("pageInfo");
  if (pageInfo && total > 0) pageInfo.textContent = "Hiển thị " + (start + 1) + "-" + end + " / " + total + " truyện";
  else if (pageInfo) pageInfo.textContent = "";

  document.getElementById("pageTitle").textContent = getCategoryTitle(currentCat);

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  var pag = document.getElementById("pagination");
  if (!pag) return;
  var html = "";

  html += '<button class="page-btn" ' + (currentPage <= 1 ? "disabled" : "") + ' data-pg="prev">' +
    '<iconify-icon icon="heroicons:chevron-left-20-solid" width="16" height="16"></iconify-icon></button>';

  var maxShow = 7;
  var startP = Math.max(1, currentPage - 3);
  var endP = Math.min(totalPages, startP + maxShow - 1);
  if (endP - startP < maxShow - 1) startP = Math.max(1, endP - maxShow + 1);

  if (startP > 1) { html += '<button class="page-btn" data-pg="1">1</button>'; if (startP > 2) html += '<span class="page-btn" style="border:none;cursor:default;opacity:0.5">&hellip;</span>'; }

  for (var i = startP; i <= endP; i++) {
    html += '<button class="page-btn' + (i === currentPage ? " active" : "") + '" data-pg="' + i + '">' + i + '</button>';
  }

  if (endP < totalPages) { if (endP < totalPages - 1) html += '<span class="page-btn" style="border:none;cursor:default;opacity:0.5">&hellip;</span>'; html += '<button class="page-btn" data-pg="' + totalPages + '">' + totalPages + '</button>'; }

  html += '<button class="page-btn" ' + (currentPage >= totalPages ? "disabled" : "") + ' data-pg="next">' +
    '<iconify-icon icon="heroicons:chevron-right-20-solid" width="16" height="16"></iconify-icon></button>';

  pag.innerHTML = html;

  var btns = pag.querySelectorAll(".page-btn[data-pg]");
  for (var j = 0; j < btns.length; j++) {
    btns[j].addEventListener("click", function () {
      var pg = this.dataset.pg;
      if (pg === "prev") currentPage = Math.max(1, currentPage - 1);
      else if (pg === "next") currentPage = Math.min(totalPages, currentPage + 1);
      else currentPage = parseInt(pg, 10);
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function updateSidebarCounts() {
  var setCnt = function (id, list) { var el = document.getElementById(id); if (el) el.textContent = list.length; };
  setCnt("cntRecommend", novels.slice().sort(function (a, b) { return b.rating - a.rating; }));
  setCnt("cntLatest", novels);
  setCnt("cntMostread", novels.slice().sort(function (a, b) { return b.vN - a.vN; }));
  setCnt("cntNewposted", novels.filter(function (n) { return n.status === "ongoing"; }));
  setCnt("cntCompleted", novels.filter(function (n) { return n.status === "completed"; }));
}

function initSidebar() {
  updateSidebarCounts();

  var catItems = document.querySelectorAll("#catList .sidebar-item");
  for (var i = 0; i < catItems.length; i++) {
    catItems[i].addEventListener("click", function () {
      for (var j = 0; j < catItems.length; j++) catItems[j].classList.remove("active");
      this.classList.add("active");
      currentCat = this.dataset.cat;
      applyFilters();
    });
  }

  var sortItems = document.querySelectorAll("#sortList .sidebar-item");
  for (var k = 0; k < sortItems.length; k++) {
    sortItems[k].addEventListener("click", function () {
      for (var j = 0; j < sortItems.length; j++) sortItems[j].classList.remove("active");
      this.classList.add("active");
      currentSort = this.dataset.sort;
      currentPage = 1;
      applyFilters();
    });
  }

  var statusItems = document.querySelectorAll("#statusList .sidebar-item");
  for (var m = 0; m < statusItems.length; m++) {
    statusItems[m].addEventListener("click", function () {
      for (var j = 0; j < statusItems.length; j++) statusItems[j].classList.remove("active");
      this.classList.add("active");
      currentStatus = this.dataset.status;
      applyFilters();
    });
  }
}

function init() {
  var catFromUrl = getQueryParam("cat");
  if (catFromUrl) {
    currentCat = catFromUrl;
    var catItems = document.querySelectorAll("#catList .sidebar-item");
    for (var i = 0; i < catItems.length; i++) {
      catItems[i].classList.toggle("active", catItems[i].dataset.cat === currentCat);
    }
  }
  applyFilters();
  updateSidebarCounts();
  initSidebar();
}

NovelsData.onReady(function (data) {
  novels = data;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
});

})();
