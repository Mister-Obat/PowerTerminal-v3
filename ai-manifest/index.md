# PowerTerminal Manifest

## Vision
PowerTerminal est un **Orchestrateur de Workflow Contextuel** conçu pour transformer la gestion de projet en une expérience fluide et automatisée. Au-delà d'un simple terminal, c'est un centre de contrôle intelligent qui comprend l'état de vos projets et anticipe vos besoins.

## Cas d'Usage Avancés

### 1. Le "Zero-Config" Developer Experience
- **Scénario** : Un développeur ouvre un nouveau projet Rust ou Node.js.
- **Action PowerTerminal** : L'app détecte les fichiers `Cargo.toml` ou `package.json`, suggère automatiquement l'installation des dépendances et expose les scripts de build/run sous forme de boutons d'action immédiate.
- **Valeur** : Réduction du temps de setup à zéro.

### 2. Orchestration Multi-Processus (The "Fullstack One-Click")
- **Scénario** : Un projet nécessite de lancer simultanément un Frontend (Vite), un Backend (NestJS) et une DB (Docker Compose).
- **Action PowerTerminal** : Création de "Groupes de Commandes". Un bouton unique "Start Dev Environment" ouvre 3 terminaux, les nomme, et lance les 3 processus avec un monitoring visuel de leur santé.
- **Valeur** : Évite la répétition manuelle de commandes complexes.

### 3. Commandes Interactives & Templating
- **Scénario** : L'utilisateur doit souvent créer des branches git avec un préfixe spécifique ou générer des composants.
- **Action PowerTerminal** : Support de variables dans les commandes (ex: `git checkout -b feature/{{issue_id}}`). L'interface affiche un champ texte pour `issue_id` avant le lancement.
- **Valeur** : Puissance des scripts sans l'effort de la ligne de commande pure.

### 4. Perspectives de Session
- **Scénario** : Passer d'un projet A (Debug API) à un projet B (Refacto UI).
- **Action PowerTerminal** : L'app sauvegarde l'état des terminaux, les logs récents et le layout par projet. Réouvrir le projet A restaure l'espace de travail exactement comme laissé.
- **Valeur** : Continuité de travail instantanée.

## Fonctionnalités Clés

### 1. Sélecteur de Projets Intelligent (Smart Scanner)
- **Localisation** : `d:/Créations/Programmation/`.
- **Analyse Auto** : Scan récursif léger pour identifier le type de projet (Web, Mobile, Backend, Rust, etc.).
- **Interface** : Grid visuelle avec icônes dynamiques basées sur la techno détectée.

### 2. Dashboard de Commandes Dynamique
- **Customisation** : Ajout manuel de commandes avec sélecteur riche de 80 émojis.
- **Réorganisation** : Système de Drag & Drop organique pour ordonner les commandes.
- **Actions Rapides** : Boutons Lancer, Modifier et Supprimer (avec confirmation) intégrés à chaque carte.

### 3. Gestion de Terminaux Multi-Tab
- **Tabs Compactes** : Système d'onglets horizontaux avec gestion de la compression (compaction) pour garder une interface stable.
- **Shutdown Contrôlé** : Bouton de fermeture dédié pour chaque terminal.
- **Persistance** : Sauvegarde de l'état des terminaux par projet.

## Invariants & Contraintes
- **Aesthetics** : Design "Wow" obligatoire. Glassmorphism, flous de fond, transitions CSS 60fps.
- **Performance** : L'interface doit rester réactive même avec des sorties de logs massives.
- **Fiabilité** : Gestion propre des signaux de sortie (SIGINT/SIGTERM) lors de la fermeture des terminaux.

## Structure /ai-manifest/
- `index.md` : Vision et invariants globaux.
- `tech-stack.md` : Justification des choix technologiques.
- `features.md` : Spécifications techniques détaillées.
- `design.md` : Guide de style et composants.
- `user-flows.md` : Parcours utilisateurs détaillés.

