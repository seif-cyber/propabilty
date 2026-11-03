window.LECTURES = window.LECTURES || [];

/* ===================== LECTURE 7 ===================== */
window.LECTURES.push({
  id: 'lec7', n: 7, focus: 'none',
  short: 'اختبار الفروض',
  title: 'اختبار الفروض الإحصائية',
  en: 'Hypothesis Testing: single mean (Z & t), single proportion',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
شركة بتقول "متوسط عمر اللمبة بتاعتنا 740 ساعة". إنت شاكك إنه أكتر. خدت عينة ولقيت متوسطها 750.
<br>هل الـ 10 ساعات زيادة دول "حقيقيين" ولا مجرد صدفة من العينة؟ <b>اختبار الفروض</b> بيجاوب على السؤال ده.</div>

<h2>1) الفرضين</h2>
<div class="box def">
<ul>
<li><b>H<sub>0</sub> (Null hypothesis):</b> الكلام القديم/الادعاء. دايمًا فيه "=". مثلًا <span class="f">H<sub>0</sub>: μ = 740</span>.</li>
<li><b>H<sub>1</sub> (Alternative):</b> اللي إنت عايز تثبته. واحد من 3:
<span class="f">μ ≠ μ<sub>0</sub></span> (two-sided) ، <span class="f">μ &gt; μ<sub>0</sub></span> ، <span class="f">μ &lt; μ<sub>0</sub></span> (one-sided).</li>
</ul></div>

<h2>2) نوعين الغلط</h2>
<div class="table-wrap"><table>
<tr><th></th><th>H<sub>0</sub> صح</th><th>H<sub>0</sub> غلط</th></tr>
<tr><th>Accept H<sub>0</sub></th><td>✔ قرار صح</td><td>❌ Type II error (β)</td></tr>
<tr><th>Reject H<sub>0</sub></th><td>❌ Type I error (α)</td><td>✔ قرار صح</td></tr>
</table></div>
<div class="box tip"><b>💡 تفتكرهم إزاي:</b> Type <b>I</b> = رفضت حاجة صح (زي ما تحكم على بريء إنه مذنب). Type <b>II</b> = قبلت حاجة غلط. و <b>α = P(Type I)</b> = مستوى المعنوية (significance level).</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
H<sub>0</sub>: "المتهم بريء". إيه نوع الغلط في كل حالة؟
<ol><li>المحكمة حبست واحد بريء.</li><li>المحكمة سابت واحد مجرم.</li></ol>
<details><summary>اعرض الحل</summary><div>
1) رفضنا H<sub>0</sub> وهي صح ← <b>Type I</b> (α)<br>
2) قبلنا H<sub>0</sub> وهي غلط ← <b>Type II</b> (β)</div></details></div>

<h2>3) خطوات أي اختبار (4 خطوات ثابتة)</h2>
<ol class="steps">
<li>اكتب <span class="f">H<sub>0</sub></span> و <span class="f">H<sub>1</sub></span>.</li>
<li>احسب الـ Test Statistic (T.S.).</li>
<li>حدد منطقة الرفض (R.R.) من α واتجاه H<sub>1</sub>.</li>
<li>القرار: لو T.S. وقعت في R.R. → Reject H<sub>0</sub>. غير كده → Accept H<sub>0</sub>.</li>
</ol>

