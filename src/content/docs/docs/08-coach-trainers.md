---
title: "المدرّب · فريق التدريب"
description: "دليل ثيم كوتش 1.76.1 — المدرّب · فريق التدريب"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Coach · The coaching team* · مساره `home.coach-trainers`

**ما يعرضه:** بطاقة لكل مدرّب في فريقك: صورته واسمه ومسمّاه، وتفاصيل تُفتح داخل البطاقة: نبذة ومهارات ورابط دوراته.

**متى تضيفه:** إن كان معك فريق تدريب، أو أكاديمية بأكثر من مدرّب.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/00-desktop.webp" alt="معاينة — المدرّب · فريق التدريب" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/00-mobile.webp" alt="معاينة — المدرّب · فريق التدريب" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «محاذاة العنوان والوصف»، «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

بطاقة لكل مدرّب في فريقك: صورته ووسم تخصصه، ثم اسمه ومسمّاه وسطر أرقام. زر «التفاصيل» يفتح داخل البطاقة نبذته ومهاراته ورابط دوراته، وتُفتح بطاقة واحدة في كل مرة. أربع بطاقات في الصف على الحاسوب، واثنتان على اللوحي، وصف يُسحب على الجوال، والسهمان بجانب العنوان يحرّكانه.

- **الإعداد:** في «المدرّبون» حتى ٨ مدرّبين. لكل مدرّب «الصورة» (طولية ٧٠٠×٨٠٠ تقريباً، والوجه في أعلاها) و«الاسم» و«المسمّى» و«وسم التخصص» و«سطر الأرقام» و«النبذة» و«المهارات» مفصولة بفاصلة.
- **الروابط:** «رابط الدورات» مع «نص رابط الدورات» يظهران داخل التفاصيل، و«رابط صفحة المدرّب» يفتحه الزر الدائري. كل رابط فارغ يختفي زره.
- **جاهز للاستخدام:** يأتي القسم بأربع مدرّبات بصورهن ونصوصهن، فاستبدلها بفريقك.

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فريق التدريب · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/01-eyebrow-panel.webp" alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/01-eyebrow-result.webp" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** تعلّم مع مدرّبات [[يعرفن طريقك]] · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/02-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/02-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المدرّبون»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 4 عناصر جاهزة · المعرّف `trainers`
- **ماذا يفعل:** المدرّبون بالترتيب، بطاقة لكل واحد. تُسحب على الجوال، وبأسهم إن كانوا أكثر من واحد.
- **متى تستعمله:** لكل مدرّب في فريقك.
- **حين يكون فارغاً:** بلا مدرّبين لا يظهر القسم. والمدرّب بلا اسم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> | أول عنصر محاط بإطار برتقالي |

#### «الصورة»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `trainers.photo`
- **ماذا يفعل:** صورة المدرّب، طولية نحو ٧٠٠×٨٠٠ والوجه أعلاها.
- **حين يكون فارغاً:** بدونها مساحة بلون من ألوان الثيم.
- شرحه تحت الحقل في المحرّر: طولية نحو ٧٠٠×٨٠٠، والوجه أعلاها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-photo-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «الاسم»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trainers.name`
- **ماذا يفعل:** اسم المدرّب تحت الصورة.
- **حين يكون فارغاً:** المدرّب بلا اسم لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-name-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «المسمّى»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trainers.role`
- **ماذا يفعل:** مسمّاه تحت الاسم.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-role-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «وسم التخصص (على الصورة)»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trainers.tag`
- **ماذا يفعل:** وسم صغير على الصورة بتخصصه.
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-tag-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «سطر الأرقام»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trainers.count`
- **ماذا يفعل:** سطر أرقام، مثل «٨ دورات · ٣٬٠٠٠ متعلّم».
- **حين يكون فارغاً:** فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-count-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «النبذة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** فارغ · المعرّف `trainers.bio`
- **ماذا يفعل:** نبذة تظهر حين تُفتح تفاصيل البطاقة.
- **حين يكون فارغاً:** فارغة لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-bio-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «المهارات»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trainers.skills`
- **ماذا يفعل:** مهاراته كوسوم صغيرة في التفاصيل، مفصولة بفاصلة.
- **حين يكون فارغاً:** فارغة لا تظهر.
- شرحه تحت الحقل في المحرّر: مفصولة بفاصلة: التخطيط، المقابلات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-skills-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «نص رابط البرامج»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `trainers.courses_label`
- **ماذا يفعل:** نص رابط دوراته في التفاصيل، مثل «دوراتها».
- **حين يكون فارغاً:** فارغاً لا يظهر الرابط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-courses_label-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «رابط البرامج»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `trainers.courses_link`
- **ماذا يفعل:** إلى أين يذهب رابط الدورات، مثل تصنيف دوراته.
- **حين يكون فارغاً:** بدونه لا يظهر الرابط.
- شرحه تحت الحقل في المحرّر: تصنيف برامجه مثلاً؛ بدونه يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-courses_link-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |

#### «رابط صفحة المدرّب»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `trainers.profile_link`
- **ماذا يفعل:** صفحة المدرّب للزر الدائري في البطاقة.
- **حين يكون فارغاً:** بدونه لا يظهر الزر.
- شرحه تحت الحقل في المحرّر: للزر الدائري؛ بدونه يُخفى الزر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-profile_link-panel.webp" alt="لوحة إعدادات — المدرّبون" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/08-coach-trainers/03-trainers-result.webp" alt="معاينة — المدرّبون" loading="lazy" decoding="async"/> |  |


<div class="source-note">الإصدار 1.76.1 · صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
