
(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')root.setAttribute('data-theme',t);}catch(e){}
  var tb=document.getElementById('theme-btn');
  if(tb)tb.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
  });
  var mb=document.getElementById('menu-btn'),nav=document.getElementById('main-nav');
  if(mb&&nav){
    mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o?'true':'false');mb.setAttribute('aria-label',o?'Đóng menu':'Mở menu');});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Mở menu');}});
  }
})();
