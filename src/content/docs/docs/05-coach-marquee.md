---
title: "عام · شريط نصي متحرك"
description: "دليل ثيم كوتش 1.76.1 — عام · شريط نصي متحرك"
editUrl: false
---


اسمه في المتجر الإنجليزي: *General · Scrolling text band* · مساره `home.coach-marquee`

**ما يعرضه:** شريط كلمات يتحرك بلا توقف بين الأقسام: مستقيم، أو مائل، أو شريطان متقاطعان.

**متى تضيفه:** للفصل بين قسمين بكلمات قصيرة: مجالاتك، أو وعودك، أو أنواع منتجاتك.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — عام · شريط نصي متحرك" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-mobile.webp" alt="معاينة — عام · شريط نصي متحرك" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

شريط نصوص يتحرك بلا توقف بين الأقسام: مستقيم، أو مائل، أو شريطان متقاطعان يتحرك كل منهما عكس الآخر.

- **النصوص والشكل:** «العناصر» من ٢ إلى ١٠. «الشكل»: «مستقيم» (الافتراضي) أو «مائل» أو «شريطان متقاطعان». للشريط الثاني «نصوص الشريط الثاني»؛ احذفها كلها ليكرر نصوص الأول.
- **الحركة:** «اتجاه الحركة» و«السرعة» («هادئة» أو «متوسطة» أو «سريعة»). «يتوقف عند مرور مؤشر الفأرة» (على الحاسوب فقط، مطفأ). «زر إيقاف وتشغيل للشريط» (مطفأ) للالتزام الكامل بمعايير الوصول. ويثبت الشريط لمن فعّل «تقليل الحركة».
- **الألوان:** «حجم النص» و«الفاصل بين النصوص». «لون الشريط» يبدأ باللون الثانوي للثيم ويتبعه، و«لون النص» يبدأ بلون نص الثيم؛ وأي لون آخر تختاره يبقى كما هو.

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** مستقيم · المعرّف `shape`
- **ماذا يفعل:** شكل الشريط: مستقيم، أو مائل، أو شريطان متقاطعان (الثاني داكن ويتحرك بالعكس).
- **متى تستعمله:** «مائل» أو «متقاطعان» لفاصل لافت، و«مستقيم» لصفحة هادئة.
- شرحه تحت الحقل في المحرّر: المتقاطعان: شريط ثانٍ داكن يتحرك بالعكس.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/01-shape-straight-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «مستقيم» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/01-shape-tilted-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/01-shape-tilted-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «مائل» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/01-shape-crossed-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/01-shape-crossed-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «شريطان متقاطعان» |

### «حجم النص»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسط · المعرّف `size`
- **ماذا يفعل:** حجم النص في الشريط: صغير أو متوسط أو كبير.
- **متى تستعمله:** «كبير» لكلمات قليلة تريدها بارزة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/02-size-small-panel.webp" alt="لوحة إعدادات — حجم النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/02-size-small-result.webp" alt="معاينة — حجم النص" loading="lazy" decoding="async"/> | «صغير» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/02-size-medium-panel.webp" alt="لوحة إعدادات — حجم النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — حجم النص" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «متوسط» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/02-size-large-panel.webp" alt="لوحة إعدادات — حجم النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/02-size-large-result.webp" alt="معاينة — حجم النص" loading="lazy" decoding="async"/> | «كبير» |

### «الفاصل بين النصوص»

