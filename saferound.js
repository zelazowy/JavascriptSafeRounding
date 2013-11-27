var saferound = function(variable, precision) {
    precision = parseInt(precision) || 0;
    
    var factor = Math.pow(10, precision),
        lambda = Math.pow(10, -(precision + 2));

    return Math.round((variable + lambda) * factor) / factor;
};
