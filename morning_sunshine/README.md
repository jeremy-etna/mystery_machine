**Le problème:**

Nous devons calculer le profit annuel d'un promoteur immobilier qui augmenterait de 5% les loyers de ses appartements
faisant face au soleil levant (est).

Nous disposons de données aux formats JSON avec diverses informations qui sont les suivantes:
- Le nombre d'étages de l'immeuble
- l'agencement d'un étage, sous forme de liste d'appartements, avec pour chacun :
   -le loyer mensuel de l'année précédente
   -les directions vers lesquelles il est orienté

L'exemple donné est le suivant:
```json
[
  {
    "height": 15,
    "floor_layout": [
      {"monthly_rent": 1200, "orientations": ["E", "N"]},
      {"monthly_rent": 1200, "orientations": ["S", "W"]}
    ]
  },
  {
    "height": 6,
    "floor_layout": [
      {"monthly_rent": 2300, "orientations": ["N", "S", "E", "W"]}
    ]
  }
]
```

**La solution:**

Il y a plusieurs éléments clefs à prendre en compte, le premier évidemment est le fait que l'appartement soit orienté vers l'est,
le second est le fait que qu'il faut prendre en compte qu'il n'y est pas d'immeuble plus haut qui cacherait le lever de soleil.

Pour cela, nous allons créer une variable highest pour pouvoir comparer la taille des immeubles et ainsi savoir si l'on peut
augmenter le loyer de l'appartement. Nous stockerons les bénéfices dans la variable déclarer préalablement: gain.
Après avoir déduit si oui ou non le loyer peut être augmenter,puis nous multiplions les gains de cette augmentation
par 12 pour avoir le bénéfice annuel.

**Compléxité:**

En termes de complexité, l'algorithme a une complexité temporelle de O(n*m) où n est le nombre de bâtiments et m est 
le nombre moyen d'appartements par étage.
Pour ce qu'il est de la complexité spatiale, elle est de O(1) car nous n'utilisons pas de variables supplémentaires après
avoir déclarer les variables nécessaires décrites précédemment.