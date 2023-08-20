const app = Vue.createApp({
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Perform form submission logic here
        console.log('Form Data:', this.formData);
        alert('Form submitted successfully!');
      }
    }
  });
  
  app.mount('#app');
  