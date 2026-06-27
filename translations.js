// Swift Loan — shared i18n engine
// French is the default language. Users toggle manually to English.
// Preference saved in localStorage ('swiftloan_lang').

const TRANSLATIONS = {
  en: {
    // ── Shared nav / notifications ──────────────────────────────────────────
    tagline: "EMPOWERING BUSINESS THROUGH FINANCE",
    nav_home: "Home", nav_about: "About Us", nav_calc: "Loan Calculator",
    nav_apply: "Apply for Loan", nav_services: "Our Services", nav_rules: "Loan Rules",
    nav_promo: "Promotions", nav_faq: "FAQs", nav_privacy: "Privacy Policy",
    nav_terms: "Terms & Conditions", nav_cookies: "Cookie Settings", nav_contact: "Contact Us",
    notif_title: "Notifications",
    notif_markread: "Mark all read",
    notif_welcome: "Welcome to Swift Loan!",
    notif_welcome_pret: "Welcome to Swift Prêt!",

    // ── index.html ──────────────────────────────────────────────────────────
    hero_h1: "Get Instant Loans in Republic of Congo",
    hero_p: "Quick approval within minutes. Borrow from XAF 100,000 to XAF 1,500,000. Flexible repayment from 1 to 12 months.",
    hero_apply: "Apply Now", hero_track: "Track My Loan",
    elig_h2: "Who Is Eligible?",
    elig_sub: "Check if you meet our simple eligibility criteria to get instant loans",
    elig_basic: "Basic Requirements", elig_fin: "Financial Criteria", elig_loan: "Loan Details",
    elig_b1: "Must be a Congolese citizen", elig_b2: "Aged 18 years or older",
    elig_b3: "Valid national ID or passport", elig_b4: "Active mobile phone number",
    elig_f1: "Verifiable monthly income", elig_f2: "Employed, self-employed, or business owner",
    elig_f3: "Minimum income: XAF 50,000", elig_f4: "Can apply multiple times",
    elig_l1: "Minimum: XAF 100,000", elig_l2: "Maximum: XAF 1,500,000",
    elig_l3: "Repayment: 1-12 months", elig_l4: "Instant approval & disbursement",
    gal_h2: "Why Choose Swift Loan",
    gal_sub: "Real stories from our satisfied customers across Republic of Congo",
    gal_g1h: "Business Growth",
    gal_g1p: "Empower your small business with quick loans. Many traders have expanded their ventures with our support.",
    gal_g2h: "Education Financing",
    gal_g2p: "Support your family's education dreams. Flexible terms make quality education accessible to all.",
    gal_g3h: "Emergency Solutions",
    gal_g3p: "Get funds within minutes for unexpected expenses. We're here when you need us most.",
    dl_h2: "Download Our Mobile App",
    dl_p: "Get instant access to loans anytime, anywhere. Download the Swift Loan app for faster approvals and exclusive app-only features.",
    calc_sub: "CALCULATE YOUR LOAN", calc_h2: "Loan Calculator",
    calc_title: "How much do you need?", calc_amount: "Loan Amount",
    calc_period: "Repayment Period", calc_months: "Months", calc_months2: "Months",
    sum_amount: "Loan Amount:", sum_receive: "You'll Receive:",
    sum_repperiod: "Repayment Period:", sum_total: "Total Repayment:",
    calc_btn: "Apply for This Loan",
    exp_p: "Years of Experience<br>Serving Congolese",
    why_sub: "WHY CHOOSE US", why_h2: "Benefits of Swift Loan",
    feat_1h: "Instant Approval",
    feat_1p: "Get approved within minutes with our automated system. No long waits or complicated processes.",
    feat_2h: "100% Secure",
    feat_2p: "Your data is protected with bank-grade 256-bit encryption. We never share your information without consent.",
    feat_3h: "Competitive Rates",
    feat_3p: "Enjoy low interest rates starting at 1.99% monthly. Transparent pricing with no hidden fees or charges.",
    feat_4h: "24/7 Support",
    foot_quick: "Quick Links", foot_legal: "Legal", foot_contact: "Contact Information",
    footer_copy: "© 2025 Swift Loan Limited. All rights reserved. Licensed by BEAC.",

    // ── offers.html ─────────────────────────────────────────────────────────
    offers_hero_title1: "Your Personalized",
    offers_hero_title2: "Loan Offers",
    offers_loading: "Calculating your personalized loan offers",
    offers_loading_sub: "Please wait while we analyze your profile\u2026",
    offers_preapproved: "Pre-Approved \u00b7 Credit Score 60%",
    offers_loan_amount: "Loan Amount:",
    offers_monthly_rate: "Monthly Rate:",
    offers_you_receive: "You'll receive:",
    offers_monthly_pmt: "Monthly Payment:",
    offers_select_btn: "Select This Offer",
    offers_why_fee: "why fee?",
    offers_rep_period: "Repayment Period:",
    offers_proc_fee_label: "Processing Fee/refundable deposit:",
    offers_rep_tooltip: "This is the number of months you'll repay your loan in equal installments.",
    offers_congrats_h2: "Congratulations!",
    offers_congrats_p: "You're pre-approved for multiple loan offers based on your profile. Choose the offer that best suits your needs.",
    offers_tip_strong: "Quick Tip:",
    offers_tip_p: "Select an offer to see detailed terms and complete your application in minutes!",
    offers_close_btn: "Close",
    offers_gotit_btn: "Got it!",
    offers_modal_title: "Confirm Loan Application",
    offers_modal_sub: "Review your loan details and provide your Mobile Money number",
    offers_loan_summary: "Loan Summary",
    offers_modal_loan_amount: "Loan Amount:",
    offers_modal_fee: "Processing Fee:",
    offers_modal_receive: "You'll Receive:",
    offers_modal_period: "Repayment Period:",
    offers_modal_monthly: "Monthly Payment:",
    offers_modal_proceed: "Proceed to Withdrawal",
    offers_modal_cancel: "Cancel",

    // ── eligibility.html ────────────────────────────────────────────────────
    elig_page_h1: "Eligibility Check",
    elig_page_sub: "Please provide your exact information below to verify your loan limit.",
    elig_step1_lbl: "Personal",
    elig_step2_lbl: "Employment",
    elig_step3_lbl: "Loan",
    elig_sec1_h2: "Personal Information",
    elig_sec2_h2: "Employment & Activity",
    elig_sec3_h2: "Loan Details",
    elig_lbl_firstname: "Legal First Name *",
    elig_lbl_middlename: "Middle Name (Optional)",
    elig_lbl_lastname: "Legal Last Name *",
    elig_lbl_dob: "Date of Birth *",
    elig_lbl_id: "National ID Card Number *",
    elig_lbl_email: "Email Address *",
    elig_lbl_phone: "Phone Number *",
    elig_lbl_network: "Network Type *",
    elig_lbl_district: "Department *",
    elig_lbl_city: "City (Optional)",
    elig_lbl_address: "Physical Address *",
    elig_lbl_empstatus: "Employment Status *",
    elig_lbl_income: "Monthly Income *",
    elig_lbl_purpose: "Loan Purpose *",
    elig_lbl_amount: "Desired Loan Amount *",
    elig_btn_back: "Back",
    elig_btn_next: "Next Step",
    elig_btn_submit: "Submit Application",

    // ── loan-withdrawal.html ────────────────────────────────────────────────
    lw_savings_label: "SAVINGS:",
    lw_notif_welcome: "Welcome to Swift Loan!",
    lw_approved_label: "Approved Loan — You'll Receive",
    lw_modify_btn: "MODIFY",
    lw_fee_label: "Fee to Pay",
    lw_phone_label: "Receiving Number",
    lw_name_label: "Your Full Name",
    lw_name_confirm: "(confirm it is correct — used to process your loan)",
    lw_check_details: "Check your loan details above, then pay the fee below to instantly receive your approved loan in your Mobile Money account.",
    lw_processing: "Processing payment\u2026",
    lw_wait: "Sending payment request. Please wait\u2026",
    lw_timer_label: "seconds remaining",
    lw_step1_txt: "\uD83D\uDCE1 Connecting to payment network\u2026",
    lw_step2_txt: "\uD83D\uDCF2 Request sent to your phone",
    lw_step3_txt: "\uD83D\uDD10 Awaiting your PIN confirmation",
    lw_step4_txt: "\uD83C\uDFE6 Processing transaction\u2026",
    lw_success: "SUCCESS",
    lw_fee_received: "Fee payment received",
    lw_after_fee: "After paying the fee, you'll receive",
    lw_change_btn: "MODIFY",
    lw_name_note: "(confirm it is correct \u2014 used to process your loan)",
    lw_processing_title: "Processing payment\u2026",
    lw_processing_msg: "Sending payment request. Please wait\u2026",
    lw_receipt_status: "SUCCESS",
    lw_receipt_msg: "Fee payment received",
    elig_step1: "Personal",
    elig_step2: "Employment",
    elig_step3: "Loan",
    elig_section1: "Personal Information",
    elig_section2: "Employment & Activity",
  },

  fr: {
    // ── Shared nav / notifications ──────────────────────────────────────────
    tagline: "DONNER LES MOYENS D'AGIR GR\u00c2CE \u00c0 LA FINANCE",
    nav_home: "Accueil", nav_about: "\u00c0 Propos", nav_calc: "Simulateur de Pr\u00eat",
    nav_apply: "Demander un Pr\u00eat", nav_services: "Nos Services", nav_rules: "R\u00e8gles de Pr\u00eat",
    nav_promo: "Promotions", nav_faq: "FAQ", nav_privacy: "Politique de Confidentialit\u00e9",
    nav_terms: "Conditions G\u00e9n\u00e9rales", nav_cookies: "Param\u00e8tres Cookies", nav_contact: "Nous Contacter",
    notif_title: "Notifications",
    notif_markread: "Tout marquer comme lu",
    notif_welcome: "Bienvenue chez Swift Loan\u00a0!",
    notif_welcome_pret: "Bienvenue sur Swift Pr\u00eat\u00a0!",

    // ── index.html ──────────────────────────────────────────────────────────
    hero_h1: "Obtenez des Pr\u00eats Instantan\u00e9s en R\u00e9publique du Congo",
    hero_p: "Approbation rapide en quelques minutes. Empruntez de XAF\u00a0100\u00a0000 \u00e0 XAF\u00a01\u00a0500\u00a0000. Remboursement flexible de 1 \u00e0 12 mois.",
    hero_apply: "Demander Maintenant", hero_track: "Suivre Mon Pr\u00eat",
    elig_h2: "Qui Est \u00c9ligible\u00a0?",
    elig_sub: "V\u00e9rifiez si vous remplissez nos crit\u00e8res d'\u00e9ligibilit\u00e9 simples pour obtenir des pr\u00eats instantan\u00e9s",
    elig_basic: "Conditions de Base", elig_fin: "Crit\u00e8res Financiers", elig_loan: "D\u00e9tails du Pr\u00eat",
    elig_b1: "\u00catre citoyen(ne) congolais(e)", elig_b2: "Avoir 18 ans ou plus",
    elig_b3: "Carte nationale d'identit\u00e9 ou passeport valide", elig_b4: "Num\u00e9ro de t\u00e9l\u00e9phone mobile actif",
    elig_f1: "Revenu mensuel v\u00e9rifiable", elig_f2: "Salari\u00e9(e), ind\u00e9pendant(e) ou chef d'entreprise",
    elig_f3: "Revenu minimum\u00a0: XAF\u00a050\u00a0000", elig_f4: "Possibilit\u00e9 de faire plusieurs demandes",
    elig_l1: "Minimum\u00a0: XAF\u00a0100\u00a0000", elig_l2: "Maximum\u00a0: XAF\u00a01\u00a0500\u00a0000",
    elig_l3: "Remboursement\u00a0: 1 \u00e0 12 mois", elig_l4: "Approbation et d\u00e9caissement instantan\u00e9s",
    gal_h2: "Pourquoi Choisir Swift Loan",
    gal_sub: "Les t\u00e9moignages de nos clients satisfaits \u00e0 travers la R\u00e9publique du Congo",
    gal_g1h: "Croissance des Entreprises",
    gal_g1p: "Boostez votre petite entreprise avec des pr\u00eats rapides. De nombreux commer\u00e7ants ont d\u00e9velopp\u00e9 leurs activit\u00e9s gr\u00e2ce \u00e0 notre soutien.",
    gal_g2h: "Financement des \u00c9tudes",
    gal_g2p: "Soutenez les r\u00eaves d'\u00e9ducation de votre famille. Des conditions flexibles rendent l'\u00e9ducation de qualit\u00e9 accessible \u00e0 tous.",
    gal_g3h: "Solutions d'Urgence",
    gal_g3p: "Obtenez des fonds en quelques minutes pour des d\u00e9penses impr\u00e9vues. Nous sommes l\u00e0 quand vous avez besoin de nous.",
    dl_h2: "T\u00e9l\u00e9chargez Notre Application Mobile",
    dl_p: "Acc\u00e9dez instantan\u00e9ment aux pr\u00eats n'importe o\u00f9, n'importe quand. T\u00e9l\u00e9chargez l'application Swift Loan pour des approbations plus rapides.",
    calc_sub: "CALCULEZ VOTRE PR\u00caT", calc_h2: "Simulateur de Pr\u00eat",
    calc_title: "De combien avez-vous besoin\u00a0?", calc_amount: "Montant du Pr\u00eat",
    calc_period: "Dur\u00e9e de Remboursement", calc_months: "Mois", calc_months2: "Mois",
    sum_amount: "Montant du Pr\u00eat\u00a0:", sum_receive: "Vous Recevrez\u00a0:",
    sum_repperiod: "Dur\u00e9e de Remboursement\u00a0:", sum_total: "Remboursement Total\u00a0:",
    calc_btn: "Demander ce Pr\u00eat",
    exp_p: "Ann\u00e9es d'Exp\u00e9rience<br>au Service des Congolais",
    why_sub: "POURQUOI NOUS CHOISIR", why_h2: "Les Avantages de Swift Loan",
    feat_1h: "Approbation Instantan\u00e9e",
    feat_1p: "Obtenez une approbation en quelques minutes gr\u00e2ce \u00e0 notre syst\u00e8me automatis\u00e9. Pas de longues attentes ni de proc\u00e9dures compliqu\u00e9es.",
    feat_2h: "100\u00a0% S\u00e9curis\u00e9",
    feat_2p: "Vos donn\u00e9es sont prot\u00e9g\u00e9es par un chiffrement bancaire 256 bits. Nous ne partageons jamais vos informations sans votre consentement.",
    feat_3h: "Taux Comp\u00e9titifs",
    feat_3p: "Profitez de faibles taux d'int\u00e9r\u00eat \u00e0 partir de 1,99\u00a0% par mois. Tarification transparente sans frais cach\u00e9s.",
    feat_4h: "Support 24h/7j",
    foot_quick: "Liens Rapides", foot_legal: "Mentions L\u00e9gales", foot_contact: "Informations de Contact",
    footer_copy: "\u00a9 2025 Swift Loan Limited. Tous droits r\u00e9serv\u00e9s. Agr\u00e9\u00e9 par la BEAC.",

    // ── offers.html ─────────────────────────────────────────────────────────
    offers_hero_title1: "Vos Offres de Pr\u00eat",
    offers_hero_title2: "Personnalis\u00e9es",
    offers_loading: "Calcul de vos offres de pr\u00eat personnalis\u00e9es",
    offers_loading_sub: "Veuillez patienter pendant que nous analysons votre profil\u2026",
    offers_preapproved: "Pr\u00e9-Approuv\u00e9 \u00b7 Score de Cr\u00e9dit 60\u00a0%",
    offers_loan_amount: "Montant du Pr\u00eat\u00a0:",
    offers_monthly_rate: "Taux Mensuel\u00a0:",
    offers_you_receive: "Vous Recevrez\u00a0:",
    offers_monthly_pmt: "Paiement Mensuel\u00a0:",
    offers_select_btn: "Choisir cette Offre",
    offers_why_fee: "pourquoi ces frais\u00a0?",
    offers_rep_period: "Dur\u00e9e de Remboursement\u00a0:",
    offers_proc_fee_label: "Frais de traitement/d\u00e9p\u00f4t remboursable\u00a0:",
    offers_rep_tooltip: "Nombre de mois pendant lesquels vous rembourserez votre pr\u00eat en versements \u00e9gaux.",
    offers_congrats_h2: "F\u00e9licitations\u00a0!",
    offers_congrats_p: "Vous \u00eates pr\u00e9-approuv\u00e9(e) pour plusieurs offres de pr\u00eat bas\u00e9es sur votre profil. Choisissez l'offre qui correspond le mieux \u00e0 vos besoins.",
    offers_tip_strong: "Conseil rapide\u00a0:",
    offers_tip_p: "S\u00e9lectionnez une offre pour voir les conditions d\u00e9taill\u00e9es et finaliser votre demande en quelques minutes\u00a0!",
    offers_close_btn: "Fermer",
    offers_gotit_btn: "Compris\u00a0!",
    offers_modal_title: "Confirmer la Demande de Pr\u00eat",
    offers_modal_sub: "V\u00e9rifiez les d\u00e9tails de votre pr\u00eat et fournissez votre num\u00e9ro Mobile Money",
    offers_loan_summary: "R\u00e9sum\u00e9 du Pr\u00eat",
    offers_modal_loan_amount: "Montant du Pr\u00eat\u00a0:",
    offers_modal_fee: "Frais de Traitement\u00a0:",
    offers_modal_receive: "Vous Recevrez\u00a0:",
    offers_modal_period: "Dur\u00e9e de Remboursement\u00a0:",
    offers_modal_monthly: "Paiement Mensuel\u00a0:",
    offers_modal_proceed: "Proc\u00e9der au Retrait",
    offers_modal_cancel: "Annuler",

    // ── eligibility.html ────────────────────────────────────────────────────
    elig_page_h1: "V\u00e9rification d'\u00c9ligibilit\u00e9",
    elig_page_sub: "Veuillez fournir vos informations exactes ci-dessous pour v\u00e9rifier votre limite de pr\u00eat.",
    elig_step1_lbl: "Personnel",
    elig_step2_lbl: "Emploi",
    elig_step3_lbl: "Pr\u00eat",
    elig_sec1_h2: "Informations Personnelles",
    elig_sec2_h2: "Emploi & Activit\u00e9",
    elig_sec3_h2: "D\u00e9tails du Pr\u00eat",
    elig_lbl_firstname: "Pr\u00e9nom L\u00e9gal *",
    elig_lbl_middlename: "Deuxi\u00e8me Pr\u00e9nom (Facultatif)",
    elig_lbl_lastname: "Nom L\u00e9gal *",
    elig_lbl_dob: "Date de Naissance *",
    elig_lbl_id: "Num\u00e9ro de Carte Nationale d'Identit\u00e9 *",
    elig_lbl_email: "Adresse E-mail *",
    elig_lbl_phone: "Num\u00e9ro de T\u00e9l\u00e9phone *",
    elig_lbl_network: "Type de R\u00e9seau *",
    elig_lbl_district: "D\u00e9partement *",
    elig_lbl_city: "Ville (Facultatif)",
    elig_lbl_address: "Adresse Physique *",
    elig_lbl_empstatus: "Statut d'Emploi *",
    elig_lbl_income: "Revenu Mensuel *",
    elig_lbl_purpose: "Objet du Pr\u00eat *",
    elig_lbl_amount: "Montant de Pr\u00eat Souhait\u00e9 *",
    elig_btn_back: "Retour",
    elig_btn_next: "Suivant",
    elig_btn_submit: "Soumettre la Demande",

    // ── loan-withdrawal.html ────────────────────────────────────────────────
    lw_savings_label: "\u00c9PARGNE\u00a0:",
    lw_notif_welcome: "Bienvenue chez Swift Loan\u00a0!",
    lw_approved_label: "Pr\u00eat Approuv\u00e9 \u2014 Vous Recevrez",
    lw_modify_btn: "MODIFIER",
    lw_fee_label: "Frais \u00e0 Payer",
    lw_phone_label: "Num\u00e9ro de R\u00e9ception",
    lw_name_label: "Votre Nom Complet",
    lw_name_confirm: "(confirmez que c\u2019est correct \u2014 utilis\u00e9 pour traiter votre pr\u00eat)",
    lw_check_details: "V\u00e9rifiez les d\u00e9tails de votre pr\u00eat ci-dessus, puis payez les frais ci-dessous pour recevoir instantan\u00e9ment votre pr\u00eat approuv\u00e9 sur votre compte Mobile Money.",
    lw_processing: "Traitement du paiement\u2026",
    lw_wait: "Envoi de la demande de paiement. Veuillez patienter\u2026",
    lw_timer_label: "secondes restantes",
    lw_step1_txt: "\uD83D\uDCE1 Connexion au r\u00e9seau de paiement\u2026",
    lw_step2_txt: "\uD83D\uDCF2 Demande envoy\u00e9e sur votre t\u00e9l\u00e9phone",
    lw_step3_txt: "\uD83D\uDD10 En attente de votre confirmation PIN",
    lw_step4_txt: "\uD83C\uDFE6 Traitement de la transaction\u2026",
    lw_success: "SUCC\u00c8S",
    lw_fee_received: "Paiement des frais re\u00e7u",
    lw_after_fee: "Apr\u00e8s avoir pay\u00e9 les frais, vous recevrez",
    lw_change_btn: "MODIFIER",
    lw_name_note: "(confirmez que c\u2019est correct \u2014 utilis\u00e9 pour traiter votre pr\u00eat)",
    lw_processing_title: "Traitement du paiement\u2026",
    lw_processing_msg: "Envoi de la demande de paiement. Veuillez patienter\u2026",
    lw_receipt_status: "SUCC\u00c8S",
    lw_receipt_msg: "Paiement des frais re\u00e7u",
    elig_step1: "Personnel",
    elig_step2: "Emploi",
    elig_step3: "Pr\u00eat",
    elig_section1: "Informations Personnelles",
    elig_section2: "Emploi & Activit\u00e9",
  }
};

