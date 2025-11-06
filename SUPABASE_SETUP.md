# הגדרת Supabase - מדריך שלב אחר שלב

## 1. יצירת פרויקט Supabase

1. היכנס ל-[Supabase Dashboard](https://supabase.com/dashboard)
2. לחץ על "New Project"
3. בחר ארגון או צור חדש
4. מלא פרטים:
   - **Project Name**: concrete-boxes-store
   - **Database Password**: בחר סיסמה חזקה ושמור אותה
   - **Region**: בחר אזור קרוב (Europe - Frankfurt מומלץ)
5. לחץ "Create new project"
6. המתן כ-2 דקות עד שהפרויקט יהיה מוכן

## 2. קבלת API Keys

1. בפרויקט החדש, לך ל-**Settings** (גלגל השיניים בתפריט הצד)
2. בחר **API** מהתפריט
3. תמצא שני ערכים חשובים:
   - **Project URL**: משהו כמו `https://xxxxx.supabase.co`
   - **anon/public key**: מפתח ארוך שמתחיל ב-`eyJhbGc...`

## 3. הגדרת משתני סביבה

1. צור קובץ `.env.local` בתיקיית השורש של הפרויקט:
   ```bash
   cp .env.local.example .env.local
   ```

2. פתח את `.env.local` והוסף את הערכים שלך:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **חשוב**: `.env.local` לא יעלה ל-Git (הוא ב-.gitignore)

## 4. יצירת טבלאות במסד הנתונים

1. בפרויקט Supabase, לך ל-**SQL Editor** (בתפריט הצד)
2. לחץ על "+ New query"
3. העתק את כל התוכן מקובץ `supabase-schema.sql`
4. הדבק ב-SQL Editor
5. לחץ "Run" (או Ctrl+Enter)
6. אמור לראות הודעה: "Success. No rows returned"

### מה נוצר?
- ✅ טבלת `products` - מוצרים
- ✅ טבלת `orders` - הזמנות
- ✅ טבלת `order_items` - פריטי הזמנה
- ✅ 6 מוצרי דוגמה
- ✅ אינדקסים לביצועים
- ✅ Row Level Security (RLS)
- ✅ פונקציות עזר

## 5. בדיקת התקנה

1. לך ל-**Table Editor** (בתפריט הצד)
2. בחר טבלת `products`
3. אמור לראות 6 מוצרים

## 6. הפעלת האתר

```bash
npm run dev
```

האתר ירוץ ב-http://localhost:3000 ויקרא מוצרים מ-Supabase!

## 7. (אופציונלי) Supabase CLI

להתקנת Supabase CLI לניהול מקומי:

```bash
# macOS
brew install supabase/tap/supabase

# Windows
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

### לינק הפרויקט המקומי ל-Supabase:
```bash
supabase login
supabase link --project-ref your-project-ref
```

### יצירת migrations:
```bash
supabase db pull
```

## 8. בעיות נפוצות

### השגיאה: "Supabase credentials are missing"
- ודא שיש לך קובץ `.env.local` בתיקיית השורש
- ודא שהמשתנים מתחילים ב-`NEXT_PUBLIC_`
- הפעל מחדש את שרת הפיתוח (`npm run dev`)

### המוצרים לא נטענים
- בדוק את ה-Console בדפדפן (F12)
- ודא שה-RLS policies מוגדרות נכון
- בדוק שיש מוצרים בטבלה דרך Table Editor

### שגיאת CORS
- ודא שאתה משתמש ב-`anon key` ולא ב-`service_role key`
- ה-anon key בטוח לשימוש בצד הלקוח

## 9. שלבים הבאים

- [ ] הוספת מוצרים נוספים דרך Table Editor
- [ ] העלאת תמונות אמיתיות ל-Supabase Storage
- [ ] הגדרת Authentication למערכת משתמשים
- [ ] בניית Admin Panel לניהול מוצרים
- [ ] הוספת מערכת תשלומים (Stripe/PayPal)

## תמיכה

בעיות? שאלות?
- [Supabase Docs](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com/)

---

**נוצר ב-06/11/2025** | אתר מארזי בטון
