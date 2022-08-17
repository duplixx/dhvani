    var app = document.getElementById('typewriter');
    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
      });
      
      typewriter
        .pauseFor(2500)
        .typeString('Try saying anything in local Madhya Pradesh Language')
        .pauseFor(300)
        .deleteChars(10)
        .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
        .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
        .pauseFor(1000)
        .start();