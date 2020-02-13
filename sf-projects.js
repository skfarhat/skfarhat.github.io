const isSet = (val) => val !== null && typeof(val) !== 'undefined'

const projects = [
  {
    "hidden": false,
    "Year": 2011,
    "Project": "AUB ElectionPolls",
    "Where": "Personal",
    "Languages": "iOS",
    "Description": "My first iOS app, was designed for people working and organising the university's student elections allowing them to generate polls and predictions.",
  },
  {
    "hidden": false,
    "Year": 2012,
    "Project": "MemesGame",
    "Where": "Personal",
    "Languages": "iOS",
    "Description": "A simple iOS game similar to space-shooters.",
  },
  {
    "hidden": true,
    "Year": 2012,
    "Project": "Gig Stocks",
    "Where": "IDS",
    "Languages": "iOS",
    "Description": "",
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "Stamp Database (ECE 433)",
    "Where": "AUB",
    "Languages": "C#, MS Server",
    "Description": "A team-of-3 \"Database Design\" course project, required the provision of stamp marketplace where buyers and sellers can buy and sell stamp collections.",
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "TerraNet App (ECE 430)",
    "Where": "AUB",
    "Languages": "Android, SQLite, SOAP",
    "Description": "Worked with TerraNet[link], a Lebanese ISP provider, on an Android application supporting their customers in with their business requirements.",
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "Shop Inventory Manager (ECE 434)",
    "Where": "AUB",
    "Languages": "Java",
    "Description": "Inventory manager system where products can be added, removed, updated and bought by customers.",
  },
  {
    "hidden": true,
    "Year": 2013,
    "Project": "GoogleGlass (450)",
    "Where": "AUB",
    "Languages": "Java",
    "Description": "",
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "Consent",
    "Where": "Albion Innovations",
    "Languages": "iOS",
    "Description": "Summer Internship - iOS app that aimed to digitise consent between medical patients and their physicians.",
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "Consulting Interview",
    "Where": "AUB",
    "Languages": "iOS",
    "Description": " iOS App, an undergraduate student's guide to applying for consulting positions at top firms with case studies, maths exercises, brainteasers, and interview tips. The iOS application has +2000 downloads on the App Store."
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "manutdlebanon.com",
    "Where": "For Friend",
    "project_link": "http://manutdlebanon.com",
    "Languages": "PHP",
    "Description": "Developed and maintain website for a Lebanese football supporter's club. The site routinely crawls and scrapes the web to update upcoming fixtures and previous results, thus updating itself.",
  },
  {
    "hidden": false,
    "Year": 2013,
    "Project": "Smart Traffic (ECE 450)",
    "Where": "AUB",
    "Languages": "Java, iOS, MySQL",
    "Description": "Java application displaying simulating a smart-vehicle traffic system where cars to auto-adjust speed and acceleration. The cars handshake with Central Traffic Units, sending their exact position and speed – helping enforce speed restrictions.",
  },
  {
    "hidden": true,
    "Year": 2013,
    "Project": "Frigate",
    "Where": "Albion Innovations",
    "Languages": "PHP, MySQL",
    "Description": "", // Worked on the backend of a website
  },
  {
    "hidden": false,
    "Year": 2014,
    "Project": "Suspect Pattern Engine (FYP)",
    "Where": "AUB",
    "Languages": "Java",
    "Description": "Undergraduate Final Year Project - a Java application with MySQL backend that allows users to analyse traffic data and infer suspicious behaviour through customisable search queries.",
  },
  {
    "hidden": false,
    "Year": 2014,
    "Project": "Betting Fantasy",
    "Where": "Personal",
    "Languages": "iOS, PHP, Java, MySQL",
    "Description": "An iOS app similar to Fantasy Football but where users make bets on the results of upcoming fixtures and competing with peers.",
  },
  {
    "hidden": true,
    "Year": 2014,
    "Project": "Proj624",
    "Where": "AUB",
    "Languages": "Java",
    "Description": "",
  },
  {
    "hidden": false,
    "Year": 2014,
    "Project": "Jom & Terry",
    "Where": "AUB",
    "Languages": "Java, Slick2D, MySQL",
    "Description": "Police and Robber 2D game for an undergraduate course.",
  },
  {
    "hidden": false,
    "Year": 2014,
    "Project": "Le Phenician",
    "Where": "For friend",
    "Languages": "iOS",
    "Description": "An iOS app for a friend's restaurant in Angola.",
  },
  {
    "hidden": false,
    "Year": 2016,
    "Project": "Advanced Backgrounds",
    "Where": "Personal",
    "Languages": "iOS, AppleScript",
    "Description": "A Mac OS app that allows users to configure automated wallpaper changes, through AppleScripts, every period t. This functionality has recently been added to Mac OSes, but no solutions existed at the time.",
  },
  {
    "hidden": false,
    "Year": 2016,
    "Project": "TDMSDecoder",
    "Where": "OpenIOLabs",
    "Languages": "Java",
    "Description": "Developed for OpenIOLabs, the first Java-based decoder for the TDMS file extension created by National Instruments.",
  },
  {
    "hidden": false,
    "Year": 2016,
    "Project": "Assaco",
    "Where": "For Friend",
    "Languages": "PHP, Wordpress",
    "Description": "A customer-facing website for a friend's company.",
  },
  {
    "hidden": false,
    "Year": 2016,
    "Project": "FetchMyBeer",
    "Where": "Personal",
    "Languages": "Python, C++, OpenCV, RaspberryPi",
    "Description": "A robot that can locate and fetch beer cans using image recognition with OpenCV. Raspberry Pi for motor control and sensory input.",
  },
  {
    "hidden": false,
    "Year": 2017,
    "Project": "Game Of Life",
    "project_link": "https://github.com/skfarhat/game-of-life",
    "Where": "Oxford",
    "Languages": "Java, Gradle",
    "Description": "Assignment for OOP graduate course - an agent based model system with Wolf, Deer and Grass objects moving, reproducing and consuming one another. System designed with emphasis on modularity, plugability and flexibility.",
  },
  {
    "hidden": true,
    "Year": 2017,
    "Project": "STE",
    "Where": "Oxford",
    "Languages": "Java-Cucumber",
    "Description": "",
  },
  {
    "hidden": true,
    "Year": 2017,
    "Project": "Design Patterns",
    "Where": "Oxford",
    "Languages": "Java",
    "Description": "",
  },
  {
    "hidden": false,
    "Year": 2018,
    "Project": "CRM Website",
    "Where": "Personal",
    "Languages": "NodeJS, Mongo",
    "Description": "Developed a fully-fledged CRM system for my blog website. I later switched to a static site using gohugo to help me focus on the blog's content, because maintenance was too much of a distraction.",
  },
  {
    "hidden": true,
    "Year": 2019,
    "Project": "Functional Programming",
    "Where": "Oxford",
    "Languages": "Haskell",
    "Description": "",
  },
  {
    "hidden": false,
    "Year": 2020,
    "Project": "Ethbnb (MSc Thesis)",
    "Where": "Oxford",
    "Languages": "NodeJS, JS, Solidity (Ethereum), MongoDB",
    "Description": "A decentralised Airbnb-like property letting system built on the Ethereum blockchain.",
    "project_link": "https://github.com/skfarhat/ethbnb"
  }
]

