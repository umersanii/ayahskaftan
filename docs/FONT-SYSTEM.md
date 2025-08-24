# Font System Documentation

## Overview
This font system allows you to change fonts across the entire application by modifying variables in just a few places.

## System Architecture

### 1. Font Configuration (`/lib/fonts.ts`)
This is the central configuration file where you define and import all fonts.

### 2. CSS Variables (`/app/globals.css`)
CSS custom properties that make fonts available throughout the app.

### 3. Usage Classes
Predefined classes for consistent font usage.

## How to Change Fonts System-Wide

### Method 1: Quick Font Swap
1. Open `/lib/fonts.ts`
2. Uncomment alternative fonts (lora, cormorant, crimson) or add new ones
3. Update the `fontConfig` object:
```typescript
export const fontConfig = {
  primary: lora,        // Change from playfair to lora
  secondary: inter,     // Keep inter or change
  heading: cormorant,   // Change heading font
  body: inter,          // Keep body font
  display: crimson,     // Change display font
};
```

### Method 2: Add New Fonts
1. Import your font in `/lib/fonts.ts`:
```typescript
import { YourFont } from "next/font/google";

export const yourFont = YourFont({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yourfont",
});
```

2. Update the configuration:
```typescript
export const fontConfig = {
  primary: yourFont,
  // ... rest of config
};
```

3. Update CSS variables in `/app/globals.css`:
```css
:root {
  --font-primary: var(--font-yourfont);
  /* ... other variables */
}
```

## Available Font Classes

### CSS Classes
- `.font-primary` - Primary brand font
- `.font-secondary` - Secondary font
- `.font-heading` - For headings (h1-h6 use this automatically)
- `.font-body` - For body text (body element uses this automatically)
- `.font-display` - For large display text

### Tailwind Classes
You can still use Tailwind's font classes:
- `font-serif` (uses --font-serif)
- `font-sans` (uses --font-sans)
- `font-mono` (uses --font-mono)

## Usage Examples

### In React Components
```tsx
// Using CSS classes
<h1 className="font-heading text-4xl">Main Title</h1>
<p className="font-body">Body text</p>
<span className="font-display text-6xl">Large Display</span>

// Using Tailwind (font-serif maps to your heading font)
<h2 className="font-serif text-2xl">Subtitle</h2>
```

### In CSS
```css
.custom-text {
  font-family: var(--font-primary);
}

.special-heading {
  font-family: var(--font-display);
}
```

## Current Font Setup
- **Primary/Heading/Display**: Playfair Display (serif)
- **Secondary/Body**: Inter (sans-serif)

## Benefits
1. **Centralized Control**: Change fonts in one place
2. **Consistent Usage**: Predefined classes ensure consistency
3. **Easy Swapping**: Quickly test different font combinations
4. **Performance**: Fonts are optimized with Next.js font loading
5. **Fallbacks**: Automatic fallback fonts are included

## Best Practices
1. Always use the predefined classes instead of hardcoding fonts
2. Test font combinations for readability and brand consistency
3. Consider font loading performance when adding new fonts
4. Maintain the variable naming convention for consistency

## Troubleshooting
- If fonts don't load, check that the font variables are properly imported in `layout.tsx`
- Ensure CSS variables match between `fonts.ts` and `globals.css`
- Clear browser cache when testing font changes
