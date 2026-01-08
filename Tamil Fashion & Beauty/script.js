// =======================
// SERVICES DATA
// =======================

    const services = [
    {
        id: 1,
        name: "Bridal Makeup",
        category: "Beauty",
        priceINR: 15000,
        durationMinutes: 180,
        description: "Premium bridal makeup using professional products for wedding functions.",
        images: ["https://i.pinimg.com/736x/2a/38/dd/2a38dd7dd5827a2e8b7951c69d9ed87c.jpg"]
    },
    {
        id: 2,
        name: "Party Makeup",
        category: "Beauty",
        priceINR: 3000,
        durationMinutes: 60,
        description: "Light to medium makeup suitable for parties and special occasions.",
        images: ["https://tse4.mm.bing.net/th/id/OIP.BhCOc1IKRw4KmrByhdiVOgHaE8?w=735&h=490&rs=1&pid=ImgDetMain&o=7&rm=3"]
    },
    {
        id: 3,
        name: "Engagement Makeup",
        category: "Beauty",
        priceINR: 6000,
        durationMinutes: 120,
        description: "Elegant makeup for engagement and reception events.",
        images: ["https://i.pinimg.com/736x/02/44/95/02449589da45a0e98ea0c78e1033814b.jpg"]
    },
    {
        id: 4,
        name: "Saree Draping",
        category: "Fashion",
        priceINR: 500,
        durationMinutes: 60,
        description: "Traditional and modern saree draping styles for functions.",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhGNg2f9oHxZG93z-5jVPOeohLxO6PZOrDQ&s"]
    },
    {
        id: 5,
        name: "Facial",
        category: "Beauty",
        priceINR: 1000,
        durationMinutes: 45,
        description: "Deep cleansing, exfoliation, massage and mask to improve skin glow.",
        images: ["https://styl-inc.com/wp-content/uploads/2022/03/Untitled-design-17.png"]
    },
    {
        id: 9,
        name: "Threading",
        category: "Beauty",
        priceINR: 150,
        durationMinutes: 15,
        description: "Removes unwanted facial hair using threading technique.",
        images: ["https://images.squarespace-cdn.com/content/v1/5f57adb7d91dc50e36fac091/1619104570371-N8KENMSDSONB704CTPDV/threading.jpg?format=original"]
    },
    {
        id: 10,
        name: "Waxing (Arms & Legs)",
        category: "Beauty",
        priceINR: 700,
        durationMinutes: 30,
        description: "Removes unwanted hair from arms and legs using wax.",
        images: ["https://th.bing.com/th/id/OIP.9BtOOcGPLv1a-aTRtD8oYwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"]
    },
   
    {
        id: 12,
        name: "Manicure",
        category: "Beauty",
        priceINR: 800,
        durationMinutes: 40,
        description: "Hand care treatment including nail shaping, cleaning and massage.",
        images: ["https://th.bing.com/th/id/OIP.M1UozSy3NVtPYJLS4TjM1AHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"]
    },
    {
        id: 13,
        name: "Pedicure",
        category: "Beauty",
        priceINR: 1200,
        durationMinutes: 60,
        description: "Foot care treatment with scrub, nail care and relaxation massage.",
        images: ["https://th.bing.com/th/id/OIP.JULiPNdqIUAth7f922huwAHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"]
    },
    
    {
        id: 16,
        name: "Nail Art",
        category: "Beauty",
        priceINR: 1500,
        durationMinutes: 45,
        description: "Creative and trendy nail art designs.",
        images: ["https://styl-inc.com/wp-content/uploads/2022/03/Untitled-design-17.png"]
    },
   
    {
        id: 19,
        name: "Pre-Bridal Package",
        category: "Beauty",
        priceINR: 20000,
        durationMinutes: 600,
        description: "Complete pre-bridal skincare package including facial, detan and body care.",
        images: ["https://www.mbmmakeupstudio.com/wp-content/uploads/2021/07/Pre-Bridal-Treatment-3.jpg"]
    },

    {
        id: 20, 
        name: "Hair Styling", 
        category: "Beauty", 
        priceINR: 3000, 
        durationMinutes: 90, 
        description: "Elegant hairstyles for occasions by us.", 
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB72JlR8gLlvjCbSPRh7T3m-xfQSB85hZGvw&s"]
    },
    { 
        id: 21, 
        name: "Fashion Design", 
        category: "Tailoring", 
        priceINR: 10000, durationMinutes: 240, 
        description: "Professional Fashion designing services.", 
        images: ["https://images.shiksha.com/mediadata/images/articles/1736831916phpVpG5wO.jpeg"] }
];


