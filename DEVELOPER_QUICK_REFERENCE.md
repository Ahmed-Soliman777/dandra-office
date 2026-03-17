# Developer Quick Reference & Implementation Checklist

## 🎯 Quick Color Reference

### Always Use These Colors
```jsx
// Primary Action
bg-green-600                          // Buttons, links, badges
hover:bg-green-700                    // Hover state
dark:bg-green-500                     // Dark mode buttons
dark:hover:bg-green-600               // Dark mode hover

// Focus State (ALL FORMS)
focus:ring-2 focus:ring-green-500     // Always this green
focus:border-transparent              // Remove border focus

// Text
text-green-600                        // Green text/links
dark:text-green-400                   // Dark mode green
hover:text-green-700                  // Hover link text

// Backgrounds
bg-green-50                           // Light page sections
dark:bg-green-900/20                  // Dark mode light bg
bg-emerald-50                         // Subtle alternative
```

### NEVER Use These (Deprecated)
```jsx
❌ bg-blue-600      → Use bg-green-600
❌ text-blue-600    → Use text-green-600
❌ hover:bg-blue    → Use hover:bg-green-600
❌ ring-blue        → Use ring-green-500
```

---

## 📏 Sizing Cheat Sheet

### Border Radius
```jsx
// Form Inputs
rounded-2xl                  // 16px - All text, select, textarea

// Buttons
rounded-3xl                  // 24px - All primary/secondary buttons

// Cards
rounded-2xl                  // 16px - Product cards, containers

// Small
rounded-xl                   // 12px - Small components
rounded-lg                   // 8px  - Badges, tiny elements
```

### Buttons
```jsx
// Small
h-8 px-3 text-sm

// Medium (STANDARD)
h-10 px-4 text-base          // Use this most often

// Large
h-12 px-6 text-lg

// Full Width
w-full                        // Mobile forms
w-full md:w-auto              // Responsive
```

### Spacing
```jsx
p-4                          // 16px padding (standard)
p-6                          // 24px padding (cards, modals)
mb-4                         // 16px margin (section spacing)
mb-8                         // 32px margin (large sections)
gap-4                        // 16px grid gap (standard)
gap-6                        // 24px gap (large grids)
```

---

## 🔄 Copy-Paste Templates

### Primary Button
```jsx
<button
  className="
    bg-green-600 hover:bg-green-700
    dark:bg-green-500 dark:hover:bg-green-600
    text-white font-semibold
    rounded-3xl px-6 py-2.5
    transition-all duration-300
    hover:scale-[1.02] active:scale-[0.98]
    hover:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  Click Me
</button>
```

### Form Input
```jsx
<input
  type="text"
  placeholder="Enter text..."
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
/>
```

### Card Component
```jsx
<div
  className="
    bg-white dark:bg-slate-900
    border border-slate-100 dark:border-slate-800
    rounded-2xl
    p-4 md:p-6
    shadow-sm hover:shadow-md
    transition-all duration-200
  "
>
  Card content
</div>
```

### Link with Hover
```jsx
<a
  href="/page"
  className="
    text-green-600 dark:text-green-400
    hover:text-green-700 dark:hover:text-green-500
    transition-colors duration-200
    underline hover:no-underline
  "
>
  Link Text
</a>
```

---

## 🎨 Common Component Updates

### Updating from Blue to Green
```jsx
BEFORE:
className="bg-blue-600 hover:bg-blue-700 text-blue-600"

AFTER:
className="bg-green-600 hover:bg-green-700 text-green-600"
```

### Updating Border Radius
```jsx
BEFORE:
className="rounded-xl"                // Outdated

AFTER:
className="rounded-2xl"               // Inputs, cards
className="rounded-3xl"               // Buttons
```

### Adding Smooth Transitions
```jsx
BEFORE:
className="bg-blue-600"

AFTER:
className="
  bg-green-600
  transition-all duration-300         // Add this
  hover:scale-[1.02]                  // Add this
"
```

### Adding Focus Ring (Forms Only)
```jsx
BEFORE:
<input className="border border-slate-200" />

AFTER:
<input
  className="
    border border-slate-200
    focus:ring-2 focus:ring-green-500 focus:border-transparent
    transition-all duration-200
  "
/>
```

---

## ✅ File Modification Checklist

When modifying any customer-facing component, verify:

### Color Consistency
- [ ] All `text-blue-*` changed to `text-green-*`
- [ ] All `bg-blue-*` changed to `bg-green-*`
- [ ] All `hover:text-blue-*` changed to `hover:text-green-*`
- [ ] All `focus:ring-blue-*` changed to `focus:ring-green-*`
- [ ] Dark mode variants included (`dark:text-green-*`)

