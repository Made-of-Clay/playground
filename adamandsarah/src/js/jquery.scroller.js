(function($){
	$.fn.scroller = function(minWinWidth,isTouch){
		return this.each(function(){
			var bgobj  		= $(this),
				bgVals 		= splitBGvals(bgobj),
				theWindow 	= $(window);

			if($.type(minWinWidth) !== 'number') minWinWidth = 500;
			if($.type(isTouch) !== 'boolean') isTouch = false;

			theWindow.scroll(function(){
				var scrollTop 	= theWindow.scrollTop(),
					yDisplace 	= ((-(scrollTop / bgobj.data('speed')))),
					yPos 		= parseFloat(yDisplace) + parseFloat(bgVals.yval),
					winWidth 	= theWindow.width(),
					canScroll 	= (winWidth >= minWinWidth) ? true : false;

				if(canScroll && !isTouch){
					if(bgobj.data('type') === 'background'){
						var coords = bgVals.xval + bgVals.xunit + ' ' + yPos + bgVals.yunit;
						bgobj.css('background-position',coords);
					} else if(bgobj.data('type') === 'floater'){
						var fromTop = yPos + bgVals.yunit; 
						bgobj.css('top',fromTop);
					}
				}
			});

			function splitBGvals(obj){
				if(obj.data('type') === 'background'){
					var bgPos     = obj.css('background-position'), // vxx vyy
						bgPosArr  = bgPos.split(' '), // [0]-vxx [1]- vyy
						bgPosXlen = bgPosArr[0].length,
						bgPosYlen = bgPosArr[1].length,
						bgXunit   = checkUnit(bgPosArr[0]),
						bgYunit   = checkUnit(bgPosArr[1]),
						position  = {
							xval: bgPosArr[0].substr(0,bgPosXlen-(bgXunit.length)),
							xunit: bgXunit,
							yval: bgPosArr[1].substr(0,bgPosYlen-(bgXunit.length)),
							yunit: bgYunit
						};
				} else if(obj.data('type') === 'floater'){
					var topPos 		= obj.css('top'),
						topPosUnit 	= checkUnit(topPos),
						position 	= {
							yval: topPos.substr(0,parseInt(topPos.length)-parseInt(topPosUnit.length)),
							yunit: topPosUnit
						};
				}
				return position;
			} // -- End splitBGvals()

			function checkUnit(checking){
				if(checking === '0')
					return '';
				else if(checking.slice(-1) === '%')
					return '%';
				else
					return checking.slice(-2);
			} // -- End checkUnit()
		});
	}
}(jQuery));