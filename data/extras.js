window.PAGES = window.PAGES || {};

// marks per lecture in each midterm (counted from the actual papers)
const FOCUS_DATA = [
  { lec: 'محاضرة 1 – أساسيات + الجمع', y22: 3, y23: 3, y24: 2 },
  { lec: 'محاضرة 2 – شرطي/استقلال/بايز', y22: 1, y23: 1, y24: 3 },
  { lec: 'محاضرة 3 – متقطع + Binomial', y22: 4, y23: 4, y24: 9 },
  { lec: 'محاضرة 4 – متصل + Normal', y22: 2, y23: 4.5, y24: 6 },
  { lec: 'محاضرة 5 – Sampling dist.', y22: 5, y23: 7.5, y24: 0 },
  { lec: 'محاضرة 6 – Confidence Interval', y22: 5, y23: 0, y24: 0 }
];

function focusBars() {
  const rows = FOCUS_DATA.map(r => ({ ...r, avg: (r.y22 + r.y23 + r.y24) / 3 }));
  const max = Math.max(...rows.map(r => r.avg));
  return `<div class="bars">${rows.map(r => `<div class="bar-row"><span>${r.lec}</span>
    <div class="bar-track"><div class="bar-fill" style="width:${(100 * r.avg / max).toFixed(0)}%"></div></div>
    <b>${r.avg.toFixed(1)}</b></div>`).join('')}</div>
    <div class="table-wrap"><table><tr><th>المحاضرة</th><th>2022</th><th>5/2023</th><th>11/2023</th><th>المتوسط من 20</th></tr>
    ${rows.map(r => `<tr><td style="text-align:right">${r.lec}</td><td>${r.y22}</td><td>${r.y23}</td><td>${r.y24}</td><td><b>${r.avg.toFixed(1)}</b></td></tr>`).join('')}</table></div>`;
}

window.PAGES.home = `
<h1>📘 الاحتمالات والإحصاء — BSM214</h1>
<p class="subtitle">د. عمرو فؤاد صادق — كل اللي محتاجه لامتحان الميد (محاضرات 1 → 6) + شرح باقي المحاضرات للفاينل.</p>
<div class="box kid"><b>👋 ابدأ إزاي؟</b>
<ol>
<li>اقرا <a href="#focus">🧠 دماغ الدكتور</a> (3 دقايق) عشان تعرف تركز على إيه.</li>
<li>امشي على <a href="#plan">⏰ خطة الليلة</a>.</li>
<li>لكل محاضرة: اقرا الشرح ← حل أسئلتها ← لو غلطت ارجع للجزء ده.</li>
<li>في الآخر حل الـ 3 امتحانات القديمة كأنك في اللجنة، وبعدين <a href="#mock">امتحان تجريبي</a>.</li>
</ol></div>
<div class="box exam"><b>🎯 أهم 3 حاجات لو مفيش وقت خالص</b>
<ol>
<li><b>Binomial</b>: <span class="f">μ = np</span> و <span class="f">σ² = npq</span> و "at least" = <span class="f">1 − ...</span> (محاضرة 3)</li>
<li><b>Normal</b>: <span class="f">Z = (x − μ)/σ</span> وقراءة الجدول (محاضرة 4)، ولو متوسط عينة اقسم على <span class="f">√n</span> (محاضرة 5)</li>
<li><b>قانون الجمع + الاستقلال</b>: <span class="f">P(A∪B) = P(A)+P(B)−P(A∩B)</span> واختبار <span class="f">P(A∩B) = P(A)P(B)</span> (محاضرة 1 و 2)</li>
</ol></div>`;

