---
title: "تحويل · الدليل المجاني"
description: "دليل ثيم كوتش 1.76.1 — تحويل · الدليل المجاني"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Conversion · Free guide* · مساره `home.coach-free-guide`

**ما يعرضه:** دليل مجاني (منتج رقمي بسعر صفر) يُضاف للسلة، فيبني قاعدة عملائك: غلاف، وعدد التحميلات، وما في الدليل، وزر الطلب.

**متى تضيفه:** لجمع عملاء جدد بهدية مفيدة.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — تحويل · الدليل المجاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-mobile.webp" alt="معاينة — تحويل · الدليل المجاني" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

منتج رقمي مجاني يُضاف للسلة: غلاف مائل بشارة «مجاناً»، وعدد الطلبات الحقيقي من سلة، وما في الدليل، وزر يصبح بعد الإضافة «أكمل الطلب».

- **أهم الإعدادات:** «المنتج المجاني» منتج رقمي بسعر ٠، والمنتج الذي له سعر يُعرض بسعره. بدون اختيار: أول منتج مجاني بين أحدث ٣٠ منتجاً. «صورة الغلاف (اختيارية)» طولية (٤٠٠×٥٦٠ بكسل تقريباً)؛ بدونها يُرسم غلاف من «السطر أعلى الغلاف» و«العنوان على الغلاف المرسوم».
- **اللوحة:** «لون اللوحة»: «فاتح (كما هو)» (الافتراضي) أو «باللون الأساسي».
- **شكل الصورة:** «تملأ المساحة» (الافتراضي، بلا إطار؛ الغلاف لا يطفو في هذا الشكل) أو «غلاف كتاب» (الصورة داخل كتاب مائل). أرضية منطقة الصورة من لون متجرك الفاتح.
- **التفاصيل:** «ماذا في الداخل» حتى ٦ فصول. «قيمة مشطوبة للعرض (اختياري)» رقم فقط، يُكتب بعملة المتجر ويُشطب بجانب «مجاناً». «نص بطاقة التحميل» يظهر بجانب عدد الطلبات الحقيقي حين يبلغ ٥٠ فأكثر.

---

**ثقة** — أقسام تبني ثقة الزائر قبل الشراء.

</details>

## الإعدادات بترتيبها في اللوحة

### «لون اللوحة»

- **النوع:** قائمة منسدلة · **الافتراضي:** فاتح (كما هو) · المعرّف `panel_style`
- **ماذا يفعل:** لون اللوحة: فاتح، أو باللون الأساسي.
- **متى تستعمله:** «الأساسي» لإبراز القسم بين أقسام فاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/01-panel_style-light-panel.webp" alt="لوحة إعدادات — لون اللوحة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — لون اللوحة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «فاتح (كما هو)» |
| <img src="/coach-docs/assets/sections/37-coach-free-guide/01-panel_style-primary-panel.webp" alt="لوحة إعدادات — لون اللوحة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/01-panel_style-primary-result.webp" alt="معاينة — لون اللوحة" loading="lazy" decoding="async"/> | «باللون الأساسي» |

### «خلفية متحركة بالألوان»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_motion`
- **ماذا يفعل:** تدرّج متحرك بألوان الثيم خلف اللوحة الداكنة. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».
- **متى تستعمله:** لقسم تريده أن يلفت النظر.
- **حين يكون فارغاً:** مطفأ (الافتراضي): خلفية ثابتة.
- **يظهر في اللوحة فقط حين:** «لون اللوحة» هو «باللون الأساسي»
- شرحه تحت الحقل في المحرّر: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/02-fx_motion-panel.webp" alt="لوحة إعدادات — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/02-fx_motion-on-result.webp" alt="معاينة — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة.
- **متى تستعمله:** «هادئة» لحركة لا تشتّت.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/03-fx_speed-slow-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «هادئة» |
| <img src="/coach-docs/assets/sections/37-coach-free-guide/03-fx_speed-normal-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/03-fx_speed-normal-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «متوسطة» |
| <img src="/coach-docs/assets/sections/37-coach-free-guide/03-fx_speed-fast-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «أسرع» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.
- **متى تستعمله:** اختر ما يناسب الدليل.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/04-fx_palette-theme-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «ألوان الثيم» |
| <img src="/coach-docs/assets/sections/37-coach-free-guide/04-fx_palette-night-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/03-fx_speed-normal-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «ليلي» |
| <img src="/coach-docs/assets/sections/37-coach-free-guide/04-fx_palette-warm-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «دافئ» |

