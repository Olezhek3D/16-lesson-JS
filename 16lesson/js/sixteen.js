const myH1 = document.getElementById("myH1");
   
   let username = window.prompt("Enter your username: ")

    //username = username.trim();
    //let letter = username.charAt(0);
    //letter = letter.toUpperCase();


    //let extraChars = username.slice(1);
    //extraChars = extraChars.toLowerCase();
    //username = letter + extraChars;

    //console.log(username);

    username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
    username = myH1.textContent = `${username}`