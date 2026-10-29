---
title: "واجهة · ترحيب المدرّب"
description: "دليل ثيم كوتش 1.76.1 — واجهة · ترحيب المدرّب"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Hero · Coach welcome* · مساره `home.coach-hero`

**ما يعرضه:** ترحيب شخصي أول الصفحة: صورتك داخل قوس، وشارة وعنوان ونبذة، وزر وفيديو، وثلاثة أرقام، وبطاقة تقييم وبطاقة برنامجك الأكثر طلباً.

**متى تضيفه:** أول قسم في الرئيسية لمدرّب يقدّم نفسه بصورته.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="01-coach-hero:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-desktop.webp?v=b3e12ca975fa" alt="معاينة — واجهة · ترحيب المدرّب" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-mobile.webp?v=8265794e597b" alt="معاينة — واجهة · ترحيب المدرّب" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

ترحيب شخصي بصورتك داخل قوس: العنوان والنبذة، وزر برامجك وزر فيديو، وثلاثة أرقام، وبطاقة تقييم، وبطاقة داكنة لبرنامجك الأكثر مبيعاً.

- **أهم الإعدادات:** «صورتك» طولية (٨٠٠×١٠٠٠ بكسل تقريباً)، والأفضل بخلفية شفافة أو فاتحة. «البرنامج في البطاقة الداكنة» يقرأ الاسم والسعر والرابط من المنتج؛ بدونه لا تظهر البطاقة. «رابط الفيديو» (YouTube أو Vimeo أو ملف MP4) يفتح في نافذة فوق الصفحة؛ فارغاً يختفي زر الفيديو.
- **الزر والحركة:** «رابط الزر الأساسي» فارغاً يأخذ الزائر إلى قسم «متجر · كل المنتجات بتبويبات»، أو إلى أول قسم يعرض منتجات إن لم يكن موجوداً. «حركة خفيفة للبطاقات» (مفعّلة): بطاقة التقييم تطفو ببطء، والبطاقة الداكنة تميل نحو مؤشر الفأرة على الحاسوب. الميل للحاسوب فقط، ولا حركة لمن فعّل «تقليل الحركة» أو أطفأ «التأثيرات المتحركة».
- **الخلفية:** «خلفية القسم»: «بدون خلفية» (الافتراضي)، أو «صورة بطبقة من لون الثيم» (تظهر «صورة الخلفية» و«قوة طبقة اللون فوق الصورة»)، أو «خلفية متحركة بالألوان» (معها «الحركة على الجوال أيضاً» و«يتبع مؤشر الفأرة» و«صورة خلفية ثابتة (اختيارية)» تظهر تحت الحركة وعلى الجوال). مع الصورة أو الحركة يصير القسم بعرض الشاشة بنصوص بيضاء.
- **نصيحة:** «سطر الترحيب» الافتراضي «أهلاً، أنا د. لمى.» يُستبدل بالاسم الحقيقي، و«الأرقام تحت الأزرار» و«التقييم» تُكتب فيها الأرقام الحقيقية فقط، و«شارة التوفّر» تُعدَّل أو تُمسح.
- **خيارات إضافية:** «مركز الصورة» لصورة الخلفية (مع «صورة بطبقة من لون الثيم»)، و«صورة المتجر الإنجليزي (اختيارية)» مكان «صورتك» في المتجر الإنجليزي وحده (فارغة: الصورة نفسها).

</details>

## الإعدادات بترتيبها في اللوحة

### «شارة التوفّر»

- **النوع:** نص بسطر واحد · **الافتراضي:** متاحة لاستشارات جديدة هذا الشهر · المعرّف `badge`
- **ماذا يفعل:** شارة صغيرة بنقطة فوق العنوان، مثل «متاحة لاستشارات جديدة».
- **متى تستعمله:** لخبر قصير: مواعيد متاحة، أو دفعة جديدة.
- **حين يكون فارغاً:** فارغة باللغتين لا تظهر.
- شرحه تحت الحقل في المحرّر: فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:badge:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/01-badge-panel.webp?v=3c4152219495" alt="لوحة إعدادات (نسخة مطابقة) — شارة التوفّر" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:badge:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/01-badge-result.webp?v=2cb809561d2d" alt="معاينة — شارة التوفّر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «سطر الترحيب»

