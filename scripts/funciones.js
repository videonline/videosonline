		function Gender(){
			
			if  (document.getElementById('A3').value === "Male"){ 
				$('.Estimad').html("Estimado");}}		
	
		function Gender2(){
			if (document.getElementById('A4').value === "Female"){			
				$('.Estimad').html("Estimada");}}	
	
		function Gender3(){
			
			if  (document.getElementById('A3').value === "Male"){ 
				$('.comunicad').html("comunicado");}}		
	
		function Gender4(){
			if (document.getElementById('A4').value === "Female"){			
				$('.comunicad').html("comunicada");}}	
			
		$(function(){ 
            $('#A2').change(function() {
            $('.name').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#A1').change(function() {               
			$('.SRX').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#Hora2').change(function() {
            $('#Hora3').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#Producto2').change(function() {
            $('#Producto3').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#General3').change(function() {
            $('#Contenido2').text( $(this).val() );
            });});
	
		$(function(){ 
            $('#Consulta1').change(function() {
            $('#Consulta2').text( $(this).val() );
            });});
		
		$(function(){ 
            $('#Actiont').change(function() {
            $('.Action').text( $(this).val() );
            });});
		
		$(function(){
            $('#Blockert').change(function() {
            $('#Blocker2').text( $(this).val() );
            });});
		$(function(){ 
            $('#Resolutiont').change(function() {
            $('#Solution2').add('#Solution3').add('#Solution4').text( $(this).val() );
            });});		
		
		$(function(){ 
            $('#Agent1').change(function() {           
			$('.Agent').html( $(this).val());});});
		
		$(function(){ 
            $('#Rejoin3').change(function() {
            $('#Rejoin4').html( $(this).val() );
            });});
		
		$(function(){			
			$('#Rejoin3').change(function() {
            $("a.Rejoin5").attr("href", ( $(this).val() ));
            });});
	
		$(function(){ 
            $('#Linknamet1').change(function() {
            $('.Link1').html( $(this).val() );
            });});
	
		$(function(){			
			$('#Link1t').change(function() {
            $(".Link1").attr("href", ( $(this).val() ));
            });});
	
		$(function(){ 
            $('#Linknamet2').change(function() {
            $('.Link2').html( $(this).val() );
            });});
	
		$(function(){			
			$('#Link2t').change(function() {
            $(".Link2").attr("href", ( $(this).val() ));
            });});
	
		function formReset2() {
			document.getElementById("myForm2").reset();
			$('.SRX').text("SRX");
			$('.name').text("Nombre del Usuario");
			$('#Hora3').text("Hora de la llamada");
			$('#Producto3').text("Producto");
			$('#Contenido2').text("Contenido del comunicado");
			$('.Action').text("(Lo que intentaba hacer el usuario cuando se presentaba el inconveniente)");
			$('#Blocker2').text("(Mensaje de error o comportamiento erróneo generado)");
			$('#Solution2').text("(Descripción superficial del procedimiento que permitió solucionar el inconveniente)");
			$('#Solution3').add('#Solution4').text("(Resultado de la interacción)");
			$('#Rejoin4').html("Enlace de Rejoin")	;	
			$('.Estimad').text("Estimad@");
			$('.comunicad').text("comunicad@")	;
			$('#Consulta2').text("(Consulta del usuario)");
			$('.Link1').html("Enlace 1");
			$('.Link2').html("Enlace 2");
			$(".Link1").attr("href", ("#"));
			$(".Link2").attr("href", ("#"));
			$("a.Rejoin5").attr("href", ("#"));
		}
				
		
	
		function formReset() {
			
				document.getElementById("myForm").reset();
				$('#A5').val(" ");
				$('.todo').hide();
								
		}
		
		
		function Templates(){
			if (document.getElementById('A5').value === "Strike") {
				$('.todo').hide();
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Hora1').style.display='table-row';
				document.getElementById('Strike').style.display='Block';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy1').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				
				} 
			else if (document.getElementById('A5').value === "Strike3") {
				$('.todo').hide();
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Strike3').style.display='block';		
				document.getElementById('Linkname').style.display='table-row';
				document.getElementById('Link1').style.display='table-row';
				document.getElementById('Linkname2').style.display='table-row';
				document.getElementById('Link2').style.display='table-row';
				document.getElementById('tabla2').style.display='block';
				document.getElementById('Action0').style.display='table-row';
				document.getElementById('Solucion0').style.display='table-row';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy2').style.display='table-row';
				document.getElementsByName('Resolutiont')[0].placeholder='Resultado de la interacción';
				document.getElementById('tabla2').style.top='500px';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				
				}
				
			else if (document.getElementById('A5').value === "Resolved") {
				$('.todo').hide();
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Action0').style.display='table-row';
				document.getElementById('Blocker0').style.display='table-row';
				document.getElementById('Solucion0').style.display='table-row';
				document.getElementById('Resolved').style.display='block';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy3').style.display='table-row';
				document.getElementsByName('Resolutiont')[0].placeholder='Solución superficial';
				document.getElementById('asunto').style.top='460px';
				document.getElementById('asunto').style.display='table-row';
				
				}
					
			else if (document.getElementById('A5').value === "Unresolved") {
				$('.todo').hide();
				document.getElementById('Unresolved').style.display='Block';
				document.getElementById('SRX0').style.display='table-row';		
				document.getElementById('Linkname').style.display='table-row';
				document.getElementById('Link1').style.display='table-row';
				document.getElementById('Linkname2').style.display='table-row';
				document.getElementById('Link2').style.display='table-row';					
				document.getElementById('tabla2').style.display='block';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy4').style.display='table-row';
				document.getElementById('Action0').style.display='table-row';
				document.getElementById('Solucion0').style.display='table-row';
				document.getElementsByName('Resolutiont')[0].placeholder='Resultado de la interacción';
				document.getElementById('tabla2').style.top='500px';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}					
					
			else if (document.getElementById('A5').value === "Ghost") {
				$('.todo').hide();
				document.getElementById('Ghost').style.display='Block';
				document.getElementById('SRX0').style.display='table-row';	
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Copy5').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';

				
				
				}
					
			else if (document.getElementById('A5').value === "General") {
				$('.todo').hide();
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('General2').style.display='table-row';
				document.getElementById('General').style.display='block';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy6').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
								
				
				}
					
			else if (document.getElementById('A5').value === "Rejoin") {
				$('.todo').hide();
				document.getElementById('Rejoin').style.display='Block';
				document.getElementById('Rejoin2').style.display='table-row';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Copy7').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				
				}
					
			else if (document.getElementById('A5').value === "Clave") {
				$('.todo').hide();
				document.getElementById('Clave').style.display='block';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy10').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				
				}
					
			else if (document.getElementById('A5').value === "COA") {
				$('.todo').hide();
				document.getElementById('COA').style.display='Block';
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('Producto1').style.display='table-row';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy8').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}
					
			else if (document.getElementById('A5').value === "HW") {
				$('.todo').hide();
				document.getElementById('HWSpain').style.display='Block';
				document.getElementById('SRX0').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy9').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}
					
			else if (document.getElementById('A5').value === "Enlaces") {
				$('.todo').hide();
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Linkname').style.display='table-row';
				document.getElementById('Link1').style.display='table-row';
				document.getElementById('Linkname2').style.display='table-row';
				document.getElementById('Link2').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('tabla2').style.display='table-row';
				document.getElementById('Enlaces').style.display='Block';
				document.getElementById('Consulta0').style.display='table-row';
				document.getElementById('Copy11').style.display='table-row';
				document.getElementById('tabla2').style.top='475px';
				document.getElementById('asunto').style.top='410px';
				document.getElementById('asunto').style.display='table-row';
				
				}		
			
			else if (document.getElementById('A5').value === "MIR1") {
				$('.todo').hide();	
				document.getElementById('MIR1').style.display='block';					
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy12').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}
			
			
			else if (document.getElementById('A5').value === "MIR2") {
				$('.todo').hide();
				document.getElementById('MIR2').style.display='block';					
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy13').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}
				
			else if (document.getElementById('A5').value === "MIR3") {
				$('.todo').hide();
				document.getElementById('MIR3').style.display='block';					
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy14').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
	
				}
			
			else if (document.getElementById('A5').value === "OLS") {
				$('.todo').hide();
				document.getElementById('OLS').style.display='block';
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy15').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}
			
			else if (document.getElementById('A5').value === "HQNA") {
				$('.todo').hide();
				document.getElementById('HQNA').style.display='block';				
				document.getElementById('SRX0').style.display='table-row';					
				document.getElementById('Agentshow').style.display='table-row';
				document.getElementById('name0').style.display='table-row';
				document.getElementById('reset0').style.display='table-row';
				document.getElementById('Gender0').style.display='table-row';
				document.getElementById('Copy16').style.display='table-row';
				document.getElementById('asunto').style.top='440px';
				document.getElementById('asunto').style.display='table-row';
				
				}
					
			else {
				$('.todo').hide();
					}
					}