### «شكل الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** تملأ المساحة · المعرّف `image_style`
- **ماذا يفعل:** شكل الصورة: تملأ المساحة، أو غلاف كتاب.
- **متى تستعمله:** «غلاف كتاب» لدليل بغلاف مسطّح، أو ليُرسم غلاف من النصوص.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/05-image_style-fill-panel.webp" alt="لوحة إعدادات — شكل الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — شكل الصورة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «تملأ المساحة» |
| <img src="/coach-docs/assets/sections/37-coach-free-guide/05-image_style-book-panel.webp" alt="لوحة إعدادات — شكل الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/03-fx_speed-normal-result.webp" alt="معاينة — شكل الصورة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «غلاف كتاب» |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** حمّل دليلي المجاني وابدأ بخطوة صحيحة · المعرّف `title`
- **ماذا يفعل:** عنوان القسم.
- **متى تستعمله:** ما سيحصل عليه الزائر مجاناً.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/06-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/06-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** دليل عملي من ٢٤ صفحة أضع فيه الطريقة التي أبدأ بها مع كل متدرّب: كيف تحدد المهارة التي تصنع الفرق في عملك، وتبني خطة تعلّم أسبوعية تلتزم بها. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران عن الدليل.
- **متى تستعمله:** لما في الدليل ولمن هو.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/07-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/07-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المنتج المجاني»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `product`
- **ماذا يفعل:** المنتج المجاني: «منتج رقمي» بسعر ٠، يضيفه الزر للسلة.
- **متى تستعمله:** دائماً: أنشئ الدليل منتجاً رقمياً مجانياً واختره.
- **حين يكون فارغاً:** بدونه أول منتج مجاني من أحدث ٣٠ منتجاً. وإن حُذف المنتج المختار يختفي القسم عن الزوار.
- شرحه تحت الحقل في المحرّر: «منتج رقمي» بسعر ٠؛ بدونه أول منتج مجاني من أحدث ٣٠.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/08-product-panel.webp" alt="لوحة إعدادات — المنتج المجاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — المنتج المجاني" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «أو رابط بدل المنتج»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `link`
- **ماذا يفعل:** رابط بدل المنتج، إن لم تختر منتجاً: يصير الزر رابطاً له.
- **متى تستعمله:** إن كان الدليل ملفاً أو صفحة خارج سلة.
- **حين يكون فارغاً:** بدونه وبلا منتج يُبحث عن أول منتج مجاني.
- شرحه تحت الحقل في المحرّر: بدون منتج فقط: يصير الزر رابطاً لها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/09-link-panel.webp" alt="لوحة إعدادات — أو رابط بدل المنتج" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — أو رابط بدل المنتج" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «ماذا في الداخل»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `chapters`
- **ماذا يفعل:** ماذا في الدليل، فصل في كل سطر.
- **متى تستعمله:** لما يتعلّمه القارئ.
- **حين يكون فارغاً:** بلا فصول لا تظهر القائمة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/10-chapters-panel.webp" alt="لوحة إعدادات — ماذا في الداخل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/10-chapters-result.webp" alt="معاينة — ماذا في الداخل" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «الفصل»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `chapters.text`
- **ماذا يفعل:** اسم الفصل.
- **حين يكون فارغاً:** الفصل الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/10-chapters-text-panel.webp" alt="لوحة إعدادات — ماذا في الداخل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/10-chapters-result.webp" alt="معاينة — ماذا في الداخل" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «السعر قبل المجانية (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `compare_price`
- **ماذا يفعل:** قيمة مشطوبة بجانب «مجاناً»، رقم بعملة المتجر. مع المنتج فقط.
- **متى تستعمله:** إن كان للدليل سعر فعلي في مكان آخر. امسحها إن لم يكن.
- **حين يكون فارغاً:** فارغة أو غير رقم لا تظهر.
- شرحه تحت الحقل في المحرّر: رقم بعملة المتجر يُشطب بجانب «مجاناً» مع المنتج فقط؛ يُكتب إن كان للدليل سعر سابق، وفارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/11-compare_price-panel.webp" alt="لوحة إعدادات — السعر قبل المجانية (اختياري)" loading="lazy" decoding="async"/> | <span class="uncaptured-preview">لم تُلتقط هذه المعاينة في الحزمة المرفقة؛ عرضها يتطلب بيانات متجر في سلة.</span> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «نص بطاقة التحميل»

- **النوع:** نص بسطر واحد · **الافتراضي:** تحميل حتى الآن · المعرّف `downloads_label`
- **ماذا يفعل:** نص بطاقة التحميل بجانب عدد طلبات المنتج. تظهر من ٥٠ طلباً فأكثر، مع المنتج فقط.
- **متى تستعمله:** مثل «تحميل حتى الآن».
- **حين يكون فارغاً:** فارغاً يظهر العدد وحده.
- شرحه تحت الحقل في المحرّر: مع المنتج فقط، بجانب عدد طلباته (٥٠ فأكثر).

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/12-downloads_label-panel.webp" alt="لوحة إعدادات — نص بطاقة التحميل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — نص بطاقة التحميل" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

