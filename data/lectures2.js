window.LECTURES = window.LECTURES || [];

/* ===================== LECTURE 4 ===================== */
window.LECTURES.push({
  id: 'lec4', n: 4, focus: 'hot',
  short: 'المتغير المتصل والطبيعي',
  title: 'المتغير العشوائي المتصل والتوزيع الطبيعي',
  en: 'Continuous Random Variables (pdf) & the Normal Distribution',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
في المتقطع كنا بنجمع (Σ). في المتصل (طول، وقت، وزن) القيم كتير جدًا لدرجة إننا بنستبدل الجمع بـ <b>التكامل ∫</b>.
<br>الاحتمال هنا = <b>مساحة تحت المنحنى</b>. والمساحة الكلية تحت المنحنى = 1.</div>

<h2>1) Probability Density Function (pdf)</h2>
<div class="box law"><b>📐 f(x) تبقى pdf صح لو:</b>
<div class="fm">1) f(x) ≥ 0 &nbsp;&nbsp;&nbsp; 2) ∫<sub>−∞</sub><sup>∞</sup> f(x) dx = 1 &nbsp;&nbsp;&nbsp; 3) P(a &lt; X &lt; b) = ∫<sub>a</sub><sup>b</sup> f(x) dx</div>
</div>
<div class="box warn"><b>⚠️ حاجات مختلفة عن المتقطع</b>
<ul>
<li><span class="f">P(X = a) = 0</span> دايمًا! (نقطة واحدة مالهاش مساحة). يعني لو سألك <span class="f">P(X = 16)</span> لمتغير متصل → <b>0</b>.</li>
<li>عشان كده <span class="f">P(a ≤ X ≤ b) = P(a &lt; X &lt; b)</span>، العلامات مش فارقة.</li>
<li><span class="f">f(x)</span> نفسها مش احتمال (ممكن تبقى أكبر من 1).</li>
</ul></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
X متغير متصل (طول الطلاب). (1) <span class="f">P(X = 170)</span> = ؟ (2) هل <span class="f">P(160 &lt; X &lt; 170)</span> = <span class="f">P(160 ≤ X ≤ 170)</span>؟
<details><summary>اعرض الحل</summary><div>
1) <b>صفر</b>، لأن نقطة واحدة مالهاش مساحة.<br>
2) <b>أيوه</b>، متساويين، لأن الأطراف احتمالها صفر.</div></details></div>

<h3>تذكير سريع بالتكامل اللي هتحتاجه</h3>
<div class="fm">∫ x<sup>n</sup> dx = <span class="frac"><span>x<sup>n+1</sup></span><span>n+1</span></span> &nbsp;&nbsp;&nbsp; ∫ k dx = kx &nbsp;&nbsp;&nbsp; ∫ √x dx = <span class="frac"><span>x<sup>3/2</sup></span><span>3/2</span></span></div>
<p>وبعدين بتعوّض: (الحد العلوي) − (الحد السفلي).</p>

<div class="ex"><div class="ex-title">⭐⭐ أوجد k (جه في التلات امتحانات!)</div>
<div class="ex-q"><b>📝 Question</b>Suppose that the continuous random variable X has the probability density function: f(x) = kx for 0 &lt; x &lt; 2; 0 elsewhere. Then the value of the constant k is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>f(x) = kx for 0 &lt; x &lt; 2</td><td><span class="f">الحدود 0 و 2</span></td><td></td></tr><tr><td>probability density function</td><td><span class="f">∫ f(x) dx = 1</span></td><td>المساحة الكلية = 1</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>the value of the constant k</td><td><span class="f">∫<sub>0</sub><sup>2</sup> kx dx = 1</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">f(x) = kx , 0 &lt; x &lt; 2</span>
<ol class="steps">
<li><span class="f">∫<sub>0</sub><sup>2</sup> kx dx = 1</span></li>
<li><span class="f">k [x²/2]<sub>0</sub><sup>2</sup> = k (4/2 − 0) = 2k = 1</span></li>
<li><span class="f">k = 0.5</span> ✅</li>
</ol>
<b>نسخة 2023/24:</b> <span class="f">f(x) = kx , 1 &lt; x &lt; 3</span> ← <span class="f">k(9 − 1)/2 = 4k = 1 → k = 0.25</span>.
<br>وبعدها: <span class="f">P(1 ≤ X &lt; 2) = ∫<sub>1</sub><sup>2</sup> x/4 dx = (4 − 1)/8 = 0.375</span> ✅
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
<span class="f">f(x) = kx² , 0 &lt; x &lt; 3</span>. أوجد k، وبعدين <span class="f">P(X &lt; 1)</span>.
<details><summary>اعرض الحل</summary><div>
<span class="f">∫<sub>0</sub><sup>3</sup> kx² dx = k[x³/3]<sub>0</sub><sup>3</sup> = 9k = 1 → k = 1/9</span><br>
<span class="f">P(X &lt; 1) = (1/9)[x³/3]<sub>0</sub><sup>1</sup> = 1/27 ≈ 0.037</span></div></details></div>

<h3>التوقع والتباين في المتصل</h3>
<div class="box law">
<div class="fm">μ = E(X) = ∫ x · f(x) dx &nbsp;&nbsp;&nbsp; E(X²) = ∫ x² · f(x) dx &nbsp;&nbsp;&nbsp; σ² = E(X²) − μ²</div>
<div class="fm">E[g(X)] = ∫ g(x) f(x) dx &nbsp;&nbsp;&nbsp; E(aX+b) = aE(X)+b &nbsp;&nbsp;&nbsp; Var(aX+b) = a²Var(X)</div>
</div>

<div class="ex"><div class="ex-title">مثال المحاضرة: f(x) = x²/3 , −1 &lt; x &lt; 2</div>
<div class="ex-q"><b>📝 Question</b>Suppose that the error in the reaction temperature, in °C, for a controlled laboratory experiment is a continuous random variable X having the probability density function: f(x) = x²/3 for −1 &lt; x &lt; 2; 0 elsewhere.<br>(a) Verify that f(x) is a pdf. (b) Find P(0 &lt; X ≤ 1). (c) Find E(X) and E(4X + 3).</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>f(x) = x²/3 for −1 &lt; x &lt; 2</td><td><span class="f">الحدود −1 و 2</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) Verify that f(x) is a pdf</td><td><span class="f">∫<sub>−1</sub><sup>2</sup> f(x) dx = 1 ؟</span></td><td>وكمان f ≥ 0</td></tr><tr><td>(b) P(0 &lt; X ≤ 1)</td><td><span class="f">∫<sub>0</sub><sup>1</sup> f(x) dx</span></td><td></td></tr><tr><td>(c) E(X), E(4X + 3)</td><td><span class="f">∫ x·f(x) dx ، 4E(X) + 3</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<ol class="steps">
<li>تأكيد إنها pdf: <span class="f">∫<sub>−1</sub><sup>2</sup> x²/3 dx = [x³/9]<sub>−1</sub><sup>2</sup> = (8 − (−1))/9 = 1</span> ✓</li>
<li><span class="f">P(0 &lt; X ≤ 1) = [x³/9]<sub>0</sub><sup>1</sup> = 1/9</span></li>
<li><span class="f">E(X) = ∫ x³/3 dx = [x⁴/12]<sub>−1</sub><sup>2</sup> = (16 − 1)/12 = 5/4</span></li>
<li><span class="f">E(4X + 3) = 4(5/4) + 3 = 8</span></li>
</ol></div>

<div class="ex"><div class="ex-title">مثال: f(x) = 2(x − 1) , 1 &lt; x &lt; 2</div>
<div class="ex-q"><b>📝 Question</b>Let X be a continuous random variable with the following pdf: f(x) = 2(x − 1) for 1 &lt; x &lt; 2; 0 elsewhere. Find the mean and the variance of X.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>f(x) = 2(x − 1) for 1 &lt; x &lt; 2</td><td><span class="f">الحدود 1 و 2</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>the mean</td><td><span class="f">μ = ∫ x·f(x) dx</span></td><td></td></tr><tr><td>the variance</td><td><span class="f">E(X²) − μ²</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> pdf متصل. المتوسط والتباين بالتكامل بدل الجمع: <span class="f">E(X) = ∫ x·f(x) dx</span> و <span class="f">E(X²) = ∫ x²·f(x) dx</span>، وبعدين <span class="f">σ² = E(X²) − μ²</span>.</p>
<ol class="steps">
<li><b>المتوسط:</b> اضرب x في f(x) الأول: <span class="f">x · 2(x − 1) = 2x² − 2x</span></li>
<li>كامل: <span class="f">∫(2x² − 2x) dx = 2x³/3 − x²</span></li>
<li>عوّض بالحد اللي فوق (2): <span class="f">16/3 − 4 = 4/3</span>، وبالحد اللي تحت (1): <span class="f">2/3 − 1 = −1/3</span></li>
<li>اطرح: <span class="f">μ = 4/3 − (−1/3) = 5/3 ≈ 1.667</span></li>
<li><b>E(X²):</b> <span class="f">x² · 2(x − 1) = 2x³ − 2x²</span> ← التكامل <span class="f">x⁴/2 − 2x³/3</span></li>
<li>عند 2: <span class="f">8 − 16/3 = 8/3</span>، عند 1: <span class="f">1/2 − 2/3 = −1/6</span> ← <span class="f">E(X²) = 8/3 + 1/6 = 17/6</span></li>
<li><b>التباين:</b> <span class="f">σ² = 17/6 − (5/3)² = 17/6 − 25/9</span>. وحّد المقامات على 18: <span class="f">51/18 − 50/18 = 1/18 ≈ 0.0556</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">μ = 5/3</span> ، <span class="f">σ² = 1/18</span></div>
<div class="box warn">⚠️ أشهر غلطة: تنسى تضرب في x قبل التكامل، فتكامل f(x) لوحدها وتطلع 1.</div>
</div>

