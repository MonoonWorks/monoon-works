(() => {
'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const ko = {
'skip':'본문으로 이동','nav.story':'만든 이야기','nav.contact':'문의하기',
'hero.title':'연구의 흐름을<br>이어가세요.',
'hero.lead':'<strong>Academia Flow</strong>는 인문학·사회과학 연구자의 읽기, 노트, 집필과 계획을 하나의 작업 공간으로 연결합니다.',
'hero.explore':'작업 공간 살펴보기','hero.pilot':'파일럿 문의',
'hero.archive':'자료의 맥락은 Academia Archive에서 ↗',
'status':'소규모 사용자와 이용 중 · 비공개 파일럿',
'graphic.source':'문헌 기록','graphic.note':'연구 노트',
'graphic.question':'도구는 무엇이 근거가 되는지 어떻게 바꿀까?',
'graphic.link':'원문과 연결된 생각','graphic.chapter':'하나의 장으로 발전시키기',
'graphic.claim':'연구 질문','graphic.evidence':'근거 자료','graphic.argument':'나의 해석',
'graphic.label':'원문과 생각을<br>가까이 두세요.',
'graphic.caption':'연구 흐름을 표현한 그래픽 · 예시 연구 노트',
'motion.pause':'모션 멈추기','motion.play':'모션 재생',
'scene.read':'자료 찾기','scene.note':'질문 발전시키기','scene.write':'논증 구성하기',
'bridge.note':'오랜 시간 이어지는 연구의 작업 방식을 생각합니다.',
'bridge.title':'발견한 구절에서,<br>기록한 생각으로.<br>집필하는 장으로.',
'flow.subtitle':'문헌을 읽는 순간부터 다음 연구 시간을 계획할 때까지.',
'stage.read':'읽기','stage.notes':'노트','stage.writing':'집필','stage.planning':'계획',
'flow.caption':'실행 중인 앱에서 직접 캡처 · Academic Neutral 테마 · 공개 서지정보와 예시 작업 공간.',
'zoom':'크게 보기 ↗',
'flow.word':'Microsoft Word에서도 이어서<br>별도 추가 기능으로 인용, 각주와 참고문헌을 작성합니다.',
'flow.next':'후속 버전에서는 Claude API를 선택적으로 연결해 연구 노트 사이의 주장을 비교하고 초고 문단을 근거 자료와 대조하는 기능을 계획하고 있습니다. 전송할 자료와 원고에 반영할 내용은 연구자가 선택하도록 준비합니다.',
'themes.title':'오래 머물 수 있는 작업 환경.',
'themes.copy':'여러 라이트·다크·스페셜 테마와 Light·Dark·Auto 모드를 제공합니다. 나의 작업 리듬에 맞는 화면을 선택하세요.',
'themes.hint':'Flow 갤러리는 Academic Neutral로 촬영했습니다. 앱의 화면 설정 캡처에서 테마 선택지를 살펴보세요.',
'archive.title':'자료에는<br>맥락이 있습니다.',
'archive.copy1':'사진, 스캔, PDF와 서지정보를 자료의 의미를 만드는 정보와 함께 보관합니다. 기여자, 날짜, 식별자, 전사와 자료별 연구 노트를 같은 기록에 남깁니다.',
'archive.copy2':'Zotero·Juris-M 자료와 Tropy 내보내기를 가져옵니다. 컬렉션으로 정리하고 메타데이터와 로컬 OCR 텍스트를 검색한 뒤, 읽고 쓸 자료를 Flow로 연결합니다.',
'archive.caption':'실제 앱 화면 · 공개 서지정보 · 현재 Archive UI는 한국어입니다.',
'archive.record':'문헌 기록','archive.file':'원문 파일','archive.passage':'중요한 구절','archive.context':'자료의 맥락',
'archive.mapnote':'자료를 출발점으로 연결하고, 언제든 다시 돌아갑니다.',
'tools.title':'작은 도구에도,<br>같은 세심함을.',
'pdf.type':'학술 자료를 위한 macOS 리더',
'pdf.copy':'본문의 논증을 따라가면서 미주를 확인합니다. 본문은 읽던 쪽에 두고, 별도 패널에서 미주를 열며, 목차로 장 사이를 이동합니다.',
'pdf.next':'선택한 문단·페이지를 번역하고, 논문의 연구 질문과 논증을 요약하며, 원문과 쪽수를 곁에 두고 후속 질문을 할 수 있는 Claude API 연결 기능도 계획하고 있습니다.',
'pdf.caption':'본문 1쪽과 미주 10쪽을 나란히 · 실제 앱, 예시 문서.',
'note.type':'떠오른 생각을 놓아둘 로컬 작업 공간',
'note.copy':'한 줄에서 시작해 생각에 구조가 필요할 때 제목, 체크리스트, 표와 인용을 더합니다. 리치텍스트와 Markdown을 오가며 작성하고, 태그로 정리하며, 제목과 본문을 검색합니다.',
'note.copy2':'로컬 Markdown·텍스트 파일을 열거나 노트를 내보내 다른 도구에서 이어갑니다. 자주 쓰는 노트는 고정하고, 나머지는 언제든 찾을 수 있게 둡니다.',
'note.editor':'리치텍스트','note.caption':'실제 앱 화면 · 예시 연구 노트.',
'search.copy':'macOS 메뉴바에서 파일을 찾습니다. 이름 일부나 한글 초성으로 검색하고 문서 종류로 범위를 좁히며 Quick Look으로 미리 봅니다. 파일명과 메타데이터를 색인해 문서 본문을 읽지 않고 파일을 찾습니다.',
'founder.title':'대학원생의<br>연구 책상에서.',
'founder.role':'대학원생·연구자 · 창업자·개발자',
'mori.caption':'긴 연구 시간을 함께하는 친구.',
'founder.p1':'Monoon Works는 대학원생의 일상적인 연구 작업에서 시작했습니다. 문헌을 따라가고, 정확한 구절로 돌아가며, 흩어진 노트를 하나의 논증으로 발전시키는 일이었습니다.',
'founder.p2':'Zotero, Tropy와 EndNote는 각자의 역할이 있는 유용한 도구입니다. 그 사이에 남는 질문이 있었습니다. 연구가 커져도 자료, 노트, 집필과 계획을 어떻게 계속 연결할 수 있을까?',
'founder.p3':'현재 Academia Flow와 관련 도구들은 창업자의 지인 네트워크를 대상으로 소규모 비공개 파일럿을 운영하고 있습니다. 실제 연구의 작업 방식이 다음에 만들 기능을 결정합니다.',
'founder.date':'2025년 7월','founder.began':'개발 시작','founder.now':'현재','founder.pilot':'소규모 비공개 파일럿',
'contact.title':'어떻게 연구하는지<br>들려주세요.',
'contact.copy':'비공개 파일럿에 관심이 있거나, 도구가 이해했으면 하는 연구 방식이 있나요? 관심 있는 제품과 하고 있는 작업을 이메일로 알려주세요.',
'faq.title':'궁금한 점.',
'faq.access.q':'어떻게 사용해 볼 수 있나요?',
'faq.access.a':'현재 소규모 비공개 파일럿으로 운영하고 있습니다. 관심 있는 제품과 연구 작업 방식을 이메일로 알려주시면 이용 가능 여부를 안내해 드립니다.',
'faq.local.q':'연구 자료는 어디에 저장되나요?',
'faq.local.a':'Flow의 연구 작업 공간은 로컬 저장소를 사용합니다. Archive도 원문 파일과 데이터베이스를 로컬에 보관합니다. Zotero 가져오기와 같은 선택적 연결은 별도의 설정을 사용합니다.',
'faq.tools.q':'Zotero와 Word를 계속 써도 되나요?',
'faq.tools.a':'네. Archive로 Zotero 자료를 가져올 수 있고, 별도 Word 추가 기능에서 문헌 검색, 인용, 각주와 참고문헌 작업을 이어갈 수 있습니다.',
'faq.relation.q':'Flow와 Archive는 어떻게 함께 쓰나요?',
'faq.relation.a':'Archive는 원문 파일과 서지정보, 자료의 맥락을 관리합니다. Flow는 읽기, 연구 노트, 장별 집필과 계획을 연결합니다. 선택한 Archive 자료를 Flow에 연결해 사용할 수 있습니다.',
'faq.theme.q':'화면 테마를 바꿀 수 있나요?',
'faq.theme.a':'Flow는 여러 라이트·다크·스페셜 테마와 Light·Dark·Auto 모드를 제공합니다. 이 페이지의 앱 화면은 Academic Neutral 테마로 촬영했습니다.',
'footer.top':'맨 위로 ↑'
};
Object.assign(ko, {
'nav.tools':'도구','nav.roadmap':'로드맵','nav.beta':'베타 신청',
'hero.kicker':'인문학·사회과학 연구를 위한 소프트웨어',
'hero.beta':'베타 신청하기',
'hero.claude':'파일럿 신규: Simple PDF의 Claude ↗',
'status':'비공개 파일럿 운영 중 · 2027년 상반기 공개 베타 예정',
'graphic.caption':'연구 흐름 그래픽',
'flow.caption':'데스크톱 앱에서 직접 캡처 · Academic Neutral 테마.',
'flow.next':'다음 단계: 선택한 노트 사이의 주장을 비교하고 초고 문단을 근거 자료와 대조하는 Claude 기능(선택 사항). 무엇을 보내고 무엇을 남길지는 연구자가 정합니다.',
'claude.kicker':'Simple PDF · Claude 엔진','claude.pill':'파일럿 중',
'claude.title':'논문에 묻고,<br>쪽수는 그대로.',
'claude.copy1':'Simple PDF에서 구절을 선택하고 질문하세요. Claude가 쉬운 말로 설명하고 문장마다 근거가 된 쪽을 붙여, 모든 답을 원문과 대조할 수 있습니다.',
'claude.copy2':'정리도 같은 방식입니다. 한 번에 최대 40쪽을 섹션별로 정리하고, 쪽 번호와 함께 논증이 어떻게 흘러가는지 짧게 보여 줍니다.',
'qa.passage':'선택한 구절 · 489쪽','qa.question':'나의 질문','qa.answer':'답변 · 문장마다 근거 쪽',
'qa.caption':'구절 질문 흐름을 표현한 그래픽 · Simple PDF는 현재 한국어로 답합니다.',
'fact.grounded.t':'원문에 근거한 답',
'fact.grounded.d':'제공한 쪽의 텍스트만 근거로 씁니다. 숫자는 원문 표기 그대로 두고, 발췌로 뒷받침할 수 없는 내용은 그렇다고 밝힙니다.',
'fact.sent.t':'보낼 내용은 연구자가 선택',
'fact.sent.d':'범위 안의 쪽 텍스트, 질문, 직접 고른 그림 영역만 Claude API로 보냅니다. PDF 파일, 하이라이트, 메모는 보내지 않습니다.',
'fact.local.t':'원하면 이 Mac 안에서만',
'fact.local.d':'같은 패널을 Mac에서 실행되는 모델로 바꾸면 아무것도 밖으로 나가지 않습니다.',
'fact.key.t':'API 키는 키체인에',
'fact.key.d':'API 키는 그 기기의 macOS 키체인에 저장하며, 저장하기 전에 유효한지 확인합니다.',
'claude.next':'Claude와 함께 계획 중인 다음 기능',
'next.compare':'Flow — 선택한 노트 사이의 주장 비교',
'next.draft':'Flow — 초고 문단을 근거 자료와 대조',
'next.translate':'Simple PDF — 선택한 구절·쪽 번역',
'archive.caption':'Academia Archive · 현재 한국어 인터페이스.',
'pdf.next':'파일럿 신규: 선택한 구절을 Claude에게 묻기 ↗',
'pdf.caption':'본문 1쪽과 미주 10쪽을 나란히.',
'note.caption':'같은 노트의 리치텍스트·Markdown 화면.',
'roadmap.title':'앞으로의 길.',
'roadmap.copy':'진행 중인 연구와 나란히 만들고, 더 넓게 내놓기 전에 연구자들과 먼저 시험합니다.',
'road.1.date':'2025년 7월','road.1.t':'개발 시작','road.1.d':'대학원 연구자의 읽기와 쓰기에서 Academia Flow가 시작됩니다.',
'road.2.t':'비공개 파일럿','road.2.d':'Flow, Archive와 Simple 도구들을 소수의 연구자가 매일 사용합니다.',
'road.3.date':'2026년 10월','road.3.t':'Simple PDF에 Claude','road.3.d':'쪽 번호가 붙은 설명과 정리가 파일럿에 들어갑니다.',
'road.4.date':'2027년 상반기','road.4.t':'공개 베타','road.4.d':'Academia Flow와 함께 쓰는 도구들을 베타 신청자에게 엽니다.',
'road.5.date':'다음','road.5.t':'Flow에 Claude','road.5.d':'노트 사이의 주장을 비교하고 초고를 근거와 대조합니다.',
'founder.role':'대학원생·연구자 · 창업자·개발자 · 서울',
'founder.p3':'지금은 소규모 비공개 파일럿으로 운영하며, 실제 연구 방식이 다음에 만들 기능을 정합니다. 공개 베타는 2027년 상반기를 계획하고 있습니다.',
'contact.title':'베타에<br>참여하세요.',
'contact.copy':'공개 베타는 2027년 상반기를 계획하고 있습니다. 전공과 지금 하고 있는 작업을 알려주시면 자리가 열릴 때 연락드립니다. 지금 비공개 파일럿에 참여하고 싶은 연구자도 문의해 주세요.',
'beta.cta':'베타 신청하기','beta.pilot':'비공개 파일럿 문의',
'faq.access.q':'언제 사용할 수 있나요?',
'faq.access.a':'지금은 소규모 비공개 파일럿으로 운영하며, 공개 베타는 2027년 상반기를 계획하고 있습니다. 베타 신청을 남기거나 파일럿 참여를 문의해 주세요.',
'faq.ai.q':'Simple PDF는 어떤 AI를 쓰고, 무엇을 보내나요?',
'faq.ai.a':'패널마다 고릅니다. Claude API의 Claude Opus 5.5, 또는 Mac에서 실행되는 모델입니다. Claude를 고르면 범위 안의 쪽 텍스트, 질문, 직접 고른 그림 영역만 Anthropic API로 보냅니다. PDF 파일, 하이라이트, 메모는 보내지 않습니다. <a href="privacy.html#ko">개인정보 안내</a>를 참고하세요.',
'shots.note':'화면은 실제 앱이며, 시연용 작업 공간과 공개 서지정보를 사용했습니다.',
'footer.company':'© 2026 Monoon Works · 서울','footer.privacy':'개인정보 안내'
});
const stages = [
{file:'flow-library',en:'Find books and papers by title, author, or tag. Keep reading states and attachments with each record, so a growing bibliography becomes a view of the work in front of you.',ko:'제목·저자·태그로 책과 논문을 찾습니다. 문헌마다 읽기 상태와 첨부파일을 함께 두어, 늘어나는 참고문헌 목록에서 지금 해야 할 작업을 확인합니다.',label:{en:'Academia Flow — reading library',ko:'Academia Flow — 문헌 목록'}},
{file:'flow-notes',en:'Keep an interpretation tied to its source. Work with page-linked quotations and notes, then develop a claim, the evidence it needs, and the counterpoints it must address.',ko:'해석을 원문의 근거와 연결합니다. 쪽수를 남긴 인용구와 노트를 다루며 주장, 필요한 근거, 검토할 반론을 정리합니다.',label:{en:'Academia Flow — research notes',ko:'Academia Flow — 연구 노트'}},
{file:'flow-manuscript',en:'Move from notes into sustained chapter writing. Keep a manuscript organized in its binder, work with headings and footnotes, and carry sources into Word with the companion add-in.',ko:'노트에서 장별 집필로 이어갑니다. 바인더에서 원고의 구조를 관리하고 제목과 각주를 다루며, 별도 추가 기능으로 Word의 인용 작업을 이어갈 수 있습니다.',label:{en:'Academia Flow — chapter writing',ko:'Academia Flow — 장별 집필'}},
{file:'flow-week',en:'Give the long project a place in the week. Arrange reading, research, writing, classes, meetings, and administration. Choose today’s priorities and leave a record for your next session.',ko:'긴 프로젝트를 주간 계획으로 구체화합니다. 읽기, 자료 분석, 집필, 수업, 회의와 행정 업무를 배치하고, 오늘의 우선순위와 다음 연구 시간을 위한 기록을 남깁니다.',label:{en:'Academia Flow — weekly planning',ko:'Academia Flow — 주간 계획'}}
];
const imageLabels = {
'flow-themes':{en:'Academia Flow — appearance settings',ko:'Academia Flow — 화면 설정'},
'archive-library':{en:'Academia Archive — source library',ko:'Academia Archive — 자료 라이브러리'},
'simple-pdf':{en:'Simple PDF — body and endnotes',ko:'Simple PDF — 본문과 미주'},
'note-editor':{en:'Simple Note — rich text',ko:'Simple Note — 리치텍스트'},
'note-markdown':{en:'Simple Note — Markdown',ko:'Simple Note — Markdown'}
};
stages.forEach(stage => { imageLabels[stage.file] = stage.label; });
const imageDescriptionsKo = {
 'flow-library':'공개 서지정보, 태그와 읽기 상태를 보여주는 Academia Flow 문헌 목록.',
 'flow-notes':'예시 논증 구조와 날짜별 노트가 있는 Academia Flow 연구 저널.',
 'flow-manuscript':'예시 원고와 바인더를 보여주는 Academia Flow 집필 화면.',
 'flow-week':'읽기, 자료 분석, 집필, 수업, 회의, 공부와 행정 업무가 배치된 Academia Flow 주간 계획.',
 'flow-themes':'여러 테마와 Light·Dark·Auto 모드를 보여주는 Academia Flow 화면 설정.',
 'archive-library':'공개 서지정보와 Objectivity의 메타데이터를 보여주는 Academia Archive의 한국어 화면.',
 'simple-pdf':'본문 1쪽과 미주 10쪽을 나란히 보여주는 Simple PDF.',
 'note-editor':'예시 연구 노트를 보여주는 Simple Note 리치텍스트 편집기.',
 'note-markdown':'예시 연구 노트를 보여주는 Simple Note Markdown 편집기.',
 'mori':'노트에 기록하는 전등 모양의 연구 동반자, 모리.'
};
const originalAlts=new Map($$('img[src$=".webp"]').map(img=>[img.getAttribute('src'),img.alt]));
originalAlts.set('images/note-markdown.webp','Simple Note Markdown editor with an example research note, headings, and source references.');
function updateImageAlts(){
 $$('img[src$=".webp"]').forEach(img=>{
  const src=img.getAttribute('src'), key=src.split('/').pop().replace('.webp','');
  img.alt=language==='ko'?(imageDescriptionsKo[key]||imageLabel(src)):(originalAlts.get(src)||imageLabel(src));
 });
}
const localized = $$('[data-key]');
const english = new Map(localized.map(el => [el,el.innerHTML]));
let language = new URLSearchParams(location.search).get('lang') === 'ko' ? 'ko' : 'en';
let activeStage = 0;
let noteMode = 'editor';
const animate = (targets, options) => {
  if (window.anime && !reduceMotion.matches) return window.anime.animate(targets,options);
  return null;
};
function imageLabel(path){
 const key=path.split('/').pop().replace('.webp','');
 return (imageLabels[key] || {en:'Product screenshot',ko:'제품 화면'})[language];
}
function setLanguage(next) {
 language=next;
 document.documentElement.lang=language;
 document.title=language==='ko'?'Monoon Works — 인문학·사회과학 연구를 위한 소프트웨어':'Monoon Works — Research software for the humanities and social sciences';
 updateImageAlts();
 localized.forEach(el => { el.innerHTML=language==='ko' ? (ko[el.dataset.key] || english.get(el)) : english.get(el); });
 $('.lang').textContent=language==='ko'?'EN':'KO';
 $('.lang').setAttribute('aria-label',language==='ko'?'Switch to English':'한국어로 전환');
 $('#stage-description').textContent=stages[activeStage][language];
 $('.brand').setAttribute('aria-label',language==='ko'?'모눈웍스 홈':'Monoon Works home');
 $('.header-nav').setAttribute('aria-label',language==='ko'?'주 메뉴':'Main navigation');
 $('.motion-figure').setAttribute('aria-label',language==='ko'?'문헌이 연구 노트와 장별 원고로 이어지는 흐름을 표현한 그래픽':'Illustration of a source becoming a research note and a chapter outline');
 $('.stage-tabs').setAttribute('aria-label',language==='ko'?'Academia Flow 연구 단계':'Academia Flow workflow');
 $('.note-tabs').setAttribute('aria-label',language==='ko'?'Simple Note 화면':'Simple Note views');
 $('.motion-steps').setAttribute('aria-label',language==='ko'?'연구 흐름 그래픽 단계':'Workflow illustration steps');
 $$('[data-image]').forEach(button => { button.setAttribute('aria-label',(language==='ko'?'화면 확대: ':'Enlarge: ')+imageLabel(button.dataset.image)); });
 $('.dialog-close').setAttribute('aria-label',language==='ko'?'확대한 화면 닫기':'Close enlarged image');
 updateMotionLabel();
 if ($('.image-dialog').open) $('#dialog-title').textContent=imageLabel($('.dialog-image').getAttribute('src'));
 const url=new URL(location.href);
 if(language==='ko') url.searchParams.set('lang','ko'); else url.searchParams.delete('lang');
 history.replaceState(null,'',url);
}
$('.lang').addEventListener('click',()=>setLanguage(language==='en'?'ko':'en'));
function selectStage(index,focus=false) {
 activeStage=index;
 $$('.stage-tab').forEach((button,i)=>{
  button.setAttribute('aria-selected',String(i===index));
  button.tabIndex=i===index?0:-1;
 });
 $$('.stage-shot').forEach((panel,i)=>{
  if(window.anime)window.anime.remove(panel);
  panel.style.clipPath='';
  panel.hidden=i!==index;
  panel.classList.toggle('is-active',i===index);
 });
 $('#stage-description').textContent=stages[index][language];
 const panel=$('#stage-panel-'+index);
 animate(panel,{clipPath:['inset(0 0 0 100%)','inset(0 0 0 0%)'],duration:540,ease:'outQuart',onComplete:()=>{panel.style.clipPath='';}});
 if(focus) $('#stage-tab-'+index).focus();
}
$$('.stage-tab').forEach((button,index)=>{
 button.addEventListener('click',()=>selectStage(index));
 button.addEventListener('keydown',event=>{
  const change={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[event.key];
  if(change){event.preventDefault();selectStage((activeStage+change+4)%4,true);}
  else if(event.key==='Home'||event.key==='End'){event.preventDefault();selectStage(event.key==='Home'?0:3,true);}
 });
});
const dialog=$('.image-dialog');
let dialogTrigger=null;
function openImage(path,trigger){
 dialogTrigger=trigger;
 $('.dialog-image').src=path;
 updateImageAlts();
 $('#dialog-title').textContent=imageLabel(path);
 dialog.showModal();
 $('.dialog-close').focus();
}
$$('[data-image]').forEach(button=>button.addEventListener('click',()=>openImage(button.dataset.image,button)));
$('#active-zoom').addEventListener('click',event=>openImage('images/'+stages[activeStage].file+'.webp',event.currentTarget));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>{if(dialogTrigger)dialogTrigger.focus();});
$$('.note-tab').forEach(button=>button.addEventListener('click',()=>{
 noteMode=button.dataset.note;
 $$('.note-tab').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
 $('#note-image').src='images/note-'+noteMode+'.webp';
 updateImageAlts();
 $('#note-image-button').dataset.image='images/note-'+noteMode+'.webp';
 $('#note-image-button').setAttribute('aria-label',(language==='ko'?'화면 확대: ':'Enlarge: ')+imageLabel($('#note-image').getAttribute('src')));
}));
let scene=0, motionPaused=reduceMotion.matches, motionInView=true, timer=null, turns=0;
const paperNodes=[$('.paper.source'),$('.paper.note'),$('.paper.outline')];
const sceneTransforms=[
 [[0,0,-9,1],[0,0,6,1],[0,0,-4,1]],
 [[-.045,.025,-15,.9],[-.08,-.025,-2,1.03],[.025,-.015,5,.95]],
 [[-.01,-.02,-12,.87],[-.09,-.07,5,.91],[-.09,-.19,-2,1.1]]
];
function updateMotionLabel(){
 const button=$('.motion-toggle');
 button.disabled=reduceMotion.matches;
 if(reduceMotion.matches){
  button.textContent=language==='ko'?'모션 줄이기 적용 중':'Reduced motion on';
  button.setAttribute('aria-pressed','true');
  return;
 }
 button.textContent=language==='ko'?(motionPaused?'모션 재생':'모션 멈추기'):(motionPaused?'Play motion':'Pause motion');
 button.setAttribute('aria-pressed',String(motionPaused));
}
function paintScene(index,useMotion=true){
 scene=index;
 const rect=$('.motion-canvas').getBoundingClientRect();
 $$('.motion-step').forEach((el,i)=>el.setAttribute('aria-pressed',String(i===index)));
 paperNodes.forEach((el,i)=>{
  const [x,y,rotate,scale]=sceneTransforms[index][i];
  if(window.anime)window.anime.remove(el);
  const values={x:x*rect.width,y:y*rect.height,rotate,scale};
  if(useMotion&&!reduceMotion.matches&&window.anime){
   el.style.willChange='transform';
   animate(el,{...values,duration:950,delay:i*70,ease:'inOutCubic',onComplete:()=>{el.style.willChange='auto';}});
  }else{
   el.style.transform='translate('+values.x+'px,'+values.y+'px) rotate('+rotate+'deg) scale('+scale+')';
   el.style.willChange='auto';
  }
 });
 if(useMotion&&window.anime&&!reduceMotion.matches){
  window.anime.remove($('.main-thread'));
  animate($('.main-thread'),{strokeDashoffset:[1,0],duration:1400,ease:'inOutSine'});
 }
}
function stopAnimations(){
 if(window.anime){paperNodes.forEach(el=>window.anime.remove(el));window.anime.remove($('.main-thread'));}
 $('.main-thread').style.strokeDashoffset='0';
}
function clearTimer(){if(timer!==null){clearTimeout(timer);timer=null;}}
function schedule(){
 clearTimer();
 if(motionPaused||!motionInView||document.hidden||reduceMotion.matches)return;
 timer=setTimeout(()=>{
  paintScene((scene+1)%3);
  turns++;
  if(turns>=3){motionPaused=true;updateMotionLabel();return;}
  schedule();
 },4400);
}
$('.motion-toggle').addEventListener('click',()=>{
 motionPaused=!motionPaused;
 if(!motionPaused){turns=0;paintScene((scene+1)%3);}else stopAnimations();
 updateMotionLabel();schedule();
});
$$('.motion-step').forEach(button=>button.addEventListener('click',()=>{
 motionPaused=true;updateMotionLabel();clearTimer();paintScene(Number(button.dataset.scene));
}));
if('IntersectionObserver'in window){
 new IntersectionObserver(entries=>{
  motionInView=entries[0].isIntersecting;
  if(!motionInView){
   clearTimer();
   stopAnimations();
  }else schedule();
 },{threshold:.1}).observe($('.motion-figure'));
}
document.addEventListener('visibilitychange',()=>{
 if(document.hidden){
  clearTimer();
  stopAnimations();
 }else schedule();
});
reduceMotion.addEventListener('change',()=>{
 if(reduceMotion.matches){
  motionPaused=true;clearTimer();stopAnimations();paintScene(scene,false);
  $$('.stage-shot').forEach(panel=>{if(window.anime)window.anime.remove(panel);panel.style.clipPath='';});
 }
 updateMotionLabel();
});
let resizeTimer;
window.addEventListener('resize',()=>{
 clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>paintScene(scene,false),120);
});
setLanguage(language);
paintScene(0,false);
schedule();
})();
