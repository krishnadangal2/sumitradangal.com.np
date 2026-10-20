const nav=document.querySelector('nav'),menu=document.getElementById('menu');
menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
const lb=document.getElementById('lb');
document.querySelectorAll('.zoom').forEach(i=>i.addEventListener('click',()=>{lb.querySelector('img').src=i.src;lb.showModal()}));
lb&&lb.addEventListener('click',()=>lb.close());
const f=document.getElementById('search-form');
if(f){const inp=f.querySelector('input'),info=document.querySelector('.info'),SR=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SR){const r=new SR();r.continuous=true;
f.insertAdjacentHTML('beforeend','<button type="button" aria-label="Voice search"><i class="fa-solid fa-microphone"></i></button>');
const b=f.querySelector('button'),ic=b.firstElementChild;
b.onclick=()=>ic.classList.contains('fa-microphone')?r.start():r.stop();
r.onstart=()=>{ic.className='fa-solid fa-microphone-slash';inp.focus()};
r.onend=()=>{ic.className='fa-solid fa-microphone';inp.focus()};
r.onresult=e=>{const t=e.results[e.resultIndex][0].transcript,c=t.toLowerCase().trim();
if(c==='stop recording')r.stop();else if(c==='go'&&inp.value)f.submit();else if(c==='reset input')inp.value='';else inp.value=t};
info.textContent='Tap the mic to search by voice. Say "go" to search, "reset input" to clear.'}
else info.textContent='Voice search is not supported in this browser.'}

const root=document.documentElement;
document.getElementById('theme').onclick=()=>{const d=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches,n=d?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}};
