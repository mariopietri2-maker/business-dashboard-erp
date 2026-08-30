# Business Dashboard ERP

> Modern all-in-one business management platform — inspired by tools like Kirosgr.

**All your business in one screen.**

Sales · Expenses · VAT · Customers · Inventory · Projects · Social Security · Cash · AI Assistant

---

## Vision

A clean, modern dashboard that gives freelancers and SMEs a complete overview of their business:

- **Sales & Revenue** tracking with charts
- **Expenses** management
- **VAT / Tax** summaries
- **Customer** CRM
- **Inventory / Warehouse**
- **Projects / Jobs**
- **Cash / Treasury**
- **AI Assistant** for insights and automation
- Integration-ready with e-invoicing (e.g. Greek myDATA / electronic invoicing)

## Features (planned)

- [x] Responsive dashboard layout
- [ ] Real-time KPIs (Revenue, Expenses, Profit, Outstanding)
- [ ] Interactive charts (monthly revenue, expense breakdown, customer segments)
- [ ] Sales invoices & quotes
- [ ] Expense tracking & receipts
- [ ] Customer & supplier management
- [ ] Inventory / stock levels
- [ ] Project & time tracking
- [ ] Cashflow & bank reconciliation
- [ ] AI helper for reports, forecasts, and suggestions
- [ ] Multi-language (Greek / English first)
- [ ] Dark / Light mode

## Tech Stack (suggested)

- **Frontend**: Next.js 15 + React + TypeScript + Tailwind CSS + shadcn/ui
- **Charts**: Recharts or Chart.js
- **Backend**: Next.js API routes or separate NestJS / FastAPI
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth / Clerk
- **AI**: OpenAI / Grok API for the assistant
- **Deployment**: Vercel / Railway / Docker

## Getting Started

```bash
git clone https://github.com/mariopietri2-maker/business-dashboard-erp.git
cd business-dashboard-erp
npm install
npm run dev
```

## Roadmap

1. Scaffold Next.js app with dashboard layout matching the inspiration
2. KPI cards + sample charts
3. Basic CRUD for Customers, Invoices, Expenses
4. Inventory module
5. AI chat assistant panel
6. Greek localization & e-invoicing hooks

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT
