/* Extra practice built from the doctor's question templates.
   Every number is computed here, so answers always match the solutions.
   Fills each lecture to 30 questions (22 MCQ + 8 essay) and builds 50 general questions. */
(function () {
  const BANK = window.BANK;
  const NO = 'none of these';
  const IND_OPTS = ['dependant', 'independent', 'disjoint', 'P(A∩B) cannot be found from given information'];

  // ---------- helpers ----------
  function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function seedOf(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  const pick = (R, a) => a[Math.floor(R() * a.length)];
  const rnd = (x, d = 4) => { const v = Math.round((x + Math.sign(x) * 1e-12) * 10 ** d) / 10 ** d; return Object.is(v, -0) ? 0 : v; };
  const fx = (x, d = 4) => String(rnd(x, d));
  const f = s => `<span class="f">${s}</span>`;
  const range = (a, b, s) => { const o = []; for (let x = a; x <= b + 1e-9; x += s) o.push(rnd(x, 2)); return o; };
  function erf(x) { const s = Math.sign(x); x = Math.abs(x); const t = 1 / (1 + 0.3275911 * x); return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)); }
  const Phi = z => rnd(0.5 * (1 + erf(rnd(z, 2) / Math.SQRT2)), 4);
  const nCr = (n, k) => { let v = 1; for (let i = 1; i <= k; i++) v = v * (n - k + i) / i; return Math.round(v); };
  const bin = (n, p, k) => nCr(n, k) * p ** k * (1 - p) ** (n - k);
  const tVal = (nu, alpha) => { const col = { 0.1: 1, 0.05: 2, 0.025: 3, 0.01: 4, 0.005: 5 }[alpha]; const row = (window.T_TABLE || []).find(r => String(r[0]) === String(nu)); return row ? +row[col] : null; };
  const zCI = { 90: 1.645, 95: 1.96, 98: 2.33, 99: 2.575 };
  const zOne = { 0.1: 1.285, 0.05: 1.645, 0.01: 2.33 };
  const zTwo = { 0.1: 1.645, 0.05: 1.96, 0.01: 2.575 };
  const sum = a => a.reduce((s, x) => s + x, 0);
  const tbl = (xs, fs) => `<table><tr><th>X</th>${xs.map(x => `<td>${x}</td>`).join('')}</tr><tr><th>f(x)</th>${fs.map(v => `<td>${v}</td>`).join('')}</tr></table>`;

  let notaCount = 0;
  function mcq(R, q, correct, wrongs, sol, opt) {
    opt = opt || {};
    const c = String(correct);
    let o;
    if (opt.fixed) o = opt.fixed.slice();
    else {
      o = [c];
      for (const w of wrongs) { const s = String(w); if (s && s !== 'NaN' && s !== 'null' && !o.includes(s)) o.push(s); if (o.length === 4) break; }
      const num = parseFloat(c); let k = 1;
      while (o.length < 4 && !isNaN(num) && k < 30) {
        const step = Math.abs(num) >= 5 ? 1 : Math.abs(num) >= 1 ? 0.1 : 0.01;
        const s = fx(num + (k % 2 ? 1 : -1) * step * Math.ceil(k / 2));
        if (!o.includes(s) && !(parseFloat(s) < 0 && num >= 0)) o.push(s);
        k++;
      }
      for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; }
    }
    let a = o.indexOf(c);
    let extra = '';
    notaCount++;
    if (!opt.fixed && notaCount % 8 === 0) {
      const alt = wrongs.map(String).find(w => w && w !== 'NaN' && !o.includes(w));
      if (alt) {
        o[a] = alt; a = 4;
        extra = `<div class="box warn" style="margin:8px 0 0">الإجابة الصح ${f(c)} مش موجودة في الاختيارات ← <b>(E) none of these</b>. الدكتور بيعمل الحركة دي، فلو حسبت وماطلعش رقمك ماتغيرش حلك!</div>`;
      }
    }
    return { q, opts: [...o, NO], a, sol: sol + extra };
  }
  const essay = (q, ans, sol) => ({ q, ans, sol, essay: true });

  // ---------- lecture 1 ----------
  const CTX = [['has a Visa card', 'has a MasterCard'], ['passes Statistics', 'passes Math'], ['reads newspaper A', 'reads newspaper B'],
    ['owns a laptop', 'owns a tablet'], ['likes football', 'likes basketball'], ['uses Facebook', 'uses Instagram'], ['speaks English', 'speaks French']];
  function threeProbs(R) {
    for (let i = 0; i < 100; i++) {
      const pa = pick(R, range(0.2, 0.8, 0.05)), pb = pick(R, range(0.2, 0.8, 0.05));
      const lo = rnd(Math.max(0.05, pa + pb - 0.95), 2), hi = rnd(Math.min(pa, pb) - 0.05, 2);
      if (lo > hi) continue;
      const opts = range(0.05, 0.95, 0.05).filter(v => v >= lo - 1e-9 && v <= hi + 1e-9);
      if (opts.length) return [pa, pb, pick(R, opts)];
    }
    return [0.5, 0.7, 0.35];
  }
  const ways = s => 6 - Math.abs(s - 7);
  const L1 = {
    mcq: [
      R => { const [a, b] = pick(R, CTX), [pa, pb, pab] = threeProbs(R), u = rnd(pa + pb - pab, 2);
        const kind = pick(R, ['union', 'neither', 'onlyA', 'exactly', 'onlyB']);
        const ask = { union: 'at least one of the two', neither: 'neither of the two', onlyA: `A only (A but not B)`, exactly: 'exactly one of the two', onlyB: 'B only (B but not A)' }[kind];
        const val = { union: u, neither: 1 - u, onlyA: pa - pab, exactly: u - pab, onlyB: pb - pab }[kind];
        const how = { union: `P(A∪B) = ${pa} + ${pb} − ${pab}`, neither: `1 − P(A∪B) = 1 − ${u}`, onlyA: `P(A) − P(A∩B) = ${pa} − ${pab}`, exactly: `P(A∪B) − P(A∩B) = ${u} − ${pab}`, onlyB: `P(B) − P(A∩B) = ${pb} − ${pab}` }[kind];
        return mcq(R, `Let A be the event that a randomly selected student ${a} and B the event that he ${b}. Suppose P(A) = ${pa}, P(B) = ${pb} and P(A ∩ B) = ${pab}. The probability of ${ask} is`,
          fx(val, 2), [fx(pa + pb, 2), fx(pa * pb, 4), fx(1 - val, 2), fx(pab, 2), fx(u, 2), fx(1 - u, 2)], `${f(how + ' = ' + fx(val, 2))}`); },
      R => { const [a, b] = pick(R, CTX), [pa, pb, pab] = threeProbs(R), u = rnd(pa + pb - pab, 2);
        return mcq(R, `The probability that a person ${a} is ${pa}, and the probability that he ${b} is ${pb}. If the probability that he ${a} or ${b} (or both) is ${u}, then the probability of both is`,
          fx(pab, 2), [fx(pa * pb, 4), fx(pa + pb - 1, 2), fx(1 - u, 2), fx(u - pa, 2)], `${f(`P(A∩B) = P(A) + P(B) − P(A∪B) = ${pa} + ${pb} − ${u} = ${pab}`)}`); },
      R => { const pa = pick(R, range(0.1, 0.5, 0.05)), pb = pick(R, range(0.1, 0.9 - pa, 0.05)), u = rnd(pa + pb, 2);
        const kind = pick(R, ['AcB', 'union', 'neither']);
        if (kind === 'AcB') return mcq(R, `If A and B are mutually exclusive events, P(A) = ${pa}, and P(A ∪ B) = ${u}, then P(Ā ∩ B) =`, fx(pb, 2), [fx(u, 2), fx(pa * u, 4), fx(u + pa, 2), fx(1 - u, 2)],
          `متنافيين ← ${f(`P(B) = ${u} − ${pa} = ${pb}`)} ، و ${f(`P(Ā∩B) = P(B) = ${pb}`)}`);
        if (kind === 'union') return mcq(R, `If A and B are mutually exclusive events, P(A) = ${pa}, and P(A<sup>C</sup> ∩ B) = ${pb}, then P(A ∪ B) =`, fx(u, 2), [fx(pa * pb, 4), fx(pb, 2), fx(1 - u, 2), fx(pb - pa, 2)],
          `متنافيين ← ${f(`P(Aᶜ∩B) = P(B) = ${pb}`)} ← ${f(`P(A∪B) = ${pa} + ${pb} = ${u}`)}`);
        return mcq(R, `If A and B are mutually exclusive events with P(A) = ${pa} and P(B) = ${pb}, then P(A′ ∩ B′) =`, fx(1 - u, 2), [fx(u, 2), fx(1 - pa * pb, 4), fx((1 - pa) * (1 - pb), 4)],
          `${f(`P(A′∩B′) = 1 − P(A∪B) = 1 − (${pa} + ${pb}) = ${fx(1 - u, 2)}`)}`); },
      R => { const s = pick(R, [2, 3, 4, 5, 6, 8, 9, 10, 11, 12]), w = ways(s), inter = s % 2 === 0 ? 1 : 0;
        const kind = pick(R, ['inter', 'union', 'AnotB', 'A']);
        const val = { inter, union: w + 6 - inter, AnotB: w - inter, A: w }[kind];
        const ask = { inter: 'P(A ∩ B)', union: 'P(A ∪ B)', AnotB: 'P(A ∩ B̄)', A: 'P(A)' }[kind];
        const wr = [w, 6, w + 6, Math.max(0, w - 1), inter, w + 5].map(k => k + '/36');
        return mcq(R, `When we roll a pair of balanced dice, let A be the event that the sum of the two appearing numbers is ${s}, and let B be the event that the two numbers on the two appearing faces are equal. Find ${ask}`,
          val + '/36', wr, `المجموع ${s} ليه ${w} حالات، والـ doubles 6 حالات، والتقاطع ${inter ? `حالة واحدة (${s / 2},${s / 2})` : 'فاضي (المجموع فردي)'} ← ${f(ask + ' = ' + val + '/36')}`); },
      R => { const s = pick(R, [3, 4, 5, 6, 9, 10, 11]), le = R() < 0.5;
        let c = 0; for (let x = 2; x <= 12; x++) if (le ? x <= s : x >= s) c += ways(x);
        return mcq(R, `A fair die is thrown twice. The probability that the sum of the two numbers is ${le ? 'less than or equal to' : 'greater than or equal to'} ${s} is`, fx(c / 36), [fx((c - ways(s)) / 36), fx(1 - c / 36), fx(ways(s) / 36), fx((c + 1) / 36)],
          `عدّ الحالات من جدول الزهرتين = ${c} ← ${f(`${c}/36 = ${fx(c / 36)}`)}`); },
      R => { const k = pick(R, [0, 1, 2, 3]), kind = pick(R, ['exact', 'atleast']);
        const v = kind === 'exact' ? nCr(3, k) / 8 : (k === 0 ? 1 : 1 - [1, 4, 7][k - 1] / 8);
        return mcq(R, `A balanced coin is flipped three times independently. The probability of getting ${kind === 'exact' ? 'exactly' : 'at least'} ${k} head${k === 1 ? '' : 's'} is`, fx(v, 3), [fx(1 - v, 3), '0.125', '0.375', '0.5', '0.875'],
          `S فيها 8 نتايج. ${kind === 'exact' ? `عدد الطرق = ${f(`3C${k} = ${nCr(3, k)}`)}` : 'عدّ الحالات اللي فيها العدد ده أو أكتر'} ← ${f(fx(v, 3))}`); },
      R => { const n1 = pick(R, [3, 4, 5, 6, 7]), n2 = pick(R, [2, 3, 4, 5]), n3 = pick(R, [1, 2, 3, 4]), N = n1 + n2 + n3;
        return mcq(R, `A box contains ${n1} red, ${n2} blue and ${n3} green balls. One ball is selected at random. The probability that it is blue or green is`, fx((n2 + n3) / N), [fx(n2 / N), fx(n3 / N), fx(n1 / N), fx(n2 * n3 / N / N)],
          `${f(`(${n2} + ${n3})/${N} = ${fx((n2 + n3) / N)}`)}`); }
    ],
    essay: [
      R => { const [pa, pb, pab] = threeProbs(R), u = rnd(pa + pb - pab, 2);
        return essay(`Given P(A) = ${pa}, P(B) = ${pb} and P(A ∩ B) = ${pab}. Find:<br>(a) P(A ∪ B) (b) P(A′ ∩ B′) (c) P(A ∩ B′) (d) the probability of exactly one (e) P(A′ ∪ B′)`,
          `(a) ${u} (b) ${fx(1 - u, 2)} (c) ${fx(pa - pab, 2)} (d) ${fx(u - pab, 2)} (e) ${fx(1 - pab, 2)}`,
          `<ol class="steps"><li>${f(`${pa} + ${pb} − ${pab} = ${u}`)}</li><li>${f(`1 − ${u} = ${fx(1 - u, 2)}`)}</li><li>${f(`${pa} − ${pab} = ${fx(pa - pab, 2)}`)}</li><li>${f(`${u} − ${pab} = ${fx(u - pab, 2)}`)}</li><li>${f(`P(A′∪B′) = 1 − P(A∩B) = ${fx(1 - pab, 2)}`)}</li></ol>`); },
      R => { const s = pick(R, [4, 5, 6, 8, 9, 10]), w = ways(s), inter = s % 2 === 0 ? 1 : 0;
        const A = []; for (let i = 1; i <= 6; i++) { const j = s - i; if (j >= 1 && j <= 6) A.push(`(${i},${j})`); }
        return essay(`Two balanced dice are rolled. Let A = {the sum is ${s}} and B = {the two faces are equal}.<br>(a) List A, B and A ∩ B. (b) Find P(A), P(B), P(A ∩ B) and P(A ∪ B). (c) Are A and B mutually exclusive? Why?`,
          `P(A) = ${w}/36, P(B) = 6/36, P(A∩B) = ${inter}/36, P(A∪B) = ${w + 6 - inter}/36`,
          `<ol class="steps"><li>A = {${A.join(', ')}} ، B = {(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)} ، A∩B = ${inter ? `{(${s / 2},${s / 2})}` : '∅'}</li>
          <li>${f(`P(A∪B) = ${w}/36 + 6/36 − ${inter}/36 = ${w + 6 - inter}/36`)}</li><li>${inter ? 'مش متنافيين لأن التقاطع مش فاضي.' : 'متنافيين لأن التقاطع فاضي (مجموع الـ doubles زوجي).'}</li></ol>`); },
      R => { const pa = pick(R, range(0.1, 0.4, 0.05)), pb = pick(R, range(0.1, 0.5, 0.05)), u = rnd(pa + pb, 2);
        return essay(`A and B are mutually exclusive with P(A) = ${pa} and P(B) = ${pb}. Find (a) P(A ∪ B) (b) P(A′ ∩ B′) (c) P(A ∩ B′) (d) Are A and B independent? Explain.`,
          `(a) ${u} (b) ${fx(1 - u, 2)} (c) ${pa} (d) No`,
          `<ol class="steps"><li>${f(`${pa} + ${pb} = ${u}`)}</li><li>${f(`1 − ${u} = ${fx(1 - u, 2)}`)}</li><li>${f(`P(A) − 0 = ${pa}`)}</li><li>${f(`P(A∩B) = 0 ≠ P(A)P(B) = ${fx(pa * pb, 4)}`)} ← dependent (المتنافيين عمرهم ما يبقوا مستقلين لو احتمالاتهم أكبر من صفر).</li></ol>`); },
      R => { const atl = R() < 0.5;
        return essay(`A balanced coin is tossed three times. Let A = {${atl ? 'at least two heads' : 'exactly two heads'}} and B = {the first toss is a head}.<br>(a) Write the sample space. (b) List A, B, A ∩ B. (c) Find P(A ∪ B).`,
          `P(A∪B) = 5/8`,
          `<ol class="steps"><li>S = {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}</li><li>A = ${atl ? '{HHH, HHT, HTH, THH}' : '{HHT, HTH, THH}'} ، B = {HHH, HHT, HTH, HTT} ، A∩B = ${atl ? '{HHH, HHT, HTH}' : '{HHT, HTH}'}</li><li>${f(atl ? 'P(A∪B) = 4/8 + 4/8 − 3/8 = 5/8' : 'P(A∪B) = 3/8 + 4/8 − 2/8 = 5/8')}</li></ol>`); }
    ]
  };

  // ---------- lecture 2 ----------
  const MACH = [[0.3, 0.5, 0.2], [0.2, 0.3, 0.5], [0.4, 0.35, 0.25], [0.5, 0.3, 0.2], [0.25, 0.35, 0.4], [0.45, 0.35, 0.2]];
  const DEF = [[0.01, 0.02, 0.03], [0.02, 0.03, 0.04], [0.01, 0.04, 0.07], [0.04, 0.06, 0.12], [0.05, 0.02, 0.03], [0.03, 0.01, 0.02]];
  function indepCase(R) {
    for (let i = 0; i < 100; i++) {
      const pa = pick(R, [0.2, 0.4, 0.5, 0.6, 0.8, 0.3]), pb = pick(R, [0.3, 0.5, 0.6, 0.4, 0.7, 0.2]), prod = rnd(pa * pb, 2);
      const ind = R() < 0.5, pab = ind ? prod : rnd(prod + pick(R, [-0.1, 0.1, 0.05, -0.05]), 2);
      if (pab <= 0 || pab >= Math.min(pa, pb) || pa + pb - pab > 1) continue;
      return { pa, pb, pab, ind, prod };
    }
    return { pa: 0.5, pb: 0.6, pab: 0.3, ind: true, prod: 0.3 };
  }
  const L2 = {
    mcq: [
      R => { const { pa, pb, pab, ind, prod } = indepCase(R), u = rnd(pa + pb - pab, 2);
        return mcq(R, `If P(A) = ${pa}, P(B) = ${pb} and P(A ∪ B) = ${u}; then A and B are`, IND_OPTS[ind ? 1 : 0], [], `${f(`P(A∩B) = ${pa} + ${pb} − ${u} = ${pab}`)} و ${f(`P(A)P(B) = ${prod}`)} ← ${ind ? 'متساويين ← <b>independent</b>' : 'مختلفين ← <b>dependent</b>'}`, { fixed: IND_OPTS }); },
      R => { const { pa, pb, pab, ind, prod } = indepCase(R), d = rnd(pa - pab, 2);
        return mcq(R, `If P(A) = ${pa}, P(B) = ${pb} and P(A ∩ B<sup>C</sup>) = ${d}; then A and B are`, IND_OPTS[ind ? 1 : 0], [], `${f(`P(A∩B) = P(A) − P(A∩Bᶜ) = ${pa} − ${d} = ${pab}`)} و ${f(`P(A)P(B) = ${prod}`)} ← ${ind ? '<b>independent</b>' : '<b>dependent</b>'}`, { fixed: IND_OPTS }); },
      R => { const pb = pick(R, [0.4, 0.5, 0.6, 0.8, 0.3]), r = pick(R, [0.25, 0.5, 0.3, 0.4, 0.75]), pab = rnd(pb * r, 3);
        if (R() < 0.5) return mcq(R, `If P(A ∩ B) = ${pab} and P(B) = ${pb}, then P(A | B) =`, fx(r), [fx(pab * pb), fx(pb - pab), fx(pb / pab, 2), fx(1 - r)], `${f(`P(A|B) = ${pab}/${pb} = ${fx(r)}`)}`);
        return mcq(R, `If P(B) = ${pb} and P(A | B) = ${r}, then P(A ∩ B) equals`, fx(pab), [fx(r / pb), fx(pb + r), fx(1 - pab), fx(r)], `${f(`P(A∩B) = P(B)·P(A|B) = ${pb} × ${r} = ${fx(pab)}`)}`); },
      R => { const p1 = pick(R, [0.4, 0.5, 0.6, 0.7, 0.8, 0.9]), p2 = pick(R, [0.5, 0.6, 0.7, 0.8, 0.9]);
        if (R() < 0.5) return mcq(R, `Two engines operate independently. The probability that the first starts is ${p1} and the second is ${p2}. The probability that both start is`, fx(p1 * p2), [fx(p1 + p2), fx(1 - (1 - p1) * (1 - p2)), fx((p1 + p2) / 2), fx((1 - p1) * (1 - p2))], `مستقلين ← ${f(`${p1} × ${p2} = ${fx(p1 * p2)}`)}`);
        const v = 1 - (1 - p1) * (1 - p2);
        return mcq(R, `Two engines operate independently. The probability that the first starts is ${p1} and the second is ${p2}. The probability that at least one engine starts is`, fx(v), [fx(p1 * p2), fx(p1 + p2), fx((1 - p1) * (1 - p2)), fx(p1 + p2 - 0.1)], `${f(`1 − (1−${p1})(1−${p2}) = 1 − ${fx((1 - p1) * (1 - p2))} = ${fx(v)}`)}`); },
      R => { const m = pick(R, MACH), d = pick(R, DEF), br = m.map((x, i) => x * d[i]), pd = sum(br);
        const pct = a => a.map(x => rnd(x * 100, 2) + '%').join(', ');
        const story = `A factory contains 3 machines producing ${pct(m)} of the total production. The percentages of defective items are ${pct(d)} respectively. A unit is selected at random.`;
        if (R() < 0.45) return mcq(R, `${story} The probability that it is defective is`, fx(pd), [fx(sum(d) / 3), fx(sum(d)), fx(br[0]), fx(1 - pd)], `Total: ${f(br.map((b, i) => `${m[i]}(${d[i]})`).join(' + ') + ' = ' + fx(pd))}`);
        const i = Math.floor(R() * 3);
        return mcq(R, `${story} If it is found defective, the probability that it came from machine ${i + 1} is`, fx(br[i] / pd), [fx(br[i]), fx(m[i]), fx(br[(i + 1) % 3] / pd), fx(d[i] / sum(d))],
          `${f(`P(D) = ${fx(pd)}`)} ← Bayes: ${f(`${fx(br[i])} / ${fx(pd)} = ${fx(br[i] / pd)}`)}`); },
      R => { const r = pick(R, [4, 5, 6, 7, 8]), w = pick(R, [3, 4, 5, 6]), N = r + w, v = r / N * (r - 1) / (N - 1);
        return mcq(R, `A box contains ${r} red and ${w} white balls. Two balls are drawn one after the other without replacement. The probability that both are red is`, fx(v), [fx((r / N) ** 2), fx(r / N), fx(r * (r - 1) / N / N), fx(1 - v)],
          `${f(`${r}/${N} × ${r - 1}/${N - 1} = ${fx(v)}`)} (من غير إرجاع ← التاني من ${N - 1})`); },
      R => { const a = pick(R, [60, 80, 100, 120]), b = pick(R, [20, 40, 60]), c = pick(R, [40, 60, 90]), d = pick(R, [20, 30, 50]), N = a + b + c + d;
        const tb = `<table><tr><th></th><th>Pass</th><th>Fail</th><th>Total</th></tr><tr><th>Male</th><td>${a}</td><td>${b}</td><td>${a + b}</td></tr><tr><th>Female</th><td>${c}</td><td>${d}</td><td>${c + d}</td></tr></table>`;
        const kind = pick(R, ['PgF', 'MgFail', 'M']);
        if (kind === 'PgF') return mcq(R, `${N} students are classified by sex and result: ${tb} A student is selected at random. The probability that the student passes given that the student is female is`, fx(c / (c + d)), [fx(c / N), fx(c / (a + c)), fx((a + c) / N), fx(d / (c + d))], `اقفل على صف Female: ${f(`${c}/${c + d} = ${fx(c / (c + d))}`)}`);
        if (kind === 'MgFail') return mcq(R, `${N} students are classified by sex and result: ${tb} The probability that the student is male given that the student failed is`, fx(b / (b + d)), [fx(b / N), fx(b / (a + b)), fx((a + b) / N), fx(d / (b + d))], `اقفل على عمود Fail: ${f(`${b}/${b + d} = ${fx(b / (b + d))}`)}`);
        return mcq(R, `${N} students are classified by sex and result: ${tb} The probability that the selected student is male and failed is`, fx(b / N), [fx(b / (a + b)), fx(b / (b + d)), fx((a + b) / N), fx(a / N)], `مفيش شرط ← على الكل: ${f(`${b}/${N} = ${fx(b / N)}`)}`); }
    ],
    essay: [
      R => { const m = pick(R, MACH), d = pick(R, DEF), br = m.map((x, i) => x * d[i]), pd = sum(br);
        return essay(`Three machines A1, A2, A3 make ${m.map(x => rnd(x * 100, 2) + '%').join(', ')} of the products. ${d.map(x => rnd(x * 100, 2) + '%').join(', ')} of their products are defective, respectively. A product is selected at random.<br>(a) Find the probability that it is defective.<br>(b) If it is defective, find the probability it was made by each machine.<br>(c) Which machine should be checked first?`,
          `P(D) = ${fx(pd)} ؛ ${br.map((b, i) => `P(A${i + 1}|D) = ${fx(b / pd)}`).join(' ، ')}`,
          `<table><tr><th>Machine</th><th>P(Ai)</th><th>P(D|Ai)</th><th>branch</th><th>Bayes</th></tr>${m.map((x, i) => `<tr><td>A${i + 1}</td><td>${x}</td><td>${d[i]}</td><td>${fx(br[i])}</td><td>${fx(br[i] / pd)}</td></tr>`).join('')}<tr><th>Total</th><td>1</td><td></td><th>${fx(pd)}</th><td>1</td></tr></table>
          (c) المكنة اللي احتمالها في Bayes أكبر: <b>A${br.indexOf(Math.max(...br)) + 1}</b>.`); },
      R => { const a = pick(R, [28, 30, 40, 50]), b = pick(R, [20, 22, 35, 45]), c = pick(R, [10, 17, 25, 38]), e = pick(R, [30, 45, 50]), g = pick(R, [12, 20, 28]), h = pick(R, [15, 17, 30]);
        const M = a + b + c, F = e + g + h, N = M + F;
        return essay(`${N} adults are classified by sex and education: <table><tr><th></th><th>Male</th><th>Female</th></tr><tr><th>Elementary</th><td>${a}</td><td>${e}</td></tr><tr><th>Secondary</th><td>${b}</td><td>${g}</td></tr><tr><th>College</th><td>${c}</td><td>${h}</td></tr></table>
          A person is selected at random. Find: (a) P(Male) (b) P(Male | Secondary) (c) P(not College | Female) (d) Are Male and Elementary independent? Why?`,
          `(a) ${fx(M / N)} (b) ${fx(b / (b + g))} (c) ${fx((e + g) / F)} (d) ${Math.abs(M / N - a / (a + e)) < 1e-9 ? 'independent' : 'dependent'}`,
          `<ol class="steps"><li>المجاميع: Male = ${M} ، Female = ${F} ← ${f(`P(M) = ${M}/${N} = ${fx(M / N)}`)}</li><li>صف Secondary (${b + g}): ${f(`${b}/${b + g} = ${fx(b / (b + g))}`)}</li><li>عمود Female (${F}): ${f(`(${e} + ${g})/${F} = ${fx((e + g) / F)}`)}</li><li>${f(`P(M|E) = ${a}/${a + e} = ${fx(a / (a + e))}`)} مقارنة بـ ${f(`P(M) = ${fx(M / N)}`)} ← ${Math.abs(M / N - a / (a + e)) < 1e-9 ? 'متساويين ← independent' : 'مختلفين ← dependent'}</li></ol>`); },
      R => { const s = pick(R, [0.4, 0.5, 0.6, 0.7]), p1 = pick(R, [0.1, 0.2, 0.3, 0.4]), p2 = pick(R, [0.05, 0.1, 0.15]), br1 = s * p1, br2 = (1 - s) * p2, pd = br1 + br2;
        return essay(`Mohammad washes ${rnd(s * 100, 2)}% of the dishes and Ahmad washes the rest. Mohammad breaks a dish with probability ${p1} and Ahmad with probability ${p2}.<br>(a) Find the probability that a dish is broken.<br>(b) If a broken dish is found, find the probability it was washed by Mohammad.`,
          `(a) ${fx(pd)} (b) ${fx(br1 / pd)}`,
          `<ol class="steps"><li>${f(`${s}(${p1}) + ${rnd(1 - s, 2)}(${p2}) = ${fx(br1)} + ${fx(br2)} = ${fx(pd)}`)}</li><li>${f(`${fx(br1)} / ${fx(pd)} = ${fx(br1 / pd)}`)}</li></ol>`); },
      R => { const { pa, pb, pab, ind, prod } = indepCase(R), u = rnd(pa + pb - pab, 2);
        return essay(`Given P(A) = ${pa}, P(B) = ${pb} and P(A ∪ B) = ${u}.<br>(a) Find P(A ∩ B). (b) Find P(A | B) and P(B | A). (c) Are A and B independent? Justify in two ways.`,
          `(a) ${pab} (b) ${fx(pab / pb)} , ${fx(pab / pa)} (c) ${ind ? 'independent' : 'dependent'}`,
          `<ol class="steps"><li>${f(`${pa} + ${pb} − ${u} = ${pab}`)}</li><li>${f(`P(A|B) = ${pab}/${pb} = ${fx(pab / pb)}`)} ، ${f(`P(B|A) = ${pab}/${pa} = ${fx(pab / pa)}`)}</li><li>طريقة 1: ${f(`P(A)P(B) = ${prod}`)} ${ind ? '=' : '≠'} ${pab}. طريقة 2: ${f(`P(A|B) = ${fx(pab / pb)}`)} ${ind ? '=' : '≠'} ${f(`P(A) = ${pa}`)}. ← <b>${ind ? 'independent' : 'dependent'}</b></li></ol>`); }
    ]
  };

  // ---------- lecture 3 ----------
  const COEF = [[1, 2, 3, 4], [2, 8, 6, 4], [1, 3, 4, 2], [3, 2, 4, 1], [1, 1, 2, 6], [4, 3, 2, 1], [2, 3, 5], [1, 2, 2], [2, 4, 4], [1, 4, 5]];
  const PV4 = [[0.1, 0.2, 0.3, 0.4], [0.2, 0.3, 0.4, 0.1], [0.1, 0.4, 0.3, 0.2], [0.3, 0.1, 0.2, 0.4], [0.2, 0.2, 0.5, 0.1], [0.4, 0.3, 0.2, 0.1], [0.1, 0.1, 0.4, 0.4], [0.3, 0.3, 0.2, 0.2]];
  const XV4 = [[0, 1, 2, 3], [1, 2, 3, 4], [-1, 0, 1, 2], [2, 4, 6, 8]];
  const dTable = R => { const xs = pick(R, XV4), ps = pick(R, PV4); const m = sum(xs.map((x, i) => x * ps[i])), m2 = sum(xs.map((x, i) => x * x * ps[i])); return { xs, ps, m: rnd(m, 4), m2: rnd(m2, 4), v: rnd(m2 - m * m, 4) }; };
  const BSTORY = [
    (p, n) => [`A detection system detects a missile attack with probability ${p}. If ${n} systems operate independently`, 'systems detect the attack'],
    (p, n) => [`Suppose that ${rnd(p * 100, 2)}% of the products of a manufacturing process are defective. ${n} items are selected at random`, 'defective items'],
    (p, n) => [`The probability that a lab specimen is contaminated is ${p}. ${n} independent samples are checked`, 'contaminated samples'],
    (p, n) => [`${rnd(p * 100, 2)}% of the trainees in a program fail to complete it. ${n} trainees are selected randomly`, 'trainees who fail'],
    (p, n) => [`In a factory the probability that a worker has an accident on a given day is ${p}. ${n} workers work independently`, 'workers with accidents']
  ];
  const L3 = {
    mcq: [
      R => { const co = pick(R, COEF), xs = co.map((_, i) => i + 1), S = sum(co), C = 1 / S;
        return mcq(R, `If X is a random variable with the following probability distribution, ${tbl(xs, co.map(c => c === 1 ? 'C' : c + 'C'))} then the value of the constant C is`, fx(C), [String(S), fx(C * 2), fx(1 / (S + 1)), fx(C / 2)], `${f(`${co.join('C + ')}C = ${S}C = 1 → C = 1/${S} = ${fx(C)}`)}`); },
      R => { const xs = pick(R, XV4), ps = pick(R, PV4).slice(), i = Math.floor(R() * 4), c = ps[i]; const shown = ps.map((p, j) => j === i ? 'C' : p);
        return mcq(R, `Consider the random variable X with the following probability distribution function: ${tbl(xs, shown)} The value of C is`, fx(c), [fx(c + 0.1), fx(c - 0.1), fx(1 - c), fx(-c)], `المجموع = 1 ← ${f(`C = 1 − ${fx(1 - c)} = ${fx(c)}`)}`); },
      R => { const { xs, ps } = dTable(R); const types = [['≤', '<'], ['<', '≤'], ['≤', '≤'], ['<', '<']], [o1, o2] = pick(R, types);
        const lo = xs[Math.floor(R() * 2)], hi = xs[2 + Math.floor(R() * 2)];
        const inc = x => (o1 === '≤' ? x >= lo : x > lo) && (o2 === '≤' ? x <= hi : x < hi);
        const val = sum(xs.map((x, i) => inc(x) ? ps[i] : 0)), all = sum(xs.map((x, i) => x >= lo && x <= hi ? ps[i] : 0));
        return mcq(R, `If X is a random variable with the following probability distribution, ${tbl(xs, ps)} then P(${lo} ${o1} X ${o2} ${hi}) is`, fx(val), [fx(all), fx(1 - val), fx(val + 0.1), fx(val - 0.1)],
          `القيم اللي داخلة: ${xs.filter(inc).join(' ، ')} ← ${f(fx(val))} (خلي بالك من ≤ و &lt;)`); },
      R => { const { xs, ps, m } = dTable(R);
        return mcq(R, `If X has the probability distribution ${tbl(xs, ps)} then the mean E(X) is`, fx(m), [fx(sum(xs) / 4), fx(m + 0.5), fx(m * 2), fx(m - 0.3)], `${f(xs.map((x, i) => `${x}(${ps[i]})`).join(' + ') + ' = ' + fx(m))}`); },
      R => { const { xs, ps, m, m2, v } = dTable(R);
        return mcq(R, `If X has the probability distribution ${tbl(xs, ps)} then the variance Var(X) is`, fx(v), [fx(m2), fx(m * m), fx(m2 - m), fx(Math.sqrt(Math.max(v, 0)))], `${f(`E(X) = ${fx(m)} , E(X²) = ${fx(m2)}`)} ← ${f(`Var = ${fx(m2)} − ${fx(m)}² = ${fx(v)}`)}`); },
      R => { const { xs, ps, m, v } = dTable(R), a = pick(R, [2, 3, 5, 4]), b = pick(R, [1, -2, 3, -1]);
        if (R() < 0.5) return mcq(R, `If X has the probability distribution ${tbl(xs, ps)} then E(${a}X ${b < 0 ? '−' : '+'} ${Math.abs(b)}) is`, fx(a * m + b), [fx(a * m), fx(m + b), fx(a * (m + b)), fx(a * m - b)], `${f(`E(X) = ${fx(m)}`)} ← ${f(`${a}(${fx(m)}) ${b < 0 ? '−' : '+'} ${Math.abs(b)} = ${fx(a * m + b)}`)}`);
        return mcq(R, `If X has the probability distribution ${tbl(xs, ps)} then Var(${a}X ${b < 0 ? '−' : '+'} ${Math.abs(b)}) is`, fx(a * a * v), [fx(a * v), fx(a * a * v + b), fx(a * v + b), fx(v)], `${f(`Var(X) = ${fx(v)}`)} ← ${f(`${a}² × ${fx(v)} = ${fx(a * a * v)}`)} (الـ ${b} بيختفي)`); },
      R => { const mu = pick(R, [4, 5, 10, 12, 20]), vr = pick(R, [1, 4, 9, 2]), a = pick(R, [2, 3, 4]), b = pick(R, [-2, -5, 3, 1]);
        return mcq(R, `If a random variable X has a mean of ${mu} and a variance of ${vr}, then the random variable Y = ${a}X ${b < 0 ? '−' : '+'} ${Math.abs(b)} has a standard deviation of`, fx(a * Math.sqrt(vr)), [fx(a * a * vr), fx(a * vr), fx(a * Math.sqrt(vr) + b), fx(Math.sqrt(vr))],
          `${f(`Var(Y) = ${a}² × ${vr} = ${a * a * vr}`)} ← ${f(`σ = √${a * a * vr} = ${fx(a * Math.sqrt(vr))}`)}`); },
      R => { const p = pick(R, [0.1, 0.2, 0.25, 0.3, 0.4, 0.6, 0.8, 0.9]), n = pick(R, [3, 4, 5, 6]), [st, what] = pick(R, BSTORY)(p, n), q = rnd(1 - p, 2);
        const kind = pick(R, ['mean', 'var', 'none', 'atleast1', 'atleast2', 'exact', 'atmost1']);
        const k = 1 + Math.floor(R() * (n - 1));
        const P = j => bin(n, p, j);
        const data = {
          mean: [n * p, 'the expected (mean) number of ' + what + ' is', `${f(`μ = np = ${n} × ${p} = ${fx(n * p)}`)}`, [n * p * q, p, n * q]],
          var: [n * p * q, 'the variance of the number of ' + what + ' is', `${f(`σ² = npq = ${n} × ${p} × ${q} = ${fx(n * p * q)}`)}`, [n * p, Math.sqrt(n * p * q), p * q]],
          none: [P(0), 'the probability that none of them is counted (X = 0) is', `${f(`P(0) = q^n = ${q}^${n} = ${fx(P(0))}`)}`, [1 - P(0), p ** n, P(1)]],
          atleast1: [1 - P(0), 'the probability of at least one is', `${f(`1 − P(0) = 1 − ${q}^${n} = ${fx(1 - P(0))}`)}`, [P(0), P(1), 1 - p ** n]],
          atleast2: [1 - P(0) - P(1), 'the probability of at least two is', `${f(`1 − [P(0) + P(1)] = 1 − [${fx(P(0))} + ${fx(P(1))}] = ${fx(1 - P(0) - P(1))}`)}`, [P(0) + P(1), 1 - P(0), P(2)]],
          exact: [P(k), `the probability of exactly ${k} is`, `${f(`${n}C${k} (${p})^${k} (${q})^${n - k} = ${nCr(n, k)} × ${fx(p ** k)} × ${fx(q ** (n - k))} = ${fx(P(k))}`)}`, [p ** k * q ** (n - k), 1 - P(k), P(k - 1)]],
          atmost1: [P(0) + P(1), 'the probability of at most one is', `${f(`P(0) + P(1) = ${fx(P(0))} + ${fx(P(1))} = ${fx(P(0) + P(1))}`)}`, [1 - P(0) - P(1), P(1), P(0)]]
        }[kind];
        return mcq(R, `${st}. Let X be the number of ${what}. Then ${data[1]}`, fx(data[0]), data[3].map(x => fx(x)), `Binomial: n = ${n} ، p = ${p} ، q = ${q}. ${data[2]}`); }
    ],
    essay: [
      R => { const { xs, ps, m, m2, v } = dTable(R), a = pick(R, [2, 3]), b = pick(R, [1, -1, 4]);
        return essay(`Let X be a random variable with the probability distribution ${tbl(xs, ps)} Find: (a) E(X) (b) E(X²) (c) Var(X) (d) E(${a}X ${b < 0 ? '−' : '+'} ${Math.abs(b)}) (e) Var(${a}X ${b < 0 ? '−' : '+'} ${Math.abs(b)}) (f) P(X > ${xs[1]})`,
          `(a) ${fx(m)} (b) ${fx(m2)} (c) ${fx(v)} (d) ${fx(a * m + b)} (e) ${fx(a * a * v)} (f) ${fx(ps[2] + ps[3])}`,
          `<table><tr><th>x</th>${xs.map(x => `<td>${x}</td>`).join('')}<th>Σ</th></tr><tr><th>x·f</th>${xs.map((x, i) => `<td>${fx(x * ps[i])}</td>`).join('')}<td>${fx(m)}</td></tr><tr><th>x²·f</th>${xs.map((x, i) => `<td>${fx(x * x * ps[i])}</td>`).join('')}<td>${fx(m2)}</td></tr></table>
          ${f(`Var = ${fx(m2)} − ${fx(m)}² = ${fx(v)}`)} ، ${f(`E(${a}X${b < 0 ? '−' : '+'}${Math.abs(b)}) = ${fx(a * m + b)}`)} ، ${f(`Var(...) = ${a * a} × ${fx(v)} = ${fx(a * a * v)}`)} ، ${f(`P(X &gt; ${xs[1]}) = ${ps[2]} + ${ps[3]} = ${fx(ps[2] + ps[3])}`)}`); },
      R => { const p = pick(R, [0.2, 0.25, 0.3, 0.4, 0.5]), n = pick(R, [3, 4]), q = rnd(1 - p, 2), [st, what] = pick(R, BSTORY)(p, n);
        const rows = []; for (let k = 0; k <= n; k++) rows.push(`<tr><td>${k}</td><td>${n}C${k} (${p})^${k} (${q})^${n - k}</td><td>${fx(bin(n, p, k))}</td></tr>`);
        return essay(`${st}. Let X = number of ${what}.<br>(a) Find the probability distribution of X. (b) P(X ≥ 2) (c) P(X ≤ 1) (d) E(X) and Var(X).`,
          `(b) ${fx(1 - bin(n, p, 0) - bin(n, p, 1))} (c) ${fx(bin(n, p, 0) + bin(n, p, 1))} (d) ${fx(n * p)} , ${fx(n * p * q)}`,
          `Binomial n = ${n} ، p = ${p}:<table><tr><th>x</th><th>formula</th><th>f(x)</th></tr>${rows.join('')}</table>
          ${f(`μ = np = ${fx(n * p)} , σ² = npq = ${fx(n * p * q)}`)}`); },
      R => { const v1 = pick(R, [5, 1, 2]), v2 = pick(R, [10, 3, 4]), p = pick(R, [0.4, 0.3, 0.2, 0.5]), q = rnd(1 - p, 2);
        const xs = [2 * v1, v1 + v2, 2 * v2], ps = [p * p, 2 * p * q, q * q], m = sum(xs.map((x, i) => x * ps[i])), m2 = sum(xs.map((x, i) => x * x * ps[i]));
        return essay(`A box contains 100 cards; ${rnd(p * 100, 2)} labeled ${v1} and the rest labeled ${v2}. Two cards are selected with replacement. Let X = the sum of the two numbers.<br>(a) List S and assign x to each point. (b) Find the probability distribution of X. (c) P(X > ${2 * v1}) (d) E(X) and Var(X).`,
          `f(${xs[0]}) = ${fx(ps[0])}, f(${xs[1]}) = ${fx(ps[1])}, f(${xs[2]}) = ${fx(ps[2])} ؛ E = ${fx(m)} ؛ Var = ${fx(m2 - m * m)}`,
          `<ol class="steps"><li>S = {(${v1},${v1}), (${v1},${v2}), (${v2},${v1}), (${v2},${v2})} ← x = ${xs[0]}, ${xs[1]}, ${xs[1]}, ${xs[2]}</li><li>${f(`f(${xs[0]}) = ${p}² = ${fx(ps[0])} , f(${xs[1]}) = 2(${p})(${q}) = ${fx(ps[1])} , f(${xs[2]}) = ${q}² = ${fx(ps[2])}`)}</li>
          <li>${f(`P(X &gt; ${xs[0]}) = ${fx(ps[1] + ps[2])}`)}</li><li>${f(`E = ${fx(m)} , E(X²) = ${fx(m2)} , Var = ${fx(m2 - m * m)}`)}</li></ol>`); }
    ]
  };

  // ---------- lecture 4 ----------
  const KX = [[0, 2], [0, 4], [1, 3], [0, 1], [3, 5], [0, 10]];
  const NSTORY = [
    (m, s) => `The finished inside diameter of a piston ring is normally distributed with a mean of ${m} cm and a standard deviation of ${s} cm.`,
    (m, s) => `The life of a certain type of small motor is normally distributed with mean ${m} years and standard deviation ${s} years.`,
    (m, s) => `The random variable X, representing the lifespan of a light bulb, is normally distributed with mean ${m} hours and standard deviation ${s} hours.`,
    (m, s) => `Marks of students in a course are normally distributed with mean ${m} and standard deviation ${s}.`,
    (m, s) => `The weight of a product is normally distributed with mean ${m} g and standard deviation ${s} g.`
  ];
  const NPAR = [[12, 0.03], [10, 2], [400, 10], [70, 5], [50, 4], [800, 40], [16, 0.9], [3.4, 0.35]];
  const ZS = [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 1.25, -1.25, 0.75, -0.75];
  const L4 = {
    mcq: [
      R => { const [a, b] = pick(R, KX), k = 2 / (b * b - a * a);
        return mcq(R, `Suppose that the continuous random variable X has the probability density function: f(x) = kx for ${a} < x < ${b}; 0 elsewhere. Then the value of the constant k is`, fx(k), [fx(1 / (b - a)), fx((b * b - a * a) / 2), fx(k * 2), fx(1 / b)],
          `${f(`k[x²/2]<sub>${a}</sub><sup>${b}</sup> = k(${b * b} − ${a * a})/2 = ${fx((b * b - a * a) / 2)}k = 1 → k = ${fx(k)}`)}`); },
      R => { const [a, b] = pick(R, KX), k = 2 / (b * b - a * a), c = rnd(a + (b - a) * pick(R, [0, 0.25, 0.5]), 2), d = rnd(a + (b - a) * pick(R, [0.5, 0.75, 1]), 2);
        if (c >= d) return null;
        const v = k * (d * d - c * c) / 2;
        return mcq(R, `Let f(x) = ${fx(k)}x for ${a} < x < ${b} (0 elsewhere). The probability P(${c} < X < ${d}) is`, fx(v), [fx(k * (d - c)), fx(1 - v), fx(k * d * d / 2), fx(v / 2)],
          `${f(`${fx(k)}[x²/2]<sub>${c}</sub><sup>${d}</sup> = ${fx(k)}(${fx(d * d)} − ${fx(c * c)})/2 = ${fx(v)}`)}`); },
      R => { const [a, b] = pick(R, KX), k = 2 / (b * b - a * a), m = k * (b ** 3 - a ** 3) / 3;
        return mcq(R, `Let f(x) = ${fx(k)}x for ${a} < x < ${b} (0 elsewhere). The expected value E(X) is`, fx(m), [fx((a + b) / 2), fx(k * (b * b - a * a) / 2), fx(m * 1.5), fx(b)],
          `${f(`E(X) = ∫ x·${fx(k)}x dx = ${fx(k)}[x³/3]<sub>${a}</sub><sup>${b}</sup> = ${fx(m)}`)}`); },
      R => { const b = pick(R, [1, 2]), k = 3 / b ** 3;
        return mcq(R, `If X has pdf f(x) = kx² for 0 < x < ${b}; 0 elsewhere, then k equals`, fx(k), [fx(2 / b ** 2), fx(1 / b), fx(b ** 3 / 3), fx(k * 2)], `${f(`k[x³/3]<sub>0</sub><sup>${b}</sup> = k(${b ** 3}/3) = 1 → k = ${fx(k)}`)}`); },
      R => { const L = pick(R, [5, 10, 20, 4]), c = rnd(L * pick(R, [0.2, 0.25, 0.4, 0.5]), 2), d = rnd(L * pick(R, [0.6, 0.75, 0.8]), 2);
        return mcq(R, `If X has a uniform distribution on (0, ${L}) with f(x) = 1/${L}, then P(${c} < X < ${d}) is`, fx((d - c) / L), [fx(d / L), fx(c / L), fx(1 - (d - c) / L), fx(d - c)], `${f(`(${d} − ${c}) × 1/${L} = ${fx((d - c) / L)}`)}`); },
      R => { const [m, s] = pick(R, NPAR), st = pick(R, NSTORY)(m, s), z = pick(R, ZS), x = rnd(m + z * s, 4), kind = pick(R, ['lt', 'gt']);
        const v = kind === 'lt' ? Phi(z) : 1 - Phi(z);
        return mcq(R, `${st} The probability that X is ${kind === 'lt' ? 'less than' : 'at least'} ${x} is`, fx(v), [fx(1 - v), fx(Phi(-z)), fx(rnd(Math.abs(Phi(z) - 0.5), 4)), fx(v / 2)],
          `${f(`z = (${x} − ${m})/${s} = ${z}`)} ← ${kind === 'lt' ? f(`P(Z &lt; ${z}) = ${fx(v)}`) : f(`1 − P(Z &lt; ${z}) = 1 − ${fx(Phi(z))} = ${fx(v)}`)}`); },
      R => { const [m, s] = pick(R, NPAR), st = pick(R, NSTORY)(m, s); let z1 = pick(R, ZS), z2 = pick(R, ZS); if (z1 === z2) return null; if (z1 > z2) [z1, z2] = [z2, z1];
        const x1 = rnd(m + z1 * s, 4), x2 = rnd(m + z2 * s, 4), v = Phi(z2) - Phi(z1);
        return mcq(R, `${st} The probability that X is between ${x1} and ${x2} is`, fx(v), [fx(Phi(z2)), fx(Phi(z1)), fx(1 - v), fx(Phi(z2) + Phi(z1) - 1)],
          `${f(`z₁ = ${z1} , z₂ = ${z2}`)} ← ${f(`${fx(Phi(z2))} − ${fx(Phi(z1))} = ${fx(v)}`)}`); },
      R => { const m = pick(R, [16, 40, 10, 50]), v = pick(R, [5, 4, 9]), a = m + pick(R, [0, 2, -1]);
        return mcq(R, `If the continuous random variable X has mean μ = ${m} and variance σ² = ${v}, then P(X = ${a}) is`, '0', ['0.5', fx(1 / v), fx(1 / m), '1'], 'X متصل ← احتمال أي نقطة = <b>0</b>'); },
      R => { const [m, s] = pick(R, NPAR), z = pick(R, [1, 1.5, 2, -1, -1.5, 0.5, -0.5]), x = rnd(m + z * s, 4);
        return mcq(R, `X ~ N(μ = ${m}, σ = ${s}). If P(X < x) = ${fx(Phi(z))}, then x equals`, String(x), [fx(m - z * s), fx(m + z), fx(m + z * s * s), String(m)], `من الجدول ${fx(Phi(z))} ← ${f(`z = ${z}`)} ← ${f(`x = μ + zσ = ${m} + (${z})(${s}) = ${x}`)}`); }
    ],
    essay: [
      R => { const [a, b] = pick(R, [[0, 2], [0, 4], [1, 3], [0, 1]]), k = 2 / (b * b - a * a), m = k * (b ** 3 - a ** 3) / 3, m2 = k * (b ** 4 - a ** 4) / 4, mid = rnd((a + b) / 2, 2);
        return essay(`Suppose X has pdf f(x) = kx for ${a} < x < ${b}; 0 elsewhere.<br>(a) Find k. (b) P(X < ${mid}). (c) E(X). (d) Var(X). (e) P(X = ${mid}).`,
          `(a) ${fx(k)} (b) ${fx(k * (mid * mid - a * a) / 2)} (c) ${fx(m)} (d) ${fx(m2 - m * m)} (e) 0`,
          `<ol class="steps"><li>${f(`k(${b * b} − ${a * a})/2 = 1 → k = ${fx(k)}`)}</li><li>${f(`${fx(k)}(${fx(mid * mid)} − ${a * a})/2 = ${fx(k * (mid * mid - a * a) / 2)}`)}</li><li>${f(`${fx(k)}[x³/3]<sub>${a}</sub><sup>${b}</sup> = ${fx(m)}`)}</li><li>${f(`E(X²) = ${fx(k)}[x⁴/4] = ${fx(m2)} → Var = ${fx(m2)} − ${fx(m)}² = ${fx(m2 - m * m)}`)}</li><li>متصل ← 0</li></ol>`); },
      R => { const [m, s] = pick(R, NPAR), st = pick(R, NSTORY)(m, s), z1 = pick(R, [1, 1.5, 2]), z2 = pick(R, [-1, -0.5, -2]), z3 = pick(R, [0.5, 1, 1.5]);
        const x1 = rnd(m + z1 * s, 4), x2 = rnd(m + z2 * s, 4), x3 = rnd(m + z3 * s, 4);
        return essay(`${st}<br>(a) Find P(X > ${x1}). (b) Find P(X < ${x2}). (c) Find P(${x2} < X < ${x3}). (d) What percentage of items are below ${x2}?`,
          `(a) ${fx(1 - Phi(z1))} (b) ${fx(Phi(z2))} (c) ${fx(Phi(z3) - Phi(z2))} (d) ${rnd(Phi(z2) * 100, 2)}%`,
          `<ol class="steps"><li>${f(`z = ${z1} → 1 − ${fx(Phi(z1))} = ${fx(1 - Phi(z1))}`)}</li><li>${f(`z = ${z2} → ${fx(Phi(z2))}`)}</li><li>${f(`${fx(Phi(z3))} − ${fx(Phi(z2))} = ${fx(Phi(z3) - Phi(z2))}`)}</li><li>${f(`${fx(Phi(z2))} × 100% = ${rnd(Phi(z2) * 100, 2)}%`)}</li></ol>`); },
      R => { const m = pick(R, [0.06, 3.0, 20]), s = { 0.06: 0.001, 3: 0.005, 20: 0.04 }[m], z = pick(R, [1, 1.5, 2]), lo = rnd(m - z * s, 4), hi = rnd(m + z * s, 4), ok = Phi(z) - Phi(-z);
        return essay(`A machine produces parts with diameters normally distributed with mean ${m} and standard deviation ${s}. Parts with diameter less than ${lo} or greater than ${hi} are scrapped. Find the proportion of parts that are scrapped.`,
          `${fx(1 - ok)}`, `${f(`P(${lo} &lt; X &lt; ${hi}) = P(−${z} &lt; Z &lt; ${z}) = ${fx(Phi(z))} − ${fx(Phi(-z))} = ${fx(ok)}`)} ← scrapped = ${f(`1 − ${fx(ok)} = ${fx(1 - ok)}`)}`); }
    ]
  };

  // ---------- lecture 5 ----------
  const NS = [4, 9, 16, 25, 36, 49, 64, 100];
  const DATA = [[2, 4, 6, 8, 10], [10, 21, 33, 53, 54], [3, 5, 7], [1.70, 2.11, 2.20, 2.31, 2.28], [4, 8, 6, 2], [12, 15, 9, 10, 14], [5, 7, 9, 11]];
  const stats = d => { const n = d.length, m = sum(d) / n, ss = sum(d.map(x => (x - m) ** 2)); return { n, m, s2: ss / (n - 1), ss }; };
  const L5 = {
    mcq: [
      R => { const [m, s] = pick(R, NPAR), n = pick(R, NS), se = s / Math.sqrt(n);
        if (R() < 0.5) return mcq(R, `A population has mean ${m} and standard deviation ${s}. For a random sample of size ${n}, the variance of the sample mean Var(X̄) is`, fx(s * s / n, 6), [fx(se, 4), fx(s * s, 4), fx(s / n, 6), fx(s * s / Math.sqrt(n), 4)], `${f(`Var(X̄) = σ²/n = ${s}²/${n} = ${fx(s * s / n, 6)}`)}`);
        return mcq(R, `A population has mean ${m} and standard deviation ${s}. For a random sample of size ${n}, the standard error of X̄ (σ<sub>X̄</sub>) is`, fx(se, 4), [fx(s * s / n, 6), fx(s / n, 4), fx(s, 4), fx(s * Math.sqrt(n), 4)], `${f(`σ/√n = ${s}/${Math.sqrt(n)} = ${fx(se, 4)}`)}`); },
      R => { const [m, s] = pick(R, NPAR), n = pick(R, NS), se = s / Math.sqrt(n), z = pick(R, ZS), a = rnd(m + z * se, 4), lt = R() < 0.5, st = pick(R, NSTORY)(m, s);
        const v = lt ? Phi(z) : 1 - Phi(z), zw = rnd((a - m) / s, 2);
        return mcq(R, `${st} If ${n} items are selected at random, the probability that their average is ${lt ? 'less than' : 'more than'} ${a} is`, fx(v), [fx(lt ? Phi(zw) : 1 - Phi(zw)), fx(1 - v), fx(Phi(-Math.abs(z))), fx(v / 2)],
          `متوسط ← ${f(`σ/√n = ${s}/${Math.sqrt(n)} = ${fx(se)}`)} ← ${f(`z = (${a} − ${m})/${fx(se)} = ${z}`)} ← ${f(fx(v))}. (لو قسمت على σ بس هيطلع ${fx(lt ? Phi(zw) : 1 - Phi(zw))} وده فخ)`); },
      R => { const p = pick(R, [0.2, 0.3, 0.4, 0.45, 0.5, 0.6]), n = pick(R, [100, 200, 400, 500, 600]), v = p * (1 - p) / n;
        if (R() < 0.5) return mcq(R, `The true proportion of a characteristic in a large population is ${p}. For a random sample of size n = ${n}, Var(p̂) is`, fx(v, 6), [fx(p * (1 - p), 4), fx(Math.sqrt(v), 4), fx(p / n, 6), fx(v * 10, 6)], `${f(`pq/n = (${p})(${rnd(1 - p, 2)})/${n} = ${fx(v, 6)}`)}`);
        const d = pick(R, [0.02, 0.03, 0.04, 0.05]), z = rnd(d / Math.sqrt(v), 2), P = Phi(z) - Phi(-z);
        return mcq(R, `The true proportion is p = ${p} and n = ${n}. The probability that p̂ is within ±${d} of p, i.e. P(${rnd(p - d, 2)} ≤ p̂ ≤ ${rnd(p + d, 2)}), is approximately`, fx(P), [fx(Phi(z)), fx(1 - P), fx(Phi(-z)), fx(2 * Phi(z))],
          `${f(`σ<sub>p̂</sub> = √(${fx(v, 6)}) = ${fx(Math.sqrt(v))}`)} ← ${f(`z = ±${d}/${fx(Math.sqrt(v))} = ±${z}`)} ← ${f(`${fx(Phi(z))} − ${fx(Phi(-z))} = ${fx(P)}`)}`); },
      R => { const d = pick(R, DATA), { n, m, s2 } = stats(d);
        if (R() < 0.5) return mcq(R, `A random sample gave the values ${d.join(', ')}. The sample mean is`, fx(m), [fx(sum(d) / (n - 1)), fx(m + 1), fx(s2), fx(d[Math.floor(n / 2)])], `${f(`x̄ = ${fx(sum(d))}/${n} = ${fx(m)}`)}`);
        return mcq(R, `A random sample gave the values ${d.join(', ')}. The sample variance S² is`, fx(s2), [fx(s2 * (n - 1) / n), fx(Math.sqrt(s2)), fx(s2 + 1), fx(m)], `${f(`x̄ = ${fx(m)} , S² = Σ(x−x̄)²/(n−1) = ${fx(s2)}`)} (القسمة على ${n - 1} مش ${n})`); },
      R => { const nu = pick(R, [5, 8, 10, 12, 14, 15, 20, 24]), al = pick(R, [0.05, 0.025, 0.01, 0.1]), t = tVal(nu, al), left = R() < 0.5;
        if (left) return mcq(R, `For ν = ${nu} degrees of freedom, the t-value that leaves an area of ${al} to the right is`, fx(t, 3), [fx(-t, 3), fx(tVal(nu, al === 0.05 ? 0.025 : 0.05), 3), fx(tVal(nu + 1, al) || t + 0.1, 3), String(zOne[al] || 1.96)], `جدول t: سطر ${nu} عمود ${al} ← ${f(fx(t, 3))}`);
        return mcq(R, `For ν = ${nu} degrees of freedom, the t-value that leaves an area of ${al} to the left is`, fx(-t, 3), [fx(t, 3), fx(1 - t, 3), fx(-tVal(nu, al === 0.05 ? 0.025 : 0.05), 3)], `مساحة ${al} على الشمال ← قيمة سالبة: ${f(`t<sub>${rnd(1 - al, 3)}</sub> = −t<sub>${al}</sub> = −${fx(t, 3)}`)}`); }
    ],
    essay: [
      R => { const p = pick(R, [0.3, 0.4, 0.45, 0.5, 0.2]), n = pick(R, [100, 400, 500, 600]), v = p * (1 - p) / n, sd = Math.sqrt(v), d = 0.03, z = rnd(d / sd, 2);
        return essay(`It is known that the true proportion of units with a characteristic is ${p}. A random sample of size n = ${n} is selected.<br>1. Find E(p̂). 2. Find Var(p̂). 3. Find P(${rnd(p - d, 2)} ≤ p̂ ≤ ${rnd(p + d, 2)}).`,
          `1) ${p} 2) ${fx(v, 6)} 3) ≈ ${fx(Phi(z) - Phi(-z))}`,
          `<ol class="steps"><li>${f(`E(p̂) = p = ${p}`)}</li><li>${f(`(${p})(${rnd(1 - p, 2)})/${n} = ${fx(v, 6)}`)} ← ${f(`σ = ${fx(sd)}`)}</li><li>${f(`z = ±0.03/${fx(sd)} = ±${z}`)} ← ${f(`${fx(Phi(z))} − ${fx(Phi(-z))} = ${fx(Phi(z) - Phi(-z))}`)}</li></ol>`); },
      R => { const [m, s] = pick(R, [[400, 10], [5, 1], [800, 40], [40, 2], [70, 6]]), z1 = pick(R, [-2, -1.5, -1]), n = pick(R, [4, 9, 16, 25]), z2 = pick(R, [1, 1.5, 2]);
        const x1 = rnd(m + z1 * s, 4), se = s / Math.sqrt(n), x2 = rnd(m + z2 * se, 4);
        return essay(`The lifespan of a device is normally distributed with mean ${m} and standard deviation ${s}.<br>1. What is the probability that one device lasts more than ${x1}?<br>2. If ${n} devices are selected randomly, find the probability that their average lifespan is less than ${x2}.<br>3. Find E(X̄) and Var(X̄) for n = ${n}.`,
          `1) ${fx(1 - Phi(z1))} 2) ${fx(Phi(z2))} 3) ${m} , ${fx(se * se, 6)}`,
          `<ol class="steps"><li>واحد ← σ: ${f(`z = (${x1} − ${m})/${s} = ${z1} → 1 − ${fx(Phi(z1))} = ${fx(1 - Phi(z1))}`)}</li><li>متوسط ← ${f(`σ/√n = ${fx(se)}`)}: ${f(`z = (${x2} − ${m})/${fx(se)} = ${z2} → ${fx(Phi(z2))}`)}</li><li>${f(`E(X̄) = ${m} , Var(X̄) = ${s}²/${n} = ${fx(se * se, 6)}`)}</li></ol>`); },
      R => { const d = pick(R, DATA), { n, m, s2, ss } = stats(d);
        return essay(`Compute the sample mean, the sample variance and the sample standard deviation of: ${d.join(', ')}.`,
          `x̄ = ${fx(m)} ، S² = ${fx(s2)} ، S = ${fx(Math.sqrt(s2))}`,
          `${f(`x̄ = ${fx(sum(d))}/${n} = ${fx(m)}`)} ← ${f(`Σ(x − x̄)² = ${fx(ss)}`)} ← ${f(`S² = ${fx(ss)}/${n - 1} = ${fx(s2)}`)} ← ${f(`S = ${fx(Math.sqrt(s2))}`)}`); }
    ]
  };

  // ---------- lecture 6 ----------
  const CIP = [[750, 30, 50], [2.6, 0.3, 36], [4.5, 2, 49], [50, 6, 36], [120, 16, 64], [390, 5, 49], [60, 10, 100]];
  const L6 = {
    mcq: [
      R => { const [xb, s, n] = pick(R, CIP), c = pick(R, [90, 95, 99, 98]), z = zCI[c], e = z * s / Math.sqrt(n), ci = `(${fx(xb - e, 3)}, ${fx(xb + e, 3)})`;
        const alt = cc => { const ee = zCI[cc] * s / Math.sqrt(n); return `(${fx(xb - ee, 3)}, ${fx(xb + ee, 3)})`; };
        return mcq(R, `A sample of ${n} gives x̄ = ${xb}. The population is normal with σ = ${s}. A ${c}% confidence interval for μ is`, ci, [alt(c === 95 ? 99 : 95), alt(c === 90 ? 98 : 90), `(${fx(xb - z * s / n, 3)}, ${fx(xb + z * s / n, 3)})`, `(${fx(xb - z * s, 3)}, ${fx(xb + z * s, 3)})`],
          `${f(`Z<sub>α/2</sub> = ${z}`)} ← ${f(`e = ${z} × ${s}/√${n} = ${fx(e)}`)} ← ${f(`${xb} ± ${fx(e)}`)}`); },
      R => { const [xb, s, n] = pick(R, CIP), c = pick(R, [90, 95, 99]), e = zCI[c] * s / Math.sqrt(n);
        return mcq(R, `σ = ${s}, n = ${n}. If X̄ is used to estimate μ, we are ${c}% confident that the error will not exceed`, `e = ${fx(e, 3)}`, [`e = ${fx(e * 1.1, 3)}`, `e = ${fx(s / Math.sqrt(n), 3)}`, `e = ${fx(zCI[c] * s / n, 3)}`, `e = ${fx(e * 0.9, 3)}`], `${f(`e = ${zCI[c]} × ${s}/√${n} = ${fx(e, 3)}`)}`); },
      R => { const s = pick(R, [0.3, 2, 5, 10, 16, 30]), e = rnd(s * pick(R, [0.1, 0.2, 0.25, 0.4, 0.5]), 3), c = pick(R, [90, 95, 99]), raw = (zCI[c] * s / e) ** 2, n = Math.ceil(raw - 1e-9);
        return mcq(R, `σ = ${s}. The sample size needed to be ${c}% confident that the error in estimating μ does not exceed ${e} is`, String(n), [String(Math.floor(raw)), String(Math.ceil(zCI[c] * s / e)), String(n + 5), String(Math.ceil((1.96 * s / e) ** 2) === n ? n + 10 : Math.ceil((1.96 * s / e) ** 2))],
          `${f(`n = (${zCI[c]} × ${s}/${e})² = ${fx(raw, 2)} → ${n}`)} (قرّب لفوق)`); },
      R => { const [xb, s, n] = pick(R, CIP), c = pick(R, [90, 95, 99]), e = zCI[c] * s / Math.sqrt(n), up = rnd(xb + e, 3);
        return mcq(R, `For a confidence interval for μ with x̄ = ${xb}, the upper confidence limit is ${up}. The lower confidence limit is`, fx(xb - e, 3), [fx(up - xb, 3), fx(xb - 2 * e, 3), fx(up - 2 * xb > 0 ? up - 2 * xb : xb / 2, 3), fx(xb, 3)], `الفترة متماثلة حوالين x̄: ${f(`2(${xb}) − ${up} = ${fx(xb - e, 3)}`)}`); },
      R => { const n = pick(R, [9, 10, 16, 25, 12, 7]), xb = pick(R, [20, 30, 10, 42, 50]), S = pick(R, [3, 4, 2, 5]), t = tVal(n - 1, 0.025), e = t * S / Math.sqrt(n);
        return mcq(R, `A sample of ${n} from a normal population gives x̄ = ${xb} and S = ${S}. A 95% confidence interval for μ is`, `(${fx(xb - e, 3)}, ${fx(xb + e, 3)})`, [`(${fx(xb - 1.96 * S / Math.sqrt(n), 3)}, ${fx(xb + 1.96 * S / Math.sqrt(n), 3)})`, `(${fx(xb - t * S / n, 3)}, ${fx(xb + t * S / n, 3)})`, `(${fx(xb - t * S, 3)}, ${fx(xb + t * S, 3)})`],
          `σ مش معروفة ← t, ν = ${n - 1}: ${f(`t<sub>0.025</sub> = ${t}`)} ← ${f(`${xb} ± ${t}(${S}/√${n}) = ${xb} ± ${fx(e, 3)}`)}`); },
      R => { const n = pick(R, [200, 400, 500, 1200, 100]), x = Math.round(n * pick(R, [0.15, 0.25, 0.3, 0.4, 0.68])), ph = x / n, c = pick(R, [90, 95]), e = zCI[c] * Math.sqrt(ph * (1 - ph) / n), lw = R() < 0.5;
        return mcq(R, `In a random sample of ${n}, ${x} have a certain property. The ${lw ? 'lower' : 'upper'} limit of a ${c}% confidence interval for p is`, fx(lw ? ph - e : ph + e), [fx(lw ? ph + e : ph - e), fx(ph), fx(lw ? ph - e / 2 : ph + e / 2), fx(lw ? ph - 2 * e : ph + 2 * e)],
          `${f(`p̂ = ${x}/${n} = ${fx(ph)}`)} ← ${f(`e = ${zCI[c]}√(${fx(ph)}×${fx(1 - ph)}/${n}) = ${fx(e)}`)} ← ${f(`${fx(ph)} ${lw ? '−' : '+'} ${fx(e)} = ${fx(lw ? ph - e : ph + e)}`)}`); },
      R => { const c = pick(R, [90, 95, 98, 99]);
        return mcq(R, `For a ${c}% confidence interval, the value of Z<sub>α/2</sub> is`, String(zCI[c]), ['1.645', '1.96', '2.33', '2.575', '1.28'].filter(v => v !== String(zCI[c])), `${f(`α = ${rnd(1 - c / 100, 2)} → α/2 = ${rnd((1 - c / 100) / 2, 3)} → Z = ${zCI[c]}`)}`); }
    ],
    essay: [
      R => { const [xb, s, n] = pick(R, CIP), c = pick(R, [95, 99, 90]), z = zCI[c], e = z * s / Math.sqrt(n), e2 = rnd(e / 2, 3), nn = Math.ceil((z * s / e2) ** 2 - 1e-9);
        return essay(`An electrical firm: the life of items is normally distributed with σ = ${s}. A sample of ${n} items has an average of ${xb}.<br>1) Find a point estimate of μ. 2) Construct a ${c}% confidence interval for μ. 3) What is the maximum error with ${c}% confidence? 4) How large a sample is needed for the error not to exceed ${e2}?`,
          `1) ${xb} 2) (${fx(xb - e, 3)} , ${fx(xb + e, 3)}) 3) ${fx(e, 3)} 4) ${nn}`,
          `<ol class="steps"><li>${f(`μ̂ = x̄ = ${xb}`)}</li><li>${f(`${c}% → Z<sub>α/2</sub> = ${z}`)} ← ${f(`${xb} ± ${z}(${s}/√${n}) = ${xb} ± ${fx(e, 3)}`)}</li><li>${f(`e = ${fx(e, 3)}`)}</li><li>${f(`n = (${z} × ${s}/${e2})² = ${fx((z * s / e2) ** 2, 2)} → ${nn}`)}</li></ol>`); },
      R => { const d = pick(R, [[9.8, 10.2, 10.4, 9.8, 10.0, 10.2, 9.6], [3.4, 4.8, 3.6, 3.3, 5.6, 3.7, 4.4, 5.2, 4.8], [12, 15, 9, 10, 14], [20, 22, 19, 25, 24, 18]]), { n, m, s2 } = stats(d), S = Math.sqrt(s2), t = tVal(n - 1, 0.025), e = t * S / Math.sqrt(n);
        return essay(`The following measurements are a random sample from a normal population: ${d.join(', ')}. Find a 95% confidence interval for μ.`,
          `(${fx(m - e, 3)} , ${fx(m + e, 3)})`,
          `<ol class="steps"><li>${f(`x̄ = ${fx(m)} , S = ${fx(S)}`)} (σ مش معروفة ← t)</li><li>${f(`ν = ${n - 1} → t<sub>0.025</sub> = ${t}`)}</li><li>${f(`${fx(m)} ± ${t}(${fx(S)}/√${n}) = ${fx(m)} ± ${fx(e, 3)}`)}</li></ol>`); },
      R => { const n = pick(R, [200, 500, 400, 1200]), x = Math.round(n * pick(R, [0.075, 0.228, 0.3, 0.25, 0.0417])), ph = x / n, c = pick(R, [95, 98, 90]), e = zCI[c] * Math.sqrt(ph * (1 - ph) / n);
        return essay(`In a random sample of ${n} homes, ${x} are heated by oil. Let p be the proportion of homes heated by oil.<br>1) Find a point estimate for p. 2) Construct a ${c}% confidence interval for p.`,
          `1) ${fx(ph)} 2) (${fx(ph - e)} , ${fx(ph + e)})`,
          `<ol class="steps"><li>${f(`p̂ = ${x}/${n} = ${fx(ph)}`)}</li><li>${f(`Z = ${zCI[c]} , √(p̂q̂/n) = ${fx(Math.sqrt(ph * (1 - ph) / n))}`)} ← ${f(`${fx(ph)} ± ${fx(e)}`)}</li></ol>`); }
    ]
  };

  // ---------- lecture 7 ----------
  const L7 = {
    mcq: [
      R => { const [xb, s, n] = pick(R, [[4.5, 2, 49], [750, 30, 50], [71.8, 8.9, 100], [7.8, 0.5, 50], [52, 6, 36], [98, 10, 25]]), mu0 = rnd(xb + pick(R, [-1, 1]) * pick(R, [0.5, 1, 2, 10, 0.2]) * (s > 5 ? 1 : s / 2), 2), Z = (xb - mu0) / (s / Math.sqrt(n));
        return mcq(R, `σ = ${s}, n = ${n}, x̄ = ${xb}. To test H0: μ = ${mu0} against H1: μ ≠ ${mu0}, the test statistic is`, `Z = ${fx(Z, 2)}`, [`Z = ${fx(-Z, 2)}`, `T = ${fx(Z, 2)}`, `Z = ${fx((xb - mu0) / s, 2)}`, `Z = ${fx((xb - mu0) / (s / n), 2)}`], `${f(`Z = (${xb} − ${mu0})/(${s}/√${n}) = ${fx(Z, 2)}`)}`); },
      R => { const al = pick(R, [0.05, 0.01, 0.1]), h = pick(R, ['>', '<', '≠']);
        const rr = h === '>' ? `(${zOne[al]}, ∞)` : h === '<' ? `(−∞, −${zOne[al]})` : `|Z| > ${zTwo[al]}`;
        return mcq(R, `To test H0: μ = μ0 against H1: μ ${h} μ0 at α = ${al} (σ known), the rejection region of H0 is`, rr, [`(${zTwo[al]}, ∞)`, `(−∞, −${zTwo[al]})`, `|Z| > ${zOne[al]}`, `(${zOne[al]}, ∞)`, `(−∞, −${zOne[al]})`].filter(x => x !== rr), `${h === '≠' ? 'two-sided ← α/2 في كل طرف' : 'one-sided ← α كلها في طرف واحد في اتجاه السهم'} ← ${f(rr)}`); },
      R => { const [xb, s, n, mu0, h] = pick(R, [[750, 30, 50, 740, '>'], [71.8, 8.9, 100, 70, '>'], [7.8, 0.5, 50, 8, '≠'], [48, 5, 36, 50, '<'], [102, 12, 64, 100, '>'], [29, 4, 25, 30, '<']]), al = pick(R, [0.05, 0.01]);
        const Z = (xb - mu0) / (s / Math.sqrt(n)), crit = h === '≠' ? zTwo[al] : zOne[al], rej = h === '>' ? Z > crit : h === '<' ? Z < -crit : Math.abs(Z) > crit;
        return mcq(R, `σ = ${s}, n = ${n}, x̄ = ${xb}. Testing H0: μ = ${mu0} vs H1: μ ${h} ${mu0} at α = ${al}, we`, rej ? 'Reject H0' : 'Accept H0', [rej ? 'Accept H0' : 'Reject H0', 'Cannot decide', 'Accept H1 and H0'],
          `${f(`Z = ${fx(Z, 2)}`)} ، والقيمة الحرجة ${f(`${h === '<' ? '−' : ''}${crit}`)} ← ${rej ? 'جوه منطقة الرفض ← Reject H<sub>0</sub>' : 'برا منطقة الرفض ← Accept H<sub>0</sub>'}`, { fixed: [rej ? 'Reject H0' : 'Accept H0', rej ? 'Accept H0' : 'Reject H0', 'Cannot decide', 'Accept H1 and H0'] }); },
      R => { const [n, x, p0] = pick(R, [[500, 150, 0.25], [15, 8, 0.7], [500, 114, 0.2], [400, 90, 0.25], [200, 70, 0.3]]), ph = x / n, Z = (ph - p0) / Math.sqrt(p0 * (1 - p0) / n);
        return mcq(R, `In a sample of ${n}, ${x} have a property. To test H0: p = ${p0} vs H1: p ≠ ${p0}, the test statistic is`, `Z = ${fx(Z, 3)}`, [`Z = ${fx((ph - p0) / Math.sqrt(ph * (1 - ph) / n), 3)}`, `T = ${fx(Z, 3)}`, `Z = ${fx(-Z, 3)}`], `${f(`p̂ = ${fx(ph)} , Z = (${fx(ph)} − ${p0})/√(${p0}×${rnd(1 - p0, 2)}/${n}) = ${fx(Z, 3)}`)}`); },
      R => { const [n, xb, S, mu0] = pick(R, [[16, 52, 8, 50], [12, 42, 11.9, 46], [25, 103, 10, 100], [9, 18, 3, 20]]), T = (xb - mu0) / (S / Math.sqrt(n));
        return mcq(R, `A sample of n = ${n} from a normal population gives x̄ = ${xb} and S = ${S}. To test H0: μ = ${mu0}, the test statistic is`, `T = ${fx(T, 3)}`, [`Z = ${fx(T, 3)}`, `T = ${fx((xb - mu0) / (S / n), 3)}`, `T = ${fx(-T, 3)}`], `σ مش معروفة ← T: ${f(`(${xb} − ${mu0})/(${S}/√${n}) = ${fx(T, 3)}`)} و ν = ${n - 1}`); },
      R => { const which = pick(R, [0, 1, 2, 3]);
        const qs = [['Type II error is', 'Accepting H0 when H0 is false', ['Rejecting H0 when H0 is true', 'Accepting H0 when H0 is true', 'Rejecting H0 when H0 is false']],
          ['The probability of Type I error is denoted by', 'α', ['β', '1 − β', 'p']],
          ['The null hypothesis always contains the sign', '=', ['≠', '>', '<']],
          ['If H1: μ ≠ μ0, the test is', 'two-sided', ['one-sided (right)', 'one-sided (left)', 'not a test']]][which];
        return mcq(R, qs[0], qs[1], qs[2], 'من تعريفات المحاضرة.'); }
    ],
    essay: [
      R => { const [xb, s, n, mu0, h, al] = pick(R, [[750, 30, 50, 740, '>', 0.05], [71.8, 8.9, 100, 70, '>', 0.05], [7.8, 0.5, 50, 8, '≠', 0.01], [48, 5, 36, 50, '<', 0.05]]);
        const Z = (xb - mu0) / (s / Math.sqrt(n)), crit = h === '≠' ? zTwo[al] : zOne[al], rej = h === '>' ? Z > crit : h === '<' ? Z < -crit : Math.abs(Z) > crit;
        return essay(`A sample of ${n} gives x̄ = ${xb}; σ = ${s}. Test H0: μ = ${mu0} against H1: μ ${h} ${mu0} at α = ${al}. Write all steps.`, rej ? 'Reject H0' : 'Accept H0',
          `<ol class="steps"><li>${f(`H0: μ = ${mu0} , H1: μ ${h} ${mu0}`)}</li><li>${f(`Z = (${xb} − ${mu0})/(${s}/√${n}) = ${fx(Z, 2)}`)}</li><li>R.R.: ${f(h === '>' ? `Z &gt; ${crit}` : h === '<' ? `Z &lt; −${crit}` : `|Z| &gt; ${crit}`)}</li><li>${rej ? 'Z جوه منطقة الرفض ← Reject H<sub>0</sub>' : 'Z برا منطقة الرفض ← Accept H<sub>0</sub>'}</li></ol>`); },
      R => { const [n, x, p0, h, al] = pick(R, [[500, 114, 0.2, '<', 0.01], [15, 8, 0.7, '≠', 0.1], [500, 150, 0.25, '≠', 0.1], [400, 130, 0.3, '>', 0.05]]), ph = x / n, Z = (ph - p0) / Math.sqrt(p0 * (1 - p0) / n);
        const crit = h === '≠' ? zTwo[al] : zOne[al], rej = h === '>' ? Z > crit : h === '<' ? Z < -crit : Math.abs(Z) > crit;
        return essay(`In a random sample of ${n}, ${x} have a certain property. Test H0: p = ${p0} vs H1: p ${h} ${p0} at α = ${al}.`, rej ? 'Reject H0' : 'Accept H0',
          `<ol class="steps"><li>${f(`p̂ = ${fx(ph)}`)}</li><li>${f(`Z = (${fx(ph)} − ${p0})/√(${p0}(${rnd(1 - p0, 2)})/${n}) = ${fx(Z, 3)}`)}</li><li>القيمة الحرجة ${f(String(crit))}</li><li>${rej ? 'Reject H<sub>0</sub>' : 'Accept H<sub>0</sub>'}</li></ol>`); },
      R => { const [n, xb, S, mu0, h] = pick(R, [[12, 42, 11.9, 46, '<'], [16, 52, 8, 50, '>'], [25, 103, 10, 100, '>'], [9, 17, 3, 20, '<']]), T = (xb - mu0) / (S / Math.sqrt(n)), t = tVal(n - 1, 0.05);
        const rej = h === '>' ? T > t : T < -t;
        return essay(`A sample of ${n} from a normal population gives x̄ = ${xb} and S = ${S}. Test H0: μ = ${mu0} vs H1: μ ${h} ${mu0} at α = 0.05.`, rej ? 'Reject H0' : 'Accept H0',
          `<ol class="steps"><li>${f(`T = (${xb} − ${mu0})/(${S}/√${n}) = ${fx(T, 3)}`)}</li><li>${f(`ν = ${n - 1} → t<sub>0.05</sub> = ${t}`)} ← R.R.: ${f(h === '>' ? `T &gt; ${t}` : `T &lt; −${t}`)}</li><li>${rej ? 'Reject H<sub>0</sub>' : 'Accept H<sub>0</sub>'}</li></ol>`); }
    ]
  };

  // ---------- lecture 8 ----------
  function dataset(R) {
    for (let i = 0; i < 50; i++) {
      const xs = pick(R, [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [5, 6, 7, 8, 9], [1, 3, 5, 7, 9]]), ys = xs.map(() => 2 + Math.floor(R() * 10));
      const n = xs.length, Sx = sum(xs), Sy = sum(ys), Sxy = sum(xs.map((x, j) => x * ys[j])), Sxx = sum(xs.map(x => x * x)), Syy = sum(ys.map(y => y * y));
      const sxy = Sxy - Sx * Sy / n, sxx = Sxx - Sx * Sx / n, syy = Syy - Sy * Sy / n;
      if (Math.abs(sxy) < 1 || syy === 0) continue;
      const r = sxy / Math.sqrt(sxx * syy), b = sxy / sxx, a = Sy / n - b * Sx / n;
      return { xs, ys, n, Sx, Sy, Sxy, Sxx, Syy, sxy, sxx, syy, r, b, a };
    }
  }
  const rDesc = r => { const a = Math.abs(r), dir = r > 0 ? 'direct' : 'inverse'; return a === 1 ? `perfect ${dir}` : a >= 0.75 ? `strong ${dir}` : a >= 0.25 ? `intermediate ${dir}` : a > 0 ? `weak ${dir}` : 'no relation'; };
  const dtab = d => `<table><tr><th>x</th>${d.xs.map(x => `<td>${x}</td>`).join('')}</tr><tr><th>y</th>${d.ys.map(y => `<td>${y}</td>`).join('')}</tr></table>`;
  const L8 = {
    mcq: [
      R => { const d = dataset(R); return mcq(R, `For the data ${dtab(d)} (Σxy = ${d.Sxy}, Σx² = ${d.Sxx}, Σy² = ${d.Syy}) the correlation coefficient r is`, fx(d.r, 3), [fx(d.b, 3), fx(-d.r, 3), fx(d.r * d.r, 3), fx(d.sxy / d.sxx / 2, 3)],
          `${f(`Sxy = ${fx(d.sxy)} , Sxx = ${fx(d.sxx)} , Syy = ${fx(d.syy)}`)} ← ${f(`r = ${fx(d.sxy)}/√(${fx(d.sxx)}×${fx(d.syy)}) = ${fx(d.r, 3)}`)}`); },
      R => { const d = dataset(R); return mcq(R, `For the data ${dtab(d)} the slope b of the regression line ŷ = a + bx is`, fx(d.b, 3), [fx(d.r, 3), fx(d.a, 3), fx(d.sxx / d.sxy, 3), fx(d.Sxy / d.Sxx, 3)], `${f(`b = Sxy/Sxx = ${fx(d.sxy)}/${fx(d.sxx)} = ${fx(d.b, 3)}`)}`); },
      R => { const d = dataset(R), x0 = d.xs[4] + pick(R, [1, 2]); return mcq(R, `For the data ${dtab(d)} the regression line gives a predicted y at x = ${x0} of`, fx(d.a + d.b * x0, 3), [fx(d.b + d.a * x0, 3), fx(d.a, 3), fx(d.Sy / d.n, 3), fx(d.a + d.b * x0 + 1, 3)],
          `${f(`b = ${fx(d.b, 3)} , a = ȳ − b x̄ = ${fx(d.Sy / d.n)} − ${fx(d.b, 3)}(${fx(d.Sx / d.n)}) = ${fx(d.a, 3)}`)} ← ${f(`ŷ(${x0}) = ${fx(d.a + d.b * x0, 3)}`)}`); },
      R => { const r = pick(R, [0.9, -0.94, 0.5, -0.3, 0.1, -0.15, 0.8, -0.6, 0.76]);
        return mcq(R, `If r = ${r}, the correlation is`, rDesc(r), ['strong direct', 'strong inverse', 'intermediate direct', 'intermediate inverse', 'weak direct', 'weak inverse'], `|r| = ${Math.abs(r)} والإشارة ${r > 0 ? '+' : '−'} ← ${rDesc(r)}`); }
    ],
    essay: [
      R => { const d = dataset(R), x0 = d.xs[2] + 0.5;
        return essay(`For the data ${dtab(d)}<br>(a) Compute the simple correlation coefficient r and comment. (b) Find the regression equation ŷ = a + bx. (c) Predict y when x = ${x0}.`,
          `r = ${fx(d.r, 3)} (${rDesc(d.r)}) ؛ ŷ = ${fx(d.a, 3)} + ${fx(d.b, 3)}x ؛ ŷ(${x0}) = ${fx(d.a + d.b * x0, 3)}`,
          `<ol class="steps"><li>${f(`Σx = ${d.Sx} , Σy = ${d.Sy} , Σxy = ${d.Sxy} , Σx² = ${d.Sxx} , Σy² = ${d.Syy}`)}</li><li>${f(`Sxy = ${fx(d.sxy)} , Sxx = ${fx(d.sxx)} , Syy = ${fx(d.syy)}`)}</li><li>${f(`r = ${fx(d.r, 3)}`)} ← ${rDesc(d.r)}</li><li>${f(`b = ${fx(d.b, 3)} , a = ${fx(d.a, 3)}`)}</li><li>${f(`ŷ(${x0}) = ${fx(d.a + d.b * x0, 3)}`)}</li></ol>`); }
    ]
  };

  // ---------- lecture 9 ----------
  const L9 = {
    mcq: [
      R => { const k = pick(R, [3, 4, 5]), n = pick(R, [4, 5, 6]), N = k * n, kind = pick(R, ['tr', 'err', 'tot']);
        const v = { tr: k - 1, err: N - k, tot: N - 1 }[kind];
        return mcq(R, `In one-way ANOVA with ${k} treatments and ${n} observations in each, the degrees of freedom for ${{ tr: 'treatments', err: 'error', tot: 'total' }[kind]} is`, String(v), [String(k - 1), String(N - k), String(N - 1), String(N), String(k * (n - 1) + 1)].filter(x => x !== String(v)), `${f(`treatments = k−1 = ${k - 1} , error = N−k = ${N - k} , total = N−1 = ${N - 1}`)}`); },
      R => { const k = pick(R, [3, 4]), n = pick(R, [4, 5, 6]), N = k * n, MSE = pick(R, [2, 4, 5, 10]), F = pick(R, [2.5, 4, 6, 7.5, 15.5]), SSTr = rnd(F * MSE * (k - 1), 2), SSE = MSE * (N - k);
        return mcq(R, `k = ${k} groups with ${n} observations each. SSTr = ${SSTr} and SSE = ${SSE}. The computed F is`, fx(F, 3), [fx(SSTr / SSE, 3), fx(SSE / SSTr, 3), fx(F * 2, 3), fx(SSTr / (k - 1), 3)], `${f(`MSTr = ${SSTr}/${k - 1} = ${fx(SSTr / (k - 1))} , MSE = ${SSE}/${N - k} = ${MSE} , F = ${fx(F, 3)}`)}`); },
      R => { const F = pick(R, [15.5, 2.1, 7.5, 3.2, 25.17]), crit = pick(R, [3.89, 6.927, 5.14, 4.26]);
        return mcq(R, `The computed F = ${F} and the critical value F(table) = ${crit}. The decision is`, F > crit ? 'Reject H0' : 'Accept H0', [], F > crit ? `${F} &gt; ${crit} ← Reject H<sub>0</sub>: فيه متوسط مختلف` : `${F} &lt; ${crit} ← Accept H<sub>0</sub>: المتوسطات متساوية`, { fixed: ['Reject H0', 'Accept H0', 'Cannot decide', 'Use t-test instead'] }); },
      R => mcq(R, 'The alternative hypothesis H1 in one-way ANOVA is', 'At least one mean is different', ['All means are different', 'μ1 = μ2 = ... = μk', 'All variances are equal'], 'H<sub>1</sub>: على الأقل متوسط واحد مختلف (مش لازم كلهم).')
    ],
    essay: [
      R => { const groups = [0, 1, 2].map(g => [0, 1, 2, 3].map(() => pick(R, [10, 12, 14, 15, 16, 18, 20]) + g * pick(R, [0, 2, 4])));
        const all = groups.flat(), N = all.length, Yt = sum(all), CF = Yt * Yt / N, SST = sum(all.map(y => y * y)) - CF, SSTr = sum(groups.map(g => sum(g) ** 2)) / 4 - CF, SSE = SST - SSTr;
        const MSTr = SSTr / 2, MSE = SSE / 9, F = MSTr / MSE, crit = 4.26;
        return essay(`Three brands are compared (4 observations each): <table><tr><th>Brand 1</th><th>Brand 2</th><th>Brand 3</th></tr>${[0, 1, 2, 3].map(i => `<tr>${groups.map(g => `<td>${g[i]}</td>`).join('')}</tr>`).join('')}</table>
          Construct the ANOVA table and test at α = 0.05 whether the means are equal. (F<sub>2,9</sub>(0.05) = 4.26)`, `F = ${fx(F, 3)} → ${F > crit ? 'Reject H0' : 'Accept H0'}`,
          `<ol class="steps"><li>${f(`Y.. = ${Yt} , N = 12 , C.F = ${Yt}²/12 = ${fx(CF, 3)}`)}</li><li>${f(`SST = Σy² − C.F = ${fx(SST, 3)}`)}</li><li>${f(`SSTr = (${groups.map(g => sum(g) + '²').join(' + ')})/4 − C.F = ${fx(SSTr, 3)}`)}</li><li>${f(`SSE = ${fx(SSE, 3)}`)}</li>
          <li>${f(`MSTr = ${fx(MSTr, 3)} , MSE = ${fx(MSE, 3)} , F = ${fx(F, 3)}`)}</li><li>${F > crit ? `${fx(F, 3)} &gt; 4.26 ← Reject H<sub>0</sub>` : `${fx(F, 3)} &lt; 4.26 ← Accept H<sub>0</sub>`}</li></ol>`); }
    ]
  };

  // ---------- lecture 10 ----------
  const L10 = {
    mcq: [
      R => { const d = [0, 1, 2, 3, 4, 5].map(() => R() < 0.5 ? 1 : 0).slice(0, pick(R, [4, 5, 6])); if (!d.includes(1)) d[0] = 1; const p = sum(d) / d.length;
        return mcq(R, `For a Bernoulli sample ${d.join(', ')}, the maximum likelihood estimate of p is`, fx(p), [fx(1 - p), String(sum(d)), fx(sum(d) / (d.length - 1)), '0.5'], `${f(`p̂ = Σx/n = ${sum(d)}/${d.length} = ${fx(p)}`)}`); },
      R => { const d = [0, 1, 2, 3].map(() => pick(R, [1, 2, 3, 4, 5])).slice(0, pick(R, [3, 4])), lam = d.length / sum(d);
        return mcq(R, `Lifetimes ${d.join(', ')} come from an exponential distribution f(x) = λe<sup>−λx</sup>. The MLE of λ is`, fx(lam), [fx(sum(d) / d.length), fx(1 / d.length), String(sum(d)), fx(lam / 2)], `${f(`λ̂ = n/Σx = ${d.length}/${sum(d)} = ${fx(lam)}`)}`); },
      R => { const d = pick(R, [[2, 4, 6], [1, 3, 5, 7], [10, 12, 14], [3, 5, 7]]), { n, m, ss } = stats(d);
        return mcq(R, `For a normal sample ${d.join(', ')}, the MLE of σ² is`, fx(ss / n), [fx(ss / (n - 1)), fx(Math.sqrt(ss / n)), fx(m), fx(ss)], `${f(`x̄ = ${fx(m)} , σ̂² = Σ(x − x̄)²/n = ${fx(ss)}/${n} = ${fx(ss / n)}`)} (على n مش n−1)`); },
      R => { const which = pick(R, [0, 1, 2]); const qs = [['The sample mean X̄ is', 'an unbiased estimator of μ', ['a biased estimator of μ', 'an estimator of σ²', 'always equal to μ']],
        ['The sample variance S² (divide by n − 1) is', 'an unbiased estimator of σ²', ['a biased estimator of σ²', 'the MLE of σ²', 'an estimator of μ']],
        ['The likelihood function L(θ) for a random sample is', 'the product of f(xi; θ)', ['the sum of f(xi; θ)', 'the derivative of f', 'the mean of the xi']]][which];
        return mcq(R, qs[0], qs[1], qs[2], 'من تعريفات المحاضرة.'); }
    ],
    essay: [
      R => { const d = [0, 1, 2, 3, 4, 5, 6, 7].map(() => R() < 0.4 ? 1 : 0); if (!d.includes(1)) d[2] = 1;
        return essay(`Students are asked if they own a car (1 = yes, 0 = no): ${d.join(', ')}. Assuming Bernoulli(p), derive the MLE of p and compute it.`, `p̂ = ${sum(d)}/${d.length} = ${fx(sum(d) / d.length)}`,
          `<ol class="steps"><li>${f('L(p) = p^{Σx}(1−p)^{n−Σx}')}</li><li>${f('ln L = Σx ln p + (n−Σx) ln(1−p)')}</li><li>${f('Σx/p − (n−Σx)/(1−p) = 0 → p̂ = Σx/n')}</li><li>${f(`p̂ = ${sum(d)}/${d.length} = ${fx(sum(d) / d.length)}`)}</li></ol>`); },
      R => { const d = [0, 1, 2, 3, 4].map(() => pick(R, [1, 2, 3, 4, 5, 6]));
        return essay(`Bulb lifetimes ${d.join(', ')} years follow f(x) = λe<sup>−λx</sup>. Write the likelihood, the log-likelihood and find the MLE of λ.`, `λ̂ = 5/${sum(d)} = ${fx(5 / sum(d))}`,
          `<ol class="steps"><li>${f(`L = λ⁵ e^{−λΣx} , Σx = ${sum(d)}`)}</li><li>${f(`ln L = 5 ln λ − ${sum(d)}λ`)}</li><li>${f(`5/λ − ${sum(d)} = 0 → λ̂ = 5/${sum(d)} = ${fx(5 / sum(d))}`)}</li></ol>`); },
      R => { const d = pick(R, [[2, 4, 6, 8], [3, 5, 7], [10, 12, 14, 16, 18]]), { n, m, ss } = stats(d);
        return essay(`A normal sample: ${d.join(', ')}. (a) Find the MLEs μ̂ and σ̂². (b) Find S². (c) Which estimator of σ² is unbiased? Explain.`, `μ̂ = ${fx(m)} ، σ̂² = ${fx(ss / n)} ، S² = ${fx(ss / (n - 1))}`,
          `<ol class="steps"><li>${f(`μ̂ = x̄ = ${fx(m)} , σ̂² = ${fx(ss)}/${n} = ${fx(ss / n)}`)}</li><li>${f(`S² = ${fx(ss)}/${n - 1} = ${fx(ss / (n - 1))}`)}</li><li>${f('E(σ̂²) = (n−1)σ²/n ≠ σ²')} ← biased ، أما S² فهي unbiased.</li></ol>`); }
    ]
  };

  const GEN = { lec1: L1, lec2: L2, lec3: L3, lec4: L4, lec5: L5, lec6: L6, lec7: L7, lec8: L8, lec9: L9, lec10: L10 };

  function produce(gen, R, kind, existing, need) {
    const seen = new Set(existing.map(q => q.q)), out = [];
    const list = gen[kind];
    for (let tries = 0; out.length < need && tries < 600; tries++) {
      const q = list[tries % list.length](R);
      if (!q || seen.has(q.q)) continue;
      seen.add(q.q); out.push(q);
    }
    return out;
  }

  // fill every lecture to 30: 8 essay + 22 MCQ
  Object.keys(GEN).forEach(id => {
    const R = mulberry(seedOf('bank-' + id));
    const cur = BANK[id] || [];
    cur.forEach(q => { if (!q.opts) q.essay = true; });
    const essays = cur.filter(q => q.essay), mcqs = cur.filter(q => !q.essay);
    const moreE = produce(GEN[id], R, 'essay', cur, Math.max(0, 8 - essays.length));
    const moreM = produce(GEN[id], R, 'mcq', cur, Math.max(0, 22 - mcqs.length));
    BANK[id] = [...mcqs, ...moreM, ...essays, ...moreE];
  });

  // 50 general questions mixed across the midterm lectures (weighted like the real exams)
  const R = mulberry(seedOf('general'));
  const plan = [['lec1', 6, 1], ['lec2', 6, 1], ['lec3', 10, 2], ['lec4', 9, 1], ['lec5', 6, 1], ['lec6', 6, 1]];
  const all = Object.values(BANK).flat();
  const general = [];
  plan.forEach(([id, m, e]) => {
    produce(GEN[id], R, 'mcq', all.concat(general), m).forEach(q => general.push(Object.assign({ lec: id }, q)));
    produce(GEN[id], R, 'essay', all.concat(general), e).forEach(q => general.push(Object.assign({ lec: id }, q)));
  });
  for (let i = general.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [general[i], general[j]] = [general[j], general[i]]; }
  general.sort((a, b) => (a.essay ? 1 : 0) - (b.essay ? 1 : 0));
  BANK.general = general;

  // Spread the correct letter evenly over A–D in each list (the hand-written ones were mostly B).
  // "none of these" stays as option E; questions whose solution names options by letter keep their order.
  function balanceLetters(list, R) {
    const counts = [0, 0, 0, 0];
    list.forEach(q => {
      if (!q.opts || q.opts.length !== 5 || q.a === 4 || q.keepOrder) return;
      const low = Math.min(...counts), cands = [0, 1, 2, 3].filter(i => counts[i] === low);
      const target = cands[Math.floor(R() * cands.length)];
      const four = q.opts.slice(0, 4), correct = four[q.a];
      four.splice(q.a, 1);
      for (let i = four.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [four[i], four[j]] = [four[j], four[i]]; }
      four.splice(target, 0, correct);
      q.opts = [...four, q.opts[4]];
      q.a = target;
      counts[target]++;
    });
  }
  Object.keys(BANK).forEach(id => balanceLetters(BANK[id], mulberry(seedOf('letters-' + id))));
})();