<div class="ex"><div class="ex-title">مثال: Uniform f(x) = 1/10 , 0 &lt; x &lt; 10</div>
<div class="ex-q"><b>📝 Question</b>Let X be a continuous random variable with the uniform pdf f(x) = 1/10 for 0 &lt; x &lt; 10; 0 elsewhere. Find P(X &lt; 6) and E(X).</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>f(x) = 1/10 for 0 &lt; x &lt; 10</td><td><span class="f">a = 0 , b = 10</span></td><td>مستطيل ارتفاعه 1/10</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>P(X &lt; 6)</td><td><span class="f">(6 − 0) × 1/10</span></td><td>طول × ارتفاع</td></tr><tr><td>E(X)</td><td><span class="f">(a + b)/2</span></td><td>نص المسافة</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> الـ Uniform شكله مستطيل ارتفاعه <span class="f">1/10</span> على الفترة من 0 لـ 10. الاحتمال = مساحة = العرض × الارتفاع.</p>
<ol class="steps">
<li><span class="f">P(X &lt; 6)</span> = المستطيل من 0 لـ 6: العرض <span class="f">6 − 0 = 6</span>، والارتفاع <span class="f">1/10</span></li>
<li><span class="f">P(X &lt; 6) = 6 × 1/10 = 0.6</span> (ولو حبيت بالتكامل: <span class="f">∫₀⁶ 1/10 dx = 6/10</span>)</li>
<li>المتوسط = نص الفترة بالظبط: <span class="f">E(X) = (0 + 10)/2 = 5</span> (بالتكامل: <span class="f">∫₀¹⁰ x/10 dx = [x²/20]₀¹⁰ = 5</span>)</li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">P(X &lt; 6) = 0.6</span> ، <span class="f">E(X) = 5</span></div>
<div class="box tip">في الـ uniform (مستطيل) الاحتمال = طول الفترة × الارتفاع. مش محتاج تكامل!</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
<span class="f">f(x) = 1/20 , 0 &lt; x &lt; 20</span>. احسب <span class="f">P(5 &lt; X &lt; 15)</span> و <span class="f">E(X)</span>.
<details><summary>اعرض الحل</summary><div>
<span class="f">(15 − 5) × 1/20 = 0.5</span> ، و <span class="f">E(X)</span> = نص الفترة = <span class="f">10</span>.</div></details></div>

<h2>2) التوزيع الطبيعي (Normal Distribution) ← 🔥 مضمون في الامتحان</h2>
<div class="box kid"><b>🧒 الفكرة</b>
حاجات كتير في الدنيا (الأطوال، الأوزان، الدرجات) شكلها زي <b>الجرس</b>: معظم الناس قريبين من المتوسط، وقليلين جدًا في الأطراف.
<br>الجرس ده بيتحدد برقمين: <b>μ</b> (المتوسط = نص الجرس) و <b>σ</b> (الانحراف = عرض الجرس).</div>

<svg viewBox="0 0 440 170" style="max-width:440px;width:100%;display:block;margin:10px auto;direction:ltr" role="img" aria-label="Normal curve">
  <path d="M10,150 C90,150 140,145 170,110 C195,75 205,25 220,25 C235,25 245,75 270,110 C300,145 350,150 430,150" fill="#3b5bdb" fill-opacity=".15" stroke="#3b5bdb" stroke-width="2.5"/>
  <line x1="10" y1="150" x2="430" y2="150" stroke="currentColor" opacity=".5"/>
  <line x1="220" y1="25" x2="220" y2="150" stroke="currentColor" stroke-dasharray="4 4" opacity=".6"/>
  <text text-anchor="end" x="212" y="166" fill="currentColor" font-size="13">μ</text>
  <text text-anchor="end" x="150" y="166" fill="currentColor" font-size="12">μ−σ</text>
  <text text-anchor="end" x="268" y="166" fill="currentColor" font-size="12">μ+σ</text>
  <text text-anchor="end" x="120" y="70" fill="currentColor" font-size="12">50%</text>
  <text text-anchor="end" x="290" y="70" fill="currentColor" font-size="12">50%</text>
</svg>

<div class="box def"><b>📖 خصائص المنحنى</b>
<ul>
<li>متماثل (symmetric) حوالين μ ← <span class="f">P(X &lt; μ) = P(X &gt; μ) = 0.5</span></li>
<li>أعلى نقطة عند μ. والمساحة الكلية = 1.</li>
<li>بنكتب <span class="f">X ~ N(μ, σ)</span>. خلي بالك: لو قالك variance = 25 يبقى σ = 5!</li>
</ul></div>

<h3>Standard Normal Z</h3>
<div class="box law"><b>📐 السر كله في التحويل ده:</b>
<div class="fm">Z = <span class="frac"><span>X − μ</span><span>σ</span></span> &nbsp; ~ &nbsp; N(0, 1)</div>
Z بيقولك "X بعيد عن المتوسط كام σ". وجدول Z بيديك <span class="f">P(Z &lt; z)</span> = المساحة على <b>الشمال</b>.
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
درجات امتحان: μ = 60 و σ = 8. حوّل الدرجات دي لـ Z: (1) 72 (2) 52 (3) 60
<details><summary>اعرض الحل</summary><div>
1) <span class="f">(72 − 60)/8 = 1.5</span> ← فوق المتوسط بـ 1.5 σ<br>
2) <span class="f">(52 − 60)/8 = −1</span> ← تحت المتوسط بـ σ واحدة<br>
3) <span class="f">0</span> ← عند المتوسط بالظبط</div></details></div>

<div class="box law"><b>📐 التلات حالات (احفظهم)</b>
<div class="fm mix"><span class="f">P(X &lt; a) = P(Z &lt; <span class="frac"><span>a−μ</span><span>σ</span></span>)</span> ← من الجدول مباشرة</div>
<div class="fm">P(X &gt; a) = 1 − P(Z &lt; <span class="frac"><span>a−μ</span><span>σ</span></span>)</div>
<div class="fm">P(a &lt; X &lt; b) = P(Z &lt; z<sub>b</sub>) − P(Z &lt; z<sub>a</sub>)</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (μ = 100 , σ = 10)</div>
استخدم: <span class="f">P(Z&lt;1) = 0.8413 , P(Z&lt;−1) = 0.1587 , P(Z&lt;2) = 0.9772 , P(Z&lt;−2) = 0.0228</span>
<ol><li><span class="f">P(X &lt; 110)</span></li><li><span class="f">P(X &gt; 80)</span></li><li><span class="f">P(90 &lt; X &lt; 120)</span></li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">z = 1 → 0.8413</span><br>
2) <span class="f">z = −2 → 1 − 0.0228 = 0.9772</span><br>
3) <span class="f">z = −1</span> و <span class="f">2</span> ← <span class="f">0.9772 − 0.1587 = 0.8185</span></div></details></div>

