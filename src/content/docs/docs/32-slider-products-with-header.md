---
title: "متجر · منتجات متحركة مع خلفية"
description: "دليل ثيم كوتش 1.76.1 — متجر · منتجات متحركة مع خلفية"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Shop · Moving products with a background* · مساره `home.slider-products-with-header`

**ما يعرضه:** شريط منتجات يرتفع فوق صورة عريضة بعنوان ووصف، وأسهم للتنقل.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/32-slider-products-with-header/00-desktop.webp" alt="معاينة — متجر · منتجات متحركة مع خلفية" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/32-slider-products-with-header/00-mobile.webp" alt="معاينة — متجر · منتجات متحركة مع خلفية" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

شريط بطاقات منتجات يرتفع فوق صورة عريضة، بعنوان ووصف و«عرض الكل».

- **أهم الإعدادات:** «صورة الخلفية» (١٤٠٠×٥٨٠ تقريباً، تحت طبقة من لون الثيم؛ بدونها لون داكن)، و«المنتجات» حتى ٨ (بدونها أحدث المنتجات)، و«رابط عرض الكل» (بدونه يُخفى).

</details>

## الإعدادات بترتيبها في اللوحة

### «صورة الخلفية»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `background`
- **ماذا يفعل:** ١٤٠٠×٥٨٠ تقريباً، تحت طبقة من لون الثيم؛ بدونها لون داكن.
- **حين يكون فارغاً:** بدونها لون داكن

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/32-slider-products-with-header/01-background-panel.webp" alt="لوحة إعدادات — صورة الخلفية" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/32-slider-products-with-header/01-background-result.webp" alt="معاينة — صورة الخلفية" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/32-slider-products-with-header/02-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/32-slider-products-with-header/02-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/32-slider-products-with-header/03-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/32-slider-products-with-header/03-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «المنتجات (بالترتيب)»

- **النوع:** اختيار منتج أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `products`
- **ماذا يفعل:** حتى ٨؛ بدونها أحدث المنتجات.
- **حين يكون فارغاً:** بدونها أحدث المنتجات

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/32-slider-products-with-header/04-products-panel.webp" alt="لوحة إعدادات — المنتجات (بالترتيب)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/32-slider-products-with-header/00-desktop.webp" alt="معاينة — المنتجات (بالترتيب)" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «رابط «عرض الكل»»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `display_all_url`
- **ماذا يفعل:** بدونه يُخفى.
- **حين يكون فارغاً:** بدونه يُخفى

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/32-slider-products-with-header/05-display_all_url-panel.webp" alt="لوحة إعدادات — رابط «عرض الكل»" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/32-slider-products-with-header/00-desktop.webp" alt="معاينة — رابط «عرض الكل»" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |


<div class="source-note">الإصدار 1.76.1 · صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
