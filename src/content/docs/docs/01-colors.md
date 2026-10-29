---
title: "ألوان المتجر والخط والأزرار"
description: "الهوية والألوان، مصدر الألوان والقوالب والألوان المتقدمة وشكل الأزرار؛ مصدر أساسي 1.76.1 مع التحديث المرفق 1.87.1."
editUrl: false
---

من **تخصيص ← الخيارات العامة** أو «خيارات التصميم» حسب المحرّر. تغطي هذه الصفحة قسمَي «ألوان المتجر» و«الخط والأزرار والكلمات المميّزة»، بالترتيب التالي.

:::note[التغيّر في القيمة الافتراضية]
الاسم الحالي هو «مصدر الألوان»، والافتراضي «ألوان كوتش». يحتفظ كل متجر حفظ اختياره بذلك الاختيار، والمتجر الذي لم يحفظ هذا الخيار قط يبدأ بألوان كوتش.
:::

<a id="palette-source"></a>

## ألوان المتجر

### مصدر الألوان

المعرّف `palette_source` · قائمة منسدلة من **ثمانية خيارات**. الاسم السابق «مصدر اللون الأساسي».

<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/01-palette_source-field-panel.webp" alt="مصدر الألوان: الحقل ووصفه، ثم اللون الثانوي واللون الأساسي" loading="lazy" decoding="async"/><figcaption>مصدر الألوان: الحقل ووصفه، ثم اللون الثانوي واللون الأساسي — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/02-palette_source-options_top-panel.webp" alt="مصدر الألوان: القائمة مفتوحة (الجزء الأوسط)" loading="lazy" decoding="async"/><figcaption>مصدر الألوان: القائمة مفتوحة (الجزء الأوسط) — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/03-palette_source-options_all-panel.webp" alt="مصدر الألوان: الخيارات الثمانية" loading="lazy" decoding="async"/><figcaption>مصدر الألوان: الخيارات الثمانية — لقطة من محرّر سلة الحقيقي</figcaption></figure></div>

| الخيار | ماذا يفعل | المعاينة الفعلية المرفقة |
|---|---|---|
| ألوان كوتش | الأخضر والمشمشي؛ الافتراضي للمتاجر الجديدة. | <img src="/coach-docs/assets/updates/1.87.1/02-result/01-palette_source-coach-default-result.webp" alt="ألوان كوتش (الافتراضي)" loading="lazy" decoding="async"/><small>ألوان كوتش (الافتراضي)</small> |
| لون المتجر من سلة | اشتقاق الألوان من لون المتجر في سلة. | <img src="/coach-docs/assets/updates/1.87.1/02-result/02-palette_source-store-result.webp" alt="لون المتجر من سلة" loading="lazy" decoding="async"/><small>لون المتجر من سلة</small> |
| لون واحد مخصص | اختيار لون أساسي واحد، ثم اشتقاق البقية. | <img src="/coach-docs/assets/updates/1.87.1/02-result/03-palette_source-custom-result.webp" alt="لون واحد مخصص" loading="lazy" decoding="async"/><small>لون واحد مخصص</small> |
| ألوان متقدمة | لون مستقل لكل مجموعة من أجزاء المتجر. | <img src="/coach-docs/assets/updates/1.87.1/02-result/08-advanced-full-result.webp" alt="ألوان متقدمة: كل الألوان مختارة" loading="lazy" decoding="async"/><small>ألوان متقدمة: كل الألوان مختارة</small> |
| قالب جاهز: هادئ | مجموعة ألوان هادئة متناسقة. | <img src="/coach-docs/assets/updates/1.87.1/02-result/04-palette_source-calm-result.webp" alt="قالب جاهز: هادئ" loading="lazy" decoding="async"/><small>قالب جاهز: هادئ</small> |
| قالب جاهز: دافئ | مجموعة ألوان دافئة متناسقة. | <img src="/coach-docs/assets/updates/1.87.1/02-result/05-palette_source-warm-result.webp" alt="قالب جاهز: دافئ" loading="lazy" decoding="async"/><small>قالب جاهز: دافئ</small> |
| قالب جاهز: بحري | مجموعة ألوان بحرية متناسقة. | <img src="/coach-docs/assets/updates/1.87.1/02-result/06-palette_source-ocean-result.webp" alt="قالب جاهز: بحري" loading="lazy" decoding="async"/><small>قالب جاهز: بحري</small> |
| قالب جاهز: ليلي | مجموعة ألوان ليلية جاهزة؛ ليست تفعيلًا لوضع داكن كامل. | <img src="/coach-docs/assets/updates/1.87.1/02-result/07-palette_source-night-result.webp" alt="قالب جاهز: ليلي" loading="lazy" decoding="async"/><small>قالب جاهز: ليلي</small> |

