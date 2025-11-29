
---

# 📘 **DOCUMENT TECHNIQUE – SPÉCIFICATIONS DU PROJET**

Landing Page d’une école / université 


---

# 🎯 **Objectif du site**

Le site doit permettre de :

* ✅ Présenter l’école (histoire, vision, mission, valeurs)
* ✅ Informer (programmes, admissions, actualités)
* ✅ Attirer de nouveaux étudiants (objectif principal = conversion / visibilité)
* ✅ Faciliter la communication (contacts, WhatsApp, Facebook, réseaux sociaux)

L’objectif final : **landing page professionnelle, moderne, crédible, multilingue FR/EN**, orientée acquisition.


---

# 🔹 **1. Checklist des informations utilisées**

### 📌 **Identité & Présentation**

* Nom complet officiel de l’école/université
* Logo haute résolution (PNG, vectoriel)
* Charte graphique (couleurs, typographies)
* Histoire de l’établissement
* Mission
* Vision
* Valeurs
* Photos & vidéos du campus / étudiants

### 📌 **Programmes & Formations**

* Liste des filières (Licence, Master, BTS, HND, etc.)
* Description courte de chaque programme
* Débouchés
* Durée
* Conditions d’admission
* Brochure PDF (optionnel)

### 📌 **Avantages & Atouts**

* Chiffres clés (ex : 3000+ étudiants, 90% employabilité)
* Infrastructures (bibliothèque, labs, etc.)
* Services étudiants (clubs, logement, bourses)

### 📌 **Témoignages**

* Témoignages d’étudiants (texte, photo)
* Success stories d’anciens diplômés

### 📌 **Communication & Contact**

* Email officiel
* Numéro de téléphone
* Adresse complète
* Lien Google Maps
* Liens réseaux sociaux (Facebook, WhatsApp, Instagram, LinkedIn, YouTube…)
* FAQ (optionnel)

### 📌 **Multilingue**

* Traductions officielles si disponibles
* Sinon, texte FR → traduction EN par IA + validation humaine

---

# 🔹 **2. Workflow clair pour le développement**

## **Étape 1 – Analyse & Collecte**

* Vérifier les objectifs
* Préparer les textes de base à insérer
* Définir ambiance/identité visuelle
* Consolider les ressources (images, logos, données)

---

## **Étape 2 – Design (UI/UX)**

* Créer un **wireframe** (Hero, sections, footer)
* Définir la **palette de couleurs**
* Définir les **polices** (2 suffisent : titres + textes)
* Faire un **prototype Figma** simple (FR → EN ensuite)

---

## **Étape 3 – Développement**

### **Frontend (Next.js + Bootstrap + i18n)**

Pages/Sections à coder :

* Hero (background image/video + CTA)
* Valeurs / Atouts
* Programmes (composants dynamiques si possible)
* Témoignages
* Formulaire de contact
* Footer
* Gestion multilingue : **Next.js i18n routing**

### **Backend (Express + MySQL)**

Routes API :

* `POST /api/contact` → enregistrement + envoi email
* `GET /api/programs` (optionnel si dynamique)

Logique :

* Stocker les contacts
* Envoyer email (Nodemailer)
* Sécuriser les routes (CORS, anti-spam simple)

### **Base de données (MySQL)**

Tables recommandées :

**contacts**

* id
* name
* email
* message
* created_at

**programs (optionnel)**

* id
* title
* description
* level
* duration
* created_at

---

## **Étape 4 – Intégration & Tests**

* Test responsive (mobile-first)
* Test formulaire (DB + email)
* Test multilingue (FR/EN)
* Vérifier SEO (balises, OG tags)
* Vérifier performance (images compressées)

---

## **Étape 5 – Déploiement**

* Frontend : Vercel
* Backend : Railway / Render
* Base de données : MySQL sur Railway
* Domaine officiel (option : .edu.cm / .org)
* SSL via Vercel ou DNS provider

---

## **Étape 6 – Maintenance**

* Mise à jour contenu (simple JSON/Markdown ou mini CMS)
* Backup DB mensuel
* Mise à jour SEO/Analytics
* Suivi des contacts/messages entrants

---

# 🔹 **3. Structure finale de la landing page (optimisée)**

## **1. Hero Section**

* Image/vidéo du campus
* Grand titre accrocheur
* Sous-titre
* CTA visible (Postulez maintenant)

## **2. Valeurs & Atouts**

* Mission
* Vision
* Valeurs
* 3–4 points forts illustrés par des icônes

## **3. Programmes & Formations**

* Cartes de programmes avec description courte
* Bouton “En savoir plus”
* Brochure PDF (optionnel)

## **4. Témoignages**

* Carousel avec texte et images

## **5. Formulaire de Contact**

* Name
* Email
* Message
* CTA “Envoyer”
* Bouton WhatsApp

## **6. FAQ (optionnel)**

* 4–6 questions importantes (admissions, logement, frais, etc.)

## **7. Footer**

* Contacts
* Adresse
* Carte Google Maps
* Réseaux sociaux
* Mentions légales + Copyright

---
