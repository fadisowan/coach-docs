---
title: "استشارات · لقاء مباشر قادم"
description: "شرح استشارات · لقاء مباشر قادم في ثيم كوتش مع صور الإعدادات والنتائج."
editUrl: false
---


<p>اسمه في المتجر الإنجليزي: <em>Consultations · Upcoming live event</em> · مساره <code>home.coach-live-event</code></p>
<p><strong>ما يعرضه:</strong> إعلان عن ورشة أو لقاء مباشر بموعد ثابت: التاريخ والمدة والمكان، والمقاعد المتبقية من كمية المنتج، وزر التسجيل. يختفي وحده بعد الموعد.</p>
<p><strong>متى تضيفه:</strong> لورشة أو لقاء قادم تريد أن يسجّل فيه زوارك.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>كمبيوتر (1440)</th>
<th>جوال (390)</th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="معاينة النتيجة — استشارات · لقاء مباشر قادم" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة الجوال — استشارات · لقاء مباشر قادم" src="/coach-docs/assets/sections/22-coach-live-event/00-mobile.webp" loading="lazy" decoding="async"/></td>
</tr>
</tbody>
</table></div>
<p>خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في <code>../../01-shared/</code>: «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».</p>
<details><summary>من دليل التاجر</summary>
<p>إعلان عن ورشة أو لقاء مباشر على لوحة داكنة: بطاقة التاريخ، والمقاعد المتبقية وشريط امتلائها، وزر التسجيل بالسعر.</p>
<ul>
<li><strong>أهم الإعدادات:</strong> «منتج التذكرة» منتج «خدمة» كميته في المخزون تساوي عدد المقاعد؛ بدونه لا يظهر اللقاء للزوار. «إجمالي المقاعد» لحساب شريط الامتلاء (الافتراضي ٥٠). «موعد اللقاء» مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م، ومنه يُكتب اليوم والشهر والسنة والوقت تلقائياً. ومعه «الوقت كما يظهر (اختياري)» و«المدة» و«المكان».</li>
<li><strong>التوقيت:</strong> «موعد اللقاء» فارغاً يُظهر «يُعلن الموعد قريباً». ويختفي القسم تلقائياً بعد الموعد. وإن لم تحدد للمنتج كمية، أو أخفيت كميته في سلة، لا يظهر عدد المقاعد ولا الشريط.</li>
<li><strong>الصورة والتفاصيل (اختيارية، فارغة افتراضياً):</strong> بدونها يبقى القسم كما هو.<ul>
<li>«صورة اللقاء»: أفقية ١٢٠٠×٩٠٠ تقريباً. تظهر بجانب النص على الحاسوب وفوقه على الجوال، وبطاقة التاريخ فوق زاويتها.</li>
<li>«وسم على الصورة»: حتى ١٦ حرفاً، مثل «مباشر» أو «حضوري». يظهر على الصورة فقط، بنقطة نابضة.</li>
<li>«التفاصيل» و«جدول اللقاء» (حتى ٦ بنود، لكل بند «الوقت» و«البند»): إن كتبت أحدهما ظهر زر «التفاصيل»، أو ما تكتبه في «نص زر التفاصيل».</li>
</ul>
</li>
<li><strong>نافذة التفاصيل:</strong> يفتحها زر «التفاصيل»، وزر الإغلاق في زاويتها.<ul>
<li>مع الصورة: الصورة أعلى النافذة، وعليها عنوان اللقاء فوق طبقة متدرّجة، والوسم في الزاوية المقابلة لزر الإغلاق. بلا صورة: العنوان وحده في أعلاها.</li>
<li>تحتها الموعد والوقت والمدة والمكان، ثم «التفاصيل»، ثم «جدول اللقاء»، ثم المقاعد المتبقية.</li>
<li>أسفلها السعر وزر الإضافة للسلة لمنتج التذكرة نفسه.</li>
<li>على الجوال تفتح من أسفل الشاشة، والصفحة خلفها لا تتمرر.</li>
</ul>
</li>
<li><strong>السعر شريطاً:</strong> «السعر شريطاً على حافة البطاقة» (مطفأ افتراضياً) يعرض السعر الحالي في الزاوية العلوية للبطاقة، و«مجاناً» للسعر صفر، ولا يظهر بلا سعر. والسعر قبل الخصم يبقى في السطر السفلي وفي النافذة.</li>
</ul>
<hr/>
<p><strong>عام</strong> — أقسام عامة تناسب أي متجر.</p>
</details>