اللون غير المقروء يُعدَّل تلقائيًا، والخلفية الداكنة جدًا تُفتّح؛ الثيم لا يدعم الوضع الداكن الكامل بعد. صفحة مواعيد منتجات الحجز تبنيها سلة وتظهر بلون المتجر دائمًا.

### اللون الأساسي — لون واحد مخصص

المعرّف `palette_primary` · يظهر عند اختيار «لون واحد مخصص» فقط · الافتراضي فارغ. تُشتق منه بقية ألوان المتجر وتُضبط النصوص للوضوح. تعرض لقطة الحقل أعلاه هذا اللون، ومعاينة «لون واحد مخصص» هي المثال المرفق.

### اللون الثانوي

المعرّف `accent_color` · الافتراضي `#E9A86B`. الاسم السابق «اللون الثانوي (المشمشي)». يلوّن الشارات والكلمات المميّزة والشريط المتحرك في جميع الأوضاع، وعدّاد السلة مع ألوان كوتش. تأخذ النصوص الصغيرة درجة أغمق منه.

<a id="advanced-colors"></a>

## ألوان متقدمة

تظهر هذه الحقول عند اختيار «ألوان متقدمة» من مصدر الألوان.

**الفكرة:** يكفي ثلاثة ألوان: الأساسي والثانوي وخلفية الصفحة. الباقي يُشتق منها تلقائياً، وأي لون يمكن تعديله يدوياً.

**الحقول مقسّمة خمس مجموعات:** الصفحة، البطاقات، الأزرار، الهيدر، الفوتر.

**قاعدة عامة:**
- النص فوق أي زر أو شريط أو شارة يصير أسود أو أبيض تلقائياً، أيهما أوضح.
- اللون غير الواضح يُغمَّق أو يُفتَّح تلقائياً.

### مفاتيح «إرجاع ألوانها للافتراضي» (خمسة، جديد)
- **المفاتيح:** `advrs_page`، `advrs_cards`، `advrs_buttons`، `advrs_header`، `advrs_footer`.
- **الافتراضي:** مطفأ، أي تُطبَّق الألوان المختارة.
- **عند التفعيل:** ترجع ألوان المجموعة للافتراضي، وتبقى الألوان المختارة محفوظة في حقولها. عند الإطفاء تعود.
- **لماذا وُجدت:** حقل اللون في محرر سلة لا يمكن تفريغه بعد اختيار لون، فهذا المفتاح هو طريقة الإرجاع.

| المجموعة | المعرّف | طريقة الإرجاع |
|---|---|---|
| الصفحة | `advrs_page` | مطفأ؛ فعّله لاستعادة ألوان المجموعة الافتراضية دون مسح قيم حقولها |
| البطاقات | `advrs_cards` | مطفأ؛ فعّله لاستعادة ألوان المجموعة الافتراضية دون مسح قيم حقولها |
| الأزرار | `advrs_buttons` | مطفأ؛ فعّله لاستعادة ألوان المجموعة الافتراضية دون مسح قيم حقولها |
| الهيدر | `advrs_header` | مطفأ؛ فعّله لاستعادة ألوان المجموعة الافتراضية دون مسح قيم حقولها |
| الفوتر | `advrs_footer` | مطفأ؛ فعّله لاستعادة ألوان المجموعة الافتراضية دون مسح قيم حقولها |

مثال مصوّر لمفتاح إرجاع ألوان **الهيدر**: الحالة مطفأة ثم مفعّلة؛ بقية المفاتيح تتبع القاعدة نفسها.

