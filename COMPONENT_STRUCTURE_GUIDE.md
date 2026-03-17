# Component Structure Recommendations

## 1. Mobile Navigation Menu Component

### Structure
```tsx
MobileNavigation (NEW)
├── Hamburger Button
│   ├── Icon (3 lines)
│   └── Animation (X on open)
├── Overlay (Backdrop)
│   └── Dark semi-transparent
└── Navigation Menu (Slide from left)
    ├── Logo
    ├── Links
    │   ├── Shop
    │   ├── Categories
    │   ├── Favorites
    │   └── Account
    ├── Divider
    └── Login/Logout Button
```

### Key Features
- Smooth slide-in animation (300ms)
- Close on link click
- Close on overlay click
- Accessible: ARIA labels
- Touch-friendly: Large tap targets

---

## 2. Product Quick View Modal

### Structure
```tsx
QuickViewModal
├── Header
│   ├── Title: "Quick View"
│   └── Close Button (X)
├── Content
│   ├── Product Details
│   │   ├── Image (Small)
│   │   ├── Name
│   │   ├── Price
│   │   └── Rating
│   └── Actions
│       ├── Add to Cart (Green button)
│       ├── Add to Favorites (Heart)
│       └── View Full Details (Link)
└── Footer
    └── Related Products Carousel
```

### UX Benefits
- Fast browsing without page reload
- Quick purchase decision
- Maintains scroll position
- Mobile-optimized

---

## 3. Enhanced Search Component

### Structure
```tsx
SearchBar (Enhanced)
├── Input Field
│   ├── Search Icon
│   ├── Text Input
│   └── Clear Button (X)
├── Dropdown Menu (Shows on focus)
│   ├── Recent Searches
│   │   └── Recently searched terms
│   ├── Popular Products
│   │   └── Show 3-5 popular items
│   ├── Categories
│   │   └── Quick category access
│   └── Divider
└── Search Results
    └── Product cards in dropdown
```

### Features
- Real-time suggestions
- Recent search history
- Popular products
- Category quick access
- Keyboard navigation support

---

## 4. Product Card Enhancements

### Enhanced Product Card
```tsx
ProductCard (Enhanced)
├── Image Container
│   ├── Main Image
│   ├── On-Hover Elements
│   │   ├── Quick Add Button
│   │   ├── Zoom Icon
│   │   └── Favorite Button
│   └── Status Badge
│       ├── "New" or
│       ├── "Sale" or
│       └── "Out of Stock"
├── Details
│   ├── Name (2 lines max)
│   ├── Category Label (Small)
│   ├── Price
│   │   ├── Current (Green, larger)
│   │   └── Original (Strikethrough, muted)
│   ├── Rating
│   │   ├── Stars
│   │   └── Review Count
│   └── Quick Actions
│       ├── Add to Cart
│       ├── Favorites
│       └── Share
└── Optional
    └── Brief Description (Single line)
```

### Interactive Features
- Image zoom on hover
- Smooth scale animation (1.02x)
- Quick add without modal
- Visual feedback on actions
- Stock status indicator

---

## 5. Improved Filter Panel

### Desktop & Mobile Views
```tsx
FilterPanel
├── Desktop (Sticky Sidebar)
│   ├── Filter Categories
│   │   ├── Price Range
│   │   ├── Category
│   │   ├── Rating
│   │   ├── Availability
│   │   └── Brand (if applicable)
│   └── Actions
│       ├── Apply Filters (Green)
│       ├── Clear All (Gray)
│       └── Save Filters
│
└── Mobile (Collapsible/Modal)
    ├── Filter Toggle Button
    ├── Modal Overlay
    └── Filter Content
        ├── Same filter options
        ├── Apply Button (Bottom)
        └── Back/Close
```

### Features
- Persistent filter state
- Visual feedback on active filters
- Clear filter history
- Save favorite filter combinations
- Mobile-optimized experience

---

## 6. Shopping Cart Improvements

### Mini Cart (Navbar Hover)
```tsx
MiniCart (Hover Dropdown)
├── Header
│   ├── Cart Count Badge
│   └── "View Cart" Link
├── Items List
│   └── [Product Item]
│       ├── Image (Small)
│       ├── Name
│       ├── Quantity × Price
│       └── Remove Button
├── Divider
├── Summary
│   ├── Subtotal: $XXX
│   └── Shipping: Calculate
└── Actions
    ├── Checkout (Green, primary)
    └── Continue Shopping (Link)
```

### Full Cart Page
```tsx
CartPage
├── Items Section
│   ├── [Cart Item]
│   │   ├── Checkbox (Select)
│   │   ├── Product Info
│   │   ├── Quantity Controls
│   │   │   ├── Minus
│   │   │   ├── Count
│   │   │   └── Plus
│   │   ├── Price
│   │   └── Remove
│   └── Empty State Option
│       └── CTA: "Continue Shopping"
├── Divider
└── Summary Section
    ├── Order Summary
    │   ├── Subtotal
    │   ├── Shipping
    │   ├── Tax
    │   └── Total (Large, green)
    ├── Actions
    │   ├── Save for Later
    │   ├── Apply Promo Code
    │   └── Checkout (Green, large)
    └── Recommendations
        └── Related products carousel
```

---

## 7. User Account Dashboard

