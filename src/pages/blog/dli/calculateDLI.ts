// calculateDLI.ts
export const calculateNumericalAccurateDLI = (parMeasurements: number[]) => {
  const n = parMeasurements.length;
  if (n < 2) {
    return '0.00';
  }

  const secondsInAnHour = 3600;
  const factor = 0.000001; // µmol to mol conversion factor

  let integral = 0;

  // Simpson's rule requires even number of intervals (odd number of points)
  const isEven = n % 2 === 0;

  // Apply Simpson's rule for the main segments
  for (let i = 0; i < n - 2; i += 2) {
    const h = 2 * secondsInAnHour; // interval width
    integral += (parMeasurements[i] + 4 * parMeasurements[i + 1] + parMeasurements[i + 2]) * h / 6;
  }

  // If n is even, apply the trapezoidal rule for the last segment
  if (isEven) {
    const h = secondsInAnHour; // interval width
    integral += (parMeasurements[n - 2] + parMeasurements[n - 1]) * h / 2;
  }

  const dli = integral * factor;
  return dli.toFixed(2); // Return the DLI rounded to 2 decimal places
};

export const calculateDLISimple = (parMeasurements: number[]) => {
  const secondsInAnHour = 3600;
  const factor = 0.000001; // µmol to mol conversion factor

  const dli = parMeasurements.reduce((total, par) => {
    return total + par * secondsInAnHour * factor;
  }, 0);

  return dli.toFixed(2); // Return the DLI rounded to 2 decimal places
};