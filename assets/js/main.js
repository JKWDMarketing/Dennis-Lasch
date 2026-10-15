(function(){
  var book=document.getElementById('book'), label=document.getElementById('bookLabel');
  if(book){
  document.querySelectorAll('#chooser input[name="t"]').forEach(function(r){
    r.addEventListener('change',function(){ if(r.checked){ book.href=r.value; label.textContent=r.dataset.label; } });
  });
  }
  var bar=document.getElementById('bar');
  if(!bar) return;
  function upd(){ var h=document.documentElement.scrollHeight-innerHeight; bar.style.width=(h>0?Math.min(100,scrollY/h*100):0)+'%'; }
  addEventListener('scroll',upd,{passive:true}); addEventListener('resize',upd); upd();
})();
