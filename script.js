var Totaltip, totalPercentage, tipPercantage, billValue, Totalpeople;
var custom = document.getElementById("custom");

// geting the value from bill
var bill = document.getElementById("bill");
bill.addEventListener("input", function () {
    billValue = bill.value;
    actual();



});

// geting the total people
var people = document.getElementById("people");
people.addEventListener("input", function () {
    Totalpeople = people.value;
    actual();
});

// get the per% when the amount is selected
var select = document.querySelectorAll(".a");
select.forEach(function (a) {
    a.onclick = function () {
        tipPercantage = parseInt(a.innerText)
        actual();
    };
});


//  or use custom buttom/input
custom.addEventListener("input", function () {
    tipPercantage = custom.value;
    actual();
})

function actual() {
    totalPercentage = billValue * (tipPercantage / 100);
    Totaltip = totalPercentage * Totalpeople;
    document.getElementById("single-person").innerText = "$" + totalPercentage.toFixed(2);
    document.getElementById("total-bill").innerText = "$" + Totaltip.toFixed(2);
}

//  reset the window on click in button
var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
    location.reload()
})