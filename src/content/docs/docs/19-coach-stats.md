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
| <img src="/coach-docs/assets/sections/19-coach-stats/00-desktop.webp" alt="معاينة — ثقة · شريط الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/00-mobile.webp" alt="معاينة — ثقة · شريط الأرقام" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

حتى أربعة أرقام تبني الثقة، لكل رقم أيقونة ووصف. تتحرك الأرقام عدّاً من الصفر عند ظهورها، وتثبت لمن فعّل «تقليل الحركة».

- **أهم الإعدادات:** «الشكل»: «بطاقة فاتحة بفواصل بين الأرقام» (الافتراضي)، أو «الأرقام على خلفية الصفحة بلا بطاقة»، أو «لوحة باللون الأساسي» (لونها من «لون «لوحة باللون الأساسي»»، وفارغاً يتبع اللون الأساسي). لكل رقم «الرقم» و«قبله (اختياري)» و«بعده (اختياري)» و«الوصف» و«الأيقونة (اختيارية)».
- **نصيحة:** اكتب في «الرقم» رقماً فقط (مثل 12 أو 4.9) ليتحرك عدّاً، وضع الرموز والكلمات مثل «+» أو «ألف» في «قبله» و«بعده». والأرقام الافتراضية أمثلة، فاكتب أرقامك الحقيقية.

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** بطاقة فاتحة بفواصل بين الأرقام · المعرّف `style`
- **ماذا يفعل:** الشكل: بطاقة فاتحة بفواصل بين الأرقام، أو الأرقام على خلفية الصفحة، أو لوحة باللون الأساسي.
- **متى تستعمله:** «لوحة» لإبراز الأرقام بين قسمين فاتحين.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/01-style-light-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/00-desktop.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «بطاقة فاتحة بفواصل بين الأرقام» |
| <img src="/coach-docs/assets/sections/19-coach-stats/01-style-plain-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/01-style-plain-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «الأرقام على خلفية الصفحة بلا بطاقة» |
| <img src="/coach-docs/assets/sections/19-coach-stats/01-style-primary-panel.webp" alt="لوحة إعدادات — الشكل" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/01-style-primary-result.webp" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «لوحة باللون الأساسي» |

### «الأرقام»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `items`
- **ماذا يفعل:** الأرقام بالترتيب، حتى أربعة.
- **متى تستعمله:** لأرقام حقيقية تفخر بها.
- **حين يكون فارغاً:** بلا أرقام لا يظهر القسم. والعنصر بلا رقم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/02-items-panel.webp" alt="لوحة إعدادات — الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/02-items-result.webp" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «الرقم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.value`
- **ماذا يفعل:** الرقم فقط، مثل 12 أو 4.9، ويُعدّ من الصفر حين يظهر.
- **حين يكون فارغاً:** العنصر بلا رقم لا يظهر.
- شرحه تحت الحقل في المحرّر: رقم فقط، مثل 12 أو 4.9.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/02-items-value-panel.webp" alt="لوحة إعدادات — الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/02-items-result.webp" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «قبله (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.prefix`
- **ماذا يفعل:** ما قبل الرقم، مثل «+».
- **حين يكون فارغاً:** فارغاً لا شيء قبله.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/02-items-prefix-panel.webp" alt="لوحة إعدادات — الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/02-items-result.webp" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «بعده (اختياري)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.suffix`
- **ماذا يفعل:** ما بعد الرقم، مثل «ألف» أو «٪».
- **حين يكون فارغاً:** فارغاً لا شيء بعده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/02-items-suffix-panel.webp" alt="لوحة إعدادات — الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/02-items-result.webp" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «الوصف»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `items.label`
- **ماذا يفعل:** وصف تحت الرقم.
- **حين يكون فارغاً:** فارغاً يظهر الرقم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/02-items-label-panel.webp" alt="لوحة إعدادات — الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/02-items-result.webp" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «الأيقونة (اختيارية)»

- **النوع:** أيقونة · **الافتراضي:** فارغ · المعرّف `items.icon`
- **ماذا يفعل:** أيقونة فوق الرقم.
- **حين يكون فارغاً:** بدونها الرقم بلا أيقونة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/02-items-icon-panel.webp" alt="لوحة إعدادات — الأرقام" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/02-items-result.webp" alt="معاينة — الأرقام" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «لون اللوحة»

- **النوع:** لون · **الافتراضي:** فارغ · المعرّف `bg_color`
- **ماذا يفعل:** في شكل «لوحة» فقط: لون اللوحة، ولون النص يتكيّف معه.
- **متى تستعمله:** إن أردت لوناً غير الأساسي.
- **حين يكون فارغاً:** فارغاً يتبع اللون الأساسي.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «لوحة باللون الأساسي»
- شرحه تحت الحقل في المحرّر: فارغاً يتبع اللون الأساسي.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/19-coach-stats/03-bg_color-panel.webp" alt="لوحة إعدادات — لون اللوحة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/19-coach-stats/03-bg_color-result.webp" alt="معاينة — لون اللوحة" loading="lazy" decoding="async"/> | النتيجة بلون تجريبي #1F6F78 |


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
