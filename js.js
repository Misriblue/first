
   
      function themChange() {
        let body = document.querySelector("body");
        body.classList.toggle("them");
      }
      let them = document.querySelector(".dark");
      them.addEventListener("click", themChange);

      let button = document.querySelector("#buttonRegister");
      function askQuestion() {
        let name = prompt("what is your name?");
        let address = prompt("your contact information please");
        alert(
          "Hello " +
            name +
            " we will contact you soon by the address you provided ,have a nice day! "
        );
      }

      button.addEventListener("click", askQuestion);
  