// =======================
// DOM ELEMENTS
// =======================
const serviceGrid = document.getElementById('serviceGrid');
const serviceSelect = document.getElementById('serviceSelect');
const bookingForm = document.getElementById('bookingForm');
const bookingList = document.getElementById('bookingList');
const serviceSearch = document.getElementById('serviceSearch');
const serviceFilter = document.getElementById('serviceFilter');
const serviceSort = document.getElementById('serviceSort');

// =======================
// BOOKINGS
// =======================
let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

// =======================
// RENDER SERVICES
// =======================
function renderServices(list) {
    serviceGrid.innerHTML = '';
    serviceSelect.innerHTML = '<option value="">Select Service</option>';

    // Populate category filter dynamically
    const categories = ["all", ...new Set(services.map(s => s.category))];
    serviceFilter.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        serviceFilter.appendChild(option);
    });

    list.forEach(s => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <img src="${s.images[0]}" alt="${s.name}">
            <h3>${s.name}</h3>
            <p>${s.description}</p>
            <small>Price: ₹${s.priceINR} | Duration: ${s.durationMinutes} mins</small>
            <button onclick="selectService(${s.id})">Book This Service</button>
        `;
        serviceGrid.appendChild(card);

        // Populate booking select
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name;
        serviceSelect.appendChild(opt);
    });
}

// =======================
// SELECT SERVICE BUTTON
// =======================
function selectService(id) {
    serviceSelect.value = id;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// =======================
// FILTER / SEARCH / SORT
// =======================
function applyServiceFilters() {
    const searchText = serviceSearch.value.toLowerCase();
    const category = serviceFilter.value;
    const sortBy = serviceSort.value;

    let filtered = services.filter(s => {
        let matches = s.name.toLowerCase().includes(searchText);
        if (category !== 'all') matches = matches && s.category === category;
        return matches;
    });

    if (sortBy === 'priceLow') filtered.sort((a, b) => a.priceINR - b.priceINR);
    if (sortBy === 'duration') filtered.sort((a, b) => a.durationMinutes - b.durationMinutes);

    renderServices(filtered);
}

serviceSearch.addEventListener('input', applyServiceFilters);
serviceFilter.addEventListener('change', applyServiceFilters);
serviceSort.addEventListener('change', applyServiceFilters);

// =======================
// RENDER BOOKINGS
// =======================
function renderBookings() {
    bookingList.innerHTML = '';
    bookings.forEach(b => {
        const serviceName = services.find(s => s.id == b.service)?.name || 'Unknown Service';
        const div = document.createElement('div');
        div.className = 'booking-item';
        div.innerHTML = `
            <strong>${b.name}</strong> booked <strong>${serviceName}</strong><br>
            Date: ${b.date} | Time: ${b.time}<br>
            Booking ID: ${b.id}
            ${b.email ? `<br>Email: ${b.email}` : ''}
            <br>Phone: ${b.phone}
            <button onclick="removeBooking('${b.id}')">Cancel</button>
        `;
        bookingList.appendChild(div);
    });
}

// =======================
// REMOVE BOOKING
// =======================
function removeBooking(id) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        renderBookings();
    }
}

// =======================
// BOOKING FORM SUBMIT
// =======================
bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('serviceSelect').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !phone || !service || !date || !time) {
        alert('Please fill all required fields.');
        return;
    }

    const bookingID = `TFB-${new Date().toISOString().replace(/[-:.TZ]/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(4, '0')}`;
    bookings.push({ id: bookingID, name, phone, email, service, date, time });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    renderBookings();

    alert(`Booking Confirmed!\nYour Booking ID: ${bookingID}`);
    bookingForm.reset();
});

// =======================
// INITIAL RENDER
// =======================
renderServices(services);
renderBookings();