<div class="ex"><div class="ex-title">⭐⭐ الـ Piston ring (جه في ميد 2022 و 2023 بالحرف!)</div>
<div class="ex-q"><b>📝 Question</b>The finished inside diameter of a piston ring is normally distributed with a mean of 12 centimetres and a standard deviation of 0.03 centimetre. Then, the probability that a piston ring will have an inside diameter between 11.95 and 12.05 centimetres is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>normally distributed</td><td><span class="f">X ~ N(μ, σ²)</span></td><td></td></tr><tr><td>a mean of 12</td><td><span class="f">μ = 12</span></td><td></td></tr><tr><td>a standard deviation of 0.03</td><td><span class="f">σ = 0.03</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>between 11.95 and 12.05</td><td><span class="f">P(11.95 &lt; X &lt; 12.05)</span></td><td>حوّل كل حد لـ Z</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
μ = 12 ، σ = 0.03. احتمال القطر بين 11.95 و 12.05؟
<ol class="steps">
<li><span class="f">z<sub>1</sub> = (11.95 − 12)/0.03 = −1.67</span> ، <span class="f">z<sub>2</sub> = (12.05 − 12)/0.03 = 1.67</span></li>
<li>المطلوب بقى <span class="f">P(−1.67 &lt; Z &lt; 1.67)</span>، يعني المساحة تحت المنحنى بين −1.67 و 1.67.</li>
<li>جدول Z بيديك المساحة <b>اللي على شمال</b> الرقم بس. فالمساحة اللي في النص = (اللي على شمال 1.67) − (اللي على شمال −1.67): <span class="f">P(Z &lt; 1.67) − P(Z &lt; −1.67)</span></li>
<li>ارسم الجرس وظلّل النص:<span data-bell="-1.67,1.67" data-area="0.905"></span></li>
<li>من الجدول: صف <span class="f">1.6</span> وعمود <span class="f">0.07</span>:<span data-zlook="1.67"></span></li>
<li>وشمال −1.67:<span data-zlook="-1.67"></span></li>
<li>و <span class="f">P(Z &lt; −1.67)</span> يا إما من الجدول السالب على طول، يا إما بالتماثل: <span class="f">1 − 0.9525 = 0.0475</span> (الطرف الشمال قد الطرف اليمين بالظبط)</li>
<li><span class="f">0.9525 − 0.0475 = 0.905</span> ✅</li>
<li>اختصار للفترات المتماثلة <span class="f">±z</span>: <span class="f">P(−z &lt; Z &lt; z) = 2P(Z &lt; z) − 1 = 2(0.9525) − 1 = 0.905</span></li>
</ol>
<div class="box tip">الفخاخ في الاختيارات: 0.0475 (الطرف الشمال بس)، 0.9525 (نسيت تطرح)، 0.4514.<br>لو حسبتها على الآلة هتطلع 0.9044، لأن z الحقيقي 1.666… مش 1.67. اختار 0.905 لأنها الأقرب وهي اللي بالجدول.</div>
</div>

<div class="ex"><div class="ex-title">⭐⭐ الموتور (ميد 2023/24 — 4 درجات)</div>
<div class="ex-q"><b>📝 Question</b>The life of a certain type of small motor is normally distributed with mean equals 10 years and standard deviation of 2 years.<br>(a) The probability that the life of this type of motor will be at least 12 years.<br>(b) The probability that the life of this type of motor will be between 9 and 14 years.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>mean equals 10 years</td><td><span class="f">μ = 10</span></td><td></td></tr><tr><td>standard deviation of 2 years</td><td><span class="f">σ = 2</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) at least 12 years</td><td><span class="f">P(X ≥ 12)</span></td><td>at least = ≥</td></tr><tr><td>(b) between 9 and 14</td><td><span class="f">P(9 &lt; X &lt; 14)</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> Normal: <span class="f">μ = 10</span> ، <span class="f">σ = 2</span>. نحوّل لـ Z ونقرا الجدول.</p>
<div class="how"><b>📋 إزاي تحل أي سؤال Normal (نفس الخطوات كل مرة)</b><ol><li>اكتب <span class="f">μ</span> و <span class="f">σ</span> من السؤال.</li><li>حوّل كل رقم لـ Z بالقانون <span class="f">z = (x − μ) / σ</span> وقرّبه لرقمين بعد العلامة.</li><li>ارسم الجرس وظلّل المنطقة المطلوبة: أقل من ← شمال، أكتر من ← يمين، بين ← النص.</li><li>الجدول بيديك المساحة اللي على <b>شمال</b> z بس. فلو المنطقة يمين: 1 − (رقم الجدول). ولو في النص: (رقم الجدول لـ z₂) − (رقم الجدول لـ z₁).</li><li>تقرا الجدول كده: السطر = الرقم والعُشر (1.6)، والعمود = الرقم التاني بعد العلامة (0.07).</li></ol></div>
<p><b>(a) at least 12 يعني <span class="f">X ≥ 12</span> (يمين 12):</b></p><ol class="steps">
<li><span class="f">z = (12 − 10)/2 = 1</span></li>
<li>المنطقة على <b>يمين</b> 1:<span data-bell="1,inf" data-area="0.1587"></span></li>
<li>من الجدول: <span data-zlook="1"></span></li>
<li>الجدول بيدي الشمال، فاليمين = <span class="f">1 − 0.8413 = 0.1587</span></li>
</ol>
<p><b>(b) بين 9 و 14:</b></p><ol class="steps">
<li><span class="f">z₁ = (9 − 10)/2 = −0.5</span> ، <span class="f">z₂ = (14 − 10)/2 = 2</span></li>
<li>المنطقة في النص:<span data-bell="-0.5,2" data-area="0.6687"></span></li>
<li>شمال 2: <span data-zlook="2"></span></li>
<li>شمال −0.5: <span data-zlook="-0.5"></span></li>
<li>النص = الشمال الكبير − الشمال الصغير: <span class="f">0.9772 − 0.3085 = 0.6687</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> (a) <span class="f">0.1587</span> ، (b) <span class="f">0.6687</span></div>
</div>

<div class="ex"><div class="ex-title">⭐ اللمبة (ميد 2023 – جزء 1)</div>
<div class="ex-q"><b>📝 Question</b>The random variable X, representing the lifespan of a certain light bulb, is distributed normally with a mean of 400 hours and a standard deviation of 10 hours. What is the probability that a particular light bulb will last for more than 380 hours?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a mean of 400 hours</td><td><span class="f">μ = 400</span></td><td></td></tr><tr><td>a standard deviation of 10 hours</td><td><span class="f">σ = 10</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>more than 380 hours</td><td><span class="f">P(X &gt; 380)</span></td><td>more than = &gt;</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> <span class="f">μ = 400</span> ، <span class="f">σ = 10</span>. "more than 380" يعني <span class="f">X &gt; 380</span> ← يمين.</p>
<div class="how"><b>📋 إزاي تحل أي سؤال Normal (نفس الخطوات كل مرة)</b><ol><li>اكتب <span class="f">μ</span> و <span class="f">σ</span> من السؤال.</li><li>حوّل كل رقم لـ Z بالقانون <span class="f">z = (x − μ) / σ</span> وقرّبه لرقمين بعد العلامة.</li><li>ارسم الجرس وظلّل المنطقة المطلوبة: أقل من ← شمال، أكتر من ← يمين، بين ← النص.</li><li>الجدول بيديك المساحة اللي على <b>شمال</b> z بس. فلو المنطقة يمين: 1 − (رقم الجدول). ولو في النص: (رقم الجدول لـ z₂) − (رقم الجدول لـ z₁).</li><li>تقرا الجدول كده: السطر = الرقم والعُشر (1.6)، والعمود = الرقم التاني بعد العلامة (0.07).</li></ol></div>
<ol class="steps">
<li><span class="f">z = (380 − 400)/10 = −20/10 = −2</span></li>
<li>المنطقة على يمين −2 (تقريبًا كل الجرس):<span data-bell="-2,inf" data-area="0.9772"></span></li>
<li>من الجدول: <span data-zlook="-2"></span></li>
<li>اليمين = <span class="f">1 − 0.0228 = 0.9772</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">P(X &gt; 380) = 0.9772</span></div>
<div class="box tip">منطقي: 380 أقل من المتوسط بكتير، فأغلب اللمبات هتعيش أكتر منها، والاحتمال لازم يطلع كبير.</div>
</div>

