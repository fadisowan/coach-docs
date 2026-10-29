---
title: "دورة · منهج البرنامج"
description: "دليل ثيم كوتش 1.76.1 — دورة · منهج البرنامج"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Course · Curriculum* · مساره `home.coach-curriculum`

**ما يعرضه:** وحدات البرنامج في قائمة تُفتح وحدة وحدة، بمدة كل درس وعلامة الدروس المجانية، وبجانبها بطاقة البرنامج من المنتج بسعرها وزر الإضافة.

**متى تضيفه:** تحت قسم برنامج بعينه، ليعرف الزائر ما سيتعلّمه قبل الشراء.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="20-coach-curriculum:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — دورة · منهج البرنامج" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-mobile.webp?v=12a7091823a6" alt="معاينة — دورة · منهج البرنامج" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

وحدات البرنامج في أكورديون مع مدة كل درس، ووسم «معاينة مجانية» على دروس free حين يوضع «فيديو الدرس المجاني» (بدونه لا يظهر الوسم)، وبجانبها ملخص البرنامج وبطاقته: صورته واسمه وسعره وزر الإضافة.

- **الوحدات:** «الوحدات» حتى ١٢، والأولى مفتوحة عند التحميل. في «الدروس» درس في كل سطر بهذا الشكل: العنوان | المدة | free. المدة وكلمة free اختياريتان، وتُقبل «مجاني» مكان free. مثال: ما هي تجربة المستخدم؟ | 08:12 | free
- **البطاقة:** «منتج البرنامج المرتبط بالمنهج»، و«صورة البرنامج (اختياري)» أفقية (٨٠٠×٥٠٠ بكسل تقريباً؛ فارغة تظهر صورة المنتج)، و«السعر وزر «أضف للسلة» في البطاقة»، و«موضع بطاقة البرنامج» أعلى المحتوى أو أسفله.
- **الدرس المجاني:** «فيديو الدرس المجاني» رابط YouTube أو Vimeo أو ملف MP4، يظهر معه زر نصّه من «نص زر الدرس المجاني» (الافتراضي «شاهد الدرس المجاني») يفتح الفيديو في نافذة. فارغاً لا زر.
- **نصيحة:** في «ملخص البرنامج» افصل الأجزاء بالنقطة الوسطى ·، مثل: ٤ وحدات · ٢٨ درساً · ١٠ ساعات.
- **خيارات إضافية:** «الوحدة الأولى مفتوحة عند التحميل» (مفعّل افتراضياً).

</details>

## الإعدادات بترتيبها في اللوحة

### «موضع بطاقة البرنامج»

- **النوع:** قائمة منسدلة · **الافتراضي:** أعلى المحتوى: قبل العنوان · المعرّف `card_position`
- **ماذا يفعل:** مكان بطاقة البرنامج في العمود الجانبي: أعلاه قبل العنوان، أو أسفله بعد العنوان والملخص.
- **متى تستعمله:** «أعلى» ليرى الزائر السعر أولاً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:card_position:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/01-card_position-above-panel.webp?v=969ed7ab40a3" alt="لوحة إعدادات (نسخة مطابقة) — موضع بطاقة البرنامج" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:card_position:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — موضع بطاقة البرنامج" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «أعلى المحتوى: قبل العنوان» |
| <img data-update-ref="20-coach-curriculum:card_position:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/01-card_position-below-panel.webp?v=0b48c3c5c004" alt="لوحة إعدادات (نسخة مطابقة) — موضع بطاقة البرنامج" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:card_position:1:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/01-card_position-below-result.webp?v=be255984073c" alt="معاينة — موضع بطاقة البرنامج" loading="lazy" decoding="async"/> | «أسفل المحتوى: بعد العنوان والملخص» |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** منهج البرنامج · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/02-eyebrow-panel.webp?v=ec3234f8dbe4" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/02-eyebrow-result.webp?v=05bc76102a76" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** ماذا ستتعلّم [[في هذا البرنامج]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/03-title-panel.webp?v=064c32a68c73" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/03-title-result.webp?v=fa4df3e258d3" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** كل وحدة تبني على التي قبلها، مع تمارين تطبيقية. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/04-description-panel.webp?v=3cb0d7e40a2c" alt="لوحة إعدادات (نسخة مطابقة) — الوصف" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/04-description-result.webp?v=708c1acf978b" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «ملخص البرنامج»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٤ وحدات · ٢٨ درساً · ١٠ ساعات · المعرّف `summary`
- **ماذا يفعل:** ملخص البرنامج في وسوم صغيرة، تفصل بينها بالنقطة الوسطى ·، مثل «٤ وحدات · ٢٨ درساً · ١٠ ساعات».
- **متى تستعمله:** لحجم البرنامج في سطر.
- **حين يكون فارغاً:** فارغاً لا تظهر الوسوم.
- شرحه تحت الحقل في المحرّر: الأجزاء مفصولة بالنقطة الوسطى ·

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:summary:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/05-summary-panel.webp?v=1e6bf298204f" alt="لوحة إعدادات (نسخة مطابقة) — ملخص البرنامج" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:summary:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — ملخص البرنامج" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «تفاصيل البرنامج فوق زر الإضافة (صفحة المنتج)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `facts`
- **ماذا يفعل:** الاسم: القيمة، مفصولة بـ ·؛ فارغاً يظهر الملخص.
- **حين يكون فارغاً:** فارغاً يظهر الملخص

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:facts:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/06-facts-panel.webp?v=e920240bfac3" alt="لوحة إعدادات (نسخة مطابقة) — تفاصيل البرنامج فوق زر الإضافة (صفحة المنتج)" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:facts:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/06-facts-result.webp?v=2ac26040c9e1" alt="معاينة — تفاصيل البرنامج فوق زر الإضافة (صفحة المنتج)" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «فيديو الدرس المجاني»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `sample_video`
- **ماذا يفعل:** رابط فيديو درس مجاني: YouTube أو Vimeo أو MP4. يظهر زر يفتحه في نافذة.
- **متى تستعمله:** ليجرّب الزائر أسلوبك قبل الشراء.
- **حين يكون فارغاً:** فارغاً لا يظهر الزر.
- شرحه تحت الحقل في المحرّر: YouTube أو Vimeo أو MP4؛ فارغاً لا زر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:sample_video:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/07-sample_video-panel.webp?v=eb28c006fc5d" alt="لوحة إعدادات (نسخة مطابقة) — فيديو الدرس المجاني" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:sample_video:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — فيديو الدرس المجاني" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «نص زر الدرس المجاني»

