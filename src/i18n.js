// Update src/i18n.js with full translations
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      brandName: "Cosmic Insights",
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        gallery: "Gallery",
        testimonials: "Testimonials",
        resources: "Resources",
        location: "Location",
        contact: "Contact",
        horoscope: "Horoscope"
      },
      welcome: "Welcome to Cosmic Insights",
      bookNow: "Book Now",
      bookConsultation: "Book Consultation",
      aria: {
        toggleMenu: "Toggle menu",
        lightMode: "Switch to light mode",
        darkMode: "Switch to dark mode"
      },
      heroTitle: "Cosmic Wisdom for Your Life's Journey",
      heroSubtitle: "Professional astrological guidance to help you navigate life's challenges and opportunities with clarity and confidence.",
      // Add all other translations needed for your components
    }
  },
  hi: {
    translation: {
      brandName: "ब्रह्मांडीय अंतर्दृष्टि",
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएँ",
        gallery: "गैलरी",
        testimonials: "प्रशंसापत्र",
        resources: "संसाधन",
        location: "स्थान",
        contact: "संपर्क करें",
        horoscope: "राशिफल"
      },
      welcome: "ब्रह्मांडीय अंतर्दृष्टि में आपका स्वागत है",
      bookNow: "अभी बुक करें",
      bookConsultation: "परामर्श बुक करें",
      aria: {
        toggleMenu: "मेनू टॉगल करें",
        lightMode: "लाइट मोड पर स्विच करें",
        darkMode: "डार्क मोड पर स्विच करें"
      },
      heroTitle: "आपके जीवन की यात्रा के लिए ब्रह्मांडीय ज्ञान",
      heroSubtitle: "पेशेवर ज्योतिषीय मार्गदर्शन जो आपको स्पष्टता और आत्मविश्वास के साथ जीवन की चुनौतियों और अवसरों को नेविगेट करने में मदद करता है।",
      // Add all other translations needed for your components
    }
  },
  kn: {
    translation: {
      brandName: "ಕಾಸ್ಮಿಕ್ ಇನ್ಸೈಟ್ಸ್",
      nav: {
        home: "ಮುಖಪುಟ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        services: "ಸೇವೆಗಳು",
        gallery: "ಗ್ಯಾಲರಿ",
        testimonials: "ಪ್ರಶಂಸೆಗಳು",
        resources: "ಸಂಪನ್ಮೂಲಗಳು",
        location: "ಸ್ಥಳ",
        contact: "ಸಂಪರ್ಕಿಸಿ",
        horoscope: "ರಾಶಿಫಲ"
      },
      welcome: "ಕಾಸ್ಮಿಕ್ ಇನ್ಸೈಟ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ",
      bookNow: "ಈಗ ಬುಕ್ ಮಾಡಿ",
      bookConsultation: "ಸಲಹೆ ಪುಸ್ತಕ",
      aria: {
        toggleMenu: "ಮೆನುವನ್ನು ಟಾಗಲ್ ಮಾಡಿ",
        lightMode: "ಲೈಟ್ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ",
        darkMode: "ಡಾರ್ಕ್ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ"
      },
      heroTitle: "ನಿಮ್ಮ ಜೀವನದ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಬ್ರಹ್ಮಾಂಡದ ಜ್ಞಾನ",
      heroSubtitle: "ವೃತ್ತಿಪರ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನವು ಸ್ಪಷ್ಟತೆ ಮತ್ತು ವಿಶ್ವಾಸದೊಂದಿಗೆ ಜೀವನದ ಸವಾಲುಗಳು ಮತ್ತು ಅವಕಾಶಗಳನ್ನು ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      // Add all other translations needed for your components
    }
  },
    mr: {
    translation: {
      brandName: "वैश्विक अंतर्दृष्टी",
      nav: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याविषयी",
        services: "सेवा",
        gallery: "गॅलरी",
        testimonials: "प्रतिक्रिया",
        resources: "संसाधने",
        location: "स्थान",
        contact: "संपर्क",
        horoscope: "भविष्य"
      },
      bookNow: "आता बुक करा",
      bookConsultation: "सल्ला बुक करा",
      aria: {
        toggleMenu: "मेनू टॉगल करा",
        lightMode: "लाइट मोडवर स्विच करा",
        darkMode: "डार्क मोडवर स्विच करा"
      },
      heroTitle: "तुमच्या जीवनाच्या प्रवासासाठी वैश्विक ज्ञान",
      heroSubtitle: "व्यावसायिक ज्योतिषीय मार्गदर्शन जे तुम्हाला स्पष्टता आणि आत्मविश्वासाने जीवनातील आव्हाने आणि संधींना सामोरे जाण्यास मदत करते.",
      // Add translations for all other sections similarly...
    }
  },
  ta: {
    translation: {
      brandName: "காஸ்மிக் இன்சைட்ஸ்",
      nav: {
        home: "முகப்பு",
        about: "எங்களைப் பற்றி",
        services: "சேவைகள்",
        gallery: "கேலரி",
        testimonials: "வாடிக்கையாளர் கருத்துகள்",
        resources: "வளங்கள்",
        location: "இடம்",
        contact: "தொடர்பு கொள்ள",
        horoscope: "ராசிபலன்"
      },
      welcome: "காஸ்மிக் இன்சைட்ஸ்‌க்கு வரவேற்கிறோம்",
      bookNow: "இப்போதே பதிவு",
      bookConsultation: "ஆலோசனை புத்தகம்",
      aria: {
        toggleMenu: "மெனுவை மாற்று",
        lightMode: "வெளிச்ச முறைக்கு மாற்று",
        darkMode: "இருண்ட முறைக்கு மாற்று"
      },
      heroTitle: "உங்கள் வாழ்க்கை பயணத்திற்கான அண்ட ஞானம்",
      heroSubtitle: "தெளிவு மற்றும் நம்பிக்கையுடன் வாழ்க்கையின் சவால்கள் மற்றும் வாய்ப்புகளை நாங்கி செய்ய உதவும் தொழில்முறை ஜோதிட வழிகாட்டுதல்.",
      // Add all other translations needed for your components
    }
  },
  te: {
    translation: {
      brandName: "కాస్మిక్ ఇన్సైట్స్",
      nav: {
        home: "హోమ్",
        about: "మా గురించి",
        services: "సేవలు",
        gallery: "గ్యాలరీ",
        testimonials: "ప్రశంసలు",
        resources: "వనరులు",
        location: "స్థానం",
        contact: "సంప్రదించండి",
        horoscope: "రాశిభాగ్యం"
      },
      welcome: "కాస్మిక్ ఇన్సైట్స్‌కు స్వాగతం",
      bookNow: "ఇప్పుడే బుక్ చేయండి",
      bookConsultation: "సలహా పుస్తకం",
      aria: {
        toggleMenu: "మెనూ మార్చండి",
        lightMode: "లైట్ మోడ్‌కు మారండి",
        darkMode: "డార్క్ మోడ్‌కు మారండి"
      },
      heroTitle: "మీ జీవిత యాత్ర కోసం విశ్వ జ్ఞానం",
      heroSubtitle: "ప్రొఫెషనల్ జ్యోతిష్య మార్గదర్శకత్వం స్పష్టత మరియు విశ్వాసంతో జీవిత సవాళ్లు మరియు అవకాశాలను నావిగేట్ చేయడానికి మీకు సహాయపడుతుంది.",
      // Add all other translations needed for your components
    }
  }, 
  horoscope: {
  title: "Personal Horoscope",
  subtitle: "Discover what the stars have in store for you",
  description: "Get personalized astrological predictions based on your zodiac sign",
  tipTitle: "Astrological Insight",
  tipContent: "For best results, provide your exact birth time and location in a full consultation",
  selectSign: "Select Your Zodiac Sign",
  generateButton: "Generate My Horoscope",
  generating: "Consulting the stars...",
  resultTitle: "{{sign}} Horoscope",
  dailyTab: "Daily Prediction",
  weeklyTab: "Weekly Forecast",
  dailyFor: "Daily forecast",
  weeklyFor: "Weekly forecast",
  readyTitle: "Your Horoscope Awaits",
  readyDescription: "Select your zodiac sign and generate your personalized horoscope",
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
  dailyPrediction1: "Today brings opportunities for leadership. Your energy is high, and others will look to you for guidance. Be mindful of impulsive decisions.",
  dailyPrediction2: "Financial matters require your attention today. Stay grounded and practical. Your patience will pay off in unexpected ways.",
  dailyPrediction3: "Communication is key today. You'll find success through networking and sharing ideas. Be open to new perspectives.",
  dailyPrediction4: "Focus on home and family matters. Your intuition is strong today—trust your gut feelings about personal relationships.",
  dailyPrediction5: "Your creativity shines today. Express yourself through art or performance. Others will appreciate your unique perspective.",
  dailyPrediction6: "Organization brings peace of mind today. Tackle practical matters with your signature attention to detail.",
  dailyPrediction7: "Relationships take center stage. Seek balance in your interactions. A compromise may lead to a better outcome for everyone.",
  dailyPrediction8: "Deep insights come to you today. Trust your ability to see beneath the surface. Transformation is possible.",
  dailyPrediction9: "Adventure calls! Explore new ideas or places. Your optimism will attract positive opportunities.",
  dailyPrediction10: "Career matters demand your attention. Your disciplined approach will impress those in positions of authority.",
  dailyPrediction11: "Innovative ideas flow today. Share your unique vision with others. Collaboration could lead to exciting breakthroughs.",
  dailyPrediction12: "Your compassion is heightened today. Helping others will bring you fulfillment. Pay attention to your dreams for guidance.",
  
  // Weekly predictions
  weeklyPrediction1: "This week, embrace your pioneering spirit. New beginnings are favored, but avoid rushing into commitments without proper consideration.",
  weeklyPrediction2: "Financial stability is your focus this week. Practical decisions now will lead to long-term benefits. Avoid impulsive purchases.",
  weeklyPrediction3: "Your social calendar fills this week. Meaningful conversations will lead to valuable connections. Express your ideas clearly.",
  weeklyPrediction4: "Emotional matters take priority this week. Nurture your closest relationships and create a peaceful home environment.",
  weeklyPrediction5: "Your charisma is at a peak this week. Creative projects shine. Leadership opportunities may come your way—embrace them confidently.",
  weeklyPrediction6: "Attention to detail serves you well this week. Organize your space and schedule for maximum efficiency. Health routines are favored.",
  weeklyPrediction7: "Partnerships flourish this week. Seek harmony in all relationships. Compromise brings better results than stubbornness.",
  weeklyPrediction8: "Transformative energy surrounds you this week. Release what no longer serves you. Deep conversations bring clarity.",
  weeklyPrediction9: "Adventure calls this week! Expand your horizons through learning or travel. Philosophical discussions inspire you.",
  weeklyPrediction10: "Career matters advance this week. Your disciplined approach earns recognition. Long-term planning brings security.",
  weeklyPrediction11: "Innovative thinking leads to breakthroughs this week. Collaborate with like-minded individuals. Your unique perspective is valuable.",
  weeklyPrediction12: "Your intuition is strong this week. Trust your inner guidance. Creative and spiritual pursuits bring fulfillment."
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
  successMessage: "Your consultation has been successfully booked. We've sent a confirmation to your email.",
  nextStepsTitle: "Next Steps",
  nextSteps1: "Check your email for confirmation details",
  nextSteps2: "Prepare your birth details (date, time, place of birth)",
  nextSteps3: "We'll send a reminder before your consultation",
  booking: "Processing Booking...",
  confirmBooking: "Confirm Booking"
},
form: {
  fullName: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  birthDetails: "Birth Details",
  namePlaceholder: "Your full name",
  emailPlaceholder: "your@email.com",
  phonePlaceholder: "+91 98765 43210",
  birthDetailsPlaceholder: "DD/MM/YYYY, Time, Place"
},
services: {
  birthChart: {
    title: "Birth Chart Analysis",
    description: "Detailed analysis of your natal chart",
    duration: "60 min",
    price: "₹1,500"
  },
  relationship: {
    title: "Relationship Compatibility",
    description: "Compatibility analysis for relationships",
    duration: "75 min",
    price: "₹2,000"
  },
  career: {
    title: "Career Guidance",
    description: "Career path and professional growth insights",
    duration: "60 min",
    price: "₹1,800"
  },
  yearly: {
    title: "Yearly Forecast",
    description: "Comprehensive annual predictions",
    duration: "90 min",
    price: "₹2,500"
  }
}
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;