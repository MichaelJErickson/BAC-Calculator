
$("form").on("submit", calcBAC)

    function calcBAC(event)
    {
       event.preventDefault(); 
       //prevents document from resetting to default

       /*1 beer = .54oz
         1 wine = .6oz
         1 liquor = .6oz
         multiply by 7.5 (absorb rate)
         Divide by weight (this is BAC)
         substract (hours * .015)
         round to three decimal places
        */
       
       var weight = $("input#weight").val();
       var beer = $("input#beer").val();
       var wine = $("input#wine").val();
       var liquor = $("input#liquor").val();
       var hours = $("input#hours").val();

       var BAC = (((beer*.54)+(wine*.6)+(liquor*.6))* 7.5)/ weight;
       
       var result = BAC-(hours * .015);

       $("input#slider").val(result); // slider displays result value
       
       $("p#output").text("Your BAC is " + result.toFixed(3));

    }
    //utility function?
    function printBAC(BAC, hours)
    {
       let output = BAC - (hours * .015);
       return output;  
    }

    


      

    

   


   

    
