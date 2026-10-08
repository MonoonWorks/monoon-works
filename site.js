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
'hero.ask':'파일럿 신규: Simple PDF의 쪽수 붙는 답변 ↗',
'principles.title':'흩어진 생각이 다시 이어지는 바탕을 만듭니다.',
'p1.t':'시작을 가볍게.','p1.d':'찾고, 열고, 적는 첫 동작을 짧게 만듭니다. 필요한 기능은 필요한 순간에 드러나야 합니다.',
'p2.t':'맥락을 가까이.','p2.d':'원본과 주석, 문장과 출처, 계획과 기록을 함께 이해할 수 있도록 자리를 잡습니다.',
'p3.t':'다시 이어가기 쉽게.','p3.d':'읽던 위치와 작업의 상태가 남도록 돕습니다. 오늘의 작업이 내일의 시작점이 됩니다.',
'principles.note':'모눈에는 자리가 있고, 여백이 있습니다. 도구가 바탕을 만들면, 그 위의 생각은 사람이 이어 갑니다.',
'path.title':'자료에서,<br>생각으로, 장으로.','path.lead':'연구는 한 도구 안에 머물지 않습니다. 자료를 찾아 두고, 질문을 노트에서 키우고, 논증을 장으로 세웁니다. 모눈웍스는 이 세 자리를 가까이 둡니다.',
'path.s1.t':'자료 찾기','path.s1.d':'누가 만들었고, 어디서 왔고, 어떻게 읽었는지까지 기록에 남깁니다.','path.s1.tool':'갈피',
'path.s2.t':'질문 따라가기','path.s2.d':'출처 옆에 질문을 적고, 그 구절의 쪽수를 함께 붙입니다.','path.s2.tool':'새김 · 읽기와 노트',
'path.s3.t':'논증 세우기','path.s3.d':'주장과 근거, 반론을 장의 원고로 가져갑니다.','path.s3.tool':'새김 · 원고',
'sheet.source':'갈피 · 자료 기록','sheet.collection':'컬렉션','sheet.tags':'태그',
'sheet.note':'새김 · 독서 메모','sheet.linked':'Archive linked','sheet.connection':'연결','sheet.connection.d':'과학 도감과 정책 브리핑 차트를 나란히','sheet.next':'다음','sheet.next.d':'자료 맥락 확인 후 2장으로',
'sheet.chapter':'새김 · 논증 지도','sheet.claim':'주장','sheet.claim.d':'권위는 문서들을 거치며 조립되었다','sheet.evidence':'필요한 근거','sheet.evidence.d':'수정 기록, 회의록','sheet.counter':'반론','sheet.counter.d':'서류 작업은 단지 하류가 아니다',
'path.caption':'아래 화면 속 예시 프로젝트로 만든 그래픽',
'flow.name':'새김','flow.sub':'읽기·노트·집필·계획을 한 작업공간에','flow.title':'연구의 여러 시간을 한자리에.',
'flow.copy1':'새김은 일정과 읽기, 노트와 집필을 오가며 긴 연구를 이어 갑니다. 서로 다른 속도로 진행되는 작업을 한 공간에서 살필 수 있습니다.',
'flow.copy2':'인용구에는 쪽 번호가 남고, 노트는 출처와 대조할 수 있으며, 장별 초고는 그것을 가능하게 한 근거 옆에 머뭅니다.',
'stage.library':'문헌 목록','stage.read':'문헌 읽기','stage.notes':'연구 노트','stage.writing':'원고','stage.planning':'주간 계획','themes.lead':'같은 문헌 목록, 세 가지 테마',
'zoom':'크게 보기 ↗',
'flow.word.t':'Microsoft Word에서도 이어서','flow.word.d':'별도 추가 기능으로 인용, 각주와 참고문헌을 작성합니다.',
'flow.plan.t':'계획 중','flow.plan.d':'선택한 연구 노트의 주장 비교, 초고 문단과 근거 자료 대조. 선택적 Claude 연결로 계획 중이며, 지금은 자동 변환이나 동기화가 없습니다.',
'archive.name':'갈피','archive.sub':'원본 자료를 맥락과 함께 보관',
'archive.title':'자료에는<br>맥락이 있습니다.',
'archive.copy1':'사진, 스캔, PDF와 서지정보가 그 의미를 만드는 정보와 함께 남습니다. 기여자, 날짜, 식별자, 전사와 자료에 대한 노트까지.',
'archive.copy2':'Zotero·Juris-M 자료와 Tropy 내보내기를 가져오고, 컬렉션으로 정리하고, 메타데이터와 로컬 OCR 텍스트를 검색합니다. 인용 정보는 원본으로 돌아갈 길과 함께 새김으로 가져옵니다.',
'archive.caption':'갈피 · 앱 안의 이름은 아직 Academia Archive · 현재 한국어 인터페이스.',
'conn.title':'하나의 문헌이 갈피와 새김을 오갑니다.',
'scene1.t':'갈피에 기록을 둔다','scene1.d':'서지정보, 첨부파일, 전사와 자료별 메모가 기록에 남습니다. 자료가 무엇인지뿐 아니라 어디서 왔고 어떻게 읽었는지까지.',
'scene2.t':'새김으로 가져온다','scene2.d':'새김의 문헌 목록에서 갈피를 검색해 기록을 연결합니다. 서지정보가 함께 오고, 원래 기록으로 돌아가는 링크가 생깁니다.',
'scene3.t':'읽고, 적고, 돌아간다','scene3.d':'새김에서 독서 메모와 쪽수 인용구를 씁니다. “Archive linked”가 연결을 보여 주고, “Open Archive”로 원래 기록에 돌아갑니다.',
'conn.scope':'연결이 전달하는 것은 서지정보와 기록으로 돌아가는 링크입니다. 원본 파일, OCR·전사, 갈피의 메모는 새김으로 복사·동기화되지 않습니다.',
'archive.m1':'문헌 기록','archive.m2':'원문 파일','archive.m3':'구절','archive.m4':'맥락','archive.mapnote':'원본에서 연결되어, 언제든 돌아갈 수 있도록.',
'qa.passage':'선택한 구절 · 489쪽','qa.question':'나의 질문','qa.answer':'답변 · 문장마다 근거 쪽',
'qa.caption':'구절 질문 흐름을 표현한 그래픽 · 답은 현재 한국어 · Claude 또는 이 Mac의 모델',
'ask.title':'구절을 묻고, 쪽수는 그대로.','ask.lead':'구절을 선택해 물으면 쉬운 말로 답이 오고, 문장마다 근거가 된 쪽이 붙어 원문과 대조할 수 있습니다.','ask.copy':'정리도 같은 방식입니다. 한 번에 최대 40쪽을 섹션별로. 범위 안의 쪽 텍스트, 질문, 직접 고른 그림 영역만 보내고 PDF 파일·하이라이트·메모는 보내지 않습니다. Claude 또는 이 Mac의 모델로 실행되며, 키는 키체인에 둡니다.','ask.planned':'계획 중: 선택한 구절·쪽 번역.',
'simple.title':'Simple.<br>필요한 일에 곧바로.','simple.copy':'읽고, 쓰고, 찾는 세 가지 동작. 같은 문서의 형태, 같은 이름의 리듬으로 묶은 세 개의 작은 macOS 도구입니다.',
'pdf.sub':'본문 옆에 미주를 두고 읽는 macOS 리더','pdf.title':'본문을 놓치지 않고, 미주까지.','pdf.lead':'본문은 읽던 쪽에 두고, 다른 쪽을 보여 주는 두 번째 창에서 미주를 엽니다.',
'pdf.copy':'목차로 장 사이를 이동하고, 읽던 자리를 유지하며, 문서에 인용구와 노트를 남깁니다.','pdf.caption':'본문 1쪽과 미주 10쪽을 나란히.',
'note.sub':'리치텍스트와 Markdown을 오가는 로컬 노트','note.title':'떠오른 문장을 바로, 내 파일로.','note.lead':'한 줄에서 시작해, 생각에 구조가 필요할 때 제목·체크리스트·표·인용을 더합니다.',
'note.copy':'리치 텍스트와 Markdown을 오가며 쓰고, 태그와 검색으로 다시 찾고, 로컬 Markdown 파일을 열거나 노트를 내보내 다른 도구에서 이어갑니다.','note.editor':'리치텍스트','note.caption':'같은 노트의 리치텍스트·Markdown 화면.',
'search.sub':'메뉴 막대에서 파일명·초성으로 찾기','search.title':'기억나는 이름으로, 바로 그 파일.','search.lead':'이름의 일부나 한글 초성만 쳐도 파일이 나타납니다. 오른쪽에서 직접 해 보세요.',
'search.copy':'파일명과 메타데이터만 색인하며 문서 본문은 읽지 않습니다. 종류로 좁히고, Quick Look으로 미리 보고, 열거나 Finder에서 보기까지 키보드로 합니다.',
'search.hint':'예시 파일명으로 하는 시연 · 초성과 부분 이름 모두 일치합니다.','search.caption':'일치 규칙의 시연 · 실제 앱은 macOS 메뉴 막대에서 실행됩니다.','search.shot':'앱 화면 보기 ↗',
'roadmap.title':'앞으로의 길.','roadmap.copy':'진행 중인 연구와 나란히 만들고, 더 넓게 내놓기 전에 연구자들과 먼저 시험합니다.',
'r1.date':'2025년 7월','r1.t':'개발 시작','r1.d':'대학원 연구자의 읽기와 쓰기에서 새김이 시작됩니다.',
'r2.date':'지금','r2.t':'비공개 파일럿','r2.d':'새김, 갈피와 Simple 도구들을 소수의 연구자와 함께 씁니다. Simple PDF의 쪽수 붙는 답변 같은 새 기능은 여기서 먼저 시험합니다.',
'r3.date':'2027년 상반기','r3.t':'공개 베타','r3.d':'새김과 함께 쓰는 도구들을 베타 신청자에게 엽니다.',
'r4.date':'다음','r4.t':'노트와 초고를 대조','r4.d':'새김에서 노트 사이의 주장을 비교하고 초고를 근거와 대조합니다.',
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
 pdf:{name:'Simple PDF',en:'The body on one page, the endnotes on another, and answers that keep the page.',ko:'본문과 미주를 나란히, 쪽수가 붙는 답변까지.',href:'#simple-pdf'},
 note:{name:'Simple Note',en:'A sentence, straight into your file.',ko:'떠오른 문장을 바로, 내 파일로.',href:'#simple-note'},
 search:{name:'Simple Search',en:'The name you remember, the file you need.',ko:'기억나는 이름으로, 바로 그 파일.',href:'#simple-search'}
};
const stages = [
 {en:'Find the next reading by title, author or tag — Objectivity, Seeing Like a State — and keep its state: collected, to read, reading, finished. The list shows the work in front of you, not only what was saved. Open a record to begin.',ko:'제목·저자·태그로 다음에 읽을 문헌을 찾고(Objectivity, Seeing Like a State…) 수집·읽을 예정·읽는 중·완료 상태를 남깁니다. 목록은 저장한 것이 아니라 지금 할 일을 보여 줍니다. 문헌을 열면 다음 단계입니다.',cap:{en:'Library · public bibliographic records from Zotero · example reading states',ko:'문헌 목록 · Zotero에서 가져온 공개 서지정보 · 예시 읽기 상태'}},
 {en:'Beside the bibliography, write the reading note: the question you bring, how it connects to the project, the next step. Quotations take a page number so the passage can be found again. What you note here is what the research notes build on.',ko:'서지정보 옆에 독서 메모를 씁니다. 가져온 질문, 프로젝트와의 연결, 다음 할 일. 인용구에는 쪽수를 붙여 나중에 그 구절로 돌아갑니다. 여기 적은 것이 연구 노트의 재료가 됩니다.',cap:{en:'Reading record · Objectivity linked from Galpi · the note is a demonstration, not a quotation from the book',ko:'문헌 읽기 · 갈피에서 연결한 Objectivity · 메모는 예시이며 책의 인용문이 아닙니다'}},
 {en:'Set a claim down with the evidence it still needs and the counterpoint it has to meet. Reviewing that structure is how a chapter develops; nothing is turned into a draft automatically.',ko:'주장을 적고, 아직 필요한 근거와 반론을 함께 남깁니다. 이 구조를 검토하며 원고의 장을 발전시킵니다. 자동으로 초고가 되지는 않습니다.',cap:{en:'Research note · “Argument map · Prediction as paperwork” · demonstration project',ko:'연구 노트 · “Argument map · Prediction as paperwork” · 예시 프로젝트'}},
 {en:'Open the chapter in its binder: the structure on the left, the body in the middle, the sources beside it. Notes and writing share one workspace, so the evidence stays within reach while you write.',ko:'바인더에서 장을 엽니다. 왼쪽에 구조, 가운데에 본문, 곁에 문헌. 노트와 집필이 같은 작업 공간에 있어 쓰는 동안 근거가 손닿는 곳에 있습니다.',cap:{en:'Manuscript · “The Paper Trail of Prediction” · demonstration project',ko:'원고 · “The Paper Trail of Prediction” · 예시 프로젝트'}},
 {en:'Place reading, research, writing, seminars and meetings in the week, each as what it is. The plan shows where the project’s time actually goes, and where the next session starts.',ko:'읽기, 자료 조사, 집필, 세미나, 회의를 각각 그 활동으로 한 주에 배치합니다. 계획은 프로젝트의 시간이 실제로 어디로 가는지, 다음 작업이 어디서 시작하는지 보여 줍니다.',cap:{en:'Weekly plan · reading, research, writing, class, meeting and administration · demonstration project',ko:'주간 계획 · 읽기·조사·집필·수업·회의·행정 · 예시 프로젝트'}}
];
const imageLabels = {
 'flow-library':{en:'Saegim — library · Academic Neutral',ko:'새김 — 문헌 목록 · Academic Neutral'},'flow-library-forest':{en:'Saegim — library · Deep Forest',ko:'새김 — 문헌 목록 · Deep Forest'},'flow-library-eink':{en:'Saegim — library · Simple E-Ink',ko:'새김 — 문헌 목록 · Simple E-Ink'},'flow-linked-reading':{en:'Saegim — reading record linked from Galpi',ko:'새김 — 갈피에서 연결한 문헌 읽기'},'flow-archive-import':{en:'Saegim — import from Galpi',ko:'새김 — 갈피에서 가져오기'},'flow-notes':{en:'Saegim — research notes',ko:'새김 — 연구 노트'},
 'flow-manuscript':{en:'Saegim — chapter writing',ko:'새김 — 원고'},'flow-week':{en:'Saegim — weekly planning',ko:'새김 — 주간 계획'},
 'archive-library':{en:'Galpi — source library',ko:'갈피 — 자료 라이브러리'},
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
 $('#stage-caption').textContent = stages[activeStage].cap[language];
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
 $('#stage-caption').textContent = stages[index].cap[language];
 const panel = $('#stage-panel-'+index);
 if (!reduceMotion.matches && panel.animate) panel.animate([{clipPath:'inset(0 0 0 100%)'},{clipPath:'inset(0 0 0 0%)'}], {duration:540, easing:'cubic-bezier(.16,1,.3,1)'});
 if (focus) $('#stage-tab-'+index).focus();
}
$$('.stage-tab').forEach((b,i) => {
 b.addEventListener('click', () => selectStage(i));
 b.addEventListener('keydown', e => { let t; const n=$$('.stage-tab').length; if (e.key==='ArrowDown'||e.key==='ArrowRight') t=(i+1)%n; if (e.key==='ArrowUp'||e.key==='ArrowLeft') t=(i+n-1)%n; if (e.key==='Home') t=0; if (e.key==='End') t=n-1; if (t!==undefined){ e.preventDefault(); selectStage(t,true);} });
});
$('#active-zoom').addEventListener('click', () => openImage($('#stage-panel-'+activeStage+' button').dataset.image));
// Theme: the same library capture in Academic Neutral, Deep Forest or Simple E-Ink.
$$('.theme-tab').forEach(b => b.addEventListener('click', () => {
 $$('.theme-tab').forEach(x => x.setAttribute('aria-pressed', String(x===b)));
 const path = 'images/flow-library'+b.dataset.theme+'.webp';
 const img = $('#library-shot'); const btn = img.parentElement;
 btn.dataset.image = path; img.src = path; img.alt = imageLabel(path);
 if (activeStage !== 0) selectStage(0); else if (!reduceMotion.matches && img.animate) img.animate([{opacity:.35},{opacity:1}], {duration:420, easing:'cubic-bezier(.16,1,.3,1)'});
}));

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


