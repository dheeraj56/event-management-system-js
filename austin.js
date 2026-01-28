const events= [
  {
    img: "https://source.unsplash.com/400x300/?austin,event,1",
    description: "Austin Tech & Startup Networking Meetup",
    date: "Sat, Feb 8 • 5:00 PM",
    loc: "Austin Convention Center",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,conference,2",
    description: "Austin Digital Marketing Masterclass",
    date: "Sun, Feb 9 • 3:00 PM",
    loc: "Capital Factory",
    price: "From $20.00",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,technology,3",
    description: "Women in Tech – Austin Chapter",
    date: "Tue, Feb 11 • 6:30 PM",
    loc: "WeWork Austin",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,workshop,4",
    description: "Personal Growth Workshop for Professionals",
    date: "Thu, Feb 13 • 7:00 PM",
    loc: "Austin Central Library",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,business,5",
    description: "Austin Business Leaders Meetup",
    date: "Fri, Feb 14 • 6:00 PM",
    loc: "Downtown Austin",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,startup,6",
    description: "Startup Pitch & Investor Connect",
    date: "Sat, Feb 15 • 11:00 AM",
    loc: "Tech Ranch",
    price: "From $10.00",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,networking,7",
    description: "Young Professionals Networking Mixer",
    date: "Sun, Feb 16 • 5:30 PM",
    loc: "Rooftop Austin",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,seminar,8",
    description: "Career Growth & Resume Workshop",
    date: "Tue, Feb 18 • 6:00 PM",
    loc: "Austin Career Center",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,education,9",
    description: "Leadership Skills Training",
    date: "Wed, Feb 19 • 7:00 PM",
    loc: "Austin Training Hub",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,finance,10",
    description: "Financial Planning for Professionals",
    date: "Thu, Feb 20 • 6:30 PM",
    loc: "Austin Finance Club",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,marketing,11",
    description: "Social Media Marketing Workshop",
    date: "Fri, Feb 21 • 4:00 PM",
    loc: "Austin Media Lab",
    price: "From $15.00",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,ai,12",
    description: "AI & Automation for Business",
    date: "Sat, Feb 22 • 10:00 AM",
    loc: "Austin AI Hub",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,coding,13",
    description: "Web Development Bootcamp Intro",
    date: "Sun, Feb 23 • 12:00 PM",
    loc: "Code Austin",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,design,14",
    description: "UI/UX Design Thinking Workshop",
    date: "Mon, Feb 24 • 6:00 PM",
    loc: "Design Studio Austin",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,entrepreneur,15",
    description: "Entrepreneurs Coffee Meetup",
    date: "Tue, Feb 25 • 8:00 AM",
    loc: "Starbucks Austin",
    price: "Free",
    link: "austin.html"
  },
  {
    img: "https://source.unsplash.com/400x300/?austin,conference,16",
    description: "Austin Business & Tech Conference",
    date: "Wed, Feb 26 • 9:00 AM",
    loc: "Austin Expo Center",
    price: "From $30.00",
    link: "austin.html"
  }
];  



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
