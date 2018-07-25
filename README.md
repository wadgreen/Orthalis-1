=========================================== Le guide Hub =========================================
--------------------------------------------------------------------------------------------------
1) Cloner le projet sur votre ordinateur :
--------------------------------------------------------------------------------------------------

					Terminal :

// placez-vous dans var/www/html/	cd ~/../../var/www/html
// on récupère le projet		git clone https://github.com/mIaborde/Orthalis
// on se place dedans			cd Orthalis

// Vous venez de récupérer le dossier de votre projet et vous vous êtes placé à l'intérieur
--------------------------------------------------------------------------------------------------
2) Créer votre branche, vous mettre dedans et définir le push par défaut :
--------------------------------------------------------------------------------------------------

// Toto c'est votre prénom... 		Terminal :

// création de la branche 'Toto'	git branch Toto
// on se place dedans			git checkout Toto
// branche par défaut			git push origin Toto

// Vous êtes prêt à bosser, attendez une réunion  pour merger.
--------------------------------------------------------------------------------------------------
3) Actions à faire au quotidien :
--------------------------------------------------------------------------------------------------
// Quand vous voulez sauvegarder votre travail en cours sur votre branche :

				 	Terminal :

// placez-vous dans le projet		cd ~/../../var/www/html/Orthalis
// ajouter tous les fichiers		git add .
// sauvegarder les changements		git commit -m "expliquez entre les guillemets la fonctionnalité que vous avez codé"
// mettre vos changements en ligne	git push
	
--------------------------------------------------------------------------------------------------
4) Merger (c'est à dire fusionner) votre branche sur la master :
--------------------------------------------------------------------------------------------------

// placez-vous dans le projet		cd ~/../../var/www/html/Orthalis
// On revient dans la branche master	git checkout master
// On fusionne Toto au master		git merge origin/Toto

==================================================================================================

