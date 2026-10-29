---
title: "عروض · بانر عرض (٣ أشكال)"
description: "دليل ثيم كوتش 1.76.1 — عروض · بانر عرض (٣ أشكال)"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Offers · Offer banner (3 layouts)* · مساره `home.coach-offer-banner`

**ما يعرضه:** بانر عرض بعرض الصفحة في ثلاثة أشكال: صورة ونصوص وكود خصم وزر، وشريط داكن بعدّاد. يختفي وحده بعد موعد انتهاء العرض.

**متى تضيفه:** لعرض محدود المدة أو كود خصم تريد أن يراه كل زائر.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="13-coach-offer-banner:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-desktop.webp?v=711e02dae24e" alt="معاينة — عروض · بانر عرض (٣ أشكال)" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-mobile.webp?v=702677a73dc1" alt="معاينة — عروض · بانر عرض (٣ أشكال)" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

بانر عرض بعرض الصفحة، والصورة في بدايته دائماً (يميناً بالعربية). «الشكل»: «منقسم على خلفية خوخية»، أو «قوس على خلفية خضراء» (الصورة داخل قوس ورقم كبير فوق العنوان)، أو «شريط أبيض أفقي» (الزر في طرفه). على الجوال يصير عموداً واحداً والصورة أعلاه.

- **النصوص:** «الشارة» (مثل «حتى ٣١ أكتوبر» أو «جديد»)، و«العنوان» و«الوصف». «الرقم الكبير» يظهر في شكل القوس فقط، ويكمله العنوان: «٣٠٪» ثم «على الدورات المسجّلة هذا الأسبوع». و«السطر الصغير» وأيقونته في الشكل الأفقي فقط. كل حقل فارغ يختفي مكانه.
- **كود الخصم:** اختياري. يظهر بعد «استخدم الكود»، وينسخه الزائر بضغطة. يُنشأ الكوبون أولاً في «التسويق ← كوبونات التخفيض»، فالثيم لا يتحقق منه. ولا يأتي القسم بكود افتراضي، لأن الدفع يرفض كوداً غير مُنشأ.
- **الزر:** «نص الزر» و«رابط الزر» (تصنيف العرض مثلاً). بدون رابط يأخذ الزر الزائر إلى قسم «متجر · كل المنتجات بتبويبات» أو إلى أول قسم فيه منتجات.
- **شريط العرض والموعد:** شريط داكن أعلى البانر في الأشكال الثلاثة. مع «ينتهي العرض في» (مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م؛ تاريخ بلا وقت ينتهي آخر ذلك اليوم) يظهر فيه «ينتهي العرض خلال» وعدّاد تنازلي، وبعد الموعد يختفي البانر عن الزوار وحده، والمحرّر يقول لماذا. و«نص الشريط» سطر يُكتب بجانب العدّاد، مثل «شحن مجاني للطلبات فوق ٢٠٠ ر.س». بدون موعد وبدون نص لا يظهر الشريط.
- **تحريك الشريط:** «تحريك الشريط بلا نهاية» (معطّل) يجعله يتحرك أفقياً بلا توقف مثل «عام · شريط نصي متحرك»، و«التوقف عند مرور المؤشر» (مفعّل) يوقفه ما دام المؤشر فوقه. لا يتحرك لمن فعّل «تقليل الحركة».
- **جاهز للاستخدام:** يأتي بصورة من التصميم ونصوص عرض على الكتب، تُستبدل بالعرض الحقيقي.
- **خيارات إضافية:** «مركز الصورة»، و«العدّاد التنازلي» (مفعّل افتراضياً).

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** ١ · منقسم على خلفية خوخية · المعرّف `layout`
- **ماذا يفعل:** شكل البانر: منقسم على خلفية خوخية، أو قوس على خلفية خضراء، أو شريط أبيض أفقي. النصوص والصورة تبقى عند التبديل، وعلى الجوال عمود والصورة أعلاه.
- **متى تستعمله:** «قوس» لخصم بنسبة كبيرة، و«شريط» لعرض أهدأ بين الأقسام.
- شرحه تحت الحقل في المحرّر: النصوص والصورة تبقى؛ على الجوال عمود والصورة أعلاه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:layout:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-panel.webp?v=1d227201332c" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:layout:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-result.webp?v=96c2bdd76bc2" alt="معاينة — الشكل" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «١ · منقسم على خلفية خوخية» |
| <img data-update-ref="13-coach-offer-banner:layout:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-arch-panel.webp?v=b70909f7f8df" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:layout:1:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-arch-result.webp?v=ecd04cd4f29e" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٢ · قوس على خلفية خضراء» |
| <img data-update-ref="13-coach-offer-banner:layout:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-strip-panel.webp?v=c1e94699f43f" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:layout:2:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-strip-result.webp?v=997b65a527b4" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٣ · شريط أبيض أفقي» |

