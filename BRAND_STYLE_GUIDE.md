# Brand & Style Guide

## 1. Color Palette

### Primary Color System
**GREEN-600** is the core brand color for all interactive and accent elements.

```
Variable     | Hex Code | RGB           | Usage
─────────────┼──────────┼───────────────┼─────────────────────────
green-50     | #f0fdf4  | 240, 253, 244 | Light backgrounds, hover
green-100    | #dcfce7  | 220, 252, 231 | Subtle backgrounds
green-200    | #bbf7d0  | 187, 247, 208 | Disabled states
green-400    | #4ade80  | 74, 222, 128  | Light accents
green-500    | #22c55e  | 34, 197, 94   | Focus rings
green-600    | #16a34a  | 22, 163, 74   | PRIMARY - Buttons, links
green-700    | #15803d  | 21, 128, 61   | Hover state - Darker
green-800    | #166534  | 22, 101, 52   | Deep accents
green-900    | #14532d  | 20, 83, 45    | Dark mode accents
emerald-50   | #f0fdf4  | 240, 253, 244 | Card backgrounds
```

### Neutral Colors
Use for text, borders, backgrounds.

```
Variable     | Hex Code | RGB           | Usage
─────────────┼──────────┼───────────────┼─────────────────────────
slate-50     | #f8fafc  | 248, 250, 252 | Backgrounds
slate-100    | #f1f5f9  | 241, 245, 249 | Subtle backgrounds
slate-200    | #e2e8f0  | 226, 232, 240 | Borders, dividers
slate-300    | #cbd5e1  | 203, 213, 225 | Disabled states
slate-500    | #64748b  | 100, 116, 139 | Secondary text
slate-600    | #475569  | 71, 85, 105   | Body text
slate-700    | #334155  | 51, 65, 85    | Headings
slate-900    | #0f172a  | 15, 23, 42    | Darkest text
```

### Semantic Colors
For status messages and alerts.

```
Color    | Hex Code | Usage
─────────┼──────────┼──────────────────────
Red      | #ef4444  | Errors, destructive
Amber    | #f59e0b  | Warnings
Green    | #16a34a  | Success (same as primary)
Blue     | #3b82f6  | Information
Emerald  | #10b981  | Positive actions
```

### Dark Mode Colors
```
bg-dark:     #1a1a1a / #0f172a (slate-900)
text-dark:   #f1f5f9 (slate-100)
border-dark: #334155 (slate-700)
green-dark:  #15803d or #4ade80 depending on contrast
```

---

## 2. Typography

### Font Family
```
Primary Font: Inter or system default
  - Font weight: 400 (regular), 600 (semibold), 700 (bold)
  - All sans-serif
  
Font Sizes:
  xs   | 12px | 0.75rem   | Small labels, help text
  sm   | 14px | 0.875rem  | Button text, captions
  base | 16px | 1rem      | Body text, regular inputs
  lg   | 18px | 1.125rem  | Emphasis text
  xl   | 20px | 1.25rem   | Subheadings
  2xl  | 24px | 1.5rem    | Section titles
  3xl  | 30px | 1.875rem  | Page titles
  4xl  | 36px | 2.25rem   | Large headers (deprecated)
  5xl  | 48px | 3rem      | Hero titles
```

### Font Usage
```
Component         | Font Size | Weight | Spacing | Case
──────────────────┼───────────┼────────┼─────────┼──────────
H1 Page Title     | 48px      | 700    | 1.2    | Sentence
H2 Section Title  | 36px      | 700    | 1.2    | Sentence
H3 Subsection     | 24px      | 700    | 1.3    | Sentence
H4 Component Head | 20px      | 600    | 1.3    | Sentence
Body Text         | 16px      | 400    | 1.6    | Sentence
Caption/Label     | 14px      | 500    | 1.5    | Normal
Button Text       | 14px      | 600    | 1.4    | Sentence
Input Placeholder | 14px      | 400    | 1.5    | Normal
Badge/Tag         | 12px      | 600    | 1.4    | Uppercase
```

### Line Height
```
Headings: 1.2 (tight)
Body:     1.6 (readable)
Forms:    1.5 (balanced)
Labels:   1.4 (compact)
```

