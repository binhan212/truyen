(function () {

var novels = [
  {id:1,title:"Cầu Đạo",author:"Thạch Trư",rating:4.7,chapters:771,tags:["Tiên hiệp","Huyền huyễn"],views:"2.3M",status:"ongoing",cover:"cv1",hot:true},
  {id:2,title:"Phàm Nhân Tu Tiên",author:"Vong Ngữ",rating:4.9,chapters:2456,tags:["Tiên hiệp","Tu luyện"],views:"5.1M",status:"ongoing",cover:"cv2",hot:true},
  {id:3,title:"Đấu Phá Thương Khung",author:"Thiên Tàm Thổ Đậu",rating:4.8,chapters:1648,tags:["Huyền huyễn","Dị thế"],views:"8.7M",status:"completed",cover:"cv3",hot:true},
  {id:4,title:"Vũ Động Càn Khôn",author:"Thiên Tàm Thổ Đậu",rating:4.7,chapters:1307,tags:["Huyền huyễn","Tu luyện"],views:"3.6M",status:"completed",cover:"cv4",hot:true},
  {id:5,title:"Đại Chúa Tể",author:"Thiên Tàm Thổ Đậu",rating:4.6,chapters:1677,tags:["Huyền huyễn","Hệ thống"],views:"4.2M",status:"completed",cover:"cv5",hot:true},
  {id:6,title:"Thần Mộ",author:"Thần Đông",rating:4.9,chapters:1756,tags:["Tiên hiệp","Huyền huyễn"],views:"6.3M",status:"completed",cover:"cv6"},
  {id:7,title:"Trường Sinh Giới",author:"Thần Đông",rating:4.8,chapters:1892,tags:["Tiên hiệp","Viễn cổ"],views:"5.8M",status:"ongoing",cover:"cv7"},
  {id:8,title:"Hoàn Mỹ Thế Giới",author:"Thần Đông",rating:4.9,chapters:2015,tags:["Tiên hiệp","Huyền huyễn"],views:"7.1M",status:"completed",cover:"cv8"},
  {id:9,title:"Tiên Nghịch",author:"Nhĩ Căn",rating:4.8,chapters:2088,tags:["Tiên hiệp","Tu luyện"],views:"4.9M",status:"completed",cover:"cv9"},
  {id:10,title:"Cầu Ma",author:"Nhĩ Căn",rating:4.7,chapters:1522,tags:["Tiên hiệp","Ma đạo"],views:"3.8M",status:"completed",cover:"cv10"},
  {id:11,title:"Nhất Niệm Vĩnh Hằng",author:"Nhĩ Căn",rating:4.8,chapters:1314,tags:["Tiên hiệp","Hài hước"],views:"4.4M",status:"completed",cover:"cv11"},
  {id:12,title:"Kiếm Lai",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1288,tags:["Tiên hiệp","Kiếm đạo"],views:"5.6M",status:"ongoing",cover:"cv12"},
  {id:13,title:"Tuyết Trung Hám Đao Hành",author:"Phong Hỏa Hí Chư Hầu",rating:4.9,chapters:1008,tags:["Võ hiệp","Quyền mưu"],views:"4.7M",status:"completed",cover:"cv13"},
  {id:14,title:"Đạo Quân",author:"Ngã Cật Tây Hồng Thị",rating:4.6,chapters:980,tags:["Tiên hiệp","Hệ thống"],views:"2.9M",status:"ongoing",cover:"cv14"},
  {id:15,title:"Mục Thần Ký",author:"Trạch Trư",rating:4.8,chapters:1872,tags:["Tiên hiệp","Huyền huyễn"],views:"4.1M",status:"completed",cover:"cv15"},
  {id:16,title:"Đế Tôn",author:"Trạch Trư",rating:4.7,chapters:1421,tags:["Tiên hiệp","Hệ thống"],views:"3.3M",status:"ongoing",cover:"cv16"},
  {id:17,title:"Vạn Cổ Thần Đế",author:"Phiêu Miễu",rating:4.5,chapters:2134,tags:["Huyền huyễn","Tu luyện"],views:"2.8M",status:"ongoing",cover:"cv17"},
  {id:18,title:"Thái Cổ Long Tượng Quyết",author:"Vọng Nguyệt",rating:4.6,chapters:876,tags:["Tiên hiệp","Viễn cổ"],views:"2.1M",status:"ongoing",cover:"cv18"},
  {id:19,title:"Nghịch Thiên Tà Thần",author:"Hỏa Tinh",rating:4.8,chapters:1987,tags:["Tiên hiệp","Nghịch tập"],views:"5.2M",status:"ongoing",cover:"cv19"},
  {id:20,title:"Linh Vực",author:"Nghịch Thương Thiên",rating:4.6,chapters:2100,tags:["Huyền huyễn","Linh khí"],views:"3.4M",status:"ongoing",cover:"cv20"},
  {id:21,title:"Tuyệt Thế Võ Hồn",author:"Lạc Thiên",rating:4.5,chapters:3456,tags:["Huyền huyễn","Võ hồn"],views:"4.9M",status:"ongoing",cover:"cv21"},
  {id:22,title:"Cửu Tinh Bá Thể Quyết",author:"Bình Phàm",rating:4.4,chapters:4123,tags:["Tiên hiệp","Thể tu"],views:"3.1M",status:"ongoing",cover:"cv22"},
  {id:23,title:"Thương Khung Chi Thượng",author:"Ngã Cật Tây Hồng Thị",rating:4.7,chapters:1567,tags:["Tiên hiệp","Huyền huyễn"],views:"3.9M",status:"completed",cover:"cv23"},
  {id:24,title:"Nguyên Tôn",author:"Thiên Tàm Thổ Đậu",rating:4.5,chapters:1520,tags:["Huyền huyễn","Trùng sinh"],views:"2.6M",status:"ongoing",cover:"cv24"}
];

var coverChars = "仙道劍帝神龍魔尊天玄蒼冥星月雲風雷火冰霜".split("");
var coverBg = [
  "linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)",
  "linear-gradient(135deg,#151a25,#1f2f3d,#152530)",
  "linear-gradient(135deg,#251515,#3d1f1f,#301515)",
  "linear-gradient(135deg,#152520,#1f3d2a,#153020)",
  "linear-gradient(135deg,#251815,#3d281f,#302015)",
  "linear-gradient(135deg,#202515,#303d1f,#253015)",
];

var sliderIndex = 0;
var hotNovels = novels.filter(function(n){return n.hot;});
var sliderTimer = null;

function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}

function renderSlider(){
  var track = document.getElementById("sliderTrack");
  var dots = document.getElementById("sliderDots");
  if(!track) return;
  var html = "";
  for(var i=0;i<hotNovels.length;i++){
    var n = hotNovels[i];
    html+='<a class="slide" href="detail.html" style="background:'+(coverBg[i%coverBg.length])+'">'+
      '<div class="slide-cover">'+
        '<span class="cv-icon">'+coverChars[i*2%coverChars.length]+'</span>'+
        '<span class="cv-label">'+n.title.replace(/\s/g,"·").toUpperCase()+'</span>'+
      '</div>'+
      '<div class="slide-info">'+
        '<span class="slide-badge">'+ (i===0?'&#x1F525; HOT NHẤT':i===1?'&#x2B50; ĐỀ CỬ':i===2?'&#x1F4C8; THỊNH HÀNH':'&#x2728; NỔI BẬT') +'</span>'+
        '<h2 class="slide-title">'+esc(n.title)+'</h2>'+
        '<div class="slide-author">Tác giả: <strong>'+esc(n.author)+'</strong></div>'+
        '<div class="slide-meta">'+
          '<span><iconify-icon icon="heroicons:star-20-solid" width="14" height="14" style="color:var(--star-active)"></iconify-icon> '+n.rating+'</span>'+
          '<span><iconify-icon icon="heroicons:book-open-20-solid" width="14" height="14"></iconify-icon> '+n.chapters+' chương</span>'+
          '<span><iconify-icon icon="heroicons:eye-20-solid" width="14" height="14"></iconify-icon> '+n.views+'</span>'+
        '</div>'+
        '<div class="slide-tags">'+n.tags.map(function(t){return'<span class="tag">'+t+'</span>';}).join('')+'</div>'+
      '</div>'+
    '</a>';
  }
  track.innerHTML = html;
  track.style.transform = "translateX(0)";
  if(dots){
    var dhtml="";
    for(var j=0;j<hotNovels.length;j++) dhtml+='<button class="dot'+(j===0?' active':'')+'" data-idx="'+j+'"></button>';
    dots.innerHTML=dhtml;
    dots.querySelectorAll(".dot").forEach(function(d){
      d.addEventListener("click",function(){goToSlide(parseInt(this.dataset.idx));});
    });
  }
}

function goToSlide(idx){
  if(idx<0)idx=hotNovels.length-1;
  if(idx>=hotNovels.length)idx=0;
  sliderIndex=idx;
  var track = document.getElementById("sliderTrack");
  if(track)track.style.transform="translateX(-"+(idx*100)+"%)";
  var dots=document.querySelectorAll(".dot");
  dots.forEach(function(d,i){d.classList.toggle("active",i===idx);});
  resetSliderTimer();
}

function nextSlide(){goToSlide(sliderIndex+1);}
function prevSlide(){goToSlide(sliderIndex-1);}

function resetSliderTimer(){
  if(sliderTimer)clearInterval(sliderTimer);
  sliderTimer=setInterval(nextSlide,4500);
}

function renderSection(containerId, list, badgeType){
  var c = document.getElementById(containerId);
  if(!c) return;
  var html="";
  for(var i=0;i<list.length;i++){
    var n=list[i];
    var bg=coverBg[i%coverBg.length];
    var ch=coverChars[(i*3+1)%coverChars.length];
    var badge="";
    if(badgeType==="update")badge='<span class="card-badge update">CH.'+n.chapters+'</span>';
    else if(badgeType==="new")badge='<span class="card-badge new">MỚI</span>';
    else if(badgeType==="full")badge='<span class="card-badge full">FULL</span>';
    else if(badgeType==="hot")badge='<span class="card-badge hot">HOT</span>';
    html+='<a class="card" href="detail.html">'+
      '<div class="card-cover" style="background:'+bg+'">'+
        badge+
        '<span class="cv-char">'+ch+'</span>'+
        '<span class="cv-tagline">'+esc(n.title.substring(0,12).toUpperCase())+'</span>'+
      '</div>'+
      '<div class="card-body">'+
        '<div class="card-title">'+esc(n.title)+'</div>'+
        '<div class="card-author">'+esc(n.author)+'</div>'+
        '<div class="card-meta">'+
          '<span class="card-rating"><iconify-icon icon="heroicons:star-20-solid" width="12" height="12"></iconify-icon> '+n.rating+'</span>'+
          '<span>'+n.chapters+' ch.</span>'+
        '</div>'+
      '</div>'+
    '</a>';
  }
  c.innerHTML=html;
}

function renderRanking(containerId, list, showChapters){
  var c = document.getElementById(containerId);
  if(!c) return;
  var html="";
  for(var i=0;i<list.length;i++){
    var n=list[i];
    html+='<a class="rank-item" href="detail.html">'+
      '<span class="rank-num">'+(i+1)+'</span>'+
      '<span class="rank-info">'+
        '<div class="rank-name">'+esc(n.title)+'</div>'+
        '<div class="rank-author">'+esc(n.author)+'</div>'+
      '</span>'+
      (showChapters?'<span class="rank-ch">'+n.chapters+' ch.</span>':'<span class="rank-ch">'+n.views+'</span>')+
    '</a>';
  }
  c.innerHTML=html;
}

function init(){
  renderSlider();

  var byRating = novels.slice().sort(function(a,b){return b.rating-a.rating;});
  var byViews  = novels.slice().sort(function(a,b){return parseFloat(b.views)-parseFloat(a.views);});
  var byRecent = novels.slice(); 
  var completed = novels.filter(function(n){return n.status==="completed";});
  var ongoing   = novels.filter(function(n){return n.status==="ongoing";});
  var newest    = ongoing.slice(0,6);
  var newlyComp = completed.slice(0,6);

  renderSection("sec-recommend", byRating.slice(0,6), "hot");
  renderSection("sec-latest", byRecent.slice(0,6), "update");
  renderSection("sec-mostread", byViews.slice(0,6), "");
  renderSection("sec-newposted", newest, "new");
  renderSection("sec-completed", newlyComp, "full");

  renderRanking("rank-popular", byViews.slice(0,10), false);
  renderRanking("rank-recommend", byRating.slice(0,10), true);

  document.getElementById("btnPrevSlide").addEventListener("click",prevSlide);
  document.getElementById("btnNextSlide").addEventListener("click",nextSlide);
  resetSliderTimer();

  var sliderWrap = document.getElementById("sliderWrap");
  if(sliderWrap){
    sliderWrap.addEventListener("mouseenter",function(){if(sliderTimer)clearInterval(sliderTimer);});
    sliderWrap.addEventListener("mouseleave",resetSliderTimer);
  }
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();

})();
