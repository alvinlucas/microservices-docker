
# Compte Rendu - TP Docker Microservices

## Objectif
Création d'un environnement de développement microservices comprenant :
- Un service API Node.js
- Un cache Redis
- Une base de données PostgreSQL
- Un service de monitoring utilisant Prometheus et Grafana

## Étapes Réalisées

### 1. Création de la structure du projet
Nous avons commencé par créer les répertoires de base pour chaque service :
- `api` pour l'API Node.js
- `db` pour PostgreSQL
- `cache` pour Redis
- `monitoring` pour Prometheus et Grafana

### 2. Initialisation du service API
- Création d'un fichier `server.js` pour l'API Node.js.
- Création d'un fichier `.env` pour stocker les variables d'environnement.

### 3. Configuration Docker Compose
Un fichier `docker-compose.yml` a été rédigé pour gérer l'ensemble des services, incluant :
- Le service `api` pour l'application Node.js.
- Le service `db` pour la base de données PostgreSQL.
- Le service `cache` pour Redis.
- Le service `prometheus` pour la collecte de métriques.
- Le service `grafana` pour les tableaux de bord de monitoring.

### 4. Réseau et Volumes
- Création d'un réseau personnalisé pour l'isolation des services.
- Définition de volumes persistants pour PostgreSQL.

### 5. Lancement et construction des services
Utilisation de la commande suivante pour lancer les services et construire les images :
```bash
docker-compose up --build
```