### Styling Modernization
- [ ] Buttons are `rounded-3xl` (not `rounded-xl`)
- [ ] Inputs are `rounded-2xl` (not `rounded-xl`)
- [ ] Cards are `rounded-2xl` (not `rounded-xl`)
- [ ] Transitions are `duration-300` (not `duration-200`)
- [ ] Hover scale included: `hover:scale-[1.02]`

### Interaction States
- [ ] Hover: `hover:scale-[1.02] hover:shadow-md`
- [ ] Active: `active:scale-[0.98]`
- [ ] Focus: `focus:ring-2 focus:ring-green-500`
- [ ] Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`
- [ ] Loading: Spinner component used

### Accessibility
- [ ] Color contrast at least 4.5:1
- [ ] Touch targets minimum 44x44px
- [ ] Focus ring visible on keyboard navigation
- [ ] Alt text on images
- [ ] Semantic HTML (`<button>`, `<input>`, `<label>`)

### Responsive Design
- [ ] Mobile layout tested
- [ ] Tablet layout tested
- [ ] Desktop layout tested
- [ ] Images responsive (use `next/image`)
- [ ] Touch-friendly on mobile

### Dark Mode
- [ ] `dark:` variants for all colors
- [ ] `dark:` variants for backgrounds
- [ ] Tested in dark mode browser
- [ ] Text contrast maintained in dark mode

---

## 🔍 Testing Checklist

### Visual Testing
```
🔲 Colors correct (green-606 for all CTAs)
🔲 Text hierarchy clear (font sizes, weights)
🔲 Spacing consistent (8px grid)
🔲 Border radius correct (2xl inputs, 3xl buttons)
🔲 Shadows match design (sm, md, lg)
🔲 Transitions smooth (300ms)
🔲 Hover states visible
🔲 Focus rings visible
```

### Browser Testing
```
🔲 Chrome / Edge (latest)
🔲 Firefox (latest)
🔲 Safari (latest)
🔲 Mobile Chrome
🔲 Mobile Safari
```

### Device Testing
```
🔲 iPhone (375px)
🔲 iPad (768px)
🔲 Desktop (1024px+)
🔲 Large Desktop (1440px+)
```

### Functionality Testing
```
🔲 Buttons clickable
🔲 Forms submittable
🔲 Links navigating
🔲 Modals opening/closing
🔲 Loading states showing
🔲 Error states showing
🔲 Empty states showing
```

### Accessibility Testing
```
🔲 Keyboard navigation works
🔲 Tab order logical
🔲 Focus visible
🔲 Screen reader compatible
🔲 Color contrast sufficient
🔲 Buttons 44x44px minimum
```

---

## 🚀 Before You Commit

### Code Review Self-Check
```javascript
// ✅ DO THIS
className="
  bg-green-600 hover:bg-green-700
  rounded-3xl
  px-6 py-2.5
  transition-all duration-300
  hover:scale-[1.02]
"

// ❌ DON'T DO THIS
className="bg-blue-600 rounded-lg px-2 py-1"
className="hover:bg-blue-700"  // No transition
className="active:scale-95"     // Should be scale-98
className="focus:ring-2 focus:ring-blue-500"  // Wrong color
```

### Files to Always Check Against
1. **UX_DESIGN_AUDIT.md** - Technical specifications
2. **BRAND_STYLE_GUIDE.md** - Color, typography, spacing standards
3. **COMPONENT_STRUCTURE_GUIDE.md** - Component patterns and layouts

### Files We Modified (Reference)
```
✅ src/app/page.tsx
✅ src/app/categories/page.tsx
✅ src/app/(auth)/login/page.tsx
✅ src/components/common/Navbar/Navbar.tsx
✅ src/components/common/Hero/Hero.tsx
✅ src/components/common/ProductCardData.tsx
✅ src/components/common/ProductFilters.tsx
✅ src/components/common/SearchProduct.tsx
✅ src/components/common/CategoryCards.tsx
✅ src/components/features/auth/login/LoginForm.tsx
✅ src/components/features/auth/register/RegisterForm.tsx
✅ src/components/features/shop/id/ProductDetails.tsx
✅ src/components/features/shop/id/ReviewSection.tsx
✅ src/components/features/shop/id/AddReview.tsx
✅ src/components/features/shop/id/UpdateReview.tsx
✅ src/components/features/shop/id/StarRating.tsx
✅ src/components/features/shop/id/Path.tsx
✅ src/components/features/shop/filter/FilterResult.tsx
✅ src/components/features/shop/search/SearchResult.tsx
✅ src/components/features/favorites/card/FavoriteCard.tsx
✅ src/components/features/favorites/favorite-card-data/FavoriteCardData.tsx
```

❌ **DO NOT MODIFY dashboard/ files** - Protected area

---

## 🎯 Common Mistakes to Avoid

### ❌ Color Mistakes
```jsx
❌ bg-blue-600                  → Use bg-green-600
❌ hover:bg-primary             → Use hover:bg-green-700
❌ focus:ring-2 focus:ring-blue-500  → Use focus:ring-green-500
❌ text-emerald-600             → Use text-green-600
```

### ❌ Component Mistakes
```jsx
❌ rounded-xl on buttons         → Use rounded-3xl
❌ rounded-lg on inputs          → Use rounded-2xl
❌ transition-all duration-200   → Use duration-300
❌ hover:scale-105              → Use hover:scale-[1.02]
❌ active:scale-95              → Use active:scale-[0.98]
```

### ❌ Form Mistakes
```jsx
❌ focus:outline-2 focus:outline-blue-500         → Remove, use focus-ring
❌ focus:ring-2 focus:ring-offset-4              → Too much offset, use 0
❌ No focus ring at all                          → Always add ring-green-500
❌ Different focus colors in same form            → All should be green-500
```

### ❌ Responsive Mistakes
```jsx
❌ gap-2 (too small)           → Use gap-4 or gap-6
❌ p-2 on cards (too small)    → Use p-4 or p-6
❌ text-sm for headings        → Use appropriate heading size
❌ No dark: variants           → Always add dark mode support
```

---

## 🛠️ Useful Tailwind Shortcuts

### Quick Reference
```jsx
// Colors
g6  = green-600
g5  = green-500
s2  = slate-200
w   = white

