---
title: "الخيارات المشتركة بين الأقسام"
description: "دليل ثيم كوتش 1.76.1 — الخيارات المشتركة بين الأقسام"
editUrl: false
---


تتكرر في أغلب الأقسام بالاسم نفسه وتعمل بالطريقة نفسها. الصور من قسم «دورة · لمن هذا البرنامج» مثالاً.

| النتيجة الافتراضية |
|---|
| <img data-update-ref="01-shared:overview:0" src="/coach-docs/assets/updates/1.94.0/01-shared/00-desktop.webp?v=25bcc30042bb" alt="معاينة — الخيارات المشتركة بين الأقسام" loading="lazy" decoding="async"/> |

<details><summary>من دليل التاجر: حقل «كلاسات CSS» والكلاسات الجاهزة (آخر خيارات كل قسم)</summary>

في آخر خيارات كل قسم حقل «كلاسات CSS» (عدا «الماركات التجارية»). فارغ افتراضياً فلا يتغير شيء. تُكتب فيه كلمات لاتينية بينها مسافة أو فاصلة، كل كلمة تبدأ بحرف، وفيها حروف وأرقام و- و_ فقط، وطولها حتى ٤٠ حرفاً (والنقطة في أول الكلمة تُحذف)، وحتى ثماني كلمات، وما سواها يُتجاهل. الكلاسات الداخلية للثيم (التي تبدأ بـ `coach-` أو `is-`) والكلاسات العامة مثل `hidden` غير مدعومة: قد تخفي القسم أو يتغيّر أثرها بين الإصدارات.

كلاسات جاهزة تعمل بلا كتابة CSS:

- `cx-narrow`: محتوى أضيق. `cx-wide`: أعرض. `cx-full`: بعرض الشاشة. تعمل على الشاشات العريضة فقط (الأضيق فوق نحو 1000px، والأعرض وعرض الشاشة فوق نحو 1290px)، ولا تؤثر في «نافذة القوس» و«شريط نصي متحرك» و«دعوة أخيرة بكلمات متحركة» حين يظهر شريط الكلمات وحده، وفي «صور متحركة (محسّنة)» يتغيّر عرض العنوان دون الشرائح حين تكون أكثر من واحدة.
- `cx-center`: يوسّط عنوان القسم ووصفه ورابط «عرض الكل»، ويوسّط النص والأزرار في الواجهات و«بانر عرض» و«كتيّب يقلّب». البطاقات والقوائم داخل القسم تبقى بمحاذاتها. ولا أثر له في الأقسام التي عنوانها جزء من تصميمها أو بلا عنوان: «معرض البرامج» و«شريط نصي متحرك» و«ظهرتُ في» و«شريط الأرقام» و«لقاء مباشر قادم» و«ضمان الاسترجاع» و«الدليل المجاني» و«الكلمة الحيّة»، و«دعوة أخيرة بكلمات متحركة» حين يظهر شريط الكلمات وحده.
- `cx-tight`: نصف المسافة المعتادة فوق القسم. `cx-no-top`: بلا مسافة علوية. `cx-no-bottom`: بلا مسافة سفلية، ويظهر أثره مع «خلفية القسم» بعرض كامل أو مع مسافة سفلية مضبوطة؛ ولإزالة الفراغ بين قسمين يُوضع `cx-no-top` في القسم التالي. في «نافذة القوس» مع الحركة المسافة العلوية صفر أصلاً، فيزيدها `cx-tight` ولا يُستعمل معها. وفي «ترحيب المدرّب» بخلفية صورة أو خلفية متحركة يغيّر `cx-tight` و`cx-no-top` المسافة قبل القسم فقط، لا حشوته الداخلية.
- `cx-plain`: يزيل «خلفية القسم» المختارة في المحرر. `cx-soft`: يلوّن القسم بعرض الشاشة بلون البطاقات. لا يعملان مع الخلفية الداكنة أو الصورة، ولا يغيّران اللوحة الملوّنة داخل المكوّن (مثل «شريط الأرقام» و«بانر عرض» و«الدليل المجاني» و«دعوة للإجراء» و«لقاء مباشر قادم»). مع `cx-soft` تذوب بطاقات المنتجات البيضاء في الخلفية، ويبدأ الشريط مباشرة بعد القسم السابق إن لم تكن له خلفية.
- `cx-square`: بلا زوايا دائرية، وتصير العناصر الدائرية مربعة أيضاً (الصور الشخصية وختم الضمان وأزرار التشغيل والأسهم).
- `cx-no-head`: يخفي عنوان القسم عن العين ويبقيه لقارئ الشاشة، ويأخذ المحتوى عرض القسم كاملاً. لا أثر له في الأقسام المذكورة مع `cx-center` ولا في الواجهات و«بانر عرض» و«كتيّب يقلّب»: عنوانها جزء من تصميمها فيبقى ظاهراً.

