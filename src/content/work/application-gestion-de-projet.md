---
title: "Application de gestion de projet"
publishDate: 2023-09-22
description: "Une application web full-stack de gestion de projet (projets, tâches, statuts, priorités, attribution), conçue pour être maintenable, testable et industrialisable (Docker + couverture)."

img: "/assets/pmt/board.png"
img_alt: "Page d'accueil de l'application de gestion de projet"

gallery:
  - src: "/assets/pmt/connexion.png"
    alt: "Page de connexion"
  - src: "/assets/pmt/board.png"
    alt: "Tableau de bord"
  - src: "/assets/pmt/detail-projet.png"
    alt: "Page de détail du projet"
  - src: "/assets/pmt/tasks.png"
    alt: "Liste des tâches"
  - src: "/assets/pmt/inscription.png"
    alt: "Page d'inscription"

relatedSkills:
  - architecture-logicielle
  - pilotagedeprojet
  - developpement-back-end
  - autonomie
  - testqualites
  - git

links:
  repoFrontend: "https://github.com/AdrienV22/project-management-tool-frontend"
  repoBackend: "https://github.com/AdrienV22/project-management-tool-backend"
---

## Définition

Une application web de gestion de projet pensée comme un socle « produit » : créer des projets, piloter des tâches, suivre des statuts et priorités, et maintenir une cohérence front ↔ back dans un cadre industrialisable.

## Mise en pratique

- Conception d’une architecture full-stack claire (front Angular / back Spring Boot) avec séparation nette des responsabilités.
- Modélisation des entités (utilisateur, projet, tâche) et définition des règles métier (statuts, priorités, attribution, filtrage).
- Mise en place d’endpoints REST stables, gestion d’erreurs explicites, et cohérence des opérations CRUD.
- Déploiement reproductible via Docker Compose et démarche orientée qualité (tests + couverture).

## Acteurs & interactions
Projet réalisé en autonomie (conception, développement, tests). Validation et retours dans le cadre académique (livrables, démonstrations). Pas d’équipe métier dédiée : les « acteurs » sont les utilisateurs cibles (gestion de projets / tâches) et le cadre pédagogique pour les revues.

## Contraintes & enjeux

- **Cohérence fonctionnelle** : règles métier compréhensibles et applicables de bout en bout.
- **Robustesse** : validation des entrées, statuts HTTP cohérents, cas limites anticipés.
- **Qualité mesurable** : tests automatisés et couverture significative (backend & frontend).
- **Industrialisation** : exécution reproductible et préparation d’un pipeline CI/CD.

## Résultats

- Application full-stack opérationnelle permettant de gérer projets et tâches (statuts, priorités, suivi, attribution).
- Structure de code maintenable (contrats API, organisation claire, séparation front/back).
- Qualité renforcée par les tests et la couverture, et exécution reproductible via Docker.

## Mon autocritique

Niveau **7/10**. La base est cohérente : architecture claire, industrialisation en place, et logique « produit » assumée. Le point fort principal est la capacité à livrer un ensemble fonctionnel + testable + déployable, sans sur-ingénierie, tout en gardant une lecture simple.

## Évolution

- Formaliser davantage les contrats (DTO / schémas) dès le début pour réduire les ajustements front/back.
- Définir une stratégie de tests plus tôt (prioriser les règles métier critiques).
- Ajouter une documentation d’API plus formelle pour renforcer la maintenabilité.

## Regard critique

Avec le recul, l’axe principal d’amélioration est la formalisation « plus tôt » : contrats, tests, et documentation. La réalisation reste une référence de méthode : décisions justifiées, résultats visibles, et base réutilisable pour des variantes (droits avancés, notifications, reporting).
