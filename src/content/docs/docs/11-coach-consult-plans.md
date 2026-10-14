---
title: "استشارات · باقات الجلسات الفردية"
description: "دليل ثيم كوتش 1.76.1 — استشارات · باقات الجلسات الفردية"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Consultations · One-to-one plans* · مساره `home.coach-consult-plans`

**ما يعرضه:** مبدّل بين حتى ثلاث باقات استشارة، لكل باقة منتج في سلة يُقرأ منه السعر، وزر يضيفها للسلة أو يحجز موعدها.

**متى تضيفه:** لبيع الجلسات الفردية بباقات مختلفة.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-desktop.webp" alt="معاينة — استشارات · باقات الجلسات الفردية" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-mobile.webp" alt="معاينة — استشارات · باقات الجلسات الفردية" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

مبدّل بين حتى ثلاث باقات استشارة. لكل باقة منتج في سلة يُقرأ منه السعر. منتج «خدمة» أو منتج رقمي يُضاف للسلة من زر الباقة، بلا تقويم مواعيد: تتواصل مع العميل بعد الشراء لتنسيق الموعد. أما منتج حجز المواعيد فلا يُضاف للسلة: زر باقته «احجز جلستك» يفتح صفحة المنتج ليختار العميل يومه ووقته في خطوة الحجز في سلة.

- **الباقات:** لكل باقة «منتج الباقة» و«اسم الباقة» (فارغاً يُستخدم اسم المنتج) و«سطر تحت الاسم» و«ملاحظة تحت السعر» و«وسم بجانب الاسم (اختياري)» و«المزايا (سطر لكل ميزة)». الباقة بلا منتج لا تظهر للزوار، والقسم لا يظهر لهم ما لم تكن فيه باقة واحدة على الأقل لها منتج.
- **العرض:** «طريقة عرض الباقات»: «تبويبات فوق بطاقة الباقة» (الافتراضي) أو «اختيارات: قائمة باقات بسعر كل منها». «الباقة المختارة عند التحميل» (الافتراضي الباقة ٢). و«صورة جانبية» (٨٠٠×٦٠٠ بكسل تقريباً) مع «مزايا مختصرة فوق الصورة» حتى ٣.
- **نصيحة:** زر الهيدر الافتراضي «احجز استشارة» يقود إلى هذا القسم، فأبقِه في الرئيسية أو غيّر رابط الزر.

</details>

## الإعدادات بترتيبها في اللوحة

### «طريقة عرض الباقات»

- **النوع:** قائمة منسدلة · **الافتراضي:** تبويبات فوق بطاقة الباقة · المعرّف `layout`
- **ماذا يفعل:** طريقة عرض الباقات: تبويبات فوق بطاقة الباقة، أو اختيارات: الباقات معاً بأسعارها ثم تفاصيل المختارة.
- **متى تستعمله:** «اختيارات» ليقارن الزائر الأسعار من أول نظرة.
- شرحه تحت الحقل في المحرّر: الاختيارات: الباقات معاً بأسعارها، ثم تفاصيل المختارة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/01-layout-tabs-panel.webp" alt="لوحة إعدادات — طريقة عرض الباقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-desktop.webp" alt="معاينة — طريقة عرض الباقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «تبويبات فوق بطاقة الباقة» |
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/01-layout-choices-panel.webp" alt="لوحة إعدادات — طريقة عرض الباقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/01-layout-choices-result.webp" alt="معاينة — طريقة عرض الباقات" loading="lazy" decoding="async"/> | «اختيارات: قائمة باقات بسعر كل منها» |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** الاستشارات الفردية · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/02-eyebrow-panel.webp" alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/02-eyebrow-result.webp" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسة استشارية [[فردية معي]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/03-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/03-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** اختر الباقة التي تناسبك وأضفها للسلة، وسأتواصل معك لتنسيق الموعد بعد الشراء. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/04-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/04-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «منتج الباقة»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `plan1_product`
- **ماذا يفعل:** منتج الباقة الأولى: منه السعر. منتج «خدمة» أو رقمي يُضاف للسلة وتنسّق الموعد بعده، ومنتج «حجز مواعيد» يحجز فيه العميل وقته.
- **متى تستعمله:** دائماً: اختر منتج الباقة من سلة.
- **حين يكون فارغاً:** بدونه لا تظهر الباقة.
- شرحه تحت الحقل في المحرّر: منه السعر. «خدمة» أو رقمي: للسلة وتنسّق الموعد؛ «حجز مواعيد»: يحجز العميل وقته. بدونه لا تظهر الباقة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/05-plan1_product-panel.webp" alt="لوحة إعدادات — منتج الباقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-desktop.webp" alt="معاينة — منتج الباقة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «اسم الباقة»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسة مراجعة · المعرّف `plan1_name`
- **ماذا يفعل:** اسم الباقة في التبويب والبطاقة.
- **متى تستعمله:** اسم قصير يميّزها.
- **حين يكون فارغاً:** فارغاً يظهر اسم المنتج.
- شرحه تحت الحقل في المحرّر: فارغاً يُستخدم اسم المنتج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/06-plan1_name-panel.webp" alt="لوحة إعدادات — اسم الباقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/06-plan1_name-result.webp" alt="معاينة — اسم الباقة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «سطر تحت الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسة واحدة · ٤٥ دقيقة · المعرّف `plan1_subtitle`
- **ماذا يفعل:** سطر تحت الاسم، مثل «جلسة واحدة · ٤٥ دقيقة».
- **متى تستعمله:** لعدد الجلسات ومدتها.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-panel.webp" alt="لوحة إعدادات — سطر تحت الاسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — سطر تحت الاسم" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «ملاحظة تحت السعر»

