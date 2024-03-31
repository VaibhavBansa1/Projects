let aa = 1
function render(date_increment){
let month = new Date().getMonth() + date_increment;
let current = new Date().getFullYear();
// let year = new Date(current,month).getFullYear() ;
let lastDayOfMonth = new Date(current, month, 0);
let firstDayOfMonth = new Date(current, month-1, 1);
let max_date = lastDayOfMonth.getDate()
let start_day = firstDayOfMonth.getDay()
// console.log('month',month);
// console.log('current',current)
// console.log('year',year)
// console.log('lastDayOfMonth',lastDayOfMonth)
// console.log('firstDayOfMonth',firstDayOfMonth);
// console.log('max_date',max_date);
// console.log('start_day',start_day);
if( start_day >= 5 && max_date === 31){
    let last_row = document.getElementById('dyn_date');
    last_row.style.display="contents";
}
else if(start_day > 5 && max_date === 30){
    let last_row = document.getElementById('dyn_date');
    last_row.style.display="contents";
}
else{
    let last_row = document.getElementById('dyn_date');
    last_row.style.display="none";
}
let a = document.getElementsByClassName("dates");
k = 1;
for (let i = 0; i <= 41; i++) {
    a[i].innerText = "";
}
for (let i = start_day; i <= 41; i++) {
    if (k <= max_date){
        a[i].innerText = k++;
    }
}
let months_name = {
    11 : "Dec",
    10 : "Nov",
    9 : "Oct",
    8 : "Sep",
    7 : "Aug",
    6 : "Jul",
    5 : "Jun",
    4 : "May",
    3 : "Apr",
    2 : "Mar",
    1 : "Fab",
    0 : "Jan"
}
// console.log(lastDayOfMonth.getFullYear())
document.getElementById('fullyear').innerText = lastDayOfMonth.getFullYear()
document.getElementById('fullmonth').innerText = months_name[firstDayOfMonth.getMonth() % 12]
}
render(aa);