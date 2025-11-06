# 🎨 יצירות בטון - אתר אי-קומרס

> אתר מקצועי למכירת מארזי בטון בעבודת יד, בנוי עם Next.js 16 ו-TypeScript

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ תכונות עיקריות

- 🌍 **תמיכה מלאה בעברית ו-RTL** - כל האתר מותאם לעברית עם פונט Rubik
- 🛒 **מערכת עגלת קניות** - Context API לניהול העגלה
- 📱 **עיצוב רספונסיבי** - נראה מעולה על כל המכשירים
- 🎨 **Shadcn UI** - קומפוננטות מעוצבות ונגישות
- ⚡ **Next.js 16** - ביצועים מהירים עם App Router
- 🔍 **פילטרים חכמים** - סינון מוצרים לפי גודל וקטגוריה

## 🚀 התחלה מהירה

```bash
# התקנת dependencies
npm install

# הפעלת שרת פיתוח
npm run dev

# בניית הפרויקט
npm run build

# הפעלת production
npm start
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
| **Lucide React** | אייקונים |
| **Context API** | ניהול state |

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

ערוך את `src/lib/data.ts`:

```typescript
{
  id: '7',
  name: 'שם המוצר',
  description: 'תיאור המוצר',
  price: 299,
  images: ['/images/product-7.jpg'],
  category: 'מתנות',
  size: 'medium',
  inStock: true,
  featured: true,
}
```

## 🔧 התאמה אישית

### צבעים
ערוך את `src/app/globals.css` לשינוי ערכת הצבעים

### הוספת Shadcn components
```bash
npx shadcn@latest add [component-name]
```

## 📝 הצעות לשיפור עתידי

- [ ] אינטגרציה עם Stripe/PayPal
- [ ] חיבור ל-CMS (Contentful, Sanity)
- [ ] Admin panel לניהול מוצרים
- [ ] מערכת משתמשים
- [ ] מעקב אחר הזמנות
- [ ] העלאת תמונות אמיתיות

## 📖 תיעוד מפורט

לתיעוד מלא, ראה [claude.md](./claude.md)

## 🤝 תרומה

אם תמצאו באג או רעיון לשיפור, נשמח לשמוע!

## 📄 רישיון

MIT License - תרגישו חופשי להשתמש בקוד

---

**נבנה עם ❤️ בעזרת Claude Code**
