---
title: "تحويل · دعوة للإجراء (٣ أشكال)"
description: "دليل ثيم كوتش 1.76.1 — تحويل · دعوة للإجراء (٣ أشكال)"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Conversion · Call to action (3 layouts)* · مساره `home.coach-cta`

**ما يعرضه:** دعوة واضحة للخطوة التالية في ثلاثة أشكال: استشارة، أو منتج رقمي، أو ثقة. العنوان والوصف والأزرار مشتركة، وحقول كل شكل تظهر معه.

**متى تضيفه:** قرب آخر الصفحة، أو بعد قسم يقنع الزائر، ليعرف ماذا يفعل بعده.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="43-coach-cta:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — تحويل · دعوة للإجراء (٣ أشكال)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-mobile.webp?v=4a706f791dc8" alt="معاينة — تحويل · دعوة للإجراء (٣ أشكال)" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

دعوة واضحة للخطوة التالية في ثلاثة أشكال، يُختار منها في «الشكل». العنوان والوصف والأزرار مشتركة وتبقى عند تغيير الشكل، وحقول كل شكل تظهر معه وحده.

| الشكل | ما فيه |
|---|---|
| ١ · استشارة (الافتراضي) | لوح داكن: «ما يخرج به الزائر» نقطة في كل سطر، وبطاقة «الموعد» (نص حر؛ فارغاً تُخفى)، و«صورتك (الشكل ١)»، وزر يحجز ورابط ثانٍ. ومعه «خلفية متحركة بالألوان» اختيارية |
| ٢ · منتج رقمي | «المنتج (الشكل ٢)» بسعره وزر الإضافة، و«المحتوى» سطر لكل جزء (ما بعد «|» في طرفه)، و«سطر تحت الزر»، و«رابط العيّنة» |
| ٣ · ثقة | «التقييم» بنجوم، و«مزايا الثقة» بأيقونات، وزر ورابط إلى قصص النجاح |

- **المنتج:** لـ«٢ · منتج رقمي»؛ بدونه أحدث منتج رقمي.
- **الأزرار:** «نص الزر (الشكلان ١ و٣)» بلا رابط ينزل إلى قسم الاستشارات. والرابط الثاني بلا رابط ينزل إلى الأسئلة الشائعة، أو قصص النجاح في «ثقة».
- **مهم:** النصوص الافتراضية مثال؛ «التقييم» و«مزايا الثقة» وأي ضمان تُكتب كما هي في المتجر فعلاً.
- **خيارات إضافية:** «مركز الصورة» لصورة الشكل ١، ويظهر مع «١ · استشارة» وحده. ومع «اليمين» أو «اليسار» يبقى القص العمودي كما هو.

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** ١ · استشارة · المعرّف `layout`
- **ماذا يفعل:** الشكل: ١ استشارة بنقاط وموعد، ٢ منتج رقمي بمحتواه، ٣ ثقة بالتقييم والمزايا.
- **متى تستعمله:** اختر الشكل حسب الخطوة التي تريدها من الزائر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:layout:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/01-layout-consult-panel.webp?v=0b09218fa5b9" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:layout:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — الشكل" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «١ · استشارة» |
| <img data-update-ref="43-coach-cta:layout:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/01-layout-digital-panel.webp?v=8f36d3288d6b" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:layout:1:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/01-layout-digital-result.webp?v=fd6aef1c2b77" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٢ · منتج رقمي» |
| <img data-update-ref="43-coach-cta:layout:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/01-layout-trust-panel.webp?v=c377fac2527a" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:layout:2:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/01-layout-trust-result.webp?v=7622819f30ca" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٣ · ثقة» |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** خطوتك التالية · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/02-eyebrow-panel.webp?v=9fc4a8e30a35" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/02-eyebrow-result.webp?v=11d38228bf3b" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** لا تحتاج أن تعرف الطريق كله. [[ابدأ بخطوة.]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/03-title-panel.webp?v=23e96b559a78" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/03-title-result.webp?v=b9ca5a412f95" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** أرشّح لك البداية الأنسب لهدفك المهني: استشارة قصيرة، أو برنامج بإيقاعك، أو جلسات فردية. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/04-description-panel.webp?v=4db781ea38c1" alt="لوحة إعدادات (نسخة مطابقة) — الوصف" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/04-description-result.webp?v=cd2439ef723d" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «ما يخرج به الزائر»