## الإعدادات بترتيبها في اللوحة




### «منتج التذكرة»


<ul>
<li><strong>النوع:</strong> اختيار منتج من متجرك · <strong>الافتراضي:</strong> لا شيء — يختاره التاجر · المعرّف <code>product</code></li>
<li><strong>ماذا يفعل:</strong> منتج التذكرة في سلة، منتج «خدمة» كميته عدد المقاعد: منه السعر والمقاعد المتبقية وزر التسجيل.</li>
<li><strong>متى تستعمله:</strong> دائماً: أنشئ منتج التذكرة واختره.</li>
<li><strong>حين يكون فارغاً:</strong> بدونه لا يظهر اللقاء للزوار، وفي المحرّر ملاحظة.</li>
<li>شرحه تحت الحقل في المحرّر: منتج «خدمة» كميته = عدد المقاعد؛ بدونه لا يظهر اللقاء.</li>
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
<td><img alt="لوحة إعدادات — منتج التذكرة" src="/coach-docs/assets/sections/22-coach-live-event/01-product-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — منتج التذكرة" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «الشارة»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> ورشة مباشرة · المعرّف <code>badge</code></li>
<li><strong>ماذا يفعل:</strong> شارة صغيرة بنقطة فوق العنوان، مثل «ورشة مباشرة».</li>
<li><strong>متى تستعمله:</strong> لنوع اللقاء.</li>
<li><strong>حين يكون فارغاً:</strong> فارغة لا تظهر.</li>
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
<td><img alt="لوحة إعدادات — الشارة" src="/coach-docs/assets/sections/22-coach-live-event/02-badge-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الشارة" src="/coach-docs/assets/sections/22-coach-live-event/02-badge-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «العنوان»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> كيف تبني ملف أعمال يجذب العملاء · المعرّف <code>title</code></li>
<li><strong>ماذا يفعل:</strong> عنوان اللقاء.</li>
<li><strong>متى تستعمله:</strong> موضوع اللقاء في جملة.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
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
<td><img alt="لوحة إعدادات — العنوان" src="/coach-docs/assets/sections/22-coach-live-event/03-title-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — العنوان" src="/coach-docs/assets/sections/22-coach-live-event/03-title-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «الوصف (اختياري)»


<ul>
<li><strong>النوع:</strong> نص بعدة أسطر · <strong>الافتراضي:</strong> ساعتان عمليتان أراجع فيهما ملفات المشاركين مباشرة، وتخرج بخطة واضحة لتحسين ملفك خلال أسبوع. · المعرّف <code>description</code></li>
<li><strong>ماذا يفعل:</strong> سطر أو سطران عن اللقاء.</li>
<li><strong>متى تستعمله:</strong> لما سيخرج به المشارك.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
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
<td><img alt="لوحة إعدادات — الوصف (اختياري)" src="/coach-docs/assets/sections/22-coach-live-event/04-description-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الوصف (اختياري)" src="/coach-docs/assets/sections/22-coach-live-event/04-description-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «موعد اللقاء»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>date</code></li>
<li><strong>ماذا يفعل:</strong> موعد اللقاء، مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م. منه التاريخ والوقت، ويختفي القسم بعده.</li>
<li><strong>متى تستعمله:</strong> دائماً حين يتحدد الموعد.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً يظهر «يُعلن الموعد قريباً» ولا يختفي القسم.</li>
<li>شرحه تحت الحقل في المحرّر: مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م؛ فارغاً «يُعلن الموعد قريباً».</li>
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
<td><img alt="لوحة إعدادات — موعد اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/05-date-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — موعد اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «الوقت كما يظهر (اختياري)»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>time_label</code></li>
<li><strong>ماذا يفعل:</strong> الوقت كما تريده أن يظهر، مثل «٨ مساءً بتوقيت مكة».</li>
<li><strong>متى تستعمله:</strong> إن أردت كتابة الوقت بطريقتك.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً يُكتب من موعد اللقاء.</li>
<li>شرحه تحت الحقل في المحرّر: فارغاً يُكتب من موعد اللقاء.</li>
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
<td><img alt="لوحة إعدادات — الوقت كما يظهر (اختياري)" src="/coach-docs/assets/sections/22-coach-live-event/06-time_label-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الوقت كما يظهر (اختياري)" src="/coach-docs/assets/sections/22-coach-live-event/06-time_label-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بنص تجريبي «مثال لنصّك هنا»</td>
</tr>
</tbody>
</table></div>


