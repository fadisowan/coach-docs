---
title: "دورة · ماذا ستتعلّم"
description: "دليل ثيم كوتش 1.76.1 — دورة · ماذا ستتعلّم"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Course · What you’ll learn* · مساره `home.coach-outcomes`

**ما يعرضه:** مهارات الدورة في بطاقات بأيقونات ملوّنة، من ٣ إلى ٩.

**متى تضيفه:** تحت قسم دورة، ليعرف الزائر ما سيخرج به.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="25-coach-outcomes:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/00-desktop.webp?v=a52f9175a1b2" alt="معاينة — دورة · ماذا ستتعلّم" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/00-mobile.webp?v=61f03e9325cd" alt="معاينة — دورة · ماذا ستتعلّم" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

ما سيخرج به المتعلّم في بطاقات بأيقونات على ألوان متناوبة، ثلاث في كل صف.

- **أهم الإعدادات:** «المهارات» حتى ٩ بطاقات، لكل بطاقة «الأيقونة» و«العنوان» و«الوصف».
- **نصيحة:** ثلاث أو ست أو تسع بطاقات تملأ الصفوف. والعنوان الافتراضي «ست مهارات تخرج بها من البرنامج» يذكر العدد، فعدّله إن غيّرت عدد البطاقات.
- **خيارات إضافية:** «عدد الأعمدة على الحاسوب (٠ تلقائي)» من ٠ إلى ٤، ولا يزيد على عدد البطاقات.

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** ماذا ستتعلّم · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/01-eyebrow-panel.webp?v=a6a689b1c6aa" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/01-eyebrow-result.webp?v=912d9e66a61f" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** ست مهارات [[تخرج بها من البرنامج]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/02-title-panel.webp?v=04a99fbd5b33" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/02-title-result.webp?v=b425d2fd6b54" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المهارات»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 6 عناصر جاهزة · المعرّف `items`
- **ماذا يفعل:** المهارات بالترتيب، بطاقة لكل مهارة.
- **متى تستعمله:** من ٣ إلى ٩ مهارات واضحة.
- **حين يكون فارغاً:** بلا مهارات لا يظهر القسم. والمهارة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:items:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-panel.webp?v=63802bfa8853" alt="لوحة إعدادات (نسخة مطابقة) — المهارات" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:items:0:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-result.webp?v=00d7c0f99e1c" alt="معاينة — المهارات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الأيقونة»

- **النوع:** أيقونة · **الافتراضي:** sicon-check · المعرّف `items.icon`
- **ماذا يفعل:** أيقونة المهارة في دائرة ملوّنة.
- **حين يكون فارغاً:** بدونها دائرة ملوّنة بلا أيقونة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:items:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-icon-panel.webp?v=223da52f77cf" alt="لوحة إعدادات (نسخة مطابقة) — المهارات" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:items:1:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-result.webp?v=00d7c0f99e1c" alt="معاينة — المهارات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.title`
- **ماذا يفعل:** اسم المهارة.
- **حين يكون فارغاً:** المهارة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:items:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-title-panel.webp?v=b8fff077242f" alt="لوحة إعدادات (نسخة مطابقة) — المهارات" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:items:2:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-result.webp?v=00d7c0f99e1c" alt="معاينة — المهارات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `items.description`
- **ماذا يفعل:** سطر يشرح المهارة.
- **حين يكون فارغاً:** فارغاً يظهر العنوان وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:items:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-description-panel.webp?v=9f725ed60ec5" alt="لوحة إعدادات (نسخة مطابقة) — المهارات" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:items:3:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/03-items-result.webp?v=00d7c0f99e1c" alt="معاينة — المهارات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «عدد الأعمدة على الحاسوب (٠ تلقائي)»

- **النوع:** رقم · **الافتراضي:** 0 · المعرّف `cols`
- **ماذا يفعل:** عدد الأعمدة على الحاسوب، ولا يزيد على عدد البطاقات.
- **متى تستعمله:** حين يظهر صف ناقص، مثل ٣+١.
- **حين يكون فارغاً:** صفر: تلقائي حسب عرض الشاشة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:cols:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/04-cols-panel.webp?v=95b6963e643a" alt="لوحة إعدادات (نسخة مطابقة) — عدد الأعمدة على الحاسوب (٠ تلقائي)" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:cols:0:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/00-desktop.webp?v=a52f9175a1b2" alt="معاينة — عدد الأعمدة على الحاسوب (٠ تلقائي)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="25-coach-outcomes:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/05-custom_classes-panel.webp?v=d12698bd0961" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="25-coach-outcomes:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/25-coach-outcomes/05-custom_classes-result.webp?v=246f10d1789d" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