<div class="ex"><div class="ex-title">مثال المحاضرة: أوزان المواليد</div>
<div class="ex-q"><b>📝 Question</b>Suppose that the birth weight of babies has a normal distribution with mean μ = 3.4 and standard deviation σ = 0.35.<br>(a) Find the probability that a randomly chosen baby has a birth weight between 3.0 and 4.0 kg.<br>(b) What is the percentage of babies who have a birth weight between 3.0 and 4.0 kg?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>μ = 3.4</td><td><span class="f">μ = 3.4</span></td><td></td></tr><tr><td>σ = 0.35</td><td><span class="f">σ = 0.35</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) between 3.0 and 4.0 kg</td><td><span class="f">P(3 &lt; X &lt; 4)</span></td><td></td></tr><tr><td>(b) percentage</td><td><span class="f">P × 100%</span></td><td>نفس الرقم كنسبة</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> <span class="f">μ = 3.4</span> ، <span class="f">σ = 0.35</span>. "between" ← المنطقة في النص.</p>
<div class="how"><b>📋 إزاي تحل أي سؤال Normal (نفس الخطوات كل مرة)</b><ol><li>اكتب <span class="f">μ</span> و <span class="f">σ</span> من السؤال.</li><li>حوّل كل رقم لـ Z بالقانون <span class="f">z = (x − μ) / σ</span> وقرّبه لرقمين بعد العلامة.</li><li>ارسم الجرس وظلّل المنطقة المطلوبة: أقل من ← شمال، أكتر من ← يمين، بين ← النص.</li><li>الجدول بيديك المساحة اللي على <b>شمال</b> z بس. فلو المنطقة يمين: 1 − (رقم الجدول). ولو في النص: (رقم الجدول لـ z₂) − (رقم الجدول لـ z₁).</li><li>تقرا الجدول كده: السطر = الرقم والعُشر (1.6)، والعمود = الرقم التاني بعد العلامة (0.07).</li></ol></div>
<ol class="steps">
<li><span class="f">z₁ = (3.0 − 3.4)/0.35 = −0.4/0.35 = −1.142… ≈ −1.14</span></li>
<li><span class="f">z₂ = (4.0 − 3.4)/0.35 = 0.6/0.35 = 1.714… ≈ 1.71</span></li>
<li><span data-bell="-1.14,1.71" data-area="0.8293"></span></li>
<li>شمال 1.71: <span data-zlook="1.71"></span></li>
<li>شمال −1.14: <span data-zlook="-1.14"></span></li>
<li><span class="f">P = 0.9564 − 0.1271 = 0.8293</span></li>
<li>(b) النسبة المئوية = الاحتمال × 100 = <b>82.93%</b></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> (a) <span class="f">0.8293</span> ، (b) <span class="f">82.93%</span></div>
</div>

<h3>العكس: عندك الاحتمال وعايز القيمة</h3>
<div class="ex"><div class="ex-title">مثال</div>
<div class="ex-q"><b>📝 Question</b>(1) Suppose Z ~ N(0, 1). Find the value of k such that P(Z &lt; k) = 0.0207.<br>(2) Exam scores are normally distributed with mean μ = 70 and standard deviation σ = 5. If 33% of the students failed, what is the passing score?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>(1) P(Z &lt; k) = 0.0207</td><td><span class="f">مساحة على الشمال</span></td><td>نقرأ الجدول بالعكس</td></tr><tr><td>(2) mean μ = 70, σ = 5</td><td><span class="f">μ = 70 , σ = 5</span></td><td></td></tr><tr><td>33% of the students failed</td><td><span class="f">P(X &lt; x) = 0.33</span></td><td>الراسبين تحت درجة النجاح</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>k</td><td><span class="f">z من جوه الجدول</span></td><td></td></tr><tr><td>the passing score</td><td><span class="f">x = μ + zσ</span></td><td>z اللي مساحته 0.33</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<ul>
<li><span class="f">P(Z &lt; k) = 0.0207</span> ← دوّر جوه الجدول على 0.0207 → <span class="f">k = −2.04</span></li>
<li>درجات μ = 70 ، σ = 5، و 33% سقطوا. درجة النجاح؟ <span class="f">P(Z &lt; z) = 0.33 → z ≈ −0.44</span> ← <span class="f">x = μ + zσ = 70 − 2.2 = 67.8</span></li>
</ul>
<div class="fm">x = μ + z · σ</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
μ = 50 و σ = 4. إيه قيمة x اللي <span class="f">P(X &lt; x) = 0.9772</span>؟
<details><summary>اعرض الحل</summary><div>
من الجدول: 0.9772 ← <span class="f">z = 2</span> ← <span class="f">x = 50 + 2(4) = 58</span></div></details></div>

<div class="box warn"><b>⚠️ غلطات شائعة</b>
<ul>
<li>تقسم على σ² بدل σ. (لو مدّيك variance خد الجذر الأول!)</li>
<li>تنسى "1 −" في حالة "أكبر من / at least / more than".</li>
<li>الجدول دايمًا <b>شمال</b>. <span class="f">P(Z &gt; −2) = 1 − 0.0228</span>.</li>
</ul></div>

