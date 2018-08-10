document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

var heading = document.querySelector("#iam");
                var data = ["Hi! I'm Bibek 😜","I am a web developer!💻","I ❤️ solving problems!", "I've got crush😍 on the world!✈️"];
                var j = 0;
                var i = 0;


            var k;

            function typing(){
                if(heading.innerHTML.length === data[j].length){
                    k = 0;
                    setTimeout(del, 1200);
                }
                if(i<data[j].length){
                    heading.innerHTML += data[j].charAt(i);
                    i++;
                    setTimeout(typing, 50);
                }
                else{
                    j++;
                    i = 0;
                    k = 0;
                    setTimeout(typing, 3000);
                }
                if(j === data.length){
                    j = 0;
                }
            }

            // var check = document.getElementById("check");
            // var k = 0;
            function del(){
                if(heading.innerHTML.length == 0){
                    clearTimeout(time);
                }
                else{
                heading.innerHTML = heading.innerHTML.slice(0, heading.innerHTML.length - k);
                k++;
                var time = setTimeout(del, 100);
                }
            }

            typing();

          // hamburger menu event addEventListener

          var hamburger = document.querySelector('.hamburger');
          var mainnav = document.querySelector('.main-nav');


          hamburger.addEventListener('click', function(event){
            event.preventDefault()
            if (mainnav.style.display === "none") {
              mainnav.style.display = "block";
            } else {
            mainnav.style.display = "none";
            }
          })

});
