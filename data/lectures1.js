window.LECTURES = window.LECTURES || [];

/* ===================== LECTURE 1 ===================== */
window.LECTURES.push({
  id: 'lec1', n: 1, focus: 'hot',
  short: 'مقدمة الاحتمالات',
  title: 'مقدمة الاحتمالات وقانون الجمع',
  en: 'Sample Space, Events, Addition Rule, Mutually Exclusive Events',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة خالص</b>
الاحتمال (Probability) = <b>فرصة</b> إن حاجة تحصل، وبيتكتب كرقم من <b>0</b> لـ <b>1</b>.
<br>0 يعني مستحيل تحصل، و1 يعني أكيد هتحصل، و0.5 يعني "نص بنص" زي العملة.
<br>مثال: لو رميت زهرة (dice)، فرصة إن يطلع 6 = حالة واحدة من 6 حالات = <span class="f">1/6</span>.</div>

<h2>1) التجربة وفضاء العينة</h2>
<div class="box def"><b>📖 تعريفات لازم تعرفها</b>
<ul>
<li><b>Experiment (تجربة):</b> أي حاجة بتعملها وليها نتيجة. زي رمي زهرة.</li>
<li><b>Random experiment (تجربة عشوائية):</b> مش عارف النتيجة قبلها، بس عارف كل النتائج الممكنة.</li>
<li><b>Sample Space – S (فضاء العينة):</b> <u>كل</u> النتائج الممكنة في مجموعة واحدة.</li>
<li><b>Sample point:</b> نتيجة واحدة من جوه S.</li>
<li><b>Event – A (حدث):</b> جزء من S (subset). بنقول الحدث "حصل" لو النتيجة طلعت من جواه.</li>
<li><span class="f">∅</span> = <b>impossible event</b> (حدث مستحيل)، و <span class="f">S</span> نفسها = <b>sure event</b> (حدث أكيد).</li>
</ul></div>

<div class="ex"><div class="ex-title">مثال 1: رمي زهرة واحدة</div>
<div class="ex-q"><b>📝 Question</b>Experiment: tossing a die (or selecting a ball from a box containing 6 balls numbered 1, 2, 3, 4, 5 and 6). Write the sample space S, then list the elements of the events:<br>E1 = getting an even number, E2 = getting a number less than 4, E5 = getting a negative number, E6 = getting a number less than 10.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>tossing a die</td><td><span class="f">S = {1, 2, 3, 4, 5, 6}</span></td><td>الزهرة ليها 6 أوجه</td></tr><tr><td>an even number</td><td><span class="f">E1 = {2, 4, 6}</span></td><td>زوجي</td></tr><tr><td>a number less than 4</td><td><span class="f">E2 = {1, 2, 3}</span></td><td>less than = أقل من (4 مش داخلة)</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>a negative number</td><td><span class="f">E5 = ∅</span></td><td>مفيش وش سالب ← حدث مستحيل</td></tr><tr><td>a number less than 10</td><td><span class="f">E6 = S</span></td><td>كل الأوجه أقل من 10 ← حدث مؤكد</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">S = {1, 2, 3, 4, 5, 6}</span> → <span class="f">n(S) = 6</span>
<ul>
<li>E1 = رقم زوجي = <span class="f">{2, 4, 6}</span></li>
<li>E2 = رقم أقل من 4 = <span class="f">{1, 2, 3}</span></li>
<li>E5 = رقم سالب = <span class="f">{ } = ∅</span> (مستحيل)</li>
<li>E6 = رقم أقل من 10 = <span class="f">S</span> (أكيد)</li>
</ul></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
رميت عملة مرتين (H = صورة، T = كتابة).
<ol><li>اكتب S. كام عنصر فيها؟</li><li>اكتب الحدث A = "طلعت صورة واحدة على الأقل".</li><li>احسب <span class="f">P(A)</span>.</li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">S = {HH, HT, TH, TT}</span> → 4 عناصر (2 × 2).<br>
2) <span class="f">A = {HH, HT, TH}</span> (أي حاجة فيها H).<br>
3) <span class="f">P(A) = 3/4 = 0.75</span>.</div></details></div>

<div class="ex"><div class="ex-title">مثال 2: فحص 3 قطع (D = معيبة، N = سليمة)</div>
<div class="ex-q"><b>📝 Question</b>Experiment: selecting 3 items from a manufacturing process; each item is inspected and classified as defective (D) or non-defective (N). Write the sample space S, then list the elements of the events:<br>A = {at least 2 defectives}, B = {at most one defective}.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>3 items</td><td><span class="f">n = 3</span></td><td>تلات قطع</td></tr><tr><td>defective (D) or non-defective (N)</td><td><span class="f">2 حالات لكل قطعة</span></td><td>يعني 2 × 2 × 2 = 8 نتائج</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>at least 2 defectives</td><td><span class="f">D ≥ 2</span></td><td>at least = على الأقل (2 أو 3)</td></tr><tr><td>at most one defective</td><td><span class="f">D ≤ 1</span></td><td>at most = على الأكثر (0 أو 1)</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
كل قطعة ليها حالتين، يبقى عدد النتائج <span class="f">2 × 2 × 2 = 8</span>:
<div class="fm">S = {DDD, DDN, DND, DNN, NDD, NDN, NND, NNN}</div>
<ul>
<li>A = على الأقل 2 معيبين (at least 2) = <span class="f">{DDD, DDN, DND, NDD}</span></li>
<li>B = على الأكثر واحدة معيبة (at most one) = <span class="f">{DNN, NDN, NND, NNN}</span></li>
</ul>
<div class="box tip"><b>💡 at least / at most</b> "at least 2" يعني 2 أو أكتر (≥). "at most 1" يعني 1 أو أقل (≤).</div>
</div>

<div class="ex"><div class="ex-title">⭐ مثال 3 (بيجي في الامتحان كل سنة!): رمي زهرتين</div>
<div class="ex-q"><b>📝 Question</b>Experiment: rolling a pair of balanced dice. How many outcomes are in the sample space? Find the sum of the two numbers for every outcome, and count the outcomes in which the two faces are equal.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a pair of dice</td><td><span class="f">n(S) = 6 × 6 = 36</span></td><td>زهرتين، كل واحدة 6</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>the sum of the two numbers</td><td><span class="f">x + y</span></td><td>اجمع الوشين في كل حالة</td></tr><tr><td>the two faces are equal</td><td><span class="f">x = y</span></td><td>الحالات على القطر</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
عدد النتائج = <span class="f">6 × 6 = 36</span>. الجدول ده بيوريك <b>مجموع</b> الزهرتين في كل حالة:
<div class="table-wrap"><table>
<tr><th>1st \\ 2nd</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
<tr><th>1</th><td><b>2</b></td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
<tr><th>2</th><td>3</td><td><b>4</b></td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
<tr><th>3</th><td>4</td><td>5</td><td><b>6</b></td><td>7</td><td>8</td><td>9</td></tr>
<tr><th>4</th><td>5</td><td>6</td><td>7</td><td><b>8</b></td><td>9</td><td>10</td></tr>
<tr><th>5</th><td>6</td><td>7</td><td>8</td><td>9</td><td><b>10</b></td><td>11</td></tr>
<tr><th>6</th><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td><b>12</b></td></tr>
</table></div>
الأرقام الـ <b>bold</b> على القطر هي الحالات اللي الوشين فيها متساويين (doubles) = 6 حالات.
<br>عدد طرق كل مجموع: 2→1، 3→2، 4→3، 5→4، 6→5، <b>7→6</b>، 8→5، 9→4، 10→3، 11→2، 12→1.
<div class="box tip"><b>💡 تريكة:</b> الـ doubles مجموعها دايمًا <b>زوجي</b> (2,4,6,8,10,12). يعني "المجموع 6 والوشين متساويين" = حالة واحدة بس هي (3,3). و"المجموع 7 والوشين متساويين" = مستحيل = 0.</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (استخدم الجدول اللي فوق)</div>
<ol><li>احتمال إن مجموع الزهرتين = 9؟</li><li>احتمال إن الوشين متساويين؟</li><li>احتمال إن المجموع 10 <b>و</b> الوشين متساويين؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) المجموع 9: (3,6),(4,5),(5,4),(6,3) → <span class="f">4/36</span>.<br>
2) 6 حالات على القطر → <span class="f">6/36</span>.<br>
3) الحالة الوحيدة (5,5) → <span class="f">1/36</span>.</div></details></div>

<h2>2) العمليات على الأحداث</h2>
<div class="box def">
<ul>
<li><b>Complement (المكمّل):</b> <span class="f">A<sup>c</sup></span> أو <span class="f">A′</span> أو <span class="f">Ā</span> = كل حاجة في S <u>مش</u> في A. يعني "A ماحصلتش".</li>
<li><b>Intersection (التقاطع):</b> <span class="f">A ∩ B</span> = الحاجات اللي في A <u>و</u> B مع بعض. يعني "الاتنين حصلوا".</li>
<li><b>Union (الاتحاد):</b> <span class="f">A ∪ B</span> = اللي في A <u>أو</u> B <u>أو الاتنين</u>. يعني "على الأقل واحد فيهم حصل".</li>
<li><b>Mutually Exclusive / Disjoint (متنافيين):</b> لو <span class="f">A ∩ B = ∅</span>، يعني مستحيل يحصلوا مع بعض. زي "يطلع 1" و"يطلع 6" في نفس الرمية.</li>
</ul></div>

<svg viewBox="0 0 420 190" style="max-width:420px;width:100%;display:block;margin:10px auto;direction:ltr" role="img" aria-label="Venn diagram">
  <rect x="5" y="5" width="410" height="180" rx="12" fill="none" stroke="currentColor" opacity=".5"/>
  <text text-anchor="end" x="18" y="28" fill="currentColor" font-size="16">S</text>
  <circle cx="160" cy="95" r="70" fill="#3b5bdb" fill-opacity=".18" stroke="#3b5bdb" stroke-width="2"/>
  <circle cx="260" cy="95" r="70" fill="#e8590c" fill-opacity=".18" stroke="#e8590c" stroke-width="2"/>
  <text text-anchor="end" x="120" y="100" fill="currentColor" font-size="13">A∩B′</text>
  <text text-anchor="end" x="190" y="100" fill="currentColor" font-size="13">A∩B</text>
  <text text-anchor="end" x="270" y="100" fill="currentColor" font-size="13">A′∩B</text>
  <text text-anchor="end" x="330" y="170" fill="currentColor" font-size="13">A′∩B′</text>
  <text text-anchor="end" x="100" y="40" fill="#3b5bdb" font-size="16" font-weight="bold">A</text>
  <text text-anchor="end" x="310" y="40" fill="#e8590c" font-size="16" font-weight="bold">B</text>
