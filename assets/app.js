/* Probability study app — hash-routed single page, works from file:// */
(function () {
  const LECTURES = window.LECTURES || [];
  const EXAMS = window.EXAMS || [];
  const BANK = window.BANK || {};
  const PAGES = window.PAGES || {};
  const app = document.getElementById('app');

  // ---------- storage (optional, never required) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  // ---------- theme ----------
  const themeBtn = document.getElementById('themeBtn');
  const savedTheme = store.get('theme', null);
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    store.set('theme', next);
  });

  // ---------- sidebar: drawer on mobile, collapsible on desktop ----------
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');
  const isMobile = () => window.matchMedia('(max-width: 860px)').matches;
  const closeMenu = () => { sidebar.classList.remove('open'); backdrop.classList.remove('show'); };
  if (store.get('navCollapsed', false)) document.body.classList.add('nav-collapsed');
  const toggleMenu = () => {
    if (isMobile()) { sidebar.classList.toggle('open'); backdrop.classList.toggle('show'); return; }
    const collapsed = document.body.classList.toggle('nav-collapsed');
    store.set('navCollapsed', collapsed);
  };
  document.getElementById('menuBtn').addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => {
    if (e.key === '\\' && !e.ctrlKey && !e.altKey && !/input|textarea/i.test(e.target.tagName)) toggleMenu();
  });

  // ---------- installable app (PWA) ----------
  const installBtn = document.getElementById('installBtn');
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e; installBtn.classList.add('show');
  });
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null; installBtn.classList.remove('show');
  });
  window.addEventListener('appinstalled', () => installBtn.classList.remove('show'));
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(() => { /* offline cache is optional */ });
  }

  // ---------- bidi: keep English inside Arabic sentences in reading order ----------
  // Tables are LTR, so cells with Arabic text get RTL or their English words jump to the wrong end.
  // An arrow between two English words (S ← T) would join them into one LTR run and flip; RLM marks pin it RTL.
  // Arrows don't mirror, so → in an Arabic sentence points back at what came before; it becomes ← there.
  const ARABIC = /[؀-ۿ]/;
  const RLM = '‏';
  const fixBidi = () => {
    app.querySelectorAll('td, th').forEach(c => { if (!c.dir && ARABIC.test(c.textContent)) c.dir = 'rtl'; });
    const w = document.createTreeWalker(app, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const t = w.currentNode;
      if (!/[←→]/.test(t.data) || getComputedStyle(t.parentElement).direction !== 'rtl') continue;
      const d = t.data.replace(/\u200F?[←→]\u200F?/g, RLM + '←' + RLM);
      if (d !== t.data) t.data = d;
    }
  };
  // ---------- solution aids: shaded bell curve and the piece of the Z / t table you read from ----------
  // <span data-bell="a,b"> (a or b may be -inf / inf), <span data-zlook="1.67">, <span data-tlook="14,0.05">
  const pdf = z => Math.exp(-z * z / 2);
  const zRow = z => { const a = Math.abs(z), r = Math.floor(a * 10 + 1e-9) / 10; return { r, c: Math.round((a - r) * 100) / 100, neg: z < 0 }; };
  const zCell = (r, c, neg) => Phi(neg ? -(r + c) : r + c).toFixed(4);
  function bellSvg(a, b, area) {
    const W = 280, H = 112, X = z => 14 + (z + 3.5) / 7 * (W - 28), Y = v => H - 22 - v * (H - 34);
    const lo = Math.max(a, -3.5), hi = Math.min(b, 3.5);
    let curve = '', fill = `M${X(lo)},${Y(0)}`;
    for (let z = -3.5; z <= 3.501; z += 0.05) curve += `${curve ? 'L' : 'M'}${X(z).toFixed(1)},${Y(pdf(z)).toFixed(1)}`;
    for (let z = lo; z <= hi + 1e-9; z += Math.min(0.05, hi - lo || 0.05)) fill += `L${X(z).toFixed(1)},${Y(pdf(z)).toFixed(1)}`;
    fill += `L${X(hi)},${Y(pdf(hi))}L${X(hi)},${Y(0)}Z`;
    const lab = v => isFinite(v) && Math.abs(v) <= 3.5 ? `<line x1="${X(v)}" x2="${X(v)}" y1="${Y(0)}" y2="${Y(0) + 4}"/><text x="${X(v)}" y="${H - 6}">${v}</text>` : '';
    const mid = X((lo + hi) / 2), my = Y(pdf((lo + hi) / 2) / 2.4);
    return `<svg class="bell" viewBox="0 0 ${W} ${H}" role="img" aria-label="shaded area">
      <path class="sh" d="${fill}"/><path class="cv" d="${curve}"/><line class="ax" x1="10" x2="${W - 10}" y1="${Y(0)}" y2="${Y(0)}"/>
      <g class="lb">${lab(a)}${lab(b)}${a !== 0 && b !== 0 ? `<line x1="${X(0)}" x2="${X(0)}" y1="${Y(0)}" y2="${Y(0) + 4}"/><text x="${X(0)}" y="${H - 6}" class="m">0</text>` : ''}</g>
      ${area ? `<text class="ar" x="${mid}" y="${my}">${area}</text>` : ''}</svg>`;
  }
  function zLook(z) {
    const { r, c, neg } = zRow(z);
    const cols = [c - 0.01, c, c + 0.01].map(v => Math.round(v * 100) / 100).filter(v => v >= 0 && v <= 0.09);
    const rows = [r - 0.1, r, r + 0.1].map(v => Math.round(v * 10) / 10).filter(v => v >= 0 && v <= 3.4);
    const lbl = v => (neg ? '−' : '') + v.toFixed(1);
    return `<div class="look"><div class="table-wrap"><table class="ztable mini"><tr><th>z</th>${cols.map(k => `<th${k === c ? ' class="hl"' : ''}>${k.toFixed(2)}</th>`).join('')}</tr>${rows.map(v =>
      `<tr><th${v === r ? ' class="hl"' : ''}>${lbl(v)}</th>${cols.map(k => `<td${v === r && k === c ? ' class="hit"' : ''}>${zCell(v, k, neg)}</td>`).join('')}</tr>`).join('')}</table></div>
      <div class="look-cap">سطر <b class="f">${lbl(r)}</b> وعمود <b class="f">${c.toFixed(2)}</b> ← <b class="f">P(Z &lt; ${neg ? '−' : ''}${(r + c).toFixed(2)}) = ${zCell(r, c, neg)}</b></div></div>`;
  }
  function tLook(nu, alpha) {
    const T = window.T_TABLE || [], heads = ['0.10', '0.05', '0.025', '0.01', '0.005'];
    const ci = [0.1, 0.05, 0.025, 0.01, 0.005].indexOf(+alpha) + 1, i = T.findIndex(r => String(r[0]) === String(nu));
    if (i < 0 || ci < 1) return '';
    return `<div class="look"><div class="table-wrap"><table class="ztable mini"><tr><th>ν</th>${heads.map((h, k) => `<th${k + 1 === ci ? ' class="hl"' : ''}>${h}</th>`).join('')}</tr>${T.slice(Math.max(0, i - 1), i + 2).map(r =>
      `<tr><th${r === T[i] ? ' class="hl"' : ''}>${r[0]}</th>${r.slice(1).map((v, k) => `<td${r === T[i] && k + 1 === ci ? ' class="hit"' : ''}>${v}</td>`).join('')}</tr>`).join('')}</table></div>
      <div class="look-cap">سطر <b class="f">ν = ${nu}</b> وعمود <b class="f">${heads[ci - 1]}</b> ← <b class="f">t = ${T[i][ci]}</b></div></div>`;
  }
  const num = s => s === '-inf' ? -Infinity : s === 'inf' ? Infinity : +s.replace('−', '-');
  const expandAids = () => {
    app.querySelectorAll('[data-bell]').forEach(e => { const [a, b] = e.dataset.bell.split(',').map(num); e.outerHTML = bellSvg(a, b, e.dataset.area || ''); });
    app.querySelectorAll('[data-zlook]').forEach(e => { e.outerHTML = zLook(num(e.dataset.zlook)); });
    app.querySelectorAll('[data-tlook]').forEach(e => { const [n, al] = e.dataset.tlook.split(','); e.outerHTML = tLook(n, al); });
  };
  new MutationObserver(() => { expandAids(); fixBidi(); }).observe(app, { childList: true, subtree: true });

  // ---------- nav ----------
  const focusTag = { hot: '🔥', mid: '⭐', low: '', none: '' };
  document.getElementById('navLectures').innerHTML = LECTURES.map(l =>
    `<a href="#${l.id}">${l.n}. ${l.short} ${focusTag[l.focus] || ''}</a>`).join('');
  document.getElementById('navExams').innerHTML = EXAMS.map(e =>
    `<a href="#${e.id}">${e.title}</a>`).join('');
  document.getElementById('navBank').innerHTML = LECTURES.map(l =>
    `<a href="#bank-${l.id}">أسئلة محاضرة ${l.n} <span class="pill">${(BANK[l.id] || []).length}</span></a>`).join('');

  // ---------- quiz engine ----------
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];

  function lecName(id) {
    const l = LECTURES.find(x => x.id === id);
    return l ? `محاضرة ${l.n}` : '';
  }

  // ---------- mistakes: every question answered wrong, kept until it is solved right ----------
  // Keyed by the question text so the same question from the bank, an exam or the mock is one entry.
  const Mistakes = {
    all() { return store.get('mistakes', {}); },
    id(q) { return q.q; },
    has(q) { return this.id(q) in this.all(); },
    add(q) {
      const m = this.all(), id = this.id(q);
      if (!m[id]) {
        const h1 = app.querySelector('h1');
        const { n, src, href, ...rest } = q;
        m[id] = { q: rest, src: src || (h1 ? h1.textContent : ''), href: href || location.hash, at: Date.now() };
      }
      store.set('mistakes', m); this.badge();
    },
    remove(q) { const m = this.all(); delete m[this.id(q)]; store.set('mistakes', m); this.badge(); },
    badge() {
      const b = document.getElementById('mistakesCount'), c = Object.keys(this.all()).length;
      if (b) { b.textContent = c; b.style.display = c ? '' : 'none'; }
    }
  };
  Mistakes.badge();

  function renderQuiz(container, questions, key, opts) {
    opts = opts || {};
    let mode = store.get('mode:' + key, opts.defaultMode || 'solve');
    let answers = store.get('ans:' + key, {});
    const essays = store.get('essay:' + key, {});

    function draw() {
      const mcq = questions.filter(q => q.opts).length;
      container.innerHTML = `
        <div class="toolbar">
          <div class="seg">
            <button data-mode="solve" class="${mode === 'solve' ? 'on' : ''}">✍️ هحل بنفسي</button>
            <button data-mode="solved" class="${mode === 'solved' ? 'on' : ''}">✅ محلول</button>
          </div>
          ${mode === 'solve' ? `<button class="btn primary" data-act="grade">صحح كل الإجابات</button>
          <button class="btn" data-act="reset">امسح إجاباتي</button>` : ''}
          <span class="score" id="score-${key}" style="display:none"></span>
          ${opts.extraTools || ''}
        </div>
        <div class="qs">${questions.map((q, i) => qHtml(q, i)).join('')}</div>
        ${mode === 'solve' && mcq ? `<div class="toolbar"><button class="btn primary" data-act="grade">صحح كل الإجابات</button></div>` : ''}`;
      if (mode === 'solved') container.querySelectorAll('.q').forEach((el, i) => reveal(el, questions[i], i));
      else container.querySelectorAll('.q').forEach((el, i) => { if (answers[i] !== undefined) markPicked(el, answers[i]); });
    }

    function qHtml(q, i) {
      const num = q.n !== undefined ? q.n : i + 1;
      const head = `<div class="q-head"><span class="q-num">Q${num}</span>
        ${q.lec ? `<span class="q-lec">${lecName(q.lec)}</span>` : ''}
        ${q.marks ? `<span class="q-lec">${q.marks}</span>` : ''}
        ${q.src ? `<a class="q-lec" href="${q.href}">من: ${q.src}</a>` : ''}
        <span class="verdict" data-verdict></span></div>`;
      const text = `<div class="q-text ${q.ltr === false ? '' : 'ltr'}">${q.q}</div>`;
      const options = q.opts ? `<div class="opts">${q.opts.map((o, j) =>
        `<button class="opt" data-i="${j}" ${mode === 'solved' ? 'disabled' : ''}>(${LETTERS[j]}) ${o}</button>`).join('')}</div>` : '';
      const box = !q.opts && mode === 'solve'
        ? `<textarea class="essay-box" data-i="${i}" placeholder="اكتب حلك هنا (خطوة خطوة)، وبعدين دوس اعرض الحل وقارن...">${(essays[i] || '').replace(/</g, '&lt;')}</textarea>` : '';
      // essays can't be auto-graded, so after seeing the solution the student says whether they got it
      const self = !q.opts ? `<span class="self" hidden>حليته صح؟
        <button class="btn" data-act="selfok">✔ أيوه</button><button class="btn" data-act="selfno">✘ لأ، غلطت</button></span>` : '';
      const drop = opts.mistakes ? '<button class="btn" data-act="drop">🗑️ شيلها من غلطاتي</button>' : '';
      const actions = mode === 'solve' ? `${box}<div class="q-actions"><button class="btn" data-act="show">💡 اعرض الحل</button>${self}${drop}</div>` : '';
      const ans = q.opts ? `<div class="ans">الإجابة الصح: (${LETTERS[q.a]}) ${q.opts[q.a]}</div>` : (q.ans ? `<div class="ans">${q.ans}</div>` : '');
      return `<div class="q" data-q="${i}">${head}${text}${options}${actions}<div class="sol">${ans}${q.sol || ''}</div></div>`;
    }

    function markPicked(el, j) {
      el.querySelectorAll('.opt').forEach(b => b.classList.toggle('picked', +b.dataset.i === j));
    }

    function reveal(el, q, i) {
      el.querySelector('.sol').classList.add('show');
      if (!q.opts) { const s = el.querySelector('.self'); if (s) s.hidden = false; return; }
      const picked = answers[i];
      el.querySelectorAll('.opt').forEach(b => {
        const j = +b.dataset.i;
        b.classList.remove('picked');
        if (j === q.a) b.classList.add('right');
        else if (mode === 'solve' && j === picked) b.classList.add('wrong');
      });
      const v = el.querySelector('[data-verdict]');
      if (mode === 'solve') {
        if (picked === undefined) { v.textContent = '— ماجاوبتش'; v.className = 'verdict no'; }
        else if (picked === q.a) { v.textContent = '✔ صح'; v.className = 'verdict ok'; Mistakes.remove(q); }
        else { v.textContent = '✘ غلط — اتحط في غلطاتي'; v.className = 'verdict no'; Mistakes.add(q); }
      }
    }

    container.addEventListener('input', e => {
      if (!e.target.classList.contains('essay-box')) return;
      essays[e.target.dataset.i] = e.target.value; store.set('essay:' + key, essays);
    });

    container.addEventListener('click', e => {
      const t = e.target.closest('button');
      if (!t || !container.contains(t)) return;
      if (t.dataset.mode) { mode = t.dataset.mode; store.set('mode:' + key, mode); draw(); return; }
      const act = t.dataset.act;
      if (act === 'grade') {
        let right = 0, total = 0;
        container.querySelectorAll('.q').forEach(el => {
          const i = +el.dataset.q, q = questions[i];
          if (q.opts) { total++; if (answers[i] === q.a) right++; }
          reveal(el, q, i);
        });
        const s = container.querySelector('#score-' + key);
        s.style.display = 'inline-block';
        s.textContent = `درجتك: ${right} / ${total}` + (total ? `  (${Math.round(100 * right / total)}%)` : '');
        s.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      if (act === 'reset') { answers = {}; store.set('ans:' + key, answers); draw(); return; }
      const qEl = t.closest('.q');
      if (!qEl) return;
      const i = +qEl.dataset.q;
      if (act === 'show') { reveal(qEl, questions[i], i); return; }
      if (act === 'selfok' || act === 'selfno') {
        const v = qEl.querySelector('[data-verdict]');
        if (act === 'selfok') { Mistakes.remove(questions[i]); v.textContent = '✔ صح'; v.className = 'verdict ok'; }
        else { Mistakes.add(questions[i]); v.textContent = '✘ غلط — اتحط في غلطاتي'; v.className = 'verdict no'; }
        return;
      }
      if (act === 'drop') { Mistakes.remove(questions[i]); qEl.remove(); return; }
      if (t.classList.contains('opt') && mode === 'solve') {
        if (qEl.querySelector('.sol.show')) return; // already revealed
        answers[i] = +t.dataset.i; store.set('ans:' + key, answers); markPicked(qEl, answers[i]);
      }
    });

    draw();
  }

  // ---------- pages ----------
  function lecturePage(l) {
    const idx = LECTURES.indexOf(l);
    const prev = LECTURES[idx - 1], next = LECTURES[idx + 1];
    const focusLine = {
      hot: '<span class="pill hot">🔥 الدكتور بيركز عليها جدًا</span>',
      mid: '<span class="pill mid">⭐ بتيجي في الميد</span>',
      low: '<span class="pill">بتيجي سؤال صغير</span>',
      none: '<span class="pill">مش في الميد — للفاينل</span>'
    }[l.focus] || '';
    app.innerHTML = `
      <h1>محاضرة ${l.n}: ${l.title}</h1>
      <p class="subtitle"><span class="en">${l.en}</span> &nbsp; ${focusLine}</p>
      ${l.html}
      <div class="card"><b>🎯 خلصت الشرح؟</b> حل أسئلة المحاضرة دي على طريقة الدكتور:
        <a class="btn primary" href="#bank-${l.id}" style="text-decoration:none;margin-inline-start:8px">أسئلة محاضرة ${l.n}</a></div>
      <div class="toolbar">
        ${prev ? `<a class="btn" href="#${prev.id}">→ محاضرة ${prev.n}</a>` : ''}
        ${next ? `<a class="btn" href="#${next.id}">محاضرة ${next.n} ←</a>` : ''}
      </div>`;
  }

  function examPage(e) {
    app.innerHTML = `<h1>${e.title}</h1><p class="subtitle">${e.subtitle || ''}</p>${e.intro || ''}<div id="quiz"></div>`;
    renderQuiz(document.getElementById('quiz'), e.questions, e.id);
  }

  function bankSections(qs, key, lecId) {
    const tag = q => Object.assign(lecId ? { lec: lecId } : {}, q);
    const mcqs = qs.filter(q => q.opts).map(tag), essays = qs.filter(q => !q.opts).map(tag);
    app.insertAdjacentHTML('beforeend', `
      <h2>🎯 أسئلة زي الميد (MCQ) — ${mcqs.length} سؤال</h2>
      <p>نفس قالب الدكتور: 5 اختيارات وآخرهم none of these. اختار إجابتك، وفي الآخر دوس "صحح كل الإجابات".</p>
      <div id="quizM"></div>
      <h2>✍️ أسئلة مقالي — ${essays.length} سؤال</h2>
      <p>اكتب حلك خطوة خطوة في المربع (بيتحفظ لوحده)، وبعدين دوس "اعرض الحل" وقارن حلك بالحل النموذجي.</p>
      <div id="quizE"></div>`);
    renderQuiz(document.getElementById('quizM'), mcqs, key + '-m');
    renderQuiz(document.getElementById('quizE'), essays.map((q, i) => Object.assign({}, q, { n: 'E' + (i + 1) })), key + '-e');
  }

  function bankPage(l) {
    const qs = BANK[l.id] || [];
    app.innerHTML = `<h1>أسئلة محاضرة ${l.n}: ${l.title}</h1>
      <p class="subtitle">${qs.length} سؤال على طريقة الدكتور ${l.focus === 'none' ? '(المحاضرة دي للفاينل)' : '(المحاضرة دي داخلة في الميد)'}.</p>
      <p><a href="#${l.id}">↩ ارجع لشرح المحاضرة</a></p>`;
    bankSections(qs, 'bank-' + l.id, l.id);
  }

  function generalPage() {
    const qs = BANK.general || [];
    app.innerHTML = `<h1>🌐 أسئلة عامة على الميد</h1>
      <p class="subtitle">${qs.length} سؤال متلخبطين من محاضرات 1 لـ 6 بنفس نِسَب الدكتور (Binomial و Normal أكتر حاجة). كل سؤال مكتوب جنبه هو من أنهي محاضرة.</p>`;
    bankSections(qs, 'bank-general', null);
  }

  // links inside one long page scroll instead of changing the hash (the hash is the route)
  app.addEventListener('click', e => {
    const j = e.target.closest('[data-jump]');
    if (j) { e.preventDefault(); document.getElementById(j.dataset.jump).scrollIntoView({ behavior: 'smooth' }); }
  });
  const MID_LECS = ['lec1', 'lec2', 'lec3', 'lec4', 'lec5', 'lec6'];

  function allLecturesPage() {
    const lecs = MID_LECS.map(id => LECTURES.find(l => l.id === id));
    const examples = l => { const d = document.createElement('div'); d.innerHTML = l.html; return [...d.querySelectorAll('.ex')]; };
    app.innerHTML = `<h1>📚 كل أسئلة محاضرات 1 → 6 محلولة</h1>
      <p class="subtitle">في صفحة واحدة: كل مثال محلول في الشرح، وبعده كل أسئلة البنك بتاعة نفس المحاضرة وحلها ظاهر. لو عايز تختبر نفسك دوس "✍️ هحل بنفسي" فوق أي مجموعة.</p>
      <div class="card"><b>روح على طول لـ:</b> ${lecs.map(l => `<a href="#" class="btn" data-jump="all-${l.id}">محاضرة ${l.n}</a>`).join(' ')}</div>
      ${lecs.map(l => { const ex = examples(l); return `
        <h2 id="all-${l.id}">محاضرة ${l.n}: ${l.title}</h2>
        <p><a href="#${l.id}">↩ شرح المحاضرة كامل</a></p>
        <h3>📝 الأمثلة المحلولة (${ex.length})</h3>${ex.map(e => e.outerHTML).join('')}
        <h3>🎯 أسئلة المحاضرة محلولة (${(BANK[l.id] || []).length})</h3><div id="allq-${l.id}"></div>`; }).join('')}`;
    lecs.forEach(l => renderQuiz(document.getElementById('allq-' + l.id),
      (BANK[l.id] || []).map((q, i) => Object.assign({ lec: l.id }, q, { n: i + 1 })), 'all-' + l.id, { defaultMode: 'solved' }));
  }

  function allMidtermsPage() {
    const order = id => MID_LECS.indexOf(id) < 0 ? 99 : MID_LECS.indexOf(id);
    const qs = EXAMS.flatMap(e => e.questions.map(q => Object.assign({}, q, { src: e.title, href: '#' + e.id })))
      .sort((a, b) => order(a.lec) - order(b.lec));
    app.innerHTML = `<h1>🏛️ كل أسئلة الميد القديمة في مكان واحد</h1>
      <p class="subtitle">${qs.length} سؤال من الـ ${EXAMS.length} امتحانات، مترتبين بالمحاضرة عشان الأسئلة اللي شبه بعض تيجي جنب بعض. كل سؤال مكتوب عليه جه في أنهي امتحان.</p>
      <div class="box tip">الوضع "✅ محلول" بيوريك الحل على طول. لو عايز تختبر نفسك اختار "✍️ هحل بنفسي" ودوس "صحح" في الآخر.</div>
      <div id="quiz"></div>`;
    renderQuiz(document.getElementById('quiz'), qs.map((q, i) => Object.assign(q, { n: i + 1 })), 'allmid', { defaultMode: 'solved' });
  }

  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function mockPage() {
    // weights follow how the doctor distributed marks across the three midterms
    const plan = { lec1: 2, lec2: 2, lec3: 4, lec4: 3, lec5: 2, lec6: 2 };
    let qs = store.get('mock:set', null);
    const build = () => {
      const out = [];
      Object.keys(plan).forEach(id => {
        const pool = (BANK[id] || []).filter(q => q.opts).map(q => Object.assign({ lec: id }, q));
        out.push(...shuffle(pool.slice()).slice(0, plan[id]));
      });
      return out;
    };
    if (!qs) { qs = build(); store.set('mock:set', qs); }
    app.innerHTML = `<h1>🎲 امتحان تجريبي</h1>
      <p class="subtitle">15 سؤال MCQ متوزعين على محاضرات الميد (1–6) بنفس النِسَب اللي الدكتور بيحطها. ادّي نفسك 40 دقيقة.</p>
      <div id="quiz"></div>`;
    renderQuiz(document.getElementById('quiz'), qs.map((q, i) => Object.assign({}, q, { n: i + 1 })), 'mock', {
      extraTools: '<button class="btn" id="newMock">🔄 امتحان جديد</button>'
    });
    document.getElementById('newMock').addEventListener('click', () => {
      store.set('mock:set', build()); store.set('ans:mock', {}); mockPage();
    });
  }

  function mistakesPage() {
    const list = Object.values(Mistakes.all()).sort((a, b) => b.at - a.at);
    store.set('ans:mistakes', {}); store.set('mode:mistakes', 'solve'); // a fresh attempt every visit
    app.innerHTML = `<h1>❌ غلطاتي</h1>
      <p class="subtitle">كل سؤال غلطت فيه في بنك الأسئلة أو الامتحانات القديمة أو الامتحان التجريبي بيتحط هنا لوحده. حله تاني: لو جاوبته صح بيتشال من هنا.</p>
      ${list.length ? `<div class="box tip">عندك <b>${list.length}</b> سؤال. حاول تحلهم من غير ما تبص على الحل، وبعدين دوس "صحح كل الإجابات".
        الأسئلة المقالي: اعرض الحل وقول لو حليته صح.</div><div id="quiz"></div>`
        : '<div class="box tip">🎉 مفيش غلطات دلوقتي. أي سؤال هتغلط فيه في بنك الأسئلة أو الامتحانات هيظهر هنا.</div>'}`;
    if (list.length) renderQuiz(document.getElementById('quiz'),
      list.map((m, i) => Object.assign({}, m.q, { n: i + 1, src: m.src, href: m.href })), 'mistakes', { mistakes: true });
  }

  // ---------- normal CDF for the Z table ----------
  function erf(x) {
    const s = Math.sign(x); x = Math.abs(x);
    const t = 1 / (1 + 0.3275911 * x);
    const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return s * y;
  }
  const Phi = z => 0.5 * (1 + erf(z / Math.SQRT2));

  function zPage() {
    const cols = [0, .01, .02, .03, .04, .05, .06, .07, .08, .09];
    let rows = '';
    for (let r = -34; r <= 34; r++) {
      const base = r / 10;
      const label = r === 0 ? '0.0' : (r < 0 ? '-' : '') + Math.abs(base).toFixed(1);
      rows += `<tr><th>${label}</th>${cols.map(c => {
        const z = base < 0 ? base - c : base + c;
        return `<td>${Phi(z).toFixed(4)}</td>`;
      }).join('')}</tr>`;
    }
    const T = window.T_TABLE || [];
    app.innerHTML = `<h1>📊 جدول Z وجدول t</h1>
      <p class="subtitle">الجدول بيديك <span class="f">P(Z &lt; z)</span> = المساحة على <b>شمال</b> z. السطر = الرقم الصحيح والعُشر، والعمود = الرقم التاني بعد العلامة.</p>
      <div class="box tip"><b>إزاي تقرأ الجدول:</b> عايز <span class="f">P(Z &lt; 1.67)</span>؟ انزل لسطر <b>1.6</b> وروح لعمود <b>0.07</b> → <b>0.9525</b>.
      عايز <span class="f">P(Z &lt; −1.67)</span>؟ سطر <b>−1.6</b> عمود <b>0.07</b> → <b>0.0475</b>. (لاحظ إن 0.9525 + 0.0475 = 1 بسبب التماثل).</div>
      <div class="box warn"><b>في الامتحان:</b> الدكتور بيكتب لك تحت الورقة القيم اللي هتحتاجها بس (زي <span class="f">P(Z&lt;1.5)=0.9332</span>). استخدم أرقامه هو حتى لو مختلفة شوية.</div>
      <h2>جدول Z (Standard Normal)</h2>
      <div class="table-wrap"><table class="ztable"><tr><th>z</th>${cols.map(c => `<th>${c.toFixed(2)}</th>`).join('')}</tr>${rows}</table></div>
      <h2>جدول t — قيمة <span class="f">t<sub>α</sub></span> اللي على يمينها مساحة α</h2>
      <p>df = ν = n − 1</p>
      <div class="table-wrap"><table class="ztable"><tr><th>ν</th><th>0.10</th><th>0.05</th><th>0.025</th><th>0.01</th><th>0.005</th></tr>
      ${T.map(r => `<tr><th>${r[0]}</th>${r.slice(1).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</table></div>
      <h2>قيم Z المشهورة (احفظها)</h2>
      <div class="table-wrap"><table><tr><th>Confidence</th><th>α</th><th>α/2</th><th>Z<sub>α/2</sub></th></tr>
      <tr><td>90%</td><td>0.10</td><td>0.05</td><td>1.645</td></tr>
      <tr><td>94%</td><td>0.06</td><td>0.03</td><td>1.88</td></tr>
      <tr><td>95%</td><td>0.05</td><td>0.025</td><td>1.96</td></tr>
      <tr><td>98%</td><td>0.02</td><td>0.01</td><td>2.33</td></tr>
      <tr><td>99%</td><td>0.01</td><td>0.005</td><td>2.575</td></tr></table></div>`;
  }

  function homePage() {
    const lt = l => `<a class="tile" href="#${l.id}"><div class="num">محاضرة ${l.n} ${l.focus === 'hot' ? '<span class="pill hot">🔥 مهمة جدًا</span>' : l.focus === 'mid' ? '<span class="pill mid">⭐ مهمة</span>' : l.focus === 'none' ? '<span class="pill">فاينل</span>' : ''}</div><div class="t">${l.title}</div><div class="en" style="font-size:13px;color:var(--muted)">${l.en}</div></a>`;
    app.innerHTML = (PAGES.home || '') +
      `<h2>📚 المحاضرات</h2><div class="grid">${LECTURES.map(lt).join('')}</div>
       <h2>📝 الامتحانات القديمة</h2><div class="grid">${EXAMS.map(e => `<a class="tile" href="#${e.id}"><div class="t">${e.title}</div><div class="num">${e.subtitle || ''}</div></a>`).join('')}</div>`;
  }

  function staticPage(name) { app.innerHTML = PAGES[name] || '<p>الصفحة مش موجودة</p>'; }

  // ---------- router ----------
  function route() {
    const h = (location.hash || '#home').slice(1);
    closeMenu();
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + h));
    const lec = LECTURES.find(l => l.id === h);
    const exam = EXAMS.find(e => e.id === h);
    if (lec) lecturePage(lec);
    else if (exam) examPage(exam);
    else if (h === 'bank-general') generalPage();
    else if (h.startsWith('bank-')) { const l = LECTURES.find(x => 'bank-' + x.id === h); l ? bankPage(l) : homePage(); }
    else if (h === 'mock') mockPage();
    else if (h === 'mistakes') mistakesPage();
    else if (h === 'all') allLecturesPage();
    else if (h === 'allmid') allMidtermsPage();
    else if (h === 'ztable') zPage();
    else if (PAGES[h]) staticPage(h);
    else homePage();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
