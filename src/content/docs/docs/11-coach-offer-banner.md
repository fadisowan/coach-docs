---
title: "عروض · بانر عرض (٣ أشكال)"
description: "شرح عروض · بانر عرض (٣ أشكال) في ثيم كوتش مع صور الإعدادات والنتائج."
editUrl: false
---


<p>اسمه في المتجر الإنجليزي: <em>Offers · Offer banner (3 layouts)</em> · مساره <code>home.coach-offer-banner</code></p>
<p><strong>ما يعرضه:</strong> بانر عرض بعرض الصفحة في ثلاثة أشكال: صورة ونصوص وكود خصم وزر، وشريط داكن بعدّاد. يختفي وحده بعد موعد انتهاء العرض.</p>
<p><strong>متى تضيفه:</strong> لعرض محدود المدة أو كود خصم تريد أن يراه كل زائر.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="صور الإعدادات والنتائج"><table>
<thead>
<tr>
<th>كمبيوتر (1440)</th>
<th>جوال (390)</th>
</tr>
</thead>
<tbody>
<tr>
<td><img alt="معاينة النتيجة — عروض · بانر عرض (٣ أشكال)" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة الجوال — عروض · بانر عرض (٣ أشكال)" src="/coach-docs/assets/sections/11-coach-offer-banner/00-mobile.webp" loading="lazy" decoding="async"/></td>
</tr>
</tbody>
</table></div>
<p>خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في <code>../../01-shared/</code>: «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».</p>
<details><summary>من دليل التاجر</summary>
<p>بانر عرض بعرض الصفحة، والصورة في بدايته دائماً (يميناً بالعربية). اختر من «الشكل»: «منقسم على خلفية خوخية»، أو «قوس على خلفية خضراء» (الصورة داخل قوس ورقم كبير فوق العنوان)، أو «شريط أبيض أفقي» (الزر في طرفه). على الجوال يصير عموداً واحداً والصورة أعلاه.</p>
<ul>
<li><strong>النصوص:</strong> «الشارة» (مثل «حتى ٣١ أكتوبر» أو «جديد»)، و«العنوان» و«الوصف». «الرقم الكبير» يظهر في شكل القوس فقط، ويكمله العنوان: «٣٠٪» ثم «على الدورات المسجّلة هذا الأسبوع». و«السطر الصغير» وأيقونته في الشكل الأفقي فقط. كل حقل فارغ يختفي مكانه.</li>
<li><strong>كود الخصم:</strong> اختياري. يظهر بعد «استخدم الكود»، وينسخه الزائر بضغطة. أنشئ الكوبون أولاً في «التسويق ← كوبونات التخفيض»، فالثيم لا يتحقق منه. ولا يأتي القسم بكود افتراضي، لأن كوداً لم تُنشئه يرفضه الدفع.</li>
<li><strong>الزر:</strong> «نص الزر» و«رابط الزر» (تصنيف العرض مثلاً). بدون رابط يأخذ الزر الزائر إلى قسم «متجر · كل المنتجات بتبويبات» أو إلى أول قسم فيه منتجات.</li>
<li><strong>شريط العرض والموعد:</strong> شريط داكن أعلى البانر في الأشكال الثلاثة. مع «ينتهي العرض في» (مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م؛ تاريخ بلا وقت ينتهي آخر ذلك اليوم) يظهر فيه «ينتهي العرض خلال» وعدّاد تنازلي، وبعد الموعد يختفي البانر عن الزوار وحده، والمحرّر يقول لماذا. و«نص الشريط» سطر تكتبه بجانب العدّاد، مثل «شحن مجاني للطلبات فوق ٢٠٠ ر.س». بدون موعد وبدون نص لا يظهر الشريط.</li>
<li><strong>تحريك الشريط:</strong> «تحريك الشريط بلا نهاية» (معطّل) يجعله يتحرك أفقياً بلا توقف مثل «عام · شريط نصي متحرك»، و«التوقف عند مرور المؤشر» (مفعّل) يوقفه ما دام المؤشر فوقه. لا يتحرك لمن فعّل «تقليل الحركة».</li>
<li><strong>جاهز للاستخدام:</strong> يأتي بصورة من التصميم ونصوص عرض على الكتب، فاستبدلها بعرضك.</li>
</ul>
</details>


