// projectsData.js - כל נתוני הפרויקטים של אשכול
// נוצר אוטומטית מהאתר הישן

export const projectsData = [
  // ============== בשיווק ==============
  {
    id: 'hadar-yosef',
    slug: 'hadar-yosef',
    name: 'הדר יוסף',
    nameEn: 'Hadar Yosef',
    location: 'תל אביב',
    neighborhood: 'שכונת הדר יוסף',
    status: 'marketing', // בשיווק
    statusLabel: 'בשיווק',
    units: 72,
    buildings: 3,
    floors: 8,
    apartmentTypes: '3-5 חדרים',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2021/11/1977_apt_13_002f-scaled.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2021/11/1977_apt_13_002f-scaled.jpg',
      'https://eshkol.co.il/wp-content/uploads/2021/11/1977_apt_13_001f-scaled.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/WhatsApp-Image-2024-11-25-at-14.36.09.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/jpg11_compressed-1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/jpg10_compressed.jpg',
    ],
    floorPlans: [
      { name: 'קומות 2-6', image: 'https://eshkol.co.il/wp-content/uploads/2019/04/2.png' },
      { name: 'קומה 8', image: 'https://eshkol.co.il/wp-content/uploads/2019/04/2.png' }
    ],
    video: 'https://eshkol.co.il/wp-content/uploads/2025/05/WhatsApp-Video-2025-05-05-at-14.04.59.mp4',
    description: `בלב שכונת הדר יוסף המתחדשת בצפון תל אביב, חברת אשכול מציגה:
קומפלקס של 3 בניינים בני 8 קומות, הכוללים 72 דירות.
בנייה מודרנית, בסטנדרטים גבוהים ובאיכות לא מתפשרת.
לכל דירה מרפסת וחניה.`,
    fullDescription: `המיקום המושלם לבית שלך – שכונה שקטה ואיכותית בצפון תל אביב, עם אופי כפרי וקהילתי. בשכונה בית ספר, גני ילדים ומרכז קהילתי.
השכונה טובלת בירוק וצמודה לפארק הירקון וגני יהושע, קרובה לאוניברסיטת תל אביב, סמינר הקיבוצים, לקריית עתידים ברמת החייל, לקניון איילון ולמגדלי המשרדים הסמוכים לו.
כמו כן, השכונה נהנית ממתקני פארק הירקון, מגרשי ומתקני מרכז הספורט הלאומי ומקאנטרי דקל הסמוך.`,
    specs: [
      'מרפסות שמש גדולות',
      'אינטרקום טלוויזיה דירתי',
      'דלת ביטחון משודרגת בכניסה לדירה',
      'דלתות פנים איכותיות עם משקופים בהלבשה רחבה',
      'ריצוף גרניט פורצלן 80/80 בחדר דיור ובמטבח',
      'חיבור הדירה לחשמל תלת-פאזי',
      'אביזרי חשמל (קצה) איכותיים',
      'זיגוג כפול בחלונות לבידוד',
      'תריסי גלילה חשמלי בחדר דיור',
      'ארונות מטבח סנדוויץ עם טריקה שקטה',
      'שיש "קיסר" במטבח',
      'ברז נשלף במטבח',
      'כלים סניטריים איכותיים',
      'אסלות תלויות עם מיכל הדחה סמוי',
      'ארון עם כיור מעוצב במקלחת הורים',
      'מערכת מיזוג אויר מרכזית דירתית'
    ],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'hakinor-al-hapark',
    slug: 'hakinor-al-hapark',
    name: 'הכינור על הפארק',
    nameEn: 'HaKinor Al HaPark',
    location: 'הרצליה',
    neighborhood: 'גליל ים',
    status: 'marketing',
    statusLabel: 'בשיווק',
    units: null,
    buildings: null,
    floors: null,
    apartmentTypes: '5-6 חדרים, גן ומיני פנטהאוז',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-14.19.17-2.jpeg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-14.19.17-2.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-14.19.17-1-1360x764.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-29-at-12.19.05-1-1360x1020.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-14.19.17-1360x764.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-04-at-14.19.17-3-1360x1020.jpeg'
    ],
    floorPlans: [],
    video: null,
    description: `בקו הראשון לפארק גליל ים הולך ונבנה פרויקט כינור על הפארק המציג שילוב מנצח בין יוקרה לפסטורליה.`,
    fullDescription: `הדירות המרווחות ומאובזרות בסטנדרט הגבוה ביותר והלובי המעוצב עד הפרט האחרון ניצבים בליבו של הפארק הירוק ושטוף השמש, האגם המתפתל לאורכו והגינות הזרועות במרחביו. בעזרת תכנון אדריכלי מוקפד ומדויק תוכלו להינות בדירתכם מנופים פתוחים וירוקים, שקט כפרי, ואווירה טבעית ורעננה מבלי לצאת מהעיר.

פארק גליל ים משתרע על שטח של 213 דונם, ממוקם בלב מתחם מגורים ונושק לדפנות אורבניות התוחמות אותו ממזרח ומערב. הפארק מציע לתושבי השכונה מגוון פעילויות – גינת ילדים עצומה ומושקעת, גינת כושר מאובזרת היטב, שני מגרשים למשחקי כדור, אגם שנוצר על ידי נחל גלילות, מדשאות וספסלי פיקניק, מסלולי ריצה ורכיבה על אופניים, גינת כלבים ומצפה המשקיף על כל הפארק.

השכונה הירוקה נמצאת בסמוך לשדות של קיבוץ גליל ים, במרחק קצר מספורטק הרצליה וקניון שבעת הכוכבים, במרחק רכיבה מחופי הרצליה היפים, מהמרכז הבינתחומי או ממתחם המשרדים והמסעדות בהרצליה פיתוח.`,
    specs: [],
    developer: 'אשכול + רם-מוגרבי-ארדיטי',
    architect: 'לוטן-דייטש אדריכלים',
    interiorDesign: 'פרי-דוידוביץ אדריכלים'
  },

  {
    id: 'aminadav',
    slug: 'aminadav',
    name: 'עמינדב',
    nameEn: 'Aminadav',
    location: 'תל אביב',
    neighborhood: 'ליד פארק שדרות ההשכלה',
    status: 'marketing',
    statusLabel: 'בשיווק',
    units: null,
    buildings: 2,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2024/11/3.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2024/11/3.jpg',
      'https://eshkol.co.il/wp-content/uploads/2024/11/4.jpg',
      'https://eshkol.co.il/wp-content/uploads/2024/11/5.jpg',
      'https://eshkol.co.il/wp-content/uploads/2024/11/7.jpg',
      'https://eshkol.co.il/wp-content/uploads/2024/11/1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2024/11/2.jpg',
      'https://eshkol.co.il/wp-content/uploads/2024/11/6.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `ברוכים הבאים לפרויקט עמינדב, מתחם המגורים החדש בעיר ת"א. מתחם שמשלב איכות ונוחות.`,
    fullDescription: `לגור בעמינדב יאפשר לכם אתנחתא משטף החיים כשהכל סביבכם פועם.

פרויקט עמינדב שוכן באזור אידיאלי של העיר תל אביב. אזור שמשלב עירוב אורבני, לצד פארק ירוק ורחב ידיים, פארק שדרות ההשכלה שנמצא ממש מתחת לביתכם.

הנגישות למתחם חסרת תקדים, תחנת המטרו העתידית נמצאת כ-300 מ' הליכה מבתיכם. צירי הרכבת התחתית ייקחו אתכם למקום עבודתכם רעננים ליום חדש. הרכב שלכם יחכה לכם בחניה התת קרקעית לנסיעות משפחתיות.

תכנון המתחם נעשה תוך התאמה אידיאלית לאופי המיוחד של העיר. שני בנייני מגורים עם חלונות רחבים לקבל את אור השמש בבוקר ולהסוותו בצהרי היום על ידי מערכת הצללה חדשנית. מרתפי החניה רחבי ידיים, שתי מעליות מרווחות, גינון מוקפד ופינות חמד ירוקות.`,
    specs: [],
    developer: 'אשכול + שרון גולדשטיין אחזקות',
    architect: null
  },

  {
    id: 'haraave-5',
    slug: 'haraave-5',
    name: 'הראב"ע 5',
    nameEn: 'HaRaave 5',
    location: 'רמת גן',
    neighborhood: 'רמת גן',
    status: 'marketing',
    statusLabel: 'בשיווק',
    units: 19,
    buildings: 1,
    floors: 7,
    apartmentTypes: '4-5 חדרים, דירות גן ופנטהאוזים',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2021/02/%D7%94%D7%A8%D7%90%D7%91%D7%A2-5-.jpeg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2021/02/%D7%94%D7%A8%D7%90%D7%91%D7%A2-5-.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2021/02/%D7%94%D7%90.jpeg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט הראב"ע 5 רמת גן, הינו בניין בוטיק בן 7 קומות בהם 19 דירות מפנקות, בכל קומה ישנן 4 דירות ברמת עיצוב וגימור גבוהה.`,
    fullDescription: `לבחירתך מגוון דירות הכוללות 4,5 חדרים, דירות גן ופנטהאוזים, עם מפרט טכני עשיר וחניון תת-קרקעי.
הפרויקט מציע מגוון רחב של דירות שתוכננו בדיוק ובקפידה על מנת להעניק לכל דייר את חווית המגורים המושלמת.
מבנה המאופיין בקווים נקיים, בשילוב של חללים מוארים ומרווחים.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'barkai',
    slug: 'barkai',
    name: 'ברקאי',
    nameEn: 'Barkai',
    location: 'רמת גן',
    neighborhood: 'רמת גן',
    status: 'marketing',
    statusLabel: 'בשיווק',
    units: null,
    buildings: null,
    floors: null,
    apartmentTypes: null,
    mainImage: null,
    images: [],
    floorPlans: [],
    video: null,
    description: `פרויקט ברקאי ברמת גן`,
    fullDescription: `פרויקט חדש ברמת גן - פרטים נוספים בקרוב.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  // ============== בביצוע ==============
  {
    id: 'galil-yam-360',
    slug: 'galil-yam-360',
    name: 'גליל ים (360)',
    nameEn: 'Galil Yam 360',
    location: 'הרצליה',
    neighborhood: 'גליל ים החדשה',
    status: 'construction', // בביצוע
    statusLabel: 'בביצוע',
    units: 38,
    buildings: null,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2021/07/C1_night.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2021/07/C1_night.jpg',
      'https://eshkol.co.il/wp-content/uploads/2021/07/%D0%A13.jpg',
      'https://eshkol.co.il/wp-content/uploads/2021/07/%D7%99%D7%95%D7%9D.jpg'
    ],
    floorPlans: [
      { name: 'תכנית דירה', image: 'https://eshkol.co.il/wp-content/uploads/2021/07/WhatsApp-Image-2023-12-27-at-12.31.48.jpeg' }
    ],
    video: null,
    description: `דירה שהיא השקפת עולם. בגליל ים החדשה, הולך ונבנה פרויקט ייחודי: 360.`,
    fullDescription: `כשניגשנו לתכנן ולחלום את השכונה החדשה הזו, השאיפה שלנו הייתה ליצור סביבת מגורים חדשה, להקיף אותה בפארקים חדשים ולעטוף כל דירה בנוף הרגוע והשלו שמסביב. התכנון הייחודי שלנו הצליח ליצור 38 דירות, שטובלות בירק, ונהנות מ-360 מעלות של נוף. ארבעה כיווני אוויר.

תכנון מבית לוטן אדריכלים, המאפשר גמישות והתחשבות מרבית בהעדפות הדיירים, תוך הקפדה על מפרט עשיר ושימוש בטכנולוגיות המתקדמות ביותר. חשיבה ותכנון אנרגטי, בידוד תרמי ואקוסטי לשם עמידה בתקנים הגבוהים של בניה ירוקה.

פרויקט 360 נבנה במיקום מנצח: בשדות הירוקים של שכונת גליל ים החדשה, בצמוד לקיבוץ הוותיק ובקרבה נוחה לפארק הרצליה ופארק גליל ים, עם נגישות קלה לצירי תנועה מרכזיים ולמוקדי התעסוקה והבילוי של גוש דן.`,
    specs: [],
    developer: 'אשכול + מוגרבי ארדיטי',
    architect: 'לוטן אדריכלים'
  },

  {
    id: 'even-shprut-12-14',
    slug: 'even-shprut-12-14',
    name: 'אבן שפרוט 12-14',
    nameEn: 'Even Shprut 12-14',
    location: 'הרצליה',
    neighborhood: 'הרצליה',
    status: 'construction',
    statusLabel: 'בביצוע',
    units: null,
    buildings: 2,
    floors: 7,
    apartmentTypes: '3-5 חדרים, דירות גן, דופלקס ופנטהאוזים',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-04-at-13.20.06-1.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-04-at-13.20.06-1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-04-at-13.20.05.jpg',
      'https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-04-at-13.20.06.jpeg'
    ],
    floorPlans: [
      { name: 'תכנית 1', image: 'https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2023-12-27-at-12.35.45.jpeg' },
      { name: 'תכנית 2', image: 'https://eshkol.co.il/wp-content/uploads/2022/04/WhatsApp-Image-2023-12-27-at-12.35.45-1.jpeg' }
    ],
    video: null,
    description: `פרויקט של שני בניינים, בני 7 קומות, במיקום מנצח, שכונת מגורים שקטה ומתחדשת.`,
    fullDescription: `בקרבה לפארק הרצליה, קניון שבעת הכוכבים, מרכזי קניות חדשים, בתי ספר וגני ילדים, נגישה לצירי תנועה מרכזיים ולמוקדי התעסוקה והבילוי של גוש דן.

בפרויקט דירות 3-5 חדרים, דירות גן, דופלקס ופנטהאוזים. דירות מרווחות הכוללות שתי מרפסות וחניה.

הבניינים כוללים כניסות לובי מעוצבות, חלל אחסון לעגלות ואופניים וחניון תת-קרקעי.`,
    specs: [],
    developer: 'אשכול + גולד שטרן',
    architect: null
  },

  {
    id: 'hatanaim-4-10',
    slug: 'hatanaim-4-10',
    name: 'התנאים 4-10',
    nameEn: 'HaTanaim 4-10',
    location: 'תל אביב',
    neighborhood: 'נווה אביבים, רמת אביב',
    status: 'construction',
    statusLabel: 'בביצוע',
    units: 64,
    buildings: 2,
    floors: 8,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2021/01/%D7%94%D7%AA%D7%A0%D7%90%D7%99%D7%9D.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2021/01/%D7%94%D7%AA%D7%A0%D7%90%D7%99%D7%9D.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט ביצוע פינוי בינוי בשכונת נווה אביבים ברמת אביב.`,
    fullDescription: `בניית 2 בניינים בני 8 קומות, 64 יחידות וחניון תת קרקעי.`,
    specs: [],
    developer: 'אשכול',
    architect: null,
    projectType: 'פינוי בינוי'
  },

  // ============== התחדשות עירונית ==============
  {
    id: 'asher-barash-1-5-7',
    slug: 'asher-barash-1-5-7',
    name: 'אשר ברש 1,5,7',
    nameEn: 'Asher Barash 1,5,7',
    location: 'תל אביב',
    neighborhood: 'רמת אביב הירוקה',
    status: 'urban-renewal', // התחדשות עירונית
    statusLabel: 'התחדשות עירונית',
    units: 120,
    buildings: 3,
    floors: 7,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%91%D7%A8%D7%A9-%D7%9E%D7%91%D7%98-%D7%A8%D7%90%D7%A9%D7%95%D7%9F-1-1.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%91%D7%A8%D7%A9-%D7%9E%D7%91%D7%98-%D7%A8%D7%90%D7%A9%D7%95%D7%9F-1-1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%91%D7%A8%D7%A9-%D7%9E%D7%91%D7%98-%D7%A9%D7%A0%D7%99-%D7%9C%D7%95%D7%92%D7%95.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `בלב שכונת רמת אביב הירוקה בצפון תל אביב, חברת אשכול מציגה מתחם של 3 בניינים.`,
    fullDescription: `מתחם של 3 בניינים, בני 7 קומות, הכוללים 40 יח' דיור כל אחד, סה"כ 120 יחידות בפרויקט.
בנייה מודרנית, בסטנדרטים גבוהים ובאיכות לא מתפשרת. לכל דירה מרפסת, וחניה.

שכונה שקטה ואיכותית בצפון תל אביב, עם אווירה סטודנטיאלית וצעירה, אשר בתוכה תמצאו חורשות רחבות ושטחי צמחייה רבים.

בשכונה ישנם מספר מוסדות אקדמיה ולימוד, ביניהם בתי ספר, גני ילדים ואוניברסיטת תל אביב.
השכונה נהנית ממספר מוקדי עניין שונים, בניהם בריכת השחייה הלאומית, מוזיאון ארץ ישראל ובית התפוצות.
כמו כן, בשכונה ישנם מרכזים מסחריים ואת קניון רמת אביב.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'nachalat-binyamin-133',
    slug: 'nachalat-binyamin-133',
    name: 'נחלת בינימין 133',
    nameEn: 'Nachalat Binyamin 133',
    location: 'תל אביב',
    neighborhood: 'תל אביב',
    status: 'urban-renewal',
    statusLabel: 'התחדשות עירונית',
    units: 51,
    buildings: 1,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0646-Medium.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0646-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0585-Medium.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `מגדל קומות, 51 יחידות דיור.`,
    fullDescription: `מגדל קומות, 51 יחידות דיור.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  // ============== מאוכלסים ==============
  {
    id: 'tanaim-8-10',
    slug: 'tanaim-8-10',
    name: 'תנאים 8-10',
    nameEn: 'Tanaim 8-10',
    location: 'תל אביב',
    neighborhood: 'נווה אביבים, רמת אביב',
    status: 'occupied', // מאוכלס
    statusLabel: 'מאוכלס',
    units: 64,
    buildings: 2,
    floors: 8,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2021/01/%D7%94%D7%AA%D7%A0%D7%90%D7%99%D7%9D.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2021/01/%D7%94%D7%AA%D7%A0%D7%90%D7%99%D7%9D.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט ביצוע פינוי בינוי בשכונת נווה אביבים ברמת אביב.`,
    fullDescription: `בניית 2 בניינים בני 8 קומות, 64 יח"ד וחניות תת קרקעיות.`,
    specs: [],
    developer: 'אשכול',
    architect: null,
    projectType: 'פינוי בינוי'
  },

  {
    id: 'echad-haam-100',
    slug: 'echad-haam-100',
    name: 'אחד העם 100',
    nameEn: 'Echad HaAm 100',
    location: 'תל אביב',
    neighborhood: 'תל אביב',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 20,
    buildings: 1,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/ECHD_HAAM100-cam2-00019.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/ECHD_HAAM100-cam2-00019.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/10000.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `חיזוק הבניין מפני רעידת אדמה במסגרת תמ"א 38.`,
    fullDescription: `חיזוק הבניין מפני רעידת אדמה במסגרת תמ"א 38. 20 יחידות דיור.`,
    specs: [],
    developer: 'אשכול',
    architect: null,
    projectType: 'תמ"א 38'
  },

  {
    id: 'ben-yehuda-185',
    slug: 'ben-yehuda-185',
    name: 'בן יהודה 185',
    nameEn: 'Ben Yehuda 185',
    location: 'תל אביב',
    neighborhood: 'תל אביב',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 18,
    buildings: 1,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0658-Medium.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0658-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0685-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0696-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0649-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/DJI_0655-Medium.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט התחדשות עירונית הכולל שימור ועבודות הנדסה ייחודיות.`,
    fullDescription: `פרויקט התחדשות עירונית הכולל שימור ועבודות הנדסה ייחודיות כולל תליית המבנה וחפירת מרתף מתחת לבניין הקיים. מגדל קומות, 18 יחידות דיור.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'akiva-raanana',
    slug: 'akiva-raanana',
    name: 'עקיבא 8-10',
    nameEn: 'Akiva Raanana',
    location: 'רעננה',
    neighborhood: 'ליד רחוב אחוזה',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 29,
    buildings: 2,
    floors: 7,
    apartmentTypes: '4-5 חדרים, דירות גן, פנטהאוזים ומיני פנטהאוזים',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.37.jpeg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.37.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.37-1.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.39.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.38-3.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.38-2.jpeg',
      'https://eshkol.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-02-at-13.58.38-1.jpeg'
    ],
    floorPlans: [
      { name: 'תכנית 1', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan1-700x495-1.jpg' },
      { name: 'תכנית 2', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan2-700x495-1.jpg' },
      { name: 'תכנית 3', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan3-700x495-1.jpg' },
      { name: 'תכנית 4', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan4-700x495-1.jpg' },
      { name: 'תכנית 5', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan5-700x495-1.jpg' },
      { name: 'תכנית 6', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan6-700x495-1.jpg' },
      { name: 'תכנית 7', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan7-700x495-1.jpg' },
      { name: 'תכנית 8', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan8-700x495-1.jpg' },
      { name: 'תכנית 9', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan9-700x495-1.jpg' },
      { name: 'תכנית 10', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan10-700x495-1.jpg' },
      { name: 'תכנית 11', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan11-700x495-1.jpg' },
      { name: 'תכנית 13', image: 'https://eshkol.co.il/wp-content/uploads/2023/10/floorplan13-700x495-1.jpg' }
    ],
    video: null,
    description: `בפרויקט מתוכננים 2 בניינים של 7 קומות, עם 29 דירות.`,
    fullDescription: `עקיבא 8-10, רעננה. בפרויקט מתוכננים 2 בניינים של 7 קומות, עם 29 דירות כאשר יש 4 דירות בקומה. הדירות הן דירות 4 ו-5 חדרים מרווחות. המבנים כוללים דירות גן בקומת הקרקע, פנטהאוזים ומיני פנטהאוזים.

הבניינים כוללים כניסות לובי מעוצבות, חללי אחסון לאופניים וחניה תת קרקעית.
כל דירה עוצבה בקפידה אך ניתנת לבעליה האפשרות לבצע שינויים ייחודיים על מנת להתאימה לסגנון חייו האישית.

האזור בו הוקם הפרויקט מוקף בנייני מגורים, ונמצא במרחק כמה צעדים מרחוב אחוזה, הרחוב הראשי של רעננה, המאוכלס בחנויות, בתי קפה, סופרמרקטים, בתי ספר וגנים. במרחק נסיעה קצרה ניתן להגיע לאזור התעשייה ובו קניון רננים האופנתית, מכון כושר הולמס פלייס, קאנטרי קלאב רעננה, משרדים ומסעדות.`,
    specs: [],
    developer: 'אשכול + גולד שטרן',
    architect: null
  },

  {
    id: 'migdalei-naaman',
    slug: 'migdalei-naaman',
    name: 'מגדלי נאמן',
    nameEn: 'Migdalei Naaman',
    location: 'תל אביב',
    neighborhood: 'אזורי חן, צפון תל אביב',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 41,
    buildings: null,
    floors: null,
    apartmentTypes: 'דירות יוקרה',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/%D7%A0%D7%90%D7%9E%D7%9F-%D7%99%D7%95%D7%9D.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/%D7%A0%D7%90%D7%9E%D7%9F-%D7%99%D7%95%D7%9D.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/%D7%A0%D7%90%D7%9E%D7%9F-%D7%9C%D7%99%D7%9C%D7%94.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט הדגל של חברת יוסי אברהמי ממוקם בשכונת אזורי חן בצפון תל אביב.`,
    fullDescription: `פרויקט הדגל של חברת יוסי אברהמי ממוקם בשכונת אזורי חן בצפון תל אביב. הפרויקט עוצב ע"י האדריכל המפורסם יעקב אגם ומכיל 41 דירות יוקרה בסטנדרטים הכי גבוהים שיש.`,
    specs: [],
    developer: 'יוסי אברהמי',
    architect: 'יעקב אגם'
  },

  {
    id: 'avshalom-haviv-7',
    slug: 'avshalom-haviv-7',
    name: 'אבשלום חביב 7',
    nameEn: 'Avshalom Haviv 7',
    location: 'תל אביב',
    neighborhood: 'רמת אביב ג\'',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 34,
    buildings: 1,
    floors: 9,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/%D7%90%D7%91%D7%A9%D7%9C%D7%95%D7%9D-%D7%97%D7%91%D7%99%D7%91-2.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/%D7%90%D7%91%D7%A9%D7%9C%D7%95%D7%9D-%D7%97%D7%91%D7%99%D7%91-2.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/%D7%90%D7%91%D7%A9%D7%9C%D7%95%D7%9D-%D7%97%D7%91%D7%99%D7%91-%D7%94%D7%93%D7%9E%D7%99%D7%94-Medium.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט ייחודי בשכונת רמת אביב ג'.`,
    fullDescription: `פרויקט ייחודי בשכונת רמת אביב ג'. בניין של 9 קומות עם 34 יח"ד ומרתף של 3,000 מ"ר.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'paglin-7',
    slug: 'paglin-7',
    name: 'פאגלין 7',
    nameEn: 'Paglin 7',
    location: 'תל אביב',
    neighborhood: 'אזורי חן, צפון תל אביב',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 36,
    buildings: 1,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/IMG-20190514-WA0027.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/IMG-20190514-WA0027.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/IMG-20190514-WA0026.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/IMG-20190514-WA0025.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/05/IMG-20190514-WA0028.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `צפון תל אביב, אזורי חן. מגדל קומות, 36 יחידות דיור.`,
    fullDescription: `צפון תל אביב, אזורי חן. מגדל קומות, 36 יחידות דיור.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'rom-hatayelet',
    slug: 'rom-hatayelet',
    name: 'רום הטיילת',
    nameEn: 'Rom HaTayelet',
    location: 'ערד',
    neighborhood: 'שכונת מבוא שקד',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 200,
    buildings: 7,
    floors: null,
    apartmentTypes: '4-5 חדרים',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/g1-e1556781628194.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/g1-e1556781628194.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/g2.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/g3.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/view-01.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/g5.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/g4.jpg'
    ],
    floorPlans: [
      { name: 'תכנית 4 חדרים', image: 'https://eshkol.co.il/wp-content/uploads/2019/04/t1.jpg' },
      { name: 'תכנית 5 חדרים', image: 'https://eshkol.co.il/wp-content/uploads/2019/04/t2.jpg' }
    ],
    video: null,
    description: `המקום הטוב בעיר! הזדמנות הנדל"ן שלך- קח צעד קדימה באיכות החיים במחיר משתלם במיוחד.`,
    fullDescription: `פרויקט מגורים בן 7 בניינים 200 י"ח דיור אשר נבנה בסטנדרטים גבוהים במיוחד, בעיצוב חדשני, דירות גן ומרפסות המשקיפות לנוף פתוח.
דירות 4 ו-5 חדרים עם מרפסות גדולות במיוחד במחיר של החל מ-1,050,000 ₪.

רום הטיילת ממוקם בשכונת מבוא שקד, בנוף פתוח ועוצר נשימה הצופה אל הרי ירושלים וים המלח. מתחם מגורים הקרוב למרכזי הקניות והקאנטרי, ובמרחק הליכה מבתי הספר וגני הילדים.

הדיירים נהנים מהקרבה לכביש 6, מהתיירות הצומחת, ומשלל פרויקטים אזוריים - הפארק המוטורי והקניון הנמוך בעולם.`,
    specs: [
      'תריסי גלילה חשמלי',
      'ארונות מטבח סנדוויץ עם טריקה שקטה',
      'שיש "קיסר" במטבח',
      'ברז נשלף במטבח',
      'כלים סניטריים איכותיים',
      'אסלות תלויות עם מיכל הדחה סמוי',
      'ארון אמבטיה עם כיור מעוצב במקלחת הורים',
      'הכנה למזגן מיני מרכזי',
      'מרפסות שמש גדולות',
      'אינטרקום טלוויזיה דירתי',
      'דלת בטחון משודרגת בכניסה לדירה',
      'דלתות פנים איכותיות עם משקופים בהלבשה רחבה',
      'ריצוף גרניט פורצלן 60/60 בחדר דיור ובמטבח',
      'הכנה למערכת רמקולים בחדר דיור',
      'חיבור הדירה לחשמל תלת-פאזי',
      'אביזרי חשמל (קצה) איכותיים',
      'זיגוג כפול בחלונות לבידוד'
    ],
    developer: 'אשכול',
    architect: null,
    price: 'החל מ-1,050,000 ₪'
  },

  {
    id: 'shtraichman-16',
    slug: 'shtraichman-16',
    name: 'שטרייכמן 16',
    nameEn: 'Shtraichman 16',
    location: 'תל אביב',
    neighborhood: 'הגוש הגדול',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 22,
    buildings: 1,
    floors: null,
    apartmentTypes: 'יוקרה',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/05/shtr.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/05/shtr.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט בשכונת הגוש הגדול בתל אביב. 22 יח"ד יוקרתיות עבור קבוצת רכישה.`,
    fullDescription: `פרויקט בשכונת הגוש הגדול בתל אביב. 22 יח"ד יוקרתיות עבור קבוצת רכישה.`,
    specs: [],
    developer: 'אשכול',
    architect: null,
    projectType: 'קבוצת רכישה'
  },

  {
    id: 'berlin-7',
    slug: 'berlin-7',
    name: 'ברלין 7',
    nameEn: 'Berlin 7',
    location: 'תל אביב',
    neighborhood: 'אזורי חן',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 30,
    buildings: 1,
    floors: 10,
    apartmentTypes: '4-5 חדרים ופנטהאוזים',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/v1.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/v1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/v2.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/v3.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%91%D7%A8%D7%9C%D7%99%D7%9F-7-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/jpg04-1-Custom.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/jpg03-2-Custom-e1557749652436.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט יוקרה בשכונת אזורי חן.`,
    fullDescription: `פרויקט יוקרה בשכונת אזורי חן. מגדל בן 10 קומות, 30 יחידות דיור, דירות 4-5 חדרים ופנטהאוזים. לובי מפואר בכניסה ומפרט טכני עשיר.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'yuval-naaman-9-11',
    slug: 'yuval-naaman-9-11',
    name: 'יובל נאמן 9-11',
    nameEn: 'Yuval Naaman 9-11',
    location: 'תל אביב',
    neighborhood: 'שכונת למד החדשה',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 42,
    buildings: 2,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%99%D7%95%D7%91%D7%9C-%D7%A0%D7%90%D7%9E%D7%9F.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%99%D7%95%D7%91%D7%9C-%D7%A0%D7%90%D7%9E%D7%9F.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/3886_11.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `בשכונת למד החדשה. 2 בניינים מרהיבים בעלי 42 יחידות דיור.`,
    fullDescription: `בשכונת למד החדשה. 2 בניינים מרהיבים בעלי 42 יחידות דיור. הבית החלומי שלכם בהישג יד!`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'yuval-naaman-10-12',
    slug: 'yuval-naaman-10-12',
    name: 'יובל נאמן 10-12',
    nameEn: 'Yuval Naaman 10-12',
    location: 'תל אביב',
    neighborhood: 'שכונת למד החדשה',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 42,
    buildings: 2,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/3-2.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/3-2.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/4.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9C%D7%A4%D7%A8%D7%A1%D7%95%D7%9D-%D7%91%D7%9C%D7%99-%D7%9C%D7%95%D7%92%D7%95.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/20001-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/2-1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/1-1.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/%D7%9C%D7%95%D7%91%D7%99-%D7%A7%D7%95%D7%9E%D7%AA%D7%99.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `בשכונת למד החדשה. 2 בניינים מרהיבים בעלי 42 יחידות דיור.`,
    fullDescription: `בשכונת למד החדשה. 2 בניינים מרהיבים בעלי 42 יחידות דיור. מפרט עשיר ומפנק.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'levi-eshkol-51',
    slug: 'levi-eshkol-51',
    name: 'לוי אשכול 51',
    nameEn: 'Levi Eshkol 51',
    location: 'תל אביב',
    neighborhood: 'תל אביב',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: null,
    buildings: 2,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/DJI_0026.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/DJI_0026.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/DJI_0055.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/DJI_0046.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `2 בניינים היושבים על מרתף משותף עם לובי מרווח, חדר כושר מפואר וחדר דיירים.`,
    fullDescription: `2 בניינים היושבים על מרתף משותף עם לובי מרווח, חדר כושר מפואר וחדר דיירים. חיפוי הבניין בוצע בשיטת תליה יבשה.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'artur-rubinstein-2',
    slug: 'artur-rubinstein-2',
    name: 'ארתור רובינשטיין 2',
    nameEn: 'Artur Rubinstein 2',
    location: 'תל אביב',
    neighborhood: 'הגוש הגדול',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 16,
    buildings: 1,
    floors: null,
    apartmentTypes: 'יוקרה',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/DSC_4504-Medium-e1555856970881.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/DSC_4504-Medium-e1555856970881.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/DSC_4498-Medium-e1555856957834.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/DSC_4468-Medium-e1555857022459.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט יוקרה ייחודי בגוש הגדול, כ-200 מטרים מהים.`,
    fullDescription: `פרויקט יוקרה ייחודי בגוש הגדול, כ-200 מטרים מהים, המונה 16 יח"ד ונבנה עבור קבוצת רוכשים.`,
    specs: [],
    developer: 'אשכול',
    architect: null,
    projectType: 'קבוצת רכישה'
  },

  {
    id: 'izik-shtern-12',
    slug: 'izik-shtern-12',
    name: 'איזיק שטרן 12',
    nameEn: 'Izik Shtern 12',
    location: 'תל אביב',
    neighborhood: 'הגוש הגדול',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 17,
    buildings: 1,
    floors: null,
    apartmentTypes: 'בוטיק',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/cam1lite-e1555856205322.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/cam1lite-e1555856205322.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/-%D7%A9%D7%98%D7%A8%D7%9F-Medium-e1555856141563.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `בשכונת הגוש הגדול, בונה החברה פרויקט בוטיק בן 17 יח"ד.`,
    fullDescription: `בשכונת הגוש הגדול, בונה החברה פרויקט בוטיק בן 17 יח"ד.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'pninat-arad',
    slug: 'pninat-arad',
    name: 'פנינת ערד',
    nameEn: 'Pninat Arad',
    location: 'ערד',
    neighborhood: 'ערד',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 18,
    buildings: null,
    floors: null,
    apartmentTypes: 'גן-גן-גג',
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_6521.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_6521.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_6530.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/DSC_9883.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_6490.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `פרויקט בוטיק ייחודי המונה 18 דירות בסגנון גן-גן-גג.`,
    fullDescription: `פרויקט בוטיק ייחודי המונה 18 דירות בסגנון גן-גן-גג. לכל הדירות יש נוף מדברי מרהיב, 3 כיווני אוויר, ומפרטים עשירים.`,
    specs: [],
    developer: 'אשכול',
    architect: null
  },

  {
    id: 'agamim-netanya',
    slug: 'agamim-netanya',
    name: 'אגמים',
    nameEn: 'Agamim Netanya',
    location: 'נתניה',
    neighborhood: 'נתניה',
    status: 'occupied',
    statusLabel: 'מאוכלס',
    units: 80,
    buildings: 2,
    floors: null,
    apartmentTypes: null,
    mainImage: 'https://eshkol.co.il/wp-content/uploads/2019/04/-%D7%A0%D7%AA%D7%A0%D7%99%D7%94-Medium-e1555857633370.jpg',
    images: [
      'https://eshkol.co.il/wp-content/uploads/2019/04/-%D7%A0%D7%AA%D7%A0%D7%99%D7%94-Medium-e1555857633370.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_8361-Copy-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_8235-Copy-Medium.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_8265.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/-%D7%A0%D7%AA%D7%A0%D7%99%D7%94-%D7%A2%D7%95%D7%AA%D7%A7-1-e1557661132463.jpg',
      'https://eshkol.co.il/wp-content/uploads/2019/04/ASC_8359.jpg'
    ],
    floorPlans: [],
    video: null,
    description: `עוד פרויקט איכותי של חברת יוסי אברהמי, 2 בניינים בני 40 יח"ד כל אחד.`,
    fullDescription: `עוד פרויקט איכותי של חברת יוסי אברהמי, 2 בניינים בני 40 יח"ד כל אחד היושבים על מרתף משותף. הפרויקט כולל לוביים יוקרתיים בעיצוב מיוחד וכן חדר כושר ומועדון דיירים.`,
    specs: [],
    developer: 'יוסי אברהמי',
    architect: null
  }
];

// פונקציות עזר
export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getAllStatuses = () => {
  return [
    { id: 'all', label: 'הכל', count: projectsData.length },
    { id: 'marketing', label: 'בשיווק', count: getProjectsByStatus('marketing').length },
    { id: 'construction', label: 'בביצוע', count: getProjectsByStatus('construction').length },
    { id: 'urban-renewal', label: 'התחדשות עירונית', count: getProjectsByStatus('urban-renewal').length },
    { id: 'occupied', label: 'מאוכלסים', count: getProjectsByStatus('occupied').length }
  ];
};

export default projectsData;