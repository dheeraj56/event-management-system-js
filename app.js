let events = [
    {
        logo:"assets/mic.png",
        name:"Music",
        link: "music.html" 
    },
    {
        logo:"assets/night.jpg",
        name:"Nightlife",
        link: "nightlife.html" 
    },
    {
        logo:"assets/art.png",
        name:"Performing & Visual Arts",
        link: "arts.html" 
    },
    {
        logo:"assets/holiday.jpg",
        name:"Holidays",
        link: "holidays.html" 
    },
    {
        logo:"assets/dating.png",
        name:"Dating",
        link: "dating.html" 
    },
    {
        logo:"assets/games.png",
        name:"Hobbies",
        link: "hobbies.html" 
    },
    {
        logo:"assets/business.png",
        name:"Business",
        link: "business.html" 
    },
    {
        logo:"assets/food.png",
        name:"Food & Drinks",
        link: "food.html" 
    },
]
let data = [
    {
        img:"assets/card1.jpg",
        description:"How to Stop Procrastinating in 30 Days - January 13th/ 8PM EST",
        date:"Wednesday • 6:30 AM GMT+5:30",
        loc:"",
        price:"Free",
        link:"card1.html"

    },
    {   img:"assets/card2.jpg",
        description:"Masterclass on achieving financial freedom for working professionals",
        date:"Sat, Jan 24 • 2:00 PM",
        loc:"Starbucks",
        price:"Free",
        link:"card2.html"

    },
    {
        img:"assets/card3.jpg",
        description:"Join Biggest Community | Investors Founders | Hyderabad | Online",
        date:"Wed, Jan 21 • 12:30 PM",
        loc:"Hyderabad",
        price:"Free",
        link:"card3.html"

    },
    {
        img:"assets/card4.jpg",
        description:"Spiritual Women Entrepreneurs Networking VIRTUAL",
        date:"Thu, May 7 • 9:30 PM GMT+5:30",
        loc:"",
        price:"Free",
        link:"card4.html"

    },
    {
        img:"assets/card5.jpg",
        description:"Women in Tech Hyderabad - OutGeekWomen",
        date:"Wed, Nov 11 • 6:00 PM",
        loc:"Wed, Nov 11 • 6:00 PM",
        price:"Free",
        link:"card5.html"

    },
    {
        img:"assets/card6.jpg",
        description:"DATACENTRE INNOVATION SERIES - INDIA",
        date:"Wed, Feb 4 • 9:00 AM",
        loc:"THE PARK HYDERABAD",
        price:"Free",
        link:"card6.html"

    },
    {
        img:"assets/card7.jpg",
        description:"Start the Year with a new direction: Workshop for Working Professionals",
        date:"Today • 6:00 PM",
        loc:"Starbucks",
        price:"Free",
        link:"card7.html"

    },
    {
        img:"assets/card8.jpg",
        description:"Test Automation Summit | Hyderabad| 2026",
        date:"Thu, Feb 26 • 9:00 AM",
        loc:"TBD",
        price:"Free",
        link:"card8.html"

    },
    {
        img:"assets/card9.jpg",
        description:"Online Improv Class For Beginners And Non-Actors",
        date:"Wed, Jan 21 • 6:30 AM GMT+5:30",
        loc:"",
        price:"From $30.00",
        link:"card9.html"

    },
    {
        img:"assets/card10.jpg",
        description:"Meet the Royal College of Art in Hyderabad",
        date:"Sat, Feb 7 • 5:00 PM",
        loc:"Taj Deccan, Hyderabad",
        price:"Free",
        link:"card10.html"

    },
    {
        img:"assets/card11.jpg",
        description:"A Practical Masterclass on Financial Growth for Working Professionals",
        date:"Today • 6:00 PM",
        loc:"Starbucks",
        price:"Free",
        link:"card11.html"

    },
    {
        img:"assets/card12.jpg",
        description:"PGP YL Insights: Programme Infosession in Hyderabad",
        date:"Sun, Jan 18 • 3:00 PM",
        loc:"ISB Campus, Khemka Auditorium",
        price:"Free",
        link:"card12.html"

    },
    {
        img:"assets/card13.jpg",
        description:"Hyderabad's Biggest Business & Tech Professional Networking Soiree",
        date:"Wed, Mar 18 • 6:00 PM",
        loc:"Taj Krishna, Hyderabad",
        price:"From $0.00",
        link:"card13.html"

    },
    {
        img:"assets/card14.jpg",
        description:"Cloud Data Engineer GCP Cloud Data",
        date:"Mon, Jan 26 • 10:00 AM",
        loc:"Quality Thought",
        price:"Free",
        link:"card14.html"

    },
    {
        img:"assets/card15.jpg",
        description:"NUS-ISS Graduate Programmes: Preview, Entrance Test & Interview: HYDERABAD",
        date:"Tue, Mar 10 • 9:00 AM",
        loc:"Red Fox Hotel, Hyderabad",
        price:"Free",
        link:"card15.html"

    },
    {
        img:"assets/card16.jpg",
        description:"The Mind Upgrade: Pressure Won’t Wait, Neither Should Clarity",
        date:"Sat, Feb 21 • 6:00 PM",
        loc:"Avasa",
        price:"Free",
        link:"card16.html"
    },
]
function goToPage() {
    let select = document.getElementById("helpCenter");
    let value = select.value;

    if (value !== "") {
        window.location.href = value;
    }
}
let second = document.getElementById("second");
function category(events){
    second.innerHTML = '' ;
    let a = events.map(item => {

        return  `
            <div class="se" onclick="goCategory('${item.link}')">
            <div class="se-1">
            <img src="${item.logo}">
            </div>
            <div class="se-2">
            <p>${item.name}</p>
            </div>
            </div>
        `
    })
    second.innerHTML+= a.join(' ')
}
if (second) {
    category(events);
}

