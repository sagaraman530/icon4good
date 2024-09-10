var languagesArry = [
  { name: "EN", code: "english", selected: true },
  { name: "GR", code: "greek", selected: false },
  { name: "FR", code: "french", selected: false },
  { name: "ES", code: "spanish", selected: false },
  { name: "DE", code: "german", selected: false },
  { name: "IT", code: "italian", selected: false },
];
function changeLanguage() {
  var languages = {
    english: {
      homePage: {
        topBar: "",
        centerMsg: "Can you find the mosaic?",
        buttonOne: "Click and Target",
        buttonTwo: "About Us",
        mapButton: "Map",
        scanButton: "Scan",
        profileButton: "Profile",
      },
      infoPop: {
        lineOne:
          "Bridge of Love is a mosaic of pictures connecting people & places",
        lineTwo: "Upload your own picture & share it with others",
        lineThree:
          "Search Pictures & find your own images & explore pictures from other cities",
      },
      mosiacPage: {
        lineOne: "Zoom in on the mosaic to see all images",
        lineTwo: "Share the mosiac on social media",
        lineThree: "Search pictures in the mosiac",
        buttonText: "Be a part of the mosaic",
        addImageMosaicButton: "Add image to mosaic",
        shareButton: "Share",
        mosiacButton: "Be a part of the mosaic"
      },
      signInInfoPage: {
        signInBtn: " Sign In",
        paraLIne: "--  or sign in with  --",
        dontAcntLine: "Don't have an account ?",
        signUpBtn: "Sign Up",
        center: "Subscribe Here",
      },
      signInPage: {
        signInLabel: "Sign In",
        orLabel: "or",
        userNameLabel: "Don't have an account ?",
        passwordLabel: "Password",
        signinBtn: "Sign In",
      },
      signUpPage: {
        subscriptionLabel: "Subscription",
        orLabel: "or",
        firstNameLabel: "First Name",
        lastNameLabel: "Last Name",
        emailLabel: "Email Address",
        mobileLabel: "Mobile Number",
        passwordLabel: "Password",
        privacyPara: "I agree with the icons4good privacy policy",
        privacyanchor: "Privacy Policy",
        termsPara: "I agree with the icons4good terma and conditions",
        termsAnchor: "Terms & Conditions",
        declarationPara: "I confirm that I am 18 old or older",
        submitBtn: "Submit",
      },
      thankPage: {
        thankMsg: "Thank you for submitting your picture You will receive an email when it will be added to the mosaic ",
        back: "Add more pictures",
        firstThankLineMsg: "for adding your image or video to the mosaic. It will soon be visible and remain for 24 hours.",
        secondThankLineMsg: "If you want your image or video to remain findable permanently then contribute to the mosaic to become a mosaic supporter",
        thirdThankLineMsg: "Be visible in the Mosaic and support responsible graffiti movement of Athens.",
        paymentBtn: "Make a Payment"
      },
      mosiacSecondPage: {
        uploadBtn: "Upload Image",
        uploadEmbedBtn: "Embed a Youtube Video",
        cancelBtn: "Back",
        choseFileUpld: "Choose file to upload",
        addPhotoBtn: "Add Photo File",
        captionHead: "Write a caption for your upload",
        tagsHead: "Select Tags For Your Upload",
        confrmMsg:
          "confirm that I have the right to use the image file that I am uploading",
      },
      paymentPage: {
        paymentParaOne: "Add your image to the mosaic and keep it there",
        paymentParaTwo: "Pay Now",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Let us give a part of the amount to a charity of our choice",
        paymentbuttonOne: "Payment",
        paymentBtnTwo: "Without Donation",
      },
      aboutPage: {
        aboutTextHead: "About Us",
        aboutText1: "At icons4good, we create new destinations through immersive, interactive digital artworks that celebrate important moments and unite people around shared experiences and good causes. Our patent-pending software blends augmented reality, geofencing, and artificial intelligence with the power of photomosaics.",
        aboutText2: "Our goal is to increase awareness, build dedicated digital communities, and inspire positive change. We work closely with local communities to support initiatives that make the world a better place.",
        aboutText3: "Key Features:",
        aboutText4: "- Searchable participant database by name, hashtag, or personal statement",
        aboutText5: "- Option to add photos, videos, personal statements, and hashtags",
        aboutText6: "- Augmented reality experiences at designated locations",
        aboutText7: "- Participant-driven theme updates through community voting",
        aboutText8: "- Compliance with GDPR and ability to remove photos upon request",
        aboutText9: "Participation is free, thanks to the generosity of our sponsors. However, maintaining searchability may require participants to share their involvement on social media.",
        aboutText10: "For inquiries",
        aboutText11: "please email us at",

        faqHead: "FAQs",

        faqQues1: "Q: Do you have a give-back-to-society policy?",
        faqAns1: "A: Yes, we work closely with local communities to support initiatives that create positive impact.",

        faqQues2: "Q: How can I look up participants?",
        faqAns2: "A: Use the search button to look up people by name, hashtag, or words in their personal statements.",

        faqQues3: "Q: Do I need to subscribe before adding a photo?",
        faqAns3: "A: No, but you must log in through a social media account, accept the Terms and Conditions, and agree to the GDPR policy.",

        faqQues4: "Q: What type of photos are appropriate?",
        faqAns4: "A: All photos must meet decency criteria and be approved before becoming part of the permanent mosaics. Uploads can include selfies, filtered photos, or creative messages supporting the theme.",

        faqQues5: "Q: Can I add a personal statement or video?",
        faqAns5: "A: Yes, participants can add a photo or video, a positive personal statement, and relevant hashtags.",

        faqQues6: "Q: Can the mosaic theme be updated?",
        faqAns6: "A: Occasionally, we run contests to renew the artwork theme based on participant votes.",

        faqQues7: "Q: How else can I view the mosaic?",
        faqAns7: "A: The AR-enabled mosaics can only be accessed at designated locations, but the non-AR version is available online for all visitors.",

        faqQues8: "Q: Can I share my participation on social media?",
        faqAns8: "A: Yes, becoming part of the mosaic is an achievement worth celebrating on social media.",

        faqQues9: "Q: Is participation free?",
        faqAns9: "A: Yes, but maintaining searchability may require reposting participation on social media.",

        faqQues10: "Q: Who owns my submitted photo?",
        faqAns10: "A: Participants retain ownership of their photos but grant us the right to include them in the mosaic.",

        faqQues11: "Q: How long will my photo remain in the mosaic?",
        faqAns11: "A: Photos remain indefinitely, but may become unsearchable if the participant does not periodically renew their social media posts.",

        faqQues12: "Q: How do you handle GDPR compliance?",
        faqAns12: "A: We fully comply with GDPR requirements, and participants must accept our GDPR policy before submitting photos.",

        faqQues13: "Q: Can I remove my photo?",
        faqAns13: "A: Yes, participants can request photo removal by email, which will be processed in batches.",

        faqQues14: "Q: How can I find other icons4good installations?",
        faqAns14: "A: We are working on an app to notify users of nearby installations, and may also collaborate with other apps to push similar notifications."
      },
    },
    greek: {
      homePage: {
        topBar: "",
        centerMsg: "Μπορείτε να βρείτε το μωσαϊκό;",
        buttonOne: "Κάντε κλικ και στόχευση",
        buttonTwo: "Σχετικά με εμάς",
        mapButton: "Χάρτης",
        scanButton: "Σάρωση",
        profileButton: "Προφίλ"
      },
      infoPop: {
        lineOne:
          "είναι ένα μωσαϊκό από εικόνες που συνδέουν ανθρώπους και μέρη",
        lineTwo: "Ανεβάστε τη δική σας εικόνα και μοιραστείτε τη με άλλους",
        lineThree:
          "Αναζητήστε εικόνες και βρείτε τις δικές σας εικόνες και εξερευνήστε εικόνες από άλλες πόλεις",
      },
      mosiacPage: {
        lineOne: "Κάντε ζουμ στο μωσαϊκό για να δείτε όλες τις εικόνες",
        lineTwo: "Αναζήτηση εικόνων στο μωσαϊκό Ονόματα πόλεων",
        lineThree:
          "Εγγραφείτε / συνδεθείτε μεταφορτώστε φωτογραφίες στο μωσαϊκ",
        buttonText: "Γίνετε μέρος του μωσαϊκού",
        addImageMosaicButton: "Προσθήκη εικόνας στο μωσαϊκό",
        shareButton: "Μερίδιο",
        mosiacButton: "Γίνετε μέρος του μωσαϊκού"
      },
      signInInfoPage: {
        signInBtn: "Συνδεθείτε",
        paraLIne: "--  ή συνδεθείτε με  --",
        dontAcntLine: "Δεν έχετε λογαριασμό ?",
        signUpBtn: "Εγγραφείτε",
      },
      signInPage: {
        signInLabel: "Συνδεθείτε",
        orLabel: "ή",
        userNameLabel: "Ονομα χρήστη",
        passwordLabel: "Κωδικός πρόσβασης",
        signinBtn: "Συνδεθείτε",
      },
      signUpPage: {
        subscriptionLabel: "Συνδρομή",
        orLabel: "ή",
        firstNameLabel: "Ονομα",
        lastNameLabel: "Επίθετο",
        emailLabel: "Διεύθυνση ηλεκτρονικού ταχυδρομείου",
        mobileLabel: "Αριθμός κινητού",
        passwordLabel: "Κωδικός πρόσβασης",
        privacyPara: "Συμφωνώ με την πολιτική απορρήτου icons4good",
        privacyanchor: "Πολιτική Απορρήτου",
        termsPara: "Συμφωνώ με τους όρους και προϋποθέσεις του icons4good",
        termsAnchor: "όροι και Προϋποθέσεις",
        declarationPara: "Επιβεβαιώνω ότι είμαι 18 ετών και άνω",
        submitBtn: "υποβάλλουν",
      },
      thankPage: {
        thankMsg:
          "Σας ευχαριστούμε που υποβάλατε την εικόνα σας Θα λάβετε ένα email όταν θα προστεθεί στο μωσαϊκό",
        back: "Προσθέστε περισσότερες φωτογραφίες",
        firstThankLineMsg: "για να προσθέσετε την εικόνα ή το βίντεό σας στο μωσαϊκό. Σύντομα θα είναι ορατό και θα παραμείνει για 24 ώρες.",
        secondThankLineMsg: "Εάν θέλετε η εικόνα ή το βίντεό σας να μπορεί να βρεθεί μόνιμα, συνεισφέρετε στο μωσαϊκό για να γίνει υποστηρικτής του μωσαϊκού",
        thirdThankLineMsg: "Γίνετε ορατοί στο Mosaic και υποστηρίξτε το υπεύθυνο κίνημα γκράφιτι της Αθήνας.",
        paymentBtn: "Κάνω μια πληρωμή"
      },
      mosiacSecondPage: {
        uploadBtn: "Μεταφόρτωση εικόνας",
        uploadEmbedBtn: "Ενσωματώστε ένα βίντεο στο YouTube",
        cancelBtn: "Πίσω",
        choseFileUpld: "Επιλέξτε αρχείο για μεταφόρτωση",
        addPhotoBtn: "Προσθήκη αρχείου φωτογραφίας",
        captionHead: "Γράψτε μια λεζάντα για τη μεταφόρτωσή σας",
        tagsHead: "Επιλέξτε Ετικέτες για τη μεταφόρτωσή σας",
        confrmMsg:
          "επιβεβαιώστε ότι έχω το δικαίωμα να χρησιμοποιήσω το αρχείο εικόνας που ανεβάζω",
      },
      paymentPage: {
        paymentParaOne:
          "Προσθέστε την εικόνα σας στο μωσαϊκό και κρατήστε την εκεί",
        paymentParaTwo: "Πλήρωσε τώρα",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Ας δώσουμε ένα μέρος του ποσού σε φιλανθρωπικό ίδρυμα της επιλογής μας",
        paymentbuttonOne: "Πληρωμή",
        paymentBtnTwo: "Χωρίς Δωρεά",
      },
      aboutPage: {
        aboutTextHead: "Σχετικά με εμάς",
        aboutText1: "Στο icons4good, δημιουργούμε νέους προορισμούς μέσω συναρπαστικών, διαδραστικών ψηφιακών έργων τέχνης που γιορτάζουν σημαντικές στιγμές και ενώνουν τους ανθρώπους γύρω από κοινές εμπειρίες και καλές αιτίες. Το κατοχυρωμένο με δίπλωμα ευρεσιτεχνίας λογισμικό μας συνδυάζει την επαυξημένη πραγματικότητα, το γεωπερίφραγμα και την τεχνητή νοημοσύνη με τη δύναμη των φωτομωσαϊκών.",

        aboutText2: "Στόχος μας είναι να αυξήσουμε την ευαισθητοποίηση, να χτίσουμε αφοσιωμένες ψηφιακές κοινότητες και να εμπνεύσουμε θετική αλλαγή. Συνεργαζόμαστε στενά με τις τοπικές κοινότητες για να υποστηρίξουμε πρωτοβουλίες που κάνουν τον κόσμο ένα καλύτερο μέρος.",

        aboutText3: "Κύρια χαρακτηριστικά:",

        aboutText4: "- Αναζητήσιμη βάση δεδομένων συμμετεχόντων κατά όνομα, hashtag ή προσωπική δήλωση",

        aboutText5: "- Δυνατότητα προσθήκης φωτογραφιών, βίντεο, προσωπικών δηλώσεων και hashtags",

        aboutText6: "- Εμπειρίες επαυξημένης πραγματικότητας σε καθορισμένες τοποθεσίες",

        aboutText7: "- Ενημερώσεις θεμάτων με βάση τις ψήφους της κοινότητας",

        aboutText8: "- Συμμόρφωση με το GDPR και δυνατότητα αφαίρεσης φωτογραφιών κατόπιν αιτήματος",

        aboutText9: "Η συμμετοχή είναι δωρεάν, χάρη στη γενναιοδωρία των χορηγών μας. Ωστόσο, η διατήρηση της αναζητησιμότητας μπορεί να απαιτήσει από τους συμμετέχοντες να μοιραστούν τη συμμετοχή τους στα κοινωνικά δίκτυα.",

        aboutText10: "Για ερωτήσεις",

        aboutText11: "παρακαλώ στείλτε μας email στο",

        faqHead: "Συχνές ερωτήσεις",

        faqQues1: "Ε: Έχετε πολιτική προσφοράς στην κοινωνία;",
        faqAns1: "Α: Ναι, συνεργαζόμαστε στενά με τις τοπικές κοινότητες για να υποστηρίξουμε πρωτοβουλίες που δημιουργούν θετικό αντίκτυπο.",

        faqQues2: "Ε: Πώς μπορώ να αναζητήσω συμμετέχοντες;",
        faqAns2: "Α: Χρησιμοποιήστε το κουμπί αναζήτησης για να αναζητήσετε άτομα κατά όνομα, hashtag ή λέξεις στις προσωπικές τους δηλώσεις.",

        faqQues3: "Ε: Πρέπει να εγγραφώ πριν προσθέσω μια φωτογραφία;",
        faqAns3: "Α: Όχι, αλλά πρέπει να συνδεθείτε μέσω ενός λογαριασμού κοινωνικής δικτύωσης, να αποδεχτείτε τους Όρους και Προϋποθέσεις και να συμφωνήσετε με την πολιτική GDPR.",

        faqQues4: "Ε: Τι είδους φωτογραφίες είναι κατάλληλες;",
        faqAns4: "Α: Όλες οι φωτογραφίες πρέπει να πληρούν τα κριτήρια ευπρέπειας και να εγκριθούν πριν γίνουν μέρος των μόνιμων μωσαϊκών. Οι μεταφορτώσεις μπορούν να περιλαμβάνουν selfies, φιλτραρισμένες φωτογραφίες ή δημιουργικά μηνύματα που υποστηρίζουν το θέμα.",

        faqQues5: "Ε: Μπορώ να προσθέσω μια προσωπική δήλωση ή βίντεο;",
        faqAns5: "Α: Ναι, οι συμμετέχοντες μπορούν να προσθέσουν μια φωτογραφία ή βίντεο, μια θετική προσωπική δήλωση και σχετικά hashtags.",

        faqQues6: "Ε: Μπορεί να ανανεωθεί το θέμα του μωσαϊκού;",
        faqAns6: "Α: Περιστασιακά, διοργανώνουμε διαγωνισμούς για να ανανεώσουμε το θέμα του έργου βάσει των ψήφων των συμμετεχόντων.",

        faqQues7: "Ε: Πώς αλλιώς μπορώ να δω το μωσαϊκό;",
        faqAns7: "Α: Τα μωσαϊκά με δυνατότητα AR μπορούν να προβληθούν μόνο σε συγκεκριμένες τοποθεσίες, αλλά η μη-AR έκδοση είναι διαθέσιμη διαδικτυακά για όλους τους επισκέπτες.",

        faqQues8: "Ε: Μπορώ να μοιραστώ τη συμμετοχή μου στα κοινωνικά δίκτυα;",
        faqAns8: "Α: Ναι, η συμμετοχή στο μωσαϊκό είναι ένα επίτευγμα που αξίζει να γιορτάσετε στα κοινωνικά δίκτυα.",

        faqQues9: "Ε: Η συμμετοχή είναι δωρεάν;",
        faqAns9: "Α: Ναι, αλλά για να παραμείνει η συμμετοχή σας αναζητήσιμη ίσως χρειαστεί να την αναδημοσιεύσετε στα κοινωνικά δίκτυα.",

        faqQues10: "Ε: Ποιος είναι ο κάτοχος της φωτογραφίας που υπέβαλα;",
        faqAns10: "Α: Οι συμμετέχοντες διατηρούν την κυριότητα των φωτογραφιών τους, αλλά μας παραχωρούν το δικαίωμα να τις συμπεριλάβουμε στο μωσαϊκό.",

        faqQues11: "Ε: Πόσο καιρό θα παραμείνει η φωτογραφία μου στο μωσαϊκό;",
        faqAns11: "Α: Οι φωτογραφίες παραμένουν επ' αόριστον, αλλά ενδέχεται να γίνουν μη αναζητήσιμες εάν ο συμμετέχων δεν ανανεώνει περιοδικά τις αναρτήσεις του στα κοινωνικά δίκτυα.",

        faqQues12: "Ε: Πώς διαχειρίζεστε τη συμμόρφωση με τον GDPR;",
        faqAns12: "Α: Συμμορφωνόμαστε πλήρως με τις απαιτήσεις του GDPR και οι συμμετέχοντες πρέπει να αποδεχτούν την πολιτική GDPR μας πριν υποβάλουν φωτογραφίες.",

        faqQues13: "Ε: Μπορώ να αφαιρέσω τη φωτογραφία μου;",
        faqAns13: "Α: Ναι, οι συμμετέχοντες μπορούν να ζητήσουν την αφαίρεση της φωτογραφίας μέσω email, και το αίτημα θα επεξεργαστεί σε παρτίδες.",

        faqQues14: "Ε: Πώς μπορώ να βρω άλλες εγκαταστάσεις icons4good;",
        faqAns14: "Α: Εργαζόμαστε σε μια εφαρμογή για να ενημερώνουμε τους χρήστες για τις κοντινές εγκαταστάσεις και ενδέχεται επίσης να συνεργαστούμε με άλλες εφαρμογές για να στέλνουμε παρόμοιες ειδοποιήσεις."
      }
    },
    french: {
      homePage: {
        topBar: "",
        centerMsg: "Pouvez-vous trouver la mosaïque ?",
        buttonOne: "Cliquez et ciblez",
        buttonTwo: "À propos de nous",
        mapButton: "Carte",
        scanButton: "Analyse",
        profileButton: "Profil"
      },
      infoPop: {
        lineOne:
          "Bridge of Love est une mosaïque d'images reliant les gens et les lieux",
        lineTwo: "Téléchargez votre propre photo et partagez-la avec d'autres",
        lineThree:
          "Recherchez des images, trouvez vos propres images et explorez des images d'autres villes.",
      },
      mosiacPage: {
        lineOne: "Zoomez sur la mosaïque pour voir toutes les images",
        lineTwo: "Rechercher des images dans la mosaïque Noms des villes",
        lineThree:
          "S'inscrire / se connecter télécharger des images dans la mosaïque",
        buttonText: "Faites partie de la mosaïque",
        addImageMosaicButton: "Ajouter une image à la mosaïque",
        shareButton: "Partager",
        mosiacButton: "Faites partie de la mosaïque"
      },
      signInInfoPage: {
        signInBtn: " Se connecter",
        paraLIne: "-- ou connectez-vous avec --",
        dontAcntLine: "Vous n'avez pas de compte ?",
        signUpBtn: "S'inscrire",
      },
      signInPage: {
        signInLabel: "Se connecter",
        orLabel: "ou",
        userNameLabel: "Vous n'avez pas de compte ?",
        passwordLabel: "Mot de passe",
        signinBtn: "Se connecter",
      },
      signUpPage: {
        subscriptionLabel: "Abonnement",
        orLabel: "ou",
        firstNameLabel: "Prénom",
        lastNameLabel: "Nom de famille",
        emailLabel: "Adresse e-mail",
        mobileLabel: "Numéro de portable",
        passwordLabel: "Mot de passe",
        privacyPara: "J'accepte la politique de confidentialité d'icons4good",
        privacyanchor: "politique de confidentialité",
        termsPara: "e suis d'accord avec les termes et conditions d'icons4good",
        termsAnchor: "termes et conditions",
        declarationPara: "Je confirme que j'ai 18 ans ou plus",
        submitBtn: "Soumettre",
      },
      thankPage: {
        thankMsg:
          "Merci d'avoir soumis votre photo Vous recevrez un email lorsqu'elle sera ajoutée à la mosaïque",
        back: "Ajouter plus de photos",
        firstThankLineMsg: "pour ajouter votre image ou vidéo à la mosaïque. Il sera bientôt visible et restera pendant 24 heures.",
        secondThankLineMsg: "Si vous souhaitez que votre image ou vidéo reste visible en permanence, alors contribuez à la mosaïque pour devenir supporter de la mosaïque.",
        thirdThankLineMsg: "Soyez visible dans la mosaïque et soutenez le mouvement graffiti responsable d'Athènes.",
        paymentBtn: "Effectuer un paiement"
      },
      mosiacSecondPage: {
        uploadBtn: "Télécharger une image",
        uploadEmbedBtn: "Intégrer une vidéo Youtube",
        cancelBtn: "Dos",
        choseFileUpld: "Choisissez le fichier à télécharger",
        addPhotoBtn: "Ajouter un fichier photo",
        captionHead: "Écrivez une légende pour votre téléchargement",
        tagsHead: "Sélectionnez les balises pour votre téléchargement",
        confrmMsg:
          "confirmer que j'ai le droit d'utiliser le fichier image que je télécharge",
      },
      paymentPage: {
        paymentParaOne: "Ajoutez votre image à la mosaïque et conservez-la",
        paymentParaTwo: "Payez maintenant",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Donnons une partie du montant à un organisme de bienfaisance de notre choix",
        paymentbuttonOne: "Paiement",
        paymentBtnTwo: "Sans don",
      },
      aboutPage: {
        aboutTextHead: "À propos de nous",
        aboutText1: "Chez icons4good, nous créons de nouvelles destinations à travers des œuvres d'art numériques immersives et interactives qui célèbrent des moments importants et unissent les gens autour d'expériences partagées et de bonnes causes. Notre logiciel breveté combine la réalité augmentée, le géorepérage et l'intelligence artificielle avec la puissance des photomosaïques.",

        aboutText2: "Notre objectif est de sensibiliser, de construire des communautés numériques dédiées et d'inspirer un changement positif. Nous travaillons en étroite collaboration avec les communautés locales pour soutenir des initiatives qui rendent le monde meilleur.",

        aboutText3: "Caractéristiques principales:",

        aboutText4: "- Base de données des participants consultable par nom, hashtag ou déclaration personnelle",

        aboutText5: "- Option pour ajouter des photos, des vidéos, des déclarations personnelles et des hashtags",

        aboutText6: "- Expériences de réalité augmentée dans des lieux désignés",

        aboutText7: "- Mises à jour des thèmes basées sur les votes de la communauté",

        aboutText8: "- Conformité au RGPD et possibilité de supprimer des photos sur demande",

        aboutText9: "La participation est gratuite, grâce à la générosité de nos sponsors. Cependant, maintenir la consultabilité peut nécessiter que les participants partagent leur participation sur les réseaux sociaux.",

        aboutText10: "Pour toute question",

        aboutText11: "veuillez nous envoyer un e-mail à",

        faqHead: "FAQ",

        faqQues1: "Q : Avez-vous une politique de retour à la société ?",
        faqAns1: "R : Oui, nous travaillons en étroite collaboration avec les communautés locales pour soutenir des initiatives qui créent un impact positif.",

        faqQues2: "Q : Comment puis-je rechercher des participants ?",
        faqAns2: "R : Utilisez le bouton de recherche pour rechercher des personnes par nom, hashtag ou mots dans leurs déclarations personnelles.",

        faqQues3: "Q : Dois-je m'abonner avant d'ajouter une photo ?",
        faqAns3: "R : Non, mais vous devez vous connecter via un compte de réseau social, accepter les termes et conditions et accepter la politique GDPR.",

        faqQues4: "Q : Quel type de photos est approprié ?",
        faqAns4: "R : Toutes les photos doivent respecter les critères de décence et être approuvées avant de faire partie des mosaïques permanentes. Les téléchargements peuvent inclure des selfies, des photos filtrées ou des messages créatifs soutenant le thème.",

        faqQues5: "Q : Puis-je ajouter une déclaration personnelle ou une vidéo ?",
        faqAns5: "R : Oui, les participants peuvent ajouter une photo ou une vidéo, une déclaration personnelle positive et des hashtags pertinents.",

        faqQues6: "Q : Le thème de la mosaïque peut-il être mis à jour ?",
        faqAns6: "R : Occasionnellement, nous organisons des concours pour renouveler le thème de l'œuvre d'art en fonction des votes des participants.",

        faqQues7: "Q : Comment puis-je voir autrement la mosaïque ?",
        faqAns7: "R : Les mosaïques avec AR ne peuvent être accessibles qu'à des emplacements désignés, mais la version sans AR est disponible en ligne pour tous les visiteurs.",

        faqQues8: "Q : Puis-je partager ma participation sur les réseaux sociaux ?",
        faqAns8: "R : Oui, faire partie de la mosaïque est un accomplissement qui mérite d'être célébré sur les réseaux sociaux.",

        faqQues9: "Q : La participation est-elle gratuite ?",
        faqAns9: "R : Oui, mais maintenir la consultabilité peut nécessiter de republier la participation sur les réseaux sociaux.",

        faqQues10: "Q : À qui appartient ma photo soumise ?",
        faqAns10: "R : Les participants conservent la propriété de leurs photos mais nous accordent le droit de les inclure dans la mosaïque.",

        faqQues11: "Q : Combien de temps ma photo restera-t-elle dans la mosaïque ?",
        faqAns11: "R : Les photos restent indéfiniment, mais peuvent devenir non consultables si le participant ne renouvelle pas périodiquement ses publications sur les réseaux sociaux.",

        faqQues12: "Q : Comment gérez-vous la conformité au RGPD ?",
        faqAns12: "R : Nous respectons pleinement les exigences du RGPD et les participants doivent accepter notre politique GDPR avant de soumettre des photos.",

        faqQues13: "Q : Puis-je supprimer ma photo ?",
        faqAns13: "R : Oui, les participants peuvent demander la suppression de leur photo par e-mail, ce qui sera traité par lots.",

        faqQues14: "Q : Comment puis-je trouver d'autres installations icons4good ?",
        faqAns14: "R : Nous travaillons sur une application pour informer les utilisateurs des installations à proximité et nous pourrions également collaborer avec d'autres applications pour envoyer des notifications similaires."
      }
    },
    spanish: {
      homePage: {
        topBar: "",
        centerMsg: "¿Puedes encontrar el mosaico?",
        buttonOne: "Haga clic y apunte",
        buttonTwo: "Sobre nosotros",
        mapButton: "Mapa",
        scanButton: "Escanear",
        profileButton: "Perfil"
      },
      infoPop: {
        lineOne:
          "Bridge of Love es un mosaico de imágenes que conectan personas y lugares.",
        lineTwo: "Sube tu propia imagen y compártela con otros",
        lineThree:
          "Busque imágenes, encuentre sus propias imágenes y explore imágenes de otras ciudades",
      },
      mosiacPage: {
        lineOne: "Haz zoom en el mosaico para ver todas las imágenes.",
        lineTwo: "Busca imágenes en el mosaico Nombres de pueblos",
        lineThree: "Registrarse / iniciar sesión subir fotos en el mosaico",
        buttonText: "Sé parte del mosaico",
        addImageMosaicButton: "Agregar imagen al mosaico",
        shareButton: "Compartir",
        mosiacButton: "Sé parte del mosaico"
      },
      signInInfoPage: {
        signInBtn: " Iniciar sesión",
        paraLIne: "-- o inicia sesión con --",
        dontAcntLine: "¿No tienes una cuenta?",
        signUpBtn: "Inscribirse",
      },
      signInPage: {
        signInLabel: "Iniciar sesión",
        orLabel: "o",
        userNameLabel: "¿No tienes una cuenta?",
        passwordLabel: "Contraseña",
        signinBtn: "Iniciar sesión",
      },
      signUpPage: {
        subscriptionLabel: "Suscripción",
        orLabel: "o",
        firstNameLabel: "Nombre de pila",
        lastNameLabel: "Apellido",
        emailLabel: "Dirección de correo electrónico",
        mobileLabel: "Número de teléfono móvil",
        passwordLabel: "Contraseña",
        privacyPara: "Acepto la política de privacidad de Icons4good",
        privacyanchor: "política de privacidad",
        termsPara:
          "Estoy de acuerdo con los términos y condiciones de Icons4good",
        termsAnchor: "Términos y condiciones",
        declarationPara: "Confirmo que tengo 18 años o más",
        submitBtn: "Entregar",
      },
      thankPage: {
        thankMsg:
          "Gracias por enviar su imagen. Recibirá un correo electrónico cuando se agregará al mosaico.",
        back: "Añadir más fotos",
        firstThankLineMsg: "para agregar su imagen o video al mosaico. Pronto será visible y permanecerá durante 24 horas.",
        secondThankLineMsg: "Si desea que su imagen o video se pueda encontrar permanentemente, contribuya al mosaico para convertirse en partidario del mosaico.",
        thirdThankLineMsg: "Sea visible en el Mosaico y apoye el movimiento de graffiti responsable de Atenas.",
        paymentBtn: "Realizar un pago"
      },
      mosiacSecondPage: {
        uploadBtn: "Cargar imagen",
        uploadEmbedBtn: "Insertar un vídeo de Youtube",
        cancelBtn: "Atrás",
        choseFileUpld: "Elige un archivo para subir",
        addPhotoBtn: "Agregar archivo de foto",
        captionHead: "Escribe un título para tu carga.",
        tagsHead: "Seleccione etiquetas para su carga",
        confrmMsg:
          "Confirmo que tengo derecho a utilizar el archivo de imagen que estoy subiendo.",
      },
      paymentPage: {
        paymentParaOne: "Añade tu imagen al mosaico y mantenla allí.",
        paymentParaTwo: "Pagar ahora",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Demos una parte del importe a una organización benéfica de nuestra elección.",
        paymentbuttonOne: "Pago",
        paymentBtnTwo: "Sin donación",
      },
      aboutPage: {
        aboutTextHead: "Sobre nosotras",
        aboutText1: "En icons4good, creamos nuevos destinos a través de obras de arte digitales inmersivas e interactivas que celebran momentos importantes y unen a las personas en torno a experiencias compartidas y buenas causas. Nuestro software patentado combina la realidad aumentada, la geovalla y la inteligencia artificial con el poder de los fotomosaicos.",

        aboutText2: "Nuestro objetivo es aumentar la conciencia, construir comunidades digitales dedicadas e inspirar un cambio positivo. Trabajamos en estrecha colaboración con las comunidades locales para apoyar iniciativas que hacen del mundo un lugar mejor.",

        aboutText3: "Características clave:",

        aboutText4: "- Base de datos de participantes que se puede buscar por nombre, hashtag o declaración personal",

        aboutText5: "- Opción para añadir fotos, vídeos, declaraciones personales y hashtags",

        aboutText6: "- Experiencias de realidad aumentada en lugares designados",

        aboutText7: "- Actualizaciones del tema impulsadas por la comunidad a través de votaciones",

        aboutText8: "- Cumplimiento del GDPR y posibilidad de eliminar fotos a petición",

        aboutText9: "La participación es gratuita, gracias a la generosidad de nuestros patrocinadores. Sin embargo, mantener la buscabilidad puede requerir que los participantes compartan su participación en las redes sociales.",

        aboutText10: "Para consultas",

        aboutText11: "por favor envíenos un correo electrónico a",

        faqHead: "Preguntas frecuentes",

        faqQues1: "P: ¿Tienen una política de retorno a la sociedad?",
        faqAns1: "R: Sí, trabajamos en estrecha colaboración con las comunidades locales para apoyar iniciativas que crean un impacto positivo.",

        faqQues2: "P: ¿Cómo puedo buscar participantes?",
        faqAns2: "R: Utilice el botón de búsqueda para buscar personas por nombre, hashtag o palabras en sus declaraciones personales.",

        faqQues3: "P: ¿Necesito suscribirme antes de agregar una foto?",
        faqAns3: "R: No, pero debe iniciar sesión a través de una cuenta de redes sociales, aceptar los Términos y Condiciones y aceptar la política de GDPR.",

        faqQues4: "P: ¿Qué tipo de fotos son apropiadas?",
        faqAns4: "R: Todas las fotos deben cumplir con los criterios de decencia y ser aprobadas antes de formar parte de los mosaicos permanentes. Las cargas pueden incluir selfies, fotos filtradas o mensajes creativos que apoyen el tema.",

        faqQues5: "P: ¿Puedo añadir una declaración personal o un video?",
        faqAns5: "R: Sí, los participantes pueden añadir una foto o video, una declaración personal positiva y hashtags relevantes.",

        faqQues6: "P: ¿Se puede actualizar el tema del mosaico?",
        faqAns6: "R: Ocasionalmente, organizamos concursos para renovar el tema de la obra de arte según los votos de los participantes.",

        faqQues7: "P: ¿Cómo más puedo ver el mosaico?",
        faqAns7: "R: Los mosaicos habilitados para AR solo se pueden acceder en lugares designados, pero la versión sin AR está disponible en línea para todos los visitantes.",

        faqQues8: "P: ¿Puedo compartir mi participación en las redes sociales?",
        faqAns8: "R: Sí, formar parte del mosaico es un logro que vale la pena celebrar en las redes sociales.",

        faqQues9: "P: ¿La participación es gratuita?",
        faqAns9: "R: Sí, pero mantener la buscabilidad puede requerir volver a publicar la participación en las redes sociales.",

        faqQues10: "P: ¿Quién es el dueño de mi foto enviada?",
        faqAns10: "R: Los participantes conservan la propiedad de sus fotos, pero nos otorgan el derecho de incluirlas en el mosaico.",

        faqQues11: "P: ¿Cuánto tiempo permanecerá mi foto en el mosaico?",
        faqAns11: "R: Las fotos permanecen indefinidamente, pero pueden volverse no buscables si el participante no renueva periódicamente sus publicaciones en las redes sociales.",

        faqQues12: "P: ¿Cómo manejan el cumplimiento del GDPR?",
        faqAns12: "R: Cumplimos plenamente con los requisitos del GDPR y los participantes deben aceptar nuestra política de GDPR antes de enviar fotos.",

        faqQues13: "P: ¿Puedo eliminar mi foto?",
        faqAns13: "R: Sí, los participantes pueden solicitar la eliminación de su foto por correo electrónico, que se procesará en lotes.",

        faqQues14: "P: ¿Cómo puedo encontrar otras instalaciones de icons4good?",
        faqAns14: "R: Estamos trabajando en una aplicación para notificar a los usuarios sobre instalaciones cercanas y también podríamos colaborar con otras aplicaciones para enviar notificaciones similares."
      }
    },
    german: {
      homePage: {
        topBar: "",
        centerMsg: "Kannst du das Mosaik finden?",
        buttonOne: "Klicken und zielen",
        buttonTwo: "Über uns",
        mapButton: "Karte",
        scanButton: "Scan",
        profileButton: "Profil"
      },
      infoPop: {
        lineOne:
          "Bridge of Love ist ein Mosaik aus Bildern, die Menschen und Orte verbinden",
        lineTwo:
          "Laden Sie Ihr eigenes Bild hoch und teilen Sie es mit anderen",
        lineThree:
          "Suchen Sie nach Bildern, finden Sie Ihre eigenen Bilder und erkunden Sie Bilder aus anderen Städten",
      },
      mosiacPage: {
        lineOne: "Vergrößern Sie das Mosaik, um alle Bilder zu sehen",
        lineTwo: "Suchen Sie nach Bildern im Mosaik Namen Städte",
        lineThree: "Registrieren / anmelden Bilder im Mosaik hochladen",
        buttonText: "Werden Sie Teil des Mosaiks",
        addImageMosaicButton: "Bild zum Mosaik hinzufügen",
        shareButton: "Aktie",
        mosiacButton: "Werden Sie Teil des Mosaiks"
      },
      signInInfoPage: {
        signInBtn: "Anmelden",
        paraLIne: "-- oder melden Sie sich an mit --",
        dontAcntLine: "Sie haben noch kein Konto?",
        signUpBtn: "Melden Sie sich an",
      },
      signInPage: {
        signInLabel: "Anmelden",
        orLabel: "oder",
        userNameLabel: "Sie haben noch kein Konto?",
        passwordLabel: "Passwort",
        signinBtn: "Anmelden",
      },
      signUpPage: {
        subscriptionLabel: "Abonnement",
        orLabel: "oder",
        firstNameLabel: "Vorname",
        lastNameLabel: "Familienname, Nachname",
        emailLabel: "E-Mail-Adresse",
        mobileLabel: "Handynummer",
        passwordLabel: "Passwort",
        privacyPara: "Ich stimme der Datenschutzrichtlinie vonicons4good zu",
        privacyanchor: "Datenschutzrichtlinie",
        termsPara:
          "Ich stimme den allgemeinen Geschäftsbedingungen vonicons4good zu",
        termsAnchor: "Terms & amp; Bedingungen",
        declarationPara: "Ich bestätige, dass ich mindestens 18 Jahre alt bin",
        submitBtn: "Einreichen",
      },
      thankPage: {
        thankMsg:
          "Vielen Dank für die Übermittlung Ihres Bildes. Sie erhalten eine E-Mail, wenn es dem Mosaik hinzugefügt wird",
        back: "Fügen Sie weitere Bilder hinzu",
        firstThankLineMsg: "zum Hinzufügen Ihres Bildes oder Videos zum Mosaik. Es wird bald sichtbar sein und 24 Stunden lang bleiben.",
        secondThankLineMsg: "Wenn Sie möchten, dass Ihr Bild oder Video dauerhaft auffindbar bleibt, tragen Sie zum Mosaik bei und werden Sie Mosaik-Unterstützer",
        thirdThankLineMsg: "Seien Sie im Mosaik sichtbar und unterstützen Sie die verantwortungsvolle Graffiti-Bewegung in Athen.",
        paymentBtn: "Bezahlen"
      },
      mosiacSecondPage: {
        uploadBtn: "Bild hochladen",
        uploadEmbedBtn: "Betten Sie ein YouTube-Video ein",
        cancelBtn: "Zurück",
        choseFileUpld: "Datei zum Hochladen auswählen",
        addPhotoBtn: "Fotodatei hinzufügen",
        captionHead: "Schreiben Sie eine Bildunterschrift für Ihren Upload",
        tagsHead: "Wählen Sie Tags für Ihren Upload aus",
        confrmMsg: "Bestätige, dass ich das Recht habe, die von mir hochgeladene Bilddatei zu verwenden",
      },
      paymentPage: {
        paymentParaOne:
          "Fügen Sie Ihr Bild dem Mosaik hinzu und behalten Sie es dort",
        paymentParaTwo: "Zahlen Sie jetzt",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Lassen Sie uns einen Teil des Betrags an eine Wohltätigkeitsorganisation unserer Wahl spenden",
        paymentbuttonOne: "Zahlung",
        paymentBtnTwo: "Ohne Spende",
      },
      aboutPage: {
        aboutTextHead: "Über uns",
        aboutText1: "Bei icons4good schaffen wir neue Ziele durch immersive, interaktive digitale Kunstwerke, die wichtige Momente feiern und Menschen rund um gemeinsame Erlebnisse und gute Zwecke vereinen. Unsere patentierte Software kombiniert Augmented Reality, Geofencing und künstliche Intelligenz mit der Kraft von Fotomosaiken.",

        aboutText2: "Unser Ziel ist es, das Bewusstsein zu schärfen, engagierte digitale Gemeinschaften aufzubauen und positiven Wandel zu inspirieren. Wir arbeiten eng mit lokalen Gemeinschaften zusammen, um Initiativen zu unterstützen, die die Welt zu einem besseren Ort machen.",

        aboutText3: "Hauptmerkmale:",

        aboutText4: "- Durchsuchbare Teilnehmerdatenbank nach Name, Hashtag oder persönlicher Aussage",

        aboutText5: "- Möglichkeit, Fotos, Videos, persönliche Aussagen und Hashtags hinzuzufügen",

        aboutText6: "- Augmented-Reality-Erlebnisse an ausgewiesenen Standorten",

        aboutText7: "- Von der Gemeinschaft getragene Themenaktualisierungen durch Abstimmung",

        aboutText8: "- Einhaltung der DSGVO und Möglichkeit, Fotos auf Anfrage zu entfernen",

        aboutText9: "Die Teilnahme ist dank der Großzügigkeit unserer Sponsoren kostenlos. Die Aufrechterhaltung der Suchbarkeit kann jedoch erfordern, dass Teilnehmer ihre Beteiligung in sozialen Medien teilen.",

        aboutText10: "Für Anfragen",

        aboutText11: "bitte senden Sie uns eine E-Mail an",

        faqHead: "FAQs",

        faqQues1: "F: Haben Sie eine Politik des sozialen Engagements?",
        faqAns1: "A: Ja, wir arbeiten eng mit lokalen Gemeinschaften zusammen, um Initiativen zu unterstützen, die positive Auswirkungen haben.",

        faqQues2: "F: Wie kann ich Teilnehmer suchen?",
        faqAns2: "A: Verwenden Sie die Suchschaltfläche, um Personen nach Name, Hashtag oder Wörtern in ihren persönlichen Aussagen zu suchen.",

        faqQues3: "F: Muss ich mich anmelden, bevor ich ein Foto hinzufügen kann?",
        faqAns3: "A: Nein, aber Sie müssen sich über ein soziales Medienkonto anmelden, die Allgemeinen Geschäftsbedingungen akzeptieren und der DSGVO-Richtlinie zustimmen.",

        faqQues4: "F: Welche Art von Fotos sind angemessen?",
        faqAns4: "A: Alle Fotos müssen den Anstandskriterien entsprechen und genehmigt werden, bevor sie Teil der permanenten Mosaike werden. Uploads können Selfies, gefilterte Fotos oder kreative Nachrichten enthalten, die das Thema unterstützen.",

        faqQues5: "F: Kann ich eine persönliche Erklärung oder ein Video hinzufügen?",
        faqAns5: "A: Ja, Teilnehmer können ein Foto oder Video, eine positive persönliche Erklärung und relevante Hashtags hinzufügen.",

        faqQues6: "F: Kann das Mosaikthema aktualisiert werden?",
        faqAns6: "A: Gelegentlich veranstalten wir Wettbewerbe, um das Kunstwerk-Thema basierend auf den Stimmen der Teilnehmer zu erneuern.",

        faqQues7: "F: Wie kann ich das Mosaik sonst noch sehen?",
        faqAns7: "A: Die AR-unterstützten Mosaike sind nur an ausgewiesenen Standorten zugänglich, aber die nicht-AR-Version ist online für alle Besucher verfügbar.",

        faqQues8: "F: Kann ich meine Teilnahme in sozialen Medien teilen?",
        faqAns8: "A: Ja, ein Teil des Mosaiks zu werden, ist ein Erfolg, den es in sozialen Medien zu feiern gilt.",

        faqQues9: "F: Ist die Teilnahme kostenlos?",
        faqAns9: "A: Ja, aber die Aufrechterhaltung der Suchbarkeit kann erfordern, die Teilnahme in sozialen Medien erneut zu posten.",

        faqQues10: "F: Wer besitzt mein eingereichtes Foto?",
        faqAns10: "A: Die Teilnehmer behalten das Eigentum an ihren Fotos, gewähren uns jedoch das Recht, sie in das Mosaik aufzunehmen.",

        faqQues11: "F: Wie lange bleibt mein Foto im Mosaik?",
        faqAns11: "A: Fotos bleiben auf unbestimmte Zeit, können jedoch unauffindbar werden, wenn der Teilnehmer seine Beiträge in sozialen Medien nicht regelmäßig erneuert.",

        faqQues12: "F: Wie handhaben Sie die DSGVO-Konformität?",
        faqAns12: "A: Wir erfüllen die Anforderungen der DSGVO vollständig, und die Teilnehmer müssen unserer DSGVO-Richtlinie zustimmen, bevor sie Fotos einreichen.",

        faqQues13: "F: Kann ich mein Foto entfernen?",
        faqAns13: "A: Ja, Teilnehmer können die Entfernung ihres Fotos per E-Mail anfordern, die in Chargen bearbeitet wird.",

        faqQues14: "F: Wie kann ich andere icons4good-Installationen finden?",
        faqAns14: "A: Wir arbeiten an einer App, um Benutzer über nahegelegene Installationen zu benachrichtigen, und könnten auch mit anderen Apps zusammenarbeiten, um ähnliche Benachrichtigungen zu versenden."
      }
    },
    italian: {
      homePage: {
        topBar: "",
        centerMsg: "Riesci a trovare il mosaico?",
        buttonOne: "Fai clic e scegli come target",
        buttonTwo: "Chi siamo",
        mapButton: "Carta geografica",
        scanButton: "Scansione",
        profileButton: "Profilo"
      },
      infoPop: {
        lineOne:
          "Bridge of Love è un mosaico di immagini che collega persone e luoghi",
        lineTwo: "Carica la tua foto e condividila con gli altri",
        lineThree:
          "Cerca immagini e trova le tue immagini ed esplora immagini di altre città",
      },
      mosiacPage: {
        lineOne: "Ingrandisci il mosaico per vedere tutte le immagini",
        lineTwo: "Cerca le immagini nel mosaico Nomi città",
        lineThree: "Iscriviti/accedi carica le immagini nel mosaico",
        buttonText: "Diventa parte del mosaico",
        addImageMosaicButton: "Aggiungi l'immagine al mosaico",
        shareButton: "Condividere",
        mosiacButton: "Diventa parte del mosaico"
      },
      signInInfoPage: {
        signInBtn: "Registrazione",
        paraLIne: "-- oppure accedi con --",
        dontAcntLine: "Non hai un account?",
        signUpBtn: "Iscrizione",
      },
      signInPage: {
        signInLabel: "Registrazione",
        orLabel: "O",
        userNameLabel: "Non hai un account?",
        passwordLabel: "Parola d'ordine",
        signinBtn: "Registrazione",
      },
      signUpPage: {
        subscriptionLabel: "Sottoscrizione",
        orLabel: "O",
        firstNameLabel: "Nome di battesimo",
        lastNameLabel: "Cognome",
        emailLabel: "Indirizzo e-mail",
        mobileLabel: "Numero di cellulare",
        passwordLabel: "Parola d'ordine",
        privacyPara:
          "Sono d'accordo con l'informativa sulla privacy di Icons4Good",
        privacyanchor: "politica sulla riservatezza",
        termsPara: "Sono d'accordo con i termini e le condizioni di Icons4Good",
        termsAnchor: "Termini & Condizioni",
        declarationPara: "Confermo di avere almeno 18 anni",
        submitBtn: "Invia",
      },
      thankPage: {
        thankMsg:
          "Grazie per aver inviato la tua foto Riceverai un'e-mail quando verrà aggiunta al mosaico",
        back: "Aggiungi altre immagini",
        firstThankLineMsg: "per aggiungere la tua immagine o video al mosaico. Presto sarà visibile e rimarrà per 24 ore.",
        secondThankLineMsg: "Se vuoi che la tua immagine o il tuo video rimangano reperibili in modo permanente, contribuisci al mosaico per diventare un sostenitore del mosaico",
        thirdThankLineMsg: "Sii visibile nel Mosaico e sostieni il movimento dei graffiti responsabili di Atene.",
        paymentBtn: "Effettua un pagamento"
      },
      mosiacSecondPage: {
        uploadBtn: "Carica immagine",
        uploadEmbedBtn: "Incorpora un video di Youtube",
        cancelBtn: "Indietro",
        choseFileUpld: "Scegli il file da caricare",
        addPhotoBtn: "Aggiungi file di foto",
        captionHead: "Scrivi una didascalia per il tuo caricamento",
        tagsHead: "Seleziona i tag per il tuo caricamento",
        confrmMsg:
          "confermo di avere il diritto di utilizzare il file immagine che sto caricando",
      },
      paymentPage: {
        paymentParaOne: "Aggiungi la tua immagine al mosaico e mantienila lì",
        paymentParaTwo: "Paga ora",
        paymentParaThree: "€ 2.00",
        paymentParaFour:
          "Diamo una parte dell'importo a un ente di beneficenza di nostra scelta",
        paymentbuttonOne: "Pagamento",
        paymentBtnTwo: "Senza donazione",
      },
      aboutPage: {
        aboutTextHead: "Chi siamo",
        aboutText1: "Su icons4good, creiamo nuove destinazioni attraverso opere d'arte digitali immersive e interattive che celebrano momenti importanti e uniscono le persone attorno a esperienze condivise e cause nobili. Il nostro software in fase di brevetto combina la realtà aumentata, il geofencing e l'intelligenza artificiale con il potere dei fotomosaici.",

        aboutText2: "Il nostro obiettivo è aumentare la consapevolezza, costruire comunità digitali dedicate e ispirare cambiamenti positivi. Lavoriamo a stretto contatto con le comunità locali per supportare iniziative che rendano il mondo un posto migliore.",

        aboutText3: "Caratteristiche principali:",

        aboutText4: "- Database di partecipanti ricercabile per nome, hashtag o dichiarazione personale",

        aboutText5: "- Opzione per aggiungere foto, video, dichiarazioni personali e hashtag",

        aboutText6: "- Esperienze in realtà aumentata in luoghi designati",

        aboutText7: "- Aggiornamenti del tema basati sulla partecipazione della comunità attraverso votazioni",

        aboutText8: "- Conformità al GDPR e possibilità di rimuovere foto su richiesta",

        aboutText9: "La partecipazione è gratuita, grazie alla generosità dei nostri sponsor. Tuttavia, mantenere la ricercabilità può richiedere ai partecipanti di condividere il loro coinvolgimento sui social media.",

        aboutText10: "Per richieste",

        aboutText11: "si prega di inviarci un'e-mail a",

        faqHead: "Domande frequenti",

        faqQues1: "D: Avete una politica di ritorno alla società?",
        faqAns1: "R: Sì, lavoriamo a stretto contatto con le comunità locali per supportare iniziative che creano un impatto positivo.",

        faqQues2: "D: Come posso cercare i partecipanti?",
        faqAns2: "R: Utilizza il pulsante di ricerca per cercare persone per nome, hashtag o parole nelle loro dichiarazioni personali.",

        faqQues3: "D: Devo iscrivermi prima di aggiungere una foto?",
        faqAns3: "R: No, ma devi effettuare l'accesso tramite un account sui social media, accettare i Termini e Condizioni e aderire alla politica GDPR.",

        faqQues4: "D: Quali tipi di foto sono appropriati?",
        faqAns4: "R: Tutte le foto devono soddisfare i criteri di decenza e essere approvate prima di diventare parte dei mosaici permanenti. I caricamenti possono includere selfie, foto filtrate o messaggi creativi a sostegno del tema.",

        faqQues5: "D: Posso aggiungere una dichiarazione personale o un video?",
        faqAns5: "R: Sì, i partecipanti possono aggiungere una foto o un video, una dichiarazione personale positiva e hashtag pertinenti.",

        faqQues6: "D: Il tema del mosaico può essere aggiornato?",
        faqAns6: "R: Occasionalmente, organizziamo concorsi per rinnovare il tema dell'opera d'arte basandoci sui voti dei partecipanti.",

        faqQues7: "D: Come posso visualizzare il mosaico in altro modo?",
        faqAns7: "R: I mosaici abilitati alla AR possono essere accessibili solo in luoghi designati, ma la versione non AR è disponibile online per tutti i visitatori.",

        faqQues8: "D: Posso condividere la mia partecipazione sui social media?",
        faqAns8: "R: Sì, diventare parte del mosaico è un successo che vale la pena celebrare sui social media.",

        faqQues9: "D: La partecipazione è gratuita?",
        faqAns9: "R: Sì, ma mantenere la ricercabilità può richiedere la ripubblicazione della partecipazione sui social media.",

        faqQues10: "D: Chi possiede la mia foto inviata?",
        faqAns10: "R: I partecipanti mantengono la proprietà delle loro foto ma ci concedono il diritto di includerle nel mosaico.",

        faqQues11: "D: Quanto tempo rimarrà la mia foto nel mosaico?",
        faqAns11: "R: Le foto rimangono indefinitamente, ma potrebbero diventare non ricercabili se il partecipante non rinnova periodicamente i propri post sui social media.",

        faqQues12: "D: Come gestite la conformità al GDPR?",
        faqAns12: "R: Rispettiamo completamente i requisiti del GDPR e i partecipanti devono accettare la nostra politica GDPR prima di inviare le foto.",

        faqQues13: "D: Posso rimuovere la mia foto?",
        faqAns13: "R: Sì, i partecipanti possono richiedere la rimozione della foto via e-mail, che verrà elaborata in batch.",

        faqQues14: "D: Come posso trovare altre installazioni icons4good?",
        faqAns14: "R: Stiamo lavorando a un'app per notificare gli utenti delle installazioni vicine e potremmo anche collaborare con altre app per inviare notifiche simili."
      }
    },
  };

  var value =
    $("#selectLanguageId").val() || localStorage.getItem("storedLanguage");
  $(".paraTopCLs").empty().append(languages[value]?.homePage?.topBar);
  $(".centerParaCLs").empty().append(languages[value]?.homePage?.centerMsg);
  $(".buttonOne").empty().append(languages[value]?.homePage?.buttonOne);
  $(".buttonTwo").empty().append(languages[value]?.homePage?.buttonTwo);
  $(".mapButton").empty().append(languages[value]?.homePage?.mapButton);
  $(".scanButton").empty().append(languages[value]?.homePage?.scanButton);
  $(".profileButton").empty().append(languages[value]?.homePage?.profileButton);
  $(".infoLineOne").empty().append(languages[value]?.infoPop?.lineOne);
  $(".infoLineTwo").empty().append(languages[value]?.infoPop?.lineTwo);
  $(".infoLineThree").empty().append(languages[value]?.infoPop?.lineThree);
  $(".mosiacLineOne").empty().append(languages[value]?.mosiacPage?.lineOne);
  $(".mosiacLineTwo").empty().append(languages[value]?.mosiacPage?.lineTwo);
  $(".mosiacLineThree").empty().append(languages[value]?.mosiacPage?.lineThree);
  $(".mosiacButton").empty().append(languages[value]?.mosiacPage?.buttonText);
  $(".addImageMosaicButton").empty().append(languages[value]?.mosiacPage?.addImageMosaicButton);
  $(".shareButton").empty().append(languages[value]?.mosiacPage?.shareButton);
  $(".signInInforSignInBtn")
    .empty()
    .append(languages[value]?.signInInfoPage?.signInBtn);
  $(".signInInforParaLine")
    .empty()
    .append(languages[value]?.signInInfoPage?.paraLIne);
  $(".signInInforDontaccnt")
    .empty()
    .append(languages[value]?.signInInfoPage?.dontAcntLine);
  $(".signInInforSignUp")
    .empty()
    .append(languages[value]?.signInInfoPage?.signUpBtn);
  $(".signInInsignLabl")
    .empty()
    .append(languages[value]?.signInPage?.signInLabel);
  $(".signInInorLabl").empty().append(languages[value]?.signInPage?.orLabel);
  $(".signInInUserLabl")
    .empty()
    .append(languages[value]?.signInPage?.userNameLabel);
  $(".signInInPwdLabl")
    .empty()
    .append(languages[value]?.signInPage?.passwordLabel);
  $(".signInInSignIn").empty().append(languages[value]?.signInPage?.signinBtn);
  $(".signUpsubsLabel")
    .empty()
    .append(languages[value]?.signUpPage?.subscriptionLabel);
  $(".signUpOrlabel").empty().append(languages[value]?.signUpPage?.orLabel);
  $(".signUpFirstNameLabel")
    .empty()
    .append(languages[value]?.signUpPage?.firstNameLabel);
  $(".signUpLastNameLabel")
    .empty()
    .append(languages[value]?.signUpPage?.lastNameLabel);
  $(".signUpEmailLabel")
    .empty()
    .append(languages[value]?.signUpPage?.emailLabel);
  $(".signUpMobileLabel")
    .empty()
    .append(languages[value]?.signUpPage?.mobileLabel);
  $(".signUpPasswordLabel")
    .empty()
    .append(languages[value]?.signUpPage?.passwordLabel);
  $(".signUpPrivecyPara")
    .empty()
    .append(
      languages[value]?.signUpPage?.privacyPara +
      ' <a class="colorCls" href="policy.html" > ' +
      languages[value]?.signUpPage?.privacyanchor +
      "</a>"
    );
  $(".signUpTermsPara")
    .empty()
    .append(
      languages[value]?.signUpPage?.termsPara +
      '<a class="colorCls signUpTermsAnchor" href="tearmsAndCondition.html" > ' +
      languages[value]?.signUpPage?.termsAnchor +
      "</a>"
    );
  $(".signUpDeclerationPara")
    .empty()
    .append(languages[value]?.signUpPage?.declarationPara);
  $(".signUpBtn").empty().append(languages[value]?.signUpPage?.submitBtn);
  $(".thankMsg").empty().append(languages[value]?.thankPage?.thankMsg);
  $(".firstthankline").empty().append(languages[value]?.thankPage?.firstThankLineMsg);
  $(".secondthankline").empty().append(languages[value]?.thankPage?.secondThankLineMsg);
  $(".thirdthankline").empty().append(languages[value]?.thankPage?.thirdThankLineMsg);
  $(".backBtn").empty().append(languages[value]?.thankPage?.back);
  $(".makePaymentBtn").empty().append(languages[value]?.thankPage?.paymentBtn);
  $(".mosiacSecondUploadBtn")
    .empty()
    .append(
      '<img src="images/Vector.png" onclick="closePop()" style="width: 40px;" alt="Image 1" /><br>' +
      languages[value]?.mosiacSecondPage?.uploadBtn
    );
  $(".mosiacSecondUploadBtn2")
    .empty()
    .append(
      '<img src="images/Youtube.png" onclick="closePop()" style="width: 40px;" lt="Image 1" /><br>' +
      languages[value]?.mosiacSecondPage?.uploadEmbedBtn
    );
  $(".mosiacSecondChoseFIleUpldBtn")
    .empty()
    .append(languages[value]?.mosiacSecondPage?.choseFileUpld);
  $(".mosiacSecondAddPhotoBtn").empty().append(languages[value]?.mosiacSecondPage?.addPhotoBtn);
  $(".mosiacSecondCancelBtn").empty().append(languages[value]?.mosiacSecondPage?.cancelBtn);
  $(".mosiacSecondCaptionHead").empty().append(languages[value]?.mosiacSecondPage?.captionHead);
  $(".mosiacSecondTagHead").empty().append(languages[value]?.mosiacSecondPage?.tagsHead);
  $(".mosiacSecondCnfrmMsg").empty().append(languages[value]?.mosiacSecondPage?.confrmMsg);
  $(".paymentParaOne")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaOne);
  $(".paymentParaTwo")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaTwo);
  $(".paymentParaThree")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaThree);
  $(".paymentParaFour")
    .empty()
    .append(languages[value]?.paymentPage?.paymentParaFour);
  $(".paymentBtnOne")
    .empty()
    .append(languages[value]?.paymentPage?.paymentbuttonOne);
  $(".paymentBtnTwo")
    .empty()
    .append(languages[value]?.paymentPage?.paymentBtnTwo);
  $(".centerParaCLsInfo")
    .empty()
    .append(languages[value]?.signInInfoPage?.center);

  $(".about-text-head").empty().append(languages[value]?.aboutPage?.aboutTextHead);
  $(".about-text-1").empty().append(languages[value]?.aboutPage?.aboutText1);
  $(".about-text-2").empty().append(languages[value]?.aboutPage?.aboutText2);
  $(".about-text-3").empty().append(languages[value]?.aboutPage?.aboutText3);
  $(".about-text-4").empty().append(languages[value]?.aboutPage?.aboutText4);
  $(".about-text-5").empty().append(languages[value]?.aboutPage?.aboutText5);
  $(".about-text-6").empty().append(languages[value]?.aboutPage?.aboutText6);
  $(".about-text-7").empty().append(languages[value]?.aboutPage?.aboutText7);
  $(".about-text-8").empty().append(languages[value]?.aboutPage?.aboutText8);
  $(".about-text-9").empty().append(languages[value]?.aboutPage?.aboutText9);
  $(".about-text-10").empty().append(languages[value]?.aboutPage?.aboutText10);
  $(".about-text-11").empty().append(languages[value]?.aboutPage?.aboutText11);
  $(".faq-head").empty().append(languages[value]?.aboutPage?.faqHead);

  $(".faq-ques-1").empty().append(languages[value]?.aboutPage?.faqQues1);
  $(".faq-ans-1").empty().append(languages[value]?.aboutPage?.faqAns1);

  $(".faq-ques-2").empty().append(languages[value]?.aboutPage?.faqQues2);
  $(".faq-ans-2").empty().append(languages[value]?.aboutPage?.faqAns2);

  $(".faq-ques-3").empty().append(languages[value]?.aboutPage?.faqQues3);
  $(".faq-ans-3").empty().append(languages[value]?.aboutPage?.faqAns3);

  $(".faq-ques-4").empty().append(languages[value]?.aboutPage?.faqQues4);
  $(".faq-ans-4").empty().append(languages[value]?.aboutPage?.faqAns4);

  $(".faq-ques-5").empty().append(languages[value]?.aboutPage?.faqQues5);
  $(".faq-ans-5").empty().append(languages[value]?.aboutPage?.faqAns5);

  $(".faq-ques-6").empty().append(languages[value]?.aboutPage?.faqQues6);
  $(".faq-ans-6").empty().append(languages[value]?.aboutPage?.faqAns6);

  $(".faq-ques-7").empty().append(languages[value]?.aboutPage?.faqQues7);
  $(".faq-ans-7").empty().append(languages[value]?.aboutPage?.faqAns7);

  $(".faq-ques-8").empty().append(languages[value]?.aboutPage?.faqQues8);
  $(".faq-ans-8").empty().append(languages[value]?.aboutPage?.faqAns8);

  $(".faq-ques-9").empty().append(languages[value]?.aboutPage?.faqQues9);
  $(".faq-ans-9").empty().append(languages[value]?.aboutPage?.faqAns9);

  $(".faq-ques-10").empty().append(languages[value]?.aboutPage?.faqQues10);
  $(".faq-ans-10").empty().append(languages[value]?.aboutPage?.faqAns10);

  $(".faq-ques-11").empty().append(languages[value]?.aboutPage?.faqQues11);
  $(".faq-ans-11").empty().append(languages[value]?.aboutPage?.faqAns11);

  $(".faq-ques-12").empty().append(languages[value]?.aboutPage?.faqQues12);
  $(".faq-ans-12").empty().append(languages[value]?.aboutPage?.faqAns12);

  $(".faq-ques-13").empty().append(languages[value]?.aboutPage?.faqQues13);
  $(".faq-ans-13").empty().append(languages[value]?.aboutPage?.faqAns13);

  $(".faq-ques-14").empty().append(languages[value]?.aboutPage?.faqQues14);
  $(".faq-ans-14").empty().append(languages[value]?.aboutPage?.faqAns14);

  $(".mosiacButton").empty().append(languages[value]?.mosiacPage?.mosiacButton);

  localStorage.setItem("storedLanguage", value);
}

