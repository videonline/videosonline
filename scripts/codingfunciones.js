function CodingReset() {
			
				document.getElementById("Subjets").reset();
				$('#Product, #Plataform, #Goodwill, #Oferta').val(" ");	
				$('#Product1, #Subprod1, #Plataform1, #Topic1, #Subtopic1, #Oferta1, #Goodwill1').text("");
				$('#Specific').prop( "disabled", true );
				$(".Subprod").removeClass('Selected');
				$(".Topic").removeClass('Selected1');
				$(".Subtopic").removeClass('Selected2');
				$('.Subprod').show();
				$('.Topic').show();
				$('.Subtopic').show();
				$('.unable').show();
				$('.unable2').show();
				$('.unable3').show();
				$('.unable4').show();
		}
		
		function ProductsReset() {
			
				document.getElementById("Subjets").reset();
				$('#Plataform, #Goodwill').val(" ");	
				$('#Product1, #Subprod1, #Plataform1, #Topic1, #Subtopic1, #Goodwill1').text("");
				$('#Specific').prop( "disabled", true );
				$(".Subprod").removeClass('Selected');
				$(".Topic").removeClass('Selected1');
				$(".Subtopic").removeClass('Selected2');
				$('.unable2').show();
				$('.unable3').show();
				$('.unable4').show();
		}
		$(function(){ 
            $('#Product').change(function() {           
			$('#Product1').html("/"+ $(this).val());});});

		$(document).ready(function() {
			var addclass = 'Selected';
			var $cols = $('.Subprod').click(function(e) {
			$cols.removeClass(addclass);
    		$(this).addClass(addclass);
			$('#Subprod1').html("/"+$('.Selected').text());
				});});

		$(function(){ 
            $('#Plataform').change(function() {           
			$('#Plataform1').html("/"+ $(this).val());});});

		$(document).ready(function() {
			var addclass = 'Selected1';
			var $cols = $('.Topic').click(function(e) {
			$cols.removeClass(addclass);
    		$(this).addClass(addclass);
			$('#Topic1').html("/"+$('.Selected1').text());
				});});

		$(document).ready(function() {
			var addclass = 'Selected2';
			var $cols = $('.Subtopic').click(function(e) {
			$cols.removeClass(addclass);
    		$(this).addClass(addclass);
			$('#Subtopic1').html("/"+$('.Selected2').text());
				});});
				
		$(function(){ 
            $('#Specific').change(function() {           
			$('#Subtopic1').html("/"+ $(this).val());});});

		$(function(){ 
            $('#Goodwill').change(function() {           
			$('#Goodwill1').html("/"+ $(this).val());});});
		$(function(){ 
            $('#Oferta').change(function() {           
			$('#Oferta1').html("/"+"("+ $(this).val() +")");});});
		
	
	
		function Specific(){
				$('#Specific').prop( "disabled", false );
				}				
		$(document).ready( function(){
				$('#Product').click(function() {  
				$('.unable').hide();
				});
			$('.Subprod').click(function() {  
				$('.unable2').hide();
				});
			$('#Plataform').click(function() {  
				$('.unable3').hide();
				});
			$('.Topic').click(function() {  
				$('.unable4').hide();
				});
				});
				
	$(document).ready( function(){
	$('#Product').click(function(){
				
			var productos = document.getElementById("Product");
			var seleccionados = productos.selectedIndex;
			var opciones = productos.options[seleccionados];
			var producto = opciones.value;
	
			if (producto === "Office 2016"||
			   producto=== "Office 2013"||
			   producto=== "Office 2010"||
			   producto=== "Office 2007"||
			   producto=== "Office 365 Home"||
			   producto=== "Office 365 Personal"||
			   producto=== "Office 365 Pro Plus Student"||
			   producto=== "Office 365 University"||
			   producto=== "Office HUP - Home Use Program") {
				$('.Office').show();
				$('.NoDIA').hide();
				}
			else if(producto === "Answer Desk (Assure)"||
			   producto=== "Bing"||
			   producto=== "Internet Explorer 11"||
			   producto=== "OneDrive"||
			   producto=== "Outlook.com"||
			   producto=== "Product Not Listed"||
			   producto=== "Skype"||
			   producto=== "Windows 10 Games"||
			   producto=== "Windows 10 Home or Pro or S"||
			   producto=== "Windows 10 Insider"||
			   producto=== "Windows 10 Mobile"||
			   producto=== "Windows 7"||
			   producto=== "Windows 8"||
			   producto=== "Windows 8.1"||
			   producto=== "Windows Commercial"||
			   producto=== "Windows Phone"||
			   producto=== "Windows Vista"||
			   producto=== "Windows XP"||
			   producto=== "Xbox") {
				$('.NoDIA').show();
				$('.Office,.Sway,.HW,.MSN').hide();
				}

			else if (producto === "MSN") {
				$('.MSN,.NoDIA').show();
				$('.Office,.Sway,.HW').hide();
				}
				
			else if (producto === "MS Hardware") {
				$('.Office,.Sway,.NoDIA').hide();
				$('.HW').show();
				}
			else if (producto === "Office 2003"||
			   producto=== "Office 365 Commercial"||
			   producto=== "Office Insider Program") {
				$('.Office,.Sway,.NoDIA').hide();
				$('.OLD').show();
				}
			else if (producto === "Office 2016 for Mac"||
			   producto=== "Office for Mac 2011") {
				$('.Office').show();
				$('.Sway,.NoDIA,.NoMac').hide();
				
				}
		else if (producto === "Office Mobile") {
				$('.Office').show();
				$('.Sway,.NoDIA,.NoMac,.NoMul').hide();
				$('.One').show();
				}
		else if (producto === "Office Online") {
				$('.Office').show();
				$('.Sway,.NoDIA,.NoMac,.NoMul,.NoOn').hide();
				$('.One').show();
				}
		else if (producto === "Office Sway") {
				$('.Sway').show();
				$('.Office').hide();
				$('.Any').show();
				}
			else {
				$('.Subprod').show();
				}
				});
				});

	$(document).ready( function(){
	$('#Product').click(function(){
				
			var productos = document.getElementById("Product");
			var seleccionados = productos.selectedIndex;
			var opciones = productos.options[seleccionados];
			var producto = opciones.value;
	
			if (producto === "Answer Desk (Assure)") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.assure').show();
				$('.pay').show();				
				}			
			else if (producto === "Bing") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.net,.search,.unsu').show();
				$('.codes,.specific,.self').show();
				}			
			else if (producto === "Internet Explorer 11") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.inst,.launch,.net,.search,.unsu,.update').show();
				$('.ie,.codes,.specific,.self').show();
				}				
			else if (producto === "MS Hardware") {
				$('.Subtopic').hide();
				$('.Topic').hide();
				$('.emerg,.driver').show();
				$('.hw,.codes,.specific').show();
				}			
			else if (producto === "MSN") {
				$('.Subtopic').hide();
				$('.Topic').hide();
				$('.emerg,.net,.unsu').show();
				$('.codes,.specific,.self').show();
				}			
			else if (producto === "Office 2003"||
			   producto=== "Windows Vista"||
			   producto=== "Windows XP") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.act,.unsu').show();
				$('.fuera').show();
				}		
			else if (producto === "Office 2007"||
			   producto=== "Office 2010") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.act,.down,.email,.files,.inst,.lang,.launch,.perf,.pers,.rep,.search,.sync,.unsu,.update').show();
				$('.o12o14o15').show();
				}		
			else if (producto === "Office 2013") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.ayp,.act,.down,.email,.files,.inst,.lang,.launch,.perf,.pers,.redeem,.rep,.search,.sync,.unsu,.update').show();
				$('.o12o14o15').show();
				}
			else if (producto === "Office 2016") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.ayp,.act,.down,.email,.files,.inst,.lang,.launch,.pay,.perf,.pers,.redeem,.rep,.search,.sync,.unsu,.update').show();
				$('.o16').show();
				}
			else if (producto=== "Office 2016 for Mac") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.ayp,.act,.down,.email,.files,.inst,.lang,.launch,.pay,.perf,.pers,.redeem,.rep,.search,.sync,.unsu,.update').show();
				$('.o16mac').show();
				}
							
			else if (producto === "Office 365 Commercial" ||
					producto=== "Windows Commercial") {
				$('.Topic').hide();
				$('.unsu').show();
				$('.Subtopic').hide();
				$('.winoffcomm').show();
				}
			
			else if (producto === "Office 365 Home") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.ayp,.act,.down,.email,.files,.inst,.lang,.launch,.pay,.perf,.pers,.redeem,.rep,.search,.subs,.sync,.unsu,.update').show();
				$('.365h').show();
				}				
			else if (producto=== "Office 365 Personal") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.act,.down,.email,.files,.inst,.lang,.launch,.pay,.perf,.pers,.redeem,.rep,.search,.subs,.sync,.unsu,.update').show();
				$('.365p').show();
				}
			else if (producto=== "Office 365 Pro Plus Student") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.act,.down,.email,.files,.inst,.lang,.launch,.perf,.pers,.rep,.search,.sync,.unsu,.update').show();
				$('.365plus').show();
				}
			else if (producto=== "Office 365 University") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.act,.down,.email,.files,.inst,.lang,.launch,.pay,.perf,.pers,.redeem,.rep,.search,.subs,.sync,.unsu,.update').show();
				$('.365p').show();
				}				
			else if (producto=== "Office for Mac 2011") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.act,.down,.email,.files,.inst,.lang,.launch,.perf,.pers,.rep,.search,.sync,.unsu,.update').show();
				$('.codes,.o11mac,.specific,.self').show();
				}
			else if (producto=== "Office HUP - Home Use Program") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.act,.down,.email,.files,.inst,.lang,.launch,.pay,.perf,.pers,.rep,.search,.sync,.unsu,.update').show();
				$('.365plus,.hup').show();
				}
			else if (producto=== "Office Insider Program"||
				producto=== "Windows 10 Insider") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu').show();
				$('.insider').show();
				}	
			else if (producto=== "Office Mobile") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.act,.down,.inst,.pers,.unsu').show();
				$('.codes,.omob,.specific,.self').show();
				}
			else if (producto=== "Office Online") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.net,.pers,.unsu').show();
				$('.codes,.specific,.self').show();
				}
			else if (producto=== "Office Sway") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.act,.down,.inst,.net,.pers,.unsu').show();
				$('.codes,.specific,.self').show();
				}
			else if (producto=== "OneDrive") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.pers,.unsu').show();
				$('.codes,.specific,.oned').show();
				}
			else if (producto=== "Outlook.com") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.email,.msa,.net,.pers,.scam,.unsu').show();
				$('.specific,.codes,.outl').show();
				}
			else if (producto === "Product Not Listed") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu').show();
				$('.3rd').show();
				}
			else if (producto=== "Skype") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu').show();
				$('.sky').show();
				}
			else if (producto=== "Windows 10 Games") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu,.apps').show();
				$('.xbox,.specific').show();
				}
			else if (producto=== "Windows 10 Home or Pro or S") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.ayp,.act,.down,.driver,.files,.inst,.lang,.launch,.malw,.net,.pay,.perf,.pers,.scam,.rep,.search,.sync,.unsu,.update,.apps').show();
				$('.codes,.w10,.specific,.3rd,.self').show();
				}
			else if (producto=== "Windows 10 Mobile") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.pers,.unsu').show();
				$('.specific,.codes,.winphone').show();
				}
			else if (producto=== "Windows 7"||
			producto=== "Windows 8.1") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.ease,.ayp,.act,.down,.driver,.files,.inst,.lang,.launch,.malw,.net,.perf,.pers,.scam,.rep,.search,.sync,.unsu,.update').show();
				$('.specific,.codes,.w7').show();
				}
			else if (producto=== "Windows 8") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu,.update').show();
				$('.w8').show();
				}
			else if (producto=== "Windows Phone") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.emerg,.act,.pers,.unsu').show();
				$('.specific,.codes,.winphone').show();
				}
			else if (producto=== "Xbox") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu').show();
				$('.xbox').show();
				}
				
			else if (producto=== "Xbox") {
				$('.Topic').hide();
				$('.Subtopic').hide();
				$('.unsu').show();
				$('.xbox').show();
				}
				
			else {
				$('.Topic').show();
				$('.Subtopic').show();
				}
				});
				});
			
			$(document).ready( function(){
				$('#Topicdiv').click(function() {
			var productos = document.getElementById("Product");
			var seleccionados = productos.selectedIndex;
			var opciones = productos.options[seleccionados];
			var producto = opciones.value;	
			
			if ($(producto=== "Bing" && "#Topicdiv > li.Selected1:contains('!Emerging Issue')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('!Emerging Issue')").length ||
			$(producto=== "MS Hardware" && "#Topicdiv > li.Selected1:contains('!Emerging Issue')").length ||
			$(producto=== "Office Online" && "#Topicdiv > li.Selected1:contains('!Emerging Issue')").length ||
			$(producto=== "OneDrive" && "#Topicdiv > li.Selected1:contains('!Emerging Issue')").length ||
			$(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('!Emerging Issue')").length){
					$('.Subtopic').hide();
					$('.specific,.codes').show();
				}
			else if ($(producto=== "Bing" && "#Topicdiv > li.Selected1:contains('Network and Internet')").length ||
			$(producto=== "Bing" && "#Topicdiv > li.Selected1:contains('Search')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Install')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Launching and Closing')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Network and Internet')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Search')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Update')").length ||
			$(producto=== "Office 2003" && "#Topicdiv > li.Selected1:contains('Activate')").length ||
			$(producto=== "Office Online" && "#Topicdiv > li.Selected1:contains('Network and Internet')").length ||
			$(producto=== "Office Online" && "#Topicdiv > li.Selected1:contains('Personalization, Quick Fixes, Settings')").length ||
			$(producto=== "OneDrive" && "#Topicdiv > li.Selected1:contains('Personalization, Quick Fixes, Settings')").length ||
			$(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('Email')").length ||
			$(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('Network and Internet')").length ||
			$(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('Personalization, Quick Fixes, Settings')").length ||
			$(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('Phishing, Scam')").length){
					$('.Subtopic').hide();
					$('.specific').show();
				}
			else if ($(producto=== "Bing" && "#Topicdiv > li.Selected1:contains('Unsupported Scenario')").length ||
			$(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Unsupported Scenario')").length ||
			$(producto=== "Office Online" && "#Topicdiv > li.Selected1:contains('Unsupported Scenario')").length){
					$('.Subtopic').hide();
					$('.self').show();
				}	
			
			else if ($(producto=== "Internet Explorer 11" && "#Topicdiv > li.Selected1:contains('Accessibility and Ease of Access')").length){
					$('.Subtopic').hide();
					$('.ease2').show();
				}
			else if ($(producto=== "MS Hardware" && "#Topicdiv > li.Selected1:contains('Drivers, Hardware')").length){
					$('.Subtopic').hide();
					$('.specific,.hw').show();
					}
			else if ($(producto=== "Office 2003" && "#Topicdiv > li.Selected1:contains('Unsupported Scenario')").length){
					$('.Subtopic').hide();
					$('.offer').show();
				}
			else if ($(producto=== "OneDrive" && "#Topicdiv > li.Selected1:contains('Unsupported Scenario')").length){
					$('.Subtopic').hide();
					$('.oned').show();
				}
			else if ($(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('Unsupported Scenario')").length){
					$('.Subtopic').hide();
					$('.outl2').show();
				}
			else if ($(producto=== "Outlook.com" && "#Topicdiv > li.Selected1:contains('Microsoft Account')").length){
					$('.Subtopic').hide();
					$('.MSA2').show();
				}				
							
				});
				});
			
			