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
| <img data-update-ref="23-coach-live-event:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — استشارات · لقاء مباشر قادم" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-mobile.webp?v=ae7ec7eeef5f" alt="معاينة — استشارات · لقاء مباشر قادم" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

إعلان عن ورشة أو لقاء مباشر على لوحة داكنة: بطاقة التاريخ، والمقاعد المتبقية وشريط امتلائها، وزر التسجيل بالسعر.

- **أهم الإعدادات:** «منتج التذكرة» منتج «خدمة» كميته في المخزون تساوي عدد المقاعد؛ بدونه لا يظهر اللقاء للزوار. «إجمالي المقاعد» لحساب شريط الامتلاء (الافتراضي ٥٠، وصفر يخفي الشريط). «موعد اللقاء» مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م، ومنه يُكتب اليوم والشهر والسنة والوقت تلقائياً. ومعه «الوقت كما يظهر (اختياري)» و«المدة» و«المكان».
- **التوقيت:** «موعد اللقاء» فارغاً يُظهر «يُعلن الموعد قريباً». ويختفي القسم تلقائياً بعد الموعد. وإن لم تُحدَّد للمنتج كمية، أو كانت كميته مخفية في سلة، لا يظهر عدد المقاعد ولا الشريط.
- **الصورة والتفاصيل (اختيارية، فارغة افتراضياً):** بدونها يبقى القسم كما هو.
  - «صورة اللقاء»: أفقية ١٢٠٠×٩٠٠ تقريباً. تظهر بجانب النص على الحاسوب وفوقه على الجوال، وبطاقة التاريخ فوق زاويتها. ومعها «مركز الصورة».
  - «وسم على الصورة»: حتى ١٦ حرفاً، مثل «مباشر» أو «حضوري». يظهر على الصورة فقط، بنقطة نابضة.
  - «التفاصيل» و«جدول اللقاء» (حتى ٦ بنود، لكل بند «الوقت» و«البند»): إن كُتب أحدهما ظهر زر «التفاصيل»، أو ما يُكتب في «نص زر التفاصيل».
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
| <img data-update-ref="23-coach-live-event:product:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/01-product-panel.webp?v=8b0ea3581d9a" alt="لوحة إعدادات (نسخة مطابقة) — منتج التذكرة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:product:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — منتج التذكرة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الشارة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ورشة مباشرة · المعرّف `badge`
- **ماذا يفعل:** شارة صغيرة بنقطة فوق العنوان، مثل «ورشة مباشرة».
- **متى تستعمله:** لنوع اللقاء.
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:badge:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/02-badge-panel.webp?v=13ac89434d32" alt="لوحة إعدادات (نسخة مطابقة) — الشارة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:badge:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/02-badge-result.webp?v=69fb68e46e37" alt="معاينة — الشارة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** كيف تبني ملف أعمال يجذب العملاء · المعرّف `title`
- **ماذا يفعل:** عنوان اللقاء.
- **متى تستعمله:** موضوع اللقاء في جملة.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/03-title-panel.webp?v=d41c816c767c" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/03-title-result.webp?v=5594c7243210" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف (اختياري)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** ساعتان عمليتان أراجع فيهما ملفات المشاركين مباشرة، وتخرج بخطة واضحة لتحسين ملفك خلال أسبوع. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران عن اللقاء.
- **متى تستعمله:** لما سيخرج به المشارك.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/04-description-panel.webp?v=366de2ec7040" alt="لوحة إعدادات (نسخة مطابقة) — الوصف (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/04-description-result.webp?v=c3b0aff9eb87" alt="معاينة — الوصف (اختياري)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «موعد اللقاء»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `date`
- **ماذا يفعل:** موعد اللقاء، مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م. منه التاريخ والوقت، ويختفي القسم بعده.
- **متى تستعمله:** دائماً حين يتحدد الموعد.
- **حين يكون فارغاً:** فارغاً يظهر «يُعلن الموعد قريباً» ولا يختفي القسم.
- شرحه تحت الحقل في المحرّر: مثل 2026-11-12 20:00 أو 12/11/2026 8:00 م؛ فارغاً «يُعلن الموعد قريباً».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:date:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/05-date-panel.webp?v=dffc1cfebabd" alt="لوحة إعدادات (نسخة مطابقة) — موعد اللقاء" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:date:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — موعد اللقاء" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الوقت كما يظهر (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `time_label`
- **ماذا يفعل:** الوقت كما تريده أن يظهر، مثل «٨ مساءً بتوقيت مكة».
- **متى تستعمله:** إن أردت كتابة الوقت بطريقتك.
- **حين يكون فارغاً:** فارغاً يُكتب من موعد اللقاء.
- شرحه تحت الحقل في المحرّر: فارغاً يُكتب من موعد اللقاء.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:time_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/06-time_label-panel.webp?v=768c0c014a93" alt="لوحة إعدادات (نسخة مطابقة) — الوقت كما يظهر (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:time_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/06-time_label-result.webp?v=e6a1beafa773" alt="معاينة — الوقت كما يظهر (اختياري)" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «المدة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ساعتان · المعرّف `duration`
- **ماذا يفعل:** مدة اللقاء بجانب الوقت.
- **متى تستعمله:** مثل «ساعتان».
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:duration:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/07-duration-panel.webp?v=fa99821be87c" alt="لوحة إعدادات (نسخة مطابقة) — المدة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:duration:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/07-duration-result.webp?v=a637b1bb2471" alt="معاينة — المدة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المكان»

- **النوع:** نص بسطر واحد · **الافتراضي:** عبر زووم — يصلك الرابط بعد التسجيل · المعرّف `location`
- **ماذا يفعل:** مكان اللقاء.
- **متى تستعمله:** مثل «عبر زووم — يصلك الرابط بعد التسجيل».
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:location:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/08-location-panel.webp?v=09944806863b" alt="لوحة إعدادات (نسخة مطابقة) — المكان" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:location:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/08-location-result.webp?v=dc6173afe493" alt="معاينة — المكان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «إجمالي المقاعد»

- **النوع:** رقم · **الافتراضي:** 50 · المعرّف `total_seats`
- **ماذا يفعل:** إجمالي المقاعد، لحساب شريط الامتلاء مع الكمية المتبقية من المنتج.
- **متى تستعمله:** اكتب العدد نفسه الذي بدأت به كمية المنتج.
- **حين يكون فارغاً:** على الافتراضي ٥٠.
- شرحه تحت الحقل في المحرّر: لحساب شريط الامتلاء؛ صفر يخفيه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:total_seats:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/09-total_seats-panel.webp?v=af4bbb0a04cd" alt="لوحة إعدادات (نسخة مطابقة) — إجمالي المقاعد" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:total_seats:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — إجمالي المقاعد" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر التسجيل.
- **متى تستعمله:** مثل «احجز مقعدك».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:button_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/10-button_label-panel.webp?v=f2b3c7254a66" alt="لوحة إعدادات (نسخة مطابقة) — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:button_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «صورة اللقاء»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة اللقاء، أفقية ١٢٠٠×٩٠٠ تقريباً.
- **متى تستعمله:** صورتك أو صورة من لقاء سابق.
- **حين يكون فارغاً:** بدونها يبقى الشكل بلا صورة.
- شرحه تحت الحقل في المحرّر: أفقية 1200×900 تقريباً؛ فارغة يبقى الشكل كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/11-image-panel.webp?v=e4dd794033c5" alt="لوحة إعدادات (نسخة مطابقة) — صورة اللقاء" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/11-image-result.webp?v=ff4762185286" alt="معاينة — صورة اللقاء" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط (الافتراضي) · المعرّف `image_focus`
- **ماذا يفعل:** الجزء الظاهر من الصورة حين تُقص: الوسط أو الأعلى أو الأسفل أو اليمين أو اليسار.
- **متى تستعمله:** حين يُقص وجه أو عنوان في الصورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:image_focus:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-center-panel.webp?v=251c675669f0" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image_focus:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-center-result.webp?v=c44ad3d25490" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الوسط (الافتراضي)» · بصورة تجريبية |
| <img data-update-ref="23-coach-live-event:image_focus:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-top-panel.webp?v=4321657fa39f" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image_focus:1:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-top-result.webp?v=86754117fb91" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» · بصورة تجريبية |
| <img data-update-ref="23-coach-live-event:image_focus:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-bottom-panel.webp?v=b5ca58b7168d" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image_focus:2:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-bottom-result.webp?v=dad25b2d13fa" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأسفل» · بصورة تجريبية |
| <img data-update-ref="23-coach-live-event:image_focus:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-right-panel.webp?v=11612ad982f3" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image_focus:3:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-right-result.webp?v=1049245649b8" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» · بصورة تجريبية |
| <img data-update-ref="23-coach-live-event:image_focus:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-left-panel.webp?v=2e0fdddf0342" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image_focus:4:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/12-image_focus-left-result.webp?v=44157b7ede8d" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» · بصورة تجريبية |

### «وسم على الصورة»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `image_tag`
- **ماذا يفعل:** وسم على الصورة، مثل «مباشر» أو «حضوري». يظهر مع الصورة فقط.
- **متى تستعمله:** لنوع الحضور.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- شرحه تحت الحقل في المحرّر: يظهر مع الصورة فقط، مثل «مباشر» أو «حضوري».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:image_tag:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/13-image_tag-panel.webp?v=1d912431ef74" alt="لوحة إعدادات (نسخة مطابقة) — وسم على الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:image_tag:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — وسم على الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «التفاصيل»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `details`
- **ماذا يفعل:** تفاصيل أطول تظهر في نافذة يفتحها زر «التفاصيل»، مع زر الحجز.
- **متى تستعمله:** لما يحتاج المشارك معرفته قبل التسجيل.
- **حين يكون فارغاً:** فارغة ومع جدول فارغ لا يظهر زر التفاصيل.
- شرحه تحت الحقل في المحرّر: التفاصيل أو «جدول اللقاء» يُظهران زراً يفتح نافذة بهما وبزر الحجز.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:details:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/14-details-panel.webp?v=61730d36c932" alt="لوحة إعدادات (نسخة مطابقة) — التفاصيل" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:details:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/14-details-result.webp?v=53bdcf2c943e" alt="معاينة — التفاصيل" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «جدول اللقاء»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** بلا عناصر · المعرّف `agenda`
- **ماذا يفعل:** جدول اللقاء: وقت وبند لكل سطر، يظهر في نافذة التفاصيل.
- **متى تستعمله:** لورشة بفقرات محددة.
- **حين يكون فارغاً:** بلا بنود لا يظهر الجدول. والبند الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:agenda:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/15-agenda-panel.webp?v=8f5e3c0b8e6c" alt="لوحة إعدادات (نسخة مطابقة) — جدول اللقاء" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:agenda:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — جدول اللقاء" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الوقت»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `agenda.time`
- **ماذا يفعل:** وقت الفقرة.
- **حين يكون فارغاً:** فارغاً يظهر البند وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:agenda:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/15-agenda-time-panel.webp?v=91a80cd8fe32" alt="لوحة إعدادات (نسخة مطابقة) — جدول اللقاء" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:agenda:1:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — جدول اللقاء" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «البند»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `agenda.item`
- **ماذا يفعل:** اسم الفقرة.
- **حين يكون فارغاً:** البند الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:agenda:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/15-agenda-item-panel.webp?v=2d916150e466" alt="لوحة إعدادات (نسخة مطابقة) — جدول اللقاء" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:agenda:2:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/00-desktop.webp?v=568e76ed27b9" alt="معاينة — جدول اللقاء" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «نص زر التفاصيل»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `details_label`
- **ماذا يفعل:** نص زر التفاصيل.
- **متى تستعمله:** مثل «جدول الورشة».
- **حين يكون فارغاً:** فارغاً يظهر «التفاصيل».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «التفاصيل».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:details_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/16-details_label-panel.webp?v=d881ee61eedc" alt="لوحة إعدادات (نسخة مطابقة) — نص زر التفاصيل" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:details_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/16-details_label-result.webp?v=0dc0f0d898e8" alt="معاينة — نص زر التفاصيل" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «السعر شريطاً على حافة البطاقة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `price_ribbon`
- **ماذا يفعل:** السعر الحالي شريطاً في الزاوية العلوية من البطاقة.
- **متى تستعمله:** لإبراز سعر مخفّض أو منخفض.
- **حين يكون فارغاً:** مطفأ (الافتراضي): السعر بجانب الزر فقط.
- شرحه تحت الحقل في المحرّر: السعر الحالي في الزاوية العلوية؛ بلا سعر لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:price_ribbon:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/17-price_ribbon-panel.webp?v=a09a772cf0f6" alt="لوحة إعدادات (نسخة مطابقة) — السعر شريطاً على حافة البطاقة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:price_ribbon:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/17-price_ribbon-on-result.webp?v=dd1aa25a428a" alt="معاينة — السعر شريطاً على حافة البطاقة" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «خلفية متحركة بالألوان»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_motion`
- **ماذا يفعل:** تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».
- **متى تستعمله:** لإعلان تريده أن يلفت النظر.
- **حين يكون فارغاً:** مطفأ (الافتراضي): خلفية ثابتة.
- شرحه تحت الحقل في المحرّر: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:fx_motion:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/18-fx_motion-panel.webp?v=e6de9a4f2416" alt="لوحة إعدادات (نسخة مطابقة) — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_motion:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/18-fx_motion-on-result.webp?v=176316dd3760" alt="معاينة — خلفية متحركة بالألوان" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.
- **متى تستعمله:** «هادئة» لحركة لا تشتّت.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:fx_speed:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/19-fx_speed-slow-panel.webp?v=473143fdf529" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_speed:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/19-fx_speed-slow-result.webp?v=90b1ce41ac05" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «هادئة» |
| <img data-update-ref="23-coach-live-event:fx_speed:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/19-fx_speed-normal-panel.webp?v=1463e807c272" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_speed:1:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/18-fx_motion-on-result.webp?v=176316dd3760" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «متوسطة» |
| <img data-update-ref="23-coach-live-event:fx_speed:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/19-fx_speed-fast-panel.webp?v=f099680c36f1" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_speed:2:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/19-fx_speed-fast-result.webp?v=2eda52a64c87" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «أسرع» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.
- **متى تستعمله:** اختر ما يناسب اللقاء.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:fx_palette:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/20-fx_palette-theme-panel.webp?v=1dda1e53efbf" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_palette:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/18-fx_motion-on-result.webp?v=176316dd3760" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «ألوان الثيم» |
| <img data-update-ref="23-coach-live-event:fx_palette:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/20-fx_palette-night-panel.webp?v=07861c161f18" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_palette:1:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/20-fx_palette-night-result.webp?v=4c4815b7501b" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ليلي» |
| <img data-update-ref="23-coach-live-event:fx_palette:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/20-fx_palette-warm-panel.webp?v=dcbd90998ef6" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:fx_palette:2:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/20-fx_palette-warm-result.webp?v=316ee14772d7" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «دافئ» |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="23-coach-live-event:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/21-custom_classes-panel.webp?v=ba616d7f6309" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="23-coach-live-event:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/23-coach-live-event/21-custom_classes-result.webp?v=f5e81c4cc9c0" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp · لم يُعثر على النص لتمييزه: 16-details_label-result.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[توضيح العرض]
عند نفاد المقاعد تظهر عبارة «اكتملت المقاعد».
:::
