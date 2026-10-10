// Progressive enhancement: image links work even without JavaScript.
(()=>{
 const dialog=document.getElementById('printPhotoDialog');
 if(!dialog||typeof dialog.showModal!=='function')return;
 const projects=JSON.parse(document.getElementById('printGalleryData').textContent);
 const image=dialog.querySelector('#photoDialogImage'),caption=dialog.querySelector('#photoDialogCaption');
 const thumbs=dialog.querySelector('.photo-thumbnails'),error=dialog.querySelector('.photo-error');
 let project,index=0,opener=null;
 const showPhoto=i=>{
  index=(i+project.photos.length)%project.photos.length;
  const photo=project.photos[index];
  error.hidden=true;image.hidden=false;image.alt=photo.alt;image.src=photo.src;
  dialog.querySelector('#photoFallback').href=photo.src;
  caption.textContent=photo.note;
  dialog.querySelector('#photoDialogCounter').textContent=`${index+1} / ${project.photos.length}`;
  thumbs.querySelectorAll('button').forEach((button,n)=>button.setAttribute('aria-pressed',String(n===index)));
 };
 image.addEventListener('error',()=>{error.hidden=false;image.hidden=true;});
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-gallery]');
  if(!link||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
  const selected=projects.find(p=>p.id===link.dataset.gallery);if(!selected)return;
  event.preventDefault();project=selected;opener=link;
  dialog.querySelector('#photoDialogTitle').textContent=project.title;
  thumbs.replaceChildren(...project.photos.map((photo,n)=>{
   const button=document.createElement('button');button.type='button';
   button.setAttribute('aria-label',`Photo ${n+1}: ${photo.alt}. ${photo.note}`);
   const thumbnail=document.createElement('img');thumbnail.src=photo.thumb;thumbnail.alt='';thumbnail.width=72;thumbnail.height=60;
   button.append(thumbnail);button.addEventListener('click',()=>showPhoto(n));return button;
  }));
  showPhoto(0);dialog.showModal();document.documentElement.classList.add('photo-dialog-open');
 });
 dialog.querySelector('.photo-close').addEventListener('click',()=>dialog.close());
 dialog.querySelector('[data-photo-prev]').addEventListener('click',()=>showPhoto(index-1));
 dialog.querySelector('[data-photo-next]').addEventListener('click',()=>showPhoto(index+1));
 dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
   event.preventDefault();showPhoto(index+(event.key==='ArrowRight'?1:-1));
  }
 });
 dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return;
  const r=dialog.getBoundingClientRect();
  if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();
 });
 dialog.addEventListener('close',()=>{
  document.documentElement.classList.remove('photo-dialog-open');
  opener?.focus({preventScroll:true});
 });
})();
