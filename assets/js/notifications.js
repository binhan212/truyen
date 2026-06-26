(function(){

var notifications=[
  {type:"chapter",icon:"heroicons:book-open-20-solid",cls:"chapter",text:'Chương mới: <span class="hl">Cầu Đạo</span> - Chương 771 vừa được đăng',time:"5 phút trước",unread:true,tab:"all"},
  {type:"like",icon:"heroicons:heart-20-solid",cls:"like",text:'<span class="hl">25 người</span> đã thích bình luận của bạn trong <span class="hl">Cầu Đạo</span>',time:"2 giờ trước",unread:true,tab:"all"},
  {type:"comment",icon:"heroicons:chat-bubble-left-20-solid",cls:"comment",text:'<span class="hl">Kiếm Đế</span> đã trả lời bình luận của bạn: "Đồng ý với bạn, main quá hay!"',time:"3 giờ trước",unread:true,tab:"all"},
  {type:"system",icon:"heroicons:bell-20-solid",cls:"system",text:'Chào mừng đạo hữu đến với <span class="hl">Thư Viện Tiên Đạo</span>! Khám phá ngay các tính năng mới.',time:"1 ngày trước",unread:true,tab:"system"},
  {type:"rank",icon:"heroicons:arrow-trending-up-20-solid",cls:"rank",text:'<span class="hl">Phàm Nhân Tu Tiên</span> đã leo lên vị trí #2 trên BXH Thịnh Hành!',time:"1 ngày trước",unread:true,tab:"all"},
  {type:"chapter",icon:"heroicons:book-open-20-solid",cls:"chapter",text:'Chương mới: <span class="hl">Kiếm Lai</span> - Chương 1289 vừa được đăng',time:"2 ngày trước",unread:false,tab:"all"},
  {type:"system",icon:"heroicons:gift-20-solid",cls:"system",text:'Sự kiện <span class="hl">"Tu Tiên Mùa Hạ"</span> đã bắt đầu! Nhận quà mỗi ngày khi đọc truyện.',time:"2 ngày trước",unread:false,tab:"system"},
  {type:"comment",icon:"heroicons:chat-bubble-left-20-solid",cls:"comment",text:'<span class="hl">Linh Nhi</span> đã nhắc đến bạn trong bình luận của <span class="hl">Trường Sinh Giới</span>',time:"3 ngày trước",unread:false,tab:"all"},
  {type:"like",icon:"heroicons:heart-20-solid",cls:"like",text:'<span class="hl">12 người</span> đã thích đánh giá 5★ của bạn cho <span class="hl">Thần Mộ</span>',time:"5 ngày trước",unread:false,tab:"all"},
  {type:"chapter",icon:"heroicons:book-open-20-solid",cls:"chapter",text:'Chương mới: <span class="hl">Nghịch Thiên Tà Thần</span> - Chương 1988 vừa được đăng',time:"1 tuần trước",unread:false,tab:"all"},
  {type:"system",icon:"heroicons:shield-check-20-solid",cls:"system",text:'Tài khoản của bạn đã được xác minh thành công. Chúc đạo hữu đọc truyện vui vẻ!',time:"1 tuần trước",unread:false,tab:"system"},
  {type:"rank",icon:"heroicons:arrow-trending-up-20-solid",cls:"rank",text:'<span class="hl">Hoàn Mỹ Thế Giới</span> đã đạt mốc <span class="hl">7.1M</span> lượt đọc!',time:"2 tuần trước",unread:false,tab:"all"},
];

var currentTab="all";

function render(){
  var list=document.getElementById("notifList");
  if(!list)return;

  var filtered=notifications;
  if(currentTab==="unread")filtered=notifications.filter(function(n){return n.unread;});
  else if(currentTab==="system")filtered=notifications.filter(function(n){return n.tab==="system";});

  var html="";
  for(var i=0;i<filtered.length;i++){
    var n=filtered[i];
    html+='<div class="notif-item'+(n.unread?' unread':'')+'">'+
      '<div class="notif-icon '+n.cls+'"><iconify-icon icon="'+n.icon+'" width="20" height="20"></iconify-icon></div>'+
      '<div class="notif-content">'+
        '<div class="notif-text">'+n.text+'</div>'+
        '<div class="notif-time">'+n.time+(n.unread?' &middot; <span class="notif-unread-badge">Mới</span>':'')+'</div>'+
      '</div>'+
    '</div>';
  }
  list.innerHTML=html||'<div class="empty-state"><iconify-icon icon="heroicons:bell-20-solid" width="48" height="48"></iconify-icon><p>Không có thông báo nào</p></div>';
}

function init(){
  render();
  document.querySelectorAll("#tabBar .tab-btn").forEach(function(b){
    b.addEventListener("click",function(){
      document.querySelectorAll("#tabBar .tab-btn").forEach(function(x){x.classList.remove("active");});
      this.classList.add("active");
      currentTab=this.dataset.tab;
      render();
    });
  });
  var mbtn=document.getElementById("markAllBtn");
  if(mbtn){
    mbtn.addEventListener("click",function(){
      for(var i=0;i<notifications.length;i++)notifications[i].unread=false;
      render();
    });
  }
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
