# מדריך פריסה ל-Production

## סקירה כללית

מדריך זה מסביר כיצד לפרוס את האתר ל-Vercel, לחבר אותו ל-Supabase, ולהגדיר משתני סביבה בצורה נכונה.

---

## 1. הכנת הפרויקט לפריסה

### בדיקת Supabase
ודא ש-Supabase מוגדר ועובד:
1. יש לך פרויקט Supabase פעיל
2. הטבלאות נוצרו (products, orders, order_items)
3. יש מוצרי דוגמה בטבלה
4. האתר עובד locally עם Supabase

### עדכן את הקוד ב-GitHub
```bash
git add .
git commit -m "הוספת אינטגרציה עם Supabase"
git push origin main
```

---

## 2. פריסה ל-Vercel

### א. התקנת Vercel CLI (אופציונלי)
```bash
npm install -g vercel
```

### ב. פריסה דרך Vercel Dashboard (מומלץ)

1. **התחבר ל-Vercel**
   - לך ל-[vercel.com](https://vercel.com)
   - התחבר עם חשבון GitHub שלך

2. **יבא את הפרויקט**
   - לחץ "Add New..." → "Project"
   - בחר את ה-repository: `concrete-boxes-ecommerce`
   - לחץ "Import"

3. **הגדר את הפרויקט**
   - **Framework Preset**: Next.js (אמור להיבחר אוטומטית)
   - **Root Directory**: `.` (השאר ריק)
   - **Build Command**: `npm run build` (ברירת מחדל)
   - **Output Directory**: `.next` (ברירת מחדל)

4. **הוסף משתני סביבה**
   - בחלק "Environment Variables", הוסף:

   ```
   NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key-here
   ```

   - **חשוב**: העתק את הערכים האלה מ-Supabase Dashboard שלך
   - לחץ "Add" אחרי כל משתנה

5. **פרוס!**
   - לחץ "Deploy"
   - המתן כ-2-3 דקות
   - כשהפריסה מסתיימת, תקבל URL: `https://your-project.vercel.app`

### ג. פריסה דרך Vercel CLI

```bash
# התחבר ל-Vercel
vercel login

# פרוס לפרודקשן
vercel --prod

# הוסף משתני סביבה
vercel env add NEXT_PUBLIC_SUPABASE_URL
# הדבק את ה-URL ולחץ Enter

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# הדבק את המפתח ולחץ Enter

# פרוס מחדש עם המשתנים החדשים
vercel --prod
```

---

## 3. בדיקת הפריסה

### בדוק שהאתר עובד:
1. פתח את ה-URL שקיבלת מ-Vercel
2. בדוק שדף הבית נטען
3. בדוק שהמוצרים מוצגים (צריכים לבוא מ-Supabase)
4. נסה להוסיף מוצר לעגלה
5. בדוק את דף המוצרים
6. בדוק את דף אודות

### בעיות נפוצות:
- **המוצרים לא נטענים**: בדוק שמשתני הסביבה ב-Vercel נכונים
- **שגיאת 500**: בדוק את ה-Logs ב-Vercel Dashboard
- **תמונות לא נטענות**: התמונות צריכות להיות ב-`/public/images/`

---

## 4. הגדרת Domain מותאם אישית (אופציונלי)

### רכישת דומיין:
1. רכוש דומיין מספק כמו:
   - GoDaddy
   - Namecheap
   - Google Domains

### חיבור הדומיין ל-Vercel:
1. ב-Vercel Dashboard, לך ל-Settings → Domains
2. הוסף את הדומיין שלך (לדוגמה: `concrete-boxes.com`)
3. Vercel ייתן לך הוראות להגדרת DNS:
   - הוסף A Record או CNAME Record
   - הכוון ל-`cname.vercel-dns.com`
4. המתן 24-48 שעות לעדכון DNS
5. Vercel יגדיר אוטומטית HTTPS (SSL)

---

## 5. אופטימיזציות לפרודקשן

### א. תמונות
- השתמש ב-`next/image` לכל התמונות (כבר מיושם)
- העלה תמונות ל-Supabase Storage:
  ```bash
  # דרך Supabase Dashboard:
  # Storage → Create Bucket → "products" → Upload files
  ```

### ב. SEO
הוסף קובץ `src/app/robots.txt`:
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://your-domain.com/sitemap.xml',
  }
}
```

הוסף Sitemap (`src/app/sitemap.ts`):
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://your-domain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://your-domain.com/products',
      lastModified: new Date(),
    },
    {
      url: 'https://your-domain.com/about',
      lastModified: new Date(),
    },
  ]
}
```

