// Convention-dictated method to display AVG, OBP, etc
const formattedCalculation = (calculatedValue) =>
    // If BA is perfect ...
    (calculatedValue === 1)
        // ... display as `1.000`
    ? calculatedValue.toPrecision(4)
    // If BA is zero ...
    : (calculatedValue === 0)
        // ... display as `.000`
        ? calculatedValue.toPrecision(4).substring(1)
        // Otherwise, display without the leading zero (`.325`)
        : calculatedValue.toPrecision(3).substring(1)

export default formattedCalculation;