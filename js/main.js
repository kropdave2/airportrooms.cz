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
        "hero.badge": "Hodnocení 8,8 / 10 na Booking.com – 239 recenzí",
        "hero.title1": "Váš domov",
        "hero.title2": "u letiště Praha",
        "hero.subtitle": "Útulný penzion v klidné čtvrti Praha 6 – Liboc, pouhé 2 km od Letiště Václava Havla. 3 pokoje s vlastní koupelnou, bezplatné Wi-Fi, parkování a domácí atmosféra přímo naproti přírodnímu parku Divoká Šárka.",
        "hero.cta1": "Rezervovat na Booking.com",
        "hero.cta2": "Kontaktovat nás",
        "hero.stat1": "recenzí",
        "hero.stat2": "hodnocení",
        "hero.stat3": "km k letišti",
        "about.tag": "O nás",
        "about.title1": "Penzion s ",
        "about.title2": "domácí atmosférou",
        "about.title3": " v Praze 6",
        "about.p1": "Airport Rooms je útulný penzion typu homestay na adrese Evropská 503/221 v klidné rezidenční čtvrti Praha 6 – Liboc. Nabízíme 3 pokoje s vlastní koupelnou pro maximálně 5 hostů. Přímo naproti se nachází přírodní park Divoká Šárka – ideální místo pro procházky a odpočinek v přírodě.",
        "about.p2": "Letiště Václava Havla je pouhé 2 km daleko. K dispozici je sdílená plně vybavená kuchyně, společenský lounge, bezplatné Wi-Fi a parkování u domu. Self check-in přes lockbox zajistí pohodlný příjezd kdykoliv. Na Booking.com máme hodnocení 8,8/10 od 239 hostů.",
        "about.feat1.title": "3 pokoje s koupelnou",
        "about.feat1.desc": "Parketové podlahy, TV, ložní prádlo a ručníky",
        "about.feat2.title": "Self check-in",
        "about.feat2.desc": "Pohodlný příjezd kdykoliv díky lockboxu",
        "about.feat3.title": "Sdílená kuchyň",
        "about.feat3.desc": "Vařič, lednice, mikrovlnka, varná konvice a nádobí",
        "about.cta": "Zobrazit pokoje",
        "marquee.1": "2 km od letiště",
        "marquee.2": "8,8 / 10 Booking.com",
        "marquee.3": "Domácí atmosféra",
        "marquee.4": "Bezplatné Wi-Fi",
        "marquee.5": "Divoká Šárka naproti",
        "marquee.6": "Self check-in",
        "services.tag": "Služby",
        "services.title1": "Co vám ",
        "services.title2": "nabízíme",
        "services.s1.title": "2 km od letiště",
        "services.s1.desc": "Letiště Václava Havla je pouhé 2 km daleko – ideální pro rané lety i pozdní přílety.",
        "services.s2.title": "Bezplatné Wi-Fi",
        "services.s2.desc": "Vysokorychlostní internet v celém objektu pro práci i zábavu.",
        "services.s3.title": "Self check-in",
        "services.s3.desc": "Pohodlný příjezd kdykoliv díky schránce s klíčem (lockbox) – žádné čekání.",
        "services.s4.title": "Vybavená kuchyně",
        "services.s4.desc": "Plně vybavená sdílená kuchyně s vařičem, lednicí, mikrovlnkou, konvicí a nádobím.",
        "services.s5.title": "Bezplatné parkování",
        "services.s5.desc": "Parkování zdarma přímo u domu – žádné starosti s hledáním místa.",
        "services.s6.title": "Divoká Šárka naproti",
        "services.s6.desc": "Přírodní park Divoká Šárka přímo přes ulici – procházky, sport i klid v přírodě.",
        "reviews.tag": "Recenze",
        "reviews.title1": "Co říkají naši ",
        "reviews.title2": "hosté",
        "reviews.sub": "239 recenzí na Booking.com",
        "reviews.r1.time": "Booking.com",
        "reviews.r2.time": "Booking.com",
        "reviews.r3.time": "Booking.com",
        "reviews.r4.time": "Booking.com",
        "reviews.r5.time": "Booking.com",
        "cta.tag": "Poloha",
        "cta.title1": "Připraveni na ",
        "cta.title2": "pohodlný pobyt?",
        "cta.desc": "Prohlédněte si naše pokoje nebo nás rovnou kontaktujte.",
        "cta.cta1": "Prohlédnout pokoje",
        "cta.cta2": "Kontaktovat nás",
        "cta.from": "od",
        "cta.pernight": "za noc",
        "rooms.tag": "Naše pokoje",
        "rooms.title1": "3 pokoje ",
        "rooms.title2": "s vlastní koupelnou",
        "rooms.intro": "Nabízíme 3 útulné pokoje pro maximálně 5 hostů. Každý pokoj má vlastní koupelnu s vanou, parketové podlahy, TV a veškeré pohodlí. K dispozici je sdílená kuchyně, lounge a bezplatné parkování.",
        "rooms.r1.badge": "Nejoblíbenější",
        "rooms.r1.name": "Pokoj č. 1 – Dvoulůžkový",
        "rooms.r1.desc": "Prostorný pokoj s manželskou postelí, parketovými podlahami a vlastní koupelnou s vanou. Součástí je TV s kabelovými kanály, ložní prádlo a ručníky.",
        "rooms.r1.p1": "Manželská postel",
        "rooms.r1.p2": "Vlastní koupelna s vanou a fénem",
        "rooms.r1.p3": "Wi-Fi zdarma",
        "rooms.r1.p5": "TV s kabelovými kanály",
        "rooms.r1.p6": "Parketové podlahy, ložní prádlo, ručníky",
        "rooms.r2.badge": "Útulný",
        "rooms.r2.name": "Pokoj č. 2 – Dvoulůžkový",
        "rooms.r2.desc": "Útulný pokoj s vintage nábytkem, parketovými podlahami a vlastní koupelnou. Ideální pro páry i jednotlivce hledající klid a pohodlí blízko letiště.",
        "rooms.r2.p1": "Dvoulůžko",
        "rooms.r2.p2": "Vlastní koupelna s vanou a fénem",
        "rooms.r3.badge": "Klidný",
        "rooms.r3.name": "Pokoj č. 3 – Jednolůžkový",
        "rooms.r3.desc": "Kompaktní jednolůžkový pokoj s parketovými podlahami, vlastní koupelnou a TV. Perfektní pro sólo cestovatele na jednu noc před odletem nebo po příletu.",
        "rooms.r3.p1": "Jednolůžko",
        "rooms.r3.p2": "Vlastní koupelna s vanou a fénem",
        "rooms.r3.p6": "Parkování zdarma",
        "rooms.pernight": "/ noc",
        "rooms.bookbtn": "Rezervovat na Booking.com",
        "rooms.booking.tag": "Rezervace",
        "rooms.booking.title1": "Rezervujte přes naše ",
        "rooms.booking.title2": "partnery",
        "rooms.booking.desc": "Rezervujte přímo přes Booking.com a získejte nejlepší dostupnou cenu. Hodnocení 8,8/10 od 239 hostů.",
        "rooms.booking.note": "* Ceny jsou orientační a mohou se lišit podle data a dostupnosti.",
        "gallery.tag": "Galerie",
        "gallery.title1": "Nahlédněte do ",
        "gallery.intro": "Prohlédněte si, jak to u nás vypadá – pokoje, společné prostory, zahradu i okolí.",
        "gallery.all": "Vše",
        "gallery.rooms": "Pokoje",
        "gallery.exterior": "Exteriér",
        "gallery.common": "Koupelny & Kuchyně",
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
        "contact.loc1.dist": "2 km (5 min autem)",
        "contact.loc2.name": "Staroměstské náměstí",
        "contact.loc3.name": "Metro Petřiny",
        "contact.loc3.dist": "20 min pěšky / MHD",
        "contact.loc4.dist": "Přímo přes ulici",
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
        "hero.badge": "Rating 8.8 / 10 on Booking.com – 239 reviews",
        "hero.title1": "Your home",
        "hero.title2": "near Prague Airport",
        "hero.subtitle": "Cozy guesthouse in quiet Prague 6 – Liboc, just 2 km from Václav Havel Airport. 3 rooms with private bathrooms, free Wi-Fi, parking, and a homely atmosphere right across from Divoká Šárka nature park.",
        "hero.cta1": "Book on Booking.com",
        "hero.cta2": "Contact Us",
        "hero.stat1": "reviews",
        "hero.stat2": "rating",
        "hero.stat3": "km to airport",
        "about.tag": "About Us",
        "about.title1": "Guesthouse with ",
        "about.title2": "homely atmosphere",
        "about.title3": " in Prague 6",
        "about.p1": "Airport Rooms is a cozy homestay-type guesthouse at Evropská 503/221 in the quiet residential area of Prague 6 – Liboc. We offer 3 rooms with private bathrooms for up to 5 guests. Right across the street is the Divoká Šárka nature park – perfect for walks and relaxation in nature.",
        "about.p2": "Václav Havel Airport is just 2 km away. A shared fully equipped kitchen, lounge, free Wi-Fi, and parking are available. Self check-in via lockbox ensures convenient arrival anytime. We have an 8.8/10 rating from 239 guests on Booking.com.",
        "about.feat1.title": "3 rooms with bathroom",
        "about.feat1.desc": "Parquet floors, TV, bed linen and towels",
        "about.feat2.title": "Self check-in",
        "about.feat2.desc": "Convenient arrival anytime via lockbox",
        "about.feat3.title": "Shared kitchen",
        "about.feat3.desc": "Cooker, fridge, microwave, kettle and utensils",
        "about.cta": "View rooms",
        "marquee.1": "2 km from airport",
        "marquee.2": "8.8 / 10 Booking.com",
        "marquee.3": "Homely atmosphere",
        "marquee.4": "Free Wi-Fi",
        "marquee.5": "Divoká Šárka across the street",
        "marquee.6": "Self check-in",
        "services.tag": "Services",
        "services.title1": "What we ",
        "services.title2": "offer",
        "services.s1.title": "2 km from airport",
        "services.s1.desc": "Václav Havel Airport is just 2 km away – ideal for early flights and late arrivals.",
        "services.s2.title": "Free Wi-Fi",
        "services.s2.desc": "High-speed internet throughout the property for work and leisure.",
        "services.s3.title": "Self check-in",
        "services.s3.desc": "Convenient arrival anytime via key lockbox – no waiting.",
        "services.s4.title": "Equipped kitchen",
        "services.s4.desc": "Fully equipped shared kitchen with cooker, fridge, microwave, kettle and utensils.",
        "services.s5.title": "Free parking",
        "services.s5.desc": "Free parking right at the house – no worries about finding a spot.",
        "services.s6.title": "Divoká Šárka across the street",
        "services.s6.desc": "Divoká Šárka nature park right across the street – walks, sports and nature.",
        "reviews.tag": "Reviews",
        "reviews.title1": "What our ",
        "reviews.title2": "guests say",
        "reviews.sub": "239 reviews on Booking.com",
        "reviews.r1.time": "Booking.com",
        "reviews.r2.time": "Booking.com",
        "reviews.r3.time": "Booking.com",
        "reviews.r4.time": "Booking.com",
        "reviews.r5.time": "Booking.com",
        "cta.tag": "Location",
        "cta.title1": "Ready for a ",
        "cta.title2": "comfortable stay?",
        "cta.desc": "Browse our rooms or contact us directly.",
        "cta.cta1": "View rooms",
        "cta.cta2": "Contact Us",
        "cta.from": "from",
        "cta.pernight": "per night",
        "rooms.tag": "Our rooms",
        "rooms.title1": "3 rooms ",
        "rooms.title2": "with private bathrooms",
        "rooms.intro": "We offer 3 cozy rooms for up to 5 guests. Each room has a private bathroom with bathtub, parquet floors, TV and all comforts. Shared kitchen, lounge and free parking available.",
        "rooms.r1.badge": "Most Popular",
        "rooms.r1.name": "Room 1 – Double",
        "rooms.r1.desc": "Spacious room with double bed, parquet floors and private bathroom with bathtub. Includes TV with cable channels, bed linen and towels.",
        "rooms.r1.p1": "Double bed",
        "rooms.r1.p2": "Private bathroom with bathtub & hairdryer",
        "rooms.r1.p3": "Free Wi-Fi",
        "rooms.r1.p5": "TV with cable channels",
        "rooms.r1.p6": "Parquet floors, bed linen, towels",
        "rooms.r2.badge": "Cozy",
        "rooms.r2.name": "Room 2 – Double",
        "rooms.r2.desc": "Cozy room with vintage furniture, parquet floors and private bathroom. Ideal for couples or solo travelers seeking peace and comfort near the airport.",
        "rooms.r2.p1": "Double bed",
        "rooms.r2.p2": "Private bathroom with bathtub & hairdryer",
        "rooms.r3.badge": "Quiet",
        "rooms.r3.name": "Room 3 – Single",
        "rooms.r3.desc": "Compact single room with parquet floors, private bathroom and TV. Perfect for solo travelers for one night before departure or after arrival.",
        "rooms.r3.p1": "Single bed",
        "rooms.r3.p2": "Private bathroom with bathtub & hairdryer",
        "rooms.r3.p6": "Free parking",
        "rooms.pernight": "/ night",
        "rooms.bookbtn": "Book on Booking.com",
        "rooms.booking.tag": "Booking",
        "rooms.booking.title1": "Book through our ",
        "rooms.booking.title2": "partners",
        "rooms.booking.desc": "Book directly on Booking.com for the best available price. Rating 8.8/10 from 239 guests.",
        "rooms.booking.note": "* Prices are indicative and may vary by date and availability.",
        "gallery.tag": "Gallery",
        "gallery.title1": "Explore ",
        "gallery.intro": "See what our rooms, common areas, garden and surroundings look like.",
        "gallery.all": "All",
        "gallery.rooms": "Rooms",
        "gallery.exterior": "Exterior",
        "gallery.common": "Bathrooms & Kitchen",
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
        "contact.loc1.dist": "2 km (5 min by car)",
        "contact.loc2.name": "Old Town Square",
        "contact.loc3.name": "Petřiny Metro",
        "contact.loc3.dist": "20 min walk / transit",
        "contact.loc4.dist": "Right across the street",
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
        "hero.badge": "Bewertung 8,8 / 10 auf Booking.com – 239 Bewertungen",
        "hero.title1": "Ihr Zuhause",
        "hero.title2": "am Flughafen Prag",
        "hero.subtitle": "Gemütliche Pension im ruhigen Prag 6 – Liboc, nur 2 km vom Flughafen Václav Havel. 3 Zimmer mit eigenem Bad, kostenloses WLAN, Parkplatz und häusliche Atmosphäre direkt gegenüber dem Naturpark Divoká Šárka.",
        "hero.cta1": "Auf Booking.com buchen",
        "hero.cta2": "Kontaktieren Sie uns",
        "hero.stat1": "Bewertungen",
        "hero.stat2": "Bewertung",
        "hero.stat3": "km zum Flughafen",
        "about.tag": "Über uns",
        "about.title1": "Pension mit ",
        "about.title2": "häuslicher Atmosphäre",
        "about.title3": " in Prag 6",
        "about.p1": "Airport Rooms ist eine gemütliche Homestay-Pension in der Evropská 503/221 im ruhigen Wohnviertel Prag 6 – Liboc. Wir bieten 3 Zimmer mit eigenem Bad für bis zu 5 Gäste. Direkt gegenüber liegt der Naturpark Divoká Šárka.",
        "about.p2": "Der Flughafen Václav Havel ist nur 2 km entfernt. Eine gemeinsame voll ausgestattete Küche, Lounge, kostenloses WLAN und Parkplatz stehen zur Verfügung. Self Check-in per Lockbox ermöglicht bequeme Ankunft jederzeit. Auf Booking.com haben wir 8,8/10 von 239 Gästen.",
        "about.feat1.title": "3 Zimmer mit Bad",
        "about.feat1.desc": "Parkettböden, TV, Bettwäsche und Handtücher",
        "about.feat2.title": "Self Check-in",
        "about.feat2.desc": "Bequeme Ankunft jederzeit per Lockbox",
        "about.feat3.title": "Gemeinschaftsküche",
        "about.feat3.desc": "Herd, Kühlschrank, Mikrowelle, Wasserkocher und Geschirr",
        "about.cta": "Zimmer ansehen",
        "marquee.1": "2 km vom Flughafen",
        "marquee.2": "8,8 / 10 Booking.com",
        "marquee.3": "Häusliche Atmosphäre",
        "marquee.4": "Kostenloses WLAN",
        "marquee.5": "Divoká Šárka gegenüber",
        "marquee.6": "Self Check-in",
        "services.tag": "Leistungen",
        "services.title1": "Was wir ",
        "services.title2": "bieten",
        "services.s1.title": "2 km vom Flughafen",
        "services.s1.desc": "Der Flughafen Václav Havel ist nur 2 km entfernt – ideal für frühe Flüge und späte Ankünfte.",
        "services.s2.title": "Kostenloses WLAN",
        "services.s2.desc": "Highspeed-Internet im gesamten Objekt für Arbeit und Freizeit.",
        "services.s3.title": "Self Check-in",
        "services.s3.desc": "Bequeme Ankunft jederzeit per Schlüssel-Lockbox – kein Warten.",
        "services.s4.title": "Ausgestattete Küche",
        "services.s4.desc": "Voll ausgestattete Gemeinschaftsküche mit Herd, Kühlschrank, Mikrowelle, Wasserkocher und Geschirr.",
        "services.s5.title": "Kostenlose Parkplätze",
        "services.s5.desc": "Kostenloser Parkplatz direkt am Haus – keine Parkplatzsuche.",
        "services.s6.title": "Divoká Šárka gegenüber",
        "services.s6.desc": "Naturpark Divoká Šárka direkt gegenüber – Spaziergänge, Sport und Natur.",
        "reviews.tag": "Bewertungen",
        "reviews.title1": "Was unsere ",
        "reviews.title2": "Gäste sagen",
        "reviews.sub": "239 Bewertungen auf Booking.com",
        "reviews.r1.time": "Booking.com",
        "reviews.r2.time": "Booking.com",
        "reviews.r3.time": "Booking.com",
        "reviews.r4.time": "Booking.com",
        "reviews.r5.time": "Booking.com",
        "cta.tag": "Standort",
        "cta.title1": "Bereit für einen ",
        "cta.title2": "komfortablen Aufenthalt?",
        "cta.desc": "Sehen Sie sich unsere Zimmer an oder kontaktieren Sie uns direkt.",
        "cta.cta1": "Zimmer ansehen",
        "cta.cta2": "Kontaktieren Sie uns",
        "cta.from": "ab",
        "cta.pernight": "pro Nacht",
        "rooms.tag": "Unsere Zimmer",
        "rooms.title1": "3 Zimmer ",
        "rooms.title2": "mit eigenem Bad",
        "rooms.intro": "Wir bieten 3 gemütliche Zimmer für bis zu 5 Gäste. Jedes Zimmer hat ein eigenes Bad mit Badewanne, Parkettböden, TV und allen Annehmlichkeiten. Gemeinschaftsküche, Lounge und kostenloser Parkplatz verfügbar.",
        "rooms.r1.badge": "Beliebteste",
        "rooms.r1.name": "Zimmer 1 – Doppelzimmer",
        "rooms.r1.desc": "Geräumiges Zimmer mit Doppelbett, Parkettböden und eigenem Bad mit Badewanne. Mit TV mit Kabelkanälen, Bettwäsche und Handtüchern.",
        "rooms.r1.p1": "Doppelbett",
        "rooms.r1.p2": "Eigenes Bad mit Badewanne & Föhn",
        "rooms.r1.p3": "Kostenloses WLAN",
        "rooms.r1.p5": "TV mit Kabelkanälen",
        "rooms.r1.p6": "Parkettböden, Bettwäsche, Handtücher",
        "rooms.r2.badge": "Gemütlich",
        "rooms.r2.name": "Zimmer 2 – Doppelzimmer",
        "rooms.r2.desc": "Gemütliches Zimmer mit Vintage-Möbeln, Parkettböden und eigenem Bad. Ideal für Paare oder Alleinreisende.",
        "rooms.r2.p1": "Doppelbett",
        "rooms.r2.p2": "Eigenes Bad mit Badewanne & Föhn",
        "rooms.r3.badge": "Ruhig",
        "rooms.r3.name": "Zimmer 3 – Einzelzimmer",
        "rooms.r3.desc": "Kompaktes Einzelzimmer mit Parkettböden, eigenem Bad und TV. Perfekt für Solo-Reisende vor Abflug oder nach Ankunft.",
        "rooms.r3.p1": "Einzelbett",
        "rooms.r3.p2": "Eigenes Bad mit Badewanne & Föhn",
        "rooms.r3.p6": "Kostenloser Parkplatz",
        "rooms.pernight": "/ Nacht",
        "rooms.bookbtn": "Auf Booking.com buchen",
        "rooms.booking.tag": "Buchung",
        "rooms.booking.title1": "Buchen Sie über unsere ",
        "rooms.booking.title2": "Partner",
        "rooms.booking.desc": "Buchen Sie direkt über Booking.com zum besten verfügbaren Preis. Bewertung 8,8/10 von 239 Gästen.",
        "rooms.booking.note": "* Preise sind Richtwerte und können je nach Datum und Verfügbarkeit variieren.",
        "gallery.tag": "Galerie",
        "gallery.title1": "Entdecken Sie ",
        "gallery.intro": "Sehen Sie sich an, wie unsere Zimmer, Gemeinschaftsbereiche und Umgebung aussehen.",
        "gallery.all": "Alle",
        "gallery.rooms": "Zimmer",
        "gallery.exterior": "Außen",
        "gallery.common": "Bäder & Küche",
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
        "contact.loc1.dist": "2 km (5 Min. mit dem Auto)",
        "contact.loc2.name": "Altstädter Ring",
        "contact.loc3.name": "Metro Petřiny",
        "contact.loc3.dist": "20 Min. zu Fuß / ÖPNV",
        "contact.loc4.dist": "Direkt gegenüber",
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
        "hero.badge": "Рейтинг 8,8 / 10 на Booking.com – 239 отзывов",
        "hero.title1": "Ваш дом",
        "hero.title2": "у аэропорта Праги",
        "hero.subtitle": "Уютный пансион в тихом районе Прага 6 – Либоц, всего 2 км от аэропорта Вацлава Гавела. 3 номера с собственной ванной, бесплатный Wi-Fi, парковка и домашняя атмосфера напротив природного парка Дивока Шарка.",
        "hero.cta1": "Забронировать на Booking.com",
        "hero.cta2": "Связаться с нами",
        "hero.stat1": "отзывов",
        "hero.stat2": "рейтинг",
        "hero.stat3": "км до аэропорта",
        "about.tag": "О нас",
        "about.title1": "Пансион с ",
        "about.title2": "домашней атмосферой",
        "about.title3": " в Праге 6",
        "about.p1": "Airport Rooms – уютный пансион типа homestay по адресу Evropská 503/221 в тихом жилом районе Прага 6 – Либоц. Мы предлагаем 3 номера с собственной ванной для максимум 5 гостей. Напротив расположен природный парк Дивока Шарка.",
        "about.p2": "Аэропорт Вацлава Гавела всего в 2 км. К услугам гостей общая полностью оборудованная кухня, лаунж, бесплатный Wi-Fi и парковка. Self check-in через lockbox обеспечивает удобный заезд в любое время. На Booking.com у нас рейтинг 8,8/10 от 239 гостей.",
        "about.feat1.title": "3 номера с ванной",
        "about.feat1.desc": "Паркетные полы, ТВ, постельное бельё и полотенца",
        "about.feat2.title": "Self check-in",
        "about.feat2.desc": "Удобный заезд в любое время через lockbox",
        "about.feat3.title": "Общая кухня",
        "about.feat3.desc": "Плита, холодильник, микроволновка, чайник и посуда",
        "about.cta": "Смотреть номера",
        "marquee.1": "2 км от аэропорта",
        "marquee.2": "8,8 / 10 Booking.com",
        "marquee.3": "Домашняя атмосфера",
        "marquee.4": "Бесплатный Wi-Fi",
        "marquee.5": "Дивока Шарка напротив",
        "marquee.6": "Self check-in",
        "services.tag": "Услуги",
        "services.title1": "Что мы ",
        "services.title2": "предлагаем",
        "services.s1.title": "2 км от аэропорта",
        "services.s1.desc": "Аэропорт Вацлава Гавела всего в 2 км – идеально для ранних рейсов и поздних прилётов.",
        "services.s2.title": "Бесплатный Wi-Fi",
        "services.s2.desc": "Высокоскоростной интернет во всём объекте для работы и отдыха.",
        "services.s3.title": "Self check-in",
        "services.s3.desc": "Удобный заезд в любое время через lockbox с ключом – без ожидания.",
        "services.s4.title": "Оборудованная кухня",
        "services.s4.desc": "Полностью оборудованная общая кухня с плитой, холодильником, микроволновкой, чайником и посудой.",
        "services.s5.title": "Бесплатная парковка",
        "services.s5.desc": "Парковка бесплатно прямо у дома – никакого поиска места.",
        "services.s6.title": "Дивока Шарка напротив",
        "services.s6.desc": "Природный парк Дивока Шарка прямо через дорогу – прогулки, спорт и природа.",
        "reviews.tag": "Отзывы",
        "reviews.title1": "Что говорят ",
        "reviews.title2": "наши гости",
        "reviews.sub": "239 отзывов на Booking.com",
        "reviews.r1.time": "Booking.com",
        "reviews.r2.time": "Booking.com",
        "reviews.r3.time": "Booking.com",
        "reviews.r4.time": "Booking.com",
        "reviews.r5.time": "Booking.com",
        "cta.tag": "Расположение",
        "cta.title1": "Готовы к ",
        "cta.title2": "комфортному отдыху?",
        "cta.desc": "Посмотрите наши номера или свяжитесь с нами напрямую.",
        "cta.cta1": "Смотреть номера",
        "cta.cta2": "Связаться с нами",
        "cta.from": "от",
        "cta.pernight": "за ночь",
        "rooms.tag": "Наши номера",
        "rooms.title1": "3 номера ",
        "rooms.title2": "с собственной ванной",
        "rooms.intro": "Предлагаем 3 уютных номера для максимум 5 гостей. Каждый номер имеет собственную ванную с ванной, паркетные полы, ТВ и все удобства. Общая кухня, лаунж и бесплатная парковка.",
        "rooms.r1.badge": "Самый популярный",
        "rooms.r1.name": "Номер 1 – Двухместный",
        "rooms.r1.desc": "Просторный номер с двуспальной кроватью, паркетными полами и собственной ванной с ванной. С ТВ с кабельными каналами, постельным бельём и полотенцами.",
        "rooms.r1.p1": "Двуспальная кровать",
        "rooms.r1.p2": "Собственная ванная с ванной и феном",
        "rooms.r1.p3": "Бесплатный Wi-Fi",
        "rooms.r1.p5": "ТВ с кабельными каналами",
        "rooms.r1.p6": "Паркетные полы, постельное бельё, полотенца",
        "rooms.r2.badge": "Уютный",
        "rooms.r2.name": "Номер 2 – Двухместный",
        "rooms.r2.desc": "Уютный номер с винтажной мебелью, паркетными полами и собственной ванной. Идеально для пар или одиночных путешественников.",
        "rooms.r2.p1": "Двуспальная кровать",
        "rooms.r2.p2": "Собственная ванная с ванной и феном",
        "rooms.r3.badge": "Тихий",
        "rooms.r3.name": "Номер 3 – Одноместный",
        "rooms.r3.desc": "Компактный одноместный номер с паркетными полами, собственной ванной и ТВ. Идеально для одиночных путешественников перед вылетом или после прилёта.",
        "rooms.r3.p1": "Одноместная кровать",
        "rooms.r3.p2": "Собственная ванная с ванной и феном",
        "rooms.r3.p6": "Бесплатная парковка",
        "rooms.pernight": "/ ночь",
        "rooms.bookbtn": "Забронировать на Booking.com",
        "rooms.booking.tag": "Бронирование",
        "rooms.booking.title1": "Бронируйте через наших ",
        "rooms.booking.title2": "партнёров",
        "rooms.booking.desc": "Бронируйте прямо через Booking.com по лучшей цене. Рейтинг 8,8/10 от 239 гостей.",
        "rooms.booking.note": "* Цены ориентировочные и могут меняться в зависимости от даты и доступности.",
        "gallery.tag": "Галерея",
        "gallery.title1": "Загляните в ",
        "gallery.intro": "Посмотрите, как выглядят наши номера, общие зоны и окрестности.",
        "gallery.all": "Все",
        "gallery.rooms": "Номера",
        "gallery.exterior": "Экстерьер",
        "gallery.common": "Ванные и кухня",
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
        "contact.loc1.dist": "2 км (5 мин на авто)",
        "contact.loc2.name": "Староместская площадь",
        "contact.loc3.name": "Метро Петршины",
        "contact.loc3.dist": "20 мин пешком / транспортом",
        "contact.loc4.dist": "Прямо через дорогу",
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
        "hero.badge": "Valutazione 8,8 / 10 su Booking.com – 239 recensioni",
        "hero.title1": "La tua casa",
        "hero.title2": "vicino all'aeroporto di Praga",
        "hero.subtitle": "Pensione accogliente nel tranquillo quartiere di Praga 6 – Liboc, a soli 2 km dall'aeroporto Václav Havel. 3 camere con bagno privato, Wi-Fi gratuito, parcheggio e atmosfera familiare di fronte al parco naturale Divoká Šárka.",
        "hero.cta1": "Prenota su Booking.com",
        "hero.cta2": "Contattaci",
        "hero.stat1": "recensioni",
        "hero.stat2": "valutazione",
        "hero.stat3": "km dall'aeroporto",
        "about.tag": "Chi siamo",
        "about.title1": "Pensione con ",
        "about.title2": "atmosfera familiare",
        "about.title3": " a Praga 6",
        "about.p1": "Airport Rooms è un'accogliente pensione homestay all'indirizzo Evropská 503/221, nel tranquillo quartiere residenziale di Praga 6 – Liboc. Offriamo 3 camere con bagno privato per un massimo di 5 ospiti. Di fronte si trova il parco naturale Divoká Šárka.",
        "about.p2": "L'aeroporto Václav Havel dista solo 2 km. A disposizione degli ospiti una cucina comune completamente attrezzata, lounge, Wi-Fi gratuito e parcheggio. Il self check-in tramite lockbox garantisce un arrivo comodo in qualsiasi momento. Su Booking.com abbiamo una valutazione di 8,8/10 da 239 ospiti.",
        "about.feat1.title": "3 camere con bagno",
        "about.feat1.desc": "Pavimenti in parquet, TV, biancheria e asciugamani",
        "about.feat2.title": "Self check-in",
        "about.feat2.desc": "Arrivo comodo in qualsiasi momento tramite lockbox",
        "about.feat3.title": "Cucina comune",
        "about.feat3.desc": "Fornelli, frigorifero, microonde, bollitore e stoviglie",
        "about.cta": "Vedi camere",
        "marquee.1": "2 km dall'aeroporto",
        "marquee.2": "8,8 / 10 Booking.com",
        "marquee.3": "Atmosfera familiare",
        "marquee.4": "Wi-Fi gratuito",
        "marquee.5": "Divoká Šárka di fronte",
        "marquee.6": "Self check-in",
        "services.tag": "Servizi",
        "services.title1": "Cosa ",
        "services.title2": "offriamo",
        "services.s1.title": "2 km dall'aeroporto",
        "services.s1.desc": "L'aeroporto Václav Havel dista solo 2 km – ideale per voli mattutini e arrivi serali.",
        "services.s2.title": "Wi-Fi gratuito",
        "services.s2.desc": "Internet ad alta velocità in tutta la struttura per lavoro e relax.",
        "services.s3.title": "Self check-in",
        "services.s3.desc": "Arrivo comodo in qualsiasi momento tramite lockbox con chiave – senza attese.",
        "services.s4.title": "Cucina attrezzata",
        "services.s4.desc": "Cucina comune completamente attrezzata con fornelli, frigorifero, microonde, bollitore e stoviglie.",
        "services.s5.title": "Parcheggio gratuito",
        "services.s5.desc": "Parcheggio gratuito direttamente presso la struttura – senza cercare posto.",
        "services.s6.title": "Divoká Šárka di fronte",
        "services.s6.desc": "Il parco naturale Divoká Šárka è proprio dall'altra parte della strada – passeggiate, sport e natura.",
        "reviews.tag": "Recensioni",
        "reviews.title1": "Cosa dicono ",
        "reviews.title2": "i nostri ospiti",
        "reviews.sub": "239 recensioni su Booking.com",
        "reviews.r1.time": "Booking.com",
        "reviews.r2.time": "Booking.com",
        "reviews.r3.time": "Booking.com",
        "reviews.r4.time": "Booking.com",
        "reviews.r5.time": "Booking.com",
        "cta.tag": "Posizione",
        "cta.title1": "Pronti per un ",
        "cta.title2": "soggiorno confortevole?",
        "cta.desc": "Scoprite le nostre camere o contattateci direttamente.",
        "cta.cta1": "Vedi camere",
        "cta.cta2": "Contattaci",
        "cta.from": "da",
        "cta.pernight": "a notte",
        "rooms.tag": "Le nostre camere",
        "rooms.title1": "3 camere ",
        "rooms.title2": "con bagno privato",
        "rooms.intro": "Offriamo 3 camere accoglienti per un massimo di 5 ospiti. Ogni camera ha un bagno privato con vasca, pavimenti in parquet, TV e tutti i comfort. Cucina comune, lounge e parcheggio gratuito.",
        "rooms.r1.badge": "Più popolare",
        "rooms.r1.name": "Camera 1 – Doppia",
        "rooms.r1.desc": "Camera spaziosa con letto matrimoniale, pavimenti in parquet e bagno privato con vasca. Con TV via cavo, biancheria e asciugamani.",
        "rooms.r1.p1": "Letto matrimoniale",
        "rooms.r1.p2": "Bagno privato con vasca e asciugacapelli",
        "rooms.r1.p3": "Wi-Fi gratuito",
        "rooms.r1.p5": "TV via cavo",
        "rooms.r1.p6": "Parquet, biancheria, asciugamani",
        "rooms.r2.badge": "Accogliente",
        "rooms.r2.name": "Camera 2 – Doppia",
        "rooms.r2.desc": "Camera accogliente con mobili vintage, pavimenti in parquet e bagno privato. Ideale per coppie o viaggiatori singoli.",
        "rooms.r2.p1": "Letto matrimoniale",
        "rooms.r2.p2": "Bagno privato con vasca e asciugacapelli",
        "rooms.r3.badge": "Tranquilla",
        "rooms.r3.name": "Camera 3 – Singola",
        "rooms.r3.desc": "Camera singola compatta con pavimenti in parquet, bagno privato e TV. Ideale per viaggiatori singoli prima della partenza o dopo l'arrivo.",
        "rooms.r3.p1": "Letto singolo",
        "rooms.r3.p2": "Bagno privato con vasca e asciugacapelli",
        "rooms.r3.p6": "Parcheggio gratuito",
        "rooms.pernight": "/ notte",
        "rooms.bookbtn": "Prenota su Booking.com",
        "rooms.booking.tag": "Prenotazione",
        "rooms.booking.title1": "Prenota tramite i nostri ",
        "rooms.booking.title2": "partner",
        "rooms.booking.desc": "Prenota direttamente su Booking.com al miglior prezzo. Valutazione 8,8/10 da 239 ospiti.",
        "rooms.booking.note": "* I prezzi sono indicativi e possono variare in base alla data e alla disponibilità.",
        "gallery.tag": "Galleria",
        "gallery.title1": "Scopri ",
        "gallery.intro": "Guarda le nostre camere, le aree comuni e i dintorni.",
        "gallery.all": "Tutto",
        "gallery.rooms": "Camere",
        "gallery.exterior": "Esterno",
        "gallery.common": "Bagni e cucina",
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
        "contact.loc1.dist": "2 km (5 min in auto)",
        "contact.loc2.name": "Piazza della Città Vecchia",
        "contact.loc3.name": "Metro Petřiny",
        "contact.loc3.dist": "20 min a piedi / con i mezzi",
        "contact.loc4.dist": "Proprio dall'altra parte della strada",
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
        "hero.badge": "Ocena 8,8 / 10 na Booking.com – 239 opinii",
        "hero.title1": "Twój dom",
        "hero.title2": "przy lotnisku w Pradze",
        "hero.subtitle": "Przytulny pensjonat w spokojnej dzielnicy Praga 6 – Liboc, zaledwie 2 km od lotniska Václava Havla. 3 pokoje z własną łazienką, darmowe Wi-Fi, parking i domowa atmosfera naprzeciwko parku przyrody Divoká Šárka.",
        "hero.cta1": "Zarezerwuj na Booking.com",
        "hero.cta2": "Skontaktuj się",
        "hero.stat1": "opinii",
        "hero.stat2": "ocena",
        "hero.stat3": "km do lotniska",
        "about.tag": "O nas",
        "about.title1": "Pensjonat z ",
        "about.title2": "domową atmosferą",
        "about.title3": " w Pradze 6",
        "about.p1": "Airport Rooms to przytulny pensjonat typu homestay pod adresem Evropská 503/221 w spokojnej dzielnicy mieszkalnej Praga 6 – Liboc. Oferujemy 3 pokoje z własną łazienką dla maksymalnie 5 gości. Naprzeciwko znajduje się park przyrody Divoká Šárka.",
        "about.p2": "Lotnisko Václava Havla jest zaledwie 2 km stąd. Do dyspozycji gości jest wspólna w pełni wyposażona kuchnia, salon, darmowe Wi-Fi i parking. Self check-in przez lockbox zapewnia wygodne zameldowanie o każdej porze. Na Booking.com mamy ocenę 8,8/10 od 239 gości.",
        "about.feat1.title": "3 pokoje z łazienką",
        "about.feat1.desc": "Parkiet, TV, pościel i ręczniki",
        "about.feat2.title": "Self check-in",
        "about.feat2.desc": "Wygodne zameldowanie o każdej porze przez lockbox",
        "about.feat3.title": "Wspólna kuchnia",
        "about.feat3.desc": "Kuchenka, lodówka, mikrofalówka, czajnik i naczynia",
        "about.cta": "Zobacz pokoje",
        "marquee.1": "2 km od lotniska",
        "marquee.2": "8,8 / 10 Booking.com",
        "marquee.3": "Domowa atmosfera",
        "marquee.4": "Darmowe Wi-Fi",
        "marquee.5": "Divoká Šárka naprzeciwko",
        "marquee.6": "Self check-in",
        "services.tag": "Usługi",
        "services.title1": "Co ",
        "services.title2": "oferujemy",
        "services.s1.title": "2 km od lotniska",
        "services.s1.desc": "Lotnisko Václava Havla zaledwie 2 km stąd – idealne na wczesne loty i późne przyloty.",
        "services.s2.title": "Darmowe Wi-Fi",
        "services.s2.desc": "Szybki internet w całym obiekcie do pracy i wypoczynku.",
        "services.s3.title": "Self check-in",
        "services.s3.desc": "Wygodne zameldowanie o każdej porze przez lockbox z kluczem – bez czekania.",
        "services.s4.title": "Wyposażona kuchnia",
        "services.s4.desc": "W pełni wyposażona wspólna kuchnia z kuchenką, lodówką, mikrofalówką, czajnikiem i naczyniami.",
        "services.s5.title": "Darmowy parking",
        "services.s5.desc": "Parking gratis bezpośrednio przy obiekcie – bez szukania miejsca.",
        "services.s6.title": "Divoká Šárka naprzeciwko",
        "services.s6.desc": "Park przyrody Divoká Šárka tuż za drogą – spacery, sport i natura.",
        "reviews.tag": "Opinie",
        "reviews.title1": "Co mówią ",
        "reviews.title2": "nasi goście",
        "reviews.sub": "239 opinii na Booking.com",
        "reviews.r1.time": "Booking.com",
        "reviews.r2.time": "Booking.com",
        "reviews.r3.time": "Booking.com",
        "reviews.r4.time": "Booking.com",
        "reviews.r5.time": "Booking.com",
        "cta.tag": "Lokalizacja",
        "cta.title1": "Gotowy na ",
        "cta.title2": "komfortowy pobyt?",
        "cta.desc": "Zobacz nasze pokoje lub skontaktuj się z nami bezpośrednio.",
        "cta.cta1": "Zobacz pokoje",
        "cta.cta2": "Skontaktuj się",
        "cta.from": "od",
        "cta.pernight": "za noc",
        "rooms.tag": "Nasze pokoje",
        "rooms.title1": "3 pokoje ",
        "rooms.title2": "z własną łazienką",
        "rooms.intro": "Oferujemy 3 przytulne pokoje dla maksymalnie 5 gości. Każdy pokój ma własną łazienkę z wanną, parkiet, TV i wszelkie udogodnienia. Wspólna kuchnia, salon i darmowy parking.",
        "rooms.r1.badge": "Najpopularniejszy",
        "rooms.r1.name": "Pokój 1 – Dwuosobowy",
        "rooms.r1.desc": "Przestronny pokój z łóżkiem podwójnym, parkietem i własną łazienką z wanną. Z TV z kanałami kablowymi, pościelą i ręcznikami.",
        "rooms.r1.p1": "Łóżko podwójne",
        "rooms.r1.p2": "Własna łazienka z wanną i suszarką",
        "rooms.r1.p3": "Darmowe Wi-Fi",
        "rooms.r1.p5": "TV z kanałami kablowymi",
        "rooms.r1.p6": "Parkiet, pościel, ręczniki",
        "rooms.r2.badge": "Przytulny",
        "rooms.r2.name": "Pokój 2 – Dwuosobowy",
        "rooms.r2.desc": "Przytulny pokój z meblami w stylu vintage, parkietem i własną łazienką. Idealny dla par lub podróżnych solo.",
        "rooms.r2.p1": "Łóżko podwójne",
        "rooms.r2.p2": "Własna łazienka z wanną i suszarką",
        "rooms.r3.badge": "Cichy",
        "rooms.r3.name": "Pokój 3 – Jednoosobowy",
        "rooms.r3.desc": "Kompaktowy jednoosobowy pokój z parkietem, własną łazienką i TV. Idealny dla podróżnych solo przed wylotem lub po przylocie.",
        "rooms.r3.p1": "Łóżko jednoosobowe",
        "rooms.r3.p2": "Własna łazienka z wanną i suszarką",
        "rooms.r3.p6": "Darmowy parking",
        "rooms.pernight": "/ noc",
        "rooms.bookbtn": "Zarezerwuj na Booking.com",
        "rooms.booking.tag": "Rezerwacja",
        "rooms.booking.title1": "Zarezerwuj przez naszych ",
        "rooms.booking.title2": "partnerów",
        "rooms.booking.desc": "Zarezerwuj bezpośrednio przez Booking.com w najlepszej cenie. Ocena 8,8/10 od 239 gości.",
        "rooms.booking.note": "* Ceny są orientacyjne i mogą się zmieniać w zależności od daty i dostępności.",
        "gallery.tag": "Galeria",
        "gallery.title1": "Zajrzyj do ",
        "gallery.intro": "Zobacz, jak wyglądają nasze pokoje, części wspólne i okolica.",
        "gallery.all": "Wszystko",
        "gallery.rooms": "Pokoje",
        "gallery.exterior": "Zewnątrz",
        "gallery.common": "Łazienki i kuchnia",
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
        "contact.loc1.dist": "2 km (5 min samochodem)",
        "contact.loc2.name": "Rynek Staromiejski",
        "contact.loc3.name": "Metro Petřiny",
        "contact.loc3.dist": "20 min pieszo / komunikacją",
        "contact.loc4.dist": "Tuż za drogą",
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
            document.body.classList.toggle('menu-open');
        });
        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('open');
                document.body.classList.remove('menu-open');
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