// Cache DOM elements

// Retrieve stored data securely
const storedDatas = JSON.parse(localStorage.getItem('storedData')) || {};
const locationname = storedDatas.locationname ? encodeURIComponent(storedDatas.locationname) : '';
const sidebarMenuWrapper = document.getElementById("sidebarMenuWrapper");
const menuBurger = `<div class="sidebarMenu">
        <div class="sidebarMenuClose">
          <button id="sidebarMenuCloseBtn"
            style="color: #111111;font-size: 30px !important;cursor: pointer;width: 40px;height: 40px;display: flex;align-items: center;justify-content: center;line-height: 1;padding: 5px;">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="sidebarMenuList">
          <ul>
            <li><a href="./index.html?${locationname}">Home</a></li>
            <li id="profileBtn"><a href="./profile.html">Profile</a></li>
            <li id="communityBtn"><a href="./community.html">Community</a></li>
            <li><a href="./viewMap.html">Map</a></li>
            <li><a href="./aboutUs.html">About icon$good</a></li>
            <li id="signUpBtn"><a href="./signIn_new.html">SignIn / SignUp</a></li>
            <li id="logOutBtn"><a onclick="logOut()" type="button">LogOut</a></li>
          </ul>
        </div>
      </div>`;

if (sidebarMenuWrapper) {
  sidebarMenuWrapper.innerHTML = menuBurger;

  const sidebarMenuOpenBtn = document.getElementById("sidebarMenuOpenBtn");
  const sidebarMenuCloseBtn = document.getElementById("sidebarMenuCloseBtn");

  // Toggle sidebar menu visibility
  if (sidebarMenuOpenBtn) {
    sidebarMenuOpenBtn.addEventListener("click", () => {
      if (sidebarMenuWrapper) {
        sidebarMenuWrapper.classList.add("active");
      }
    });
  }

  if (sidebarMenuCloseBtn) {
    sidebarMenuCloseBtn.addEventListener("click", () => {
      if (sidebarMenuWrapper) {
        sidebarMenuWrapper.classList.remove("active");
      }
    });
  }

  const user_Id = localStorage.getItem('userId');
  const profileBtn = document.getElementById("profileBtn");
  const communityBtn = document.getElementById("communityBtn");
  const signUpBtn = document.getElementById("signUpBtn");
  const logOutBtn = document.getElementById("logOutBtn");


  if (user_Id) {
    if (signUpBtn) {
      signUpBtn.remove();
    }
  } else {
    if (logOutBtn) {
      logOutBtn.remove();
    }
    if(profileBtn) {
      profileBtn.remove()
    }
    if(communityBtn) {
      communityBtn.remove()
    }
  }

  // Log out the user securely
  function logOut() {
    // Remove sensitive data from local storage
    localStorage.removeItem("userId");

    // Redirect to the index page with the location name as a query parameter
    window.location.href = `index.html?${locationname}`;
  }

  // Attach logOut function to the logOutBtn
  if (logOutBtn) {
    logOutBtn.addEventListener("click", logOut);
  }
}

