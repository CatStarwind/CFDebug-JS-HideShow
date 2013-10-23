$(document).ready(function(){
	if($('.cfdebug').length) {
		var cfDebugBT = $('<div id="cfDebugBT" title="Click Here for Debug">')
			.appendTo('body')
			.css({'z-index':"60000001", 'user-select': "none"})
			.html('CF Debug Show')
			.bind('click',function(){
				$('#cfDebugOverlay').toggle();
				$('#cfDebugBT span').text('CF Debug '+($('#cfDebugOverlay').is(':visible') ? 'Hide' : 'Show'));
				$('html').css({overflow: ($('#cfDebugOverlay').is(':visible') ? 'hidden' : 'auto') });
			});
		$('table.cfdebug:eq(0)')
			.wrap(function(i){return $('<div id="cfDebugOverlay">').css({position:"absolute", left:"0", top:"0", right:"0", bottom:"0", 'z-index':60000000, overflow:"auto", background:"white", display:"none", padding:"20px"});})
			.css({'margin-bottom':"30px"});
		$('#cfDebugOverlay').before(cfDebugBT);
		$('#cfDebugBT')
			.button()
			.draggable({distance:5,stop: function(e,ui){setTimeout(function(){$('#cfDebugBT').click();},1)}})
			.position({my:"left bottom", at:"left bottom"});
	};
});
