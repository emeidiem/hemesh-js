var EPSILON = 0.000001
var SQEPSILON = EPSILON * EPSILON

/**
 * Clamp value to range with error margin.
 *
 * @return clamped value
 */
function clampEpsilon(x, min, max) {
	if (x < min + EPSILON) {
		return min;
	}
	if (x > max - EPSILON) {
		return max;
	}
	return x;
}


exports.EPSILON = EPSILON
exports.SQEPSILON = SQEPSILON
exports.clampEpsilon = clampEpsilon
