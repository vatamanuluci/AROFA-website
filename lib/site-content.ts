export type SitePage = {
  slug: string[]
  title: string
  seoTitle?: string
  description: string
  eyebrow: string
  intro: string
  highlights: string[]
  ctaLabel?: string
  ctaHref?: string
  relatedLinks?: { label: string; href: string }[]
}

const basePages: SitePage[] = [
  {
    slug: ["ferestre"],
    title: "Ferestre AROFA",
    seoTitle: "Ferestre AROFA din aluminiu, PVC, lemn și fier",
    description: "Soluții complete AROFA pentru ferestre premium, adaptate proiectelor rezidențiale și comerciale.",
    eyebrow: "Ferestre",
    intro: "Portofoliul AROFA de ferestre acoperă cerințe de eficiență energetică, siguranță și design contemporan pentru locuințe, clădiri comerciale și proiecte speciale.",
    highlights: [
      "Configurații pentru aluminiu, PVC, lemn și fier",
      "Consultanță tehnică pentru alegerea soluției potrivite",
      "Execuție și montaj coordonate unitar"
    ],
    ctaLabel: "Solicită ofertă pentru ferestre",
    ctaHref: "/solicita-oferta",
    relatedLinks: [
      { label: "Tâmplărie din aluminiu", href: "/ferestre/aluminiu" },
      { label: "Tâmplărie din PVC", href: "/ferestre/pvc" },
      { label: "Ferestre și uși din lemn", href: "/ferestre/lemn" },
      { label: "Ferestre și uși din fier", href: "/ferestre/fier" }
    ]
  },
  {
    slug: ["ferestre", "aluminiu"],
    title: "Tâmplărie din aluminiu",
    seoTitle: "Tâmplărie din aluminiu pentru ferestre și uși | AROFA",
    description: "Soluții complete de tâmplărie din aluminiu pentru ferestre, uși de intrare și deschideri vitrate, potrivite proiectelor moderne și comerciale.",
    eyebrow: "Aluminiu",
    intro: "Soluțiile AROFA din aluminiu sunt recomandate pentru locuințe contemporane, showroom-uri și spații comerciale unde contează stabilitatea, designul suplu și lumina naturală.",
    highlights: [
      "Profile stabile pentru ferestre, uși de intrare și deschideri vitrate generoase",
      "Finisaje premium, culori variate și integrare elegantă în fațadă",
      "Rezistență ridicată la utilizare intensă, vânt și variații de temperatură",
      "Sisteme potrivite pentru proiecte rezidențiale premium și comerciale"
    ],
    ctaLabel: "Vezi și ușile din aluminiu",
    ctaHref: "/usi/aluminiu",
    relatedLinks: [
      { label: "Arrogance", href: "/ferestre/aluminiu/arrogance" },
      { label: "6Stars", href: "/ferestre/aluminiu/6stars" },
      { label: "5Stars", href: "/ferestre/aluminiu/5stars" },
      { label: "AROFA View", href: "/arofa-view" }
    ]
  },
  {
    slug: ["ferestre", "pvc"],
    title: "Tâmplărie din PVC",
    seoTitle: "Tâmplărie din PVC pentru ferestre și uși | AROFA",
    description: "Soluții complete de tâmplărie din PVC pentru ferestre, uși de intrare și uși culisante, eficiente energetic și potrivite pentru locuințe noi sau renovări.",
    eyebrow: "PVC",
    intro: "Portofoliul AROFA din PVC este gândit pentru confort zilnic, izolație bună și un buget controlat, fără să sacrifici aspectul fațadei sau opțiunile de configurare.",
    highlights: [
      "Izolație termică și fonică foarte bună pentru apartamente, case și renovări",
      "Configurații pentru ferestre, uși de intrare și uși culisante PVC",
      "Culori, folieri și opțiuni de placare cu aluminiu pentru un aspect mai rafinat",
      "Întreținere simplă și raport foarte bun între performanță și cost"
    ],
    ctaLabel: "Descoperă ușile PVC",
    ctaHref: "/usi/pvc",
    relatedLinks: [
      { label: "Epiq 6Stars", href: "/ferestre/pvc/6stars" },
      { label: "7Stars", href: "/ferestre/pvc/7stars" },
      { label: "4Stars", href: "/ferestre/pvc/4stars" }
    ]
  },
  {
    slug: ["ferestre", "lemn"],
    title: "Ferestre și uși din lemn",
    description: "Ferestre și uși din lemn AROFA pentru proiecte premium, cu finisaj cald și performanță contemporană.",
    eyebrow: "Lemn",
    intro: "Soluțiile din lemn sunt recomandate proiectelor care caută naturalețe, rafinament și o integrare elegantă în arhitectura casei.",
    highlights: [
      "Aspect natural și estetică premium",
      "Configurații adaptate caselor clasice și contemporane",
      "Tratament pentru rezistență în timp și stabilitate"
    ],
    ctaLabel: "Solicită consultanță pentru lemn",
    ctaHref: "/contact"
  },
  {
    slug: ["ferestre", "fier"],
    title: "Ferestre și uși din fier",
    description: "Soluții AROFA din fier pentru proiecte speciale, cu accent pe robustețe și expresie arhitecturală distinctă.",
    eyebrow: "Fier",
    intro: "Ferestrele și ușile din fier sunt potrivite proiectelor cu caracter industrial, boutique sau restaurări cu personalitate.",
    highlights: [
      "Aspect arhitectural puternic",
      "Rezistență excelentă pentru deschideri speciale",
      "Personalizare pentru proiecte premium și HoReCa"
    ],
    ctaLabel: "Discută proiectul tău",
    ctaHref: "/contact"
  },
  {
    slug: ["usi-culisante"],
    title: "Uși culisante AROFA",
    description: "Uși culisante AROFA pentru lumină naturală, deschideri mari și utilizare fluidă.",
    eyebrow: "Uși culisante",
    intro: "Sistemele culisante AROFA sunt proiectate pentru spații luminoase și o tranziție elegantă între interior și exterior.",
    highlights: [
      "Soluții din aluminiu și PVC",
      "Glisare lină și profile optimizate",
      "Configurații pentru locuințe și proiecte comerciale"
    ],
    ctaLabel: "Vezi soluțiile culisante din aluminiu",
    ctaHref: "/usi-culisante/aluminiu",
    relatedLinks: [
      { label: "Culisante aluminiu", href: "/usi-culisante/aluminiu" },
      { label: "Culisante PVC", href: "/usi-culisante/pvc" }
    ]
  },
  {
    slug: ["usi-culisante", "aluminiu"],
    title: "Uși culisante din aluminiu",
    description: "Soluții culisante din aluminiu cu deschideri ample, finisaje premium și performanță termică.",
    eyebrow: "Culisante aluminiu",
    intro: "Gama AROFA de culisante din aluminiu răspunde cerințelor de luminozitate, eleganță și stabilitate pentru vitraje mari.",
    highlights: [
      "Deschideri panoramice pentru terase și verande",
      "Soluții premium pentru proiecte contemporane",
      "Echilibru între confort și expresie arhitecturală"
    ],
    relatedLinks: [
      { label: "Panorama 7Stars", href: "/usi-culisante/aluminiu/panorama-7stars" },
      { label: "Paysage 6Stars", href: "/usi-culisante/aluminiu/paysage-6stars" },
      { label: "Paysage 5Stars", href: "/usi-culisante/aluminiu/paysage-5stars" },
      { label: "Paysage BiFold", href: "/usi-culisante/aluminiu/paysage-bifold" }
    ],
    ctaLabel: "Solicită ofertă",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["usi-culisante", "pvc"],
    title: "Uși culisante din PVC",
    description: "Uși culisante din PVC AROFA pentru eficiență energetică, confort și cost optimizat.",
    eyebrow: "Culisante PVC",
    intro: "Soluțiile culisante din PVC oferă un raport foarte bun între performanță termică, fiabilitate și accesibilitate.",
    highlights: [
      "Izolație foarte bună pentru locuințe",
      "Soluții practice pentru spații rezidențiale",
      "Configurații personalizabile și ușor de integrat"
    ],
    relatedLinks: [
      { label: "Paysage 7Stars", href: "/usi-culisante/pvc/paysage-7stars" },
      { label: "Paysage 6Stars", href: "/usi-culisante/pvc/paysage-6stars" },
      { label: "Paysage 4Stars", href: "/usi-culisante/pvc/paysage-4stars" }
    ],
    ctaLabel: "Solicită ofertă",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["usi"],
    title: "U\u0219i de intrare AROFA",
    seoTitle: "Uși de intrare PVC și aluminiu | AROFA",
    description: "Uși de intrare din PVC și aluminiu pentru siguranță, izolație, design coerent și utilizare confortabilă.",
    eyebrow: "Uși de intrare",
    intro: "Ușile de intrare AROFA completează fațada locuinței și pot fi configurate în funcție de material, stil, nivel de siguranță și performanță termică.",
    highlights: [
      "Game dedicate pentru uși din aluminiu și uși din PVC",
      "Modele moderne, clasice și premium, cu panouri și finisaje personalizabile",
      "Soluții pentru siguranță, etanșare și confort la utilizare zilnică",
      "Integrare cromatică alături de ferestre, rulouri și alte elemente de fațadă"
    ],
    relatedLinks: [
      { label: "Uși aluminiu", href: "/usi/aluminiu" },
      { label: "Uși PVC", href: "/usi/pvc" },
      { label: "Uși de garaj", href: "/usi-de-garaj" }
    ],
    ctaLabel: "Solicită consultanță",
    ctaHref: "/contact"
  },
  {
    slug: ["usi", "aluminiu"],
    title: "Uși de intrare din aluminiu",
    description: "Uși din aluminiu pentru intrări premium, cu stabilitate excelentă, panouri moderne și finisaje rezistente.",
    eyebrow: "Uși aluminiu",
    intro: "Modelele din aluminiu sunt dedicate proiectelor în care intrarea trebuie să fie sigură, expresivă și durabilă, cu un aspect curat pe fațade moderne.",
    highlights: [
      "Design premium cu panouri pline, inserții vitrate sau accente decorative",
      "Stabilitate excelentă pentru utilizare frecventă și dimensiuni generoase",
      "Finisaje rezistente, potrivite pentru expunere la exterior",
      "Potrivite pentru case contemporane, vile și proiecte comerciale reprezentative"
    ],
    relatedLinks: [
      { label: "Supreme", href: "/usi/aluminiu/supreme" },
      { label: "Modern", href: "/usi/aluminiu/modern" },
      { label: "Classic", href: "/usi/aluminiu/classic" }
    ],
    ctaLabel: "Solicită ofertă",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["usi", "pvc"],
    title: "Uși de intrare din PVC",
    description: "Uși din PVC pentru intrări eficiente, personalizabile și potrivite pentru locuințe cu buget bine controlat.",
    eyebrow: "Uși PVC",
    intro: "Gama de uși PVC oferă libertate de personalizare, izolație bună și întreținere redusă, fiind potrivită atât pentru construcții noi, cât și pentru renovări.",
    highlights: [
      "Modele versatile, cu panouri clasice sau moderne",
      "Izolație termică și fonică bună pentru confortul locuinței",
      "Opțiuni de culoare și foliere pentru armonizare cu tâmplăria PVC",
      "Întreținere redusă și cost total optimizat"
    ],
    relatedLinks: [
      { label: "Future", href: "/usi/pvc/future" },
      { label: "Modern", href: "/usi/pvc/modern" },
      { label: "Classic", href: "/usi/pvc/classic" }
    ],
    ctaLabel: "Solicită ofertă",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["usi-de-garaj"],
    title: "Uși de garaj",
    seoTitle: "Uși de garaj rezidențiale | AROFA",
    description: "Uși de garaj rezidențiale cu panouri termoizolante, acționare confortabilă și finisaje coordonate cu fațada.",
    eyebrow: "Uși de garaj",
    intro: "Soluțiile AROFA pentru garaj combină fiabilitatea mecanică, izolarea eficientă și un aspect coerent cu restul tâmplăriei, pentru acces sigur și utilizare confortabilă zi de zi.",
    highlights: [
      "Panouri termoizolante pentru garaje atașate casei sau spații încălzite",
      "Acționare manuală sau automatizată, în funcție de proiect",
      "Finisaje și culori adaptate arhitecturii exterioare",
      "Configurații pentru case individuale, duplexuri și renovări"
    ],
    ctaLabel: "Cere ofertă pentru garaj",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["usi-de-garaj-industriale"],
    title: "Uși de garaj industriale",
    seoTitle: "Uși de garaj industriale | AROFA",
    description: "Uși industriale pentru hale, depozite, spații logistice și zone cu trafic intens, configurate pentru fluxuri profesionale.",
    eyebrow: "Industrial",
    intro: "Portofoliul industrial acoperă cerințe de funcționalitate, rezistență și exploatare repetitivă în medii profesionale, cu atenție la dimensiuni, siguranță și automatizare.",
    highlights: [
      "Soluții pentru hale, service-uri, spații logistice și parcări tehnice",
      "Configurații pentru trafic intensiv și deschideri de mari dimensiuni",
      "Opțiuni de automatizare, control acces și integrare în fluxul operațional",
      "Consultanță tehnică pentru dimensionare, montaj și exploatare corectă"
    ],
    ctaLabel: "Solicită soluție industrială",
    ctaHref: "/contact"
  },
  {
    slug: ["sisteme-umbrire"],
    title: "Sisteme de umbrire",
    seoTitle: "Sisteme de umbrire: rulouri, screen solar, jaluzele | AROFA",
    description: "Rulouri, screen solar și jaluzele pentru controlul luminii, protecție solară, intimitate și confort termic.",
    eyebrow: "Umbrire",
    intro: "Sistemele de umbrire AROFA completează tâmplăria prin controlul luminii, protecție solară și eficiență energetică sporită, fie că vorbim despre rulouri, screen solar sau jaluzele.",
    highlights: [
      "Rulouri aplicate sau integrate pentru protecție, intimitate și confort termic",
      "Screen solar pentru fațade vitrate, terase și spații unde vrei lumină filtrată",
      "Jaluzele pentru reglaj fin al luminii și expresie arhitecturală contemporană",
      "Opțiuni manuale sau motorizate, în funcție de buget și utilizare"
    ],
    relatedLinks: [
      { label: "Rulouri", href: "/sisteme-umbrire/rulouri" },
      { label: "Screen solar", href: "/sisteme-umbrire/screensolar" },
      { label: "Jaluzele", href: "/sisteme-umbrire/jaluzele" }
    ],
    ctaLabel: "Solicită ofertă pentru umbrire",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["verande"],
    title: "Verande",
    description: "Verande AROFA pentru extinderea elegantă a spațiului de locuit și conectarea cu exteriorul.",
    eyebrow: "Verande",
    intro: "Verandele AROFA sunt concepute pentru a transforma terasa sau grădina într-un spațiu utilizabil mai multe luni pe an.",
    highlights: [
      "Deschideri largi și lumină naturală abundentă",
      "Integrare estetică în proiectul arhitectural",
      "Compatibilitate cu sisteme culisante și umbrire"
    ],
    ctaLabel: "Discută proiectul de verandă",
    ctaHref: "/contact"
  },
  {
    slug: ["servicii-de-montaj"],
    title: "Servicii de montaj",
    description: "Suntem specializați în furnizarea și montajul sistemelor avansate de tâmplărie PVC și aluminiu, oferind soluții tehnice de o calitate excepțională pentru proiecte rezidențiale și comerciale.",
    eyebrow: "Montaj",
    intro: "Aliniați riguros la normele standardului nZEB (Nearly Zero Energy Building), integrăm tehnologii de ultimă generație care reduc consumul de energie aproape de zero. Prin detalii de montaj specializate — inclusiv etanșarea tridimensională cu benzi barieră de vapori — garantăm eliminarea punților termice și o etanșeitate absolută.",
    highlights: [
      "Calitate certificată: Utilizăm exclusiv profile și vitraje premium, cu coeficienți remarcabili de izolare termică.",
      "Montaj de precizie: Tehnicienii noștri respectă cu strictețe protocoalele nZEB pentru a asigura continuitatea izolației.",
      "Consultanță tehnică: Oferim asistență completă, de la calculul coeficienților energetici până la recepția finală."
    ],
    ctaLabel: "Programează o discuție",
    ctaHref: "/contact"
  },
  {
    slug: ["alte-produse"],
    title: "Alte produse și soluții complementare",
    description: "Portofoliu AROFA de produse complementare pentru confort, protecție și funcționalitate extinsă.",
    eyebrow: "Portofoliu",
    intro: "Dincolo de ferestre și uși, AROFA include soluții complementare care completează proiectele rezidențiale și comerciale.",
    highlights: [
      "Sisteme de umbrire și plase de insecte",
      "Verande și uși de garaj",
      "Servicii de consultanță și montaj"
    ],
    relatedLinks: [
      { label: "Sisteme de umbrire", href: "/sisteme-umbrire" },
      { label: "Plase de insecte", href: "/plase-insecte" },
      { label: "Verande", href: "/verande" },
      { label: "Servicii de montaj", href: "/servicii-de-montaj" }
    ],
    ctaLabel: "Solicită recomandare",
    ctaHref: "/contact"
  },
  {
    slug: ["plase-insecte"],
    title: "Plase de insecte",
    description: "Plase de insecte AROFA pentru confort zilnic și integrare discretă în tâmplărie.",
    eyebrow: "Protecție",
    intro: "Soluțiile de plase de insecte sunt proiectate să protejeze spațiul interior fără a compromite lumina sau utilizarea ferestrelor și ușilor.",
    highlights: [
      "Variante rulou, plisse și roll-out",
      "Integrare discretă și utilizare ușoară",
      "Potrivite pentru ferestre, uși și goluri mari"
    ],
    relatedLinks: [
      { label: "Tip rulou", href: "/plase-insecte/rulou" },
      { label: "Tip plisse", href: "/plase-insecte/plisse" },
      { label: "Tip roll-out", href: "/plase-insecte/roll-out" }
    ]
  },
  {
    slug: ["despre-noi"],
    title: "Despre AROFA",
    description: "Suntem specializați în furnizarea și montajul sistemelor avansate de tâmplărie PVC și aluminiu pentru proiecte rezidențiale și comerciale.",
    eyebrow: "Companie",
    intro: "Aliniați la cerințele standardului nZEB (Nearly Zero Energy Building), integrăm tehnologii care contribuie la reducerea consumului de energie. Detaliile specializate de montaj, inclusiv etanșarea tridimensională cu benzi barieră de vapori, susțin continuitatea izolației și o etanșeitate ridicată.",
    highlights: [
      "Calitate certificată: profile și vitraje premium, cu performanță bună de izolare termică",
      "Montaj de precizie: protocoale nZEB pentru continuitatea izolației și reducerea punților termice",
      "Consultanță tehnică: de la calculul performanței energetice până la recepția finală"
    ],
    relatedLinks: [
      { label: "Calitate certificată", href: "/calitate-certificata" },
      { label: "Durabilitate", href: "/durabilitate" },
      { label: "Cariere", href: "/cariere" }
    ]
  },
  {
    slug: ["calitate-certificata"],
    title: "Calitate certificată",
    description: "Standardele de calitate AROFA și procesele care susțin performanța produselor în timp.",
    eyebrow: "Calitate",
    intro: "Fiecare soluție AROFA este construită cu atenție pentru performanță, consistență și încredere în utilizare pe termen lung.",
    highlights: [
      "Procese atent controlate",
      "Atenție la materiale, accesorii și finisaje",
      "Orientare spre performanță măsurabilă"
    ],
    ctaLabel: "Solicită detalii tehnice",
    ctaHref: "/contact"
  },
  {
    slug: ["montaj-profesionist"],
    title: "Montaj profesionist",
    description: "Procesul de montaj AROFA și impactul acestuia asupra performanței reale a produsului.",
    eyebrow: "Execuție",
    intro: "Un montaj corect face diferența dintre un produs bun și o soluție completă. AROFA tratează montajul ca parte esențială a proiectului.",
    highlights: [
      "Planificare și verificare înainte de instalare",
      "Detalii de etanșare și aliniere executate atent",
      "Predare clară și recomandări de utilizare"
    ],
    ctaLabel: "Vezi serviciile de montaj",
    ctaHref: "/servicii-de-montaj"
  },
  {
    slug: ["durabilitate"],
    title: "Durabilitate",
    description: "Cum proiectează AROFA produse rezistente, eficiente și potrivite pentru exploatare pe termen lung.",
    eyebrow: "Durabilitate",
    intro: "Durabilitatea este rezultatul materialelor potrivite, al proiectării corecte și al montajului executat responsabil.",
    highlights: [
      "Materiale și sisteme alese pentru rezistență reală",
      "Comportament bun în condiții diverse de exploatare",
      "Valoare pe termen lung pentru investiția în locuință"
    ],
    ctaLabel: "Discută soluția potrivită",
    ctaHref: "/contact"
  },
  {
    slug: ["case-history"],
    title: "Proiectele AROFA",
    description: "Exemple de proiecte AROFA din zona rezidențială, comercială și publică.",
    eyebrow: "Proiecte",
    intro: "Fiecare proiect are propriile cerințe de lumină, izolație, deschidere și expresie arhitecturală. Portofoliul AROFA arată această diversitate.",
    highlights: [
      "Locuințe private și vile contemporane",
      "Spații comerciale și HoReCa",
      "Clădiri publice și proiecte speciale"
    ],
    ctaLabel: "Solicită o soluție similară",
    ctaHref: "/contact"
  },
  {
    slug: ["cariere"],
    title: "Cariere",
    description: "Roluri și oportunități de carieră în echipa AROFA.",
    eyebrow: "Cariere",
    intro: "AROFA caută oameni orientați spre calitate, responsabilitate și colaborare pentru a dezvolta proiecte solide și experiențe bune pentru clienți.",
    highlights: [
      "Roluri tehnice, comerciale și operaționale",
      "Mediu de lucru orientat pe rezultate",
      "Dezvoltare profesională și proiecte relevante"
    ],
    ctaLabel: "Trimite un mesaj",
    ctaHref: "/contact"
  },
  {
    slug: ["contact"],
    title: "Contact",
    description: "Intră în legătură cu echipa AROFA pentru ofertă, consultanță sau informații comerciale.",
    eyebrow: "Contact",
    intro: "Consultanții AROFA îți pot recomanda rapid soluția potrivită pentru proiectul tău și te pot ghida în alegerea produselor.",
    highlights: [
      "Discuții despre ofertă și specificații",
      "Programare în showroom sau online",
      "Suport pentru proiecte rezidențiale și comerciale"
    ],
    relatedLinks: [
      { label: "Reprezentanțe", href: "/reprezentante" },
      { label: "Reprezentanți vânzări directe", href: "/contact/reprezentanti" },
      { label: "Solicită oferta", href: "/solicita-oferta" }
    ],
    ctaLabel: "Solicită ofertă",
    ctaHref: "/solicita-oferta"
  },
  {
    slug: ["contact", "reprezentanti"],
    title: "Reprezentanți vânzări directe",
    description: "Echipa AROFA de vânzări directe pentru proiecte rezidențiale și comerciale.",
    eyebrow: "Vânzări directe",
    intro: "Pentru proiecte cu cerințe specifice, reprezentanții AROFA oferă consultanță aplicată, clarificări tehnice și pași următori concreți.",
    highlights: [
      "Consultanță personalizată pe tip de proiect",
      "Răspuns rapid pentru specificații și bugete",
      "Coordonare cu oferta și montajul"
    ],
    ctaLabel: "Contactează echipa",
    ctaHref: "/contact"
  },
  {
    slug: ["reprezentante"],
    title: "Reprezentanțe AROFA",
    description: "Găsește reprezentanța AROFA potrivită pentru consultanță, ofertare și vizionare de produse.",
    eyebrow: "Showroom",
    intro: "Rețeaua AROFA de reprezentanțe și showroom-uri este gândită pentru a te apropia de produsele și consultanții noștri.",
    highlights: [
      "Discuții directe cu consultanți specializați",
      "Prezentare de produse și opțiuni",
      "Sprijin pentru configurare și ofertare"
    ],
    ctaLabel: "Programează o vizită",
    ctaHref: "/contact"
  },
  {
    slug: ["showroom-virtual"],
    title: "Showroom virtual",
    description: "Explorează soluțiile AROFA într-o experiență digitală clară și coerentă.",
    eyebrow: "Experiență digitală",
    intro: "Showroom-ul virtual te ajută să explorezi categoriile importante și să ajungi mai rapid la soluția relevantă pentru proiectul tău.",
    highlights: [
      "Acces rapid la categoriile principale",
      "Experiență utilă înaintea unei discuții de ofertă",
      "Bun punct de pornire pentru comparație"
    ],
    ctaLabel: "Solicită o prezentare",
    ctaHref: "/contact"
  },
  {
    slug: ["solicita-oferta"],
    title: "Solicită ofertă",
    description: "Trimite cererea ta pentru o ofertă AROFA personalizată în funcție de proiect și material.",
    eyebrow: "Ofertare",
    intro: "Procesul de ofertare pornește de la tipul proiectului, materialul dorit și nivelul de performanță urmărit. AROFA te ajută să structurezi rapid cererea.",
    highlights: [
      "Solicitare pentru ferestre, uși, culisante și accesorii",
      "Orientare pe material, buget și nivel de performanță",
      "Răspuns adaptat proiectului tău"
    ],
    relatedLinks: [
      { label: "Ferestre aluminiu", href: "/ferestre/aluminiu" },
      { label: "Ferestre PVC", href: "/ferestre/pvc" },
      { label: "Verande", href: "/verande" },
      { label: "Servicii de montaj", href: "/servicii-de-montaj" }
    ],
    ctaLabel: "Contactează un consultant",
    ctaHref: "/contact"
  },
  {
    slug: ["faq"],
    title: "Întrebări frecvente",
    description: "Întrebări frecvente despre produsele, montajul și procesul de ofertare AROFA.",
    eyebrow: "FAQ",
    intro: "Am sintetizat întrebările care apar frecvent în proiectele rezidențiale și comerciale pentru a accelera procesul de decizie.",
    highlights: [
      "Cum aleg materialul potrivit",
      "Ce influențează oferta finală",
      "Cum contează montajul în performanța produsului"
    ],
    ctaLabel: "Ai o întrebare specifică?",
    ctaHref: "/contact"
  },
  {
    slug: ["politica-confidentialitate"],
    title: "Politica de confidențialitate",
    description: "Informații privind datele transmise către AROFA, scopurile prelucrării și drepturile persoanelor vizate.",
    eyebrow: "Legal",
    intro: "Prin formular colectăm numele, emailul, telefonul, localitatea și detaliile proiectului pentru a răspunde solicitării sau pentru pași precontractuali. Datele sunt accesibile doar echipei și furnizorilor tehnici necesari livrării mesajului, se păstrează cel mult 12 luni dacă nu apare o obligație contractuală sau legală și nu sunt vândute. Pentru acces, rectificare, ștergere, restricționare, opoziție sau retragerea consimțământului, scrie la andrei.arofa@yahoo.com. Poți depune o plângere și la autoritatea competentă pentru protecția datelor.",
    highlights: [
      "Temei: consimțământ și demersuri efectuate la cererea ta înaintea unui contract",
      "Destinatari tehnici: furnizorul de găzduire și serviciul de livrare email",
      "Perioadă orientativă de păstrare: maximum 12 luni pentru solicitările fără contract",
      "Drepturile pot fi exercitate la andrei.arofa@yahoo.com"
    ]
  },
  {
    slug: ["termeni-conditii"],
    title: "Termeni și condiții",
    description: "Cadru general de utilizare a site-ului și de interacțiune cu informațiile furnizate de AROFA.",
    eyebrow: "Legal",
    intro: "Informațiile publicate descriu orientativ categoriile disponibile și nu reprezintă o ofertă contractuală. Configurația, prețul, termenul, transportul, montajul și garanția devin aplicabile numai printr-o ofertă sau un contract confirmat. Fotografiile marcate ca inspirație sunt ilustrative.",
    highlights: [
      "Denumirile și materialele AROFA nu pot fi reutilizate comercial fără acord",
      "Disponibilitatea și specificațiile se confirmă pentru fiecare proiect",
      "Legăturile externe sunt furnizate pentru acces rapid și au politici proprii"
    ]
  },
  {
    slug: ["cookies"],
    title: "Politica de cookie-uri",
    description: "Informații despre cookie-ul necesar pentru păstrarea limbii selectate.",
    eyebrow: "Legal",
    intro: "Site-ul folosește cookie-ul funcțional arofa_locale pentru a păstra limba aleasă timp de maximum 12 luni. Acesta este necesar pentru preferința de navigare și nu este folosit pentru publicitate sau profilare. În versiunea curentă nu sunt activate cookie-uri analitice sau de marketing.",
    highlights: [
      "arofa_locale: preferință funcțională, maximum 12 luni",
      "Fără cookie-uri de publicitate sau profilare",
      "Cookie-ul poate fi șters din setările browserului"
    ]
  },
  {
    slug: ["arhitecti"],
    title: "Zona Arhitecți",
    description: "Resurse și suport AROFA pentru arhitecți, designeri și proiectanți.",
    eyebrow: "Profesioniști",
    intro: "Zona dedicată arhitecților sintetizează categoriile de produse, avantajele și direcțiile de colaborare pentru proiecte rezidențiale sau comerciale.",
    highlights: [
      "Orientare pe materiale și tipuri de deschidere",
      "Suport pentru soluții speciale și cerințe de proiect",
      "Dialog mai clar între proiectare și execuție"
    ],
    ctaLabel: "Discută cu un consultant",
    ctaHref: "/contact"
  },
  {
    slug: ["magazin"],
    title: "Magazin AROFA",
    description: "Punct de intrare pentru portofoliul AROFA și solicitări comerciale rapide.",
    eyebrow: "Magazin",
    intro: "Magazinul este tratat aici ca un hub comercial pentru descoperirea categoriilor și direcționarea către ofertare, nu ca un checkout complet.",
    highlights: [
      "Acces rapid la categorii principale",
      "Clarificare a opțiunilor de configurare",
      "Trimitere eficientă spre ofertare și consultanță"
    ],
    ctaLabel: "Vezi categoriile principale",
    ctaHref: "/ferestre"
  },
  {
    slug: ["arofa-view"],
    title: "AROFA View",
    description: "Soluție AROFA View pentru mai multă lumină naturală și un design contemporan al spațiului.",
    eyebrow: "Soluție premium",
    intro: "AROFA View este poziționată ca soluție pentru proiecte care urmăresc vitraje generoase, luminozitate și o estetică simplificată.",
    highlights: [
      "Mai multă lumină naturală în spațiul interior",
      "Aspect modern cu suprafețe vitrate ample",
      "Integrare în proiecte rezidențiale premium"
    ],
    ctaLabel: "Solicită consultanță",
    ctaHref: "/contact"
  },
  {
    slug: ["personalizari", "alu-clips"],
    title: "Alu-Clips",
    description: "Placare cu aluminiu pentru ferestre PVC, pentru un plus de expresie arhitecturală și rezistență.",
    eyebrow: "Personalizare",
    intro: "Alu-Clips combină avantajele PVC-ului cu expresia vizuală a aluminiului, pentru proiecte care cer flexibilitate estetică și performanță.",
    highlights: [
      "Aspect exterior premium",
      "Flexibilitate mai mare de personalizare",
      "Soluție potrivită proiectelor contemporane"
    ],
    ctaLabel: "Cere mai multe detalii",
    ctaHref: "/contact"
  },
  {
    slug: ["avantaje"],
    title: "Avantajele AROFA",
    description: "Beneficiile cheie ale soluțiilor AROFA: design, control al calității și consiliere personalizată.",
    eyebrow: "Avantaje",
    intro: "AROFA pune accent pe design, consistență de execuție și sprijin real în alegerea soluției potrivite pentru proiect.",
    highlights: [
      "Design și personalizare",
      "Control al calității și durabilitate",
      "Consultanță aplicată și ofertare clară"
    ],
    relatedLinks: [
      { label: "Design de top", href: "/avantaje/design-de-top" },
      { label: "Solicită oferta", href: "/solicita-oferta" }
    ]
  },
  {
    slug: ["avantaje", "design-de-top"],
    title: "Design de top",
    description: "Designul AROFA: soluții care combină estetică, lumină naturală și detalii rafinate.",
    eyebrow: "Design",
    intro: "Designul AROFA urmărește proporții curate, varietate de stiluri și o relație echilibrată între material, lumină și volum construit.",
    highlights: [
      "Linii drepte sau forme mai calde, în funcție de stil",
      "Configurații pentru arhitectură modernă și clasică",
      "Accent pe lumină naturală și integrare în fațadă"
    ],
    ctaLabel: "Descoperă soluțiile AROFA",
    ctaHref: "/ferestre"
  }
]