window.PAGES.focus = `
<h1>🧠 دماغ الدكتور</h1>
<p class="subtitle">حللت الـ 3 امتحانات اللي في الفولدر سؤال سؤال. ده اللي طلع.</p>

<h2>1) شكل الامتحان</h2>
<ul>
<li>20 درجة، ساعة واحدة، صفحتين.</li>
<li><b>2022 و 5/2023:</b> سؤال 1 = 10 MCQ (10 درجات) + سؤال 2 = مسألة 5 درجات + سؤال 3 = مسألة 5 درجات.</li>
<li><b>11/2023 (الأحدث):</b> 15 سؤال كلهم MCQ، بس Q2 (6 درجات) و Q3 (4 درجات) مكتوب عليهم <b>[Answer in detail]</b> يعني اكتب الخطوات.</li>
<li>كل MCQ ليه 5 اختيارات، والخامس دايمًا <b>none of these</b>.</li>
<li>بيديك قيم جدول Z اللي هتحتاجها <b>تحت الورقة</b>. (بصّلها قبل ما تبدأ: هتعرف منها الـ z اللي المفروض يطلعلك!)</li>
</ul>

<h2>2) الدرجات راحت فين؟ (متوسط من 20)</h2>
${focusBars()}
<div class="box tip"><b>💡 الخلاصة:</b> محاضرة <b>3</b> و <b>4</b> و <b>5</b> = حوالي 70% من الدرجة. محاضرة 1 و 2 مضمونين (3–5 درجات سهلين). محاضرة 6 جت مرة واحدة كسؤال 5 درجات.</div>

<h2>3) الأسئلة اللي بتتكرر (احفظ القوالب دي!)</h2>
<div class="table-wrap"><table>
<tr><th>القالب</th><th>2022</th><th>5/2023</th><th>11/2023</th><th>المحاضرة</th></tr>
<tr><td style="text-align:right">Visa/MasterCard أو "passes at least one course" ← union</td><td>✔</td><td>✔</td><td>✔</td><td>1</td></tr>
<tr><td style="text-align:right">Mutually exclusive + P(A∪B) ← P(Ā∩B) أو العكس</td><td>✔</td><td>✔</td><td>✔</td><td>1</td></tr>
<tr><td style="text-align:right">زهرتين: مجموع رقم + الوشين متساويين</td><td>✔</td><td>✔</td><td></td><td>1</td></tr>
<tr><td style="text-align:right">dependent / independent / disjoint</td><td>✔</td><td>✔</td><td>✔</td><td>2</td></tr>
<tr><td style="text-align:right">مصنع 3 مكن: Total + Bayes</td><td></td><td></td><td>✔</td><td>2</td></tr>
<tr><td style="text-align:right">جدول فيه C ← أوجد C</td><td>✔</td><td>✔</td><td>✔</td><td>3</td></tr>
<tr><td style="text-align:right">P(2 ≤ X &lt; 4) من جدول</td><td>✔</td><td>✔</td><td>✔</td><td>3</td></tr>
<tr><td style="text-align:right">E(aX + b) من جدول</td><td></td><td></td><td>✔</td><td>3</td></tr>
<tr><td style="text-align:right">Binomial: mean (np) + at least</td><td>✔</td><td>✔</td><td>✔</td><td>3</td></tr>
<tr><td style="text-align:right">Binomial: variance (npq)</td><td></td><td></td><td>✔</td><td>3</td></tr>
<tr><td style="text-align:right">pdf = kx ← أوجد k</td><td>✔</td><td>✔</td><td>✔</td><td>4</td></tr>
<tr><td style="text-align:right">Normal بين رقمين (piston ring / motor)</td><td>✔</td><td>✔</td><td>✔</td><td>4</td></tr>
<tr><td style="text-align:right">Normal أكبر من رقم</td><td></td><td>✔</td><td>✔</td><td>4</td></tr>
<tr><td style="text-align:right">Sample proportion p=0.45, n=500 (5 درجات)</td><td>✔</td><td>✔</td><td></td><td>5</td></tr>
<tr><td style="text-align:right">متوسط عينة n ← σ/√n</td><td></td><td>✔</td><td></td><td>5</td></tr>
<tr><td style="text-align:right">Point estimate + 95% CI (σ معروفة)</td><td>✔</td><td></td><td></td><td>6</td></tr>
</table></div>

<h2>4) طريقة تفكير الدكتور</h2>
<div class="box exam">
<ul>
<li><b>بيكرر نفس المسائل</b> وساعات بنفس الأرقام بالظبط (الصواريخ 0.9 و 4 أجهزة، والـ piston ring 12 و 0.03، والـ p = 0.45 و n = 500 جم في امتحانين).</li>
<li><b>بياخد من شيت السكشن</b> (Examples on sections) بتاعه هو: الـ piston ring والصواريخ واللمبات 750/30/50 كلهم من الشيت. ذاكر الشيت!</li>
<li><b>بيحط فخاخ في الاختيارات</b>: الرقم المكمّل (0.0037 بدل 0.9963)، أو نسيان الطرح (0.9525 بدل 0.905)، أو حاجة أكبر من 1 (1.15)، أو 10 بدل 0.1.</li>
<li><b>بيربط أسئلة ببعض</b>: نفس البيانات بيطلع منها 2–3 أسئلة (C ثم احتمال ثم توقع). لو غلطت في الأولى هتغلط في الباقي، فراجع الأولى كويس.</li>
<li><b>الجدول تحت الورقة بيفضحه</b>: لو كاتب P(Z&lt;1.67) و P(Z&lt;−1.67) يبقى في سؤال z بتاعه ±1.67.</li>
</ul></div>

<h2>5) توقعاتي لامتحانك</h2>
<div class="box warn">
<ul>
<li>✅ شبه مؤكد: union/ME، independence، أوجد C، P(a≤X&lt;b)، binomial، pdf k، normal.</li>
<li>⭐ محتمل جدًا: Bayes/Total (جه في الأحدث)، E(aX+b)، sample proportion أو average of n.</li>
<li>🔸 ممكن: Confidence interval لو محاضرة 6 داخلة معاكم (اللي حصل في 2022).</li>
</ul></div>
`;

