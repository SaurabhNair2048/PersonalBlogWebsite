function subscribeButtonClicked(){
    var text = document.getElementById("subscribe").value;
    if(text == "SUBSCRIBE"){
        document.getElementById("subscribe").value = "SUBSCRIBED";
    }
    else{
        document.getElementById("subscribe").value = "SUBSCRIBE";
    }
}

function likeButtonClicked(){
    var text = document.getElementById("like").value;
    if(text == "LIKE"){
        document.getElementById("like").value = "LIKED";
    }
    else{
        document.getElementById("like").value = "LIKE";
    }
}