- **النوع:** نص بسطر واحد · **الافتراضي:** أهلاً، أنا د. لمى. · المعرّف `greeting`
- **ماذا يفعل:** أول سطر في العنوان الكبير، بلون النص، مثل «أهلاً، أنا د. لمى».
- **متى تستعمله:** لتقديم نفسك باسمك.
- **حين يكون فارغاً:** فارغاً يبقى سطر «العنوان» وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:greeting:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/02-greeting-panel.webp?v=5b1c329adafe" alt="لوحة إعدادات (نسخة مطابقة) — سطر الترحيب" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:greeting:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/02-greeting-result.webp?v=8fa7849d486f" alt="معاينة — سطر الترحيب" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان (باللون الأساسي)»

- **النوع:** نص بسطر واحد · **الافتراضي:** أساعدك تصنع مستقبلك المهني · المعرّف `title`
- **ماذا يفعل:** بقية العنوان الكبير، باللون الأساسي، تحت سطر الترحيب.
- **متى تستعمله:** ما تساعد فيه متابعيك، في جملة.
- **حين يكون فارغاً:** فارغاً يبقى سطر الترحيب وحده. وإن فرغ الاثنان لا يظهر عنوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/03-title-panel.webp?v=c730fefe7d91" alt="لوحة إعدادات (نسخة مطابقة) — العنوان (باللون الأساسي)" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/03-title-result.webp?v=6ba315a430ef" alt="معاينة — العنوان (باللون الأساسي)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «النبذة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** مدرّبة معتمدة ساعدت أكثر من ١٢ ألف متعلّم على تطوير مهاراتهم عبر برامج مسجّلة، كتب، وموارد رقمية، وجلسات استشارية فردية. · المعرّف `description`
- **ماذا يفعل:** نبذة قصيرة عنك تحت العنوان.
- **متى تستعمله:** لخبرتك وما تقدّمه في سطرين.
- **حين يكون فارغاً:** فارغة باللغتين لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/04-description-panel.webp?v=082de38bbcc5" alt="لوحة إعدادات (نسخة مطابقة) — النبذة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/04-description-result.webp?v=3ceb16643c33" alt="معاينة — النبذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «نص الزر الأساسي»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح برامجي · المعرّف `primary_label`
- **ماذا يفعل:** نص الزر الأساسي تحت النبذة.
- **متى تستعمله:** لأهم إجراء: تصفّح البرامج أو الحجز.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:primary_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/05-primary_label-panel.webp?v=1d3985e378d8" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر الأساسي" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:primary_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/05-primary_label-result.webp?v=daa1518a29ec" alt="معاينة — نص الزر الأساسي" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الأساسي»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `primary_link`
- **ماذا يفعل:** إلى أين يذهب الزر الأساسي، والضغط على صورتك أيضاً.
- **متى تستعمله:** لصفحة برنامجك أو تصنيف دوراتك.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات في الصفحة؛ وإن لم يوجد أي منهما يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم «متجر · كل المنتجات بتبويبات» إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:primary_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/06-primary_link-panel.webp?v=263665fdc5a5" alt="لوحة إعدادات (نسخة مطابقة) — رابط الزر الأساسي" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:primary_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-desktop.webp?v=b3e12ca975fa" alt="معاينة — رابط الزر الأساسي" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الفيديو»