## الإعدادات بترتيبها في اللوحة




### «الشكل»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> ١ · منقسم على خلفية خوخية · المعرّف <code>layout</code></li>
<li><strong>ماذا يفعل:</strong> شكل البانر: منقسم على خلفية خوخية، أو قوس على خلفية خضراء، أو شريط أبيض أفقي. النصوص والصورة تبقى عند التبديل، وعلى الجوال عمود والصورة أعلاه.</li>
<li><strong>متى تستعمله:</strong> «قوس» لخصم بنسبة كبيرة، و«شريط» لعرض أهدأ بين الأقسام.</li>
<li>شرحه تحت الحقل في المحرّر: النصوص والصورة تبقى؛ على الجوال عمود والصورة أعلاه.</li>
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
<td><img alt="لوحة إعدادات — الشكل" src="/coach-docs/assets/sections/11-coach-offer-banner/01-layout-split-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — الشكل" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>«١ · منقسم على خلفية خوخية»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — الشكل" src="/coach-docs/assets/sections/11-coach-offer-banner/01-layout-arch-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الشكل" src="/coach-docs/assets/sections/11-coach-offer-banner/01-layout-arch-result.webp" loading="lazy" decoding="async"/></td>
<td>«٢ · قوس على خلفية خضراء»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — الشكل" src="/coach-docs/assets/sections/11-coach-offer-banner/01-layout-strip-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الشكل" src="/coach-docs/assets/sections/11-coach-offer-banner/01-layout-strip-result.webp" loading="lazy" decoding="async"/></td>
<td>«٣ · شريط أبيض أفقي»</td>
</tr>
</tbody>
</table></div>


### «الشارة»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> لفترة محدودة · المعرّف <code>badge</code></li>
<li><strong>ماذا يفعل:</strong> شارة صغيرة، مثل «لفترة محدودة» أو «حتى ٣١ أكتوبر».</li>
<li><strong>متى تستعمله:</strong> لتوضيح أن العرض مؤقت.</li>
<li><strong>حين يكون فارغاً:</strong> فارغة لا تظهر.</li>
<li>شرحه تحت الحقل في المحرّر: مثل «حتى ٣١ أكتوبر» أو «جديد»؛ فارغة تُخفى.</li>
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
<td><img alt="لوحة إعدادات — الشارة" src="/coach-docs/assets/sections/11-coach-offer-banner/02-badge-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الشارة" src="/coach-docs/assets/sections/11-coach-offer-banner/02-badge-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «الرقم الكبير»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> ٢٠٪ · المعرّف <code>big_number</code></li>
<li><strong>ماذا يفعل:</strong> في الشكل ٢ فقط: رقم كبير فوق العنوان، مثل نسبة الخصم «٣٠٪».</li>
<li><strong>متى تستعمله:</strong> حين يكون الخصم رقماً لافتاً.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «الشكل» هو «٢ · قوس على خلفية خضراء»</li>
<li>شرحه تحت الحقل في المحرّر: نسبة الخصم فوق العنوان، مثل «٣٠٪»؛ فارغاً يُخفى.</li>
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
<td><img alt="لوحة إعدادات — الرقم الكبير" src="/coach-docs/assets/sections/11-coach-offer-banner/03-big_number-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — الرقم الكبير" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «السطر الصغير»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> من مكتبتي · المعرّف <code>eyebrow</code></li>
<li><strong>ماذا يفعل:</strong> في الشكل ٣ فقط: سطر صغير فوق العنوان، مثل «منتجات رقمية».</li>
<li><strong>متى تستعمله:</strong> لتسمية فئة العرض.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا يظهر.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «الشكل» هو «٣ · شريط أبيض أفقي»</li>
<li>شرحه تحت الحقل في المحرّر: فوق العنوان، مثل «منتجات رقمية»؛ فارغاً يُخفى.</li>
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
<td><img alt="لوحة إعدادات — السطر الصغير" src="/coach-docs/assets/sections/11-coach-offer-banner/04-eyebrow-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — السطر الصغير" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «العنوان»


