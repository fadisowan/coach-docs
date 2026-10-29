---
title: "المدرّب · تعرّف عليّ"
description: "دليل ثيم كوتش 1.76.1 — المدرّب · تعرّف عليّ"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Coach · About me* · مساره `home.coach-about`

**ما يعرضه:** نبذتك مع شبكة صورتين ورقم خبرتك، وخط زمني لمحطات مسيرتك، وزر إلى صفحة «من أنا».

**متى تضيفه:** بعد الواجهة أو قبل المنتجات، ليعرفك الزائر قبل أن يشتري.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="07-coach-about:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/00-desktop.webp?v=42aa36677dd4" alt="معاينة — المدرّب · تعرّف عليّ" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/00-mobile.webp?v=03067fa2ad88" alt="معاينة — المدرّب · تعرّف عليّ" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

نبذتك مع شبكة صور ورقم خبرتك، وخط زمني لمحطات مسيرتك، وزر إلى صفحة مختارة.

- **الخبرة والصور:** «الصورة الكبيرة» أفقية أثناء التدريب (١٢٠٠×٥٤٠ بكسل تقريباً)، و«الصورة الصغيرة» (٦٠٠×٤٠٠ بكسل). «رقم الخبرة» فارغاً يُخفي بطاقة الخبرة.
- **الخط الزمني والزر:** «المحطات» حتى ٦، لكل محطة «السنة» و«العنوان» و«سطر تحته» و«محطة مميّزة (نقطة مشمشية)». آخر محطة تأخذ نقطة باللون الأساسي. «صفحة الزر»: «صفحة تعريفية» ثم الصفحة (مثل «من أنا»)؛ يظهر الزر متى اختيرت له صفحة.
- **خيارات إضافية:** «مركز الصورة» للصورة الكبيرة، و«جهة الصور على الحاسوب»: «بداية السطر (الافتراضي)» أو «نهاية السطر»؛ على التابلت والجوال تبقى الصور قبل النص.

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** تعرّف عليّ · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:eyebrow:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/01-eyebrow-panel.webp?v=5bf6b6f14580" alt="لوحة إعدادات (نسخة مطابقة) — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:eyebrow:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/01-eyebrow-result.webp?v=f9007f6b1ddb" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** بدأت من حيث أنت الآن، واليوم أشارك [[ما تعلّمته]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/02-title-panel.webp?v=e216ac3278c4" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/02-title-result.webp?v=61ea4dfda44d" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «النبذة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** بعد سنوات في إدارة المشاريع والتصميم، قررت أن أحوّل خبرتي إلى محتوى عملي يختصر الطريق على غيري. كل برنامج وكتاب هنا مبني على تجارب حقيقية. · المعرّف `text`
- **ماذا يفعل:** نبذتك تحت العنوان.
- **متى تستعمله:** قصتك باختصار: من أين بدأت ولماذا تدرّب.
- **حين يكون فارغاً:** فارغة باللغتين لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:text:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/03-text-panel.webp?v=b0f610eabb12" alt="لوحة إعدادات (نسخة مطابقة) — النبذة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:text:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/03-text-result.webp?v=c5ee00fd1bae" alt="معاينة — النبذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المحطات»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `timeline`
- **ماذا يفعل:** محطات مسيرتك بالترتيب على خط زمني: سنة وعنوان وسطر.
- **متى تستعمله:** لأهم ٣ إلى ٥ محطات.
- **حين يكون فارغاً:** بلا محطات لا يظهر الخط الزمني. والمحطة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:timeline:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-panel.webp?v=bb8026a86eac" alt="لوحة إعدادات (نسخة مطابقة) — المحطات" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:timeline:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-result.webp?v=0d8b7c9330cc" alt="معاينة — المحطات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «السنة»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `timeline.year`
- **ماذا يفعل:** السنة بجانب المحطة.
- **حين يكون فارغاً:** فارغة تظهر المحطة بلا سنة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:timeline:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-year-panel.webp?v=245af1f8737f" alt="لوحة إعدادات (نسخة مطابقة) — المحطات" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:timeline:1:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-result.webp?v=0d8b7c9330cc" alt="معاينة — المحطات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `timeline.title`
- **ماذا يفعل:** عنوان المحطة.
- **حين يكون فارغاً:** المحطة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:timeline:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-title-panel.webp?v=1acbce39bdc1" alt="لوحة إعدادات (نسخة مطابقة) — المحطات" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:timeline:2:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-result.webp?v=0d8b7c9330cc" alt="معاينة — المحطات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «سطر تحته»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `timeline.description`
- **ماذا يفعل:** سطر قصير تحت عنوان المحطة.
- **حين يكون فارغاً:** فارغاً يظهر العنوان وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:timeline:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-description-panel.webp?v=ee3259033eac" alt="لوحة إعدادات (نسخة مطابقة) — المحطات" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:timeline:3:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-result.webp?v=0d8b7c9330cc" alt="معاينة — المحطات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «محطة مميّزة (نقطة مشمشية)»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `timeline.highlight`
- **ماذا يفعل:** نقطة المحطة بالمشمشي لتبرز بين غيرها. آخر محطة لها شكلها الخاص دائماً.
- **حين يكون فارغاً:** مطفأ: نقطة عادية.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:timeline:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-highlight-panel.webp?v=f5d1fc1f3f34" alt="لوحة إعدادات (نسخة مطابقة) — المحطات" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:timeline:4:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/04-timeline-result.webp?v=0d8b7c9330cc" alt="معاينة — المحطات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «رقم الخبرة»

