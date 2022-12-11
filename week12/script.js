function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
      alert("You have entered a Valid email address!");
      document.form.email.focus();
      return true;
    }
    else {
      alert("Invalid Email Address");
      document.form.email.focus();
      return false;
    }