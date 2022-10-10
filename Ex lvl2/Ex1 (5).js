var tab=new Array();
	function add_nom(){
		tab.push(prompt("Entrer un nom"));
	}
    function tirage(){
    	if(tab.length>0){
        var rand = Math.floor(Math.random()*tab.length);
        alert("Le nom entrer gagnant est : "+tab[rand]);
    	}
    	else alert("Veillez entrer des noms");
    }