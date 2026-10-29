---
title: "دورة · لمن هذا البرنامج"
description: "دليل ثيم كوتش 1.76.1 — دورة · لمن هذا البرنامج"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Course · Who it’s for* · مساره `home.coach-audience`

**ما يعرضه:** بطاقات تصف من يناسبه برنامجك: صورة وعنوان وسطر لكل فئة.

**متى تضيفه:** ليعرف الزائر بسرعة إن كان البرنامج له.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="26-coach-audience:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/00-desktop.webp?v=25bcc30042bb" alt="معاينة — دورة · لمن هذا البرنامج" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/00-mobile.webp?v=d6e289ee3121" alt="معاينة — دورة · لمن هذا البرنامج" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

بطاقات تصف من يناسبه البرنامج، ليعرف الزائر أنه في المكان الصحيح.

- **أهم الإعدادات:** «الفئات» حتى ٤، لكل فئة «الصورة» (٦٠٠×٤٠٠ بكسل تقريباً؛ بدونها نقش خفيف) و«العنوان» و«الوصف».
- **نصيحة:** العنوان الافتراضي «صُمّم لثلاثة أشخاص» يذكر العدد، فعدّله إن غيّرت عدد الفئات.
- **خيارات إضافية:** «عدد الأعمدة على الحاسوب (٠ تلقائي)» من ٠ إلى ٤، ولا يزيد على عدد البطاقات.

---

**كتب** — أقسام لكتبك.

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** لمن هذا البرنامج · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/01-eyebrow-panel.webp?v=41f7d4367bfb" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/01-eyebrow-result.webp?v=51c2004757db" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** صُمّم [[لثلاثة أشخاص]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/02-title-panel.webp?v=3cf909cf0a27" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/02-title-result.webp?v=07c8f2da314c" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الفئات»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `items`
- **ماذا يفعل:** الفئات بالترتيب، بطاقة لكل فئة.
- **متى تستعمله:** ثلاث فئات تكفي غالباً.
- **حين يكون فارغاً:** بلا فئات لا يظهر القسم. والفئة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:items:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-panel.webp?v=9d6bd8ffcb4a" alt="لوحة إعدادات (نسخة مطابقة) — الفئات" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:items:0:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-result.webp?v=0ee3df35780c" alt="معاينة — الفئات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الصورة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `items.image`
- **ماذا يفعل:** صورة الفئة، ٦٠٠×٤٠٠ تقريباً.
- **حين يكون فارغاً:** بدونها مساحة ملوّنة بنقش خفيف.
- شرحه تحت الحقل في المحرّر: ٦٠٠×٤٠٠ تقريباً؛ بدونها نقش خفيف.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:items:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-image-panel.webp?v=8d2bdb368276" alt="لوحة إعدادات (نسخة مطابقة) — الفئات" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:items:1:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-result.webp?v=0ee3df35780c" alt="معاينة — الفئات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.title`
- **ماذا يفعل:** اسم الفئة، مثل «الموظف المرهق».
- **حين يكون فارغاً:** الفئة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:items:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-title-panel.webp?v=49ee2ee272fb" alt="لوحة إعدادات (نسخة مطابقة) — الفئات" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:items:2:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-result.webp?v=0ee3df35780c" alt="معاينة — الفئات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `items.description`
- **ماذا يفعل:** سطر يصف الفئة وحاجتها.
- **حين يكون فارغاً:** فارغاً يظهر العنوان وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:items:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-description-panel.webp?v=64a228c6cb2b" alt="لوحة إعدادات (نسخة مطابقة) — الفئات" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:items:3:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/03-items-result.webp?v=0ee3df35780c" alt="معاينة — الفئات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «عدد الأعمدة على الحاسوب (٠ تلقائي)»

- **النوع:** رقم · **الافتراضي:** 0 · المعرّف `cols`
- **ماذا يفعل:** عدد الأعمدة على الحاسوب، ولا يزيد على عدد البطاقات.
- **متى تستعمله:** حين يظهر صف ناقص، مثل ٣+١.
- **حين يكون فارغاً:** صفر: تلقائي حسب عرض الشاشة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:cols:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/04-cols-panel.webp?v=5830c04387a2" alt="لوحة إعدادات (نسخة مطابقة) — عدد الأعمدة على الحاسوب (٠ تلقائي)" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:cols:0:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/00-desktop.webp?v=25bcc30042bb" alt="معاينة — عدد الأعمدة على الحاسوب (٠ تلقائي)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="26-coach-audience:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/05-custom_classes-panel.webp?v=c7a0eff85110" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="26-coach-audience:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/26-coach-audience/05-custom_classes-result.webp?v=d7437421459e" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
