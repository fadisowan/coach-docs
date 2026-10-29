---
title: "الأزرار العائمة وشاشة التحميل"
description: "دليل ثيم كوتش 1.76.1 — ١٠ · أزرار الشاشة — واتساب العائم، العودة للأعلى، وشاشة التحميل"
editUrl: false
---

:::caution[حدود المعاينات المتاحة]
معاينة زر واتساب العائم موجودة فعلًا. أما الخيارات الخاصة بالرسالة الجاهزة والعودة للأعلى وشاشة التحميل فتستخدم لقطة الزر نفسها ولا تُظهر هذه الحالات بصورة مستقلة.
:::


في محرّر سلة: «خيارات التصميم ← الخيارات العامة»، قسم «الأزرار العائمة وشاشة التحميل». تنطبق على المتجر كله.

**ما فيها:** الأزرار الثابتة على الشاشة: واتساب العائم ورقمه ورسالته، وزر العودة للأعلى، وجهة الزرين، وشاشة التحميل.

النتيجة مصوّرة على الصفحة الرئيسية مع `whatsapp_enabled` مفعّلاً ليظهر ما تتحكم به المجموعة.

| النتيجة الافتراضية |
|---|
| <img data-update-ref="10-whatsapp:overview:0" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/00-default-result.webp?v=f8a9c1d6841b" alt="معاينة — ١٠ · أزرار الشاشة — واتساب العائم، العودة للأعلى، وشاشة التحميل" loading="lazy" decoding="async"/> |

<details><summary>من دليل التاجر</summary>

- «رقم واتساب»: بالصيغة الدولية، مثل 966500000000. فارغاً يُستخدم رقم واتساب المتجر من إعدادات سلة. يستخدمه الزر العائم، وكذلك زر التواصل في «عام · الأسئلة الشائعة» وبطاقة الدعوة في الفوتر حين يُترك رابطاهما فارغين.
- «زر واتساب عائم»: كبسولة ثابتة في زاوية الشاشة في كل الصفحات. مطفأ افتراضياً. بلا رقم في الثيم ولا في سلة لا يظهر.
- «نص الزر العائم»: فارغاً يظهر «اسألني على واتساب». على الجوال يظهر الزر بأيقونته فقط.
- «رسالة جاهزة»: تُكتب تلقائياً في المحادثة عند فتحها. الافتراضية «مرحباً، لدي سؤال عن البرامج»، وتُغيَّر بما يناسب المتجر.
- «زر العودة للأعلى»: زر دائري صغير يظهر بعد النزول في الصفحة، فوق زر واتساب إن كان مفعّلاً. مفعّل.
- «شاشة التحميل»: شعار المتجر وحلقة تدور حتى تكتمل الصفحة، ثم تختفي بهدوء (ثلاث ثوانٍ على الأكثر). مطفأة افتراضياً: الصفحة تظهر أسرع بدونها.
- «جهة الأزرار العائمة»: زر واتساب وزر العودة للأعلى في «نهاية السطر (الافتراضي)»، أي يسار الصفحة العربية، أو في «بداية السطر».

عن «رقم واتساب»: لا بأس إن كتبته بمسافات أو شرطات أو علامة +، فالثيم يحذفها. المهم أن يبدأ برمز الدولة.

</details>

## الإعدادات بترتيبها في اللوحة

### «رقم واتساب»

- **النوع:** نص بسطر واحد · **الافتراضي:** فارغ · المعرّف `whatsapp_number`
- **ماذا يفعل:** رقم واتساب بالصيغة الدولية، مثل 966500000000. يستعمله الزر العائم، وزر «الأسئلة الشائعة» وبطاقة الدعوة في الفوتر حين تُترك روابطهما فارغة.
- **متى تستعمله:** إن أردت رقماً غير رقم المتجر.
- **حين يكون فارغاً:** فارغاً يُستعمل رقم واتساب المتجر من سلة.
- شرحه تحت الحقل في المحرّر: للأسئلة الشائعة والزر العائم، دولياً مثل 966500000000. فارغاً: رقم المتجر.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:whatsapp_number:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/01-whatsapp_number-panel.webp?v=3d9c495d8cde" alt="لوحة إعدادات (نسخة مطابقة) — رقم واتساب" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:whatsapp_number:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/00-default-result.webp?v=f8a9c1d6841b" alt="معاينة — رقم واتساب" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بالقيمة الافتراضية |

### «زر واتساب عائم»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `whatsapp_enabled`
- **ماذا يفعل:** كبسولة واتساب ثابتة في زاوية الشاشة في كل الصفحات.
- **متى تستعمله:** إن كان واتساب طريقك الأساسي للتواصل.
- **حين يكون فارغاً:** مطفأ (الافتراضي): بلا زر. ولا يظهر أيضاً بلا رقم في الثيم ولا في سلة.
- شرحه تحت الحقل في المحرّر: كبسولة ثابتة في زاوية الشاشة في كل الصفحات.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:whatsapp_enabled:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-panel.webp?v=b5b619870382" alt="لوحة إعدادات (نسخة مطابقة) — زر واتساب عائم" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:whatsapp_enabled:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-on-result.webp?v=569df6ea9170" alt="معاينة — زر واتساب عائم" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «نص الزر العائم»

- **النوع:** نص بسطر واحد · **الافتراضي:** اسألني على واتساب · المعرّف `whatsapp_label`
- **ماذا يفعل:** نص الزر العائم. على الجوال الأيقونة فقط.
- **متى تستعمله:** مثل «اسألني على واتساب».
- **حين يكون فارغاً:** فارغاً يظهر «اسألني على واتساب».
- **يظهر في اللوحة فقط حين:** «زر واتساب عائم» هو «مفعّل»
- شرحه تحت الحقل في المحرّر: فارغاً: «اسألني على واتساب». على الجوال الأيقونة فقط.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:whatsapp_label:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/03-whatsapp_label-panel.webp?v=a71d967af29d" alt="لوحة إعدادات (نسخة مطابقة) — نص الزر العائم" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:whatsapp_label:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/03-whatsapp_label-result.webp?v=92471b6e67fa" alt="معاينة — نص الزر العائم" loading="lazy" decoding="async"/> | مكانه محاط بإطار برتقالي |