ولتنسيق خاص: يُكتب كلاس من اختيارك، مثل `my-faq`، ثم يُنسَّق من «تخصيص متقدم» في سلة (في الباقات المدفوعة). ولكل قسم كلاس ثابت باسمه يُستعمل في CSS سلة، مثل `.coach-faq` و`.coach-hero` و`.coach-about`.

</details>

## الإعدادات بترتيبها في اللوحة

### «محاذاة العنوان والوصف»

- **النوع:** قائمة منسدلة · **الافتراضي:** الوسط · المعرّف `head_align`
- **ماذا يفعل:** محاذاة العنوان والوصف: بداية السطر، أو الوسط، أو نهاية السطر. البداية يمين في العربية ويسار في الإنجليزية.
- **متى تستعمله:** «الوسط» لأقسام قصيرة في منتصف الصفحة، و«البداية» للأقسام الطويلة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:head_align:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/01-head_align-start-panel.webp?v=3d0775fc2e58" alt="لوحة إعدادات (نسخة مطابقة) — محاذاة العنوان والوصف" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:head_align:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/01-head_align-start-result.webp?v=ba68f9f5bc49" alt="معاينة — محاذاة العنوان والوصف" loading="lazy" decoding="async"/> | «بداية السطر» |
| <img data-update-ref="01-shared:head_align:1:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/01-head_align-center-panel.webp?v=4ddd5979f11a" alt="لوحة إعدادات (نسخة مطابقة) — محاذاة العنوان والوصف" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:head_align:1:result" src="/coach-docs/assets/updates/1.94.0/01-shared/01-head_align-center-result.webp?v=ee53c1d4e34d" alt="معاينة — محاذاة العنوان والوصف" loading="lazy" decoding="async"/> | «الوسط» |
| <img data-update-ref="01-shared:head_align:2:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/01-head_align-end-panel.webp?v=2303b307a8f3" alt="لوحة إعدادات (نسخة مطابقة) — محاذاة العنوان والوصف" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:head_align:2:result" src="/coach-docs/assets/updates/1.94.0/01-shared/01-head_align-end-result.webp?v=4563e44307fa" alt="معاينة — محاذاة العنوان والوصف" loading="lazy" decoding="async"/> | «نهاية السطر» |

### «حجم العنوان»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسط (الافتراضي) · المعرّف `title_size`
- **ماذا يفعل:** حجم عنوان القسم: صغير أو متوسط أو كبير، نسبةً إلى عناوين الثيم فتبقى الصفحة متناسقة.
- **متى تستعمله:** «كبير» لقسم تريده أن يلفت النظر، و«صغير» للأقسام الثانوية.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:title_size:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/02-title_size-small-panel.webp?v=d276d36e5ac0" alt="لوحة إعدادات (نسخة مطابقة) — حجم العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:title_size:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/02-title_size-small-result.webp?v=ae140b2ac789" alt="معاينة — حجم العنوان" loading="lazy" decoding="async"/> | «صغير» |
| <img data-update-ref="01-shared:title_size:1:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/02-title_size-medium-panel.webp?v=239aea21c9f6" alt="لوحة إعدادات (نسخة مطابقة) — حجم العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:title_size:1:result" src="/coach-docs/assets/updates/1.94.0/01-shared/02-title_size-medium-result.webp?v=0c36cdfbc992" alt="معاينة — حجم العنوان" loading="lazy" decoding="async"/> | «متوسط (الافتراضي)» |
| <img data-update-ref="01-shared:title_size:2:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/02-title_size-large-panel.webp?v=efbe1781a2b4" alt="لوحة إعدادات (نسخة مطابقة) — حجم العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:title_size:2:result" src="/coach-docs/assets/updates/1.94.0/01-shared/02-title_size-large-result.webp?v=d0b22fa94d04" alt="معاينة — حجم العنوان" loading="lazy" decoding="async"/> | «كبير» |

### «خلفية القسم»