- **النوع:** نص بعدة أسطر · **الافتراضي:** هدف واضح للأشهر الثلاثة القادمة / خطوة أولى تبدأ بها من الغد / ترشيح البرنامج الأنسب لك · المعرّف `points`
- **ماذا يفعل:** في الاستشارة: ما يخرج به الزائر، نقطة في كل سطر.
- **متى تستعمله:** لنتائج الجلسة الأولى.
- **حين يكون فارغاً:** فارغة لا تظهر القائمة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · استشارة»
- شرحه تحت الحقل في المحرّر: نقطة في كل سطر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:points:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/05-points-panel.webp?v=d4bdfb4fd6ca" alt="لوحة إعدادات (نسخة مطابقة) — ما يخرج به الزائر" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:points:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — ما يخرج به الزائر" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «عنوان بطاقة الموعد»

- **النوع:** نص بسطر واحد · **الافتراضي:** أقرب موعد · المعرّف `slot_label`
- **ماذا يفعل:** في الاستشارة: عنوان بطاقة الموعد، مثل «أقرب موعد».
- **متى تستعمله:** مع «الموعد».
- **حين يكون فارغاً:** فارغاً يظهر الموعد وحده.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · استشارة»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:slot_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/06-slot_label-panel.webp?v=648526042ccd" alt="لوحة إعدادات (نسخة مطابقة) — عنوان بطاقة الموعد" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:slot_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — عنوان بطاقة الموعد" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الموعد»

- **النوع:** نص بسطر واحد · **الافتراضي:** هذا الأسبوع · مساءً · المعرّف `slot_text`
- **ماذا يفعل:** في الاستشارة: الموعد نصاً حراً على البطاقة، مثل «هذا الأسبوع · مساءً».
- **متى تستعمله:** لتشجيع الحجز السريع.
- **حين يكون فارغاً:** فارغاً تُخفى بطاقة الموعد.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · استشارة»
- شرحه تحت الحقل في المحرّر: نص حر؛ فارغاً تُخفى البطاقة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:slot_text:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/07-slot_text-panel.webp?v=f3a702b00c8d" alt="لوحة إعدادات (نسخة مطابقة) — الموعد" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:slot_text:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — الموعد" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «المنتج (الشكل ٢)»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `product`
- **ماذا يفعل:** في الشكل ٢: المنتج، منه السعر وزر الإضافة.
- **متى تستعمله:** منتجك الرقمي.
- **حين يكون فارغاً:** بدونه أحدث منتج رقمي.
- شرحه تحت الحقل في المحرّر: بدونه أحدث منتج رقمي.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:product:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/08-product-panel.webp?v=9529b94aaf7b" alt="لوحة إعدادات (نسخة مطابقة) — المنتج (الشكل ٢)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:product:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — المنتج (الشكل ٢)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «عنوان المحتوى»

- **النوع:** نص بسطر واحد · **الافتراضي:** داخل الكتاب · المعرّف `contents_label`
- **ماذا يفعل:** في المنتج الرقمي: عنوان قائمة المحتوى، مثل «داخل الكتاب».
- **متى تستعمله:** مع «المحتوى».
- **حين يكون فارغاً:** فارغاً تظهر القائمة بلا عنوان.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · منتج رقمي»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:contents_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/09-contents_label-panel.webp?v=fd79594d8295" alt="لوحة إعدادات (نسخة مطابقة) — عنوان المحتوى" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:contents_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — عنوان المحتوى" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «المحتوى»

- **النوع:** نص بعدة أسطر · **الافتراضي:** لماذا لا يصل محتواك؟ | ٨ صفحات / الأسبوع ١: اعرف جمهورك | ٢٤ صفحة / الأسبوع ٢: قصتك المهنية | ٢٦ صفحة / الأسبوعان ٣–٤: خطة النشر | ٤٠ صفحة · المعرّف `contents`
- **ماذا يفعل:** في المنتج الرقمي: المحتوى، سطر لكل جزء، وما بعد «|» في طرف السطر.
- **متى تستعمله:** لفصول الكتاب أو أجزاء الحزمة.
- **حين يكون فارغاً:** فارغاً لا تظهر القائمة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · منتج رقمي»
- شرحه تحت الحقل في المحرّر: سطر لكل جزء؛ ما بعد «|» في طرفه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:contents:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/10-contents-panel.webp?v=da42720a519d" alt="لوحة إعدادات (نسخة مطابقة) — المحتوى" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:contents:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — المحتوى" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «سطر تحت الزر»

