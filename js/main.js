/* ═══════════════════════════════════════════
   Airport Rooms — Main JavaScript
   ═══════════════════════════════════════════ */

/* ─── TRANSLATIONS ─── */
const translations = {
    cs: {
        "nav.home": "Domů",
        "nav.rooms": "Pokoje",
        "nav.gallery": "Galerie",
        "nav.contact": "Kontakt",
        "nav.book": "Rezervovat",
        "hero.badge": "10 min od letiště Václava Havla",
        "hero.title1": "Komfortní ubytování ",
        "hero.title2": "u letiště Praha",
        "hero.subtitle": "Moderní penzion s výhodnou polohou pro cestovatele. Tiché pokoje, rychlé Wi-Fi a bezplatné parkování.",
        "hero.cta1": "Prohlédnout pokoje",
        "hero.cta2": "Kontaktovat nás",
        "hero.stat1.num": "4.8",
        "hero.stat1.label": "Hodnocení hostů",
        "hero.stat2.num": "10 min",
        "hero.stat2.label": "Na letiště",
        "hero.stat3.num": "33+",
        "hero.stat3.label": "Recenzí",
        "about.tag": "O nás",
        "about.title1": "Váš domov ",
        "about.title2": "blízko letiště",
        "about.p1": "Airport Rooms nabízí komfortní ubytování v klidné lokalitě Prahy 6, pouhých 10 minut od letiště Václava Havla. Ideální pro cestovatele s ranním nebo pozdním letem.",
        "about.p2": "Každý pokoj je vybaven moderním nábytkem, kvalitní postelí a vlastní koupelnou. Nabízíme bezplatné Wi-Fi, parkování a snídani na vyžádání.",
        "about.feat1.title": "Klidná lokalita",
        "about.feat1.desc": "Tichý penzion v residenční oblasti",
        "about.feat2.title": "Snadná doprava",
        "about.feat2.desc": "MHD zastávka 2 min pěšky",
        "about.feat3.title": "Flexibilní check-in",
        "about.feat3.desc": "Příjezd od 14:00 do 22:00",
        "about.cta": "Více o nás",
        "about.rating": "na Google",
        "marquee.1": "Blízko letiště",
        "marquee.2": "Free Wi-Fi",
        "marquee.3": "Free parking",
        "marquee.4": "Snídaně",
        "marquee.5": "Tiché pokoje",
        "marquee.6": "Flexibilní check-in",
        "services.tag": "Služby",
        "services.title1": "Co vám ",
        "services.title2": "nabízíme",
        "services.s1.title": "Bezplatné Wi-Fi",
        "services.s1.desc": "Vysokorychlostní připojení ve všech pokojích i společných prostorách.",
        "services.s2.title": "Parkování zdarma",
        "services.s2.desc": "Bezplatné soukromé parkoviště přímo u penzionu, ideální pro cestovatele s autem.",
        "services.s3.title": "Snídaně",
        "services.s3.desc": "Kontinentální snídaně podávaná každé ráno na objednávku.",
        "services.s4.title": "Klimatizace",
        "services.s4.desc": "Individuálně nastavitelná klimatizace v každém pokoji.",
        "services.s5.title": "Transfer na letiště",
        "services.s5.desc": "Zajistíme vám pohodlný transfer na letiště nebo z letiště.",
        "services.s6.title": "Úschovna zavazadel",
        "services.s6.desc": "Bezpečná úschovna zavazadel pro hosty s pozdějším odletem.",
        "reviews.tag": "Recenze",
        "reviews.title1": "Co říkají ",
        "reviews.title2": "naši hosté",
        "reviews.sub": "Hodnocení 4.8/5 na základě 33 recenzí na",
        "reviews.r1.text": "Skvělé ubytování kousek od letiště. Čistý pokoj, pohodlná postel a velmi milý personál. Určitě se vrátím!",
        "reviews.r1.author": "Martin K.",
        "reviews.r1.time": "před 2 týdny",
        "reviews.r2.text": "Perfektní pro přestup. Tiché, čisté a blízko letiště. Parkování zdarma bylo velké plus.",
        "reviews.r2.author": "Anna S.",
        "reviews.r2.time": "před měsícem",
        "reviews.r3.text": "Překvapivě příjemný penzion. Moderní vybavení, rychlé Wi-Fi a skvělá poloha. Doporučuji!",
        "reviews.r3.author": "Peter M.",
        "reviews.r3.time": "před měsícem",
        "reviews.r4.text": "Útulné a čisté ubytování. Majitelé jsou velmi vstřícní a ochotní. Skvělá volba pro cestovatele.",
        "reviews.r4.author": "Eva D.",
        "reviews.r4.time": "před 3 měsíci",
        "reviews.r5.text": "Výborný poměr cena/kvalita. Blízko letiště i do centra Prahy. Wi-Fi fungovalo perfektně.",
        "reviews.r5.author": "Tomáš R.",
        "reviews.r5.time": "před 3 měsíci",
        "cta.tag": "Poloha",
        "cta.title1": "Rezervujte si ",
        "cta.title2": "pobyt ještě dnes",
        "cta.desc": "Komfortní pokoje od 1 290 Kč za noc. Ideální poloha u letiště Václava Havla.",
        "cta.cta1": "Zobrazit pokoje",
        "cta.cta2": "Kontaktovat nás",
        "cta.from": "od",
        "cta.pernight": "/ noc",
        "rooms.tag": "Pokoje",
        "rooms.title1": "Naše ",
        "rooms.title2": "pokoje",
        "rooms.intro": "Vyberte si z naší nabídky komfortních pokojů, každý s vlastní koupelnou a vším potřebným pro příjemný pobyt.",
        "rooms.r1.badge": "Nejoblíbenější",
        "rooms.r1.name": "Dvoulůžkový pokoj Standard",
        "rooms.r1.desc": "Útulný a komfortní pokoj s manželskou postelí, vlastní koupelnou a vším potřebným pro příjemný pobyt.",
        "rooms.r1.p1": "Manželská postel 160×200",
        "rooms.r1.p2": "Vlastní koupelna se sprchou",
        "rooms.r1.p3": "Bezplatné Wi-Fi",
        "rooms.r1.p4": "Klimatizace",
        "rooms.r1.p5": "TV s plochou obrazovkou",
        "rooms.r1.p6": "Základní toaletní potřeby",
        "rooms.r2.badge": "Rodinný",
        "rooms.r2.name": "Třílůžkový pokoj",
        "rooms.r2.desc": "Prostorný pokoj ideální pro rodiny nebo skupiny přátel. Nabízí pohodlný prostor pro tři hosty.",
        "rooms.r2.p1": "Dvoulůžko + přistýlka",
        "rooms.r2.p2": "Vlastní koupelna se sprchou",
        "rooms.r2.p3": "Bezplatné Wi-Fi",
        "rooms.r2.p4": "Klimatizace",
        "rooms.r2.p5": "TV s plochou obrazovkou",
        "rooms.r2.p6": "Základní toaletní potřeby",
        "rooms.r3.badge": "Premium",
        "rooms.r3.name": "Apartmán s kuchyňkou",
        "rooms.r3.desc": "Luxusní apartmán s oddělenou kuchyňkou a obývacím prostorem. Ideální pro delší pobyty.",
        "rooms.r3.p1": "Manželská postel King-size",
        "rooms.r3.p2": "Kuchyňský kout",
        "rooms.r3.p3": "Bezplatné Wi-Fi",
        "rooms.r3.p4": "Klimatizace",
        "rooms.r3.p5": "TV + obývací prostor",
        "rooms.r3.p6": "Snídaně v ceně",
        "rooms.pernight": "Kč / noc",
        "rooms.bookbtn": "Rezervovat pokoj",
        "rooms.booking.tag": "Rezervace",
        "rooms.booking.title1": "Jak ",
        "rooms.booking.title2": "rezervovat",
        "rooms.booking.s1.title": "Vyberte pokoj",
        "rooms.booking.s1.desc": "Prohlédněte si naši nabídku a vyberte pokoj, který vám vyhovuje.",
        "rooms.booking.s2.title": "Kontaktujte nás",
        "rooms.booking.s2.desc": "Zavolejte nebo napište e-mail s termínem a počtem hostů.",
        "rooms.booking.s3.title": "Potvrzení",
        "rooms.booking.s3.desc": "Potvrdíme vaši rezervaci a zašleme veškeré potřebné informace.",
        "gallery.tag": "Galerie",
        "gallery.title1": "Prohlédněte si náš penzion",
        "gallery.intro": "Podívejte se, jak u nás vypadají pokoje, společné prostory i okolí.",
        "gallery.all": "Vše",
        "gallery.rooms": "Pokoje",
        "gallery.exterior": "Exteriér",
        "gallery.common": "Společné prostory",
        "gallery.surround": "Okolí",
        "contact.tag": "Kontakt",
        "contact.title1": "Máte ",
        "contact.title2": "dotaz?",
        "contact.intro": "Napište nám nebo zavolejte – rádi vám se vším pomůžeme.",
        "contact.address": "Adresa",
        "contact.phone": "Telefon",
        "contact.checkout": "do 10:00",
        "contact.form.title": "Napište nám",
        "contact.form.name": "Jméno a příjmení",
        "contact.form.selectsubj": "Vyberte předmět",
        "contact.form.general": "Obecný dotaz",
        "contact.form.complaint": "Stížnost",
        "contact.form.other": "Jiné",
        "contact.form.subject": "Předmět",
        "contact.form.message": "Vaše zpráva",
        "contact.form.submit": "Odeslat zprávu",
        "contact.form.success.title": "Zpráva odeslána!",
        "contact.form.success.text": "Odpovíme vám co nejdříve. Děkujeme!",
        "contact.location.tag": "Poloha",
        "contact.location.title1": "Strategická ",
        "contact.location.title2": "poloha",
        "contact.loc1.name": "Letiště Václava Havla",
        "contact.loc1.dist": "10 min autem",
        "contact.loc2.name": "Katedrála sv. Víta",
        "contact.loc3.name": "MHD zastávka",
        "contact.loc3.dist": "2 min pěšky",
        "contact.loc4.dist": "5 min autem",
        "footer.desc": "Komfortní ubytování v Praze 6, blízko letiště Václava Havla.",
        "footer.pages": "Stránky",
        "footer.copy": "Všechna práva vyhrazena."
    },
    en: {
        "nav.home": "Home",
        "nav.rooms": "Rooms",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "nav.book": "Book Now",
        "hero.badge": "10 min from Václav Havel Airport",
        "hero.title1": "Comfortable stays ",
        "hero.title2": "near Prague Airport",
        "hero.subtitle": "Modern guesthouse ideally located for travelers. Quiet rooms, fast Wi-Fi, and free parking.",
        "hero.cta1": "View Rooms",
        "hero.cta2": "Contact Us",
        "hero.stat1.num": "4.8",
        "hero.stat1.label": "Guest Rating",
        "hero.stat2.num": "10 min",
        "hero.stat2.label": "To Airport",
        "hero.stat3.num": "33+",
        "hero.stat3.label": "Reviews",
        "about.tag": "About Us",
        "about.title1": "Your home ",
        "about.title2": "near the airport",
        "about.p1": "Airport Rooms offers comfortable accommodation in a quiet area of Prague 6, just 10 minutes from Václav Havel Airport. Ideal for travelers with early or late flights.",
        "about.p2": "Each room features modern furniture, a quality bed, and a private bathroom. We offer free Wi-Fi, parking, and breakfast on request.",
        "about.feat1.title": "Quiet Location",
        "about.feat1.desc": "Peaceful guesthouse in a residential area",
        "about.feat2.title": "Easy Transport",
        "about.feat2.desc": "Public transport stop 2 min walk",
        "about.feat3.title": "Flexible Check-in",
        "about.feat3.desc": "Arrival from 14:00 to 22:00",
        "about.cta": "Learn more",
        "about.rating": "on Google",
        "marquee.1": "Near Airport",
        "marquee.2": "Free Wi-Fi",
        "marquee.3": "Free Parking",
        "marquee.4": "Breakfast",
        "marquee.5": "Quiet Rooms",
        "marquee.6": "Flexible Check-in",
        "services.tag": "Services",
        "services.title1": "What we ",
        "services.title2": "offer",
        "services.s1.title": "Free Wi-Fi",
        "services.s1.desc": "High-speed connection in all rooms and common areas.",
        "services.s2.title": "Free Parking",
        "services.s2.desc": "Private parking right at the guesthouse, perfect for travelers with a car.",
        "services.s3.title": "Breakfast",
        "services.s3.desc": "Continental breakfast served every morning on request.",
        "services.s4.title": "Air Conditioning",
        "services.s4.desc": "Individually adjustable air conditioning in every room.",
        "services.s5.title": "Airport Transfer",
        "services.s5.desc": "We arrange comfortable transfers to and from the airport.",
        "services.s6.title": "Luggage Storage",
        "services.s6.desc": "Secure luggage storage for guests with later flights.",
        "reviews.tag": "Reviews",
        "reviews.title1": "What our ",
        "reviews.title2": "guests say",
        "reviews.sub": "Rating 4.8/5 based on 33 reviews on",
        "reviews.r1.text": "Great accommodation near the airport. Clean room, comfortable bed, and very friendly staff. Will definitely return!",
        "reviews.r1.author": "Martin K.",
        "reviews.r1.time": "2 weeks ago",
        "reviews.r2.text": "Perfect for a layover. Quiet, clean, and close to the airport. Free parking was a big plus.",
        "reviews.r2.author": "Anna S.",
        "reviews.r2.time": "1 month ago",
        "reviews.r3.text": "Surprisingly pleasant guesthouse. Modern amenities, fast Wi-Fi, and great location. Highly recommend!",
        "reviews.r3.author": "Peter M.",
        "reviews.r3.time": "1 month ago",
        "reviews.r4.text": "Cozy and clean accommodation. The owners are very welcoming and helpful. Great choice for travelers.",
        "reviews.r4.author": "Eva D.",
        "reviews.r4.time": "3 months ago",
        "reviews.r5.text": "Excellent value for money. Close to the airport and Prague center. Wi-Fi worked perfectly.",
        "reviews.r5.author": "Tomáš R.",
        "reviews.r5.time": "3 months ago",
        "cta.tag": "Location",
        "cta.title1": "Book your ",
        "cta.title2": "stay today",
        "cta.desc": "Comfortable rooms from 1,290 CZK per night. Ideal location near Václav Havel Airport.",
        "cta.cta1": "View Rooms",
        "cta.cta2": "Contact Us",
        "cta.from": "from",
        "cta.pernight": "/ night",
        "rooms.tag": "Rooms",
        "rooms.title1": "Our ",
        "rooms.title2": "rooms",
        "rooms.intro": "Choose from our selection of comfortable rooms, each with a private bathroom and everything you need for a pleasant stay.",
        "rooms.r1.badge": "Most Popular",
        "rooms.r1.name": "Double Room Standard",
        "rooms.r1.desc": "Cozy and comfortable room with a double bed, private bathroom, and all essentials for a pleasant stay.",
        "rooms.r1.p1": "Double bed 160×200",
        "rooms.r1.p2": "Private bathroom with shower",
        "rooms.r1.p3": "Free Wi-Fi",
        "rooms.r1.p4": "Air conditioning",
        "rooms.r1.p5": "Flat screen TV",
        "rooms.r1.p6": "Basic toiletries",
        "rooms.r2.badge": "Family",
        "rooms.r2.name": "Triple Room",
        "rooms.r2.desc": "Spacious room ideal for families or groups of friends. Offers comfortable space for three guests.",
        "rooms.r2.p1": "Double bed + extra bed",
        "rooms.r2.p2": "Private bathroom with shower",
        "rooms.r2.p3": "Free Wi-Fi",
        "rooms.r2.p4": "Air conditioning",
        "rooms.r2.p5": "Flat screen TV",
        "rooms.r2.p6": "Basic toiletries",
        "rooms.r3.badge": "Premium",
        "rooms.r3.name": "Apartment with Kitchenette",
        "rooms.r3.desc": "Luxurious apartment with a separate kitchenette and living area. Ideal for longer stays.",
        "rooms.r3.p1": "King-size bed",
        "rooms.r3.p2": "Kitchenette",
        "rooms.r3.p3": "Free Wi-Fi",
        "rooms.r3.p4": "Air conditioning",
        "rooms.r3.p5": "TV + living area",
        "rooms.r3.p6": "Breakfast included",
        "rooms.pernight": "CZK / night",
        "rooms.bookbtn": "Book Room",
        "rooms.booking.tag": "Booking",
        "rooms.booking.title1": "How to ",
        "rooms.booking.title2": "book",
        "rooms.booking.s1.title": "Choose a Room",
        "rooms.booking.s1.desc": "Browse our selection and pick the room that suits you.",
        "rooms.booking.s2.title": "Contact Us",
        "rooms.booking.s2.desc": "Call or email with your dates and number of guests.",
        "rooms.booking.s3.title": "Confirmation",
        "rooms.booking.s3.desc": "We'll confirm your reservation and send all necessary information.",
        "gallery.tag": "Gallery",
        "gallery.title1": "Explore Our Guesthouse",
        "gallery.intro": "Take a look at our rooms, common areas, and surroundings.",
        "gallery.all": "All",
        "gallery.rooms": "Rooms",
        "gallery.exterior": "Exterior",
        "gallery.common": "Common Areas",
        "gallery.surround": "Surroundings",
        "contact.tag": "Contact",
        "contact.title1": "Have a ",
        "contact.title2": "question?",
        "contact.intro": "Write to us or call – we're happy to help with anything.",
        "contact.address": "Address",
        "contact.phone": "Phone",
        "contact.checkout": "by 10:00",
        "contact.form.title": "Write to Us",
        "contact.form.name": "Full Name",
        "contact.form.selectsubj": "Select subject",
        "contact.form.general": "General inquiry",
        "contact.form.complaint": "Complaint",
        "contact.form.other": "Other",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your message",
        "contact.form.submit": "Send Message",
        "contact.form.success.title": "Message sent!",
        "contact.form.success.text": "We'll reply as soon as possible. Thank you!",
        "contact.location.tag": "Location",
        "contact.location.title1": "Strategic ",
        "contact.location.title2": "location",
        "contact.loc1.name": "Václav Havel Airport",
        "contact.loc1.dist": "10 min by car",
        "contact.loc2.name": "St. Vitus Cathedral",
        "contact.loc3.name": "Public Transport Stop",
        "contact.loc3.dist": "2 min walk",
        "contact.loc4.dist": "5 min by car",
        "footer.desc": "Comfortable accommodation in Prague 6, near Václav Havel Airport.",
        "footer.pages": "Pages",
        "footer.copy": "All rights reserved."
    },
    de: {
        "nav.home": "Startseite",
        "nav.rooms": "Zimmer",
        "nav.gallery": "Galerie",
        "nav.contact": "Kontakt",
        "nav.book": "Buchen",
        "hero.badge": "10 Min. vom Flughafen Václav Havel",
        "hero.title1": "Komfortable Unterkunft ",
        "hero.title2": "am Flughafen Prag",
        "hero.subtitle": "Moderne Pension in idealer Lage für Reisende. Ruhige Zimmer, schnelles WLAN und kostenlose Parkplätze.",
        "hero.cta1": "Zimmer ansehen",
        "hero.cta2": "Kontaktieren Sie uns",
        "hero.stat1.num": "4.8",
        "hero.stat1.label": "Gästebewertung",
        "hero.stat2.num": "10 Min.",
        "hero.stat2.label": "Zum Flughafen",
        "hero.stat3.num": "33+",
        "hero.stat3.label": "Bewertungen",
        "about.tag": "Über uns",
        "about.title1": "Ihr Zuhause ",
        "about.title2": "nahe dem Flughafen",
        "about.p1": "Airport Rooms bietet komfortable Unterkunft in einer ruhigen Lage in Prag 6, nur 10 Minuten vom Flughafen Václav Havel entfernt. Ideal für Reisende mit frühen oder späten Flügen.",
        "about.p2": "Jedes Zimmer verfügt über moderne Möbel, ein hochwertiges Bett und ein eigenes Bad. Wir bieten kostenloses WLAN, Parkplätze und Frühstück auf Anfrage.",
        "about.feat1.title": "Ruhige Lage",
        "about.feat1.desc": "Ruhige Pension in Wohngegend",
        "about.feat2.title": "Gute Anbindung",
        "about.feat2.desc": "Haltestelle 2 Min. zu Fuß",
        "about.feat3.title": "Flexibler Check-in",
        "about.feat3.desc": "Ankunft von 14:00 bis 22:00",
        "about.cta": "Mehr erfahren",
        "about.rating": "auf Google",
        "marquee.1": "Nahe am Flughafen",
        "marquee.2": "Gratis WLAN",
        "marquee.3": "Gratis Parkplatz",
        "marquee.4": "Frühstück",
        "marquee.5": "Ruhige Zimmer",
        "marquee.6": "Flexibler Check-in",
        "services.tag": "Leistungen",
        "services.title1": "Was wir ",
        "services.title2": "bieten",
        "services.s1.title": "Kostenloses WLAN",
        "services.s1.desc": "Highspeed-Internet in allen Zimmern und Gemeinschaftsbereichen.",
        "services.s2.title": "Kostenlose Parkplätze",
        "services.s2.desc": "Privater Parkplatz direkt an der Pension, ideal für Reisende mit Auto.",
        "services.s3.title": "Frühstück",
        "services.s3.desc": "Kontinentales Frühstück jeden Morgen auf Anfrage.",
        "services.s4.title": "Klimaanlage",
        "services.s4.desc": "Individuell einstellbare Klimaanlage in jedem Zimmer.",
        "services.s5.title": "Flughafentransfer",
        "services.s5.desc": "Wir organisieren bequeme Transfers zum und vom Flughafen.",
        "services.s6.title": "Gepäckaufbewahrung",
        "services.s6.desc": "Sichere Gepäckaufbewahrung für Gäste mit späteren Flügen.",
        "reviews.tag": "Bewertungen",
        "reviews.title1": "Was unsere ",
        "reviews.title2": "Gäste sagen",
        "reviews.sub": "Bewertung 4.8/5 basierend auf 33 Bewertungen auf",
        "reviews.r1.text": "Tolle Unterkunft in Flughafennähe. Sauberes Zimmer, bequemes Bett und sehr freundliches Personal.",
        "reviews.r1.author": "Martin K.",
        "reviews.r1.time": "vor 2 Wochen",
        "reviews.r2.text": "Perfekt für einen Zwischenstopp. Ruhig, sauber und nah am Flughafen. Kostenlose Parkplätze waren ein großes Plus.",
        "reviews.r2.author": "Anna S.",
        "reviews.r2.time": "vor 1 Monat",
        "reviews.r3.text": "Überraschend angenehme Pension. Moderne Ausstattung, schnelles WLAN und tolle Lage. Sehr empfehlenswert!",
        "reviews.r3.author": "Peter M.",
        "reviews.r3.time": "vor 1 Monat",
        "reviews.r4.text": "Gemütliche und saubere Unterkunft. Die Besitzer sind sehr gastfreundlich und hilfsbereit.",
        "reviews.r4.author": "Eva D.",
        "reviews.r4.time": "vor 3 Monaten",
        "reviews.r5.text": "Ausgezeichnetes Preis-Leistungs-Verhältnis. Nah am Flughafen und am Prager Zentrum.",
        "reviews.r5.author": "Tomáš R.",
        "reviews.r5.time": "vor 3 Monaten",
        "cta.tag": "Standort",
        "cta.title1": "Buchen Sie Ihren ",
        "cta.title2": "Aufenthalt heute",
        "cta.desc": "Komfortable Zimmer ab 1.290 CZK pro Nacht. Ideale Lage am Flughafen Václav Havel.",
        "cta.cta1": "Zimmer ansehen",
        "cta.cta2": "Kontaktieren Sie uns",
        "cta.from": "ab",
        "cta.pernight": "/ Nacht",
        "rooms.tag": "Zimmer",
        "rooms.title1": "Unsere ",
        "rooms.title2": "Zimmer",
        "rooms.intro": "Wählen Sie aus unseren komfortablen Zimmern, jedes mit eigenem Bad und allem, was Sie für einen angenehmen Aufenthalt brauchen.",
        "rooms.r1.badge": "Beliebteste",
        "rooms.r1.name": "Doppelzimmer Standard",
        "rooms.r1.desc": "Gemütliches Zimmer mit Doppelbett, eigenem Bad und allem Nötigen für einen angenehmen Aufenthalt.",
        "rooms.r1.p1": "Doppelbett 160×200",
        "rooms.r1.p2": "Eigenes Bad mit Dusche",
        "rooms.r1.p3": "Kostenloses WLAN",
        "rooms.r1.p4": "Klimaanlage",
        "rooms.r1.p5": "Flachbild-TV",
        "rooms.r1.p6": "Grundlegende Toilettenartikel",
        "rooms.r2.badge": "Familie",
        "rooms.r2.name": "Dreibettzimmer",
        "rooms.r2.desc": "Geräumiges Zimmer, ideal für Familien oder Freundesgruppen.",
        "rooms.r2.p1": "Doppelbett + Zustellbett",
        "rooms.r2.p2": "Eigenes Bad mit Dusche",
        "rooms.r2.p3": "Kostenloses WLAN",
        "rooms.r2.p4": "Klimaanlage",
        "rooms.r2.p5": "Flachbild-TV",
        "rooms.r2.p6": "Grundlegende Toilettenartikel",
        "rooms.r3.badge": "Premium",
        "rooms.r3.name": "Apartment mit Küchenzeile",
        "rooms.r3.desc": "Luxuriöses Apartment mit separater Küchenzeile und Wohnbereich. Ideal für längere Aufenthalte.",
        "rooms.r3.p1": "Kingsize-Bett",
        "rooms.r3.p2": "Küchenzeile",
        "rooms.r3.p3": "Kostenloses WLAN",
        "rooms.r3.p4": "Klimaanlage",
        "rooms.r3.p5": "TV + Wohnbereich",
        "rooms.r3.p6": "Frühstück inklusive",
        "rooms.pernight": "CZK / Nacht",
        "rooms.bookbtn": "Zimmer buchen",
        "rooms.booking.tag": "Buchung",
        "rooms.booking.title1": "So ",
        "rooms.booking.title2": "buchen Sie",
        "rooms.booking.s1.title": "Zimmer wählen",
        "rooms.booking.s1.desc": "Sehen Sie sich unser Angebot an und wählen Sie das passende Zimmer.",
        "rooms.booking.s2.title": "Kontakt aufnehmen",
        "rooms.booking.s2.desc": "Rufen Sie an oder schreiben Sie uns mit Ihren Daten und Gästezahl.",
        "rooms.booking.s3.title": "Bestätigung",
        "rooms.booking.s3.desc": "Wir bestätigen Ihre Reservierung und senden alle nötigen Informationen.",
        "gallery.tag": "Galerie",
        "gallery.title1": "Entdecken Sie unsere Pension",
        "gallery.intro": "Sehen Sie sich unsere Zimmer, Gemeinschaftsbereiche und die Umgebung an.",
        "gallery.all": "Alle",
        "gallery.rooms": "Zimmer",
        "gallery.exterior": "Außen",
        "gallery.common": "Gemeinschaftsbereiche",
        "gallery.surround": "Umgebung",
        "contact.tag": "Kontakt",
        "contact.title1": "Haben Sie eine ",
        "contact.title2": "Frage?",
        "contact.intro": "Schreiben Sie uns oder rufen Sie an – wir helfen Ihnen gerne weiter.",
        "contact.address": "Adresse",
        "contact.phone": "Telefon",
        "contact.checkout": "bis 10:00",
        "contact.form.title": "Schreiben Sie uns",
        "contact.form.name": "Vollständiger Name",
        "contact.form.selectsubj": "Betreff wählen",
        "contact.form.general": "Allgemeine Anfrage",
        "contact.form.complaint": "Beschwerde",
        "contact.form.other": "Sonstiges",
        "contact.form.subject": "Betreff",
        "contact.form.message": "Ihre Nachricht",
        "contact.form.submit": "Nachricht senden",
        "contact.form.success.title": "Nachricht gesendet!",
        "contact.form.success.text": "Wir antworten so schnell wie möglich. Danke!",
        "contact.location.tag": "Standort",
        "contact.location.title1": "Strategische ",
        "contact.location.title2": "Lage",
        "contact.loc1.name": "Flughafen Václav Havel",
        "contact.loc1.dist": "10 Min. mit dem Auto",
        "contact.loc2.name": "Veitsdom",
        "contact.loc3.name": "Haltestelle",
        "contact.loc3.dist": "2 Min. zu Fuß",
        "contact.loc4.dist": "5 Min. mit dem Auto",
        "footer.desc": "Komfortable Unterkunft in Prag 6, nahe dem Flughafen Václav Havel.",
        "footer.pages": "Seiten",
        "footer.copy": "Alle Rechte vorbehalten."
    },
    ru: {
        "nav.home": "Главная",
        "nav.rooms": "Номера",
        "nav.gallery": "Галерея",
        "nav.contact": "Контакт",
        "nav.book": "Бронировать",
        "hero.badge": "10 мин от аэропорта Вацлава Гавела",
        "hero.title1": "Комфортное проживание ",
        "hero.title2": "у аэропорта Праги",
        "hero.subtitle": "Современный пансион в удобном расположении для путешественников. Тихие номера, быстрый Wi-Fi и бесплатная парковка.",
        "hero.cta1": "Смотреть номера",
        "hero.cta2": "Связаться с нами",
        "hero.stat1.num": "4.8",
        "hero.stat1.label": "Рейтинг гостей",
        "hero.stat2.num": "10 мин",
        "hero.stat2.label": "До аэропорта",
        "hero.stat3.num": "33+",
        "hero.stat3.label": "Отзывов",
        "about.tag": "О нас",
        "about.title1": "Ваш дом ",
        "about.title2": "рядом с аэропортом",
        "about.p1": "Airport Rooms предлагает комфортное проживание в тихом районе Праги 6, всего в 10 минутах от аэропорта Вацлава Гавела. Идеально для путешественников с ранними или поздними рейсами.",
        "about.p2": "Каждый номер оснащён современной мебелью, качественной кроватью и собственной ванной комнатой. Мы предлагаем бесплатный Wi-Fi, парковку и завтрак по запросу.",
        "about.feat1.title": "Тихое расположение",
        "about.feat1.desc": "Тихий пансион в жилом районе",
        "about.feat2.title": "Удобный транспорт",
        "about.feat2.desc": "Остановка транспорта в 2 мин ходьбы",
        "about.feat3.title": "Гибкий заселение",
        "about.feat3.desc": "Заезд с 14:00 до 22:00",
        "about.cta": "Подробнее",
        "about.rating": "на Google",
        "marquee.1": "Рядом с аэропортом",
        "marquee.2": "Бесплатный Wi-Fi",
        "marquee.3": "Бесплатная парковка",
        "marquee.4": "Завтрак",
        "marquee.5": "Тихие номера",
        "marquee.6": "Гибкий заселение",
        "services.tag": "Услуги",
        "services.title1": "Что мы ",
        "services.title2": "предлагаем",
        "services.s1.title": "Бесплатный Wi-Fi",
        "services.s1.desc": "Высокоскоростное подключение во всех номерах и общих зонах.",
        "services.s2.title": "Бесплатная парковка",
        "services.s2.desc": "Частная парковка прямо у пансиона, идеально для путешественников на автомобиле.",
        "services.s3.title": "Завтрак",
        "services.s3.desc": "Континентальный завтрак подаётся каждое утро по запросу.",
        "services.s4.title": "Кондиционер",
        "services.s4.desc": "Индивидуально настраиваемый кондиционер в каждом номере.",
        "services.s5.title": "Трансфер в аэропорт",
        "services.s5.desc": "Организуем комфортный трансфер в аэропорт и обратно.",
        "services.s6.title": "Хранение багажа",
        "services.s6.desc": "Безопасное хранение багажа для гостей с поздним вылетом.",
        "reviews.tag": "Отзывы",
        "reviews.title1": "Что говорят ",
        "reviews.title2": "наши гости",
        "reviews.sub": "Рейтинг 4.8/5 на основе 33 отзывов на",
        "reviews.r1.text": "Отличное жильё рядом с аэропортом. Чистый номер, удобная кровать и очень приветливый персонал.",
        "reviews.r1.author": "Мартин К.",
        "reviews.r1.time": "2 недели назад",
        "reviews.r2.text": "Идеально для пересадки. Тихо, чисто и близко к аэропорту. Бесплатная парковка — большой плюс.",
        "reviews.r2.author": "Анна С.",
        "reviews.r2.time": "1 месяц назад",
        "reviews.r3.text": "Удивительно приятный пансион. Современное оснащение, быстрый Wi-Fi и отличное расположение.",
        "reviews.r3.author": "Пётр М.",
        "reviews.r3.time": "1 месяц назад",
        "reviews.r4.text": "Уютное и чистое жильё. Хозяева очень гостеприимные и отзывчивые. Отличный выбор для путешественников.",
        "reviews.r4.author": "Ева Д.",
        "reviews.r4.time": "3 месяца назад",
        "reviews.r5.text": "Отличное соотношение цены и качества. Близко к аэропорту и центру Праги.",
        "reviews.r5.author": "Томаш Р.",
        "reviews.r5.time": "3 месяца назад",
        "cta.tag": "Расположение",
        "cta.title1": "Забронируйте ",
        "cta.title2": "проживание сегодня",
        "cta.desc": "Комфортные номера от 1 290 CZK за ночь. Идеальное расположение у аэропорта Вацлава Гавела.",
        "cta.cta1": "Смотреть номера",
        "cta.cta2": "Связаться с нами",
        "cta.from": "от",
        "cta.pernight": "/ ночь",
        "rooms.tag": "Номера",
        "rooms.title1": "Наши ",
        "rooms.title2": "номера",
        "rooms.intro": "Выберите из нашего ассортимента комфортных номеров, каждый с собственной ванной и всем необходимым.",
        "rooms.r1.badge": "Самый популярный",
        "rooms.r1.name": "Двухместный стандарт",
        "rooms.r1.desc": "Уютный номер с двуспальной кроватью, собственной ванной и всем необходимым.",
        "rooms.r1.p1": "Двуспальная кровать 160×200",
        "rooms.r1.p2": "Собственная ванная с душем",
        "rooms.r1.p3": "Бесплатный Wi-Fi",
        "rooms.r1.p4": "Кондиционер",
        "rooms.r1.p5": "ТВ с плоским экраном",
        "rooms.r1.p6": "Базовые туалетные принадлежности",
        "rooms.r2.badge": "Семейный",
        "rooms.r2.name": "Трёхместный номер",
        "rooms.r2.desc": "Просторный номер, идеальный для семей или групп друзей.",
        "rooms.r2.p1": "Двуспальная + доп. кровать",
        "rooms.r2.p2": "Собственная ванная с душем",
        "rooms.r2.p3": "Бесплатный Wi-Fi",
        "rooms.r2.p4": "Кондиционер",
        "rooms.r2.p5": "ТВ с плоским экраном",
        "rooms.r2.p6": "Базовые туалетные принадлежности",
        "rooms.r3.badge": "Премиум",
        "rooms.r3.name": "Апартамент с кухней",
        "rooms.r3.desc": "Роскошный апартамент с отдельной кухней и гостиной. Идеально для длительного проживания.",
        "rooms.r3.p1": "Кровать King-size",
        "rooms.r3.p2": "Кухонный уголок",
        "rooms.r3.p3": "Бесплатный Wi-Fi",
        "rooms.r3.p4": "Кондиционер",
        "rooms.r3.p5": "ТВ + гостиная",
        "rooms.r3.p6": "Завтрак включён",
        "rooms.pernight": "CZK / ночь",
        "rooms.bookbtn": "Забронировать",
        "rooms.booking.tag": "Бронирование",
        "rooms.booking.title1": "Как ",
        "rooms.booking.title2": "забронировать",
        "rooms.booking.s1.title": "Выберите номер",
        "rooms.booking.s1.desc": "Ознакомьтесь с нашим предложением и выберите подходящий номер.",
        "rooms.booking.s2.title": "Свяжитесь с нами",
        "rooms.booking.s2.desc": "Позвоните или напишите с датами и количеством гостей.",
        "rooms.booking.s3.title": "Подтверждение",
        "rooms.booking.s3.desc": "Мы подтвердим бронирование и отправим всю необходимую информацию.",
        "gallery.tag": "Галерея",
        "gallery.title1": "Посмотрите наш пансион",
        "gallery.intro": "Посмотрите, как выглядят наши номера, общие зоны и окрестности.",
        "gallery.all": "Все",
        "gallery.rooms": "Номера",
        "gallery.exterior": "Экстерьер",
        "gallery.common": "Общие зоны",
        "gallery.surround": "Окрестности",
        "contact.tag": "Контакт",
        "contact.title1": "Есть ",
        "contact.title2": "вопрос?",
        "contact.intro": "Напишите нам или позвоните – мы с радостью поможем.",
        "contact.address": "Адрес",
        "contact.phone": "Телефон",
        "contact.checkout": "до 10:00",
        "contact.form.title": "Напишите нам",
        "contact.form.name": "Имя и фамилия",
        "contact.form.selectsubj": "Выберите тему",
        "contact.form.general": "Общий вопрос",
        "contact.form.complaint": "Жалоба",
        "contact.form.other": "Другое",
        "contact.form.subject": "Тема",
        "contact.form.message": "Ваше сообщение",
        "contact.form.submit": "Отправить сообщение",
        "contact.form.success.title": "Сообщение отправлено!",
        "contact.form.success.text": "Мы ответим как можно скорее. Спасибо!",
        "contact.location.tag": "Расположение",
        "contact.location.title1": "Стратегическое ",
        "contact.location.title2": "расположение",
        "contact.loc1.name": "Аэропорт Вацлава Гавела",
        "contact.loc1.dist": "10 мин на авто",
        "contact.loc2.name": "Собор Св. Вита",
        "contact.loc3.name": "Остановка транспорта",
        "contact.loc3.dist": "2 мин пешком",
        "contact.loc4.dist": "5 мин на авто",
        "footer.desc": "Комфортное проживание в Праге 6, рядом с аэропортом Вацлава Гавела.",
        "footer.pages": "Страницы",
        "footer.copy": "Все права защищены."
    },
    it: {
        "nav.home": "Home",
        "nav.rooms": "Camere",
        "nav.gallery": "Galleria",
        "nav.contact": "Contatto",
        "nav.book": "Prenota",
        "hero.badge": "10 min dall'aeroporto Václav Havel",
        "hero.title1": "Soggiorno confortevole ",
        "hero.title2": "vicino all'aeroporto di Praga",
        "hero.subtitle": "Pensione moderna in posizione ideale per i viaggiatori. Camere tranquille, Wi-Fi veloce e parcheggio gratuito.",
        "hero.cta1": "Vedi Camere",
        "hero.cta2": "Contattaci",
        "hero.stat1.num": "4.8",
        "hero.stat1.label": "Valutazione ospiti",
        "hero.stat2.num": "10 min",
        "hero.stat2.label": "All'aeroporto",
        "hero.stat3.num": "33+",
        "hero.stat3.label": "Recensioni",
        "about.tag": "Chi siamo",
        "about.title1": "La tua casa ",
        "about.title2": "vicino all'aeroporto",
        "about.p1": "Airport Rooms offre alloggi confortevoli in una zona tranquilla di Praga 6, a soli 10 minuti dall'aeroporto Václav Havel. Ideale per viaggiatori con voli mattutini o serali.",
        "about.p2": "Ogni camera è dotata di arredi moderni, letto di qualità e bagno privato. Offriamo Wi-Fi gratuito, parcheggio e colazione su richiesta.",
        "about.feat1.title": "Posizione tranquilla",
        "about.feat1.desc": "Pensione tranquilla in zona residenziale",
        "about.feat2.title": "Trasporti comodi",
        "about.feat2.desc": "Fermata trasporto pubblico a 2 min",
        "about.feat3.title": "Check-in flessibile",
        "about.feat3.desc": "Arrivo dalle 14:00 alle 22:00",
        "about.cta": "Scopri di più",
        "about.rating": "su Google",
        "marquee.1": "Vicino all'aeroporto",
        "marquee.2": "Wi-Fi gratuito",
        "marquee.3": "Parcheggio gratuito",
        "marquee.4": "Colazione",
        "marquee.5": "Camere tranquille",
        "marquee.6": "Check-in flessibile",
        "services.tag": "Servizi",
        "services.title1": "Cosa ",
        "services.title2": "offriamo",
        "services.s1.title": "Wi-Fi gratuito",
        "services.s1.desc": "Connessione ad alta velocità in tutte le camere e aree comuni.",
        "services.s2.title": "Parcheggio gratuito",
        "services.s2.desc": "Parcheggio privato presso la pensione, ideale per chi viaggia in auto.",
        "services.s3.title": "Colazione",
        "services.s3.desc": "Colazione continentale servita ogni mattina su richiesta.",
        "services.s4.title": "Aria condizionata",
        "services.s4.desc": "Aria condizionata regolabile individualmente in ogni camera.",
        "services.s5.title": "Transfer aeroporto",
        "services.s5.desc": "Organizziamo transfer comodi da e per l'aeroporto.",
        "services.s6.title": "Deposito bagagli",
        "services.s6.desc": "Deposito bagagli sicuro per ospiti con voli successivi.",
        "reviews.tag": "Recensioni",
        "reviews.title1": "Cosa dicono ",
        "reviews.title2": "i nostri ospiti",
        "reviews.sub": "Valutazione 4.8/5 basata su 33 recensioni su",
        "reviews.r1.text": "Ottimo alloggio vicino all'aeroporto. Camera pulita, letto comodo e personale molto gentile.",
        "reviews.r1.author": "Martin K.",
        "reviews.r1.time": "2 settimane fa",
        "reviews.r2.text": "Perfetto per uno scalo. Tranquillo, pulito e vicino all'aeroporto. Il parcheggio gratuito è un grande plus.",
        "reviews.r2.author": "Anna S.",
        "reviews.r2.time": "1 mese fa",
        "reviews.r3.text": "Pensione sorprendentemente piacevole. Servizi moderni, Wi-Fi veloce e ottima posizione.",
        "reviews.r3.author": "Peter M.",
        "reviews.r3.time": "1 mese fa",
        "reviews.r4.text": "Alloggio accogliente e pulito. I proprietari sono molto ospitali e disponibili.",
        "reviews.r4.author": "Eva D.",
        "reviews.r4.time": "3 mesi fa",
        "reviews.r5.text": "Eccellente rapporto qualità-prezzo. Vicino all'aeroporto e al centro di Praga.",
        "reviews.r5.author": "Tomáš R.",
        "reviews.r5.time": "3 mesi fa",
        "cta.tag": "Posizione",
        "cta.title1": "Prenota il tuo ",
        "cta.title2": "soggiorno oggi",
        "cta.desc": "Camere confortevoli da 1.290 CZK a notte. Posizione ideale vicino all'aeroporto Václav Havel.",
        "cta.cta1": "Vedi Camere",
        "cta.cta2": "Contattaci",
        "cta.from": "da",
        "cta.pernight": "/ notte",
        "rooms.tag": "Camere",
        "rooms.title1": "Le nostre ",
        "rooms.title2": "camere",
        "rooms.intro": "Scegliete tra le nostre camere confortevoli, ognuna con bagno privato e tutto il necessario.",
        "rooms.r1.badge": "Più popolare",
        "rooms.r1.name": "Camera doppia Standard",
        "rooms.r1.desc": "Camera accogliente con letto matrimoniale, bagno privato e tutti i comfort.",
        "rooms.r1.p1": "Letto matrimoniale 160×200",
        "rooms.r1.p2": "Bagno privato con doccia",
        "rooms.r1.p3": "Wi-Fi gratuito",
        "rooms.r1.p4": "Aria condizionata",
        "rooms.r1.p5": "TV a schermo piatto",
        "rooms.r1.p6": "Set di cortesia",
        "rooms.r2.badge": "Famiglia",
        "rooms.r2.name": "Camera tripla",
        "rooms.r2.desc": "Camera spaziosa ideale per famiglie o gruppi di amici.",
        "rooms.r2.p1": "Letto matrimoniale + letto extra",
        "rooms.r2.p2": "Bagno privato con doccia",
        "rooms.r2.p3": "Wi-Fi gratuito",
        "rooms.r2.p4": "Aria condizionata",
        "rooms.r2.p5": "TV a schermo piatto",
        "rooms.r2.p6": "Set di cortesia",
        "rooms.r3.badge": "Premium",
        "rooms.r3.name": "Appartamento con angolo cottura",
        "rooms.r3.desc": "Appartamento di lusso con angolo cottura separato e zona giorno. Ideale per soggiorni lunghi.",
        "rooms.r3.p1": "Letto King-size",
        "rooms.r3.p2": "Angolo cottura",
        "rooms.r3.p3": "Wi-Fi gratuito",
        "rooms.r3.p4": "Aria condizionata",
        "rooms.r3.p5": "TV + zona giorno",
        "rooms.r3.p6": "Colazione inclusa",
        "rooms.pernight": "CZK / notte",
        "rooms.bookbtn": "Prenota camera",
        "rooms.booking.tag": "Prenotazione",
        "rooms.booking.title1": "Come ",
        "rooms.booking.title2": "prenotare",
        "rooms.booking.s1.title": "Scegli una camera",
        "rooms.booking.s1.desc": "Sfoglia la nostra offerta e scegli la camera adatta a te.",
        "rooms.booking.s2.title": "Contattaci",
        "rooms.booking.s2.desc": "Chiama o scrivi con le date e il numero di ospiti.",
        "rooms.booking.s3.title": "Conferma",
        "rooms.booking.s3.desc": "Confermeremo la prenotazione e invieremo tutte le informazioni necessarie.",
        "gallery.tag": "Galleria",
        "gallery.title1": "Scopri la nostra pensione",
        "gallery.intro": "Guarda le nostre camere, aree comuni e dintorni.",
        "gallery.all": "Tutto",
        "gallery.rooms": "Camere",
        "gallery.exterior": "Esterno",
        "gallery.common": "Aree comuni",
        "gallery.surround": "Dintorni",
        "contact.tag": "Contatto",
        "contact.title1": "Hai una ",
        "contact.title2": "domanda?",
        "contact.intro": "Scrivici o chiamaci – saremo felici di aiutarti.",
        "contact.address": "Indirizzo",
        "contact.phone": "Telefono",
        "contact.checkout": "entro le 10:00",
        "contact.form.title": "Scrivici",
        "contact.form.name": "Nome e cognome",
        "contact.form.selectsubj": "Seleziona oggetto",
        "contact.form.general": "Richiesta generale",
        "contact.form.complaint": "Reclamo",
        "contact.form.other": "Altro",
        "contact.form.subject": "Oggetto",
        "contact.form.message": "Il tuo messaggio",
        "contact.form.submit": "Invia messaggio",
        "contact.form.success.title": "Messaggio inviato!",
        "contact.form.success.text": "Risponderemo il prima possibile. Grazie!",
        "contact.location.tag": "Posizione",
        "contact.location.title1": "Posizione ",
        "contact.location.title2": "strategica",
        "contact.loc1.name": "Aeroporto Václav Havel",
        "contact.loc1.dist": "10 min in auto",
        "contact.loc2.name": "Cattedrale di San Vito",
        "contact.loc3.name": "Fermata trasporti",
        "contact.loc3.dist": "2 min a piedi",
        "contact.loc4.dist": "5 min in auto",
        "footer.desc": "Alloggio confortevole a Praga 6, vicino all'aeroporto Václav Havel.",
        "footer.pages": "Pagine",
        "footer.copy": "Tutti i diritti riservati."
    },
    pl: {
        "nav.home": "Strona główna",
        "nav.rooms": "Pokoje",
        "nav.gallery": "Galeria",
        "nav.contact": "Kontakt",
        "nav.book": "Rezerwacja",
        "hero.badge": "10 min od lotniska Václava Havla",
        "hero.title1": "Komfortowy nocleg ",
        "hero.title2": "przy lotnisku w Pradze",
        "hero.subtitle": "Nowoczesny pensjonat w idealnej lokalizacji dla podróżnych. Ciche pokoje, szybkie Wi-Fi i bezpłatny parking.",
        "hero.cta1": "Zobacz pokoje",
        "hero.cta2": "Skontaktuj się",
        "hero.stat1.num": "4.8",
        "hero.stat1.label": "Ocena gości",
        "hero.stat2.num": "10 min",
        "hero.stat2.label": "Na lotnisko",
        "hero.stat3.num": "33+",
        "hero.stat3.label": "Opinii",
        "about.tag": "O nas",
        "about.title1": "Twój dom ",
        "about.title2": "blisko lotniska",
        "about.p1": "Airport Rooms oferuje komfortowe zakwaterowanie w spokojnej okolicy Pragi 6, zaledwie 10 minut od lotniska Václava Havla. Idealny dla podróżnych z wczesnymi lub późnymi lotami.",
        "about.p2": "Każdy pokój wyposażony jest w nowoczesne meble, wygodne łóżko i własną łazienkę. Oferujemy bezpłatne Wi-Fi, parking i śniadanie na życzenie.",
        "about.feat1.title": "Cicha lokalizacja",
        "about.feat1.desc": "Spokojny pensjonat w dzielnicy mieszkalnej",
        "about.feat2.title": "Łatwy transport",
        "about.feat2.desc": "Przystanek komunikacji 2 min pieszo",
        "about.feat3.title": "Elastyczne zameldowanie",
        "about.feat3.desc": "Przyjazd od 14:00 do 22:00",
        "about.cta": "Dowiedz się więcej",
        "about.rating": "na Google",
        "marquee.1": "Blisko lotniska",
        "marquee.2": "Darmowe Wi-Fi",
        "marquee.3": "Darmowy parking",
        "marquee.4": "Śniadanie",
        "marquee.5": "Ciche pokoje",
        "marquee.6": "Elastyczne zameldowanie",
        "services.tag": "Usługi",
        "services.title1": "Co ",
        "services.title2": "oferujemy",
        "services.s1.title": "Darmowe Wi-Fi",
        "services.s1.desc": "Szybkie połączenie internetowe we wszystkich pokojach i częściach wspólnych.",
        "services.s2.title": "Darmowy parking",
        "services.s2.desc": "Prywatny parking przy pensjonacie, idealny dla podróżnych samochodem.",
        "services.s3.title": "Śniadanie",
        "services.s3.desc": "Śniadanie kontynentalne serwowane każdego ranka na życzenie.",
        "services.s4.title": "Klimatyzacja",
        "services.s4.desc": "Indywidualnie regulowana klimatyzacja w każdym pokoju.",
        "services.s5.title": "Transfer na lotnisko",
        "services.s5.desc": "Organizujemy wygodne transfery na i z lotniska.",
        "services.s6.title": "Przechowalnia bagażu",
        "services.s6.desc": "Bezpieczna przechowalnia bagażu dla gości z późniejszymi lotami.",
        "reviews.tag": "Opinie",
        "reviews.title1": "Co mówią ",
        "reviews.title2": "nasi goście",
        "reviews.sub": "Ocena 4.8/5 na podstawie 33 opinii na",
        "reviews.r1.text": "Świetne zakwaterowanie blisko lotniska. Czysty pokój, wygodne łóżko i bardzo miły personel.",
        "reviews.r1.author": "Martin K.",
        "reviews.r1.time": "2 tygodnie temu",
        "reviews.r2.text": "Idealne na przesiadkę. Cicho, czysto i blisko lotniska. Darmowy parking to duży plus.",
        "reviews.r2.author": "Anna S.",
        "reviews.r2.time": "1 miesiąc temu",
        "reviews.r3.text": "Zaskakująco przyjemny pensjonat. Nowoczesne wyposażenie, szybkie Wi-Fi i świetna lokalizacja.",
        "reviews.r3.author": "Peter M.",
        "reviews.r3.time": "1 miesiąc temu",
        "reviews.r4.text": "Przytulne i czyste zakwaterowanie. Właściciele są bardzo gościnni i pomocni.",
        "reviews.r4.author": "Eva D.",
        "reviews.r4.time": "3 miesiące temu",
        "reviews.r5.text": "Doskonały stosunek ceny do jakości. Blisko lotniska i centrum Pragi.",
        "reviews.r5.author": "Tomáš R.",
        "reviews.r5.time": "3 miesiące temu",
        "cta.tag": "Lokalizacja",
        "cta.title1": "Zarezerwuj ",
        "cta.title2": "pobyt już dziś",
        "cta.desc": "Komfortowe pokoje od 1 290 CZK za noc. Idealna lokalizacja przy lotnisku Václava Havla.",
        "cta.cta1": "Zobacz pokoje",
        "cta.cta2": "Skontaktuj się",
        "cta.from": "od",
        "cta.pernight": "/ noc",
        "rooms.tag": "Pokoje",
        "rooms.title1": "Nasze ",
        "rooms.title2": "pokoje",
        "rooms.intro": "Wybierz spośród naszych komfortowych pokoi, każdy z własną łazienką i wszystkim, czego potrzebujesz.",
        "rooms.r1.badge": "Najpopularniejszy",
        "rooms.r1.name": "Pokój dwuosobowy Standard",
        "rooms.r1.desc": "Przytulny pokój z łóżkiem podwójnym, własną łazienką i wszelkimi wygodami.",
        "rooms.r1.p1": "Łóżko podwójne 160×200",
        "rooms.r1.p2": "Własna łazienka z prysznicem",
        "rooms.r1.p3": "Darmowe Wi-Fi",
        "rooms.r1.p4": "Klimatyzacja",
        "rooms.r1.p5": "Telewizor z płaskim ekranem",
        "rooms.r1.p6": "Podstawowe przybory toaletowe",
        "rooms.r2.badge": "Rodzinny",
        "rooms.r2.name": "Pokój trzyosobowy",
        "rooms.r2.desc": "Przestronny pokój idealny dla rodzin lub grup przyjaciół.",
        "rooms.r2.p1": "Łóżko podwójne + dostawka",
        "rooms.r2.p2": "Własna łazienka z prysznicem",
        "rooms.r2.p3": "Darmowe Wi-Fi",
        "rooms.r2.p4": "Klimatyzacja",
        "rooms.r2.p5": "Telewizor z płaskim ekranem",
        "rooms.r2.p6": "Podstawowe przybory toaletowe",
        "rooms.r3.badge": "Premium",
        "rooms.r3.name": "Apartament z aneksem kuchennym",
        "rooms.r3.desc": "Luksusowy apartament z oddzielnym aneksem kuchennym i salonem. Idealny na dłuższe pobyty.",
        "rooms.r3.p1": "Łóżko King-size",
        "rooms.r3.p2": "Aneks kuchenny",
        "rooms.r3.p3": "Darmowe Wi-Fi",
        "rooms.r3.p4": "Klimatyzacja",
        "rooms.r3.p5": "TV + salon",
        "rooms.r3.p6": "Śniadanie w cenie",
        "rooms.pernight": "CZK / noc",
        "rooms.bookbtn": "Zarezerwuj pokój",
        "rooms.booking.tag": "Rezerwacja",
        "rooms.booking.title1": "Jak ",
        "rooms.booking.title2": "zarezerwować",
        "rooms.booking.s1.title": "Wybierz pokój",
        "rooms.booking.s1.desc": "Przejrzyj naszą ofertę i wybierz odpowiedni pokój.",
        "rooms.booking.s2.title": "Skontaktuj się",
        "rooms.booking.s2.desc": "Zadzwoń lub napisz z terminami i liczbą gości.",
        "rooms.booking.s3.title": "Potwierdzenie",
        "rooms.booking.s3.desc": "Potwierdzimy rezerwację i prześlemy wszystkie potrzebne informacje.",
        "gallery.tag": "Galeria",
        "gallery.title1": "Poznaj nasz pensjonat",
        "gallery.intro": "Zobacz, jak wyglądają nasze pokoje, części wspólne i okolica.",
        "gallery.all": "Wszystko",
        "gallery.rooms": "Pokoje",
        "gallery.exterior": "Zewnątrz",
        "gallery.common": "Części wspólne",
        "gallery.surround": "Okolica",
        "contact.tag": "Kontakt",
        "contact.title1": "Masz ",
        "contact.title2": "pytanie?",
        "contact.intro": "Napisz do nas lub zadzwoń – chętnie pomożemy.",
        "contact.address": "Adres",
        "contact.phone": "Telefon",
        "contact.checkout": "do 10:00",
        "contact.form.title": "Napisz do nas",
        "contact.form.name": "Imię i nazwisko",
        "contact.form.selectsubj": "Wybierz temat",
        "contact.form.general": "Zapytanie ogólne",
        "contact.form.complaint": "Reklamacja",
        "contact.form.other": "Inne",
        "contact.form.subject": "Temat",
        "contact.form.message": "Twoja wiadomość",
        "contact.form.submit": "Wyślij wiadomość",
        "contact.form.success.title": "Wiadomość wysłana!",
        "contact.form.success.text": "Odpowiemy najszybciej jak to możliwe. Dziękujemy!",
        "contact.location.tag": "Lokalizacja",
        "contact.location.title1": "Strategiczna ",
        "contact.location.title2": "lokalizacja",
        "contact.loc1.name": "Lotnisko Václava Havla",
        "contact.loc1.dist": "10 min samochodem",
        "contact.loc2.name": "Katedra Św. Wita",
        "contact.loc3.name": "Przystanek komunikacji",
        "contact.loc3.dist": "2 min pieszo",
        "contact.loc4.dist": "5 min samochodem",
        "footer.desc": "Komfortowe zakwaterowanie w Pradze 6, blisko lotniska Václava Havla.",
        "footer.pages": "Strony",
        "footer.copy": "Wszelkie prawa zastrzeżone."
    }
};

