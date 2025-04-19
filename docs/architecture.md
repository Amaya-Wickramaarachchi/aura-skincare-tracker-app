# System Architecture
## C4 Model
- Context: Users access AURA via browser, hosted on Vercel.
- Container: Next.js app with local storage, deployed on Vercel.
- Component: Home, Log Form, History Page.
![Context Diagram](./diagrams/context.png)
## Technology Choices
- Next.js: Simplifies React development, supports static sites, beginner-friendly.
- Vercel: Zero-config deployment, free tier, built for Next.js.
- Local Storage: No database to reduce complexity for MVP.
- HTML/CSS/JS: Leverages existing skills.
- Scalability: Vercel handles traffic spikes; local storage limits scale but suits MVP.
- Cost: Free tier for all tools.
## Infrastructure
- Vercel manages infrastructure; `vercel.json` configures routing and caching.
## Security
- HTTPS: Automatic via Vercel.
- Data: Stored in browser’s local storage, no server-side data.
- Compliance: No user data collected, GDPR not applicable for MVP.