- **النوع:** قائمة منسدلة · **الافتراضي:** نجمة ✦ · المعرّف `separator`
- **ماذا يفعل:** الرمز بين كل نص والذي بعده: نجمة، أو نقطة، أو معيّن، أو شرطة، أو بلا فاصل.
- **متى تستعمله:** اختر رمزاً يناسب طابع متجرك.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-star-panel.webp" alt="لوحة إعدادات — الفاصل بين النصوص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — الفاصل بين النصوص" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «نجمة ✦» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-dot-panel.webp" alt="لوحة إعدادات — الفاصل بين النصوص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-dot-result.webp" alt="معاينة — الفاصل بين النصوص" loading="lazy" decoding="async"/> | «نقطة ●» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-diamond-panel.webp" alt="لوحة إعدادات — الفاصل بين النصوص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-diamond-result.webp" alt="معاينة — الفاصل بين النصوص" loading="lazy" decoding="async"/> | «معيّن ◆» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-dash-panel.webp" alt="لوحة إعدادات — الفاصل بين النصوص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-dash-result.webp" alt="معاينة — الفاصل بين النصوص" loading="lazy" decoding="async"/> | «شرطة —» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-none-panel.webp" alt="لوحة إعدادات — الفاصل بين النصوص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/03-separator-none-result.webp" alt="معاينة — الفاصل بين النصوص" loading="lazy" decoding="async"/> | «بلا فاصل» |

### «لون الشريط»

- **النوع:** لون · **الافتراضي:** #E9A86B · المعرّف `bg_color`
- **ماذا يفعل:** لون الشريط. في الشكل المتقاطع هو أيضاً لون نصوص الشريط الثاني.
- **متى تستعمله:** إن أردت لوناً غير اللون الثانوي للثيم.
- **حين يكون فارغاً:** على لونه الافتراضي يتبع اللون الثانوي في «تخصيص الثيم».
- شرحه تحت الحقل في المحرّر: افتراضياً لون الثيم الثانوي؛ وفي المتقاطعين لون نصوص الثاني.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/04-bg_color-panel.webp" alt="لوحة إعدادات — لون الشريط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/04-bg_color-result.webp" alt="معاينة — لون الشريط" loading="lazy" decoding="async"/> | النتيجة بلون تجريبي #1F6F78 |

### «لون النص»

- **النوع:** لون · **الافتراضي:** #1F2A1E · المعرّف `text_color`
- **ماذا يفعل:** لون نصوص الشريط. في الشكل المتقاطع هو أيضاً لون الشريط الثاني.
- **متى تستعمله:** إن غيّرت لون الشريط واحتجت تبايناً أوضح.
- **حين يكون فارغاً:** على لونه الافتراضي يتبع لون نص الثيم.
- شرحه تحت الحقل في المحرّر: افتراضياً لون نص الثيم؛ وفي المتقاطعين لون الشريط الثاني.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/05-text_color-panel.webp" alt="لوحة إعدادات — لون النص" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/05-text_color-result.webp" alt="معاينة — لون النص" loading="lazy" decoding="async"/> | النتيجة بلون تجريبي #1F6F78 |

### «العناصر»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 6 عناصر جاهزة · المعرّف `items`
- **ماذا يفعل:** نصوص الشريط بالترتيب، وتتكرر حتى تملأ العرض.
- **متى تستعمله:** كلمات أو عبارات قصيرة جداً.
- **حين يكون فارغاً:** بلا نصوص لا يظهر الشريط عند الزوار.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/06-items-panel.webp" alt="لوحة إعدادات — العناصر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — العناصر" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «النص»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.text`
- **ماذا يفعل:** نص واحد في الشريط.
- **حين يكون فارغاً:** العنصر الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/06-items-text-panel.webp" alt="لوحة إعدادات — العناصر" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — العناصر" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «نصوص الشريط الثاني»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 6 عناصر جاهزة · المعرّف `items_b`
- **ماذا يفعل:** في الشكل المتقاطع: نصوص الشريط الثاني الداكن.
- **متى تستعمله:** إن أردت كلمات مختلفة في الشريط الثاني.
- **حين يكون فارغاً:** فارغة تتكرر نصوص الشريط الأول.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «شريطان متقاطعان»
- شرحه تحت الحقل في المحرّر: فارغة: تتكرر نصوص الأول.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/07-items_b-panel.webp" alt="لوحة إعدادات — نصوص الشريط الثاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — نصوص الشريط الثاني" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «النص»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items_b.text`
- **ماذا يفعل:** نص واحد في الشريط الثاني.
- **حين يكون فارغاً:** العنصر الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/07-items_b-text-panel.webp" alt="لوحة إعدادات — نصوص الشريط الثاني" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — نصوص الشريط الثاني" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «اتجاه الحركة»