const productPageOverrides: Record<string, Partial<SitePage>> = {
  "ferestre/aluminiu/arrogance": {
    title: "Arrogance",
    description: "Sistem premium din aluminiu pentru ferestre și uși cu suprafețe vitrate ample, linii elegante și prezență arhitecturală puternică.",
    eyebrow: "Aluminiu premium",
    intro: "Arrogance este potrivit pentru proiecte în care tâmplăria devine parte vizibilă din arhitectură: goluri mari, lumină naturală și finisaje cu impact.",
    highlights: [
      "Recomandat pentru vile, case moderne și spații reprezentative",
      "Profile din aluminiu stabile pentru vitraje generoase",
      "Design premium, cu finisaje coordonate cu restul fațadei",
      "Integrare bună cu uși de intrare din aluminiu și sisteme de umbrire"
    ],
    relatedLinks: [
      { label: "Ferestre aluminiu", href: "/ferestre/aluminiu" },
      { label: "Uși aluminiu", href: "/usi/aluminiu" },
      { label: "Screen solar", href: "/sisteme-umbrire/screensolar" }
    ]
  },
  "ferestre/aluminiu/6stars": {
    title: "6Stars aluminiu",
    description: "Ferestre și uși din aluminiu cu echilibru între izolație, rezistență și design pentru proiecte rezidențiale moderne.",
    eyebrow: "Aluminiu",
    intro: "6Stars aluminiu este o alegere potrivită când ai nevoie de tâmplărie solidă, eficientă și adaptabilă pentru fațade curate și spații luminoase.",
    highlights: [
      "Performanță termică și fonică potrivită pentru locuințe moderne",
      "Soluții pentru ferestre, uși și ansambluri vitrate",
      "Finisaje variate pentru integrare în arhitectura casei",
      "Compatibilitate cu rulouri, screen solar și plase de insecte"
    ]
  },
  "ferestre/aluminiu/5stars": {
    title: "5Stars aluminiu",
    description: "Sistem din aluminiu pentru proiecte care caută design curat, rezistență bună și configurare flexibilă.",
    eyebrow: "Aluminiu",
    intro: "5Stars aluminiu este potrivit pentru proiecte rezidențiale și comerciale unde contează aspectul modern și o soluție tehnică eficientă.",
    highlights: [
      "Profile elegante pentru fațade contemporane",
      "Configurații flexibile pentru ferestre și uși",
      "Rezistență bună în utilizare zilnică",
      "Recomandat pentru proiecte cu buget optimizat în gama aluminiu"
    ]
  },
  "ferestre/pvc/6stars": {
    title: "Epiq 6Stars PVC",
    description: "Sistem PVC performant pentru ferestre și uși eficiente energetic, cu personalizare extinsă și confort ridicat.",
    eyebrow: "PVC performant",
    intro: "Epiq 6Stars PVC este o soluție echilibrată pentru locuințe moderne, unde contează izolația, aspectul și costul total al investiției.",
    highlights: [
      "Izolație termică și fonică foarte bună pentru spații locuite",
      "Variante de culoare, foliere și placare cu aluminiu",
      "Potrivit pentru ferestre, uși și ansambluri rezidențiale",
      "Raport bun între performanță, personalizare și buget"
    ],
    relatedLinks: [
      { label: "Ferestre PVC", href: "/ferestre/pvc" },
      { label: "Uși PVC", href: "/usi/pvc" },
      { label: "Alu-Clips", href: "/personalizari/alu-clips" }
    ]
  },
  "ferestre/pvc/7stars": {
    title: "7Stars PVC",
    description: "Sistem PVC orientat spre eficiență energetică ridicată, confort fonic și stabilitate pentru locuințe exigente.",
    eyebrow: "PVC eficient",
    intro: "7Stars PVC este potrivit pentru proiecte în care izolarea și confortul interior sunt criterii centrale, de la case noi la renovări complete.",
    highlights: [
      "Performanță termică ridicată pentru reducerea pierderilor de căldură",
      "Confort fonic pentru zone urbane sau expuse la trafic",
      "Configurații adaptabile pentru ferestre și uși",
      "Întreținere simplă și durabilitate bună în timp"
    ]
  },
  "ferestre/pvc/4stars": {
    title: "4Stars PVC",
    description: "Sistem PVC practic pentru proiecte cu buget controlat, potrivit pentru renovări și locuințe funcționale.",
    eyebrow: "PVC practic",
    intro: "4Stars PVC acoperă nevoile esențiale de izolație, utilizare confortabilă și aspect ordonat, cu o investiție atent dimensionată.",
    highlights: [
      "Soluție accesibilă pentru înlocuiri și renovări",
      "Izolație bună pentru utilizare rezidențială",
      "Opțiuni uzuale de culoare și configurare",
      "Potrivit pentru apartamente, case și spații auxiliare"
    ]
  },
  "usi/aluminiu/supreme": {
    title: "Supreme",
    description: "Ușă de intrare din aluminiu pentru proiecte premium, cu design puternic, stabilitate și finisaje reprezentative.",
    eyebrow: "Ușă aluminiu",
    intro: "Supreme este alegerea potrivită pentru intrări care trebuie să transmită siguranță și rafinament încă din primul contact cu locuința.",
    highlights: [
      "Aspect premium pentru fațade moderne",
      "Panouri și finisaje cu impact vizual ridicat",
      "Stabilitate bună pentru utilizare frecventă",
      "Configurare alături de ferestre aluminiu și sisteme de umbrire"
    ]
  },
  "usi/aluminiu/modern": {
    title: "Modern aluminiu",
    description: "Uși de intrare din aluminiu cu linii curate, potrivite pentru case contemporane și fațade minimaliste.",
    eyebrow: "Ușă aluminiu",
    intro: "Gama Modern pune accent pe proporții simple, finisaje actuale și integrare coerentă cu tâmplăria din aluminiu.",
    highlights: [
      "Design minimalist pentru arhitectură contemporană",
      "Varietate de panouri, culori și accente",
      "Soluție durabilă pentru expunere la exterior",
      "Potrivită pentru case noi și renovări premium"
    ]
  },
  "usi/aluminiu/classic": {
    title: "Classic aluminiu",
    description: "Uși de intrare din aluminiu cu aspect echilibrat, pentru proiecte care preferă eleganța discretă și durabilitatea.",
    eyebrow: "Ușă aluminiu",
    intro: "Classic aluminiu păstrează o estetică atemporală, cu avantajele tehnice ale aluminiului și posibilități generoase de configurare.",
    highlights: [
      "Aspect clasic, ușor de integrat în fațade diverse",
      "Material stabil și rezistent în timp",
      "Finisaje adaptate tâmplăriei existente",
      "Potrivită pentru renovări și locuințe cu stil tradițional"
    ]
  },
  "usi/pvc/future": {
    title: "Future PVC",
    description: "Ușă de intrare din PVC pentru locuințe eficiente, cu izolație bună, personalizare și întreținere redusă.",
    eyebrow: "Ușă PVC",
    intro: "Future PVC este potrivită pentru proiecte rezidențiale în care confortul, bugetul și ușurința de întreținere sunt importante.",
    highlights: [
      "Izolație bună pentru intrări rezidențiale",
      "Panouri și culori adaptabile stilului casei",
      "Întreținere simplă în exploatare",
      "Raport eficient între cost, confort și aspect"
    ]
  },
  "usi/pvc/modern": {
    title: "Modern PVC",
    description: "Uși de intrare din PVC cu design actual, potrivite pentru locuințe noi sau renovări cu buget optimizat.",
    eyebrow: "Ușă PVC",
    intro: "Modern PVC aduce un aspect curat și opțiuni practice de personalizare, păstrând avantajele de izolație și cost ale PVC-ului.",
    highlights: [
      "Design contemporan pentru fațade simple și ordonate",
      "Variante de panouri, culori și folieri",
      "Confort termic și fonic pentru utilizare zilnică",
      "Integrare firească alături de ferestre PVC"
    ]
  },
  "usi/pvc/classic": {
    title: "Classic PVC",
    description: "Uși de intrare din PVC cu stil atemporal, potrivite pentru renovări și locuințe cu arhitectură clasică.",
    eyebrow: "Ușă PVC",
    intro: "Classic PVC oferă o soluție familiară, eficientă și ușor de configurat pentru intrări rezidențiale cu aspect tradițional.",
    highlights: [
      "Modele clasice pentru fațade tradiționale",
      "Izolație bună și întreținere redusă",
      "Opțiuni de culoare pentru potrivire cu ferestrele",
      "Soluție practică pentru renovări și înlocuiri"
    ]
  },
  "sisteme-umbrire/rulouri": {
    title: "Rulouri",
    description: "Rulouri pentru protecție solară, intimitate, confort termic și siguranță suplimentară la ferestre și uși.",
    eyebrow: "Rulouri",
    intro: "Rulourile completează tâmplăria și ajută la controlul luminii, temperaturii și intimității, fiind potrivite atât pentru construcții noi, cât și pentru renovări.",
    highlights: [
      "Reduc supraîncălzirea vara și pierderile de căldură în sezonul rece",
      "Cresc intimitatea și protecția ferestrelor expuse",
      "Pot fi configurate manual sau motorizat",
      "Disponibile în variante adaptate ferestrelor PVC și aluminiu"
    ],
    relatedLinks: [
      { label: "Rulouri aplicate", href: "/sisteme-umbrire/rulouri-aplicate" },
      { label: "Jaluzele", href: "/sisteme-umbrire/jaluzele" },
      { label: "Screen solar", href: "/sisteme-umbrire/screensolar" }
    ]
  },
  "sisteme-umbrire/rulouri-aplicate": {
    title: "Rulouri aplicate",
    description: "Rulouri aplicate pentru renovări sau completări ulterioare, cu montaj adaptat tâmplăriei existente.",
    eyebrow: "Rulouri",
    intro: "Rulourile aplicate sunt utile când vrei protecție solară și confort termic fără intervenții majore asupra tâmplăriei sau fațadei.",
    highlights: [
      "Potrivite pentru locuințe existente și renovări",
      "Îmbunătățesc controlul luminii și intimitatea",
      "Opțiuni de acționare manuală sau electrică",
      "Finisaje coordonate cu ferestrele și fațada"
    ]
  },
  "sisteme-umbrire/screensolar": {
    title: "Screen solar",
    description: "Screen solar pentru filtrarea luminii, reducerea supraîncălzirii și păstrarea vizibilității către exterior.",
    eyebrow: "Screen solar",
    intro: "Screen solar este recomandat pentru ferestre mari, fațade vitrate, terase și spații unde vrei protecție solară fără să închizi complet perspectiva.",
    highlights: [
      "Filtrează lumina puternică și reduce disconfortul termic",
      "Potrivit pentru suprafețe vitrate mari și arhitectură modernă",
      "Păstrează o relație vizuală plăcută cu exteriorul",
      "Poate fi integrat cu soluții motorizate pentru utilizare comodă"
    ],
    relatedLinks: [
      { label: "Ferestre aluminiu", href: "/ferestre/aluminiu" },
      { label: "Uși culisante aluminiu", href: "/usi-culisante/aluminiu" },
      { label: "Rulouri", href: "/sisteme-umbrire/rulouri" }
    ]
  },
  "sisteme-umbrire/jaluzele": {
    title: "Jaluzele",
    description: "Jaluzele pentru control precis al luminii, intimitate reglabilă și aspect arhitectural curat.",
    eyebrow: "Jaluzele",
    intro: "Jaluzelele oferă reglaj fin al luminii și pot susține un aspect modern al fațadei, fiind potrivite pentru locuințe și spații comerciale.",
    highlights: [
      "Permit reglarea treptată a luminii pe parcursul zilei",
      "Oferă intimitate fără blocarea completă a luminii naturale",
      "Pot fi alese în finisaje coordonate cu tâmplăria",
      "Potrivite pentru fațade moderne, birouri și locuințe"
    ],
    relatedLinks: [
      { label: "Jaluzele manuale", href: "/sisteme-umbrire/manuale" },
      { label: "Jaluzele motorizate", href: "/sisteme-umbrire/motorizate" },
      { label: "Screen solar", href: "/sisteme-umbrire/screensolar" }
    ]
  },
  "sisteme-umbrire/manuale": {
    title: "Sisteme de umbrire manuale",
    description: "Soluții manuale pentru rulouri și jaluzele, potrivite pentru configurări simple, eficiente și ușor de întreținut.",
    eyebrow: "Acționare manuală",
    intro: "Acționarea manuală este potrivită pentru proiecte cu buget controlat, ferestre accesibile și utilizare directă, fără automatizări suplimentare.",
    highlights: [
      "Soluție practică pentru ferestre ușor accesibile",
      "Cost inițial optimizat",
      "Mentenanță simplă și utilizare intuitivă",
      "Compatibilă cu rulouri și jaluzele selectate"
    ]
  },
  "sisteme-umbrire/motorizate": {
    title: "Sisteme de umbrire motorizate",
    description: "Rulouri, screen solar și jaluzele motorizate pentru control comod, scenarii automate și utilizare premium.",
    eyebrow: "Motorizare",
    intro: "Motorizarea aduce confort în utilizarea zilnică, mai ales pentru suprafețe vitrate mari, ferestre greu accesibile sau case cu mai multe zone de umbrire.",
    highlights: [
      "Control comod pentru rulouri, jaluzele sau screen solar",
      "Potrivite pentru vitraje mari și fațade expuse",
      "Posibilitate de integrare în scenarii de confort",
      "Recomandate pentru proiecte premium și spații comerciale"
    ]
  }
}

