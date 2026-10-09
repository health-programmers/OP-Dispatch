# OP-Dispatch

## Architecture

L'organisation reprend le principe de NexusCare : des applications séparées par responsabilité et des fonctionnalités regroupées par domaine dans chaque application.

```text
OP-Dispatch/
├── rest-api/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── accounts/
│   │   │   ├── planning/
│   │   │   └── hands-free-communication/
│   │   └── shared/
│   ├── Dockerfile.dev
│   └── package.json
├── web-app/
│   ├── src/
│   │   ├── features/
│   │   │   ├── accounts/
│   │   │   ├── planning/
│   │   │   └── hands-free-communication/
│   │   └── shared/
│   ├── Dockerfile.dev
│   └── package.json
├── websocket/
│   ├── src/
│   │   ├── hands-free-communication/
│   │   └── shared/
│   ├── Dockerfile.dev
│   └── package.json
├── docker-compose.yml
├── .env.example
└── README.md
```

### Responsabilités

- **`rest-api/`** : API NestJS pour les comptes, les règles de planification et les opérations métier.
- **`web-app/`** : interface React/Vite et écrans regroupés par fonctionnalité.
- **`websocket/`** : transport Socket.IO pour les échanges temps réel de la communication mains-libres. Les comptes et règles métier restent la responsabilité de l'API.
- **PostgreSQL et Redis** : services d'infrastructure locaux, comme dans NexusCare. Le modèle de données et les usages de Redis seront précisés avec les besoins fonctionnels.

Les domaines présents dans plusieurs applications représentent leur part de responsabilité respective, pas du code partagé entre serveurs et navigateur.

## Démarrage local

1. Installer Docker Desktop avec Compose.
2. Copier `.env.example` en `.env` et ajuster les ports ou valeurs locales si nécessaire.
3. Lancer le stack :

```sh
docker compose up --build
```

Points d'accès :

| Service | Adresse |
| --- | --- |
| Interface | http://localhost:5173 |
| API | http://localhost:3000/health |
| WebSocket | http://localhost:4000/health |
| PostgreSQL | localhost:5432 |
| Redis | localhost:6379 |

Arrêter les services avec `docker compose down`. Les données PostgreSQL et Redis restent dans des volumes Docker ; `docker compose down -v` les supprime.

## Environnement

`.env.example` contient uniquement des valeurs locales de développement. `.env` n'est pas versionné. Remplacer les mots de passe et secrets de développement avant tout environnement partagé ou déploiement.

## État du socle

Les trois applications démarrent dans des conteneurs de développement et exposent des points de santé. L'API et le serveur temps réel sont des bases minimales ; les fonctionnalités de comptes, planification et communication restent à implémenter. PostgreSQL et Redis sont orchestrés, mais leurs intégrations aux fonctionnalités seront ajoutées avec le modèle métier défini.
