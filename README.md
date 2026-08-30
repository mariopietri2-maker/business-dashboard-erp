# Business Dashboard ERP (Kiros-inspired)

> Modern all-in-one e-invoicing & business management platform for Greek SMEs & freelancers — inspired by [kiros.gr](https://kiros.gr).

**All the power of an ERP. Without the complexity.**

Invoices · Delivery Notes · Expenses · Receipts · POS · Taxes · EFKA · AI Assistant · Accountant access

Direct AADE / myDATA integration · Greek-language AI · Ready for B2B e-invoicing (Oct 2026)

---

## What's included right now

| Feature | Status |
|---------|--------|
| Dashboard with KPIs + charts | ✅ Live |
| Sales list + **New Invoice form** | ✅ Live |
| AI Assistant (Greek NL simulation) | ✅ Live |
| Customers CRM | ✅ Live |
| Expenses | ✅ Live |
| Products & Services catalog | ✅ Live |
| Projects | ✅ Live |
| Cash / Treasury | ✅ Live |
| Settings | ✅ Live |
| **Landing page + Pricing** | ✅ Live (`/landing`) |
| **Mobile responsive sidebar** | ✅ Live |
| **Prisma schema** (PostgreSQL) | ✅ Ready |
| Real AADE / myDATA API | 🔜 Next |
| Real AI backend | 🔜 Next |
| Auth + multi-tenant | 🔜 Next |

---

## Quick Start

```bash
git clone https://github.com/mariopietri2-maker/business-dashboard-erp.git
cd business-dashboard-erp
npm install
npm run dev
```

Open:
- **App**: http://localhost:3000
- **Landing / Pricing**: http://localhost:3000/landing
- **New Invoice**: http://localhost:3000/sales/new
- **AI Assistant**: http://localhost:3000/ai

### Optional – Database

```bash
cp .env.example .env
# Edit DATABASE_URL
npm run db:generate
npm run db:push
```

---

## Key Routes

| Path | Description |
|------|-------------|
| `/` | Dashboard (KPIs, charts) |
| `/landing` | Marketing page + pricing |
| `/sales` | Invoice list |
| `/sales/new` | **Full invoice creation form** |
| `/ai` | Greek AI assistant |
| `/customers` | CRM cards |
| `/expenses` | Expense list |
| `/products` | Product/service catalog |
| `/projects` | Projects with P&L |
| `/cash` | Cash & bank overview |
| `/settings` | Company + AADE status |

---

## Tech Stack

- **Next.js 15** + React 19 + TypeScript
- **Tailwind CSS** + dark theme
- **Recharts** for charts
- **Prisma** + PostgreSQL schema ready
- **Lucide** icons
- Mobile-first responsive layout

---

## Prisma Models

`Company` · `User` · `Customer` · `Product` · `Document` · `DocumentLine` · `Project`

Supports all myDATA document types (1.1, 2.1, 9.3, 11.1, 11.2) + payment & document statuses.

---

## Roadmap

### Done
- [x] Full UI scaffold matching Kiros screenshots
- [x] Invoice creation form with line items & VAT calc
- [x] AI chat simulation
- [x] Landing + pricing page
- [x] Mobile hamburger navigation
- [x] Prisma schema

### Next
- [ ] Wire Prisma + real CRUD APIs
- [ ] Real AI (Grok / OpenAI) for natural language → document
- [ ] AADE myDATA integration
- [ ] Auth (NextAuth / Clerk)
- [ ] Deploy to Vercel

---

## License

MIT

---

**Inspired by the excellent work of the kiros.gr team (NOVUS DIGITAL).**  
This is an independent open-source recreation / learning project.