- **النوع:** نص بسطر واحد · **الافتراضي:** تحميل فوري بعد الدفع · المعرّف `note`
- **ماذا يفعل:** في المنتج الرقمي: سطر صغير تحت الزر.
- **متى تستعمله:** مثل «تحميل فوري بعد الدفع».
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · منتج رقمي»
- شرحه تحت الحقل في المحرّر: الضمان كما في سياسة الاسترجاع في المتجر؛ فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:note:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/11-note-panel.webp?v=4190bba87d9f" alt="لوحة إعدادات (نسخة مطابقة) — سطر تحت الزر" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:note:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — سطر تحت الزر" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «التقييم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `rating`
- **ماذا يفعل:** في الثقة: التقييم بجانب النجوم، مثل «٤٫٩».
- **متى تستعمله:** إن كان لك تقييم حقيقي.
- **حين يكون فارغاً:** فارغاً تُخفى النجوم.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٣ · ثقة»
- شرحه تحت الحقل في المحرّر: فارغاً تُخفى النجوم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:rating:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/12-rating-panel.webp?v=61ae9ed97021" alt="لوحة إعدادات (نسخة مطابقة) — التقييم" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:rating:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — التقييم" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «بجانب التقييم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `rating_text`
- **ماذا يفعل:** في الثقة: سطر بجانب التقييم، مثل «من ٨٢٠ تقييماً».
- **متى تستعمله:** مع التقييم.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٣ · ثقة»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:rating_text:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/13-rating_text-panel.webp?v=9d3443f9af91" alt="لوحة إعدادات (نسخة مطابقة) — بجانب التقييم" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:rating_text:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — بجانب التقييم" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «مزايا الثقة»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `trust_items`
- **ماذا يفعل:** في الثقة: مزايا بأيقونات.
- **متى تستعمله:** لما يطمئن الزائر: ضمان، دعم، دفع آمن.
- **حين يكون فارغاً:** بلا عناصر لا تظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٣ · ثقة»
- شرحه تحت الحقل في المحرّر: مدة الضمان وكل ميزة كما هي في المتجر فعلاً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:trust_items:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/14-trust_items-panel.webp?v=b22bf822a0d3" alt="لوحة إعدادات (نسخة مطابقة) — مزايا الثقة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:trust_items:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — مزايا الثقة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الأيقونة»

- **النوع:** أيقونة · **الافتراضي:** sicon-check-circle · المعرّف `trust_items.icon`
- **ماذا يفعل:** أيقونة الميزة.
- **حين يكون فارغاً:** بدونها علامة صح.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:trust_items:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/14-trust_items-icon-panel.webp?v=e796541fb9b5" alt="لوحة إعدادات (نسخة مطابقة) — مزايا الثقة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:trust_items:1:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — مزايا الثقة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trust_items.title`
- **ماذا يفعل:** عنوان الميزة.
- **حين يكون فارغاً:** الميزة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:trust_items:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/14-trust_items-icon-panel.webp?v=e796541fb9b5" alt="لوحة إعدادات (نسخة مطابقة) — مزايا الثقة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:trust_items:2:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — مزايا الثقة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «سطر تحته»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trust_items.text`
- **ماذا يفعل:** سطر تحت عنوان الميزة.
- **حين يكون فارغاً:** فارغاً يظهر العنوان وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:trust_items:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/14-trust_items-icon-panel.webp?v=e796541fb9b5" alt="لوحة إعدادات (نسخة مطابقة) — مزايا الثقة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:trust_items:3:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — مزايا الثقة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «صورتك (الشكل ١)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** في الشكل ١: صورتك داخل قوس بجانب النص.
- **متى تستعمله:** صورة ودودة لك.
- **حين يكون فارغاً:** بدونها لا تظهر الصورة؛ وفي الشكل ١ تبقى بطاقة الموعد وحدها إن كُتب الموعد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/15-image-panel.webp?v=5a7a08e34bb5" alt="لوحة إعدادات (نسخة مطابقة) — صورتك (الشكل ١)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/15-image-result.webp?v=4828ed561457" alt="معاينة — صورتك (الشكل ١)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط (الافتراضي) · المعرّف `image_focus`
- **ماذا يفعل:** الجزء الظاهر من الصورة حين تُقص: الوسط أو الأعلى أو الأسفل أو اليمين أو اليسار.
- **متى تستعمله:** حين يُقص وجه أو عنوان في الصورة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · استشارة»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:image_focus:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-center-panel.webp?v=bb786cc7d50b" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:image_focus:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/15-image-result.webp?v=4828ed561457" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «الوسط (الافتراضي)» · بصورة تجريبية |
| <img data-update-ref="43-coach-cta:image_focus:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-top-panel.webp?v=887650ffa8d6" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:image_focus:1:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-top-result.webp?v=7434e8e895d8" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» · بصورة تجريبية |
| <img data-update-ref="43-coach-cta:image_focus:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-bottom-panel.webp?v=8747f92c6d50" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:image_focus:2:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-bottom-result.webp?v=6b69e3850059" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأسفل» · بصورة تجريبية |
| <img data-update-ref="43-coach-cta:image_focus:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-right-panel.webp?v=82266450451c" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:image_focus:3:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-right-result.webp?v=f265585de730" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» · بصورة تجريبية |
| <img data-update-ref="43-coach-cta:image_focus:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-left-panel.webp?v=74a8c12141ed" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:image_focus:4:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/16-image_focus-left-result.webp?v=95a780130b49" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» · بصورة تجريبية |

