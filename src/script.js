const img = document.querySelector(".error-img"); 
const errorText = document.getElementById("error-text"); 
const btn = document.querySelector(".btn");
const email = document.querySelector(".email-entry"); 
const btn2 = document.querySelector(".btn2");
const img2 = document.querySelector(".error-img2");
const errorText2 = document.getElementById("error-text2"); 
const email2 = document.querySelector(".email-entry2"); 





const regex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailInput = email.value.trim(); 
  const isValid = regex.test(emailInput); 
  
  if (!isValid) {
    errorText.style.display = "block"; 
    email.style.border = "solid 1px red"; 
    img.style.display = "block"; 
  } else {
    errorText.style.display = "block"
    errorText.innerText = "Success!";
    errorText.style.color = "lightgreen"
    email.style.border = "solid 1px lightgreen"; 
    img.style.display = "none"; 
    email.value = ""
  }
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const emailInput2 = email2.value.trim(); 
  const isValid = regex.test(emailInput2); 
  
  if (!isValid) {
    errorText2.style.display = "block"; 
    email2.style.border = "solid 1px red"; 
    img2.style.display = "block"; 
  } else {
    errorText2.style.display = "block"
    errorText2.innerText = "Success!";
    errorText2.style.color = "lightgreen"
    email2.style.border = "solid 1px lightgreen"; 
    img2.style.display = "none"; 
    email2.value = ""
  }
});