### «الشارة»

- **النوع:** نص بسطر واحد · **الافتراضي:** لفترة محدودة · المعرّف `badge`
- **ماذا يفعل:** شارة صغيرة، مثل «لفترة محدودة» أو «حتى ٣١ أكتوبر».
- **متى تستعمله:** لتوضيح أن العرض مؤقت.
- **حين يكون فارغاً:** فارغة لا تظهر.
- شرحه تحت الحقل في المحرّر: مثل «حتى ٣١ أكتوبر» أو «جديد»؛ فارغة تُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:badge:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/02-badge-panel.webp?v=c2688677ed78" alt="لوحة إعدادات (نسخة مطابقة) — الشارة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:badge:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/02-badge-result.webp?v=6d43b36e0e0a" alt="معاينة — الشارة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الرقم الكبير»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٢٠٪ · المعرّف `big_number`
- **ماذا يفعل:** في الشكل ٢ فقط: رقم كبير فوق العنوان، مثل نسبة الخصم «٣٠٪».
- **متى تستعمله:** حين يكون الخصم رقماً لافتاً.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · قوس على خلفية خضراء»
- شرحه تحت الحقل في المحرّر: نسبة الخصم فوق العنوان، مثل «٣٠٪»؛ فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:big_number:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/03-big_number-panel.webp?v=18c2b43a7bcd" alt="لوحة إعدادات (نسخة مطابقة) — الرقم الكبير" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:big_number:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-desktop.webp?v=711e02dae24e" alt="معاينة — الرقم الكبير" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** من مكتبتي · المعرّف `eyebrow`
- **ماذا يفعل:** في الشكل ٣ فقط: سطر صغير فوق العنوان، مثل «منتجات رقمية».
- **متى تستعمله:** لتسمية فئة العرض.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٣ · شريط أبيض أفقي»
- شرحه تحت الحقل في المحرّر: مثل «منتجات رقمية»؛ فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/04-eyebrow-panel.webp?v=fa1d13814a7d" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-desktop.webp?v=711e02dae24e" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «العنوان»

- **النوع:** نص بعدة أسطر · **الافتراضي:** خصم على كل الكتب · المعرّف `title`
- **ماذا يفعل:** عنوان العرض. كل سطر تكتبه سطر في العنوان.
- **متى تستعمله:** ما الخصم وعلى ماذا، في كلمات قليلة.
- **حين يكون فارغاً:** إن فرغ العنوان والرقم الكبير والوصف معاً لا يظهر البانر.
- شرحه تحت الحقل في المحرّر: كل سطر هنا سطر في العنوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/05-title-panel.webp?v=34d6da8055a0" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/05-title-result.webp?v=7d9c557c8938" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** ورقية وإلكترونية وصوتية، بخصم لفترة محدودة. · المعرّف `description`
- **ماذا يفعل:** سطر تحت العنوان بتفاصيل العرض.
- **متى تستعمله:** مثل: الخصم يُطبَّق تلقائياً في السلة.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/06-description-panel.webp?v=386bd0676484" alt="لوحة إعدادات (نسخة مطابقة) — الوصف" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/06-description-result.webp?v=ba0ac14bd74e" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «كود الخصم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `code`
- **ماذا يفعل:** كود الخصم في كبسولة يُنسخ بضغطة. أنشئه أولاً من «التسويق ← كوبونات التخفيض» في سلة.
- **متى تستعمله:** إن كان العرض بكود يكتبه العميل.
- **حين يكون فارغاً:** فارغاً لا تظهر الكبسولة.
- شرحه تحت الحقل في المحرّر: من «التسويق ← كوبونات التخفيض» في سلة؛ يُنسخ بضغطة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:code:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/07-code-panel.webp?v=160234567d1c" alt="لوحة إعدادات (نسخة مطابقة) — كود الخصم" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:code:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-desktop.webp?v=711e02dae24e" alt="معاينة — كود الخصم" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الصورة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة العرض، أفقية بعرض ١٢٠٠ تقريباً.
- **متى تستعمله:** صورة غلاف الكتاب أو الدورة المعروضة.
- **حين يكون فارغاً:** بدونها يملأ النص البانر.
- شرحه تحت الحقل في المحرّر: أفقية بعرض ١٢٠٠ تقريباً؛ بدونها يملأ النص البانر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/08-image-panel.webp?v=b68621f13bb8" alt="لوحة إعدادات (نسخة مطابقة) — الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/08-image-result.webp?v=3650f053080d" alt="معاينة — الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط (الافتراضي) · المعرّف `image_focus`
- **ماذا يفعل:** الجزء الظاهر من الصورة حين تُقص: الوسط أو الأعلى أو الأسفل أو اليمين أو اليسار.
- **متى تستعمله:** حين يُقص وجه أو عنوان في الصورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:image_focus:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-center-panel.webp?v=247df89ab6f8" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:image_focus:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/08-image-result.webp?v=3650f053080d" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «الوسط (الافتراضي)» · بصورة تجريبية |
| <img data-update-ref="13-coach-offer-banner:image_focus:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-top-panel.webp?v=82904d91ab22" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:image_focus:1:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-top-result.webp?v=097e40bbf161" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» · بصورة تجريبية |
| <img data-update-ref="13-coach-offer-banner:image_focus:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-bottom-panel.webp?v=0e8170325a62" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:image_focus:2:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-bottom-result.webp?v=99b9596d9603" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأسفل» · بصورة تجريبية |
| <img data-update-ref="13-coach-offer-banner:image_focus:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-right-panel.webp?v=6bad33d2c12f" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:image_focus:3:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-right-result.webp?v=d99137a0ed22" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» · بصورة تجريبية |
| <img data-update-ref="13-coach-offer-banner:image_focus:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-left-panel.webp?v=60a8235d7949" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:image_focus:4:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/09-image_focus-left-result.webp?v=eb807d66778c" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» · بصورة تجريبية |

