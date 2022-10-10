      function str_fisrt_letter(chaine){
           var pattern =/^[a-d]/i; 
           var res = document.getElementById("res1");
           if(pattern.test(chaine)){
           	res.innerHTML=chaine+" chaîne valide  commence par une lettre entre a et d ";
           }
           else {
           	res.innerHTML=chaine+" chaîne invalide ";
           }
      }

      function str_email(chaine){
           var res = document.getElementById("res2");
           var c =chaine.split('@');
           if(c.length==2){
           	res.innerHTML=chaine+" chaîne valide : contient un seul caractère @  ";
           }
           else {
           	res.innerHTML="chaîne invalide!";
           }
      }
     

      function str_number(chaine){
        var res = document.getElementById("res3");
      	  var pattern =/\d/;
          if(chaine.search(pattern)!=-1){
             res.innerHTML=chaine+" chaîne valide : contient un nombre  ";
          }
          else {
           	res.innerHTML=chaine+" chaîne invalide : ne contient pas un nombre  ";
           }
      }
      

      function str_replace(chaine){
        var res = document.getElementById("res4");
      	  ch2=chaine.replace(/\d/g,"*");
      	res.innerHTML=ch2;
          
      }