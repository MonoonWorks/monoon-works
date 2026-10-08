(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;

/* ---------- copy ---------- */
const ko = {
'skip':'본문으로 이동','nav.tools':'도구','nav.roadmap':'로드맵','nav.beta':'베타 신청','nav.story':'만든 이야기',
'hero.title':'생각의 자리.<br>그다음의 작업.',
'hero.lead':'<strong>모눈웍스</strong>는 읽고, 쓰고, 다시 이어가는 사람을 위한 소프트웨어를 만듭니다. 긴 연구를 위한 새김과, 매일 꺼내 쓰는 작은 도구들입니다.',
'hero.beta':'베타 신청하기','hero.tools':'다섯 가지 도구 만나기',
'board.long':'길게 이어가는 작업','board.daily':'매일 꺼내 쓰는 도구','tile.flow':'새김','tile.archive':'갈피',
'board.idle.t':'다섯 도구, 하나의 모눈.','board.idle.d':'점은 지금 손을 대고 있는 작업입니다.',
'motion.pause':'모션 멈추기','motion.play':'모션 재생','motion.reduced':'모션 줄이기 적용 중',
'status':'비공개 파일럿 운영 중 · 2027년 상반기 공개 베타 예정',
'hero.claude':'파일럿 신규: Simple PDF의 Claude ↗',
'principles.title':'흩어진 생각이 다시 이어지는 바탕을 만듭니다.',
'p1.t':'시작을 가볍게.','p1.d':'찾고, 열고, 적는 첫 동작을 짧게 만듭니다. 필요한 기능은 필요한 순간에 드러나야 합니다.',
'p2.t':'맥락을 가까이.','p2.d':'원본과 주석, 문장과 출처, 계획과 기록을 함께 이해할 수 있도록 자리를 잡습니다.',
'p3.t':'다시 이어가기 쉽게.','p3.d':'읽던 위치와 작업의 상태가 남도록 돕습니다. 오늘의 작업이 내일의 시작점이 됩니다.',
'principles.note':'모눈에는 자리가 있고, 여백이 있습니다. 도구가 바탕을 만들면, 그 위의 생각은 사람이 이어 갑니다.',
'flow.name':'새김','flow.sub':'읽기·노트·집필·계획을 한 작업공간에','flow.title':'연구의 여러 시간을 한자리에.',
'flow.copy1':'새김은 일정과 읽기, 노트와 집필을 오가며 긴 연구를 이어 갑니다. 서로 다른 속도로 진행되는 작업을 한 공간에서 살필 수 있습니다.',
'flow.copy2':'인용구에는 쪽 번호가 남고, 노트는 출처와 대조할 수 있으며, 장별 초고는 그것을 가능하게 한 근거 옆에 머뭅니다.',
'stage.read':'읽기','stage.notes':'노트','stage.writing':'집필','stage.planning':'계획',
'flow.caption':'데스크톱 앱에서 직접 캡처 · 앱 안의 이름은 아직 Academia Flow · Academic Neutral 테마 · 시연용 작업 공간.','zoom':'크게 보기 ↗',
'flow.word.t':'Microsoft Word에서도 이어서','flow.word.d':'별도 추가 기능으로 인용, 각주와 참고문헌을 작성합니다.',
'flow.theme.t':'나의 작업 방식에 맞는 화면','flow.theme.d':'Light·Dark·Auto 모드와 여러 테마. 이 페이지는 Academic Neutral입니다.','flow.theme.link':'화면 설정 보기 ↗',
'archive.name':'갈피','archive.sub':'원본 자료를 맥락과 함께 보관',
'archive.title':'자료에는<br>맥락이 있습니다.',
'archive.copy1':'사진, 스캔, PDF와 서지정보가 그 의미를 만드는 정보와 함께 남습니다. 기여자, 날짜, 식별자, 전사와 자료에 대한 노트까지.',
'archive.copy2':'Zotero·Juris-M 자료와 Tropy 내보내기를 가져오고, 컬렉션으로 정리하고, 메타데이터와 로컬 OCR 텍스트를 검색합니다. 인용 정보는 원본으로 돌아갈 길과 함께 새김으로 가져옵니다.',
'archive.caption':'갈피 · 앱 안의 이름은 아직 Academia Archive · 현재 한국어 인터페이스.',
'archive.m1':'문헌 기록','archive.m2':'원문 파일','archive.m3':'구절','archive.m4':'맥락','archive.mapnote':'원본에서 연결되어, 언제든 돌아갈 수 있도록.',
'claude.sub':'본문 옆에 미주를 두고 읽는 macOS 리더','claude.status':'2026년 10월부터 파일럿에서',
'claude.title':'논문에 묻고,<br>쪽수는 그대로.',
'claude.copy1':'Simple PDF에서 구절을 선택하고 질문하세요. Claude가 쉬운 말로 설명하고 문장마다 근거가 된 쪽을 붙여, 모든 답을 원문과 대조할 수 있습니다.',
'claude.copy2':'정리도 같은 방식입니다. 한 번에 최대 40쪽을 섹션별로 정리하고, 쪽 번호와 함께 논증이 어떻게 흘러가는지 짧게 보여 줍니다.',
'qa.passage':'선택한 구절 · 489쪽','qa.question':'나의 질문','qa.answer':'답변 · 문장마다 근거 쪽',
'qa.caption':'구절 질문 흐름을 표현한 그래픽 · Simple PDF는 현재 한국어로 답합니다.',
'fact1.t':'원문에 근거한 답','fact1.d':'제공한 쪽의 텍스트만 근거로 씁니다. 숫자는 원문 표기 그대로 두고, 발췌로 뒷받침할 수 없는 내용은 그렇다고 밝힙니다.',
'fact2.t':'보낼 내용은 연구자가 선택','fact2.d':'범위 안의 쪽 텍스트, 질문, 직접 고른 그림 영역만 Claude API로 보냅니다. PDF 파일, 하이라이트, 메모는 보내지 않습니다.',
'fact3.t':'원하면 이 Mac 안에서만','fact3.d':'같은 패널을 Mac에서 실행되는 모델로 바꾸면 아무것도 밖으로 나가지 않습니다.',
'fact4.t':'API 키는 키체인에','fact4.d':'API 키는 그 기기의 macOS 키체인에 저장하며, 저장하기 전에 유효한지 확인합니다.',
'claude.next':'Claude와 함께 계획 중인 다음 기능','next1':'새김 — 선택한 노트 사이의 주장 비교','next2':'새김 — 초고 문단을 근거 자료와 대조','next3':'Simple PDF — 선택한 구절·쪽 번역',
'simple.title':'Simple.<br>필요한 일에 곧바로.','simple.copy':'읽고, 쓰고, 찾는 세 가지 동작. 같은 문서의 형태, 같은 이름의 리듬으로 묶은 세 개의 작은 macOS 도구입니다.',
'pdf.sub':'본문 옆에 미주를 두고 읽는 macOS 리더','pdf.title':'본문을 놓치지 않고, 미주까지.','pdf.lead':'본문은 읽던 쪽에 두고, 다른 쪽을 보여 주는 두 번째 창에서 미주를 엽니다.',
'pdf.copy':'목차로 장 사이를 이동하고, 읽던 자리를 유지하며, 문서에 인용구와 노트를 남깁니다. 위의 Claude 엔진은 이 리더 안에 있습니다.','pdf.link':'Claude에게 구절 묻기 ↗','pdf.caption':'본문 1쪽과 미주 10쪽을 나란히.',
'note.sub':'리치텍스트와 Markdown을 오가는 로컬 노트','note.title':'떠오른 문장을 바로, 내 파일로.','note.lead':'한 줄에서 시작해, 생각에 구조가 필요할 때 제목·체크리스트·표·인용을 더합니다.',
'note.copy':'리치 텍스트와 Markdown을 오가며 쓰고, 태그와 검색으로 다시 찾고, 로컬 Markdown 파일을 열거나 노트를 내보내 다른 도구에서 이어갑니다.','note.editor':'리치텍스트','note.caption':'같은 노트의 리치텍스트·Markdown 화면.',
'search.sub':'메뉴 막대에서 파일명·초성으로 찾기','search.title':'기억나는 이름으로, 바로 그 파일.','search.lead':'이름의 일부나 한글 초성만 쳐도 파일이 나타납니다. 오른쪽에서 직접 해 보세요.',
'search.copy':'파일명과 메타데이터만 색인하며 문서 본문은 읽지 않습니다. 종류로 좁히고, Quick Look으로 미리 보고, 열거나 Finder에서 보기까지 키보드로 합니다.',
'search.hint':'예시 파일명으로 하는 시연 · 초성과 부분 이름 모두 일치합니다.','search.caption':'일치 규칙의 시연 · 실제 앱은 macOS 메뉴 막대에서 실행됩니다.','search.shot':'앱 화면 보기 ↗',
'roadmap.title':'앞으로의 길.','roadmap.copy':'진행 중인 연구와 나란히 만들고, 더 넓게 내놓기 전에 연구자들과 먼저 시험합니다.',
'r1.date':'2025년 7월','r1.t':'개발 시작','r1.d':'대학원 연구자의 읽기와 쓰기에서 새김이 시작됩니다.',
'r2.date':'지금','r2.t':'비공개 파일럿','r2.d':'새김, 갈피와 Simple 도구들을 소수의 연구자와 함께 씁니다. Simple PDF의 Claude도 여기서 먼저 시험합니다.',
'r3.date':'2027년 상반기','r3.t':'공개 베타','r3.d':'새김과 함께 쓰는 도구들을 베타 신청자에게 엽니다.',
'r4.date':'다음','r4.t':'새김에 Claude','r4.d':'노트 사이의 주장을 비교하고 초고를 근거와 대조합니다.',
'founder.title':'연구자의<br>책상에서.','founder.role':'대학원생·연구자 · 창업자·개발자 · 서울',
'founder.p1':'모눈웍스는 대학원 연구의 일상적인 작업에서 시작했습니다. 문헌을 따라가고, 정확한 구절로 돌아가며, 흩어진 노트를 하나의 논증으로 발전시키는 일이었습니다.',
'founder.p2':'Zotero, Tropy와 EndNote는 각자의 역할이 있는 유용한 도구입니다. 그 사이에 남는 질문이 있었습니다. 연구가 커져도 자료, 노트, 집필과 계획을 어떻게 계속 연결할 수 있을까?',
'founder.p3':'지금은 소규모 비공개 파일럿으로 운영하며, 실제 연구 방식이 다음에 만들 기능을 정합니다. 공개 베타는 2027년 상반기를 계획하고 있습니다.',
'beta.title':'베타에<br>참여하세요.','beta.copy':'공개 베타는 2027년 상반기를 계획하고 있습니다. 전공과 지금 하고 있는 작업을 알려주시면 자리가 열릴 때 연락드립니다. 지금 비공개 파일럿에 참여하고 싶은 연구자도 문의해 주세요.',
'beta.cta':'베타 신청하기','beta.pilot':'비공개 파일럿 문의','faq.title':'궁금한 점.',
'faq1.q':'언제 사용할 수 있나요?','faq1.a':'지금은 소규모 비공개 파일럿으로 운영하며, 공개 베타는 2027년 상반기를 계획하고 있습니다. 베타 신청을 남기거나 파일럿 참여를 문의해 주세요.',
'faq2.q':'Simple PDF는 어떤 AI를 쓰고, 무엇을 보내나요?','faq2.a':'패널마다 고릅니다. Claude API의 Claude Opus 5.5, 또는 Mac에서 실행되는 모델입니다. Claude를 고르면 범위 안의 쪽 텍스트, 질문, 직접 고른 그림 영역만 Anthropic API로 보냅니다. PDF 파일, 하이라이트, 메모는 보내지 않습니다. <a href="privacy.html#ko">개인정보 안내</a>를 참고하세요.',
'faq3.q':'연구 자료는 어디에 저장되나요?','faq3.a':'새김의 연구 작업 공간은 로컬 저장소를 사용합니다. 갈피도 원문 파일과 데이터베이스를 로컬에 보관합니다. Zotero 가져오기와 같은 선택적 연결은 별도의 설정을 사용합니다.',
'faq4.q':'Zotero와 Word를 계속 써도 되나요?','faq4.a':'네. 갈피로 Zotero 자료를 가져올 수 있고, 별도 Word 추가 기능에서 문헌 검색, 인용, 각주와 참고문헌 작업을 이어갈 수 있습니다.',
'faq5.q':'새김과 갈피는 어떻게 함께 쓰나요?','faq5.a':'갈피는 원문 파일과 서지정보, 자료의 맥락을 관리합니다. 새김은 읽기, 연구 노트, 장별 집필과 계획을 연결합니다. 선택한 갈피 자료를 새김에 연결해 사용할 수 있습니다.',
'shots.note':'화면은 실제 앱이며, 시연용 작업 공간과 공개 서지정보를 사용했습니다. 구절 답변과 검색창은 각 기능의 동작을 보여 주는 그래픽입니다.',
'footer.company':'© 2026 Monoon Works · 서울','footer.privacy':'개인정보 안내','footer.top':'맨 위로 ↑'
};
const tools = {
 flow:{name:'Saegim',nameKo:'새김',en:'Reading, notes, writing and planning for the long research project.',ko:'긴 연구를 위한 읽기·노트·집필·계획.',href:'#flow'},
 archive:{name:'Galpi',nameKo:'갈피',en:'Sources with their context, and a way back to the original.',ko:'원본에 맥락을, 다시 돌아갈 자리를.',href:'#archive'},
 pdf:{name:'Simple PDF',en:'The body on one page, the endnotes on another. Now with Claude.',ko:'본문과 미주를 나란히. 이제 Claude와 함께.',href:'#claude'},
 note:{name:'Simple Note',en:'A sentence, straight into your file.',ko:'떠오른 문장을 바로, 내 파일로.',href:'#simple-note'},
 search:{name:'Simple Search',en:'The name you remember, the file you need.',ko:'기억나는 이름으로, 바로 그 파일.',href:'#simple-search'}
};
const stages = [
 {en:'Find books and papers by title, author or tag. Keep reading states and attachments with each record, so a growing bibliography becomes a view of the work in front of you.',ko:'제목·저자·태그로 문헌을 찾고, 문헌마다 읽기 상태와 첨부파일을 남깁니다. 쌓여 가는 참고문헌이 지금 할 일의 풍경이 됩니다.'},
 {en:'Keep an interpretation tied to its source. Work with page-linked quotations and notes, then develop claims, evidence and counterpoints in the research journal.',ko:'해석을 출처에 묶어 둡니다. 쪽 번호가 붙은 인용구와 노트로 작업하고, 연구일지에서 주장·근거·반론을 발전시킵니다.'},
 {en:'Move from notes into sustained chapter writing. Keep a manuscript organised in its binder, with headings, footnotes, citations and figures in reach.',ko:'노트에서 장별 집필로 넘어갑니다. 바인더로 원고를 정리하고 제목·각주·인용·그림을 곁에 둡니다.'},
 {en:'Give the long project a place in the week. Arrange reading, research, writing, classes and meetings, and return to what the last session left.',ko:'긴 프로젝트에 한 주의 자리를 줍니다. 읽기·연구·집필·수업·회의를 배치하고, 지난 작업이 남긴 곳으로 돌아옵니다.'}
];
const imageLabels = {
 'flow-library':{en:'Saegim — reading library',ko:'새김 — 문헌 목록'},'flow-notes':{en:'Saegim — research notes',ko:'새김 — 연구 노트'},
 'flow-manuscript':{en:'Saegim — chapter writing',ko:'새김 — 원고'},'flow-week':{en:'Saegim — weekly planning',ko:'새김 — 주간 계획'},
 'flow-themes':{en:'Saegim — appearance settings',ko:'새김 — 화면 설정'},'archive-library':{en:'Galpi — source library',ko:'갈피 — 자료 라이브러리'},
 'simple-pdf':{en:'Simple PDF — body and endnotes',ko:'Simple PDF — 본문과 미주'},'note-editor':{en:'Simple Note — rich text',ko:'Simple Note — 리치텍스트'},
 'note-markdown':{en:'Simple Note — Markdown',ko:'Simple Note — Markdown'},'simple-search':{en:'Simple Search — menu bar search',ko:'Simple Search — 메뉴 막대 검색'}
};

/* ---------- language ---------- */
const localized = $$('[data-key]');
const english = new Map(localized.map(el => [el, el.innerHTML]));
const params = new URLSearchParams(location.search);
let language = params.get('lang') === 'ko' ? 'ko' : params.get('lang') === 'en' ? 'en' : ((navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en');
const imageLabel = path => (imageLabels[path.split('/').pop().replace('.webp','')] || {en:'Product screenshot',ko:'제품 화면'})[language];
function setLanguage(next, push = true) {
 language = next;
 root.lang = language;
 document.title = language === 'ko' ? 'Monoon Works — 생각의 자리. 그다음의 작업.' : 'Monoon Works — A place to think. Room to continue.';
 localized.forEach(el => { el.innerHTML = language === 'ko' ? (ko[el.dataset.key] || english.get(el)) : english.get(el); });
 $('.lang').textContent = language === 'ko' ? 'EN' : 'KO';
 $('.lang').setAttribute('aria-label', language === 'ko' ? 'Switch to English' : '한국어로 전환');
 $('#stage-description').textContent = stages[activeStage][language];
 $$('[data-image]').forEach(b => b.setAttribute('aria-label', (language === 'ko' ? '화면 확대: ' : 'Enlarge: ') + imageLabel(b.dataset.image)));
 $('#search-input').placeholder = language === 'ko' ? 'ㅈㄱㅅ' : 'ㅈㄱㅅ or "field"';
 if (activeTool) describeTool(activeTool);
 updateMotionLabel();
 renderSearch($('#search-input').value);
 if (push) { const url = new URL(location); if (language === 'ko') url.searchParams.set('lang','ko'); else url.searchParams.delete('lang'); history.replaceState(null,'',url); }
}
$('.lang').addEventListener('click', () => setLanguage(language === 'en' ? 'ko' : 'en'));

/* ---------- board: marks draw in, the dot travels the grid ---------- */
const board = $('#board'), dot = $('#dot'), label = $('#board-label'), toggle = $('.motion-toggle');
const order = ['flow','archive','pdf','note','search'];
const tiles = Object.fromEntries(order.map(k => [k, $('.tile.'+k, board)]));
let activeTool = null, motionPaused = false, boardInView = true, tourTimer = null, tourStep = 0, dotAnim = null, boardStarted = false;
const canMotion = () => !reduceMotion.matches && !motionPaused;
// The dot marks a tile at its open corner, like the dot in the logo.
function cornerOf(tile){ const b = board.getBoundingClientRect(), t = tile.getBoundingClientRect(); return {x: t.right - b.left - t.width*.08, y: t.bottom - b.top - t.height*.08}; }
function restPoint(){ const b = board.getBoundingClientRect(); return {x: b.width * (5.6/6), y: b.height * (4.5/4.8)}; }
let dotPos = null;
function moveDot(to, duration = 900){
 if (dotAnim) dotAnim.cancel();
 const from = dotPos || restPoint();
 dotPos = to;
 dot.classList.remove('is-resting');
 if (!canMotion() || !dot.animate){ dot.style.transform = `translate(${to.x}px,${to.y}px)`; return Promise.resolve(); }
 // Manhattan route along the grid: horizontal, then vertical.
 const path = `M${from.x} ${from.y} H${to.x} V${to.y}`;
 dot.style.offsetPath = `path("${path}")`;
 dot.style.transform = '';
 dotAnim = dot.animate([{offsetDistance:'0%'},{offsetDistance:'100%'}], {duration, easing:'cubic-bezier(.16,1,.3,1)', fill:'forwards'});
 return dotAnim.finished.catch(()=>{});
}
function describeTool(key){
 const t = tools[key];
 label.innerHTML = `<strong>${language==='ko' && t.nameKo ? t.nameKo : t.name}</strong> ${t[language]}`;
}
async function focusTool(key, {fromUser=false} = {}){
 activeTool = key;
 order.forEach(k => { tiles[k].setAttribute('aria-pressed', String(k===key)); tiles[k].classList.add('is-on'); });
 describeTool(key);
 await moveDot(cornerOf(tiles[key]), fromUser ? 650 : 900);
}
function idleLabel(){ label.innerHTML = `<strong>${language==='ko'?ko['board.idle.t']:'Five tools, one grid.'}</strong> ${language==='ko'?ko['board.idle.d']:'The dot is the work in hand.'}`; }
function clearTour(){ if (tourTimer){ clearTimeout(tourTimer); tourTimer = null; } }
function runTour(){
 clearTour();
 if (!canMotion() || !boardInView || document.hidden) return;
 if (tourStep >= order.length){ // rest at the open corner, then stay
  activeTool = null; order.forEach(k => tiles[k].setAttribute('aria-pressed','false'));
  idleLabel();
  moveDot(restPoint(), 1100).then(() => { dot.classList.add('is-resting'); $('.thread').classList.add('is-live'); });
  return;
 }
 const key = order[tourStep++];
 focusTool(key).then(() => { tourTimer = setTimeout(runTour, 1500); });
}
function settleBoard(){ // reduced motion or paused: everything visible, dot rests
 clearTour(); if (dotAnim) dotAnim.cancel();
 order.forEach(k => tiles[k].classList.add('is-on'));
 const p = restPoint(); dotPos = p; dot.style.offsetPath = 'none'; dot.style.transform = `translate(${p.x}px,${p.y}px)`;
 if (!activeTool) idleLabel();
}
function updateMotionLabel(){
 if (reduceMotion.matches){ toggle.disabled = true; toggle.textContent = language==='ko'?ko['motion.reduced']:'Reduced motion on'; toggle.setAttribute('aria-pressed','true'); return; }
 toggle.disabled = false; toggle.setAttribute('aria-pressed', String(motionPaused));
 toggle.textContent = language==='ko' ? (motionPaused?ko['motion.play']:ko['motion.pause']) : (motionPaused?'Play motion':'Pause motion');
}
toggle.addEventListener('click', () => { motionPaused = !motionPaused; updateMotionLabel(); if (motionPaused) settleBoard(); else { tourStep = 0; runTour(); } });
order.forEach(k => {
 tiles[k].addEventListener('pointerenter', () => { if (!tourTimer && activeTool !== k) { clearTour(); focusTool(k, {fromUser:true}); } });
 tiles[k].addEventListener('focus', () => { clearTour(); focusTool(k, {fromUser:true}); });
 tiles[k].addEventListener('click', () => { clearTour(); focusTool(k, {fromUser:true}).then(() => { $(tools[k].href)?.scrollIntoView({behavior: reduceMotion.matches?'auto':'smooth', block:'start'}); }); });
});
function startBoard(){
 if (boardStarted) return; boardStarted = true;
 if (!canMotion()){ settleBoard(); return; }
 const p = restPoint(); dotPos = p; dot.style.transform = `translate(${p.x}px,${p.y}px)`;
 tourStep = 0; tourTimer = setTimeout(runTour, 500);
}
if ('IntersectionObserver' in window){
 new IntersectionObserver(entries => { boardInView = entries[0].isIntersecting; if (boardInView) { if (!boardStarted) startBoard(); } else clearTour(); }, {threshold:.25}).observe(board);
} else startBoard();
document.addEventListener('visibilitychange', () => { if (document.hidden) clearTour(); });
let resizeTimer; window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { if (activeTool) { dotPos = null; moveDot(cornerOf(tiles[activeTool]), 1); } else settleBoard(); }, 150); });