<ul>
<li><strong>النوع:</strong> نص بعدة أسطر · <strong>الافتراضي:</strong> خصم على كل الكتب · المعرّف <code>title</code></li>
<li><strong>ماذا يفعل:</strong> عنوان العرض. كل سطر تكتبه سطر في العنوان.</li>
<li><strong>متى تستعمله:</strong> ما الخصم وعلى ماذا، في كلمات قليلة.</li>
<li><strong>حين يكون فارغاً:</strong> إن فرغ العنوان والرقم الكبير والوصف معاً لا يظهر البانر.</li>
<li>شرحه تحت الحقل في المحرّر: كل سطر هنا سطر في العنوان.</li>
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
<td><img alt="لوحة إعدادات — العنوان" src="/coach-docs/assets/sections/11-coach-offer-banner/05-title-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — العنوان" src="/coach-docs/assets/sections/11-coach-offer-banner/05-title-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «الوصف»


<ul>
<li><strong>النوع:</strong> نص بعدة أسطر · <strong>الافتراضي:</strong> ورقية وإلكترونية وصوتية. الخصم يُطبَّق تلقائياً في السلة. · المعرّف <code>description</code></li>
<li><strong>ماذا يفعل:</strong> سطر تحت العنوان بتفاصيل العرض.</li>
<li><strong>متى تستعمله:</strong> مثل: الخصم يُطبَّق تلقائياً في السلة.</li>
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
<td><img alt="لوحة إعدادات — الوصف" src="/coach-docs/assets/sections/11-coach-offer-banner/06-description-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الوصف" src="/coach-docs/assets/sections/11-coach-offer-banner/06-description-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «كود الخصم»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>code</code></li>
<li><strong>ماذا يفعل:</strong> كود الخصم في كبسولة يُنسخ بضغطة. أنشئه أولاً من «التسويق ← كوبونات التخفيض» في سلة.</li>
<li><strong>متى تستعمله:</strong> إن كان العرض بكود يكتبه العميل.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً لا تظهر الكبسولة.</li>
<li>شرحه تحت الحقل في المحرّر: من «التسويق ← كوبونات التخفيض» في سلة؛ يُنسخ بضغطة.</li>
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
<td><img alt="لوحة إعدادات — كود الخصم" src="/coach-docs/assets/sections/11-coach-offer-banner/07-code-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — كود الخصم" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «الصورة»


<ul>
<li><strong>النوع:</strong> صورة ترفعها · <strong>الافتراضي:</strong> بلا صورة · المعرّف <code>image</code></li>
<li><strong>ماذا يفعل:</strong> صورة العرض، أفقية بعرض ١٢٠٠ تقريباً.</li>
<li><strong>متى تستعمله:</strong> صورة غلاف الكتاب أو الدورة المعروضة.</li>
<li><strong>حين يكون فارغاً:</strong> بدونها يملأ النص البانر.</li>
<li>شرحه تحت الحقل في المحرّر: أفقية بعرض ١٢٠٠ تقريباً؛ بدونها يملأ النص البانر.</li>
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
<td><img alt="لوحة إعدادات — الصورة" src="/coach-docs/assets/sections/11-coach-offer-banner/08-image-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — الصورة" src="/coach-docs/assets/sections/11-coach-offer-banner/08-image-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بصورة تجريبية</td>
</tr>
</tbody>
</table></div>


### «نص الزر»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> تصفّح الكتب · المعرّف <code>cta_label</code></li>
<li><strong>ماذا يفعل:</strong> نص الزر.</li>
<li><strong>متى تستعمله:</strong> مثل «تصفّح الكتب».</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً يُخفى الزر.</li>
<li>شرحه تحت الحقل في المحرّر: فارغاً يُخفى الزر.</li>
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
<td><img alt="لوحة إعدادات — نص الزر" src="/coach-docs/assets/sections/11-coach-offer-banner/09-cta_label-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — نص الزر" src="/coach-docs/assets/sections/11-coach-offer-banner/09-cta_label-result.webp" loading="lazy" decoding="async"/></td>
<td>مكانه في القسم محاط بإطار برتقالي</td>
</tr>
</tbody>
</table></div>