<div class="box law"><b>📐 Test statistics</b>
<div class="fm mix">σ معروفة: &nbsp; <span class="f">Z = <span class="frac"><span>x̄ − μ<sub>0</sub></span><span>σ/√n</span></span></span> &nbsp;&nbsp;&nbsp; σ مش معروفة: &nbsp; <span class="f">T = <span class="frac"><span>x̄ − μ<sub>0</sub></span><span>S/√n</span></span> (ν = n−1)</span></div>
<div class="fm mix">النسبة: &nbsp; <span class="f">Z = <span class="frac"><span>p̂ − p<sub>0</sub></span><span><span class="sqrt">p<sub>0</sub>q<sub>0</sub>/n</span></span></span></span></div>
</div>
<div class="box law"><b>📐 منطقة الرفض (Reject H<sub>0</sub> لو)</b>
<div class="table-wrap"><table>
<tr><th>H<sub>1</sub></th><th>Reject if</th></tr>
<tr><td>μ ≠ μ<sub>0</sub></td><td>Z &gt; Z<sub>α/2</sub> &nbsp;أو&nbsp; Z &lt; −Z<sub>α/2</sub></td></tr>
<tr><td>μ &gt; μ<sub>0</sub></td><td>Z &gt; Z<sub>α</sub></td></tr>
<tr><td>μ &lt; μ<sub>0</sub></td><td>Z &lt; −Z<sub>α</sub></td></tr>
</table></div>
السهم في H<sub>1</sub> بيشاور على مكان منطقة الرفض. α = 0.05: one-sided → 1.645 ، two-sided → 1.96.
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
<span class="f">H<sub>0</sub>: μ = 50 , H<sub>1</sub>: μ &lt; 50</span> ، α = 0.05. طلع معاك Z = −1.2. القرار إيه؟ ولو طلع Z = −2.1؟
<details><summary>اعرض الحل</summary><div>
منطقة الرفض: <span class="f">Z &lt; −1.645</span><br>
Z = −1.2 ← مش جوه المنطقة ← <b>Accept H<sub>0</sub></b><br>
Z = −2.1 ← جوه المنطقة ← <b>Reject H<sub>0</sub></b></div></details></div>