<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/02-result/16-advrs_header-off-result.webp" alt="مفتاح «الهيدر · إرجاع ألوانه» مطفأ: ألوان الهيدر المختارة مطبقة" loading="lazy" decoding="async"/><figcaption>مفتاح «الهيدر · إرجاع ألوانه» مطفأ: ألوان الهيدر المختارة مطبقة</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/17-advrs_header-on-result.webp" alt="المفتاح مفعّل: الهيدر رجع للافتراضي وبقيت ألوانه محفوظة" loading="lazy" decoding="async"/><figcaption>المفتاح مفعّل: الهيدر رجع للافتراضي وبقيت ألوانه محفوظة</figcaption></figure></div>

### الأساسي
| الحقل | المعرّف | ماذا يلوّن | إن تُرك فارغاً |
|---|---|---|---|
| اللون الأساسي (الأزرار والروابط) | `adv_primary` | الأزرار الرئيسية والروابط والتحديد وزر واتساب العائم. مع النص الأبيض تُختار درجة أغمق | لون المتجر من سلة |


<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/04-adv_primary-advrs_page-page_group-panel.webp" alt="ألوان متقدمة: اللون الأساسي، ومجموعة الصفحة مع مفتاح الإرجاع" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: اللون الأساسي، ومجموعة الصفحة مع مفتاح الإرجاع — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/10-advanced-three_colors-result.webp" alt="ألوان متقدمة بثلاثة ألوان فقط (الأساسي والثانوي والخلفية) والباقي مشتق" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة بثلاثة ألوان فقط (الأساسي والثانوي والخلفية) والباقي مشتق</figcaption></figure></div>

<a id="advanced-page"></a>

### الصفحة
| الحقل | المعرّف | ماذا يلوّن | إن تُرك فارغاً |
|---|---|---|---|
| الصفحة · الخلفية | `adv_bg` | خلفية الموقع، ومنها تُحسب النصوص الثانوية. الداكن جداً يُفتَّح | من اللون الأساسي |
| الصفحة · النصوص | `adv_text` | النصوص والأيقونات، ومنها النصوص الثانوية والحدود | من اللون الأساسي |
| الصفحة · العناوين | `adv_heading` | عناوين الأقسام والمكوّنات والصفحات | لون النصوص |
| الصفحة · الأقسام الداكنة | `adv_dark` | خلفية الأقسام والبطاقات الداكنة، ونصها أبيض | مشتق من الأساسي |


<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/04-adv_primary-advrs_page-page_group-panel.webp" alt="ألوان متقدمة: اللون الأساسي، ومجموعة الصفحة مع مفتاح الإرجاع" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: اللون الأساسي، ومجموعة الصفحة مع مفتاح الإرجاع — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/11-advanced-sections-result.webp" alt="ألوان متقدمة: لون مميز لكل قسم (هيدر داكن، بطاقات، فوتر)" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: لون مميز لكل قسم (هيدر داكن، بطاقات، فوتر)</figcaption></figure></div>

<a id="advanced-cards"></a>

### البطاقات
| الحقل | المعرّف | ماذا يلوّن | إن تُرك فارغاً |
|---|---|---|---|
| البطاقات · الأقسام والألواح الفاتحة | `adv_surface` | بطاقات المكوّنات والنوافذ. الداكن يُفتَّح | من خلفية الصفحة، أو أبيض |
| البطاقات · خلفية بطاقة المنتج | `adv_card` | بطاقة المنتج في كل مكان، فاتحة أو داكنة. نصوصها وسعرها وزر الإضافة فيها تلقائية | لون البطاقات |
| البطاقات · الأسعار والخصم | `adv_price` | السعر في البطاقات وصفحة المنتج والسلة، وخلفية شارة الخصم | لون النصوص، والأحمر للخصم |


- **استثناء:** بطاقات «رفّ الكتب» شفافة بتصميمها، فلا تأخذ هذا اللون.


