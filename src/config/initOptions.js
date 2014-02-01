define([
	'legacy' // for Object.keys polyfill
], function () {

	'use strict';

	var defaults, initOptions;

	defaults = {
		el:                 null,
		template:           '',
		complete:           null,
		preserveWhitespace: false,
		append:             false,
		twoway:             true,
		modifyArrays:       true,
		lazy:               false,
		debug:              false,
		noIntro:            false,
		transitionsEnabled: true,
		magic:              false,
		adapt:              [],
		sanitize:           false,
		stripComments:      true,
		delimiters:         [ '{{', '}}' ],
		tripleDelimiters:   [ '{{{', '}}}' ]
	};

	initOptions = {
		keys: Object.keys( defaults ),
		defaults: defaults
	};

	return initOptions;

});
