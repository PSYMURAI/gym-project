// function toggleMenu() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }



  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const collegeError = document.getElementById("college-error");
  const phoneError = document.getElementById("mobile-error");
  const submitError = document.getElementById("submit-error");
  const cnpasserror = document.getElementById("cnpass-error");
  const passerror = document.getElementById("pass-error");
  const submitBtn = document.getElementById("submitBt"); // Corrected the ID
  
  
  
  
  
  
  
  // document.addEventListener('contextmenu', function (e) {
  //   e.preventDefault();
  // });
  function validateName() {
    const name = document.getElementById("name").value.trim(); // Trim to remove leading/trailing spaces
    const nameParts = name.split(/\s+/); // Split by spaces to get individual name parts
  
    if (nameParts.length < 3) {
      showError(nameError);
      return false;
    }
  
    // Check if each part is not empty
    for (const part of nameParts) {
      if (part.length === 0) {
        showError(nameError);
        return false;
      }
    }
  
    showSuccess(nameError);
    return true;
  }
  

  function validateContact() {
    const contact = document.getElementById("mobile").value;
    const phoneInput =document.getElementById("mobile")
    const isValidContact = validatePhoneNumber(contact);
     phoneInput.addEventListener('input', function(event) {
        // Remove any non-numeric characters
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
    });
  
    if (isValidContact) {
      showSuccess(phoneError);
      return true;
    } else {
      showError(phoneError);
      return false;
    }
  }
  
  function validatePhoneNumber(contact) {
    const regex = /^\d{10}$/;
    return regex.test(contact);
  }
  
  function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+[^\s.@]*$/;
  
    if (emailRegex.test(email)) {
      showSuccess(emailError);
      return true;
    } else {
      showError(emailError);
      return false;
    }
  }
  
  function validatePass() {
    const pass = document.getElementById("pass").value;
  
  
    if (pass.length>=8) {
      showSuccess(passerror);
      return true;
    } else {
      showError(passerror);
      return false;
    }
  }
  
  
  function confirmPass() {
    const pass = document.getElementById("pass").value;
    const cnfpass = document.getElementById("cnfpass").value;
  
  
    if (pass===cnfpass) {
      console.log("ok")
      showSuccess(cnpasserror);
      return true;
    } else {
      showError(cnpasserror);
      console.log("not ok ")
      return false;
    }
  }
  
  
  
  
  function validateform(event) {

    

  
    if (
      !validateName() ||
      !validateEmail() ||
      !confirmPass()||
      !validateContact() ||
      !validatePass()
      
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "check your data again",
        
      });
      event.preventDefault();
      return false;
    }
  
    setTimeout(function () {
      submitError.style.display = "none";
    }, 8000);
    Swal.fire({
      title: "Good job!",
      text: "your response is recorded",
      icon: "success"
    });
    return true;
  }
  

  const errSpan = document.querySelector(".error")
  function showError(element) {


    element.innerHTML = `<i class="fa-solid fa-x fa-shake" style="color: #ff0000;"></i>`;
  }
  
  function showSuccess(element) {
  
    element.innerHTML = `<i class="fa-solid fa-check fa-beat-fade" style="color: #14cc33;"></i>`;
  }
  