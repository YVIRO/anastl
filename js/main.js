(function() {
	/* In animations (to close icon) */
	var beginAC = 70,
	    endAC = 330,
	    beginB = 90,
	    endB = 310;
	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.2, {
	        delay: 0.2,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}
	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 1.2, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}
	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}
	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.1, {
	        easing: ease.ease('bounce-out', 1, 0.1)
	    });
	}
	/* Out animations (to burger icon) */
	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}
	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}
	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.9, {
	        easing: ease.ease('elastic-out', 2, 0.3)
	    });
	}
	function outB(s) {
	    s.draw(beginB, endB, 0.9, {
	        delay: 0.6,
	        easing: ease.ease('elastic-out', 3, 1.2)
	    });
	}
	/* Scale functions */
	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}
	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}

	/* Awesome burger scaled */

	var pathA = document.getElementById('pathA'),
		pathB = document.getElementById('pathB'),
		pathC = document.getElementById('pathC'),
		segmentA = new Segment(pathA, beginAC, endAC),
		segmentB = new Segment(pathB, beginB, endB),
		segmentC = new Segment(pathC, beginAC, endAC),
		wrapper = document.getElementById('menu-icon-wrapper'),
		trigger = document.getElementById('menu-icon-trigger'),
		toCloseIcon = true,
		dummy = document.getElementById('dummy');


	trigger.onclick = function() {
		addScale(wrapper);
		if (toCloseIcon) {
			inAC(segmentA);
			inB(segmentB);
			inAC(segmentC);

			dummy.className = 'dummy dummy--active';
		} else {
			outAC(segmentA);
			outB(segmentB);
			outAC(segmentC);

			dummy.className = 'dummy';
		}
		toCloseIcon = !toCloseIcon;
		setTimeout(function() {
			removeScale(wrapper)
		}, 450);
	};

})();
