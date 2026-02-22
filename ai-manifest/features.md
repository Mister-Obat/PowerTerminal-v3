# Features Details - PowerTerminal

## 1. Scanner & Auto-Detection
Le système de scan doit être efficace et non bloquant.

### Logique de Détection
L'app scanne le dossier racine (`d:/Créations/Programmation/`) et identifie les projets via des "signatures" :
- **Node.js** : `package.json`
- **Rust** : `Cargo.toml`
- **Python** : `requirements.txt`, `pyproject.toml`
- **Go** : `go.mod`
- **Docker** : `docker-compose.yml`

### Scripts Automatiques
Pour Node.js, PowerTerminal extrait les clés de l'objet `"scripts"` du `package.json` pour peupler instantanément le dashboard.

## 2. Command Engine
Chaque commande est exécutée via un processus `node-pty`.

### Command Customization
Structure d'une commande stockée dans `metadata` :
```json
{
  "label": "Start Dev",
  "command": "npm run dev",
  "emoji": "🚀"
}
```
L'interface utilise un **Emoji Picker** (80 options) pour simplifier la personnalisation sans librairies d'icônes externes.

### Templating System
Support des placeholders :
- `{{root}}` : Chemin racine du projet.
- `{{activeTerminal}}` : ID du terminal en focus.
- `{{input:Label}}` : Déclenche un prompt UI avant exécution.

## 3. Persistent Storage
Utilisation de `electron-store` ou d'un simple fichier JSON dans `userData`.

### Données stockées :
- `projects.json` : Historique des projets connus, icônes personnalisées.
- `config.json` : Thèmes, préférences de shell (PowerShell/CMD/Bash).
- `sessions/` : Dossier contenant l'état des terminaux (logs récents et chemins) pour restauration.

## 4. Multi-Terminal Management
- **State Store** : Liste d'objets `TerminalInstance` avec IDs uniques.
- **Adaptive Tabs** : Système de compaction automatique des onglets horizontaux pour éviter l'élargissement de la colonne.
- **Shutdown** : Bouton "-" dédié pour terminer proprement le processus PTY actif et libérer les ressources.
