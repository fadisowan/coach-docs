---
title: "استشارات · تفاصيل الجلسة"
description: "دليل ثيم كوتش 1.76.1 — استشارات · تفاصيل الجلسة"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Consultations · Session details* · مساره `home.coach-session`

**ما يعرضه:** حقائق الجلسة وتفاصيلها وفي صفحة المنتج التفاصيل فقط.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/00-desktop.webp" alt="معاينة — استشارات · تفاصيل الجلسة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/00-mobile.webp" alt="معاينة — استشارات · تفاصيل الجلسة" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

حقائق الجلسة بأيقونات، وبطاقتا «ماذا تتضمّن الجلسة» و«لمن هذه الجلسة»، وخطوات «ماذا يحدث بعد الشراء». بلا تقويم ولا حجز.

- **الحقائق:** «الطريقة» (أونلاين، أو حضوري، أو الاثنان)، و«المدة»، و«المنصة أو المكان»، و«عدد الجلسات». الحقل الفارغ لا يظهر.
- **التفاصيل:** «ماذا تتضمّن» و«لمن» سطر لكل بند، و«ماذا يحدث بعد الشراء» حتى ٤ خطوات (عنوان وسطر).
- **في الرئيسية:** الرأس والحقائق، وبطاقة «منتج الجلسة (للرئيسية)» بسعره وزر الإضافة للسلة.
- **في صفحة المنتج:** التفاصيل فقط بعرض الصفحة، بلا الرأس ولا بطاقة المنتج، وتختفي ملاحظة «لا حاجة لاختيار موعد الآن».

</details>

## الإعدادات بترتيبها في اللوحة

### «العنوان الصغير (فوق العنوان)»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسة فردية · المعرّف `eyebrow`
- **ماذا يفعل:** سطر صغير فوق العنوان. ما تكتبه بعد العلامة | يظهر بجانبه كلمةً لاتينية، مثل «كتب | BOOKS».
- **متى تستعمله:** لتسمية القسم بكلمة أو كلمتين قبل العنوان.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: مثال: كتب | BOOKS

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/01-eyebrow-panel.webp" alt="لوحة إعدادات — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/01-eyebrow-result.webp" alt="معاينة — العنوان الصغير (فوق العنوان)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسة [[توجيه مهني]] واحدة · المعرّف `title`
- **ماذا يفعل:** عنوان القسم. ضع كلمة بين [[ ]] لتظهر مميّزة بالشكل المختار في «تخصيص الثيم».
- **متى تستعمله:** جملة قصيرة تقول ما يجده الزائر في القسم.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر. إن مسحته بالعربية وحدها ظهر النص الإنجليزي.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى. [[كلمة]] بلون المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/02-title-panel.webp" alt="لوحة إعدادات — العنوان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/02-title-result.webp" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوصف»

- **النوع:** نص بعدة أسطر · **الافتراضي:** ساعة كاملة نراجع فيها المسار ونخرج بخطة مكتوبة. · المعرّف `description`
- **ماذا يفعل:** سطر أو سطران تحت العنوان.
- **متى تستعمله:** لتوضيح العنوان إن احتاج.
- **حين يكون فارغاً:** فارغاً باللغتين لا يظهر.
- شرحه تحت الحقل في المحرّر: فارغاً باللغتين يُخفى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/03-description-panel.webp" alt="لوحة إعدادات — الوصف" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/03-description-result.webp" alt="معاينة — الوصف" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الطريقة»

- **النوع:** قائمة منسدلة · **الافتراضي:** أونلاين · المعرّف `mode`
- **ماذا يفعل:** الحقائق:** «الطريقة» (أونلاين، أو حضوري، أو الاثنان)، و«المدة»، و«المنصة أو المكان»، و«عدد الجلسات». الحقل الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/04-mode-online-panel.webp" alt="لوحة إعدادات — الطريقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/04-mode-online-result.webp" alt="معاينة — الطريقة" loading="lazy" decoding="async"/> | «أونلاين» |
| <img src="/coach-docs/assets/sections/12-coach-session/04-mode-onsite-panel.webp" alt="لوحة إعدادات — الطريقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/04-mode-onsite-result.webp" alt="معاينة — الطريقة" loading="lazy" decoding="async"/> | «حضوري» |
| <img src="/coach-docs/assets/sections/12-coach-session/04-mode-both-panel.webp" alt="لوحة إعدادات — الطريقة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/04-mode-both-result.webp" alt="معاينة — الطريقة" loading="lazy" decoding="async"/> | «الاثنان» |