---

## 3. Spacing System

### Grid System (8px base)
```
0    | 0px
1    | 4px   (half unit)
2    | 8px   (1 unit)
3    | 12px  (1.5 units)
4    | 16px  (2 units)
6    | 24px  (3 units)
8    | 32px  (4 units)
12   | 48px  (6 units)
16   | 64px  (8 units)
```

### Application
```
Component               | Padding      | Margin    | Gap
───────────────────────┼──────────────┼───────────┼──────────
Button (Medium)        | px-4 py-2    | -         | -
Form Input             | px-3 py-2    | mb-4      | -
Card                   | p-4 or p-6   | mb-4      | -
Section Container      | px-4         | mb-8      | -
Component Grid         | -            | -         | gap-4
Modal Content          | p-6          | -         | -
Hero Section           | py-16        | -         | -
Page Container         | px-4 md:px-8 | -         | -
List Items             | py-3         | -         | -
```

---

## 4. Border Radius

### Standardized Radius
```
Radius   | Size  | Usage
─────────┼───────┼────────────────────────────────
none     | 0px   | Disabled, special cases
sm       | 4px   | Micro interactions
md       | 6px   | Small components
lg       | 8px   | Badges, small cards
xl       | 12px  | Standard components
2xl      | 16px  | Input fields, form elements
3xl      | 24px  | Primary buttons, large cards
full     | 9999px| Circles, avatars
```

### By Component
```
Component                    | Border Radius
─────────────────────────────┼──────────────
Form Inputs (text, select)   | rounded-2xl (16px)
Buttons                      | rounded-3xl (24px)
Product Cards                | rounded-2xl (16px)
Category Cards               | rounded-2xl (16px)
Modal/Dialog                 | rounded-2xl (16px)
Badges                       | rounded-lg (8px)
Avatar/Profile Pic           | rounded-full
Button Groups (first/last)   | rounded-l-3xl / rounded-r-3xl
Subtle Accents              | rounded-xl (12px)
```

---

## 5. Shadows & Depth

### Shadow Scale
```
Level   | Box Shadow                                      | Usage
────────┼─────────────────────────────────────────────────┼──────────────────
None    | none                                            | Flat elements
sm      | 0 1px 2px 0 rgba(0,0,0,0.05)                   | Subtle depth
base    | 0 1px 3px 0 rgba(0,0,0,0.1)                    | Cards, default
md      | 0 4px 6px -1px rgba(0,0,0,0.1)                 | Hover state
lg      | 0 10px 15px -3px rgba(0,0,0,0.1)               | Floating elements
xl      | 0 20px 25px -5px rgba(0,0,0,0.1)               | Modal, dropdown
2xl     | 0 25px 50px -12px rgba(0,0,0,0.25)             | Spotlight
───────────────────────────────────────────────────────────────────────────
green   | 0 10px 15px -3px rgba(22,163,74,0.3)           | Green accent
amber   | 0 10px 15px -3px rgba(245,158,11,0.3)          | Warning accent
red     | 0 10px 15px -3px rgba(239,68,68,0.3)           | Error accent
```

---

## 6. Transitions & Animations

### Duration Standards
```
Fast:     150ms  | Quick feedback (hover, focus)
Normal:   300ms  | Standard interactions (scale, slide)
Slow:     500ms  | Complex animations
Extra:    700ms  | Page transitions
```

### Timing Functions
```
Type           | CSS Value        | Use Case
───────────────┼──────────────────┼─────────────────────────
Linear         | linear           | Continuous, consistent
Ease In        | ease-in          | Start slow, end fast
Ease Out       | ease-out         | Start fast, end slow
Ease In-Out    | ease-in-out      | Smooth, balanced
Spring         | cubic-bezier     | Playful, bouncy
```

### Common Animations
```
Animation Name  | Duration | Properties           | Timing
────────────────┼──────────┼──────────────────────┼──────────
Hover Scale     | 300ms    | transform: scale()   | ease-out
Fade In         | 300ms    | opacity              | ease-out
Slide In        | 300ms    | transform: translate | ease-out
Bounce          | 500ms    | transform: scale     | spring
Spin            | 1s       | transform: rotate    | linear
Pulse           | 2s       | opacity              | linear
```