### «نص الزر»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح الكتب · المعرّف `cta_label`
- **ماذا يفعل:** نص الزر.
- **متى تستعمله:** مثل «تصفّح الكتب».
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:cta_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/10-cta_label-panel.webp?v=516f74013a54" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:cta_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/10-cta_label-result.webp?v=6d35cb759f69" alt="معاينة — نص الزر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `cta_link`
- **ماذا يفعل:** إلى أين يذهب الزر، مثل تصنيف العرض.
- **متى تستعمله:** لتصنيف المنتجات المخفّضة.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات، وإلا إلى صفحة المنتجات.
- شرحه تحت الحقل في المحرّر: تصنيف العرض مثلاً؛ بدونه ينزل إلى قسم المنتجات في الصفحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:cta_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/11-cta_link-panel.webp?v=c9cfcfd5a894" alt="لوحة إعدادات (نسخة مطابقة) — رابط الزر" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:cta_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-desktop.webp?v=711e02dae24e" alt="معاينة — رابط الزر" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «ينتهي العرض في»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `end_date`
- **ماذا يفعل:** موعد انتهاء العرض، مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م. يظهر عدّاد في الشريط، ويختفي البانر عند انتهاء الموعد.
- **متى تستعمله:** لعرض له نهاية محددة.
- **حين يكون فارغاً:** فارغاً بلا عدّاد ولا يختفي البانر. وإن كُتب بشكل غير مفهوم تظهر في المحرّر ملاحظة.
- شرحه تحت الحقل في المحرّر: مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م؛ عدّاد ثم يختفي البانر. فارغاً أو غير مفهوم: بلا عدّاد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:end_date:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/12-end_date-panel.webp?v=b0928ebe69f7" alt="لوحة إعدادات (نسخة مطابقة) — ينتهي العرض في" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:end_date:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/00-desktop.webp?v=711e02dae24e" alt="معاينة — ينتهي العرض في" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «العدّاد التنازلي»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_countdown`
- **ماذا يفعل:** العدّاد التنازلي حتى تاريخ الانتهاء.
- **متى تستعمله:** مطفأ ليبقى العرض ينتهي بالتاريخ بلا عدّاد ظاهر.
- **حين يكون فارغاً:** مفعّل افتراضياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:show_countdown:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/13-show_countdown-panel.webp?v=555956a58751" alt="لوحة إعدادات (نسخة مطابقة) — العدّاد التنازلي" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:show_countdown:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-result.webp?v=96c2bdd76bc2" alt="معاينة — العدّاد التنازلي" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «نص الشريط»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `strip_text`
- **ماذا يفعل:** نص في الشريط الداكن أعلى البانر، بجانب العدّاد.
- **متى تستعمله:** لجملة عاجلة: «الأماكن محدودة».
- **حين يكون فارغاً:** بلا نص ولا موعد لا يظهر الشريط.
- شرحه تحت الحقل في المحرّر: في الشريط الداكن أعلى البانر؛ بلا نص ولا موعد لا يظهر الشريط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:strip_text:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/14-strip_text-panel.webp?v=d999e930e109" alt="لوحة إعدادات (نسخة مطابقة) — نص الشريط" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:strip_text:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/14-strip_text-result.webp?v=25b8a152257a" alt="معاينة — نص الشريط" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «تحريك الشريط بلا نهاية»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `strip_scroll`
- **ماذا يفعل:** الشريط الداكن يتحرك بلا نهاية مثل «عام · شريط نصي متحرك».
- **متى تستعمله:** لشد الانتباه إلى العدّاد.
- **حين يكون فارغاً:** مطفأ (الافتراضي): الشريط ثابت.
- شرحه تحت الحقل في المحرّر: مثل «عام · شريط نصي متحرك».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:strip_scroll:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/15-strip_scroll-panel.webp?v=0ab27a555a8c" alt="لوحة إعدادات (نسخة مطابقة) — تحريك الشريط بلا نهاية" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:strip_scroll:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-result.webp?v=96c2bdd76bc2" alt="معاينة — تحريك الشريط بلا نهاية" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «التوقف عند مرور المؤشر»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `strip_hold`
- **ماذا يفعل:** الشريط المتحرك يتوقف حين يمر عليه المؤشر.
- **متى تستعمله:** اتركه مفعّلاً ليقرأ الزائر النص.
- **حين يكون فارغاً:** مطفأ: يتحرك دائماً.
- **يظهر في اللوحة فقط حين:** «تحريك الشريط بلا نهاية» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:strip_hold:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/16-strip_hold-panel.webp?v=89f170f80b67" alt="لوحة إعدادات (نسخة مطابقة) — التوقف عند مرور المؤشر" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:strip_hold:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-result.webp?v=96c2bdd76bc2" alt="معاينة — التوقف عند مرور المؤشر" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «خلفية متحركة بالألوان»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_motion`
- **ماذا يفعل:** في الشكل ٢ فقط: تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».
- **متى تستعمله:** لعرض تريده أن يلفت النظر.
- **حين يكون فارغاً:** مطفأ (الافتراضي): خلفية ثابتة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · قوس على خلفية خضراء»
- شرحه تحت الحقل في المحرّر: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:fx_motion:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/17-fx_motion-panel.webp?v=7480ecf1b8b9" alt="لوحة إعدادات (نسخة مطابقة) — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_motion:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/17-fx_motion-on-result.webp?v=279952187f30" alt="معاينة — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.
- **متى تستعمله:** «هادئة» لحركة لا تشتّت عن النص.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:fx_speed:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-slow-panel.webp?v=abd4ef816c80" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_speed:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-result.webp?v=96c2bdd76bc2" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «هادئة» |
| <img data-update-ref="13-coach-offer-banner:fx_speed:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-normal-panel.webp?v=176ff0d9189c" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_speed:1:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-normal-result.webp?v=505a9d86d80a" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «متوسطة» |
| <img data-update-ref="13-coach-offer-banner:fx_speed:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-fast-panel.webp?v=e4a9ab7b1fc4" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_speed:2:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-fast-result.webp?v=61bb0ac23036" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «أسرع» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.
- **متى تستعمله:** اختر ما يناسب العرض.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:fx_palette:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/19-fx_palette-theme-panel.webp?v=7125ec527275" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_palette:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/01-layout-split-result.webp?v=96c2bdd76bc2" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «ألوان الثيم» |
| <img data-update-ref="13-coach-offer-banner:fx_palette:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/19-fx_palette-night-panel.webp?v=a0fac89cb29a" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_palette:1:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-normal-result.webp?v=505a9d86d80a" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «ليلي» |
| <img data-update-ref="13-coach-offer-banner:fx_palette:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/19-fx_palette-warm-panel.webp?v=f96b07ff82a5" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:fx_palette:2:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/18-fx_speed-fast-result.webp?v=61bb0ac23036" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «دافئ» |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="13-coach-offer-banner:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/20-custom_classes-panel.webp?v=232f8d496235" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="13-coach-offer-banner:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/13-coach-offer-banner/20-custom_classes-result.webp?v=25ac871d9bc4" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
