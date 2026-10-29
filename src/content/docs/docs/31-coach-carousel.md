---
title: "متجر · شريط منتجات متحرّك"
description: "دليل ثيم كوتش 1.76.1 — متجر · شريط منتجات متحرّك"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Shop · Moving product row* · مساره `home.coach-carousel`

**ما يعرضه:** صف منتجات يتقدّم وحده كل بضع ثوانٍ، بصورة كل منتج وتقييمه وزر الإضافة. يتوقف عند المرور عليه أو لمسه.

**متى تضيفه:** لعرض عدد من الدورات أو الكتب في مساحة صغيرة.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — متجر · شريط منتجات متحرّك" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-mobile.webp" alt="معاينة — متجر · شريط منتجات متحرّك" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

صف منتجات يتقدّم وحده كل بضع ثوانٍ: الصورة والتقييم والمفضلة والعرض السريع وزر الإضافة. يتوقف عند المرور عليه أو لمسه.

- **المصدر:** «مصدر المنتجات»: «منتجات أختارها» (الافتراضي، حتى ١٢ بالترتيب)، أو «الأحدث»، أو «الأكثر مبيعاً»، أو «من تصنيفات محددة». بلا اختيار تظهر أحدث منتجات المتجر. «عدد المنتجات» للمصادر التلقائية من ٣ إلى ١٢.
- **الحركة:** «تحريك تلقائي» مفعّل، ولا يعمل لمن فعّل «تقليل الحركة». «المدة بين الحركات (٢–١٠ ثوانٍ)» (الافتراضي ٣).
- **إطار الشريط:** «بخلفية وإطار» (الافتراضي) أو «بلا خلفية ولا إطار» فتقف البطاقات على خلفية الصفحة مباشرة.

</details>

## الإعدادات بترتيبها في اللوحة

### «إطار الشريط»

