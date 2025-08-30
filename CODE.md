# CLAUDE.md

Ce fichier fournit des instructions pour mieux travailler avec le code de ce dépôt.

## Commandes de Développement

### Commandes Essentielles

* `npm run dev` - Lancer le serveur de développement sur [http://localhost:3000]
* `npm run build` - Compiler l’application pour la production
* `npm run lint` - Exécuter ESLint pour vérifier la qualité du code
* `npm test` - Exécuter la suite de tests Jest
* `npm test:watch` - Lancer les tests en mode surveillance

### Opérations sur la Base de Données

* `npx prisma generate` - Générer le client Prisma après des modifications du schéma
* `npx prisma migrate dev` - Créer et appliquer une nouvelle migration de base de données
* `npx prisma db seed` - Remplir la base avec des données initiales via prisma/seed.ts
* `npx prisma studio` - Ouvrir Prisma Studio pour inspecter la base de données

### Déploiement

* `npm run vercel-build` - Commande de build pour la production utilisée par Vercel (inclut la configuration Prisma)

---

## Vue d’Ensemble de l’Architecture

### Pile Technologique Principale

* **Framework** : Next.js 14 avec App Router et TypeScript
* **Base de données** : PostgreSQL avec Prisma ORM
* **Authentification** : NextAuth v5 (Auth.js) avec stratégie JWT et adaptateur Prisma
* **Temps réel** : Pusher pour la messagerie en direct et la gestion de présence
* **Stockage de fichiers** : Cloudinary pour l’upload et la gestion des images
* **Composants UI** : NextUI avec Tailwind CSS
* **Gestion d’état** : Zustand pour l’état côté client
* **Validation** : Schémas Zod avec React Hook Form

### Schéma de la Base de Données

Modèles principaux :

* `User` - Authentification et données de base utilisateur avec accès basé sur les rôles (ADMIN/MEMBER)
* `Member` - Informations de profil étendues liées à l’utilisateur
* `Photo` - Photos des utilisateurs avec système d’approbation (`isApproved`)
* `Like` - Relation plusieurs-à-plusieurs pour les « likes » entre utilisateurs
* `Message` - Messages de chat avec statut de lecture et suppression logique
* `Token` - Jetons de vérification d’email et de réinitialisation de mot de passe

### Flux d’Authentification

* Sessions basées sur JWT avec NextAuth
* Vérification de l’email requise avant connexion
* Étape de complétion de profil après inscription (`profileComplete`)
* Routage basé sur les rôles (routes admin protégées dans le middleware)
* Middleware gère les redirections d’auth et la complétion du profil

### Structure de l’Application

* `/src/app/(auth)/` - Pages d’authentification (connexion, inscription, vérification email, etc.)
* `/src/app/members/` - Navigation et gestion des profils membres
* `/src/app/messages/` - Interface de messagerie en temps réel
* `/src/app/actions/` - Server actions pour les mutations de données
* `/src/hooks/` - Hooks React personnalisés pour la gestion d’état
* `/src/lib/` - Utilitaires, schémas et configurations de services

### Gestion d’État

* **Stores Zustand** :

  * `usePresenceStore` - Suivi des membres en ligne
  * `useMessageStore` - Gestion des états de messagerie
  * `useFilterStore` - Filtres de membres
  * `usePaginationStore` - État de pagination

### Fonctionnalités Temps Réel

* Intégration Pusher pour la messagerie en direct
* Canaux de présence pour afficher les utilisateurs connectés
* Livraison des messages en temps réel et accusés de lecture

### Système d’Upload de Fichiers

* Intégration Cloudinary pour le stockage des images
* Workflow d’approbation des photos pour la modération admin
* Signature sécurisée des images via des routes API

### Tests

* Jest avec React Testing Library
* Tests unitaires dans `/src/lib/__tests__/`
* Configuration de test compatible TypeScript

---

## Modèles Clés

### Server Actions

Toutes les mutations de données utilisent les server actions de Next.js dans `/src/app/actions/` :

* Retour du type `ActionResult<T>` pour une gestion cohérente des erreurs
* Validation avec Zod avant les opérations sur la base
* Authentification gérée dans les fonctions d’action

### Protection des Routes

* Middleware (`/src/middleware.ts`) gère toute la protection des routes
* Routes publiques définies dans `/src/routes.ts`
* Forçage de complétion de profil pour les utilisateurs connectés
* Protection des routes réservées aux administrateurs

### Gestion des Formulaires

* React Hook Form avec validation Zod
* Schémas centralisés dans `/src/lib/schemas/`
* Affichage cohérent des erreurs via le composant `ResultMessage`

### Gestion des Images

* Toutes les photos utilisateurs nécessitent une approbation admin
* URLs Cloudinary avec paramètres de transformation
* Signatures d’upload sécurisées générées côté serveur

---

## Configuration de l’Environnement

Variables d’environnement requises :

* `DATABASE_URL` - Chaîne de connexion PostgreSQL
* Variables de configuration NextAuth
* Identifiants API Pusher
* Configuration Cloudinary
* Identifiants du service email (Resend)

