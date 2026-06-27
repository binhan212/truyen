window.NovelsData = (function () {

var novels = [];
var callbacks = [];
var initializing = false;
var ready = false;

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

function loadExtras() {
  try {
    var raw = localStorage.getItem("truyen_extra_novels");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function getSlug(n, idx) {
  if (n.slug) return n.slug;
  return "novel-" + (idx + 1);
}

function normalize(arr) {
  return arr.map(function (n, i) {
    n = Object.assign({}, n);
    if (!n.chapters) n.chapters = 0;
    if (!n.desc) n.desc = "";
    if (!n.views) n.views = "0";
    if (!n.vN) n.vN = parseFloat(n.views) || 0;
    if (!n.status) n.status = "ongoing";
    if (!n.tags) n.tags = [];
    if (!n.rating) n.rating = 0;
    n._idx = i;
    n._slug = getSlug(n, i);
    return n;
  });
}

function fireCallbacks() {
  for (var i = 0; i < callbacks.length; i++) callbacks[i](novels);
  callbacks = [];
}

function doInit() {
  if (initializing) return;
  initializing = true;
  httpGet("assets/data/novels.json", function (err, data) {
    var base = [];
    if (!err) {
      try { base = JSON.parse(data); } catch (e) {}
    }
    var extras = loadExtras();
    novels = normalize(base.concat(extras));
    ready = true;
    initializing = false;
    fireCallbacks();
  });
}

function onReady(fn) {
  if (ready) { fn(novels); return; }
  callbacks.push(fn);
  if (!initializing) doInit();
}

window.addEventListener("pageshow", function (e) {
  if (e.persisted) {
    ready = false;
    initializing = false;
    callbacks = [];
    novels = [];
    doInit();
  }
});

function saveExtras(arr) {
  localStorage.setItem("truyen_extra_novels", JSON.stringify(arr));
}

function addNovel(info, cb) {
  var extras = loadExtras();
  var newNovel = Object.assign({
    slug: null, title: "", author: "", rating: 0, tags: [],
    views: "0", vN: 0, status: "ongoing", hot: false,
    desc: "", chapters: 0, wordCount: "0", recs: "0"
  }, info);
  newNovel.slug = newNovel.slug || (newNovel.title ? newNovel.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : "novel-" + Date.now());
  extras.push(newNovel);
  saveExtras(extras);
  if (cb) cb(newNovel);
  return newNovel;
}

function removeNovel(slug) {
  var extras = loadExtras().filter(function (n) {
    return getSlug(n, 0) !== slug;
  });
  saveExtras(extras);
  novels = novels.filter(function (n) { return n._slug !== slug; });
}

function findBySlug(slug) {
  for (var i = 0; i < novels.length; i++) {
    if (novels[i]._slug === slug) return novels[i];
  }
  return null;
}

return {
  onReady: onReady,
  addNovel: addNovel,
  removeNovel: removeNovel,
  findBySlug: findBySlug,
  getAll: function () { return novels; },
  reload: function () { ready = false; initializing = false; callbacks = []; novels = []; doInit(); }
};

})();