const detailedPages: SitePage[] = [
  {
    slug: ["usi-de-garaj-industriale", "automatizare-control-acces"],
    title: "Automatizare și control acces pentru uși industriale",
    description: "Opțiuni de acționare, comandă și control acces pentru uși industriale utilizate în fluxuri profesionale.",
    eyebrow: "Automatizare industrială",
    intro: "Automatizarea se stabilește după dimensiunea ușii, frecvența de utilizare, modul de acces și cerințele de siguranță ale spațiului.",
    highlights: ["Comandă locală, telecomandă sau integrare în controlul accesului", "Fotocelule și elemente de siguranță adaptate utilizării", "Configurare pentru trafic ocazional sau repetitiv", "Poziționarea comenzilor stabilită în funcție de fluxul de lucru"],
    ctaLabel: "Discută cerințele de automatizare",
    ctaHref: "/contact",
  },
  {
    slug: ["usi-de-garaj-industriale", "dimensionare"],
    title: "Dimensionarea ușilor industriale",
    description: "Datele necesare pentru alegerea și dimensionarea unei uși industriale potrivite golului și activității.",
    eyebrow: "Dimensionare tehnică",
    intro: "O ofertă corectă pornește de la dimensiunile golului, spațiul disponibil pentru ghidaje, tipul clădirii și frecvența estimată de operare.",
    highlights: ["Lățimea și înălțimea golului verificate în mai multe puncte", "Spațiul lateral și superior necesar mecanismului", "Trasee, instalații sau obstacole aflate în zona ușii", "Accesul la montaj și condițiile reale de exploatare"],
    ctaLabel: "Trimite datele proiectului",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["usi-de-garaj-industriale", "montaj-service"],
    title: "Montaj și service pentru uși industriale",
    description: "Planificarea montajului, reglajele de predare și întreținerea ușilor industriale.",
    eyebrow: "Montaj industrial",
    intro: "Montajul trebuie coordonat cu stadiul construcției și cu accesul în șantier, iar după instalare sunt necesare verificări funcționale și instrucțiuni clare de utilizare.",
    highlights: ["Verificarea suportului și a cotelor înainte de instalare", "Montaj mecanic și electric coordonat", "Teste de funcționare și reglaje la predare", "Plan de verificare periodică stabilit după intensitatea utilizării"],
    ctaLabel: "Solicită evaluarea montajului",
    ctaHref: "/contact",
  },
  {
    slug: ["sisteme-umbrire", "jaluzele", "manuale"],
    title: "Jaluzele cu acționare manuală",
    description: "Jaluzele manuale pentru reglarea simplă a luminii și intimității în spații rezidențiale sau comerciale.",
    eyebrow: "Jaluzele manuale",
    intro: "Acționarea manuală este potrivită pentru goluri accesibile și utilizare moderată, atunci când se dorește o soluție simplă, fără alimentare electrică.",
    highlights: ["Reglarea poziției lamelelor în funcție de lumină", "Utilizare potrivită pentru ferestre ușor accesibile", "Culori și dimensiuni alese împreună cu tâmplăria", "Mecanismul se stabilește după dimensiunea și poziția golului"],
    ctaLabel: "Cere o ofertă pentru jaluzele",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["sisteme-umbrire", "jaluzele", "motorizate"],
    title: "Jaluzele motorizate",
    description: "Jaluzele motorizate pentru vitraje mari, utilizare frecventă și control coordonat al luminii.",
    eyebrow: "Jaluzele motorizate",
    intro: "Motorizarea simplifică utilizarea jaluzelelor mari sau greu accesibile și permite control individual, pe zone sau prin scenarii de automatizare.",
    highlights: ["Comandă prin întrerupător, telecomandă sau sistem compatibil", "Control individual sau grupat pentru mai multe goluri", "Opțiuni de senzori evaluate în funcție de proiect", "Poziția alimentării se stabilește înainte de montaj"],
    ctaLabel: "Discută opțiunile de motorizare",
    ctaHref: "/contact",
  },
  {
    slug: ["sisteme-umbrire", "screensolar", "manual"],
    title: "Screen solar cu acționare manuală",
    description: "Screen solar manual pentru goluri accesibile, terase și vitraje unde este necesară filtrarea luminii.",
    eyebrow: "Screen manual",
    intro: "Varianta manuală oferă control direct și este potrivită atunci când dimensiunea, poziția și frecvența de utilizare permit o acționare comodă.",
    highlights: ["Țesătura se alege după orientare și vizibilitatea dorită", "Caseta și ghidajele se adaptează golului", "Soluție fără alimentare electrică", "Dimensiunile finale se confirmă după măsurători"],
    ctaLabel: "Solicită ofertă pentru screen",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["sisteme-umbrire", "screensolar", "motorizat"],
    title: "Screen solar motorizat",
    description: "Screen solar motorizat pentru suprafețe vitrate mari și control confortabil al protecției solare.",
    eyebrow: "Screen motorizat",
    intro: "Motorizarea este recomandată pentru screen-uri de dimensiuni mari, goluri greu accesibile sau proiecte cu mai multe zone de protecție solară.",
    highlights: ["Comandă individuală sau grupată", "Pregătirea alimentării înainte de finisaje", "Posibilitate de integrare cu senzori compatibili", "Alegerea țesăturii după expunere și nivelul de transparență"],
    ctaLabel: "Configurează un screen motorizat",
    ctaHref: "/contact",
  },
  {
    slug: ["servicii-de-montaj", "masuratori-planificare"],
    title: "Măsurători și planificarea montajului",
    description: "Releveul golurilor și verificările necesare înainte de comandă și instalare.",
    eyebrow: "Înainte de montaj",
    intro: "Măsurătorile corecte reduc riscul de adaptări în șantier și permit stabilirea din timp a prinderilor, etanșării, accesului și ordinii lucrărilor.",
    highlights: ["Verificarea cotelor și a geometriei golului", "Identificarea suportului și a zonelor de fixare", "Clarificarea finisajelor interioare și exterioare", "Planificarea accesului, protecției și manipulării"],
    ctaLabel: "Programează o evaluare",
    ctaHref: "/contact",
  },
  {
    slug: ["servicii-de-montaj", "ferestre-usi"],
    title: "Montaj pentru ferestre și uși",
    description: "Instalarea ferestrelor și ușilor din PVC sau aluminiu, cu fixare, etanșare și reglaje finale.",
    eyebrow: "Ferestre și uși",
    intro: "Poziționarea corectă în gol, fixarea și tratarea rostului influențează direct etanșeitatea, confortul și funcționarea tâmplăriei.",
    highlights: ["Pregătirea și verificarea golului", "Poziționare, calare și fixare controlată", "Etanșarea rostului adaptată situației din șantier", "Reglarea feroneriei și verificarea funcționării"],
    ctaLabel: "Solicită montaj pentru tâmplărie",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["servicii-de-montaj", "usi-garaj-industriale"],
    title: "Montaj pentru uși de garaj și industriale",
    description: "Montaj coordonat pentru uși de garaj rezidențiale și uși industriale.",
    eyebrow: "Uși de garaj",
    intro: "Instalarea urmărește geometria golului, fixarea ghidajelor, echilibrarea mecanismului și verificarea sistemelor de comandă și siguranță.",
    highlights: ["Verificarea cotelor și a structurii suport", "Montarea ghidajelor și a mecanismului de acționare", "Racordarea automatizării unde este prevăzută", "Probe complete și instrucțiuni de utilizare"],
    ctaLabel: "Discută montajul ușii",
    ctaHref: "/contact",
  },
  {
    slug: ["servicii-de-montaj", "sisteme-umbrire"],
    title: "Montaj pentru sisteme de umbrire",
    description: "Instalarea rulourilor, jaluzelelor și screen-urilor, inclusiv pregătirea pentru motorizare.",
    eyebrow: "Umbrire",
    intro: "Poziția casetei, alinierea ghidajelor și accesul la alimentare trebuie coordonate cu tâmplăria și finisajele pentru o funcționare corectă.",
    highlights: ["Confirmarea dimensiunilor după montarea tâmplăriei", "Fixarea și alinierea casetelor și ghidajelor", "Pregătirea alimentării pentru sistemele motorizate", "Reglaje, probe și explicații la predare"],
    ctaLabel: "Solicită montaj pentru umbrire",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["sisteme-umbrire", "rulouri", "aplicate"],
    title: "Rulouri aplicate",
    description: "Rulouri montate la exteriorul tâmplăriei, potrivite pentru renovări și completarea ferestrelor existente.",
    eyebrow: "Rulouri aplicate",
    intro: "Rulourile aplicate se instalează fără ca sistemul să fie prevăzut în structura inițială a golului. Dimensiunea casetei, poziția ghidajelor și accesul pentru montaj se verifică la fața locului.",
    highlights: ["Potrivite pentru renovări și tâmplărie existentă", "Casetă și ghidaje vizibile la exterior", "Acționare manuală sau motorizată, după dimensiune", "Culoare coordonată cu ferestrele și fațada"],
    ctaLabel: "Solicită ofertă pentru rulouri aplicate",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["sisteme-umbrire", "rulouri", "integrate"],
    title: "Rulouri integrate",
    description: "Rulouri prevăzute împreună cu tâmplăria sau din etapa de proiectare, pentru o integrare discretă în gol.",
    eyebrow: "Rulouri integrate",
    intro: "Sistemul integrat trebuie coordonat înainte de comandarea tâmplăriei și de executarea finisajelor. Spațiul pentru casetă, accesul la revizie și detaliile de etanșare fac parte din proiect.",
    highlights: ["Planificare împreună cu fereastra și finisajele", "Casetă integrată mai discret în gol", "Acces de revizie păstrat pentru întreținere", "Compatibilitate verificată cu dimensiunea și tipul ferestrei"],
    ctaLabel: "Configurează rulourile integrate",
    ctaHref: "/contact",
  },
  {
    slug: ["sisteme-umbrire", "rulouri", "manuale"],
    title: "Rulouri cu acționare manuală",
    description: "Rulouri cu operare manuală pentru goluri accesibile și utilizare rezidențială moderată.",
    eyebrow: "Acționare manuală",
    intro: "Varianta manuală este evaluată după dimensiunea ruloului, greutatea lamelelor și accesibilitate, astfel încât operarea zilnică să rămână simplă.",
    highlights: ["Fără alimentare electrică", "Mecanism ales după dimensiunea ruloului", "Potrivite pentru ferestre ușor accesibile", "Poziția comenzii stabilită înainte de montaj"],
    ctaLabel: "Cere ofertă pentru rulouri manuale",
    ctaHref: "/solicita-oferta",
  },
  {
    slug: ["sisteme-umbrire", "rulouri", "motorizate"],
    title: "Rulouri motorizate",
    description: "Rulouri motorizate pentru operare confortabilă, goluri mari și control individual sau grupat.",
    eyebrow: "Motorizare",
    intro: "Motorizarea trebuie corelată cu dimensiunea sistemului și cu instalația electrică. Alimentarea, poziția comenzilor și eventualele scenarii de control se stabilesc înainte de finisaje.",
    highlights: ["Control prin întrerupător sau telecomandă compatibilă", "Operare individuală sau grupată", "Potrivite pentru goluri mari ori greu accesibile", "Alimentarea și accesul de service planificate din timp"],
    ctaLabel: "Discută motorizarea rulourilor",
    ctaHref: "/contact",
  },
]

