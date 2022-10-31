function getNotifs() {

    var readNotifs = document.getElementsByClassName('read');
    for (const notif of readNotifs) {
        readNotification(notif);
    }

    var numUnreadNotifs = document.getElementsByClassName('unread').length;
    const notifCounter = document.getElementById('numNotifs').innerText;
    notifCounter.innerText = numUnreadNotifs;

    var notifs = document.getElementsByClassName('notif');
    for (const notif of notifs) {
        notif.addEventListener('click', () => {
            readNotification(notif);
        });
    }
}

// set all notification classes to read and remove unread
function readAll() {

    var notifIcons = document.getElementsByClassName('notif-icon');
    for (const icon of notifIcons) {
        icon.style.display = 'none';
    }

    var notifs = document.getElementsByClassName('notif');
    for (const notif of notifs) {
        notif.style.backgroundColor = 'var(--white)';
    }

    this.setNumNotifs(0);
}

// read a specific notification by adding/removing respective classes
const readNotification = (notif) => {
    notif.classList.remove('unread');
    notif.classList.add('read');
    this.setNumNotifs(this.getNumNotifs());
}


function setNumNotifs(numberOfNotifs) {
    const notif = document.getElementById('numNotifs');
    notif.innerText = numberOfNotifs;
}

function getNumNotifs() {
    return document.getElementsByClassName('unread').length;
}