### Application Code
```tsx
// Hover Scale Effect
className="hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"

// Fade Animation
className="animate-fadeIn duration-300"

// Transition Group
className="transition-all duration-200 ease-out"

// Combined Effects
className="hover:shadow-lg hover:scale-[1.02] hover:text-green-600 transition-all duration-300"
```

---

## 7. Component Styles

### Button Styles

#### Primary Button (Green CTA)
```tsx
className="
  bg-green-600 hover:bg-green-700 
  dark:bg-green-500 dark:hover:bg-green-600
  text-white font-semibold
  rounded-3xl
  px-6 py-2.5
  transition-all duration-300
  hover:scale-[1.02] active:scale-[0.98]
  hover:shadow-md
  disabled:opacity-50 disabled:cursor-not-allowed
"
```

#### Secondary Button (Outline)
```tsx
className="
  border-2 border-green-600 text-green-600
  bg-transparent hover:bg-green-50
  dark:hover:bg-green-900/20
  rounded-3xl
  px-6 py-2.5
  transition-all duration-300
  hover:shadow-sm
"
```

#### Ghost Button (Text Only)
```tsx
className="
  text-green-600 hover:text-green-700
  dark:text-green-400 dark:hover:text-green-300
  rounded-lg
  px-2 py-1
  transition-colors duration-200
  underline hover:no-underline
"
```

### Form Input Styles
```tsx
className="
  w-full
  px-3 py-2
  border border-slate-200 dark:border-slate-700
  rounded-2xl
  bg-white dark:bg-slate-900
  text-slate-900 dark:text-white
  placeholder-slate-400 dark:placeholder-slate-500
  transition-all duration-200
  focus:outline-none
  focus:ring-2 focus:ring-green-500 focus:border-transparent
  focus:shadow-sm
  disabled:opacity-50 disabled:cursor-not-allowed
"
```

### Card Styles
```tsx
className="
  bg-white dark:bg-slate-900
  border border-slate-100 dark:border-slate-800
  rounded-2xl
  p-4 md:p-6
  shadow-sm hover:shadow-md
  transition-all duration-200
"
```

### Badge Styles
```tsx
className="
  inline-flex items-center
  bg-green-50 dark:bg-green-900/30
  text-green-700 dark:text-green-300
  px-2.5 py-1
  rounded-lg
  text-sm font-medium
"
```

---

## 8. Layout Patterns

### Container Widths
```
Mobile:   100% (full width with px-4)
Tablet:   672px (md:max-w-2xl)
Desktop:  896px (lg:max-w-4xl)
Large:    1280px (xl:max-w-6xl)
Extra:    1536px (2xl:max-w-7xl)
```

### Responsive Breakpoints
```
Size     | px    | CSS          | Use Case
─────────┼───────┼──────────────┼──────────────────────
Mobile   | <768  | (no prefix)  | Phone screens
Tablet   | 768+  | md:          | iPad, small laptops
Desktop  | 1024+ | lg:          | Desktop screens
Large    | 1280+ | xl:          | Large monitors
```

### Grid Layouts
```
Column Count: 
  Mobile:  1 column
  Tablet:  2 columns
  Desktop: 3-4 columns
  Extra:   4-5 columns

Gap:
  Mobile:  gap-3 (12px)
  Tablet:  gap-4 (16px)
  Desktop: gap-6 (24px)
```

---

## 9. Accessibility Standards

### Color Contrast
```
Text Size | Minimum Contrast | Target
──────────┼──────────────────┼────────
Normal    | 4.5:1 (WCAG AA)  | 7:1 (AAA)
Large     | 3:1 (WCAG AA)    | 4.5:1 (AAA)
Graphics  | 3:1 (WCAG AA)    | 4.5:1 (AAA)
```

### Focus States
```tsx
className="
  focus:outline-none
  focus:ring-2 focus:ring-offset-2
  focus:ring-green-500
  rounded-2xl
"
```

### Touch Targets
```
Minimum:  44x44px
Optimal:  48x48px
Spacing:  8px between targets
Example:  Button height 40px + padding = 44px
```

