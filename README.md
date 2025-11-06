# 🎨 יצירות בטון - אתר אי-קומרס

> אתר מקצועי למכירת מארזי בטון בעבודת יד, בנוי עם Next.js 16, TypeScript ו-Supabase

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC)
![Supabase](https://img.shields.io/badge/Supabase-enabled-green)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ תכונות עיקריות

- 🌍 **תמיכה מלאה בעברית ו-RTL** - כל האתר מותאם לעברית עם פונט Rubik
- 🗄️ **Supabase Database** - מאגר מידע מלא למוצרים והזמנות
- 🛒 **מערכת עגלת קניות** - Context API לניהול העגלה
- 📱 **עיצוב רספונסיבי** - נראה מעולה על כל המכשירים
- 🎨 **Shadcn UI** - קומפוננטות מעוצבות ונגישות
- ⚡ **Next.js 16** - ביצועים מהירים עם App Router
- 🔍 **פילטרים חכמים** - סינון מוצרים לפי גודל וקטגוריה
- 🚀 **מוכן לפרודקשן** - ניתן לפריסה ל-Vercel בקליק אחד

## 🚀 התחלה מהירה

### 1. התקנת הפרויקט

```bash
# שכפל את הפרויקט
git clone https://github.com/lidor1359-cmd/concrete-boxes-ecommerce.git
cd concrete-boxes-ecommerce

# התקן dependencies
npm install
```

### 2. הגדרת Supabase

1. צור פרויקט חדש ב-[Supabase](https://supabase.com)
2. קבל את ה-URL ו-API Key
3. צור קובץ `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
4. מלא את הערכים ב-`.env.local`
5. הרץ את ה-SQL schema ב-Supabase Dashboard

**📖 למדריך מלא, ראה [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**

### 3. הפעלת שרת פיתוח

```bash
npm run dev
```

האתר יהיה זמין ב: **http://localhost:3000**

## 📁 מבנה הפרויקט

```
src/
├── app/              # דפי Next.js (App Router)
│   ├── products/     # קטלוג מוצרים
│   ├── cart/         # עגלת קניות
│   └── about/        # דף אודות
├── components/       # קומפוננטות React
│   └── ui/          # Shadcn UI
├── contexts/        # React Context (עגלה)
├── lib/             # פונקציות עזר
└── types/           # TypeScript types
```

## 🛠️ טכנולוגיות

| טכנולוגיה | תיאור |
|-----------|-------|
| **Next.js 16** | React framework עם App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first CSS |
| **Shadcn UI** | קומפוננטות UI מעוצבות |
| **Supabase** | Database, Auth, Storage |
| **Lucide React** | אייקונים |
| **Context API** | ניהול state |
| **Vercel** | Hosting & Deployment |

## 📄 דפים

- **דף הבית** (`/`) - Hero, סטורי, מוצרים מומלצים, המלצות
- **קטלוג מוצרים** (`/products`) - כל המוצרים עם פילטרים
- **מוצר בודד** (`/products/[id]`) - פרטי מוצר, הוספה לעגלה
- **עגלת קניות** (`/cart`) - סקירת מוצרים, עדכון כמויות
- **אודות** (`/about`) - הסיפור האישי, ערכים, תהליך יצירה

## 🎯 תכונות מתקדמות

### מערכת עגלת קניות
```typescript
// שימוש ב-Cart Context
const { addToCart, items, getTotalPrice } = useCart()
```

### פילטרים דינמיים
- סינון לפי גודל (קטן, בינוני, גדול)
- סינון לפי קטגוריה (מתנות, חנוכת בית, וכו')
- ספירה אוטומטית של תוצאות

### עיצוב RTL
כל האתר מותאם ל-RTL עם:
- `dir="rtl"` ב-root HTML
- פונט Rubik לעברית
- CSS מותאם אוטומטית

## 📦 הוספת מוצר חדש

### דרך Supabase Dashboard (מומלץ):
1. לך ל-Supabase Dashboard → Table Editor
2. בחר טבלת `products`
3. לחץ "Insert row"
4. מלא את הפרטים ושמור

### דרך SQL:
```sql
INSERT INTO products (name, description, price, image, category, size, stock, featured)
VALUES ('שם המוצר', 'תיאור', 299, '/images/product.jpg', 'מתנות', 'medium', 10, true);
```

## 🔧 התאמה אישית

### צבעים
ערוך את `src/app/globals.css` לשינוי ערכת הצבעים

### הוספת Shadcn components
```bash
npx shadcn@latest add [component-name]
```

## 🚀 פריסה ל-Production

הפרויקט מוכן לפריסה ל-Vercel בקליק אחד!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lidor1359-cmd/concrete-boxes-ecommerce)

**📖 למדריך מלא, ראה [DEPLOYMENT.md](./DEPLOYMENT.md)**

### צעדים מהירים:
1. התחבר ל-[Vercel](https://vercel.com)
2. יבא את הפרויקט מ-GitHub
3. הוסף משתני סביבה מ-Supabase
4. לחץ Deploy!

## 📝 הצעות לשיפור עתידי

- [ ] אינטגרציה עם Stripe/PayPal/Bit
- [x] חיבור ל-Database (Supabase) ✅
- [ ] Admin panel לניהול מוצרים
- [ ] מערכת Authentication למשתמשים
- [ ] מעקב אחר הזמנות עם מספר מעקב
- [ ] העלאת תמונות אמיתיות ל-Supabase Storage
- [ ] אנימציות מתקדמות
- [ ] Multi-language support (אנגלית + עברית)

## 📖 תיעוד מפורט

- **[claude.md](./claude.md)** - תיעוד הפרויקט המלא
- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - הגדרת Supabase צעד אחר צעד
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - מדריך פריסה ל-Vercel

## 🤝 תרומה

אם תמצאו באג או רעיון לשיפור, נשמח לשמוע!

## 📄 רישיון

MIT License - תרגישו חופשי להשתמש בקוד

---

**נבנה עם ❤️ בעזרת Claude Code**
