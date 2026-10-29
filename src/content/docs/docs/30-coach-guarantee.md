---
title: "ثقة · ضمان الاسترجاع"
description: "دليل ثيم كوتش 1.76.1 — ثقة · ضمان الاسترجاع"
editUrl: false
---


اسمه في المتجر الإنجليزي: *Trust · Money-back guarantee* · مساره `home.coach-guarantee`

**ما يعرضه:** ختم دائري بمدة الضمان بجانب وعد قصير ورابط لسياسة الاسترجاع، أو شريط بالوعد وطرق الدفع. اكتب النصوص كما هي سياسة متجرك.

**متى تضيفه:** قرب زر الشراء أو قبل الدعوة الأخيرة، إن كان عندك ضمان استرجاع حقيقي.

| كمبيوتر (1440) | جوال (390) |
|---|---|
| <img data-update-ref="30-coach-guarantee:overview:0" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/00-desktop.webp?v=5e7ff4ce0213" alt="معاينة — ثقة · ضمان الاسترجاع" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:overview:1" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/00-mobile.webp?v=bcec2e3f751c" alt="معاينة — ثقة · ضمان الاسترجاع" loading="lazy" decoding="async"/> |

خيارات مشتركة في هذا القسم، ومنها [كلاسات CSS الجاهزة](/coach-docs/docs/01-shared/#custom-classes)، مشروحة مرة واحدة في [الخيارات المشتركة](/coach-docs/docs/01-shared/): «حجم العنوان»، «خلفية القسم»، «لون الخلفية المخصص»، «صورة خلفية القسم»، «قوة طبقة اللون فوق الصورة»، «تمديد الخلفية بعرض الشاشة»، «المسافة العلوية (بكسل)»، «المسافة السفلية (بكسل)».

<details><summary>من دليل التاجر</summary>

ختم دائري بمدة الضمان بجانب وعد قصير، ومزايا تكتبها، ورابط لسياسة الاسترجاع.

- **أهم الإعدادات:** «الرقم في الختم» و«تحت الرقم» (مثل «٧» و«أيام ضمان»)، و«العنوان»، و«الوعد»، و«المزايا تحت الوعد (اختياري)» حتى ٤، و«نص الرابط» و«الرابط» (عادةً صفحة سياسة الاسترجاع).
- **الشكل:** «الشكل»: «١ · الختم والوعد» (الافتراضي) أو «٢ · شريط مع طرق الدفع»: الوعد بجانب طرق الدفع المفعّلة في سلة، ومعه «طرق الدفع» (مفعّل) و«سطر الأمان بجانب طرق الدفع». ومع إطفاء «طرق الدفع» وترك «سطر الأمان بجانب طرق الدفع» فارغاً، يأخذ الوعد عرض الشريط كله.
- **مهم:** النصوص الافتراضية مثال، تُكتب كما هي سياسة المتجر فعلاً، ويُحذف ما لا ينطبق.

---

**استشارات** — أقسام لبيع الجلسات واللقاءات.

</details>

## الإعدادات بترتيبها في اللوحة

### «الشكل»

- **النوع:** قائمة منسدلة · **الافتراضي:** ١ · الختم والوعد · المعرّف `layout`
- **ماذا يفعل:** الشكل: الختم والوعد، أو شريط بالوعد بجانب طرق الدفع المفعّلة في سلة.
- **متى تستعمله:** «شريط» لقسم أقصر يطمئن على الدفع أيضاً.
- شرحه تحت الحقل في المحرّر: الشريط: الوعد بجانب طرق الدفع المفعّلة في سلة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:layout:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/01-layout-seal-panel.webp?v=91ae7c73a826" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:layout:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/00-desktop.webp?v=5e7ff4ce0213" alt="معاينة — الشكل" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «١ · الختم والوعد» |
| <img data-update-ref="30-coach-guarantee:layout:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/01-layout-strip-panel.webp?v=905890ecaca6" alt="لوحة إعدادات (نسخة مطابقة) — الشكل" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:layout:1:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/01-layout-strip-result.webp?v=24911412f850" alt="معاينة — الشكل" loading="lazy" decoding="async"/> | «٢ · شريط مع طرق الدفع» |

### «الرقم في الختم»

- **النوع:** نص بسطر واحد · **الافتراضي:** ٧ · المعرّف `value`
- **ماذا يفعل:** الرقم في الختم، مثل «٧».
- **متى تستعمله:** مدة الضمان كما في سياستك.
- **حين يكون فارغاً:** فارغاً لا يظهر الختم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:value:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/02-value-panel.webp?v=39e1029545bd" alt="لوحة إعدادات (نسخة مطابقة) — الرقم في الختم" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:value:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/02-value-result.webp?v=29c5e8592118" alt="معاينة — الرقم في الختم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «تحت الرقم»

- **النوع:** نص بسطر واحد · **الافتراضي:** أيام ضمان · المعرّف `value_label`
- **ماذا يفعل:** سطر تحت الرقم، مثل «أيام ضمان».
- **متى تستعمله:** وحدة المدة.
- **حين يكون فارغاً:** فارغاً يظهر الرقم وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:value_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/03-value_label-panel.webp?v=caa7c69c1980" alt="لوحة إعدادات (نسخة مطابقة) — تحت الرقم" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:value_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/03-value_label-result.webp?v=62fedb2bc636" alt="معاينة — تحت الرقم" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** جرّب بلا مخاطرة · المعرّف `title`
- **ماذا يفعل:** عنوان الوعد.
- **متى تستعمله:** مثل «جرّب بلا مخاطرة».
- **حين يكون فارغاً:** إن فرغ العنوان والوعد معاً لا يظهر القسم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:title:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/04-title-panel.webp?v=e54aa58fd0fb" alt="لوحة إعدادات (نسخة مطابقة) — العنوان" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:title:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/04-title-result.webp?v=6cfcaf57c0ac" alt="معاينة — العنوان" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «الوعد»

- **النوع:** نص بعدة أسطر · **الافتراضي:** إن لم يناسبك البرنامج خلال ٧ أيام من الشراء، أعيد لك المبلغ كاملاً برسالة واحدة — ما دمت لم تتجاوز ٢٠٪ من محتواه. · المعرّف `text`
- **ماذا يفعل:** نص الوعد.
- **متى تستعمله:** شروط الاسترجاع باختصار، مطابقة لسياستك.
- **حين يكون فارغاً:** إن فرغ مع العنوان لا يظهر القسم.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:text:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/05-text-panel.webp?v=bf6512c111e9" alt="لوحة إعدادات (نسخة مطابقة) — الوعد" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:text:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/05-text-result.webp?v=cc6c3a52c9e4" alt="معاينة — الوعد" loading="lazy" decoding="async"/> | مكانه في القسم محاط بإطار برتقالي |

### «المزايا تحت الوعد (اختياري)»

- **النوع:** عناصر متكررة (تضيفها وتحذفها وترتّبها) · **الافتراضي:** 3 عناصر جاهزة · المعرّف `benefits`
- **ماذا يفعل:** في الشكل ١: مزايا تحت الوعد بأيقونات.
- **متى تستعمله:** ما يطابق متجرك فقط؛ احذف ما لا ينطبق.
- **حين يكون فارغاً:** بلا مزايا لا تظهر. والميزة بلا عنوان لا تظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «١ · الختم والوعد»
- شرحه تحت الحقل في المحرّر: ما يطابق المتجر؛ يُحذف ما لا ينطبق.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:benefits:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-panel.webp?v=66161896e63b" alt="لوحة إعدادات (نسخة مطابقة) — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:benefits:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-result.webp?v=95e81b4b1998" alt="معاينة — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | أول عنصر محاط بإطار برتقالي |

#### «الأيقونة»

- **النوع:** أيقونة · **الافتراضي:** sicon-check-circle · المعرّف `benefits.icon`
- **ماذا يفعل:** أيقونة الميزة.
- **حين يكون فارغاً:** بدونها علامة صح.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:benefits:1:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-icon-panel.webp?v=2ee521298236" alt="لوحة إعدادات (نسخة مطابقة) — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:benefits:1:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-result.webp?v=95e81b4b1998" alt="معاينة — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «العنوان»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `benefits.title`
- **ماذا يفعل:** عنوان الميزة.
- **حين يكون فارغاً:** الميزة بلا عنوان لا تظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:benefits:2:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-title-panel.webp?v=14af8d09e18f" alt="لوحة إعدادات (نسخة مطابقة) — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:benefits:2:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-result.webp?v=95e81b4b1998" alt="معاينة — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

#### «سطر تحته»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `benefits.text`
- **ماذا يفعل:** سطر تحت عنوان الميزة.
- **حين يكون فارغاً:** فارغاً يظهر العنوان وحده.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:benefits:3:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-text-panel.webp?v=29b479691bff" alt="لوحة إعدادات (نسخة مطابقة) — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:benefits:3:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/06-benefits-result.webp?v=95e81b4b1998" alt="معاينة — المزايا تحت الوعد (اختياري)" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> |  |

### «طرق الدفع»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `show_payments`
- **ماذا يفعل:** طرق الدفع في شكل الشريط.
- **متى تستعمله:** مطفأة حين تظهر في الفوتر.
- **حين يكون فارغاً:** مفعّلة افتراضياً. مطفأة مع سطر أمان فارغ: الوعد بعرض الشريط كله.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · شريط مع طرق الدفع»

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:show_payments:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/07-show_payments-panel.webp?v=f1cc0bf975e8" alt="لوحة إعدادات (نسخة مطابقة) — طرق الدفع" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:show_payments:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/07-show_payments-off-result.webp?v=d395a9f33198" alt="معاينة — طرق الدفع" loading="lazy" decoding="async"/> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «سطر الأمان بجانب طرق الدفع»

- **النوع:** نص بسطر واحد · **الافتراضي:** دفع آمن ومشفّر · فاتورة ضريبية فورية · وصول رقمي فوري · المعرّف `secure_line`
- **ماذا يفعل:** في الشكل ٢: سطر بقفل بجانب طرق الدفع.
- **متى تستعمله:** لما يطمئن عن الدفع والفاتورة.
- **حين يكون فارغاً:** فارغاً لا يظهر.
- **يظهر في اللوحة فقط حين:** «الشكل» هو «٢ · شريط مع طرق الدفع»
- شرحه تحت الحقل في المحرّر: فارغاً لا يظهر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:secure_line:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/08-secure_line-panel.webp?v=069e4d680813" alt="لوحة إعدادات (نسخة مطابقة) — سطر الأمان بجانب طرق الدفع" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:secure_line:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/00-desktop.webp?v=5e7ff4ce0213" alt="معاينة — سطر الأمان بجانب طرق الدفع" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «نص الرابط»

- **النوع:** نص بسطر واحد · **الافتراضي:** سياسة الاسترجاع · المعرّف `link_label`
- **ماذا يفعل:** نص رابط سياسة الاسترجاع.
- **متى تستعمله:** ليقرأ الزائر الشروط كاملة.
- **حين يكون فارغاً:** فارغاً يُخفى الرابط.
- شرحه تحت الحقل في المحرّر: فارغاً يُخفى الرابط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:link_label:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/09-link_label-panel.webp?v=060d33bbcf94" alt="لوحة إعدادات (نسخة مطابقة) — نص الرابط" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:link_label:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/00-desktop.webp?v=5e7ff4ce0213" alt="معاينة — نص الرابط" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه في القسم محاط بإطار برتقالي |

### «الرابط»

- **النوع:** رابط (منتج أو تصنيف أو صفحة أو رابط آخر) · **الافتراضي:** بلا رابط · المعرّف `link`
- **ماذا يفعل:** إلى أين يذهب الرابط، عادةً صفحة سياسة الاسترجاع.
- **متى تستعمله:** اختر صفحة السياسة من سلة.
- **حين يكون فارغاً:** بدونه لا يظهر الرابط.
- شرحه تحت الحقل في المحرّر: عادةً صفحة سياسة الاسترجاع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:link:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/10-link-panel.webp?v=eebbc58321be" alt="لوحة إعدادات (نسخة مطابقة) — الرابط" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:link:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/00-desktop.webp?v=5e7ff4ce0213" alt="معاينة — الرابط" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة: القسم بالقيمة الافتراضية |

### «كلاسات CSS»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `custom_classes`
- **ماذا يفعل:** كلمات لاتينية تُضاف لكلاس القسم: كلاسات جاهزة مثل cx-narrow وcx-center وcx-no-head، أو كلاس خاص يُنسَّق من «تخصيص متقدم» في سلة.
- **متى تستعمله:** لتعديل قسم واحد بلا تغيير الثيم كله. الحروف والأرقام و- و_ فقط، تبدأ الكلمة بحرف، وحتى ثماني كلمات.
- **حين يكون فارغاً:** فارغ: القسم كما هو.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="30-coach-guarantee:custom_classes:0:panel" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/11-custom_classes-panel.webp?v=93ca9f299d65" alt="لوحة إعدادات (نسخة مطابقة) — كلاسات CSS" loading="lazy" decoding="async"/> | <img data-update-ref="30-coach-guarantee:custom_classes:0:result" src="/coach-docs/assets/updates/1.94.0/sections/30-coach-guarantee/11-custom_classes-result.webp?v=43c51e4f9a9b" alt="معاينة — كلاسات CSS" loading="lazy" decoding="async"/> | النتيجة مع «cx-narrow cx-center» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 00-desktop.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[البيانات الافتراضية]
الأرقام والتقييمات والآراء الافتراضية أمثلة، تُعدَّل قبل النشر.
:::
