$(document).ready(function(){

var template_html = $('#template').html();
var template_function = Handlebars.compile(template_html);

// var giorno_iniziale = moment().year('2018').month('0').date('01')
var start_date = moment('2018-01-01');
var end_date = moment('2018-12-31');
var current_date = start_date;
console.log(current_date);
var giorni = current_date.daysInMonth();
console.log(giorni);
disegna_mese(current_date);

$('#suc').click(function(){
  if(current_date.isSameOrAfter(end_date)){
    alert('data oltre il limite max');
  } else {
    giorni = current_date.daysInMonth();
    disegna_mese(current_date);
  }
});

$('#prec').click(function(){
  if(current_date.isSameOrBefore(start_date)){
    alert('data oltre il limite min');
  } else {
    current_date.subtract(2,'months');
    console.log(current_date);
    giorni = current_date.daysInMonth();
    disegna_mese (current_date);
  }
});



var giorno

function disegna_mese (giorno_selezionato) {
  $('#mese_corrente').text(current_date.format('MMMM'))

  $('#calendario').html('');

  giorno =(giorno_selezionato).format('dddd DD MMMM YYYY');
    var variables = {'giorno_template' : giorno}
  $('#calendario').append(template_function(variables));

  for (var i = 1; i < giorni; i++) {

    giorno =(giorno_selezionato).add(1, 'days').format('dddd DD MMMM YYYY');

    var variables = {'giorno_template' : giorno}
    $('#calendario').append(template_function(variables));
  }
  (giorno_selezionato).add(1, 'days');

}


})