<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/05-advrs_cards-cards_buttons_group-panel.webp" alt="ألوان متقدمة: مجموعة البطاقات وبداية مجموعة الأزرار" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: مجموعة البطاقات وبداية مجموعة الأزرار — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/12-adv_card-result.webp" alt="خلفية بطاقة المنتج: فاتحة" loading="lazy" decoding="async"/><figcaption>خلفية بطاقة المنتج: فاتحة</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/13-adv_card-dark-result.webp" alt="خلفية بطاقة المنتج: داكنة، والنصوص والسعر تلقائية" loading="lazy" decoding="async"/><figcaption>خلفية بطاقة المنتج: داكنة، والنصوص والسعر تلقائية</figcaption></figure></div>

<a id="advanced-buttons"></a>

### الأزرار
| الحقل | المعرّف | ماذا يلوّن | إن تُرك فارغاً |
|---|---|---|---|
| الأزرار · الزر الداكن | `adv_button_dark` | الأزرار الداكنة مثل «احجز استشارة» | اللون الأساسي |
| الأزرار · الروابط والنصوص الملوّنة | `adv_link` | الروابط عند التأشير والكلمات الملوّنة | من اللون الأساسي |
| الأزرار · زر واتساب العائم | `adv_whatsapp` | الزر العائم. نصه وأيقونته تلقائيان | اللون الأساسي |


<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/06-advrs_buttons-buttons_header_group-panel.webp" alt="ألوان متقدمة: مجموعة الأزرار وبداية مجموعة الهيدر" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: مجموعة الأزرار وبداية مجموعة الهيدر — لقطة من محرّر سلة الحقيقي</figcaption></figure></div>

<a id="advanced-header"></a>

### الهيدر
| الحقل | المعرّف | ماذا يلوّن | إن تُرك فارغاً |
|---|---|---|---|
| الهيدر · الشريط الإعلاني | `adv_announce` | خلفية الشريط أعلى الصفحة | اللون الأساسي |
| الهيدر · الخلفية | `adv_header` | فاتح أو داكن، ونصوصه تتبعه. يُفضَّل شعار فاتح مع الهيدر الداكن | خلفية الصفحة |
| الهيدر · النصوص والأيقونات | `adv_header_ink` | روابط الهيدر وأيقوناته وقوائمه المنسدلة | تلقائي |
| الهيدر · الأزرار الدائرية | `adv_header_pill` | أزرار البحث والحساب واللغة والسلة والقائمة | لون البطاقات، أو شفاف مع الهيدر الداكن |
| الهيدر · زر الحجز | `adv_header_cta` | زر الهيدر البارز | اللون الأساسي |
| الهيدر · خلفية القائمة المدمجة | `adv_menu_bg` | القائمة التي تفتح في الهيدر المدمج | لون الهيدر، وإلا خيار «خلفية القائمة في الهيدر المدمج» |


- **الفواصل:** فواصل الهيدر من لون نصه.


<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/06-advrs_buttons-buttons_header_group-panel.webp" alt="ألوان متقدمة: مجموعة الأزرار وبداية مجموعة الهيدر" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: مجموعة الأزرار وبداية مجموعة الهيدر — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/07-advrs_header-header_footer_group-panel.webp" alt="ألوان متقدمة: بقية الهيدر ومجموعة الفوتر" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: بقية الهيدر ومجموعة الفوتر — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/15-adv_menu_bg-open-result.webp" alt="خلفية القائمة المدمجة (القائمة مفتوحة)" loading="lazy" decoding="async"/><figcaption>خلفية القائمة المدمجة (القائمة مفتوحة)</figcaption></figure></div>

<a id="advanced-footer"></a>

### الفوتر
| الحقل | المعرّف | ماذا يلوّن | إن تُرك فارغاً |
|---|---|---|---|
| الفوتر · الخلفية | `adv_footer` | فاتح أو داكن، ونصوصه تتبعه | من خلفية الصفحة، أو من الأساسي |
| الفوتر · النصوص والأيقونات | `adv_footer_ink` | النصوص والروابط، وكل أيقونات الفوتر بلون واحد (التواصل والتواصل الاجتماعي) | تلقائي |


- **تفاصيل الشكل:**
  - الفواصل من لون نص الفوتر.
  - اسم المتجر الكبير في الفوتر بدرجة شفافة من لونه.