- **النوع:** نص بسطر واحد · **الافتراضي:** للجلسة · المعرّف `plan1_note`
- **ماذا يفعل:** ملاحظة صغيرة تحت السعر، مثل «للجلسة».
- **متى تستعمله:** ليفهم الزائر على ماذا يدفع.
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/08-plan1_note-panel.webp" alt="لوحة إعدادات — ملاحظة تحت السعر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — ملاحظة تحت السعر" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «وسم بجانب الاسم (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `plan1_tag`
- **ماذا يفعل:** وسم بجانب الاسم، مثل «الأكثر طلباً».
- **متى تستعمله:** لباقة تريد إبرازها.
- **حين يكون فارغاً:** فارغاً (الافتراضي) لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/09-plan1_tag-panel.webp" alt="لوحة إعدادات — وسم بجانب الاسم (اختياري)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/09-plan1_tag-result.webp" alt="معاينة — وسم بجانب الاسم (اختياري)" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «المزايا (سطر لكل ميزة)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** مراجعة تصميم واحد أو ملف أعمال / ملاحظات مكتوبة بعد الجلسة / تسجيل الجلسة لمدة ٣٠ يوماً / اجتماع مرئي عبر زووم · المعرّف `plan1_features`
- **ماذا يفعل:** مزايا الباقة، ميزة في كل سطر.
- **متى تستعمله:** لما يحصل عليه العميل.
- **حين يكون فارغاً:** فارغة لا تظهر قائمة المزايا.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/10-plan1_features-panel.webp" alt="لوحة إعدادات — المزايا (سطر لكل ميزة)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — المزايا (سطر لكل ميزة)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «منتج الباقة»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `plan2_product`
- **ماذا يفعل:** منتج الباقة الثانية، كالأولى.
- **متى تستعمله:** دائماً إن أردت باقة ثانية.
- **حين يكون فارغاً:** بدونه لا تظهر الباقة.
- شرحه تحت الحقل في المحرّر: كالباقة الأولى؛ بدونه لا تظهر الباقة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/11-plan2_product-panel.webp" alt="لوحة إعدادات — منتج الباقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-desktop.webp" alt="معاينة — منتج الباقة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «اسم الباقة»

- **النوع:** نص بسطر واحد · **الافتراضي:** باقة التطوير · المعرّف `plan2_name`
- **ماذا يفعل:** اسم الباقة الثانية.
- **متى تستعمله:** اسم قصير يميّزها.
- **حين يكون فارغاً:** فارغاً يظهر اسم المنتج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/12-plan2_name-panel.webp" alt="لوحة إعدادات — اسم الباقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/12-plan2_name-result.webp" alt="معاينة — اسم الباقة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «سطر تحت الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٣ جلسات · ٦٠ دقيقة لكل جلسة · المعرّف `plan2_subtitle`
- **ماذا يفعل:** سطر تحت اسم الباقة الثانية.
- **متى تستعمله:** لعدد الجلسات ومدتها.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/13-plan2_subtitle-panel.webp" alt="لوحة إعدادات — سطر تحت الاسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/13-plan2_subtitle-result.webp" alt="معاينة — سطر تحت الاسم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «ملاحظة تحت السعر»