// ─── current language (initialised by IIFE below) ───────────────────────────
let currentLang = 'fr';

// ─── applyLang ───────────────────────────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];

  // 1. data-i18n attributes (innerHTML so <br> works)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // 2. Toggle button label
  const btn = document.getElementById('langToggleBtn');
  if (btn) btn.textContent = lang === 'fr' ? 'FR | EN' : 'EN | FR';

  // 3. <html lang> attribute
  document.documentElement.lang = lang === 'fr' ? 'fr-CG' : 'en';

  // 4. offers.html — class-based repeated elements
  document.querySelectorAll('.select-offer-btn').forEach(function(el) {
    if (t.offers_select_btn) el.textContent = t.offers_select_btn;
  });
  document.querySelectorAll('.explain-fee-link').forEach(function(el) {
    if (t.offers_why_fee) el.textContent = t.offers_why_fee;
  });
  document.querySelectorAll('.loan-card .absolute.bottom-full').forEach(function(el) {
    if (t.offers_rep_tooltip) el.textContent = t.offers_rep_tooltip;
  });

  // offers.html — Repayment Period text node (complex span with child SVG)
  if (lang === 'fr') {
    _replaceText(document, 'Repayment Period:', 'Dur\u00e9e de Remboursement\u00a0:');
    _replaceText(document, 'Processing Fee/refundable deposit:', 'Frais de traitement/d\u00e9p\u00f4t remboursable\u00a0:');
  } else {
    _replaceText(document, 'Dur\u00e9e de Remboursement\u00a0:', 'Repayment Period:');
    _replaceText(document, 'Frais de traitement/d\u00e9p\u00f4t remboursable\u00a0:', 'Processing Fee/refundable deposit:');
  }

  // 5. Save preference
  localStorage.setItem('swiftloan_lang', lang);
}

// Helper: walk text nodes inside .loan-card only, replace first match per node
function _replaceText(root, from, to) {
  var cards = root.querySelectorAll ? root.querySelectorAll('.loan-card') : [];
  cards.forEach(function(card) {
    _walkText(card, from, to);
  });
}

function _walkText(node, from, to) {
  if (node.nodeType === 3) { // TEXT_NODE
    if (node.nodeValue.indexOf(from) !== -1) {
      node.nodeValue = node.nodeValue.replace(from, to);
    }
  } else {
    node.childNodes.forEach(function(child) {
      _walkText(child, from, to);
    });
  }
}

// ─── toggleLang ─────────────────────────────────────────────────────────────
function toggleLang() {
  applyLang(currentLang === 'en' ? 'fr' : 'en');
}

// ─── Auto-init: respect saved preference, default to French ─────────────────
(function() {
  var saved = localStorage.getItem('swiftloan_lang');
  applyLang(saved === 'en' ? 'en' : 'fr');
})();
