---
title: "واجهة · نافذة القوس"
description: "دليل ثيم كوتش 1.76.1 — واجهة · نافذة القوس"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Hero · Arch window* · مساره `home.coach-hero-window`

**ما يعرضه:** واجهة أول الصفحة: اسمك وعنوان ووصف وزرّان بجانب نافذة على شكل قوس. مع التمرير تتّسع النافذة حتى تملأ الشاشة، وتظهر داخلها صورتك وعبارة وزر.

**متى تضيفه:** أول قسم في الرئيسية، لمدرّب يريد بداية هادئة تركّز على صورته وعبارة واحدة.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/00-desktop.webp" alt="معاينة — واجهة · نافذة القوس" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/00-mobile.webp" alt="معاينة — واجهة · نافذة القوس" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

اسمك وعنوان ووصف وزرّان بجانب نافذة على شكل قوس. مع التمرير تتّسع النافذة حتى تملأ الشاشة، وتظهر بداخلها صورتك وعبارة وزر.

- **النصوص:** «اسمك» و«لقبك بعد الاسم» فوق العنوان، ثم «العنوان» و«الوصف» (يُخفى الوصف على الجوال)، و«العبارة داخل النافذة» تظهر حين تمتلئ الشاشة.
- **الصورة:** «صورة النافذة» عريضة (١٦٠٠×١٠٠٠ فأكبر)؛ بدونها ألوان الثيم المتحركة. و«صورة الجوال (اختيارية)» طولية (٩٠٠×١٤٠٠)، و«مركز الصورة»، و«قوة طبقة اللون فوق الصورة».
- **الأزرار:** «نص الزر الأول» و«نص الزر الثاني» و«زر داخل النافذة»، لكل منها رابطه؛ بلا رابط ينزل الزر إلى قسم المتجر إن وُجد، والنص الفارغ يُخفي زرّه.
- **الحركة والمكان:** «مكان القوس» بجانب النص من جهة النهاية (الافتراضي) أو البداية، وفوق النص على الجوال. «طول التمرير» قصير أو متوسط أو طويل. والهيدر فوق القسم يُضبط من «٤ · الهيدر» في تخصيص الثيم («شكل الهيدر» و«الهيدر فوق صورة الواجهة»).
- بلا «التأثيرات المتحركة» تظهر النافذة مفتوحة من البداية، ولا يُدمج الهيدر.
- **نصيحة:** استبدل «اسمك» الافتراضي «د. لمى الدوسري» و«لقبك بعد الاسم» («مدرّبة تطوير مهني معتمدة»).

</details>

## الإعدادات بترتيبها في اللوحة

### «مكان القوس»

- **النوع:** قائمة منسدلة · **الافتراضي:** بجانب النص من جهة النهاية (الافتراضي) · المعرّف `layout`
- **ماذا يفعل:** جهة القوس بجانب النص على الكمبيوتر: «النهاية» يسار في العربية، و«البداية» يمين. على الجوال القوس فوق النص دائماً.
- **متى تستعمله:** اختر الجهة التي تناسب صورتك، مثلاً إن كان وجهك فيها يتجه نحو النص.
- شرحه تحت الحقل في المحرّر: البداية: يمين بالعربي ويسار بالإنجليزي. القوس فوق النص على الجوال.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/01-layout-end-panel.webp" alt="لوحة إعدادات — مكان القوس" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/01-layout-end-result.webp" alt="معاينة — مكان القوس" loading="lazy" decoding="async"/> | «بجانب النص من جهة النهاية (الافتراضي)» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/01-layout-start-panel.webp" alt="لوحة إعدادات — مكان القوس" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/01-layout-start-result.webp" alt="معاينة — مكان القوس" loading="lazy" decoding="async"/> | «بجانب النص من جهة البداية» |

### «اسمك»

