(function () {
  var MANIFEST = "assets/files/chapters.json";

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

  function init() {
    httpGet(MANIFEST, function (err, data) {
      var chapters = [];
      if (!err) {
        try { chapters = JSON.parse(data); } catch (e) {}
      }
      if (!chapters.length) {
        chapters = ["caudao746.txt"];
      }
      chapters = sortChapters(chapters);
      renderChapterList(chapters);
      updateStats(chapters.length);
    });

    initTabs();
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
        a.href = "reader.html?ch=" + idx;
        a.innerHTML =
          '<span class="ch-num">' + esc(num !== null ? "#" + num : "#" + (idx + 1)) + '</span>' +
          '<span class="ch-name">' + esc(label) + '</span>' +
          '<span class="ch-arrow">&rsaquo;</span>';
        grid.appendChild(a);
      })(i);
    }

    var countEl = document.getElementById("chapterCount");
    if (countEl) countEl.textContent = chapters.length + " chương";
  }

  function updateStats(total) {
    var el = document.getElementById("statChapters");
    if (el) el.textContent = total;
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
