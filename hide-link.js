document.addEventListener('DOMContentLoaded', function() {
    var linksToHide = document.querySelectorAll('a.link-to-hide');

    for (var i = 0; i < linksToHide.length; i++) {
        var linkText = linksToHide[i].textContent || linksToHide[i].innerText;
        if (linkText === 'Links' || linkText === 'Liens') {
            linksToHide[i].style.display = 'none';
        }
    }
});