- **النوع:** نص بسطر واحد · **الافتراضي:** د. لمى الدوسري · المعرّف `coach_name`
- **ماذا يفعل:** اسمك في سطر صغير فوق العنوان.
- **متى تستعمله:** دائماً: استبدل الاسم التجريبي «د. لمى الدوسري» باسمك.
- **حين يكون فارغاً:** فارغاً يُخفى السطر كله، ومعه اللقب.
- شرحه تحت الحقل في المحرّر: فوق العنوان؛ فارغاً يُخفى السطر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/02-coach_name-panel.webp" alt="لوحة إعدادات — اسمك" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/02-coach_name-result.webp" alt="معاينة — اسمك" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «لقبك بعد الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** مدرّبة تطوير مهني معتمدة · المعرّف `coach_title`
- **ماذا يفعل:** لقبك بعد اسمك في السطر نفسه، بعد فاصلة.
- **متى تستعمله:** لمهنتك أو اعتمادك في كلمات قليلة.
- **حين يكون فارغاً:** فارغاً يظهر الاسم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/03-coach_title-panel.webp" alt="لوحة إعدادات — لقبك بعد الاسم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/03-coach_title-result.webp" alt="معاينة — لقبك بعد الاسم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** مساحة هادئة تفكّر فيها [[بصوت عالٍ]] · المعرّف `title`
- **ماذا يفعل:** العنوان الكبير للواجهة. ضع كلمة بين [[ ]] لتظهر بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة واحدة تقول ما تقدّمه للزائر.
- **حين يكون فارغاً:** فارغاً لا يظهر العنوان.
- شرحه تحت الحقل في المحرّر: [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/04-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/04-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** جلسات فردية تساعدك ترتّب حياتك من الداخل، وتخرج كل أسبوع بخطوة واحدة تعرف أنك ستنفذها. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان. يُخفى على الجوال ليبقى القوس ظاهراً.
- **متى تستعمله:** لتوضيح العنوان: لمن خدمتك، وماذا يخرج منها.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- شرحه تحت الحقل في المحرّر: يُخفى على الجوال. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/05-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/05-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العبارة داخل النافذة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** هنا لا أحد يحكم عليك. هنا تبدأ [[من حيث أنت]]. · المعرّف `quote`
- **ماذا يفعل:** عبارة داخل النافذة تظهر حين تمتلئ الشاشة. [[كلمة]] تظهر مميّزة.
- **متى تستعمله:** لجملة تلخّص فلسفتك أو وعدك للمتدرّب.
- **حين يكون فارغاً:** فارغاً لا تظهر عبارة داخل النافذة.
- شرحه تحت الحقل في المحرّر: تظهر حين تمتلئ الشاشة. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/06-quote-panel.webp" alt="لوحة إعدادات — العبارة داخل النافذة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/06-quote-result.webp" alt="معاينة — العبارة داخل النافذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي، أثناء التمرير |

### «صورة النافذة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة داخل القوس، عريضة (١٦٠٠×١٠٠٠ فأكبر).
- **متى تستعمله:** صورة لك أو لجلساتك بإضاءة جيدة.
- **حين يكون فارغاً:** بدونها تظهر ألوان الثيم المتحركة داخل القوس.
- شرحه تحت الحقل في المحرّر: عريضة (1600×1000 فأكبر)؛ بدونها ألوان الثيم المتحركة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/07-image-panel.webp" alt="لوحة إعدادات — صورة النافذة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/07-image-result.webp" alt="معاينة — صورة النافذة" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «صورة الجوال (اختيارية)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image_mobile`
- **ماذا يفعل:** صورة طولية للجوال (٩٠٠×١٤٠٠) بدل الصورة العريضة.
- **متى تستعمله:** إن كانت الصورة العريضة تفقد أهم ما فيها حين تُقصّ على الجوال.
- **حين يكون فارغاً:** بدونها تظهر صورة النافذة نفسها على الجوال.
- شرحه تحت الحقل في المحرّر: طولية (900×1400)؛ بدونها صورة النافذة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/08-image_mobile-panel.webp" alt="لوحة إعدادات — صورة الجوال (اختيارية)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/08-image_mobile-result.webp" alt="معاينة — صورة الجوال (اختيارية)" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط · المعرّف `image_focus`
- **ماذا يفعل:** أي جزء من الصورة يبقى ظاهراً حين تُقصّ لتناسب القوس: الوسط، أو الأعلى، أو الأسفل، أو اليمين، أو اليسار.
- **متى تستعمله:** إن قُصّ وجهك أو أهم ما في الصورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-center-panel.webp" alt="لوحة إعدادات — مركز الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-center-result.webp" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الوسط» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-top-panel.webp" alt="لوحة إعدادات — مركز الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-top-result.webp" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-bottom-panel.webp" alt="لوحة إعدادات — مركز الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-bottom-result.webp" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأسفل» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-right-panel.webp" alt="لوحة إعدادات — مركز الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-right-result.webp" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-left-panel.webp" alt="لوحة إعدادات — مركز الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/09-image_focus-left-result.webp" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» |

### «قوة طبقة اللون فوق الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `win_overlay`
- **ماذا يفعل:** قوة طبقة اللون فوق الصورة داخل القوس: خفيفة أو متوسطة أو قوية.
- **متى تستعمله:** «قوية» للصور الفاتحة حتى تبقى العبارة والزر واضحين.
- شرحه تحت الحقل في المحرّر: «قوية» للصور الفاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/10-win_overlay-light-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/10-win_overlay-light-result.webp" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «خفيفة» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/10-win_overlay-medium-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/10-win_overlay-medium-result.webp" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/10-win_overlay-strong-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/10-win_overlay-strong-result.webp" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «قوية» |

### «نص الزر الأول»

- **النوع:** نص بسطر واحد · **الافتراضي:** احجز جلستك الأولى · المعرّف `button_label`
- **ماذا يفعل:** نص الزر الأول بجانب العنوان، بلون داكن.
- **متى تستعمله:** لأهم إجراء: الحجز أو الشراء.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/11-button_label-panel.webp" alt="لوحة إعدادات — نص الزر الأول" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/11-button_label-result.webp" alt="معاينة — نص الزر الأول" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الأول»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `button_link`
- **ماذا يفعل:** إلى أين يذهب الزر الأول: منتج، أو تصنيف، أو صفحة، أو رابط آخر.
- **متى تستعمله:** لمنتجك الرئيسي أو صفحة الحجز.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإن لم يوجد أي منهما يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم المتجر إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/12-button_link-panel.webp" alt="لوحة إعدادات — رابط الزر الأول" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/00-desktop.webp" alt="معاينة — رابط الزر الأول" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «نص الزر الثاني»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح البرامج · المعرّف `secondary_label`
- **ماذا يفعل:** نص الزر الثاني، بإطار فقط.
- **متى تستعمله:** لإجراء أخفّ: تصفّح البرامج أو التعرّف عليك.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/13-secondary_label-panel.webp" alt="لوحة إعدادات — نص الزر الثاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/13-secondary_label-result.webp" alt="معاينة — نص الزر الثاني" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الثاني»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `secondary_link`
- **ماذا يفعل:** إلى أين يذهب الزر الثاني.
- **متى تستعمله:** لتصنيف برامجك.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإلا يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم المتجر إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/14-secondary_link-panel.webp" alt="لوحة إعدادات — رابط الزر الثاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/00-desktop.webp" alt="معاينة — رابط الزر الثاني" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «زر داخل النافذة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ابدأ بجلستك الأولى · المعرّف `inner_label`
- **ماذا يفعل:** زر فاتح داخل النافذة، تحت العبارة، يظهر حين تمتلئ الشاشة.
- **متى تستعمله:** لدعوة أخيرة بعد أن يرى الزائر الصورة كاملة.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/15-inner_label-panel.webp" alt="لوحة إعدادات — زر داخل النافذة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/15-inner_label-result.webp" alt="معاينة — زر داخل النافذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي، أثناء التمرير |

### «رابط الزر داخل النافذة»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `inner_link`
- **ماذا يفعل:** إلى أين يذهب الزر داخل النافذة.
- **متى تستعمله:** لصفحة الحجز.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإلا يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم المتجر إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/16-inner_link-panel.webp" alt="لوحة إعدادات — رابط الزر داخل النافذة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/00-desktop.webp" alt="معاينة — رابط الزر داخل النافذة" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «طول التمرير»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسط (الافتراضي) · المعرّف `scroll_length`
- **ماذا يفعل:** كم يمرّر الزائر حتى تمتلئ الشاشة بالنافذة: قصير أو متوسط أو طويل. أقصر على الجوال.
- **متى تستعمله:** «قصير» إن أردت أن يصل الزائر للأقسام التالية أسرع.
- شرحه تحت الحقل في المحرّر: أقصر على الجوال؛ وبلا «التأثيرات المتحركة» النافذة مفتوحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/03-coach-hero-window/17-scroll_length-160-panel.webp" alt="لوحة إعدادات — طول التمرير" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/01-layout-end-result.webp" alt="معاينة — طول التمرير" loading="lazy" decoding="async"/> | «قصير» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/17-scroll_length-200-panel.webp" alt="لوحة إعدادات — طول التمرير" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/17-scroll_length-200-result.webp" alt="معاينة — طول التمرير" loading="lazy" decoding="async"/> | «متوسط (الافتراضي)» |
| <img src="/coach-docs/assets/sections/03-coach-hero-window/17-scroll_length-220-panel.webp" alt="لوحة إعدادات — طول التمرير" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/03-coach-hero-window/17-scroll_length-220-result.webp" alt="معاينة — طول التمرير" loading="lazy" decoding="async"/> | «طويل» |


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
