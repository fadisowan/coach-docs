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
| <img src="/coach-docs/assets/sections/01-coach-hero/00-desktop.webp" alt="معاينة — واجهة · ترحيب المدرّب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/00-mobile.webp" alt="معاينة — واجهة · ترحيب المدرّب" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

ترحيب شخصي بصورتك داخل قوس: العنوان والنبذة، وزر برامجك وزر فيديو، وثلاثة أرقام، وبطاقة تقييم، وبطاقة داكنة لبرنامجك الأكثر مبيعاً.

- **أهم الإعدادات:** «صورتك» طولية (٨٠٠×١٠٠٠ بكسل تقريباً)، والأفضل بخلفية شفافة أو فاتحة. «البرنامج في البطاقة الداكنة» يقرأ الاسم والسعر والرابط من المنتج؛ بدونه لا تظهر البطاقة. «رابط الفيديو» (YouTube أو Vimeo أو ملف MP4) يفتح في نافذة فوق الصفحة؛ فارغاً يختفي زر الفيديو.
- **الزر والحركة:** «رابط الزر الأساسي» فارغاً يأخذ الزائر إلى قسم «متجر · كل المنتجات بتبويبات»، أو إلى أول قسم يعرض منتجات إن لم يكن موجوداً. «حركة خفيفة للبطاقات» (مفعّلة): بطاقة التقييم تطفو ببطء، والبطاقة الداكنة تميل نحو مؤشر الفأرة على الحاسوب. الميل للحاسوب فقط، ولا حركة لمن فعّل «تقليل الحركة» أو أطفأ «التأثيرات المتحركة».
- **الخلفية:** «خلفية القسم»: «بدون خلفية (كما هو)» (الافتراضي)، أو «صورة بطبقة من لون الثيم» (تظهر «صورة الخلفية» و«قوة طبقة اللون فوق الصورة»)، أو «خلفية متحركة بالألوان» (معها «الحركة على الجوال أيضاً» و«يتبع مؤشر الفأرة» و«صورة خلفية ثابتة (اختيارية)» تظهر تحت الحركة وعلى الجوال). مع الصورة أو الحركة يصير القسم بعرض الشاشة بنصوص بيضاء.
- **نصيحة:** استبدل «سطر الترحيب» الافتراضي «أهلاً، أنا د. لمى.» باسمك، واكتب في «الأرقام تحت الأزرار» و«التقييم» أرقامك الحقيقية فقط، وعدّل «شارة التوفّر» أو امسحها.

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
| <img src="/coach-docs/assets/sections/01-coach-hero/01-badge-panel.webp" alt="لوحة إعدادات — شارة التوفّر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/01-badge-result.webp" alt="معاينة — شارة التوفّر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «سطر الترحيب»

- **النوع:** نص بسطر واحد · **الافتراضي:** أهلاً، أنا د. لمى. · المعرّف `greeting`
- **ماذا يفعل:** أول سطر في العنوان الكبير، بلون النص، مثل «أهلاً، أنا د. لمى».
- **متى تستعمله:** لتقديم نفسك باسمك.
- **حين يكون فارغاً:** فارغاً يبقى سطر «العنوان» وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/02-greeting-panel.webp" alt="لوحة إعدادات — سطر الترحيب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/02-greeting-result.webp" alt="معاينة — سطر الترحيب" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان (باللون الأساسي)»

- **النوع:** نص بسطر واحد · **الافتراضي:** أساعدك تصنع مستقبلك المهني · المعرّف `title`
- **ماذا يفعل:** بقية العنوان الكبير، باللون الأساسي، تحت سطر الترحيب.
- **متى تستعمله:** ما تساعد فيه متابعيك، في جملة.
- **حين يكون فارغاً:** فارغاً يبقى سطر الترحيب وحده. وإن فرغ الاثنان لا يظهر عنوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/03-title-panel.webp" alt="لوحة إعدادات — العنوان (باللون الأساسي)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/03-title-result.webp" alt="معاينة — العنوان (باللون الأساسي)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «النبذة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** مدرّبة معتمدة ساعدت أكثر من ١٢ ألف متعلّم على تطوير مهاراتهم عبر برامج مسجّلة، كتب، وموارد رقمية، وجلسات استشارية فردية. · المعرّف `description`
- **ماذا يفعل:** نبذة قصيرة عنك تحت العنوان.
- **متى تستعمله:** لخبرتك وما تقدّمه في سطرين.
- **حين يكون فارغاً:** فارغة باللغتين لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/04-description-panel.webp" alt="لوحة إعدادات — النبذة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/04-description-result.webp" alt="معاينة — النبذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «نص الزر الأساسي»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح برامجي · المعرّف `primary_label`
- **ماذا يفعل:** نص الزر الأساسي تحت النبذة.
- **متى تستعمله:** لأهم إجراء: تصفّح البرامج أو الحجز.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/05-primary_label-panel.webp" alt="لوحة إعدادات — نص الزر الأساسي" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/05-primary_label-result.webp" alt="معاينة — نص الزر الأساسي" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الأساسي»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `primary_link`
- **ماذا يفعل:** إلى أين يذهب الزر الأساسي، والضغط على صورتك أيضاً.
- **متى تستعمله:** لصفحة برنامجك أو تصنيف دوراتك.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات في الصفحة؛ وإن لم يوجد أي منهما يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم «متجر · كل المنتجات بتبويبات» إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/06-primary_link-panel.webp" alt="لوحة إعدادات — رابط الزر الأساسي" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/00-desktop.webp" alt="معاينة — رابط الزر الأساسي" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الفيديو»

