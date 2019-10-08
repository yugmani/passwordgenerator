 
// Variable Declarations. 

 var password= "";
 var charEach = "";
 var specialEach = "";
 var numberCount = 0;
 var lowercaseCount=0;
 var uppercaseCount=0;
 var symbolCount=0;
 var upper = 0;
 //var specialChar = "";
 var incrementEl = document.querySelector("#increment");
 var clipEl = document.querySelector("#clip");
 var passwEl  = document.querySelector("#passw");
 var newPage = document.querySelector("#countPass");
 

 

// Function to setpass the final output in the page.
        
        function setPassText () {
            
            passwEl.textContent = password;
            
            newPage.textContent = "Total Symbols: "+ symbolCount +"   "+ "Total Numbers: "+numberCount + "   " + "Total Lowercase: "+lowercaseCount+ "   " + "Total Uppercase: "+upper;
            
        }       

        
  
 // Eventlistener function to generate password

 incrementEl.addEventListener("click", function() {
        
        // Reinitialize the variables
        password= "";
        numberCount= 0;
        uppercaseCount = 0;
        lowercaseCount = 0;
        symbolCount=0;
        upper = 0;
        
        // list of valid characters for password.
        let listChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*@~^()_+";
        
        // list of valid symbols.
        let specialChar = "!#$%&*@~^()_+";
        
        var plength = prompt("How long password do you want ? [min=8 & max=128] ?");
        length = parseInt(plength, 10);
        
        //validation for the length of password length.
            
            if (length<8||length>128) {
                alert("Password length criteria is not met. Password length must be minimum 8 and maximum 128. Try again!")
                return;
            }

            else {
                   for (var i=0; i<length; i++) {
                
                    // Generating random characters.

                    charEach = listChar.charAt(Math.floor(Math.random() * listChar.length));
                  
                    
                    // validating special characters, numbers, lowercase and uppercase.

                    for (var k=0; k < specialChar.length; k++) {
                        
                        specialEach = specialChar.charAt(k);
                        
                            if (charEach == specialEach) {
                            symbolCount = symbolCount + 1;
                            
                            }
                    }
                    
                    if (!isNaN(parseInt(charEach)*1)) {
                       
                        numberCount = numberCount + 1;
                    }

                    else if (charEach == charEach.toUpperCase()) {
                        
                        uppercaseCount = uppercaseCount + 1;
                        
                    }

                    else if (charEach == charEach.toLowerCase()) {
                        
                        lowercaseCount = lowercaseCount +1;
                      
                    }  


                    password = password + charEach;
                    
                    }
                   
                   // validating number of each characters.
                    if (symbolCount<1 || numberCount<1 || lowercaseCount<1 ||uppercaseCount<1 ) {
                        alert ("Invalid Password: Each type of characters not included !")
                       return;
                    }
                    upper = uppercaseCount - symbolCount;
                    
                    setPassText();
                    
                    
            }});    
        

            // copy to clipboard section !!


        function copyBoard () {
            document.getElementById("passw").select();
            document.execCommand("copy");
        alert("Password Copied to Clipboard")

      }






