---
title: "متجر · شريط منتجات متحرّك"
description: "شرح متجر · شريط منتجات متحرّك في ثيم كوتش مع صور الإعدادات والنتائج."
editUrl: false
---


<p>اسمه في المتجر الإنجليزي: <em>Shop · Moving product row</em> · مساره <code>home.coach-carousel</code></p>
<p><strong>ما يعرضه:</strong> صف منتجات يتقدّم وحده كل بضع ثوانٍ، بصورة كل منتج وتقييمه وزر الإضافة. يتوقف عند المرور عليه أو لمسه.</p>
<p><strong>متى تضيفه:</strong> لعرض عدد من الدورات أو الكتب في مساحة صغيرة.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>كمبيوتر (1440)</th>
<th>جوال (390)</th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="معاينة النتيجة — متجر · شريط منتجات متحرّك" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة الجوال — متجر · شريط منتجات متحرّك" src="/coach-docs/assets/sections/34-coach-carousel/00-mobile.webp" loading="lazy" decoding="async"/></td>
</tr>
</tbody>
</table></div>
<p>خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في <code>../../01-shared/</code>: «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».</p>
<details><summary>من دليل التاجر</summary>
<p>صف منتجات يتقدّم وحده كل بضع ثوانٍ: الصورة والتقييم والمفضلة والعرض السريع وزر الإضافة. يتوقف عند المرور عليه أو لمسه.</p>
<ul>
<li><strong>المصدر:</strong> «مصدر المنتجات»: «منتجات أختارها» (الافتراضي، حتى ١٢ بالترتيب)، أو «الأحدث»، أو «الأكثر مبيعاً»، أو «من تصنيفات محددة». بلا اختيار تظهر أحدث منتجات المتجر. «عدد المنتجات» للمصادر التلقائية من ٣ إلى ١٢.</li>
<li><strong>الحركة:</strong> «تحريك تلقائي» مفعّل، ولا يعمل لمن فعّل «تقليل الحركة». «المدة بين الحركات (٢–١٠ ثوانٍ)» (الافتراضي ٣).</li>
<li><strong>إطار الشريط:</strong> «بخلفية وإطار» (الافتراضي) أو «بلا خلفية ولا إطار» فتقف البطاقات على خلفية الصفحة مباشرة.</li>
</ul>
</details>


## الإعدادات بترتيبها في اللوحة




### «إطار الشريط»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> بخلفية وإطار · المعرّف <code>frame</code></li>
<li><strong>ماذا يفعل:</strong> «بخلفية وإطار»: الصف داخل لوح أبيض بإطار. «بلا خلفية ولا إطار»: البطاقات على خلفية الصفحة مباشرة.</li>
<li><strong>متى تستعمله:</strong> «بلا خلفية» إن كان القسم بخلفية ملوّنة أو صورة.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — إطار الشريط" src="/coach-docs/assets/sections/34-coach-carousel/01-frame-panel-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — إطار الشريط" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>«بخلفية وإطار»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — إطار الشريط" src="/coach-docs/assets/sections/34-coach-carousel/01-frame-plain-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — إطار الشريط" src="/coach-docs/assets/sections/34-coach-carousel/01-frame-plain-result.webp" loading="lazy" decoding="async"/></td>
<td>«بلا خلفية ولا إطار»</td>
</tr>
</tbody>
</table></div>