/* ---------- the thread: scroll progress down the left rail ---------- */
const thread = $('.thread');
function layoutThread(){
 const hero = $('.hero'), beta = $('#beta');
 const top = hero.getBoundingClientRect().bottom + window.scrollY;
 const end = beta.getBoundingClientRect().top + window.scrollY;
 thread.style.top = top + 'px';
 thread.dataset.span = String(end - top);
 drawThread();
}
function drawThread(){
 const span = Number(thread.dataset.span || 0);
 const seen = window.scrollY + window.innerHeight * .62 - Number.parseFloat(thread.style.top || 0);
 thread.style.height = Math.max(0, Math.min(span, seen)) + 'px';
}
window.addEventListener('scroll', drawThread, {passive:true});
window.addEventListener('resize', layoutThread);
window.addEventListener('load', layoutThread);

/* ---------- flow stages ---------- */
let activeStage = 0;
function selectStage(index, focus = false){
 activeStage = index;
 $$('.stage-tab').forEach((b,i) => { b.setAttribute('aria-selected', String(i===index)); b.tabIndex = i===index ? 0 : -1; });
 $$('.shot').forEach((p,i) => { p.getAnimations?.().forEach(a => a.cancel()); p.style.clipPath=''; p.hidden = i!==index; p.classList.toggle('is-active', i===index); });
 $('#stage-description').textContent = stages[index][language];
 const panel = $('#stage-panel-'+index);
 if (!reduceMotion.matches && panel.animate) panel.animate([{clipPath:'inset(0 0 0 100%)'},{clipPath:'inset(0 0 0 0%)'}], {duration:540, easing:'cubic-bezier(.16,1,.3,1)'});
 if (focus) $('#stage-tab-'+index).focus();
}
$$('.stage-tab').forEach((b,i) => {
 b.addEventListener('click', () => selectStage(i));
 b.addEventListener('keydown', e => { let t; if (e.key==='ArrowDown'||e.key==='ArrowRight') t=(i+1)%4; if (e.key==='ArrowUp'||e.key==='ArrowLeft') t=(i+3)%4; if (e.key==='Home') t=0; if (e.key==='End') t=3; if (t!==undefined){ e.preventDefault(); selectStage(t,true);} });
});
$('#active-zoom').addEventListener('click', () => openImage($('#stage-panel-'+activeStage+' button').dataset.image));