### «رابط الزر»


<ul>
<li><strong>النوع:</strong> رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · <strong>الافتراضي:</strong> بلا رابط · المعرّف <code>cta_link</code></li>
<li><strong>ماذا يفعل:</strong> إلى أين يذهب الزر، مثل تصنيف العرض.</li>
<li><strong>متى تستعمله:</strong> لتصنيف المنتجات المخفّضة.</li>
<li><strong>حين يكون فارغاً:</strong> بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات، وإلا إلى صفحة المنتجات.</li>
<li>شرحه تحت الحقل في المحرّر: تصنيف العرض مثلاً؛ بدونه ينزل إلى قسم المنتجات في الصفحة.</li>
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
<td><img alt="لوحة إعدادات — رابط الزر" src="/coach-docs/assets/sections/11-coach-offer-banner/10-cta_link-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — رابط الزر" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «ينتهي العرض في»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>end_date</code></li>
<li><strong>ماذا يفعل:</strong> موعد انتهاء العرض، مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م. يظهر عدّاد في الشريط، ويختفي البانر عند انتهاء الموعد.</li>
<li><strong>متى تستعمله:</strong> لعرض له نهاية محددة.</li>
<li><strong>حين يكون فارغاً:</strong> فارغاً بلا عدّاد ولا يختفي البانر. وإن كُتب بشكل غير مفهوم تظهر في المحرّر ملاحظة.</li>
<li>شرحه تحت الحقل في المحرّر: مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م؛ عدّاد ثم يختفي البانر. فارغاً أو غير مفهوم: بلا عدّاد.</li>
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
<td><img alt="لوحة إعدادات — ينتهي العرض في" src="/coach-docs/assets/sections/11-coach-offer-banner/11-end_date-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — ينتهي العرض في" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة: القسم بالقيمة الافتراضية</td>
</tr>
</tbody>
</table></div>


### «نص الشريط»


<ul>
<li><strong>النوع:</strong> نص بسطر واحد · <strong>الافتراضي:</strong> فارغ · المعرّف <code>strip_text</code></li>
<li><strong>ماذا يفعل:</strong> نص في الشريط الداكن أعلى البانر، بجانب العدّاد.</li>
<li><strong>متى تستعمله:</strong> لجملة عاجلة: «الأماكن محدودة».</li>
<li><strong>حين يكون فارغاً:</strong> بلا نص ولا موعد لا يظهر الشريط.</li>
<li>شرحه تحت الحقل في المحرّر: في الشريط الداكن أعلى البانر؛ بلا نص ولا موعد لا يظهر الشريط.</li>
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
<td><img alt="لوحة إعدادات — نص الشريط" src="/coach-docs/assets/sections/11-coach-offer-banner/12-strip_text-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — نص الشريط" src="/coach-docs/assets/sections/11-coach-offer-banner/12-strip_text-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بنص تجريبي «مثال لنصّك هنا»</td>
</tr>
</tbody>
</table></div>


### «تحريك الشريط بلا نهاية»


<ul>
<li><strong>النوع:</strong> مفتاح تشغيل وإطفاء · <strong>الافتراضي:</strong> مطفأ · المعرّف <code>strip_scroll</code></li>
<li><strong>ماذا يفعل:</strong> الشريط الداكن يتحرك بلا نهاية مثل «عام · شريط نصي متحرك».</li>
<li><strong>متى تستعمله:</strong> لشد الانتباه إلى العدّاد.</li>
<li><strong>حين يكون فارغاً:</strong> مطفأ (الافتراضي): الشريط ثابت.</li>
<li>شرحه تحت الحقل في المحرّر: مثل «عام · شريط نصي متحرك».</li>
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
<td><img alt="لوحة إعدادات — تحريك الشريط بلا نهاية" src="/coach-docs/assets/sections/11-coach-offer-banner/13-strip_scroll-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — تحريك الشريط بلا نهاية" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة بعد تفعيله (الافتراضي مطفأ)</td>
</tr>
</tbody>
</table></div>


### «التوقف عند مرور المؤشر»


