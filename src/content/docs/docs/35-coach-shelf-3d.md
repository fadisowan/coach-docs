---
title: "متجر · رف ثلاثي الأبعاد"
description: "دليل ثيم كوتش 1.76.1 — متجر · رف ثلاثي الأبعاد"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Shop · 3D shelf* · مساره `home.coach-shelf-3d`

**ما يعرضه:** بطاقات منتجاتك على رف ثلاثي الأبعاد: الصورة والاسم والسعر من سلة، والضغط يفتح المنتج. مع عنوان وزرّين.

**متى تضيفه:** لعرض ٣ أو ٥ منتجات رئيسية بشكل لافت.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/00-desktop.webp" alt="معاينة — متجر · رف ثلاثي الأبعاد" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/00-mobile.webp" alt="معاينة — متجر · رف ثلاثي الأبعاد" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

بطاقات منتجاتك على رف ثلاثي الأبعاد: الصورة والاسم والسعر من سلة، والضغط على البطاقة يفتح المنتج. وتحت الرف زرّان.

- **أهم الإعدادات:** «عدد البطاقات» ثلاث (الافتراضي) أو خمس. «المنتجات» بالترتيب؛ بدونها أحدث منتجات المتجر.
- **الأزرار:** «نص الزر الأول» بلا رابط ينزل إلى قسم المنتجات، و«نص الزر الثاني» يظهر برابطه فقط.
- **الحركة:** «عند مرور الفأرة»: «لمعة» (الافتراضي) أو «ميلان نحو المؤشر» أو «رفع البطاقة» أو «بلا». و«على الجوال»: «نسخة خفيفة» (الافتراضي، أسرع وبالشكل نفسه) أو «ثلاثي الأبعاد كامل».

</details>

## الإعدادات بترتيبها في اللوحة

### «عدد البطاقات»

- **النوع:** قائمة منسدلة · **الافتراضي:** ثلاث · المعرّف `layout`
- **ماذا يفعل:** عدد البطاقات على الرف: ثلاث أو خمس.
- **متى تستعمله:** «ثلاث» لمنتجاتك الرئيسية، و«خمس» لتشكيلة أوسع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-3-panel.webp" alt="لوحة إعدادات — عدد البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-3-result.webp" alt="معاينة — عدد البطاقات" loading="lazy" decoding="async"/> | «ثلاث» |
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-5-panel.webp" alt="لوحة إعدادات — عدد البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-5-result.webp" alt="معاينة — عدد البطاقات" loading="lazy" decoding="async"/> | «خمس» |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسات · كتيّبات · برامج · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/02-eyebrow-panel.webp" alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/02-eyebrow-result.webp" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** كل ما تحتاجه لتبدأ، في [[مكان واحد]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/03-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/03-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** احجز جلسة مباشرة، أو ابدأ وحدك بكتيّب عملي أو برنامج مسجّل بنفس المنهج. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/04-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/04-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المنتجات»

- **النوع:** اختيار منتج أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `products`
- **ماذا يفعل:** المنتجات على الرف بالترتيب.
- **متى تستعمله:** اختر ما تريد إبرازه.
- **حين يكون فارغاً:** بدونها أحدث منتجات المتجر.
- شرحه تحت الحقل في المحرّر: بالترتيب؛ بدونها أحدث منتجات المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/05-products-panel.webp" alt="لوحة إعدادات — المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/00-desktop.webp" alt="معاينة — المنتجات" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «نص الزر الأول»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح المتجر · المعرّف `primary_label`
- **ماذا يفعل:** نص الزر الأول تحت الوصف.
- **متى تستعمله:** مثل «تصفّح المتجر».
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/06-primary_label-panel.webp" alt="لوحة إعدادات — نص الزر الأول" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/06-primary_label-result.webp" alt="معاينة — نص الزر الأول" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الأول»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `primary_link`
- **ماذا يفعل:** إلى أين يذهب الزر الأول.
- **متى تستعمله:** لتصنيف أو صفحة المنتجات.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإلا يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بلا رابط ينزل لقسم المنتجات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/07-primary_link-panel.webp" alt="لوحة إعدادات — رابط الزر الأول" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/00-desktop.webp" alt="معاينة — رابط الزر الأول" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «نص الزر الثاني (يظهر مع رابطه)»

