document.addEventListener('DOMContentLoaded',function(){
    fixedNav();
    makeGallery();
    highlightLink();
    scrollNav();
})

function fixedNav(){
    const header =document.querySelector('.header');
    const aboutFestival = document.querySelector('.about-festival');

    document.addEventListener('scroll', function() {
        if(aboutFestival.getBoundingClientRect().bottom < .5){
            header.classList.add('fixed');
        }
        else{
            header.classList.remove('fixed');
        }
    })
}

function makeGallery(){
    const IMAGE_COUNT = 16;
    const gallery = document.querySelector('.gallery-images');

    for(let i=1; i <= IMAGE_COUNT; i++){
        const image = document.createElement('IMG');
        image.loading = 'lazy';
        image.width = "300";
        image.heigth = "200";
        image.src = `src/img/gallery/full/${i}.jpg`;
        image.alt = 'Gallery image';
        // Event Handler
        image.onclick = function () {
            showImage(i);
        }
        gallery.appendChild(image);
    }
}

function showImage(i){
    const image = document.createElement('IMG');
    image.src = `src/img/gallery/full/${i}.jpg`;
    image.alt = 'Gallery image';
    
    //create modal
    const modal = document.createElement('DIV');    
    modal.classList.add('modal');
    modal.onclick = closeModal;
    
    // close modal button
    const closeModalBtn = document.createElement('BUTTON');
    closeModalBtn.textContent = 'X';
    closeModalBtn.classList.add('btn-close');
    closeModalBtn.onclick = closeModal;
    
    modal.appendChild(image);
    modal.appendChild(closeModalBtn);

    //add to HTML
    const body = document.querySelector('body');
    body.appendChild(modal);
    body.classList.add('overflow-hidden');

    console.log(modal)

}

function closeModal(){
    const modal = document.querySelector('.modal');
    
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    },500);
}

function highlightLink(){
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.main-nav a')

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight /3)) {
                current = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href')==='#'+current){
                link.classList.add('active');
            }
        })
    })
}

function scrollNav(){
    const navlinks = document.querySelectorAll('.main-nav a');
    navlinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior:'smooth'});
        })
    })
}