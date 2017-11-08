const disagreeClick =                                   document.querySelector('button.disagree');
const agreeClick =                                       document.querySelector('button.agree');
const xmos = document.querySelector('img.nomos');
const sbmt = document.querySelector('button.button');




disagreeClick.addEventListener('click', (event) => {
   alert("Wow, sorry you were so wrong. I'll give you another shot"); 
});


function error(){
    alert("Sorry, we are not set up to take newsletter registrations at this time. We apologize for any inconvience. Please enjoy the rest of the site.");
    submit.textContent = "Sorry!";
}


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





//Trying to get an alert to occur when the form submit button is pressed



//sbmt.addEventListener('click', (event) => {
//    alert("Sorry, we are not set up to take newsletter registrations at this time. We apologize for any inconvience. Please enjoy the rest of the site.");
//});

//sbmt.onclick = function (){
//    alert("Sorry, we are not set up to take newsletter registrations at this time. We apologize for any inconvience. Please enjoy the rest of the site.");
//};


//Failed attempts at geting the pictures to switch when the agree button is pressed

//agreeClick.addEventListener('click', (event) => {
//   var mospic = document.getElementById('plainmos');
//   var xmos = document.getElementById('nomos');
//    if (mospic.parentNode){
//        mospic.parentNode.removeChild(mospic);
//        
//                                  };
//    
//    
//} );

//$('#agree').one('click', function imgswitch(){
//    var mospic = document.getElementById('plainmos');
//    var xmos = document.getElementById('nomos');
//    if (mospic.style.display === 'none'){
//        mospic.style.display = 'block'; 
//        xmos.style.display = 'none';
//    } else {mospic.style.display = 'none'; 
//            xmos.style.display = 'block';}
//});


//Failed attempt at getting the image switch button to disable after being clicked (this fucntion made the button disable after second click)


//    document.getElementById("agree").onclick = function(){
//        this.disabled = true;
//    };