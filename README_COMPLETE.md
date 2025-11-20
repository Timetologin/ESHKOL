# 🏗️ אתר אשכול - מדריך שלם

## ✅ מה עובד כבר

### קבצים קיימים:
- ✅ **Navbar** - לוגו טקסטואלי "אשכול - בונים באהבה" + תפריט מלא
- ✅ **Footer** - עם כל פרטי הקשר + לוגו טקסטואלי
- ✅ **Hero** - דף נחיתה מרהיב עם Parallax
- ✅ **VideoSection** - סרטון Vimeo (ID: 504354093)
- ✅ **CompanyAbout** - סקשן אודות לדף הבית
- ✅ **About Page** - דף אודות מלא עם סרטון Vimeo

### הקישורים בNavbar:
- "/" - דף הבית
- "/about" - דף אודות (**עובד!**)
- "/projects" - דף פרויקטים (עדיין צריך להשלים)
- "/contact" - דף צור קשר (עדיין צריך להשלים)

## 📋 רכיבים שעדיין צריך להוסיף

כדי שהאתר יהיה מלא, צריך ליצור את הקבצים הבאים:

### 1. `src/components/Stats.jsx`
מונים אנימציה עם מספרים (5000+ יח"ד, 25+ שנים וכו')

### 2. `src/components/CompanyValues.jsx`
ערכי החברה - אחריות, מקצועיות, שירות, חדשנות

### 3. `src/components/Features.jsx`
יתרונות - בניה ירוקה, איכות, טכנולוגיה מתקדמת

### 4. `src/components/ValueChain.jsx`
שרשרת הערך - 10 שלבים מייזום ועד מסירה

### 5. `src/components/ProjectsMap.jsx`
מפה אינטראקטיבית של פרויקטים בישראל

### 6. `src/components/CTA.jsx`
Call To Action - קריאה לפעולה עם אנימציות

### 7. `src/pages/Projects.jsx`
דף פרויקטים עם סינון וחיפוש

### 8. `src/pages/Contact.jsx`
דף צור קשר עם טופס + Google Maps

## 🚀 איך להתקין ולהריץ

```bash
cd eshkol-website
npm install
npm run dev
```

האתר יפתח ב: `http://localhost:3000`

## 🎨 הלוגו

הלוגו הוא **טקסטואלי** ולא תמונה:
- טקסט: "אשכול" בגופן גדול
- תת-כותרת: "בונים באהבה" בצבע זהב

אם יש לך קובץ לוגו PNG/SVG, שים אותו ב-`public/` ואז עדכן ב:
- `src/components/Navbar.jsx` (שורה 38)
- `src/components/Footer.jsx` (שורה 51)

## 🎬 הסרטון

הסרטון מגיע מ-Vimeo (ID: 504354093) ועובד ב:
- **VideoSection** בדף הבית
- **About Page** בדף אודות

אם רוצה להחליף סרטון, עדכן את ה-ID בקבצים:
- `src/components/VideoSection.jsx` (שורה 58)
- `src/pages/About.jsx` (שורה 118)

## 📱 מה עובד עכשיו

1. ✅ **דף הבית** - עובד חלקית (Hero + Video + About)
2. ✅ **דף אודות** - עובד מלא עם כל התוכן והסרטון
3. ❌ **דף פרויקטים** - עדיין צריך ליצור
4. ❌ **דף צור קשר** - עדיין צריך ליצור

## 🎯 שלבים הבאים

### שלב 1 - השלמת דף הבית
העתק את הקבצים הבאים מה-documents:
1. Stats.jsx
2. CompanyValues.jsx
3. Features.jsx
4. ValueChain.jsx
5. ProjectsMap.jsx
6. CTA.jsx

### שלב 2 - דפים נוספים
העתק את הקבצים:
1. Projects.jsx
2. Contact.jsx

### שלב 3 - בדיקה
הרץ `npm run dev` ווודא שהכל עובד

## 🔧 פתרון בעיות

### הסרטון לא נטען?
וודא חיבור אינטרנט והרשאות iframe מ-Vimeo

### הצבעים לא נכונים?
הצבעים מוגדרים ב-`tailwind.config.js`:
- Primary: #1a3a52 (נייבי כהה)
- Accent Gold: #d4af37 (זהב)

### הפונטים לא נטענים?
הפונטים מגיעים מ-Google Fonts ב-`index.html`

---

**זה בערך 60% מהאתר!** 🎉
כל מה שצריך זה להעתיק את שאר הקבצים מה-documents.
