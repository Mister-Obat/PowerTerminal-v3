# Tech Stack Justification: PowerTerminal

## Pourquoi Electron ?
PowerTerminal n'est pas une application web classique. Elle doit :
- Lire et lister des répertoires arbitraires sur le disque (`d:/Créations/Programmation/`).
- Spawner des processus (`npm`, `git`) et capturer leur sortie en temps réel.
- Gérer des terminaux persistants.
Electron est la solution la plus robuste pour combiner **UI Web Premium** et **Node.js Natif** sur Windows.

## Pourquoi Vanilla JS/CSS ?
Conformément aux principes du projet :
- **Performance** : Pas de surcharge de framework (React/Vue) pour une application centrée sur le terminal.
- **Contrôle** : Le design "Wow" et premium est plus facile à affiner sans les contraintes d'une librairie de composants.
- **Maintenance** : Moins de dépendances = plus de stabilité sur le long terme.

## Pourquoi Xterm.js & node-pty ?
- **Fidélité** : `xterm.js` offre un rendu fidèle des séquences ANSI (couleurs, curseurs).
- **Shell Réel** : `node-pty` permet d'avoir un vrai shell (PowerShell ou CMD sur Windows) et non une simple simulation.

## Persistance & Sécurité (Custom)
- **State Management** : Utilisation de `electron-store` pour sauvegarder les métadonnées (favoris, commandes, logos) de manière persistante sur le disque.
- **Logo Protocol** : Implémentation d'un protocole personnalisé `logo://` pour charger les icônes de projets locaux de manière sécurisée sans violer la CSP d'Electron.