/* ---------- image dialog ---------- */
const dialog = $('.image-dialog');
let lastTrigger = null;
function openImage(path, trigger){
 lastTrigger = trigger || document.activeElement;
 const img = new Image(); img.className = 'dialog-image'; img.src = path; img.alt = imageLabel(path);
 $('.dialog-body').replaceChildren(img); $('#dialog-title').textContent = imageLabel(path);
 dialog.showModal();
}
$$('[data-image]').forEach(b => b.addEventListener('click', () => openImage(b.dataset.image, b)));
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { $('.dialog-body').replaceChildren(); lastTrigger?.focus(); });

/* ---------- note tabs ---------- */
$$('.note-tab').forEach(b => b.addEventListener('click', () => {
 $$('.note-tab').forEach(x => x.setAttribute('aria-pressed', String(x===b)));
 const path = b.dataset.note==='markdown' ? 'images/note-markdown.webp' : 'images/note-editor.webp';
 const img = $('#note-image'); img.src = path; img.alt = imageLabel(path);
 $('#note-image-button').dataset.image = path;
}));

/* ---------- Simple Search demo: Korean initials and partial names ---------- */
const files = [
 {n:'정관사_없는_언어_비교.pdf',k:'PDF'},{n:'제국과_과학_1장_초고.docx',k:'Word'},{n:'전기_스케줄_2026_가을.xlsx',k:'Excel'},
 {n:'Objectivity_Daston_Galison.pdf',k:'PDF'},{n:'field_notes_archive_visit.md',k:'Markdown'},{n:'수업계획_과학기술과문명_W05.pptx',k:'PowerPoint'},
 {n:'학회발표_SHOT_2026_abstract.hwp',k:'HWP'},{n:'인터뷰_녹취_2025-11-02.txt',k:'Text'},{n:'Mangle_of_Practice_notes.md',k:'Markdown'},
 {n:'참고문헌_정리_v3.bib',k:'BibTeX'},{n:'지도_교수_면담_메모.md',k:'Markdown'},{n:'figure_entangled_bank.png',k:'Image'}
];
const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const initials = s => [...s].map(ch => { const c = ch.charCodeAt(0); return c>=0xAC00 && c<=0xD7A3 ? CHO[Math.floor((c-0xAC00)/588)] : ch; }).join('');
function matchFile(name, q){
 const lower = name.toLowerCase(), query = q.toLowerCase();
 let i = lower.indexOf(query); if (i>=0) return [i, i+query.length];
 const ini = initials(name); i = ini.indexOf(q); if (i>=0) return [i, i+q.length];
 return null;
}
function renderSearch(q){
 const list = $('#search-results'); const query = q.trim();
 const rows = (query ? files.map(f => ({f, m: matchFile(f.n, query)})).filter(r => r.m) : files.map(f => ({f, m:null}))).slice(0, 6);
 list.innerHTML = rows.map((r,i) => {
  const n = r.f.n, h = r.m ? `${esc(n.slice(0,r.m[0]))}<mark>${esc(n.slice(r.m[0],r.m[1]))}</mark>${esc(n.slice(r.m[1]))}` : esc(n);
  return `<li${i===0&&query?' class="is-first"':''}><span class="name">${h}</span><span class="kind">${r.f.k}</span></li>`;
 }).join('') || `<li class="empty">${language==='ko'?'일치하는 파일이 없습니다':'No matching files'}</li>`;
 $('#search-hint').hidden = Boolean(query);
}
const esc = s => s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
$('#search-input').addEventListener('input', e => renderSearch(e.target.value));
let demoTyped = false;
function typeDemo(){
 if (demoTyped || reduceMotion.matches) return; demoTyped = true;
 const input = $('#search-input'); if (input.value || document.activeElement === input) return;
 const word = 'ㅈㄱㅅ'; let i = 0;
 const step = () => { if (document.activeElement === input) return; input.value = word.slice(0, ++i); renderSearch(input.value); if (i < word.length) setTimeout(step, 320); };
 setTimeout(step, 600);
}

