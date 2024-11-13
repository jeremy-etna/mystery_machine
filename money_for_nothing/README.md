### Le problème

Un nouvel investisseur en bourse veux optimiser ses placements boursiers pour faire du profit à court terme.
On va devoir suivre une prédictions de prix d'un produit boursier sur une journée pour planifier la meilleure stratégie d'achat/vente afin de maximiser les gains sur cette période.
L'investisseur ne peut pas acheter un produit boursier s'il en possède déjà un, il doit d'abord le vendre car il ne veut pas de position long terme.

L'exemple donné est le suivant:

une list d'entier sous format json
```json
[108, 45, 216, 215, 213, 96, 167, 245]
```

Avec comme résultat:

```json
[1, 2, 5, 7]
```

## Analyse & recherches

N représente la taille de la liste de prédictions et result est une liste vide qui sera utilisée pour stocker les indices où des achats ou des ventes doivent être effectués.
On a une boucle for qui parcourt les indices de 1 à n-1 et qui à chaque itération compare le prix actuel (predictions[i]) avec le prix précédent (predictions[i - 1]).
Si le prix actuel est supérieur au prix précédent, cela signifie qu'il y a une augmentation de prix. On planifie alors un achat (i - 1) et on cherche le prochain point où vendre pour dégager un max de profit.
La boucle while continue d'itérer tant que le prix continue d'augmenter avec pour objectif  de trouver le point où le prix commence à diminuer.
Lorsque cette diminution est détectée, on planifie une vente en ajoutant l'indice actuel (i - 1) à la liste des résultats.
Puis, on retourne la liste des résultats.


## Calcul de complexité

### Complexité temporelle

La complexité temporelle d'un algorithme est déterminée par le nombre d'opérations qu'il doit effectuer en fonction de la taille de l'entrée. 
Dans le cas de cette fonction, la taille de l'entrée est le nombre d'éléments dans le tableau pricePredict ( json passé en param ). 
La boucle for principale parcourt chaque élément du tableau une fois, et la boucle while à l'intérieur de la boucle for peut également parcourir chaque élément une fois au maximum. 
Cela donne une complexité de 2n. 
À chaque itération, l'algorithme effectue une comparaison entre l'élément actuel et l'élément précédent, ce qui est une opération constante. 
Cela ne change donc pas la complexité de 2n. 
La boucle while à l'intérieur de la boucle for continue d'itérer tant que le prix continue d'augmenter mais une fois qu'elle a parcouru ces éléments, 
la boucle for principale ne les revisite pas.
Comme chaque élément du tableau est visité une fois par la boucle for et une fois par la boucle while au maximum qui confirme la complexité de 2n. 
Dans ce contexte particulier où nous ne tendons pas vers l'infini et où les coefficients doivent subsister, 
nous ne simplifions pas la complexité en O(n) comme on le ferait en notation big O. 
De ce fait, même si l'algorithme utilise l'élément x et l'élément x-1 à chaque tour de boucle cela ne change pas la complexité temporelle de l'algorithme qui reste 2n.

