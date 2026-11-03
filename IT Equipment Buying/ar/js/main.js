(() => {
 const p=location.pathname.split('/').pop()||'index.html';
 const header=document.getElementById('site-header'),footer=document.getElementById('site-footer'),modalHost=document.getElementById('global-modal');
 const nav=[['الرئيسية','index.html'],['من نحن','about.html'],['الخدمات','services.html'],['المدونة','blog.html'],['اتصل بنا','contact.html']];
 const svcs=[["أجهزة الكمبيوتر واللابتوب", "computers-laptops.html", "bi-laptop"], ["الخوادم ومعدات الشبكات", "servers-networking.html", "bi-hdd-rack"], ["الهواتف المحمولة والأجهزة اللوحية", "mobile-devices.html", "bi-phone"], ["الطابعات والماسحات الضوئية", "printers-scanners.html", "bi-printer"], ["الشاشات وأجهزة التلفزيون", "monitors-tvs.html", "bi-display"], ["الأقراص الصلبة وأجهزة التخزين", "storage-devices.html", "bi-device-ssd"], ["المعالجات ومكونات الكمبيوتر", "cpu-components.html", "bi-cpu"], ["خردة الكاميرات", "camera-scrap.html", "bi-camera"], ["خردة آلات التصوير", "photocopier-scrap.html", "bi-printer-fill"], ["إلكترونيات المكاتب وأنظمة UPS", "office-electronics.html", "bi-lightning-charge"], ["مبدلات الشبكة", "network-switches.html", "bi-router"], ["الخردة الإلكترونية والنفايات الإلكترونية", "e-waste.html", "bi-recycle"]];
 if(header) header.innerHTML=`<nav class="navbar navbar-expand-lg site-nav" dir="rtl"><div class="container"><a class="navbar-brand" href="index.html" aria-label="الرئيسية - ألترا سيف"><img src="assets/logo.png" alt="شعار شركة ألترا سيف للتجارة ذ.م.م"></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#arMainNav" aria-label="فتح القائمة"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="arMainNav"><ul class="navbar-nav me-auto align-items-lg-center"><li class="nav-item"><a class="nav-link" href="index.html">الرئيسية</a></li><li class="nav-item"><a class="nav-link" href="about.html">من نحن</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle services-nav-toggle" href="services.html" data-bs-toggle="dropdown" aria-expanded="false">الخدمات</a><div class="dropdown-menu service-mega"><div class="service-mega-head"><b>جميع الخدمات</b><a href="services.html">عرض الكل ←</a></div><div class="service-mega-grid">${svcs.map(([n,u,ic])=>`<a href="${u}" class="service-mega-link"><i class="bi ${ic}"></i><span>${n}</span></a>`).join('')}</div></div></li><li class="nav-item"><a class="nav-link" href="blog.html">المدونة</a></li><li class="nav-item"><a class="nav-link" href="contact.html">اتصل بنا</a></li><li class="nav-item"><a class="nav-link nav-cta" href="contact.html">اعرض معداتك للبيع <i class="bi bi-arrow-up-left me-1"></i></a></li><li class="nav-item dropdown language-menu"><button class="nav-link dropdown-toggle language-trigger" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="اختيار اللغة"><i class="bi bi-globe2"></i> <span>العربية</span></button><ul class="dropdown-menu language-options"><li><span class="dropdown-item active" aria-current="true">العربية <i class="bi bi-check2"></i></span></li><li><a class="dropdown-item" href="../${location.pathname.split('/').pop() || 'index.html'}" lang="en" dir="ltr">English</a></li></ul></li></ul></div></div></nav>`;

 // Close the expanded mobile navigation after selecting a destination.
 if (header) {
   const navCollapse = header.querySelector('#arMainNav');
   header.querySelectorAll('#arMainNav a.nav-link:not(.services-nav-toggle), #arMainNav .service-mega-link, #arMainNav .service-mega-head a').forEach(link => {
     link.addEventListener('click', () => {
       if (navCollapse && navCollapse.classList.contains('show') && window.bootstrap) {
         window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
       }
     });
   });
 }
 if(footer) footer.innerHTML=`<footer class="site-footer" dir="rtl"><div class="container"><div class="row g-4"><div class="col-lg-4"><img class="footer-logo" src="assets/logo.png" alt="ألترا سيف للتجارة ذ.م.م"><p>شراء خردة تقنية المعلومات والمعدات الإلكترونية الفائضة للشركات والأفراد في جميع أنحاء دولة الإمارات العربية المتحدة.</p><p><i class="bi bi-geo-alt ms-2"></i>M37، مصفح، أبوظبي، الإمارات</p></div><div class="col-6 col-lg-2"><h4>روابط سريعة</h4><ul>${nav.map(([n,u])=>`<li><a href="${u}">${n}</a></li>`).join('')}</ul></div><div class="col-6 col-lg-3"><h4>ما الذي نشتريه؟</h4><ul>${svcs.slice(0,6).map(([n,u])=>`<li><a href="${u}">${n}</a></li>`).join('')}</ul></div><div class="col-lg-3"><h4>تواصلوا معنا</h4><ul><li><a href="tel:+971547865428" dir="ltr">+971 54 786 5428</a></li><li><a href="tel:+971505490721" dir="ltr">+971 50 549 0721</a></li><li><a href="mailto:info@ultrasafetrading.com">info@ultrasafetrading.com</a></li><li><a href="mailto:ultrasafetrading@gmail.com">ultrasafetrading@gmail.com</a></li><li><a href="https://www.ultrasafetrading.com">www.ultrasafetrading.com</a></li></ul><a class="btn btn-outline-light btn-sm" href="contact.html">أرسلوا استفساراً</a><div class="footer-social"><h4>تابعونا</h4><div class="footer-social-links"><a href="https://www.instagram.com/ultrasafetrading/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="https://ae.linkedin.com/company/ultra-safe-trading-llc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a><a href="https://www.facebook.com/ultrasafetradingllc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="https://www.x.com/ustradeae/" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="bi bi-twitter-x"></i></a></div></div></div></div><div class="footer-bottom"><span>© <span id="year"></span> ألترا سيف للتجارة ذ.م.م. جميع الحقوق محفوظة.</span><span>شراء خردة تقنية المعلومات · الإمارات العربية المتحدة</span></div></div></footer>`;
 if(modalHost) modalHost.innerHTML=`<div class="modal fade ar-lead-modal" id="arLeadModal" tabindex="-1" aria-labelledby="arLeadTitle" aria-hidden="true" dir="rtl"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="ar-modal-top"><div class="ar-modal-mark"><i class="bi bi-recycle"></i></div><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="إغلاق"></button><span class="ar-modal-kicker">ألترا سيف للتجارة ذ.م.م</span><h2 id="arLeadTitle">هل لديكم معدات تقنية ترغبون في بيعها؟</h2><p>أرسلوا التفاصيل الأساسية، وسنساعدكم في الخطوة التالية.</p><div class="ar-modal-benefits"><span><i class="bi bi-check-circle"></i> طلبات الأفراد والشركات</span><span><i class="bi bi-check-circle"></i> جميع إمارات الدولة</span></div></div><div class="modal-body p-4 p-lg-5"><form id="submit-form"><div class="row g-3"><div class="col-md-6"><label class="form-label" for="leadName">الاسم الكامل *</label><input class="form-control" id="leadName" name="name" autocomplete="name" required placeholder="اكتبوا الاسم"></div><div class="col-md-6"><label class="form-label" for="leadPhone">رقم الهاتف / واتساب *</label><input class="form-control" id="leadPhone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="+971"></div><div class="col-md-6"><label class="form-label" for="leadEmirate">الإمارة</label><select class="form-select" id="leadEmirate" name="emirate"><option>أبوظبي</option><option>دبي</option><option>الشارقة</option><option>عجمان</option><option>أم القيوين</option><option>رأس الخيمة</option><option>الفجيرة</option></select></div><div class="col-md-6"><label class="form-label" for="leadCategory">نوع المعدات</label><select class="form-select" id="leadCategory" name="category">${svcs.map(([n])=>`<option>${n}</option>`).join('')}<option>معدات متنوعة / أخرى</option></select></div><div class="col-12"><label class="form-label" for="leadDetails">الكمية والتفاصيل والحالة *</label><textarea class="form-control" id="leadDetails" name="details" rows="3" required placeholder="مثال: 15 جهاز لابتوب، ماركة Dell، مستعملة وتعمل..."></textarea></div><div class="col-12"><button class="btn btn-brand btn-lg w-100" type="submit"><i class="bi bi-whatsapp ms-2"></i> متابعة وإرسال عبر واتساب</button><small class="d-block text-secondary mt-3 text-center">ستفتح نافذة واتساب برسالة جاهزة لمراجعتها وإرسالها. لن يتم إرسال البيانات دون موافقتكم.</small></div></div></form><div class="ar-modal-contact"><span>تفضلون الاتصال؟</span><a href="tel:+971547865428" dir="ltr">+971 54 786 5428</a><a href="mailto:info@ultrasafetrading.com">info@ultrasafetrading.com</a></div></div></div></div></div>`;
 const actions=document.createElement('div');actions.innerHTML=`<div class="floating-actions" dir="ltr"><a class="float-btn float-whatsapp" href="https://wa.me/971547865428?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A8%D9%8A%D8%B9%20%D9%85%D8%B9%D8%AF%D8%A7%D8%AA%20%D8%AA%D9%82%D9%86%D9%8A%D8%A9." target="_blank" rel="noopener" aria-label="واتساب"><i class="bi bi-whatsapp"></i></a><a class="float-btn float-call" href="tel:+971547865428" aria-label="اتصل بنا"><i class="bi bi-telephone-fill"></i></a></div><button id="backToTop" aria-label="العودة إلى الأعلى"><i class="bi bi-arrow-up"></i></button>`;document.body.appendChild(actions);
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const loader=document.getElementById('site-preloader');const hide=()=>{if(loader)loader.classList.add('hide')};window.addEventListener('load',()=>setTimeout(hide,250));setTimeout(hide,2200);
 const top=document.getElementById('backToTop');window.addEventListener('scroll',()=>{if(top)top.classList.toggle('show',window.scrollY>400)});if(top)top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 if(p!=='contact.html'&&!sessionStorage.getItem('ustArPopupSeen'))setTimeout(()=>{const el=document.getElementById('arLeadModal');if(el&&window.bootstrap){bootstrap.Modal.getOrCreateInstance(el).show();sessionStorage.setItem('ustArPopupSeen','1')}},18000);

 // Send Arabic popup and contact enquiries to the configured Google Apps Script endpoint.
 if (window.jQuery) {
   $('#submit-form, #arContactForm').on('submit', function(e) {
     e.preventDefault();
     const $form = $(this);
     const $button = $form.find('[type="submit"]');
     const originalText = $button.html();
     $button.prop('disabled', true).text('جارٍ إرسال الطلب...');
     $.ajax({
       url: 'https://script.google.com/macros/s/AKfycbznOBkqbRiVGUHH_wJGmwOlo7PvCSRQEqnGoXboBgbbY3qKkNhH9ZVgpmcyNO1MqwcSsw/exec',
       data: $form.serialize(),
       method: 'POST',
       success: function(response) {
         alert('شكراً لكم! سيتواصل معكم فريق المبيعات قريباً.');
         window.location.reload();
       },
       error: function(err) {
         alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا هاتفياً.');
         $button.prop('disabled', false).html(originalText);
       }
     });
   });
 }

 // Accessible scroll reveals and gentle staggered entrance for repeated content.
 if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
   const revealTargets = document.querySelectorAll(
     'main section, .service-card, .value-card, .process-card, .detail-service, .blog-card, .hero-card, .cta-panel, .contact-info > div, .site-footer .container > .row > [class*="col-"]'
   );
   revealTargets.forEach((el, index) => {
     if (el.closest('.hero-slider, .carousel, #site-preloader')) return;
     el.classList.add('reveal-item');
     if (el.matches('.contact-info > div')) el.style.transitionDelay = `${(index % 4) * 65}ms`;
   });
   document.documentElement.classList.add('motion-ready');
   const revealObserver = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('is-visible');
         observer.unobserve(entry.target);
       }
     });
   }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
   revealTargets.forEach(el => { if (el.classList.contains('reveal-item')) revealObserver.observe(el); });
 }

})();