---
title: "عروض · بانر عرض (٣ أشكال)"
description: "دليل ثيم كوتش 1.76.1 — عروض · بانر عرض (٣ أشكال)"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Offers · Offer banner (3 layouts)* · مساره `home.coach-offer-banner`

**ما يعرضه:** بانر عرض بعرض الصفحة في ثلاثة أشكال: صورة ونصوص وكود خصم وزر، وشريط داكن بعدّاد. يختفي وحده بعد موعد انتهاء العرض.

**متى تضيفه:** لعرض محدود المدة أو كود خصم تريد أن يراه كل زائر.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — عروض · بانر عرض (٣ أشكال)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-mobile.webp" alt="معاينة — عروض · بانر عرض (٣ أشكال)" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

بانر عرض بعرض الصفحة، والصورة في بدايته دائماً (يميناً بالعربية). اختر من «الشكل»: «منقسم على خلفية خوخية»، أو «قوس على خلفية خضراء» (الصورة داخل قوس ورقم كبير فوق العنوان)، أو «شريط أبيض أفقي» (الزر في طرفه). على الجوال يصير عموداً واحداً والصورة أعلاه.

- **النصوص:** «الشارة» (مثل «حتى ٣١ أكتوبر» أو «جديد»)، و«العنوان» و«الوصف». «الرقم الكبير» يظهر في شكل القوس فقط، ويكمله العنوان: «٣٠٪» ثم «على الدورات المسجّلة هذا الأسبوع». و«السطر الصغير» وأيقونته في الشكل الأفقي فقط. كل حقل فارغ يختفي مكانه.
- **كود الخصم:** اختياري. يظهر بعد «استخدم الكود»، وينسخه الزائر بضغطة. أنشئ الكوبون أولاً في «التسويق ← كوبونات التخفيض»، فالثيم لا يتحقق منه. ولا يأتي القسم بكود افتراضي، لأن كوداً لم تُنشئه يرفضه الدفع.
- **الزر:** «نص الزر» و«رابط الزر» (تصنيف العرض مثلاً). بدون رابط يأخذ الزر الزائر إلى قسم «متجر · كل المنتجات بتبويبات» أو إلى أول قسم فيه منتجات.
- **شريط العرض والموعد:** شريط داكن أعلى البانر في الأشكال الثلاثة. مع «ينتهي العرض في» (مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م؛ تاريخ بلا وقت ينتهي آخر ذلك اليوم) يظهر فيه «ينتهي العرض خلال» وعدّاد تنازلي، وبعد الموعد يختفي البانر عن الزوار وحده، والمحرّر يقول لماذا. و«نص الشريط» سطر تكتبه بجانب العدّاد، مثل «شحن مجاني للطلبات فوق ٢٠٠ ر.س». بدون موعد وبدون نص لا يظهر الشريط.
- **تحريك الشريط:** «تحريك الشريط بلا نهاية» (معطّل) يجعله يتحرك أفقياً بلا توقف مثل «عام · شريط نصي متحرك»، و«التوقف عند مرور المؤشر» (مفعّل) يوقفه ما دام المؤشر فوقه. لا يتحرك لمن فعّل «تقليل الحركة».
- **جاهز للاستخدام:** يأتي بصورة من التصميم ونصوص عرض على الكتب، فاستبدلها بعرضك.

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** ١ · منقسم على خلفية خوخية · المعرّف `layout`
- **ماذا يفعل:** شكل البانر: منقسم على خلفية خوخية، أو قوس على خلفية خضراء، أو شريط أبيض أفقي. النصوص والصورة تبقى عند التبديل، وعلى الجوال عمود والصورة أعلاه.
- **متى تستعمله:** «قوس» لخصم بنسبة كبيرة، و«شريط» لعرض أهدأ بين الأقسام.
- شرحه تحت الحقل في المحرّر: النصوص والصورة تبقى؛ على الجوال عمود والصورة أعلاه.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/01-layout-split-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «١ · منقسم على خلفية خوخية» |
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/01-layout-arch-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/01-layout-arch-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٢ · قوس على خلفية خضراء» |
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/01-layout-strip-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/01-layout-strip-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٣ · شريط أبيض أفقي» |

### «الشارة»

