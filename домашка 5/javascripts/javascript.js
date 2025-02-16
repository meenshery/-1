document.addEventListener("DOMContentLoaded", function(){
    let count = 0;
    const knopka = document.getElementById("bum");
    const skolko = document.getElementById("countt");
    const message = document.getElementById('message');
    knopka.addEventListener("click", function(){
        count += 1;
        skolko.textContent = count;
        if (count >= 15) {
            knopka.disabled = true;
            message.textContent = "а все нельзя больше";
        }
    });
        
    let countt = 10;
    const vr = document.getElementById('timer');
    const reset = document.getElementById('reset');
    let interval;
  
    function startTimer() {
    interval = setInterval(function () {
        countt--;
        vr.textContent = countt;
  
        if (countt <= 0) {
            clearInterval(interval);
            vr.textContent = "а всё!";
            }
          }, 1000);
        }
  
        reset.addEventListener('click', function () {
          clearInterval(interval);
          countt = 10;
          vr.textContent = countt;
          startTimer();
        });
  
        startTimer();
      });

    let count2 = 0;
    let intervall;
    const textt = document.getElementById('timerr');
    const sta = document.getElementById('sta');
    const sto = document.getElementById('sto');
    const res = document.getElementById('res');

    sta.addEventListener("click", function(){
        if(!intervall){
            intervall = setInterval(function(){
                count2++;
                textt.textContent = count2;
            }, 1000);
        }
    })

    sto.addEventListener("click", function(){
        clearInterval(intervall);
        intervall = null;
    });

    res.addEventListener("click", function(){
        clearInterval(intervall);
        intervall = null;
        count2 = 0;
        textt.textContent = count2;
    });

      