- **النوع:** نص بسطر واحد · **الافتراضي:** شاهد رسالتي · المعرّف `video_label`
- **ماذا يفعل:** نص زر الفيديو بجانب الزر الأساسي، بأيقونة تشغيل.
- **متى تستعمله:** لرسالة ترحيب مصوّرة.
- **حين يكون فارغاً:** فارغاً لا يظهر زر الفيديو، حتى مع الرابط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/07-video_label-panel.webp" alt="لوحة إعدادات — نص زر الفيديو" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/00-desktop.webp" alt="معاينة — نص زر الفيديو" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الفيديو»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `video_url`
- **ماذا يفعل:** رابط الفيديو الذي يفتحه الزر في نافذة: YouTube أو Vimeo أو ملف MP4.
- **متى تستعمله:** إن كان عندك فيديو تعريفي قصير.
- **حين يكون فارغاً:** فارغاً لا يظهر زر الفيديو.
- شرحه تحت الحقل في المحرّر: YouTube أو Vimeo أو MP4؛ فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/08-video_url-panel.webp" alt="لوحة إعدادات — رابط الفيديو" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/00-desktop.webp" alt="معاينة — رابط الفيديو" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «الأرقام تحت الأزرار»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `stats`
- **ماذا يفعل:** حتى ثلاثة أرقام تحت الأزرار، لكل رقم سطر وصف.
- **متى تستعمله:** لإنجازات تُقاس: عدد المتعلّمين، والدروس، والكتب.
- **حين يكون فارغاً:** بلا عناصر لا يظهر صف الأرقام. والعنصر بلا رقم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/09-stats-panel.webp" alt="لوحة إعدادات — الأرقام تحت الأزرار" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/09-stats-result.webp" alt="معاينة — الأرقام تحت الأزرار" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «الرقم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `stats.value`
- **ماذا يفعل:** الرقم بخط كبير، مثل «+١٢ ألف».
- **حين يكون فارغاً:** العنصر بلا رقم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/09-stats-value-panel.webp" alt="لوحة إعدادات — الأرقام تحت الأزرار" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/09-stats-result.webp" alt="معاينة — الأرقام تحت الأزرار" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «الوصف»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `stats.label`
- **ماذا يفعل:** سطر صغير تحت الرقم.
- **حين يكون فارغاً:** فارغاً يظهر الرقم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/09-stats-label-panel.webp" alt="لوحة إعدادات — الأرقام تحت الأزرار" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/09-stats-result.webp" alt="معاينة — الأرقام تحت الأزرار" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «التقييم»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٤٫٩ من ٥ · المعرّف `rating_value`
- **ماذا يفعل:** التقييم في بطاقة بيضاء بنجمة بجانب صورتك، مثل «٤٫٩ من ٥».
- **متى تستعمله:** إن كان لديك تقييم حقيقي تفخر به.
- **حين يكون فارغاً:** فارغاً تُخفى بطاقة التقييم كلها.
- شرحه تحت الحقل في المحرّر: فارغاً تُخفى بطاقة التقييم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/10-rating_value-panel.webp" alt="لوحة إعدادات — التقييم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/10-rating_value-result.webp" alt="معاينة — التقييم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «تحت التقييم»

