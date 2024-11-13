### Le problème

Pour optimiser le nombre de salles de classes à réserver, une école souhaite savoir quel est le nombre maximum de cours différents qui se passent au même moment sur une journée.

On nous fournit un fichier comprenant une liste des cours, avec entre autre leur heure de début et leur heure de fin.

L'exemple donné est le suivant:

```json
[
  {
    "start": "09:00",
    "end": "10:00",
    "session_name": "Cours : Bases de données avec Hibernate",
    "teacher_name": "Nathan TRENET"
  },
  {
    "start": "09:00",
    "end": "10:00",
    "session_name": "Cours : Bases de données avec EntityFramework Core",
    "teacher_name": "Ethan TRANNET"
  }
]
```

## Analyse & recherches

* La solution la plus simple directement retenue était un array qui retenait le nombre de salles nécessaires à chaque minute de la journée
* On a donc un array qui sert de timeline, et à chaque minute où un cours a lieu, la valeur de l'array à la position de cette minute est incrémentée


## Calcul de complexité

### Complexité temporelle

* On considère n comme le nombre de cours sur une journée
* On considère aussi m = (max-min) la plus longue durée d'un cours
* On a 3 assignations, puis 2 assignations par boucle sur la liste de cours et pour chaque cours on boucle sur sa durée
* J'utilise aussi la fonction Math.max qui a une complexité de n pour renvoyer la valeur maximale du tableau
* T(n) = 3 + 3mn


#### Complexité temporelle : O(nm)

### Complexité spatiale

* On garde n comme le nombre de cours.

* L'objet qui contient les infos d'un cours a 8 champs donc la liste des cours parsée a 8n
* On rajoute à ça schedule, min, max : 3
* La timeline , un tableau de 1440 cases qui représente chaque minute d'un jour
* S(n) = 8n + 1443

#### Complexité spatiale : O(n)