### «خلفية متحركة بالألوان»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_motion`
- **ماذا يفعل:** في الاستشارة: تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».
- **متى تستعمله:** لدعوة لافتة.
- **حين يكون فارغاً:** مطفأ (الافتراضي): خلفية ثابتة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · استشارة»
- شرحه تحت الحقل في المحرّر: في «استشارة»: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:fx_motion:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/17-fx_motion-panel.webp?v=2a6f60a4b5a0" alt="لوحة إعدادات (نسخة مطابقة) — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_motion:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/17-fx_motion-on-result.webp?v=0c44d9dd5848" alt="معاينة — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة.
- **متى تستعمله:** «هادئة» لحركة لا تشتّت.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:fx_speed:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/18-fx_speed-slow-panel.webp?v=fa6f3d60a929" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_speed:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/18-fx_speed-slow-result.webp?v=f65138ea2cf9" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «هادئة» |
| <img data-update-ref="43-coach-cta:fx_speed:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/18-fx_speed-normal-panel.webp?v=85c11c1b4f44" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_speed:1:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/18-fx_speed-normal-result.webp?v=f8c579c2fc9f" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img data-update-ref="43-coach-cta:fx_speed:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/18-fx_speed-fast-panel.webp?v=d577d6412270" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_speed:2:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/18-fx_speed-fast-result.webp?v=b583fe68aa4a" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «أسرع» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.
- **متى تستعمله:** اختر ما يناسب الدعوة.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:fx_palette:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/19-fx_palette-theme-panel.webp?v=2e2d6ef56b08" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_palette:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/19-fx_palette-theme-result.webp?v=5fa90c6cc971" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ألوان الثيم» |
| <img data-update-ref="43-coach-cta:fx_palette:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/19-fx_palette-night-panel.webp?v=ac8660d0cbcd" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_palette:1:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/19-fx_palette-night-result.webp?v=ede84e2016f4" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ليلي» |
| <img data-update-ref="43-coach-cta:fx_palette:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/19-fx_palette-warm-panel.webp?v=8ed1bed123d3" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:fx_palette:2:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/19-fx_palette-warm-result.webp?v=66bc28d4506a" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «دافئ» |

### «نص الزر (الشكلان ١ و٣)»