- **النوع:** نص بسطر واحد · **الافتراضي:** قارن النسخ · المعرّف `secondary_label`
- **ماذا يفعل:** نص الزر الثاني، يظهر مع رابطه فقط.
- **متى تستعمله:** لإجراء ثانٍ مثل «قارن النسخ».
- **حين يكون فارغاً:** فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/08-secondary_label-panel.webp" alt="لوحة إعدادات — نص الزر الثاني (يظهر مع رابطه)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/00-desktop.webp" alt="معاينة — نص الزر الثاني (يظهر مع رابطه)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الثاني»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `secondary_link`
- **ماذا يفعل:** رابط الزر الثاني.
- **متى تستعمله:** لصفحة مقارنة أو تصنيف.
- **حين يكون فارغاً:** بدونه يُخفى الزر الثاني.
- شرحه تحت الحقل في المحرّر: بلا رابط يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/09-secondary_link-panel.webp" alt="لوحة إعدادات — رابط الزر الثاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/00-desktop.webp" alt="معاينة — رابط الزر الثاني" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «عند مرور الفأرة»

- **النوع:** قائمة منسدلة · **الافتراضي:** لمعة · المعرّف `hover`
- **ماذا يفعل:** ما يحدث للبطاقة عند مرور الفأرة: لمعة، أو ميلان نحو المؤشر، أو رفع البطاقة، أو بلا.
- **متى تستعمله:** «لمعة» للهدوء، و«ميلان» لتفاعل أوضح.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/10-hover-glow-panel.webp" alt="لوحة إعدادات — عند مرور الفأرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-3-result.webp" alt="معاينة — عند مرور الفأرة" loading="lazy" decoding="async"/> | «لمعة» |
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/10-hover-tilt-panel.webp" alt="لوحة إعدادات — عند مرور الفأرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-5-result.webp" alt="معاينة — عند مرور الفأرة" loading="lazy" decoding="async"/> | «ميلان نحو المؤشر» |
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/10-hover-lift-panel.webp" alt="لوحة إعدادات — عند مرور الفأرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/10-hover-lift-result.webp" alt="معاينة — عند مرور الفأرة" loading="lazy" decoding="async"/> | «رفع البطاقة» |
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/10-hover-none-panel.webp" alt="لوحة إعدادات — عند مرور الفأرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/10-hover-none-result.webp" alt="معاينة — عند مرور الفأرة" loading="lazy" decoding="async"/> | «بلا» |

### «على الجوال»

- **النوع:** قائمة منسدلة · **الافتراضي:** نسخة خفيفة · المعرّف `phone`
- **ماذا يفعل:** شكل الرف على الجوال: نسخة خفيفة أسرع بنفس الشكل، أو ثلاثي الأبعاد كامل.
- **متى تستعمله:** اترك «الخفيفة» لسرعة الصفحة على الجوال.
- شرحه تحت الحقل في المحرّر: الخفيفة أسرع وبنفس الشكل.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/11-phone-css-panel.webp" alt="لوحة إعدادات — على الجوال" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-3-result.webp" alt="معاينة — على الجوال" loading="lazy" decoding="async"/> | «نسخة خفيفة» |
| <img src="/coach-docs/assets/sections/35-coach-shelf-3d/11-phone-webgl-panel.webp" alt="لوحة إعدادات — على الجوال" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/35-coach-shelf-3d/01-layout-5-result.webp" alt="معاينة — على الجوال" loading="lazy" decoding="async"/> | «ثلاثي الأبعاد كامل» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