// Sizing
h-10   = height 40px (button std)  
py-2.5 = padding y 10px
px-4   = padding x 16px
gap-4  = grid gap 16px

// States
h:scale-[1.02]  = Hover scale 102%
a:scale-[0.98]  = Active scale 98%
d:opacity-50    = Disabled opacity

// Sections
md: = Tablet breakpoint (768px)
lg: = Desktop breakpoint (1024px)
xl: = Large desktop (1280px)

// Dark Mode
d:bg-slate-900  = Dark background
d:text-white    = Dark text
d:hover:bg-green-600  = Dark hover
```

---

## 📚 Documentation References

### Core Documents
1. **BRAND_STYLE_GUIDE.md** - Look here for all color/sizing questions
2. **UX_DESIGN_AUDIT.md** - Look here for detailed component specs
3. **COMPONENT_STRUCTURE_GUIDE.md** - Look here for layout patterns

### External Resources
- [Tailwind CSS Colors](https://tailwindcss.com/docs/colors)
- [Lucide React Icons](https://lucide.dev)
- [Next.js Docs](https://nextjs.org/docs)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💡 Pro Tips

### Tip 1: Use CSS Classes, Not Inline Styles
```jsx
✅ className="bg-green-600"
❌ style={{ backgroundColor: '#16a34a' }}
```

### Tip 2: Always Include Transitions
```jsx
✅ className="transition-all duration-300 hover:scale-[1.02]"
❌ className="hover:scale-[1.02]"  // Instant, jarring
```

### Tip 3: Test in Dark Mode
```jsx
✅ className="dark:bg-slate-900 dark:text-white"
❌ className="bg-white text-slate-900"  // Broken in dark mode
```

### Tip 4: Mobile-First Approach
```jsx
✅ className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
❌ className="grid-cols-3"  // Too wide on mobile
```

### Tip 5: Consistent Hover Effects
```jsx
✅ All interactive: hover:scale-[1.02] hover:shadow-md
❌ Some with effects, some without  // Inconsistent feel
```

---

## 🚨 Critical Dos and Don'ts

### DO ✅
- [ ] Use green-606 for all CTAs
- [ ] Use rounded-3xl for buttons
- [ ] Use rounded-2xl for inputs/cards
- [ ] Use 300ms transitions
- [ ] Include dark mode variants
- [ ] Test on mobile/tablet/desktop
- [ ] Test keyboard navigation
- [ ] Include focus rings on forms
- [ ] Use next/image for images
- [ ] Include loading states

### DON'T ❌
- [ ] Use old blue colors anywhere
- [ ] Mix border radius sizes inconsistently
- [ ] Use 200ms transitions (too fast)
- [ ] Forget dark: variants
- [ ] Make touch targets < 44px
- [ ] Remove focus rings for "design"
- [ ] Use inline styles instead of Tailwind
- [ ] Modify dashboard files
- [ ] Forget empty state design
- [ ] Leave things without hover states

---

**Last Updated**: [Current Date]  
**Status**: ✅ Active Reference  
**Questions?** See BRAND_STYLE_GUIDE.md or UX_DESIGN_AUDIT.md

