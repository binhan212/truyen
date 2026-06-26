(function () {

var novels = [
  {id:1,title:"Cầu Đạo",author:"Thạch Trư",rating:4.7,chapters:771,tags:["Tiên hiệp","Huyền huyễn"],views:"2.3M",vN:2.3,status:"ongoing"},
  {id:2,title:"Phàm Nhân Tu Tiên",author:"Vong Ngữ",rating:4.9,chapters:2456,tags:["Tiên hiệp","Tu luyện"],views:"5.1M",vN:5.1,status:"ongoing"},
  {id:3,title:"Đấu Phá Thương Khung",author:"Thiên Tàm Thổ Đậu",rating:4.8,chapters:1648,tags:["Huyền huyễn","Dị thế"],views:"8.7M",vN:8.7,status:"completed"},
  {id:4,title:"Vũ Động Càn Khôn",author:"Thiên Tàm Thổ Đậu",rating:4.7,chapters:1307,tags:["Huyền huyễn","Tu luyện"],views:"3.6M",vN:3.6,status:"completed"},
  {id:5,title:"Đại Chúa Tể",author:"Thiên Tàm Thổ Đậu",rating:4.6,chapters:1677,tags:["Huyền huyễn","Hệ thống"],views:"4.2M",vN:4.2,status:"completed"},
  {id:6,title:"Thần Mộ",author:"Thần Đông",rating:4.9,chapters:1756,tags:["Tiên hiệp","Huyền huyễn"],views:"6.3M",vN:6.3,status:"completed"},
  {id:7,title:"Trường Sinh Giới",author:"Thần Đông",rating:4.8,chapters:1892,tags:["Tiên hiệp","Viễn cổ"],views:"5.8M",vN:5.8,status:"ongoing"},
  {id:8,title:"Hoàn Mỹ Thế Giới",author:"Thần Đông",rating:4.9,chapters:2015,tags:["Tiên hiệp","Huyền huyễn"],views:"7.1M",vN:7.1,status:"completed"},
  {id:9,title:"Tiên Nghịch",author:"Nhĩ Căn",rating:4.8,chapters:2088,tags:["Tiên hiệp","Tu luyện"],views:"4.9M",vN:4.9,status:"completed"},
  {id:10,title:"Cầu Ma",author:"Nhĩ Căn",rating:4.7,chapters:1522,tags:["Tiên hiệp","Ma đạo"],views:"3.8M",vN:3.8,status:"completed"},
  {id:11,title:"Nhất Niệm Vĩnh Hằng",author:"Nhĩ Căn",rating:4.8,chapters:1314,tags:["Tiên hiệp","Hài hước"],views:"4.4M",vN:4.4,status:"completed"},
  {id:12,title:"Kiếm Lai",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1288,tags:["Tiên hiệp","Kiếm đạo"],views:"5.6M",vN:5.6,status:"ongoing"},
  {id:13,title:"Tuyết Trung Hám Đao Hành",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1008,tags:["Võ hiệp","Quyền mưu"],views:"4.7M",vN:4.7,status:"completed"},
  {id:14,title:"Đạo Quân",author:"Ngã Cật Tây Hồng Thị",rating:4.6,chapters:980,tags:["Tiên hiệp","Hệ thống"],views:"2.9M",vN:2.9,status:"ongoing"},
  {id:15,title:"Mục Thần Ký",author:"Trạch Trư",rating:4.8,chapters:1872,tags:["Tiên hiệp","Huyền huyễn"],views:"4.1M",vN:4.1,status:"completed"},
  {id:16,title:"Đế Tôn",author:"Trạch Trư",rating:4.7,chapters:1421,tags:["Tiên hiệp","Hệ thống"],views:"3.3M",vN:3.3,status:"ongoing"},
  {id:17,title:"Vạn Cổ Thần Đế",author:"Phiêu Miễu",rating:4.5,chapters:2134,tags:["Huyền huyễn","Tu luyện"],views:"2.8M",vN:2.8,status:"ongoing"},
  {id:18,title:"Thái Cổ Long Tượng Quyết",author:"Vọng Nguyệt",rating:4.6,chapters:876,tags:["Tiên hiệp","Viễn cổ"],views:"2.1M",vN:2.1,status:"ongoing"},
  {id:19,title:"Nghịch Thiên Tà Thần",author:"Hỏa Tinh",rating:4.8,chapters:1987,tags:["Tiên hiệp","Nghịch tập"],views:"5.2M",vN:5.2,status:"ongoing"},
  {id:20,title:"Linh Vực",author:"Nghịch Thương Thiên",rating:4.6,chapters:2100,tags:["Huyền huyễn","Linh khí"],views:"3.4M",vN:3.4,status:"ongoing"},
  {id:21,title:"Tuyệt Thế Võ Hồn",author:"Lạc Thiên",rating:4.5,chapters:3456,tags:["Huyền huyễn","Võ hồn"],views:"4.9M",vN:4.9,status:"ongoing"},
  {id:22,title:"Cửu Tinh Bá Thể Quyết",author:"Bình Phàm",rating:4.4,chapters:4123,tags:["Tiên hiệp","Thể tu"],views:"3.1M",vN:3.1,status:"ongoing"},
  {id:23,title:"Thương Khung Chi Thượng",author:"Ngã Cật Tây Hồng Thị",rating:4.7,chapters:1567,tags:["Tiên hiệp","Huyền huyễn"],views:"3.9M",vN:3.9,status:"completed"},
  {id:24,title:"Nguyên Tôn",author:"Thiên Tàm Thổ Đậu",rating:4.5,chapters:1520,tags:["Huyền huyễn","Trùng sinh"],views:"2.6M",vN:2.6,status:"ongoing"}
];

var coverChars="仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg=["linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)","linear-gradient(135deg,#151a25,#1f2f3d,#152530)","linear-gradient(135deg,#251515,#3d1f1f,#301515)","linear-gradient(135deg,#152520,#1f3d2a,#153020)","linear-gradient(135deg,#251815,#3d281f,#302015)","linear-gradient(135deg,#202515,#303d1f,#253015)","linear-gradient(135deg,#1a1520,#301a2f,#251535)","linear-gradient(135deg,#151f25,#1a2f38,#152230)"];
var changePool=[{dir:"up",val:3},{dir:"up",val:1},{dir:"up",val:5},{dir:"down",val:2},{dir:"down",val:1},{dir:"same",val:0},{dir:"up",val:7},{dir:"up",val:2}];

function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}
function fmtNum(n){return n>=1?n.toFixed(1)+"M":(n*1000).toFixed(0)+"K";}

function renderRanking(list){
  var el=document.getElementById("rankList");
  if(!el)return;
  var html="";
  for(var i=0;i<list.length;i++){
    var n=list[i];
    var bg=coverBg[(n.id-1)%coverBg.length];
    var ch=coverChars[(n.id*3+1)%coverChars.length];
    var change=changePool[(n.id+i)%changePool.length];
    var chCls=change.dir==="up"?"up":change.dir==="down"?"down":"same";
    var chSign=change.dir==="up"?"↑":change.dir==="down"?"↓":"—";
    html+='<a class="rank-row" href="detail.html">'+
      '<span class="rank-pos"><span class="rank-num-text">'+(i+1)+'</span></span>'+
      '<div class="rank-cover" style="background:'+bg+'"><span class="cv">'+ch+'</span></div>'+
      '<div class="rank-info">'+
        '<div class="rank-title">'+esc(n.title)+'</div>'+
        '<div class="rank-meta"><span class="author">'+esc(n.author)+'</span><span>&middot;</span><span>'+n.chapters+' chương</span></div>'+
        (n.tags&&n.tags.length?'<div class="rank-tags">'+n.tags.slice(0,2).map(function(t){return'<span class="tag">'+t+'</span>';}).join("")+'</div>':'')+
      '</div>'+
      '<span class="rank-change '+chCls+'">'+chSign+(change.val>0?change.val:"")+'</span>'+
      '<span class="rank-rating"><iconify-icon icon="heroicons:star-20-solid" width="13" height="13"></iconify-icon> '+n.rating+'</span>'+
      '<span class="rank-views">'+n.views+'</span>'+
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
  var tabs=document.querySelectorAll("#tabBar .tab-btn");
  for(var i=0;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(){
      for(var j=0;j<tabs.length;j++)tabs[j].classList.remove("active");
      this.classList.add("active");
      switchTab(this.dataset.tab);
    });
  }
  switchTab("trending");
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
