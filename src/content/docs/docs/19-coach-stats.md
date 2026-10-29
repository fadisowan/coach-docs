---
title: "ثقة · شريط الأرقام"
description: "دليل ثيم كوتش 1.76.1 — ثقة · شريط الأرقام"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Trust · Numbers strip* · مساره `home.coach-stats`

**ما يعرضه:** حتى أربعة أرقام تبني الثقة، بأيقونة ووصف، تُعدّ من الصفر حين تظهر.

**متى تضيفه:** لإنجازاتك بالأرقام: متعلّمون، دورات، سنوات، تقييم.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="19-coach-stats:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/00-desktop.webp?v=931434bb7917" alt="معاينة — ثقة · شريط الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/00-mobile.webp?v=bd12b8e3228c" alt="معاينة — ثقة · شريط الأرقام" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

حتى أربعة أرقام تبني الثقة، لكل رقم أيقونة ووصف. تتحرك الأرقام عدّاً من الصفر عند ظهورها، وتثبت لمن فعّل «تقليل الحركة».

- **أهم الإعدادات:** «الشكل»: «بطاقة فاتحة بفواصل بين الأرقام» (الافتراضي)، أو «الأرقام على خلفية الصفحة بلا بطاقة»، أو «لوحة باللون الأساسي» (لونها من «لون اللوحة»، وفارغاً يتبع اللون الأساسي). لكل رقم «الرقم» و«قبله (اختياري)» و«بعده (اختياري)» و«الوصف» و«الأيقونة (اختيارية)».
- **نصيحة:** «الرقم» رقم فقط (مثل 12 أو 4.9) ليتحرك عدّاً، والرموز والكلمات مثل «+» أو «ألف» في «قبله (اختياري)» و«بعده (اختياري)». والأرقام الافتراضية أمثلة تُستبدل بالأرقام الحقيقية.
- **خيارات إضافية:** «عدّ الأرقام عند الظهور» (مفعّل افتراضياً).

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** بطاقة فاتحة بفواصل بين الأرقام · المعرّف `style`
- **ماذا يفعل:** الشكل: بطاقة فاتحة بفواصل بين الأرقام، أو الأرقام على خلفية الصفحة، أو لوحة باللون الأساسي.
- **متى تستعمله:** «لوحة» لإبراز الأرقام بين قسمين فاتحين.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:style:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/01-style-light-panel.webp?v=58a0c343a484" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:style:0:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/01-style-light-result.webp?v=0bbb9f896910" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «بطاقة فاتحة بفواصل بين الأرقام» |
| <img data-update-ref="19-coach-stats:style:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/01-style-plain-panel.webp?v=ebc731a900b4" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:style:1:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/01-style-plain-result.webp?v=101fbb6f1279" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «الأرقام على خلفية الصفحة بلا بطاقة» |
| <img data-update-ref="19-coach-stats:style:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/01-style-primary-panel.webp?v=3d7628cd9917" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:style:2:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/01-style-primary-result.webp?v=de4e0651926f" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «لوحة باللون الأساسي» |

### «الأرقام»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `items`
- **ماذا يفعل:** الأرقام بالترتيب، حتى أربعة.
- **متى تستعمله:** لأرقام حقيقية تفخر بها.
- **حين يكون فارغاً:** بلا أرقام لا يظهر القسم. والعنصر بلا رقم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:items:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-panel.webp?v=c803cb80e88b" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:items:0:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-result.webp?v=affb0ce0a840" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الرقم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.value`
- **ماذا يفعل:** الرقم فقط، مثل 12 أو 4.9، ويُعدّ من الصفر حين يظهر.
- **حين يكون فارغاً:** العنصر بلا رقم لا يظهر.
- شرحه تحت الحقل في المحرّر: رقم فقط، مثل 12 أو 4.9.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:items:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-value-panel.webp?v=6f0760f62a86" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:items:1:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-result.webp?v=affb0ce0a840" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «قبله (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.prefix`
- **ماذا يفعل:** ما قبل الرقم، مثل «+».
- **حين يكون فارغاً:** فارغاً لا شيء قبله.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:items:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-prefix-panel.webp?v=8f190756fd9b" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:items:2:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-result.webp?v=affb0ce0a840" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «بعده (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.suffix`
- **ماذا يفعل:** ما بعد الرقم، مثل «ألف» أو «٪».
- **حين يكون فارغاً:** فارغاً لا شيء بعده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:items:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-suffix-panel.webp?v=a8248d2df8e7" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:items:3:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-result.webp?v=affb0ce0a840" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الوصف»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.label`
- **ماذا يفعل:** وصف تحت الرقم.
- **حين يكون فارغاً:** فارغاً يظهر الرقم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:items:4:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-label-panel.webp?v=483311667276" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:items:4:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-result.webp?v=affb0ce0a840" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «الأيقونة (اختيارية)»

- **النوع:** أيقونة · **الافتراضي:** فارغ · المعرّف `items.icon`
- **ماذا يفعل:** أيقونة فوق الرقم.
- **حين يكون فارغاً:** بدونها الرقم بلا أيقونة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:items:5:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-icon-panel.webp?v=3f119b943740" alt="لوحة إعدادات (نسخة مطابقة) — الأرقام" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:items:5:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/02-items-result.webp?v=affb0ce0a840" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «لون اللوحة»

- **النوع:** لون · **الافتراضي:** فارغ · المعرّف `bg_color`
- **ماذا يفعل:** في شكل «لوحة» فقط: لون اللوحة، ولون النص يتكيّف معه.
- **متى تستعمله:** إن أردت لوناً غير الأساسي.
- **حين يكون فارغاً:** فارغاً يتبع اللون الأساسي.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «لوحة باللون الأساسي»
- شرحه تحت الحقل في المحرّر: فارغاً يتبع اللون الأساسي.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:bg_color:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/03-bg_color-panel.webp?v=7c5f03b252b8" alt="لوحة إعدادات (نسخة مطابقة) — لون اللوحة" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:bg_color:0:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/03-bg_color-result.webp?v=6e1b9136120d" alt="معاينة — لون اللوحة" loading="lazy" decoding="async"/> | النتيجة بلون تجريبي #1F6F78 |

### «عدّ الأرقام عند الظهور»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `count_up`
- **ماذا يفعل:** عدّ الأرقام من الصفر عند ظهورها.
- **متى تستعمله:** مطفأ ليظهر الرقم ثابتاً.
- **حين يكون فارغاً:** مفعّل افتراضياً.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:count_up:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/04-count_up-panel.webp?v=e7237e3fa155" alt="لوحة إعدادات (نسخة مطابقة) — عدّ الأرقام عند الظهور" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:count_up:0:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/00-desktop.webp?v=931434bb7917" alt="معاينة — عدّ الأرقام عند الظهور" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="19-coach-stats:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/05-custom_classes-panel.webp?v=23ca629192c9" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="19-coach-stats:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/19-coach-stats/05-custom_classes-result.webp?v=a97c2e9ed481" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[البيانات الافتراضية]
الأرقام والتقييمات والآراء الافتراضية أمثلة، تُعدَّل قبل النشر.
:::
