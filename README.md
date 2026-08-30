# Business Dashboard ERP (Kiros-inspired)

> Modern all-in-one e-invoicing & business management platform for Greek SMEs & freelancers — inspired by [kiros.gr](https://kiros.gr).

**All the power of an ERP. Without the complexity.**

---

## 🌐 Live website

**GitHub Pages URL (after enabling Pages once):**  
👉 **https://mariopietri2-maker.github.io/business-dashboard-erp/**

### Enable hosting (one-time, ~30 seconds)

1. Open: https://github.com/mariopietri2-maker/business-dashboard-erp/settings/pages  
2. Under **Build and deployment → Source**, select **GitHub Actions**  
3. Save  
4. Go to **Actions** tab → open the latest **Deploy to GitHub Pages** run → wait until green  

Your site will be public at the URL above.

### Or deploy to Vercel (custom domain, free)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mariopietri2-maker/business-dashboard-erp)

1. Click the button  
2. Sign in with GitHub  
3. Deploy — you get a `*.vercel.app` URL in ~1 minute  

(If using Vercel, you can remove `output: "export"` from `next.config.ts` for full server features later.)

---

## What's included

| Feature | Status |
|---------|--------|
| Dashboard with KPIs + charts | ✅ |
| Sales list + New Invoice form | ✅ |
| AI Assistant (Greek) | ✅ |
| Customers CRM | ✅ |
| Expenses / Products / Projects / Cash | ✅ |
| Landing page + Pricing | ✅ `/landing` |
| Mobile responsive | ✅ |
| Static deploy (GitHub Pages) | ✅ |
| Prisma schema | ✅ Ready |

---

## Local development

```bash
git clone https://github.com/mariopietri2-maker/business-dashboard-erp.git
cd business-dashboard-erp
npm install
npm run dev
```

- App: http://localhost:3000  
- Landing: http://localhost:3000/landing  
- New invoice: http://localhost:3000/sales/new  
- AI: http://localhost:3000/ai  

---

## License

MIT

Inspired by kiros.gr (NOVUS DIGITAL) — independent open-source recreation.