<div class="box exam"><b>🎓 الدكتور بيسأل فيها إزاي؟</b>
<ul>
<li><b>أوجد k</b> في pdf زي kx. (كل امتحان — سؤال سهل مضمون)</li>
<li><b>Normal بين رقمين</b> (piston ring / الموتور). وبيديك قيم الجدول تحت الورقة.</li>
<li><b>Normal أكبر من رقم</b> (at least / more than).</li>
<li>أحيانًا <span class="f">P(1 ≤ X &lt; 2)</span> لـ pdf بعد ما تجيب k.</li>
</ul></div>
`
});

/* ===================== LECTURE 5 ===================== */
window.LECTURES.push({
  id: 'lec5', n: 5, focus: 'hot',
  short: 'توزيعات المعاينة',
  title: 'توزيعات المعاينة: المتوسط، توزيع t، والنسبة',
  en: 'Sampling Distributions: Sample Mean, CLT, t-distribution, Sample Proportion',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
عايز تعرف متوسط طول كل طلاب الجامعة (<b>Population</b>). مستحيل تقيس الكل، فبتاخد 20 طالب بس (<b>Sample</b>) وتحسب متوسطهم.
<br>السؤال: متوسط العينة ده بيتصرف إزاي؟ لو أخدت عينات كتير، متوسطاتها هتتوزع إزاي؟ ده هو <b>sampling distribution</b>.</div>

<h2>1) Population vs Sample</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Population (المجتمع)</th><th>Sample (العينة)</th></tr>
<tr><td>الحجم</td><td>N</td><td>n</td></tr>
<tr><td>المتوسط</td><td>μ (parameter – مجهول)</td><td>x̄ (statistic – بنحسبه)</td></tr>
<tr><td>الانحراف</td><td>σ</td><td>S</td></tr>
<tr><td>النسبة</td><td>p</td><td>p̂</td></tr>
</table></div>
<div class="box def"><b>Statistic</b> = أي حاجة بتتحسب من العينة. <b>Parameter</b> = حاجة في المجتمع (عادة مش معروفة).</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك: parameter ولا statistic؟</div>
<ol><li>متوسط دخل كل الأسر في مصر.</li><li>متوسط درجات 40 طالب اخترتهم من الكلية.</li><li>نسبة المدخنين بين 200 شخص سألتهم.</li></ol>
<details><summary>اعرض الحل</summary><div>
1) Parameter (μ)، لأنه بيتكلم على المجتمع كله.<br>
2) Statistic (x̄)، لأنه من عينة.<br>
3) Statistic (p̂)، لأنه من عينة.</div></details></div>

<h2>2) حساب متوسط وتباين العينة</h2>
<div class="box law">
<div class="fm">x̄ = <span class="frac"><span>Σ x<sub>i</sub></span><span>n</span></span> &nbsp;&nbsp;&nbsp;&nbsp; S² = <span class="frac"><span>Σ (x<sub>i</sub> − x̄)²</span><span>n − 1</span></span> = <span class="frac"><span>Σ x<sub>i</sub>² − n x̄²</span><span>n − 1</span></span></div>
⚠️ القسمة على <b>n − 1</b> مش n.
</div>
<div class="ex"><div class="ex-title">مثال المحاضرة: الأعمار 10، 21، 33، 53، 54</div>
<div class="ex-q"><b>📝 Question</b>Compute the sample variance and standard deviation of the following observations (ages in years): 10, 21, 33, 53, 54.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>10, 21, 33, 53, 54</td><td><span class="f">n = 5 , Σx = 171</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>sample variance</td><td><span class="f">S² = Σ(x − x̄)² / (n − 1)</span></td><td>العينة ← n − 1</td></tr><tr><td>standard deviation</td><td><span class="f">S = √S²</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> التباين بتاع <b>عينة</b> بنقسم فيه على <span class="f">n − 1</span> مش n. أسهل طريقة: جدول فيه الانحرافات ومربعاتها.</p>
<div class="how"><b>📋 ارسم الجدول كده</b><ol><li>عمود للقيم x.</li><li>احسب <span class="f">x̄</span> الأول، وبعدين عمود <span class="f">x − x̄</span> (لازم مجموعه يطلع 0، ده بيتأكدلك إنك صح).</li><li>عمود <span class="f">(x − x̄)²</span>، واجمعه في الآخر.</li></ol></div>
<ol class="steps">
<li><span class="f">x̄ = (10 + 21 + 33 + 53 + 54)/5 = 171/5 = 34.2</span></li>
<li><div class="table-wrap"><table><tr><th>x</th><th>x − x̄</th><th>(x − x̄)²</th></tr><tr><th>10</th><td>−24.2</td><td>585.64</td></tr><tr><th>21</th><td>−13.2</td><td>174.24</td></tr><tr><th>33</th><td>−1.2</td><td>1.44</td></tr><tr><th>53</th><td>18.8</td><td>353.44</td></tr><tr><th>54</th><td>19.8</td><td>392.04</td></tr><tr><th>المجموع</th><td>0 ✓</td><td><b>1506.8</b></td></tr></table></div>
</li>
<li><span class="f">S² = 1506.8 / (5 − 1) = 1506.8 / 4 = 376.7</span></li>
<li><span class="f">S = √376.7 = 19.41</span></li>
<li>أو بالقانون المختصر: <span class="f">Σx² = 7355</span> ← <span class="f">S² = (7355 − 5 × 34.2²)/4 = (7355 − 5848.2)/4 = 376.7</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">S² = 376.7</span> ، <span class="f">S = 19.41</span></div>
<div class="box tip">على الآلة: MODE → STAT → <bdi>1-Variable</bdi>، دخّل الأرقام، وهات x̄ و s<sub>x</sub> (مش σ<sub>x</sub>).</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
العينة: 3، 5، 7. احسب <span class="f">x̄</span> و <span class="f">S²</span> و <span class="f">S</span>.
<details><summary>اعرض الحل</summary><div>
<span class="f">x̄ = 15/3 = 5</span> ← الانحرافات: −2، 0، 2 ← مربعاتها 4 + 0 + 4 = 8<br>
<span class="f">S² = 8/(3−1) = 4</span> ، <span class="f">S = 2</span></div></details></div>

<h2>3) توزيع متوسط العينة x̄</h2>
<div class="box law"><b>📐 أهم نتيجة</b>
<div class="fm">E(x̄) = μ &nbsp;&nbsp;&nbsp;&nbsp; Var(x̄) = <span class="frac"><span>σ²</span><span>n</span></span> &nbsp;&nbsp;&nbsp;&nbsp; σ<sub>x̄</sub> = <span class="frac"><span>σ</span><span>√n</span></span></div>
<div class="fm">Z = <span class="frac"><span>x̄ − μ</span><span>σ / √n</span></span> ~ N(0, 1)</div>
</div>
<div class="box kid"><b>🧒 ليه بنقسم على √n؟</b> متوسط مجموعة أقل "تطرفًا" من فرد واحد. كل ما العينة تكبر، متوسطها بيبقى أقرب لـ μ وأقل تفرق.</div>
<div class="box def"><b>Central Limit Theorem (CLT):</b> حتى لو المجتمع مش normal، لو <b>n ≥ 30</b> فـ x̄ هيبقى تقريبًا normal.</div>

<div class="ex"><div class="ex-title">⭐⭐ اللمبة (ميد 2023 – جزء 2)</div>
<div class="ex-q"><b>📝 Question</b>The random variable X, representing the lifespan of a certain light bulb, is distributed normally with a mean of 400 hours and a standard deviation of 10 hours. If 9 light bulbs are selected randomly, find the probability that their average lifespan will be less than 405.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a mean of 400 hours</td><td><span class="f">μ = 400</span></td><td></td></tr><tr><td>a standard deviation of 10 hours</td><td><span class="f">σ = 10</span></td><td></td></tr><tr><td>9 light bulbs</td><td><span class="f">n = 9</span></td><td>ده سؤال على المتوسط x̄</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>average lifespan … less than 405</td><td><span class="f">P(x̄ &lt; 405)</span></td><td>σ<sub>x̄</sub> = σ/√n</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> السؤال عن <b>متوسط</b> 9 لمبات، مش لمبة واحدة. يبقى نستخدم <span class="f">σ<sub>x̄</sub> = σ/√n</span> بدل σ.</p>
<ol class="steps">
<li>المعطيات: <span class="f">μ = 400</span> ، <span class="f">σ = 10</span> ، <span class="f">n = 9</span>، والمطلوب <span class="f">P(x̄ &lt; 405)</span></li>
<li>الخطأ المعياري: <span class="f">σ<sub>x̄</sub> = 10/√9 = 10/3 = 3.333</span></li>
<li><span class="f">z = (405 − 400)/3.333 = 5/3.333 = 1.5</span></li>
<li>"less than" ← شمال 1.5:<span data-bell="-inf,1.5" data-area="0.9332"></span></li>
<li>من الجدول على طول (شمال): <span data-zlook="1.5"></span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">P(x̄ &lt; 405) = 0.9332</span></div>
<div class="box warn">⚠️ لو السؤال عن <b>لمبة واحدة</b> → استخدم σ. لو عن <b>متوسط n لمبة</b> (average / mean of sample) → استخدم σ/√n.</div>
</div>

<div class="ex"><div class="ex-title">مثال المحاضرة</div>
<div class="ex-q"><b>📝 Question</b>An electric firm manufactures light bulbs that have a length of life that is approximately normally distributed with mean equal to 800 hours and a standard deviation of 40 hours. Find the probability that a random sample of 16 bulbs will have an average life of less than 775 hours.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>mean equal to 800 hours</td><td><span class="f">μ = 800</span></td><td></td></tr><tr><td>standard deviation of 40 hours</td><td><span class="f">σ = 40</span></td><td></td></tr><tr><td>a random sample of 16 bulbs</td><td><span class="f">n = 16</span></td><td>σ<sub>x̄</sub> = 40/4 = 10</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>an average life of less than 775</td><td><span class="f">P(x̄ &lt; 775)</span></td><td>average ← x̄ مش X</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> "average life of a sample of 16" ← متوسط عينة ← <span class="f">σ/√n</span>.</p>
<ol class="steps">
<li>المعطيات: <span class="f">μ = 800</span> ، <span class="f">σ = 40</span> ، <span class="f">n = 16</span></li>
<li><span class="f">σ<sub>x̄</sub> = 40/√16 = 40/4 = 10</span></li>
<li><span class="f">z = (775 − 800)/10 = −25/10 = −2.5</span></li>
<li>"less than" ← شمال −2.5 (حتة صغيرة جدًا):<span data-bell="-inf,-2.5"></span></li>
<li>من الجدول: <span data-zlook="-2.5"></span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">P(x̄ &lt; 775) = 0.0062</span></div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك: واحد ولا متوسط؟</div>
وزن علبة: μ = 50 و σ = 6. استخدم: <span class="f">P(Z&lt;0.5) = 0.6915 , P(Z&lt;3) = 0.9987</span>
<ol><li>احتمال علبة <b>واحدة</b> وزنها أقل من 53؟</li><li>احتمال <b>متوسط</b> 36 علبة أقل من 53؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) واحدة ← σ: <span class="f">z = 3/6 = 0.5 → 0.6915</span><br>
2) متوسط ← σ/√n = 6/6 = 1: <span class="f">z = 3/1 = 3 → 0.9987</span><br>
لاحظ إن المتوسط أكثر استقرارًا، عشان كده الاحتمال أعلى.</div></details></div>

<h2>4) توزيع t</h2>
<div class="box kid"><b>🧒 الفكرة</b> لو <b>σ مش معروفة</b> والعينة صغيرة، بنستخدم S بدلها، وبدل Z بنستخدم <b>T</b>. شكلها زي الجرس بس أطرافها أتخن شوية.</div>
<div class="box law">
<div class="fm">T = <span class="frac"><span>x̄ − μ</span><span>S / √n</span></span> ~ t(ν) &nbsp;&nbsp;&nbsp; ν = n − 1 (degrees of freedom)</div>
<span class="f">t<sub>α</sub></span> = القيمة اللي على <b>يمينها</b> مساحة α. ومتماثلة: <span class="f">t<sub>1−α</sub> = −t<sub>α</sub></span>.
</div>
<div class="ex"><div class="ex-title">مثال: ν = 14</div>
<div class="ex-q"><b>📝 Question</b>(1) Find the t-value with ν = 14 (df) that leaves an area of: (a) 0.95 to the left, (b) 0.95 to the right.<br>(2) For ν = 10 degrees of freedom (df), find t<sub>0.10</sub> and t<sub>0.85</sub>.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>ν = 14 (df)</td><td><span class="f">صف 14 في جدول t</span></td><td></td></tr><tr><td>0.95 to the left</td><td><span class="f">مساحة اليمين = 0.05</span></td><td>الجدول بيدي مساحة اليمين</td></tr><tr><td>0.95 to the right</td><td><span class="f">−t<sub>0.05</sub></span></td><td>نفس الرقم بالسالب</td></tr><tr><td>ν = 10</td><td><span class="f">صف 10</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>t<sub>0.10</sub> , t<sub>0.85</sub></td><td><span class="f">t<sub>0.85</sub> = −t<sub>0.15</sub></span></td><td>أكبر من 0.5 ← سالب</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> جدول t بيديك القيمة اللي على <b>يمينها</b> مساحة α (عكس جدول Z). السطر = <span class="f">ν = n − 1</span>، والعمود = α.</p>
<div class="how"><b>📋 إزاي تقرا جدول t</b><ol><li>حوّل المطلوب لـ "مساحة على اليمين".</li><li>لو المساحة على اليمين أصغر من 0.5 ← القيمة موجبة، وتقراها على طول.</li><li>لو أكبر من 0.5 ← القيمة سالبة: <span class="f">t<sub>1−α</sub> = −t<sub>α</sub></span> (الجرس متماثل).</li></ol></div>
<ol class="steps">
<li><b>(1a)</b> 0.95 على الشمال ← على اليمين <span class="f">1 − 0.95 = 0.05</span> ← سطر 14 عمود 0.05:<span data-tlook="14,0.05"></span><span class="f">t<sub>0.05</sub> = 1.761</span></li>
<li><b>(1b)</b> 0.95 على اليمين ← أكبر من النص ← سالبة: <span class="f">t<sub>0.95</sub> = −t<sub>0.05</sub> = −1.761</span></li>
<li><b>(2)</b> ν = 10: <span class="f">t<sub>0.10</sub></span> سطر 10 عمود 0.10:<span data-tlook="10,0.1"></span><span class="f">= 1.372</span></li>
<li><span class="f">t<sub>0.85</sub> = −t<sub>0.15</sub> = −1.093</span> (عمود 0.15 موجود في جدول الدكتور)</li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">1.761</span> ، <span class="f">−1.761</span> ، <span class="f">1.372</span> ، <span class="f">−1.093</span></div>
</div>
<div class="box tip"><b>Z ولا t؟</b> σ معروفة → Z. σ مش معروفة (عندك S بس) والمجتمع normal → t.</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (افتح <a href="#ztable">جدول t</a>)</div>
ν = 9. أوجد: (1) <span class="f">t<sub>0.025</sub></span> (2) قيمة t اللي على يمينها مساحة 0.99.
<details><summary>اعرض الحل</summary><div>
1) سطر 9 عمود 0.025 ← <span class="f">2.262</span><br>
2) <span class="f">t<sub>0.99</sub> = −t<sub>0.01</sub> = −2.821</span></div></details></div>

<h2>5) توزيع نسبة العينة p̂ ← 🔥 جه 5 درجات في ميدين</h2>
<div class="box kid"><b>🧒 الفكرة</b> p = نسبة حاجة معينة في المجتمع (مثلًا 45% عندهم صفة). خدت عينة n، و p̂ = نسبتها في العينة. p̂ بيتغير من عينة لعينة.</div>
<div class="box law">
<div class="fm">p̂ = <span class="frac"><span>X</span><span>n</span></span> &nbsp;&nbsp;&nbsp; E(p̂) = p &nbsp;&nbsp;&nbsp; Var(p̂) = <span class="frac"><span>p q</span><span>n</span></span> &nbsp;&nbsp; (q = 1 − p)</div>
<div class="fm mix"><span class="f">Z = <span class="frac"><span>p̂ − p</span><span><span class="sqrt">pq/n</span></span></span> ~ N(0,1)</span> تقريبًا</div>
</div>

<div class="ex"><div class="ex-title">⭐⭐⭐ السؤال التاني في ميد 2022 و 2023 (نفسه بالظبط!)</div>
<div class="ex-q"><b>📝 Question</b>It is known that the true proportion of units in a very large population that have a particular characteristic is 0.45. A simple random sample of size n = 500 is to be selected from this population.<br>1. What is the mean of sample proportion E(p̂)?<br>2. What is the variance of sample proportion Var(p̂)?<br>3. What is the probability that the sample proportion p̂ will be within ±3 percentage points of the true p, i.e., P(0.42 ≤ p̂ ≤ 0.48)?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>true proportion … is 0.45</td><td><span class="f">p = 0.45 , q = 0.55</span></td><td>نسبة المجتمع</td></tr><tr><td>sample of size n = 500</td><td><span class="f">n = 500</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>1. E(p̂)</td><td><span class="f">p</span></td><td></td></tr><tr><td>2. Var(p̂)</td><td><span class="f">pq / n</span></td><td></td></tr><tr><td>3. within ±3 percentage points</td><td><span class="f">P(0.42 ≤ p̂ ≤ 0.48)</span></td><td>0.45 ± 0.03</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
p = 0.45 ، n = 500
<ol class="steps">
<li><span class="f">E(p̂) = p = 0.45</span> ✅</li>
<li><span class="f">Var(p̂) = (0.45)(0.55)/500 = 0.000495</span> ✅</li>
<li>الانحراف: <span class="f">√0.000495 = 0.02225</span></li>
<li><span class="f">P(0.42 ≤ p̂ ≤ 0.48) = P(−0.03/0.02225 ≤ Z ≤ 0.03/0.02225) = P(−1.35 ≤ Z ≤ 1.35)</span></li>
<li><span class="f">= 0.9115 − 0.0885 = 0.823</span> ✅</li>
</ol>
<div class="box tip">"within ±3 percentage points" يعني <span class="f">p ± 0.03</span>.</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
p = 0.2 و n = 100. احسب <span class="f">E(p̂)</span> و <span class="f">Var(p̂)</span> و <span class="f">P(p̂ &gt; 0.28)</span>. (<span class="f">P(Z&lt;2) = 0.9772</span>)
<details><summary>اعرض الحل</summary><div>
<span class="f">E(p̂) = 0.2</span> ، <span class="f">Var = 0.2×0.8/100 = 0.0016</span> ← <span class="f">σ = 0.04</span><br>
<span class="f">z = (0.28 − 0.2)/0.04 = 2 → 1 − 0.9772 = 0.0228</span></div></details></div>

<div class="box exam"><b>🎓 الدكتور بيسأل فيها إزاي؟</b>
<ul>
<li><b>Sample proportion</b>: mean + variance + احتمال في فترة. (5 درجات في 2022 و2023)</li>
<li><b>Average of n items</b>: احتمال متوسط العينة أقل/أكبر من رقم (استخدم σ/√n).</li>
<li>من السكاشن: sample mean و sample variance لأرقام، وقيم t من الجدول.</li>
</ul></div>
`
});