### Structure
```tsx
UserDashboard
├── Sidebar Navigation
│   ├── Profile & Avatar
│   ├── Menu Items
│   │   ├── My Orders
│   │   ├── My Favorites
│   │   ├── Settings
│   │   ├── Addresses
│   │   ├── Payments
│   │   └── Logout
│   └── Mobile: Collapse/Expand
│
└── Main Content
    ├── Selected Section
    │   ├── Welcome Header
    │   ├── Content Area
    │   └── Actions
    └── Empty State (if applicable)
        ├── Icon
        ├── Message
        └── CTA
```

### Sections
- **Orders**: List, detail view, reorder button
- **Favorites**: Grid, share, move to cart
- **Settings**: Edit profile, email preferences
- **Addresses**: Add, edit, default address
- **Payments**: Saved cards, add new card

---

## 8. Review Section Enhancements

### Review Display
```tsx
ReviewsSection
├── Header
│   ├── Average Rating (Large)
│   │   └── Stars + Count
│   └── Rating Breakdown
│       ├── 5 stars: 45%
│       ├── 4 stars: 30%
│       ├── 3 stars: 15%
│       ├── 2 stars: 5%
│       └── 1 stars: 5%
├── Filters
│   ├── Sort (Recent, Helpful, Rating)
│   ├── Filter by Rating
│   └── Filter by Verified Purchase
├── Review List
│   └── [Review Item]
│       ├── User Info
│       │   ├── Avatar
│       │   ├── Name
│       │   └── Verified Badge
│       ├── Content
│       │   ├── Rating Stars
│       │   ├── Title
│       │   ├── Text
│       │   └── Images (if any)
│       ├── Metadata
│       │   ├── Date
│       │   └── Helpful Count
│       └── Actions
│           ├── Helpful Button
│           ├── Report Button
│           └── Share Button
└── Add Review Button (Prominent)
```

---

## 9. Checkout Process Flow

### Page 1: Cart Review
```
Product Items (Editable)
  ↓
  [Continue to Shipping]
```

### Page 2: Shipping Address
```
Address Form or Select Existing
  ├── Saved Addresses (Radio select)
  ├── Add New Address Form
  └── [Continue to Payment]
```

### Page 3: Payment Method
```
Saved Payment Methods
├── Card Selection (Radio)
├── Add New Card Form
└─ [Review Order]
```

### Page 4: Order Review & Confirmation
```
├── Order Summary
├── Shipping Address
├── Payment Method
├── Final Price Breakdown
└── [Place Order] (Green, large)
     ↓
     Order Confirmation
     ├── Order Number
     ├── Delivery Estimate
     ├── Tracking Info
     └── [Continue Shopping]
```

---

## 10. Notification System

### Toast Notifications
```tsx
Toast (Auto-dismiss, 4s)
├── Icon
│   ├── ✓ (Success, Green)
│   ├── ! (Warning, Orange)
│   ├── ✕ (Error, Red)
│   └── ⓘ (Info, Blue)
├── Message
└── Close Button (X)
```

### Location
- Top center for feedback
- Toast stacking (multiple)
- Keyboard dismissible (ESC)

### Types
- **Success**: Added to cart, form submitted
- **Error**: Failed action, validation
- **Warning**: Low stock, old browser
- **Info**: Feature explanation, tips

---

## 11. Form Validation Patterns

### Input with Validation
```tsx
FormField
├── Label
│   ├── Text
│   └── Required Indicator (*)
├── Input/Select/Textarea
│   ├── Icon (Left)
│   ├── Placeholder
│   └── Status Indicator (Right)
│       ├── ✓ Valid (Green)
│       ├── ! Invalid (Red)
│       └── ⓘ Info (Blue)
├── Helper Text
│   └── Secondary text (gray, small)
└── Error Message
    └── Only show if error (red, icon)
```

### Validation Timing
- **On Blur**: After user leaves field
- **On Change**: Real-time for password strength
- **On Submit**: Final validation before sending

---

## 12. Loading States

### Skeleton Loaders
```tsx
ProductCardSkeleton
├── Image Placeholder
│   └── Animated gray bar
├── Title Placeholder
│   └── 2 lines of animated gray
├── Price Placeholder
│   └── Single animated gray line
└── Button Placeholder
    └── Animated gray bar

-- Animation --
opacity: 100% → 50% → 100% (1.5s loop)
```

### Loading Spinners
```tsx
Spinner (3 variants)

1. Inline Spinner (Small)
   └── 16px rotating circle

2. Button Spinner (Medium)
   └── 20px in button

3. Page Spinner (Large)
   └── 48px centered on page
```

---

## Design Tokens for Components

### Button Sizes
```
Small:    h-8 px-3 text-sm     (32px height)
Medium:   h-10 px-4 text-base  (40px height) 
Large:    h-12 px-6 text-lg    (48px height)
```

### States
```
Normal:    bg-green-600 text-white
Hover:     bg-green-700 scale-102 shadow-lg
Active:    scale-98
Disabled:  opacity-50 cursor-not-allowed
Loading:   opacity-75 pointer-events-none
```

### Spacing
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
```

---

## Summary

These component structures and patterns ensure:
- ✅ Consistent user experience
- ✅ Accessibility best practices
- ✅ Mobile responsiveness
- ✅ Clear visual hierarchy
- ✅ Intuitive interactions
- ✅ Reduced user friction

Implement these recommendations incrementally, starting with highest impact items (mobile nav, empty states, loading states).

