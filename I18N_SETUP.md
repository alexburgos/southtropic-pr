# 🌍 Internationalization (i18n) Setup

Your website now supports **English** and **Spanish** translations!

## 🎯 Features

- ✅ **Language Toggle Button** - Bottom left corner (EN/ES)
- ✅ **Persistent Language Choice** - Saved in localStorage
- ✅ **All Pages Translated** - Home, About, Services, Gallery, Navigation
- ✅ **Dynamic Content** - Packages, services list, form labels
- ✅ **Smooth Switching** - Instant language change without page reload

## 📁 File Structure

```
src/
├── i18n.ts                      # i18n configuration
├── locales/
│   ├── en.json                  # English translations
│   └── es.json                  # Spanish translations
└── components/
    └── LanguageToggle.tsx       # Language toggle button
```

## 🔧 How It Works

### 1. **Language Toggle Button**
Located at **bottom left** of every page:
- Shows current language: `EN` or `ES`
- Click to switch between languages
- Persists choice in browser localStorage

### 2. **Translation Files**

**English** (`src/locales/en.json`):
- Navigation labels
- Home page content
- About page text
- Services & packages
- Contact form labels

**Spanish** (`src/locales/es.json`):
- All content translated to Spanish
- Maintains same structure as English

### 3. **Default Language**
- First visit: **English** (en)
- After selection: Remembers user's choice

## 📝 Adding New Translations

### Step 1: Add to Translation Files

**English** (`src/locales/en.json`):
```json
{
  "newSection": {
    "title": "My New Title",
    "description": "My description"
  }
}
```

**Spanish** (`src/locales/es.json`):
```json
{
  "newSection": {
    "title": "Mi Nuevo Título",
    "description": "Mi descripción"
  }
}
```

### Step 2: Use in Components

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('newSection.title')}</h1>
      <p>{t('newSection.description')}</p>
    </div>
  )
}
```

## 🎨 Customizing the Toggle Button

The language toggle is in `src/components/LanguageToggle.tsx`:

```tsx
// Current position: bottom-6 left-6
<button className="fixed bottom-6 left-6 z-50 ...">
```

**To move it:**
- Top right: `top-6 right-6`
- Top left: `top-6 left-6`
- Bottom right: `bottom-6 right-6`

## 🌐 Supported Pages

All pages are fully translated:

| Page | Status | Content |
|------|--------|---------|
| **Home** | ✅ | Title, subtitle, CTA buttons |
| **About** | ✅ | All paragraphs, links |
| **Services** | ✅ | Services list, packages, form |
| **Gallery** | ✅ | Image labels, counter |
| **Navigation** | ✅ | All menu items |

## 💡 Tips

1. **Testing Translations**
   - Click EN/ES toggle
   - Navigate through all pages
   - Verify all text changes

2. **Browser Language Detection**
   - Currently defaults to English
   - To auto-detect browser language, update `src/i18n.ts`:
   ```ts
   lng: navigator.language.startsWith('es') ? 'es' : 'en',
   ```

3. **Adding More Languages**
   - Create `src/locales/fr.json` (for French, etc.)
   - Add to i18n config:
   ```ts
   resources: {
     en: { translation: en },
     es: { translation: es },
     fr: { translation: fr },
   }
   ```

## 🚀 Deployment Notes

- Translation files are bundled with your app
- No external API calls needed
- Works offline
- Very lightweight (~10KB for both languages)

## 📊 Translation Coverage

- **Navigation**: 4 items ✅
- **Home Page**: 4 strings ✅
- **About Page**: 6 strings ✅
- **Services Page**: 50+ strings ✅
- **Gallery Page**: 2 strings ✅
- **Total**: ~65 translations per language

---

**Need help?** All translations are in `src/locales/` - just edit the JSON files!

