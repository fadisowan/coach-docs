---
title: "ثقة · ظهرتُ في"
description: "دليل ثيم كوتش 1.76.1 — ثقة · ظهرتُ في"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Trust · As featured in* · مساره `home.coach-press`

**ما يعرضه:** سطر واحد بشعارات أو أسماء جهات إعلامية وشركاء ظهرت معهم. الجهة بلا شعار يُكتب اسمها.

**متى تضيفه:** تحت الواجهة مباشرة، لتبني الثقة من أول الصفحة.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="06-coach-press:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/00-desktop.webp?v=d41bf22aafda" alt="معاينة — ثقة · ظهرتُ في" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/00-mobile.webp?v=62e3faa78f90" alt="معاينة — ثقة · ظهرتُ في" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

سطر هادئ بأسماء أو شعارات الجهات الإعلامية والشركاء. الشعار رمادي ويأخذ لونه عند مرور المؤشر، وبلا شعار يُكتب الاسم بخط العناوين.

- **أهم الإعدادات:** «العنوان في بداية السطر» (الافتراضي «ظهرتُ في»). «الجهات» حتى ٨، لكل جهة «الاسم» و«الشعار (اختياري)» (PNG أو SVG بخلفية شفافة، بارتفاع ٤٠ بكسل على الأقل) و«الرابط (اختياري)».
- **مهم:** الجهات الافتراضية من التصميم للعرض فقط، تُكتب مكانها الجهات الحقيقية أو يُحذف القسم.
- **خيارات إضافية:** «الشعارات بألوانها» (مطفأ: رمادية)، و«حجم الشعارات»: «صغير (الافتراضي)» أو «متوسط» أو «كبير».

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان في بداية السطر»

- **النوع:** نص بسطر واحد · **الافتراضي:** ظهرتُ في · المعرّف `label`
- **ماذا يفعل:** عنوان قصير في بداية السطر، مثل «ظهرتُ في».
- **متى تستعمله:** لتوضيح معنى الشعارات.
- **حين يكون فارغاً:** فارغاً تظهر الشعارات وحدها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/01-label-panel.webp?v=bd323504f56f" alt="لوحة إعدادات (نسخة مطابقة) — العنوان في بداية السطر" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/01-label-result.webp?v=ef3834a0a999" alt="معاينة — العنوان في بداية السطر" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الجهات»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 5 عناصر جاهزة · المعرّف `logos`
- **ماذا يفعل:** الجهات بالترتيب: اسم وشعار ورابط لكل جهة.
- **متى تستعمله:** قنوات أو مؤتمرات أو شركات تعاملت معها.
- **حين يكون فارغاً:** بلا جهات لا يظهر القسم عند الزوار.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:logos:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-panel.webp?v=2c45f4d3fdfc" alt="لوحة إعدادات (نسخة مطابقة) — الجهات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logos:0:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-result.webp?v=4e4af2e13890" alt="معاينة — الجهات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `logos.name`
- **ماذا يفعل:** اسم الجهة. يُكتب مكان الشعار إن لم ترفعه، ويُقرأ لقارئ الشاشة.
- **حين يكون فارغاً:** جهة بلا اسم ولا شعار لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:logos:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-name-panel.webp?v=99ebbfed4d10" alt="لوحة إعدادات (نسخة مطابقة) — الجهات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logos:1:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-result.webp?v=4e4af2e13890" alt="معاينة — الجهات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الشعار (اختياري)»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `logos.image`
- **ماذا يفعل:** شعار الجهة، PNG أو SVG شفاف بارتفاع ٤٠ بكسل فأكثر.
- **حين يكون فارغاً:** بدونه يُكتب اسم الجهة.
- شرحه تحت الحقل في المحرّر: PNG أو SVG شفاف، بارتفاع ٤٠ بكسل فأكثر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:logos:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-image-panel.webp?v=c3f37f86b27b" alt="لوحة إعدادات (نسخة مطابقة) — الجهات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logos:2:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-result.webp?v=4e4af2e13890" alt="معاينة — الجهات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الرابط (اختياري)»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `logos.url`
- **ماذا يفعل:** رابط يفتح في نافذة جديدة عند الضغط على الشعار، مثل رابط المقابلة.
- **حين يكون فارغاً:** بدونه الشعار بلا رابط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:logos:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-url-panel.webp?v=d8e2a070962e" alt="لوحة إعدادات (نسخة مطابقة) — الجهات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logos:3:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/02-logos-result.webp?v=4e4af2e13890" alt="معاينة — الجهات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «الشعارات بألوانها»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `logo_color`
- **ماذا يفعل:** الشعارات بألوانها بدل الرمادي.
- **متى تستعمله:** لشعارات الجهات الرسمية.
- **حين يكون فارغاً:** مطفأ: رمادية كما صُمّمت.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:logo_color:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/03-logo_color-panel.webp?v=f14ee404c4b2" alt="لوحة إعدادات (نسخة مطابقة) — الشعارات بألوانها" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logo_color:0:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/00-desktop.webp?v=d41bf22aafda" alt="معاينة — الشعارات بألوانها" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «حجم الشعارات»

- **النوع:** قائمة منسدلة · **الافتراضي:** صغير (الافتراضي) · المعرّف `logo_size`
- **ماذا يفعل:** حجم الشعارات: صغير أو متوسط أو كبير.
- **متى تستعمله:** للشعارات الطويلة التي تصغر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:logo_size:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/04-logo_size-s-panel.webp?v=b108e8a75f4d" alt="لوحة إعدادات (نسخة مطابقة) — حجم الشعارات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logo_size:0:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/04-logo_size-s-result.webp?v=5b7a1136c56e" alt="معاينة — حجم الشعارات" loading="lazy" decoding="async"/> | «صغير (الافتراضي)» |
| <img data-update-ref="06-coach-press:logo_size:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/04-logo_size-m-panel.webp?v=a23064cf3f03" alt="لوحة إعدادات (نسخة مطابقة) — حجم الشعارات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logo_size:1:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/04-logo_size-l-result.webp?v=bf7d08693b47" alt="معاينة — حجم الشعارات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «متوسط» |
| <img data-update-ref="06-coach-press:logo_size:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/04-logo_size-l-panel.webp?v=47f0366dcd3c" alt="لوحة إعدادات (نسخة مطابقة) — حجم الشعارات" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:logo_size:2:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/04-logo_size-l-result.webp?v=bf7d08693b47" alt="معاينة — حجم الشعارات" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «كبير» |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="06-coach-press:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/05-custom_classes-panel.webp?v=092ee7ec84b7" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="06-coach-press:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/06-coach-press/05-custom_classes-result.webp?v=83b6223dc72b" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>
