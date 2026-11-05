
window.addEventListener('load',()=>{
  const loader=document.getElementById('site-preloader');
  if(loader){setTimeout(()=>loader.classList.add('is-hidden'),350);}
});
document.addEventListener('DOMContentLoaded',()=>{
  // Offer a quick enquiry popup once per browsing session; the header button can reopen it anytime.
  const popup=document.getElementById('globalEnquiryModal');
  if(popup && !sessionStorage.getItem('ustEnquiryPopupShown')){
    setTimeout(()=>{
      if(!sessionStorage.getItem('ustEnquiryPopupShown') && window.bootstrap){
        bootstrap.Modal.getOrCreateInstance(popup).show();
        sessionStorage.setItem('ustEnquiryPopupShown','1');
      }
    },9000);
  }
  if(popup){popup.addEventListener('show.bs.modal',()=>sessionStorage.setItem('ustEnquiryPopupShown','1'));}

  const loader=document.getElementById('site-preloader');
  if(loader){setTimeout(()=>loader.classList.add('is-hidden'),7000);}
  const year=document.querySelectorAll('.year'); year.forEach(x=>x.textContent=new Date().getFullYear());
  document.querySelectorAll('form[data-demo-form]').forEach(form=>{
    form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
      const msg=form.querySelector('.form-message'); if(msg){msg.classList.remove('d-none');msg.textContent='Thank you! Your enquiry has been received. Please connect your preferred form service to receive submissions.';}
      form.reset();
    });
  });
  const top=document.querySelector('.backtop'); if(top){top.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});}
});