- **النوع:** نص بسطر واحد · **الافتراضي:** احجز استشارتك · المعرّف `primary_label`
- **ماذا يفعل:** في الشكلين ١ و٣: نص الزر الرئيسي.
- **متى تستعمله:** مثل «احجز استشارتك».
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:primary_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/20-primary_label-panel.webp?v=f27deb05f920" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر (الشكلان ١ و٣)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:primary_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/20-primary_label-result.webp?v=e23dfed5a7cb" alt="معاينة — نص الزر (الشكلان ١ و٣)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر (الشكلان ١ و٣)»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `primary_link`
- **ماذا يفعل:** في الشكلين ١ و٣: إلى أين يذهب الزر.
- **متى تستعمله:** لمنتج الاستشارة أو صفحة الحجز.
- **حين يكون فارغاً:** بدونه ينزل إلى «استشارات · باقات الجلسات الفردية» إن وُجد، وإلا إلى صفحة المنتجات.
- شرحه تحت الحقل في المحرّر: بدونه: قسم الاستشارات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:primary_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/21-primary_link-panel.webp?v=3c288d8fc3d7" alt="لوحة إعدادات (نسخة مطابقة) — رابط الزر (الشكلان ١ و٣)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:primary_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — رابط الزر (الشكلان ١ و٣)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الإضافة للسلة (الشكل ٢)»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `add_label`
- **ماذا يفعل:** في الشكل ٢: نص زر الإضافة للسلة.
- **متى تستعمله:** مثل «اشترِ الآن».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:add_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/22-add_label-panel.webp?v=b2457eae232e" alt="لوحة إعدادات (نسخة مطابقة) — نص زر الإضافة للسلة (الشكل ٢)" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:add_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — نص زر الإضافة للسلة (الشكل ٢)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «الرابط الثاني»

- **النوع:** نص بسطر واحد · **الافتراضي:** كيف تتم الجلسة؟ · المعرّف `secondary_label`
- **ماذا يفعل:** في الاستشارة: رابط نصي ثانٍ، مثل «كيف تتم الجلسة؟».
- **متى تستعمله:** لمن يريد معرفة المزيد قبل الحجز.
- **حين يكون فارغاً:** فارغاً يُخفى.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · استشارة»
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:secondary_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/23-secondary_label-panel.webp?v=33b5b43b3565" alt="لوحة إعدادات (نسخة مطابقة) — الرابط الثاني" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:secondary_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — الرابط الثاني" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «رابط العيّنة»

- **النوع:** نص بسطر واحد · **الافتراضي:** اقرأ الفصل الأول مجاناً · المعرّف `sample_label`
- **ماذا يفعل:** في المنتج الرقمي: رابط العيّنة، يظهر مع رابطه.
- **متى تستعمله:** لعيّنة مجانية.
- **حين يكون فارغاً:** فارغاً أو بلا رابط لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · منتج رقمي»
- شرحه تحت الحقل في المحرّر: يظهر مع رابط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:sample_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/24-sample_label-panel.webp?v=b5e991d58bfd" alt="لوحة إعدادات (نسخة مطابقة) — رابط العيّنة" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:sample_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — رابط العيّنة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الزر الثاني»

- **النوع:** نص بسطر واحد · **الافتراضي:** اقرأ قصص النجاح · المعرّف `stories_label`
- **ماذا يفعل:** في الثقة: الزر الثاني، مثل «اقرأ قصص النجاح».
- **متى تستعمله:** ليرى الزائر آراء عملائك.
- **حين يكون فارغاً:** فارغاً يُخفى.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٣ · ثقة»
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:stories_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/25-stories_label-panel.webp?v=1782c4d07b54" alt="لوحة إعدادات (نسخة مطابقة) — الزر الثاني" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:stories_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — الزر الثاني" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «وجهة الرابط الثاني»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `secondary_link`
- **ماذا يفعل:** وجهة الرابط الثاني في الأشكال الثلاثة.
- **متى تستعمله:** إن أردت وجهة غير الافتراضية.
- **حين يكون فارغاً:** بدونه ينزل إلى «الأسئلة الشائعة»، أو «قصص النجاح» في «ثقة»، إن وُجد في الصفحة؛ وإلا يُخفى عن الزوار. وفي المنتج الرقمي لا يظهر رابط العيّنة بدونه.
- شرحه تحت الحقل في المحرّر: بدونه: الأسئلة الشائعة، أو القصص في «ثقة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:secondary_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/26-secondary_link-panel.webp?v=1015898637c2" alt="لوحة إعدادات (نسخة مطابقة) — وجهة الرابط الثاني" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:secondary_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/00-desktop.webp?v=74138c42180e" alt="معاينة — وجهة الرابط الثاني" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="43-coach-cta:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/27-custom_classes-panel.webp?v=c9e549467c44" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="43-coach-cta:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/43-coach-cta/27-custom_classes-result.webp?v=b4108da4f089" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp · لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[البيانات الافتراضية]
الأرقام والتقييمات والآراء الافتراضية أمثلة، تُعدَّل قبل النشر.
:::
