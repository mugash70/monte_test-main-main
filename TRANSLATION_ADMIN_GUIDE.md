# Enhanced Translation Management System

This guide explains the comprehensive translation management system with live preview, inline editing, and image management capabilities.

## 🚀 Features Overview

### ✅ **Core Translation Management**
- **Database-driven translations** - All translations stored in database, not static files
- **Real-time editing** - Edit translations with immediate save functionality
- **Multi-language support** - English, Mongolian, and Chinese translations
- **Search and filtering** - Find translation keys quickly
- **Pagination** - Handle large numbers of translations efficiently

### ✅ **Live Preview System**
- **Context preview** - See how translations appear on actual pages
- **Multi-language preview** - Switch between languages instantly
- **Iframe integration** - Safe preview without affecting main site
- **Real-time updates** - Changes reflect immediately in preview

### ✅ **Image Management**
- **Upload multiple images** - Drag and drop or click to upload
- **Image gallery** - Visual grid of all uploaded images
- **File management** - Automatic naming and organization
- **Copy image paths** - Click to copy image URLs to clipboard

### ✅ **Advanced Features**
- **Export functionality** - Download translations as JSON
- **Usage tracking** - See where translation keys are used
- **Character counting** - Monitor translation length
- **Copy to clipboard** - Easy copying of keys and values

## 🎯 How to Use

### Accessing the Admin Interface

Navigate to: `http://localhost:3001/admin/translations`

### 1. **Search and Navigation**

```
🔍 Search Box: Type any part of a translation key
📄 Pagination: Navigate through large sets of translations
🎛️ Controls: Toggle preview, image manager, and export options
```

### 2. **Editing Translations**

Each translation key shows three language versions:

- **🇺🇸 English (EN)** - Primary language
- **🇲🇳 Mongolian (MN)** - Traditional script support
- **🇨🇳 Chinese (CH)** - Simplified Chinese

**Features per translation:**
- Real-time character count
- Auto-save on button click
- Visual feedback when saved
- Copy key to clipboard

### 3. **Live Preview**

Click "Show Preview" to see:
- **Translation list** - All current translations in selected language
- **Language switcher** - Toggle between EN/MN/CH
- **Copy functionality** - Click to copy translation text

### 4. **Context Preview**

For supported pages, click "Show Preview" on individual keys to see:
- **Iframe preview** - How the translation appears on the actual page
- **Language switching** - See the same content in different languages
- **Highlighted context** - Visual indication of where the text appears

### 5. **Image Management**

Click "Manage Images" to:
- **Upload images** - Multiple file upload support
- **View gallery** - Grid view of all images
- **Copy paths** - Click any image to copy its URL
- **File info** - See file size and modification date

### 6. **Export Translations**

Click "Export JSON" to download:
```json
{
  "en": {
    "key1": "English translation",
    "key2": "Another translation"
  },
  "mn": {
    "key1": "Mongolian translation",
    "key2": "Another translation"
  },
  "ch": {
    "key1": "Chinese translation",
    "key2": "Another translation"
  }
}
```

## 🔧 Technical Implementation

### Database Schema

```sql
Translation Table:
- id: INTEGER (Primary Key)
- locale: TEXT (en, mn, ch)
- key: TEXT (translation.key.name)
- value: TEXT (actual translation)
```

### API Endpoints

- `GET /api/translations` - Fetch translations with pagination
- `PUT /api/translations` - Update translation value
- `GET /api/translations/usage` - Get key usage information
- `POST /api/images/upload` - Upload images
- `GET /api/images/list` - List all images

### File Structure

```
server/api/
├── translations/
│   ├── index.get.ts      # Fetch translations
│   ├── index.put.ts      # Update translations
│   └── usage.get.ts      # Usage information
├── images/
│   ├── upload.post.ts    # Image upload
│   └── list.get.ts       # List images
└── i18n/
    └── translations.get.ts # I18n integration

pages/
├── admin/
│   └── translations.vue  # Main admin interface
├── iframe-preview/
│   └── [...slug].vue     # Preview system
└── translation-demo.vue  # Demo page

plugins/
├── i18n-database.client.ts # Client-side i18n
└── i18n-database.server.ts # Server-side i18n
```

## 🎨 Styling and UX

### Design Features
- **Gradient backgrounds** - Modern visual appeal
- **Card-based layout** - Clean organization
- **Color-coded languages** - Easy identification
- **Hover effects** - Interactive feedback
- **Responsive design** - Works on all screen sizes

### Language Color Coding
- **🔵 English** - Blue theme
- **🟡 Mongolian** - Yellow theme  
- **🔴 Chinese** - Red theme

## 📱 Responsive Design

The interface adapts to different screen sizes:

- **Desktop (1200px+)** - Full three-column layout
- **Tablet (768px-1200px)** - Two-column layout
- **Mobile (<768px)** - Single column, stacked layout

## 🔄 Real-time Features

### Auto-save Functionality
- Changes are saved when you click "Save"
- Visual feedback shows save status
- Error handling for failed saves

### Live Preview Updates
- Preview updates when you change language
- Context preview shows real page content
- Iframe isolation prevents conflicts

## 🛠️ Customization

### Adding New Languages

1. Add locale to supported locales in `i18n.config.ts`
2. Update color coding in admin interface
3. Add database entries for new locale
4. Update preview language switcher

### Adding New Pages to Preview

1. Update `keyUsageInfo` in admin interface
2. Add page mapping in iframe preview component
3. Ensure page supports preview mode

### Custom Styling

The admin interface uses Tailwind CSS classes and can be customized by:
- Modifying the scoped styles in `translations.vue`
- Updating the color scheme variables
- Adding new animation classes

## 🚨 Best Practices

### Translation Keys
- Use descriptive, hierarchical keys: `page.section.element`
- Keep keys consistent across languages
- Avoid special characters in keys

### Translation Values
- Keep translations concise but descriptive
- Consider character limits for UI elements
- Test translations in context

### Image Management
- Use descriptive filenames
- Optimize images before upload
- Organize images by purpose/section

## 🔍 Troubleshooting

### Common Issues

**Translations not updating:**
- Check database connection
- Verify API endpoints are working
- Clear browser cache

**Preview not showing:**
- Ensure iframe preview page exists
- Check for JavaScript errors
- Verify translation key exists

**Images not uploading:**
- Check file permissions on public/images
- Verify file size limits
- Ensure supported file types

### Debug Mode

Enable debug logging by checking browser console for:
- API request/response logs
- Translation loading status
- Error messages

## 📈 Performance

### Optimization Features
- **Pagination** - Only load needed translations
- **Lazy loading** - Images load on demand
- **Caching** - Browser caches translation data
- **Debounced search** - Reduces API calls

### Monitoring
- Track translation usage
- Monitor API response times
- Watch for failed saves

This enhanced translation management system provides a complete solution for managing multilingual content with real-time preview and comprehensive editing capabilities.