- **النوع:** قائمة منسدلة · **الافتراضي:** بدون · المعرّف `section_bg`
- **ماذا يفعل:** لون خلف القسم: بدون، أو أبيض، أو لون فاتح أو داكن من الثيم، أو لون تختاره، أو صورة عليها طبقة من لون الثيم. النصوص تصير فاتحة مع الداكن والصورة.
- **متى تستعمله:** لفصل قسم عن الذي قبله، أو لإبراز قسم مهم بلوح داكن.
- شرحه تحت الحقل في المحرّر: نص فاتح مع الداكن والصورة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:section_bg:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-none-panel.webp?v=343ea6f0a4c2" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-none-result.webp?v=e2c9b914d261" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «بدون» |
| <img data-update-ref="01-shared:section_bg:1:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-white-panel.webp?v=c944904fa427" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg:1:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-white-result.webp?v=f96c06f78061" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «أبيض» |
| <img data-update-ref="01-shared:section_bg:2:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-soft-panel.webp?v=7577dfc9fa37" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg:2:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-soft-result.webp?v=5df0f242fac3" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «لون فاتح من الثيم» |
| <img data-update-ref="01-shared:section_bg:3:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-dark-panel.webp?v=eaa626c0be13" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg:3:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-dark-result.webp?v=a9299bca9493" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «لون داكن من الثيم» |
| <img data-update-ref="01-shared:section_bg:4:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-custom-panel.webp?v=50cf7fa0909b" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg:4:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-custom-result.webp?v=6249f1005147" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «لون مخصص» |
| <img data-update-ref="01-shared:section_bg:5:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-image-panel.webp?v=e85b585543c1" alt="لوحة إعدادات (نسخة مطابقة) — خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg:5:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-image-result.webp?v=2bca581951a6" alt="معاينة — خلفية القسم" loading="lazy" decoding="async"/> | «صورة بطبقة من لون الثيم» |

### «لون الخلفية المخصص»

- **النوع:** لون · **الافتراضي:** فارغ · المعرّف `section_bg_color`
- **ماذا يفعل:** اللون الذي تختاره خلف القسم. لون النص يتكيّف معه تلقائياً.
- **متى تستعمله:** حين لا تناسبك ألوان الثيم الجاهزة.
- **حين يكون فارغاً:** فارغاً بلا لون مخصص.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «لون مخصص»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:section_bg_color:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/04-section_bg_color-panel.webp?v=fba442fb78b9" alt="لوحة إعدادات (نسخة مطابقة) — لون الخلفية المخصص" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg_color:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/04-section_bg_color-result.webp?v=b87d8234f7a0" alt="معاينة — لون الخلفية المخصص" loading="lazy" decoding="async"/> | النتيجة بلون تجريبي #1F6F78 |

### «صورة خلفية القسم»

- **النوع:** صورة ترفعها · **الافتراضي:** بلا صورة · المعرّف `section_bg_image`
- **ماذا يفعل:** صورة خلف القسم، عريضة (١٦٠٠×٩٠٠ فأكبر)، عليها طبقة من لون الثيم لتبقى النصوص مقروءة.
- **متى تستعمله:** لقسم تريده بصرياً أكثر، مثل الدعوة أو الإحصاءات.
- **حين يكون فارغاً:** بدونها يظهر اللون الداكن من الثيم.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»
- شرحه تحت الحقل في المحرّر: 1600×900 فأكبر؛ بدونها الداكن.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:section_bg_image:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/05-section_bg_image-panel.webp?v=01232778a748" alt="لوحة إعدادات (نسخة مطابقة) — صورة خلفية القسم" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg_image:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/05-section_bg_image-result.webp?v=b892bcaa0e7b" alt="معاينة — صورة خلفية القسم" loading="lazy" decoding="async"/> | النتيجة بصورة تجريبية |

### «قوة طبقة اللون فوق الصورة»

- **النوع:** قائمة منسدلة · **الافتراضي:** متوسطة · المعرّف `section_bg_tint`
- **ماذا يفعل:** قوة طبقة اللون فوق صورة الخلفية: خفيفة أو متوسطة أو قوية.
- **متى تستعمله:** «قوية» للصور الفاتحة أو المزدحمة حتى تبقى النصوص واضحة.
- **يظهر في اللوحة فقط حين:** «خلفية القسم» هو «صورة بطبقة من لون الثيم»
- شرحه تحت الحقل في المحرّر: «قوية» للصور الفاتحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:section_bg_tint:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/06-section_bg_tint-light-panel.webp?v=0f4109237408" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg_tint:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/06-section_bg_tint-light-result.webp?v=66c56eb4e4ed" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «خفيفة» |
| <img data-update-ref="01-shared:section_bg_tint:1:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/06-section_bg_tint-medium-panel.webp?v=cd8a9ed5feea" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg_tint:1:result" src="/coach-docs/assets/updates/1.94.0/01-shared/06-section_bg_tint-medium-result.webp?v=2bdfc480c29d" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «متوسطة» |
| <img data-update-ref="01-shared:section_bg_tint:2:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/06-section_bg_tint-strong-panel.webp?v=9e8ca01347a7" alt="لوحة إعدادات (نسخة مطابقة) — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg_tint:2:result" src="/coach-docs/assets/updates/1.94.0/01-shared/06-section_bg_tint-strong-result.webp?v=8cc103591efd" alt="معاينة — قوة طبقة اللون فوق الصورة" loading="lazy" decoding="async"/> | «قوية» |

