document.addEventListener("DOMContentLoaded", function(event) {


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


          var menu = document.querySelector('.menu');
          var menuList = document.querySelector('.menu-items');

          var menuOpened = false;

          //hover over the menu icon -- opens the mini menu
          menu.addEventListener('mouseover', function(){
            menuList.style.left = '0';
          });
          //meave the menu-icon hides mini-icons
          menu.addEventListener('mouseleave', function(){
            menuList.style.left = '-81px';
          });

          menuList.addEventListener('mouseover', function(){
            menuList.style.width = '300px';
            menuList.style.left = '0';
          });

          menuList.addEventListener('mouseleave', function(){
            menuList.style.width = '80px';
            menuList.style.left = '-81px';
          });

});
