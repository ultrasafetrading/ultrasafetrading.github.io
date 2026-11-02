(() => {
 const header = document.getElementById('site-header');
 const footer = document.getElementById('site-footer');
 const modalHost = document.getElementById('global-modal');
 const path = location.pathname.split('/').pop() || 'index.html';
 const navItems = [['Home','index.html'],['About','about.html'],['Services','services.html'],['Blog','blog.html'],['Contact','contact.html']];
 const serviceLinks=[['Computers & Laptops','computers-laptops.html','bi-laptop'],['Servers & Networking','servers-networking.html','bi-hdd-rack'],['Mobile Phones & Tablets','mobile-devices.html','bi-phone'],['Printers & Scanners','printers-scanners.html','bi-printer'],['Monitors & TVs','monitors-tvs.html','bi-display'],['Hard Drives & Storage','storage-devices.html','bi-device-ssd'],['CPU & Components','cpu-components.html','bi-cpu'],['Camera Scrap','camera-scrap.html','bi-camera'],['Photocopiers','photocopier-scrap.html','bi-printer-fill'],['UPS & Office Electronics','office-electronics.html','bi-lightning-charge'],['Network Switches','network-switches.html','bi-router'],['Mixed E-Waste','e-waste.html','bi-recycle']];
if(header) header.innerHTML=`<nav class="navbar navbar-expand-lg site-nav"><div class="container"><a class="navbar-brand" href="index.html"><img src="assets/logo.jpg" alt="Ultra Safe Trading LLC"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav ms-auto align-items-lg-center"><li class="nav-item"><a class="nav-link" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link" href="about.html">About</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="services.html" data-bs-toggle="dropdown" aria-expanded="false">Services</a><div class="dropdown-menu service-mega"><div class="service-mega-head"><b>All Services</b><a href="services.html">View overview →</a></div><div class="service-mega-grid">${serviceLinks.map(([n,u,ic])=>`<a href="${u}" class="service-mega-link"><i class="bi ${ic}"></i><span>${n}</span></a>`).join('')}</div></div></li><li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li><li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li><li class="nav-item"><a class="nav-link" href="ar/index.html" lang="ar" dir="rtl">العربية</a></li><li class="nav-item"><a class="nav-link nav-cta" href="contact.html">Sell Your IT Scrap <i class="bi bi-arrow-up-right ms-1"></i></a></li></ul></div></div></nav>`;
 if (footer) footer.innerHTML = `<footer class="site-footer"><div class="container"><div class="row g-4"><div class="col-lg-4"><img class="footer-logo" src="assets/logo.jpg" alt="Ultra Safe Trading LLC"><p>IT scrap buying and surplus equipment solutions for businesses and individuals across the United Arab Emirates.</p><p><i class="bi bi-geo-alt me-2"></i>M37, Musaffah, Abu Dhabi, UAE</p></div><div class="col-6 col-lg-2"><h4>Quick Links</h4><ul>${navItems.map(([n,u])=>`<li><a href="${u}">${n}</a></li>`).join('')}</ul></div><div class="col-6 col-lg-3"><h4>What We Buy</h4><ul><li><a href="services.html#computers">Computers & Laptops</a></li><li><a href="services.html#servers">Servers & Networking</a></li><li><a href="services.html#mobile">Mobile Devices</a></li><li><a href="services.html#printers">Printers & Photocopiers</a></li><li><a href="services.html#storage">Storage & Components</a></li></ul></div><div class="col-lg-3"><h4>Get in Touch</h4><ul><li><a href="tel:+971547865428">+971 54 786 5428</a></li><li><a href="tel:+971505490721">+971 50 549 0721</a></li><li><a href="mailto:info@ultrasafetrading.com">info@ultrasafetrading.com</a></li><li><a href="https://www.ultrasafetrading.com">www.ultrasafetrading.com</a></li></ul><a class="btn btn-outline-light btn-sm" href="contact.html">Send an Enquiry</a></div></div><div class="footer-bottom"><span>© <span id="year"></span> Ultra Safe Trading LLC. All rights reserved.</span><span>IT Scrap Buyer · United Arab Emirates</span></div></div></footer>`;
 if (modalHost) modalHost.innerHTML = `<div class="modal fade" id="enquiryModal" tabindex="-1" aria-labelledby="enquiryTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header modal-header-brand"><div><span class="eyebrow mb-1">ULTRA SAFE TRADING LLC</span><h5 class="modal-title fw-bold" id="enquiryTitle">Let’s evaluate your IT equipment</h5></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p>Share a few details and our team can contact you about the equipment, quantity and location.</p><form id="submit-form"><div class="mb-3"><label class="form-label" for="popName">Your name</label><input class="form-control" id="popName" name="name" required></div><div class="mb-3"><label class="form-label" for="popPhone">Phone / WhatsApp</label><input class="form-control" id="popPhone" name="phone" required></div><div class="mb-3"><label class="form-label" for="popCategory">Equipment category</label><select class="form-select" id="popCategory" name="category"><option>Computers & Laptops</option><option>Servers & Networking</option><option>Mobile Devices</option><option>Printers & Scanners</option><option>Mixed IT Scrap / E-Waste</option><option>Other</option></select></div><div class="mb-3"><label class="form-label" for="popItems">Equipment details & quantity</label><textarea class="form-control" id="popItems" name="details" rows="3" required placeholder="e.g. 10 laptops, 2 servers; working / scrap condition..."></textarea></div><button class="btn btn-brand w-100" type="submit">Submit Enquiry <i class="bi bi-arrow-right ms-2"></i></button></form></div></div></div></div>`;
 const actionWrap = document.createElement('div');
 actionWrap.innerHTML = `<div class="floating-actions"><a class="float-btn float-whatsapp" href="https://wa.me/971547865428?text=Hello%20Ultra%20Safe%20Trading%2C%20I%20would%20like%20to%20sell%20IT%20scrap." target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a><a class="float-btn float-call" href="tel:+971547865428" aria-label="Call Ultra Safe Trading"><i class="bi bi-telephone-fill"></i></a></div><button id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
 document.body.appendChild(actionWrap);
 const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();
 const loader = document.getElementById('site-preloader');
 const hideLoader = () => { if(loader) loader.classList.add('hide'); };
 window.addEventListener('load', () => setTimeout(hideLoader, 350)); setTimeout(hideLoader, 2500);
 const topBtn = document.getElementById('backToTop');
 window.addEventListener('scroll', () => { if(topBtn) topBtn.classList.toggle('show', window.scrollY > 450); });
 if(topBtn) topBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
 // Popup is available on every page; show once per browser session after a short delay.
 if (path !== 'contact.html' && !sessionStorage.getItem('ustPopupSeen')) {
   setTimeout(() => { const el = document.getElementById('enquiryModal'); if(el && window.bootstrap) { bootstrap.Modal.getOrCreateInstance(el).show(); sessionStorage.setItem('ustPopupSeen','1'); } }, 14000);
 }

 // Send popup and contact enquiries to the configured Google Apps Script endpoint.
 if (window.jQuery) {
   $('#submit-form, #contactForm').on('submit', function(e) {
     e.preventDefault();
     const $form = $(this);
     const $button = $form.find('[type="submit"]');
     const originalText = $button.html();
     $button.prop('disabled', true).text('Sending...');
     $.ajax({
       url: 'https://script.google.com/macros/s/AKfycbznOBkqbRiVGUHH_wJGmwOlo7PvCSRQEqnGoXboBgbbY3qKkNhH9ZVgpmcyNO1MqwcSsw/exec',
       data: $form.serialize(),
       method: 'POST',
       success: function(response) {
         alert('Our sales team will contact you shortly. Thank you!');
         window.location.reload();
       },
       error: function(err) {
         alert('Something went wrong. Please try again or contact us by phone.');
         $button.prop('disabled', false).html(originalText);
       }
     });
   });
 }
})();