/* ===================== LECTURE 6 ===================== */
window.LECTURES.push({
  id: 'lec6', n: 6, focus: 'mid',
  short: 'التقدير وفترات الثقة',
  title: 'التقدير وفترات الثقة (Confidence Intervals)',
  en: 'Point Estimation, Confidence Intervals for μ and p, Sample Size',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
مش عارف μ الحقيقية. عندك عينة متوسطها 750.
<br><b>Point estimate</b>: "أنا شايف إن μ = 750" (رقم واحد).
<br><b>Interval estimate</b>: "أنا متأكد 95% إن μ ما بين 741.7 و 758.3" (فترة). الفترة دي أأمن لأن رقم واحد عمره ما هيطلع مظبوط بالظبط.</div>

<h2>1) التعريفات</h2>
<div class="box def">
<ul>
<li><b>Point estimate لـ μ</b> = <span class="f">x̄</span>. و <b>لـ p</b> = <span class="f">p̂ = x/n</span>.</li>
<li><b>Confidence interval</b> <span class="f">(θ̂<sub>L</sub>, θ̂<sub>U</sub>)</span>: فترة فيها القيمة الحقيقية باحتمال <span class="f">1 − α</span>.</li>
<li><span class="f">1 − α</span> = confidence coefficient (مثلًا 0.95). و α = 0.05.</li>
<li><span class="f">Z<sub>α/2</sub></span> = قيمة Z اللي على يمينها مساحة α/2.</li>
</ul></div>

<h3>إزاي تجيب Z<sub>α/2</sub> (خطوات ثابتة)</h3>
<div class="ex"><div class="ex-q"><b>📝 Question</b>Find Z<sub>α/2</sub> for a 95% confidence interval. What are the values of Z<sub>α/2</sub> for 90%, 94%, 95%, 98% and 99% confidence?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>95% confidence</td><td><span class="f">1 − α = 0.95</span></td><td></td></tr><tr><td></td><td><span class="f">α = 0.05 → α/2 = 0.025</span></td><td>نقسم الباقي على الطرفين</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>Z<sub>α/2</sub></td><td><span class="f">Z اللي على يمينه 0.025</span></td><td>يعني على شماله 0.975</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> فترة الثقة بتسيب <span class="f">α</span> برا، نصها يمين ونصها شمال. فـ <span class="f">Z<sub>α/2</sub></span> هي اللي على شمالها <span class="f">1 − α/2</span>.</p>
<ol class="steps">
<li>95% ← <span class="f">1 − α = 0.95</span> ← <span class="f">α = 0.05</span> ← <span class="f">α/2 = 0.025</span> في كل طرف:<span data-bell="-1.96,1.96" data-area="0.95"></span></li>
<li>عايز z اللي على شمالها <span class="f">1 − 0.025 = 0.975</span>. دوّر جوه الجدول على 0.9750:<span data-zlook="1.96"></span></li>
<li>نفس الطريقة لباقي النسب: 90% ← دوّر على 0.95 ← 1.645 ، 98% ← 0.99 ← 2.33 ، 99% ← 0.995 ← 2.575</li>
</ol>
<div class="table-wrap"><table><tr><th>الثقة</th><th>90%</th><th>94%</th><th>95%</th><th>98%</th><th>99%</th></tr><tr><th>α/2</th><td>0.05</td><td>0.03</td><td>0.025</td><td>0.01</td><td>0.005</td></tr><tr><th>تدوّر على</th><td>0.95</td><td>0.97</td><td>0.975</td><td>0.99</td><td>0.995</td></tr><tr><th>Z<sub>α/2</sub></th><td>1.645</td><td>1.88</td><td>1.96</td><td>2.33</td><td>2.575</td></tr></table></div>
<div class="box tip">احفظ 1.645 و 1.96 و 2.575. بيجوا كتير ومش هتلحق تدوّر في الامتحان.</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
فترة ثقة 80%: إيه α و α/2 و <span class="f">Z<sub>α/2</sub></span>؟
<details><summary>اعرض الحل</summary><div>
<span class="f">α = 0.2</span> ← <span class="f">α/2 = 0.1</span> ← عايز z اللي على شمالها 0.90 ← <span class="f">Z<sub>0.1</sub> ≈ 1.28</span></div></details></div>

<h2>2) فترة ثقة لـ μ — والـ σ معروفة ← 🔥 جه في ميد 2022</h2>
<div class="box law">
<div class="fm">x̄ ± Z<sub>α/2</sub> · <span class="frac"><span>σ</span><span>√n</span></span></div>
<span class="f">σ/√n</span> اسمها <b>standard error</b>. و <span class="f">e = Z<sub>α/2</sub> · σ/√n</span> اسمها أقصى خطأ (margin of error).
</div>

