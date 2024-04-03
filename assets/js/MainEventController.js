class MainEventController {
    constructor() {
        this.currentStep = 0;
        this.currentIndex = 0;
    }

    listenToAllEvents() {
        this.listenToAboutEvents();
        this.listenToProjectsEvents();
        this.listenToSkillsEvents();
        this.listenToContactEvents();
        this.listenToGoalsEvents();
        this.listeToSidebarEvents();
    }

    // ----- Section About ----- //
    listenToAboutEvents() {
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];
        const btn = document.getElementById("grades");
        this.openModal(btn, modal);
        this.closeModal(span,modal);
    }

    openModal(btn, modal) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    closeModal(span, modal) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // ----- Section Projects ----- //
    listenToProjectsEvents() {
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const projects = document.querySelectorAll('.projet');
        const totalProjects = projects.length;
        prevBtn.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex - 1 + totalProjects) % totalProjects;
            this.updateProjectDisplay(this.currentIndex, projects);
        });
    
        nextBtn.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex + 1) % totalProjects;
            this.updateProjectDisplay(this.currentIndex, projects);
        });
    
        this.updateProjectDisplay(this.currentIndex, projects);
    }

    updateProjectDisplay(index, projects) {
        projects.forEach((project, i) => {
            if (i === index) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    }

    // ----- Section Skills ----- //
    listenToSkillsEvents() {
        const skillsP = document.querySelectorAll('#skillset p');
        this.scrollSkillSpans(skillsP);
        this.startScrolling();
    }

    scrollSkillSpans(skillsP) {
        skillsP.forEach(function(p) {
            const width = p.scrollWidth + "px";
            p.parentNode.addEventListener('mouseenter', function() {
              p.style.maxWidth = width;
            });
        
            p.parentNode.addEventListener('mouseleave', function() {
              p.style.maxWidth = "0";
            });
        });
    }

    startScrolling() {
        const skillsContainer = document.getElementById('skills-container');
        let isScrolling;
        let speed = 3;
        isScrolling = setInterval(function() {
            skillsContainer.scrollLeft += speed;
            if (skillsContainer.scrollWidth - skillsContainer.scrollLeft <= skillsContainer.clientWidth || skillsContainer.scrollLeft === 0) {
              speed *= -1;
            }
        }, 30);
    }

    // ----- Section Contact ----- //
    listenToContactEvents() {
        this.setupFormNavigation();
        this.setupFormSubmission();
    }

    setupFormNavigation() {
        const nextButtons = document.querySelectorAll('.next-button');
        const prevButtons = document.querySelectorAll('.prev-button');

        nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (this.validateCurrentStep()) {
                    this.changeStep(1);
                }
            });
        });

        prevButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.changeStep(-1);
            });
        });
    }

    setupFormSubmission() {
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            // WHAT TO DO WHEN FORM IS SENT //
            if (this.validateCurrentStep()) {
                console.log('Formulaire envoyé');
            }
        });
    }

    updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const progress = (this.currentStep / (this.steps.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    changeStep(stepChange) {
        const steps = document.querySelectorAll('.form-step');
        const newStep = this.currentStep + stepChange;
        if (newStep >= 0 && newStep < steps.length) {
            steps[this.currentStep].classList.remove('active-step');
            this.currentStep = newStep;
            steps[this.currentStep].classList.add('active-step');
            this.updateProgressBar();
        }
    }

    validateCurrentStep() {
        const steps = document.querySelectorAll('.form-step');
        const currentStepFields = steps[this.currentStep].querySelectorAll('.required');
        let isValid = true;

        currentStepFields.forEach(field => {
            let errorMessage = field.nextElementSibling;
            if (field.value.trim() === "") {
                isValid = false;
                if (!(errorMessage && errorMessage.classList.contains('error-message'))) {
                    errorMessage = document.createElement('p');
                    errorMessage.classList.add('error-message');
                    errorMessage.textContent = `${field.name.charAt(0).toUpperCase() + field.name.slice(1)} is required`;
                    field.parentNode.insertBefore(errorMessage, field.nextSibling);
                }
            } else if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        });

        return isValid;
    }



    // ----- Section Goals ----- //
    listenToGoalsEvents() {
    }

    // ----- Sidebar ----- //
    listeToSidebarEvents() {
        const sideBarBtn = document.getElementById("sidebar-btn");
        const sideBar = document.getElementById('mySidebar');
        const main = document.getElementById("main");
        const closeBtn = document.getElementById('close-btn');
        this.openNav(sideBarBtn, sideBar, main);
        this.closeNav(closeBtn, sideBarBtn, sideBar, main);
    }

    openNav(sideBarBtn, sideBar, main) {
        sideBarBtn.addEventListener('click', () => {
            sideBarBtn.style.visibility = "hidden";
            sideBar.style.left = "0";
            main.style.marginLeft = "250px";
        });
    }
      
    closeNav(closeBtn, sideBarBtn, sideBar, main) {
        closeBtn.addEventListener('click', () => {
            sideBarBtn.style.visibility = "";
            sideBar.style.left = "-250px";
            main.style.marginLeft= "0";
        });  
    }

}

export default MainEventController;