- **النوع:** نص بسطر واحد · **الافتراضي:** +١٢ · المعرّف `experience_value`
- **ماذا يفعل:** رقم في بطاقة بين الصور، مثل «+١٢».
- **متى تستعمله:** لسنوات خبرتك أو عدد متدرّبيك.
- **حين يكون فارغاً:** فارغاً تحلّ محلّ البطاقة مساحة ملوّنة بخطوط مائلة.
- شرحه تحت الحقل في المحرّر: فارغاً تُخفى بطاقة الخبرة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:experience_value:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/05-experience_value-panel.webp?v=3a4af146393f" alt="لوحة إعدادات (نسخة مطابقة) — رقم الخبرة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:experience_value:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/05-experience_value-result.webp?v=423f9f5c21ad" alt="معاينة — رقم الخبرة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «تحت الرقم»

- **النوع:** نص بسطر واحد · **الافتراضي:** سنة خبرة في التدريب والاستشارات · المعرّف `experience_label`
- **ماذا يفعل:** سطر تحت رقم الخبرة.
- **متى تستعمله:** ليقول ماذا يعني الرقم.
- **حين يكون فارغاً:** فارغاً يظهر الرقم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:experience_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/06-experience_label-panel.webp?v=094350662250" alt="لوحة إعدادات (نسخة مطابقة) — تحت الرقم" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:experience_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/06-experience_label-result.webp?v=68be9254a01e" alt="معاينة — تحت الرقم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الصورة الكبيرة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image_main`
- **ماذا يفعل:** الصورة الكبيرة في الشبكة، أفقية (١٢٠٠×٥٤٠ تقريباً).
- **متى تستعمله:** صورة لك أثناء التدريب.
- **حين يكون فارغاً:** بدونها مساحة ملوّنة بخطوط مائلة.
- شرحه تحت الحقل في المحرّر: أفقية (١٢٠٠×٥٤٠ تقريباً).

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:image_main:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/07-image_main-panel.webp?v=60f86d383065" alt="لوحة إعدادات (نسخة مطابقة) — الصورة الكبيرة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_main:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/07-image_main-result.webp?v=de0de93a8761" alt="معاينة — الصورة الكبيرة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط (الافتراضي) · المعرّف `image_focus`
- **ماذا يفعل:** الجزء الظاهر من الصورة حين تُقص: الوسط أو الأعلى أو الأسفل أو اليمين أو اليسار.
- **متى تستعمله:** حين يُقص وجه أو عنوان في الصورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:image_focus:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-center-panel.webp?v=9ca617b445e2" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_focus:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/07-image_main-result.webp?v=de0de93a8761" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «الوسط (الافتراضي)» · بصورة تجريبية |
| <img data-update-ref="07-coach-about:image_focus:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-top-panel.webp?v=3a7778999dbe" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_focus:1:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-top-result.webp?v=3253ece84dfc" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» · بصورة تجريبية |
| <img data-update-ref="07-coach-about:image_focus:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-bottom-panel.webp?v=e72a104d6035" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_focus:2:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-bottom-result.webp?v=e54b68492c8e" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأسفل» · بصورة تجريبية |
| <img data-update-ref="07-coach-about:image_focus:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-right-panel.webp?v=9457d6aab4bc" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_focus:3:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-right-result.webp?v=3d84f94ce012" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» · بصورة تجريبية |
| <img data-update-ref="07-coach-about:image_focus:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-left-panel.webp?v=5e05d09e413f" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_focus:4:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/08-image_focus-left-result.webp?v=5d60888ebadc" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» · بصورة تجريبية |

