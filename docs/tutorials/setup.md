# Tutorial: Setting Up AURA Skincare Tracker
   This tutorial guides you through setting up the AURA Skincare Tracker app on your local machine.

## Prerequisites

Node.js: Version 18.x or higher.
Git: For cloning the repository.
Code Editor: VS Code recommended.
Terminal: Command Prompt, PowerShell, or similar.

## Steps
1. Clone the Repository
   Open your terminal and run:
git clone https://github.com/your-username/aura-skincare-tracker-app.git
cd aura-skincare-tracker-app

2. Install Dependencies
   Install Next.js, Tailwind CSS, and other dependencies:
npm install

3. Verify Project Structure
   Ensure the following files exist:

src/app/page.js: Home page with feature cards.
src/app/layout.js: Navigation bar.
src/app/products/page.js: Product management.
src/app/log/page.js: Log entry form.
src/app/dashboard/page.js: Dashboard with progress tracker.
src/app/history/page.js: Log history table.
public/: Contains log-routine.jpg, track-mood.jpg, view-history.jpg.

4. Run the App
   Start the development server:
npm run dev

   Open http://localhost:3000 in your browser. You should see the Home page with three feature cards in skin-cream (#fdf6f0) and skin-plum (#6f0936) text.
5. Test Navigation
   Click the navigation links (Home, Dashboard, Products, Log, History) to ensure they work.

## Next Steps

Follow the "First Log" tutorial to create your first skincare log.
Explore docs/how-to/ for task-specific guides.

   If you encounter errors, check docs/playbooks/ for troubleshooting.
