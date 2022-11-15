function disable() { 
  document.getElementById("lastname").disabled = true;
  document.getElementById("firstname").disabled = true;
  document.getElementById("address").disabled = true;
  document.getElementById("contact").disabled = true;
  document.getElementById("username").disabled = true;
  document.getElementById("password").disabled = true;   
}
 function enable() { 
  document.getElementById("lastname").disabled = false;
  document.getElementById("firstname").disabled = false;
  document.getElementById("address").disabled = false;
  document.getElementById("contact").disabled = false;
  document.getElementById("username").disabled = false;
  document.getElementById("password").disabled = false; 
}
