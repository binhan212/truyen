(function () {

var coverChars="仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg=["linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)","linear-gradient(135deg,#151a25,#1f2f3d,#152530)","linear-gradient(135deg,#251515,#3d1f1f,#301515)","linear-gradient(135deg,#152520,#1f3d2a,#153020)","linear-gradient(135deg,#251815,#3d281f,#302015)","linear-gradient(135deg,#202515,#303d1f,#253015)","linear-gradient(135deg,#1a1520,#301a2f,#251535)","linear-gradient(135deg,#151f25,#1a2f38,#152230)"];

var novels = [];
var filteredList = [];
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
    var bg=coverBg[(n._idx)%coverBg.length];
    var ch=coverChars[(n._idx*3+1)%coverChars.length];
    var title=n.title;
    if(queryText){title=esc(n.title).replace(new RegExp("("+queryText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","gi"),'<span class="highlight">$1</span>');}
    else title=esc(n.title);
    html+='<a class="card-h" href="detail.html?slug='+encodeURIComponent(n._slug)+'">'+
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

function getQueryParam(name){
  var q=window.location.search.substring(1);
  var pairs=q.split("&");
  for(var i=0;i<pairs.length;i++){var kv=pairs[i].split("=");if(decodeURIComponent(kv[0])===name)return kv[1]||"";}
  return null;
}

NovelsData.onReady(function(data){
  novels = data;
  var input=document.getElementById("searchInput");
  var timeout=null;
  input.addEventListener("input",function(){clearTimeout(timeout);timeout=setTimeout(doSearch,300);});
  input.addEventListener("keydown",function(e){if(e.key==="Enter")doSearch();});
  document.getElementById("btnSearch").addEventListener("click",doSearch);
  matchedList=novels.slice();
  filteredList=novels.slice();
  applyFilters();
  initSidebar();

  var q=getQueryParam("q");
  if(q){
    input.value=decodeURIComponent(q);
    doSearch();
  }
});

})();