- **النوع:** نص بسطر واحد · **الافتراضي:** لفترة محدودة · المعرّف `badge`
- **ماذا يفعل:** شارة صغيرة، مثل «لفترة محدودة» أو «حتى ٣١ أكتوبر».
- **متى تستعمله:** لتوضيح أن العرض مؤقت.
- **حين يكون فارغاً:** فارغة لا تظهر.
- شرحه تحت الحقل في المحرّر: مثل «حتى ٣١ أكتوبر» أو «جديد»؛ فارغة تُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/02-badge-panel.webp" alt="لوحة إعدادات — الشارة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/02-badge-result.webp" alt="معاينة — الشارة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الرقم الكبير»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٢٠٪ · المعرّف `big_number`
- **ماذا يفعل:** في الشكل ٢ فقط: رقم كبير فوق العنوان، مثل نسبة الخصم «٣٠٪».
- **متى تستعمله:** حين يكون الخصم رقماً لافتاً.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · قوس على خلفية خضراء»
- شرحه تحت الحقل في المحرّر: نسبة الخصم فوق العنوان، مثل «٣٠٪»؛ فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/03-big_number-panel.webp" alt="لوحة إعدادات — الرقم الكبير" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — الرقم الكبير" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «السطر الصغير»

- **النوع:** نص بسطر واحد · **الافتراضي:** من مكتبتي · المعرّف `eyebrow`
- **ماذا يفعل:** في الشكل ٣ فقط: سطر صغير فوق العنوان، مثل «منتجات رقمية».
- **متى تستعمله:** لتسمية فئة العرض.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٣ · شريط أبيض أفقي»
- شرحه تحت الحقل في المحرّر: فوق العنوان، مثل «منتجات رقمية»؛ فارغاً يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/04-eyebrow-panel.webp" alt="لوحة إعدادات — السطر الصغير" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — السطر الصغير" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «العنوان»

- **النوع:** نص بعدة أسطر · **الافتراضي:** خصم على كل الكتب · المعرّف `title`
- **ماذا يفعل:** عنوان العرض. كل سطر تكتبه سطر في العنوان.
- **متى تستعمله:** ما الخصم وعلى ماذا، في كلمات قليلة.
- **حين يكون فارغاً:** إن فرغ العنوان والرقم الكبير والوصف معاً لا يظهر البانر.
- شرحه تحت الحقل في المحرّر: كل سطر هنا سطر في العنوان.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/05-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/05-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** ورقية وإلكترونية وصوتية، بخصم لفترة محدودة. · المعرّف `description`
- **ماذا يفعل:** سطر تحت العنوان بتفاصيل العرض.
- **متى تستعمله:** مثل: الخصم يُطبَّق تلقائياً في السلة.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/06-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/06-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «كود الخصم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `code`
- **ماذا يفعل:** كود الخصم في كبسولة يُنسخ بضغطة. أنشئه أولاً من «التسويق ← كوبونات التخفيض» في سلة.
- **متى تستعمله:** إن كان العرض بكود يكتبه العميل.
- **حين يكون فارغاً:** فارغاً لا تظهر الكبسولة.
- شرحه تحت الحقل في المحرّر: من «التسويق ← كوبونات التخفيض» في سلة؛ يُنسخ بضغطة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/07-code-panel.webp" alt="لوحة إعدادات — كود الخصم" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — كود الخصم" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «الصورة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `image`
- **ماذا يفعل:** صورة العرض، أفقية بعرض ١٢٠٠ تقريباً.
- **متى تستعمله:** صورة غلاف الكتاب أو الدورة المعروضة.
- **حين يكون فارغاً:** بدونها يملأ النص البانر.
- شرحه تحت الحقل في المحرّر: أفقية بعرض ١٢٠٠ تقريباً؛ بدونها يملأ النص البانر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/08-image-panel.webp" alt="لوحة إعدادات — الصورة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/08-image-result.webp" alt="معاينة — الصورة" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «نص الزر»

- **النوع:** نص بسطر واحد · **الافتراضي:** تصفّح الكتب · المعرّف `cta_label`
- **ماذا يفعل:** نص الزر.
- **متى تستعمله:** مثل «تصفّح الكتب».
- **حين يكون فارغاً:** فارغاً يُخفى الزر.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/09-cta_label-panel.webp" alt="لوحة إعدادات — نص الزر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/09-cta_label-result.webp" alt="معاينة — نص الزر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «رابط الزر»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `cta_link`
- **ماذا يفعل:** إلى أين يذهب الزر، مثل تصنيف العرض.
- **متى تستعمله:** لتصنيف المنتجات المخفّضة.
- **حين يكون فارغاً:** بدونه ينزل إلى «متجر · كل المنتجات بتبويبات» إن وُجد، وإلا إلى أول قسم منتجات، وإلا إلى صفحة المنتجات.
- شرحه تحت الحقل في المحرّر: تصنيف العرض مثلاً؛ بدونه ينزل إلى قسم المنتجات في الصفحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/10-cta_link-panel.webp" alt="لوحة إعدادات — رابط الزر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — رابط الزر" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «ينتهي العرض في»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `end_date`
- **ماذا يفعل:** موعد انتهاء العرض، مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م. يظهر عدّاد في الشريط، ويختفي البانر عند انتهاء الموعد.
- **متى تستعمله:** لعرض له نهاية محددة.
- **حين يكون فارغاً:** فارغاً بلا عدّاد ولا يختفي البانر. وإن كُتب بشكل غير مفهوم تظهر في المحرّر ملاحظة.
- شرحه تحت الحقل في المحرّر: مثل 2026-12-31 23:59 أو 31/12/2026 8:00 م؛ عدّاد ثم يختفي البانر. فارغاً أو غير مفهوم: بلا عدّاد.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/11-end_date-panel.webp" alt="لوحة إعدادات — ينتهي العرض في" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — ينتهي العرض في" loading="lazy" decoding="async"/> | النتيجة: القسم بالقيمة الافتراضية |

