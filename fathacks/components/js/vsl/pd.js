
document.cookie="mobile="+window.mobileCheck();
   
 




  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
  var mm = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();
function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
          }
var ee = ordinal_suffix_of(dd);
var today1 = ee + ' ' + mm + ' ' + yyyy;
$("#curdate").text(today1);
$("#curdate").css('font-weight', '700');



   

      

    


      var timeInSecs;
      var ticker;
      
      function startTimer(secs) {
      timeInSecs = parseInt(secs);
      ticker = setInterval("tick()", 1000); 
      }
      
      function tick() {
      var secs = timeInSecs;
      if (secs > 0) {
      timeInSecs--; 
      }
      else {
        // document.getElementById("counter").innerText = "00:00:00"
      // clearInterval(ticker);
      startTimer(15*60); // 10 minutes in seconds
      }
      
      var days= Math.floor(secs/86400); 
      secs %= 86400;
      var hours= Math.floor(secs/3600);
      secs %= 3600;
      var mins = Math.floor(secs/60);
      secs %= 60;
      var pretty = ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
      var xmins = ( (mins < 10) ? "0" : "" ) + mins;
        var xsec = ( (secs < 10) ? "0" : "" ) + secs;
        // document.getElementById("counter").innerText = "00:"+xmins+":"+xsec;
      
        $("#counter").text("00:"+xmins+":"+xsec);
        // document.getElementById("sec").innerText = xsec;
      //document.getElementById("countdown").innerHTML = pretty;
      }
      
      startTimer(15*60);
      
      function productLoad(){
        var email = getCookie('em');
        if (email != "") {
          $.ajax({
            type: 'POST',
            url: 'https://hook.integromat.com/lmma1cea3wx1ui8ns6oqmys8srojr7gd',
            crossDomain: true,
            data: {'email': email},
            dataType: 'json',
            success: function() {
            console.log("sadf");
            }
              }); 
        }
      }

      $('.scroll-product').click(function(){
        $('html, body').animate({
            scrollTop: $("#co-box").offset().top - 20 
        }, 'slow');
    });
 
var timeInSecs1 = 0;
      var ticker1 = 0;

    function startTimer1(secs1) {
      timeInSecs1 = parseInt(secs1);
      ticker1 = setInterval("tick1()", 1000); 
  }
   function tick1() {
  var secs1 = timeInSecs1;
  if (secs1 > 0) {
  timeInSecs1--; 
  }
  else {
  clearInterval(ticker1);
  startTimer1(2*60); // 4 minutes in seconds
  }

  var days= Math.floor(secs1/86400); 
  secs1 %= 86400;
  var hours= Math.floor(secs1/3600);
  secs1 %= 3600;
  var mins = Math.floor(secs1/60);
  secs1 %= 60;
 
  var xmins = ( (mins < 10) ? "0" : "" ) + mins;
    var xsec = ( (secs1 < 10) ? "0" : "" ) + secs1;
    // document.getElementById("mins").innerText = xmins;
    // document.getElementById("sec").innerText = xsec;
  //document.getElementById("countdown").innerHTML = pretty;
  }






      startTimer1(2*60);


      function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
      
          }//getCookie
    
          const tokent = getCookie("userToken");
      

  
 
  
  

$('.checkout-button').click(function() {
  
  var page = getCookie('page');
  var dba=$(this).data('sku');
  var testidx = getCookie('testid'); //change this to the id of the active test
 
  if (testidx != '') { //there is an active test;
    
    recordCheckout(testidx, page, dba); 
  } else { //there is no running test
 
 
    setTimeout(function(){
      window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba;
    }, 200);
    
   }
  });


   $('#product-section-2 .product-pack').click(function() {
   
    var page = getCookie('page');
    var dba=$(this).data('sku');
    var testidx = getCookie('testid'); //change this to the id of the active test
    
    if (testidx != '') { //there is an active test;
      
      recordCheckout(testidx, page, dba); 
    } else { //there is no running test
   
   
      setTimeout(function(){
        window.location.href = "/kaisercoach-bundle-checkout.html?dba="+ dba;
      }, 200);
      
     }
    
 
  
  
      
});