function removeMaxWidthConstraintOnArticle() {
  // Override default width=900px to have a big table
  const articleDOM = $('#sf-projects-table').closest('article')
  articleDOM.css('max-width', 'none')
  articleDOM.parents('.content1').css({padding: '20px 20px 0px'})
  articleDOM.parents('article').css({maxWidth: 'none'})
}

function getDOMForProject(project, headers) {
  const root = document.createElement('tr')
  headers.forEach(header => {
    const td = document.createElement('td')
    $(td).html(project[header])
    root.appendChild(td)
  })
  return root.outerHTML
}

function renderTable(projects) {
  const headers = ['Year', 'Project', 'Where', 'Languages', 'Description']
  const thead = document.createElement('thead')
  const headRow = document.createElement('tr')
  const displayedProjects = projects.filter(prj => isSet(prj.hidden) && prj.hidden === false)
  headers.forEach(header => $(headRow).append('<th>' + header + '</th>'))
  $(thead).append(headRow)
  // Create Table
  $('#sf-projects-table').append(thead)
  $('#sf-projects-table').DataTable({
    data: displayedProjects,
    paging: false, // don't do paging
    info: false, // don't show information at bottom of table (e.g. 'Showing xx')
    order: [[0, 'desc']],
    columns: [{name: 'Year', data: 'Year'}, {data: 'Project'},{data: 'Where'},  {data: 'Languages'}, {data: 'Description'}],
    columnDefs: [{
      // The `data` parameter refers to the data for the cell (defined by the
      // `data` option, which defaults to the column being worked with, in
      // this case `data: 0`.
      render: function (data, type, row) {
        if (isSet(row.project_link)) {
          const aDOM = document.createElement('a')
          aDOM.href = row.project_link
          aDOM.target = '_blank'
          aDOM.innerHTML = data
          return aDOM.outerHTML
        } else{
          return data
        }
      },
      "targets": 1
    }],
  })
  // Adjust Search area layout
  const filterDiv = $('#sf-projects-table_filter')
  const filterLabel = filterDiv.find("label").first()
  const filterInput = filterDiv.find("input").first()
  const results = filterLabel.contents().filter(function () {
    return this.nodeType === 3;
  }).remove();
  filterDiv.css('text-align', 'right')
  filterInput.attr("placeholder", "Filter table..")
}

removeMaxWidthConstraintOnArticle()
renderTable(projects)