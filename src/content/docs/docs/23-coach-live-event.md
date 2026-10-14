---
title: "استشارات · لقاء مباشر قادم"
description: "دليل ثيم كوتش 1.76.1 — استشارات · لقاء مباشر قادم"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Consultations · Upcoming live event* · مساره `home.coach-live-event`

**ما يعرضه:** إعلان عن ورشة أو لقاء مباشر بموعد ثابت: التاريخ والمدة والمكان، والمقاعد المتبقية من كمية المنتج، وزر التسجيل. يختفي وحده بعد الموعد.

**متى تضيفه:** لورشة أو لقاء قادم تريد أن يسجّل فيه زوارك.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — استشارات · لقاء مباشر قادم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-mobile.webp" alt="معاينة — استشارات · لقاء مباشر قادم" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

إعلان عن ورشة أو لقاء مباشر على لوحة داكنة: بطاقة التاريخ، والمقاعد المتبقية وشريط امتلائها، وزر التسجيل بالسعر.

- **أهم الإعدادات:** «منتج التذكرة» منتج «خدمة» كميته في المخزون تساوي عدد المقاعد؛ بدونه لا يظهر اللقاء للزوار. «إجمالي المقاعد» لحساب شريط الامتلاء (الافتراضي ٥٠). «موعد اللقاء» مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م، ومنه يُكتب اليوم والشهر والسنة والوقت تلقائياً. ومعه «الوقت كما يظهر (اختياري)» و«المدة» و«المكان».
- **التوقيت:** «موعد اللقاء» فارغاً يُظهر «يُعلن الموعد قريباً». ويختفي القسم تلقائياً بعد الموعد. وإن لم تحدد للمنتج كمية، أو أخفيت كميته في سلة، لا يظهر عدد المقاعد ولا الشريط.
- **الصورة والتفاصيل (اختيارية، فارغة افتراضياً):** بدونها يبقى القسم كما هو.
  - «صورة اللقاء»: أفقية ١٢٠٠×٩٠٠ تقريباً. تظهر بجانب النص على الحاسوب وفوقه على الجوال، وبطاقة التاريخ فوق زاويتها.
  - «وسم على الصورة»: حتى ١٦ حرفاً، مثل «مباشر» أو «حضوري». يظهر على الصورة فقط، بنقطة نابضة.
  - «التفاصيل» و«جدول اللقاء» (حتى ٦ بنود، لكل بند «الوقت» و«البند»): إن كتبت أحدهما ظهر زر «التفاصيل»، أو ما تكتبه في «نص زر التفاصيل».
- **نافذة التفاصيل:** يفتحها زر «التفاصيل»، وزر الإغلاق في زاويتها.
  - مع الصورة: الصورة أعلى النافذة، وعليها عنوان اللقاء فوق طبقة متدرّجة، والوسم في الزاوية المقابلة لزر الإغلاق. بلا صورة: العنوان وحده في أعلاها.
  - تحتها الموعد والوقت والمدة والمكان، ثم «التفاصيل»، ثم «جدول اللقاء»، ثم المقاعد المتبقية.
  - أسفلها السعر وزر الإضافة للسلة لمنتج التذكرة نفسه.
  - على الجوال تفتح من أسفل الشاشة، والصفحة خلفها لا تتمرر.
- **السعر شريطاً:** «السعر شريطاً على حافة البطاقة» (مطفأ افتراضياً) يعرض السعر الحالي في الزاوية العلوية للبطاقة، و«مجاناً» للسعر صفر، ولا يظهر بلا سعر. والسعر قبل الخصم يبقى في السطر السفلي وفي النافذة.

---

**عام** — أقسام عامة تناسب أي متجر.

</details>

## الإعدادات بترتيبها في اللوحة

