# Reference: Project Structure
   This document outlines the file structure of the AURA Skincare Tracker app.

# Structure

aura-skincare-tracker-app/
├── docs/                     # Documentation
│   ├── tutorials/
│   ├── how-to/
│   ├── reference/
│   ├── explanation/
│   ├── api/
│   ├── playbooks/
│   ├── adrs/
├── public/                   # Static assets
│   ├── log-routine.jpg       # Home page feature card image
│   ├── track-mood.jpg        # Home page feature card image
│   ├── view-history.jpg      # Home page feature card image
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind CSS styles
│   │   ├── layout.js         # Root layout with navigation
│   │   ├── page.js           # Home page with feature cards
│   │   ├── dashboard/
│   │   │   ├── page.js       # Dashboard with routines and progress tracker
│   │   ├── products/
│   │   │   ├── page.js       # Product management page
│   │   ├── log/
│   │   │   ├── page.js       # Log entry form with product dropdown
│   │   ├── history/
│   │   │   ├── page.js       # Log history table
├── package.json              # Dependencies (Next.js 15.3.1, Tailwind, react-circular-progressbar)
├── tailwind.config.js        # Custom colors (skin-plum, skin-rose, skin-teal, skin-cream)
├── README.md                 # Project overview

## Key Files

src/app/layout.js: Defines navigation bar with links to all pages, styled with skin-cream (#fdf6f0).
src/app/page.js: Home page with three feature cards, each with an image (w-32 h-32).
src/app/dashboard/page.js: Displays AM/PM routines, recent activity, and a progress tracker using react-circular-progressbar.
public/: Static images for Home page feature cards.
tailwind.config.js: Defines custom colors:
skin-plum: #6f0936
skin-rose: #f4c7d3
skin-teal: #4db6ac
skin-cream: #fdf6f0



## Data Storage

LocalStorage:
skincareProducts: { id: string, name: string, status: "available" | "deleted" }
skincareLogs: { id: string, product: string, condition: string, skinMood: string, time: "AM" | "PM", timestamp: string }



   See docs/explanation/architecture.md for architectural details.