/* ---------- reveals, streaming answer, timeline ---------- */
function setTimelineProgress(tl){
 const now = $('li.now', tl); if (!now) return;
 const vertical = getComputedStyle(tl).borderLeftWidth !== '0px';
 const ratio = vertical ? now.offsetTop / tl.offsetHeight : now.offsetLeft / tl.offsetWidth;
 tl.style.setProperty('--progress', String(Math.max(0, Math.min(1, ratio))));
}
window.addEventListener('resize', () => { const tl = $('.timeline.is-in'); if (tl) setTimelineProgress(tl); });
const canReveal = 'IntersectionObserver' in window && !reduceMotion.matches;
function streamAnswer(){
 const lines = $$('.qa-answer p').map(p => { const node = [...p.childNodes].find(n => n.nodeType===3 && n.textContent.trim()); return {p, node, full: node ? node.textContent : ''}; });
 lines.forEach(l => { l.p.style.minHeight = l.p.offsetHeight+'px'; if (l.node) l.node.textContent=''; l.p.classList.add('is-waiting'); });
 let index = 0;
 const next = () => { const l = lines[index++]; if (!l) return; l.p.classList.replace('is-waiting','is-typing'); let shown=0;
  const step = () => { shown = Math.min(l.full.length, shown+2); if (l.node) l.node.textContent = l.full.slice(0,shown); if (shown < l.full.length){ setTimeout(step, 26); return; } l.p.classList.replace('is-typing','is-done'); l.p.style.minHeight=''; setTimeout(next, 320); };
  step(); };
 setTimeout(next, 1400);
}
if (canReveal){
 root.classList.add('js-motion');
 $$('.reveal').forEach((el,i) => { const sib = el.parentElement ? $$(':scope > .reveal', el.parentElement) : []; const idx = sib.indexOf(el); if (idx>0) el.style.setProperty('--d', Math.min(idx,5)*90+'ms'); });
 $$('.timeline li').forEach((li,i) => li.style.setProperty('--d', (250+i*260)+'ms'));
 const obs = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return; const el = entry.target; el.classList.add('is-in'); obs.unobserve(el);
  if (el.classList.contains('qa-stack')) streamAnswer();
  if (el.id === 'search-demo') typeDemo();
  if (el.classList.contains('timeline')) setTimelineProgress(el);
 }), {threshold:.18, rootMargin:'0px 0px -8% 0px'});
 $$('.reveal').forEach(el => obs.observe(el));
 [$('.qa-stack'), $('.timeline'), $('#search-demo')].forEach(el => el && obs.observe(el));
} else {
 const tl = $('.timeline'); if (tl){ tl.classList.add('is-in'); setTimelineProgress(tl); }
}
reduceMotion.addEventListener('change', () => { if (reduceMotion.matches){ root.classList.remove('js-motion'); settleBoard(); } updateMotionLabel(); });

/* ---------- boot ---------- */
setLanguage(language, false);
if (params.get('lang') === 'ko' || language === 'ko') { const url = new URL(location); url.searchParams.set('lang','ko'); history.replaceState(null,'',url); }
selectStage(0);
renderSearch('');
layoutThread();
})();
