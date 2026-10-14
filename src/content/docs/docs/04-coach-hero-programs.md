---
title: "واجهة · معرض البرامج (شكلان)"
description: "دليل ثيم كوتش 1.76.1 — واجهة · معرض البرامج (شكلان)"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Hero · Program gallery (2 layouts)* · مساره `home.coach-hero-programs`

**ما يعرضه:** واجهة تعرض برنامجاً واحداً في كل مرة، والبقية تتبعه بالأسهم أو المصغّرات أو السحب بلا نهاية. الاسم والسعر والصورة وزر الإضافة كلها من المنتج في سلة.

**متى تضيفه:** أول الصفحة لمتجر برامجه هي الواجهة، بدل صورة شخصية.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — واجهة · معرض البرامج (شكلان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-mobile.webp" alt="معاينة — واجهة · معرض البرامج (شكلان)" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

برنامج واحد في الواجهة بصورته ونوعه وتقييمه ووصفه وسعره وزر الإضافة للسلة، وبالأسهم تنتقل للتالي ثم تعود للأول بلا نهاية. كل البيانات من المنتج في سلة.

- **الشكل:** «تحت الضوء» (الافتراضي): صورة تنكشف من جهة الانتقال، وبجانبها النص والأسهم والمصغّرات (أو نقاط إن أطفأت «المصغّرات تحت الأسهم»)؛ و«شكل تحت الضوء»: الصورة بجانب النص، أو صورة كبيرة بنصف العرض، أو الصورة فوق النص. «عرض دائري»: الصور في صف والنشط في الوسط، والنص تحتها، والضغط على صورة جانبية ينقل إليها؛ و«شكل العرض الدائري»: مائلة أو مسطّحة أو بطاقة كبيرة في الوسط. و«مكان النص» قبل الصورة أو بعدها، وفوق الصور أو تحتها.
- **شكل البطاقات حسب النوع:** «تلقائي» من اسم التصنيف أو نوع المنتج، أو اختر «برامج ودورات» أو «كتب» أو «منتجات رقمية» إن اختلفت أسماء تصنيفاتك، أو «صورة كاملة للكل». الكتاب يظهر غلافاً قائماً، والبرنامج يظهر المستوى والمدة على الصورة (من العنوان الفرعي مثل «متوسط | ٦ لقاءات»)، حسب «بطاقة الدورات» و«بطاقة الكتب» في تخصيص الثيم.
- **أول الصفحة:** يأخذ القسم ارتفاع الشاشة على الكمبيوتر، و«حركة مع التمرير» (مفعّلة) تجعله ينكمش ويتلاشى مع النزول إن كان ممدّداً بخلفية صورة أو داكنة، وتلاشياً هادئاً في غير ذلك. ومع «شكل الهيدر: مدمج مع الواجهة» وخلفية صورة أو داكنة يصير الهيدر شفافاً فوق القسم.
- **المنتجات:** «مصدر المنتجات» منتجات تختارها (من ٣ إلى ٦)، أو الأحدث، أو الأكثر مبيعاً، أو من تصنيفات. و«شارة كل منتج وميزاته» بترتيب المنتجات: الشارة على الصورة، والميزات (مثل عدد الدروس والساعات والمستوى) سطراً سطراً؛ بلا ميزات تظهر وسوم المنتج.
- **الخلفية:** «بدون» (الافتراضي) فاتح على لون الصفحة. و«صورة المنتج المعروض بطبقة من لون الثيم» تتبدّل مع كل برنامج، و«قوة طبقة اللون فوق صورة المنتج» خفيفة أو متوسطة أو قوية؛ وبقية خيارات «خلفية القسم» كالأقسام الأخرى.
- **التشغيل:** «الأسهم» تحت النص مع العدّاد (الافتراضي) أو على جانبي القسم (للكمبيوتر) أو بلا أسهم فيبقى التنقل بالمصغّرات والصور والسحب. و«تشغيل تلقائي» (مفعّل) ينتقل كل «مدة البرنامج» ثوانٍ بشريط تقدّم؛ يتوقف عند المرور بالفأرة والتنقل بلوحة المفاتيح داخل القسم وخارج الشاشة، ولا يعمل لمن فعّل «تقليل الحركة».
- بلا «التأثيرات المتحركة» يتبدّل البرنامج فوراً بلا حركة.

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** تحت الضوء · المعرّف `layout`
- **ماذا يفعل:** شكلان: «تحت الضوء» برنامج كبير بجانب نصه، و«عرض دائري» بطاقات تدور حول البرنامج الحالي.
- **متى تستعمله:** «تحت الضوء» لبرامج قليلة بصور قوية، و«العرض الدائري» لستة برامج تُرى معاً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/01-layout-spot-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «تحت الضوء» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/01-layout-flow-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/01-layout-flow-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «عرض دائري» |

### «شكل تحت الضوء»

- **النوع:** قائمة منسدلة · **الافتراضي:** الصورة بجانب النص · المعرّف `spot_look`
- **ماذا يفعل:** في «تحت الضوء»: الصورة بجانب النص، أو صورة كبيرة بنصف العرض، أو الصورة فوق النص.
- **متى تستعمله:** الصورة الكبيرة لأغلفة واضحة، والصورة فوق النص لعناوين طويلة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «تحت الضوء»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/02-spot_look-side-panel.webp" alt="لوحة إعدادات — شكل تحت الضوء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — شكل تحت الضوء" loading="lazy" decoding="async"/> | «الصورة بجانب النص» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/02-spot_look-wide-panel.webp" alt="لوحة إعدادات — شكل تحت الضوء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/02-spot_look-wide-result.webp" alt="معاينة — شكل تحت الضوء" loading="lazy" decoding="async"/> | «صورة كبيرة بنصف العرض» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/02-spot_look-stack-panel.webp" alt="لوحة إعدادات — شكل تحت الضوء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/02-spot_look-stack-result.webp" alt="معاينة — شكل تحت الضوء" loading="lazy" decoding="async"/> | «الصورة فوق النص» |

### «شكل العرض الدائري»

- **النوع:** قائمة منسدلة · **الافتراضي:** بطاقات مائلة · المعرّف `flow_look`
- **ماذا يفعل:** في «العرض الدائري»: بطاقات مائلة، أو مسطّحة، أو بطاقة كبيرة في الوسط.
- **متى تستعمله:** البطاقة الكبيرة في الوسط تبرز البرنامج الحالي أكثر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «عرض دائري»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/03-flow_look-tilt-panel.webp" alt="لوحة إعدادات — شكل العرض الدائري" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/03-flow_look-tilt-result.webp" alt="معاينة — شكل العرض الدائري" loading="lazy" decoding="async"/> | «بطاقات مائلة» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/03-flow_look-flat-panel.webp" alt="لوحة إعدادات — شكل العرض الدائري" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/03-flow_look-flat-result.webp" alt="معاينة — شكل العرض الدائري" loading="lazy" decoding="async"/> | «بطاقات مسطّحة» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/03-flow_look-focus-panel.webp" alt="لوحة إعدادات — شكل العرض الدائري" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/03-flow_look-focus-result.webp" alt="معاينة — شكل العرض الدائري" loading="lazy" decoding="async"/> | «بطاقة كبيرة في الوسط» |

### «مكان النص»

- **النوع:** قائمة منسدلة · **الافتراضي:** قبل الصورة (بداية السطر) · المعرّف `spot_text`
- **ماذا يفعل:** مكان النص قبل الصورة أو بعدها في «تحت الضوء». على الجوال الصورة فوق النص دائماً.
- **متى تستعمله:** حسب اتجاه نظر الصورة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «تحت الضوء»
- شرحه تحت الحقل في المحرّر: مع «الصورة بجانب النص» و«صورة كبيرة»؛ على الجوال الصورة فوق النص.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/04-spot_text-start-panel.webp" alt="لوحة إعدادات — مكان النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — مكان النص" loading="lazy" decoding="async"/> | «قبل الصورة (بداية السطر)» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/04-spot_text-end-panel.webp" alt="لوحة إعدادات — مكان النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/04-spot_text-end-result.webp" alt="معاينة — مكان النص" loading="lazy" decoding="async"/> | «بعد الصورة (نهاية السطر)» |

### «مكان النص»

- **النوع:** قائمة منسدلة · **الافتراضي:** تحت الصور · المعرّف `flow_text`
- **ماذا يفعل:** مكان النص تحت الصور أو فوقها في «العرض الدائري».
- **متى تستعمله:** فوق الصور حين يكون الاسم أهم من الغلاف.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «عرض دائري»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/05-flow_text-below-panel.webp" alt="لوحة إعدادات — مكان النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/05-flow_text-below-result.webp" alt="معاينة — مكان النص" loading="lazy" decoding="async"/> | «تحت الصور» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/05-flow_text-above-panel.webp" alt="لوحة إعدادات — مكان النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/05-flow_text-above-result.webp" alt="معاينة — مكان النص" loading="lazy" decoding="async"/> | «فوق الصور» |

### «مصدر المنتجات»

- **النوع:** قائمة منسدلة · **الافتراضي:** منتجات أختارها · المعرّف `source`
- **ماذا يفعل:** مصدر البرامج: اختيار يدوي، أو الأحدث، أو الأكثر مبيعاً، أو من تصنيفات محددة.
- **متى تستعمله:** الاختيار اليدوي للتحكم بالترتيب، والتلقائي لمتجر تتغيّر برامجه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-selected-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «منتجات أختارها» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-latest-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-latest-result.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «الأحدث» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-sales-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-sales-result.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «الأكثر مبيعاً» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-categories-panel.webp" alt="لوحة إعدادات — مصدر المنتجات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/06-source-categories-result.webp" alt="معاينة — مصدر المنتجات" loading="lazy" decoding="async"/> | «من تصنيفات محددة» |

### «المنتجات (بالترتيب)»

- **النوع:** اختيار منتج أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `products`
- **ماذا يفعل:** البرامج المعروضة بالترتيب، من ٣ إلى ٦.
- **متى تستعمله:** لترتيب يبدأ بالبرنامج الأهم.
- **حين يكون فارغاً:** بدونها تظهر أحدث المنتجات.
- **يظهر في اللوحة فقط حين:** «مصدر المنتجات» هو «منتجات أختارها»
- شرحه تحت الحقل في المحرّر: من ٣ إلى ٦؛ بدونها أحدث المنتجات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/07-products-panel.webp" alt="لوحة إعدادات — المنتجات (بالترتيب)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — المنتجات (بالترتيب)" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «التصنيفات»

- **النوع:** اختيار تصنيف أو أكثر من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `categories`
- **ماذا يفعل:** التصنيفات التي تُؤخذ منها البرامج مع «من تصنيفات محددة».
- **متى تستعمله:** لقسم خاص بالبرامج المسجّلة أو الكتب.
- **حين يكون فارغاً:** بدونها تظهر أحدث المنتجات.
- **يظهر في اللوحة فقط حين:** «مصدر المنتجات» هو «من تصنيفات محددة»
- شرحه تحت الحقل في المحرّر: بدونها أحدث المنتجات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/08-categories-panel.webp" alt="لوحة إعدادات — التصنيفات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — التصنيفات" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «عدد المنتجات (٣–٦)»

- **النوع:** رقم · **الافتراضي:** 6 · المعرّف `limit`
- **ماذا يفعل:** عدد البرامج للمصادر التلقائية، من ٣ إلى ٦.
- شرحه تحت الحقل في المحرّر: للمصادر التلقائية.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/09-limit-panel.webp" alt="لوحة إعدادات — عدد المنتجات (٣–٦)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — عدد المنتجات (٣–٦)" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «شكل البطاقات حسب النوع»

- **النوع:** قائمة منسدلة · **الافتراضي:** تلقائي حسب نوع المنتج · المعرّف `card_kind`
- **ماذا يفعل:** شكل البطاقة حسب نوع المنتج: تلقائي من اسم التصنيف أو نوع المنتج، أو نوع واحد للكل، أو صورة كاملة.
- **متى تستعمله:** يدوياً إن كانت أسماء التصنيفات لا تدل على النوع.
- شرحه تحت الحقل في المحرّر: التلقائي من اسم التصنيف أو نوع المنتج؛ يُختار النوع يدوياً إن اختلفت الأسماء. الشكل من «بطاقة البرامج» و«بطاقة الكتب» في تخصيص الثيم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-auto-panel.webp" alt="لوحة إعدادات — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | «تلقائي حسب نوع المنتج» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-course-panel.webp" alt="لوحة إعدادات — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-course-result.webp" alt="معاينة — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | «برامج» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-book-panel.webp" alt="لوحة إعدادات — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-book-result.webp" alt="معاينة — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | «كتب» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-digital-panel.webp" alt="لوحة إعدادات — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-digital-result.webp" alt="معاينة — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | «منتجات رقمية» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-plain-panel.webp" alt="لوحة إعدادات — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/10-card_kind-plain-result.webp" alt="معاينة — شكل البطاقات حسب النوع" loading="lazy" decoding="async"/> | «صورة كاملة للكل» |

### «شارة كل منتج وميزاته»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** بلا عناصر · المعرّف `badges`
- **ماذا يفعل:** شارة قصيرة وميزات لكل برنامج، بترتيب البرامج.
- **متى تستعمله:** لـ«الأكثر طلباً» أو «جديد».
- **حين يكون فارغاً:** فارغة: بلا شارة، وتظهر وسوم المنتج بدل الميزات.
- شرحه تحت الحقل في المحرّر: بترتيب المنتجات. فارغة: بلا شارة؛ وبلا ميزات: وسوم المنتج.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/11-badges-panel.webp" alt="لوحة إعدادات — شارة كل منتج وميزاته" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — شارة كل منتج وميزاته" loading="lazy" decoding="async"/> |  |

#### «الشارة»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `badges.text`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/11-badges-text-panel.webp" alt="لوحة إعدادات — شارة كل منتج وميزاته" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — شارة كل منتج وميزاته" loading="lazy" decoding="async"/> |  |

#### «الميزات»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `badges.points`
- **ماذا يفعل:** ميزة في كل سطر، حتى أربع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/11-badges-points-panel.webp" alt="لوحة إعدادات — شارة كل منتج وميزاته" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — شارة كل منتج وميزاته" loading="lazy" decoding="async"/> |  |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** نص زر الإضافة للسلة.
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة».
- شرحه تحت الحقل في المحرّر: فارغاً يظهر «أضف للسلة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/12-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المصغّرات تحت الأسهم»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `thumbs`
- **ماذا يفعل:** صور مصغّرة للبرامج تحت الأسهم، للتنقل المباشر.
- **حين يكون فارغاً:** مطفأة: التنقل بالأسهم والسحب.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «تحت الضوء»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/13-thumbs-panel.webp" alt="لوحة إعدادات — المصغّرات تحت الأسهم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/13-thumbs-off-result.webp" alt="معاينة — المصغّرات تحت الأسهم" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «الأسهم»

- **النوع:** قائمة منسدلة · **الافتراضي:** تحت النص مع العدّاد · المعرّف `arrows`
- **ماذا يفعل:** الأسهم تحت النص مع العدّاد، أو على جانبي القسم، أو بلا أسهم.
- **متى تستعمله:** الجانبان لواجهة عريضة بلا مصغّرات.
- **حين يكون فارغاً:** بلا أسهم: التنقل بالمصغّرات والصور والسحب.
- شرحه تحت الحقل في المحرّر: على الجانبين للحاسوب، وتحت النص على الجوال. بلا أسهم: التنقل بالمصغّرات والصور والسحب.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/14-arrows-bar-panel.webp" alt="لوحة إعدادات — الأسهم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/14-arrows-bar-result.webp" alt="معاينة — الأسهم" loading="lazy" decoding="async"/> | «تحت النص مع العدّاد» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/14-arrows-sides-panel.webp" alt="لوحة إعدادات — الأسهم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/14-arrows-sides-result.webp" alt="معاينة — الأسهم" loading="lazy" decoding="async"/> | «على جانبي القسم» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/14-arrows-none-panel.webp" alt="لوحة إعدادات — الأسهم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/14-arrows-none-result.webp" alt="معاينة — الأسهم" loading="lazy" decoding="async"/> | «بلا أسهم» |

### «تشغيل تلقائي»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `autoplay`
- **ماذا يفعل:** ينتقل للبرنامج التالي تلقائياً. يتوقف عند المرور بالمؤشر وعند التنقل بلوحة المفاتيح وخارج الشاشة، ولا يعمل مع تقليل الحركة.
- **حين يكون فارغاً:** مطفأ: لا ينتقل إلا بيد الزائر.
- شرحه تحت الحقل في المحرّر: يتوقف عند المرور والتنقل بلوحة المفاتيح وخارج الشاشة، ولا يعمل مع تقليل الحركة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/15-autoplay-panel.webp" alt="لوحة إعدادات — تشغيل تلقائي" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — تشغيل تلقائي" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «مدة عرض كل برنامج (٤–١٢ ثانية)»

- **النوع:** رقم · **الافتراضي:** 6 · المعرّف `interval`
- **ماذا يفعل:** مدة كل برنامج قبل الانتقال، من ٤ إلى ١٢ ثانية.
- **متى تستعمله:** مدة أطول لنصوص أطول.
- **يظهر في اللوحة فقط حين:** «تشغيل تلقائي» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/16-interval-panel.webp" alt="لوحة إعدادات — مدة عرض كل برنامج (٤–١٢ ثانية)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — مدة عرض كل برنامج (٤–١٢ ثانية)" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «حركة مع التمرير»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `scroll_motion`
- **ماذا يفعل:** إن كان أول قسم: ينكمش ويتلاشى مع النزول، وعلى الجوال تلاشٍ فقط.
- **حين يكون فارغاً:** مطفأة أو مع إيقاف «التأثيرات المتحركة»: يبقى ثابتاً.
- شرحه تحت الحقل في المحرّر: إن كان أول قسم: ينكمش ويتلاشى مع النزول، والجوال تلاشٍ فقط؛ يوقفها «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/17-scroll_motion-panel.webp" alt="لوحة إعدادات — حركة مع التمرير" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/00-desktop.webp" alt="معاينة — حركة مع التمرير" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «قوة طبقة اللون فوق صورة المنتج»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `section_bg_tint_product`
- **ماذا يفعل:** قوة طبقة اللون فوق صورة المنتج.
- **متى تستعمله:** «قوية» للصور الفاتحة حتى يبقى النص مقروءاً.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة المنتج المعروض بطبقة من لون الثيم»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/18-section_bg_tint_product-light-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق صورة المنتج" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/18-section_bg_tint_product-light-result.webp" alt="معاينة — قوة طبقة اللون فوق صورة المنتج" loading="lazy" decoding="async"/> | «خفيفة» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/18-section_bg_tint_product-medium-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق صورة المنتج" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/18-section_bg_tint_product-medium-result.webp" alt="معاينة — قوة طبقة اللون فوق صورة المنتج" loading="lazy" decoding="async"/> | «متوسطة» |
| <img src="/coach-docs/assets/sections/04-coach-hero-programs/18-section_bg_tint_product-strong-panel.webp" alt="لوحة إعدادات — قوة طبقة اللون فوق صورة المنتج" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/04-coach-hero-programs/18-section_bg_tint_product-strong-result.webp" alt="معاينة — قوة طبقة اللون فوق صورة المنتج" loading="lazy" decoding="async"/> | «قوية» |


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