<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/07-advrs_header-header_footer_group-panel.webp" alt="ألوان متقدمة: بقية الهيدر ومجموعة الفوتر" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: بقية الهيدر ومجموعة الفوتر — لقطة من محرّر سلة الحقيقي</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/14-adv_footer-result.webp" alt="ألوان الفوتر: الخلفية والنصوص والأيقونات" loading="lazy" decoding="async"/><figcaption>ألوان الفوتر: الخلفية والنصوص والأيقونات</figcaption></figure></div>

### نصائح لاختيار الألوان
1. **ابدأ بثلاثة ألوان:** الأساسي والثانوي والخلفية، والباقي يُشتق (صورة `10`).
2. **أضف ما تريد تمييزه فقط:** هيدر داكن، أو بطاقات بلون، أو فوتر (صورة `11`).
3. **للرجوع عن ألوان مجموعة:** فعّل مفتاح «إرجاع» تلك المجموعة.
4. **مع الهيدر الداكن:** استخدم شعاراً فاتحاً.

**صور عامة:** نتائج `08` للكمبيوتر و`09` للجوال، ونتيجة `10` للألوان الثلاثة.

---

## أمثلة الألوان المتقدمة على الكمبيوتر والجوال

<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/02-result/08-advanced-full-result.webp" alt="ألوان متقدمة: كل الألوان مختارة" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: كل الألوان مختارة</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/09-advanced-full-mobile-result.webp" alt="ألوان متقدمة على الجوال" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة على الجوال</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/10-advanced-three_colors-result.webp" alt="ألوان متقدمة بثلاثة ألوان فقط (الأساسي والثانوي والخلفية) والباقي مشتق" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة بثلاثة ألوان فقط (الأساسي والثانوي والخلفية) والباقي مشتق</figcaption></figure>

<figure><img src="/coach-docs/assets/updates/1.87.1/02-result/11-advanced-sections-result.webp" alt="ألوان متقدمة: لون مميز لكل قسم (هيدر داكن، بطاقات، فوتر)" loading="lazy" decoding="async"/><figcaption>ألوان متقدمة: لون مميز لكل قسم (هيدر داكن، بطاقات، فوتر)</figcaption></figure></div>

<a id="button-shape"></a>

<a id="fonts-buttons"></a>

## الخط والأزرار والكلمات المميّزة

### شكل الأزرار

المعرّف `button_shape`. يؤثر على الأزرار فقط، ولا يغيّر شكل البطاقات.

<div class="update-gallery"><figure><img src="/coach-docs/assets/updates/1.87.1/01-panel/08-button_shape-field-panel.webp" alt="شكل الأزرار" loading="lazy" decoding="async"/><figcaption>شكل الأزرار — لقطة من محرّر سلة الحقيقي</figcaption></figure></div>

| الخيار | المعاينة |
|---|---|
| دائري — الافتراضي | <img src="/coach-docs/assets/updates/1.87.1/02-result/18-button_shape-pill-default-result.webp" alt="شكل الأزرار: دائري (الافتراضي)" loading="lazy" decoding="async"/><small>شكل الأزرار: دائري (الافتراضي)</small> |
| زوايا ناعمة | <img src="/coach-docs/assets/updates/1.87.1/02-result/19-button_shape-soft-result.webp" alt="شكل الأزرار: زوايا ناعمة" loading="lazy" decoding="async"/><small>شكل الأزرار: زوايا ناعمة</small> |
| زوايا خفيفة | <img src="/coach-docs/assets/updates/1.87.1/02-result/20-button_shape-sharp-result.webp" alt="شكل الأزرار: زوايا خفيفة" loading="lazy" decoding="async"/><small>شكل الأزرار: زوايا خفيفة</small> |

### الكلمات المميّزة والخط

### «شكل الكلمات المميّزة في العناوين»

