const projectsArea = document.querySelector("#projects");

const blogs = [
  {
    title: "Folded Note",
    id: "folded_note",
    preview:
      "A look in to my rich text editor and how it handles personal content without the need for an account.",
    description:
      "This website uses Draft.js to allow users to create rich text notes. When a user visits the website, a unique identifier is created and then appended to the url. Their note is automatically saved in MongoDB. The note can be accessed again on any device with that url.",
    image: "./images/note-fullpreview.png",
    stack: "Frontend / Backend",
    tools: "React | Node/Express | MongoDB | Sass | Draft.js",
    alt: "Screenshot of the website Folded Note",
    githubURL: "https://github.com/caseyou45/FoldedNote",
    liveURL: "https://folded-note.herokuapp.com",
  },

  {
    title: "NewsCycle",
    id: "newscycle",
    preview:
      "In my mind, I wanted NewsCycle to blend curated news with the ability to comment on articles and other comments. ",
    description:
      "This website pulls the day's news with NewsAPI. Users can create permanent accounts or 'burner' accounts that last 24 hours. Authorization is handled with JSON Web Tokens and bcrypt. Features include threaded comments and the ability to `like` articles and comments.",
    image: "./images/news-fullpreview.png",
    stack: "Frontend / Backend",
    tools: "React | Node/Express | PostgreSQL | CSS | NewsAPI",
    alt: "Screenshot of the website NewsCycle",
    githubURL: "https://github.com/caseyou45/newsForum",
    liveURL: "https://newscycle.herokuapp.com",
  },

  {
    title: "Movie Connection",
    id: "movie_connection",
    preview:
      "Creating Movie Connection was a giant pain at times, but pulling it off was worth the effort.",
    description:
      "Six degrees of Kevin Bacon is a fun game, but dredging your memory for the right actors and films can be hard. This easy-to-use website leverages The Movie Database (TMDb) API to do the hard work for you. Pick your own actors or have them chosen for you. The website will then automatically connect the two actors with the right films and actors.",
    image: "./images/movie-fullpreview.png",
    stack: "Frontend",
    tools: "React | TMDb API | React Boostrap",
    alt: "",
    githubURL: "https://github.com/caseyou45/movieconnection",
    liveURL: "https://movieconnection.herokuapp.com",
  },

  {
    title: "Simple Baby Size",
    id: "simple_baby_size",
    preview:
      "I was motivated to make this website out of my own necessity. With a child on the way, I wanted a cleared idea on big baby-to-be was.",
    description:
      "This website shows expecting parents how big their baby is with a simple hand-size comparison. Users can select between different hand sizes. Due date can be based off of the last missed period, date of conception, or a known due date.",
    image: "./images/simplebabysize-fullpreview.png",
    stack: "Frontend",
    tools: "React | Material-UI",
    alt: "",
    githubURL: "https://github.com/caseyou45/simplebabysize",
    liveURL: "https://babysize.herokuapp.com",
  },
  {
    title: "Lunar Lander",
    id: "lunar_lander",
    preview:
      "By making this simple game, I gained a lot of insight in to how difficult creating game mechanics must be for the pros.",
    description:
      "Built with Javascript and HTML Canvas, this fun and simple game challenges you to land on the moon while avoiding asteroids and satellites.",
    image: "./images/lander-fullpreview.png",
    stack: "Frontend",
    tools: "HTML | Canvas | Javscript",
    alt: "",
    githubURL: "https://github.com/caseyou45/lunar-lander",
    liveURL: "https://caseyou45.github.io/lunar-lander/",
  },
];

blogs.forEach((el) => {
  projectsArea.innerHTML += `
  <div key=${el.id} class="project">
    <h3>${el.title}</h3>
    <div key=${el.id} class="project-card">
       <div class="project-card-body">
          <p>${el.description}</p>
          <img alt=${el.alt} src=${el.image} class="project-card-img"/>
          <span>${el.tools}</span>
           <div class="project-card-links">
            <a href=${el.githubURL}>View Code</a>
            <a href=${el.liveURL}>Visit Site</a>
          </div>
       </div>
    </div>
 </div>
`;
});
