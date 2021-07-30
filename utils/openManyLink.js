"use strict";
function openManyLink(linksToOpen) {
    linksToOpen.forEach(link => {
        window.open(link, '_blank');
    });
}
;