- **النوع:** نص بسطر واحد · **الافتراضي:** +٣٬٤٠٠ تقييم · المعرّف `rating_label`
- **ماذا يفعل:** سطر تحت التقييم، مثل عدد التقييمات.
- **متى تستعمله:** ليعرف الزائر على كم تقييم بُني الرقم.
- **حين يكون فارغاً:** فارغاً يظهر التقييم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/11-rating_label-panel.webp" alt="لوحة إعدادات — تحت التقييم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/11-rating_label-result.webp" alt="معاينة — تحت التقييم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «البرنامج في البطاقة الداكنة»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `featured_product`
- **ماذا يفعل:** منتج يظهر في البطاقة الداكنة بجانب صورتك: اسمه وسعره من المنتج، والضغط عليها يفتحه.
- **متى تستعمله:** لبرنامجك الأكثر طلباً.
- **حين يكون فارغاً:** بدونه لا تظهر البطاقة عند الزوار، وفي المحرّر ملاحظة تطلب اختياره.
- شرحه تحت الحقل في المحرّر: الاسم والسعر من المنتج؛ بدونه لا تظهر البطاقة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/12-featured_product-panel.webp" alt="لوحة إعدادات — البرنامج في البطاقة الداكنة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/00-desktop.webp" alt="معاينة — البرنامج في البطاقة الداكنة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «السطر فوق اسم البرنامج»

- **النوع:** نص بسطر واحد · **الافتراضي:** البرنامج الأكثر طلباً · المعرّف `featured_label`
- **ماذا يفعل:** سطر صغير فوق اسم المنتج في البطاقة الداكنة.
- **متى تستعمله:** مثل «البرنامج الأكثر طلباً» أو «جديد».
- **حين يكون فارغاً:** فارغاً يظهر الاسم والسعر وحدهما.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/13-featured_label-panel.webp" alt="لوحة إعدادات — السطر فوق اسم البرنامج" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/13-featured_label-result.webp" alt="معاينة — السطر فوق اسم البرنامج" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «حركة خفيفة للبطاقات»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `motion`
- **ماذا يفعل:** بطاقة التقييم تطفو بهدوء، والبطاقة الداكنة تميل مع الفأرة على الكمبيوتر.
- **متى تستعمله:** اتركه مفعّلاً لواجهة حيّة.
- **حين يكون فارغاً:** مطفأ: البطاقتان ثابتتان.
- شرحه تحت الحقل في المحرّر: تطفو بطاقة التقييم، وتميل الداكنة مع الفأرة على الحاسوب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/14-motion-panel.webp" alt="لوحة إعدادات — حركة خفيفة للبطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/00-desktop.webp" alt="معاينة — حركة خفيفة للبطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «صورتك»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورتك داخل القوس، طولية نحو ٨٠٠×١٠٠٠ بخلفية شفافة أو فاتحة. الضغط عليها كالزر الأساسي.
- **متى تستعمله:** دائماً: صورة واضحة لك.
- **حين يكون فارغاً:** بدونها يبقى القوس بخطوط مائلة بلون الثيم.
- شرحه تحت الحقل في المحرّر: طولية نحو ٨٠٠×١٠٠٠ بخلفية شفافة أو فاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/15-image-panel.webp" alt="لوحة إعدادات — صورتك" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/15-image-result.webp" alt="معاينة — صورتك" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «التوقيع المرسوم بجانب الصورة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_signature`
- **ماذا يفعل:** خط يد مرسوم بجانب الصورة كأنه توقيع.
- **متى تستعمله:** للمسة شخصية؛ أطفئه إن تزاحم مع صورتك.
- **حين يكون فارغاً:** مطفأ: بلا توقيع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/16-show_signature-panel.webp" alt="لوحة إعدادات — التوقيع المرسوم بجانب الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/16-show_signature-off-result.webp" alt="معاينة — التوقيع المرسوم بجانب الصورة" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «خلفية القسم»

- **النوع:** قائمة منسدلة · **الافتراضي:** بدون خلفية (كما هو) · المعرّف `fx_background`
- **ماذا يفعل:** ما خلف الواجهة: بدون، أو صورة عليها طبقة من لون الثيم، أو خلفية متحركة بألوان الثيم. مع الصورة أو الحركة تمتد الخلفية بعرض الشاشة وتصير النصوص بيضاء.
- **متى تستعمله:** «صورة» لمكان تدريبك، و«متحركة» لواجهة لافتة.
- شرحه تحت الحقل في المحرّر: مع الصورة أو الحركة: بعرض الشاشة ونصوص بيضاء (داكنة مع «فاتح»).

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-none-panel.webp" alt="لوحة إعدادات — خلفية القسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-none-result.webp" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «بدون خلفية (كما هو)» |
| <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-image-panel.webp" alt="لوحة إعدادات — خلفية القسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-image-result.webp" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «صورة بطبقة من لون الثيم» |
| <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-motion-panel.webp" alt="لوحة إعدادات — خلفية القسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-motion-result.webp" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «خلفية متحركة بالألوان» |

### «صورة الخلفية»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `bg_image`
- **ماذا يفعل:** الصورة خلف الواجهة، عريضة (١٦٠٠×٩٠٠ فأكبر).
- **متى تستعمله:** صورة هادئة بلا تفاصيل كثيرة خلف النص.
- **حين يكون فارغاً:** بدونها تظهر ألوان الثيم.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»
- شرحه تحت الحقل في المحرّر: عريضة (1600×900 فأكبر)؛ بدونها تظهر ألوان الثيم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/18-bg_image-panel.webp" alt="لوحة إعدادات — صورة الخلفية" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/18-bg_image-result.webp" alt="معاينة — صورة الخلفية" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «قوة طبقة اللون فوق الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `bg_overlay`
- **ماذا يفعل:** قوة طبقة اللون فوق صورة الخلفية: خفيفة أو متوسطة أو قوية.
- **متى تستعمله:** «قوية» للصور الفاتحة حتى تبقى النصوص البيضاء مقروءة.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»
- شرحه تحت الحقل في المحرّر: «قوية» للصور الفاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/19-bg_overlay-light-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/19-bg_overlay-light-result.webp" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «خفيفة» |
| <img src="/coach-docs/assets/sections/01-coach-hero/19-bg_overlay-medium-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/19-bg_overlay-medium-result.webp" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img src="/coach-docs/assets/sections/01-coach-hero/19-bg_overlay-strong-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/19-bg_overlay-strong-result.webp" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «قوية» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ، أو فاتح بنصوص داكنة.
- **متى تستعمله:** اختر ما يناسب هوية متجرك.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: «فاتح» تدرّج فاتح بنصوص داكنة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-theme-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-theme-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ألوان الثيم» |
| <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-night-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-night-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ليلي» |
| <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-warm-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-warm-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «دافئ» |
| <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-light-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/20-fx_palette-light-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «فاتح» |

### «الحركة على الجوال أيضاً»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_phone`
- **ماذا يفعل:** تشغيل الخلفية المتحركة على الجوال أيضاً.
- **متى تستعمله:** إن كانت الحركة جزءاً مهماً من هويتك.
- **حين يكون فارغاً:** مطفأ (الافتراضي): ثابتة على الجوال، فالصفحة أخف.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: مطفأة: ثابتة على الجوال، فالصفحة أخف.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/21-fx_phone-panel.webp" alt="لوحة إعدادات — الحركة على الجوال أيضاً" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/21-fx_phone-on-result.webp" alt="معاينة — الحركة على الجوال أيضاً" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.
- **متى تستعمله:** «هادئة» لمتجر هادئ الطابع.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/22-fx_speed-slow-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/22-fx_speed-slow-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «هادئة» |
| <img src="/coach-docs/assets/sections/01-coach-hero/22-fx_speed-normal-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/17-fx_background-motion-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «متوسطة» |
| <img src="/coach-docs/assets/sections/01-coach-hero/22-fx_speed-fast-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/22-fx_speed-fast-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «أسرع» |

