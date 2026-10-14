---
title: "متجر · كل المنتجات بتبويبات"
description: "دليل ثيم كوتش 1.76.1 — متجر · كل المنتجات بتبويبات"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Shop · Everything in tabs* · مساره `home.coach-shop`

**ما يعرضه:** شبكة منتجاتك بتبويبات حسب النوع (دورات، كتب، منتجات رقمية…) من تصنيفات سلة، ببطاقة تناسب كل نوع.

**متى تضيفه:** القسم الرئيسي لعرض كل ما تبيعه في مكان واحد.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — متجر · كل المنتجات بتبويبات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-mobile.webp" alt="معاينة — متجر · كل المنتجات بتبويبات" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

شبكة منتجاتك بتبويبات حسب النوع، ببطاقة تناسب كل نوع: غلاف كتاب، أو صورة دورة، أو ملف تحميل. المنتجات من تصنيفات سلة مباشرة.

- **التبويبات:** حتى ٤ تبويبات؛ الافتراضية «الدورات» و«الكتب» و«المنتجات الرقمية». لكل تبويب «اسم التبويب» و«التصنيفات» و«شكل البطاقات» («تلقائي (حسب نوع المنتج)» أو دورة أو كتاب أو منتج رقمي أو استشارة). كل منتج جديد في التصنيفات المختارة يظهر في التبويب وحده.
- **الربط التلقائي:** تبويب بلا تصنيفات يُربط بتصنيف متجرك الذي يحمل الاسم نفسه، ولا يهم وجود «ال». والتبويب الذي لا يجد تصنيفاً لا يظهر. ويسمّي لك المحرّر في ملاحظة كل تبويب لم تختر له تصنيفات.
- **الشبكة:** «إظهار تبويب «الكل» أولاً» يعرض كل منتجات المتجر، الأحدث أولاً، باسم من «اسم تبويب «الكل»». «عدد المنتجات» لكل تبويب من ٢ إلى ١٢ (الافتراضي ٦). «عدد المنتجات بجانب اسم كل تبويب» مفعّل.
- **البطاقات والحركة:** «شكل البطاقات في هذا القسم»: «كما في إعدادات الثيم (٦ · بطاقة المنتج)» (الافتراضي) أو «عادية لكل المنتجات». و«حركة تبديل التبويب»: «بلا حركة» (الافتراضي) أو «دخول تباعاً» أو «إعادة ترتيب سلسة».

</details>

## الإعدادات بترتيبها في اللوحة

### «شكل البطاقات في هذا القسم»

