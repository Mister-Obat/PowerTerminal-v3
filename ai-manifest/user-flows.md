# User Flows - PowerTerminal

## Flow 1 : Découverte & Lancement Rapide (The "Magical" Flow)
1. L'utilisateur lance PowerTerminal.
2. L'app affiche instantanément une grille de ses projets dans `d:/Créations/Programmation/`.
3. L'utilisateur clique sur "MyCoolApp".
4. **Transition** : Le sélecteur s'efface pour laisser place au Dashboard.
5. L'app a détecté un `package.json` : les boutons "start", "build", "test" sont déjà là.
6. L'utilisateur clique sur "start".
7. Un terminal s'ouvre en bas, les logs défilent instantanément.

## Flow 2 : Débogage Multi-Frontend
1. L'utilisateur est sur son Dashboard.
2. Il clique sur `+` dans la zone Terminal pour ouvrir un second onglet.
3. Les onglets s'adaptent automatiquement en largeur pour rester compacts.
4. Il peut basculer entre les deux via des onglets horizontaux stylisés.
5. Il peut fermer n'importe quel onglet via le bouton `－`.

## Flow 3 : Configuration d'une Commande avec Émoji
1. L'utilisateur clique sur "Ajouter une commande".
2. Il clique sur le champ Émoji.
3. Un sélecteur de 80 émojis apparaît élégamment.
4. L'utilisateur sélectionne 🐳, tape "Docker Up" et la commande associée.
5. La commande est immédiatement sauvegardée et prête à être lancée ou réorganisée.