- **النوع:** نص بسطر واحد · **الافتراضي:** شاهد الدرس المجاني · المعرّف `sample_label`
- **ماذا يفعل:** نص زر الدرس المجاني.
- **متى تستعمله:** مثل «شاهد الدرس الأول مجاناً».
- **حين يكون فارغاً:** فارغاً يظهر «تشغيل الفيديو».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:sample_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/08-sample_label-panel.webp?v=d52ef97385e1" alt="لوحة إعدادات (نسخة مطابقة) — نص زر الدرس المجاني" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:sample_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — نص زر الدرس المجاني" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «الوحدات»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `units`
- **ماذا يفعل:** وحدات البرنامج بالترتيب. الأولى مفتوحة عند التحميل، وتُفتح واحدة في كل مرة.
- **متى تستعمله:** لكل وحدة في دورتك.
- **حين يكون فارغاً:** بلا وحدات لا تظهر القائمة. والوحدة بلا عنوان لا تظهر.
- شرحه تحت الحقل في المحرّر: الأولى مفتوحة عند التحميل، وواحدة في كل مرة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:units:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-panel.webp?v=e6a868e6ce8c" alt="لوحة إعدادات (نسخة مطابقة) — الوحدات" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:units:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-result.webp?v=4d5aa202068c" alt="معاينة — الوحدات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «عنوان الوحدة»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `units.title`
- **ماذا يفعل:** عنوان الوحدة.
- **حين يكون فارغاً:** الوحدة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:units:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-title-panel.webp?v=a7be5616cde4" alt="لوحة إعدادات (نسخة مطابقة) — الوحدات" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:units:1:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-result.webp?v=4d5aa202068c" alt="معاينة — الوحدات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «تفاصيل مختصرة»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `units.meta`
- **ماذا يفعل:** تفاصيل مختصرة بجانب العنوان، مثل «٧ دروس · ساعتان».
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:units:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-meta-panel.webp?v=13f850c2d36f" alt="لوحة إعدادات (نسخة مطابقة) — الوحدات" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:units:2:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-result.webp?v=4d5aa202068c" alt="معاينة — الوحدات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الدروس»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `units.lessons`
- **ماذا يفعل:** الدروس، درس بكل سطر: العنوان | المدة | مجاني. المدة وكلمة «مجاني» اختياريتان، و«مجاني» تضع علامة معاينة على الدرس.
- **حين يكون فارغاً:** فارغة تظهر الوحدة بلا دروس.
- شرحه تحت الحقل في المحرّر: درس بكل سطر: العنوان | المدة | مجاني أو تمرين أو ملف؛ الأخيران اختياريان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:units:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-lessons-panel.webp?v=90f3bddde23a" alt="لوحة إعدادات (نسخة مطابقة) — الوحدات" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:units:3:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/09-units-result.webp?v=4d5aa202068c" alt="معاينة — الوحدات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «الوحدة الأولى مفتوحة عند التحميل»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `first_open`
- **ماذا يفعل:** الوحدة الأولى مفتوحة عند التحميل.
- **متى تستعمله:** مطفأ ليظهر المنهج مطوياً كله.
- **حين يكون فارغاً:** مفعّل افتراضياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:first_open:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/10-first_open-panel.webp?v=a5b93db32da3" alt="لوحة إعدادات (نسخة مطابقة) — الوحدة الأولى مفتوحة عند التحميل" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:first_open:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/10-first_open-off-result.webp?v=8a8c8399fa9f" alt="معاينة — الوحدة الأولى مفتوحة عند التحميل" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «منتج البرنامج المرتبط بالمنهج»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `product`
- **ماذا يفعل:** منتج البرنامج في سلة: صورته واسمه وسعره في البطاقة الجانبية، وزر الإضافة يضيفه للسلة.
- **متى تستعمله:** دائماً: اختر منتج البرنامج.
- **حين يكون فارغاً:** بدونه لا تظهر بطاقة البرنامج.
- شرحه تحت الحقل في المحرّر: صورته واسمه وسعره بجانب المنهج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:product:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/11-product-panel.webp?v=e9daeb2c4d8c" alt="لوحة إعدادات (نسخة مطابقة) — منتج البرنامج المرتبط بالمنهج" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:product:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — منتج البرنامج المرتبط بالمنهج" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «صورة البرنامج (اختياري)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة للبطاقة الجانبية بدل صورة المنتج، أفقية نحو ٨٠٠×٥٠٠.
- **متى تستعمله:** إن كانت صورة المنتج طولية أو لا تناسب البطاقة.
- **حين يكون فارغاً:** بدونها صورة المنتج.
- شرحه تحت الحقل في المحرّر: أفقية نحو ٨٠٠×٥٠٠؛ بدونها صورة المنتج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/12-image-panel.webp?v=a05fd43b7ca9" alt="لوحة إعدادات (نسخة مطابقة) — صورة البرنامج (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/12-image-result.webp?v=16a04dea0235" alt="معاينة — صورة البرنامج (اختياري)" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «السعر وزر «أضف للسلة» في البطاقة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_add`
- **ماذا يفعل:** السعر وزر «أضف للسلة» في بطاقة البرنامج.
- **متى تستعمله:** اتركه مفعّلاً ليشتري الزائر من مكانه.
- **حين يكون فارغاً:** مطفأ: البطاقة بالصورة والاسم فقط، وتفتح صفحة المنتج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:show_add:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/13-show_add-panel.webp?v=160556ec50bb" alt="لوحة إعدادات (نسخة مطابقة) — السعر وزر «أضف للسلة» في البطاقة" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:show_add:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/13-show_add-off-result.webp?v=4a1a02c60a41" alt="معاينة — السعر وزر «أضف للسلة» في البطاقة" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر الإضافة في البطاقة.
- **متى تستعمله:** مثل «سجّل الآن».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:button_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/14-button_label-panel.webp?v=ccb2421b8eac" alt="لوحة إعدادات (نسخة مطابقة) — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:button_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/00-desktop.webp?v=7c0116c4e872" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «تثبيت الجزء الجانبي أثناء التمرير»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `sticky_side`
- **ماذا يفعل:** بطاقة البرنامج تبقى ظاهرة بجانب المنهج أثناء التمرير، على الشاشات العريضة.
- **متى تستعمله:** إن كان المنهج طويلاً.
- **حين يكون فارغاً:** مطفأ (الافتراضي): تتحرك البطاقة مع الصفحة.
- شرحه تحت الحقل في المحرّر: على الشاشات العريضة فقط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:sticky_side:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/15-sticky_side-panel.webp?v=d7dc957af85e" alt="لوحة إعدادات (نسخة مطابقة) — تثبيت الجزء الجانبي أثناء التمرير" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:sticky_side:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/15-sticky_side-on-result.webp?v=8f9bf8e59425" alt="معاينة — تثبيت الجزء الجانبي أثناء التمرير" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="20-coach-curriculum:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/16-custom_classes-panel.webp?v=977491a1cbb1" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="20-coach-curriculum:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/20-coach-curriculum/16-custom_classes-result.webp?v=83acf96dff9b" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp · لم يُعثر على النص لتمييزه: 00-desktop.webp · لم يُعثر على النص لتمييزه: 06-facts-result.webp · لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
