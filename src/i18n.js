import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brandName: "Cosmic Insights",
      aboutAstrologer: "About Our Astrologer",
      astrologerTitle: "Master Astrologer with Years of Experience",
      astrologerPara1:
        "With over one decades of dedicated practice in Vedic astrology, our master astrologer has guided thousands of individuals through life's complex challenges. His profound knowledge of celestial movements and their impact on human lives has earned him recognition in astrological circles worldwide.",
      astrologerPara2:
        "Combining traditional wisdom with modern insights, he offers practical solutions to personal, professional, and spiritual concerns. His compassionate approach and accurate predictions have helped clients make informed decisions about relationships, career, health, and finances.",
      expertGuidance: "Expert Guidance",
      ancientWisdom: "Ancient Wisdom",
      globalClients: "Global Clients",
      servicesTitle: "Our Astrology Services",
      servicesSubtitle:
        "Professional astrological services tailored to your specific needs and concerns",

      servicesList: {
        birthChart: {
          title: "Birth Chart Analysis",
          description:
            "Detailed analysis of your natal chart to understand your personality, strengths, and life purpose.",
        },
        career: {
          title: "Career Guidance",
          description:
            "Get clarity on your career path through planetary positions.",
        },
        marriage: {
          title: "Marriage Matching",
          description:
            "Traditional and modern techniques to match horoscopes for a happy married life.",
        },
        relationship: {
          title: "Relationship Compatibility",
          description:
            "Compatibility analysis for romantic relationships, marriage, and business partnerships.",
        },
        vastu: {
          title: "Vastu Shastra",
          description:
            "Harmonize your living and working spaces according to ancient Vedic principles.",
        },
        forecast: {
          title: "Yearly Forecast",
          description:
            "Comprehensive annual predictions to help you navigate the coming year successfully.",
        },
      },

      footer: {
        brand: "Cosmic Insights",
        tagline:
          "Providing expert astrological guidance for over years. Helping clients navigate life's challenges with celestial wisdom.",
        quickLinks: "Quick Links",
        links: [
          "Home",
          "About",
          "Services",
          "Gallery",
          "Testimonials",
          "Location",
          "Contact",
        ],
        services: "Our Services",
        serviceItems: [
          "Birth Chart Analysis",
          "Relationship Compatibility",
          "Career Guidance",
          "Vastu Shastra",
          "Education Guidance",
          "Yearly Forecast",
        ],
        contact: "Contact Us",
        address: "Bhose(k) 413315, Tal. Pandharpur, Dist. Solapur",
        phone: "+91 9604503266",
        email: "contact@cosmicinsights.com",
        copyright: "Cosmic Insights Astrology Center. All rights reserved.",
        designedBy:
          "Designed and developed with ❤️ for your celestial guidance",
      },

      visitSection: {
        heading: "Visit Our Shop",
        subheading: "Find us at our conveniently located astrology center",
      },

      gallery: {
        title: "Our Work Gallery",
        description:
          "Glimpses of our astrological consultations, workshops, and client interactions",
      },
      testimonials: {
        title: "Client Testimonials",
        description: "What our clients say about our astrological services",
      },

      testimonial1: {
        name: "Rajesh Kumar",
        role: "Business Owner",
        content:
          "The career guidance I received completely transformed my professional life. I was able to make the right decisions at the right time, leading to unprecedented success in my business.",
      },
      testimonial2: {
        name: "Priya Sharma",
        role: "Software Engineer",
        content:
          "The relationship compatibility analysis helped me understand my partner better. We've been able to work through our differences and strengthen our bond significantly.",
      },
      testimonial3: {
        name: "Vikram Singh",
        role: "College Student",
        content:
          "The education guidance helped me choose the right field of study. I was confused between multiple options, but the astrological insights provided clarity and direction.",
      },
      mapSection: {
        label: "Interactive Map:",
        description: "Click to explore the area around our astrology center",
      },
      testimonial4: {
        name: "Harshita Deshmukh",
        role: "Homemaker",
        content:
          "The Vastu consultation for our new home made such a difference! We've experienced more harmony and positivity in our family life since implementing the suggestions.",
      },
      contactCard: {
        title: "Cosmic Insights Astrology Center",
        addressTitle: "Address",
        addressLines: ["Bhose(k) 413315", "Tal. Pandharpur", "Dist. Solapur"],
        hoursTitle: "Opening Hours",
        hoursWeekday: "Monday - Saturday: 9:30 AM - 7:00 PM",
        hoursSunday: "Sunday: 10:00 AM - 2:00 PM",
        phoneTitle: "Phone",
        emailTitle: "Email",
        notesTitle: "Important Notes:",
        notes: [
          "Appointments are recommended to ensure availability",
          "Free parking available behind the building",
          "Wheelchair accessible entrance",
        ],
      },

      resources: {
        title: "Astrology Resources",
        subtitle:
          "Explore articles, guides, and tools to deepen your astrological knowledge",
        article1: {
          title: "2025 Astrology Calendar",
          excerpt:
            "Stay ahead with key planetary movements, retrogrades, and festivals in 2025.",
          date: "June 10, 2025",
        },
        article2: {
          title: "Beginner’s Guide to Vedic Astrology",
          excerpt:
            "Learn the basics of houses, planets, and signs in the Vedic tradition.",
          date: "May 28, 2025",
        },
        article3: {
          title: "Career Tips for Modern Astrologers",
          excerpt:
            "How to build your personal brand and grow your astrology practice online.",
          date: "April 18, 2025",
        },
      },

      contactForm: {
        title: "Send us a message",
        successTitle: "Message Sent Successfully!",
        successMsg: "Thank you for contacting us. We'll get back to you soon.",
        fields: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          service: "Service Interested In",
          message: "Your Message",
          select: "Select a service",
        },
        services: {
          birthChart: "Birth Chart Analysis",
          relationship: "Relationship Compatibility",
          career: "Career Guidance",
          vastu: "Vastu Shastra",
          education: "Education Guidance",
          forecast: "Yearly Forecast",
        },
        message: "Your Message",
        button: "Send Message",
        sending: "Sending...",
      },
      consultation: {
        title: "Consultation Information",
        intro:
          "We offer both in-person and online consultations to accommodate clients from all over the world.",
        inPerson: {
          title: "In-Person Consultation",
          duration: "Duration: 60-90 minutes",
          bringDetails: "Please bring your birth details (date, time, place)",
          recording: "Recording available upon request",
        },
        online: {
          title: "Online Consultation",
          platform: "Conducted via Zoom or Google Meet",
          schedule: "Schedule according to your timezone",
          recording: "Recording provided after the session",
        },
        followUs: "Follow Us",
      },

      contactSection: {
        title: "Get In Touch",
        subtitle:
          "Have questions or ready to book a consultation? Reach out to us!",
      },

      consultation2: {
        title: "Consultation Information",
        description:
          "We offer both in-person and online consultations to accommodate clients from all over the world.",
        inPerson: {
          title: "In-Person Consultation",
          point1: "Duration: 60-90 minutes",
          point2: "Please bring your birth details (date, time, place)",
          point3: "Recording available upon request",
        },
        online: {
          title: "Online Consultation",
          point1: "Conducted via Zoom or Google Meet",
          point2: "Schedule according to your timezone",
          point3: "Recording provided after the session",
        },
        followUs: "Follow Us",
        platforms: ["Facebook", "Instagram", "YouTube", "Twitter"],
      },

      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        gallery: "Gallery",
        testimonials: "Testimonials",
        resources: "Resources",
        location: "Location",
        contact: "Contact",
        horoscope: "Horoscope",
      },
      welcome: "Welcome to Cosmic Insights",
      bookNow: "Book Now",
      bookConsultation: "Book Consultation",
      aria: {
        toggleMenu: "Toggle menu",
        lightMode: "Switch to light mode",
        darkMode: "Switch to dark mode",
      },
      heroTitle: "Cosmic Wisdom for Your Life's Journey",
      heroSubtitle:
        "Professional astrological guidance to help you navigate life's challenges and opportunities with clarity and confidence.",
    },
  },
  hi: {
    translation: {
      brandName: "वैश्विक अंतर्दृष्टी",
      aboutAstrologer: "हमारे ज्योतिषी के बारे में",
      astrologerTitle: "वर्षों के अनुभव वाले ज्योतिषाचार्य",
      astrologerPara1:
        "वैदिक ज्योतिष में एक दशक से अधिक के समर्पित अभ्यास के साथ, हमारे ज्योतिषाचार्य ने जीवन की जटिल चुनौतियों में हजारों लोगों का मार्गदर्शन किया है। ग्रहों की चाल और उनके प्रभाव के बारे में उनके गहरे ज्ञान ने उन्हें विश्व स्तर पर मान्यता दिलाई है।",
      astrologerPara2:
        "पारंपरिक ज्ञान और आधुनिक दृष्टिकोण को मिलाकर, वे व्यक्तिगत, व्यावसायिक और आध्यात्मिक समस्याओं के व्यावहारिक समाधान प्रदान करते हैं। उनके करुणामय दृष्टिकोण और सटीक भविष्यवाणियों ने ग्राहकों को संबंधों, करियर, स्वास्थ्य और वित्त से संबंधित निर्णय लेने में मदद की है।",
      expertGuidance: "विशेषज्ञ मार्गदर्शन",
      ancientWisdom: "प्राचीन ज्ञान",
      globalClients: "वैश्विक ग्राहक",
      servicesTitle: "हमारी ज्योतिष सेवाएं",
      servicesSubtitle:
        "आपकी विशिष्ट आवश्यकताओं और चिंताओं के अनुसार पेशेवर ज्योतिषीय सेवाएं",
      servicesList: {
        birthChart: {
          title: "जन्म कुंडली विश्लेषण",
          description:
            "आपकी व्यक्तिगतता, ताकत और जीवन के उद्देश्य को समझने के लिए विस्तृत कुंडली विश्लेषण।",
        },
        career: {
          title: "करियर मार्गदर्शन",
          description:
            "ग्रह स्थिति के आधार पर अपने करियर पथ पर स्पष्टता प्राप्त करें।",
        },
        marriage: {
          title: "विवाह मिलान",
          description:
            "सुखी वैवाहिक जीवन के लिए पारंपरिक और आधुनिक कुंडली मिलान तकनीक।",
        },
        relationship: {
          title: "संबंध अनुकूलता",
          description:
            "प्रेम, विवाह और व्यापारिक संबंधों के लिए अनुकूलता का विश्लेषण।",
        },
        vastu: {
          title: "वास्तु शास्त्र",
          description:
            "प्राचीन वैदिक सिद्धांतों के अनुसार अपने घर और कार्यालय को संतुलित करें।",
        },
        forecast: {
          title: "वार्षिक पूर्वानुमान",
          description:
            "आगामी वर्ष के लिए मार्गदर्शन हेतु संपूर्ण भविष्यवाणियाँ।",
        },
      },

      resources: {
        title: "ज्योतिष संसाधन",
        subtitle:
          "ज्योतिष ज्ञान बढ़ाने के लिए लेख, मार्गदर्शिकाएँ और उपकरण देखें",
        article1: {
          title: "2025 ज्योतिष कैलेंडर",
          excerpt: "2025 के ग्रह गोचर, वक्री और त्यौहारों की जानकारी पाएं।",
          date: "10 जून 2025",
        },
        article2: {
          title: "वैदिक ज्योतिष की शुरुआत",
          excerpt: "भाव, ग्रह और राशियों की मूल बातें जानें।",
          date: "28 मई 2025",
        },
        article3: {
          title: "आधुनिक ज्योतिषियों के लिए करियर टिप्स",
          excerpt: "अपना ब्रांड बनाएं और ऑनलाइन ज्योतिष सेवा शुरू करें।",
          date: "18 अप्रैल 2025",
        },
      },

      footer: {
        brand: "ब्रह्मांडीय अंतर्दृष्टि",
        tagline:
          "वर्षों का विशेषज्ञ ज्योतिषीय मार्गदर्शन। जीवन की चुनौतियों का समाधान खगोलीय ज्ञान से।",
        quickLinks: "त्वरित लिंक",
        links: [
          "होम",
          "हमारे बारे में",
          "सेवाएं",
          "गैलरी",
          "प्रशंसापत्र",
          "स्थान",
          "संपर्क",
        ],
        services: "हमारी सेवाएं",
        serviceItems: [
          "जन्म कुंडली विश्लेषण",
          "रिश्तों की संगति",
          "करियर मार्गदर्शन",
          "वास्तु शास्त्र",
          "शैक्षणिक मार्गदर्शन",
          "वार्षिक पूर्वानुमान",
        ],
        contact: "संपर्क करें",
        address: "भोसे(क), 413315, ता. पंढरपुर, जि. सोलापुर",
        phone: "+91 9604503266",
        email: "contact@cosmicinsights.com",
        copyright: "ब्रह्मांडीय अंतर्दृष्टि ज्योतिष केंद्र। सर्वाधिकार सुरक्षित।",
        designedBy:
          "आपके खगोलीय मार्गदर्शन के लिए ❤️ के साथ डिज़ाइन और विकसित किया गया",
      },

      contactSection: {
        title: "संपर्क करें",
        subtitle:
          "कोई सवाल है या परामर्श बुक करना चाहते हैं? हमसे संपर्क करें!",
      },

      visitSection: {
        heading: "हमारी दुकान पर आएं",
        subheading:
          "हमारे सुविधाजनक स्थान पर स्थित ज्योतिष केंद्र में हमसे मिलें",
      },
      mapSection: {
        label: "इंटरएक्टिव मानचित्र:",
        description:
          "हमारे ज्योतिष केंद्र के आस-पास का क्षेत्र देखने के लिए क्लिक करें",
      },

      contactForm: {
        title: "हमें संदेश भेजें",
        successTitle: "संदेश सफलतापूर्वक भेजा गया!",
        successMsg:
          "संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।",
        fields: {
          name: "पूरा नाम",
          email: "ईमेल पता",
          phone: "फ़ोन नंबर",
          service: "आपको किस सेवा में रुचि है",
          message: "आपका संदेश",
          select: "सेवा चुनें",
        },
        services: {
          birthChart: "जन्म कुंडली विश्लेषण",
          relationship: "संबंध संगतता",
          career: "करियर मार्गदर्शन",
          vastu: "वास्तु शास्त्र",
          education: "शिक्षा मार्गदर्शन",
          forecast: "वार्षिक भविष्यवाणी",
        },
        message: "आपका संदेश",
        button: "संदेश भेजें",
        sending: "भेजा जा रहा है...",
      },
      consultation: {
        title: "परामर्श जानकारी",
        intro:
          "हम दुनिया भर के ग्राहकों के लिए व्यक्तिगत और ऑनलाइन दोनों परामर्श प्रदान करते हैं।",
        inPerson: {
          title: "व्यक्तिगत परामर्श",
          duration: "अवधि: 60-90 मिनट",
          bringDetails: "कृपया जन्म विवरण (तारीख, समय, स्थान) लाएँ",
          recording: "रिकॉर्डिंग अनुरोध पर उपलब्ध",
        },
        online: {
          title: "ऑनलाइन परामर्श",
          platform: "Zoom या Google Meet के माध्यम से किया जाता है",
          schedule: "अपने समय क्षेत्र के अनुसार शेड्यूल करें",
          recording: "सेशन के बाद रिकॉर्डिंग दी जाएगी",
        },
        followUs: "हमें फॉलो करें",
      },

      contactCard: {
        title: "ब्रह्मांडीय अंतर्दृष्टि ज्योतिष केंद्र",
        addressTitle: "पता",
        addressLines: ["भोसे(के) ४१३३१५", "ता. पंढरपूर", "जि. सोलापूर"],
        hoursTitle: "खुलने का समय",
        hoursWeekday: "सोमवार - शनिवार: सुबह 9:30 - शाम 7:00",
        hoursSunday: "रविवार: सुबह 10:00 - दोपहर 2:00",
        phoneTitle: "फ़ोन",
        emailTitle: "ईमेल",
        notesTitle: "महत्वपूर्ण नोट्स:",
        notes: [
          "उपलब्धता सुनिश्चित करने के लिए अपॉइंटमेंट की सिफारिश की जाती है",
          "इमारत के पीछे निःशुल्क पार्किंग उपलब्ध है",
          "व्हीलचेयर के लिए अनुकूल प्रवेश",
        ],
      },

      gallery: {
        title: "हमारा कार्य गैलरी",
        description:
          "हमारी ज्योतिषीय परामर्श, कार्यशालाओं और क्लाइंट इंटरैक्शन की कुछ झलकियाँ",
      },
      testimonials: {
        title: "ग्राहकों की राय",
        description:
          "हमारी ज्योतिष सेवाओं के बारे में हमारे ग्राहक क्या कहते हैं",
      },

      testimonial1: {
        name: "राजेश कुमार",
        role: "व्यवसायी",
        content:
          "मुझे जो करियर मार्गदर्शन मिला उसने मेरी पेशेवर जिंदगी पूरी तरह बदल दी। सही समय पर सही निर्णय लेने से व्यापार में जबरदस्त सफलता मिली।",
      },
      testimonial2: {
        name: "प्रिया शर्मा",
        role: "सॉफ्टवेयर इंजीनियर",
        content:
          "रिश्तों की संगतता जांच ने मुझे अपने साथी को बेहतर समझने में मदद की। हमने अपने मतभेदों को सुलझाया और हमारा बंधन मजबूत हुआ।",
      },
      testimonial3: {
        name: "Vikram Singh",
        role: "College Student",
        content:
          "शैक्षणिक मार्गदर्शन से मुझे सही अध्ययन क्षेत्र चुनने में मदद मिली। मैं कई विकल्पों को लेकर उलझा था, लेकिन ज्योतिषीय सलाह से स्पष्टता मिली।",
      },
      testimonial4: {
        name: "Harshita Deshmukh",
        role: "Homemaker",
        content:
          "हमारे नए घर के लिए वास्तु परामर्श ने बहुत फर्क डाला! हमारे पारिवारिक जीवन में अधिक सामंजस्य और सकारात्मकता आई।",
      },

      consultation2: {
        title: "परामर्श जानकारी",
        description:
          "हम दुनिया भर के ग्राहकों के लिए व्यक्तिगत और ऑनलाइन परामर्श प्रदान करते हैं।",
        inPerson: {
          title: "व्यक्तिगत परामर्श",
          point1: "समय: 60-90 मिनट",
          point2: "कृपया अपनी जन्म की जानकारी (तारीख, समय, स्थान) साथ लाएं",
          point3: "रिकॉर्डिंग अनुरोध पर उपलब्ध है",
        },
        online: {
          title: "ऑनलाइन परामर्श",
          point1: "Zoom या Google Meet के माध्यम से आयोजित किया जाता है",
          point2: "अपने टाइमज़ोन के अनुसार शेड्यूल करें",
          point3: "सत्र के बाद रिकॉर्डिंग प्रदान की जाएगी",
        },
        followUs: "हमें फॉलो करें",
        platforms: ["Facebook", "Instagram", "YouTube", "Twitter"],
      },

      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएँ",
        gallery: "गैलरी",
        testimonials: "प्रशंसापत्र",
        resources: "संसाधन",
        location: "स्थान",
        contact: "संपर्क करें",
        horoscope: "राशिफल",
      },
      welcome: "ब्रह्मांडीय अंतर्दृष्टि में आपका स्वागत है",
      bookNow: "अभी बुक करें",
      bookConsultation: "परामर्श बुक करें",
      aria: {
        toggleMenu: "मेनू टॉगल करें",
        lightMode: "लाइट मोड पर स्विच करें",
        darkMode: "डार्क मोड पर स्विच करें",
      },
      heroTitle: "आपके जीवन की यात्रा के लिए ब्रह्मांडीय ज्ञान",
      heroSubtitle:
        "पेशेवर ज्योतिषीय मार्गदर्शन जो आपको स्पष्टता और आत्मविश्वास के साथ जीवन की चुनौतियों और अवसरों को नेविगेट करने में मदद करता है।",
    },
  },
  mr: {
    translation: {
      brandName: "वैश्विक अंतर्दृष्टी",
      aboutAstrologer: "आमच्या ज्योतिषाबद्दल",
      astrologerTitle: "अनुभव असलेले ज्योतीषाचार्य",
      astrologerPara1:
        "वैदिक ज्योतिषशास्त्राच्या एक दशकाहून अधिक काळातील समर्पित सरावामुळे, आमचे ज्योतीषाचार्य जीवनातील गुंतागुंतीच्या समस्यांमध्ये हजारो लोकांचे मार्गदर्शन करत आले आहेत. ग्रहांची हालचाल आणि मानवी जीवनावरील त्यांचा प्रभाव या विषयातील त्यांच्या सखोल ज्ञानामुळे त्यांना जगभर मान्यता मिळाली आहे.",
      astrologerPara2:
        "पारंपरिक ज्ञान आणि आधुनिक दृष्टिकोन यांचे एकत्रीकरण करून, ते वैयक्तिक, व्यावसायिक आणि आध्यात्मिक अडचणींसाठी व्यावहारिक उपाय देतात. त्यांचा सहानुभूतीपूर्ण दृष्टिकोन आणि अचूक भाकीतांनी ग्राहकांना नातेसंबंध, करिअर, आरोग्य आणि आर्थिक बाबतीत निर्णय घेण्यास मदत केली आहे.",
      expertGuidance: "तज्ज्ञ मार्गदर्शन",
      ancientWisdom: "प्राचीन ज्ञान",
      globalClients: "जागतिक ग्राहक",
      servicesTitle: "आमच्या ज्योतिष सेवा",
      servicesSubtitle: "तुमच्या विशिष्ट गरजांनुसार व्यावसायिक ज्योतिषीय सेवा",
      servicesList: {
        birthChart: {
          title: "जन्म पत्रिका विश्लेषण",
          description:
            "तुमचा स्वभाव, ताकदी आणि जीवनाचा उद्देश समजण्यासाठी सविस्तर जन्म पत्रिका विश्लेषण.",
        },
        career: {
          title: "करिअर मार्गदर्शन",
          description:
            "ग्रहांच्या स्थितीनुसार तुमच्या करिअर मार्गावर स्पष्टता मिळवा.",
        },
        marriage: {
          title: "लग्न जुळवणी",
          description:
            "सुखी वैवाहिक जीवनासाठी पारंपरिक आणि आधुनिक कुंडली जुळवणी तंत्रे.",
        },
        relationship: {
          title: "नातेसंबंध सुसंगतता",
          description:
            "प्रेमसंबंध, विवाह आणि व्यवसाय भागीदारीसाठी सुसंगततेचे विश्लेषण.",
        },
        vastu: {
          title: "वास्तुशास्त्र",
          description:
            "प्राचीन वैदिक तत्त्वांनुसार तुमचे घर आणि कार्यस्थळ संतुलित करा.",
        },
        forecast: {
          title: "वार्षिक भविष्यवाणी",
          description:
            "आगामी वर्षाचे यशस्वीपणे मार्गदर्शन करण्यासाठी सविस्तर भविष्यवाणी.",
        },
      },

      footer: {
        brand: "वैश्विक अंतर्दृष्टी",
        tagline:
          "ज्योतिष मार्गदर्शनाचा अनुभव. तुमच्या जीवनातील अडचणींवर आकाशीय उपाय.",
        quickLinks: "त्वरित लिंक्स",
        links: [
          "मुख्यपृष्ठ",
          "विषयी",
          "सेवा",
          "गॅलरी",
          "प्रशंसापत्रे",
          "ठिकाण",
          "संपर्क",
        ],
        services: "आमच्या सेवा",
        serviceItems: [
          "जन्मकुंडली विश्लेषण",
          "संबंध सुसंगतता",
          "करिअर मार्गदर्शन",
          "वास्तुशास्त्र",
          "शैक्षणिक मार्गदर्शन",
          "वार्षिक भविष्य",
        ],
        contact: "संपर्क करा",
        address: "भोसे(क), ४१३३१५, ता. पंढरपूर, जि. सोलापूर",
        phone: "+९१ ९६०४५०३२६६",
        email: "contact@cosmicinsights.com",
        copyright: "वैश्विक अंतर्दृष्टी ज्योतिष केंद्र. सर्व हक्क राखीव.",
        designedBy:
          "तुमच्या आकाशीय मार्गदर्शनासाठी प्रेमाने डिझाइन व डेव्हलप केले",
      },

      visitSection: {
        heading: "आमच्या दुकानाला भेट द्या",
        subheading:
          "आमच्या सोयीच्या ठिकाणी असलेल्या ज्योतिष केंद्रात आम्हाला भेटा",
      },
      mapSection: {
        label: "इंटरअक्टिव नकाशा:",
        description:
          "आमच्या ज्योतिष केंद्राभोवतीचे क्षेत्र पाहण्यासाठी क्लिक करा",
      },
      contactCard: {
        title: "वैश्विक अंतर्दृष्टी ज्योतिष केंद्र",
        addressTitle: "पत्ता",
        addressLines: ["भोसे(के) ४१३३१५", "ता. पंढरपूर", "जि. सोलापूर"],
        hoursTitle: "कामाचे तास",
        hoursWeekday: "सोमवार - शनिवार: सकाळी 9:30 - संध्याकाळी 7:00",
        hoursSunday: "रविवार: सकाळी 10:00 - दुपारी 2:00",
        phoneTitle: "फोन",
        emailTitle: "ईमेल",
        notesTitle: "महत्वाच्या सूचना:",
        notes: [
          "उपलब्धता सुनिश्चित करण्यासाठी अपॉइंटमेंट घेणे शिफारसीय आहे",
          "इमारतीच्या मागे मोफत पार्किंग उपलब्ध",
          "व्हीलचेयरसाठी प्रवेशयोग्य",
        ],
      },

      resources: {
        title: "ज्योतिष संसाधने",
        subtitle:
          "तुमचे ज्योतिष ज्ञान वाढवण्यासाठी लेख, मार्गदर्शक आणि साधने एक्सप्लोर करा",
        article1: {
          title: "२०२५ ज्योतिष दिनदर्शिका",
          excerpt:
            "२०२५ मधील ग्रहांची स्थिती, वक्री काल व सणांची माहिती मिळवा.",
          date: "१० जून २०२५",
        },
        article2: {
          title: "वैदिक ज्योतिषाची मूलतत्त्वे",
          excerpt: "भाव, ग्रह व राशी यांची मूलभूत माहिती जाणून घ्या.",
          date: "२८ मे २०२५",
        },
        article3: {
          title: "आधुनिक ज्योतिषांसाठी करिअर टिप्स",
          excerpt: "तुमचा ब्रँड तयार करा आणि ऑनलाईन ज्योतिष सेवा सुरू करा.",
          date: "१८ एप्रिल २०२५",
        },
      },

      consultation2: {
        title: "सल्लामसलत माहिती",
        description:
          "आम्ही देश-विदेशातील ग्राहकांसाठी प्रत्यक्ष व ऑनलाइन सल्लामसलती देतो.",
        inPerson: {
          title: "प्रत्यक्ष सल्लामसलत",
          point1: "कालावधी: ६०-९० मिनिटे",
          point2: "कृपया आपल्या जन्मतारीख, वेळ आणि ठिकाण घेऊन या",
          point3: "रिकॉर्डिंगच्या विनंतीवर उपलब्ध",
        },
        online: {
          title: "ऑनलाइन सल्लामसलत",
          point1: "Zoom किंवा Google Meet द्वारे घेतले जाते",
          point2: "आपल्या वेळेनुसार वेळ निश्चित करता येतो",
          point3: "सेशननंतर रेकॉर्डिंग दिले जाते",
        },
        followUs: "आमचं अनुसरण करा",
        platforms: ["Facebook", "Instagram", "YouTube", "Twitter"],
      },

      contactForm: {
        title: "आम्हाला संदेश पाठवा",
        successTitle: "संदेश यशस्वीरीत्या पाठवला!",
        successMsg: "संपर्क केल्याबद्दल धन्यवाद. आम्ही लवकरच उत्तर देऊ.",
        fields: {
          name: "पूर्ण नाव",
          email: "ईमेल पत्ता",
          phone: "फोन नंबर",
          service: "आपल्याला कोणत्या सेवेची आवड आहे",
          message: "तुमचा संदेश",
          select: "सेवा निवडा",
        },
        services: {
          birthChart: "जन्मपत्रिका विश्लेषण",
          relationship: "नातेसंबंध सुसंगतता",
          career: "करिअर मार्गदर्शन",
          vastu: "वास्तु शास्त्र",
          education: "शैक्षणिक मार्गदर्शन",
          forecast: "वार्षिक भविष्यवाणी",
        },
        message: "तुमचा संदेश",
        button: "संदेश पाठवा",
        sending: "संदेश पाठवला जात आहे...",
      },
      consultation: {
        title: "परामर्श माहिती",
        intro:
          "आम्ही संपूर्ण जगभरातील ग्राहकांसाठी प्रत्यक्ष आणि ऑनलाइन दोन्ही प्रकारचे सल्ले देतो.",
        inPerson: {
          title: "प्रत्यक्ष परामर्श",
          duration: "कालावधी: 60-90 मिनिटे",
          bringDetails: "कृपया तुमचे जन्म तपशील (तारीख, वेळ, ठिकाण) आणा",
          recording: "रिकॉर्डिंग आवश्यकतेनुसार उपलब्ध",
        },
        online: {
          title: "ऑनलाइन परामर्श",
          platform: "Zoom किंवा Google Meet द्वारे सत्र घेतले जाते",
          schedule: "तुमच्या टाइमझोननुसार शेड्यूल करा",
          recording: "सत्रानंतर रेकॉर्डिंग दिले जाईल",
        },
        followUs: "आम्हाला फॉलो करा",
      },

      gallery: {
        title: "आमचे कार्य गॅलरी",
        description:
          "आमच्या ज्योतिष सल्लागार सेवा, कार्यशाळा आणि ग्राहकांशी संवाद यांचे काही क्षणचित्रे",
      },
      testimonials: {
        title: "ग्राहकांची मते",
        description: "आमच्या ज्योतिष सेवा बाबत ग्राहक काय म्हणतात ते वाचा",
      },

      testimonial1: {
        name: "राजेश कुमार",
        role: "व्यवसायिक",
        content:
          "मिळालेल्या करिअर मार्गदर्शनाने माझ्या व्यावसायिक जीवनात आमूलाग्र बदल घडवून आणला. योग्य वेळी योग्य निर्णय घेता आले आणि व्यवसायात यश मिळाले.",
      },
      testimonial2: {
        name: "प्रिया शर्मा",
        role: "सॉफ्टवेअर इंजिनीअर",
        content:
          "संबंध सुसंगतता विश्लेषणामुळे मला माझ्या जोडीदाराला चांगल्या प्रकारे समजून घेता आले. त्यामुळे आमचे नाते अधिक मजबूत झाले आहे.",
      },
      testimonial3: {
        name: "Vikram Singh",
        role: "College Student",
        content:
          "शैक्षणिक मार्गदर्शनामुळे मला योग्य अभ्यासक्रम निवडता आला. अनेक पर्यायांमध्ये गोंधळलेलो होतो पण ज्योतिषशास्त्रीय मार्गदर्शनामुळे स्पष्टता मिळाली.",
      },
      testimonial4: {
        name: "Harshita Deshmukh",
        role: "Homemaker",
        content:
          "नवीन घरासाठी केलेल्या वास्तु सल्ल्यामुळे आमच्या घरात सकारात्मकता आणि सौहार्द वाढले आहे.",
      },
      contactSection: {
        title: "संपर्क साधा",
        subtitle:
          "कोणतेही प्रश्न आहेत का किंवा सल्लामसलत बुक करायची आहे? आमच्याशी संपर्क करा!",
      },

      nav: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याविषयी",
        services: "सेवा",
        gallery: "गॅलरी",
        testimonials: "प्रतिक्रिया",
        resources: "संसाधने",
        location: "स्थान",
        contact: "संपर्क",
        horoscope: "भविष्य",
      },
      bookNow: "आता बुक करा",
      bookConsultation: "सल्ला बुक करा",
      aria: {
        toggleMenu: "मेनू टॉगल करा",
        lightMode: "लाइट मोडवर स्विच करा",
        darkMode: "डार्क मोडवर स्विच करा",
      },
      heroTitle: "तुमच्या जीवनाच्या प्रवासासाठी वैश्विक ज्ञान",
      heroSubtitle:
        "व्यावसायिक ज्योतिषीय मार्गदर्शन जे तुम्हाला स्पष्टता आणि आत्मविश्वासाने जीवनातील आव्हाने आणि संधींना सामोरे जाण्यास मदत करते.",
    },
  },
  horoscope: {
    title: "Personal Horoscope",
    subtitle: "Discover what the stars have in store for you",
    description:
      "Get personalized astrological predictions based on your zodiac sign",
    tipTitle: "Astrological Insight",
    tipContent:
      "For best results, provide your exact birth time and location in a full consultation",
    selectSign: "Select Your Zodiac Sign",
    generateButton: "Generate My Horoscope",
    generating: "Consulting the stars...",
    resultTitle: "{{sign}} Horoscope",
    dailyTab: "Daily Prediction",
    weeklyTab: "Weekly Forecast",
    dailyFor: "Daily forecast",
    weeklyFor: "Weekly forecast",
    readyTitle: "Your Horoscope Awaits",
    readyDescription:
      "Select your zodiac sign and generate your personalized horoscope",
    luckyNumber: "Lucky Number",
    compatibility: "Best Match",

    // Zodiac signs
    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",

    // Zodiac dates
    ariesDates: "Mar 21 - Apr 19",
    taurusDates: "Apr 20 - May 20",
    geminiDates: "May 21 - Jun 20",
    cancerDates: "Jun 21 - Jul 22",
    leoDates: "Jul 23 - Aug 22",
    virgoDates: "Aug 23 - Sep 22",
    libraDates: "Sep 23 - Oct 22",
    scorpioDates: "Oct 23 - Nov 21",
    sagittariusDates: "Nov 22 - Dec 21",
    capricornDates: "Dec 22 - Jan 19",
    aquariusDates: "Jan 20 - Feb 18",
    piscesDates: "Feb 19 - Mar 20",

    // Daily predictions
    dailyPrediction1:
      "Today brings opportunities for leadership. Your energy is high, and others will look to you for guidance. Be mindful of impulsive decisions.",
    dailyPrediction2:
      "Financial matters require your attention today. Stay grounded and practical. Your patience will pay off in unexpected ways.",
    dailyPrediction3:
      "Communication is key today. You'll find success through networking and sharing ideas. Be open to new perspectives.",
    dailyPrediction4:
      "Focus on home and family matters. Your intuition is strong today—trust your gut feelings about personal relationships.",
    dailyPrediction5:
      "Your creativity shines today. Express yourself through art or performance. Others will appreciate your unique perspective.",
    dailyPrediction6:
      "Organization brings peace of mind today. Tackle practical matters with your signature attention to detail.",
    dailyPrediction7:
      "Relationships take center stage. Seek balance in your interactions. A compromise may lead to a better outcome for everyone.",
    dailyPrediction8:
      "Deep insights come to you today. Trust your ability to see beneath the surface. Transformation is possible.",
    dailyPrediction9:
      "Adventure calls! Explore new ideas or places. Your optimism will attract positive opportunities.",
    dailyPrediction10:
      "Career matters demand your attention. Your disciplined approach will impress those in positions of authority.",
    dailyPrediction11:
      "Innovative ideas flow today. Share your unique vision with others. Collaboration could lead to exciting breakthroughs.",
    dailyPrediction12:
      "Your compassion is heightened today. Helping others will bring you fulfillment. Pay attention to your dreams for guidance.",

    // Weekly predictions
    weeklyPrediction1:
      "This week, embrace your pioneering spirit. New beginnings are favored, but avoid rushing into commitments without proper consideration.",
    weeklyPrediction2:
      "Financial stability is your focus this week. Practical decisions now will lead to long-term benefits. Avoid impulsive purchases.",
    weeklyPrediction3:
      "Your social calendar fills this week. Meaningful conversations will lead to valuable connections. Express your ideas clearly.",
    weeklyPrediction4:
      "Emotional matters take priority this week. Nurture your closest relationships and create a peaceful home environment.",
    weeklyPrediction5:
      "Your charisma is at a peak this week. Creative projects shine. Leadership opportunities may come your way—embrace them confidently.",
    weeklyPrediction6:
      "Attention to detail serves you well this week. Organize your space and schedule for maximum efficiency. Health routines are favored.",
    weeklyPrediction7:
      "Partnerships flourish this week. Seek harmony in all relationships. Compromise brings better results than stubbornness.",
    weeklyPrediction8:
      "Transformative energy surrounds you this week. Release what no longer serves you. Deep conversations bring clarity.",
    weeklyPrediction9:
      "Adventure calls this week! Expand your horizons through learning or travel. Philosophical discussions inspire you.",
    weeklyPrediction10:
      "Career matters advance this week. Your disciplined approach earns recognition. Long-term planning brings security.",
    weeklyPrediction11:
      "Innovative thinking leads to breakthroughs this week. Collaborate with like-minded individuals. Your unique perspective is valuable.",
    weeklyPrediction12:
      "Your intuition is strong this week. Trust your inner guidance. Creative and spiritual pursuits bring fulfillment.",
  },
  modal: {
    title: "Book Consultation",
    step1: "Select Service",
    step2: "Details & Booking",
    selectServiceTitle: "Choose Your Consultation",
    selectServiceSubtitle: "Select the service that best fits your needs",
    backToServices: "Back to services",
    selectDateTimeTitle: "Select Date & Time",
    selectDateTimeSubtitle: "Choose a convenient slot for your consultation",
    selectDate: "Select Date",
    selectTime: "Select Time",
    today: "Today",
    yourInfoTitle: "Your Information",
    successTitle: "Booking Confirmed!",
    successMessage:
      "Your consultation has been successfully booked. We've sent a confirmation to your email.",
    nextStepsTitle: "Next Steps",
    nextSteps1: "Check your email for confirmation details",
    nextSteps2: "Prepare your birth details (date, time, place of birth)",
    nextSteps3: "We'll send a reminder before your consultation",
    booking: "Processing Booking...",
    confirmBooking: "Confirm Booking",
  },
  form: {
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    birthDetails: "Birth Details",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+91 98765 43210",
    birthDetailsPlaceholder: "DD/MM/YYYY, Time, Place",
  },
  services: {
    birthChart: {
      title: "Birth Chart Analysis",
      description: "Detailed analysis of your natal chart",
      duration: "60 min",
      price: "₹1,500",
    },
    relationship: {
      title: "Relationship Compatibility",
      description: "Compatibility analysis for relationships",
      duration: "75 min",
      price: "₹2,000",
    },
    career: {
      title: "Career Guidance",
      description: "Career path and professional growth insights",
      duration: "60 min",
      price: "₹1,800",
    },
    yearly: {
      title: "Yearly Forecast",
      description: "Comprehensive annual predictions",
      duration: "90 min",
      price: "₹2,500",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
