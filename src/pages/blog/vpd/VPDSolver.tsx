import { useEffect, useState } from "react";

// Required to use exp from Math library
const exp = Math.exp;

// Function to calculate saturation vapor pressure using Tetens formula
function calculateSaturationVaporPressure(temp: number): number {
    return 0.61078 * exp((17.27 * temp) / (temp + 237.3));
}

// Function to calculate actual vapor pressure
function calculateActualVaporPressure(temp: number, humidity: number): number {
    const Es = calculateSaturationVaporPressure(temp);
    return (humidity / 100) * Es;
}

// Function to calculate VPD
//function calculateVPD(temp: number, humidity: number): number {
//    const Es = calculateSaturationVaporPressure(temp);
//    const Ea = calculateActualVaporPressure(temp, humidity);
//    return Es - Ea;
//}

// Function to solve for temperature to achieve target VPD with constant humidity
function solveForTemperature(targetVPD: number, humidity: number, leafTempOffset: number): number {
    let temp = 0;
    for (let t = -30; t <= 50; t += 0.01) {
        const Es = calculateSaturationVaporPressure(t);
        const Ea = calculateActualVaporPressure(t, humidity);
        const vpd = Es - Ea;
        if (Math.abs(vpd - targetVPD) < 0.01) {
            temp = t + leafTempOffset;
            break;
        }
    }
    return temp;
}

// Function to solve for humidity to achieve target VPD with constant temperature
function solveForHumidity(targetVPD: number, temp: number): number {
    let humidity = 0;
    const Es = calculateSaturationVaporPressure(temp);
    for (let h = 0; h <= 100; h += 0.1) {
        const Ea = calculateActualVaporPressure(temp, h);
        const vpd = Es - Ea;
        if (Math.abs(vpd - targetVPD) < 0.01) {
            humidity = h;
            break;
        }
    }
    return humidity;
}


// Form component to input temperature, humidity, and target VPD
// and display the solutions for temperature and humidity
function VPDSolver() {
    const [temp, setTemp] = useState(25);
    const [humidity, setHumidity] = useState(50);
    const [targetVPD, setTargetVPD] = useState(1);
    const [leafTempOffset, setLeafTempOffset] = useState(-2);
    const [solutionTemp, setSolutionTemp] = useState(0);
    const [solutionHumidity, setSolutionHumidity] = useState(0);

    useEffect(() => {
        setSolutionTemp(solveForTemperature(targetVPD, humidity, leafTempOffset));
        setSolutionHumidity(solveForHumidity(targetVPD, temp));
    }, [temp, humidity, targetVPD, leafTempOffset]);

    return (
        <div>
            <label>
                Temperatura actual (°C):
                <input type="number" step="0.01" value={temp} onChange={(e) => setTemp(Number(e.target.value))} min = {-30} max = {50} style = {{width: '15vw', marginInline: '10px'}}/>
            </label>
            <br />
            <label>
                Humedad relativa actual (%):
                <input type="number" step="0.01" value={humidity} onChange={(e) => setHumidity(Number(e.target.value))} min = {0} max = {100} style = {{width: '15vw', marginInline: '10px'}}/>
            </label>
            <br />
            <label>
                VPD objetivo (kPa):
                <input type="number" step="0.01" value={targetVPD} onChange={(e) => setTargetVPD(Number(e.target.value))} min = {-5} max = {5} style = {{width: '15vw', marginInline: '10px'}}/>
            </label>
            <br />
            <label>
                Diferencia de temperatura de hoja (°C):
                <input type="number" step="0.01" value={leafTempOffset} onChange={(e) => setLeafTempOffset(Number(e.target.value))} min={-5} max={5} style = {{width: '15vw', marginInline: '10px'}}/>
            </label>
            <br />
            <div className="h-6"></div>
            
            <h2>Solución</h2>
            <p>Puedes mantener tu humedad constante y <strong>variar la temperatura a:</strong> {solutionTemp.toFixed(2)}°C</p>
            <p>Puedes mantener tu temperatura constante y <strong>variar la humedad a:</strong> {solutionHumidity.toFixed(2)}%</p>
        </div>
    );
}

export default VPDSolver;