### «تمديد الخلفية بعرض الشاشة»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `section_bg_full`
- **ماذا يفعل:** يمدّ خلفية القسم بعرض الشاشة كاملة بدل عرض المحتوى بزوايا دائرية.
- **متى تستعمله:** لأقسام تريدها شريطاً عريضاً يفصل الصفحة.
- **حين يكون فارغاً:** مطفأ (الافتراضي): الخلفية بعرض المحتوى بزوايا دائرية.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:section_bg_full:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/07-section_bg_full-panel.webp?v=86ccdedaa7fc" alt="لوحة إعدادات (نسخة مطابقة) — تمديد الخلفية بعرض الشاشة" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:section_bg_full:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/03-section_bg-none-result.webp?v=e2c9b914d261" alt="معاينة — تمديد الخلفية بعرض الشاشة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «المسافة العلوية (بكسل)»

- **النوع:** رقم · **الافتراضي:** 0 · المعرّف `top_spacing`
- **ماذا يفعل:** مسافة إضافية فوق القسم بالبكسل.
- **متى تستعمله:** حين تريد فصلاً أكبر عن القسم السابق.
- **حين يكون فارغاً:** صفر: مسافة الثيم، ٨٠ بكسل على الكمبيوتر و٦٤ على اللوحي و٤٨ على الجوال.
- شرحه تحت الحقل في المحرّر: صفر: ٨٠ (٤٨ للجوال).

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:top_spacing:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/08-top_spacing-panel.webp?v=079c6c87dd05" alt="لوحة إعدادات (نسخة مطابقة) — المسافة العلوية (بكسل)" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:top_spacing:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/00-desktop.webp?v=25bcc30042bb" alt="معاينة — المسافة العلوية (بكسل)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «المسافة السفلية (بكسل)»

- **النوع:** رقم · **الافتراضي:** 0 · المعرّف `bottom_spacing`
- **ماذا يفعل:** مسافة إضافية تحت القسم بالبكسل.
- **متى تستعمله:** نادراً: حين تريد مسافة أكبر قبل القسم التالي.
- **حين يكون فارغاً:** صفر: بلا مسافة إضافية.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="01-shared:bottom_spacing:0:panel" src="/coach-docs/assets/updates/1.94.0/01-shared/09-bottom_spacing-panel.webp?v=bdae3bb9413a" alt="لوحة إعدادات (نسخة مطابقة) — المسافة السفلية (بكسل)" loading="lazy" decoding="async"/> | <img data-update-ref="01-shared:bottom_spacing:0:result" src="/coach-docs/assets/updates/1.94.0/01-shared/00-desktop.webp?v=25bcc30042bb" alt="معاينة — المسافة السفلية (بكسل)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

<a id="custom-classes"></a>

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** إضافة كلاسات إلى القسم، باستعمال الكلاسات الجاهزة أدناه أو CSS خاص من تخصيص سلة.
- **طريقة الإدخال:** كلمات لاتينية بينها مسافة أو فاصلة، حتى ثماني كلمات. تبدأ كل كلمة بحرف، وتحتوي حروفًا وأرقامًا و`-` و`_` فقط.
- **حين يكون فارغًا:** يبقى الشكل الافتراضي للقسم.

| الكلاس | الأثر |
|---|---|
| `cx-narrow` | محتوى أضيق |
| `cx-wide` | محتوى أعرض |
| `cx-full` | بعرض الشاشة |
| `cx-center` | توسيط العنوان والنص والأزرار |
| `cx-tight` | مسافات أقل |
| `cx-no-top` | بلا مسافة علوية |
| `cx-no-bottom` | بلا مسافة سفلية |
| `cx-plain` | بلا خلفية |
| `cx-soft` | خلفية بلون البطاقات |
| `cx-square` | بلا زوايا مستديرة |
| `cx-no-head` | إخفاء عنوان القسم |