</svg>
<p>تخيل إن مساحة المستطيل كله = 1. الرسمة مقسومة 4 مناطق، وأي سؤال بيسألك عن واحدة منهم أو مجموعة منهم.</p>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
زهرة واحدة: <span class="f">S = {1,2,3,4,5,6}</span>، و <span class="f">A = {2,4,6}</span> (زوجي)، و <span class="f">B = {1,2,3}</span> (أقل من 4).
<ol><li><span class="f">A ∪ B</span> = ؟</li><li><span class="f">A ∩ B</span> = ؟</li><li><span class="f">A′</span> = ؟</li><li>هل A و B متنافيين (mutually exclusive)؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">{1,2,3,4,6}</span> (كل اللي في الاتنين من غير تكرار).<br>
2) <span class="f">{2}</span> (المشترك بس).<br>
3) <span class="f">{1,3,5}</span> (كل اللي مش في A).<br>
4) <b>لأ</b>، لأن بينهم عنصر مشترك هو 2. المتنافيين تقاطعهم لازم يبقى فاضي.</div></details></div>

<h2>3) قواعد الاحتمال</h2>
<div class="box law"><b>📐 القواعد الأساسية</b>
<div class="fm">0 ≤ P(A) ≤ 1 &nbsp;&nbsp;&nbsp; P(S) = 1 &nbsp;&nbsp;&nbsp; P(∅) = 0</div>
لو كل النتائج <b>ليها نفس الفرصة</b> (equally likely – زي زهرة سليمة أو اختيار عشوائي):
<div class="fm">P(A) = <span class="frac"><span>n(A)</span><span>n(S)</span></span> = <span class="frac"><span class="ar">عدد الحالات اللي في A</span><span class="ar">عدد كل الحالات</span></span></div>
</div>

<div class="ex"><div class="ex-title">مثال: الحلويات (Example 2.25)</div>
<div class="ex-q"><b>📝 Question</b>A mixture of candies consists of 6 mints, 4 toffees, and 3 chocolates. If a person makes a random selection of one of these candies, find the probability of getting:<br>(a) a mint<br>(b) a toffee or chocolate.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>6 mints, 4 toffees, 3 chocolates</td><td><span class="f">n(S) = 6 + 4 + 3 = 13</span></td><td>إجمالي الحتت</td></tr><tr><td>a random selection of one</td><td><span class="f">P = n(A) / n(S)</span></td><td>كله ليه نفس الفرصة</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) a mint</td><td><span class="f">n(M) = 6</span></td><td></td></tr><tr><td>(b) a toffee or chocolate</td><td><span class="f">n(T ∪ C) = 4 + 3</span></td><td>"or" = اتحاد، ومتنافيين فبنجمع</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
عندك 6 نعناع (mint) و4 توفي و3 شوكولاتة = 13 حتة. اخترت واحدة عشوائي:
<ol class="steps">
<li><span class="f">P(mint) = 6/13</span></li>
<li><span class="f">P(toffee or chocolate) = (4+3)/13 = 7/13</span></li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
فصل فيه 30 طالب: 12 بنت و 18 ولد. اخترت طالب عشوائي. احتمال إنه ولد؟ واحتمال إنه <b>مش</b> ولد؟
<details><summary>اعرض الحل</summary><div>
<span class="f">P(ولد) = 18/30 = 0.6</span>، و <span class="f">P(مش ولد) = 1 − 0.6 = 0.4</span> (وهي نفسها 12/30).</div></details></div>

<h2>4) قانون الجمع (Addition Rule) ← أهم قانون في المحاضرة</h2>
<div class="box law"><b>📐 Additive Rule</b>
<div class="fm">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</div>
ليه بنطرح التقاطع؟ عشان لما جمعنا A و B، الجزء المشترك اتحسب <b>مرتين</b>، فبنشيل نسخة.
<br><br>لو <b>Mutually Exclusive</b> (التقاطع = 0):
<div class="fm">P(A ∪ B) = P(A) + P(B)</div>
<b>Complement:</b>
<div class="fm">P(A′) = 1 − P(A)</div>
</div>

<h3>جدول الترجمة: الكلام الإنجليزي → الرمز → القانون</h3>
<div class="table-wrap"><table>
<tr><th>في السؤال</th><th>الرمز</th><th>إزاي تحسبه</th></tr>
<tr><td>at least one / A or B</td><td>P(A ∪ B)</td><td>P(A)+P(B)−P(A∩B)</td></tr>
<tr><td>both / A and B</td><td>P(A ∩ B)</td><td>P(A)+P(B)−P(A∪B)</td></tr>
<tr><td>neither / none</td><td>P(A′ ∩ B′)</td><td>1 − P(A∪B)</td></tr>
<tr><td>A only / A but not B</td><td>P(A ∩ B′)</td><td>P(A) − P(A∩B)</td></tr>
<tr><td>B only / not A but B</td><td>P(A′ ∩ B)</td><td>P(B) − P(A∩B)</td></tr>
<tr><td>exactly one</td><td>P(A∩B′)+P(A′∩B)</td><td>P(A∪B) − P(A∩B)</td></tr>
<tr><td>not both</td><td>P((A∩B)′)</td><td>1 − P(A∩B)</td></tr>
</table></div>

<div class="box kid"><b>🧒 الجدول ده بيعمل إيه أصلًا؟</b>
الدكتور مش هيكتبلك "احسب <span class="f">P(A∩B′)</span>". هيكتب كلام إنجليزي زي <span class="en">A but not B</span>.
الجدول ده <b>قاموس</b>: بتدوّر على الكلمة اللي في السؤال (العمود الأول)، فتعرف هي أنهي جزء في الرسمة (العمود التاني)، وتحسبها بالقانون (العمود التالت).
<br>كل الرموز 3 بس: <span class="f">∪</span> = <b>"أو"</b> (واحد على الأقل)، <span class="f">∩</span> = <b>"و"</b> (الاتنين مع بعض)، والشَرطة <span class="f">′</span> = <b>"مش"</b>.</div>

<h3>نفهم الجدول بمثال بالأرقام</h3>
<p>فصل فيه 100 طالب. A = بيلعب كورة (50 طالب)، و B = بيعوم (30 طالب)، و10 منهم بيعملوا الاتنين.
<br>يعني <span class="f">P(A) = 0.5</span> و <span class="f">P(B) = 0.3</span> و <span class="f">P(A∩B) = 0.1</span>. لو وزعناهم على الرسمة:</p>
<div style="text-align:center;margin:10px 0">
<svg viewBox="0 0 380 210" width="100%" style="max-width:420px;direction:ltr" role="img" aria-label="رسمة فن: كورة بس 40، الاتنين 10، سباحة بس 20، ولا حاجة 30">
  <rect x="2" y="2" width="376" height="206" rx="12" fill="var(--surface)" stroke="var(--border)" stroke-width="2"/>
  <circle cx="150" cy="112" r="78" fill="var(--accent)" fill-opacity=".14" stroke="var(--accent)" stroke-width="2"/>
  <circle cx="232" cy="112" r="78" fill="var(--good)" fill-opacity=".14" stroke="var(--good)" stroke-width="2"/>
  <text x="112" y="28" text-anchor="middle" fill="var(--accent)" font-weight="800" font-size="15">A = كورة</text>
  <text x="272" y="28" text-anchor="middle" fill="var(--good)" font-weight="800" font-size="15">B = سباحة</text>
  <text x="115" y="112" text-anchor="middle" fill="var(--text)" font-weight="800" font-size="24">40</text>
  <text x="115" y="134" text-anchor="middle" fill="var(--muted)" font-size="13">كورة بس</text>
  <text x="191" y="112" text-anchor="middle" fill="var(--text)" font-weight="800" font-size="24">10</text>
  <text x="191" y="134" text-anchor="middle" fill="var(--muted)" font-size="13">الاتنين</text>
  <text x="268" y="112" text-anchor="middle" fill="var(--text)" font-weight="800" font-size="24">20</text>
  <text x="268" y="134" text-anchor="middle" fill="var(--muted)" font-size="13">سباحة بس</text>
  <text x="340" y="186" text-anchor="middle" fill="var(--text)" font-weight="800" font-size="20">30</text>
  <text x="340" y="202" text-anchor="middle" fill="var(--muted)" font-size="12">ولا حاجة</text>
</svg></div>
<p>الرسمة فيها <b>4 أجزاء بس</b>: كورة بس (40)، الاتنين (10)، سباحة بس (20)، ولا حاجة (30). المجموع 100.
أي سطر في الجدول هو سؤال عن جزء من دول أو أكتر. تعالى نمشي عليهم واحد واحد:</p>

<div class="card"><ol class="steps">
<li><b><span class="en">at least one / A or B</span> = واحد على الأقل</b><br>
يعني بيلعب كورة <b>أو</b> بيعوم <b>أو</b> الاتنين ← كل اللي جوه الدايرتين: كورة بس + الاتنين + سباحة بس.<br>
ليه بنطرح؟ لو جمعت <span class="f">P(A) + P(B)</span> هتكون عدّيت الـ10 اللي بيعملوا الاتنين <b>مرتين</b> (مرة مع الكورة ومرة مع السباحة)، فبنشيلهم مرة:
<span class="f">0.5 + 0.3 − 0.1 = 0.7</span> ✔ (<span class="f">40 + 10 + 20 = 70</span> طالب)</li>

<li><b><span class="en">both / A and B</span> = الاتنين مع بعض</b><br>
ده الجزء اللي في النص بس (10). غالبًا الدكتور بيديهولك على طول. لو مدّيك الـ union بداله، اقلب قانون الجمع:
<span class="f">P(A∩B) = 0.5 + 0.3 − 0.7 = 0.1</span> ✔</li>

<li><b><span class="en">neither / none</span> = ولا ده ولا ده</b><br>
اللي برا الدايرتين خالص. بتجيبه من الكل (1) ناقص كل اللي جوه الدواير:
<span class="f">1 − 0.7 = 0.3</span> ✔ (30 طالب). والرمز <span class="f">A′ ∩ B′</span> معناه "مش A <b>و</b> مش B".</li>

<li><b><span class="en">A only / A but not B</span> = A بس</b><br>
بيلعب كورة ومش بيعوم ← دايرة A من غير الجزء اللي في النص. دايرة A كلها ناقص المشترك:
<span class="f">0.5 − 0.1 = 0.4</span> ✔ (40 طالب)</li>

<li><b><span class="en">B only / not A but B</span> = B بس</b><br>
نفس الفكرة على دايرة B: <span class="f">0.3 − 0.1 = 0.2</span> ✔ (20 طالب)</li>

<li><b><span class="en">exactly one</span> = واحدة بالظبط</b><br>
واحدة بس، مش الاتنين ← كورة بس + سباحة بس. يعني كل اللي جوه الدواير ناقص اللي في النص:
<span class="f">0.7 − 0.1 = 0.6</span> ✔ (<span class="f">40 + 20 = 60</span>). أو اجمع السطرين اللي فاتوا: <span class="f">0.4 + 0.2 = 0.6</span>.</li>

<li><b><span class="en">not both</span> = مش الاتنين مع بعض</b><br>
أي حاجة <b>غير</b> الجزء اللي في النص (واحدة بس أو ولا حاجة):
<span class="f">1 − 0.1 = 0.9</span> ✔ (<span class="f">100 − 10 = 90</span> طالب)</li>
</ol></div>