### «العنوان الصغير (فوق العنوان)»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> دورات مسجّلة · المعرّف <code>eyebrow</code></li>
<li><strong>ماذا يفعل:</strong> سطر صغير فوق العنوان، مثل «دورات مسجّلة».</li>
<li><strong>متى تستعمله:</strong> لتسمية القسم بكلمة أو كلمتين قبل العنوان.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
<li>شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" src="/coach-docs/assets/sections/34-coach-carousel/02-eyebrow-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — العنوان الصغير (فوق العنوان)" src="/coach-docs/assets/sections/34-coach-carousel/02-eyebrow-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «العنوان»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> دورات [[مختارة لك]] · المعرّف <code>title</code></li>
<li><strong>ماذا يفعل:</strong> عنوان القسم. [[كلمة]] تظهر مميّزة.</li>
<li><strong>متى تستعمله:</strong> جملة قصيرة تقول ما يجده الزائر في القسم.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً باللغتين لا يظهر.</li>
<li>شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — العنوان" src="/coach-docs/assets/sections/34-coach-carousel/03-title-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — العنوان" src="/coach-docs/assets/sections/34-coach-carousel/03-title-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «الوصف»


<ul>
<li><strong>النوع:</strong> نص بعدة أسطر · <strong>الافتراضي:</strong> تتجدّد القائمة تلقائياً — مرّر أو توقّف عند ما يعجبك. · المعرّف <code>description</code></li>
<li><strong>ماذا يفعل:</strong> سطر تحت العنوان.</li>
<li><strong>متى تستعمله:</strong> لتوضيح العنوان إن احتاج.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً باللغتين لا يظهر.</li>
<li>شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — الوصف" src="/coach-docs/assets/sections/34-coach-carousel/04-description-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الوصف" src="/coach-docs/assets/sections/34-coach-carousel/04-description-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «مصدر المنتجات»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> منتجات أختارها · المعرّف <code>source</code></li>
<li><strong>ماذا يفعل:</strong> من أين تأتي المنتجات: منتجات تختارها بالترتيب، أو الأحدث، أو الأكثر مبيعاً، أو من تصنيفات محددة.</li>
<li><strong>متى تستعمله:</strong> «منتجات أختارها» لترتيب تتحكم به، و«الأحدث» ليتجدد القسم وحده.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-selected-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>«منتجات أختارها»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-latest-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-latest-result.webp" loading="lazy" decoding="async"/></td>
<td>«الأحدث»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-sales-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-sales-result.webp" loading="lazy" decoding="async"/></td>
<td>«الأكثر مبيعاً»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-categories-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — مصدر المنتجات" src="/coach-docs/assets/sections/34-coach-carousel/05-source-categories-result.webp" loading="lazy" decoding="async"/></td>
<td>«من تصنيفات محددة»</td>
</tr>
</tbody>
</table></div>


### «المنتجات (بالترتيب)»


<ul>
<li><strong>النوع:</strong> اختيار منتج أو أكثر من متجرك · <strong>الافتراضي:</strong> لا شيء — يختاره التاجر · المعرّف <code>products</code></li>
<li><strong>ماذا يفعل:</strong> المنتجات بالترتيب الذي تريده، حتى ١٢.</li>
<li><strong>متى تستعمله:</strong> حين تختار «منتجات أختارها»، لترتيب تتحكم فيه.</li>
<li><strong>حين يكون فارغاً:</strong> بدونها تظهر أحدث المنتجات.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «مصدر المنتجات» هو «منتجات أختارها»</li>
<li>شرحه تحت الحقل في المحرّر: حتى ١٢؛ بدونها أحدث المنتجات.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — المنتجات (بالترتيب)" src="/coach-docs/assets/sections/34-coach-carousel/06-products-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — المنتجات (بالترتيب)" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «التصنيفات»


<ul>
<li><strong>النوع:</strong> اختيار تصنيف أو أكثر من متجرك · <strong>الافتراضي:</strong> لا شيء — يختاره التاجر · المعرّف <code>categories</code></li>
<li><strong>ماذا يفعل:</strong> التصنيفات التي تأتي منها المنتجات.</li>
<li><strong>متى تستعمله:</strong> حين تختار «من تصنيفات محددة»، لتصنيف بعينه.</li>
<li><strong>حين يكون فارغاً:</strong> بدونها تظهر أحدث المنتجات.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «مصدر المنتجات» هو «من تصنيفات محددة»</li>
<li>شرحه تحت الحقل في المحرّر: بدونها أحدث المنتجات.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — التصنيفات" src="/coach-docs/assets/sections/34-coach-carousel/07-categories-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — التصنيفات" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «عدد المنتجات (٣–١٢)»