<ul>
<li><strong>النوع:</strong> مفتاح تشغيل وإطفاء · <strong>الافتراضي:</strong> مفعّل · المعرّف <code>strip_hold</code></li>
<li><strong>ماذا يفعل:</strong> الشريط المتحرك يتوقف حين يمر عليه المؤشر.</li>
<li><strong>متى تستعمله:</strong> اتركه مفعّلاً ليقرأ الزائر النص.</li>
<li><strong>حين يكون فارغاً:</strong> مطفأ: يتحرك دائماً.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «تحريك الشريط بلا نهاية» هو «مفعّل»</li>
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
<td><img alt="لوحة إعدادات — التوقف عند مرور المؤشر" src="/coach-docs/assets/sections/11-coach-offer-banner/14-strip_hold-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — التوقف عند مرور المؤشر" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>النتيجة بعد إطفائه (الافتراضي مفعّل)</td>
</tr>
</tbody>
</table></div>


### «خلفية متحركة بالألوان»


<ul>
<li><strong>النوع:</strong> مفتاح تشغيل وإطفاء · <strong>الافتراضي:</strong> مطفأ · المعرّف <code>fx_motion</code></li>
<li><strong>ماذا يفعل:</strong> في الشكل ٢ فقط: تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».</li>
<li><strong>متى تستعمله:</strong> لعرض تريده أن يلفت النظر.</li>
<li><strong>حين يكون فارغاً:</strong> مطفأ (الافتراضي): خلفية ثابتة.</li>
<li><strong>يظهر في اللوحة فقط حين:</strong> «الشكل» هو «٢ · قوس على خلفية خضراء»</li>
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
<td><img alt="لوحة إعدادات — خلفية متحركة بالألوان" src="/coach-docs/assets/sections/11-coach-offer-banner/15-fx_motion-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — خلفية متحركة بالألوان" src="/coach-docs/assets/sections/11-coach-offer-banner/15-fx_motion-on-result.webp" loading="lazy" decoding="async"/></td>
<td>النتيجة بعد تفعيله (الافتراضي مطفأ)</td>
</tr>
</tbody>
</table></div>


### «سرعة الحركة»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> متوسطة · المعرّف <code>fx_speed</code></li>
<li><strong>ماذا يفعل:</strong> سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.</li>
<li><strong>متى تستعمله:</strong> «هادئة» لحركة لا تشتّت عن النص.</li>
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
<td><img alt="لوحة إعدادات — سرعة الحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-slow-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — سرعة الحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>«هادئة»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — سرعة الحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-normal-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — سرعة الحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-normal-result.webp" loading="lazy" decoding="async"/></td>
<td>«متوسطة»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — سرعة الحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-fast-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — سرعة الحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-fast-result.webp" loading="lazy" decoding="async"/></td>
<td>«أسرع»</td>
</tr>
</tbody>
</table></div>


### «ألوان الخلفية المتحركة»


<ul>
<li><strong>النوع:</strong> قائمة منسدلة · <strong>الافتراضي:</strong> ألوان الثيم · المعرّف <code>fx_palette</code></li>
<li><strong>ماذا يفعل:</strong> ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.</li>
<li><strong>متى تستعمله:</strong> اختر ما يناسب العرض.</li>
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
<td><img alt="لوحة إعدادات — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/17-fx_palette-theme-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة مرجعية — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/00-desktop.webp" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة وفق ملفات التوثيق الأصلية.</small></td>
<td>«ألوان الثيم»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/17-fx_palette-night-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-normal-result.webp" loading="lazy" decoding="async"/></td>
<td>«ليلي»</td>
</tr>
<tr>
<td><img alt="لوحة إعدادات — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/17-fx_palette-warm-panel.webp" loading="lazy" decoding="async"/></td>
<td><img alt="معاينة النتيجة — ألوان الخلفية المتحركة" src="/coach-docs/assets/sections/11-coach-offer-banner/16-fx_speed-fast-result.webp" loading="lazy" decoding="async"/></td>
<td>«دافئ»</td>
</tr>
</tbody>
</table></div>


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم وليست لقطات مباشرة من محرّر سلة؛ صور النتيجة من معاينة الثيم. اضغط على أي صورة لتكبيرها.</div>
