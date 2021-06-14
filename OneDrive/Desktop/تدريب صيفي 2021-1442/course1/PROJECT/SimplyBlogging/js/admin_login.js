function validate()
  {
  var spans=document.getElementsByTagName("span");

  var idVar = document.login_form.id.value;

  if (idVar === "Admin")
  spans[0].style.visibility="hidden";
  else
  spans[0].style.visibility="visible";


  var passwordVar = document.login_form.pwd.value;
  if(passwordVar === "Admin1234")
  spans[1].style.visibility="hidden";
  else
  spans[1].style.visibility="visible";
  }