/* ---------- path: a source, a question, a chapter ---------- */
// The sheets sit on the grid; the active one comes forward and opens. The dot —
// the work in hand — travels the grid lines from sheet to sheet, leaving the thread.
const pathCanvas = $('.path-canvas'), route = $('.path-route'), routePath = $('.path-route .route'), pathDot = $('.path-dot');
const sheets = [$('.sheet.source'), $('.sheet.note'), $('.sheet.chapter')];
let pathScene = 0, pathTimer = null, pathTurns = 0, pathUserPicked = false, pathInView = false, routeLen = [0,0,0], routeAnim = null, dotAnim2 = null;
// Layout boxes (not transformed rects), so the route does not chase a sheet mid-transition.
function sheetCorner(el){ return {x: el.offsetLeft + el.offsetWidth - 2, y: el.offsetTop + 2}; }
function layoutRoute(){
 const c = pathCanvas.getBoundingClientRect();
 route.setAttribute('viewBox', `0 0 ${c.width} ${c.height}`);
 const p = sheets.map(sheetCorner);
 const d = `M${p[0].x} ${p[0].y} H${p[1].x} V${p[1].y} H${p[2].x} V${p[2].y}`;
 routePath.setAttribute('d', d);
 pathDot.style.offsetPath = `path("${d}")`;
 const seg1 = Math.abs(p[1].x-p[0].x)+Math.abs(p[1].y-p[0].y), seg2 = Math.abs(p[2].x-p[1].x)+Math.abs(p[2].y-p[1].y);
 routeLen = [0, seg1, seg1+seg2];
 routePath.style.strokeDasharray = `${seg1+seg2} ${seg1+seg2}`;
}
function drawRoute(index, animateIt){
 const total = routeLen[2] || 1, shown = index === 'all' ? total : routeLen[index];
 const from = Number(routePath.dataset.shown || 0);
 routePath.dataset.shown = shown;
 const pct = v => (v/total*100)+'%';
 routeAnim?.cancel(); dotAnim2?.cancel();
 if (animateIt && !reduceMotion.matches && routePath.animate){
  routeAnim = routePath.animate([{strokeDashoffset: total-from}, {strokeDashoffset: total-shown}], {duration: 1100, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards'});
  dotAnim2 = pathDot.animate([{offsetDistance: pct(from)}, {offsetDistance: pct(shown)}], {duration: 1100, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards'});
 } else {
  routePath.style.strokeDashoffset = total - shown; pathDot.style.offsetDistance = pct(shown);
 }
}
function paintPath(index, animateIt = true){
 pathScene = index;
 pathCanvas.dataset.scene = String(index);
 $$('.path-step').forEach((b,i) => b.setAttribute('aria-pressed', String(i===index)));
  layoutRoute(); drawRoute(index, animateIt);
}
function clearPath(){ if (pathTimer){ clearTimeout(pathTimer); pathTimer = null; } }
function cyclePath(){
 clearPath();
 if (pathUserPicked || !pathInView || document.hidden || reduceMotion.matches) return;
 pathTimer = setTimeout(() => {
  const next = (pathScene + 1) % 3;
  if (next === 0){ pathTurns++; routePath.dataset.shown = 0; }
  if (pathTurns >= 2){ pathTimer = null; return; }
  paintPath(next); cyclePath();
 }, 4200);
}
$$('.path-step').forEach(b => b.addEventListener('click', () => { pathUserPicked = true; clearPath(); paintPath(Number(b.dataset.scene)); }));
if (reduceMotion.matches){ pathCanvas.dataset.scene = 'all'; layoutRoute(); drawRoute('all', false); }
else paintPath(0, false);
if ('IntersectionObserver' in window){
 new IntersectionObserver(entries => {
  pathInView = entries[0].isIntersecting;
  if (pathInView && !pathUserPicked && !reduceMotion.matches && !pathTimer) cyclePath(); else if (!pathInView) clearPath();
 }, {threshold: .35}).observe(pathCanvas);
}
document.addEventListener('visibilitychange', () => { if (document.hidden) clearPath(); else if (pathInView) cyclePath(); });
window.addEventListener('resize', () => { layoutRoute(); drawRoute(pathCanvas.dataset.scene === 'all' ? 'all' : pathScene, false); });
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
