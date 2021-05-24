// for navigation bar

function opennavlink(){
    var navigation=document.getElementById("navigation");
    if(navigation.style.display === "none"){
        navigation.style.display = "block";
    }
    else{
        navigation.style.display="none";
    }
}

function closenavlink(){
    var navigation=document.getElementById("navigation");
    if(navigation.style.display === "block"){
        navigation.style.display = "none";
    }
    else{
        navigation.style.display="block";
    }
}

// end of navbar------------------------------------------

function closefn(){
    var modalbox=document.getElementById("modalbox");
    var modalbox1=document.getElementById("modalbox1");
    if(modalbox.style.display === "block"){
        modalbox.style.display ="none";
    }
    else{
        modalbox.style.display ="none";
    }
}

function staffingfn(){
    var modalbox=document.getElementById("modalbox");
    var modalstaffng= document.getElementById("modalstaffng");
    if(modalbox.style.display === "none"){
        modalbox.style.display ="block";
        modalstaffng.style.display ="block";

    }
    else{
        modalbox.style.display ="none";
    }
}

function closefn1(){
    var modalbox1=document.getElementById("modalbox1");
    if(modalbox1.style.display === "block"){
        modalbox1.style.display ="none";
    }
    else{
        modalbox1.style.display ="none";
    }
}

function auditfn(){
    var modalbox1=document.getElementById("modalbox1");
    var modalaudit=document.getElementById("modalaudit");
    if( modalaudit.style.display === "none"){
        modalaudit.style.display="block";
        modalbox1.style.display ="block";
    }
    else{
        modalaudit.style.display ="none";
    }
}

function closefn2(){
    var modalbox2=document.getElementById("modalbox2");
    if(modalbox2.style.display === "block"){
        modalbox2.style.display ="none";
    }
    else{
        modalbox2.style.display ="none";
    }
}

function swfn(){
    var modalbox2=document.getElementById("modalbox2");
    var modalsw=document.getElementById("modalsw");
    if( modalsw.style.display === "none"){
        modalsw.style.display="block";
        modalbox2.style.display ="block";
    }
    else{
        modalsw.style.display ="none";
    }
}

function closefn3(){
    var modalbox3=document.getElementById("modalbox3");
    if(modalbox3.style.display === "block"){
        modalbox3.style.display ="none";
    }
    else{
        modalbox3.style.display ="none";
    }
}

function trainingdevfn(){
    var modalbox3=document.getElementById("modalbox3");
    var modalt=document.getElementById("modalt-dev");
    if( modalt.style.display === "none"){
        modalt.style.display="block";
        modalbox3.style.display ="block";
    }
    else{
        modalt.style.display ="none";
    }
}
