window.ThemeSwitcher = (function () {

var themes = {
  tiendao:     { name: "Tiên Đạo",     icon: "heroicons:sparkles-20-solid",       desc: "Hoàng kim cổ điển" },
  kyao:        { name: "Kỳ Ảo",        icon: "heroicons:moon-20-solid",            desc: "Tím huyền bí" },
  dothi:       { name: "Đô Thị",       icon: "heroicons:building-office-2-20-solid", desc: "Xanh hiện đại" },
  vohiep:      { name: "Võ Hiệp",      icon: "heroicons:fire-20-solid",            desc: "Đỏ nhiệt huyết" },
  huyenhuyen:  { name: "Huyền Huyễn",  icon: "heroicons:bolt-20-solid",            desc: "Lục ngọc bích" },
  ngontinh:    { name: "Ngôn Tình",    icon: "heroicons:heart-20-solid",           desc: "Hồng dịu dàng" },
  linhdi:      { name: "Linh Dị",      icon: "heroicons:eye-20-solid",             desc: "Bạc lạnh lẽo" },
  khoahuyen:   { name: "Khoa Huyễn",   icon: "heroicons:cpu-chip-20-solid",        desc: "Lục lam neon" },
  haihuoc:     { name: "Hài Hước",     icon: "heroicons:face-smile-20-solid",      desc: "Cam ấm áp" }
};

var STORAGE_KEY = "truyen_theme";
var current = null;

function getStored() {
  try { return localStorage.getItem(STORAGE_KEY) || "tiendao"; } catch(e) { return "tiendao"; }
}

function apply(themeKey) {
  if (!themes[themeKey]) themeKey = "tiendao";
  document.documentElement.setAttribute("data-theme", themeKey);
  current = themeKey;
  try { localStorage.setItem(STORAGE_KEY, themeKey); } catch(e) {}
}

function createWidget(containerEl) {
  if (!containerEl) return;

  var themeKey = getStored();
  if (!document.documentElement.getAttribute("data-theme")) {
    apply(themeKey);
  }

  var btn = document.createElement("button");
  btn.className = "theme-btn";
  btn.title = "Đổi giao diện";
  btn.innerHTML = '<iconify-icon icon="heroicons:paint-brush-20-solid" width="16" height="16"></iconify-icon>';
  containerEl.appendChild(btn);

  var panel = document.createElement("div");
  panel.className = "theme-panel";
  panel.id = "themePanel";
  var html = '<div class="theme-panel-title">Chọn giao diện</div><div class="theme-grid">';
  var keys = Object.keys(themes);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var t = themes[k];
    html += '<button class="theme-option' + (k === themeKey ? ' active' : '') + '" data-theme="' + k + '">' +
      '<iconify-icon icon="' + t.icon + '" width="20" height="20"></iconify-icon>' +
      '<div class="theme-option-name">' + t.name + '</div>' +
      '<div class="theme-option-desc">' + t.desc + '</div>' +
      '</button>';
  }
  html += '</div>';
  panel.innerHTML = html;
  document.body.appendChild(panel);

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("show");
  });

  panel.addEventListener("click", function (e) {
    var opt = e.target.closest(".theme-option");
    if (!opt) return;
    var key = opt.dataset.theme;
    apply(key);
    var opts = panel.querySelectorAll(".theme-option");
    for (var i = 0; i < opts.length; i++) opts[i].classList.remove("active");
    opt.classList.add("active");
    panel.classList.remove("show");
  });

  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove("show");
    }
  });

  return { apply: apply, getCurrent: function () { return current; } };
}

return {
  createWidget: createWidget,
  apply: apply,
  themes: themes
};

})();
