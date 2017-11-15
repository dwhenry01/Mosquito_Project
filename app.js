const disagreeClick = document.querySelector('button.disagree');
const agreeClick = document.querySelector('button.agree');
const xmos = document.querySelector('img.nomos');
const sbmt = document.querySelector('button.button');


/*Function for the Disagree Button*/

disagreeClick.addEventListener('click', (event) => {
   alert("Wow, sorry you were so wrong. I'll give you another shot"); 
});

/*Function for the Submit button*/

function error(){
    alert("Sorry, we are not set up to take newsletter registrations at this time. We apologize for any inconvience. Please enjoy the rest of the site.");
    submit.textContent = "Sorry!";
}

/*Function for the Immage Switch*/

function imgswitch(){
    var mospic = document.getElementById('plainmos');
    var xmos = document.getElementById('nomos');
    if (mospic.style.display === 'none'){
        mospic.style.display = 'block'; 
        xmos.style.display = 'none';
    } else {mospic.style.display = 'none'; 
            xmos.style.display = 'block';
            };
    agree.disabled = true;
    disagree.disabled = true;
    agree.textContent = "Correct!"
    disagree.textContent = "Definitely the worse!";
 };




