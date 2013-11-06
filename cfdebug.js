$(document).ready(function(){
	if($('.cfdebug').length) {
		var cfDebugBT = $('<div class="cfDebugBT" title="click here for debug">')
			.css({background:"red", color:"white", position:"fixed", left:"0", bottom:"0", 'z-index':"60000001", padding:"5px", cursor:"pointer", 'user-select': "none"})
			.html('CF Debug Show')
			.bind('click',function(){
				$('.cfDebugOverlay').toggle();
				$('.cfDebugBT').text('CF Debug '+($('.cfDebugOverlay').is(':visible') ? 'Hide' : 'Show'));
				$('html').css({overflow: ($('.cfDebugOverlay').is(':visible') ? 'hidden' : 'auto') });
		});
		$('table.cfdebug:eq(0)')
			.wrap(function(i){return $('<div class="cfDebugOverlay">').css({position:"fixed", left:"0", top:"0", right:"0", bottom:"0", 'z-index':60000000, overflow:"auto", background:"white", display:"none", padding:"20px"});})
			.css({'margin-bottom':"30px"});
		$('.cfDebugOverlay').before(cfDebugBT);
	};
});
