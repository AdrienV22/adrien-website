---
title: "Tests & qualité logicielle"
type: "technique"
level: 6.5
summary: "Sécuriser et fiabiliser un système logiciel par des tests ciblés, une couverture mesurée et une démarche qualité structurée."

evidence:
  - title: "Mise en place de tests unitaires sur API Spring Boot"
    context: "Développement d'une API REST dans le cadre d'un projet full stack."
    result: "Réduction des régressions fonctionnelles, confiance lors des refactorings, code plus modulaire et lisible."
  - title: "Intégration d'un suivi de couverture (JaCoCo)"
    context: "Mesure objective de la qualité du code produit."
    result: "Vision claire des zones à risque, amélioration progressive de la couverture, démarche qualité mesurable."

growth:
  - "Développer une stratégie de tests plus complète (intégration et E2E)"
  - "Automatiser davantage les contrôles qualité en CI/CD"
  - "Approfondir les approches de tests contractuels et de validation d'API"

relatedWorks: ["application-gestion-de-projet", "refonte-architecture", "portfolio"]
---

## Définition et contexte professionnel

La qualité logicielle vise à garantir la fiabilité, la maintenabilité et la stabilité d’un système à travers des pratiques de test, de validation et de mesure.

Dans un contexte d’évolution continue des applications, l’absence de stratégie de test expose le projet à des régressions fréquentes et à une dette technique difficilement maîtrisable. Les tests unitaires, les validations d’intégration et l’analyse de couverture constituent des leviers essentiels pour sécuriser les livraisons.

Au-delà de la simple exécution de tests, la qualité logicielle implique une réflexion sur la testabilité du code, le découpage des responsabilités et l’automatisation des contrôles dans une logique d’intégration continue.

---

## Éléments de preuve

### Mise en place de tests unitaires sur API Spring Boot

**Contexte**  
Développement d’une API REST dans le cadre d’un projet full stack.

**Problématique**  
Risque de régression lors des évolutions et difficulté à valider systématiquement les règles métier.

**Actions mises en œuvre**
- Écriture de tests unitaires ciblés (JUnit / Mockito)  
- Isolation des services pour améliorer la testabilité  
- Validation des cas nominaux et des scénarios d’erreur  

**Résultats**
- Réduction des régressions fonctionnelles  
- Meilleure confiance lors des refactorings  
- Code plus modulaire et plus lisible  

**Valeur ajoutée**  
Renforcement de la robustesse globale du système sans complexifier inutilement l’architecture.

Voir la réalisation associée : [Application de gestion de projet](/projets/application-gestion-de-projet/)

---

### Intégration d’un suivi de couverture (JaCoCo)

**Contexte**  
Volonté de mesurer objectivement la qualité du code produit.

**Problématique**  
Absence d’indicateur fiable sur les zones critiques non testées.

**Actions mises en œuvre**
- Configuration d’un outil de couverture  
- Analyse des branches non couvertes  
- Priorisation des tests sur les zones à fort impact métier  

**Résultats**
- Vision claire des zones à risque  
- Amélioration progressive et mesurée de la couverture  
- Démarche qualité structurée et pragmatique  

**Valeur ajoutée**  
Passage d’une logique déclarative de qualité à une logique mesurable et pilotée par indicateurs.

Voir la réalisation associée : [Refonte d’architecture API & Système de recommandation](/projets/refonte-architecture/)

---

## Mon autocritique

**Niveau de maîtrise :** 6.5/10  

**Importance dans mon profil**  
La qualité logicielle structure ma manière de concevoir du code. Elle garantit la pérennité des projets et la confiance dans les évolutions futures.

**Vitesse d’acquisition**  
Progression constante, renforcée par la mise en pratique sur des projets concrets et par l’intégration d’outils de mesure.

**Recul critique**  
Je dois approfondir les tests d’intégration, les tests contractuels et les stratégies avancées (pyramide de tests, scénarios end-to-end, sécurité).

---

## Évolution

À moyen terme, je souhaite :

- Développer une stratégie de tests plus complète (intégration et E2E)  
- Automatiser davantage les contrôles qualité en CI/CD  
- Approfondir les approches de tests contractuels et de validation d’API  

---

## Réalisations associées

- Application de gestion de projet  
- Refonte d’architecture API & Système de recommandation  
- Portfolio technique modulaire avec Astro
