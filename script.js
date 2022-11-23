function validationForm()
{
  var userName = document.getElementById("userName").value;
  var EmailId = document.getElementById("EmailId").value;
  var Number = document.getElementById("Number").value;
  
  var username = /^[a-z\d]{3,30}$/i;
  var email = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}?$/;
  var mobileno = /[789][0-9]{9}$/;

  // username

  if(username.test(userName)){

    document.getElementById('usernameerror').innerHTML = " ";
  }else
  {
    document.getElementById('usernameerror').innerHTML = "Userame must be and contain 3 - 10 characters";
    document.getElementById('usernameerror').style.color = "#ff4500";
    document.getElementById('usernameerror').style.fontSize = "12px";
    document.getElementById('usernameerror').style.padding = "8px";
    return false;

  }

  // email id

  if(email.test(EmailId)){

    document.getElementById('emailiderror').innerHTML = " ";
  }else
  {
    document.getElementById('emailiderror').innerHTML = "Email must be a valid email, e.g. myname@example.com";
    document.getElementById('emailiderror').style.color = "#ff4500";
    document.getElementById('emailiderror').style.fontSize = "12px";
    document.getElementById('emailiderror').style.padding = "8px";
    return false;

  }

//  radio button checked

var a = document.forms.gender;
for(i=0;  i<a.length; i++)
{
  if(a[i].checked==true)
  {
    return true;
  }

  document.getElementById('gendererror').innerHTML = "Select a Valid checked";
  document.getElementById('gendererror').style.color = "red";
  return false;

} 

  //  mobilenumber

  if(mobileno.test(Number)){

    document.getElementById('mobileerror').innerHTML = " ";
  }else
  {
    document.getElementById('mobileerror').innerHTML = "mobileno.must be a valid mobile no.(10 digits)";
    document.getElementById('mobileerror').style.color = "#ff4500";
    document.getElementById('mobileerror').style.fontSize = "12px";
    document.getElementById('mobileerror').style.padding = "8px";
    return false;

  }

}