### «نص الشريط»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `strip_text`
- **ماذا يفعل:** نص في الشريط الداكن أعلى البانر، بجانب العدّاد.
- **متى تستعمله:** لجملة عاجلة: «الأماكن محدودة».
- **حين يكون فارغاً:** بلا نص ولا موعد لا يظهر الشريط.
- شرحه تحت الحقل في المحرّر: في الشريط الداكن أعلى البانر؛ بلا نص ولا موعد لا يظهر الشريط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/12-strip_text-panel.webp" alt="لوحة إعدادات — نص الشريط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/12-strip_text-result.webp" alt="معاينة — نص الشريط" loading="lazy" decoding="async"/> | النتيجة بنص تجريبي «مثال لنصّك هنا» |

### «تحريك الشريط بلا نهاية»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `strip_scroll`
- **ماذا يفعل:** الشريط الداكن يتحرك بلا نهاية مثل «عام · شريط نصي متحرك».
- **متى تستعمله:** لشد الانتباه إلى العدّاد.
- **حين يكون فارغاً:** مطفأ (الافتراضي): الشريط ثابت.
- شرحه تحت الحقل في المحرّر: مثل «عام · شريط نصي متحرك».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/13-strip_scroll-panel.webp" alt="لوحة إعدادات — تحريك الشريط بلا نهاية" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — تحريك الشريط بلا نهاية" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «التوقف عند مرور المؤشر»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `strip_hold`
- **ماذا يفعل:** الشريط المتحرك يتوقف حين يمر عليه المؤشر.
- **متى تستعمله:** اتركه مفعّلاً ليقرأ الزائر النص.
- **حين يكون فارغاً:** مطفأ: يتحرك دائماً.
- **يظهر في اللوحة فقط حين:** «تحريك الشريط بلا نهاية» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/14-strip_hold-panel.webp" alt="لوحة إعدادات — التوقف عند مرور المؤشر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — التوقف عند مرور المؤشر" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «خلفية متحركة بالألوان»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `fx_motion`
- **ماذا يفعل:** في الشكل ٢ فقط: تدرّج متحرك بألوان الثيم خلف اللوح الداكن. ثابت على الجوال، ويتوقف مع إطفاء «التأثيرات المتحركة».
- **متى تستعمله:** لعرض تريده أن يلفت النظر.
- **حين يكون فارغاً:** مطفأ (الافتراضي): خلفية ثابتة.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · قوس على خلفية خضراء»
- شرحه تحت الحقل في المحرّر: تدرّج بألوان الثيم خلف اللوحة الداكنة؛ ثابت للجوال وبلا «التأثيرات المتحركة».

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/15-fx_motion-panel.webp" alt="لوحة إعدادات — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/15-fx_motion-on-result.webp" alt="معاينة — خلفية متحركة بالألوان" loading="lazy" decoding="async"/> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «سرعة الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `fx_speed`
- **ماذا يفعل:** سرعة الخلفية المتحركة: هادئة أو متوسطة أو أسرع.
- **متى تستعمله:** «هادئة» لحركة لا تشتّت عن النص.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-slow-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «هادئة» |
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-normal-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-normal-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-fast-panel.webp" alt="لوحة إعدادات — سرعة الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-fast-result.webp" alt="معاينة — سرعة الحركة" loading="lazy" decoding="async"/> | «أسرع» |

### «ألوان الخلفية المتحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** ألوان الثيم · المعرّف `fx_palette`
- **ماذا يفعل:** ألوان الخلفية المتحركة: ألوان الثيم، أو ليلي، أو دافئ.
- **متى تستعمله:** اختر ما يناسب العرض.
- **يظهر في اللوحة فقط حين:** «خلفية متحركة بالألوان» هو «مفعّل»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/17-fx_palette-theme-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/00-desktop.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ألوان الثيم» |
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/17-fx_palette-night-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-normal-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «ليلي» |
| <img src="/coach-docs/assets/sections/13-coach-offer-banner/17-fx_palette-warm-panel.webp" alt="لوحة إعدادات — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/13-coach-offer-banner/16-fx_speed-fast-result.webp" alt="معاينة — ألوان الخلفية المتحركة" loading="lazy" decoding="async"/> | «دافئ» |


<div class="source-note">الإصدار 1.76.1 · صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
