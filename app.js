window.onload = function() {

    var loadTextBtn = document.querySelector('#loadTextBtn');
    var httpRequest;

    loadTextBtn.addEventListener('click',function(button){
        button.preventDefault();

        httpRequest = new XMLHttpRequest();

        // GET Request
        var url = "http://localhost/info2180-lab4/superheroes.php.";
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET',url);
        httpRequest.send();

    });

    function doSomething(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if(httpRequest.status === 200) {
              var response =  httpRequest.responseText;
              var quote = document.querySelector('#quote');
              quote.innerHTML = response;
          }else {
              alert('There was a problem with the request.');
          }
        

        }
    }
};