### «المدة»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> ساعتان · المعرّف <code>duration</code></li>
<li><strong>ماذا يفعل:</strong> مدة اللقاء بجانب الوقت.</li>
<li><strong>متى تستعمله:</strong> مثل «ساعتان».</li>
<li><strong>حين يكون فارغاً:</strong> فارغة لا تظهر.</li>
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
<td><img alt="لوحة إعدادات — المدة" src="/coach-docs/assets/sections/22-coach-live-event/07-duration-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — المدة" src="/coach-docs/assets/sections/22-coach-live-event/07-duration-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «المكان»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> عبر زووم — يصلك الرابط بعد التسجيل · المعرّف <code>location</code></li>
<li><strong>ماذا يفعل:</strong> مكان اللقاء.</li>
<li><strong>متى تستعمله:</strong> مثل «عبر زووم — يصلك الرابط بعد التسجيل».</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
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
<td><img alt="لوحة إعدادات — المكان" src="/coach-docs/assets/sections/22-coach-live-event/08-location-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — المكان" src="/coach-docs/assets/sections/22-coach-live-event/08-location-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «إجمالي المقاعد»


<ul>
<li><strong>النوع:</strong> رقم · <strong>الافتراضي:</strong> 50 · المعرّف <code>total_seats</code></li>
<li><strong>ماذا يفعل:</strong> إجمالي المقاعد، لحساب شريط الامتلاء مع الكمية المتبقية من المنتج.</li>
<li><strong>متى تستعمله:</strong> اكتب العدد نفسه الذي بدأت به كمية المنتج.</li>
<li><strong>حين يكون فارغاً:</strong> على الافتراضي ٥٠.</li>
<li>شرحه تحت الحقل في المحرّر: لحساب شريط الامتلاء.</li>
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
<td><img alt="لوحة إعدادات — إجمالي المقاعد" src="/coach-docs/assets/sections/22-coach-live-event/09-total_seats-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — إجمالي المقاعد" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «نص زر الإضافة للسلة»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> أضف للسلة · المعرّف <code>button_label</code></li>
<li><strong>ماذا يفعل:</strong> نص زر التسجيل.</li>
<li><strong>متى تستعمله:</strong> مثل «احجز مقعدك».</li>
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
<td><img alt="لوحة إعدادات — نص زر الإضافة للسلة" src="/coach-docs/assets/sections/22-coach-live-event/10-button_label-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — نص زر الإضافة للسلة" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «صورة اللقاء»


<ul>
<li><strong>النوع:</strong> صورة ترفعها · <strong>الافتراضي:</strong> بلا صورة · المعرّف <code>image</code></li>
<li><strong>ماذا يفعل:</strong> صورة اللقاء، أفقية ١٢٠٠×٩٠٠ تقريباً.</li>
<li><strong>متى تستعمله:</strong> صورتك أو صورة من لقاء سابق.</li>
<li><strong>حين يكون فارغاً:</strong> بدونها يبقى الشكل بلا صورة.</li>
<li>شرحه تحت الحقل في المحرّر: أفقية 1200×900 تقريباً؛ فارغة يبقى الشكل كما هو.</li>
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
<td><img alt="لوحة إعدادات — صورة اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/11-image-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — صورة اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/11-image-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بصورة تجريبية</td>
</tr>
</tbody>
</table></div>


### «وسم على الصورة»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>image_tag</code></li>
<li><strong>ماذا يفعل:</strong> وسم على الصورة، مثل «مباشر» أو «حضوري». يظهر مع الصورة فقط.</li>
<li><strong>متى تستعمله:</strong> لنوع الحضور.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
<li>شرحه تحت الحقل في المحرّر: يظهر مع الصورة فقط، مثل «مباشر» أو «حضوري».</li>
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
<td><img alt="لوحة إعدادات — وسم على الصورة" src="/coach-docs/assets/sections/22-coach-live-event/12-image_tag-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — وسم على الصورة" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة بنص تجريبي «مثال لنصّك هنا»</td>
</tr>
</tbody>
</table></div>


