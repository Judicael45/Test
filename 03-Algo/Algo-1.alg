<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER mot" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" maxBoucle="500000" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#mot" algoitem="mot EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#mot2" algoitem="mot2 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#mot#&quot;Ananas&quot;#pasliste" algoitem="mot PREND_LA_VALEUR &quot;Ananas&quot;"/>
        <item code="3#mot#0#pasliste" algoitem="AFFICHER mot"/>
        <item code="2#mot2#pasliste" algoitem="LIRE mot2"/>
        <item code="4#j'aime la#0" algoitem="AFFICHER &quot;j'aime la&quot;"/>
        <item code="3#mot2#0#pasliste" algoitem="AFFICHER mot2"/>
        <item code="4#pizza#0" algoitem="AFFICHER &quot;pizza&quot;"/>
        <item code="4#a l'#0" algoitem="AFFICHER &quot;a l'&quot;"/>
        <item code="3#mot#0#pasliste" algoitem="AFFICHER mot"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
