const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions() {
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
    //Sections active clas
    

    allSections.forEach(function(elem) {
        elem.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            if(id) {
                // remove selected from the other btns
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active2');
                })
                e.target.classList.add('active2');

                //hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                    section.classList.remove('active2')
                })
                const element = document.getElementById(id);
                element.classList.add('active');
                element.classList.add('active2');

            }
        });
    });

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

   
}



pageTransitions();
