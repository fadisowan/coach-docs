---
title: "عام · كيف يصلك المنتج"
description: "دليل ثيم كوتش 1.76.1 — عام · كيف يصلك المنتج"
editUrl: false
---


اسمه في المتجر الإنجليزي: *General · How it reaches you* · مساره `home.coach-delivery`

**ما يعرضه:** خطوات الاستلام بعد الدفع بأيقونات، تطمئن المشتري: كيف ومتى يصله ما اشتراه.

**متى تضيفه:** قرب المنتجات الرقمية أو الدورات، أو قبل الأسئلة الشائعة.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="29-coach-delivery:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/00-desktop.webp?v=6345655de033" alt="معاينة — عام · كيف يصلك المنتج" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/00-mobile.webp?v=a3c9f8830e8f" alt="معاينة — عام · كيف يصلك المنتج" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

خطوات الاستلام بعد الدفع في بطاقات بأيقونات، تطمئن من يشتري منتجاً رقمياً أو دورة لأول مرة.

- **أهم الإعدادات:** «الخطوات» حتى ٤، لكل خطوة «الأيقونة» و«العنوان» و«سطر تحته».
- **نصيحة:** الخطوات تُكتب كما تحدث فعلاً في المتجر.
- **خيارات إضافية:** «الخط الواصل بين الخطوات» (مفعّل افتراضياً).

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** بعد الشراء · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/01-eyebrow-panel.webp?v=38887c1c1161" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/01-eyebrow-result.webp?v=5b7b9ac04da2" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** كيف يصلك [[ما اشتريته]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/02-title-panel.webp?v=628503ff11b8" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/02-title-result.webp?v=7003c0832462" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الخطوات»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `items`
- **ماذا يفعل:** الخطوات بالترتيب.
- **متى تستعمله:** ثلاث خطوات: الدفع، والرسالة، والوصول.
- **حين يكون فارغاً:** بلا خطوات لا يظهر القسم. والخطوة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:items:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-panel.webp?v=990dd446ef15" alt="لوحة إعدادات (نسخة مطابقة) — الخطوات" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:items:0:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-result.webp?v=695c3f63fd77" alt="معاينة — الخطوات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الأيقونة»

- **النوع:** أيقونة · **الافتراضي:** sicon-check · المعرّف `items.icon`
- **ماذا يفعل:** أيقونة الخطوة.
- **حين يكون فارغاً:** بدونها بلا أيقونة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:items:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-icon-panel.webp?v=cf2ef2344fee" alt="لوحة إعدادات (نسخة مطابقة) — الخطوات" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:items:1:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-result.webp?v=695c3f63fd77" alt="معاينة — الخطوات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.title`
- **ماذا يفعل:** عنوان الخطوة.
- **حين يكون فارغاً:** الخطوة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:items:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-title-panel.webp?v=acdb40d32f8d" alt="لوحة إعدادات (نسخة مطابقة) — الخطوات" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:items:2:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-result.webp?v=695c3f63fd77" alt="معاينة — الخطوات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «سطر تحته»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.description`
- **ماذا يفعل:** سطر تحت العنوان.
- **حين يكون فارغاً:** فارغاً يظهر العنوان وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:items:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-description-panel.webp?v=a551a3e8bc0c" alt="لوحة إعدادات (نسخة مطابقة) — الخطوات" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:items:3:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/03-items-result.webp?v=695c3f63fd77" alt="معاينة — الخطوات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «الخط الواصل بين الخطوات»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_line`
- **ماذا يفعل:** الخط الواصل بين الخطوات.
- **متى تستعمله:** مطفأ لشكل أهدأ.
- **حين يكون فارغاً:** مفعّل افتراضياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:show_line:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/04-show_line-panel.webp?v=a655bb7103ee" alt="لوحة إعدادات (نسخة مطابقة) — الخط الواصل بين الخطوات" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:show_line:0:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/04-show_line-off-result.webp?v=8b3c9810c899" alt="معاينة — الخط الواصل بين الخطوات" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="29-coach-delivery:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/05-custom_classes-panel.webp?v=348ce24b22b0" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="29-coach-delivery:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/29-coach-delivery/05-custom_classes-result.webp?v=6b8a3f762558" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
