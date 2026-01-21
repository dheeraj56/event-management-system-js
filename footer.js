
let footer_links = [
    {
        link1:"Create Events",
        link2:"Sell Tickets Online",
        link3:"New Orleans Food & Drink Events",
        link4:"Contact Support",
        name1:"Create Events",
        name2:"Sell Tickets Online",
        name3:"New Orleans Food & Drink Events",
        name4:"Contact Support",
    },
    {
        link1:"Pricing",
        link2:"Performing Arts Ticketing Software",
        link3:"San Francisco Holiday Events",
        link4:"Contact Sales",
        name1:"Pricing",
        name2:"Performing Arts Ticketing Software",
        name3:"San Francisco Holiday Events",
        name4:"Contact Sales",
    },
    {
        link1:"Event Marketing Platform",
        link2:"Sell Concert Tickets Online",
        link3:"Tulum Music Events",
        link4:"X",
        name1:"Event Marketing Platform",
        name2:"Sell Concert Tickets Online",
        name3:"Tulum Music Events",
        name4:"X",
    },
    {
        link1:"Eventbrite Mobile Ticket App",
        link2:"Event Payment System",
        link3:"Denver Hobby Events",
        link4:"Facebook",
        name1:"Eventbrite Mobile Ticket App",
        name2:"Event Payment System",
        name3:"Denver Hobby Events",
        name4:"Facebook",
    },
    {
        link1:"Eventbrite Check-In App",
        link2:"Solutions for Professional Services",
        link3:"Atlanta Pop Music Events",
        link4:"LinkedIn",
        name1:"Eventbrite Check-In App",
        name2:"Solutions for Professional Services",
        name3:"Atlanta Pop Music Events",
        name4:"LinkedIn",
    },
    {
        link1:"Eventbrite App Marketplace",
        link2:"Event Management Software",
        link3:"New York Events",
        link4:"Instagram",
        name1:"Eventbrite App Marketplace",
        name2:"Event Management Software",
        name3:"New York Events",
        name4:"Instagram",
    },
    {
        link1:"Event Registration Software",
        link2:"Halloween Party Planning",
        link3:"Chicago Events",
        link4:"TikTok",
        name1:"Event Registration Software",
        name2:"Halloween Party Planning",
        name3:"Chicago Events",
        name4:"TikTok",
    },
    {
        link1:"Community Guidelines",
        link2:"Virtual Events Platform",
        link3:"Events in Dallas Today",
        link4:"",
        name1:"Community Guidelines",
        name2:"Virtual Events Platform",
        name3:"Events in Dallas Today",
        name4:"",
    },
    {
        link1:"FAQs",
        link2:"QR Codes for Event Check-In",
        link3:"Los Angeles Events",
        link4:"",
        name1:"FAQs",
        name2:"QR Codes for Event Check-In",
        name3:"Los Angeles Events",
        name4:"",
    },
    {
        link1:"Sitemap",
        link2:"Post your event online",
        link3:"Washington Events",
        link4:"",
        name1:"Sitemap",
        name2:"Post your event online",
        name3:"Washington Events",
        name4:"",
    },
    
]

let footer = document.getElementById("f1");

function footer_link_data(footer_links) {

    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    let col3 = document.createElement("div");
    let col4 = document.createElement("div");
    col1.innerHTML = `<h5>Use Eventbrite</h5>`
    col2.innerHTML = `<h5>Plan Events</h5>`
    col3.innerHTML = `<h5>Find Events</h5>`
    col4.innerHTML = `<h5>Connect With Us</h5>`

    col1.className = "f1-col";
    col2.className = "f1-col";
    col3.className = "f1-col";
    col4.className = "f1-col";

    footer_links.forEach(item => {
        col1.innerHTML += `<a href="${item.link1} " target="_blank">${item.name1}</a>`;
        col2.innerHTML += `<a href="${item.link2}"target="_blank">${item.name2}</a>`;
        col3.innerHTML += `<a href="${item.link3}"target="_blank">${item.name3}</a>`;
        col4.innerHTML += `<a href="${item.link4}"target="_blank">${item.name4}</a>`;
    });

    footer.append(col1, col2, col3, col4);
}

if (footer) {
    footer_link_data(footer_links);
}