<div class="ex"><div class="ex-title">مثال: متوسط العمر</div>
<div class="ex-q"><b>📝 Question</b>A random sample of 100 recorded deaths in the United States during the past year showed an average of 71.8 years. Assuming a population standard deviation of 8.9 years, does this seem to indicate that the mean life span today is greater than 70 years? Use a 0.05 level of significance.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a random sample of 100</td><td><span class="f">n = 100</span></td><td></td></tr><tr><td>an average of 71.8 years</td><td><span class="f">x̄ = 71.8</span></td><td></td></tr><tr><td>population standard deviation of 8.9</td><td><span class="f">σ = 8.9</span></td><td>σ معروفة ← Z</td></tr><tr><td>0.05 level of significance</td><td><span class="f">α = 0.05</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>mean life span … greater than 70</td><td><span class="f">H₀: μ = 70 , H₁: μ &gt; 70</span></td><td>greater ← right tail</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
n = 100 ، x̄ = 71.8 ، σ = 8.9. هل μ &gt; 70؟ α = 0.05
<ol class="steps">
<li><span class="f">H<sub>0</sub>: μ = 70 , H<sub>1</sub>: μ &gt; 70</span></li>
<li><span class="f">Z = (71.8 − 70)/(8.9/10) = 2.02</span></li>
<li>R.R.: <span class="f">Z &gt; 1.645</span></li>
<li>2.02 &gt; 1.645 → <b>Reject H<sub>0</sub></b>: المتوسط أكبر من 70.</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال 10.4: خيط الصيد (two-sided)</div>
<div class="ex-q"><b>📝 Question</b>A manufacturer of sports equipment has developed a new synthetic fishing line that he claims has a mean breaking strength of 8 kilograms with a standard deviation of 0.5 kilograms. Test the hypothesis that μ = 8 kg against the alternative that μ ≠ 8 kg if a random sample of 50 lines is tested and found to have a mean breaking strength of 7.8 kg. Use a 0.01 level of significance.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a standard deviation of 0.5</td><td><span class="f">σ = 0.5</span></td><td></td></tr><tr><td>a random sample of 50 lines</td><td><span class="f">n = 50</span></td><td></td></tr><tr><td>mean breaking strength of 7.8</td><td><span class="f">x̄ = 7.8</span></td><td></td></tr><tr><td>0.01 level of significance</td><td><span class="f">α = 0.01</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>μ = 8 against μ ≠ 8</td><td><span class="f">H₀: μ = 8 , H₁: μ ≠ 8</span></td><td>≠ ← two-tailed ← α/2</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
n = 50 ، x̄ = 7.8 ، σ = 0.5 ، <span class="f">H<sub>1</sub>: μ ≠ 8</span> ، α = 0.01
<ol class="steps">
<li><span class="f">Z = (7.8 − 8)/(0.5/√50) = −2.83</span></li>
<li><span class="f">Z<sub>0.005</sub> = 2.575</span> ← <span class="f">−2.83 &lt; −2.575</span> → Reject H<sub>0</sub>: الادعاء غلط.</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال: المكانس (t-test)</div>
<div class="ex-q"><b>📝 Question</b>If a random sample of 12 homes included in a planned study indicates that vacuum cleaners expend an average of 42 kilowatt-hours per year with a standard deviation of 11.9 kilowatt-hours, does this suggest at the 0.05 level of significance that the vacuum cleaners expend, on the average, less than 46 kilowatt-hours annually? Assume the population of kilowatt-hours to be normal.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a random sample of 12 homes</td><td><span class="f">n = 12 → ν = 11</span></td><td></td></tr><tr><td>an average of 42</td><td><span class="f">x̄ = 42</span></td><td></td></tr><tr><td>a standard deviation of 11.9</td><td><span class="f">S = 11.9</span></td><td>دي S من العينة ← t</td></tr><tr><td>0.05 level</td><td><span class="f">α = 0.05</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>less than 46</td><td><span class="f">H₀: μ = 46 , H₁: μ &lt; 46</span></td><td>less ← left tail</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
n = 12 ، x̄ = 42 ، S = 11.9 ، <span class="f">H<sub>1</sub>: μ &lt; 46</span> ، α = 0.05
<ol class="steps">
<li><span class="f">T = (42 − 46)/(11.9/√12) = −1.16</span></li>
<li>ν = 11 ← <span class="f">−t<sub>0.05</sub> = −1.796</span></li>
<li><span class="f">−1.16 &gt; −1.796</span> → Accept H<sub>0</sub>.</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال 10.10: النسبة</div>
<div class="ex-q"><b>📝 Question</b>A builder claims that heat pumps are installed in 70% of all homes being constructed today in the city of Richmond. Would you agree with this claim if a random survey of new homes in the city shows that 8 out of 15 homes had heat pumps installed? Use a 0.10 level of significance.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>claims … 70% of all homes</td><td><span class="f">p₀ = 0.7</span></td><td>الادعاء = H₀</td></tr><tr><td>8 out of 15 homes</td><td><span class="f">x = 8 , n = 15</span></td><td></td></tr><tr><td>0.10 level</td><td><span class="f">α = 0.10</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>agree with this claim?</td><td><span class="f">H₀: p = 0.7 , H₁: p ≠ 0.7</span></td><td>two-sided</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
الادعاء 70%. 8 من 15 بيت. α = 0.10 two-sided
<ol class="steps">
<li><span class="f">p̂ = 0.5333</span> ، <span class="f">Z = (0.5333 − 0.7)/√(0.7×0.3/15) = −1.41</span></li>
<li><span class="f">Z<sub>0.05</sub> = 1.645</span> ← −1.41 جوه (−1.645, 1.645) → Accept H<sub>0</sub>: نوافق على الادعاء.</li>
</ol></div>
`
});

/* ===================== LECTURE 8 ===================== */
window.LECTURES.push({
  id: 'lec8', n: 8, focus: 'none',
  short: 'الارتباط والانحدار',
  title: 'الارتباط والانحدار الخطي',
  en: 'Correlation (Pearson r) & Simple Linear Regression',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
<b>الارتباط (Correlation):</b> هل متغيرين "ماشيين مع بعض"؟ كل ما السن يزيد الوزن بيزيد؟
<br><b>الانحدار (Regression):</b> نرسم أحسن خط مستقيم بينهم ونستخدمه <b>نتوقع</b>: "طفل عنده 8.5 سنة وزنه تقريبًا كام؟".</div>

<h2>1) Scatter diagram</h2>
<p>X = المتغير المستقل (independent) ، Y = التابع (dependent). بنرسم نقط بس من غير ما نوصلها. شكل النقط بيقولك: علاقة طردية، عكسية، أو مفيش علاقة.</p>

<h2>2) معامل الارتباط r (Pearson)</h2>
<div class="box law">
<div class="fm">r = <span class="frac"><span>Σxy − <span class="frac"><span>Σx Σy</span><span>n</span></span></span><span><span class="sqrt">[Σx² − (Σx)²/n] · [Σy² − (Σy)²/n]</span></span></span></div>
<b>−1 ≤ r ≤ 1</b>. الإشارة = نوع العلاقة (+ طردية ، − عكسية). القيمة = القوة.
</div>
<div class="table-wrap"><table>
<tr><th>|r|</th><td>0</td><td>0 – 0.25</td><td>0.25 – 0.75</td><td>0.75 – 1</td><td>1</td></tr>
<tr><th>القوة</th><td>no relation</td><td>weak</td><td>intermediate</td><td>strong</td><td>perfect</td></tr>
</table></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك: وصف العلاقة</div>
(1) r = 0.3 (2) r = −0.85 (3) r = −0.1 (4) r = 1.3
<details><summary>اعرض الحل</summary><div>
1) intermediate direct<br>2) strong inverse<br>3) weak inverse<br>4) <b>مستحيل</b>، r لازم يبقى بين −1 و 1.</div></details></div>

<div class="ex"><div class="ex-title">مثال المحاضرة: السن والوزن (6 أطفال)</div>
<div class="ex-q"><b>📝 Question</b>A sample of 6 children was selected, and data about their age in years and weight in kilograms was recorded as shown in the following table:<div class="table-wrap"><table><tr><th>x (age)</th><td>7</td><td>6</td><td>8</td><td>5</td><td>6</td><td>9</td></tr><tr><th>y (weight)</th><td>12</td><td>8</td><td>12</td><td>10</td><td>11</td><td>13</td></tr></table></div>Find the correlation coefficient between age and weight.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>6 children</td><td><span class="f">n = 6</span></td><td></td></tr><tr><td>age</td><td><span class="f">x</span></td><td></td></tr><tr><td>weight</td><td><span class="f">y</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>correlation coefficient</td><td><span class="f">r</span></td><td>محتاج Σx, Σy, Σxy, Σx², Σy²</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<div class="table-wrap"><table>
<tr><th>x (age)</th><td>7</td><td>6</td><td>8</td><td>5</td><td>6</td><td>9</td><th>Σx = 41</th></tr>
<tr><th>y (weight)</th><td>12</td><td>8</td><td>12</td><td>10</td><td>11</td><td>13</td><th>Σy = 66</th></tr>
</table></div>
<span class="f">Σxy = 461 , Σx² = 291 , Σy² = 742 , n = 6</span>
<ol class="steps">
<li>البسط: <span class="f">461 − 41×66/6 = 461 − 451 = 10</span></li>
<li><span class="f">Σx² − (Σx)²/n = 291 − 280.17 = 10.83</span> ، <span class="f">Σy² − (Σy)²/n = 742 − 726 = 16</span></li>
<li><span class="f">r = 10/√(10.83 × 16) = 0.759</span> → strong direct correlation</li>
</ol></div>

<h2>3) خط الانحدار ŷ = a + bx</h2>
<div class="box law">
<div class="fm">b = <span class="frac"><span>Σxy − ΣxΣy/n</span><span>Σx² − (Σx)²/n</span></span> &nbsp;&nbsp;&nbsp;&nbsp; a = ȳ − b·x̄</div>
b = الميل (slope): Y بتزيد قد إيه لما X تزيد 1. a = الجزء المقطوع (intercept).
</div>
<div class="ex"><div class="ex-title">نكمل نفس المثال</div>
<div class="ex-q"><b>📝 Question</b>Using the same data (age x and weight y of the 6 children):<div class="table-wrap"><table><tr><th>x (age)</th><td>7</td><td>6</td><td>8</td><td>5</td><td>6</td><td>9</td></tr><tr><th>y (weight)</th><td>12</td><td>8</td><td>12</td><td>10</td><td>11</td><td>13</td></tr></table></div>Find the regression equation of y on x, and the predicted weight when age is 8.5 years.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>the same data</td><td><span class="f">Sxy , Sxx من المثال اللي فات</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>regression of y on x</td><td><span class="f">ŷ = a + bx</span></td><td>b = Sxy/Sxx ، a = ȳ − b x̄</td></tr><tr><td>age is 8.5</td><td><span class="f">x = 8.5</span></td><td>عوّض في المعادلة</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<ol class="steps">
<li><span class="f">b = 10/10.83 = 0.92</span></li>
<li><span class="f">x̄ = 6.83 , ȳ = 11</span> ← <span class="f">a = 11 − 0.92×6.83 = 4.72</span></li>
<li><span class="f">ŷ = 4.72 + 0.92x</span> ← عند 8.5 سنة: <span class="f">ŷ = 12.54 kg</span></li>
</ol></div>
<div class="box tip">على الآلة: MODE → STAT → A+BX، دخّل x و y، وهات A و B و r مباشرة.</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
خط الانحدار <span class="f">ŷ = 4.72 + 0.92x</span>. توقع وزن طفل عنده 7.5 سنة. ولو السن زاد سنة، الوزن هيزيد قد إيه؟
<details><summary>اعرض الحل</summary><div>
<span class="f">ŷ = 4.72 + 0.92(7.5) = 11.62 kg</span>. ولو السن زاد سنة، الوزن هيزيد بالميل b = <b>0.92 kg</b>.</div></details></div>
`
});