const langLabels = { cs: "CZ", en: "EN", de: "DE", ru: "RU", it: "IT", pl: "PL" };

/* ─── TRANSLATION SYSTEM ─── */
function applyLanguage(lang) {
    if (!translations[lang]) return;
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
    document.documentElement.lang = lang === 'cs' ? 'cs' : lang;
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) langDisplay.textContent = langLabels[lang] || lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    localStorage.setItem('ar_lang', lang);
}

function initLanguage() {
    const saved = localStorage.getItem('ar_lang') || 'cs';
    applyLanguage(saved);
}

/* ─── LANGUAGE SWITCHER ─── */
function initLangSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    if (!switcher || !btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        switcher.classList.toggle('open');
    });

    dropdown.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            applyLanguage(opt.dataset.lang);
            switcher.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!switcher.contains(e.target)) {
            switcher.classList.remove('open');
        }
    });
}

/* ─── PRELOADER ─── */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 1800);
    });
    document.body.style.overflow = 'hidden';
}

/* ─── CURSOR ─── */
function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring || !window.matchMedia('(pointer: fine)').matches) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    function animateRing() { cx += (mx - cx) * .15; cy += (my - cy) * .15; ring.style.left = cx + 'px'; ring.style.top = cy + 'px'; requestAnimationFrame(animateRing); }
    animateRing();

    document.querySelectorAll('a, button, [role="button"], .gal-item').forEach(el => {
        el.addEventListener('mouseenter', () => { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.opacity = '.3'; });
        el.addEventListener('mouseleave', () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '.5'; });
    });
}

