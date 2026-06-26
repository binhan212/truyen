(function () {

var novels = [
  {id:1,title:"Cầu Đạo",author:"Thạch Trư",rating:4.7,chapters:771,tags:["Tiên hiệp","Huyền huyễn"],views:"2.3M",vN:2300000,status:"ongoing",hot:true,desc:"Trần Khánh, một thiếu niên bình thường nơi thôn nhỏ, vô tình nhặt được khối ngọc bội cổ xưa. Từ đó con đường tu tiên rộng mở, truy tìm chân lý giữa vạn cổ đại đạo..."},
  {id:2,title:"Phàm Nhân Tu Tiên",author:"Vong Ngữ",rating:4.9,chapters:2456,tags:["Tiên hiệp","Tu luyện"],views:"5.1M",vN:5100000,status:"ongoing",hot:true,desc:"Hàn Lập, một thiếu niên xuất thân nghèo khó, nhờ ý chí kiên cường và cơ duyên xảo hợp, từng bước bước lên đỉnh cao tu tiên giới, nơi kẻ yếu cũng có thể nghịch thiên..."},
  {id:3,title:"Đấu Phá Thương Khung",author:"Thiên Tàm Thổ Đậu",rating:4.8,chapters:1648,tags:["Huyền huyễn","Dị thế"],views:"8.7M",vN:8700000,status:"completed",hot:true,desc:"Tiêu Viêm, thiên tài một thời bỗng chốc mất hết tu vi, trở thành phế vật bị cả thế gian khinh rẻ. Nhưng một ngày nọ, chiếc nhẫn bí ẩn đã thay đổi tất cả..."},
  {id:4,title:"Vũ Động Càn Khôn",author:"Thiên Tàm Thổ Đậu",rating:4.7,chapters:1307,tags:["Huyền huyễn","Tu luyện"],views:"3.6M",vN:3600000,status:"completed",hot:true,desc:"Lâm Động, thiếu niên xuất thân từ gia tộc sa sút, vô tình nhặt được một tảng đá bí ẩn. Từ đó hắn bước lên con đường vũ động càn khôn, khuynh đảo thiên hạ..."},
  {id:5,title:"Đại Chúa Tể",author:"Thiên Tàm Thổ Đậu",rating:4.6,chapters:1677,tags:["Huyền huyễn","Hệ thống"],views:"4.2M",vN:4200000,status:"completed",hot:true,desc:"Mục Trần, thiếu niên với linh mạch bị phong ấn, bước vào Bắc Thương Linh Viện để tìm kiếm con đường giải thoát cho bản thân và người mẹ đang mất tích..."},
  {id:6,title:"Thần Mộ",author:"Thần Đông",rating:4.9,chapters:1756,tags:["Tiên hiệp","Huyền huyễn"],views:"6.3M",vN:6300000,status:"completed",desc:"Thần chết rồi, ma diệt rồi... Một vạn năm sau, Thần Nam từ trong mộ phần thức tỉnh. Hắn phát hiện thế giới đã thay đổi, còn hắn vẫn là kẻ lạc lõng giữa thời đại mới..."},
  {id:7,title:"Trường Sinh Giới",author:"Thần Đông",rating:4.8,chapters:1892,tags:["Tiên hiệp","Viễn cổ"],views:"5.8M",vN:5800000,status:"ongoing",desc:"Một thế giới hùng vĩ nơi chư thần ngã xuống, vạn tộc tranh hùng. Thiếu niên Tiêu Thần mang trong mình bí mật ngàn đời, dấn thân vào hành trình tìm kiếm trường sinh..."},
  {id:8,title:"Hoàn Mỹ Thế Giới",author:"Thần Đông",rating:4.9,chapters:2015,tags:["Tiên hiệp","Huyền huyễn"],views:"7.1M",vN:7100000,status:"completed",desc:"Thạch Hạo, một đứa trẻ bị gia tộc vứt bỏ nơi rừng hoang, được người rừng nuôi lớn. Hắn lớn lên cùng sức mạnh man hoang, từng bước khám phá bí mật của thế giới hoàn mỹ..."},
  {id:9,title:"Tiên Nghịch",author:"Nhĩ Căn",rating:4.8,chapters:2088,tags:["Tiên hiệp","Tu luyện"],views:"4.9M",vN:4900000,status:"completed",desc:"Vương Lâm, một thiếu niên bình thường không có thiên phú, nhờ vào chiếc bình bí ẩn mà nghịch chuyển số mệnh, từng bước trở thành cường giả chí tôn giữa dòng đời nghiệt ngã..."},
  {id:10,title:"Cầu Ma",author:"Nhĩ Căn",rating:4.7,chapters:1522,tags:["Tiên hiệp","Ma đạo"],views:"3.8M",vN:3800000,status:"completed",desc:"Tô Minh, một thiếu niên man tộc nơi núi rừng Ô Sơn, mang trong mình dòng máu đặc biệt. Số phận đưa đẩy hắn bước vào con đường ma đạo đầy máu và nước mắt..."},
  {id:11,title:"Nhất Niệm Vĩnh Hằng",author:"Nhĩ Căn",rating:4.8,chapters:1314,tags:["Tiên hiệp","Hài hước"],views:"4.4M",vN:4400000,status:"completed",desc:"Bạch Tiểu Thuần, một thiếu niên sợ chết nhưng khao khát trường sinh bất tử. Hắn gia nhập môn phái tu tiên, dùng đủ mọi thủ đoạn chỉ để sống lâu hơn một chút..."},
  {id:12,title:"Kiếm Lai",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1288,tags:["Tiên hiệp","Kiếm đạo"],views:"5.6M",vN:5600000,status:"ongoing",desc:"Trần Bình An, một thiếu niên nghèo khó nơi trấn nhỏ Nê Bình, bước vào con đường kiếm đạo rộng lớn. Một thanh kiếm, một bầu rượu, một đời phong lưu..."},
  {id:13,title:"Tuyết Trung Hám Đao Hành",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1008,tags:["Võ hiệp","Quyền mưu"],views:"4.7M",vN:4700000,status:"completed",desc:"Từ Phượng Niên, thế tử Bắc Lương vương phủ, bề ngoài là kẻ ăn chơi trác táng, kỳ thực ẩn giấu tài trí hơn người. Một thanh đao, một tòa thành, một đời giang hồ..."},
  {id:14,title:"Đạo Quân",author:"Ngã Cật Tây Hồng Thị",rating:4.6,chapters:980,tags:["Tiên hiệp","Hệ thống"],views:"2.9M",vN:2900000,status:"ongoing",desc:"Một lập trình viên hiện đại xuyên không đến thế giới tu tiên, mang theo hệ thống lập trình trong đầu. Hắn dùng tư duy logic để giải mã đại đạo, mở ra con đường chưa từng có..."},
  {id:15,title:"Mục Thần Ký",author:"Trạch Trư",rating:4.8,chapters:1872,tags:["Tiên hiệp","Huyền huyễn"],views:"4.1M",vN:4100000,status:"completed",desc:"Tần Mục, một đứa trẻ được lão thôn trưởng nuôi dưỡng nơi thôn nhỏ Tàn Lão, lớn lên giữa những truyền thuyết xa xưa. Khi hắn bước ra khỏi thôn, cả thiên hạ chấn động..."},
  {id:16,title:"Đế Tôn",author:"Trạch Trư",rating:4.7,chapters:1421,tags:["Tiên hiệp","Hệ thống"],views:"3.3M",vN:3300000,status:"ongoing",desc:"Giang Nam, một thư sinh yếu đuối, mang trong mình bí mật của một đời đế tôn. Hắn dùng trí tuệ và mưu lược để từng bước chinh phục thế giới tu tiên tàn khốc..."},
  {id:17,title:"Vạn Cổ Thần Đế",author:"Phiêu Miễu",rating:4.5,chapters:2134,tags:["Huyền huyễn","Tu luyện"],views:"2.8M",vN:2800000,status:"ongoing",desc:"Một vị thần đế vẫn lạc ngàn năm trước, mang theo ký ức tiền kiếp trùng sinh vào thân xác thiếu niên. Từ đỉnh cao rơi xuống vực sâu, hắn quyết tâm một lần nữa bước lên..."},
  {id:18,title:"Thái Cổ Long Tượng Quyết",author:"Vọng Nguyệt",rating:4.6,chapters:876,tags:["Tiên hiệp","Viễn cổ"],views:"2.1M",vN:2100000,status:"ongoing",desc:"Thiếu niên với long tượng huyết mạch thức tỉnh, có được sức mạnh của thái cổ long tượng. Mỗi một lần thức tỉnh, thực lực của hắn tăng lên gấp bội..."},
  {id:19,title:"Nghịch Thiên Tà Thần",author:"Hỏa Tinh",rating:4.8,chapters:1987,tags:["Tiên hiệp","Nghịch tập"],views:"5.2M",vN:5200000,status:"ongoing",desc:"Vân Triệt, một thiếu niên mang trong mình huyền mạch bị phong ấn và viên tà châu bí ẩn. Hắn thề sẽ bảo vệ những người mình yêu thương, dù có phải nghịch thiên cải mệnh..."},
  {id:20,title:"Linh Vực",author:"Nghịch Thương Thiên",rating:4.6,chapters:2100,tags:["Huyền huyễn","Linh khí"],views:"3.4M",vN:3400000,status:"ongoing",desc:"Tần Liệt, thiếu niên bị gia tộc ruồng bỏ, mang trong mình thiên lôi chi lực hiếm có. Tại Linh Vực rộng lớn, hắn từng bước khám phá sức mạnh tiềm ẩn của chính mình..."},
  {id:21,title:"Tuyệt Thế Võ Hồn",author:"Lạc Thiên",rating:4.5,chapters:3456,tags:["Huyền huyễn","Võ hồn"],views:"4.9M",vN:4900000,status:"ongoing",desc:"Trần Phong, một thiếu niên với võ hồn rác rưởi bị cả thế gian chê cười. Nhưng sau một lần kỳ ngộ, võ hồn của hắn thức tỉnh, để lộ bản chất tuyệt thế kinh thiên..."},
  {id:22,title:"Cửu Tinh Bá Thể Quyết",author:"Bình Phàm",rating:4.4,chapters:4123,tags:["Tiên hiệp","Thể tu"],views:"3.1M",vN:3100000,status:"ongoing",desc:"Long Trần, một thiếu niên bị vứt bỏ, tình cờ có được Cửu Tinh Bá Thể Quyết cổ lão. Con đường thể tu đầy chông gai, nhưng thành tựu đạt được khiến chư thiên run sợ..."},
  {id:23,title:"Thương Khung Chi Thượng",author:"Ngã Cật Tây Hồng Thị",rating:4.7,chapters:1567,tags:["Tiên hiệp","Huyền huyễn"],views:"3.9M",vN:3900000,status:"completed",desc:"Một thế giới kỳ ảo nơi con người có thể tu luyện đến đỉnh cao, trở thành tồn tại vượt lên trên thương khung. Hành trình của một thiếu niên từ số không đến vô địch..."},
  {id:24,title:"Nguyên Tôn",author:"Thiên Tàm Thổ Đậu",rating:4.5,chapters:1520,tags:["Huyền huyễn","Trùng sinh"],views:"2.6M",vN:2600000,status:"ongoing",desc:"Chu Nguyên, thiên tài một thời mang oán khí trong lòng, trong một lần kỳ ngộ đã có được Cửu Thú Khai Thiên Quyết. Từ hắn bắt đầu con đường báo thù và chinh phục..."}
];

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
  else if (currentSort === "newest") list.sort(function (a, b) { return b.id - a.id; });

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
    var bg = coverBg[(n.id - 1) % coverBg.length];
    var ch = coverChars[(n.id * 3 + 1) % coverChars.length];
    var badge = getBadgeType(n);

    html +=
      '<a class="card-h" href="detail.html">' +
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

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

})();