function goCategory(link) {
    window.location.href = link;
}


let cards = document.getElementById("third");
function cards_data(data){
    cards.innerHTML = '' ;
    let b = data.map(card => {
        return  `
            <div class = "cards" onclick="goCategory_cards('${card.link}')">
            <img src="${card.img}">
            <h5>${card.description}</h5>
            <p>${card.date}</p>
            <p>${card.price}</p>
            </div>
        `
    })
    cards.innerHTML+= b.join(' ')
}
if (cards) {
    cards_data(data);
}
function goCategory_cards(link) {
    window.open(link,'_blank')
}

function filterD(category) {
    let search = category.toLowerCase();
    let tempData;

    if (search === 'all') {
        tempData = data;
    } else if (search === 'weekend') {
        const weekendDays = ['fri', 'sat', 'sun'];
        tempData = data.filter(item => 
            weekendDays.some(day => item.date.toLowerCase().includes(day))
        );
    } else {
        tempData = data.filter(item => item.date.toLowerCase().includes(search));
    }

    cards_data(tempData);
}

const carouselData = [
  { img: "/assets/img1.webp", text: "New York",link:"newyork.html" },
  { img: "/assets/img2.webp", text: "Los Angeles",link:"losangeles.html" },
  { img: "/assets/img3.webp", text: "Chicago",link:"chicago.html" },
  { img: "/assets/img4.webp", text: "Washington",link:"washington.html" },
  { img: "/assets/img5.webp", text: "Atlanta",link:"atlanta.html" },
  { img: "/assets/img6.webp", text: "Dallas",link:"dallas.html" },
  { img: "/assets/img7.webp", text: "Houston",link:"houston.html" },
  { img: "/assets/img8.webp", text: "San Fransisco",link:"sanfrans.html" },
  { img: "/assets/img9.webp", text: "Miami",link:"miami.html" },
  { img: "/assets/img10.webp", text: "Boston",link:"boston.html" },
  { img: "/assets/img11.webp", text: "Las Vegas",link:"lasvegas.html" },
  { img: "/assets/img12.webp", text: "Charlotte",link:"charlotte.html" },
  { img: "/assets/img13.webp", text: "Orlando" ,link:"orlando.html"},
  { img: "/assets/img14.webp", text: "Philadelphia",link:"phil.html" },
  { img: "/assets/img15.webp", text: "San Diego",link:"sandiego.html" }
];

const carouselInner = document.getElementById("carouselInner");
const indicators = document.getElementById("carouselIndicators");

const ITEMS_PER_SLIDE = 4;

for (let i = 0; i < carouselData.length; i += ITEMS_PER_SLIDE) {

  /* Create slide */
  const slide = document.createElement("div");
  slide.className = `carousel-item ${i === 0 ? "active" : ""}`;

  let rowHTML = `<div class="row g-3">`;

  carouselData.slice(i, i + ITEMS_PER_SLIDE).forEach(item => {
    rowHTML += `
        <div class="col-3">
        <a href="${item.link}" class="img-card">
        <img src="${item.img}">
        <div class="img-overlay">
        <span>${item.text}</span>
      </div>
    </a>
  </div>
    `;
  });

  rowHTML += `</div>`;
  slide.innerHTML = rowHTML;
  carouselInner.appendChild(slide);

  /* Create indicator */
  const indicator = document.createElement("button");
  indicator.type = "button";
  indicator.setAttribute("data-bs-target", "#eventCarousel");
  indicator.setAttribute("data-bs-slide-to", i / ITEMS_PER_SLIDE);
  if (i === 0) indicator.classList.add("active");

  indicators.appendChild(indicator);
}
let locations = [
    {name:"Things to do in Austin"         ,link:"austin.html"             },
    { name: "Things to do in Abilene"      ,link:"Abilene.html"},
    { name: "Things to do in Denver"       ,link:"Denver.html"},
    { name: "Things to do in Seattle"      ,link:"Seattle.html"},
    { name: "Things to do in Phoenix"      ,link:"Phoenix.html"},
    { name: "Things to do in Albuquerque"  ,link:"Albuquerque.html"},
    { name: "Things to do in Detroit"      ,link:"Detroit.html"},
    { name: "Things to do in Anaheim"      ,link:"Anaheim.html"},
    { name: "Things to do in Raleigh"      ,link:"Raleigh.html"},
    { name: "Things to do in Baltimore"    ,link:"Baltimore.html"},
    { name: "Things to do in Nashville"    ,link:"Nashville.html"},
    { name: "Things to do in Wichita"      ,link:"Wichita.html"},
    { name: "Things to do in Indianapolis" ,link:"Indianapolis.html"},
    { name: "Things to do in San Antonio"  ,link:"Antonio.html"}
]

let loc = document.getElementById("five-2");
function loc_data(locations){
    // loc.innerHTML = "";
    let c = locations.map(i => {
        return  `
            <div class="five-21" onclick="goLocation('${i.link}')">
            <p>${i.name}<i class="fa-solid fa-arrow-up-right-from-square"></i></p>
            </div>
        `
    })
    loc.innerHTML+= c.join(' ')
}
if (loc) {
    loc_data(locations);
}
function goLocation(link) {
    window.open(link,'_blank')
}


