
# MAD LIBS MAGIC – PREMIUM FEATURE UPGRADE PLAN

## 1. PRODUCT TIERS

### Free Tier
- Prebuilt categories
- Basic creator
- Limited tokens
- Generate unlimited stories

### Logged-In Tier (Free Account)
- Basic custom template creator (max 5 placeholders)
- Save up to 3 templates

### Premium Tier
- Unlimited placeholders/categories
- Unlimited templates
- Rich Text Editor
- Insert Placeholder toolbar
- Preview mode
- Duplicate templates
- Cloud syncing
- Multi-device access
- Optional AI assistance

## 2. APP ARCHITECTURE (Next.js 16)
```
src/
  app/
    premium/
      layout.js
      studio/page.js
      templates/page.js
    dashboard/page.js
    madlibs/
      new/page.js
      edit/[templateId]/page.js
  lib/
    auth.js
    premium.js
  middleware.js
  components/
    PremiumGuard.js
    Editor/
      RichEditor.js
      TokenToolbar.js
      TemplatePreview.js
```

## 3. DATABASE MODEL

### User
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  isPremium Boolean  @default(false)
  templates Template[]
}
```

### Template
```prisma
model Template {
  id        String   @id @default(cuid())
  userId    String
  title     String
  category  String?
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user      User     @relation(fields: [userId], references: [id])
}
```

## 4. MIDDLEWARE & ACCESS CONTROL
Premium route protection.

## 5. UI/UX FLOW
Free → logged-in → premium with upgrade modals.

## 6. PREMIUM EDITOR DESIGN
Rich editor with:
- Unlimited tokens
- Custom categories
- Preview pane
- Template saving

## 7. PAGE BREAKDOWN
- Free creator: limited features
- Premium studio: full editor

## 8. STRIPE INTEGRATION
Checkout → webhook → set isPremium = true.

## 9. ROADMAP (2-WEEK)

1. DB models
2. Middleware
3. Editor UI
4. Toolbar system
5. Template save/load
6. Stripe integration

Ready for next steps.
