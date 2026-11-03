/* fx-991AR X (ClassWiz) guide: which calculator tool solves which kind of midterm question */
window.PAGES = window.PAGES || {};
window.PAGES.calc = `
<h1>🧮 الآلة الحاسبة fx-991AR X في الميد</h1>
<p class="subtitle">الآلة دي من عيلة ClassWiz، وفيها جاهز تقريبًا كل اللي الميد محتاجه: Normal و Binomial و تكامل و إحصاء و nCr و SOLVE.</p>

<div class="box warn"><b>⚠️ قبل ما تبدأ:</b>
<ul>
<li>الأسئلة اللي مكتوب عليها <b>[Answer in detail]</b> لازم تكتب فيها القانون والخطوات. الآلة هنا عشان <b>تتأكد</b> من رقمك وتوفر وقت في الـ MCQ.</li>
<li>الآلة بتحسب Normal بالظبط، والدكتور بيستخدم الجدول (z مقرّبة لرقمين). لو الإجابة طلعت مختلفة في الرقم الرابع (0.9044 بدل 0.9050)، اختار <b>الأقرب</b> من الاختيارات.</li>
<li>أسماء القوائم ممكن تظهر عندك بالعربي حسب لغة الآلة، بس الترتيب والزراير هما هما.</li>
</ul></div>

<h2>🗺️ نوع السؤال ← تستخدم إيه في الآلة</h2>
<div class="table-wrap"><table style="direction:rtl">
<tr><th>في السؤال</th><th>الأداة</th><th>المحاضرة</th></tr>
<tr><td>كسور، قانون الجمع، Bayes</td><td>الحساب العادي + <kbd>S⇔D</kbd> + الذاكرة <kbd>STO</kbd></td><td>1، 2</td></tr>
<tr><td>جدول x و f(x): أوجد μ و σ²</td><td>Statistics ← <bdi>1-Variable</bdi> مع Frequency</td><td>3</td></tr>
<tr><td>Binomial (n و p)</td><td>Distribution ← Binomial PD / CD</td><td>3</td></tr>
<tr><td>pdf: أوجد k أو P(a&lt;X&lt;b) أو E(X)</td><td>زرار التكامل <kbd>∫</kbd></td><td>4</td></tr>
<tr><td>Normal (μ و σ)</td><td>Distribution ← Normal CD / Inverse Normal</td><td>4</td></tr>
<tr><td>x̄ أو p̂ (عينة)</td><td>Normal CD بس σ تبقى σ/√n</td><td>5</td></tr>
<tr><td>بيانات: x̄ و S² و S</td><td>Statistics ← <bdi>1-Variable</bdi></td><td>5</td></tr>
<tr><td>مجهول جوه معادلة</td><td><kbd>SHIFT</kbd> <kbd>CALC</kbd> = SOLVE</td><td>أي حاجة</td></tr>
</table></div>

<h2>0) حاجات صغيرة بتوفر وقت</h2>
<ul>
<li><b>كسر ↔ عشري:</b> بعد أي نتيجة دوس <kbd>S⇔D</kbd>. مفيد لما الاختيارات كسور (31/36) والنتيجة طالعة عشري.</li>
<li><b>nCr:</b> <kbd>5</kbd> <kbd>SHIFT</kbd> <kbd>÷</kbd> <kbd>2</kbd> <kbd>=</kbd> ← <span class="f">⁵C₂ = 10</span>. و <kbd>SHIFT</kbd> <kbd>×</kbd> = nPr، و <kbd>SHIFT</kbd> <kbd>x⁻¹</kbd> = x!</li>
<li><b>الذاكرة:</b> نتيجة على الشاشة ← <kbd>SHIFT</kbd> <kbd>RCL</kbd> <kbd>(−)</kbd> تتخزن في A. ترجّعها بـ <kbd>ALPHA</kbd> <kbd>(−)</kbd>. (B على زرار <kbd>°'"</kbd>).</li>
<li><b>Ans:</b> بعد أي نتيجة اكتب <kbd>1</kbd> <kbd>−</kbd> <kbd>Ans</kbd> على طول ← المكمّلة.</li>
</ul>

<h2>1) قانون الجمع و Bayes (محاضرة 1 و 2)</h2>
<div class="ex"><div class="ex-title">مثال: Samah (تنجح في واحدة على الأقل)</div>
اكتب الكسور بزرار الكسر: <span class="f">2/3 + 4/9 − 1/4</span> <kbd>=</kbd> ← <b>31/36</b> على طول.</div>
<div class="ex"><div class="ex-title">مثال: الأخين محمد وأحمد (Bayes)</div>
<ol class="steps">
<li><span class="f">0.5 × 0.4</span> <kbd>=</kbd> ثم <kbd>SHIFT</kbd> <kbd>RCL</kbd> <kbd>(−)</kbd> ← اتخزن في A (= 0.2)</li>
<li><span class="f">0.5 × 0.1</span> <kbd>=</kbd> ثم <kbd>SHIFT</kbd> <kbd>RCL</kbd> <kbd>°'"</kbd> ← اتخزن في B (= 0.05)</li>
<li><span class="f">A + B</span> <kbd>=</kbd> ← <span class="f">P(Broken) = 0.25</span></li>
<li><span class="f">A ÷ (A + B)</span> <kbd>=</kbd> ← <span class="f">P(M | Broken) = 0.8</span></li>
</ol>
<div class="box tip">نفس الطريقة لأي سؤال مصنع فيه 3 مكن: خزّن كل فرع في حرف (A, B, C)، المجموع = الاحتمال الكلي، والفرع ÷ المجموع = Bayes.</div></div>

<h2>2) جدول توزيع متقطع: μ و σ² في ثواني (محاضرة 3)</h2>
<div class="box tip"><b>الفكرة:</b> لو حطيت f(x) كـ <b>Frequency</b>، الآلة بتحسب <span class="f">Σx·f / Σf</span>، ولأن <span class="f">Σf = 1</span> ده هو <span class="f">E(X)</span> بالظبط.</div>
<ol class="steps">
<li><b>مرة واحدة بس:</b> <kbd>SHIFT</kbd> <kbd>MENU</kbd> (SETUP) ← انزل لـ <b>Statistics</b> ← <b>Frequency: On</b>.</li>
<li><kbd>MENU</kbd> ← <b>Statistics</b> ← <b><bdi>1-Variable</bdi></b>.</li>
<li>عمود x: اكتب القيم وكل واحدة بعدها <kbd>=</kbd>. انقل لعمود Freq بالسهم واكتب f(x).</li>
<li><kbd>AC</kbd> ثم <kbd>OPTN</kbd> ← <b><bdi>1-Variable Calc</bdi></b>.</li>
</ol>
<div class="table-wrap"><table>
<tr><th>على الشاشة</th><th>يعني</th></tr>
<tr><td>x̄</td><td>μ = E(X)</td></tr>
<tr><td>Σx²</td><td>E(X²)</td></tr>
<tr><td>σ²x</td><td>Var(X) = σ²</td></tr>
<tr><td>σx</td><td>σ</td></tr>
<tr><td>n</td><td>Σf: لازم يطلع 1 (تأكيد إن الجدول صح)</td></tr>
</table></div>
<div class="ex"><div class="ex-title">مثال: x = −3, 6, 9 و f = 0.1, 0.5, 0.4</div>
x̄ = <b>6.3</b> ، Σx² = <b>51.3</b> ، σ²x = <b>11.61</b>. وبعدها <span class="f">E(2X+1) = 2(6.3)+1 = 13.6</span> و <span class="f">Var(2X+1) = 4(11.61) = 46.44</span>.</div>
<div class="box warn">في الجدول استخدم <b>σx</b> (مش sx). الـ sx للعينات بس (قسمة على n−1).</div>

<h2>3) Binomial (محاضرة 3)</h2>
<p><kbd>MENU</kbd> ← <b>Distribution</b> ← <b>Binomial PD</b> (احتمال قيمة واحدة) أو <b>Binomial CD</b> (تراكمي <span class="f">P(X ≤ x)</span>) ← <b>Variable</b> ← اكتب x ثم N (= n) ثم p.</p>
<div class="table-wrap"><table>
<tr><th>في السؤال</th><th>في الآلة</th></tr>
<tr><td>exactly x</td><td>PD(x)</td></tr>
<tr><td>at most x</td><td>CD(x)</td></tr>
<tr><td>less than x</td><td>CD(x − 1)</td></tr>
<tr><td>at least x</td><td>1 − CD(x − 1)</td></tr>
<tr><td>more than x</td><td>1 − CD(x)</td></tr>
</table></div>
<div class="ex"><div class="ex-title">مثال: الصواريخ (p = 0.9 ، n = 4) — at least two</div>
Binomial CD: x = 1 ، N = 4 ، p = 0.9 ← <b>0.0037</b>. بعدها <kbd>AC</kbd> و <span class="f">1 − Ans</span> ← <b>0.9963</b>.</div>
<div class="ex"><div class="ex-title">مثال: 25% بايظ ، n = 5 — at least one</div>
Binomial PD: x = 0 ، N = 5 ، p = 0.25 ← 0.2373 ← <span class="f">1 − Ans = 0.7627</span>.</div>
<div class="box tip">ولو عايز تكتب الخطوة بإيدك: <span class="f">⁴C₂ (0.9)² (0.1)²</span> تكتبها كده: <kbd>4</kbd> <kbd>SHIFT</kbd> <kbd>÷</kbd> <kbd>2</kbd> <kbd>×</kbd> <kbd>0.9</kbd> <kbd>x²</kbd> <kbd>×</kbd> <kbd>0.1</kbd> <kbd>x²</kbd> <kbd>=</kbd></div>

<h2>4) pdf: التكامل (محاضرة 4)</h2>
<p>دوس <kbd>∫</kbd>، اكتب الدالة (المتغير x من زرار <kbd>x</kbd>)، والحد التحتاني والفوقاني بالأسهم، وبعدين <kbd>=</kbd>.</p>
<div class="ex"><div class="ex-title">مثال: f(x) = kx ، 0 &lt; x &lt; 2</div>
<span class="f">∫₀² x dx</span> ← <b>2</b>. يبقى <span class="f">k × 2 = 1</span> ← <span class="f">k = 1/2</span>.</div>
<div class="ex"><div class="ex-title">مثال: f(x) = x²/3 ، −1 &lt; x &lt; 2</div>
<ul>
<li>تأكيد pdf: <span class="f">∫₋₁² x²/3 dx</span> ← <b>1</b> ✓</li>
<li><span class="f">P(0 &lt; X ≤ 1) = ∫₀¹ x²/3 dx</span> ← 0.1111 (<kbd>S⇔D</kbd> ← 1/9)</li>
<li><span class="f">E(X) = ∫₋₁² x · x²/3 dx</span> ← <b>1.25</b>، و <span class="f">Var = ∫ x²·f dx − μ²</span></li>
</ul></div>

<h2>5) Normal (محاضرة 4)</h2>
<p><kbd>MENU</kbd> ← <b>Distribution</b> ← <b>Normal CD</b> ← اكتب <b>Lower</b> ثم <b>Upper</b> ثم <b>σ</b> ثم <b>μ</b>. مش محتاج تحسب Z خالص!</p>
<div class="table-wrap"><table>
<tr><th>في السؤال</th><th>Lower</th><th>Upper</th></tr>
<tr><td>between a and b</td><td>a</td><td>b</td></tr>
<tr><td>less than a</td><td>−1×10<sup>99</sup></td><td>a</td></tr>
<tr><td>more than / at least a</td><td>a</td><td>1×10<sup>99</sup></td></tr>
</table></div>
<p>الـ 10<sup>99</sup> بتكتبها: <kbd>1</kbd> <kbd>×10ˣ</kbd> <kbd>99</kbd> (وقبلها <kbd>(−)</kbd> للسالب).</p>
<div class="ex"><div class="ex-title">مثال: الـ Piston ring (μ = 12 ، σ = 0.03)</div>
Lower 11.95 ، Upper 12.05 ، σ 0.03 ، μ 12 ← <b>0.9044</b> (بالجدول 0.9050 ← اختار الأقرب).</div>
<div class="ex"><div class="ex-title">مثال: الموتور (μ = 10 ، σ = 2)</div>
at least 12: Lower 12 ، Upper 1×10⁹⁹ ← <b>0.1587</b>. &nbsp; between 9 and 14 ← <b>0.6687</b>.</div>
<div class="box tip"><b>عايز رقم الجدول بالظبط؟</b> احسب z بإيدك وقرّبها لرقمين، وحط <span class="f">σ = 1 ، μ = 0</span> والحدود هي قيم z.</div>
<h3>بالعكس: عندك المساحة وعايز القيمة ← Inverse Normal</h3>
<p><b>Inverse Normal</b> ← <b>Area</b> (المساحة على <b>الشمال</b>) ثم σ ثم μ.</p>
<ul>
<li><span class="f">P(Z &lt; k) = 0.0207</span>: Area 0.0207 ، σ 1 ، μ 0 ← <b>k = −2.04</b></li>
<li>درجة النجاح (33% سقطوا ، μ = 70 ، σ = 5): Area 0.33 ← <b>67.8</b></li>
<li>لو المساحة اللي معاك على <b>اليمين</b>: اكتب Area = 1 − المساحة.</li>
</ul>

<h2>6) توزيع المعاينة x̄ و p̂ (محاضرة 5)</h2>
<p>نفس Normal CD، بس في خانة σ اكتب الانحراف بتاع العينة:</p>
<ul>
<li><b>x̄:</b> <span class="f">σ ← σ ÷ √n</span>. مثال اللمبات (μ = 400 ، σ = 10 ، n = 9) ، <span class="f">P(x̄ &lt; 405)</span>: Lower −1×10⁹⁹ ، Upper 405 ، σ = <span class="f">10 ÷ √9</span> ، μ 400 ← <b>0.9332</b>.</li>
<li><b>p̂:</b> <span class="f">σ ← √(pq ÷ n)</span> و μ = p. مثال (p = 0.45 ، n = 500): <span class="f">P(0.42 ≤ p̂ ≤ 0.48)</span> ← σ = <span class="f">√(0.45 × 0.55 ÷ 500)</span> ← ≈ <b>0.822</b> (بالجدول 0.823).</li>
</ul>
<div class="box warn">لو الخانة مقبلتش تكتب فيها قسمة أو جذر، احسب الرقم الأول (10 ÷ √9 = 3.333) واكتبه.</div>

<h2>7) بيانات: x̄ و S² و S (محاضرة 5)</h2>
<p>Statistics ← <bdi>1-Variable</bdi>، اكتب القيم في عمود x (وخلي Freq كلها 1) ← <kbd>OPTN</kbd> ← <bdi>1-Variable Calc</bdi>.</p>
<div class="ex"><div class="ex-title">مثال: 10, 21, 33, 53, 54</div>
x̄ = <b>34.2</b> ، s²x = <b>376.7</b> ، sx = <b>19.41</b>.</div>
<div class="box warn">هنا الدكتور عايز <b>S</b> بتاعة العينة ← خد <b>sx</b> و <b>s²x</b> (قسمة على n−1)، مش σx.</div>

<h2>8) SOLVE: أي مجهول جوه معادلة</h2>
<p>اكتب المعادلة بـ x، وعلامة = من <kbd>ALPHA</kbd> <kbd>CALC</kbd>، وبعدين <kbd>SHIFT</kbd> <kbd>CALC</kbd> <kbd>=</kbd>.</p>
<div class="ex"><div class="ex-title">مثال: A و B مستقلين ، P(A) = 0.5 ، P(A∪B) = 0.8 ، أوجد P(B)</div>
اكتب: <span class="f">0.5 + x − 0.5x = 0.8</span> ← SOLVE ← <b>x = 0.6</b>.</div>
<div class="ex"><div class="ex-title">مثال: الجدول f(x) = C, 3C, 4C, 2C</div>
<span class="f">x + 3x + 4x + 2x = 1</span> ← SOLVE ← <b>0.1</b>.</div>

<div class="box tip"><b>🎯 للفاينل:</b> نفس الآلة فيها <b><bdi>2-Variable</bdi></b> (Statistics ← y = a + bx) بتطلع لك <b>r</b> و <b>a</b> و <b>b</b> على طول لأسئلة الارتباط والانحدار.</div>
`;