### «رسالة جاهزة»

- **النوع:** نص بعدة أسطر · **الافتراضي:** مرحباً، لدي سؤال عن البرامج · المعرّف `whatsapp_message`
- **ماذا يفعل:** رسالة تُكتب تلقائياً في المحادثة عند فتحها.
- **متى تستعمله:** لتسهيل أول رسالة.
- **حين يكون فارغاً:** فارغة تُفتح المحادثة بلا نص.
- **يظهر في اللوحة فقط حين:** «زر واتساب عائم» هو «مفعّل»
- شرحه تحت الحقل في المحرّر: تُكتب تلقائياً في المحادثة عند فتحها.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:whatsapp_message:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/04-whatsapp_message-panel.webp?v=7acba52313ee" alt="لوحة إعدادات (نسخة مطابقة) — رسالة جاهزة" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:whatsapp_message:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-on-result.webp?v=569df6ea9170" alt="معاينة — رسالة جاهزة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | مكانه محاط بإطار برتقالي |

### «زر العودة للأعلى»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مفعّل · المعرّف `back_to_top_enabled`
- **ماذا يفعل:** زر دائري يظهر بعد النزول في الصفحة ويرجع للأعلى.
- **متى تستعمله:** اتركه مفعّلاً للصفحات الطويلة.
- **حين يكون فارغاً:** مطفأ: بلا زر.
- شرحه تحت الحقل في المحرّر: يظهر بعد النزول في الصفحة.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:back_to_top_enabled:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/05-back_to_top_enabled-panel.webp?v=49ad0ae6ef48" alt="لوحة إعدادات (نسخة مطابقة) — زر العودة للأعلى" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:back_to_top_enabled:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-on-result.webp?v=569df6ea9170" alt="معاينة — زر العودة للأعلى" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد إطفائه (الافتراضي مفعّل) |

### «شاشة التحميل»

- **النوع:** مفتاح تشغيل وإطفاء · **الافتراضي:** مطفأ · المعرّف `preloader_enabled`
- **ماذا يفعل:** شاشة بشعار المتجر وحلقة تدور حتى تكتمل الصفحة، ثلاث ثوانٍ على الأكثر.
- **متى تستعمله:** نادراً؛ الصفحة أسرع بدونها.
- **حين يكون فارغاً:** مطفأة (الافتراضي): تظهر الصفحة مباشرة.
- شرحه تحت الحقل في المحرّر: شعار المتجر في حلقة تدور حتى تكتمل الصفحة (٣ ثوانٍ أقصى). مطفأة: أسرع.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:preloader_enabled:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/06-preloader_enabled-panel.webp?v=759f41bff9de" alt="لوحة إعدادات (نسخة مطابقة) — شاشة التحميل" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:preloader_enabled:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-on-result.webp?v=569df6ea9170" alt="معاينة — شاشة التحميل" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | النتيجة بعد تفعيله (الافتراضي مطفأ) |

### «جهة الأزرار العائمة»

- **النوع:** قائمة منسدلة · **الافتراضي:** نهاية السطر (الافتراضي) · المعرّف `floating_side`
- **ماذا يفعل:** جهة زر واتساب وزر العودة للأعلى: نهاية السطر (يسار في العربية) أو بدايته.
- **متى تستعمله:** حين يغطي الزرين عنصر آخر في جهتهما.
- شرحه تحت الحقل في المحرّر: واتساب والعودة للأعلى.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img data-update-ref="10-whatsapp:floating_side:0:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/07-floating_side-end-panel.webp?v=cb44d959851f" alt="لوحة إعدادات (نسخة مطابقة) — جهة الأزرار العائمة" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:floating_side:0:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-on-result.webp?v=569df6ea9170" alt="معاينة — جهة الأزرار العائمة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «نهاية السطر (الافتراضي)» |
| <img data-update-ref="10-whatsapp:floating_side:1:panel" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/07-floating_side-start-panel.webp?v=7ec2b91af8bd" alt="لوحة إعدادات (نسخة مطابقة) — جهة الأزرار العائمة" loading="lazy" decoding="async"/> | <img data-update-ref="10-whatsapp:floating_side:1:result" src="/coach-docs/assets/updates/1.94.0/00-theme/11-whatsapp/02-whatsapp_enabled-on-result.webp?v=569df6ea9170" alt="معاينة — جهة الأزرار العائمة" loading="lazy" decoding="async"/><small class="image-reference">معاينة مرجعية مشتركة؛ لا تثبت أثر كل خيار بصورة مستقلة.</small> | «بداية السطر» |

---
> ملاحظات البناء: لم يُعثر على النص لتمييزه: 02-whatsapp_enabled-on-result.webp


<div class="source-note">صور اللوحات تمثيل مطابق لحقول المحرّر، وليست لقطات من محرّر سلة نفسه. صور النتائج ببيانات تجريبية؛ تُفتح الصورة بالضغط عليها لقراءتها بالحجم الأصلي.</div>

:::note[توضيح العرض]
يظهر زر واتساب في صفحة السلة على الكمبيوتر في الجهة البعيدة عن ملخص الطلب.
:::

لون زر واتساب العائم يُضبط من [الألوان المتقدمة للأزرار](/coach-docs/docs/01-colors/#advanced-buttons)، ضمن قسم ألوان المتجر.
