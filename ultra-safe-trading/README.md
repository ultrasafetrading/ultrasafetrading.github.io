# Ultra Safe Trading LLC Website

Responsive Bootstrap 5 multi-page starter website.

## Pages
- index.html — Home
- about.html — About
- services.html — Services
- products.html — Products
- blog.html — Blog
- contact.html — Contact

## Run locally
Open `index.html` in a browser. Bootstrap, Font Awesome and Google Fonts are loaded from CDNs, and photo assets use remote Unsplash image URLs, so an internet connection is needed for those resources.

## Before publishing
1. Replace the stylized text mark with your approved transparent company logo.
2. Replace starter stock photos with your own licensed company / equipment photos.
3. Connect the contact form in `contact.html` to your real form handler (the current form is a front-end demo and does not send email).
4. Update product listings and blog articles with confirmed live information.
5. Test contact details, links, mobile navigation and all pages on your hosting environment.

All shared styles are in `assets/css/style.css`; interactions are in `assets/js/main.js`.

## Latest branding update
- Added the supplied Ultra Safe symbol logo to the navigation and footer on all six pages.
- Added a branded full-screen preloader that fades away after the page loads, with a 7-second failsafe.
- Added a custom wide homepage hero visual showing a branded IT collection van, a sales representative and IT equipment.
- The generated hero artwork and supplied logo are stored locally in `assets/images/`.

## Supplier registration and enquiry popups
- Added `supplier.html` with a dedicated supplier registration form for company details, primary contact, supply categories, capacity, company profile and optional catalogue attachment.
- Added a shared Quick Enquiry modal to every page. It opens automatically once per browser session after a short delay; the header Quick Enquiry button can reopen it.
- The forms are front-end demos until connected to your preferred submission endpoint. File uploads require a secure server-side upload handler; a static HTML page cannot safely store or forward attachments by itself.

## Google Apps Script form integration
- Added jQuery 3.5.1 and the supplied Google Apps Script endpoint to all seven HTML pages.
- All enquiry and supplier forms now submit serialized form fields by AJAX POST to the configured endpoint.
- Each page's first form uses `id="submit-form"`; additional forms on the same page use unique IDs to avoid invalid duplicate IDs.
- On success, the requested confirmation alert appears and the page reloads; on error, the requested error alert appears.
- Note: jQuery `serialize()` does not transmit file attachments. The optional supplier catalogue/profile file input is not uploaded by this implementation and requires a separate secure upload handler if file uploads are needed.


## Latest update — About, Blog, Mobile & SEO
- Redesigned English and Arabic About pages with responsive editorial hero, company overview, working principles and contact CTA.
- Redesigned English and Arabic Blog pages with featured article cards, topic links and three expanded practical guides.
- Added page-specific SEO titles, descriptions, Twitter sharing metadata and basic AboutPage/Blog structured data.
- Added responsive layouts, accessible anchor links, image lazy-loading for below-the-fold content and reduced-motion support.
- Review all company-specific claims and replace generic social profile links with official account URLs before publishing.
