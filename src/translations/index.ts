export type Language = "tr" | "en";

export const translations = {
  tr: {
    langName: "Türkçe",
    langCode: "TR",
    hero: {
      tagline: "OTOMATİK PRESTİJ",
      brandFirst: "REZIDANS",
      brandSecond: "AI",
      subtitle: "YAPAY ZEKANIN MİMARİ MÜKEMMELLİKLE BULUŞTUĞU NOKTA",
      cta: "TEKLİF AL",
    },
    quoteDialog: {
      badge: "REZIDANS AI ÇÖZÜMLERİ",
      titleFirst: "TEKLİF",
      titleSecond: "AL",
      description: "İşletmenize özel yapay zeka altyapısı ve fiyatlandırma teklifimiz için formu doldurun.",
      companyLabel: "Şirket İsmi",
      companyPlaceholder: "Örn: Akasya Gayrimenkul Yatırım A.Ş.",
      emailLabel: "E-posta",
      emailPlaceholder: "adiniz@sirketiniz.com",
      problemLabel: "Yaşadığınız Problem (Kısaca)",
      problemPlaceholder: "Örn: Portföy değerleme süreçlerinde zaman kaybı ve veri tutarsızlığı yaşıyoruz...",
      submitButton: "TEKLİF TALEBİ GÖNDER",
      submitting: "GÖNDERİLİYOR...",
      successTitle: "TALEBİNİZ ALINDI",
      successDescription: "Bilgileriniz uzman ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.",
      closeButton: "Kapat",
      errorFillAll: "Lütfen tüm alanları doldurunuz.",
      successToast: "Teklif talebiniz başarıyla alındı!",
    },
    stats: [
      { value: "12M+", label: "Veri Analizi" },
      { value: "99.7%", label: "Tahmin Doğruluğu" },
      { value: "340+", label: "Aktif Entegrasyon" },
      { value: "0", label: "Veri Kaybı" },
    ],
    features: {
      category: "SİSTEM YAPISI",
      heading: "TASARIMIN ZEKASI",
      items: [
        {
          number: "01",
          title: "AKILLI SİSTEM",
          description:
            "Portföy ve piyasa verilerini 7/24 anlık olarak analiz eden, operasyonel süreçleri optimize eden yapay zeka çözümleri.",
        },
        {
          number: "02",
          title: "OTONOM YÖNETİM",
          description:
            "İlan süreçlerinden gelen verileri sıfır insan hatasıyla sınıflandıran, müşteri yolculuğunu uçtan uca yöneten akıllı takip mekanizması.",
        },
        {
          number: "03",
          title: "YAŞAYAN ZEKA",
          description:
            "Piyasa hareketlerini ve ilan performanslarını izleyerek, her etkileşimden öğrenen ve en doğru satış stratejisini geliştiren öğrenen algoritmalar.",
        },
      ],
    },
    statement: {
      line1: "GAYRİMENKULÜN YAPAY ZEKASI.",
      line2: "DİJİTAL YÖNETİMİN GELECEĞİ.",
    },
    faq: {
      category: "S.S.S.",
      heading: "Sıkça Sorulan Sorular",
      items: [
        {
          question: "Rezidans AI sistemi nasıl çalışır?",
          answer:
            "Rezidans AI, ilan süreçlerinizden gelen tüm veri akışını (portföy verileri, piyasa hareketleri, analizler) anlık olarak işler. Yapay zeka algoritmalarımız bu verileri değerlendirerek portföy takibini yapar ve en doğru satış ve değerleme stratejilerini sunar.",
        },
        {
          question: "Veri güvenliği nasıl sağlanıyor?",
          answer:
            "Tüm verileriniz endüstri standardı şifreleme yöntemleriyle korunmaktadır. Veri Kaybı (0) politikamız gereği, sistem yedeklemeleri anlık olarak yapılmakta ve tüm bilgileriniz sadece sizin erişiminize açık güvenli sunucularda saklanmaktadır.",
        },
        {
          question: "Mevcut CRM sistemlerimle entegre olabilir mi?",
          answer:
            "Evet, Rezidans AI açık API mimarisi sayesinde çoğu modern gayrimenkul CRM ve ilan platformuyla sorunsuz bir şekilde entegre olabilir. 'Aktif Entegrasyon' özelliğimizle mevcut iş akışınızı bozmadan sistemimizi kullanmaya başlayabilirsiniz.",
        },
        {
          question: "Sistem 7/24 aktif mi çalışıyor?",
          answer:
            "Kesinlikle. Bulut tabanlı yapay zeka altyapımız, gece veya hafta sonu fark etmeksizin kesintisiz ve yüksek performansla çalışarak verilerinizi sürekli güncel tutar.",
        },
      ],
    },
    footer: {
      brandFirst: "REZIDANS",
      brandSecond: " AI",
      copyright: "© 2026 TÜM HAKLARI SAKLIDIR",
    },
  },
  en: {
    langName: "English",
    langCode: "EN",
    hero: {
      tagline: "AUTOMATED PRESTIGE",
      brandFirst: "REZIDANS",
      brandSecond: "AI",
      subtitle: "WHERE ARTIFICIAL INTELLIGENCE MEETS ARCHITECTURAL EXCELLENCE",
      cta: "GET A QUOTE",
    },
    quoteDialog: {
      badge: "REZIDANS AI SOLUTIONS",
      titleFirst: "GET A",
      titleSecond: "QUOTE",
      description: "Fill out the form for tailored AI infrastructure and custom pricing proposals.",
      companyLabel: "Company Name",
      companyPlaceholder: "e.g. Skyline Real Estate Investment Corp.",
      emailLabel: "Email Address",
      emailPlaceholder: "name@company.com",
      problemLabel: "Your Challenge (Briefly)",
      problemPlaceholder: "e.g. Facing time loss and valuation discrepancies across our portfolio...",
      submitButton: "SUBMIT QUOTE REQUEST",
      submitting: "SUBMITTING...",
      successTitle: "REQUEST RECEIVED",
      successDescription: "Your details have been forwarded to our specialists. We will contact you shortly.",
      closeButton: "Close",
      errorFillAll: "Please fill in all required fields.",
      successToast: "Your quote request has been received successfully!",
    },
    stats: [
      { value: "12M+", label: "Data Analysis" },
      { value: "99.7%", label: "Prediction Accuracy" },
      { value: "340+", label: "Active Integrations" },
      { value: "0", label: "Data Loss" },
    ],
    features: {
      category: "SYSTEM ARCHITECTURE",
      heading: "INTELLIGENCE OF DESIGN",
      items: [
        {
          number: "01",
          title: "INTELLIGENT SYSTEM",
          description:
            "AI-driven solutions that analyze portfolio data and real-time market dynamics 24/7 to optimize operational efficiency.",
        },
        {
          number: "02",
          title: "AUTONOMOUS MANAGEMENT",
          description:
            "Smart tracking mechanism that classifies listing data with zero human error, managing customer journeys end-to-end.",
        },
        {
          number: "03",
          title: "LIVING INTELLIGENCE",
          description:
            "Adaptive algorithms that learn from market fluctuations and listing performance, formulating the most accurate sales strategy.",
        },
      ],
    },
    statement: {
      line1: "THE ARTIFICIAL INTELLIGENCE OF REAL ESTATE.",
      line2: "THE FUTURE OF DIGITAL MANAGEMENT.",
    },
    faq: {
      category: "FAQ",
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "How does the Rezidans AI system work?",
          answer:
            "Rezidans AI processes your entire data stream (listings, portfolio metrics, market trends) in real time. Our AI algorithms analyze this data to automate tracking and formulate optimal property valuation strategies.",
        },
        {
          question: "How is data security ensured?",
          answer:
            "All your data is protected using industry-standard encryption protocols. Under our Zero Data Loss policy, real-time automated backups are preserved in highly secure, dedicated cloud servers.",
        },
        {
          question: "Can it integrate with existing CRM systems?",
          answer:
            "Yes. Thanks to its open API architecture, Rezidans AI connects seamlessly with leading real estate CRMs and listing portals without disrupting your current operations.",
        },
        {
          question: "Does the system operate 24/7?",
          answer:
            "Absolutely. Our cloud-based AI infrastructure runs continuously around the clock, keeping your data synchronized and operational with no downtime.",
        },
      ],
    },
    footer: {
      brandFirst: "REZIDANS",
      brandSecond: " AI",
      copyright: "© 2026 ALL RIGHTS RESERVED",
    },
  },
};
