### Le problème

Pour optimiser ses process de travail, une entreprise veut mettre en place une série de workflow composé de tâches, qui sont lancés avec des arguments.
Les workflows et les tâches nous sont donnés en premier argument, au format suivant:

```json
[
  {
    "id": 0,
    "task_type": "primitive"
  },
  {
    "id": 1,
    "tasks": [0],
    "task_type": "workflow"
  }
]
```
Les différents arguments utilisés pour lancer les workflows sont donnés dans un second argument:

```json
[
  {
    "workflow_id": 1,
    "input": "Ma liberté de penser"
  }
]
```

Enfin, en sortie le programme doit produire un hash MD5 correspondant à l'input qui lui est fourni. Ce hash est composé de la concaténation des bytes des différents résultats des tâches qui composent le workflow.

## Analyse & recherches

* Vu que les workflows peuvent appeler d'autres workflows, la solution qui m'a semblé la plus évidente revenait à faire un algorithme récursif.
* En revanche, la gestion des buffers m'a fait ✨cracher du sang✨, j'ai rarement eu à créer un algorithme aussi simple et à la fois si complexe à mettre en place.

* Dans l'esprit, on récupère la liste des workflows et des tâches à exécuter, la liste des inputs, et on lance un par un les workflows avec leurs inputs.
* Avec une fonction récursive, on génère un hash selon le type de tâche, et s'il y a des sous-tâches on génère de manière récursive leur hash.
* On retourne ensuite le hash final en cascade quand on a épuisé toutes les sous-tâches.

## Calcul de complexité

### Complexité temporelle

Soit n le nombre de tâches, pour lancer une tâche primitive on a :
* une boucle avec une comparaison sur la liste des tâches puis une comparaison au niveau du premier workflow
* une boucle avec une comparaison sur la liste des tâches et 3 comparaisons pour les sous-tâches
* Un hash md5 par tâche workflow (complexité O(n) )
-> Pour la source voir bas du readme
* T(n) = n + 1 + n + 3 + n
* T(n) = 3n + 4 pour un workflow
* Soit w le nombre de workflow lancés pour une execution on obtient T(n) = w(3n + 4)


#### Complexité d'ordre : O(Wn)

Source complexité hash MD5: https://iopscience.iop.org/article/10.1088/1742-6596/978/1/012116/pdf%23:~:text%3DGraph%2520about%2520average%2520running%2520time,faster%2520than%2520a%2520SHA256%2520algorithm.%26text%3DIn%2520conclusion%252C%2520we%2520know%2520that,MD5%2520is%2520faster%2520than%2520SHA256.&ved=2ahUKEwi117Pbj9SEAxXffKQEHQqHDvQQFnoECBcQBg&usg=AOvVaw1VVgJ-fEQddNca2P4OQi8p 
