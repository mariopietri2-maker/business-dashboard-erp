# Business Dashboard ERP (Kiros-inspired)

> Modern all-in-one e-invoicing & business management platform for Greek SMEs & freelancers — inspired by [kiros.gr](https://kiros.gr).

**All the power of an ERP. Without the complexity.**

Invoices · Delivery Notes · Expenses · Receipts · POS · Taxes · EFKA · AI Assistant · Accountant access

Direct AADE / myDATA integration · Greek-language AI · Ready for B2B e-invoicing (Oct 2026)

---

## Product Vision

A clean, modern dashboard that replaces complex ERPs for freelancers and small/medium Greek businesses.

Focus on speed: issue an invoice in 30 seconds by typing or speaking one Greek sentence. Everything syncs automatically with AADE/myDATA.

### Target Users
- Lawyers & notaries
- Consultants & freelancers
- Engineers & technical offices
- Doctors, psychologists, physiotherapists
- Farmers & livestock producers
- Electricians, plumbers, workshops
- Retail / wholesale trade
- Delivery & transport companies
- Accountants (multi-client access)

---

## Core Features (based on kiros.gr analysis)

### 1. AI Assistant (Greek natural language)
- Issue invoice with one sentence: «Τιμολόγιο 500€ στη ΧΥΖ ΑΕ για ανάπτυξη ιστοσελίδας»
- Create delivery notes (δελτία αποστολής 9.3)
- Ask for stats (revenue, VAT, profit margin)
- View unpaid invoices sorted by days overdue
- Generate polite payment reminder emails
- Scan receipt photo → auto-create expense + VAT

### 2. Direct AADE / myDATA Integration
- Every document transmitted in < 2 seconds → receives MARK
- Automatic sync of incoming documents & characterizations
- Full support for document types: 1.1, 2.1, 9.3, 11.1, 11.2, etc.
- B2B e-invoicing via certified provider (ready for 1 Oct 2026)
- Digital delivery notes Phase B (12 Oct 2026)
- IRIS payments support

### 3. Dashboard & KPIs
- Revenue, Expenses, VAT, Profit, Outstanding receivables
- Monthly bar charts, customer segment pie charts, expense breakdown
- Cashflow overview
- Tax estimates (τεκμήρια, προκαταβολή φόρου, 20% withholding)
- EFKA contributions overview

### 4. Sales & Documents
- Invoices, service invoices, retail receipts, delivery notes
- Product/service catalog with codes, prices, VAT rates
- Series management, templates, defaults
- Payment status tracking + automatic reminders

### 5. Customers & CRM
- Auto-enriched from AFM lookup & invoices
- Customer card: monthly revenue, document distribution, unpaid, recent activity
- History & balances

### 6. Expenses
- Incoming documents from AADE + manual entry
- Receipt scanning via AI
- Categorization & VAT recovery

### 7. Inventory / Warehouse (for trade)
- Stock levels, price lists
- Delivery notes → invoice in one click

### 8. Projects (for engineers, freelancers)
- Revenue & cost per project

### 9. Accountant Collaboration
- Dedicated accountant login
- myDATA reconciliation
- Export for Ε3 & VAT returns
- Books of revenues-expenses

### 10. Compliance & Future-proof
- AADE changes auto-applied
- GDPR, data in EU
- POS & IRIS integration
- Digital client registry (upcoming)

---

## Pricing Model (inspired by original)
- 14-day full Professional trial (no credit card)
- Free forever: up to 10 documents / month
- Paid plans for higher volume + advanced features (to be defined)

---

## Screens from original (demos)
1. Monthly overview dashboard (revenue, expenses, VAT, top customers)
2. Sales list with MARK & payment status
3. Invoice detail card (E3 characterizations, payment methods, AADE actions)
4. Document creation form (AFM search)
5. AI natural-language assistant
6. Customer list with turnover
7. Customer detail card
8. Expenses with source & characterization
9. Products & services catalog
10. Delivery note with vehicle & addresses
11. Settings & defaults

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 15 + React 19 + TypeScript + Tailwind CSS + shadcn/ui |
| Charts | Recharts |
| Backend | Next.js Route Handlers + Prisma |
| Database | PostgreSQL |
| Auth | NextAuth.js / Clerk |
| AI | Grok / OpenAI (Greek-tuned prompts) |
| AADE | Official myDATA API + certified e-invoicing provider |
| Storage | S3-compatible (receipts, PDFs) |
| Deployment | Vercel + Railway / Supabase |

---

## Project Structure (planned)

```
app/
  (dashboard)/
    page.tsx              # Main KPIs + charts
    sales/
    expenses/
    customers/
    products/
    ai-assistant/
    settings/
  api/
    documents/
    aade/
    ai/
components/
  dashboard/
  documents/
  ai-chat/
lib/
  aade/
  prisma/
  ai/
```

---

## Roadmap

### Phase 1 – Foundation (current)
- [x] Repo + full product spec
- [ ] Next.js scaffold + dashboard layout matching screenshots
- [ ] KPI cards + sample charts with mock data
- [ ] Dark theme + Greek i18n

### Phase 2 – Core Documents
- [ ] Document creation UI
- [ ] Customer CRM
- [ ] Products catalog
- [ ] Mock AADE transmission

### Phase 3 – AI Assistant
- [ ] Natural language → structured document
- [ ] Receipt OCR
- [ ] Stats Q&A
- [ ] Payment reminder generator

### Phase 4 – Real Integrations
- [ ] myDATA API
- [ ] Certified provider for B2B
- [ ] Accountant multi-tenant access
- [ ] POS / IRIS

### Phase 5 – Polish & Launch
- [ ] Mobile responsive / PWA
- [ ] Full Greek + English
- [ ] Pricing & billing
- [ ] Production hardening

---

## Getting Started

```bash
git clone https://github.com/mariopietri2-maker/business-dashboard-erp.git
cd business-dashboard-erp
npm install
npm run dev
```

---

## License

MIT

---

**Inspired by the excellent work of the kiros.gr team (NOVUS DIGITAL).**  
This is an independent open-source recreation / learning project.