const modalHtml = `
<div
  class="modalWrapper"
  id="alertModal"
>
  <div class="modalWrapper-dialog modalWrapper-dialog-centered">
    <div class="modalWrapper-content mx-4">
      <div class="modalWrapper-header">
        <h1 class="modal-title" id="alertModalLabel">Thank you!</h1>
        <button
          type="button"
          class="btn-close-x"
        >
          <img src="images/crossImgPop.png" alt="Image 1" />
        </button>
      </div>
      <div class="modalWrapper-body">
        <h6 id="modalBodyText">You will be redirected now</h6>
      </div>
      <div id="modalFooter" class="modalWrapper-footer">
        <a id="modalFooterLink" href="./signIn_new.html" class="btn btn-secondary">Sign In</a>
      </div>
    </div>
  </div>
</div>`;

// Insert the modal HTML at the end of the body
document.body.insertAdjacentHTML("afterbegin", modalHtml);

function showAlert(
  title = "Default Title",
  bodyText = "Default body text",
  buttonLink = ""
) {
  const modalLabel = document.getElementById("alertModalLabel");
  const modalBodyText = document.getElementById("modalBodyText");
  const modalFooter = document.getElementById("modalFooter");
  const modalFooterLink = document.getElementById("modalFooterLink");

  if (!modalLabel || !modalBodyText || !modalFooter || !modalFooterLink) {
    console.error("Modal elements not found.");
    return;
  }

  modalLabel.textContent = title;
  modalBodyText.textContent = bodyText;

  if (buttonLink != "") {
    modalFooterLink.href = buttonLink;
    modalFooter.style.display = 'flex';  // Ensure footer is visible
  } else {
    modalFooter.style.display = 'none';  // Hide footer if no button is needed
  }

  var modal = document.getElementById("alertModal");
  var closeBtn = document.querySelector(".btn-close-x");

  modal.classList.add("show");
  modal.style.display = "block";

  closeBtn.onclick = function () {
    modal.classList.remove("show");
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
      modal.style.display = "none";
    }
  }

  // Initialize and show the modal
  // const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
  // alertModal.show();
}