/* ===================== LECTURE 9 ===================== */
window.LECTURES.push({
  id: 'lec9', n: 9, focus: 'none',
  short: 'تحليل التباين ANOVA',
  title: 'تحليل التباين (One-way ANOVA)',
  en: 'Analysis of Variance: comparing k means with the F test',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
عندك 3 أنواع مسكنات وعايز تعرف: هل متوسط مدة الراحة واحد للتلاتة ولا فيه نوع مختلف؟
<br>t-test بيقارن متوسطين بس. لو عندك <b>3 أو أكتر</b> بنستخدم <b>ANOVA</b>.</div>

<div class="box def">
<span class="f">H<sub>0</sub>: μ<sub>1</sub> = μ<sub>2</sub> = ... = μ<sub>k</sub></span> (كلهم زي بعض)
<br><span class="f">H<sub>1</sub></span>: على الأقل متوسط واحد مختلف.
</div>

<h2>جدول ANOVA</h2>
<div class="table-wrap"><table>
<tr><th>Source</th><th>SS</th><th>df</th><th>MS</th><th>F</th></tr>
<tr><td>Treatments</td><td>SSTr</td><td>k − 1</td><td>SSTr/(k−1)</td><td rowspan="2">MSTr / MSE</td></tr>
<tr><td>Error</td><td>SSE</td><td>N − k</td><td>SSE/(N−k)</td></tr>
<tr><td>Total</td><td>SST</td><td>N − 1</td><td></td><td></td></tr>
</table></div>
<div class="box law"><b>📐 خطوات الحساب</b>
<div class="fm">C.F = <span class="frac"><span>(Y..)²</span><span>N</span></span> &nbsp;&nbsp; SST = Σy² − C.F &nbsp;&nbsp; SSTr = <span class="frac"><span>Σ Y<sub>i.</sub>²</span><span>n</span></span> − C.F &nbsp;&nbsp; SSE = SST − SSTr</div>
Y.. = مجموع كل الأرقام. Y<sub>i.</sub> = مجموع كل مجموعة. N = عدد كل القيم، k = عدد المجموعات، n = حجم كل مجموعة.
<br>القرار: لو <span class="f">F<sub>computed</sub> &gt; F<sub>table</sub>(k−1, N−k)</span> → Reject H<sub>0</sub>.
</div>

<div class="ex"><div class="ex-title">مثال المحاضرة: 3 مسكنات × 5 أشخاص (α = 0.01)</div>
<div class="ex-q"><b>📝 Question</b>The data in the following table represent the number of minutes of relief provided by 3 different brands of headache tablets administered to 15 subjects experiencing fevers of 38°C or more.<div class="table-wrap"><table><tr><th>Brand 1</th><th>Brand 2</th><th>Brand 3</th></tr><tr><td>16</td><td>18</td><td>26</td></tr><tr><td>15</td><td>22</td><td>31</td></tr><tr><td>13</td><td>20</td><td>24</td></tr><tr><td>21</td><td>16</td><td>30</td></tr><tr><td>15</td><td>24</td><td>24</td></tr></table></div>Assuming the number of minutes to be normally distributed with common variance, test, at the 1% significance level, the hypothesis that there is no difference between the three brands with respect to the mean time of relief.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>3 different brands</td><td><span class="f">k = 3</span></td><td>df بين المجموعات = 2</td></tr><tr><td>15 subjects</td><td><span class="f">N = 15 , n = 5</span></td><td>df جوه = 12</td></tr><tr><td>1% significance level</td><td><span class="f">α = 0.01</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>no difference between the three brands</td><td><span class="f">H₀: μ₁ = μ₂ = μ₃</span></td><td>ANOVA ← F</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
مجاميع: 80 ، 100 ، 135 ← <span class="f">Y.. = 315 , N = 15</span> ، <span class="f">Σy² = 7045</span>
<ol class="steps">
<li><span class="f">C.F = 315²/15 = 6615</span></li>
<li><span class="f">SST = 7045 − 6615 = 430</span></li>
<li><span class="f">SSTr = (6400 + 10000 + 18225)/5 − 6615 = 6925 − 6615 = 310</span></li>
<li><span class="f">SSE = 430 − 310 = 120</span></li>
<li><span class="f">MSTr = 310/2 = 155 , MSE = 120/12 = 10 , F = 15.5</span></li>
<li><span class="f">F<sub>2,12</sub>(0.01) = 6.927</span> ← 15.5 &gt; 6.927 → Reject H<sub>0</sub>: المسكنات مختلفة.</li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
4 مجموعات (k = 4)، كل مجموعة فيها 5 (N = 20). SSTr = 30 و SSE = 32. احسب درجات الحرية، و MS، و F.
<details><summary>اعرض الحل</summary><div>
df: <span class="f">k−1 = 3</span> و <span class="f">N−k = 16</span><br>
<span class="f">MSTr = 30/3 = 10 , MSE = 32/16 = 2 , F = 10/2 = 5</span></div></details></div>

<div class="box tip"><b>LSD:</b> عشان تعرف <b>أنهي</b> متوسط مختلف: <span class="f">LSD = √(2·MSE·F/n)</span>، ولو فرق أي متوسطين أكبر من LSD يبقوا مختلفين. (مثال العربيات: LSD = 76.5).</div>
`
});

/* ===================== LECTURE 10 ===================== */
window.LECTURES.push({
  id: 'lec10', n: 10, focus: 'none',
  short: 'الإمكان الأعظم MLE',
  title: 'تقدير الإمكان الأعظم والمقدّر غير المتحيز',
  en: 'Maximum Likelihood Estimation & Unbiased Estimators',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
عندك بيانات، وعندك توزيع فيه parameter مجهول θ (زي p أو λ أو μ). جرّب قيم θ مختلفة واسأل: "أنهي θ بتخلي البيانات اللي شفتها <b>أكثر احتمالًا</b>؟". هي دي <b>MLE</b>.</div>

<h2>1) الخطوات (وصفة ثابتة)</h2>
<ol class="steps">
<li>اكتب <b>Likelihood</b>: <span class="f">L(θ) = f(x<sub>1</sub>;θ) · f(x<sub>2</sub>;θ) ··· f(x<sub>n</sub>;θ) = ∏ f(x<sub>i</sub>;θ)</span> (ضرب لأن العينة مستقلة).</li>
<li>خد <b>ln</b>: <span class="f">ln L(θ)</span> (الضرب يبقى جمع، والأسس تنزل قدام). ده مسموح لأن ln دالة متزايدة، فنفس θ بتعظّم الاتنين.</li>
<li>فاضل بالنسبة لـ θ وساوي بصفر: <span class="f">d ln L / dθ = 0</span>.</li>
<li>حل المعادلة ← <span class="f">θ̂</span>.</li>
</ol>

<div class="ex"><div class="ex-title">مثال 1: Bernoulli (طلاب عندهم عربية)</div>
<div class="ex-q"><b>📝 Question</b>Let X<sub>1</sub>, X<sub>2</sub>, …, X<sub>n</sub> be a random sample from a Bernoulli distribution (for example X = 1 if a selected student owns a car and X = 0 otherwise) with f(x; p) = p<sup>x</sup>(1 − p)<sup>1−x</sup>, x = 0, 1. Find the maximum likelihood estimator of p.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>f(x; p) = p<sup>x</sup>(1 − p)<sup>1−x</sup></td><td><span class="f">x = 0 أو 1</span></td><td></td></tr><tr><td>random sample X₁ … Xₙ</td><td><span class="f">L(p) = Π f(xᵢ; p)</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>maximum likelihood estimator of p</td><td><span class="f">d ln L / dp = 0</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">f(x;p) = p<sup>x</sup>(1−p)<sup>1−x</sup></span> ، x = 0 أو 1
<ol class="steps">
<li><span class="f">L(p) = p<sup>Σx</sup> (1−p)<sup>n−Σx</sup></span></li>
<li><span class="f">ln L = (Σx) ln p + (n − Σx) ln(1−p)</span></li>
<li><span class="f">Σx/p − (n − Σx)/(1−p) = 0</span></li>
<li><span class="f">p̂ = Σx / n</span> (يعني نسبة الواحدات في العينة)</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال 2: Exponential (عمر اللمبات 2، 3، 1، 3، 4)</div>
<div class="ex-q"><b>📝 Question</b>The lifetimes of 5 light bulbs are 2, 3, 1, 3, 4 and are assumed to follow an exponential distribution with pdf f(x; λ) = λe<sup>−λx</sup>, x &gt; 0. Find the maximum likelihood estimate of λ.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>2, 3, 1, 3, 4</td><td><span class="f">n = 5 , Σx = 13</span></td><td></td></tr><tr><td>f(x; λ) = λe<sup>−λx</sup></td><td><span class="f">L(λ) = λ<sup>n</sup> e<sup>−λΣx</sup></span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>MLE of λ</td><td><span class="f">λ̂ = n / Σx</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">f(x;λ) = λe<sup>−λx</sup></span>
<ol class="steps">
<li><span class="f">L = λ<sup>5</sup> e<sup>−λΣx</sup></span> ← <span class="f">ln L = 5 ln λ − λΣx</span></li>
<li><span class="f">5/λ − Σx = 0</span></li>
<li><span class="f">λ̂ = 5/Σx = 5/13</span> (عمومًا <span class="f">λ̂ = n/Σx = 1/x̄</span>)</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال 3: Normal (μ و σ² مجهولين)</div>
<div class="ex-q"><b>📝 Question</b>Let X<sub>1</sub>, X<sub>2</sub>, …, X<sub>n</sub> be a random sample from a normal distribution N(μ, σ²) where both μ and σ² are unknown. Find the maximum likelihood estimators of μ and σ².</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>N(μ, σ²)</td><td><span class="f">معلمتين مجهولين</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>MLE of μ and σ²</td><td><span class="f">∂ ln L/∂μ = 0 , ∂ ln L/∂σ² = 0</span></td><td>نشتق مرتين</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<div class="fm mix"><span class="f">μ̂ = x̄</span> &nbsp;&nbsp;&nbsp;&nbsp; <span class="f">σ̂² = <span class="frac"><span>Σ(x<sub>i</sub> − x̄)²</span><span>n</span></span></span> &nbsp; (على n مش n−1)</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
(1) بيانات Bernoulli: 1، 1، 0، 1 ← <span class="f">p̂</span> = ؟ (2) أعمار لمبات exponential: 1، 3 ← <span class="f">λ̂</span> = ؟
<details><summary>اعرض الحل</summary><div>
1) <span class="f">p̂ = Σx/n = 3/4 = 0.75</span><br>
2) <span class="f">λ̂ = n/Σx = 2/4 = 0.5</span></div></details></div>

<h2>2) Unbiased Estimator (مقدّر غير متحيز)</h2>
<div class="box def">
<span class="f">θ̂</span> يبقى <b>unbiased</b> لو <span class="f">E(θ̂) = θ</span>. يعني "في المتوسط بيصيب الهدف". غير كده يبقى <b>biased</b>.
</div>
<ul>
<li><span class="f">E(p̂) = E(Σx/n) = np/n = p</span> → p̂ <b>unbiased</b>.</li>
<li><span class="f">E(x̄) = μ</span> → x̄ <b>unbiased</b>.</li>
<li><span class="f">E(σ̂²) = (n−1)σ²/n ≠ σ²</span> → σ̂² (MLE على n) <b>biased</b>. وعشان كده S² بنقسمها على n−1، عشان تبقى unbiased.</li>
</ul>
`
});