/* ─── NAVBAR ─── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('open');
        });
        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('open');
            });
        });
    }
}

/* ─── PAGE TRANSITIONS ─── */
function initPageTransitions() {
    const transition = document.getElementById('pageTransition');
    if (!transition) return;
    document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) return;
        a.addEventListener('click', e => {
            e.preventDefault();
            transition.classList.add('active');
            setTimeout(() => { window.location.href = href; }, 500);
        });
    });
}

/* ─── REVEAL ON SCROLL ─── */
function initReveals() {
    const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
        });
    }, { threshold: .15 });
    els.forEach(el => obs.observe(el));
}

/* ─── COUNTERS ─── */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const isFloat = target % 1 !== 0;
                let current = 0;
                const step = target / 60;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = isFloat ? current.toFixed(1) + suffix : Math.floor(current) + suffix;
                }, 25);
                obs.unobserve(el);
            }
        });
    }, { threshold: .5 });
    counters.forEach(c => obs.observe(c));
}

/* ─── HERO PARTICLES ─── */
function initParticles() {
    const container = document.querySelector('.hero-particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        span.style.left = Math.random() * 100 + '%';
        span.style.top = Math.random() * 100 + '%';
        span.style.width = span.style.height = (Math.random() * 4 + 2) + 'px';
        span.style.animationDelay = Math.random() * 12 + 's';
        span.style.animationDuration = (Math.random() * 8 + 8) + 's';
        container.appendChild(span);
    }
}

