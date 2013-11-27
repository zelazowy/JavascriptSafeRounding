var saferound = function(variable, precision) {
    if (precision === undefined) {
        precision = 2;
    } else {
        precision = parseInt(precision);
    }
    
    var factor = Math.pow(10, precision),
        lambda = Math.pow(10, -(precision + 2));

    return Math.round((variable + lambda) * factor) / factor;
};
