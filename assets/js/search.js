(function () {

var novels = [
  {id:1,title:"Cầu Đạo",author:"Thạch Trư",rating:4.7,chapters:771,tags:["Tiên hiệp","Huyền huyễn"],views:"2.3M",vN:2.3,status:"ongoing",hot:true,desc:"Trần Khánh, một thiếu niên bình thường nơi thôn nhỏ, vô tình nhặt được khối ngọc bội cổ xưa..."},
  {id:2,title:"Phàm Nhân Tu Tiên",author:"Vong Ngữ",rating:4.9,chapters:2456,tags:["Tiên hiệp","Tu luyện"],views:"5.1M",vN:5.1,status:"ongoing",hot:true,desc:"Hàn Lập, thiếu niên nghèo khó, nhờ ý chí kiên cường và cơ duyên xảo hợp, từng bước lên đỉnh cao tu tiên giới..."},
  {id:3,title:"Đấu Phá Thương Khung",author:"Thiên Tàm Thổ Đậu",rating:4.8,chapters:1648,tags:["Huyền huyễn","Dị thế"],views:"8.7M",vN:8.7,status:"completed",hot:true,desc:"Tiêu Viêm, thiên tài một thời bỗng mất hết tu vi, trở thành phế vật. Một ngày, chiếc nhẫn bí ẩn đã thay đổi tất cả..."},
  {id:4,title:"Vũ Động Càn Khôn",author:"Thiên Tàm Thổ Đậu",rating:4.7,chapters:1307,tags:["Huyền huyễn","Tu luyện"],views:"3.6M",vN:3.6,status:"completed",hot:true,desc:"Lâm Động, thiếu niên xuất thân từ gia tộc sa sút, vô tình nhặt được tảng đá bí ẩn..."},
  {id:5,title:"Đại Chúa Tể",author:"Thiên Tàm Thổ Đậu",rating:4.6,chapters:1677,tags:["Huyền huyễn","Hệ thống"],views:"4.2M",vN:4.2,status:"completed",hot:true,desc:"Mục Trần với linh mạch bị phong ấn, bước vào Bắc Thương Linh Viện tìm con đường giải thoát..."},
  {id:6,title:"Thần Mộ",author:"Thần Đông",rating:4.9,chapters:1756,tags:["Tiên hiệp","Huyền huyễn"],views:"6.3M",vN:6.3,status:"completed",desc:"Thần chết rồi, ma diệt rồi... Một vạn năm sau, Thần Nam từ trong mộ phần thức tỉnh..."},
  {id:7,title:"Trường Sinh Giới",author:"Thần Đông",rating:4.8,chapters:1892,tags:["Tiên hiệp","Viễn cổ"],views:"5.8M",vN:5.8,status:"ongoing",desc:"Một thế giới hùng vĩ nơi chư thần ngã xuống, vạn tộc tranh hùng. Thiếu niên Tiêu Thần dấn thân tìm trường sinh..."},
  {id:8,title:"Hoàn Mỹ Thế Giới",author:"Thần Đông",rating:4.9,chapters:2015,tags:["Tiên hiệp","Huyền huyễn"],views:"7.1M",vN:7.1,status:"completed",desc:"Thạch Hạo, đứa trẻ bị vứt bỏ nơi rừng hoang, được người rừng nuôi lớn với sức mạnh man hoang..."},
  {id:9,title:"Tiên Nghịch",author:"Nhĩ Căn",rating:4.8,chapters:2088,tags:["Tiên hiệp","Tu luyện"],views:"4.9M",vN:4.9,status:"completed",desc:"Vương Lâm, thiếu niên không thiên phú, nhờ chiếc bình bí ẩn nghịch chuyển số mệnh..."},
  {id:10,title:"Cầu Ma",author:"Nhĩ Căn",rating:4.7,chapters:1522,tags:["Tiên hiệp","Ma đạo"],views:"3.8M",vN:3.8,status:"completed",desc:"Tô Minh, thiếu niên man tộc Ô Sơn, mang dòng máu đặc biệt, bước vào ma đạo đầy máu và nước mắt..."},
  {id:11,title:"Nhất Niệm Vĩnh Hằng",author:"Nhĩ Căn",rating:4.8,chapters:1314,tags:["Tiên hiệp","Hài hước"],views:"4.4M",vN:4.4,status:"completed",desc:"Bạch Tiểu Thuần sợ chết nhưng khao khát trường sinh, dùng đủ mọi thủ đoạn để sống lâu hơn..."},
  {id:12,title:"Kiếm Lai",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1288,tags:["Tiên hiệp","Kiếm đạo"],views:"5.6M",vN:5.6,status:"ongoing",desc:"Trần Bình An, thiếu niên nghèo nơi trấn Nê Bình, bước vào con đường kiếm đạo rộng lớn..."},
  {id:13,title:"Tuyết Trung Hám Đao Hành",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1008,tags:["Võ hiệp","Quyền mưu"],views:"4.7M",vN:4.7,status:"completed",desc:"Từ Phượng Niên, thế tử Bắc Lương, bề ngoài ăn chơi nhưng ẩn giấu tài trí hơn người..."},
  {id:14,title:"Đạo Quân",author:"Ngã Cật Tây Hồng Thị",rating:4.6,chapters:980,tags:["Tiên hiệp","Hệ thống"],views:"2.9M",vN:2.9,status:"ongoing",desc:"Lập trình viên hiện đại xuyên không đến thế giới tu tiên, dùng tư duy logic giải mã đại đạo..."},
  {id:15,title:"Mục Thần Ký",author:"Trạch Trư",rating:4.8,chapters:1872,tags:["Tiên hiệp","Huyền huyễn"],views:"4.1M",vN:4.1,status:"completed",desc:"Tần Mục, đứa trẻ được lão thôn trưởng nuôi dưỡng nơi Tàn Lão, khi bước ra khỏi thôn cả thiên hạ chấn động..."},
  {id:16,title:"Đế Tôn",author:"Trạch Trư",rating:4.7,chapters:1421,tags:["Tiên hiệp","Hệ thống"],views:"3.3M",vN:3.3,status:"ongoing",desc:"Giang Nam, thư sinh yếu đuối mang bí mật đế tôn, dùng trí tuệ chinh phục thế giới tu tiên..."},
  {id:17,title:"Vạn Cổ Thần Đế",author:"Phiêu Miễu",rating:4.5,chapters:2134,tags:["Huyền huyễn","Tu luyện"],views:"2.8M",vN:2.8,status:"ongoing",desc:"Vị thần đế vẫn lạc ngàn năm, trùng sinh vào thân thiếu niên, quyết tâm lần nữa bước lên đỉnh cao..."},
  {id:18,title:"Thái Cổ Long Tượng Quyết",author:"Vọng Nguyệt",rating:4.6,chapters:876,tags:["Tiên hiệp","Viễn cổ"],views:"2.1M",vN:2.1,status:"ongoing",desc:"Thiếu niên với long tượng huyết mạch thức tỉnh sức mạnh thái cổ..."},
  {id:19,title:"Nghịch Thiên Tà Thần",author:"Hỏa Tinh",rating:4.8,chapters:1987,tags:["Tiên hiệp","Nghịch tập"],views:"5.2M",vN:5.2,status:"ongoing",desc:"Vân Triệt mang huyền mạch bị phong ấn và viên tà châu, thề bảo vệ người mình yêu thương..."},
  {id:20,title:"Linh Vực",author:"Nghịch Thương Thiên",rating:4.6,chapters:2100,tags:["Huyền huyễn","Linh khí"],views:"3.4M",vN:3.4,status:"ongoing",desc:"Tần Liệt bị gia tộc ruồng bỏ, mang thiên lôi chi lực, khám phá sức mạnh tiềm ẩn..."},
  {id:21,title:"Tuyệt Thế Võ Hồn",author:"Lạc Thiên",rating:4.5,chapters:3456,tags:["Huyền huyễn","Võ hồn"],views:"4.9M",vN:4.9,status:"ongoing",desc:"Trần Phong với võ hồn rác rưởi, sau khi thức tỉnh để lộ bản chất tuyệt thế kinh thiên..."},
  {id:22,title:"Cửu Tinh Bá Thể Quyết",author:"Bình Phàm",rating:4.4,chapters:4123,tags:["Tiên hiệp","Thể tu"],views:"3.1M",vN:3.1,status:"ongoing",desc:"Long Trần có được Cửu Tinh Bá Thể Quyết cổ lão, thành tựu khiến chư thiên run sợ..."},
  {id:23,title:"Thương Khung Chi Thượng",author:"Ngã Cật Tây Hồng Thị",rating:4.7,chapters:1567,tags:["Tiên hiệp","Huyền huyễn"],views:"3.9M",vN:3.9,status:"completed",desc:"Thế giới kỳ ảo nơi con người vượt lên thương khung, hành trình từ số không đến vô địch..."},
  {id:24,title:"Nguyên Tôn",author:"Thiên Tàm Thổ Đậu",rating:4.5,chapters:1520,tags:["Huyền huyễn","Trùng sinh"],views:"2.6M",vN:2.6,status:"ongoing",desc:"Chu Nguyên có được Cửu Thú Khai Thiên Quyết, bắt đầu con đường báo thù và chinh phục..."}
];

var coverChars="仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg=["linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)","linear-gradient(135deg,#151a25,#1f2f3d,#152530)","linear-gradient(135deg,#251515,#3d1f1f,#301515)","linear-gradient(135deg,#152520,#1f3d2a,#153020)","linear-gradient(135deg,#251815,#3d281f,#302015)","linear-gradient(135deg,#202515,#303d1f,#253015)","linear-gradient(135deg,#1a1520,#301a2f,#251535)","linear-gradient(135deg,#151f25,#1a2f38,#152230)"];

var PER_PAGE=12;
var currentCat="all",currentSort="default",currentStatus="all",currentPage=1,matchedList=[],queryText="";

function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}

function doSearch(){
  var q=document.getElementById("searchInput").value.trim().toLowerCase();
  queryText=q;
  var stats=document.getElementById("searchStats");
  var mq=document.getElementById("matchQuery");
  if(!q){
    if(stats)stats.style.display="none";
    matchedList=[];
    render();
    return;
  }
  var result=novels.filter(function(n){
    if(n.title.toLowerCase().indexOf(q)>=0)return true;
    if(n.author.toLowerCase().indexOf(q)>=0)return true;
    for(var i=0;i<n.tags.length;i++){if(n.tags[i].toLowerCase().indexOf(q)>=0)return true;}
    return false;
  });
  matchedList=result;
  if(stats)stats.style.display="block";
  var mc=document.getElementById("matchCount");
  if(mc)mc.textContent=result.length;
  if(mq)mq.textContent=queryText;
  currentPage=1;
  applyFilters();
  updateSidebarCounts();
}

function applyFilters(){
  var list=matchedList.length?matchedList.slice():novels.slice();
  if(currentCat==="recommend")list.sort(function(a,b){return b.rating-a.rating;});
  else if(currentCat==="mostread")list.sort(function(a,b){return b.vN-a.vN;});
  if(currentStatus==="ongoing")list=list.filter(function(n){return n.status==="ongoing";});
  else if(currentStatus==="completed")list=list.filter(function(n){return n.status==="completed";});
  if(currentSort==="rating")list.sort(function(a,b){return b.rating-a.rating;});
  else if(currentSort==="views")list.sort(function(a,b){return b.vN-a.vN;});
  else if(currentSort==="chapters")list.sort(function(a,b){return b.chapters-a.chapters;});
  filteredList=list;
  currentPage=1;
  render();
}

function render(){
  var total=filteredList.length;
  var totalPages=Math.ceil(total/PER_PAGE)||1;
  var start=(currentPage-1)*PER_PAGE;
  var end=Math.min(start+PER_PAGE,total);
  var pageItems=filteredList.slice(start,end);
  var html="";
  for(var i=0;i<pageItems.length;i++){
    var n=pageItems[i];
    var bg=coverBg[(n.id-1)%coverBg.length];
    var ch=coverChars[(n.id*3+1)%coverChars.length];
    var title=n.title;
    if(queryText){title=esc(n.title).replace(new RegExp("("+queryText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi"),'<span class="highlight">$1</span>');}
    else title=esc(n.title);
    html+='<a class="card-h" href="detail.html">'+
      '<div class="card-h-cover" style="background:'+bg+'">'+
      '<span class="cv-char">'+ch+'</span>'+
      '</div>'+
      '<div class="card-h-info">'+
      '<div class="card-h-title">'+title+'</div>'+
      '<div class="card-h-meta">'+
      '<span class="author-name">'+esc(n.author)+'</span>'+
      '<span class="dot-sep">&middot;</span>'+
      '<span class="card-h-rating"><iconify-icon icon="heroicons:star-20-solid" width="13" height="13"></iconify-icon> '+n.rating+'</span>'+
      '<span class="dot-sep">&middot;</span>'+
      '<span>'+n.chapters+' chương</span>'+
      '<span class="dot-sep">&middot;</span>'+
      '<span>'+n.views+' lượt</span>'+
      '</div>'+
      (n.tags&&n.tags.length?'<div class="card-h-tags">'+n.tags.slice(0,3).map(function(t){return'<span class="tag">'+t+'</span>';}).join("")+'</div>':'')+
      '<div class="card-h-desc">'+esc(n.desc)+'</div>'+
      '</div></a>';
  }
  var cl=document.getElementById("cardList");
  if(cl)cl.innerHTML=html||'<div class="empty-state"><iconify-icon icon="heroicons:magnifying-glass-20-solid" width="48" height="48"></iconify-icon><p>'+(queryText?'Không tìm thấy kết quả cho "'+esc(queryText)+'"':'Nhập từ khóa để tìm kiếm truyện')+'</p></div>';
  var rc=document.getElementById("resultCount");
  if(rc)rc.textContent=total+" truyện";
  var pi=document.getElementById("pageInfo");
  if(pi&&total>0)pi.textContent="Hiển thị "+(start+1)+"-"+end+" / "+total+" truyện";
  else if(pi)pi.textContent="";
  renderPagination(totalPages);
}

function renderPagination(totalPages){
  var pag=document.getElementById("pagination");
  if(!pag)return;
  if(totalPages<=1){pag.innerHTML="";return;}
  var html='<button class="page-btn"'+(currentPage<=1?" disabled":"")+' data-pg="prev"><iconify-icon icon="heroicons:chevron-left-20-solid" width="16" height="16"></iconify-icon></button>';
  var maxShow=7,startP=Math.max(1,currentPage-3),endP=Math.min(totalPages,startP+maxShow-1);
  if(endP-startP<maxShow-1)startP=Math.max(1,endP-maxShow+1);
  if(startP>1){html+='<button class="page-btn" data-pg="1">1</button>';if(startP>2)html+='<span class="page-btn" style="border:none;cursor:default;opacity:0.5">&hellip;</span>';}
  for(var i=startP;i<=endP;i++){html+='<button class="page-btn'+(i===currentPage?" active":"")+'" data-pg="'+i+'">'+i+'</button>';}
  if(endP<totalPages){if(endP<totalPages-1)html+='<span class="page-btn" style="border:none;cursor:default;opacity:0.5">&hellip;</span>';html+='<button class="page-btn" data-pg="'+totalPages+'">'+totalPages+'</button>';}
  html+='<button class="page-btn"'+(currentPage>=totalPages?" disabled":"")+' data-pg="next"><iconify-icon icon="heroicons:chevron-right-20-solid" width="16" height="16"></iconify-icon></button>';
  pag.innerHTML=html;
  pag.querySelectorAll(".page-btn[data-pg]").forEach(function(b){b.addEventListener("click",function(){var pg=this.dataset.pg;if(pg==="prev")currentPage=Math.max(1,currentPage-1);else if(pg==="next")currentPage=Math.min(totalPages,currentPage+1);else currentPage=parseInt(pg,10);render();window.scrollTo({top:0,behavior:"smooth"});});});
}

function updateSidebarCounts(){
  var list=matchedList.length?matchedList.slice():novels.slice();
  var el=document.getElementById("cntAll");if(el)el.textContent=list.length;
}

function initSidebar(){
  updateSidebarCounts();
  document.querySelectorAll("#catList .sidebar-item").forEach(function(b){b.addEventListener("click",function(){document.querySelectorAll("#catList .sidebar-item").forEach(function(x){x.classList.remove("active")});this.classList.add("active");currentCat=this.dataset.cat;applyFilters();});});
  document.querySelectorAll("#sortList .sidebar-item").forEach(function(b){b.addEventListener("click",function(){document.querySelectorAll("#sortList .sidebar-item").forEach(function(x){x.classList.remove("active")});this.classList.add("active");currentSort=this.dataset.sort;applyFilters();});});
  document.querySelectorAll("#statusList .sidebar-item").forEach(function(b){b.addEventListener("click",function(){document.querySelectorAll("#statusList .sidebar-item").forEach(function(x){x.classList.remove("active")});this.classList.add("active");currentStatus=this.dataset.status;applyFilters();});});
  document.querySelectorAll("#quickTags .quick-tag").forEach(function(b){b.addEventListener("click",function(){document.getElementById("searchInput").value=this.dataset.tag;document.getElementById("searchInput").focus();doSearch();});});
}

function init(){
  var input=document.getElementById("searchInput");
  var timeout=null;
  input.addEventListener("input",function(){clearTimeout(timeout);timeout=setTimeout(doSearch,300);});
  input.addEventListener("keydown",function(e){if(e.key==="Enter")doSearch();});
  document.getElementById("btnSearch").addEventListener("click",doSearch);
  matchedList=novels.slice();
  applyFilters();
  initSidebar();
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
