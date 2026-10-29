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
| <img data-update-ref="03-coach-hero-window:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/00-desktop.webp?v=b2b520ce5b16" alt="معاينة — واجهة · نافذة القوس" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/00-mobile.webp?v=8ab137786a89" alt="معاينة — واجهة · نافذة القوس" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

اسمك وعنوان ووصف وزرّان بجانب نافذة على شكل قوس. مع التمرير تتّسع النافذة حتى تملأ الشاشة، وتظهر بداخلها صورتك وعبارة وزر.

- **النصوص:** «اسمك» و«لقبك بعد الاسم» فوق العنوان، ثم «العنوان» و«الوصف» (يُخفى الوصف على الجوال)، و«العبارة داخل النافذة» تظهر حين تمتلئ الشاشة.
- **الصورة:** «صورة النافذة» عريضة (١٦٠٠×١٠٠٠ فأكبر)؛ بدونها ألوان الثيم المتحركة. و«صورة الجوال (اختيارية)» طولية (٩٠٠×١٤٠٠)، و«مركز الصورة»، و«قوة طبقة اللون فوق الصورة».
- **الأزرار:** «نص الزر الأول» و«نص الزر الثاني» و«زر داخل النافذة»، لكل منها رابطه؛ بلا رابط ينزل الزر إلى قسم المتجر إن وُجد، والنص الفارغ يُخفي زرّه.
- **الحركة والمكان:** «مكان القوس» بجانب النص من جهة النهاية (الافتراضي) أو البداية، وفوق النص على الجوال. «طول التمرير» قصير أو متوسط أو طويل. والهيدر فوق القسم يُضبط من قسم «الهيدر» في الخيارات العامة («شكل الهيدر» و«الهيدر فوق صورة الواجهة»).
- بلا «التأثيرات المتحركة» تظهر النافذة مفتوحة من البداية، ولا يُدمج الهيدر.
- **نصيحة:** «اسمك» الافتراضي «د. لمى الدوسري» و«لقبك بعد الاسم» («مدرّبة تطوير مهني معتمدة») يُستبدلان بالاسم واللقب الحقيقيين.
- **خيارات إضافية:** «صورة المتجر الإنجليزي (تحل محل صورتَي الحاسوب والجوال)»: تظهر في المتجر الإنجليزي وحده (فارغة: الصورة نفسها).

</details>

## الإعدادات بترتيبها في اللوحة

### «مكان القوس»

- **النوع:** قائمة منسدلة · **الافتراضي:** بجانب النص من جهة النهاية (الافتراضي) · المعرّف `layout`
- **ماذا يفعل:** جهة القوس بجانب النص على الكمبيوتر: «النهاية» يسار في العربية، و«البداية» يمين. على الجوال القوس فوق النص دائماً.
- **متى تستعمله:** اختر الجهة التي تناسب صورتك، مثلاً إن كان وجهك فيها يتجه نحو النص.
- شرحه تحت الحقل في المحرّر: البداية: يمين بالعربي ويسار بالإنجليزي. القوس فوق النص على الجوال.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:layout:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/01-layout-end-panel.webp?v=55a5ad09e561" alt="لوحة إعدادات (نسخة مطابقة) — مكان القوس" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:layout:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/01-layout-end-result.webp?v=11694cc130bd" alt="معاينة — مكان القوس" loading="lazy" decoding="async"/> | «بجانب النص من جهة النهاية (الافتراضي)» |
| <img data-update-ref="03-coach-hero-window:layout:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/01-layout-start-panel.webp?v=87e3e275cf2b" alt="لوحة إعدادات (نسخة مطابقة) — مكان القوس" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:layout:1:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/01-layout-start-result.webp?v=90f5fa55a911" alt="معاينة — مكان القوس" loading="lazy" decoding="async"/> | «بجانب النص من جهة البداية» |

### «اسمك»

