# Rendu actuel

https://miaborde.github.io/Orthalis/


# GuideHub

Comment participer au projet avec Git et ses lignes de commandes ?

## Démarrage

Il vous faudra d'abord cloner le projet sur votre machine, c'est à dire récupérer le repository depuis mon compte Github et le placer dans votre espace de travail.
Pour la suite des l'explications on partira du fait que vous travaillez depuis votre serveur local.


### 1) Cloner le projet sur votre ordinateur :

placez-vous dans var/www/html/
```
cd ~/../../var/www/html
```

on récupère le projet 'Orthalis'
```
git clone https://github.com/mIaborde/Orthalis
```

on se place dedans
```
cd Orthalis
```


### 2) Créer votre branche, vous mettre dedans et définir le push par défaut :

création de la branche 'Toto'
```
git branch Toto
```

on se place dedans
```
git checkout Toto
```

branche par défaut
```
git push origin Toto
```

Vous êtes prêt à bosser, attendez une réunion  pour merger.


### 3) Actions à faire au quotidien :

Quand vous voulez sauvegarder votre travail en cours sur votre branche :

placez-vous dans le projet
```
cd ~/../../var/www/html/Orthalis
```

ajouter tous les fichiers
```
git add .
```

sauvegarder les changements
```
git commit -m "expliquez entre les guillemets la fonctionnalité que vous avez codé"
```

mettre vos changements en ligne
```
git push
```


### 4) Merger (c'est à dire fusionner) votre branche sur la master :

placez-vous dans le projet
```
cd ~/../../var/www/html/Orthalis
```

On revient dans la branche master
```
git checkout master
```

On fusionne Toto au master
```
git merge origin/Toto
```
// expliquez les fonctionnalités ajoutées depuis votre branche et les impacts de votre merge
// Vérifier que tout fonctionne en local

mettre vos changements en ligne
```
git push
```

revenir à votre branche pour continuer à bosser ;)
```
git checkout Toto
```
