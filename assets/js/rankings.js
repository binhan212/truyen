(function () {

var coverChars="仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg=["linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)","linear-gradient(135deg,#151a25,#1f2f3d,#152530)","linear-gradient(135deg,#251515,#3d1f1f,#301515)","linear-gradient(135deg,#152520,#1f3d2a,#153020)","linear-gradient(135deg,#251815,#3d281f,#302015)","linear-gradient(135deg,#202515,#303d1f,#253015)","linear-gradient(135deg,#1a1520,#301a2f,#251535)","linear-gradient(135deg,#151f25,#1a2f38,#152230)"];
var changePool=[{dir:"up",val:3},{dir:"up",val:1},{dir:"up",val:5},{dir:"down",val:2},{dir:"down",val:1},{dir:"same",val:0},{dir:"up",val:7},{dir:"up",val:2}];

var novels = [];

function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}
function fmtNum(n){
  var m = n / 1000000;
  return m >= 1 ? m.toFixed(1) + "M" : (n / 1000).toFixed(0) + "K";
}

function renderRanking(list){
  var el=document.getElementById("rankList");
  if(!el)return;
  var html="";
  for(var i=0;i<list.length;i++){
    var n=list[i];
    var bg=coverBg[(n._idx)%coverBg.length];
    var ch=coverChars[(n._idx*3+1)%coverChars.length];
    var change=changePool[(n._idx+i)%changePool.length];
    var chCls=change.dir==="up"?"up":change.dir==="down"?"down":"same";
    var chSign=change.dir==="up"?"↑":change.dir==="down"?"↓":"—";
    html+='<a class="rank-row" href="detail.html?slug='+encodeURIComponent(n._slug)+'">'+
      '<span class="rank-pos"><span class="rank-num-text">'+(i+1)+'</span></span>'+
      '<div class="rank-cover" style="background:'+bg+'"><span class="cv">'+ch+'</span></div>'+
      '<div class="rank-info">'+
        '<div class="rank-title">'+esc(n.title)+'</div>'+
        '<div class="rank-meta"><span class="author">'+esc(n.author)+'</span><span>&middot;</span><span>'+n.chapters+' chương</span></div>'+
        (n.tags&&n.tags.length?'<div class="rank-tags">'+n.tags.slice(0,2).map(function(t){return'<span class="tag">'+t+'</span>';}).join("")+'</div>':'')+
      '</div>'+
      '<span class="rank-change '+chCls+'">'+chSign+(change.val>0?change.val:"")+'</span>'+
      '<span class="rank-rating"><iconify-icon icon="heroicons:star-20-solid" width="13" height="13"></iconify-icon> '+n.rating+'</span>'+
      '<span class="rank-views">'+fmtNum(n.vN)+'</span>'+
    '</a>';
  }
  el.innerHTML=html;
}

function switchTab(tab){
  var sorted;
  if(tab==="trending")sorted=novels.slice().sort(function(a,b){return b.vN*a.rating-a.vN*b.rating;});
  else if(tab==="recommend")sorted=novels.slice().sort(function(a,b){return b.rating-a.rating;});
  else if(tab==="views")sorted=novels.slice().sort(function(a,b){return b.vN-a.vN;});
  else if(tab==="completed")sorted=novels.filter(function(n){return n.status==="completed";}).sort(function(a,b){return b.rating-a.rating;});
  else if(tab==="chapters")sorted=novels.slice().sort(function(a,b){return b.chapters-a.chapters;});
  else sorted=novels.slice();
  renderRanking(sorted);
}

function init(){
  NovelsData.onReady(function(data){
    novels = data;
    var tabs=document.querySelectorAll("#tabBar .tab-btn");
    for(var i=0;i<tabs.length;i++){
      tabs[i].addEventListener("click",function(){
        for(var j=0;j<tabs.length;j++)tabs[j].classList.remove("active");
        this.classList.add("active");
        switchTab(this.dataset.tab);
      });
    }
    switchTab("trending");
  });
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