### ג. Analytics
הוסף Vercel Analytics:
```bash
npm install @vercel/analytics
```

ב-`src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// בתוך component
<Analytics />
```

---

## 6. עדכונים עתידיים

### זרימת עבודה:
1. עשה שינויים בקוד locally
2. בדוק שהכל עובד: `npm run dev`
3. Commit ו-Push ל-GitHub:
   ```bash
   git add .
   git commit -m "תיאור השינוי"
   git push origin main
   ```
4. Vercel יזהה את ה-Push ויפרוס אוטומטית!
5. תקבל הודעה בדוא"ל כשהפריסה הושלמה

### Rollback (חזרה לגרסה קודמת):
1. ב-Vercel Dashboard → Deployments
2. בחר גרסה קודמת
3. לחץ "Promote to Production"

---

## 7. ניטור ובקרה

### Vercel Analytics
- ב-Vercel Dashboard → Analytics
- ראה:
  - מספר מבקרים
  - מקורות תעבורה
  - דפים פופולריים
  - ביצועי דפים

### Logs
- ב-Vercel Dashboard → Logs
- בדוק שגיאות וזמני טעינה

### Supabase Logs
- ב-Supabase Dashboard → Logs
- ראה queries שרצו
- זיהוי בעיות ביצועים

---

## 8. אבטחה

### משתני סביבה:
- ✅ **לעולם אל תעלה** `.env.local` ל-Git
- ✅ השתמש רק ב-`anon key` בצד הלקוח
- ✅ ה-`service_role key` רק לשימוש בשרת

### Supabase RLS:
- ✅ Row Level Security (RLS) מופעל על כל הטבלאות
- ✅ משתמשים יכולים לראות רק את ההזמנות שלהם
- ✅ מוצרים נגישים לקריאה לכולם

### HTTPS:
- ✅ Vercel מגדיר HTTPS אוטומטית
- ✅ כל התעבורה מוצפנת

---

## 9. Checklist לפני פריסה

- [ ] Supabase מוגדר ועובד
- [ ] יש מוצרים בטבלת products
- [ ] האתר עובד locally (`npm run dev`)
- [ ] אין שגיאות TypeScript (`npm run build`)
- [ ] הקוד נמצא ב-GitHub
- [ ] משתני הסביבה מוגדרים ב-Vercel
- [ ] האתר נבדק על מובייל (responsive)
- [ ] התמונות נטענות נכון
- [ ] העגלה עובדת

---

## 10. שלבים הבאים

לאחר הפריסה המוצלחת:

1. **מערכת תשלומים**
   - אינטגרציה עם Stripe / PayPal / Bit
   - עדכן את דף ה-Checkout

2. **Upload תמונות**
   - העלה תמונות אמיתיות ל-Supabase Storage
   - עדכן את ה-URLs בטבלת products

3. **Admin Panel**
   - בנה ממשק לניהול מוצרים
   - הוסף Authentication

4. **שיווק**
   - הגדר Google Analytics
   - חבר ל-Facebook Pixel
   - הוסף Sitemap ל-Google Search Console

---

## תמיכה

בעיות בפריסה?
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase + Vercel](https://supabase.com/docs/guides/integrations/vercel)

---

**נוצר ב-06/11/2025** | אתר מארזי בטון ✨
