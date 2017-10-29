$(document).ready(function(){ 
  //on enter runs the submit button function
  $(document).bind('keypress', function(event) {
      if(event.keyCode==13){
           $('#submit').trigger('click');
      }
  });
});

function isValidDate(date) {
    var date = document.getElementById('user-input').value;
    if (hasValidLength(date)) {
        if(dateIsInts(date)) {
            if(hasValidMonth(date)) {
                if(hasValidDelimiter(date)) {
                    if(hasValidDay(date)) {
                        document.body.style.backgroundColor = '#2ECC40';
                    } else {
                        document.body.style.backgroundColor = '#FF4136';
                    }
                } else {
                document.body.style.backgroundColor = '#FF4136';
                }
            } else {
            document.body.style.backgroundColor = '#FF4136';
            }
        } else {
            document.body.style.backgroundColor = '#FF4136';
        }
    } else {
        document.body.style.backgroundColor = '#FF4136';
    }
}

function hasValidLength(date) {
    return date.length === 8 || date.length === 10;
}

function hasValidMonth(date) {
    return date.slice(0,2) === '01' || date.slice(0,2) === '02' || date.slice(0,2) === '03' || 
           date.slice(0,2) === '04' || date.slice(0,2) === '05' || date.slice(0,2) === '06' || 
           date.slice(0,2) === '07' || date.slice(0,2) === '08' || date.slice(0,2) === '09' || 
           date.slice(0,2) === '10' || date.slice(0,2) === '11' || date.slice(0,2) === '12';
}

function hasValidDelimiter(date) {
    return (date.slice(2,3) === '-' && date.slice(5,6) === '-') ||   
           (date.slice(2,3) === '/' && date.slice(5,6) === '/') ||
           (date.slice(2,3) === '.' && date.slice(5,6) === '.');
}

function getDaysInMonth(date) {
    switch(date[0] + date[1]) {
      case '01':
      case '03':
      case '05':
      case '07':
      case '08':
      case '10':
      case '12':
        return 31;
      case '04':
      case '06':
      case '09':
      case '11':
        return 30;
      case '02':
        if (getYear(date) % 4 === 0) {
          return 29;
        }
        return 28;
    }
}  

function getYear(date) {
    var year;
    if (date.length === 10) {
        year = (date[6] + date[7] + date[8] + date[9]);
    } else if (date.length === 8) {
        year = (date[6] + date[7]);
    }
    return +year;
}

function getDay(date) {
    return +(date[3] + date[4]);
}

function hasValidDay(date) {
    var daysInMonth = getDaysInMonth(date);
    var day = getDay(date);
    if (day <= daysInMonth && day >= 1) {
      return true;
    }
    return false;
}

function dateIsInts(date) {
    return (date.slice(0, 2) + date.slice(3, 5) + date.slice(6))
        .split('')
        .reduce((prev, curr) => (!prev ? prev : /^[0-9]$/.test(curr)), true);
}