<div class="ex"><div class="ex-title">⭐⭐ اللمبات (ميد 2022 – Q3 – 5 درجات)</div>
<div class="ex-q"><b>📝 Question</b>An electrical firm manufactures light bulbs that have a length of life that is normally distributed with a standard deviation of 30 hours. A sample of 50 bulbs were selected randomly and found to have an average of 750 hours.<br>1. Find a point estimate of μ.<br>2. Find a 95% confidence interval for μ.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a standard deviation of 30 hours</td><td><span class="f">σ = 30</span></td><td>σ معروفة ← Z</td></tr><tr><td>a sample of 50 bulbs</td><td><span class="f">n = 50</span></td><td></td></tr><tr><td>an average of 750 hours</td><td><span class="f">x̄ = 750</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>1. point estimate of μ</td><td><span class="f">μ̂ = x̄</span></td><td></td></tr><tr><td>2. 95% confidence interval</td><td><span class="f">x̄ ± Z<sub>0.025</sub>·σ/√n</span></td><td>Z = 1.96</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> σ معروفة ← فترة Z: <span class="f">x̄ ± Z<sub>α/2</sub> · σ/√n</span>. والـ point estimate هو <span class="f">x̄</span> نفسه.</p>
<ol class="steps">
<li>المعطيات: <span class="f">σ = 30</span> ، <span class="f">n = 50</span> ، <span class="f">x̄ = 750</span></li>
<li><b>1)</b> أحسن تقدير لـ μ: <span class="f">μ̂ = x̄ = 750</span></li>
<li><b>2)</b> 95% ← <span class="f">Z<sub>0.025</sub> = 1.96</span><span data-zlook="1.96"></span></li>
<li>الخطأ المعياري: <span class="f">σ/√n = 30/√50 = 30/7.071 = 4.243</span></li>
<li>هامش الخطأ: <span class="f">e = 1.96 × 4.243 = 8.316</span></li>
<li>الحد الأدنى: <span class="f">750 − 8.316 = 741.68</span>، والحد الأعلى: <span class="f">750 + 8.316 = 758.32</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> (1) <span class="f">750</span> ، (2) <span class="f">741.68 &lt; μ &lt; 758.32</span></div>
</div>

<div class="ex"><div class="ex-title">مثال المحاضرة: الزنك</div>
<div class="ex-q"><b>📝 Question</b>The average zinc concentration recorded from a sample of zinc measurements in 36 different locations is found to be 2.6 gram/milliliter. Find a 95% and 99% confidence interval (C.I.) for the mean zinc concentration in the river. Assume that the population standard deviation is 0.3.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>36 different locations</td><td><span class="f">n = 36</span></td><td></td></tr><tr><td>found to be 2.6</td><td><span class="f">x̄ = 2.6</span></td><td>متوسط العينة</td></tr><tr><td>population standard deviation is 0.3</td><td><span class="f">σ = 0.3</span></td><td>σ معروفة ← Z</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>95% C.I.</td><td><span class="f">Z<sub>0.025</sub> = 1.96</span></td><td></td></tr><tr><td>99% C.I.</td><td><span class="f">Z<sub>0.005</sub> = 2.575</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> σ معروفة ← Z. نفس البيانات بثقتين، والفرق بس في <span class="f">Z<sub>α/2</sub></span>.</p>
<ol class="steps">
<li>المعطيات: <span class="f">n = 36</span> ، <span class="f">x̄ = 2.6</span> ، <span class="f">σ = 0.3</span> ← <span class="f">σ/√n = 0.3/6 = 0.05</span></li>
<li><b>95%:</b> <span class="f">Z = 1.96</span> ← <span class="f">e = 1.96 × 0.05 = 0.098</span> ← <span class="f">(2.6 − 0.098 , 2.6 + 0.098) = (2.502 , 2.698)</span></li>
<li><b>99%:</b> <span class="f">Z = 2.575</span> ← <span class="f">e = 2.575 × 0.05 = 0.129</span> ← <span class="f">(2.471 , 2.729)</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> 95%: <span class="f">(2.502 , 2.698)</span> ، 99%: <span class="f">(2.471 , 2.729)</span></div>
<div class="box tip">99% <b>أعرض</b> من 95%: عشان تبقى متأكد أكتر لازم تفتح الفترة أكتر.</div>
</div>

<div class="ex"><div class="ex-title">أسئلة MCQ من السكشن (نفس البيانات: σ = 2 ، n = 49 ، x̄ = 4.5)</div>
<div class="ex-q"><b>📝 Question</b>A random sample of size n = 49 is selected from a normal population with standard deviation σ = 2, and the sample mean is x̄ = 4.5.<br>1) The sampling distribution of X̄ is<br>2) The standard error of X̄ is<br>3) A 95% confidence interval for μ is<br>4) If the upper limit of a confidence interval for μ is 5.2, then the lower limit is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>n = 49</td><td><span class="f">√n = 7</span></td><td></td></tr><tr><td>σ = 2</td><td><span class="f">σ/√n = 2/7</span></td><td></td></tr><tr><td>x̄ = 4.5</td><td><span class="f">x̄ = 4.5</span></td><td>مركز الفترة</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>2) standard error</td><td><span class="f">σ/√n</span></td><td></td></tr><tr><td>3) 95% interval</td><td><span class="f">x̄ ± 1.96·σ/√n</span></td><td></td></tr><tr><td>4) upper limit is 5.2</td><td><span class="f">lower = 2x̄ − 5.2</span></td><td>الفترة متماثلة حوالين x̄</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> كله من <span class="f">σ/√n</span>: ده الـ standard error، وهو اللي بيحدد عرض الفترة.</p>
<ol class="steps">
<li><b>1)</b> <span class="f">x̄</span> متوزع Normal بنفس المتوسط وانحراف <span class="f">σ/√n = 2/√49 = 2/7 = 0.2857</span> ← <span class="f">X̄ ~ N(μ , 0.2857)</span></li>
<li><b>2)</b> standard error = <span class="f">σ/√n = 0.2857</span></li>
<li><b>3)</b> <span class="f">e = 1.96 × 0.2857 = 0.56</span> ← <span class="f">4.5 ± 0.56 = (3.94 , 5.06)</span></li>
<li><b>4)</b> x̄ في نص الفترة بالظبط، فالمسافة لفوق = المسافة لتحت: <span class="f">5.2 − 4.5 = 0.7</span> ← الحد السفلي <span class="f">4.5 − 0.7 = 3.8</span> (أو <span class="f">2x̄ − 5.2</span>)</li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">N(μ, 0.2857)</span> ، <span class="f">0.2857</span> ، <span class="f">(3.94 , 5.06)</span> ، <span class="f">3.8</span></div>
</div>