### «التفاصيل»


<ul>
<li><strong>النوع:</strong> نص بعدة أسطر · <strong>الافتراضي:</strong> فارغ · المعرّف <code>details</code></li>
<li><strong>ماذا يفعل:</strong> تفاصيل أطول تظهر في نافذة يفتحها زر «التفاصيل»، مع زر الحجز.</li>
<li><strong>متى تستعمله:</strong> لما يحتاج المشارك معرفته قبل التسجيل.</li>
<li><strong>حين يكون فارغاً:</strong> فارغة ومع جدول فارغ لا يظهر زر التفاصيل.</li>
<li>شرحه تحت الحقل في المحرّر: التفاصيل أو «جدول اللقاء» يُظهران زراً يفتح نافذة بهما وبزر الحجز.</li>
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
<td><img alt="لوحة إعدادات — التفاصيل" src="/coach-docs/assets/sections/22-coach-live-event/13-details-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — التفاصيل" src="/coach-docs/assets/sections/22-coach-live-event/13-details-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بنص تجريبي «مثال لنصّك هنا»</td>
</tr>
</tbody>
</table></div>


### «جدول اللقاء»


<ul>
<li><strong>النوع:</strong> عناصر متكررة (تضيفها وتحذفها وترتّبها) · <strong>الافتراضي:</strong> بلا عناصر · المعرّف <code>agenda</code></li>
<li><strong>ماذا يفعل:</strong> جدول اللقاء: وقت وبند لكل سطر، يظهر في نافذة التفاصيل.</li>
<li><strong>متى تستعمله:</strong> لورشة بفقرات محددة.</li>
<li><strong>حين يكون فارغاً:</strong> بلا بنود لا يظهر الجدول. والبند الفارغ لا يظهر.</li>
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
<td><img alt="لوحة إعدادات — جدول اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/14-agenda-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — جدول اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td></td>
</tr>
</tbody>
</table></div>
<h4>«الوقت»</h4>
<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>agenda.time</code></li>
<li><strong>ماذا يفعل:</strong> وقت الفقرة.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً يظهر البند وحده.</li>
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
<td><img alt="لوحة إعدادات — جدول اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/14-agenda-time-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — جدول اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td></td>
</tr>
</tbody>
</table></div>
<h4>«البند»</h4>
<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>agenda.item</code></li>
<li><strong>ماذا يفعل:</strong> اسم الفقرة.</li>
<li><strong>حين يكون فارغاً:</strong> البند الفارغ لا يظهر.</li>
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
<td><img alt="لوحة إعدادات — جدول اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/14-agenda-item-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — جدول اللقاء" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td></td>
</tr>
</tbody>
</table></div>


### «نص زر التفاصيل»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>details_label</code></li>
<li><strong>ماذا يفعل:</strong> نص زر التفاصيل.</li>
<li><strong>متى تستعمله:</strong> مثل «جدول الورشة».</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً يظهر «التفاصيل».</li>
<li>شرحه تحت الحقل في المحرّر: فارغاً يظهر «التفاصيل».</li>
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
<td><img alt="لوحة إعدادات — نص زر التفاصيل" src="/coach-docs/assets/sections/22-coach-live-event/15-details_label-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — نص زر التفاصيل" src="/coach-docs/assets/sections/22-coach-live-event/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة بنص تجريبي «مثال لنصّك هنا»</td>
</tr>
</tbody>
</table></div>


### «السعر شريطاً على حافة البطاقة»


