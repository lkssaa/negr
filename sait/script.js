let lang = 'ru';
document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.querySelector('.content');
    const navLinks = document.querySelectorAll('.nav-link');
    const aaa = document.querySelectorAll('.ac');
    const loadingOverlay = document.querySelector('.loading-overlay');
    
  
    const showLoadingOverlay = () => {
      loadingOverlay.style.opacity = '1';
    };
  
    const hideLoadingOverlay = () => {
      loadingOverlay.style.opacity = '0';
    };
  
    /*const loadScripts = (url) => {
      if (url.includes('about')) {
        document.querySelector('.btn').addEventListener('click', (e) => {
          console.log(e);
        });
      }
    };*/
    document.querySelector('.root-nav').onclick = function(event){
      console.log(event.target.nextElementSibling);
      if (event.target.nodeName !=='SPAN') return;
      closeAllSubMenu(event.target.nextElementSibling);
      event.target.classList.add('sub-menu-active-span');
      event.target.nextElementSibling.classList.toggle('sub-menu-active');
  }
  
  function closeAllSubMenu(current = null){
      let parents = [];
      if (current) {
          let currentParent = current.parentNode;
          while(currentParent){
              if (currentParent.classList.contains('root-nav')) break;
              if (currentParent.nodeName === 'UL') parents.push(currentParent);
              currentParent = currentParent.parentNode;
          }
  
      }
      const subMenu = document.querySelectorAll('.root-nav ul');
      Array.from(subMenu).forEach(item => {
          if(item != current && !parents.includes(item)) {
              item.classList.remove('sub-menu-active');
              if(item.previousElementSibling.nodeName === 'SPAN') {
                  item.previousElementSibling.classList.remove('sub-menu-active-span');
              }
          }
      });
  }
  
  document.querySelector('.root-nav').onmouseleave = closeAllSubMenu;
    const loadPage = (url) => {

      showLoadingOverlay();

      fetch(url)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newContent = doc.querySelector('.content').innerHTML;
  
          contentDiv.classList.add('fade-out');
  
          contentDiv.innerHTML = newContent;
          document.title = doc.title;
  
          setTimeout(() => {
            contentDiv.classList.remove('fade-out');
            //history.pushState({}, '', url);
            hideLoadingOverlay();
          }, 500);
        })
        /*.then(() => {
          loadScripts(url);
        });*/
    };
  
    aaa.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('asdas');
        loadPage(e.currentTarget.getAttribute('id'));

      });
    });
    /*navLinks.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
  
        const url = e.currentTarget.getAttribute('href');
        loadPage(url);
      });
    });*/
  
    loadPage(window.location.pathname);
  
    window.addEventListener('popstate', () => {
      loadPage(window.location.pathname);
    });
  });