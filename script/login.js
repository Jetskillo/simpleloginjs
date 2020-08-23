//Add array of data or call an API

//Here we gonna do with fixed data
var accessData = [
    {
        login: "convidado",
        pass: "senhaconvidado"
    }
]

//Function to show the Modal
function noAccess(){
    var modalNoAccess = document.getElementById("staticBackdrop");
    if(modalNoAccess.style.display === "none"){
        modalNoAccess.style.display = "block";
    }
}


function tryEnter() {
    var login = document.getElementById("inputLogin").value;
    var pass = document.getElementById("inputPass").value;

    for(i = 0; i < accessData.length; i++){
        if(login == accessData[i].login && pass == accessData[i].pass){
            console.log("Done");
            return
        }
    }
    console.log("Fail");
}