### «صورة الغلاف (اختيارية)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `cover_image`
- **ماذا يفعل:** صورة الغلاف، طولية نحو ٤٠٠×٥٦٠، مع «غلاف كتاب» في «شكل الصورة».
- **متى تستعمله:** غلاف دليلك الحقيقي.
- **حين يكون فارغاً:** بدونها غلاف مرسوم من «العنوان على الغلاف» و«السطر أعلى الغلاف».
- شرحه تحت الحقل في المحرّر: طولية نحو ٤٠٠×٥٦٠ مع «غلاف كتاب» في «شكل الصورة»؛ بدونها غلاف من النصين أدناه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/13-cover_image-panel.webp" alt="لوحة إعدادات — صورة الغلاف (اختيارية)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/13-cover_image-result.webp" alt="معاينة — صورة الغلاف (اختيارية)" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «العنوان على الغلاف المرسوم»

- **النوع:** نص بسطر واحد · **الافتراضي:** خطة تطوير مهاراتك في ٣٠ يوماً · المعرّف `cover_title`
- **ماذا يفعل:** العنوان على الغلاف المرسوم.
- **متى تستعمله:** اسم الدليل.
- **حين يكون فارغاً:** فارغاً غلاف بلا عنوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/14-cover_title-panel.webp" alt="لوحة إعدادات — العنوان على الغلاف المرسوم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/14-cover_title-result.webp" alt="معاينة — العنوان على الغلاف المرسوم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «السطر أعلى الغلاف المرسوم»

- **النوع:** نص بسطر واحد · **الافتراضي:** دليل مجاني للتحميل · المعرّف `cover_tag`
- **ماذا يفعل:** سطر صغير أعلى الغلاف المرسوم.
- **متى تستعمله:** مثل «دليل مجاني للتحميل».
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/15-cover_tag-panel.webp" alt="لوحة إعدادات — السطر أعلى الغلاف المرسوم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/15-cover_tag-result.webp" alt="معاينة — السطر أعلى الغلاف المرسوم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الشارة المائلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** مجاناً · المعرّف `badge`
- **ماذا يفعل:** شارة مائلة على الغلاف، مثل «مجاناً».
- **متى تستعمله:** لإبراز أنه مجاني.
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/16-badge-panel.webp" alt="لوحة إعدادات — الشارة المائلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/16-badge-result.webp" alt="معاينة — الشارة المائلة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص الزر.
- **متى تستعمله:** مثل «حمّل الدليل».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/17-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/17-button_label-result.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «السطر تحت الزر»

- **النوع:** نص بسطر واحد · **الافتراضي:** دليل مجاني تماماً — يصلك رابط التحميل فور إتمام الطلب بدون دفع. · المعرّف `note`
- **ماذا يفعل:** سطر صغير تحت الزر.
- **متى تستعمله:** لتوضيح أنه بلا دفع وكيف يصل.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/18-note-panel.webp" alt="لوحة إعدادات — السطر تحت الزر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/18-note-result.webp" alt="معاينة — السطر تحت الزر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الغلاف يطفو»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `cover_float`
- **ماذا يفعل:** الغلاف يصعد وينزل بهدوء، مع «غلاف كتاب» أو الغلاف المرسوم فقط.
- **متى تستعمله:** لحركة لطيفة. تتوقف مع إطفاء «التأثيرات المتحركة».
- **حين يكون فارغاً:** مطفأ (الافتراضي): ثابت.
- شرحه تحت الحقل في المحرّر: صعود ونزول هادئ؛ مع «غلاف كتاب» أو الغلاف المرسوم فقط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/37-coach-free-guide/19-cover_float-panel.webp" alt="لوحة إعدادات — الغلاف يطفو" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/37-coach-free-guide/00-desktop.webp" alt="معاينة — الغلاف يطفو" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp · home _doc-coach-free-guide-compare_price: (296): Twig\Environment->render('components.home...', Array)
#6 {main}
  thrown in /Users/fadi/Desktop/CoachTheme/.claude/worktrees/loving-feynman-b34285/vendor/twig/twig/src/Template.php on line 610



<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** تغيير شكل هذا القسم بالكلاسات الجاهزة، أو بكلاس خاص يُنسّق من خانة CSS في سلة.
- **طريقة الإدخال:** كلمات لاتينية بينها مسافة أو فاصلة، حتى ثماني كلمات.
- **حين يكون فارغًا:** يبقى القسم بشكله الافتراضي.

[شرح الكلاسات الجاهزة وطريقة استخدامها](/coach-docs/docs/01-shared/#custom-classes).
