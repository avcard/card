function toggleCard(obj){
    var c = document.getElementById(obj);
    if(c.style.display!=="grid"){
        c.style.display = "grid";
        document.getElementById("button1").innerText = "Show me less";
    }
    else{
        c.style.display="none";
        document.getElementById("button1").innerText = "Show me more";
    }
}