- **النوع:** نص بسطر واحد · **الافتراضي:** للباقة كاملة · المعرّف `plan2_note`
- **ماذا يفعل:** ملاحظة تحت سعر الباقة الثانية.
- **متى تستعمله:** مثل «للباقة كاملة».
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/14-plan2_note-panel.webp" alt="لوحة إعدادات — ملاحظة تحت السعر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/14-plan2_note-result.webp" alt="معاينة — ملاحظة تحت السعر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «وسم بجانب الاسم (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** الأكثر طلباً · المعرّف `plan2_tag`
- **ماذا يفعل:** وسم بجانب اسم الباقة الثانية.
- **متى تستعمله:** الافتراضي «الأكثر طلباً».
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/15-plan2_tag-panel.webp" alt="لوحة إعدادات — وسم بجانب الاسم (اختياري)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/15-plan2_tag-result.webp" alt="معاينة — وسم بجانب الاسم (اختياري)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المزايا (سطر لكل ميزة)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** خطة تطوير مخصصة لمستواك / مراجعة ٣ مشاريع تصميم / تسجيلات الجلسات وملخصاتها / دعم عبر الرسائل بين الجلسات / قوالب وأوراق عمل جاهزة هدية / شهادة إتمام بعد الجلسة الثالثة · المعرّف `plan2_features`
- **ماذا يفعل:** مزايا الباقة الثانية، ميزة في كل سطر.
- **متى تستعمله:** لما يحصل عليه العميل.
- **حين يكون فارغاً:** فارغة لا تظهر القائمة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/16-plan2_features-panel.webp" alt="لوحة إعدادات — المزايا (سطر لكل ميزة)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/16-plan2_features-result.webp" alt="معاينة — المزايا (سطر لكل ميزة)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «منتج الباقة»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `plan3_product`
- **ماذا يفعل:** منتج الباقة الثالثة، كالأولى.
- **متى تستعمله:** إن أردت باقة ثالثة.
- **حين يكون فارغاً:** بدونه لا تظهر الباقة.
- شرحه تحت الحقل في المحرّر: كالباقة الأولى؛ بدونه لا تظهر الباقة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/17-plan3_product-panel.webp" alt="لوحة إعدادات — منتج الباقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-desktop.webp" alt="معاينة — منتج الباقة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «اسم الباقة»

- **النوع:** نص بسطر واحد · **الافتراضي:** الإرشاد الشهري · المعرّف `plan3_name`
- **ماذا يفعل:** اسم الباقة الثالثة.
- **متى تستعمله:** اسم قصير يميّزها.
- **حين يكون فارغاً:** فارغاً يظهر اسم المنتج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/18-plan3_name-panel.webp" alt="لوحة إعدادات — اسم الباقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/18-plan3_name-result.webp" alt="معاينة — اسم الباقة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «سطر تحت الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٤ جلسات خلال شهر + متابعة يومية · المعرّف `plan3_subtitle`
- **ماذا يفعل:** سطر تحت اسم الباقة الثالثة.
- **متى تستعمله:** لعدد الجلسات ومدتها.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/19-plan3_subtitle-panel.webp" alt="لوحة إعدادات — سطر تحت الاسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — سطر تحت الاسم" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «ملاحظة تحت السعر»

- **النوع:** نص بسطر واحد · **الافتراضي:** شهرياً · المعرّف `plan3_note`
- **ماذا يفعل:** ملاحظة تحت سعر الباقة الثالثة.
- **متى تستعمله:** مثل «شهرياً».
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/20-plan3_note-panel.webp" alt="لوحة إعدادات — ملاحظة تحت السعر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — ملاحظة تحت السعر" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «وسم بجانب الاسم (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `plan3_tag`
- **ماذا يفعل:** وسم بجانب اسم الباقة الثالثة.
- **متى تستعمله:** لباقة تريد إبرازها.
- **حين يكون فارغاً:** فارغاً (الافتراضي) لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/21-plan3_tag-panel.webp" alt="لوحة إعدادات — وسم بجانب الاسم (اختياري)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — وسم بجانب الاسم (اختياري)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «المزايا (سطر لكل ميزة)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** ٤ جلسات إرشاد أسبوعية / مراجعة غير محدودة للتصاميم / بناء ملف أعمال احترافي / أولوية الرد خلال ٢٤ ساعة / شهادة إتمام برنامج الإرشاد · المعرّف `plan3_features`
- **ماذا يفعل:** مزايا الباقة الثالثة، ميزة في كل سطر.
- **متى تستعمله:** لما يحصل عليه العميل.
- **حين يكون فارغاً:** فارغة لا تظهر القائمة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/22-plan3_features-panel.webp" alt="لوحة إعدادات — المزايا (سطر لكل ميزة)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/07-plan1_subtitle-result.webp" alt="معاينة — المزايا (سطر لكل ميزة)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «صورة جانبية»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة جانبية من جلسة، نحو ٨٠٠×٦٠٠.
- **متى تستعمله:** صورة لك مع عميل أو في جلسة.
- **حين يكون فارغاً:** بدونها مساحة بلون الثيم بنقش خفيف.
- شرحه تحت الحقل في المحرّر: من جلسة نحو ٨٠٠×٦٠٠؛ بدونها نقش خفيف.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/23-image-panel.webp" alt="لوحة إعدادات — صورة جانبية" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/23-image-result.webp" alt="معاينة — صورة جانبية" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «مزايا مختصرة فوق الصورة»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `perks`
- **ماذا يفعل:** مزايا مختصرة فوق الصورة الجانبية، بأيقونة لكل ميزة.
- **متى تستعمله:** لما يميّز جلساتك كلها: عن بعد، تسجيل، متابعة.
- **حين يكون فارغاً:** بلا عناصر لا تظهر. والعنصر بلا نص لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/24-perks-panel.webp" alt="لوحة إعدادات — مزايا مختصرة فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/24-perks-result.webp" alt="معاينة — مزايا مختصرة فوق الصورة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «الأيقونة»

- **النوع:** أيقونة · **الافتراضي:** sicon-check · المعرّف `perks.icon`
- **ماذا يفعل:** أيقونة الميزة.
- **حين يكون فارغاً:** بدونها يظهر النص وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/24-perks-icon-panel.webp" alt="لوحة إعدادات — مزايا مختصرة فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/24-perks-result.webp" alt="معاينة — مزايا مختصرة فوق الصورة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «النص»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `perks.text`
- **ماذا يفعل:** نص الميزة.
- **حين يكون فارغاً:** العنصر بلا نص لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/24-perks-text-panel.webp" alt="لوحة إعدادات — مزايا مختصرة فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/24-perks-result.webp" alt="معاينة — مزايا مختصرة فوق الصورة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر الإضافة للسلة في بطاقة الباقة.
- **متى تستعمله:** إن أردت نصاً مثل «احجز الآن».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/25-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/00-desktop.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «الباقة المختارة عند التحميل»

- **النوع:** قائمة منسدلة · **الافتراضي:** الباقة ٢ · المعرّف `default_plan`
- **ماذا يفعل:** الباقة المختارة حين تُفتح الصفحة.
- **متى تستعمله:** اختر الباقة التي تريد بيعها أكثر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/26-default_plan-1-panel.webp" alt="لوحة إعدادات — الباقة المختارة عند التحميل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/26-default_plan-1-result.webp" alt="معاينة — الباقة المختارة عند التحميل" loading="lazy" decoding="async"/> | «الباقة ١» |
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/26-default_plan-2-panel.webp" alt="لوحة إعدادات — الباقة المختارة عند التحميل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/26-default_plan-2-result.webp" alt="معاينة — الباقة المختارة عند التحميل" loading="lazy" decoding="async"/> | «الباقة ٢» |
| <img src="/coach-docs/assets/sections/11-coach-consult-plans/26-default_plan-3-panel.webp" alt="لوحة إعدادات — الباقة المختارة عند التحميل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/11-coach-consult-plans/26-default_plan-3-result.webp" alt="معاينة — الباقة المختارة عند التحميل" loading="lazy" decoding="async"/> | «الباقة ٣» |


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