### «الصورة الصغيرة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image_secondary`
- **ماذا يفعل:** الصورة الصغيرة في الشبكة (٦٠٠×٤٠٠ تقريباً).
- **متى تستعمله:** صورة ثانية: كتابك أو جلسة.
- **حين يكون فارغاً:** بدونها مساحة ملوّنة بخطوط مائلة.
- شرحه تحت الحقل في المحرّر: ٦٠٠×٤٠٠ تقريباً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:image_secondary:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/09-image_secondary-panel.webp?v=672447ac7509" alt="لوحة إعدادات (نسخة مطابقة) — الصورة الصغيرة" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:image_secondary:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/09-image_secondary-result.webp?v=b620e9fd00da" alt="معاينة — الصورة الصغيرة" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «جهة الصور على الحاسوب»

- **النوع:** قائمة منسدلة · **الافتراضي:** بداية السطر (الافتراضي) · المعرّف `media_side`
- **ماذا يفعل:** جهة الصور بجانب النص على الحاسوب: بداية السطر أو نهايته. على التابلت والجوال تبقى قبل النص.
- **متى تستعمله:** لتنويع الإيقاع بعد قسم صورته في الجهة نفسها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:media_side:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/10-media_side-start-panel.webp?v=bed970871c1a" alt="لوحة إعدادات (نسخة مطابقة) — جهة الصور على الحاسوب" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:media_side:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/10-media_side-start-result.webp?v=b9ee6caccd64" alt="معاينة — جهة الصور على الحاسوب" loading="lazy" decoding="async"/> | «بداية السطر (الافتراضي)» |
| <img data-update-ref="07-coach-about:media_side:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/10-media_side-end-panel.webp?v=7a66a892ae81" alt="لوحة إعدادات (نسخة مطابقة) — جهة الصور على الحاسوب" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:media_side:1:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/10-media_side-end-result.webp?v=a1e61c8fb5cb" alt="معاينة — جهة الصور على الحاسوب" loading="lazy" decoding="async"/> | «نهاية السطر» |

### «نص الزر»

- **النوع:** نص بسطر واحد · **الافتراضي:** اقرأ قصتي كاملة · المعرّف `button_label`
- **ماذا يفعل:** نص الزر تحت الخط الزمني.
- **متى تستعمله:** لدعوة الزائر لقراءة قصتك كاملة.
- **حين يكون فارغاً:** فارغاً لا يظهر الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:button_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/11-button_label-panel.webp?v=1e0cb94a8549" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:button_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/11-button_label-result.webp?v=58f3a0fa97bd" alt="معاينة — نص الزر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «صفحة الزر»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `button_link`
- **ماذا يفعل:** الصفحة التي يفتحها الزر، مثل صفحة تعريفية «من أنا».
- **متى تستعمله:** اختر صفحتك التعريفية من سلة.
- **حين يكون فارغاً:** بدونه لا يظهر الزر للزوار، وفي المحرّر ملاحظة تطلب اختيار الصفحة.
- شرحه تحت الحقل في المحرّر: «صفحة تعريفية» مثل «من أنا»؛ بدونه يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:button_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/12-button_link-panel.webp?v=3fadf77252cc" alt="لوحة إعدادات (نسخة مطابقة) — صفحة الزر" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:button_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/00-desktop.webp?v=42aa36677dd4" alt="معاينة — صفحة الزر" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «تثبيت الجزء الجانبي أثناء التمرير»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `sticky_side`
- **ماذا يفعل:** شبكة الصور تبقى ظاهرة بجانب النص أثناء التمرير، على الشاشات العريضة.
- **متى تستعمله:** إن كان الخط الزمني طويلاً.
- **حين يكون فارغاً:** مطفأ (الافتراضي): تتحرك الصور مع الصفحة.
- شرحه تحت الحقل في المحرّر: على الشاشات العريضة فقط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:sticky_side:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/13-sticky_side-panel.webp?v=7e921f2d66da" alt="لوحة إعدادات (نسخة مطابقة) — تثبيت الجزء الجانبي أثناء التمرير" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:sticky_side:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/13-sticky_side-on-result.webp?v=aa37df039e61" alt="معاينة — تثبيت الجزء الجانبي أثناء التمرير" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="07-coach-about:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/14-custom_classes-panel.webp?v=bf86649e70f9" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="07-coach-about:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/07-coach-about/14-custom_classes-result.webp?v=00e5d31087b0" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[البيانات الافتراضية]
الأرقام والتقييمات والآراء الافتراضية أمثلة، تُعدَّل قبل النشر.
:::
