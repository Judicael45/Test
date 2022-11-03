<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//On demande à l'utilisateur de rentrer un chiffre"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#chiffres" algoitem="chiffres EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="19#On demande à l'utilisateur de rentrer un chiffre" algoitem="//On demande à l'utilisateur de rentrer un chiffre"/>
        <item code="2#chiffres#pasliste" algoitem="LIRE chiffres"/>
        <item code="6#chiffre &lt;5" algoitem="SI (chiffre &lt;5) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#t'es un grand chiffres#0" algoitem="AFFICHER &quot;t'es un grand chiffres&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#chiffre >5" algoitem="SI (chiffre >5) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="" algoitem=""/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="4#c'est juste moyen#0" algoitem="AFFICHER &quot;c'est juste moyen&quot;"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
        <item code="103#commentaire" algoitem=""/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
