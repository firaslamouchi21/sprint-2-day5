 

  function isLeapYear(year){
   return(year%4===0&&x%100!==0||x%400==0){
    return false
  }


//3
function isValidPassword(password) {
    
    if (password.length < 8) {
      return false;
    }
  

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\/.test(password);
  
    if (!(hasUppercase && hasLowercase && hasNumber)) {
      return false;
    }
  

    if (/" "/.test(password)) {
      return false;
    }
  
 
    return true;
  }
  