- **النوع:** نص بسطر واحد · **الافتراضي:** د. لمى الدوسري · المعرّف `coach_name`
- **ماذا يفعل:** اسمك في سطر صغير فوق العنوان.
- **متى تستعمله:** دائماً: استبدل الاسم التجريبي «د. لمى الدوسري» باسمك.
- **حين يكون فارغاً:** فارغاً يُخفى السطر كله، ومعه اللقب.
- شرحه تحت الحقل في المحرّر: فوق العنوان؛ فارغاً يُخفى السطر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:coach_name:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/02-coach_name-panel.webp?v=1dadaeb3b707" alt="لوحة إعدادات (نسخة مطابقة) — اسمك" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:coach_name:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/02-coach_name-result.webp?v=8daaa31508bc" alt="معاينة — اسمك" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «لقبك بعد الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** مدرّبة تطوير مهني معتمدة · المعرّف `coach_title`
- **ماذا يفعل:** لقبك بعد اسمك في السطر نفسه، بعد فاصلة.
- **متى تستعمله:** لمهنتك أو اعتمادك في كلمات قليلة.
- **حين يكون فارغاً:** فارغاً يظهر الاسم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:coach_title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/03-coach_title-panel.webp?v=fdb069decff0" alt="لوحة إعدادات (نسخة مطابقة) — لقبك بعد الاسم" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:coach_title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/03-coach_title-result.webp?v=c130c929884a" alt="معاينة — لقبك بعد الاسم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** مساحة هادئة تفكّر فيها [[بصوت عالٍ]] · المعرّف `title`
- **ماذا يفعل:** العنوان الكبير للواجهة. ضع كلمة بين [[ ]] لتظهر بالشكل المختار في «الخيارات العامة».
- **متى تستعمله:** جملة واحدة تقول ما تقدّمه للزائر.
- **حين يكون فارغاً:** فارغاً لا يظهر العنوان.
- شرحه تحت الحقل في المحرّر: [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/04-title-panel.webp?v=2c090ec4194f" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/04-title-result.webp?v=52528b455e39" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** جلسات فردية تساعدك ترتّب حياتك من الداخل، وتخرج كل أسبوع بخطوة واحدة تعرف أنك ستنفذها. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان. يُخفى على الجوال ليبقى القوس ظاهراً.
- **متى تستعمله:** لتوضيح العنوان: لمن خدمتك، وماذا يخرج منها.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- شرحه تحت الحقل في المحرّر: يُخفى على الجوال. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:description:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/05-description-panel.webp?v=dc4f3c2d2645" alt="لوحة إعدادات (نسخة مطابقة) — الوصف" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:description:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/05-description-result.webp?v=53a44f8e10be" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العبارة داخل النافذة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** هنا لا أحد يحكم عليك. هنا تبدأ [[من حيث أنت]]. · المعرّف `quote`
- **ماذا يفعل:** عبارة داخل النافذة تظهر حين تمتلئ الشاشة. [[كلمة]] تظهر مميّزة.
- **متى تستعمله:** لجملة تلخّص فلسفتك أو وعدك للمتدرّب.
- **حين يكون فارغاً:** فارغاً لا تظهر عبارة داخل النافذة.
- شرحه تحت الحقل في المحرّر: تظهر حين تمتلئ الشاشة. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:quote:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/06-quote-panel.webp?v=910f78273f3f" alt="لوحة إعدادات (نسخة مطابقة) — العبارة داخل النافذة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:quote:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/06-quote-result.webp?v=424ed0218241" alt="معاينة — العبارة داخل النافذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي، أثناء التمرير |

### «صورة النافذة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة داخل القوس، عريضة (١٦٠٠×١٠٠٠ فأكبر).
- **متى تستعمله:** صورة لك أو لجلساتك بإضاءة جيدة.
- **حين يكون فارغاً:** بدونها تظهر ألوان الثيم المتحركة داخل القوس.
- شرحه تحت الحقل في المحرّر: عريضة (1600×1000 فأكبر)؛ بدونها ألوان الثيم المتحركة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:image:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/07-image-panel.webp?v=3b7c28534943" alt="لوحة إعدادات (نسخة مطابقة) — صورة النافذة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/07-image-result.webp?v=782f4ab04322" alt="معاينة — صورة النافذة" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «صورة الجوال (اختيارية)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image_mobile`
- **ماذا يفعل:** صورة طولية للجوال (٩٠٠×١٤٠٠) بدل الصورة العريضة.
- **متى تستعمله:** إن كانت الصورة العريضة تفقد أهم ما فيها حين تُقصّ على الجوال.
- **حين يكون فارغاً:** بدونها تظهر صورة النافذة نفسها على الجوال.
- شرحه تحت الحقل في المحرّر: طولية (900×1400)؛ بدونها صورة النافذة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:image_mobile:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/08-image_mobile-panel.webp?v=ed93f5f042e9" alt="لوحة إعدادات (نسخة مطابقة) — صورة الجوال (اختيارية)" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_mobile:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/08-image_mobile-result.webp?v=1ac6cd43de66" alt="معاينة — صورة الجوال (اختيارية)" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «صورة المتجر الإنجليزي (تحل محل صورتَي الحاسوب والجوال)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image_en`
- **ماذا يفعل:** صورة تظهر في المتجر الإنجليزي وحده.
- **متى تستعمله:** حين في الصورة كتابة عربية.
- **حين يكون فارغاً:** فارغة: الصورة نفسها، ومعها صورة الجوال.
- شرحه تحت الحقل في المحرّر: فارغة: الصورة نفسها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:image_en:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/09-image_en-panel.webp?v=e25ddc73272e" alt="لوحة إعدادات (نسخة مطابقة) — صورة المتجر الإنجليزي (تحل محل صورتَي الحاسوب والجوال)" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_en:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/09-image_en-result.webp?v=3fe9399ea3bf" alt="معاينة — صورة المتجر الإنجليزي (تحل محل صورتَي الحاسوب والجوال)" loading="lazy" decoding="async"/> | النتيجة في المتجر الإنجليزي بصورة تجريبية |

### «مركز الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط (الافتراضي) · المعرّف `image_focus`
- **ماذا يفعل:** أي جزء من الصورة يبقى ظاهراً حين تُقصّ لتناسب القوس: الوسط، أو الأعلى، أو الأسفل، أو اليمين، أو اليسار.
- **متى تستعمله:** إن قُصّ وجهك أو أهم ما في الصورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:image_focus:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-center-panel.webp?v=ce4730e01b12" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_focus:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-bottom-result.webp?v=46bcc1e62c8c" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «الوسط (الافتراضي)» · بصورة تجريبية |
| <img data-update-ref="03-coach-hero-window:image_focus:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-top-panel.webp?v=037ab08c1879" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_focus:1:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-top-result.webp?v=80f0a1f9611b" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «الأعلى» · بصورة تجريبية |
| <img data-update-ref="03-coach-hero-window:image_focus:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-bottom-panel.webp?v=c09670722ab6" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_focus:2:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-bottom-result.webp?v=46bcc1e62c8c" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «الأسفل» · بصورة تجريبية |
| <img data-update-ref="03-coach-hero-window:image_focus:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-right-panel.webp?v=dcde3e1a52ba" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_focus:3:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-right-result.webp?v=e80df2a1aeed" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليمين» · بصورة تجريبية |
| <img data-update-ref="03-coach-hero-window:image_focus:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-left-panel.webp?v=383f182e0875" alt="لوحة إعدادات (نسخة مطابقة) — مركز الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:image_focus:4:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/10-image_focus-left-result.webp?v=1df7be12adbe" alt="معاينة — مركز الصورة" loading="lazy" decoding="async"/> | «اليسار» · بصورة تجريبية |

### «قوة طبقة اللون فوق الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `win_overlay`
- **ماذا يفعل:** قوة طبقة اللون فوق الصورة داخل القوس: خفيفة أو متوسطة أو قوية.
- **متى تستعمله:** «قوية» للصور الفاتحة حتى تبقى العبارة والزر واضحين.
- شرحه تحت الحقل في المحرّر: «قوية» للصور الفاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:win_overlay:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/11-win_overlay-light-panel.webp?v=a77868ba69cd" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:win_overlay:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/11-win_overlay-light-result.webp?v=0df53009241c" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «خفيفة» |
| <img data-update-ref="03-coach-hero-window:win_overlay:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/11-win_overlay-medium-panel.webp?v=259bc7e63d0c" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:win_overlay:1:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/11-win_overlay-medium-result.webp?v=9ea2f57bf013" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img data-update-ref="03-coach-hero-window:win_overlay:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/11-win_overlay-strong-panel.webp?v=b541819477d3" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:win_overlay:2:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/11-win_overlay-strong-result.webp?v=f7a10ef105b8" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «قوية» |

### «نص الزر الأول»

- **النوع:** نص بسطر واحد · **الافتراضي:** احجز جلستك الأولى · المعرّف `button_label`
- **ماذا يفعل:** نص الزر الأول بجانب العنوان، بلون داكن.
- **متى تستعمله:** لأهم إجراء: الحجز أو الشراء.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:button_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/12-button_label-panel.webp?v=9ccfc5af1e7f" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر الأول" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:button_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/12-button_label-result.webp?v=0fe64a913b9d" alt="معاينة — نص الزر الأول" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الأول»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `button_link`
- **ماذا يفعل:** إلى أين يذهب الزر الأول: منتج، أو تصنيف، أو صفحة، أو رابط آخر.
- **متى تستعمله:** لمنتجك الرئيسي أو صفحة الحجز.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإن لم يوجد أي منهما يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم المتجر إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:button_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/13-button_link-panel.webp?v=6276b0ab16ec" alt="لوحة إعدادات (نسخة مطابقة) — رابط الزر الأول" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:button_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/00-desktop.webp?v=b2b520ce5b16" alt="معاينة — رابط الزر الأول" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص الزر الثاني»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح البرامج · المعرّف `secondary_label`
- **ماذا يفعل:** نص الزر الثاني، بإطار فقط.
- **متى تستعمله:** لإجراء أخفّ: تصفّح البرامج أو التعرّف عليك.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:secondary_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/14-secondary_label-panel.webp?v=37385fd4f15a" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر الثاني" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:secondary_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/14-secondary_label-result.webp?v=56333ceeebc8" alt="معاينة — نص الزر الثاني" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر الثاني»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `secondary_link`
- **ماذا يفعل:** إلى أين يذهب الزر الثاني.
- **متى تستعمله:** لتصنيف برامجك.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإلا يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم المتجر إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:secondary_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/15-secondary_link-panel.webp?v=6d4fcf4f631a" alt="لوحة إعدادات (نسخة مطابقة) — رابط الزر الثاني" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:secondary_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/00-desktop.webp?v=b2b520ce5b16" alt="معاينة — رابط الزر الثاني" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «زر داخل النافذة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ابدأ بجلستك الأولى · المعرّف `inner_label`
- **ماذا يفعل:** زر فاتح داخل النافذة، تحت العبارة، يظهر حين تمتلئ الشاشة.
- **متى تستعمله:** لدعوة أخيرة بعد أن يرى الزائر الصورة كاملة.
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:inner_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/16-inner_label-panel.webp?v=5454f943d5d5" alt="لوحة إعدادات (نسخة مطابقة) — زر داخل النافذة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:inner_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/16-inner_label-result.webp?v=a879f8aa293a" alt="معاينة — زر داخل النافذة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي، أثناء التمرير |

### «رابط الزر داخل النافذة»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `inner_link`
- **ماذا يفعل:** إلى أين يذهب الزر داخل النافذة.
- **متى تستعمله:** لصفحة الحجز.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات؛ وإلا يُخفى الزر عن الزوار.
- شرحه تحت الحقل في المحرّر: بدونه ينزل إلى قسم المتجر إن وُجد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:inner_link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/17-inner_link-panel.webp?v=4b91a4b60421" alt="لوحة إعدادات (نسخة مطابقة) — رابط الزر داخل النافذة" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:inner_link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/00-desktop.webp?v=b2b520ce5b16" alt="معاينة — رابط الزر داخل النافذة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «طول التمرير»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسط (الافتراضي) · المعرّف `scroll_length`
- **ماذا يفعل:** كم يمرّر الزائر حتى تمتلئ الشاشة بالنافذة: قصير أو متوسط أو طويل. أقصر على الجوال.
- **متى تستعمله:** «قصير» إن أردت أن يصل الزائر للأقسام التالية أسرع.
- شرحه تحت الحقل في المحرّر: أقصر على الجوال؛ وبلا «التأثيرات المتحركة» النافذة مفتوحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:scroll_length:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/18-scroll_length-160-panel.webp?v=8de1e25e779c" alt="لوحة إعدادات (نسخة مطابقة) — طول التمرير" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:scroll_length:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/18-scroll_length-160-result.webp?v=1b4b07d5fa16" alt="معاينة — طول التمرير" loading="lazy" decoding="async"/> | «قصير» |
| <img data-update-ref="03-coach-hero-window:scroll_length:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/18-scroll_length-200-panel.webp?v=12bef3a4c981" alt="لوحة إعدادات (نسخة مطابقة) — طول التمرير" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:scroll_length:1:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/18-scroll_length-200-result.webp?v=19cd7eaabf37" alt="معاينة — طول التمرير" loading="lazy" decoding="async"/> | «متوسط (الافتراضي)» |
| <img data-update-ref="03-coach-hero-window:scroll_length:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/18-scroll_length-220-panel.webp?v=06e7c596b6e0" alt="لوحة إعدادات (نسخة مطابقة) — طول التمرير" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:scroll_length:2:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/18-scroll_length-220-result.webp?v=4aa390641f32" alt="معاينة — طول التمرير" loading="lazy" decoding="async"/> | «طويل» |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="03-coach-hero-window:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/19-custom_classes-panel.webp?v=fb8485c88be0" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="03-coach-hero-window:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/03-coach-hero-window/19-custom_classes-result.webp?v=47480e4d392d" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[توضيح العرض]
عند عرض نافذة القوس بلا صورة، تظهر الكلمات المميّزة بلون أفتح وخلفية النافذة أغمق قليلًا للوضوح.
:::
