class MainEventController {
    constructor() {
        this.listenToAllEvents();
    }

    listenToAllEvents() {
        this.listenToAboutEvents();
        this.listenToProjectsEvents();
        this.listenToSkillsEvents();
        this.listenToContactEvents();
        this.listenToGoalsEvents();
    }

    // ----- Section About -----
    listenToAboutEvents() {
    }

    // ----- Section Projects -----
    listenToProjectsEvents() {
    }

    // ----- Section Skills -----
    listenToSkillsEvents() {
    }

    // ----- Section Contact -----
    listenToContactEvents() {
    }

    // ----- Section Goals -----
    listenToGoalsEvents() {
    }
}

export default MainEventController;