window.PAGES.plan = `
<h1>⏰ خطة مذاكرة الليلة</h1>
<p class="subtitle">لو معاك حوالي 6–7 ساعات. لو أقل، اعمل الحاجات اللي عليها 🔥 بس.</p>
<div class="table-wrap"><table>
<tr><th>الوقت</th><th>هتعمل إيه</th></tr>
<tr><td>20 د</td><td style="text-align:right"><a href="#lec1">محاضرة 1</a> + <a href="#bank-lec1">أسئلتها</a></td></tr>
<tr><td>40 د</td><td style="text-align:right"><a href="#lec2">محاضرة 2</a> (ركز على الاستقلال و Bayes) + <a href="#bank-lec2">أسئلتها</a></td></tr>
<tr><td>🔥 60 د</td><td style="text-align:right"><a href="#lec3">محاضرة 3</a> (الجدول + Binomial) + <a href="#bank-lec3">أسئلتها</a></td></tr>
<tr><td>🔥 60 د</td><td style="text-align:right"><a href="#lec4">محاضرة 4</a> (k + Normal وقراءة جدول Z) + <a href="#bank-lec4">أسئلتها</a></td></tr>
<tr><td>🔥 40 د</td><td style="text-align:right"><a href="#lec5">محاضرة 5</a> (σ/√n و p̂) + <a href="#bank-lec5">أسئلتها</a></td></tr>
<tr><td>30 د</td><td style="text-align:right"><a href="#lec6">محاضرة 6</a> (CI) + <a href="#bank-lec6">أسئلتها</a></td></tr>
<tr><td>☕ 15 د</td><td style="text-align:right">استراحة</td></tr>
<tr><td>45 د</td><td style="text-align:right"><a href="#mid2022">ميد 2022</a> كأنك في اللجنة، وبعدين صحح</td></tr>
<tr><td>30 د</td><td style="text-align:right"><a href="#mid2023a">ميد 5/2023</a> (هتلاقيه سهل بعد 2022)</td></tr>
<tr><td>45 د</td><td style="text-align:right"><a href="#mid2023b">ميد 11/2023</a> (الأحدث — الأهم)</td></tr>
<tr><td>30 د</td><td style="text-align:right"><a href="#mock">امتحان تجريبي</a> + راجع الغلط</td></tr>
<tr><td>15 د</td><td style="text-align:right"><a href="#formulas">ورقة القوانين</a> قبل النوم وتاني الصبح</td></tr>
</table></div>
<div class="box tip"><b>💡 في اللجنة:</b> هات آلة حاسبة فيها nCr. ابدأ بالأسئلة السهلة (C و k و union). اقرا جدول Z اللي تحت الورقة الأول. ونام كويس — دماغك محتاجة تبقى صاحية للحساب.</div>
`;

