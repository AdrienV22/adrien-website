---
title: "Refonte d’architecture API & Système de recommandation"
publishDate: 2024-03-01
description: "Refonte complète d’une API Spring obsolète, sécurisation via Spring Security, mise en place d’une architecture REST conforme aux principes SOLID et intégration d’un système de recommandation Machine Learning via FastAPI."
type: projet

img: "/assets/gamesup/architecture-cover.png"
img_alt: "Schéma d'architecture API Spring et service Python ML"

relatedSkills:
  - architecture-logicielle
  - developpement-back-end
  - testqualites
  - pilotagedeprojet
  - autonomie
---

## Définition

Dans le cadre d’une étude de cas d’architecture logicielle avancée, j’ai été chargé de refondre l’API backend d’une plateforme e-commerce de jeux de société en forte croissance, mais instable et mal structurée.

L’objectif était de reprendre un code existant défaillant, de redéfinir entièrement son architecture selon les principes REST et SOLID, d’intégrer une couche de sécurité robuste et de concevoir un système de recommandation basé sur le Machine Learning via une API Python indépendante.

## Mise en pratique

- Analyse du code existant et identification des violations architecturales.
- Refactorisation complète de l’API Spring selon une architecture en couches (Controller / Service / Repository).
- Mise en conformité avec les principes SOLID.
- Implémentation de Hibernate pour la gestion ORM.
- Mise en place d’une authentification et autorisation via Spring Security (rôles client / admin).
- Développement des fonctionnalités CRUD pour les entités : client, jeu, éditeur, auteur, commande.
- Implémentation d’un moteur de recherche sur le catalogue.
- Rédaction de tests unitaires et d’intégration pour garantir la non-régression.
- Conception et implémentation d’un modèle KNN dans une API Python FastAPI.
- Mise en place d’une communication inter-services (API Spring ↔ API Python).
- Identification des données nécessaires au futur entraînement du modèle ML.
- Production des diagrammes UML : architecture, classes, composants, séquences dans le README.md.

## Contraintes & enjeux

- **Dette technique existante** : obligation de reprendre et améliorer un code défaillant.
- **Architecture REST cohérente** : séparation claire des responsabilités.
- **Sécurité applicative** : gestion des rôles et protection des endpoints sensibles.
- **Interopérabilité** : communication fiable entre API Java et API Python.
- **Testabilité** : couverture significative et prévention des régressions.
- **Conception ML** : implémentation d’un modèle malgré un jeu de données limité.

## Résultats

- API Spring restructurée, maintenable et modulaire.
- Implémentation des principes SOLID vérifiable dans la structure du code.
- Sécurisation des endpoints sensibles.
- Mise en place d’un système de recommandation basé sur un modèle KNN fonctionnel.
- Communication entre microservices Java et Python.
- Documentation architecturale complète (diagrammes UML + justification technique).
- Couverture de tests garantissant la stabilité des fonctionnalités critiques.

Ce projet démontre une capacité à intervenir sur une architecture dégradée pour la transformer en système cohérent et industrialisable.

## Auto-évaluation

Niveau **7/10**.

Le point fort majeur réside dans la capacité à reprendre un système existant, identifier ses faiblesses structurelles et reconstruire une architecture propre tout en respectant des contraintes imposées.

## Évolution

- Amélioration future du modèle ML via enrichissement des données réelles.
- Mise en place d’un monitoring inter-services.
- Containerisation complète et orchestration.
- Ajout d’une documentation OpenAPI formelle.
- Extension vers une architecture microservices plus fine si la volumétrie augmente.

## Regard critique

Le principal défi fut de travailler à partir d’un code existant imparfait tout en respectant la contrainte de réutilisation imposée par le scénario.

Avec davantage de temps, une séparation plus nette en microservices indépendants aurait pu être envisagée dès le départ.

Sur la partie Machine Learning, la limitation principale reste la qualité et la quantité des données disponibles.