<div class="box warn"><b>⚠️ أكتر لخبطة بتحصل</b>
<span class="en">neither</span> و <span class="en">not both</span> شبه بعض بس مختلفين خالص:
<br><span class="en">neither</span> = ولا واحدة <b>خالص</b> ← 0.3 بس.
<br><span class="en">not both</span> = أي حاجة <b>ما عدا</b> الاتنين مع بعض ← 0.9 (وده بيشمل الـ neither).</div>

<div class="box tip"><b>💡 لو نسيت الجدول في الامتحان</b>
مش لازم تحفظه. ارسم الدايرتين واملا الأجزاء الأربعة، <b>ابدأ بالنص</b> (<span class="f">P(A∩B)</span>)، وبعدين A بس و B بس، وآخر حاجة اللي برا (الباقي من 1).
وبعدين شوف السؤال عايز أنهي أجزاء واجمعها.</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (استخدم جدول الترجمة)</div>
<span class="f">P(A) = 0.5 , P(B) = 0.3 , P(A∩B) = 0.1</span>. احسب:
<ol><li>at least one</li><li>neither</li><li>A only</li><li>exactly one</li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">P(A∪B) = 0.5 + 0.3 − 0.1 = 0.7</span><br>
2) <span class="f">1 − 0.7 = 0.3</span><br>
3) <span class="f">0.5 − 0.1 = 0.4</span><br>
4) <span class="f">0.7 − 0.1 = 0.6</span> (أو A only + B only = 0.4 + 0.2)</div></details></div>

<div class="ex"><div class="ex-title">مثال محلول: سماح والمواد (Example 2.27)</div>
<div class="ex-q"><b>📝 Question</b>The probability that Samah passes Mathematics is 2/3, and the probability that she passes English is 4/9. If the probability that she passes both courses is 1/4, what is the probability that she will:<br>(a) pass at least one course?<br>(b) pass Mathematics and fail English?<br>(c) fail both courses?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>passes Mathematics is 2/3</td><td><span class="f">P(M) = 2/3</span></td><td>M = تنجح رياضة</td></tr><tr><td>passes English is 4/9</td><td><span class="f">P(E) = 4/9</span></td><td>E = تنجح إنجليزي</td></tr><tr><td>passes both courses is 1/4</td><td><span class="f">P(M ∩ E) = 1/4</span></td><td>both = الاتنين = تقاطع</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) at least one course</td><td><span class="f">P(M ∪ E)</span></td><td>at least one = واحدة على الأقل = اتحاد</td></tr><tr><td>(b) pass Mathematics and fail English</td><td><span class="f">P(M ∩ E′)</span></td><td>fail = مش تنجح = المكمّلة</td></tr><tr><td>(c) fail both courses</td><td><span class="f">P(M′ ∩ E′) = 1 − P(M ∪ E)</span></td><td>تسقط في الاتنين = ولا واحدة</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">P(M) = 2/3</span> (تنجح رياضة)، <span class="f">P(E) = 4/9</span> (تنجح إنجليزي)، <span class="f">P(M∩E) = 1/4</span> (تنجح في الاتنين).
<ol class="steps">
<li>تنجح في مادة على الأقل: <span class="f">P(M∪E) = 2/3 + 4/9 − 1/4 = 31/36</span></li>
<li>تنجح رياضة وتسقط إنجليزي: <span class="f">P(M∩E′) = 2/3 − 1/4 = 5/12</span></li>
<li>تسقط في الاتنين: <span class="f">P(M′∩E′) = 1 − 31/36 = 5/36</span></li>
</ol></div>

<div class="ex"><div class="ex-title">مثال محلول: بنفس صيغة الميد (Visa و MasterCard)</div>
<div class="ex-q"><b>📝 Question</b>Consider randomly selecting a student at a certain university and let A denote the event that the selected individual has a Visa credit card and B the event it has a MasterCard. Suppose that P(A) = 0.5, P(B) = 0.7, and P(A ∩ B) = 0.35. Then the probability that the selected individual has at least one of the two types of cards is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>has a Visa card</td><td><span class="f">P(A) = 0.5</span></td><td></td></tr><tr><td>has a MasterCard</td><td><span class="f">P(B) = 0.7</span></td><td></td></tr><tr><td>P(A ∩ B) = 0.35</td><td><span class="f">معاه الاتنين</span></td><td>التقاطع</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>at least one of the two types</td><td><span class="f">P(A ∪ B)</span></td><td>at least one = اتحاد</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">P(A) = 0.5, P(B) = 0.7, P(A∩B) = 0.35</span>. احتمال إن الطالب معاه نوع واحد على الأقل من الكروت؟
<ol class="steps">
<li>"على الأقل واحد" = union.</li>
<li><span class="f">P(A∪B) = 0.5 + 0.7 − 0.35 = 0.85</span> ✅</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال محلول: Mutually exclusive (جه في ميدين!)</div>
<div class="ex-q"><b>📝 Question</b>If A and B are mutually exclusive events, P(A) = 0.2, and P(A ∪ B) = 0.9, then P(Ā ∩ B) =</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>mutually exclusive</td><td><span class="f">P(A ∩ B) = 0</span></td><td>متنافيين = مفيش تقاطع</td></tr><tr><td>P(A) = 0.2</td><td><span class="f">P(A) = 0.2</span></td><td></td></tr><tr><td>P(A ∪ B) = 0.9</td><td><span class="f">P(A ∪ B) = 0.9</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>P(Ā ∩ B)</td><td><span class="f">B بس من غير A</span></td><td>ولأن مفيش تقاطع ← ده P(B) نفسه</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
A و B متنافيين، <span class="f">P(A) = 0.2</span>، <span class="f">P(A∪B) = 0.9</span>. أوجد <span class="f">P(Ā ∩ B)</span>.
<ol class="steps">
<li>متنافيين ← <span class="f">P(A∩B) = 0</span> ← <span class="f">P(A∪B) = P(A) + P(B)</span></li>
<li><span class="f">P(B) = 0.9 − 0.2 = 0.7</span></li>
<li><span class="f">P(Ā∩B) = P(B) − P(A∩B) = 0.7 − 0 = 0.7</span> ✅ (لأن B كلها برا A أصلًا)</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال محلول: الزهرتين (ميد 2022 و 2023)</div>
<div class="ex-q"><b>📝 Question</b>When we roll a pair of balanced dice, let A be the event that the sum of the two appearing numbers is 4, and let B be the event that the two numbers on the two appearing faces are equal. Find P(A ∪ B).</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>a pair of balanced dice</td><td><span class="f">n(S) = 36</span></td><td></td></tr><tr><td>the sum is 4</td><td><span class="f">A = {(1,3), (2,2), (3,1)}</span></td><td>3 حالات</td></tr><tr><td>the two faces are equal</td><td><span class="f">B = {(1,1), …, (6,6)}</span></td><td>6 حالات</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>P(A ∪ B)</td><td><span class="f">P(A) + P(B) − P(A ∩ B)</span></td><td>(2,2) موجودة في الاتنين</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
A = المجموع 4 = <span class="f">{(1,3),(2,2),(3,1)}</span> → 3 حالات. B = الوشين متساويين → 6 حالات.
<ol class="steps">
<li><span class="f">A∩B = {(2,2)}</span> → <span class="f">P(A∩B) = 1/36</span></li>
<li><span class="f">P(A∪B) = 3/36 + 6/36 − 1/36 = 8/36</span> ✅</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال: أوجد كل حاجة من 3 معلومات</div>
<div class="ex-q"><b>📝 Question</b>If P(A) = 1/3, P(B) = 1/4 and P(A ∩ B) = 1/5, find P(A′), P(A ∩ B′), P(A ∪ B) and P(A′ ∩ B′).</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>P(A) = 1/3, P(B) = 1/4</td><td><span class="f">P(A), P(B)</span></td><td>معطيين مباشرة</td></tr><tr><td>P(A ∩ B) = 1/5</td><td><span class="f">التقاطع</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>P(A′)</td><td><span class="f">1 − P(A)</span></td><td>مش A</td></tr><tr><td>P(A ∩ B′)</td><td><span class="f">P(A) − P(A ∩ B)</span></td><td>A بس</td></tr><tr><td>P(A′ ∩ B′)</td><td><span class="f">1 − P(A ∪ B)</span></td><td>ولا A ولا B</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">P(A) = 1/3, P(B) = 1/4, P(A∩B) = 1/5</span>
<ol class="steps">
<li><span class="f">P(A′) = 1 − 1/3 = 2/3</span></li>
<li><span class="f">P(A∩B′) = 1/3 − 1/5 = 2/15</span></li>
<li><span class="f">P(A∪B) = 1/3 + 1/4 − 1/5 = 23/60</span></li>
<li><span class="f">P(A′∩B′) = 1 − 23/60 = 37/60</span></li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (نفس فكرة الميد)</div>
A و B متنافيين، <span class="f">P(A) = 0.35</span>، و <span class="f">P(A∪B) = 0.75</span>. أوجد <span class="f">P(B)</span> و <span class="f">P(A∩B)</span> و <span class="f">P(Ā∩B)</span>.
<details><summary>اعرض الحل</summary><div>
متنافيين ← <span class="f">P(A∩B) = 0</span>. <span class="f">P(B) = 0.75 − 0.35 = 0.4</span>. و <span class="f">P(Ā∩B) = P(B) − 0 = 0.4</span>.</div></details></div>

<div class="box warn"><b>⚠️ غلطات شائعة</b>
<ul>
<li>تنسى تطرح <span class="f">P(A∩B)</span> في قانون الجمع → هيطلعلك رقم أكبر من 1 أحيانًا (زي 1.15 في الاختيارات — ده فخ!).</li>
<li>أي احتمال أكبر من 1 أو سالب = غلط أكيد. شيله من الاختيارات فورًا.</li>
<li>Mutually exclusive ≠ Independent (هتفهم الفرق في محاضرة 2).</li>
</ul></div>

