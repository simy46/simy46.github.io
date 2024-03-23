class ContactManager {
    constructor(formSelector) {
      this.form = document.querySelector(formSelector);
      this.initEvents();
    }
  
    initEvents() {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (this.validateForm()) {
          this.submitForm();
        }
      });
    }
  
    validateForm() {
      let isValid = true;
      const inputs = this.form.querySelectorAll('input.required, textarea.required');
  
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          console.error(`${input.name} is required`);
        }
      });
  
      return isValid;
    }
  
    submitForm() {
      console.log('Form is valid, submitting...');
      const formData = new FormData(this.form);
      for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }
  
      // BACKEND POUR L'ENVOIE DES DONNÉES //
    }
  }