- **النوع:** نص بسطر واحد · **الافتراضي:** شاهد رسالتي · المعرّف `video_label`
- **ماذا يفعل:** نص زر الفيديو بجانب الزر الأساسي، بأيقونة تشغيل.
- **متى تستعمله:** لرسالة ترحيب مصوّرة.
- **حين يكون فارغاً:** فارغاً لا يظهر زر الفيديو، حتى مع الرابط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:video_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/07-video_label-panel.webp?v=a60f18a7b94f" alt="لوحة إعدادات (نسخة مطابقة) — نص زر الفيديو" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:video_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-desktop.webp?v=b3e12ca975fa" alt="معاينة — نص زر الفيديو" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الفيديو»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `video_url`
- **ماذا يفعل:** رابط الفيديو الذي يفتحه الزر في نافذة: YouTube أو Vimeo أو ملف MP4.
- **متى تستعمله:** إن كان عندك فيديو تعريفي قصير.
- **حين يكون فارغاً:** فارغاً لا يظهر زر الفيديو.
- شرحه تحت الحقل في المحرّر: YouTube أو Vimeo أو MP4؛ فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:video_url:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/08-video_url-panel.webp?v=dbcfec7fa271" alt="لوحة إعدادات (نسخة مطابقة) — رابط الفيديو" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:video_url:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-desktop.webp?v=b3e12ca975fa" alt="معاينة — رابط الفيديو" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الأرقام تحت الأزرار»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `stats`
- **ماذا يفعل:** حتى ثلاثة أرقام تحت الأزرار، لكل رقم سطر وصف.
- **متى تستعمله:** لإنجازات تُقاس: عدد المتعلّمين، والدروس، والكتب.
- **حين يكون فارغاً:** بلا عناصر لا يظهر صف الأرقام. والعنصر بلا رقم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:stats:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/09-stats-panel.webp?v=1734993c8d2d" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام تحت الأزرار" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:stats:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/09-stats-result.webp?v=8d3e871ced82" alt="معاينة — الأرقام تحت الأزرار" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الرقم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `stats.value`
- **ماذا يفعل:** الرقم بخط كبير، مثل «+١٢ ألف».
- **حين يكون فارغاً:** العنصر بلا رقم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:stats:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/09-stats-value-panel.webp?v=b7a1b1071212" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام تحت الأزرار" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:stats:1:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/09-stats-result.webp?v=8d3e871ced82" alt="معاينة — الأرقام تحت الأزرار" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الوصف»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `stats.label`
- **ماذا يفعل:** سطر صغير تحت الرقم.
- **حين يكون فارغاً:** فارغاً يظهر الرقم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:stats:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/09-stats-label-panel.webp?v=40c173b67dfe" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام تحت الأزرار" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:stats:2:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/09-stats-result.webp?v=8d3e871ced82" alt="معاينة — الأرقام تحت الأزرار" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «التقييم»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٤٫٩ من ٥ · المعرّف `rating_value`
- **ماذا يفعل:** التقييم في بطاقة بيضاء بنجمة بجانب صورتك، مثل «٤٫٩ من ٥».
- **متى تستعمله:** إن كان لديك تقييم حقيقي تفخر به.
- **حين يكون فارغاً:** فارغاً تُخفى بطاقة التقييم كلها.
- شرحه تحت الحقل في المحرّر: فارغاً تُخفى بطاقة التقييم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:rating_value:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/10-rating_value-panel.webp?v=7e8e77355e28" alt="لوحة إعدادات (نسخة مطابقة) — التقييم" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:rating_value:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/10-rating_value-result.webp?v=75d2277f8564" alt="معاينة — التقييم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «تحت التقييم»

- **النوع:** نص بسطر واحد · **الافتراضي:** +٣٬٤٠٠ تقييم · المعرّف `rating_label`
- **ماذا يفعل:** سطر تحت التقييم، مثل عدد التقييمات.
- **متى تستعمله:** ليعرف الزائر على كم تقييم بُني الرقم.
- **حين يكون فارغاً:** فارغاً يظهر التقييم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:rating_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/11-rating_label-panel.webp?v=8ae218b1abda" alt="لوحة إعدادات (نسخة مطابقة) — تحت التقييم" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:rating_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/11-rating_label-result.webp?v=997adecbf37c" alt="معاينة — تحت التقييم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «البرنامج في البطاقة الداكنة»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `featured_product`
- **ماذا يفعل:** منتج يظهر في البطاقة الداكنة بجانب صورتك: اسمه وسعره من المنتج، والضغط عليها يفتحه.
- **متى تستعمله:** لبرنامجك الأكثر طلباً.
- **حين يكون فارغاً:** بدونه لا تظهر البطاقة عند الزوار، وفي المحرّر ملاحظة تطلب اختياره.
- شرحه تحت الحقل في المحرّر: الاسم والسعر من المنتج؛ بدونه لا تظهر البطاقة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:featured_product:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/12-featured_product-panel.webp?v=b78d28a862ae" alt="لوحة إعدادات (نسخة مطابقة) — البرنامج في البطاقة الداكنة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:featured_product:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-desktop.webp?v=b3e12ca975fa" alt="معاينة — البرنامج في البطاقة الداكنة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «السطر فوق اسم البرنامج»

