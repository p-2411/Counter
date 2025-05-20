let guestCount = 0;
let homeCount = 0;

function increaseGuestCount(num) {
    guestCount += num;
    console.log(guestCount);

    let count = document.getElementById("guestCount");
    count.textContent = guestCount;
}

function increaseHomeCount(num) {
    homeCount += num;
    console.log(homeCount);
    let count = document.getElementById("homeCount");
    count.textContent = homeCount;
}

function reset(id) {
    eval(id + '=' + 0);
    document.getElementById(id).textContent = 0;
}