$liste = document.getElementById("liste");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");


    function selection(l){
    l.target.classList.toggle("selectionner");
}

    function supprimer(){
    for (i = 0 ; i < $liste.children.length ; i++) {
        if ($liste.children[i].classList.contains("selectionner")) {
            $liste.children[i].classList.add("supprimer");  
        }
    }
    
}

    function restaurer(){
    for (i = 0; i < $liste.children.length; i++) {
        $liste.children[i].classList.remove("supprimer");
    }
}

$liste.onclick = selection;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;