- **النوع:** قائمة منسدلة · **الافتراضي:** مع اتجاه القراءة · المعرّف `direction`
- **ماذا يفعل:** اتجاه الحركة: مع اتجاه القراءة (من اليسار لليمين في العربية) أو عكسه.
- **متى تستعمله:** «عكس القراءة» إن أردت أن يتحرك عكس الشريط الذي فوقه.
- شرحه تحت الحقل في المحرّر: بالعربية «مع القراءة» من اليسار لليمين، وبالإنجليزية العكس.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/08-direction-reading-panel.webp" alt="لوحة إعدادات — اتجاه الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — اتجاه الحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «مع اتجاه القراءة» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/08-direction-reverse-panel.webp" alt="لوحة إعدادات — اتجاه الحركة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — اتجاه الحركة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «عكس اتجاه القراءة» |

### «السرعة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `pace`
- **ماذا يفعل:** سرعة الشريط: هادئة أو متوسطة أو سريعة، وهي نفسها على كل الشاشات مهما كثرت النصوص.
- **متى تستعمله:** «هادئة» لنصوص طويلة تحتاج وقتاً لتُقرأ.
- شرحه تحت الحقل في المحرّر: نفسها على كل الشاشات مهما كثرت النصوص.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/09-pace-slow-panel.webp" alt="لوحة إعدادات — السرعة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/09-pace-normal-result.webp" alt="معاينة — السرعة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «هادئة» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/09-pace-normal-panel.webp" alt="لوحة إعدادات — السرعة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/09-pace-normal-result.webp" alt="معاينة — السرعة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «متوسطة» |
| <img src="/coach-docs/assets/sections/05-coach-marquee/09-pace-fast-panel.webp" alt="لوحة إعدادات — السرعة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/09-pace-fast-result.webp" alt="معاينة — السرعة" loading="lazy" decoding="async"/> | «سريعة» |

### «يتوقف عند مرور مؤشر الفأرة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `pause_hover`
- **ماذا يفعل:** يتوقف الشريط حين يمر عليه مؤشر الفأرة، على الكمبيوتر.
- **متى تستعمله:** إن كانت نصوصك تحتاج قراءة متأنية.
- **حين يكون فارغاً:** مطفأ (الافتراضي): يتحرك دائماً.
- شرحه تحت الحقل في المحرّر: على الحاسوب فقط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/10-pause_hover-panel.webp" alt="لوحة إعدادات — يتوقف عند مرور مؤشر الفأرة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — يتوقف عند مرور مؤشر الفأرة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «زر إيقاف وتشغيل للشريط»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `pause_button`
- **ماذا يفعل:** زر صغير في طرف الشريط يوقفه ويشغّله.
- **متى تستعمله:** لمعايير إمكانية الوصول، لمن تزعجه الحركة.
- **حين يكون فارغاً:** مطفأ (الافتراضي): بلا زر.
- شرحه تحت الحقل في المحرّر: زر صغير في طرفه؛ لمعايير الوصول.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/05-coach-marquee/11-pause_button-panel.webp" alt="لوحة إعدادات — زر إيقاف وتشغيل للشريط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/05-coach-marquee/00-desktop.webp" alt="معاينة — زر إيقاف وتشغيل للشريط" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** تغيير شكل هذا القسم بالكلاسات الجاهزة، أو بكلاس خاص يُنسّق من خانة CSS في سلة.
- **طريقة الإدخال:** كلمات لاتينية بينها مسافة أو فاصلة، حتى ثماني كلمات.
- **حين يكون فارغًا:** يبقى القسم بشكله الافتراضي.

[شرح الكلاسات الجاهزة وطريقة استخدامها](/coach-docs/docs/01-shared/#custom-classes).
