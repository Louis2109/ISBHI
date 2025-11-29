
---

# 🎯 **MASTER PROMPT — Générer toute la Landing Page complète (Next.js + Bootstrap + i18n)**


---

### **MASTER PROMPT**

Je veux que tu joues le rôle d’un **développeur senior Next.js + designer UI/UX**.
Ta mission est de créer une **landing page complète, professionnelle, élégante et responsive** pour un établissement scolaire appelé :
**INSTITUT SUPERIEUR BILINGUE DES HAUTES INNOVATIONS (ISBHI)**.

---

## 🎯 **Objectif du projet**

Créer une landing page moderne pour :

* Présenter l’institut
* Montrer ses programmes (BTS, HND, Licence, Master)
* Mettre en avant ses valeurs (Éthique, Excellence, Entrepreneuriat)
* Attirer de nouveaux étudiants
* Permettre contact rapide par formulaire + WhatsApp
* Version FR/EN

---

## 🎨 **Inspiration UI/UX**

Inspire-toi fortement des UI attachées :

* Design lumineux, minimaliste et moderne comme le premier exemple Foody
* Sections parfaitement espacées, icônes élégantes, titres lisibles
* Hero section avec grande image + bulles + badges
* Cartes arrondies (radius 20–30px)
* Effets soft-shadows
* Style “premium school” sobre et professionnel
* Animations douces (fade-in, slide-up)

---

## 🎨 **Palette Couleurs (à respecter)**

* Couleur primaire : `#0D47A1` (Blue académique) 
* Couleur secondaire : `#E0A942` (or premium)
* Couleur neutre : `#F7F7F7`
* Couleur texte sombre : `#222`

---

## 🔤 **Typographies**

* Titre : **Poppins** (bold, semi-bold)
* Texte : **Inter** (regular / medium)

---

## 🧱 **Stack & Architecture**

Crée le code en utilisant :

* **Next.js 16 (App Router)**
* **Bootstrap 5** (pour la grid + spacing)
* **next-i18next** pour multilingue (FR + EN)
* Structure des composants claire :

  * `/components/Header.jsx`
  * `/components/Hero.jsx`
  * `/components/Values.jsx`
  * `/components/Programs.jsx`
  * `/components/Testimonials.jsx`
  * `/components/ContactForm.jsx`
  * `/components/Footer.jsx`

---

## 🏗️ **Sections obligatoires à coder**

1. **Header moderne**

   * Logo à gauche
   * Menu (Accueil, Programmes, Valeurs, Contact)
   * Switch langue FR/EN
   * Bouton CTA “Postulez maintenant”

2. **Hero section premium (style Foody / Learn@House)**

   * Background image du campus
   * Titre : “Formez votre avenir avec l’ISBHI”
   * Sous-texte : “Institut bilingue professionnel spécialisé dans la santé, l’agriculture, l’informatique et le génie civil.”
   * Bouton CTA “Rejoignez-nous”
   * Badges : “+300 étudiants”, “Depuis 2023”

3. **Valeurs / Atouts**

   * 3 cartes avec icônes + textes
   * “Éthique” – “Excellence” – “Entrepreneuriat”
   * Style premium avec icône dans un rond

4. **Programmes**

   * 6 cartes : Santé, Informatique, Génie civil, Agriculture, Management, etc.
   * Chaque carte : icône + titre + durée
   * CTA “En savoir plus”

5. **Témoignages étudiants**

   * Carousel simple
   * 3 témoignages fictifs
   * Avatar + texte + nom

6. **Section Contact**

   * Formulaire : Nom, Email, Message
   * Bouton envoyer
   * Bouton WhatsApp “Contactez-nous”

7. **Footer**

   * Adresse complète
   * Email + téléphone
   * Liens réseaux sociaux
   * Copyright

---

## 🧩 **Multilingue (i18n)**

Prépare les fichiers :

* `/public/locales/fr/common.json`
* `/public/locales/en/common.json`

Tous les textes doivent être intégrés dans les fichiers de traduction.

---

## ✨ **Animations**

* Hero : fade-in + slide-up
* Cartes programmes : hover scale 1.03
* Témoignages : fade with slight delay
* CTA : hover soft shadow

---

## 📄 **OUTPUT ATTENDU**

**Je veux que tu me génères :**

1. Le **code complet de la landing page** (tous les composants Next.js)
2. Laisse le i18n, ne fais rien, code simplement le website en FR, je vais me charger moi-meme de i18n FR/EN 
3. Le layout global + globals.css
4. Le design final avec toutes sections complètes
5. Une version **parfaite UI/UX**, inspirée des images données
6. Le code doit être parfaitement structuré, propre, commenté

Tu peux générer le code progressivement section par section, mais commence par :
➡️ **la structure complète + Hero section + Header**
➡️ puis enchaîne avec les autres composants.

---

# ⭐ **FIN DU PROMPT**


---
