# Layout System Guide

This guide explains how to use the new layout system that ensures all pages appear properly below the navbar with consistent styling.

## Overview

The layout system has been updated to:
- ✅ Fix the navbar overlap issue
- ✅ Provide consistent spacing across all pages
- ✅ Ensure responsive design on all screen sizes
- ✅ Offer reusable CSS classes for common layouts

## Key Changes Made

### 1. Updated Default Layout (`layouts/default.vue`)
- Added `.main-content` wrapper with proper top padding
- Accounts for fixed header height (140px on desktop)
- Responsive adjustments for mobile devices

### 2. Fixed Hero Components
- **HeroBanner**: Updated positioning to work with new layout
- **Home Hero Carousel**: Added negative margins to maintain full-screen appearance
- Both components now properly account for header space

### 3. Global Layout CSS (`assets/css/layout.css`)
- Comprehensive set of layout classes
- Responsive grid systems
- Typography improvements
- Utility classes for spacing and alignment

## How to Use

### For Pages with Hero Banners
Pages that use `HeroBanner` component or have full-screen hero sections work automatically:

```vue
<template>
  <div>
    <HeroBanner 
      :title="$t('pageTitle')"
      :backgroundImage="'/images/hero-bg.jpg'"
    />
    <!-- Rest of your content -->
  </div>
</template>
```

### For Regular Content Pages
Use the `.content-page` class for pages without hero banners:

```vue
<template>
  <div class="content-page">
    <div class="content-wrapper">
      <div class="section">
        <h1 class="section-title">Page Title</h1>
        <p class="section-text">Your content here...</p>
      </div>
    </div>
  </div>
</template>
```

### For Admin/Special Pages
Use `.page-container` for full-height pages with custom styling:

```vue
<template>
  <div class="page-container bg-gray-50">
    <div class="content-wrapper">
      <!-- Your admin content -->
    </div>
  </div>
</template>
```

## Available CSS Classes

### Layout Classes
- `.page-container` - Full-height container with proper top spacing
- `.content-page` - Standard content page with padding
- `.content-wrapper` - Max-width container with horizontal padding
- `.section` - Section with bottom margin for content separation

### Grid Systems
- `.grid-2` - 2-column grid (responsive)
- `.grid-3` - 3-column grid (responsive)
- `.grid-4` - 4-column grid (responsive)

### Typography
- `.section-title` - Large page/section titles (2.5rem)
- `.section-subtitle` - Section subtitles (1.5rem)
- `.section-text` - Regular body text with proper line height

### Card Layouts
- `.card-container` - White card with shadow, padding, and hover effects

### Utility Classes
**Spacing:**
- `.mb-0` to `.mb-5` - Margin bottom (0 to 3rem)
- `.mt-0` to `.mt-5` - Margin top (0 to 3rem)
- `.p-0` to `.p-5` - Padding (0 to 3rem)

**Text Alignment:**
- `.text-left`, `.text-center`, `.text-right`

## Responsive Breakpoints

The system uses these breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1024px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

## Examples

### Simple Content Page
```vue
<template>
  <div class="content-page">
    <div class="content-wrapper">
      <div class="section text-center">
        <h1 class="section-title">About Us</h1>
        <p class="section-text">Welcome to our company...</p>
      </div>
      
      <div class="section">
        <div class="grid-2">
          <div class="card-container">
            <h3>Our Mission</h3>
            <p class="section-text">Mission statement...</p>
          </div>
          <div class="card-container">
            <h3>Our Vision</h3>
            <p class="section-text">Vision statement...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Page with Hero Banner
```vue
<template>
  <div>
    <HeroBanner 
      :title="$t('services.title')"
      :backgroundImage="'/images/services-hero.jpg'"
    />
    
    <div class="content-wrapper">
      <div class="section">
        <h2 class="section-subtitle">Our Services</h2>
        <div class="grid-3">
          <div class="card-container" v-for="service in services" :key="service.id">
            <h4>{{ service.title }}</h4>
            <p class="section-text">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

## Testing

A test page has been created at `/layout-test` to demonstrate all the layout features. You can view it to see how the system works and test responsiveness.

## Migration Guide

To update existing pages:

1. **Pages with hero banners**: No changes needed - they should work automatically
2. **Regular content pages**: Wrap content in `.content-page` and `.content-wrapper`
3. **Admin pages**: Replace manual margin-top with `.page-container`
4. **Custom styled pages**: Use utility classes instead of inline styles where possible

The layout system is designed to be backward compatible, so existing pages should continue to work while you gradually migrate to the new classes.