<div class="box exam"><b>🎓 الدكتور بيسأل فيها إزاي؟</b>
<ul>
<li><b>Visa / MasterCard</b>: عطاك P(A), P(B), P(A∩B) وعايز "at least one" → union. (جه في 2022 و2023).</li>
<li><b>Ahmed passes statistics & Math</b>: نفس الفكرة بأسماء تانية. (جه 2023/24).</li>
<li><b>Mutually exclusive + P(A∪B)</b> وعايز <span class="f">P(Ā∩B)</span> أو <span class="f">P(A∪B)</span>. (جه في التلات امتحانات!).</li>
<li><b>زهرتين</b>: مجموع رقم معين + الوشين متساويين، وعايز التقاطع أو الاتحاد.</li>
</ul></div>
`
});

/* ===================== LECTURE 2 ===================== */
window.LECTURES.push({
  id: 'lec2', n: 2, focus: 'mid',
  short: 'الشرطي والاستقلال وبايز',
  title: 'الاحتمال الشرطي، الاستقلال، الاحتمال الكلي، وقانون بايز',
  en: "Conditional Probability, Independence, Total Probability, Bayes' Rule",
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
الاحتمال الشرطي = "إيه فرصة A <b>لو عرفت</b> إن B حصلت خلاص؟".
<br>مثال: فرصة إن الجو يمطر = 10%. بس لو عرفت إن السما مليانة سحاب، الفرصة بتزيد. المعلومة الجديدة بتغيّر الاحتمال.</div>

<h2>1) Conditional Probability</h2>
<div class="box law"><b>📐 القانون</b>
<div class="fm">P(A | B) = <span class="frac"><span>P(A ∩ B)</span><span>P(B)</span></span> &nbsp;&nbsp; , P(B) &gt; 0</div>
اقراها: "احتمال A <b>given</b> B". الخط العمودي <span class="f">|</span> معناه "بشرط إن".
<br>القاعدة: <b>اللي بعد الخط (المعطى) هو اللي في المقام دايمًا.</b>
<div class="fm">P(B | A) = <span class="frac"><span>P(A ∩ B)</span><span>P(A)</span></span></div>
</div>

<div class="ex"><div class="ex-title">مثال: نظام الاتصالات</div>
<div class="ex-q"><b>📝 Question</b>If the probability that a communication system will have high fidelity is 0.81 and the probability that it will have high fidelity and high selectivity is 0.18, what is the probability that a system with high fidelity will also have high selectivity?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>high fidelity is 0.81</td><td><span class="f">P(F) = 0.81</span></td><td></td></tr><tr><td>high fidelity and high selectivity is 0.18</td><td><span class="f">P(F ∩ S) = 0.18</span></td><td>and = تقاطع</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>a system with high fidelity will also have high selectivity</td><td><span class="f">P(S | F)</span></td><td>"with high fidelity" = المعطى ← بعد الشرطة</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
احتمال high fidelity = 0.81، واحتمال high fidelity <u>و</u> high selectivity = 0.18. لو النظام high fidelity، إيه احتمال إنه كمان high selectivity؟
<ol class="steps">
<li>B = fidelity (ده المعطى) ، A = selectivity</li>
<li><span class="f">P(A|B) = 0.18 / 0.81 = 2/9 ≈ 0.222</span></li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
<span class="f">P(A) = 0.8 , P(B) = 0.5 , P(A∩B) = 0.2</span>. احسب <span class="f">P(A|B)</span> و <span class="f">P(B|A)</span>.
<details><summary>اعرض الحل</summary><div>
المعطى في المقام: <span class="f">P(A|B) = 0.2/0.5 = 0.4</span>، و <span class="f">P(B|A) = 0.2/0.8 = 0.25</span>. لاحظ إنهم مختلفين!</div></details></div>

<h3>مسائل الجدول (Contingency table) ← بتيجي كتير في السكشن والأسايمنت</h3>
<div class="ex"><div class="ex-title">مثال: 200 شخص حسب النوع والتعليم (Assignment 1)</div>
<div class="ex-q"><b>📝 Question</b>200 adults are classified according to sex and their level of education in the following table:<div class="table-wrap"><table><tr><th></th><th>Male (M)</th><th>Female (F)</th></tr><tr><th>Elementary (E)</th><td>28</td><td>50</td></tr><tr><th>Secondary (S)</th><td>38</td><td>45</td></tr><tr><th>College (C)</th><td>22</td><td>17</td></tr></table></div>If a person is selected at random from this group, then:<br>1) the probability that he is a male is<br>2) the probability that the person is male given that the person has a secondary education is<br>3) the probability that the person does not have a college degree given that the person is a female is<br>4) Are the events M and E independent? Why?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>200 adults</td><td><span class="f">n(S) = 200</span></td><td>المجموع الكلي</td></tr><tr><td>table: sex × education</td><td><span class="f">خانة = تقاطع</span></td><td>مثلاً Male و Secondary = 38</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>1) he is a male</td><td><span class="f">P(M) = 88/200</span></td><td>مجموع عمود M</td></tr><tr><td>2) male given secondary education</td><td><span class="f">P(M | S)</span></td><td>given = بشرط ← اقفل على صف S</td></tr><tr><td>3) does not have a college degree given female</td><td><span class="f">P(C′ | F)</span></td><td>اقفل على عمود F</td></tr><tr><td>4) Are M and E independent?</td><td><span class="f">P(M | E) = P(M) ؟</span></td><td>قارن</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<div class="table-wrap"><table>
<tr><th></th><th>Male (M)</th><th>Female (F)</th><th>Total</th></tr>
<tr><th>Elementary (E)</th><td>28</td><td>50</td><td>78</td></tr>
<tr><th>Secondary (S)</th><td>38</td><td>45</td><td>83</td></tr>
<tr><th>College (C)</th><td>22</td><td>17</td><td>39</td></tr>
<tr><th>Total</th><td>88</td><td>112</td><td>200</td></tr>
</table></div>
<ol class="steps">
<li><b>أول حاجة: احسب المجاميع</b> (الصف والعمود الأخير).</li>
<li><span class="f">P(M) = 88/200 = 0.44</span></li>
<li><span class="f">P(M | S) = 38/83 = 0.4578</span> ← بص على <b>صف S بس</b> (لأنه المعطى)، واقسم على مجموعه.</li>
<li><span class="f">P(not College | F) = (50+45)/112 = 95/112 = 0.8482</span> ← بص على <b>عمود F بس</b>.</li>
<li>هل M و E مستقلين؟ <span class="f">P(M) = 0.44</span> بس <span class="f">P(M|E) = 28/78 = 0.359</span> → مش متساويين → <b>dependent</b>.</li>
</ol>
<div class="box tip"><b>💡 تريكة الجدول:</b> في <span class="f">P(A|B)</span>، "اقفل" على صف/عمود B بس وكأنه هو الدنيا كلها، واقسم على مجموعه.</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (نفس الجدول)</div>
<ol><li>احتمال إن الشخص Female بشرط إنه College؟</li><li>احتمال إنه Secondary <b>و</b> Male؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) اقفل على صف College (39): <span class="f">17/39 = 0.436</span>.<br>
2) مفيش شرط ← على الكل: <span class="f">38/200 = 0.19</span>.</div></details></div>

<h2>2) قاعدة الضرب (Multiplicative Rule)</h2>
<div class="box law">
<div class="fm">P(A ∩ B) = P(A) · P(B | A) = P(B) · P(A | B)</div>
</div>
<div class="ex"><div class="ex-title">مثال: الفيوزات (من غير إرجاع)</div>
<div class="ex-q"><b>📝 Question</b>Suppose we have a fuse box containing 20 fuses of which 5 are defective (D) and 15 are non-defective (N). If 2 fuses are selected at random and removed from the box in succession without replacing the first, what is the probability that both fuses are defective?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>20 fuses of which 5 are defective</td><td><span class="f">D = 5 , N = 15</span></td><td></td></tr><tr><td>2 fuses … without replacing the first</td><td><span class="f">P(A ∩ B) = P(A)·P(B | A)</span></td><td>من غير إرجاع ← العدد بيقل</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>both fuses are defective</td><td><span class="f">P(D₁ ∩ D₂) = 5/20 × 4/19</span></td><td>التاني من 19 فاضلين، منهم 4 بايظين</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
صندوق فيه 20 فيوز، منهم 5 بايظين. سحبنا 2 ورا بعض <b>من غير ما نرجع الأول</b>. احتمال الاتنين بايظين؟
<ol class="steps">
<li>الأول بايظ: <span class="f">5/20</span></li>
<li>التاني بايظ بشرط إن الأول بايظ: فاضل 4 بايظين من 19 → <span class="f">4/19</span></li>
<li><span class="f">P = 5/20 × 4/19 = 0.0526</span></li>
</ol>
<div class="box tip">لو <b>with replacement</b> (بنرجّع): الاحتمال مابيتغيرش → <span class="f">5/20 × 5/20</span>.</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
كيس فيه 5 كور حمرا و 5 زرقا. سحبت كورتين ورا بعض. احتمال الاتنين حمرا:
<ol><li>من غير إرجاع؟</li><li>مع الإرجاع؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">5/10 × 4/9 = 20/90 = 0.222</span><br>
2) <span class="f">5/10 × 5/10 = 0.25</span></div></details></div>

<h2>3) الاستقلال (Independent Events) ← بيجي سؤال عليه كل امتحان</h2>
<div class="box def"><b>📖 يعني إيه مستقلين؟</b>
حدوث واحد <b>مالوش أي تأثير</b> على فرصة التاني. زي رمي عملة ورمي زهرة.</div>
<div class="box law"><b>📐 A و B مستقلين لو أي واحدة من دول اتحققت:</b>
<div class="fm mix"><span class="f">P(A ∩ B) = P(A) · P(B)</span> &nbsp; ← دي اللي هتستخدمها 90% من الوقت</div>
<div class="fm">P(A | B) = P(A) &nbsp;&nbsp; أو &nbsp;&nbsp; P(B | A) = P(B)</div>
</div>

<div class="ex"><div class="ex-title">⭐ مثال الميد (جه 2022 و 2023 بالحرف)</div>
<div class="ex-q"><b>📝 Question</b>If P(A) = 0.5, P(B) = 0.6 and P(A ∪ B) = 0.8; then A and B are<br>(A) dependent &nbsp; (B) independent &nbsp; (C) disjoint &nbsp; (D) P(A∩B) cannot be found from given information &nbsp; (E) none of these</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>P(A) = 0.5, P(B) = 0.6</td><td><span class="f">P(A)·P(B) = 0.3</span></td><td>جهّزه للمقارنة</td></tr><tr><td>P(A ∪ B) = 0.8</td><td><span class="f">P(A ∩ B) = 0.5 + 0.6 − 0.8</span></td><td>من قانون الاتحاد</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>dependent / independent / disjoint</td><td><span class="f">P(A ∩ B) = P(A)·P(B) ؟</span></td><td>متساويين ← independent</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">P(A) = 0.5, P(B) = 0.6, P(A∪B) = 0.8</span>. A و B: dependent؟ independent؟ disjoint؟
<ol class="steps">
<li>هات التقاطع من قانون الجمع: <span class="f">P(A∩B) = 0.5 + 0.6 − 0.8 = 0.3</span></li>
<li>احسب حاصل الضرب: <span class="f">P(A)·P(B) = 0.5 × 0.6 = 0.3</span></li>
<li>متساويين ← <b>Independent</b> ✅ (ومش disjoint لأن التقاطع مش صفر)</li>
</ol></div>

<div class="ex"><div class="ex-title">⭐ مثال ميد 2023/24 (نسخة أصعب شوية)</div>
<div class="ex-q"><b>📝 Question</b>If P(A) = 0.5, P(B) = 0.6 and P(A ∩ B<sup>C</sup>) = 0.4; then A and B are<br>(A) dependent &nbsp; (B) independent &nbsp; (C) disjoint &nbsp; (D) none of these</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>P(A ∩ B<sup>C</sup>) = 0.4</td><td><span class="f">A بس = 0.4</span></td><td>A من غير B</td></tr><tr><td>P(A) = 0.5</td><td><span class="f">P(A ∩ B) = 0.5 − 0.4</span></td><td>الباقي من A هو التقاطع</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>dependent / independent / disjoint</td><td><span class="f">P(A ∩ B) = P(A)·P(B) ؟</span></td><td>0.1 مقابل 0.3</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">P(A) = 0.5, P(B) = 0.6, P(A ∩ B<sup>c</sup>) = 0.4</span>
<ol class="steps">
<li><span class="f">P(A∩B) = P(A) − P(A∩B<sup>c</sup>) = 0.5 − 0.4 = 0.1</span></li>
<li><span class="f">P(A)P(B) = 0.3 ≠ 0.1</span> ← <b>Dependent</b> ✅</li>
</ol></div>

<div class="ex"><div class="ex-title">تمرين المحاضرة</div>
<div class="ex-q"><b>📝 Question</b>Determine whether the events A and B are independent in each case:<br>1) P(A) = 1/2, P(B) = 1/3, P(A ∪ B) = 2/3<br>2) P(A) = 1/3, P(B) = 4/15, P(A ∪ B) = 8/15</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>P(A), P(B), P(A ∪ B)</td><td><span class="f">P(A ∩ B) = P(A) + P(B) − P(A ∪ B)</span></td><td>نطلّع التقاطع الأول</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>independent?</td><td><span class="f">P(A ∩ B) = P(A)·P(B) ؟</span></td><td>في كل حالة</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<ol class="steps">
<li><span class="f">P(A) = 1/2, P(B) = 1/3, P(A∪B) = 2/3</span> ← <span class="f">P(A∩B) = 1/2+1/3−2/3 = 1/6 = (1/2)(1/3)</span> ← مستقلين.</li>
<li><span class="f">P(A) = 1/3, P(B) = 4/15, P(A∪B) = 8/15</span> ← <span class="f">P(A∩B) = 5/15+4/15−8/15 = 1/15</span>، بس <span class="f">(1/3)(4/15) = 4/45</span> ← مش مستقلين.</li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك: dependent ولا independent ولا disjoint؟</div>
<ol><li><span class="f">P(A) = 0.2 , P(B) = 0.5 , P(A∪B) = 0.6</span></li>
<li><span class="f">P(A) = 0.4 , P(B) = 0.5 , P(A∪B) = 0.9</span></li>
<li><span class="f">P(A) = 0.6 , P(B) = 0.5 , P(A∪B) = 0.9</span></li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">P(A∩B) = 0.2+0.5−0.6 = 0.1</span> و <span class="f">0.2×0.5 = 0.1</span> ← <b>independent</b>.<br>
2) <span class="f">P(A∩B) = 0.4+0.5−0.9 = 0</span> ← <b>disjoint</b> (متنافيين).<br>
3) <span class="f">P(A∩B) = 0.2</span> بس <span class="f">0.6×0.5 = 0.3</span> ← <b>dependent</b>.</div></details></div>

<div class="box warn"><b>⚠️ أكبر فخ في المادة: Mutually Exclusive ≠ Independent</b>
<ul>
<li><b>Mutually exclusive:</b> <span class="f">P(A∩B) = 0</span> (مايحصلوش مع بعض).</li>
<li><b>Independent:</b> <span class="f">P(A∩B) = P(A)P(B)</span> (واحد مابيأثرش في التاني).</li>
<li>لو الاتنين احتمالهم أكبر من صفر ومتنافيين، يبقوا <b>dependent</b>: لو A حصلت، B بقت مستحيلة، يعني A أثرت فيها!</li>
</ul></div>

<div class="box law"><b>📐 لو مستقلين، القوانين بتبقى:</b>
<div class="fm">P(A ∩ B) = P(A)P(B) &nbsp;&nbsp;&nbsp; P(A ∪ B) = P(A) + P(B) − P(A)P(B)</div>
<div class="fm">P(at least one) = 1 − P(A′)P(B′)</div>
مثال: محركين مستقلين بيشتغلوا باحتمال 0.4 و0.6 → الاتنين يشتغلوا = <span class="f">0.4 × 0.6 = 0.24</span>.
</div>

<h2>4) قانون الاحتمال الكلي (Total Probability)</h2>
<div class="box kid"><b>🧒 الفكرة</b>
مصنع فيه 3 مكن. كل مكنة بتعمل جزء من الإنتاج، وكل مكنة ليها نسبة عيوب. عايز تعرف: لو مسكت قطعة عشوائي من كل الإنتاج، إيه فرصة إنها بايظة؟
<br>الإجابة: اجمع "نصيب كل مكنة × نسبة عيوبها".</div>
<div class="box law">
<div class="fm">P(B) = P(A<sub>1</sub>)P(B|A<sub>1</sub>) + P(A<sub>2</sub>)P(B|A<sub>2</sub>) + P(A<sub>3</sub>)P(B|A<sub>3</sub>)</div>
A1, A2, A3 لازم يكونوا partition: متنافيين ومجموعهم = S (يعني مجموع احتمالاتهم = 1).
</div>

<h2>5) قانون بايز (Bayes' Rule)</h2>
<div class="box kid"><b>🧒 الفكرة</b>
لقيت قطعة بايظة. إيه احتمال إنها <b>جت من مكنة 1</b>؟ دي "بنرجع بالعكس": من النتيجة للسبب.</div>
<div class="box law">
<div class="fm">P(A<sub>i</sub> | B) = <span class="frac"><span>P(A<sub>i</sub>) · P(B | A<sub>i</sub>)</span><span>P(B)</span></span> = <span class="frac"><span class="ar">فرع المكنة دي بس</span><span class="ar">مجموع كل الفروع (Total)</span></span></div>
</div>

<div class="ex"><div class="ex-title">مثال المحاضرة (Example 2.38 / 2.39)</div>
<div class="ex-q"><b>📝 Question</b>Three machines A1, A2, and A3 make 20%, 30%, and 50%, respectively, of the products. It is known that 1%, 4%, and 7% of the products made by each machine, respectively, are defective.<br>(a) If a finished product is randomly selected, what is the probability that it is defective?<br>(b) If it is known that the selected product is defective, what is the probability that it is made by machine A2? by machine A3?</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>make 20%, 30%, and 50%</td><td><span class="f">P(A1) = 0.2, P(A2) = 0.3, P(A3) = 0.5</span></td><td>نسبة كل مكنة من الإنتاج</td></tr><tr><td>1%, 4%, and 7% … are defective</td><td><span class="f">P(D|A1) = 0.01, P(D|A2) = 0.04, P(D|A3) = 0.07</span></td><td>"of the products made by each machine" ← شرطي</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) it is defective</td><td><span class="f">P(D)</span></td><td>الاحتمال الكلي</td></tr><tr><td>(b) known defective … made by A2</td><td><span class="f">P(A2 | D)</span></td><td>Bayes: المعطى D</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
3 مكن بتعمل 20%، 30%، 50% من الإنتاج. نسب العيوب 1%، 4%، 7%.

<h3>الفكرة الأول: تخيّل إن المصنع عمل 1000 قطعة</h3>
<div class="box kid"><b>🧒 انسى الاحتمالات دقيقة وفكّر بعدد قطع حقيقي</b>
<ul>
<li>A1 بتعمل 20% ← <span class="f">200</span> قطعة، منهم 1% بايظ ← <span class="f">2</span> قطع بايظة.</li>
<li>A2 بتعمل 30% ← <span class="f">300</span> قطعة، منهم 4% بايظ ← <span class="f">12</span> قطعة بايظة.</li>
<li>A3 بتعمل 50% ← <span class="f">500</span> قطعة، منهم 7% بايظ ← <span class="f">35</span> قطعة بايظة.</li>
</ul>
<b>(a)</b> كل البايظ في المصنع = <span class="f">2 + 12 + 35 = 49</span> قطعة من 1000 ← <span class="f">P(D) = 49/1000 = 0.049</span>.<br>
<b>(b)</b> مسكت قطعة <b>بايظة</b>، يعني إنت دلوقتي واقف جوه الـ 49 بس. منهم 12 من A2 ← <span class="f">P(A2|D) = 12/49 = 0.2449</span>.<br>
ده كل Bayes: <b>"نصيب المكنة من البايظ ÷ كل البايظ"</b>. الجدول اللي تحت هو نفس الكلام ده بس بالاحتمالات بدل العدد.</div>

<h3>إزاي ترسم الجدول خطوة خطوة</h3>
<ol class="steps">
<li><b>عمود 1: أسماء المكن.</b> صف لكل مكنة (A1, A2, A3) + صف أخير للمجموع (Total).</li>
<li><b>عمود 2: <span class="f">P(A<sub>i</sub>)</span> = نصيب كل مكنة من الإنتاج.</b> ده الرقم اللي جنب كلمة "make" أو "production": <span class="f">0.2 ، 0.3 ، 0.5</span>.
<br>✔ تأكيد: مجموع العمود ده لازم يطلع <b>1</b> (المكن مع بعض بتعمل كل الإنتاج).</li>
<li><b>عمود 3: <span class="f">P(D|A<sub>i</sub>)</span> = نسبة العيوب جوه كل مكنة.</b> ده الرقم اللي جنب "defective": <span class="f">0.01 ، 0.04 ، 0.07</span>.
<br>⚠️ العمود ده <b>مابيتجمعش</b>، مجموعه مالوش معنى.</li>
<li><b>عمود 4: الضرب = الفرع.</b> اضرب عمود 2 × عمود 3 في كل صف: <span class="f">0.2 × 0.01 = 0.002</span> ، <span class="f">0.3 × 0.04 = 0.012</span> ، <span class="f">0.5 × 0.07 = 0.035</span>.
<br>كل رقم هنا معناه: <span class="f">P(A<sub>i</sub> ∩ D)</span> = "القطعة من المكنة دي <u>و</u> بايظة" (زي الـ 2 و12 و35 من الألف).</li>
<li><b>اجمع عمود 4 = إجابة (a).</b> <span class="f">0.002 + 0.012 + 0.035 = 0.049</span> ← ده <span class="f">P(D)</span> (Total probability).</li>
<li><b>عمود 5: كل خانة في عمود 4 ÷ المجموع = إجابة (b).</b> <span class="f">0.002 ÷ 0.049 = 0.0408</span> ، <span class="f">0.012 ÷ 0.049 = 0.2449</span> ، <span class="f">0.035 ÷ 0.049 = 0.7143</span>.
<br>✔ تأكيد: مجموع العمود ده لازم يطلع <b>1</b>.</li>
</ol>

<div class="table-wrap"><table>
<tr><th>①<br>Machine</th><th>②<br>P(A<sub>i</sub>)<br><small>نصيبها من الإنتاج</small></th><th>③<br>P(D|A<sub>i</sub>)<br><small>نسبة عيوبها</small></th><th><span class="f">④ = ② × ③</span><br>الفرع<br><small>P(A<sub>i</sub> ∩ D)</small></th><th><span class="f">⑤ = ④ ÷ 0.049</span><br>Bayes<br><small>P(A<sub>i</sub> | D)</small></th></tr>
<tr><td>A1</td><td>0.2</td><td>0.01</td><td>0.002</td><td>0.0408</td></tr>
<tr><td>A2</td><td>0.3</td><td>0.04</td><td>0.012</td><td><b>0.2449</b></td></tr>
<tr><td>A3</td><td>0.5</td><td>0.07</td><td>0.035</td><td><b>0.7143</b></td></tr>
<tr><th>Total</th><td>1 ✔</td><td>✘ مابيتجمعش</td><th>P(D) = 0.049</th><td>1 ✔</td></tr>
</table></div>
<div class="box tip"><b>💡 اقرا الجدول كده:</b> عمود ④ مجموعه = إجابة (a)، وعمود ⑤ = إجابة (b). سؤالين في دقيقة.</div>

<h3>الحل زي ما تكتبه في الامتحان ([Answer in detail])</h3>
<div class="card">
<b>(a)</b> بقانون الاحتمال الكلي:
<div class="fm">P(D) = P(A1)P(D|A1) + P(A2)P(D|A2) + P(A3)P(D|A3)</div>
<div class="fm">= (0.2)(0.01) + (0.3)(0.04) + (0.5)(0.07) = 0.002 + 0.012 + 0.035 = 0.049</div>
<b>(b)</b> بقانون بايز:
<div class="fm">P(A2|D) = P(A2)P(D|A2) / P(D) = 0.012 / 0.049 = 0.2449</div>
<div class="fm">P(A3|D) = P(A3)P(D|A3) / P(D) = 0.035 / 0.049 = 0.7143</div>
</div>

<div class="box warn"><b>⚠️ فخاخ بتيجي في السؤال ده:</b>
<ul>
<li><b>1% مش 0.1:</b> حوّل النسبة لعشري صح: <span class="f">1% = 0.01</span> ، <span class="f">4% = 0.04</span>.</li>
<li><b>لو سأل عن السليمة (non-defective):</b> عمود ③ يبقى <span class="f">1 − نسبة العيوب</span>: <span class="f">0.99 ، 0.96 ، 0.93</span>، وكمّل نفس الخطوات.</li>
<li><b>ماتلخبطش بين <span class="f">P(D|A2)</span> و <span class="f">P(A2|D)</span>:</b> الأولى معطاة في السؤال (0.04)، التانية هي المطلوبة (0.2449). اللي بعد الشرطة هو اللي "عارفينه".</li>
<li><b>"is known that it is defective"</b> أو <b>"if it is found defective"</b> = إشارة إن المطلوب Bayes (قسمة على 0.049)، مش الاحتمال الكلي.</li>
</ul></div>
</div>

<div class="ex"><div class="ex-title">⭐ مثال ميد 2023/24</div>
<div class="ex-q"><b>📝 Question</b>A factory contains 3 machines. The production of the machines is respectively 30%, 50%, 20% of the total production. The percentage of defected items from the 1st machine is 1%, from the 2nd machine is 2%, and from the 3rd machine is 3%. A unit is selected from the total production.<br>(a) The probability that it is defective is<br>(b) If it is found that it is defective, then the probability that it is coming from the 1st machine is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>30%, 50%, 20% of the total production</td><td><span class="f">P(A1) = 0.3, P(A2) = 0.5, P(A3) = 0.2</span></td><td></td></tr><tr><td>defected items from the 1st machine is 1% …</td><td><span class="f">P(D|A1) = 0.01, P(D|A2) = 0.02, P(D|A3) = 0.03</span></td><td>"from the machine" ← شرطي</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) it is defective</td><td><span class="f">P(D)</span></td><td>الاحتمال الكلي</td></tr><tr><td>(b) found defective … from the 1st machine</td><td><span class="f">P(A1 | D)</span></td><td>Bayes</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
3 مكن: 30%، 50%، 20% من الإنتاج، والعيوب 1%، 2%، 3%.
<ol class="steps">
<li>الفروع: <span class="f">0.3×0.01 = 0.003</span>، <span class="f">0.5×0.02 = 0.010</span>، <span class="f">0.2×0.03 = 0.006</span></li>
<li><span class="f">P(D) = 0.003 + 0.010 + 0.006 = 0.019</span> ✅</li>
<li><span class="f">P(M<sub>1</sub>|D) = 0.003 / 0.019 = 0.158</span> ✅</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال: الأخين والأطباق (Assignment 3)</div>
<div class="ex-q"><b>📝 Question</b>Two brothers, Mohammad and Ahmad own and operate a small restaurant. Mohammad washes 50% of the dishes and Ahmad washes 50% of the dishes. When Mohammad washes a dish, he might break it with probability 0.40. On the other hand, when Ahmad washes a dish, he might break it with probability 0.10. Then,<br>(a) the probability that a dish will be broken during washing is<br>(b) If a broken dish was found in the washing machine, the probability that it was washed by Mohammad is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>Mohammad washes 50%</td><td><span class="f">P(M) = 0.5</span></td><td></td></tr><tr><td>Ahmad washes 50%</td><td><span class="f">P(A) = 0.5</span></td><td></td></tr><tr><td>when Mohammad washes … break it with probability 0.40</td><td><span class="f">P(B | M) = 0.4</span></td><td>"when" = بشرط</td></tr><tr><td>when Ahmad washes … 0.10</td><td><span class="f">P(B | A) = 0.1</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) a dish will be broken</td><td><span class="f">P(B)</span></td><td>الاحتمال الكلي</td></tr><tr><td>(b) broken dish … washed by Mohammad</td><td><span class="f">P(M | B)</span></td><td>Bayes: المعطى B</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
محمد بيغسل 50% وأحمد 50%. محمد بيكسر باحتمال 0.4، وأحمد 0.1.
<ol class="steps">
<li><span class="f">P(broken) = 0.5×0.4 + 0.5×0.1 = 0.2 + 0.05 = 0.25</span></li>
<li><span class="f">P(Mohammad | broken) = 0.2 / 0.25 = 0.8</span></li>
</ol></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (اعمل الجدول)</div>
مكنتين: M1 بتعمل 70% والعيوب فيها 1%، و M2 بتعمل 30% والعيوب فيها 4%.
<ol><li>احتمال إن قطعة عشوائية تطلع defective؟</li><li>لو طلعت defective، إيه احتمال إنها من M2؟</li></ol>
<details><summary>اعرض الحل</summary><div>
الفروع: <span class="f">0.7×0.01 = 0.007</span> و <span class="f">0.3×0.04 = 0.012</span><br>
1) <span class="f">P(D) = 0.007 + 0.012 = 0.019</span><br>
2) <span class="f">P(M2|D) = 0.012/0.019 = 0.632</span>. لاحظ: M2 بتعمل إنتاج أقل، بس هي غالبًا السبب لأن عيوبها أكتر.</div></details></div>

<div class="box exam"><b>🎓 الدكتور بيسأل فيها إزاي؟</b>
<ul>
<li><b>Dependent / Independent / Disjoint</b> من <span class="f">P(A), P(B), P(A∪B)</span> أو <span class="f">P(A∩B<sup>c</sup>)</span>. (التلات امتحانات!)</li>
<li><b>المصنع والمكن</b>: سؤالين ورا بعض: (أ) احتمال إنها defective (Total)، (ب) لو defective جت من مكنة كذا (Bayes).</li>
<li><span class="f">P(A∩B)</span> من <span class="f">P(B)</span> و <span class="f">P(A|B)</span>: <span class="f">0.3 × 0.4 = 0.12</span>.</li>
</ul></div>
`
});

