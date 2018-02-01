// JavaScript Document
function Procesos(){
$('#menuproc').toggleClass('adios');
}

$(document).ready( function(){
$('#menu').click(function() {  
	$('.hola, .adios').toggleClass('adios hola');
});
$('#wmics').click(function() {  
	$('#wmic').show();
	$('#wellcome').hide();
});

});

$(document).ready(function() {
			var addclass = 'Selected';
			var $cols = $('li').click(function(e) {
			$cols.removeClass(addclass);
    		$(this).addClass(addclass);
				});});
				

