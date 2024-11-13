### Le problème

Nous devons chercher dans un ou plusieurs fichiers texte des tokens qui nous sont donnés en argument du programme.

Exemple d'argument:

```
-e dolor -e volupta lipsum.txt
```

Ici les arguments précédés -e représentent des "patterns" à chercher, tandis que les arguments qui ne sont pas précédés d'un -e représentent les fichiers dans lesquels chercher.

Les résultats de cette recherche doivent être exprimés sous forme de JSON sur la sortie stdout, comme suit:

```json
[
  {"file": "lipsum.txt", "pattern": "dolor", "offset": 30},
  {"file": "lipsum.txt", "pattern": "dolor", "offset": 49},
  {"file": "lipsum.txt", "pattern": "dolor", "offset": 155},
  {"file": "lipsum.txt", "pattern": "volupta", "offset": 185}
]
```

## Analyse & recherches

* La solution la plus simple consiste à itérer sur chaque pattern, puis pour chaque pattern ouvrir chaque fichier et chercher le pattern en question.
* On a donc une première fonction qui va parser les arguments dans un objet Javascript, pour lister les "patterns" et les fichiers à lire.
* On a ensuite une seconde fonction qui va s'occuper de boucler sur les différents "patterns", et qui pour chaque pattern va ouvrir les fichiers un par un et vérifier combien de fois le texte recherché s'y trouve.
* Cette fonction remplit un array d'objets correspondant aux propriétés attendues dans le JSON de sortie, et je JSON est ensuite imprimé sur la sortie standard.


## Calcul de complexité

### Complexité temporelle

* On considère nb_fichiers comme le nombre de fichiers
* La regex utilisée pour chercher le texte ne comporte pas de backtracking, donc sa complexité maximale correspond au nombre de caractères du pattern à chercher multiplié par la taille de la chaine de caractère dans laquelle chercher (algorithme de Boyer-Moore-Horspool) - O(nb_char \* string_len)
* On parcourt la liste des patterns - O(n)
* Et on fait cette opération pour chaque fichier - O(n \* nb_fichiers) 

#### Complexité temporelle : O(n \* nb_fichiers \* (nb_char \* string_len))

## Notes complémentaires
* Les fichiers sont réouverts à chaque boucle, pour ne pas les garder en mémoire.
* Cela a un impact sur la complexité mémoire, qui devient moins importante au détriment de la performance puisque (nb_arguments * nb_fichiers) appels à readFileSync sont nécessaires au lieu de nb_fichiers