/* ===================== LECTURE 3 ===================== */
window.LECTURES.push({
  id: 'lec3', n: 3, focus: 'hot',
  short: 'المتغير المتقطع وذات الحدين',
  title: 'المتغير العشوائي المتقطع، التوقع، التباين، وتوزيع ذات الحدين',
  en: 'Discrete Random Variables, E(X), Var(X), Binomial Distribution',
  html: `
<div class="box kid"><b>🧒 الفكرة ببساطة</b>
بدل ما نقول "DD" و"DN"، بنحوّل كل نتيجة لـ <b>رقم</b>. مثلًا X = "عدد القطع البايظة".
<br>DD → 2 ، DN → 1 ، ND → 1 ، NN → 0. كده X بقى <b>متغير عشوائي</b> (Random Variable) قيمه {0, 1, 2}.</div>

<h2>1) Random Variable</h2>
<div class="box def">
<ul>
<li><b>Random variable X:</b> دالة بتدي لكل نتيجة في S رقم حقيقي. <span class="f">X</span> كبيرة = المتغير، <span class="f">x</span> صغيرة = قيمة معينة.</li>
<li><b>Discrete (متقطع):</b> قيمه ممكن تتعد (0, 1, 2, ...). غالبًا <b>عدّ</b>: عدد البايظين، عدد الأطفال.</li>
<li><b>Continuous (متصل):</b> بياخد أي قيمة في فترة. غالبًا <b>قياس</b>: طول، وزن، وقت. (محاضرة 4)</li>
</ul></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
رميت عملة مرتين، و X = عدد الصور (H).
<ol><li>X بياخد قيم إيه؟</li><li>اعمل جدول التوزيع <span class="f">f(x)</span>.</li><li>X ده discrete ولا continuous؟</li></ol>
<details><summary>اعرض الحل</summary><div>
1) S = {HH, HT, TH, TT} ← X = 2, 1, 1, 0 ← القيم <span class="f">{0, 1, 2}</span><br>
2) <span class="f">f(0) = 1/4 , f(1) = 2/4 , f(2) = 1/4</span> (ومجموعهم 1 ✓)<br>
3) Discrete، لأنه عدّ.</div></details></div>

<h2>2) Probability Distribution (جدول التوزيع)</h2>
<div class="box law"><b>📐 f(x) = P(X = x) تبقى توزيع احتمالي صح لو:</b>
<div class="fm">1) f(x) ≥ 0 <span class="ar">لكل x</span> &nbsp;&nbsp;&nbsp; 2) Σ f(x) = 1</div>
</div>

<div class="ex"><div class="ex-title">⭐ نوع 1: أوجد الثابت C (جه في التلات امتحانات!)</div>
<div class="ex-q"><b>📝 Question</b>If X is a random variable with the following probability distribution:<div class="table-wrap"><table><tr><th>X</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>f(x)</th><td>C</td><td>3C</td><td>4C</td><td>2C</td></tr></table></div>Then the value of the constant C is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>probability distribution table</td><td><span class="f">f(x) = C, 3C, 4C, 2C</span></td><td></td></tr><tr><td>(any pmf)</td><td><span class="f">Σ f(x) = 1</span></td><td>مجموع الاحتمالات = 1</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>the value of the constant C</td><td><span class="f">C + 3C + 4C + 2C = 1</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<ol class="steps">
<li>المجموع = 1: <span class="f">C + 3C + 4C + 2C = 10C = 1</span></li>
<li><span class="f">C = 0.1</span> ✅</li>
</ol>
ونسخة تانية: <span class="f">0.3 + 0.1 + 0.2 + C = 1 → C = 0.4</span>.
</div>

<div class="ex"><div class="ex-title">⭐ نوع 2: احسب احتمال من الجدول (جه في التلات امتحانات!)</div>
<div class="ex-q"><b>📝 Question</b>If X is a random variable with the following probability distribution:<div class="table-wrap"><table><tr><th>X</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>f(x)</th><td>0.1</td><td>0.2</td><td>0.2</td><td>0.5</td></tr></table></div>Then P(2 ≤ X &lt; 4) is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>probability distribution table</td><td><span class="f">f(1..4) = 0.1, 0.2, 0.2, 0.5</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>P(2 ≤ X &lt; 4)</td><td><span class="f">f(2) + f(3)</span></td><td>≤ يدخل 2، و &lt; يطلّع 4</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<span class="f">P(2 ≤ X &lt; 4)</span> = القيم 2 و 3 بس (4 مش داخلة لأن العلامة &lt;):
<div class="fm">P(2) + P(3) = 0.2 + 0.2 = 0.4</div>
<div class="box warn"><b>⚠️ ركّز في العلامات!</b> في المتقطع: <span class="f">≤</span> بتدخّل الرقم، و <span class="f">&lt;</span> بتطلّعه. <span class="f">P(2 &lt; X ≤ 4) = P(3) + P(4)</span>.</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
<div class="table-wrap"><table><tr><th>X</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>f(x)</th><td>0.2</td><td>0.3</td><td>0.4</td><td>k</td></tr></table></div>
<ol><li>أوجد k.</li><li><span class="f">P(X &gt; 1)</span></li><li><span class="f">P(1 ≤ X ≤ 2)</span></li><li><span class="f">P(X &lt; 1)</span></li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">0.2+0.3+0.4+k = 1 → k = 0.1</span><br>
2) القيم 2 و 3: <span class="f">0.4 + 0.1 = 0.5</span><br>
3) القيم 1 و 2: <span class="f">0.3 + 0.4 = 0.7</span><br>
4) القيمة 0 بس: <span class="f">0.2</span></div></details></div>

<h2>3) التوقع والتباين (Mean & Variance)</h2>
<div class="box kid"><b>🧒 الفكرة</b>
<b>E(X)</b> = المتوسط المتوقع "على المدى الطويل". لو كررت التجربة ألف مرة، متوسط X هيقرّب منه.
<br><b>Var(X)</b> = القيم "متفرقة" قد إيه حوالين المتوسط. <b>σ</b> = جذر التباين.</div>
<div class="box law"><b>📐 القوانين</b>
<div class="fm">μ = E(X) = Σ x · f(x)</div>
<div class="fm">E(X²) = Σ x² · f(x)</div>
<div class="fm">σ² = Var(X) = E(X²) − μ² &nbsp;&nbsp;&nbsp; σ = √Var(X)</div>
<b>خصائص (مهمة جدًا):</b>
<div class="fm">E(aX + b) = a·E(X) + b &nbsp;&nbsp;&nbsp;&nbsp; Var(aX + b) = a² · Var(X)</div>
الـ <b>b</b> بيختفي من التباين (إزاحة مابتغيرش التفرّق)، والـ <b>a</b> بيتربّع.
</div>

<div class="ex"><div class="ex-title">مثال كامل (Assignment 3 – Q3)</div>
<div class="ex-q"><b>📝 Question</b>Let X be a random variable with the following probability distribution:<div class="table-wrap"><table><tr><th>x</th><td>−3</td><td>6</td><td>9</td></tr><tr><th>f(x)</th><td>0.1</td><td>0.5</td><td>0.4</td></tr></table></div>(a) Find the mean (expected value) of X, μ = E(X).<br>(b) Find E(X²).<br>(c) Find the variance of X.<br>(d) Find the mean of 2X + 1.<br>(e) Find the variance of 2X + 1.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>x = −3, 6, 9</td><td><span class="f">القيم</span></td><td></td></tr><tr><td>f(x) = 0.1, 0.5, 0.4</td><td><span class="f">الاحتمالات</span></td><td>مجموعها 1 ✓</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) mean</td><td><span class="f">E(X) = Σ x·f(x)</span></td><td></td></tr><tr><td>(b) E(X²)</td><td><span class="f">Σ x²·f(x)</span></td><td></td></tr><tr><td>(c) variance</td><td><span class="f">E(X²) − μ²</span></td><td></td></tr><tr><td>(d) mean of 2X + 1</td><td><span class="f">2E(X) + 1</span></td><td></td></tr><tr><td>(e) variance of 2X + 1</td><td><span class="f">4·Var(X)</span></td><td>الـ +1 بيختفي</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<div class="table-wrap"><table>
<tr><th>x</th><td>−3</td><td>6</td><td>9</td><th>المجموع</th></tr>
<tr><th>f(x)</th><td>0.1</td><td>0.5</td><td>0.4</td><td>1</td></tr>
<tr><th>x·f(x)</th><td>−0.3</td><td>3</td><td>3.6</td><td><b>6.3</b></td></tr>
<tr><th>x²·f(x)</th><td>0.9</td><td>18</td><td>32.4</td><td><b>51.3</b></td></tr>
</table></div>
<ol class="steps">
<li><span class="f">E(X) = 6.3</span></li>
<li><span class="f">E(X²) = 51.3</span></li>
<li><span class="f">Var(X) = 51.3 − 6.3² = 51.3 − 39.69 = 11.61</span></li>
<li><span class="f">E(2X+1) = 2(6.3) + 1 = 13.6</span></li>
<li><span class="f">Var(2X+1) = 4 × 11.61 = 46.44</span></li>
</ol></div>

<div class="ex"><div class="ex-title">⭐ ميد 2023/24: E(5X − 2)</div>
<div class="ex-q"><b>📝 Question</b>If X is a random variable with the following probability distribution:<div class="table-wrap"><table><tr><th>X</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>f(x)</th><td>2C</td><td>8C</td><td>6C</td><td>4C</td></tr></table></div>(a) The value of the constant C is<br>(b) The expected value E(5X − 2) is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>f(x) = 2C, 8C, 6C, 4C</td><td><span class="f">20C = 1 → C = 0.05</span></td><td>Σf = 1</td></tr><tr><td>x = 1, 2, 3, 4</td><td><span class="f">f = 0.1, 0.4, 0.3, 0.2</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>E(5X − 2)</td><td><span class="f">5E(X) − 2</span></td><td>نجيب E(X) الأول</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<ol class="steps">
<li>(a) المجموع = 1: <span class="f">2C + 8C + 6C + 4C = 20C = 1</span> ← <span class="f">C = 0.05</span>، يعني الجدول بقى <span class="f">f(x) = 0.1, 0.4, 0.3, 0.2</span></li>
<li><span class="f">E(X) = 0.1 + 0.8 + 0.9 + 0.8 = 2.6</span></li>
<li>(b) <span class="f">E(5X − 2) = 5(2.6) − 2 = 11</span> ✅</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال: Y = 2X − 2</div>
<div class="ex-q"><b>📝 Question</b>If E(X) = 10 and Var(X) = 4, and Y = 2X − 2, find E(Y), Var(Y) and the standard deviation σ<sub>Y</sub>.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>E(X) = 10</td><td><span class="f">μ<sub>X</sub> = 10</span></td><td></td></tr><tr><td>Var(X) = 4</td><td><span class="f">σ²<sub>X</sub> = 4</span></td><td></td></tr><tr><td>Y = 2X − 2</td><td><span class="f">a = 2 , b = −2</span></td><td>Y = aX + b</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>E(Y)</td><td><span class="f">aE(X) + b</span></td><td></td></tr><tr><td>Var(Y)</td><td><span class="f">a²·Var(X)</span></td><td>b مالهاش دعوة</td></tr><tr><td>σ<sub>Y</sub></td><td><span class="f">√Var(Y)</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
لو <span class="f">E(X) = 10</span> و <span class="f">Var(X) = 4</span>:
<span class="f">E(Y) = 2(10) − 2 = 18</span> ، <span class="f">Var(Y) = 4 × 4 = 16</span> ، <span class="f">σ<sub>Y</sub> = 4</span>.
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك (اعمل جدول زي اللي فوق)</div>
<div class="table-wrap"><table><tr><th>x</th><td>1</td><td>2</td><td>3</td></tr><tr><th>f(x)</th><td>0.2</td><td>0.5</td><td>0.3</td></tr></table></div>
أوجد <span class="f">E(X)</span> و <span class="f">E(X²)</span> و <span class="f">Var(X)</span> و <span class="f">E(2X+3)</span> و <span class="f">Var(2X+3)</span>.
<details><summary>اعرض الحل</summary><div>
<span class="f">E(X) = 0.2 + 1.0 + 0.9 = 2.1</span><br>
<span class="f">E(X²) = 0.2 + 2.0 + 2.7 = 4.9</span><br>
<span class="f">Var(X) = 4.9 − 2.1² = 4.9 − 4.41 = 0.49</span><br>
<span class="f">E(2X+3) = 2(2.1) + 3 = 7.2</span><br>
<span class="f">Var(2X+3) = 4 × 0.49 = 1.96</span> (الـ 3 بتختفي)</div></details></div>

<div class="ex"><div class="ex-title">مثال: الكروت (sample space → توزيع)</div>
<div class="ex-q"><b>📝 Question</b>A box contains 100 cards; 40 of which are labeled with the number 5 and the other cards are labeled with the number 10. Two cards were selected randomly with replacement and the number appeared on each card was observed. Let X be a random variable giving the total sum of the two numbers.<br>(a) List the elements of the sample space S. (b) To each element of S assign a value x of X. (c) Find the probability distribution function of X. (d) Find P(X = 0). (e) Find P(X &gt; 10). (f) Find μ = E(X). (g) Find σ² = Var(X).</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>100 cards; 40 … number 5</td><td><span class="f">P(5) = 40/100 = 0.4</span></td><td></td></tr><tr><td>the other cards … number 10</td><td><span class="f">P(10) = 60/100 = 0.6</span></td><td>الباقي = 60</td></tr><tr><td>with replacement</td><td><span class="f">السحبتين مستقلين</span></td><td>نضرب الاحتمالات</td></tr><tr><td>X = total sum of the two numbers</td><td><span class="f">X ∈ {10, 15, 20}</span></td><td>5+5 ، 5+10 ، 10+10</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(e) P(X &gt; 10)</td><td><span class="f">P(15) + P(20)</span></td><td></td></tr><tr><td>(f), (g) mean, variance</td><td><span class="f">Σ x·f ، E(X²) − μ²</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
صندوق فيه 100 كارت: 40 مكتوب عليهم 5 و 60 مكتوب عليهم 10. سحبنا 2 <b>مع الإرجاع</b>. X = مجموع الرقمين.
<ol class="steps">
<li><span class="f">S = {(5,5), (5,10), (10,5), (10,10)}</span></li>
<li>قيم X: 10، 15، 15، 20</li>
<li><span class="f">P(X=10) = 0.4×0.4 = 0.16</span> ، <span class="f">P(X=15) = 2×0.4×0.6 = 0.48</span> ، <span class="f">P(X=20) = 0.6×0.6 = 0.36</span></li>
<li><span class="f">P(X = 0) = 0</span> (مستحيل) ، <span class="f">P(X &gt; 10) = 0.48 + 0.36 = 0.84</span></li>
<li><span class="f">E(X) = 1.6 + 7.2 + 7.2 = 16</span> ، <span class="f">E(X²) = 16 + 108 + 144 = 268</span> ، <span class="f">Var = 268 − 256 = 12</span></li>
</ol></div>

<h2>4) توزيع ذات الحدين (Binomial) ← 🔥 أهم حتة في الميد</h2>
<div class="box kid"><b>🧒 الفكرة</b>
بتكرر نفس التجربة <b>n</b> مرة. كل مرة فيها نتيجتين بس: <b>نجاح</b> (احتماله p) أو <b>فشل</b> (احتماله q = 1 − p). و X = عدد مرات النجاح.
<br>مثال: 4 أجهزة رادار، كل جهاز بيكشف الصاروخ باحتمال 0.9. X = عدد الأجهزة اللي كشفت.</div>
<div class="box def"><b>📖 شروط Bernoulli process (عشان تعرف إن المسألة Binomial)</b>
<ol>
<li>عدد محاولات ثابت <b>n</b>.</li>
<li>كل محاولة ليها نتيجتين (success / failure).</li>
<li>احتمال النجاح <b>p</b> ثابت كل مرة.</li>
<li>المحاولات <b>مستقلة</b> (independently) أو "with replacement".</li>
</ol>
كلمات بتقولك إنها Binomial: <i>independently, n items selected at random, % of ... , sample of n</i>.</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك: أنهي واحدة Binomial؟</div>
<ol><li>رميت عملة 10 مرات وعدّيت الصور.</li><li>رميت زهرة لحد ما يطلع 6، وعدّيت عدد الرميات.</li><li>15% من الناس عندهم مرض، واخترت 8 أشخاص عشوائي وعدّيت المرضى.</li></ol>
<details><summary>اعرض الحل</summary><div>
1) ✅ Binomial: <span class="f">n = 10 , p = 0.5</span><br>
2) ❌ مش Binomial، لأن عدد المحاولات n مش ثابت.<br>
3) ✅ Binomial: <span class="f">n = 8 , p = 0.15</span></div></details></div>

<div class="box law"><b>📐 القانون</b>
<div class="fm">P(X = x) = <sup>n</sup>C<sub>x</sub> · p<sup>x</sup> · q<sup>n−x</sup> &nbsp;&nbsp;&nbsp; x = 0, 1, ..., n</div>
<div class="fm">μ = E(X) = n·p &nbsp;&nbsp;&nbsp;&nbsp; σ² = Var(X) = n·p·q</div>
<b>nCx</b> على الآلة الحاسبة: <span class="f">n</span> ثم <b>SHIFT ÷ (nCr)</b> ثم <span class="f">x</span>. مثلًا <span class="f">4C2 = 6</span>.
</div>

<div class="ex"><div class="ex-title">⭐⭐ مثال الصواريخ (جه في ميد 2022 و 2023 بالحرف!)</div>
<div class="ex-q"><b>📝 Question</b>A missile detection system has a probability of 0.90 of detecting a missile attack. If 4 detection systems are installed in the same area and operate independently, then:<br>(a) the average (mean) number of systems that detect an attack is<br>(b) the probability that at least two systems detect an attack is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>probability of 0.90 of detecting</td><td><span class="f">p = 0.9 , q = 0.1</span></td><td>النجاح = يكتشف</td></tr><tr><td>4 detection systems</td><td><span class="f">n = 4</span></td><td></td></tr><tr><td>operate independently</td><td><span class="f">Binomial</span></td><td>n محاولات مستقلة + نجاح/فشل</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) average number</td><td><span class="f">μ = np</span></td><td></td></tr><tr><td>(b) at least two</td><td><span class="f">P(X ≥ 2) = 1 − P(0) − P(1)</span></td><td>at least ← المكمّلة أسهل</td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
p = 0.9 ، q = 0.1 ، n = 4
<ol class="steps">
<li><b>المتوسط:</b> <span class="f">μ = np = 4 × 0.9 = 3.6</span> ✅</li>
<li><b>على الأقل 2 كشفوا:</b> <span class="f">P(X ≥ 2) = 1 − [P(0) + P(1)]</span> (أسهل من حساب 3 حدود)</li>
<li><span class="f">P(0) = 4C0 (0.9)<sup>0</sup>(0.1)<sup>4</sup> = 0.0001</span></li>
<li><span class="f">P(1) = 4C1 (0.9)<sup>1</sup>(0.1)<sup>3</sup> = 4 × 0.9 × 0.001 = 0.0036</span></li>
<li><span class="f">P(X ≥ 2) = 1 − 0.0037 = 0.9963</span> ✅</li>
</ol>
<div class="box tip">لاحظ إن الاختيارات كان فيها <b>0.0037</b> (ده P(X&lt;2) — فخ للي بينسى يطرح من 1) و <b>0.36</b> و <b>36</b> (فخ لـ np غلط).</div>
</div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
رميت عملة سليمة 3 مرات. X = عدد الصور. (n = 3 , p = 0.5)
<ol><li><span class="f">P(X = 2)</span></li><li>احتمال صورة واحدة على الأقل</li><li>المتوسط والتباين</li></ol>
<details><summary>اعرض الحل</summary><div>
1) <span class="f">3C2 (0.5)²(0.5)¹ = 3/8 = 0.375</span><br>
2) <span class="f">1 − P(0) = 1 − (0.5)³ = 7/8 = 0.875</span><br>
3) <span class="f">μ = 3 × 0.5 = 1.5</span> ، <span class="f">σ² = 3 × 0.5 × 0.5 = 0.75</span></div></details></div>

<div class="ex"><div class="ex-title">⭐⭐ ميد 2023/24 (6 درجات!)</div>
<div class="ex-q"><b>📝 Question</b>Suppose that 25% of the products of a manufacturing process are defective. Five items are selected at random, inspected, and classified as defective (D) or non-defective (N).<br>(a) The probability of getting at least one defective item is<br>(b) The expected value (mean) of the number of defective items is<br>(c) The variance of the number of defective items is</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>25% … are defective</td><td><span class="f">p = 0.25 , q = 0.75</span></td><td>النجاح هنا = بايظة</td></tr><tr><td>Five items</td><td><span class="f">n = 5</span></td><td></td></tr><tr><td>defective or non-defective</td><td><span class="f">Binomial</span></td><td></td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(a) at least one defective</td><td><span class="f">1 − q<sup>5</sup></span></td><td>1 − P(ولا واحدة)</td></tr><tr><td>(b) expected value</td><td><span class="f">np</span></td><td></td></tr><tr><td>(c) variance</td><td><span class="f">npq</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
25% من المنتجات بايظة، أخدنا 5. ← n = 5 ، p = 0.25 ، q = 0.75
<ol class="steps">
<li><b>على الأقل واحدة بايظة:</b> <span class="f">P(X ≥ 1) = 1 − P(0) = 1 − (0.75)<sup>5</sup> = 1 − 0.2373 = 0.763</span> ✅</li>
<li><b>المتوسط:</b> <span class="f">np = 5 × 0.25 = 1.25</span> ✅</li>
<li><b>التباين:</b> <span class="f">npq = 5 × 0.25 × 0.75 = 0.9375</span> ✅</li>
</ol></div>

<div class="ex"><div class="ex-title">مثال المحاضرة: 3 قطع و p = 1/4</div>
<div class="ex-q"><b>📝 Question</b>Suppose that 25% of the products of a manufacturing process are defective. Three items are selected at random, inspected, and classified as defective (D) or non-defective (N). Find the probability distribution of the number of defective items, then find:<br>(1) the probability of getting at least two defective items, (2) the probability of getting at most two defective items, (3) the mean and the variance of the number of defective items.</div>
<div class="ex-map"><b>🔢 نحوّل السؤال لأرقام</b><div class="table-wrap"><table><tr><th>في السؤال</th><th>بالرموز</th><th>يعني إيه</th></tr><tr class="sec"><th colspan="3">📥 المعطيات</th></tr><tr><td>25% … are defective</td><td><span class="f">p = 0.25 , q = 0.75</span></td><td></td></tr><tr><td>Three items</td><td><span class="f">n = 3</span></td><td>X = 0, 1, 2, 3</td></tr><tr class="sec ask"><th colspan="3">🎯 المطلوب</th></tr><tr><td>(1) at least two</td><td><span class="f">P(X ≥ 2) = P(2) + P(3)</span></td><td></td></tr><tr><td>(2) at most two</td><td><span class="f">P(X ≤ 2) = 1 − P(3)</span></td><td></td></tr><tr><td>(3) mean and variance</td><td><span class="f">np ، npq</span></td><td></td></tr></table></div></div>
<div class="ex-a">✍️ الحل:</div>
<div class="table-wrap"><table>
<tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td></tr>
<tr><th>f(x)</th><td>27/64</td><td>27/64</td><td>9/64</td><td>1/64</td></tr></table></div>
<span class="f">P(X ≥ 2) = 10/64</span> ، <span class="f">P(X ≤ 2) = 1 − 1/64 = 63/64</span> ، <span class="f">μ = 0.75</span> ، <span class="f">σ² = 0.5625</span>
</div>

<div class="box tip"><b>💡 الترجمة لـ Binomial</b>
<ul>
<li>"none" → <span class="f">P(X = 0) = q<sup>n</sup></span></li>
<li>"all" → <span class="f">P(X = n) = p<sup>n</sup></span></li>
<li>"at least one" → <span class="f">1 − q<sup>n</sup></span></li>
<li>"at least 2" → <span class="f">1 − P(0) − P(1)</span></li>
<li>"at most 1" → <span class="f">P(0) + P(1)</span></li>
<li><bdi>"more than 8" (n = 10)</bdi> → <span class="f">P(9) + P(10)</span></li>
</ul></div>

<div class="try"><div class="try-title">🧩 جرّب بنفسك</div>
10% من القطع بايظة، وأخدنا 4 قطع. احسب: (1) مفيش ولا واحدة بايظة. (2) على الأقل واحدة بايظة. (3) كلهم بايظين.
<details><summary>اعرض الحل</summary><div>
1) <span class="f">(0.9)⁴ = 0.6561</span><br>
2) <span class="f">1 − 0.6561 = 0.3439</span><br>
3) <span class="f">(0.1)⁴ = 0.0001</span></div></details></div>

<div class="box exam"><b>🎓 الدكتور بيسأل فيها إزاي؟</b>
<ul>
<li>جدول فيه <b>C</b> → أوجد C. (كل امتحان)</li>
<li><span class="f">P(2 ≤ X &lt; 4)</span> من الجدول. (كل امتحان)</li>
<li><span class="f">E(aX + b)</span> من جدول.</li>
<li><b>Binomial</b>: المتوسط np + "at least" (التلات امتحانات). وفي 2023/24 زاد التباين npq.</li>
</ul></div>
`
});