window.PAGES.formulas = `
<h1>📐 ورقة القوانين (للمراجعة الأخيرة)</h1>
<h2>محاضرة 1 – Basics</h2>
<div class="fm">P(A) = n(A)/n(S) &nbsp;|&nbsp; P(A′) = 1 − P(A) &nbsp;|&nbsp; P(A∪B) = P(A) + P(B) − P(A∩B)</div>
<div class="fm">ME: P(A∩B) = 0 &nbsp;|&nbsp; P(A∩B′) = P(A) − P(A∩B) &nbsp;|&nbsp; P(A′∩B′) = 1 − P(A∪B)</div>
<h2>محاضرة 2 – Conditional & Bayes</h2>
<div class="fm">P(A|B) = P(A∩B)/P(B) &nbsp;|&nbsp; P(A∩B) = P(B)P(A|B)</div>
<div class="fm">Independent ⇔ P(A∩B) = P(A)P(B)</div>
<div class="fm">P(B) = Σ P(A<sub>i</sub>)P(B|A<sub>i</sub>) &nbsp;|&nbsp; P(A<sub>i</sub>|B) = P(A<sub>i</sub>)P(B|A<sub>i</sub>) / P(B)</div>
<h2>محاضرة 3 – Discrete & Binomial</h2>
<div class="fm">Σf(x) = 1 &nbsp;|&nbsp; μ = Σx f(x) &nbsp;|&nbsp; σ² = Σx² f(x) − μ²</div>
<div class="fm">E(aX+b) = aE(X)+b &nbsp;|&nbsp; Var(aX+b) = a²Var(X)</div>
<div class="fm">P(X=x) = <sup>n</sup>C<sub>x</sub> p<sup>x</sup> q<sup>n−x</sup> &nbsp;|&nbsp; μ = np &nbsp;|&nbsp; σ² = npq</div>
<h2>محاضرة 4 – Continuous & Normal</h2>
<div class="fm">∫f(x)dx = 1 &nbsp;|&nbsp; P(a&lt;X&lt;b) = ∫<sub>a</sub><sup>b</sup> f(x)dx &nbsp;|&nbsp; P(X=a) = 0 &nbsp;|&nbsp; μ = ∫x f(x)dx</div>
<div class="fm">Z = (X − μ)/σ &nbsp;|&nbsp; P(X&gt;a) = 1 − P(Z&lt;z) &nbsp;|&nbsp; x = μ + zσ</div>
<h2>محاضرة 5 – Sampling</h2>
<div class="fm">x̄ = Σx/n &nbsp;|&nbsp; S² = Σ(x−x̄)²/(n−1)</div>
<div class="fm">E(x̄) = μ &nbsp;|&nbsp; σ<sub>x̄</sub> = σ/√n &nbsp;|&nbsp; Z = (x̄ − μ)/(σ/√n) &nbsp;|&nbsp; T = (x̄ − μ)/(S/√n), ν = n−1</div>
<div class="fm">E(p̂) = p &nbsp;|&nbsp; Var(p̂) = pq/n &nbsp;|&nbsp; Z = (p̂ − p)/√(pq/n)</div>
<h2>محاضرة 6 – Confidence Intervals</h2>
<div class="fm">x̄ ± Z<sub>α/2</sub> σ/√n &nbsp;|&nbsp; x̄ ± t<sub>α/2</sub> S/√n &nbsp;|&nbsp; p̂ ± Z<sub>α/2</sub>√(p̂q̂/n)</div>
<div class="fm">e = Z<sub>α/2</sub> σ/√n &nbsp;|&nbsp; n = (Z<sub>α/2</sub> σ / e)² ↑</div>
<div class="fm">90% → 1.645 &nbsp;|&nbsp; 95% → 1.96 &nbsp;|&nbsp; 98% → 2.33 &nbsp;|&nbsp; 99% → 2.575</div>
<h2>محاضرات 7–10 (فاينل)</h2>
<div class="fm">Z = (x̄ − μ<sub>0</sub>)/(σ/√n) &nbsp;|&nbsp; Reject H<sub>0</sub> if in R.R. (≠: |Z| &gt; Z<sub>α/2</sub>, &gt;: Z &gt; Z<sub>α</sub>, &lt;: Z &lt; −Z<sub>α</sub>)</div>
<div class="fm">r = Sxy/√(Sxx·Syy) &nbsp;|&nbsp; b = Sxy/Sxx &nbsp;|&nbsp; a = ȳ − b x̄</div>
<div class="fm">ANOVA: F = MSTr/MSE, df = (k−1, N−k) &nbsp;|&nbsp; MLE: d ln L/dθ = 0 &nbsp;|&nbsp; Unbiased: E(θ̂) = θ</div>
`;