- **النوع:** نص بسطر واحد · **الافتراضي:** البرنامج الأكثر طلباً · المعرّف `featured_label`
- **ماذا يفعل:** سطر صغير فوق اسم المنتج في البطاقة الداكنة.
- **متى تستعمله:** مثل «البرنامج الأكثر طلباً» أو «جديد».
- **حين يكون فارغاً:** فارغاً يظهر الاسم والسعر وحدهما.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:featured_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/13-featured_label-panel.webp?v=5292d1821775" alt="لوحة إعدادات (نسخة مطابقة) — السطر فوق اسم البرنامج" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:featured_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/13-featured_label-result.webp?v=1aeffe8140d0" alt="معاينة — السطر فوق اسم البرنامج" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «حركة خفيفة للبطاقات»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `motion`
- **ماذا يفعل:** بطاقة التقييم تطفو بهدوء، والبطاقة الداكنة تميل مع الفأرة على الكمبيوتر.
- **متى تستعمله:** اتركه مفعّلاً لواجهة حيّة.
- **حين يكون فارغاً:** مطفأ: البطاقتان ثابتتان.
- شرحه تحت الحقل في المحرّر: تطفو بطاقة التقييم، وتميل الداكنة مع الفأرة على الحاسوب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:motion:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/14-motion-panel.webp?v=10151fa21664" alt="لوحة إعدادات (نسخة مطابقة) — حركة خفيفة للبطاقات" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:motion:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/00-desktop.webp?v=b3e12ca975fa" alt="معاينة — حركة خفيفة للبطاقات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «صورتك»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورتك داخل القوس، طولية نحو ٨٠٠×١٠٠٠ بخلفية شفافة أو فاتحة. الضغط عليها كالزر الأساسي.
- **متى تستعمله:** دائماً: صورة واضحة لك.
- **حين يكون فارغاً:** بدونها يبقى القوس بخطوط مائلة بلون الثيم.
- شرحه تحت الحقل في المحرّر: طولية نحو ٨٠٠×١٠٠٠ بخلفية شفافة أو فاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/15-image-panel.webp?v=a0c05c88c6c0" alt="لوحة إعدادات (نسخة مطابقة) — صورتك" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/15-image-result.webp?v=2450a16a0433" alt="معاينة — صورتك" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «صورة المتجر الإنجليزي (اختيارية)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image_en`
- **ماذا يفعل:** صورة تظهر في المتجر الإنجليزي وحده.
- **متى تستعمله:** حين في الصورة كتابة عربية.
- **حين يكون فارغاً:** فارغة: الصورة نفسها في اللغتين.
- شرحه تحت الحقل في المحرّر: فارغة: الصورة نفسها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:image_en:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/16-image_en-panel.webp?v=c06adad0d243" alt="لوحة إعدادات (نسخة مطابقة) — صورة المتجر الإنجليزي (اختيارية)" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image_en:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/16-image_en-result.webp?v=8a02bcefbf8a" alt="معاينة — صورة المتجر الإنجليزي (اختيارية)" loading="lazy" decoding="async"/> | النتيجة في المتجر الإنجليزي بصورة تجريبية |

### «التوقيع المرسوم بجانب الصورة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_signature`
- **ماذا يفعل:** خط يد مرسوم بجانب الصورة كأنه توقيع.
- **متى تستعمله:** للمسة شخصية؛ أطفئه إن تزاحم مع صورتك.
- **حين يكون فارغاً:** مطفأ: بلا توقيع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:show_signature:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/17-show_signature-panel.webp?v=ed5e25ebe3cb" alt="لوحة إعدادات (نسخة مطابقة) — التوقيع المرسوم بجانب الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:show_signature:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/17-show_signature-off-result.webp?v=20544e8e3801" alt="معاينة — التوقيع المرسوم بجانب الصورة" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «خلفية القسم»