---

## 10. Dark Mode

### Approach
- Use Tailwind's `dark:` prefix
- Respect system preference with `prefers-color-scheme`
- Allow manual toggle in settings

### Color Mapping
```
Light Mode              | Dark Mode
───────────────────────┼──────────────────────
bg-white               | dark:bg-slate-900
text-slate-900         | dark:text-white
border-slate-200       | dark:border-slate-700
bg-slate-50            | dark:bg-slate-900/50
text-slate-600         | dark:text-slate-400
hover:bg-slate-100     | dark:hover:bg-slate-800
bg-green-50            | dark:bg-green-900/20
text-green-600         | dark:text-green-400
```

---

## 11. Icon Standards

### Source Library
**Lucide React** for all icons
- Consistent stroke weight (2px)
- Size: 24px default, 20px small, 32px large
- Color: Inherit from text color or explicit

### Usage
```tsx
import { Heart, Star, ShoppingCart, Menu } from 'lucide-react'

// Standard usage
<Heart size={24} className="text-green-600" />

// Responsive
<Menu size={24} className="lg:hidden" />
<Navbar size={20} />
```

### Common Icons
```
Heart:        Favorites
Star:         Ratings, Premium
ShoppingCart: Add to cart, Cart
Search:       Product search
Menu:         Mobile menu
X:            Close, Dismiss
ChevronLeft:  Back, Previous
ChevronRight: Next, Forward
Check:        Success, Verified
AlertCircle:  Warnings, Errors
```

---

## 12. Interaction Patterns

### Hover States
```
Buttons:        Scale 1.02 + shadow progression
Links:          Color change + underline (optional)
Cards:          Shadow progression + slight lift
Icons:          Color change (green-600) or scale
Forms:          Focus ring + icon color change
```

### Active/Pressed States
```
Buttons:        Scale 0.98 (pressed feel)
Toggle:         Background change + icon update
Tabs:           Underline/background highlight
Checkboxes:     Icon display + color
Links:          Color change (visited)
```

### Disabled States
```
All:            opacity-50 + cursor-not-allowed
Forms:          Grayed text + disabled appearance
Buttons:        No hover effects
```

### Loading States
```tsx
// Button with Spinner
{isLoading ? <Spinner size={20} /> : 'Submit'}

// Page Loading
<SkeletonLoader />

// Transparent Overlay
{isLoading && <div className="absolute inset-0 bg-white/50" />}
```

---

## 13. Implementation Checklist

### Before Shipping Any Component
- [ ] Color system correct (green-600 for primary actions)
- [ ] Typography hierarchy clear (size, weight, spacing)
- [ ] Spacing follows 8px grid (4, 8, 16, 24, 32, 48)
- [ ] Border radius appropriate (inputs 2xl, buttons 3xl)
- [ ] Hover/active states implemented with 300ms transition
- [ ] Focus states visible (ring-2 ring-green-500)
- [ ] Dark mode support added (dark: prefixes)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility checked (color contrast 4.5:1, touch 44x44px)
- [ ] Loading states handled (spinners, disabled states)
- [ ] Error states handled (validation, messaging)
- [ ] Empty states designed (icon + text + CTA)

---

## 14. Tools & Resources

### Design Tools
- Figma (Wireframes, prototypes)
- Adobe XD (Design systems)
- Taiga (User research collab)

### Code References
- Tailwind CSS Docs: https://tailwindcss.com
- Lucide Icons: https://lucide.dev
- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev

### Accessibility
- WCAG 2.1 AA Guidelines
- WebAIM Contrast Checker
- Axe DevTools Browser Extension

---

## 15. Version History

### v1.0 - Current Standards
- Green-600 primary color
- Rounded-2xl inputs, rounded-3xl buttons
- 300ms transitions
- Glassmorphism navbar
- Emerald-50 secondary backgrounds
- 48px hero titles, 36px section titles

---

**Document Owner**: UI/UX Design Team  
**Last Updated**: [Current Date]  
**Status**: ✅ Active & In Use  

**Questions?** Refer to UX_DESIGN_AUDIT.md for detailed specifications.

