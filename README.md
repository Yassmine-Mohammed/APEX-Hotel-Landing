# APEX Hotel — Luxury Hotel Landing Page

> 🎓 Final Project — **Web Design Scholarship, NTI (National Telecommunication Institute)**

A fully interactive, single-page landing site for a fictional five-star hotel in Cairo. Built from scratch with plain HTML, CSS and JavaScript (no frameworks) as the capstone project for the NTI Web Design track.

---

## ✨ Features

- **Hero section** with a full-screen background video, animated star rating and CTA buttons
- **Live availability booking form** — check-in/check-out date validation, guests, room type & promo code
- **Rooms & Suites carousel** — three categories (Suites, Deluxe, Standard) with a room detail modal showing price, size, bed type, view and amenities
- **Services section** with full-bleed photo cards (Fine Dining, Infinity Pool, Luxury Spa, Concierge, Events & Weddings, Fitness & Wellness)
- **Photo gallery** with hover zoom and a lightbox for full-size viewing
- **Trust strip** with animated counters (rating, awards)
- **Guest testimonials**
- **Contact form** with full client-side validation
- **Responsive navigation** with a mobile hamburger menu
- Scroll-reveal animations, scroll progress bar and a back-to-top button
- Fully responsive layout (desktop, tablet, mobile)

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (CSS variables), CSS Grid & Flexbox, no framework beyond Bootstrap's grid/carousel utilities
- **Bootstrap 5** — carousel component
- **Vanilla JavaScript** — form validation, IntersectionObserver-based scroll reveal, navbar behavior, no external JS libraries

## 📁 Project Structure

```
apex-hotel/
├── Apex-Hotel.html        # Main page
├── Style.css               # All styling
├── JavascriptFile.js       # Form validation, navbar, scroll reveal
├── css/
│   └── bootstrap.min.css
├── js/
│   └── bootstrap.bundle.min.js
├── videos/
│   └── hero-background.mp4
└── images/
    ├── rooms/               # Suite & room photos
    ├── services/             # Service card photos
    └── gallery/               # Gallery section photos
```

## 🚀 Getting Started

No build step required — it's a static site.

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/apex-hotel.git
   ```
2. Open `Apex-Hotel.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```
3. Make sure the `images/`, `videos/`, `css/` and `js/` folders sit alongside the HTML file with the paths referenced in the code.

## 📌 Notes

- This project was built as the final deliverable for the **NTI Web Design Scholarship**, applying HTML, CSS and JavaScript fundamentals learned throughout the program.
- All hotel content (name, pricing, testimonials) is fictional and created for demonstration purposes.

## 👤 Author

**Yassmine**
Frontend Developer & Digital Creative

---

## 📄 License

This project is open for educational and portfolio use.
