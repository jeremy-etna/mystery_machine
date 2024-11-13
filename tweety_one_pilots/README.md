# Analyse des Hashtags
## Le problème
Nous avons besoin d'analyser les hashtags à partir d'un ensemble de tweets pour identifier les hashtags les plus pertinents. Le but est de filtrer les hashtags en fonction de leur fréquence d'apparition et de ne retenir que ceux qui dépassent un certain seuil de pourcentage par rapport au total des hashtags analysés.

## Solution proposée
Le script `analyseHashtags` lit un fichier JSON contenant des tweets, chacun avec une liste de hashtags et un seuil de pourcentage pour le filtrage. Le script calcule la fréquence de chaque hashtag, détermine leur pourcentage de présence par rapport au total, et  filtre ceux qui sont au-dessus du seuil spécifié.

### Détails de l'implémentation
- **Lecture du fichier :** Utilisation de `fs.readFileSync` pour lire le contenu du fichier JSON.
- **Analyse des données :** Extraction des tweets et du seuil de pourcentage à partir du fichier JSON.
- **Comptage des hashtags :** Pour chaque tweet, on compte le nombre d'occurrences de chaque hashtag.
- **Calcul du pourcentage :** Pour chaque hashtag unique, on calcule son pourcentage par rapport au total des hashtags.
- **Filtrage :** Sélection des hashtags dont le pourcentage dépasse le seuil spécifié.
- **Sortie :** on retourne une liste JSON des hashtags tries et filtrés.

### Complexité
Complexité temporelle

Le script commence par lire un fichier .json et on le parse avec JSON.parse(). La complexite de cette etape est `O(p)` ou p est la taille du fichier en octets.

Ensuite, le script parcourt chaque tweet et chaque hashtag pour les compter. La complexité de cette étape est (pour simplifier) `O(t * h)` ou t est le nombre de tweets et h est le nombre de hashtags par tweet (pour parcourir le tableau de tweets, on utilise une boucle 'for' qui a une complexité initiale de O(t). Une seconde boucle 'for' imbriquee dans la premiere parcourt les hashtags de chaque tweet).
En verite, cette complexite O(t * h) est une simplification grossiere car le nombre de hashtags par tweets est variable. Nous considerons ici h comme une moyenne.

Puis on peut prendre en consideration la complexite liee a l'utilisation de la methode map() qui est `o(m)`.

Enfin, le script filtre les hashtags en fonction de leur pourcentage. Pour cela, on utilise la methode 'filter()' qui a une complexite theorique O(n). La complexité de cette étape est donc `O(f)` ou f est le nombre de hashtags contenus dans `hashtagsArray`.

La complexité totale du script est donc `O(p + t * h + m + f)`.
L'expression ci-dessus est suffisemment detaillee pour exprimer la complexite dans tous les cas. Cependant, nous pouvons mettre en evidence certains termes en fonctions de ces differents cas.

- **Meilleur Cas** : Si tous les tweets contiennent un petit nombre de hashtags , h reste faible. La performance sera alors principalement determinee par le parcours initial des tweets.
Dans ce cas, comme h est faible, c'est la valeur de t qui va etre determinente.

- **Cas Moyen** : Dans une utilisation moyenne, où les tweets contiennent un nombre homogene de hashtags répétitifs et uniques, la complexité `O(n + t * h + m + f)` représente bien l'équilibre entre le parsing, le parcours des tweets et des hashtags et le filtrage.

- **Pire Cas** : Le pire cas arrive quand presque tous les tweets contiennent beaucoup de hashtags, cela maximise h et rend le parcours initial plus long.
Ici, la valeur de h est determinante car elle multipliera t de facon tres importante pendant le parcours. D'autre part, si h contient beaucoup de hashtrags uniques, cela augmente d'autant plus la valeur du mapping et du filtrage.

### Utilisation
```bash
node analyseHashtags.js tweets.json