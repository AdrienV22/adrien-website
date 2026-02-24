---
title: "Robots d'automatisation RPA"
publishDate: 2023-09-22
description: "Conception et maintenance de robots RPA en environnement professionnel, dans un contexte sensible soumis à des contraintes de confidentialité et de protection des données de santé."
type: projet
cardBadge: "Projet d'entreprise"
img: "/assets/rpa/main.png"
img_alt: "Illustration symbolique d'automatisation"

gallery:
  - src: "/assets/rpa/main.png"
    alt: "Illustration extraite d'un PDD d'automatisation RPA"

relatedSkills:
  - rpa
  - communication-technique
  - architecture-logicielle
  - pilotagedeprojet
  - developpement-back-end
  - autonomie
  - testqualites
  - travail-en-equipe
---

## Définition
Conception, développement et maintenance de robots d’automatisation (RPA) en environnement professionnel, dans un contexte soumis à des exigences fortes de confidentialité et de protection des données de santé.

Ces automatisations visaient à fiabiliser, accélérer et sécuriser des processus métier répétitifs à forte volumétrie.

## Mise en pratique
- Analyse des processus existants et identification des tâches automatisables.
- Conception d’architectures RPA robustes et maintenables.
- Développement de robots intégrant contrôles d’erreurs, logs et mécanismes de reprise.
- Tests en environnement contrôlé avant mise en production.
- Maintenance corrective et évolutive des robots existants.
- Documentation technique interne pour assurer la continuité.

## Acteurs & interactions
Équipe IT interne (développement, déploiement) ; équipes métier et opérationnelles (validation des processus, retours terrain, priorisation). Échanges en mode Agile : points réguliers, clarification des cas limites et des scénarios d’erreur, validation avant mise en production. Documentation partagée pour la continuité et la reprise par d’autres.

## Contraintes & enjeux
- **Confidentialité** : traitement de données sensibles (données de santé).
- **Robustesse** : gestion des cas limites, erreurs réseau et changements d’interface.
- **Fiabilité** : exécution quotidienne sans interruption.
- **Traçabilité** : journalisation et suivi des incidents.
- **Responsabilité** : impact direct sur des processus critiques.

## Vue technique : déroulement d’un process RPA de base

Un process RPA typique suit une séquence définie, de la récupération des données à traiter jusqu’à la clôture et la traçabilité. Voici les étapes d’un déroulement de base.

**Déclenchement**  
Le robot est lancé selon un planning (tâche planifiée) ou par un événement (fichier déposé, message en file, API). Une fois démarré, il charge sa configuration et les paramètres d’exécution (environnement, chemins, comptes).

**Connexion et ouverture des applications**  
Le process ouvre les applications cibles (navigateur, client lourd, portail web) et s’y connecte si nécessaire (authentification, session). Cette phase inclut des attentes explicites (éléments visibles, délais) pour garantir la stabilité face aux temps de chargement.

**Lecture des données sources**  
Le robot récupère les données à traiter : lecture d’un fichier (Excel, CSV), d’une base, d’une liste en entrée ou extraction depuis une interface. Les données sont structurées en mémoire pour la suite du flux.

**Actions métier (saisie, clics, navigation)**  
C’est le cœur du process : le robot reproduit les actions d’un opérateur. Il navigue dans les écrans, remplit des formulaires, clique sur des boutons, sélectionne des options, en s’appuyant sur des sélecteurs (attributs, position, image selon l’outil). Chaque action est conçue pour être répétable et, idéalement, paramétrable.

**Contrôles et gestion d’erreurs**  
À chaque étape critique, des vérifications sont effectuées (présence d’un élément, cohérence d’une valeur, message d’erreur affiché). En cas d’anomalie, le process peut réessayer (retry), basculer dans une branche de secours, ou s’arrêter de façon contrôlée en remontant une erreur et en laissant un état exploitable pour la reprise.

**Logs et clôture**  
Tout au long de l’exécution, des logs sont écrits (début/fin d’étapes, données traitées, erreurs). En fin de process, les ressources sont libérées (fermeture des applications, déconnexion), un rapport ou un statut est produit, et l’orchestrateur (Orchestrator, scheduler) est informé du succès ou de l’échec.

*En résumé : un process RPA de base enchaîne déclenchement → connexion aux applications → lecture des données → actions métier automatisées → contrôles et gestion d’erreurs → logs et clôture, le tout dans un cadre reproductible et traçable.*

## Résultats
- Automatisation de processus à forte volumétrie.
- Réduction significative des erreurs humaines.
- Gain de temps opérationnel pour les équipes.
- Stabilisation de flux métier sensibles.

Ces projets ont renforcé ma capacité à intervenir sur des systèmes critiques avec rigueur et prudence.

J’ai également apprécié échanger en mode Agile avec les équipes métier et affiner les processus en fonction de leurs besoins.

## Mon autocritique
Niveau **8/10**.

Ma progression a été particulièrement marquée sur la robustesse, la gestion des erreurs et la responsabilité professionnelle.

La principale valeur ajoutée réside dans la fiabilité et la stabilité des solutions mises en production, notamment grâce à l’implémentation d’un nouveau framework UiPath (Robotic Enterprise Framework) focalisé sur la gestion des exceptions et des erreurs lors des process d’automatisation.

## Évolution
- Formalisation accrue des architectures RPA (diagrammes et patterns réutilisables).
- Industrialisation renforcée (monitoring centralisé).
- Mise en place de standards internes de développement RPA.

## Regard critique
La principale difficulté réside dans la dépendance aux interfaces externes et aux évolutions métier.

Avec davantage de moyens, une couche d’abstraction plus formelle et une standardisation accrue des patterns d’automatisation renforceraient la maintenabilité.