- **النوع:** قائمة منسدلة · **الافتراضي:** لون وخط تحت الكلمات (الافتراضي) · المعرّف `title_highlight`
- **ماذا يفعل:** شكل الكلمات التي تكتبها بين [[ ]] في عناوين الأقسام، مثل «دورات [[مختارة لك]]». ثلاثة أشكال باللون الثانوي.
- **متى تستعمله:** اختر شكلاً واحداً يناسب هويتك. يتغيّر في كل الأقسام معاً.
- شرحه تحت الحقل في المحرّر: لما بين [[ ]]؛ الخط والقلم باللون الثانوي.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/00-theme/01-colors/03-title_highlight-bold-panel.webp" alt="لوحة إعدادات — شكل الكلمات المميّزة في العناوين" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/00-theme/01-colors/00-default-result.webp" alt="معاينة — شكل الكلمات المميّزة في العناوين" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «لون وخط عريض» |
| <img src="/coach-docs/assets/00-theme/01-colors/03-title_highlight-marker-panel.webp" alt="لوحة إعدادات — شكل الكلمات المميّزة في العناوين" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/00-theme/01-colors/03-title_highlight-marker-result.webp" alt="معاينة — شكل الكلمات المميّزة في العناوين" loading="lazy" decoding="async"/> | «قلم تمييز خلف الكلمات» |
| <img src="/coach-docs/assets/00-theme/01-colors/03-title_highlight-line-panel.webp" alt="لوحة إعدادات — شكل الكلمات المميّزة في العناوين" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/00-theme/01-colors/00-default-result.webp" alt="معاينة — شكل الكلمات المميّزة في العناوين" loading="lazy" decoding="async"/><small class="image-reference">صورة مرجعية مشتركة؛ ليست لقطة مستقلة لتغيير هذا الإعداد.</small> | «لون وخط تحت الكلمات (الافتراضي)» |

### «مصدر الخط»

- **النوع:** قائمة منسدلة · **الافتراضي:** خط سلة للعناوين والنصوص (الافتراضي) · المعرّف `font_source`
- **ماذا يفعل:** خطوط المتجر. «خط سلة» هو الخط الذي تختاره من «الخطوط» في تخصيص سلة، وهو الأسرع. الخياران الآخران يضيفان خط Alexandria للعناوين، أو خطّي التصميم الأصليين من Google Fonts.
- **متى تستعمله:** اترك «خط سلة» للسرعة. اختر «خطوط كوتش» إن أردت شكل التصميم الأصلي بالضبط.
- شرحه تحت الحقل في المحرّر: «خط سلة» الأسرع: خط تخصيص سلة. Alexandria للعناوين والأرقام؛ خطوط كوتش من Google Fonts.

| اللوحة (نسخة مطابقة) | النتيجة | |
|---|---|---|
| <img src="/coach-docs/assets/00-theme/01-colors/04-font_source-store-panel.webp" alt="لوحة إعدادات — مصدر الخط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/00-theme/01-colors/04-font_source-store-result.webp" alt="معاينة — مصدر الخط" loading="lazy" decoding="async"/> | «خط سلة للعناوين والنصوص (الافتراضي)» |
| <img src="/coach-docs/assets/00-theme/01-colors/04-font_source-store_body-panel.webp" alt="لوحة إعدادات — مصدر الخط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/00-theme/01-colors/04-font_source-store_body-result.webp" alt="معاينة — مصدر الخط" loading="lazy" decoding="async"/> | «عناوين كوتش (Alexandria) ونصوص بخط سلة» |
| <img src="/coach-docs/assets/00-theme/01-colors/04-font_source-coach-panel.webp" alt="لوحة إعدادات — مصدر الخط" loading="lazy" decoding="async"/> | <img src="/coach-docs/assets/00-theme/01-colors/04-font_source-coach-result.webp" alt="معاينة — مصدر الخط" loading="lazy" decoding="async"/> | «خطوط كوتش (Alexandria وIBM Plex Sans Arabic)» |





<div class="source-note">لوحات الألوان وشكل الأزرار المرفقة بالتحديث لقطات من محرّر سلة الحقيقي. لوحات إعدادات الكلمات المميّزة والخط من المصدر الأساسي مرسومة من تعريفات الثيم. المعاينات ببيانات تجريبية؛ اضغط على أي صورة لتكبيرها.</div>
