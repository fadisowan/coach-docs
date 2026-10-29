---
title: "متجر · منتجات متحركة مع خلفية"
description: "دليل ثيم كوتش 1.76.1 — متجر · منتجات متحركة مع خلفية"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Shop · Moving products with a background* · مساره `home.slider-products-with-header`

**ما يعرضه:** شريط منتجات يرتفع فوق صورة عريضة بعنوان ووصف، وأسهم للتنقل.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="32-slider-products-with-header:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/00-desktop.webp?v=62db181d0239" alt="معاينة — متجر · منتجات متحركة مع خلفية" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/00-mobile.webp?v=954ff197dde5" alt="معاينة — متجر · منتجات متحركة مع خلفية" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

شريط بطاقات منتجات يرتفع فوق صورة عريضة، بعنوان ووصف و«عرض الكل».

- **أهم الإعدادات:** «صورة الخلفية» (١٤٠٠×٥٨٠ تقريباً، تحت طبقة من لون الثيم؛ بدونها لون داكن)، و«المنتجات (بالترتيب)» حتى ٨ (بدونها أحدث المنتجات)، و«رابط «عرض الكل»» (بدونه يُخفى).
- **خيارات إضافية:** «تحريك تلقائي» (مطفأ افتراضياً).

</details>

## الإعدادات بترتيبها في اللوحة

### «صورة الخلفية»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `background`
- **ماذا يفعل:** ١٤٠٠×٥٨٠ تقريباً، تحت طبقة من لون الثيم؛ بدونها لون داكن.
- **حين يكون فارغاً:** بدونها لون داكن

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:background:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/01-background-panel.webp?v=8a4b85dfc93a" alt="لوحة إعدادات (نسخة مطابقة) — صورة الخلفية" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:background:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/01-background-result.webp?v=904038ed10f8" alt="معاينة — صورة الخلفية" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/02-title-panel.webp?v=0e717e355428" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/02-title-result.webp?v=5d08aea7cb63" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/03-description-panel.webp?v=8dac9b9d6a31" alt="لوحة إعدادات (نسخة مطابقة) — الوصف" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/03-description-result.webp?v=e3b37b7de486" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «المنتجات (بالترتيب)»

- **النوع:** اختيار منتج أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `products`
- **ماذا يفعل:** حتى ٨؛ بدونها أحدث المنتجات.
- **حين يكون فارغاً:** بدونها أحدث المنتجات

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:products:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/04-products-panel.webp?v=2bf56a69569f" alt="لوحة إعدادات (نسخة مطابقة) — المنتجات (بالترتيب)" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:products:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/00-desktop.webp?v=62db181d0239" alt="معاينة — المنتجات (بالترتيب)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «رابط «عرض الكل»»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `display_all_url`
- **ماذا يفعل:** بدونه يُخفى.
- **حين يكون فارغاً:** بدونه يُخفى

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:display_all_url:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/05-display_all_url-panel.webp?v=a5d0be74846f" alt="لوحة إعدادات (نسخة مطابقة) — رابط «عرض الكل»" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:display_all_url:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/00-desktop.webp?v=62db181d0239" alt="معاينة — رابط «عرض الكل»" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «تحريك تلقائي»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `autoplay`
- **ماذا يفعل:** تحريك المنتجات وحدها، ويتوقف تحت المؤشر ومع تقليل الحركة.
- **متى تستعمله:** كما في «شريط منتجات متحرّك».
- **حين يكون فارغاً:** مطفأ افتراضياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:autoplay:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/06-autoplay-panel.webp?v=8e6fb27466d2" alt="لوحة إعدادات (نسخة مطابقة) — تحريك تلقائي" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:autoplay:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/00-desktop.webp?v=62db181d0239" alt="معاينة — تحريك تلقائي" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="32-slider-products-with-header:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/07-custom_classes-panel.webp?v=83b023159ee6" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="32-slider-products-with-header:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/32-slider-products-with-header/07-custom_classes-result.webp?v=2704d9dbc02c" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
