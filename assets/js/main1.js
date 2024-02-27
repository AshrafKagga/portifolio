/**
 * Template Name: Portifolio
 * Author: ASHRAFK.
 */
(function(){
    "use strict";
    /**
     * Easy slector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        }else{
            return document.querySelector(el)
        }
    }
     /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => bare.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
    /**
     * Easy on scoll event listener
     */
    const onscoll = (el, listener) => {
        el.addEventlistener('scroll', listener)
    }
    /**
     * Nabar links active state on scoll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () =>{
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            }else{
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscoll(document, navbarlinksActive)

    /**
     * scroll on ana elemnet with a header offset
     */
    const scroll = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elemnetPos - offset,
            behavior: 'smooth'
        })
    }

    /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
        } else {
            selectHeader.classList.remove('header-scrolled')
        }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * mobile navbar toggle
     */
    on('click', '.mobile-nav-toggle', function(e){
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classlist.toggle('bi-x')
    })

    /**
     * mobile nav dropdown activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if(select('#navbar').classList.contains('navbar-mobile')){
        e.preventDefualt()
        this.nextElementSibling.classList.toggle('dropdown-active')
        }    
    }, true)

    /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

    
    /**
     * text chage
     */
    var typed = new Typed("manytext",{
        strings: ["Front End Developer","Web Desinger","Back End Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backdelay: 1000,
        loop: true
    })
})()