- **النوع:** قائمة منسدلة · **الافتراضي:** بدون خلفية · المعرّف `fx_background`
- **ماذا يفعل:** ما خلف الواجهة: بدون، أو صورة عليها طبقة من لون الثيم، أو خلفية متحركة بألوان الثيم. مع الصورة أو الحركة تمتد الخلفية بعرض الشاشة وتصير النصوص بيضاء.
- **متى تستعمله:** «صورة» لمكان تدريبك، و«متحركة» لواجهة لافتة.
- شرحه تحت الحقل في المحرّر: مع الصورة أو الحركة: بعرض الشاشة ونصوص بيضاء (داكنة مع «فاتح»).

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:fx_background:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/18-fx_background-none-panel.webp?v=64327cecf444" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_background:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/18-fx_background-none-result.webp?v=40d0fee2f846" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «بدون خلفية» |
| <img data-update-ref="01-coach-hero:fx_background:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/18-fx_background-image-panel.webp?v=48611ea2b46a" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_background:1:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/18-fx_background-image-result.webp?v=5cf797eabc8a" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «صورة بطبقة من لون الثيم» |
| <img data-update-ref="01-coach-hero:fx_background:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/18-fx_background-motion-panel.webp?v=526b627361fd" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_background:2:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/18-fx_background-motion-result.webp?v=d4bce806a9cd" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «خلفية متحركة بالألوان» |

### «صورة الخلفية»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `bg_image`
- **ماذا يفعل:** الصورة خلف الواجهة، عريضة (١٦٠٠×٩٠٠ فأكبر).
- **متى تستعمله:** صورة هادئة بلا تفاصيل كثيرة خلف النص.
- **حين يكون فارغاً:** بدونها تظهر ألوان الثيم.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»
- شرحه تحت الحقل في المحرّر: عريضة (1600×900 فأكبر)؛ بدونها تظهر ألوان الثيم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:bg_image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/19-bg_image-panel.webp?v=76dded4653d4" alt="لوحة إعدادات (نسخة مطابقة) — صورة الخلفية" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:bg_image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/19-bg_image-result.webp?v=f681532b8b38" alt="معاينة — صورة الخلفية" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط (الافتراضي) · المعرّف `image_focus`
- **ماذا يفعل:** الجزء الظاهر من الصورة حين تُقص: الوسط أو الأعلى أو الأسفل أو اليمين أو اليسار.
- **متى تستعمله:** حين يُقص وجه أو عنوان في الصورة.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:image_focus:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-center-panel.webp?v=26d97b9255bb" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image_focus:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-center-result.webp?v=95e087b8b31b" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الوسط (الافتراضي)» · بصورة تجريبية |
| <img data-update-ref="01-coach-hero:image_focus:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-top-panel.webp?v=0e06224c6db2" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image_focus:1:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-top-result.webp?v=376b035ded40" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» · بصورة تجريبية |
| <img data-update-ref="01-coach-hero:image_focus:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-bottom-panel.webp?v=e8fb1b4fe4be" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image_focus:2:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-bottom-result.webp?v=341435f7414c" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأسفل» · بصورة تجريبية |
| <img data-update-ref="01-coach-hero:image_focus:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-right-panel.webp?v=03d312190456" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image_focus:3:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-right-result.webp?v=eed203db6a30" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» · بصورة تجريبية |
| <img data-update-ref="01-coach-hero:image_focus:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-left-panel.webp?v=2ff264570c32" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:image_focus:4:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/20-image_focus-left-result.webp?v=6366f6e7e827" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» · بصورة تجريبية |

### «قوة طبقة اللون فوق الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `bg_overlay`
- **ماذا يفعل:** قوة طبقة اللون فوق صورة الخلفية: خفيفة أو متوسطة أو قوية.
- **متى تستعمله:** «قوية» للصور الفاتحة حتى تبقى النصوص البيضاء مقروءة.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»
- شرحه تحت الحقل في المحرّر: «قوية» للصور الفاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:bg_overlay:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/21-bg_overlay-light-panel.webp?v=99cd90b07d20" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:bg_overlay:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/21-bg_overlay-light-result.webp?v=b6af8ccbbde0" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «خفيفة» |
| <img data-update-ref="01-coach-hero:bg_overlay:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/21-bg_overlay-medium-panel.webp?v=ad2fe8145ab2" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:bg_overlay:1:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/21-bg_overlay-medium-result.webp?v=9dad86348baf" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img data-update-ref="01-coach-hero:bg_overlay:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/21-bg_overlay-strong-panel.webp?v=267664982e83" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:bg_overlay:2:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/21-bg_overlay-strong-result.webp?v=1a10b398e8dd" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «قوية» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ، أو فاتح بنصوص داكنة.
- **متى تستعمله:** اختر ما يناسب هوية متجرك.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: «فاتح» تدرّج فاتح بنصوص داكنة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:fx_palette:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-theme-panel.webp?v=c02cf448a931" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_palette:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-theme-result.webp?v=1dfff7d9fc13" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ألوان الثيم» |
| <img data-update-ref="01-coach-hero:fx_palette:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-night-panel.webp?v=41974cd48ab6" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_palette:1:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-night-result.webp?v=e0a184164275" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ليلي» |
| <img data-update-ref="01-coach-hero:fx_palette:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-warm-panel.webp?v=bd68da92b722" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_palette:2:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-warm-result.webp?v=04d1ea26ecea" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «دافئ» |
| <img data-update-ref="01-coach-hero:fx_palette:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-light-panel.webp?v=769b02884a7f" alt="لوحة إعدادات (نسخة مطابقة) — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_palette:3:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/22-fx_palette-light-result.webp?v=1b2468793900" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «فاتح» |

