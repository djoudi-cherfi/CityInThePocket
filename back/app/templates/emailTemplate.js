const emailTemplate = {

  validationEmailData: (user, link) => {
    const data = {
      from: 'contact.cityinthepocket@gmail.com',
      to: user.email,
      subject: 'CityInThePocket - Confirmer votre compte',
      html:
        `<html> 
                <head style="background-color:#95E6DD;">
                    <div style="background-color:#95E6DD;"> 
                        <div style="margin:auto; padding:10px; max-width:50%; max-height:50%;">
                            <a href="http://localhost:8080">
                                <img src="https://cityinthepocket.herokuapp.com/images/cf69fc0efed0141d9a32a32efd54c11c.svg" 
                                    alt="logo CityInThePocket"> </a>
                        </div>
                    </div> 
                </head>
                <body style="background-color:#95E6DD; padding:20px;"> 
                    <div style="text-align:center; padding:20px;">
                        <h3>Bienvenue sur CityInThePocket ${user.firstName} !</h3> 
                        <br>
                        Pour confirmer ton compte il te faut cliquer sur ce bouton:  
                        </br></br>
                        <a style="background-color:blue;
                            color:white;
                            border-radius: 16px;
                            padding:3px;
                            text-decoration:none;" 
                            href="${link}">
                                Valider mon compte
                        </a>
                    </div>
                </body>
            </html>`,
    };

    return data;
  },

  forgetPasswordForm: (user, link) => {
    const data = {
      from: 'contact.cityinthepocket@gmail.com',
      to: user.email,
      subject: 'CityInThePocket - Réinitialisation de votre mot de passe',
      html:
        `<html> 
                <head style="background-color:#95E6DD;">
                    <div style="background-color:#95E6DD;"> 
                        <div style="margin:auto; padding:10px; max-width:50%; max-height:50%;">
                            <a href="http://localhost:8080">
                                <img src="https://cityinthepocket.herokuapp.com/images/cf69fc0efed0141d9a32a32efd54c11c.svg" 
                                    alt="logo CityInThePocket"> </a>
                        </div>
                    </div> 
                </head>
                <body style="background-color:#95E6DD; padding:20px;"> 
                    <div style="text-align:center; padding:20px;">
                        <h3>Bonjour ${user.firstname} !</h3> 
                        </br>
                        Vous avez demandé une reinitialisation de votre mot de passe,
                        veuillez cliquer sur le bouton ci-dessous afin de définir un nouveau mot de passe.
                        </br></br>
                        <a style="background-color:blue;
                            color:white;
                            border-radius: 16px;
                            padding:3px;
                            text-decoration:none;"
                            href="${link}">
                                Changer mon mot de passe
                        </a>
                    </div>
                </body>
            </html>`,
    };
    return data;
  },
};

module.exports = emailTemplate;
