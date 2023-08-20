const app = Vue.createApp({
    data() {
      return {
        name: 'KARAN BALHOTRA',
        intro: 'Hello,everyone I am a first year university student and a passionate web-developer. Till now I have learned about the these things:',
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Responsive Design'],
        projects: [
          {
            title: 'Project 1',
            description: 'In this task I have made a To-do app. Through this application person can add as well as delete his/her daily tasks.This app will help the person to be on track with the all daily activities.',
            link: 'https://github.com/Karan-Balhotra/SIT-120-Responsive-web-apps.git'
          },
          {
            title: 'Project 2',
            description: 'In this task I have developed a Quiz application for the students. Through this app the students can take quiz for multiple subjects.This application is a prototype of a bigger application.',
            link:'https://github.com/Karan-Balhotra/credit-task-2.git'
          },
          {
            title:'Project 3',
            description: 'This was the first website that I had ever built in my life. Altough I have come a long way ahead of this...😁😁😁😊😊',
            link: 'https://github.com/Karan-Balhotra/SIT-120-Introduction-to-Responsive-Web-Apps.git'
          },
          {
            title:'Project 4',
            description: 'Through this task I was asked to demonstrate my javascript skills.',
            link: 'https://github.com/Karan-Balhotra/web-development-task-1.2p.git'
          },
          {
            title:'Drop a Message for me',
            description:'For any kind of query. Please drop a message to me through this link.',
            link:'./form.html'
          }
          
        ],
        email: 'KaranBalhotra@Gmail.com',
        Instagram: 'KaranBalhotra@56',
        phone : '+61-3434xxxxx'
      };
    },
    template: `
      <div>
        <div class="header">
          <h1>My Resume</h1>
        </div>
        <div class="container">
          <div class="intro">
            <h2>{{ name }}</h2>
            <p>{{ intro }}</p>
          </div>
          <div class="skills">
            <div class="skill" v-for="skill in skills">{{ skill }}</div>
          </div>
          <div v-for="project in projects" class="project">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
           <button> <a :href="project.link">click here</a></button>
          </div>
          <div class="contact">
            <p>Contact me at:</p>
            <p>Email: {{ email }}</a></p>
            <p>Instagram:{{ Instagram }}</a></p>
            <p>Phone:{{ phone }}</a></p>
          </div>
        </div>
      </div>
    `
  });
  
  app.mount('#app');