- **النوع:** قائمة منسدلة · **الافتراضي:** بخلفية وإطار · المعرّف `frame`
- **ماذا يفعل:** «بخلفية وإطار»: الصف داخل لوح أبيض بإطار. «بلا خلفية ولا إطار»: البطاقات على خلفية الصفحة مباشرة.
- **متى تستعمله:** «بلا خلفية» إن كان القسم بخلفية ملوّنة أو صورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/01-frame-panel-panel.webp" alt="لوحة إعدادات — إطار الشريط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — إطار الشريط" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «بخلفية وإطار» |
| <img src="/coach-docs/assets/sections/31-coach-carousel/01-frame-plain-panel.webp" alt="لوحة إعدادات — إطار الشريط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/01-frame-plain-result.webp" alt="معاينة — إطار الشريط" loading="lazy" decoding="async"/> | «بلا خلفية ولا إطار» |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** برامج مسجّلة · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان، مثل «دورات مسجّلة».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/02-eyebrow-panel.webp" alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/02-eyebrow-result.webp" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** برامج [[مختارة لك]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. [[كلمة]] تظهر مميّزة.
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/03-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/03-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** تتجدّد القائمة تلقائياً — مرّر أو توقّف عند ما يعجبك. · المعرّف `description`
- **ماذا يفعل:** سطر تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/04-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/04-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «مصدر المنتجات»

- **النوع:** قائمة منسدلة · **الافتراضي:** منتجات أختارها · المعرّف `source`
- **ماذا يفعل:** من أين تأتي المنتجات: منتجات تختارها بالترتيب، أو الأحدث، أو الأكثر مبيعاً، أو من تصنيفات محددة.
- **متى تستعمله:** «منتجات أختارها» لترتيب تتحكم به، و«الأحدث» ليتجدد القسم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-selected-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «منتجات أختارها» |
| <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-latest-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-latest-result.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «الأحدث» |
| <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-sales-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-sales-result.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «الأكثر مبيعاً» |
| <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-categories-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/05-source-categories-result.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «من تصنيفات محددة» |

### «المنتجات (بالترتيب)»

- **النوع:** اختيار منتج أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `products`
- **ماذا يفعل:** المنتجات بالترتيب الذي تريده، حتى ١٢.
- **متى تستعمله:** حين تختار «منتجات أختارها»، لترتيب تتحكم فيه.
- **حين يكون فارغاً:** بدونها تظهر أحدث المنتجات.
- **يظهر في اللوحة فقط حين:** «مصدر المنتجات» هو «منتجات أختارها»
- شرحه تحت الحقل في المحرّر: حتى ١٢؛ بدونها أحدث المنتجات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/06-products-panel.webp" alt="لوحة إعدادات — المنتجات (بالترتيب)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — المنتجات (بالترتيب)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `categories`
- **ماذا يفعل:** التصنيفات التي تأتي منها المنتجات.
- **متى تستعمله:** حين تختار «من تصنيفات محددة»، لتصنيف بعينه.
- **حين يكون فارغاً:** بدونها تظهر أحدث المنتجات.
- **يظهر في اللوحة فقط حين:** «مصدر المنتجات» هو «من تصنيفات محددة»
- شرحه تحت الحقل في المحرّر: بدونها أحدث المنتجات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/07-categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «عدد المنتجات (٣–١٢)»

- **النوع:** رقم · **الافتراضي:** 8 · المعرّف `limit`
- **ماذا يفعل:** كم منتجاً يظهر في المصادر التلقائية (الأحدث، والأكثر مبيعاً، والتصنيفات)، من ٣ إلى ١٢.
- **متى تستعمله:** ٨ يكفي غالباً؛ أكثر إن كان متجرك كبيراً.
- **حين يكون فارغاً:** على الافتراضي ٨.
- شرحه تحت الحقل في المحرّر: للمصادر التلقائية.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/08-limit-panel.webp" alt="لوحة إعدادات — عدد المنتجات (٣–١٢)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — عدد المنتجات (٣–١٢)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر الإضافة في كل بطاقة.
- **متى تستعمله:** إن أردت نصاً آخر مثل «اشترك».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/09-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «تحريك تلقائي»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `autoplay`
- **ماذا يفعل:** الصف يتقدّم وحده، ويتوقف عند المرور عليه أو لمسه. لا يتحرك لمن فعّل «تقليل الحركة» في جهازه.
- **متى تستعمله:** اتركه مفعّلاً ليرى الزائر منتجات أكثر دون أن يضغط.
- **حين يكون فارغاً:** مطفأ: الصف ثابت، والزائر يتنقل بالأسهم أو السحب.
- شرحه تحت الحقل في المحرّر: يتوقف عند المرور أو اللمس.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/10-autoplay-panel.webp" alt="لوحة إعدادات — تحريك تلقائي" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — تحريك تلقائي" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «المدة بين الحركات (٢–١٠ ثوانٍ)»

- **النوع:** رقم · **الافتراضي:** 3 · المعرّف `interval`
- **ماذا يفعل:** الثواني بين كل حركة، من ٢ إلى ١٠.
- **متى تستعمله:** أطول إن كانت أسماء منتجاتك طويلة.
- **حين يكون فارغاً:** على الافتراضي ٣ ثوانٍ.
- **يظهر في اللوحة فقط حين:** «تحريك تلقائي» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/31-coach-carousel/11-interval-panel.webp" alt="لوحة إعدادات — المدة بين الحركات (٢–١٠ ثوانٍ)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/31-coach-carousel/00-desktop.webp" alt="معاينة — المدة بين الحركات (٢–١٠ ثوانٍ)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** تغيير شكل هذا القسم بالكلاسات الجاهزة، أو بكلاس خاص يُنسّق من خانة CSS في سلة.
- **طريقة الإدخال:** كلمات لاتينية بينها مسافة أو فاصلة، حتى ثماني كلمات.
- **حين يكون فارغًا:** يبقى القسم بشكله الافتراضي.

[شرح الكلاسات الجاهزة وطريقة استخدامها](/coach-docs/docs/01-shared/#custom-classes).
