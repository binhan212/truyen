(function(){

var authors={
  1:{name:"Thạch Trư",initials:"TT",bio:"Bút danh nổi tiếng trong giới tiên hiệp Việt Nam. Văn phong sắc bén, tình tiết logic chặt chẽ, được độc giả yêu thích nhờ khả năng xây dựng thế giới quan rộng lớn và hệ thống tu luyện sáng tạo.",stats:{works:3,totalChapters:4064,totalViews:"9.5M",followers:"25.4K"},bg:"linear-gradient(135deg,#1a1525,#2a1f3d)"},
  2:{name:"Nhĩ Căn",initials:"NC",bio:"Cây bút lão làng của Trung Quốc với hàng loạt tác phẩm kinh điển. Nổi tiếng với lối viết sâu sắc, nhân vật có chiều sâu tâm lý và những cú plot twist đầy bất ngờ.","stats:{works:3,totalChapters:4924,totalViews:"13.1M",followers:"48.2K"},bg:"linear-gradient(135deg,#151a25,#1f2f3d)"},
  3:{name:"Thần Đông",initials:"TD",bio:"Một trong những tác giả tiên hiệp hàng đầu, người đã tạo nên bộ ba tác phẩm kinh điển. Văn phong hoành tráng, thế giới quan kỳ vĩ, hệ thống sức mạnh độc đáo.","stats:{works:3,totalChapters:5663,totalViews:"19.2M",followers:"62.7K"},bg:"linear-gradient(135deg,#251515,#3d1f1f)"},
  4:{name:"Thiên Tàm Thổ Đậu",initials:"TTT",bio:"Tác giả trẻ tuổi nhưng đã sở hữu nhiều tác phẩm đình đám. Lối viết trẻ trung, tình tiết dồn dập, hệ thống sức mạnh trực quan sinh động, rất được giới trẻ yêu thích.","stats:{works:4,totalChapters:6152,totalViews:"19.1M",followers:"71.3K"},bg:"linear-gradient(135deg,#152520,#1f3d2a)"},
  5:{name:"Phong Hỏa Hí Chư Hầu",initials:"PHH",bio:"Bút danh độc đáo, văn phong tinh tế và đậm chất văn học. Tác phẩm của ông không chỉ là truyện tiên hiệp đơn thuần mà còn mang đậm tính nhân văn và triết lý sâu sắc.","stats:{works:2,totalChapters:2296,totalViews:"10.3M",followers:"35.8K"},bg:"linear-gradient(135deg,#251815,#3d281f)"},
  6:{name:"Trạch Trư",initials:"TT",bio:"Tác giả có lối viết mới lạ, kết hợp giữa yếu tố cổ trang và hiện đại. Nhân vật thông minh, tình tiết logic, thế giới quan sáng tạo và không ngại phá vỡ những khuôn mẫu truyền thống.","stats:{works:2,totalChapters:3293,totalViews:"7.4M",followers:"22.1K"},bg:"linear-gradient(135deg,#202515,#303d1f)"}
};

var novelsByAuthor={
  1:[{id:1,title:"Cầu Đạo",chapters:771,rating:4.7,views:"2.3M",status:"ongoing",tags:["Tiên hiệp","Huyền huyễn"],desc:"Trần Khánh, một thiếu niên bình thường nơi thôn nhỏ, vô tình nhặt được khối ngọc bội cổ xưa. Từ đó con đường tu tiên rộng mở, truy tìm chân lý giữa vạn cổ đại đạo..."},{id:15,title:"Mục Thần Ký",chapters:1872,rating:4.8,views:"4.1M",status:"completed",tags:["Tiên hiệp","Huyền huyễn"],desc:"Tần Mục, đứa trẻ được lão thôn trưởng nuôi dưỡng nơi Tàn Lão, khi bước ra khỏi thôn cả thiên hạ chấn động..."},{id:16,title:"Đế Tôn",chapters:1421,rating:4.7,views:"3.3M",status:"ongoing",tags:["Tiên hiệp","Hệ thống"],desc:"Giang Nam, thư sinh yếu đuối mang bí mật đế tôn, dùng trí tuệ chinh phục thế giới tu tiên tàn khốc..."}],
  2:[{id:9,title:"Tiên Nghịch",chapters:2088,rating:4.8,views:"4.9M",status:"completed",tags:["Tiên hiệp","Tu luyện"],desc:"Vương Lâm, thiếu niên không thiên phú, nhờ chiếc bình bí ẩn nghịch chuyển số mệnh..."},{id:10,title:"Cầu Ma",chapters:1522,rating:4.7,views:"3.8M",status:"completed",tags:["Tiên hiệp","Ma đạo"],desc:"Tô Minh, thiếu niên man tộc Ô Sơn, mang dòng máu đặc biệt, bước vào ma đạo đầy máu và nước mắt..."},{id:11,title:"Nhất Niệm Vĩnh Hằng",chapters:1314,rating:4.8,views:"4.4M",status:"completed",tags:["Tiên hiệp","Hài hước"],desc:"Bạch Tiểu Thuần sợ chết nhưng khao khát trường sinh, dùng đủ mọi thủ đoạn để sống lâu hơn..."}],
  3:[{id:6,title:"Thần Mộ",chapters:1756,rating:4.9,views:"6.3M",status:"completed",tags:["Tiên hiệp","Huyền huyễn"],desc:"Thần chết rồi, ma diệt rồi... Vạn năm sau Thần Nam từ trong mộ phần thức tỉnh..."},{id:7,title:"Trường Sinh Giới",chapters:1892,rating:4.8,views:"5.8M",status:"ongoing",tags:["Tiên hiệp","Viễn cổ"],desc:"Thế giới hùng vĩ nơi chư thần ngã xuống, vạn tộc tranh hùng..."},{id:8,title:"Hoàn Mỹ Thế Giới",chapters:2015,rating:4.9,views:"7.1M",status:"completed",tags:["Tiên hiệp","Huyền huyễn"],desc:"Thạch Hạo, đứa trẻ bị vứt bỏ nơi rừng hoang, được người rừng nuôi lớn..."}],
  4:[{id:3,title:"Đấu Phá Thương Khung",chapters:1648,rating:4.8,views:"8.7M",status:"completed",tags:["Huyền huyễn","Dị thế"],desc:"Tiêu Viêm, thiên tài một thời bỗng mất hết tu vi..."},{id:4,title:"Vũ Động Càn Khôn",chapters:1307,rating:4.7,views:"3.6M",status:"completed",tags:["Huyền huyễn","Tu luyện"],desc:"Lâm Động, thiếu niên xuất thân từ gia tộc sa sút, vô tình nhặt được tảng đá bí ẩn..."},{id:5,title:"Đại Chúa Tể",chapters:1677,rating:4.6,views:"4.2M",status:"completed",tags:["Huyền huyễn","Hệ thống"],desc:"Mục Trần với linh mạch bị phong ấn..."},{id:24,title:"Nguyên Tôn",chapters:1520,rating:4.5,views:"2.6M",status:"ongoing",tags:["Huyền huyễn","Trùng sinh"],desc:"Chu Nguyên có được Cửu Thú Khai Thiên Quyết..."}],
  5:[{id:12,title:"Kiếm Lai",chapters:1288,rating:4.9,views:"5.6M",status:"ongoing",tags:["Tiên hiệp","Kiếm đạo"],desc:"Trần Bình An, thiếu niên nghèo nơi trấn Nê Bình, bước vào con đường kiếm đạo rộng lớn..."},{id:13,title:"Tuyết Trung Hám Đao Hành",chapters:1008,rating:4.9,views:"4.7M",status:"completed",tags:["Võ hiệp","Quyền mưu"],desc:"Từ Phượng Niên, thế tử Bắc Lương..."}],
  6:[{id:15,title:"Mục Thần Ký",chapters:1872,rating:4.8,views:"4.1M",status:"completed",tags:["Tiên hiệp","Huyền huyễn"],desc:"Tần Mục..."},{id:16,title:"Đế Tôn",chapters:1421,rating:4.7,views:"3.3M",status:"ongoing",tags:["Tiên hiệp","Hệ thống"],desc:"Giang Nam..."}]
};

var coverChars="仙道劍帝神龍魔尊天".split("");
var coverBg=["linear-gradient(135deg,#1a1525,#2a1f3d)","linear-gradient(135deg,#151a25,#1f2f3d)","linear-gradient(135deg,#251515,#3d1f1f)","linear-gradient(135deg,#152520,#1f3d2a)","linear-gradient(135deg,#251815,#3d281f)","linear-gradient(135deg,#202515,#303d1f)"];

var authorBg=["linear-gradient(135deg,#1a1525,#2a1f3d,#1a1530)","linear-gradient(135deg,#151a25,#1f2f3d,#152530)","linear-gradient(135deg,#251515,#3d1f1f,#301515)","linear-gradient(135deg,#152520,#1f3d2a,#153020)","linear-gradient(135deg,#251815,#3d281f,#302015)","linear-gradient(135deg,#202515,#303d1f,#253015)"];

function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}
function getQueryParam(n){var q=window.location.search.substring(1),p=q.split("&");for(var i=0;i<p.length;i++){var kv=p[i].split("=");if(decodeURIComponent(kv[0])===n)return decodeURIComponent(kv[1]||"");}return null;}

function render(a){
  if(!a)a=authors[1];
  var bg=authorBg[(Object.keys(authors).indexOf(String(Object.keys(authors).find(function(k){return authors[k]===a;}))||"1")-1)%authorBg.length];
  var hero=document.getElementById("authorHero");
  if(hero){
    hero.innerHTML=
      '<div class="author-avatar" style="background:'+bg+'">'+a.initials+'<span class="author-badge">TÁC GIẢ</span></div>'+
      '<div class="author-info">'+
        '<h1 class="author-name">'+esc(a.name)+'</h1>'+
        '<p class="author-bio">'+esc(a.bio)+'</p>'+
        '<div class="author-stats">'+
          '<span class="author-stat"><iconify-icon icon="heroicons:book-open-20-solid" width="15" height="15"></iconify-icon> <strong>'+a.stats.works+'</strong> tác phẩm</span>'+
          '<span class="author-stat"><iconify-icon icon="heroicons:document-text-20-solid" width="15" height="15"></iconify-icon> <strong>'+a.stats.totalChapters+'</strong> chương</span>'+
          '<span class="author-stat"><iconify-icon icon="heroicons:eye-20-solid" width="15" height="15"></iconify-icon> <strong>'+a.stats.totalViews+'</strong> lượt đọc</span>'+
          '<span class="author-stat"><iconify-icon icon="heroicons:heart-20-solid" width="15" height="15"></iconify-icon> <strong>'+a.stats.followers+'</strong> theo dõi</span>'+
        '</div>'+
      '</div>';
  }

  var authorKey=1;
  for(var k in authors){if(authors[k]===a){authorKey=parseInt(k);break;}}
  var works=novelsByAuthor[authorKey]||[];
  var list=document.getElementById("workList");
  if(list){
    var html="";
    for(var i=0;i<works.length;i++){
      var n=works[i],cbg=coverBg[i%coverBg.length],ch=coverChars[i%coverChars.length];
      html+='<a class="work-card" href="detail.html">'+
        '<div class="work-cover" style="background:'+cbg+'">'+
          (n.status==="completed"?'<span class="work-badge completed">FULL</span>':'<span class="work-badge ongoing">ĐANG RA</span>')+
          '<span class="cv">'+ch+'</span>'+
        '</div>'+
        '<div class="work-info">'+
          '<div class="work-title">'+esc(n.title)+'</div>'+
          '<div class="work-meta"><span class="work-rating"><iconify-icon icon="heroicons:star-20-solid" width="13" height="13"></iconify-icon>'+n.rating+'</span><span class="dot">&middot;</span><span>'+n.chapters+' chương</span><span class="dot">&middot;</span><span>'+n.views+' lượt</span></div>'+
          (n.tags&&n.tags.length?'<div class="work-tags">'+n.tags.map(function(t){return'<span class="tag">'+t+'</span>';}).join("")+'</div>':'')+
          '<div class="work-desc">'+esc(n.desc)+'</div>'+
        '</div></a>';
    }
    list.innerHTML=html;
  }
}

function init(){
  var authorId=parseInt(getQueryParam("id"))||1;
  if(!authors[authorId])authorId=1;
  render(authors[authorId]);
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
