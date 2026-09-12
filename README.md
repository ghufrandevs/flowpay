# FlowPay

A responsive single-page landing page built with Angular and SCSS for FlowPay, a fictional digital payment platform.

The project focuses on a clean and modern user interface, reusable Angular components, responsive layouts, accessible interactions, and maintainable code structure.

## Tech Stack

* Angular
* TypeScript
* SCSS
* HTML5
* RxJS
* `@lucide/angular`
* Google Fonts

  * Outfit for body text
  * Cairo for headings

## Requirements

* Node.js
* npm
* Angular CLI

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone <your-repo-url>
cd flowpay
```

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Open the application in your browser at:

```text
http://localhost:4200/
```

## 📁 Project Structure

The application is organized into reusable standalone Angular components and shared directives, grouped by feature and responsibility.

```text
src/
├── app/
│   ├── features/
│   │   └── landing/
│   │       ├── landing.ts
│   │       ├── landing.html
│   │       ├── landing.scss
│   │       └── sections/
│   │           ├── hero/
│   │           ├── about/
│   │           ├── services/
│   │           ├── statistics/
│   │           ├── how-it-works/
│   │           ├── faq/
│   │           └── contact/
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── service-card/
│   │   │   ├── step-card/
│   │   │   └── faq-item/
│   │   │
│   │   ├── directives/
│   │   │   ├── scroll-reveal.ts
│   │   │   └── animated-counter.ts
│   │   │
│   │   └── utils/
│   │       └── scroll.ts
│   │
│   ├── core/
│   │   └── models/
│   │       └── TypeScript interfaces for application data
│   │
│   ├── data/
│   │   └── Static data source
│   │
│   ├── app.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── assets/
└── styles.scss
```


## Key Design Decisions

| Decision                                                          | Reason                                                                                                                                |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Standalone Components, no NgModules                               | Required by the assignment and aligned with the current Angular approach.                                                             |
| SCSS with CSS custom properties                                   | Provides centralized design tokens for recurring colors, border radii, and transitions while keeping component styles maintainable.   |
| `@lucide/angular` for icons                                       | Provides a lightweight icon solution without introducing a full UI framework.                                                         |
| Static data imported directly                                     | The data is static according to the assignment, so introducing a service or API layer would be unnecessary abstraction at this stage. |
| `ScrollReveal` and `AnimatedCounter` as directives                | Shared behavior is implemented once and reused across sections instead of duplicating `IntersectionObserver` logic.                   |
| `scrollToSection()` extracted to a shared utility                 | Header and footer use the same scrolling behavior, so the logic is centralized instead of duplicated.                                 |
| Reactive Forms                                                    | Provides structured validation and a scalable approach for handling the contact form.                                                 |
| Shared contact modal state through the parent `Landing` component | Multiple sections need to open the same modal, so the shared state is handled at their common parent.                                 |

## Third-Party Libraries

### @lucide/angular

Used for interface icons throughout the application.

### Google Fonts

* Outfit for body text
* Cairo for headings

No CSS frameworks such as Bootstrap or Tailwind were used, and no state-management library was required.

## Bonus Features

The following features were implemented beyond the core landing-page requirements:

* FAQ section with an animated accordion.
* Scroll-reveal animations using a reusable `ScrollReveal` directive and `IntersectionObserver`.
* Animated statistics counters triggered when the section enters the viewport.
* Contact form displayed inside a modal and accessible from multiple sections.
* Modal accessibility using `role="dialog"`, `aria-modal`, `aria-labelledby`, Escape-key handling, and automatic focus on the first field.
* Visually hidden labels for form fields to support screen-reader users while maintaining the visual design.
* Hover interactions on cards and buttons.
* Responsive mobile navigation with `aria-expanded` and `aria-label`.
* CSS custom properties used as centralized design tokens.
* Optimized image assets where appropriate to reduce unnecessary file size.

## Assumptions & Limitations

* **"Get in Touch" instead of "Get Started"**: Since the application has no authentication or account system, the primary CTA opens the contact modal rather than implying a sign-up flow.

* **Single-page anchor navigation**: Navigation links use real `href="#section"` anchors and smoothly scroll to sections on the same page instead of using Angular Router. This matches the assignment's single-page landing-page requirement.

* **Contact form does not submit to a backend**: No backend or API integration was implemented because it is outside the assignment scope. Submitting a valid form displays a success message.

* **Placeholder contact details**: The email, phone number, and address shown in the footer are illustrative because no real company contact information was provided.

* **Placeholder social media links**: The X, LinkedIn, and Instagram icons in the footer link to the platforms' general homepages, as no real company social media accounts were provided.

* **Typography**: `Cairo` and `Outfit` were selected from Google Fonts to provide a clean, modern visual style.

* **Unit tests were not included**: Automated tests were not required by the assignment. The implementation focuses on the requested UI, interactions, responsiveness, accessibility, and reusable Angular patterns.

* **Modal focus management**: Focus moves into the modal when it opens and the Escape key closes it. A full focus trap preventing Tab from leaving the modal was not implemented to keep the solution proportional to the assignment scope.

## Responsive Testing

The interface was manually tested across the main responsive breakpoints.

### Desktop

1320px and above

* Full desktop navigation
* Multi-column layouts
* Full hero layout
* Service and statistics grids

### Tablet

900px to 968px

* Adjusted grid layouts
* Stacked hero section
* Responsive spacing and typography
* Responsive navigation behavior

### Mobile

600px to 768px and below

* Single-column layouts
* Hamburger navigation
* Responsive typography and spacing
* Mobile-friendly contact modal and form
* Responsive services, FAQ, and statistics sections

## Code Quality & Maintainability

The project emphasizes:

* Reusable standalone Angular components
* Reusable directives for shared behavior
* Centralized CSS custom properties
* SCSS component styling
* Shared utility functions
* Semantic HTML
* Responsive design
* Accessible interactive elements
* Minimal third-party dependencies
* Avoiding unnecessary abstraction for static requirements