window.T_TABLE = [
  [1, 3.078, 6.314, 12.706, 31.821, 63.657], [2, 1.886, 2.920, 4.303, 6.965, 9.925], [3, 1.638, 2.353, 3.182, 4.541, 5.841],
  [4, 1.533, 2.132, 2.776, 3.747, 4.604], [5, 1.476, 2.015, 2.571, 3.365, 4.032], [6, 1.440, 1.943, 2.447, 3.143, 3.707],
  [7, 1.415, 1.895, 2.365, 2.998, 3.499], [8, 1.397, 1.860, 2.306, 2.896, 3.355], [9, 1.383, 1.833, 2.262, 2.821, 3.250],
  [10, 1.372, 1.812, 2.228, 2.764, 3.169], [11, 1.363, 1.796, 2.201, 2.718, 3.106], [12, 1.356, 1.782, 2.179, 2.681, 3.055],
  [13, 1.350, 1.771, 2.160, 2.650, 3.012], [14, 1.345, 1.761, 2.145, 2.624, 2.977], [15, 1.341, 1.753, 2.131, 2.602, 2.947],
  [16, 1.337, 1.746, 2.120, 2.583, 2.921], [17, 1.333, 1.740, 2.110, 2.567, 2.898], [18, 1.330, 1.734, 2.101, 2.552, 2.878],
  [19, 1.328, 1.729, 2.093, 2.539, 2.861], [20, 1.325, 1.725, 2.086, 2.528, 2.845], [21, 1.323, 1.721, 2.080, 2.518, 2.831],
  [22, 1.321, 1.717, 2.074, 2.508, 2.819], [23, 1.319, 1.714, 2.069, 2.500, 2.807], [24, 1.318, 1.711, 2.064, 2.492, 2.797],
  [25, 1.316, 1.708, 2.060, 2.485, 2.787], [26, 1.315, 1.706, 2.056, 2.479, 2.779], [27, 1.314, 1.703, 2.052, 2.473, 2.771],
  [28, 1.313, 1.701, 2.048, 2.467, 2.763], [29, 1.311, 1.699, 2.045, 2.462, 2.756], [30, 1.310, 1.697, 2.042, 2.457, 2.750],
  ['∞', 1.282, 1.645, 1.960, 2.326, 2.576]
].map(r => r.map(v => typeof v === 'number' && !Number.isInteger(v) ? v.toFixed(3) : v));
