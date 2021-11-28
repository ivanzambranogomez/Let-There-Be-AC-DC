/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-pencil': '&#xe905;',
		'icon-pencil22': '&#xe90a;',
		'icon-camera': '&#xe90f;',
		'icon-headphones': '&#xe910;',
		'icon-music': '&#xe911;',
		'icon-film': '&#xe913;',
		'icon-bullhorn': '&#xe91a;',
		'icon-phone': '&#xe942;',
		'icon-phone-hang-up': '&#xe943;',
		'icon-keyboard': '&#xe955;',
		'icon-display': '&#xe956;',
		'icon-laptop': '&#xe957;',
		'icon-mobile': '&#xe958;',
		'icon-mobile2': '&#xe959;',
		'icon-tablet': '&#xe95a;',
		'icon-box-add': '&#xe95e;',
		'icon-database2': '&#xe964;',
		'icon-undo2': '&#xe967;',
		'icon-bubble': '&#xe96b;',
		'icon-bubbles': '&#xe96c;',
		'icon-bubbles2': '&#xe96d;',
		'icon-bubble2': '&#xe96e;',
		'icon-bubbles3': '&#xe96f;',
		'icon-bubbles4': '&#xe970;',
		'icon-wrench': '&#xe991;',
		'icon-hammer': '&#xe996;',
		'icon-trophy': '&#xe99e;',
		'icon-glass': '&#xe9a0;',
		'icon-glass2': '&#xe9a1;',
		'icon-power': '&#xe9b5;',
		'icon-menu': '&#xe9bd;',
		'icon-download3': '&#xe9c7;',
		'icon-attachment': '&#xe9cd;',
		'icon-point-up': '&#xea03;',
		'icon-cross': '&#xea0f;',
		'icon-arrow-left': '&#xea38;',
		'icon-paragraph-justify': '&#xea7a;',
		'icon-share2': '&#xea82;',
		'icon-google': '&#xea88;',
		'icon-google2': '&#xea89;',
		'icon-google3': '&#xea8a;',
		'icon-google-plus': '&#xea8b;',
		'icon-google-plus2': '&#xea8c;',
		'icon-google-plus3': '&#xea8d;',
		'icon-google-drive': '&#xea8f;',
		'icon-facebook': '&#xea90;',
		'icon-facebook2': '&#xea91;',
		'icon-instagram': '&#xea92;',
		'icon-whatsapp': '&#xea93;',
		'icon-twitter': '&#xea96;',
		'icon-youtube2': '&#xea9e;',
		'icon-appleinc': '&#xeabe;',
		'icon-android': '&#xeac0;',
		'icon-windows': '&#xeac1;',
		'icon-windows8': '&#xeac2;',
		'icon-skype': '&#xeac5;',
		'icon-chrome': '&#xead9;',
		'icon-firefox': '&#xeada;',
		'icon-IE': '&#xeadb;',
		'icon-edge': '&#xeadc;',
		'icon-safari': '&#xeadd;',
		'icon-opera': '&#xeade;',
		'icon-music2': '&#xe90b;',
		'icon-pencil2': '&#xe901;',
		'icon-film2': '&#xe902;',
		'icon-location': '&#xe90c;',
		'icon-wrench2': '&#xe903;',
		'icon-monitor': '&#xe904;',
		'icon-mobile3': '&#xe906;',
		'icon-pointer': '&#xe90d;',
		'icon-bolt': '&#xe907;',
		'icon-database': '&#xe908;',
		'icon-menu1': '&#xe90e;',
		'icon-view-list': '&#xe912;',
		'icon-rock-n-roll2': '&#xe909;',
		'icon-rock-n-roll': '&#xe900;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