- **النوع:** قائمة منسدلة · **الافتراضي:** كما في إعدادات الثيم (٧ · بطاقة المنتج) · المعرّف `card_style`
- **ماذا يفعل:** شكل البطاقات: كما في «تخصيص الثيم ← ٦ · بطاقة المنتج»، أو عادية لكل المنتجات (صورة كاملة والسعر بجانب الزر).
- **متى تستعمله:** «عادية» إن أردت كل البطاقات بشكل واحد هنا.
- شرحه تحت الحقل في المحرّر: عادية: صورة كاملة والسعر بجانب الزر، لكل الأنواع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/01-card_style-theme-panel.webp" alt="لوحة إعدادات — شكل البطاقات في هذا القسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — شكل البطاقات في هذا القسم" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «كما في إعدادات الثيم (٧ · بطاقة المنتج)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/01-card_style-plain-panel.webp" alt="لوحة إعدادات — شكل البطاقات في هذا القسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/01-card_style-plain-result.webp" alt="معاينة — شكل البطاقات في هذا القسم" loading="lazy" decoding="async"/> | «عادية لكل المنتجات» |

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** برامجي · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/02-eyebrow-panel.webp" alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/02-eyebrow-result.webp" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** كل ما أقدّمه، في [[مكان واحد]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/03-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/03-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** برامج مسجّلة، كتب، وموارد رقمية جاهزة للتحميل. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/04-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/04-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «إظهار تبويب «الكل» أولاً»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_all`
- **ماذا يفعل:** تبويب «الكل» أولاً، فيه منتجات التبويبات كلها معاً.
- **متى تستعمله:** اتركه مفعّلاً ليرى الزائر كل شيء من أول نظرة.
- **حين يكون فارغاً:** مطفأ: يبدأ القسم بأول تبويب.
- شرحه تحت الحقل في المحرّر: منتجات التبويبات كلها معاً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/05-show_all-panel.webp" alt="لوحة إعدادات — إظهار تبويب «الكل» أولاً" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/05-show_all-off-result.webp" alt="معاينة — إظهار تبويب «الكل» أولاً" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «اسم تبويب «الكل»»

- **النوع:** نص بسطر واحد · **الافتراضي:** الكل · المعرّف `all_label`
- **ماذا يفعل:** اسم تبويب «الكل».
- **متى تستعمله:** إن أردت اسماً آخر مثل «كل البرامج».
- **حين يكون فارغاً:** فارغاً يظهر «الكل».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/06-all_label-panel.webp" alt="لوحة إعدادات — اسم تبويب «الكل»" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/06-all_label-result.webp" alt="معاينة — اسم تبويب «الكل»" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «عدد المنتجات بجانب اسم كل تبويب»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_counts`
- **ماذا يفعل:** عدد المنتجات بجانب اسم كل تبويب.
- **متى تستعمله:** اتركه مفعّلاً إن كانت تبويباتك متقاربة العدد.
- **حين يكون فارغاً:** مطفأ: الأسماء بلا أرقام.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/07-show_counts-panel.webp" alt="لوحة إعدادات — عدد المنتجات بجانب اسم كل تبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/07-show_counts-off-result.webp" alt="معاينة — عدد المنتجات بجانب اسم كل تبويب" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «اسم التبويب»

- **النوع:** نص بسطر واحد · **الافتراضي:** الدورات · المعرّف `tab1_label`
- **ماذا يفعل:** اسم التبويب الأول.
- **متى تستعمله:** اسم نوع منتجاتك، مثل «الدورات».
- **حين يكون فارغاً:** فارغاً لا يظهر التبويب.
- شرحه تحت الحقل في المحرّر: بلا تصنيفات: تصنيف متجرك الذي يحمل اسمه، وإلا لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/08-tab1_label-panel.webp" alt="لوحة إعدادات — اسم التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/08-tab1_label-result.webp" alt="معاينة — اسم التبويب" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `tab1_categories`
- **ماذا يفعل:** تصنيفات سلة التي تأتي منها منتجات التبويب. منتجاتها الجديدة تظهر تلقائياً.
- **متى تستعمله:** اختر تصنيف الدورات مثلاً.
- **حين يكون فارغاً:** بدونها يُبحث عن تصنيف في متجرك يحمل اسم التبويب، وإن لم يوجد لا يظهر التبويب.
- شرحه تحت الحقل في المحرّر: منتجاتها الجديدة تظهر تلقائياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/09-tab1_categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «شكل البطاقات»

- **النوع:** قائمة منسدلة · **الافتراضي:** برنامج · المعرّف `tab1_kind`
- **ماذا يفعل:** شكل البطاقات في هذا التبويب: تلقائي حسب نوع المنتج، أو دورة، أو كتاب، أو منتج رقمي، أو استشارة.
- **متى تستعمله:** اختر النوع الذي يناسب منتجات التبويب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-auto-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «تلقائي (حسب نوع المنتج)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-course-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-course-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «برنامج» |
| <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-book-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-book-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «كتاب» |
| <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-digital-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-digital-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «منتج رقمي (تحميل فوري)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-service-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-service-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «استشارة» |

### «اسم التبويب»

- **النوع:** نص بسطر واحد · **الافتراضي:** الكتب · المعرّف `tab2_label`
- **ماذا يفعل:** اسم التبويب الثاني.
- **متى تستعمله:** مثل «الكتب».
- **حين يكون فارغاً:** فارغاً لا يظهر التبويب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/11-tab2_label-panel.webp" alt="لوحة إعدادات — اسم التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/11-tab2_label-result.webp" alt="معاينة — اسم التبويب" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `tab2_categories`
- **ماذا يفعل:** تصنيفات التبويب الثاني. منتجاتها الجديدة تظهر تلقائياً.
- **متى تستعمله:** اختر تصنيف الكتب مثلاً.
- **حين يكون فارغاً:** بدونها يُبحث عن تصنيف يحمل اسم التبويب، وإن لم يوجد لا يظهر التبويب.
- شرحه تحت الحقل في المحرّر: منتجاتها الجديدة تظهر تلقائياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/12-tab2_categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «شكل البطاقات»

- **النوع:** قائمة منسدلة · **الافتراضي:** كتاب · المعرّف `tab2_kind`
- **ماذا يفعل:** شكل البطاقات في التبويب الثاني.
- **متى تستعمله:** اختر النوع الذي يناسب منتجاته.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/13-tab2_kind-auto-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «تلقائي (حسب نوع المنتج)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/13-tab2_kind-course-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-course-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «برنامج» |
| <img src="/coach-docs/assets/sections/10-coach-shop/13-tab2_kind-book-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-book-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «كتاب» |
| <img src="/coach-docs/assets/sections/10-coach-shop/13-tab2_kind-digital-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-digital-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «منتج رقمي (تحميل فوري)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/13-tab2_kind-service-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-service-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «استشارة» |

### «اسم التبويب»

- **النوع:** نص بسطر واحد · **الافتراضي:** الموارد الرقمية · المعرّف `tab3_label`
- **ماذا يفعل:** اسم التبويب الثالث.
- **متى تستعمله:** مثل «الموارد الرقمية».
- **حين يكون فارغاً:** فارغاً لا يظهر التبويب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/14-tab3_label-panel.webp" alt="لوحة إعدادات — اسم التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/14-tab3_label-result.webp" alt="معاينة — اسم التبويب" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `tab3_categories`
- **ماذا يفعل:** تصنيفات التبويب الثالث. منتجاتها الجديدة تظهر تلقائياً.
- **متى تستعمله:** اختر تصنيف المنتجات الرقمية مثلاً.
- **حين يكون فارغاً:** بدونها يُبحث عن تصنيف يحمل اسم التبويب، وإن لم يوجد لا يظهر التبويب.
- شرحه تحت الحقل في المحرّر: منتجاتها الجديدة تظهر تلقائياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/15-tab3_categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «شكل البطاقات»

- **النوع:** قائمة منسدلة · **الافتراضي:** منتج رقمي (تحميل فوري) · المعرّف `tab3_kind`
- **ماذا يفعل:** شكل البطاقات في التبويب الثالث.
- **متى تستعمله:** اختر النوع الذي يناسب منتجاته.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/16-tab3_kind-auto-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «تلقائي (حسب نوع المنتج)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/16-tab3_kind-course-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-course-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «برنامج» |
| <img src="/coach-docs/assets/sections/10-coach-shop/16-tab3_kind-book-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-book-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «كتاب» |
| <img src="/coach-docs/assets/sections/10-coach-shop/16-tab3_kind-digital-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-digital-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «منتج رقمي (تحميل فوري)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/16-tab3_kind-service-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/10-tab1_kind-service-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «استشارة» |

### «اسم التبويب»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `tab4_label`
- **ماذا يفعل:** اسم تبويب رابع اختياري.
- **متى تستعمله:** لنوع إضافي، مثل «ورش العمل».
- **حين يكون فارغاً:** فارغاً (الافتراضي) لا يظهر التبويب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/17-tab4_label-panel.webp" alt="لوحة إعدادات — اسم التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/17-tab4_label-result.webp" alt="معاينة — اسم التبويب" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `tab4_categories`
- **ماذا يفعل:** تصنيفات التبويب الرابع.
- **متى تستعمله:** مع اسم التبويب الرابع.
- **حين يكون فارغاً:** بدونها يُبحث عن تصنيف يحمل اسم التبويب، وإن لم يوجد لا يظهر.
- شرحه تحت الحقل في المحرّر: منتجاتها الجديدة تظهر تلقائياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/18-tab4_categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «شكل البطاقات»

- **النوع:** قائمة منسدلة · **الافتراضي:** تلقائي (حسب نوع المنتج) · المعرّف `tab4_kind`
- **ماذا يفعل:** شكل البطاقات في التبويب الرابع.
- **متى تستعمله:** «تلقائي» يكفي غالباً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-auto-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-auto-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «تلقائي (حسب نوع المنتج)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-course-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-auto-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «برنامج» |
| <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-book-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-book-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «كتاب» |
| <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-digital-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-digital-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/> | «منتج رقمي (تحميل فوري)» |
| <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-service-panel.webp" alt="لوحة إعدادات — شكل البطاقات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-service-result.webp" alt="معاينة — شكل البطاقات" loading="lazy" decoding="async"/> | «استشارة» |

### «عدد المنتجات»

- **النوع:** رقم · **الافتراضي:** 6 · المعرّف `limit`
- **ماذا يفعل:** عدد المنتجات في كل تبويب، من ٢ إلى ١٢.
- **متى تستعمله:** ٦ تملأ صفّين على الكمبيوتر.
- **حين يكون فارغاً:** رقم خارج ٢–١٢ يرجع إلى ٦.
- شرحه تحت الحقل في المحرّر: لكل تبويب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/20-limit-panel.webp" alt="لوحة إعدادات — عدد المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — عدد المنتجات" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر الإضافة في كل بطاقة.
- **متى تستعمله:** إن أردت نصاً آخر مثل «اشترك».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/21-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «حركة تبديل التبويب»

- **النوع:** قائمة منسدلة · **الافتراضي:** بلا حركة · المعرّف `tab_motion`
- **ماذا يفعل:** حركة البطاقات عند تبديل التبويب: بلا حركة، أو دخول تباعاً، أو إعادة ترتيب سلسة ينزلق فيها المشترك لمكانه.
- **متى تستعمله:** «إعادة ترتيب» لتبديل ناعم. تتوقف مع إطفاء «التأثيرات المتحركة».
- شرحه تحت الحقل في المحرّر: إعادة الترتيب: المشترك ينزلق لمكانه. يوقفها «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/22-tab_motion-none-panel.webp" alt="لوحة إعدادات — حركة تبديل التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-auto-result.webp" alt="معاينة — حركة تبديل التبويب" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «بلا حركة» |
| <img src="/coach-docs/assets/sections/10-coach-shop/22-tab_motion-stagger-panel.webp" alt="لوحة إعدادات — حركة تبديل التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-auto-result.webp" alt="معاينة — حركة تبديل التبويب" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «دخول تباعاً» |
| <img src="/coach-docs/assets/sections/10-coach-shop/22-tab_motion-flip-panel.webp" alt="لوحة إعدادات — حركة تبديل التبويب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/19-tab4_kind-book-result.webp" alt="معاينة — حركة تبديل التبويب" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «إعادة ترتيب سلسة» |

### «دخول البطاقات تباعاً (الإعداد السابق)»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `tab_stagger`
- **ماذا يفعل:** إعداد قديم للأقسام المضافة قبل «حركة تبديل التبويب»، ولا يظهر في اللوحة.
- **متى تستعمله:** لا تحتاجه: استعمل «حركة تبديل التبويب».
- **حين يكون فارغاً:** مطفأ: بلا حركة في الأقسام القديمة.
- **يظهر في اللوحة فقط حين:** «حركة تبديل التبويب» هو «legacy»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/10-coach-shop/23-tab_stagger-panel.webp" alt="لوحة إعدادات — دخول البطاقات تباعاً (الإعداد السابق)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/10-coach-shop/00-desktop.webp" alt="معاينة — دخول البطاقات تباعاً (الإعداد السابق)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