<ul>
<li><strong>النوع:</strong> مفتاح تشغيل وإطفاء · <strong>الافتراضي:</strong> مطفأ · المعرّف <code>price_ribbon</code></li>
<li><strong>ماذا يفعل:</strong> السعر الحالي شريطاً في الزاوية العلوية من البطاقة.</li>
<li><strong>متى تستعمله:</strong> لإبراز سعر مخفّض أو منخفض.</li>
<li><strong>حين يكون فارغاً:</strong> مطفأ (الافتراضي): السعر بجانب الزر فقط.</li>
<li>شرحه تحت الحقل في المحرّر: السعر الحالي في الزاوية العلوية؛ بلا سعر لا يظهر.</li>
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
<td><img alt="لوحة إعدادات — السعر شريطاً على حافة البطاقة" src="/coach-docs/assets/sections/22-coach-live-event/16-price_ribbon-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — السعر شريطاً على حافة البطاقة" src="/coach-docs/assets/sections/22-coach-live-event/16-price_ribbon-on-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بعد تفعيله (الافتراضي مطفأ)</td>
</tr>
</tbody>
</table></div>


### «خلفية متحركة بالألوان»


<ul>
<li><strong>النوع:</strong> مفتاح تشغيل وإطفاء · <strong>الافتراضي:</strong> مطفأ · المعرّف <code>fx_motion</code></li>
<li><strong>ماذا يفعل:</strong> تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».</li>
<li><strong>متى تستعمله:</strong> لإعلان تريده أن يلفت النظر.</li>
<li><strong>حين يكون فارغاً:</strong> مطفأ (الافتراضي): خلفية ثابتة.</li>
<li>شرحه تحت الحقل في المحرّر: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».</li>
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
<td><img alt="لوحة إعدادات — خلفية متحركة بالألوان" src="/coach-docs/assets/sections/22-coach-live-event/17-fx_motion-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — خلفية متحركة بالألوان" src="/coach-docs/assets/sections/22-coach-live-event/17-fx_motion-on-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بعد تفعيله (الافتراضي مطفأ)</td>
</tr>
</tbody>
</table></div>


### «سرعة الحركة»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> متوسطة · المعرّف <code>fx_speed</code></li>
<li><strong>ماذا يفعل:</strong> سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.</li>
<li><strong>متى تستعمله:</strong> «هادئة» لحركة لا تشتّت.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «خلفية متحركة بالألوان» هو «مفعّل»</li>
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
<td><img alt="لوحة إعدادات — سرعة الحركة" src="/coach-docs/assets/sections/22-coach-live-event/18-fx_speed-slow-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — سرعة الحركة" src="/coach-docs/assets/sections/22-coach-live-event/18-fx_speed-slow-result.webp" loading="lazy" decoding="async"/></td>
<td>«هادئة»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — سرعة الحركة" src="/coach-docs/assets/sections/22-coach-live-event/18-fx_speed-normal-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — سرعة الحركة" src="/coach-docs/assets/sections/22-coach-live-event/18-fx_speed-normal-result.webp" loading="lazy" decoding="async"/></td>
<td>«متوسطة»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — سرعة الحركة" src="/coach-docs/assets/sections/22-coach-live-event/18-fx_speed-fast-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — سرعة الحركة" src="/coach-docs/assets/sections/22-coach-live-event/18-fx_speed-fast-result.webp" loading="lazy" decoding="async"/></td>
<td>«أسرع»</td>
</tr>
</tbody>
</table></div>


### «ألوان الخلفية المتحركة»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> ألوان الثيم · المعرّف <code>fx_palette</code></li>
<li><strong>ماذا يفعل:</strong> ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.</li>
<li><strong>متى تستعمله:</strong> اختر ما يناسب اللقاء.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «خلفية متحركة بالألوان» هو «مفعّل»</li>
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
<td><img alt="لوحة إعدادات — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/22-coach-live-event/19-fx_palette-theme-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/22-coach-live-event/17-fx_motion-on-result.webp" loading="lazy" decoding="async"/></td>
<td>«ألوان الثيم»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/22-coach-live-event/19-fx_palette-night-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/22-coach-live-event/19-fx_palette-night-result.webp" loading="lazy" decoding="async"/></td>
<td>«ليلي»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/22-coach-live-event/19-fx_palette-warm-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/22-coach-live-event/19-fx_palette-warm-result.webp" loading="lazy" decoding="async"/></td>
<td>«دافئ»</td>
</tr>
</tbody>
</table></div>
<hr/>
<blockquote>
<p>ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp · لم يُعثر على النص لتمييزه: 00-desktop.webp</p>
</blockquote>


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم وليست لقطات مباشرة من محرّر سلة؛ صور النتيجة من معاينة الثيم. اضغط على أي صورة لتكبيرها.</div>
