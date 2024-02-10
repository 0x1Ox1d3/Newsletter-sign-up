document.getElementById("emailForm").addEventListener("submit",success)
const emailError = document.getElementById("error")

function success(event){
    event.preventDefault();
    const email = document.getElementById("email").value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.textContent = 'Valid email required';
    emailError.style.color = 'red'; // Make the error message visible
    document.getElementById("email").style.backgroundColor = 'hsla(4, 100%, 67%, 0.26)'
    document.getElementById("email").style.borderColor = 'hsl(4, 100%, 67%)'
  }
  else{
      document.getElementById("card").style.display = "none";
      document.getElementById("success").style.display = "flex";
      document.getElementById("submittedEmail").innerHTML = email
  }

}