(function () {
  var MANIFEST = "assets/files/chapters.json";
  var CHAPTERS_DIR = "assets/files/";

  var chapters = [];
  var currentIndex = -1;

  var $bcChapter = document.getElementById("bcChapter");
  var $chapterSelectBtn = document.getElementById("chapteSelectBtn");
  var $chapterSelectText = document.getElementById("chapterSelectText");
  var $chapterOverlay = document.getElementById("chapterOverlay");
  var $chapterPanelClose = document.getElementById("chapterPanelClose");
  var $chapterList = document.getElementById("chapterList");
  var $chapterTitle = document.getElementById("chapterTitle");
  var $chapterBody = document.getElementById("chapterBody");
  var $contentWrapper = document.getElementById("contentWrapper");
  var $loading = document.getElementById("loading");
  var $btnPrev = document.getElementById("btnPrev");
  var $btnNext = document.getElementById("btnNext");
  var $chapterCurrent = document.getElementById("chapterCurrent");
  var $chapterTotal = document.getElementById("chapterTotal");

  function httpGet(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.overrideMimeType("text/plain; charset=utf-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 0 || xhr.status === 200) {
          cb(null, xhr.responseText);
        } else {
          cb(new Error("HTTP " + xhr.status), null);
        }
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
      if (decodeURIComponent(kv[0]) === name) {
        return decodeURIComponent(kv[1] || "");
      }
    }
    return null;
  }

  function updateUrl(index) {
    var url = window.location.pathname + "?ch=" + index;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", url);
    }
  }

  function init() {
    httpGet(MANIFEST, function (err, data) {
      if (err) {
        showError("Không tải được danh sách chương: assets/files/chapters.json");
        return;
      }
      try {
        chapters = JSON.parse(data);
      } catch (e) {
        showError("chapters.json sai định dạng JSON");
        return;
      }
      if (!chapters.length) {
        showError("Không có chương nào trong danh sách");
        return;
      }
      chapters = sortChapters(chapters);

      var startIdx = 0;
      var paramCh = getQueryParam("ch");
      if (paramCh !== null) {
        var p = parseInt(paramCh, 10);
        if (!isNaN(p) && p >= 0 && p < chapters.length) {
          startIdx = p;
        }
      }
      loadChapterByIndex(startIdx);
    });
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

  function extractChapterNumber(filename) {
    var name = filename.replace(/\.txt$/i, "");
    var cleaned = name.replace(/[^\d]/g, " ");
    var nums = cleaned.split(/\s+/).filter(Boolean);
    for (var i = 0; i < nums.length; i++) {
      var p = parseInt(nums[i], 10);
      if (!isNaN(p)) return p;
    }
    return null;
  }

  function parseChapterTitle(firstLine) {
    var title = firstLine.trim().replace(/^\uFEFF/, "").trim();
    if (/^[Cc]h\u01B0\u01A1ng\s/i.test(title)) {
      var idx = title.indexOf(":");
      var idx2 = title.indexOf("(");
      var cut = title.length;
      if (idx > -1 && idx2 > -1) cut = Math.max(idx, idx2);
      else if (idx > -1) cut = idx;
      else if (idx2 > -1) cut = idx2;
      if (cut < title.length) title = title.substring(0, cut).trim();
    }
    return title || "Chương không tên";
  }

  function loadChapterByIndex(index) {
    if (index < 0 || index >= chapters.length) return;
    currentIndex = index;
    $contentWrapper.style.display = "none";
    $loading.style.display = "flex";
    $btnPrev.disabled = true;
    $btnNext.disabled = true;

    var fileName = chapters[index];
    httpGet(CHAPTERS_DIR + fileName, function (err, text) {
      if (err) {
        showError("Lỗi tải chương " + (index + 1) + ": " + err.message);
        return;
      }
      renderChapter(text);
    });
  }

  function renderChapter(text) {
    var lines = text.split(/\r?\n/);
    var firstLine = "";
    var contentStart = 0;

    for (var i = 0; i < lines.length; i++) {
      var t = lines[i].trim();
      if (t && !t.startsWith("\t")) {
        firstLine = t;
        contentStart = i;
        break;
      }
    }

    if (/^[Cc]h\u01B0\u01A1ng\s\d+/.test(firstLine)) {
      contentStart++;
    }

    var title = parseChapterTitle(firstLine);
    $chapterTitle.textContent = title;

    var html = "";
    for (var i = contentStart; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line) {
        html += "<p>" + esc(line) + "</p>\n";
      } else if (html) {
        html += "<p>&nbsp;</p>\n";
      }
    }
    $chapterBody.innerHTML = html || "<p>&nbsp;</p>";

    updateNavState();
    updateChapterListActive();
    updateUrl(currentIndex);
    $chapterSelectText.textContent = "Chương " + (currentIndex + 1);
    $chapterCurrent.textContent = currentIndex + 1;
    $chapterTotal.textContent = chapters.length;
    if ($bcChapter) $bcChapter.textContent = title;
    document.title = title + " - Cầu Đạo";

    $loading.style.display = "none";
    $contentWrapper.style.display = "block";
    $contentWrapper.classList.remove("chapter-content-animated");
    void $contentWrapper.offsetWidth;
    $contentWrapper.classList.add("chapter-content-animated");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateNavState() {
    $btnPrev.disabled = currentIndex <= 0;
    $btnNext.disabled = currentIndex >= chapters.length - 1;
  }

  function buildChapterList() {
    $chapterList.innerHTML = "";
    for (var i = 0; i < chapters.length; i++) {
      (function (idx) {
        var fileName = chapters[idx];
        var num = extractChapterNumber(fileName);
        var displayName = fileName.replace(/\.txt$/i, "").replace(/^.*\//, "");
        var item = document.createElement("button");
        item.className = "chapter-item";
        item.dataset.index = idx;
        if (idx === currentIndex) item.classList.add("active");

        var numEl = document.createElement("div");
        numEl.className = "ch-num";
        numEl.textContent = num !== null ? "Chương " + num : "Chương " + (idx + 1);

        var nameEl = document.createElement("div");
        nameEl.className = "ch-name";
        nameEl.textContent = displayName;

        item.appendChild(numEl);
        item.appendChild(nameEl);
        item.addEventListener("click", function () {
          closeChapterPanel();
          loadChapterByIndex(idx);
        });
        $chapterList.appendChild(item);
      })(i);
    }
  }

  function updateChapterListActive() {
    var items = $chapterList.querySelectorAll(".chapter-item");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle("active", parseInt(items[i].dataset.index) === currentIndex);
    }
  }

  function openChapterPanel() {
    buildChapterList();
    $chapterOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeChapterPanel() {
    $chapterOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showError(msg) {
    $loading.style.display = "none";
    $contentWrapper.style.display = "block";
    $chapterBody.innerHTML =
      '<p style="text-align:center;color:var(--text-secondary);padding:60px 0;">' + esc(msg) + "</p>";
    $chapterTitle.textContent = "Lỗi";
  }

  function esc(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  var lastClick = 0;
  function throttle(fn) {
    return function () {
      var now = Date.now();
      if (now - lastClick < 400) return;
      lastClick = now;
      fn();
    };
  }

  $btnPrev.addEventListener("click", throttle(function () {
    if (currentIndex > 0) loadChapterByIndex(currentIndex - 1);
  }));
  $btnNext.addEventListener("click", throttle(function () {
    if (currentIndex < chapters.length - 1) loadChapterByIndex(currentIndex + 1);
  }));
  $chapterSelectBtn.addEventListener("click", openChapterPanel);
  $chapterPanelClose.addEventListener("click", closeChapterPanel);
  $chapterOverlay.addEventListener("click", function (e) {
    if (e.target === $chapterOverlay) closeChapterPanel();
  });

  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if ($chapterOverlay.classList.contains("active")) {
      if (e.key === "Escape") closeChapterPanel();
    } else {
      if (e.key === "ArrowLeft") e.preventDefault() || $btnPrev.click();
      if (e.key === "ArrowRight") e.preventDefault() || $btnNext.click();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
