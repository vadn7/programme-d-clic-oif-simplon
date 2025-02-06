const motDePasse =  prompt("Veuillez entrer votre mot de passe")


let motDePasseConfirme = prompt("Veuillez confirmer votre mot de passe")

while( motDePasseConfirme !== motDePasse )
{

motDePasseConfirme = prompt("Mot de passe incorrecte, veuillez recommencer")


}

alert(`Mot de passe confirmé !`)