### «منتج التذكرة»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `product`
- **ماذا يفعل:** منتج التذكرة في سلة، منتج «خدمة» كميته عدد المقاعد: منه السعر والمقاعد المتبقية وزر التسجيل.
- **متى تستعمله:** دائماً: أنشئ منتج التذكرة واختره.
- **حين يكون فارغاً:** بدونه لا يظهر اللقاء للزوار، وفي المحرّر ملاحظة.
- شرحه تحت الحقل في المحرّر: منتج «خدمة» كميته = عدد المقاعد؛ بدونه لا يظهر اللقاء.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/01-product-panel.webp" alt="لوحة إعدادات — منتج التذكرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — منتج التذكرة" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «الشارة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ورشة مباشرة · المعرّف `badge`
- **ماذا يفعل:** شارة صغيرة بنقطة فوق العنوان، مثل «ورشة مباشرة».
- **متى تستعمله:** لنوع اللقاء.
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/02-badge-panel.webp" alt="لوحة إعدادات — الشارة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/02-badge-result.webp" alt="معاينة — الشارة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** كيف تبني ملف أعمال يجذب العملاء · المعرّف `title`
- **ماذا يفعل:** عنوان اللقاء.
- **متى تستعمله:** موضوع اللقاء في جملة.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/03-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/03-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف (اختياري)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** ساعتان عمليتان أراجع فيهما ملفات المشاركين مباشرة، وتخرج بخطة واضحة لتحسين ملفك خلال أسبوع. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران عن اللقاء.
- **متى تستعمله:** لما سيخرج به المشارك.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/04-description-panel.webp" alt="لوحة إعدادات — الوصف (اختياري)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/04-description-result.webp" alt="معاينة — الوصف (اختياري)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «موعد اللقاء»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `date`
- **ماذا يفعل:** موعد اللقاء، مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م. منه التاريخ والوقت، ويختفي القسم بعده.
- **متى تستعمله:** دائماً حين يتحدد الموعد.
- **حين يكون فارغاً:** فارغاً يظهر «يُعلن الموعد قريباً» ولا يختفي القسم.
- شرحه تحت الحقل في المحرّر: مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م؛ فارغاً «يُعلن الموعد قريباً».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/05-date-panel.webp" alt="لوحة إعدادات — موعد اللقاء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — موعد اللقاء" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «الوقت كما يظهر (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `time_label`
- **ماذا يفعل:** الوقت كما تريده أن يظهر، مثل «٨ مساءً بتوقيت مكة».
- **متى تستعمله:** إن أردت كتابة الوقت بطريقتك.
- **حين يكون فارغاً:** فارغاً يُكتب من موعد اللقاء.
- شرحه تحت الحقل في المحرّر: فارغاً يُكتب من موعد اللقاء.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/06-time_label-panel.webp" alt="لوحة إعدادات — الوقت كما يظهر (اختياري)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/06-time_label-result.webp" alt="معاينة — الوقت كما يظهر (اختياري)" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «المدة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ساعتان · المعرّف `duration`
- **ماذا يفعل:** مدة اللقاء بجانب الوقت.
- **متى تستعمله:** مثل «ساعتان».
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/07-duration-panel.webp" alt="لوحة إعدادات — المدة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/07-duration-result.webp" alt="معاينة — المدة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المكان»

- **النوع:** نص بسطر واحد · **الافتراضي:** عبر زووم — يصلك الرابط بعد التسجيل · المعرّف `location`
- **ماذا يفعل:** مكان اللقاء.
- **متى تستعمله:** مثل «عبر زووم — يصلك الرابط بعد التسجيل».
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/08-location-panel.webp" alt="لوحة إعدادات — المكان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/08-location-result.webp" alt="معاينة — المكان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «إجمالي المقاعد»

- **النوع:** رقم · **الافتراضي:** 50 · المعرّف `total_seats`
- **ماذا يفعل:** إجمالي المقاعد، لحساب شريط الامتلاء مع الكمية المتبقية من المنتج.
- **متى تستعمله:** اكتب العدد نفسه الذي بدأت به كمية المنتج.
- **حين يكون فارغاً:** على الافتراضي ٥٠.
- شرحه تحت الحقل في المحرّر: لحساب شريط الامتلاء.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/09-total_seats-panel.webp" alt="لوحة إعدادات — إجمالي المقاعد" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — إجمالي المقاعد" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر التسجيل.
- **متى تستعمله:** مثل «احجز مقعدك».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/10-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «صورة اللقاء»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة اللقاء، أفقية ١٢٠٠×٩٠٠ تقريباً.
- **متى تستعمله:** صورتك أو صورة من لقاء سابق.
- **حين يكون فارغاً:** بدونها يبقى الشكل بلا صورة.
- شرحه تحت الحقل في المحرّر: أفقية 1200×900 تقريباً؛ فارغة يبقى الشكل كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/11-image-panel.webp" alt="لوحة إعدادات — صورة اللقاء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/11-image-result.webp" alt="معاينة — صورة اللقاء" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «وسم على الصورة»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `image_tag`
- **ماذا يفعل:** وسم على الصورة، مثل «مباشر» أو «حضوري». يظهر مع الصورة فقط.
- **متى تستعمله:** لنوع الحضور.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- شرحه تحت الحقل في المحرّر: يظهر مع الصورة فقط، مثل «مباشر» أو «حضوري».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/12-image_tag-panel.webp" alt="لوحة إعدادات — وسم على الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — وسم على الصورة" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «التفاصيل»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `details`
- **ماذا يفعل:** تفاصيل أطول تظهر في نافذة يفتحها زر «التفاصيل»، مع زر الحجز.
- **متى تستعمله:** لما يحتاج المشارك معرفته قبل التسجيل.
- **حين يكون فارغاً:** فارغة ومع جدول فارغ لا يظهر زر التفاصيل.
- شرحه تحت الحقل في المحرّر: التفاصيل أو «جدول اللقاء» يُظهران زراً يفتح نافذة بهما وبزر الحجز.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/13-details-panel.webp" alt="لوحة إعدادات — التفاصيل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/13-details-result.webp" alt="معاينة — التفاصيل" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «جدول اللقاء»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** بلا عناصر · المعرّف `agenda`
- **ماذا يفعل:** جدول اللقاء: وقت وبند لكل سطر، يظهر في نافذة التفاصيل.
- **متى تستعمله:** لورشة بفقرات محددة.
- **حين يكون فارغاً:** بلا بنود لا يظهر الجدول. والبند الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/14-agenda-panel.webp" alt="لوحة إعدادات — جدول اللقاء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — جدول اللقاء" loading="lazy" decoding="async"/> |  |

