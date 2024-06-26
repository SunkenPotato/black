document.addEventListener('DOMContentLoaded', function (){
    var currentPage = window.location.pathname

    var navbarLinks = document.querySelectorAll('.nav-link')

    navbarLinks.forEach(function(link) {
        var linkPage = link.getAttribute('href')
        if (linkPage == currentPage) {
            link.classList.add('active')
        }
    })
})