### «المدة»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٦٠ دقيقة · المعرّف `duration`
- **ماذا يفعل:** الحقائق:** «الطريقة» (أونلاين، أو حضوري، أو الاثنان)، و«المدة»، و«المنصة أو المكان»، و«عدد الجلسات». الحقل الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/05-duration-panel.webp" alt="لوحة إعدادات — المدة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/05-duration-result.webp" alt="معاينة — المدة" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المنصة أو المكان»

- **النوع:** نص بسطر واحد · **الافتراضي:** مكالمة فيديو · المعرّف `place`
- **ماذا يفعل:** الحقائق:** «الطريقة» (أونلاين، أو حضوري، أو الاثنان)، و«المدة»، و«المنصة أو المكان»، و«عدد الجلسات». الحقل الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/06-place-panel.webp" alt="لوحة إعدادات — المنصة أو المكان" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/06-place-result.webp" alt="معاينة — المنصة أو المكان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «عدد الجلسات»

- **النوع:** نص بسطر واحد · **الافتراضي:** جلسة واحدة · المعرّف `count`
- **ماذا يفعل:** الحقائق:** «الطريقة» (أونلاين، أو حضوري، أو الاثنان)، و«المدة»، و«المنصة أو المكان»، و«عدد الجلسات». الحقل الفارغ لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/07-count-panel.webp" alt="لوحة إعدادات — عدد الجلسات" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/07-count-result.webp" alt="معاينة — عدد الجلسات" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «ماذا تتضمّن (سطر لكل بند)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** خطة تطوير مكتوبة / مراجعة السيرة الذاتية / تسجيل الجلسة / متابعة بالرسائل أسبوعاً · المعرّف `includes`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/08-includes-panel.webp" alt="لوحة إعدادات — ماذا تتضمّن (سطر لكل بند)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/08-includes-result.webp" alt="معاينة — ماذا تتضمّن (سطر لكل بند)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «لمن (سطر لكل بند)»

- **النوع:** نص بعدة أسطر · **الافتراضي:** من يفكر في تغيير مساره / حديثو التخرج / من يستعد لمقابلة عمل · المعرّف `audience`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/09-audience-panel.webp" alt="لوحة إعدادات — لمن (سطر لكل بند)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/09-audience-result.webp" alt="معاينة — لمن (سطر لكل بند)" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «ماذا يحدث بعد الشراء»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `steps`
- **ماذا يفعل:** حقائق الجلسة بأيقونات، وبطاقتا «ماذا تتضمّن الجلسة» و«لمن هذه الجلسة»، وخطوات «ماذا يحدث بعد الشراء». بلا تقويم ولا حجز.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/10-steps-panel.webp" alt="لوحة إعدادات — ماذا يحدث بعد الشراء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/10-steps-result.webp" alt="معاينة — ماذا يحدث بعد الشراء" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | أول عنصر محاط بإطار برتقالي |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `steps.title`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/10-steps-title-panel.webp" alt="لوحة إعدادات — ماذا يحدث بعد الشراء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/10-steps-result.webp" alt="معاينة — ماذا يحدث بعد الشراء" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

#### «سطر تحته»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `steps.text`

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/10-steps-text-panel.webp" alt="لوحة إعدادات — ماذا يحدث بعد الشراء" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/10-steps-result.webp" alt="معاينة — ماذا يحدث بعد الشراء" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> |  |

### «منتج الجلسة (للرئيسية)»

- **النوع:** اختيار منتج من متجرك · **الافتراضي:** لا شيء — يختاره التاجر · المعرّف `product`
- **ماذا يفعل:** في الرئيسية:** الرأس والحقائق، وبطاقة «منتج الجلسة (للرئيسية)» بسعره وزر الإضافة للسلة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/11-product-panel.webp" alt="لوحة إعدادات — منتج الجلسة (للرئيسية)" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/00-desktop.webp" alt="معاينة — منتج الجلسة (للرئيسية)" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص زر الإضافة للسلة»

- **النوع:** نص بسطر واحد · **الافتراضي:** أضف للسلة · المعرّف `button_label`
- **ماذا يفعل:** فارغاً يظهر «أضف للسلة».
- **حين يكون فارغاً:** فارغاً يظهر «أضف للسلة»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/sections/12-coach-session/12-button_label-panel.webp" alt="لوحة إعدادات — نص زر الإضافة للسلة" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/sections/12-coach-session/00-desktop.webp" alt="معاينة — نص زر الإضافة للسلة" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | مكانه في القسم محاط بإطار برتقالي |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور لوحات الإعدادات مرسومة من تعريفات الثيم؛ صور النتائج من المعاينة. اضغط على الصورة لتكبيرها.</div>
