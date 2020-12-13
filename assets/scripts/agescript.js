var month = [1,2,3,4,5,6,7,8,9,10,11,12];
for (let index = 0; index < month.length; index++) {
    $('<option>').text(month[index]).attr('id', month[index]).appendTo('#months')   
};
var days = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
for (let index = 0; index < days.length; index++) {
    $('<option>').text(days[index]).attr('id', days[index]).appendTo('#days')
};
this.years = function(startYear) {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1960;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
}
for (let index = 0; index < years(1980-20).length; index++) {
    $('<option>').text(years(1960)[index]).attr('value', years(1960)[index]).appendTo('#years')
};
var date = new Date();
var currentmonth = date.getMonth()+1;
var currentday = date.getDate();
var output = date.getFullYear() + '/' +
    (currentmonth<10 ? '0' : '') + currentmonth + '/' +
    (currentday<10 ? '0' : '') + currentday;

//VERIFICATION BUTTONS AND CASCADING ELEMENTS
$('#warningbox').addClass('hide');
$('#symptombox').addClass('hide');
$('#userbox').addClass('hide');
$('#effectsbox1').addClass('hide');
$('#effectsbox2').addClass('hide');
$('#savedstrain').addClass('hide');
//AGE VERIFICATION
$('#agebtn').click(function (e) { 
    e.preventDefault();
//CALCULATE AGE
function calculate_age(dob) { 
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms);
return Math.abs(age_dt.getUTCFullYear() - 1970);
}

var age = calculate_age(new Date($('#years option:selected').text(), $('#months option:selected').text(),$('#days option:selected').text()));

if (age < 21 || ''){
    alert("Sorry, Must Be 21 or Older to Continue")
}
else{
    $('.age-ver').attr('class', 'hide');
    $('#warningbox').removeClass('hide');
}
console.log(age); // AGE IS INPUT DATE - 1970
});

//WARNING BUTTON
$('#warningbtn').click(function (e) { 
    e.preventDefault();
    $('#warningbox').attr('class', 'hide')
    $('#symptombox').removeClass('hide');
    $('#userbox').removeClass('hide');
    $('#effectsbox1').removeClass('hide');
    $('#effectsbox2').removeClass('hide');
    $('#savedstrain').removeClass('hide');
});
