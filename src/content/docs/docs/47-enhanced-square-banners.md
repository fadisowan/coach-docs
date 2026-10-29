---
title: "صور مربعة (محسّنة)"
description: "دليل ثيم كوتش 1.76.1 — صور مربعة (محسّنة)"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Enhanced square images* · مساره `home.enhanced-square-banners`

**ما يعرضه:** من صورة إلى خمس صور بروابط، وعلى كل صورة عنوان ونص.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

شبكة صور بتوزيع «صور مربعة»، وعلى كل صورة عنوان ونص. على الجوال عمود واحد.

- **أهم الإعدادات:** «الصور»، لكل صورة «الصورة» و«العنوان» و«النص» و«الرابط».
- **خيارات إضافية:** «ترتيب الصور»: «حسب «نفس الحجم» في الخيارات العامة (الافتراضي)»، أو «صورة أكبر (مع ٣ أو ٥ صور)»، أو «متساوية».

وإلى جانب هذه الأقسام، تبقى أقسام سلة الجاهزة للصفحة الرئيسية متاحة (مثل المنتجات المميزة، والبانر الثابت، وسلايدر الصور، وسلايدر المنتجات، والآراء، ومميزات المتجر، ويوتيوب)، ويعرضها كوتش ببطاقة منتجاته وألوانه.

- **«سلايدر المنتجات»:** العنوان الفرعي المكتوب فيه يظهر مع عنوانه.

---

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/01-eyebrow-panel.webp?v=58e17de0d527" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/02-title-panel.webp?v=0921a3016f4f" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/03-description-panel.webp?v=43c6b7081448" alt="لوحة إعدادات (نسخة مطابقة) — الوصف" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «الصور»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** بلا عناصر · المعرّف `banners`
- **ماذا يفعل:** أهم الإعدادات:** «الصور»، لكل صورة «الصورة» و«العنوان» و«النص» و«الرابط».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:banners:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/04-banners-panel.webp?v=fd6d7d0eb6de" alt="لوحة إعدادات (نسخة مطابقة) — الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> |  |

#### «الصورة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `banners.image`
- **ماذا يفعل:** ٨٠٠×٨٠٠ بكسل فأكبر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:banners:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/04-banners-image-panel.webp?v=638ab1a9f4d4" alt="لوحة إعدادات (نسخة مطابقة) — الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> |  |

#### «الرابط»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `banners.url`
- **ماذا يفعل:** أهم الإعدادات:** «الصور»، لكل صورة «الصورة» و«العنوان» و«النص» و«الرابط».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:banners:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/04-banners-url-panel.webp?v=59e6c692d4b9" alt="لوحة إعدادات (نسخة مطابقة) — الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `banners.title`
- **ماذا يفعل:** أهم الإعدادات:** «الصور»، لكل صورة «الصورة» و«العنوان» و«النص» و«الرابط».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:banners:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/04-banners-title-panel.webp?v=0c71e85be3c7" alt="لوحة إعدادات (نسخة مطابقة) — الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> |  |

#### «النص»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `banners.description`
- **ماذا يفعل:** أهم الإعدادات:** «الصور»، لكل صورة «الصورة» و«العنوان» و«النص» و«الرابط».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:banners:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/04-banners-description-panel.webp?v=392461793359" alt="لوحة إعدادات (نسخة مطابقة) — الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> |  |

### «ترتيب الصور»

- **النوع:** قائمة منسدلة · **الافتراضي:** حسب «نفس الحجم» في الخيارات العامة (الافتراضي) · المعرّف `tile_layout`
- **ماذا يفعل:** ترتيب الصور: حسب «نفس الحجم» في الخيارات العامة، أو صورة أكبر (مع ٣ أو ٥ صور)، أو متساوية.
- **متى تستعمله:** لقسمين بترتيبين في المتجر نفسه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:tile_layout:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/05-tile_layout-auto-panel.webp?v=09d46965c112" alt="لوحة إعدادات (نسخة مطابقة) — ترتيب الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | «حسب «نفس الحجم» في الخيارات العامة (الافتراضي)» |
| <img data-update-ref="47-enhanced-square-banners:tile_layout:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/05-tile_layout-feature-panel.webp?v=810f5eabd055" alt="لوحة إعدادات (نسخة مطابقة) — ترتيب الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | «صورة أكبر (مع ٣ أو ٥ صور)» |
| <img data-update-ref="47-enhanced-square-banners:tile_layout:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/05-tile_layout-equal-panel.webp?v=1ff2fecfd18e" alt="لوحة إعدادات (نسخة مطابقة) — ترتيب الصور" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | «متساوية» |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="47-enhanced-square-banners:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/47-enhanced-square-banners/06-custom_classes-panel.webp?v=a86926e53d0f" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">معاينة النتيجة غير متوفرة في المصدر؛ تظهر لوحة الإعداد والشرح المتاح.</span> | النتيجة مع «cx-narrow cx-center» |

---
> ملاحظات البناء: لا عنصر: 00-desktop.webp · لا عنصر: 00-mobile.webp · لا عنصر: 01-eyebrow-result.webp · لا عنصر: 02-title-result.webp · لا عنصر: 03-description-result.webp · لا عنصر: 05-tile_layout-auto-result.webp · لا عنصر: 05-tile_layout-feature-result.webp · لا عنصر: 05-tile_layout-equal-result.webp · لا عنصر: 06-custom_classes-result.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