const generatedProductPages = [
  ["ferestre", "aluminiu", "arrogance"],
  ["ferestre", "aluminiu", "6stars"],
  ["ferestre", "aluminiu", "5stars"],
  ["ferestre", "pvc", "6stars"],
  ["ferestre", "pvc", "7stars"],
  ["ferestre", "pvc", "4stars"],
  ["usi-culisante", "aluminiu", "panorama-7stars"],
  ["usi-culisante", "aluminiu", "paysage-6stars"],
  ["usi-culisante", "aluminiu", "paysage-5stars"],
  ["usi-culisante", "aluminiu", "paysage-bifold"],
  ["usi-culisante", "pvc", "paysage-7stars"],
  ["usi-culisante", "pvc", "paysage-6stars"],
  ["usi-culisante", "pvc", "paysage-4stars"],
  ["usi", "aluminiu", "supreme"],
  ["usi", "aluminiu", "modern"],
  ["usi", "aluminiu", "classic"],
  ["usi", "pvc", "future"],
  ["usi", "pvc", "modern"],
  ["usi", "pvc", "classic"],
  ["sisteme-umbrire", "manuale"],
  ["sisteme-umbrire", "motorizate"],
  ["sisteme-umbrire", "rulouri-aplicate"],
  ["sisteme-umbrire", "rulouri"],
  ["sisteme-umbrire", "screensolar"],
  ["sisteme-umbrire", "jaluzele"],
  ["plase-insecte", "rulou"],
  ["plase-insecte", "plisse"],
  ["plase-insecte", "roll-out"]
].map<SitePage>((slug) => {
  const label = slug[slug.length - 1]
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
  const key = slug.join("/")

  return {
    slug,
    title: label,
    description: `${label} din portofoliul AROFA, prezentat într-o pagină dedicată cu informații comerciale și direcții utile de ofertare.`,
    eyebrow: "Model",
    intro: `${label} face parte din portofoliul AROFA și poate fi configurat în funcție de cerințele proiectului, material, nivel de izolare și stil arhitectural.`,
    highlights: [
      "Configurare adaptată proiectului tău",
      "Recomandări tehnice și comerciale de la consultanți",
      "Integrare într-o ofertă completă AROFA"
    ],
    ctaLabel: "Solicită ofertă pentru acest model",
    ctaHref: "/solicita-oferta",
    ...productPageOverrides[key]
  }
})

export const sitePages = [...basePages, ...detailedPages, ...generatedProductPages]
export const indexableSitePages = [...basePages, ...detailedPages]
const generatedProductPaths = new Set(generatedProductPages.map((page) => page.slug.join("/")))

export function isGeneratedProductPage(slug: string[]) {
  return generatedProductPaths.has(slug.join("/"))
}

export const sitePageMap = new Map(sitePages.map((page) => [page.slug.join("/"), page]))

export function getPageBySlug(slug: string[]) {
  return sitePageMap.get(slug.join("/"))
}
