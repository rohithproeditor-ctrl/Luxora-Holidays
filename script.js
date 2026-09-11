const destinations = [
  {name:'Ooty', desc:'Misty tea gardens, quiet roads and cool mountain air.', exp:'Tea estates · Scenic train rides · Viewpoints', image:'https://images.unsplash.com/photo-1590766940554-634a7fd13605?auto=format&fit=crop&w=1100&q=85'},
  {name:'Kodaikanal', desc:'A gentle escape where forest trails meet lake-side stillness.', exp:'Lake walks · Pine forests · Waterfalls', image:'https://images.unsplash.com/photo-1580632006145-8db9c419e14a?auto=format&fit=crop&w=1100&q=85'},
  {name:'Kerala', desc:'Unhurried backwaters, lush palms and a little more time.', exp:'Backwaters · Beaches · Local flavours', image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1100&q=85'}
];
const packages = [
  {name:'Ooty Escape', duration:'2 Nights / 3 Days', type:'Hill station · Couples / families', text:'A refreshing break among green slopes and old-world charm.'},
  {name:'Kodaikanal Escape', duration:'2 Nights / 3 Days', type:'Hill station · Friends / couples', text:'Slow mornings, forest air and space to simply be together.'},
  {name:'Kerala Experience', duration:'3 Nights / 4 Days', type:'Coast & backwaters · Customized', text:'A layered journey through calm waters and tropical colour.'}
];
document.querySelector('#destinationGrid').innerHTML = destinations.map((d,i)=>`<article class="destination"><img src="${d.image}" alt="${d.name}" loading="lazy"><div class="destination-content"><p class="eyebrow">0${i+1} / DESTINATION</p><h3>${d.name}</h3><p>${d.desc}</p><p class="experience-meta">${d.exp}</p><a class="text-link" href="#trip-builder">Explore destination <span>→</span></a></div></article>`).join('');
document.querySelector('#packageGrid').innerHTML = packages.map((p,i)=>`<article class="package"><span class="package-num">0${i+1}</span><h3>${p.name}</h3><span class="meta">${p.duration}</span><p>${p.text}</p><span class="meta">${p.type}</span><a class="text-link wa-link" href="#contact">Get quote <span>→</span></a></article>`).join('');
const phone='918825425838';
function whatsapp(message){window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank','noopener');}
document.querySelectorAll('.wa-link').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();whatsapp('Hello Luxora Holidays! I would like to plan a trip.\n\nDestination:\nTravel Date:\nTravellers:\nTrip Type:');}));
document.querySelector('#quickForm').addEventListener('submit',e=>{e.preventDefault(); const f=new FormData(e.target); whatsapp(`Hello Luxora Holidays! I would like to plan a trip.\n\nDestination: ${f.get('destination')}\nTravel Date: ${f.get('date')}\nTravellers: ${f.get('travellers')}\nTrip Type:`);});
document.querySelector('#tripForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);document.querySelector('.form-status').textContent='Thank you. Your Luxora trip request has been received.';whatsapp(`Hello Luxora Holidays! I would like to plan a trip.\n\nDestination: ${f.get('destination')}\nTravel Date: ${f.get('travelDate')}\nTravellers:\nTrip Type: ${f.get('tripType')}\nDays: ${f.get('days')}\nNotes: ${f.get('notes')}`);});
document.querySelector('#contactForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);whatsapp(`Hello Luxora Holidays! I would like to make an enquiry.\n\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nDestination: ${f.get('destination')}\nMessage: ${f.get('message')}`);});
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));