#### «الوقت»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `agenda.time`
- **ماذا يفعل:** وقت الفقرة.
- **حين يكون فارغاً:** فارغاً يظهر البند وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/14-agenda-time-panel.webp" alt="لوحة إعدادات — جدول اللقاء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — جدول اللقاء" loading="lazy" decoding="async"/> |  |

#### «البند»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `agenda.item`
- **ماذا يفعل:** اسم الفقرة.
- **حين يكون فارغاً:** البند الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/14-agenda-item-panel.webp" alt="لوحة إعدادات — جدول اللقاء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — جدول اللقاء" loading="lazy" decoding="async"/> |  |

### «نص زر التفاصيل»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `details_label`
- **ماذا يفعل:** نص زر التفاصيل.
- **متى تستعمله:** مثل «جدول الورشة».
- **حين يكون فارغاً:** فارغاً يظهر «التفاصيل».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «التفاصيل».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/15-details_label-panel.webp" alt="لوحة إعدادات — نص زر التفاصيل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/00-desktop.webp" alt="معاينة — نص زر التفاصيل" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «السعر شريطاً على حافة البطاقة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `price_ribbon`
- **ماذا يفعل:** السعر الحالي شريطاً في الزاوية العلوية من البطاقة.
- **متى تستعمله:** لإبراز سعر مخفّض أو منخفض.
- **حين يكون فارغاً:** مطفأ (الافتراضي): السعر بجانب الزر فقط.
- شرحه تحت الحقل في المحرّر: السعر الحالي في الزاوية العلوية؛ بلا سعر لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/16-price_ribbon-panel.webp" alt="لوحة إعدادات — السعر شريطاً على حافة البطاقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/16-price_ribbon-on-result.webp" alt="معاينة — السعر شريطاً على حافة البطاقة" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «خلفية متحركة بالألوان»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_motion`
- **ماذا يفعل:** تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».
- **متى تستعمله:** لإعلان تريده أن يلفت النظر.
- **حين يكون فارغاً:** مطفأ (الافتراضي): خلفية ثابتة.
- شرحه تحت الحقل في المحرّر: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/17-fx_motion-panel.webp" alt="لوحة إعدادات — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/17-fx_motion-on-result.webp" alt="معاينة — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.
- **متى تستعمله:** «هادئة» لحركة لا تشتّت.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/18-fx_speed-slow-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/18-fx_speed-slow-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «هادئة» |
| <img src="/coach-docs/assets/sections/23-coach-live-event/18-fx_speed-normal-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/18-fx_speed-normal-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img src="/coach-docs/assets/sections/23-coach-live-event/18-fx_speed-fast-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/18-fx_speed-fast-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «أسرع» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.
- **متى تستعمله:** اختر ما يناسب اللقاء.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/23-coach-live-event/19-fx_palette-theme-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/17-fx_motion-on-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ألوان الثيم» |
| <img src="/coach-docs/assets/sections/23-coach-live-event/19-fx_palette-night-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/19-fx_palette-night-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ليلي» |
| <img src="/coach-docs/assets/sections/23-coach-live-event/19-fx_palette-warm-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/23-coach-live-event/19-fx_palette-warm-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «دافئ» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp · لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
