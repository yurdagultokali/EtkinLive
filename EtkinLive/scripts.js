document.addEventListener('DOMContentLoaded', () => {
    // Splash ekranını 3 saniye sonra gizle ve ana sayfayı göster
    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('main').classList.remove('hidden');
    }, 3000);

    // Modal ve kapatma düğmesi referanslarını al
    const modal = document.getElementById('detailsModal');
    const contactModal = document.getElementById('contactModal');
    const closeButton = document.querySelectorAll('.close-button');

    // Modal kapatma düğmesine tıklama olayı ekle
    closeButton.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    // Pencerenin herhangi bir yerine tıklandığında modalı kapat
    window.onclick = event => {
        if (event.target == modal || event.target == contactModal) {
            event.target.style.display = 'none';
        }
    };

    // İletişim butonuna tıklama olayı ekle
    document.getElementById('contact').addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    // Etkinlikleri içeren dizi
    const events = [
        {
            title: "Nazan ÖNCEL",
            type: "Konser",
            date: "01.02.2025 Cumartesi",
            time: "21:00",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "Jolly Joker Adana",
            image: "images/nazanoncel.jpg",
            address: "Esas 01 Burda AVM, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Ff4ARenBMx5xsgFp9",
            ticketLink: "https://www.biletix.com/performance/4JD05/001/TURKIYE/tr"
        },
        {
            title: "Alisher Nazirov",
            type: "Konser",
            date: "22.05.2025 Perşembe",
            time: "21:00",
            price: "Paid",
            location: "Adana, Sarıçam",
            venue: "ÇÜ Açıkhava Tiyatrosu",
            image: "images/alishernazirov.jpg",
            address: "Çukurova Üniversitesi, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/BLvFYo6iX7Dg4Uov6",
            ticketLink: "https://www.biletix.com/etkinlik/3MHT0/TURKIYE/tr"
        },
        {
            title: "Portakal Çiçeği Festivali",
            type: "Festival",
            date: "04/13.04.2025",
            time: "10:00",
            price: "Free",
            location: "Adana, Seyhan",
            venue: "Atatürk Caddesi",
            image: "images/portakalcicegi.jpg",
            address: "Atatürk Caddesi, Adana",
            ticket: "Ücretsiz",
            mapLink: "https://maps.app.goo.gl/6dazjFTVDGoqyQvR9",
            ticketLink: "#"
        },
        {
            title: "12 Numaralı Adam",
            type: "Tiyatro",
            date: "17.01.2025 Cuma",
            time: "20:30",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "01 Burda PGM Sahne",
            image: "images/12numaraliadam.jpg",
            address: "Esas 01 Burda AVM, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Refq9LhwmvB9WSPVA",
            ticketLink: "https://www.biletix.com/etkinlik/4DFO3/TURKIYE/tr"
        },
        {
            title: "Yasemin Sakallıoğlu - Doğru Koca Nasıl Seçilir?",
            type: "Stand Up",
            date: "19.12.2024 Perşembe",
            time: "20:00",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "ÇÜ Kongre Salonu",
            image: "images/yasemin.jpg",
            address: "Çukurova Üniversitesi, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Bpuqsb1PPmve8uWG9",
            ticketLink: "https://www.biletix.com/etkinlik/35AU2/TURKIYE/tr"
        },
        {
            title: "Adana Demirspor - Başakşehir",
            type: "Futbol Maçı",
            date: "05.01.2025 Pazar",
            time: "18:00",
            price: "Paid",
            location: "Adana, Sarıçam",
            venue: "Yeni Adana Stadyumu",
            image: "images/ads.jpg",
            address: "Yeni Adana Stadyumu Sarıçam, Adana",
            ticket: "Biletwise",
            mapLink: "https://maps.app.goo.gl/HjeDfu2jj1WEf8Gz7",
            ticketLink: "https://www.biletwise.com/tr/adana-demirspor-basaksehir-fk-mac-biletleri/"
        },
        {
            title: "Plastik Aşklar",
            type: "Tiyatro",
            date: "19.01.2025 Pazar",
            time: "20:00",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "01 Burda PGM Sahne",
            image: "images/plastikasklar.jpg",
            address: "Esas 01 Burda AVM, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Refq9LhwmvB9WSPVA",
            ticketLink: "https://www.biletix.com/etkinlik/4KYB0/TURKIYE/tr"
        },
        {
            title: "Melek MOSSO",
            type: "Konser",
            date: "18.01.2025 Cumartesi",
            time: "21:00",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "Jolly Joker Adana",
            image: "images/melekmosso.jpg",
            address: "Esas 01 Burda AVM, Adanaa",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Ff4ARenBMx5xsgFp9",
            ticketLink: "https://www.biletix.com/etkinlik/4JD04/TURKIYE/tr"
        },
        {
            title: "Aşk Listesi",
            type: "Tiyatro",
            date: "15.02.2025 Cumartesi",
            time: "20:00",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "01 Burda PGM Sahne",
            image: "images/asklistesi.jpg",
            address: "Esas 01 Burda AVM, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Refq9LhwmvB9WSPVA",
            ticketLink: "https://www.biletix.com/etkinlik/4BRT0/TURKIYE/tr"
        },
        {
            title: "Gökhan TÜRKMEN",
            type: "Konser",
            date: "31.01.2025 Cuma",
            time: "21:00",
            price: "Paid",
            location: "Adana, Seyhan",
            venue: "Jolly Joker Adanak3.jpg",
            image: "images/gokhanturkmen.jpg",
            address: "Esas 01 Burda AVM, Adana",
            ticket: "Biletix",
            mapLink: "https://maps.app.goo.gl/Ff4ARenBMx5xsgFp9",
            ticketLink: "https://www.biletix.com/etkinlik/4JD06/TURKIYE/tr"
        }
    ];

    // Etkinlikleri eklemek için container öğesi
    const eventsContainer = document.querySelector('.events-container');
    
    // Etkinlikleri görüntüleme işlevi
    function displayEvents(eventList) {
        eventsContainer.innerHTML = "";
        eventList.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <img src="${event.image}" alt="${event.title} Fotoğrafı">
                <h3>${event.title}</h3>
                <p>Türü: ${event.type}</p>
                <p>Tarihi: ${event.date}</p>
                <p>Saati: ${event.time}</p>
                <p>Ücret: ${event.price === "Paid" ? "Ücretli" : "Ücretsiz"}</p>
                <p>Yeri: ${event.location}</p>
                <p>Mekan: ${event.venue}</p>
                <button class="details-button" onclick="showDetails('${event.title}', '${event.address}', '${event.ticket}', '${event.mapLink}', '${event.ticketLink}')">Detaylar</button>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    displayEvents(events);

    document.getElementById('filterType').addEventListener('change', filterEvents);
    document.getElementById('filterCity').addEventListener('change', filterEvents);
    document.getElementById('filterDistrict').addEventListener('change', filterEvents);
    document.getElementById('filterPrice').addEventListener('change', filterEvents);
    
    // Etkinlikleri filtreleme ve sıralama işlevi
    function filterEvents() {
        const type = document.getElementById('filterType').value;
        const city = document.getElementById('filterCity').value;
        const district = document.getElementById('filterDistrict').value;
        const price = document.getElementById('filterPrice').value;
       

        let filteredEvents = events;

        if (type !== 'all') {
            filteredEvents = filteredEvents.filter(event => event.type === type);
        }

        if (city !== 'all') {
            filteredEvents = filteredEvents.filter(event => event.location.includes(city));
        }

        if (district !== 'all') {
            filteredEvents = filteredEvents.filter(event => event.location.includes(district));
        }

        if (price !== 'all') {
            filteredEvents = filteredEvents.filter(event => event.price === price);
        }


        displayEvents(filteredEvents);
    }

    // Detaylar modalını gösterme işlevi
    window.showDetails = function(title, address, ticket, mapLink, ticketLink) {
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalAddress').innerText = `Adres: ${address}`;
        document.getElementById('modalTicket').innerText = `Bilet Noktası: ${ticket}`;
        document.getElementById('modalTicketButton').style.display = ticketLink !== '#' ? 'inline-block' : 'none';
        if (ticketLink !== '#') {
            document.getElementById('modalTicketButton').onclick = () => window.open(ticketLink, '_blank');
        }
        document.getElementById('modalMapButton').onclick = () => openMap(mapLink);
        document.getElementById('detailsModal').style.display = 'block';
    }

    // Haritada adresi açma işlevi
    window.openMap = function(mapLink) {
        window.open(mapLink, '_blank');
    }
});
