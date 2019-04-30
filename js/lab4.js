// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = "Jolene, Jolene, Jolene, Jolene <br> well I'm begging of you <br> Please don't take my man <br> Jolene, Jolene, Jolene, Jolene <br> Please don't take him just because you can.<br>";
    return output;
}

function verse2(){
    
    let output = "Your beauty is beyond compare <br> With flaming locks of auburn hair <br> With ivory skin <br> And eyes of emerald green.<br>";
    return output;
}

function chorus1(){
    
    let output = "And your smile is like a breath of spring <br> Your voice is soft like a summer rain <br> And I cannot compete with you Jolene <br>";
    return output;
}

function chorus2(){
    
    let output = "Well I could easily understand <br> How you could easily take my man <br> But you don't know what he means to me, Jolene <br>";
    return output;
}



function main(){
    let finalOutput = verse1() +
                      verse2() +
                      chorus1() +
                      verse1() +
                      chorus2(); // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}