setInterval(() => {


    let a = new Date()
    let month_num = a.getMonth()
    let d = a.getDate()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let day = a.getDay()
    
    if(h<10){
        h = '0'+h;
    }
    
    if(m<10){
        m = '0'+m;
    }
    
    if(s<10){
        s = '0'+s;
    }
    


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    document.getElementsByClassName("date1 b")[0].textContent = weekday[day]

    document.getElementsByClassName("bo h di")[0].textContent = `${h}:`
    document.getElementsByClassName("bo m di")[0].textContent = `${m}:`
    document.getElementsByClassName("bo s di")[0].textContent = `${s}`
    
    let date1 = months[month_num]

    let date = `${d} ${date1} 2023`

    document.getElementsByClassName("date2 b")[0].textContent = date

    function check(h) {
        if (h >= 5 & h <= 11) {
            return "Morning"
        }
        else if (h > 11 & h <= 16) {
            return "Afternoon"
        }
        if (h > 16 & h <= 22) {
            return "Evening"
        }
        else {
            return "Night"
        }
    }

    let status = check(h)


    document.getElementsByClassName("status")[0].textContent = status

}, 1000)