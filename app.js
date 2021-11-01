window.onload = function(){

    var Btn = document.getElementsByTagName("button");
    var httpRequest;


    Btn.addEventListener("click",function(element){
        element.preventDefault();
        
        httpRequest = newXMLHttpRequest();
        
        // GET Request
        var url = "http://localhost/info2180-lab4/superheroes.php"; 
        httpRequest.onreadystatechange = getHero;
        httpRequest.open('GET',url);
        httpRequest.send();

       
    });

    function getHero(){
      if (httpRequest.readyState == XMLHttpRequest.DONE){
          if(httpRequest.status == 200){
              var response = http.responseText;
              alert(response);
              console.log(response);
            }else{
              alert("There is a problem with request.");
            }
        }  
    }
}