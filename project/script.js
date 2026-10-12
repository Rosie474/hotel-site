/* ============================================================
   Maverick Royal Suites & Hotel Ltd — Vanilla JavaScript
   Handles: navbar scroll, mobile menu, booking modal, room
   detail modal, dining category filters, admin sidebar nav,
   contact form, WhatsApp floating action, scroll reveals.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- HOTEL DATA ---------- */
  const HOTEL = {
    phone: '+234 707 836 5298',
    phoneRaw: '2347078365298',
    whatsappUrl: 'https://wa.me/2347078365298',
  };

  /* ---------- ROOM DATA ---------- */
  // TODO: BACKEND DEVELOPER PLUG API HERE
  const ROOMS = [
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      shortDesc: 'A refined sanctuary designed for the discerning business traveler.',
      description: 'The Executive Suite blends contemporary sophistication with functional elegance. Featuring a dedicated work station, plush king-size bedding, and a curated minibar, it is the perfect retreat for executives who demand both productivity and comfort.',
      image: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      price: '₦85,000',
      priceUnit: 'per night',
      occupancy: '2 Guests',
      size: '45 m²',
      amenities: ['King Bed', 'Work Station', 'Smart TV', 'Minibar', 'En-suite Bath'],
      features: ['High-Speed Wi-Fi', 'Daily Breakfast', '24hr Room Service', 'Climate Control'],
    },
    {
      id: 'royal-deluxe',
      name: 'Royal Deluxe',
      shortDesc: 'Spacious luxury with a private lounge and panoramic city views.',
      description: 'The Royal Deluxe room elevates every moment of your stay. A private lounge area, floor-to-ceiling windows, and bespoke furnishings create an atmosphere of quiet grandeur. Ideal for guests who appreciate space, privacy, and uncompromising attention to detail.',
      image: 'https://images.pexels.com/photos/39725929/pexels-photo-39725929.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      price: '₦120,000',
      priceUnit: 'per night',
      occupancy: '3 Guests',
      size: '62 m²',
      amenities: ['King Bed', 'Lounge Area', 'City View', 'Smart TV', 'Walk-in Closet'],
      features: ['High-Speed Wi-Fi', 'Daily Breakfast', 'Evening Turndown', 'Premium Toiletries'],
    },
    {
      id: 'presidential-penthouse',
      name: 'Presidential Penthouse',
      shortDesc: 'The pinnacle of luxury — an expansive private residence in the sky.',
      description: 'Our Presidential Penthouse is the crown jewel of Maverick Royal Suites. A sprawling layout encompasses a master bedroom, private dining room, butler pantry, and a wrap-around terrace with sweeping views of Owerri. Every surface, every fixture, every texture has been selected to deliver an experience without equal.',
      image: 'https://images.pexels.com/photos/35868592/pexels-photo-35868592.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      price: '₦250,000',
      priceUnit: 'per night',
      occupancy: '4 Guests',
      size: '120 m²',
      amenities: ['Master Suite', 'Dining Room', 'Wrap Terrace', 'Butler Service', 'Jacuzzi'],
      features: ['Private Butler', 'Airport Transfer', 'In-suite Dining', 'Champagne on Arrival'],
    },
  ];

  /* ---------- DINING MENU DATA ---------- */
  // TODO: BACKEND DEVELOPER PLUG API HERE
  const MENU_CATEGORIES = [
    {
      id: 'signature-cocktails', label: 'Signature Cocktails',
      image: 'https://images.pexels.com/photos/36189465/pexels-photo-36189465.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      imageAlt: 'Craft cocktail with citrus garnish',
      items: [
        { name: 'The Maverick Old Fashioned', description: 'Aged bourbon, artisanal bitters, raw sugar, and a twist of orange peel — stirred over a hand-carved ice sphere.', price: '₦6,500', tag: 'House Signature' },
        { name: 'Royal Gold Martini', description: 'London Dry gin, dry vermouth, and a delicate saffron infusion, served with three Castelvetrano olives.', price: '₦7,200' },
        { name: 'Owerri Sunset', description: 'A vibrant blend of tropical hibiscus, fresh lime, and Nigerian ginger — a non-alcoholic celebration of local flavours.', price: '₦5,000', tag: 'Non-Alcoholic' },
        { name: 'Crown Negroni', description: 'Equal parts gin, Campari, and sweet vermouth, garnished with a flame-orange peel for a bold, aromatic finish.', price: '₦6,800' },
      ],
    },
    {
      id: 'fine-dining', label: 'Fine Dining',
      image: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      imageAlt: 'Gourmet plated fine dining dish',
      items: [
        { name: 'Grilled Tiger Prawn Risotto', description: 'Arborio rice slow-cooked in saffron broth, crowned with charred tiger prawns and a drizzle of chili-infused oil.', price: '₦14,500', tag: 'Chef Recommended' },
        { name: 'Peppered Goat Meat Assiette', description: 'A refined interpretation of a Nigerian classic — slow-braised goat in a spicy suya crust, served with plantain purée.', price: '₦12,000' },
        { name: 'Herb-Crusted Lamb Rack', description: 'New Zealand lamb rack encrusted with rosemary and Dijon, served atop a bed of truffle mashed potatoes and red wine jus.', price: '₦18,500' },
        { name: 'Pan-Seared Snapper', description: 'Fresh Atlantic snapper with crispy skin, lemon-butter caper sauce, and seasonal roasted vegetables.', price: '₦13,000' },
      ],
    },
    {
      id: 'premium-wines', label: 'Premium Wines',
      image: 'https://images.pexels.com/photos/8251601/pexels-photo-8251601.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      imageAlt: 'Red and white wine glasses',
      items: [
        { name: 'Château Margaux — Bordeaux', description: 'A distinguished French red with notes of blackcurrant, violet, and cedar. Vintage selection available upon request.', price: '₦85,000', tag: 'Vintage Reserve' },
        { name: 'Kendall-Jackson Chardonnay', description: 'A buttery Californian white with layers of ripe pear, vanilla, and a whisper of toasted oak.', price: '₦22,000' },
        { name: 'Vega Sicilia Ribera del Duero', description: 'A Spanish masterpiece — Tempranillo-driven, complex, and velvety, with exceptional aging potential.', price: '₦95,000' },
        { name: 'Moët & Chandon Impérial', description: 'The quintessential champagne — crisp, vibrant, and effervescent. Perfect for celebrations.', price: '₦48,000', tag: 'Champagne' },
      ],
    },
    {
      id: 'executive-breakfast', label: 'Executive Breakfast',
      image: 'https://images.pexels.com/photos/27846221/pexels-photo-27846221.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      imageAlt: 'Luxury breakfast with croissants and coffee',
      items: [
        { name: 'Continental Breakfast Plate', description: 'Freshly baked croissants, artisanal cheeses, cured meats, seasonal fruit, and freshly squeezed juice.', price: '₦8,500' },
        { name: 'Maverick Full English', description: 'Grilled sirloin, eggs to order, heritage tomatoes, baked beans, toasted sourdough, and breakfast potatoes.', price: '₦10,500', tag: 'Most Popular' },
        { name: 'Avocado & Poached Egg Toast', description: 'Smashed avocado on toasted brioche, topped with perfectly poached eggs and a sprinkle of chili flakes.', price: '₦7,500' },
        { name: 'Nigerian Breakfast Platter', description: 'Akara, pap (ogi), fried plantain, and egg sauce — a hearty morning celebration of Nigerian flavours.', price: '₦6,500' },
      ],
    },
    {
      id: 'chef-specials', label: 'Chef Specials',
      image: 'https://images.pexels.com/photos/5491046/pexels-photo-5491046.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
      imageAlt: 'Grilled steak with herbs and wine',
      items: [
        { name: 'Wagyu Sirloin Steak', description: 'Japanese A5 Wagyu, seared to perfection, served with bone marrow butter and hand-cut truffle fries.', price: '₦35,000', tag: 'Premium' },
        { name: 'Lobster Thermidor', description: 'Whole lobster glazed in a cognac-mustard cream, gratinated with Gruyère, and served with asparagus.', price: '₦28,000' },
        { name: 'Seafood Platter Royale', description: 'A grand assortment of prawns, oysters, crab, and grilled fish — served on ice with mignonette and cocktail sauce.', price: '₦32,000', tag: 'For Two' },
        { name: 'Jollof Risotto with Grilled Chicken', description: 'A fusion masterpiece — the beloved flavours of Nigerian jollof reimagined as a creamy risotto, topped with suya-spiced chicken.', price: '₦11,500', tag: 'Fusion' },
      ],
    },
  ];

  /* ---------- ADMIN DATA ---------- */
  // TODO: BACKEND DEVELOPER PLUG API HERE
  const OVERVIEW_STATS = [
    { label: 'Total Rooms', value: 48, icon: 'bed' },
    { label: 'Available Rooms', value: 19, icon: 'bed' },
    { label: 'Occupied Rooms', value: 27, icon: 'bed' },
    { label: 'Pending Reservations', value: 6, icon: 'calendar' },
  ];

  const ROOM_INVENTORY = [
    { room: '101', type: 'Executive Suite', floor: '1st Floor', status: 'Occupied', guest: 'C. Nwosu' },
    { room: '102', type: 'Executive Suite', floor: '1st Floor', status: 'Available', guest: '' },
    { room: '103', type: 'Royal Deluxe', floor: '1st Floor', status: 'Cleaning', guest: '' },
    { room: '104', type: 'Royal Deluxe', floor: '1st Floor', status: 'Occupied', guest: 'A. Okafor' },
    { room: '105', type: 'Executive Suite', floor: '1st Floor', status: 'Maintenance', guest: '' },
    { room: '201', type: 'Royal Deluxe', floor: '2nd Floor', status: 'Available', guest: '' },
    { room: '202', type: 'Presidential Penthouse', floor: '2nd Floor', status: 'Occupied', guest: 'J. Bello' },
    { room: '203', type: 'Executive Suite', floor: '2nd Floor', status: 'Available', guest: '' },
    { room: '204', type: 'Royal Deluxe', floor: '2nd Floor', status: 'Occupied', guest: 'M. Adeyemi' },
    { room: '205', type: 'Executive Suite', floor: '2nd Floor', status: 'Cleaning', guest: '' },
  ];

  const RESERVATIONS = [
    { id: 'MRV-2026-0148', guest: 'Emeka Nwosu', roomType: 'Presidential Penthouse', checkIn: 'Oct 12, 2026', checkOut: 'Oct 15, 2026', guests: '2 Adults', status: 'Pending Confirmation' },
    { id: 'MRV-2026-0149', guest: 'Amara Okafor', roomType: 'Royal Deluxe', checkIn: 'Oct 13, 2026', checkOut: 'Oct 16, 2026', guests: '1 Adult, 1 Child', status: 'Pending Confirmation' },
    { id: 'MRV-2026-0150', guest: 'James Bello', roomType: 'Executive Suite', checkIn: 'Oct 10, 2026', checkOut: 'Oct 14, 2026', guests: '1 Adult', status: 'Confirmed' },
    { id: 'MRV-2026-0151', guest: 'Funke Adeyemi', roomType: 'Royal Deluxe', checkIn: 'Oct 11, 2026', checkOut: 'Oct 13, 2026', guests: '2 Adults', status: 'Checked In' },
    { id: 'MRV-2026-0152', guest: 'Tunde Bello', roomType: 'Executive Suite', checkIn: 'Oct 09, 2026', checkOut: 'Oct 11, 2026', guests: '1 Adult', status: 'Pending Confirmation' },
    { id: 'MRV-2026-0153', guest: 'Ngozi Eze', roomType: 'Presidential Penthouse', checkIn: 'Oct 15, 2026', checkOut: 'Oct 20, 2026', guests: '2 Adults, 2 Children', status: 'Pending Confirmation' },
    { id: 'MRV-2026-0147', guest: 'Samuel Okonkwo', roomType: 'Executive Suite', checkIn: 'Oct 07, 2026', checkOut: 'Oct 09, 2026', guests: '1 Adult', status: 'Checked Out' },
    { id: 'MRV-2026-0154', guest: 'Blessing Ibrahim', roomType: 'Royal Deluxe', checkIn: 'Oct 14, 2026', checkOut: 'Oct 17, 2026', guests: '2 Adults', status: 'Pending Confirmation' },
  ];

  const CONCIERGE_MESSAGES = [
    { sender: 'Emeka Nwosu', subject: 'Airport transfer request', received: '2 hours ago', preview: 'I would like to arrange an airport pickup for my arrival on October 12th at 3:00 PM...', read: false },
    { sender: 'Amara Okafor', subject: 'Dietary requirements', received: '5 hours ago', preview: 'I have a gluten intolerance and would like to confirm the breakfast options available...', read: false },
    { sender: 'James Bello', subject: 'Event space enquiry', received: '1 day ago', preview: 'I am interested in hosting a corporate dinner for 30 guests. Could you provide details...', read: true },
    { sender: 'Ngozi Eze', subject: 'Late check-in', received: '1 day ago', preview: 'My flight arrives at 11:45 PM. Will it be possible to check in after midnight...', read: false },
    { sender: 'Funke Adeyemi', subject: 'Room service question', received: '2 days ago', preview: 'What are the hours for room service? I may need a late dinner after my meetings...', read: true },
  ];

  const STATUS_STYLES = {
    'Pending Confirmation': 'bg-amber-400/15 text-amber-400 border-amber-400/20',
    'Confirmed': 'bg-sky-400/15 text-sky-400 border-sky-400/20',
    'Checked In': 'bg-emerald-400/15 text-emerald-400 border-emerald-400/20',
    'Checked Out': 'bg-slate-400/15 text-slate-400 border-slate-400/20',
    'Available': 'bg-emerald-400/15 text-emerald-400 border-emerald-400/20',
    'Occupied': 'bg-rose-400/15 text-rose-400 border-rose-400/20',
    'Cleaning': 'bg-sky-400/15 text-sky-400 border-sky-400/20',
    'Maintenance': 'bg-slate-400/15 text-slate-400 border-slate-400/20',
  };

  /* ---------- UTILITIES ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- NAVBAR SCROLL ---------- */
  function initNavbarScroll() {
    var navbar = $('#navbar');
    if (!navbar) return;
    function onScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- MOBILE MENU ---------- */
  function initMobileMenu() {
    var openBtn = $('#menu-open');
    var closeBtn = $('#menu-close');
    var overlay = $('#mobile-menu');
    if (!openBtn || !overlay) return;

    function open() {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100');
      var panel = $('#mobile-panel');
      if (panel) panel.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.add('opacity-0', 'pointer-events-none');
      overlay.classList.remove('opacity-100');
      var panel = $('#mobile-panel');
      if (panel) panel.classList.add('translate-x-full');
      document.body.style.overflow = '';
    }
    openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
  }

  /* ---------- BOOKING WIDGET ---------- */
  function initBookingWidget() {
    var form = $('#booking-form');
    if (!form) return;

    var adults = 2, children = 0;
    var adultsEl = $('#adults-val');
    var childrenEl = $('#children-val');
    var checkInEl = $('#check-in');
    var checkOutEl = $('#check-out');
    var roomTypeEl = $('#room-type');

    function bindCounter(minusId, plusId, valEl, min, max, ref) {
      var m = $('#' + minusId), p = $('#' + plusId);
      if (!m || !p) return;
      m.addEventListener('click', function () {
        ref.val = Math.max(min, ref.val - 1);
        if (valEl) valEl.textContent = ref.val;
      });
      p.addEventListener('click', function () {
        ref.val = Math.min(max, ref.val + 1);
        if (valEl) valEl.textContent = ref.val;
      });
    }

    var ref = { val: adults };
    bindCounter('adults-minus', 'adults-plus', adultsEl, 1, 10, ref);
    var cref = { val: children };
    bindCounter('children-minus', 'children-plus', childrenEl, 0, 10, cref);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var reservation = {
        roomType: roomTypeEl ? roomTypeEl.value : 'Executive Suite',
        checkIn: (checkInEl && checkInEl.value) ? checkInEl.value : 'Not selected',
        checkOut: (checkOutEl && checkOutEl.value) ? checkOutEl.value : 'Not selected',
        adults: ref.val,
        children: cref.val,
      };
      openBookingModal(reservation);
    });
  }

  /* ---------- BOOKING MODAL ---------- */
  function openBookingModal(reservation) {
    // TODO: BACKEND DEVELOPER PLUG API HERE
    // This is where reservation details can later be dynamically inserted
    // into the WhatsApp message before redirecting the guest.
    var msg =
      'Hi Maverick Hotel,\n\n' +
      'I am securing my reservation for a suite.\n\n' +
      'Room Type: ' + reservation.roomType + '\n' +
      'Check-In: ' + reservation.checkIn + '\n' +
      'Check-Out: ' + reservation.checkOut + '\n' +
      'Guests: ' + reservation.adults + ' Adults, ' + reservation.children + ' Children\n\n' +
      'Please provide your official bank details for a direct transfer.\n\n' +
      'Thank you.';
    var whatsappUrl = HOTEL.whatsappUrl + '?text=' + encodeURIComponent(msg);

    var roomTypeEl = $('#modal-room-type');
    var checkInEl = $('#modal-check-in');
    var checkOutEl = $('#modal-check-out');
    var guestsEl = $('#modal-guests');
    var waBtn = $('#modal-whatsapp');

    if (roomTypeEl) roomTypeEl.textContent = reservation.roomType;
    if (checkInEl) checkInEl.textContent = reservation.checkIn;
    if (checkOutEl) checkOutEl.textContent = reservation.checkOut;
    if (guestsEl) guestsEl.textContent = reservation.adults + ' Adults, ' + reservation.children + ' Children';
    if (waBtn) waBtn.href = whatsappUrl;

    var modal = $('#booking-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  function initBookingModalClose() {
    var modal = $('#booking-modal');
    if (!modal) return;
    function close() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
    var closeBtn = $('#booking-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });
  }

  /* ---------- ROOMS PAGE ---------- */
  function initRoomsPage() {
    var grid = $('#rooms-grid');
    if (!grid) return;

    // Render room cards
    var html = ROOMS.map(function (room) {
      var amenitiesHtml = room.amenities.slice(0, 4).map(function (a) {
        return '<span class="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-slate-400">' +
          '<svg class="w-2.5 h-2.5 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>' + a + '</span>';
      }).join('');

      return '<article class="flex flex-col h-full overflow-hidden rounded-xl border border-white/5 bg-onyx/50 group transition-all duration-300 hover:-translate-y-2">' +
        '<div class="relative h-72 overflow-hidden">' +
          '<img src="' + room.image + '" alt="' + room.name + '" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-onyx-deep via-onyx-deep/15 to-transparent"></div>' +
          '<div class="absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5" style="background:rgba(15,23,42,0.55);backdrop-filter:blur(16px)">' +
            '<span class="text-sm font-bold text-gold">' + room.price + '</span>' +
            '<span class="text-[10px] text-slate-400">' + room.priceUnit + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="flex flex-1 flex-col p-6">' +
          '<h3 class="font-serif text-xl font-bold text-white mb-2">' + room.name + '</h3>' +
          '<p class="text-sm leading-relaxed text-slate-400 mb-4">' + room.shortDesc + '</p>' +
          '<div class="flex items-center gap-4 mb-4 text-xs text-slate-500">' +
            '<span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>' + room.occupancy + '</span>' +
            '<span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>' + room.size + '</span>' +
          '</div>' +
          '<div class="flex flex-wrap gap-1.5 mb-5">' + amenitiesHtml + '</div>' +
          '<div class="mt-auto flex gap-3">' +
            '<button class="view-detail flex-1 rounded-lg border border-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold/30 hover:text-gold" data-room="' + room.id + '">View Details</button>' +
            '<button class="reserve-room flex-1 rounded-lg bg-gold px-4 py-2.5 text-xs font-bold text-onyx transition-all hover:scale-105" data-room="' + room.id + '">Reserve</button>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
    grid.innerHTML = html;

    // Bind view detail buttons
    $all('.view-detail', grid).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var roomId = btn.getAttribute('data-room');
        var room = ROOMS.find(function (r) { return r.id === roomId; });
        if (room) openRoomDetailModal(room);
      });
    });

    // Bind reserve buttons
    $all('.reserve-room', grid).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var roomId = btn.getAttribute('data-room');
        var room = ROOMS.find(function (r) { return r.id === roomId; });
        if (room) {
          openBookingModal({
            roomType: room.name,
            checkIn: 'Select on booking widget',
            checkOut: 'Select on booking widget',
            adults: 2,
            children: 0,
          });
        }
      });
    });
  }

  function openRoomDetailModal(room) {
    var modal = $('#room-detail-modal');
    if (!modal) return;

    var amenitiesHtml = room.amenities.map(function (a) {
      return '<li class="flex items-center gap-2 text-sm text-slate-300"><svg class="w-3.5 h-3.5 text-gold/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>' + a + '</li>';
    }).join('');
    var featuresHtml = room.features.map(function (f) {
      return '<li class="flex items-center gap-2 text-sm text-slate-300"><svg class="w-3.5 h-3.5 text-gold/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>' + f + '</li>';
    }).join('');

    var body = $('#room-detail-body');
    if (body) {
      body.innerHTML =
        '<button id="room-detail-close" class="absolute right-5 top-5 text-slate-400 hover:text-white transition-colors z-10" aria-label="Close"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>' +
        '<div class="relative h-72 md:h-80 overflow-hidden rounded-t-2xl">' +
          '<img src="' + room.image + '" alt="' + room.name + '" class="h-full w-full object-cover" />' +
          '<div class="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent"></div>' +
          '<div class="absolute bottom-5 left-6 right-6">' +
            '<h2 class="font-serif text-2xl md:text-3xl font-bold text-white mb-1">' + room.name + '</h2>' +
            '<div class="flex items-center gap-4 text-xs text-slate-300">' +
              '<span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' + room.occupancy + '</span>' +
              '<span class="flex items-center gap-1.5"><svg class="w-3.5 h-3.5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>' + room.size + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="p-6 md:p-8">' +
          '<div class="flex items-center justify-between mb-6 rounded-lg bg-white/5 px-4 py-3">' +
            '<div><span class="text-2xl font-bold text-gold">' + room.price + '</span><span class="text-xs text-slate-400 ml-2">' + room.priceUnit + '</span></div>' +
            '<button id="room-detail-reserve" class="rounded-lg bg-gold px-6 py-2.5 text-sm font-bold text-onyx transition-all hover:scale-105">Reserve This Suite</button>' +
          '</div>' +
          '<p class="text-sm leading-relaxed text-slate-300 mb-6">' + room.description + '</p>' +
          '<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">' +
            '<div><h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Amenities</h3><ul class="space-y-2">' + amenitiesHtml + '</ul></div>' +
            '<div><h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Included Features</h3><ul class="space-y-2">' + featuresHtml + '</ul></div>' +
          '</div>' +
        '</div>';
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    var closeBtn = $('#room-detail-close');
    if (closeBtn) closeBtn.addEventListener('click', function () {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    });

    var reserveBtn = $('#room-detail-reserve');
    if (reserveBtn) reserveBtn.addEventListener('click', function () {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
      openBookingModal({
        roomType: room.name,
        checkIn: 'Select on booking widget',
        checkOut: 'Select on booking widget',
        adults: 2,
        children: 0,
      });
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- DINING PAGE ---------- */
  function initDiningPage() {
    var filterBar = $('#menu-filters');
    var content = $('#menu-content');
    if (!filterBar || !content) return;

    function renderFilters(activeId) {
      var html = MENU_CATEGORIES.map(function (cat) {
        var active = cat.id === activeId;
        return '<button class="menu-filter rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ' +
          (active ? 'bg-gold text-onyx' : 'border border-white/10 text-slate-400 hover:border-gold/30 hover:text-gold') +
          '" data-cat="' + cat.id + '">' + cat.label + '</button>';
      }).join('');
      filterBar.innerHTML = html;
      $all('.menu-filter', filterBar).forEach(function (btn) {
        btn.addEventListener('click', function () {
          renderFilters(btn.getAttribute('data-cat'));
          renderContent(btn.getAttribute('data-cat'));
        });
      });
    }

    function renderContent(catId) {
      var cat = MENU_CATEGORIES.find(function (c) { return c.id === catId; }) || MENU_CATEGORIES[0];
      var itemsHtml = cat.items.map(function (item) {
        var tagHtml = item.tag ? '<span class="rounded-full bg-gold/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold">' + item.tag + '</span>' : '';
        return '<div class="border-b border-white/5 pb-6 last:border-0">' +
          '<div class="flex items-start justify-between gap-4 mb-2">' +
            '<div class="flex items-center gap-2 flex-wrap">' +
              '<h3 class="font-serif text-lg font-bold text-white">' + item.name + '</h3>' + tagHtml +
            '</div>' +
            '<span class="font-serif text-lg font-bold text-gold whitespace-nowrap shrink-0">' + item.price + '</span>' +
          '</div>' +
          '<p class="text-sm leading-relaxed text-slate-500">' + item.description + '</p>' +
        '</div>';
      }).join('');

      content.innerHTML =
        '<div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">' +
          '<div class="relative overflow-hidden rounded-xl group">' +
            '<div class="relative h-64 lg:h-full lg:min-h-[420px] overflow-hidden rounded-xl">' +
              '<img src="' + cat.image + '" alt="' + cat.imageAlt + '" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />' +
              '<div class="absolute inset-0 bg-gradient-to-t from-onyx-deep/80 via-transparent to-transparent"></div>' +
              '<div class="absolute bottom-5 left-5"><span class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">' + cat.label + '</span></div>' +
            '</div>' +
          '</div>' +
          '<div class="space-y-6">' + itemsHtml + '</div>' +
        '</div>';
    }

    renderFilters(MENU_CATEGORIES[0].id);
    renderContent(MENU_CATEGORIES[0].id);
  }

  /* ---------- CONTACT FORM ---------- */
  function initContactForm() {
    var form = $('#contact-form');
    if (!form) return;
    var successMsg = $('#contact-success');

    // TODO: BACKEND DEVELOPER PLUG API HERE
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (successMsg) {
        successMsg.classList.remove('hidden');
        setTimeout(function () { successMsg.classList.add('hidden'); }, 5000);
      }
      form.reset();
    });
  }

  /* ---------- ADMIN DASHBOARD ---------- */
  function initAdmin() {
    var adminRoot = $('#admin-root');
    if (!adminRoot) return;

    var navItems = $all('.admin-nav-item');
    var sections = $all('.admin-section');

    function switchSection(id) {
      navItems.forEach(function (n) {
        if (n.getAttribute('data-section') === id) {
          n.classList.add('bg-gold/15', 'text-gold');
          n.classList.remove('text-slate-400', 'hover:bg-white/5', 'hover:text-white');
        } else {
          n.classList.remove('bg-gold/15', 'text-gold');
          n.classList.add('text-slate-400', 'hover:bg-white/5', 'hover:text-white');
        }
      });
      sections.forEach(function (s) {
        if (s.id === 'section-' + id) {
          s.classList.remove('hidden');
        } else {
          s.classList.add('hidden');
        }
      });
    }

    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        switchSection(item.getAttribute('data-section'));
      });
    });

    // Render overview stats
    var statsContainer = $('#overview-stats');
    if (statsContainer) {
      statsContainer.innerHTML = OVERVIEW_STATS.map(function (stat) {
        return '<div class="rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5">' +
          '<div class="flex items-center justify-between mb-4">' +
            '<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">' +
              '<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/></svg>' +
            '</div>' +
            '<span class="text-3xl font-bold text-white" style="font-family:Georgia,serif">' + stat.value + '</span>' +
          '</div>' +
          '<p class="text-sm text-slate-400">' + stat.label + '</p>' +
        '</div>';
      }).join('');
    }

    // Render recent reservations in overview
    var recentRes = $('#recent-reservations');
    if (recentRes) {
      recentRes.innerHTML = RESERVATIONS.slice(0, 4).map(function (r) {
        return '<tr class="hover:bg-white/[0.02] transition-colors">' +
          '<td class="px-4 py-3 font-mono text-xs text-gold/80">' + r.id + '</td>' +
          '<td class="px-4 py-3 text-white">' + r.guest + '</td>' +
          '<td class="px-4 py-3 text-slate-400">' + r.roomType + '</td>' +
          '<td class="px-4 py-3 text-slate-400">' + r.checkIn + '</td>' +
          '<td class="px-4 py-3">' + statusBadge(r.status) + '</td>' +
        '</tr>';
      }).join('');
    }

    // Render room inventory
    var roomInv = $('#room-inventory-body');
    if (roomInv) {
      roomInv.innerHTML = ROOM_INVENTORY.map(function (r) {
        return '<tr class="hover:bg-white/[0.02] transition-colors">' +
          '<td class="px-4 py-3 font-mono text-xs text-gold/80">' + r.room + '</td>' +
          '<td class="px-4 py-3 text-white">' + r.type + '</td>' +
          '<td class="px-4 py-3 text-slate-400">' + r.floor + '</td>' +
          '<td class="px-4 py-3 text-slate-400">' + (r.guest || '—') + '</td>' +
          '<td class="px-4 py-3">' + statusBadge(r.status) + '</td>' +
        '</tr>';
      }).join('');
    }

    // Render reservations
    var resBody = $('#reservations-body');
    if (resBody) {
      resBody.innerHTML = RESERVATIONS.map(function (r) {
        return '<tr class="hover:bg-white/[0.02] transition-colors">' +
          '<td class="px-4 py-3 font-mono text-xs text-gold/80">' + r.id + '</td>' +
          '<td class="px-4 py-3 text-white">' + r.guest + '</td>' +
          '<td class="px-4 py-3 text-slate-400">' + r.roomType + '</td>' +
          '<td class="px-4 py-3 text-slate-400 whitespace-nowrap">' + r.checkIn + '</td>' +
          '<td class="px-4 py-3 text-slate-400 whitespace-nowrap">' + r.checkOut + '</td>' +
          '<td class="px-4 py-3 text-slate-400">' + r.guests + '</td>' +
          '<td class="px-4 py-3">' + statusBadge(r.status) + '</td>' +
        '</tr>';
      }).join('');
    }

    // Render concierge messages
    var msgContainer = $('#messages-list');
    if (msgContainer) {
      msgContainer.innerHTML = CONCIERGE_MESSAGES.map(function (m) {
        var initials = m.sender.split(' ').map(function (n) { return n[0]; }).join('').slice(0, 2);
        var dot = m.read ? '' : '<span class="h-2 w-2 rounded-full bg-gold"></span>';
        return '<div class="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 hover:border-gold/15 transition-colors cursor-pointer">' +
          '<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">' +
            '<span class="text-xs font-bold text-gold">' + initials + '</span>' +
          '</div>' +
          '<div class="flex-1 min-w-0">' +
            '<div class="flex items-center justify-between gap-2 mb-1">' +
              '<div class="flex items-center gap-2"><span class="text-sm font-semibold text-white">' + m.sender + '</span>' + dot + '</div>' +
              '<span class="text-[11px] text-slate-500 whitespace-nowrap">' + m.received + '</span>' +
            '</div>' +
            '<p class="text-sm font-medium text-slate-300 mb-1">' + m.subject + '</p>' +
            '<p class="text-xs text-slate-500 truncate">' + m.preview + '</p>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    // Admin mobile sidebar
    var adminMenuOpen = $('#admin-menu-open');
    var adminMenuClose = $('#admin-menu-close');
    var adminSidebar = $('#admin-sidebar');
    if (adminMenuOpen && adminSidebar) {
      adminMenuOpen.addEventListener('click', function () {
        adminSidebar.classList.remove('-translate-x-full');
      });
      if (adminMenuClose) adminMenuClose.addEventListener('click', function () {
        adminSidebar.classList.add('-translate-x-full');
      });
    }
  }

  function statusBadge(status) {
    var style = STATUS_STYLES[status] || 'bg-slate-400/15 text-slate-400 border-slate-400/20';
    return '<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold whitespace-nowrap ' + style + '">' + status + '</span>';
  }

  /* ---------- SCROLL REVEAL ---------- */
  function initScrollReveal() {
    var els = $all('.reveal');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- SMOOTH SCROLL FOR ANCHOR LINKS ---------- */
  function initSmoothScroll() {
    $all('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (href === '#' || href === '#booking-modal' || href === '#room-detail-modal') return;
        var target = $(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initNavbarScroll();
    initMobileMenu();
    initBookingWidget();
    initBookingModalClose();
    initRoomsPage();
    initDiningPage();
    initContactForm();
    initAdmin();
    initSmoothScroll();
    // Delayed slightly so Tailwind CDN has time to process classes
    setTimeout(initScrollReveal, 100);
  });
})();
