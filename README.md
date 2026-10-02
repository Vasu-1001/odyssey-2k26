# ODYSSEY 2K26 - Anti-Gravity Symposium Website

This is the official repository for the ODYSSEY 2K26 symposium website, featuring an immersive "Anti-Gravity" theme with floating elements, 3D interactions, and a futuristic aesthetic.

## Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (for registrations)

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Database Setup**
    - Go to your Supabase project's SQL Editor.
    - Copy the contents of `supabase/schema.sql`.
    - Run the query to create the `registrations` table.

## Features
- **Hero Section**: 3D floating text and parallax effects.
- **Events Arena**: Interactive cards with details modal.
- **Registration**: Glassmorphism form connected to Supabase.
- **Committee**: Solar system style orbiting profiles.

## Customization
- **Theme**: Edit `tailwind.config.js` to change colors or animation timings.
- **Events**: Update `src/components/Events.jsx` to modify the event list.