/* ─── REVIEWS SLIDER ─── */
function initReviews() {
    const track = document.getElementById('reviewsTrack') || document.querySelector('.reviews-track');
    const nextBtn = document.getElementById('revNext');
    const prevBtn = document.getElementById('revPrev');
    if (!track) return;

    let idx = 0;
    const cards = track.querySelectorAll('.rev-card');
    const total = cards.length;
    if (!total) return;

    // Calculate how many cards visible at once
    function getVisibleCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function update() {
        const visibleCount = getVisibleCount();
        const maxIdx = Math.max(0, total - visibleCount);
        if (idx > maxIdx) idx = 0;
        const cardWidth = cards[0].offsetWidth + 24; // card width + gap
        track.style.transform = `translateX(-${idx * cardWidth}px)`;
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { idx++; update(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { idx = Math.max(0, idx - 1); update(); });

    // Auto slide
    let auto = setInterval(() => { idx++; update(); }, 6000);
    track.addEventListener('mouseenter', () => clearInterval(auto));
    track.addEventListener('mouseleave', () => { auto = setInterval(() => { idx++; update(); }, 6000); });
    window.addEventListener('resize', update);
}

/* ─── GALLERY ─── */
function initGallery() {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gal-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lbImg');
    const lightboxClose = document.getElementById('lbClose');
    const lightboxPrev = document.getElementById('lbPrev');
    const lightboxNext = document.getElementById('lbNext');
    const lightboxCaption = document.getElementById('lbCaption');

    // Filters
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.filter;
            items.forEach(item => {
                item.style.display = (cat === 'all' || item.dataset.category === cat) ? '' : 'none';
            });
        });
    });

    // Lightbox
    if (!lightbox || !lightboxImg) return;
    let currentLightboxIdx = 0;
    let visibleItems = [];

    function openLightbox(idx) {
        visibleItems = Array.from(items).filter(i => i.style.display !== 'none');
        currentLightboxIdx = idx;
        const imgEl = visibleItems[idx].querySelector('img');
        lightboxImg.src = imgEl.src;
        if (lightboxCaption) lightboxCaption.textContent = imgEl.alt || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    items.forEach((item, i) => {
        item.addEventListener('click', () => {
            const vis = Array.from(items).filter(it => it.style.display !== 'none');
            const idx = vis.indexOf(item);
            openLightbox(idx >= 0 ? idx : 0);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => {
        currentLightboxIdx = (currentLightboxIdx - 1 + visibleItems.length) % visibleItems.length;
        const imgEl = visibleItems[currentLightboxIdx].querySelector('img');
        lightboxImg.src = imgEl.src;
        if (lightboxCaption) lightboxCaption.textContent = imgEl.alt || '';
    });
    if (lightboxNext) lightboxNext.addEventListener('click', () => {
        currentLightboxIdx = (currentLightboxIdx + 1) % visibleItems.length;
        const imgEl = visibleItems[currentLightboxIdx].querySelector('img');
        lightboxImg.src = imgEl.src;
        if (lightboxCaption) lightboxCaption.textContent = imgEl.alt || '';
    });

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
        if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    });
}

/* ─── CONTACT FORM ─── */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const wrap = form.closest('.form-wrap');
        if (wrap) {
            form.style.display = 'none';
            const success = document.createElement('div');
            success.className = 'form-success active';
            const lang = localStorage.getItem('ar_lang') || 'cs';
            const dict = translations[lang] || translations.cs;
            success.innerHTML = `<h3>${dict['contact.form.success.title'] || 'Zpráva odeslána!'}</h3><p>${dict['contact.form.success.text'] || 'Odpovíme vám co nejdříve. Děkujeme!'}</p>`;
            wrap.appendChild(success);
        }
    });
}

/* ─── BACK TO TOP ─── */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ─── TILT EFFECT ─── */
function initTilt() {
    document.querySelectorAll('.room-detail-img, .about-img').forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - .5;
            const y = (e.clientY - rect.top) / rect.height - .5;
            el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initLanguage();
    initLangSwitcher();
    initCursor();
    initNavbar();
    initPageTransitions();
    initReveals();
    initCounters();
    initParticles();
    initReviews();
    initGallery();
    initContactForm();
    initBackToTop();
    initTilt();
});
