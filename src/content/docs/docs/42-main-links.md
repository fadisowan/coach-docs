---
title: "متجر · روابط سريعة"
description: "دليل ثيم كوتش 1.76.1 — متجر · روابط سريعة"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Shop · Quick links* · مساره `home.main-links`

**ما يعرضه:** بطاقات صغيرة بأيقونة واسم، كل بطاقة رابط لصفحة أو تصنيف، في شريط يُسحب.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/00-desktop.webp" alt="معاينة — متجر · روابط سريعة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/00-mobile.webp" alt="معاينة — متجر · روابط سريعة" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

بطاقات صغيرة بأيقونة واسم، كل بطاقة رابط لصفحة أو تصنيف، في شريط يُسحب.

- **أهم الإعدادات:** «الروابط» (حتى ٢٠، لكل رابط أيقونة واسم ورابط)، والافتراضي «التخفيضات» و«المدوّنة». أو «إظهار التصنيفات بدل الروابط» مع اختيار التصنيفات (صورة التصنيف إن وُجدت، وإلا أيقونته). «إظهار أسهم التحرك» حين تزيد البطاقات عن العرض.

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/01-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/01-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «إظهار أسهم التحرك»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_controls`
- **ماذا يفعل:** حين تزيد البطاقات عن العرض.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/02-show_controls-panel.webp" alt="لوحة إعدادات — إظهار أسهم التحرك" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/00-desktop.webp" alt="معاينة — إظهار أسهم التحرك" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «إظهار التصنيفات بدل الروابط»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `show_cats`
- **ماذا يفعل:** صورة التصنيف إن وُجدت، وإلا أيقونته.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/03-show_cats-panel.webp" alt="لوحة إعدادات — إظهار التصنيفات بدل الروابط" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">لم تُلتقط هذه المعاينة في حزمة الإصدار 1.76.1؛ عرضها يتطلب بيانات متجر في سلة.</span> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `categories`
- **يظهر في اللوحة فقط حين:** «إظهار التصنيفات بدل الروابط» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/04-categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «الروابط»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 2 عناصر جاهزة · المعرّف `links`
- **ماذا يفعل:** أهم الإعدادات:** «الروابط» (حتى ٢٠، لكل رابط أيقونة واسم ورابط)، والافتراضي «التخفيضات» و«المدوّنة». أو «إظهار التصنيفات بدل الروابط» مع اختيار التصنيفات (صورة التصنيف إن وُجدت، وإلا أيقونته). «إظهار أسهم التحرك» حين تزيد البطاقات عن العرض.
- **يظهر في اللوحة فقط حين:** «إظهار التصنيفات بدل الروابط» هو «مطفأ»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/05-links-panel.webp" alt="لوحة إعدادات — الروابط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/05-links-result.webp" alt="معاينة — الروابط" loading="lazy" decoding="async"/> | أول عنصر محاط بإطار برتقالي |

#### «الأيقونة»

- **النوع:** أيقونة · **الافتراضي:** sicon-store2 · المعرّف `links.icon`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/05-links-icon-panel.webp" alt="لوحة إعدادات — الروابط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/05-links-result.webp" alt="معاينة — الروابط" loading="lazy" decoding="async"/> |  |

#### «اسم الرابط»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `links.title`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/05-links-title-panel.webp" alt="لوحة إعدادات — الروابط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/05-links-result.webp" alt="معاينة — الروابط" loading="lazy" decoding="async"/> |  |

#### «الرابط»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `links.url`
- **ماذا يفعل:** بدونه تظهر البطاقة بلا رابط.
- **حين يكون فارغاً:** بدونه تظهر البطاقة بلا رابط

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/42-main-links/05-links-url-panel.webp" alt="لوحة إعدادات — الروابط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/42-main-links/05-links-result.webp" alt="معاينة — الروابط" loading="lazy" decoding="async"/> |  |

---
> ملاحظات البناء: لا عنصر: 03-show_cats-on-result.webp


<div class="source-note">الإصدار 1.76.1 · صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
