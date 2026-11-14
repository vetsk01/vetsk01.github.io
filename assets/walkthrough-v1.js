/* Weeks 1-6 walkthrough (P-49). Steps through the scenes once, then rests on the last.
   Without JS, or with reduced motion, the section stays a still list. */
(function(){
  var root=document.getElementById('walk');
  if(!root||!window.matchMedia||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var scenes=[].slice.call(root.querySelectorAll('.scene')),
      marks=[].slice.call(root.querySelectorAll('.walk-mark')),
      rail=root.querySelector('.walk-rail'),tag=root.querySelector('.walk-tag'),
      play=root.querySelector('.walk-play'),replay=root.querySelector('.walk-replay'),
      cur=-1,timer=null,tagTimer=null,paused=false,started=false;
  function pct(w){return ((w-1)*20)+'%'}
  function show(i){
    cur=i;var s=scenes[i],w=+(s.dataset.w||0);
    scenes.forEach(function(x,n){x.classList.toggle('cur',n===i)});
    var kind=s.classList.contains('scene-open')?'open':(w?'week':'end');
    var lit=kind==='open'?0:(w||6);
    marks.forEach(function(m){var mw=+m.dataset.w;m.classList.toggle('lit',mw<=lit);m.classList.toggle('now',kind==='week'&&mw===w)});
    rail.style.setProperty('--fill',kind==='open'?'0%':(w?pct(w):'100%'));
    clearTimeout(tagTimer);tag.classList.remove('go');
    var prev=scenes[i-1];
    if(kind==='week'&&w>1&&prev&&prev.dataset.hand){   /* carry the previous week's handoff along the line */
      tag.style.transition='none';tag.textContent=prev.dataset.hand;rail.style.setProperty('--tag',pct(w-1));
      void tag.offsetWidth;tag.style.transition='';tag.classList.add('go');
      requestAnimationFrame(function(){rail.style.setProperty('--tag',pct(w))});
      tagTimer=setTimeout(function(){tag.classList.remove('go')},2200);
    }
  }
  function step(){
    clearTimeout(timer);if(paused)return;
    if(cur>=scenes.length-1){if(document.activeElement===play)replay.focus();play.hidden=true;return}
    show(cur+1);timer=setTimeout(step,+scenes[cur].dataset.ms||4000);
  }
  function start(){started=true;paused=false;play.hidden=false;play.textContent='Pause';cur=-1;step()}
  play.onclick=function(){
    paused=!paused;play.textContent=paused?'Play':'Pause';
    if(paused)clearTimeout(timer);else timer=setTimeout(step,1200);
  };
  replay.onclick=function(){clearTimeout(timer);start()};
  root.classList.add('on');root.querySelector('.walk-scenes').setAttribute('aria-hidden','true');show(0);
  var held=false;  /* pause while the tab is hidden, resume when it returns */
  document.addEventListener('visibilitychange',function(){
    if(document.hidden){if(started&&!paused&&cur<scenes.length-1){held=true;clearTimeout(timer)}}
    else if(held){held=false;timer=setTimeout(step,800)}
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting&&!started){io.disconnect();start()}})},{threshold:.45});
    io.observe(root.querySelector('.walk-box'));
  }else start();
})();