### «يتبع مؤشر الفأرة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `fx_mouse`
- **ماذا يفعل:** ضوء خفيف في الخلفية المتحركة يتبع الفأرة على الكمبيوتر.
- **متى تستعمله:** اتركه مفعّلاً لتفاعل أوضح.
- **حين يكون فارغاً:** مطفأ: الحركة وحدها بلا ضوء يتبع الفأرة.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: ضوء خفيف على الحاسوب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/23-fx_mouse-panel.webp" alt="لوحة إعدادات — يتبع مؤشر الفأرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/23-fx_mouse-off-result.webp" alt="معاينة — يتبع مؤشر الفأرة" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «صورة خلفية ثابتة (اختيارية)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `fx_poster`
- **ماذا يفعل:** صورة ثابتة تحت الخلفية المتحركة، تظهر على الجوال وحين تتوقف الحركة.
- **متى تستعمله:** إن أردت صورة بدل الألوان الثابتة على الجوال.
- **حين يكون فارغاً:** بدونها تثبت الألوان على الجوال.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «خلفية متحركة بالألوان»
- شرحه تحت الحقل في المحرّر: تحت الحركة وعلى الجوال؛ بدونها تثبت الألوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/01-coach-hero/24-fx_poster-panel.webp" alt="لوحة إعدادات — صورة خلفية ثابتة (اختيارية)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/01-coach-hero/21-fx_phone-on-result.webp" alt="معاينة — صورة خلفية ثابتة (اختيارية)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بصورة تجريبية |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