<ul>
<li><strong>النوع:</strong> رقم · <strong>الافتراضي:</strong> 8 · المعرّف <code>limit</code></li>
<li><strong>ماذا يفعل:</strong> كم منتجاً يظهر في المصادر التلقائية (الأحدث، والأكثر مبيعاً، والتصنيفات)، من ٣ إلى ١٢.</li>
<li><strong>متى تستعمله:</strong> ٨ يكفي غالباً؛ أكثر إن كان متجرك كبيراً.</li>
<li><strong>حين يكون فارغاً:</strong> على الافتراضي ٨.</li>
<li>شرحه تحت الحقل في المحرّر: للمصادر التلقائية.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — عدد المنتجات (٣–١٢)" src="/coach-docs/assets/sections/34-coach-carousel/08-limit-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — عدد المنتجات (٣–١٢)" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «نص زر الإضافة للسلة»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> أضف للسلة · المعرّف <code>button_label</code></li>
<li><strong>ماذا يفعل:</strong> نص زر الإضافة في كل بطاقة.</li>
<li><strong>متى تستعمله:</strong> إن أردت نصاً آخر مثل «اشترك».</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً يظهر «أضف للسلة».</li>
<li>شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — نص زر الإضافة للسلة" src="/coach-docs/assets/sections/34-coach-carousel/09-button_label-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — نص زر الإضافة للسلة" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «تحريك تلقائي»


<ul>
<li><strong>النوع:</strong> مفتاح تشغيل وإطفاء · <strong>الافتراضي:</strong> مفعّل · المعرّف <code>autoplay</code></li>
<li><strong>ماذا يفعل:</strong> الصف يتقدّم وحده، ويتوقف عند المرور عليه أو لمسه. لا يتحرك لمن فعّل «تقليل الحركة» في جهازه.</li>
<li><strong>متى تستعمله:</strong> اتركه مفعّلاً ليرى الزائر منتجات أكثر دون أن يضغط.</li>
<li><strong>حين يكون فارغاً:</strong> مطفأ: الصف ثابت، والزائر يتنقل بالأسهم أو السحب.</li>
<li>شرحه تحت الحقل في المحرّر: يتوقف عند المرور أو اللمس.</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — تحريك تلقائي" src="/coach-docs/assets/sections/34-coach-carousel/10-autoplay-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — تحريك تلقائي" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة بعد إطفائه (الافتراضي مفعّل)</td>
</tr>
</tbody>
</table></div>


### «المدة بين الحركات (٢–١٠ ثوانٍ)»


<ul>
<li><strong>النوع:</strong> رقم · <strong>الافتراضي:</strong> 3 · المعرّف <code>interval</code></li>
<li><strong>ماذا يفعل:</strong> الثواني بين كل حركة، من ٢ إلى ١٠.</li>
<li><strong>متى تستعمله:</strong> أطول إن كانت أسماء منتجاتك طويلة.</li>
<li><strong>حين يكون فارغاً:</strong> على الافتراضي ٣ ثوانٍ.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «تحريك تلقائي» هو «مفعّل»</li>
</ul>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>اللوحة (نسخة مطابقة)</th>
<th>النتيجة</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="لوحة إعدادات — المدة بين الحركات (٢–١٠ ثوانٍ)" src="/coach-docs/assets/sections/34-coach-carousel/11-interval-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — المدة بين الحركات (٢–١٠ ثوانٍ)" src="/coach-docs/assets/sections/34-coach-carousel/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم وليست لقطات مباشرة من محرّر سلة؛ صور النتيجة من معاينة الثيم. اضغط على أي صورة لتكبيرها.</div>
