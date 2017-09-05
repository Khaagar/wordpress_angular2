var wpInfo = {
        "apiDataUrl": "http:\/\/new-project.localhost\/wp-json\/wp\/v2\/",
        "apiMenusUrl": "http:\/\/new-project.localhost\/wp-json\/wp-api-menus\/v2\/",
        "templateDirectory": "http:\/\/new-project.localhost\/wp-content\/themes\/angular-theme\/",
        "nonce": "7348b7c58a",
        "isAdmin": "1", "siteTitle": "Strona główna",
        "carouselId": "carousel-front", 
        "teamId": "carousel-team",
        "mainMenu": "header-footer-menu",
        "teamPpCarousel": "4",
        "carouselImageName":"frontpage-carousele-size",
        "teamImageName":"team-carousele-size" 
    };

  
var calendarInfo = [{
        "calendarUrl":"https://www.googleapis.com/calendar/v3/calendars/roche.com_l4jj87q7fklrbvkii3v6n8gotc%40group.calendar.google.com/events?key=AIzaSyArQXuswcbAz7NkVt0hiRWMBpkQM-_lKRo&singleEvents=true",
        "calendarColor":"orange",
        "calendarName":"internal"
    },
    {
        "calendarUrl":"https://www.googleapis.com/calendar/v3/calendars/roche.com_3ub091a415lgm5t9so9de7gsok%40group.calendar.google.com/events?key=AIzaSyArQXuswcbAz7NkVt0hiRWMBpkQM-_lKRo&singleEvents=true",
        "calendarColor":"blue",
        "calendarName":"external"
    }]

    var viewDate = new Date();
    var events = [];