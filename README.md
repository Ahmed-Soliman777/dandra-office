# Dandra Office - E-Commerce Platform

A modern, full-stack e-commerce platform built with Next.js, React 19, TypeScript, Prisma, and PostgreSQL.

## 📋 Project Overview

**Dandra Office** is an Arabic-language e-commerce platform offering:
- 🛍️ Product catalog with categories
- ❤️ Favorites/wishlist functionality
- 📝 Customer reviews and ratings
- 🔐 User authentication with JWT
- 👨‍💼 Admin dashboard for product management
- 🌐 Internationalization support (Arabic/English ready)
- 🎨 Dark mode support with Tailwind CSS
- 📱 Responsive design for all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Environment variables configured

### Installation

```bash
# Install dependencies
npm install

# Setup Prisma database
npx prisma migrate dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

Create `.env.local` with:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dandra-office"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 🏗️ Project Structure

```
src/
├── app/              # Next.js app directory with routes
├── components/       # Reusable React components
├── hooks/            # Custom React hooks
├── services/         # API integration services
├── lib/              # Redux store and utilities
├── utils/            # Helper functions and constants
└── i18n/             # Internationalization configuration
```

See [PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md) for detailed folder structure recommendations.

## 📚 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Next.js 16, TypeScript |
| **Styling** | Tailwind CSS, PostCSS |
| **State Management** | Redux Toolkit, React Context |
| **Database** | PostgreSQL, Prisma ORM |
| **Authentication** | JWT, jsonwebtoken |
| **HTTP Client** | Axios |
| **Internationalization** | next-intl |
| **UI Components** | Lucide React, Next Cloudinary |
| **Forms** | React with Zod validation |

## 🔑 Key Features

### Authentication
- JWT-based user authentication
- Password hashing with bcryptjs
- Protected routes and API endpoints
- Token stored in HTTP-only cookies

### Product Management
- Browse products by category
- Search and filter functionality
- Price range filtering with Redux
- Product details with reviews and ratings

### User Features
- Add/remove products to favorites
- Submit and read product reviews
- User profile management
- Wishlist persistence

### Admin Features
- Dashboard for product management
- Add/edit/delete products
- Manage categories
- View customer reviews

## 🚦 Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Production
npm run build           # Build for production
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
npx prisma generate    # Regenerate Prisma client
npx prisma migrate dev # Run database migrations
```

## 📖 Documentation

- **[PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md)** - Comprehensive improvement roadmap with:
  - Architecture review and recommendations
  - State management strategy
  - Performance optimization plan
  - Folder structure recommendations
  - Component design patterns
  - Next.js best practices
  - Learning roadmap for developers
  - Prioritized improvement tasks

- **[Next.js Docs](https://nextjs.org/docs)** - Official Next.js documentation
- **[Prisma Docs](https://www.prisma.io/docs)** - Database ORM documentation
- **[Redux Toolkit Docs](https://redux-toolkit.js.org)** - State management

## 🔧 Database Schema

The project uses Prisma with PostgreSQL. Key models:

```prisma
- User (with email, username, password, isAdmin flag)
- Product (with bilingual names, descriptions, prices, images)
- Category (for product organization)
- Review (customer ratings and feedback)
- Comment (product commenting system)
- Favorite (user wishlist)
```

See [prisma/schema.prisma](./prisma/schema.prisma) for complete schema.

## 🎯 Improvement Roadmap

This project is actively being improved. See [PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md) for a detailed roadmap covering:

**High Priority (Weeks 1-4):**
- State management enhancement
- Centralized API layer
- Component optimization
- Error handling improvements

**Medium Priority (Weeks 5-12):**
- Folder restructuring
- Custom hooks library
- Type safety improvements
- Testing foundation
- Database optimization
- Next.js best practices

**Low Priority (Weeks 13+):**
- Advanced performance optimization
- Monitoring and analytics
- Testing expansion
- Internationalization
- Advanced e-commerce features
- CI/CD and DevOps

## 💡 Best Practices Implemented

✅ TypeScript strict mode
✅ Server and Client Components
✅ ESLint configuration
✅ Responsive design
✅ Dark mode support
✅ Error handling
✅ Type-safe API calls
✅ Secure authentication

## 🔒 Security Considerations

- JWT tokens stored in HTTP-only cookies
- Password hashing with bcryptjs
- Protected API routes
- Environment variables for secrets
- Input validation with Zod
- CORS configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 Development Notes

- Use `npm run dev` for development with hot reload
- Database changes use `npx prisma migrate dev`
- Check [PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md) before major refactoring
- Follow TypeScript and ESLint configurations

## 🐛 Known Issues & Limitations

- Internationalization currently supports Arabic only (Framework ready for more languages)
- Admin dashboard has basic features (expansion planned)
- Payment integration not yet implemented

## 📄 License

This project is private and confidential.

---

**Last Updated**: March 8, 2026
**Status**: Active Development
**Next Phase**: See [PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md)