<h3>حجم العينة المطلوب</h3>
<div class="box law">
<div class="fm mix"><span class="f">n = ( <span class="frac"><span>Z<sub>α/2</sub> · σ</span><span>e</span></span> )²</span> &nbsp;&nbsp; ← قرّب لـ <b>فوق</b> دايمًا</div>
</div>
<div class="ex"><div class="ex-title">مثال 9.3</div>
<div class="ex-q"><b>📝 Question</b>How large a sample is required in Example 9.2 (the zinc example: σ = 0.3) if we want to be 95% confident that our estimate of μ is off by less than 0.05?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>σ = 0.3</td><td><span class="f">σ = 0.3</span></td><td></td></tr><tr><td>95% confident</td><td><span class="f">Z<sub>α/2</sub> = 1.96</span></td><td></td></tr><tr><td>off by less than 0.05</td><td><span class="f">e = 0.05</span></td><td>الخطأ المسموح</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>How large a sample</td><td><span class="f">n = (Zσ / e)²</span></td><td>قرّب لفوق</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> بنقلب قانون هامش الخطأ: <span class="f">e = Z·σ/√n</span> ← <span class="f">n = (Z·σ/e)²</span>، ودايمًا نقرّب لفوق.</p>
<ol class="steps">
<li>المعطيات: <span class="f">σ = 0.3</span> ، <span class="f">e = 0.05</span> ، 95% ← <span class="f">Z = 1.96</span></li>
<li>جوه القوس: <span class="f">1.96 × 0.3 / 0.05 = 0.588 / 0.05 = 11.76</span></li>
<li>تربيع: <span class="f">11.76² = 138.3</span></li>
<li>لفوق (حتى لو الكسر صغير، عشان 138 مش هتكفي): <span class="f">n = 139</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">n = 139</span></div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
<ol><li>n = 100 ، x̄ = 60 ، σ = 10. اعمل 95% CI لـ μ.</li><li>σ = 10 ، e = 2 ، 95%. حجم العينة المطلوب كام؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">60 ± 1.96(10/10) = 60 ± 1.96 → (58.04 , 61.96)</span><br>
2) <span class="f">(1.96 × 10/2)² = 9.8² = 96.04 → 97</span> (قرّب لفوق)</div></details></div>

<h2>3) فترة ثقة لـ μ — والـ σ مش معروفة (t)</h2>
<div class="box law">
<div class="fm">x̄ ± t<sub>α/2</sub> · <span class="frac"><span>S</span><span>√n</span></span> &nbsp;&nbsp; ν = n − 1</div>
</div>
<div class="ex"><div class="ex-title">مثال 9.4: حمض الكبريتيك</div>
<div class="ex-q"><b>📝 Question</b>The contents of 7 similar containers of sulfuric acid are 9.8, 10.2, 10.4, 9.8, 10.0, 10.2, and 9.6 liters. Find a 95% C.I. for the mean of all such containers, assuming an approximate normal distribution.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>7 containers</td><td><span class="f">n = 7 → ν = 6</span></td><td></td></tr><tr><td>9.8, 10.2, … 9.6</td><td><span class="f">x̄ , S من البيانات</span></td><td></td></tr><tr><td>(no σ given)</td><td><span class="f">σ مش معروفة ← t</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>95% C.I.</td><td><span class="f">x̄ ± t<sub>0.025</sub>·S/√n</span></td><td>t<sub>0.025, 6</sub> = 2.447</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<p><b>🧠 الفكرة:</b> σ <b>مش معروفة</b> (عندنا بيانات بس) والعينة صغيرة ← فترة t: <span class="f">x̄ ± t<sub>α/2</sub> · S/√n</span> بـ <span class="f">ν = n − 1</span>.</p>
<div class="how"><b>📋 ارسم الجدول كده</b><ol><li>عمود القيم x، واجمعه عشان <span class="f">x̄</span>.</li><li>عمود <span class="f">x − x̄</span> (مجموعه 0).</li><li>عمود <span class="f">(x − x̄)²</span>، ومجموعه على <span class="f">n − 1</span> = <span class="f">S²</span>.</li></ol></div>
<ol class="steps">
<li><span class="f">x̄ = 70/7 = 10</span></li>
<li><div class="table-wrap"><table><tr><th>x</th><th>9.8</th><th>10.2</th><th>10.4</th><th>9.8</th><th>10.0</th><th>10.2</th><th>9.6</th><th>المجموع</th></tr><tr><th>x − x̄</th><td>−0.2</td><td>0.2</td><td>0.4</td><td>−0.2</td><td>0</td><td>0.2</td><td>−0.4</td><td>0 ✓</td></tr><tr><th>(x − x̄)²</th><td>0.04</td><td>0.04</td><td>0.16</td><td>0.04</td><td>0</td><td>0.04</td><td>0.16</td><td><b>0.48</b></td></tr></table></div>
</li>
<li><span class="f">S² = 0.48/6 = 0.08</span> ← <span class="f">S = √0.08 = 0.283</span></li>
<li><span class="f">ν = 7 − 1 = 6</span>، و 95% ← <span class="f">α/2 = 0.025</span>:<span data-tlook="6,0.025"></span></li>
<li><span class="f">S/√n = 0.283/√7 = 0.283/2.646 = 0.107</span> ← <span class="f">e = 2.447 × 0.107 = 0.262</span></li>
<li><span class="f">10 ± 0.262 = (9.74 , 10.26)</span></li>
</ol>
<div class="box law"><b>✅ الإجابة:</b> <span class="f">9.74 &lt; μ &lt; 10.26</span></div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
n = 16 ، x̄ = 30 ، S = 4 (σ مش معروفة). اعمل 95% CI.
<details><summary>اعرض الحل</summary><div>
ν = 15 ← <span class="f">t<sub>0.025</sub> = 2.131</span> ← <span class="f">30 ± 2.131 × 4/4 = 30 ± 2.131 → (27.869 , 32.131)</span></div></details></div>

<h2>4) فترة ثقة للنسبة p</h2>
<div class="box law">
<div class="fm">p̂ ± Z<sub>α/2</sub> · <span class="sqrt"><span class="frac"><span>p̂ q̂</span><span>n</span></span></span> &nbsp;&nbsp; q̂ = 1 − p̂</div>
</div>
<div class="ex"><div class="ex-title">مثال 9.10: HBO</div>
<div class="ex-q"><b>📝 Question</b>In a random sample of n = 500 families owning television sets in the city of Hamilton, Canada, it was found that x = 340 subscribed to HBO. Find a 95% confidence interval for the actual proportion of families in this city who subscribe to HBO.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>n = 500 families</td><td><span class="f">n = 500</span></td><td></td></tr><tr><td>x = 340 subscribed</td><td><span class="f">p̂ = 340/500 = 0.68</span></td><td>النسبة في العينة</td></tr><tr><td></td><td><span class="f">q̂ = 0.32</span></td><td>1 − p̂</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>95% C.I. for the proportion</td><td><span class="f">p̂ ± 1.96·√(p̂q̂/n)</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
n = 500 ، x = 340 ← <span class="f">p̂ = 0.68</span>
<ol class="steps">
<li><span class="f">√(0.68 × 0.32/500) = 0.02086</span></li>
<li><span class="f">0.68 ± 1.96 × 0.02086 = 0.68 ± 0.04 → (0.64, 0.72)</span></li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
عينة 200 طالب، منهم 50 بيدخنوا. (1) point estimate لـ p. (2) 95% CI.
<details><summary>اعرض الحل</summary><div>
1) <span class="f">p̂ = 50/200 = 0.25</span><br>
2) <span class="f">√(0.25×0.75/200) = 0.0306</span> ← <span class="f">0.25 ± 1.96(0.0306) = 0.25 ± 0.06 → (0.19 , 0.31)</span></div></details></div>

<div class="box warn"><b>⚠️ غلطات شائعة</b>
<ul>
<li>تستخدم Z<sub>α</sub> بدل Z<sub>α/2</sub> في الفترة. (95% → 1.96 مش 1.645!)</li>
<li>تنسى √n في المقام.</li>
<li>في حجم العينة تقرّب لتحت. لازم لفوق (138.3 → 139).</li>
</ul></div>

<div class="box exam"><b>🎓 الدكتور بيسأل فيها إزاي؟</b>
<ul>
<li><b>Point estimate + 95% CI لـ μ و σ معروفة</b> (ميد 2022 – 5 درجات). نفس المثال بتاع السكشن (لمبات 750 و 30 و 50).</li>
<li>ممكن يغير النسبة لـ 94% أو 99% → خد بالك من Z.</li>
</ul></div>
`
});