### «الحركة على الجوال أيضاً»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_phone`
- **ماذا يفعل:** تشغيل الخلفية المتحركة على الجوال أيضاً.
- **متى تستعمله:** إن كانت الحركة جزءاً مهماً من هويتك.
- **حين يكون فارغاً:** مطفأ (الافتراضي): ثابتة على الجوال، فالصفحة أخف.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: مطفأة: ثابتة على الجوال، فالصفحة أخف.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:fx_phone:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/23-fx_phone-panel.webp?v=1588c01a47a0" alt="لوحة إعدادات (نسخة مطابقة) — الحركة على الجوال أيضاً" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_phone:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/23-fx_phone-on-result.webp?v=7b77df537247" alt="معاينة — الحركة على الجوال أيضاً" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.
- **متى تستعمله:** «هادئة» لمتجر هادئ الطابع.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:fx_speed:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/24-fx_speed-slow-panel.webp?v=4a334e93f367" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_speed:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/24-fx_speed-slow-result.webp?v=9bf4f4d0b598" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «هادئة» |
| <img data-update-ref="01-coach-hero:fx_speed:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/24-fx_speed-normal-panel.webp?v=a41c0367b20c" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_speed:1:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/24-fx_speed-normal-result.webp?v=d4833821c8ab" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img data-update-ref="01-coach-hero:fx_speed:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/24-fx_speed-fast-panel.webp?v=9615fd61f6da" alt="لوحة إعدادات (نسخة مطابقة) — سرعة الحركة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_speed:2:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/24-fx_speed-fast-result.webp?v=9b8db76b7f43" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «أسرع» |

### «يتبع مؤشر الفأرة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `fx_mouse`
- **ماذا يفعل:** ضوء خفيف في الخلفية المتحركة يتبع الفأرة على الكمبيوتر.
- **متى تستعمله:** اتركه مفعّلاً لتفاعل أوضح.
- **حين يكون فارغاً:** مطفأ: الحركة وحدها بلا ضوء يتبع الفأرة.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: ضوء خفيف على الحاسوب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:fx_mouse:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/25-fx_mouse-panel.webp?v=75ecae5f7124" alt="لوحة إعدادات (نسخة مطابقة) — يتبع مؤشر الفأرة" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_mouse:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/25-fx_mouse-off-result.webp?v=034e4239e2d1" alt="معاينة — يتبع مؤشر الفأرة" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «صورة خلفية ثابتة (اختيارية)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `fx_poster`
- **ماذا يفعل:** صورة ثابتة تحت الخلفية المتحركة، تظهر على الجوال وحين تتوقف الحركة.
- **متى تستعمله:** إن أردت صورة بدل الألوان الثابتة على الجوال.
- **حين يكون فارغاً:** بدونها تثبت الألوان على الجوال.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: تحت الحركة وعلى الجوال؛ بدونها تثبت الألوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:fx_poster:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/26-fx_poster-panel.webp?v=ac437f12fb67" alt="لوحة إعدادات (نسخة مطابقة) — صورة خلفية ثابتة (اختيارية)" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:fx_poster:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/26-fx_poster-result.webp?v=86fd3d3dae37" alt="معاينة — صورة خلفية ثابتة (اختيارية)" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-coach-hero:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/27-custom_classes-panel.webp?v=42e1ae969ff9" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="01-coach-hero:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/01-coach-hero/27-custom_classes-result.webp?v=a588bae93826" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[البيانات الافتراضية]
الأرقام والتقييمات والآراء الافتراضية أمثلة، تُعدَّل قبل النشر.
:::
