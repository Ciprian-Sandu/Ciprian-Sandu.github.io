<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CS's Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="style.css" rel ="stylesheet">
    <script src="script.js" defer></script> 
    <script src="TagCloud.min.js"></script>   
    <script src="calculator.js"></script>
</head>

<body>
    <div class="header">
      <h1>Welcome! :)</h1>
      <p>If you have any questions, don't hesitate to contact me.</p>
    </div>
      <div class="top-navigation-bar">  
            <div class="dropdown">
              <button class="dropbtn">Projects<i class="fa fa-caret-down"></i>
              </button>
                <div class="dropdown-content">
                  <a href="nextupdate">Sorting Algorithms</a>
                  <a href="calculator/calculator.html" >Basic Calculator</a>
                  <a href="#">More to come</a>
                </div>
            </div> 
              <a href="index.html#contact-me" style="float:right">Send me an Email</a>
      </div>
    
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h1 class="title2">What I'm Into?</h1>    
            <div class="content">
                <div class="skills">
                    <p>The primary area of my interest is Telecommunications Engineering: networking, internet protocols, transmission tehniques, 3G,4G,5G comunnications. Also, i'm passionate about coding.</br>
                    </br>Being a master degree student of the Faculty of Electronics, Telecommunications and Information Technology, specialization: Telecommunications, I am attracted by the development perspectives and technical projects.</br>    
                    </br> I am a communicative person, determined, with great concentration power, interested in continuous personal and professional development, easily adaptable to different situations.</br>   
                    </br>More about my experience and work you'll find on Skills and About .</p>
                </div>
            </div> 
        </div>

        <div class="card">
          <h1>Send me an e-mail</h1>
          <form action="https://formspree.io/f/xbjpvozq" method="POST">
            <div class="form" id="contact-me">
                <input class="name" type="text" name="Name" placeholder="Enter Name" required>              
                <input class="email" type="email" name="Email"  placeholder="Enter E-mail"required>
            </div> 
            <div class="form">              
              <input class="subject" type="text" name="Subject" placeholder="Subject">
            </div>
            <div class="form">              
                <textarea class ="message" type="text" name="Message"  placeholder="Type Your Message..."required></textarea>
            </div>           
            <div class="form">
                <button class="button" >Send message!</button>
            </div>
        </form>   
        </div>   
      </div>

      <div class="rightcolumn">
        <div class="card">
          <h1>About Me</h1>
          <img src="./Images/profile-picture.jpg">
          <p>23 years old, 1st year of Master in Telecommunications, Technical Univeristy of Cluj-Napoca</p>
        </div>
        <div class="card">
          <h1>Studies
            <a href="./PDF/GraduationCertificate.pdf" target="_blank" style="float:right"><img src="./Images/pdf.png" alt="pdf"></a>
          </h1>
          <div class="fakeimg">
            <img src="./Images/highschool.JPG"></div>
          <div class="fakeimg">
            <img src="./Images/bachelor.JPG"></div>
            <div class="fakeimg">
            <img src="./Images/master.JPG"></div>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <h2>Contact me at: </h2>
      <a href="https://www.facebook.com/ciprian.sandu.1106" target="_blank"><img src="./Images/facebook-logo.png" alt="Facebook Logo"></a>
      <a href ="https://www.linkedin.com/in/ciprian-sandu-b75767206/" target="_blank"><img src="./Images/linkedin-logo.png" alt="LinkedId Logo"></a>
    </div>
    </body>
</html>
