import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

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
function calculateVPD(temp: number, humidity: number): number {
    const Es = calculateSaturationVaporPressure(temp);
    const Ea = calculateActualVaporPressure(temp, humidity);
    return Es - Ea;
}

// Function to get the color based on VPD ranges
function getColorForVPD(vpd: number, ranges: any): string {
    if (vpd >= ranges.propagation[0] && vpd <= ranges.propagation[1]) {
        return 'blue';
    } else if (vpd >= ranges.lateVegEarlyFlower[0] && vpd <= ranges.lateVegEarlyFlower[1]) {
        return 'green';
    } else if (vpd >= ranges.midLateFlower[0] && vpd <= ranges.midLateFlower[1]) {
        return 'purple';
    } else {
        return 'red';
    }
}

// Function to generate VPD grid
function generateVPDGrid(
    startTemp: number,
    endTemp: number,
    tempStep: number,
    startHumidity: number,
    endHumidity: number,
    humidityStep: number,
    leafTempOffset: number,
    vpdRanges: any
) {
    const temperatures = [];
    const humidities = [];

    for (let temp = startTemp; temp <= endTemp; temp += tempStep) {
        temperatures.push(temp);
    }

    for (let humidity = endHumidity; humidity >= startHumidity; humidity -= humidityStep) {
        humidities.push(humidity);
    }

    // Initialize grid with temperatures as rows and humidities as columns
    const grid: any[][] = [['Temp/Humidity', ... humidities.map(h => h + '%')]];

    for (const temp of temperatures) {
        const row = [String(temp) + '°C'];
        for (const humidity of humidities) {
            const vpd = calculateVPD(temp - leafTempOffset, humidity);
            const color = getColorForVPD(vpd, vpdRanges);
            row.push(`${vpd.toFixed(2)} (${color})`); // Round to 2 decimal places and add color
        }
        grid.push(row);
    }

    return grid;
}

// VPD ranges for different stages
const vpdRanges = {
    propagation: [0.4, 0.8],          // Blue
    lateVegEarlyFlower: [0.8, 1.2],   // Green
    midLateFlower: [1.2, 1.6],        // Purple
};



function VPDChart() {

    // Parameters
    //handle the state of the VPD chart
    const [startTemp, setStartTemp] = useState(5);
    const [endTemp, setEndTemp] = useState(40);
    const [tempStep, setTempStep] = useState(2.5);
    const [startHumidity, setStartHumidity] = useState(0);
    const [endHumidity, setEndHumidity] = useState(90);
    const [humidityStep, setHumidityStep] = useState(5);
    const [leafTempOffset, setLeafTempOffset] = useState(-2);
    const [vpdGrid, setVPDGrid] = useState<any[][]>(generateVPDGrid(startTemp, endTemp, tempStep, startHumidity, endHumidity, humidityStep, leafTempOffset, vpdRanges));
    const [vpdRangesPropMin, setVPDRangesPropMin] = useState(0.4);
    const [vpdRangesPropMax, setVPDRangesPropMax] = useState(0.8);
    const [vpdRangesLateVegEarlyFlowerMin, setVPDRangesLateVegEarlyFlowerMin] = useState(0.8);
    const [vpdRangesLateVegEarlyFlowerMax, setVPDRangesLateVegEarlyFlowerMax] = useState(1.2);
    const [vpdRangesMidLateFlowerMin, setVPDRangesMidLateFlowerMin] = useState(1.2);
    const [vpdRangesMidLateFlowerMax, setVPDRangesMidLateFlowerMax] = useState(1.6);
    

    return (
        <div>
            {/* Show the default parameters in the input fields of the form */}
            <form onSubmit={(e) => {
                e.preventDefault();
                setVPDRangesPropMin(vpdRanges.propagation[0]);
                setVPDRangesPropMax(vpdRanges.propagation[1]);
                setVPDRangesLateVegEarlyFlowerMin(vpdRanges.lateVegEarlyFlower[0]);
                setVPDRangesLateVegEarlyFlowerMax(vpdRanges.lateVegEarlyFlower[1]);
                setVPDRangesMidLateFlowerMin(vpdRanges.midLateFlower[0]);
                setVPDRangesMidLateFlowerMax(vpdRanges.midLateFlower[1]);
                setVPDGrid(generateVPDGrid(startTemp, endTemp, tempStep, startHumidity, endHumidity, humidityStep, leafTempOffset, vpdRanges));
            }
            }>
                <label>Temp. inicial (°C):</label>
                <input type="number" value={startTemp} step="0.1" onChange={(e) => setStartTemp(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>
                <label>Temp. final (°C):</label>
                <input type="number" value={endTemp} step="0.1" onChange={(e) => setEndTemp(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>
                <label>Tamaño de paso temperatura:</label>
                <input type="number" value={tempStep} step="0.1" onChange={(e) => setTempStep(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>
                <div className="h-4"></div>

                <label>Humedad inicial:</label>
                <input type="number" value={startHumidity} step="0.1" onChange={(e) => setStartHumidity(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>  
                <label>Humedad final:</label>
                <input type="number" value={endHumidity} step="0.1" onChange={(e) => setEndHumidity(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>
                <label>Tamaño de paso humedad:</label>
                <input type="number" value={humidityStep} step="0.1" onChange={(e) => setHumidityStep(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>
                <div className="h-4"></div>

                <label>Diferencia de temperatura entre el ambiente y la hoja (C°): </label>
                <input type="number" value={leafTempOffset} step="0.1" onChange={(e) => setLeafTempOffset(Number(e.target.value))} style = {{width: '15vw', marginInline: '10px'}}/>

                <div className="h-8"></div>
                <p><span style={{ backgroundColor: '#5564eb', color: 'white', padding : '5px', borderRadius: '5px' }}>Propagation</span></p>
                <div className="h-4"></div>
                <div className="w-4/5 mx-auto">
                    <label>Min: </label>
                    <input type="number" value={vpdRangesPropMin} step="0.01" onChange={(e) => setVPDRangesPropMin(Number(e.target.value))} style = {{width: '15vw'}}/>
                    <label>Max: </label>
                    <input type="number" value={vpdRangesPropMax} step="0.01" onChange={(e) => setVPDRangesPropMax(Number(e.target.value))} style = {{width: '15vw'}}/>
                </div>

                <div className="h-4"></div>
                <p><span style={{ backgroundColor: '#009975', color: 'white', padding : '5px', borderRadius: '5px' }}>Late Veg/Early Flower:</span></p>
                <div className="h-4"></div>
                <div className="w-4/5 mx-auto">
                <label>Min: </label>
                <input type="number" value={vpdRangesLateVegEarlyFlowerMin} step="0.01" onChange={(e) => setVPDRangesLateVegEarlyFlowerMin(Number(e.target.value))} style = {{width: '15vw'}}/>
                <label>Max: </label>
                <input type="number" value={vpdRangesLateVegEarlyFlowerMax} step="0.01" onChange={(e) => setVPDRangesLateVegEarlyFlowerMax(Number(e.target.value))} style = {{width: '15vw'}}/>
                </div>

                <div className="h-4"></div>
                <p><span style={{ backgroundColor: '#800080', color: 'white', padding : '5px', borderRadius: '5px' }}>Mid/Late Flower:</span></p>
                <div className="h-4"></div>
                <label>Min:</label>
                <input type="number" value={vpdRangesMidLateFlowerMin} step="0.01" onChange={(e) => setVPDRangesMidLateFlowerMin(Number(e.target.value))}  style = {{width: '15vw'}}/>
                <label>Max:</label>
                <input type="number" value={vpdRangesMidLateFlowerMax} step="0.01" onChange={(e) => setVPDRangesMidLateFlowerMax(Number(e.target.value))} style = {{width: '15vw'}}/>
                <br />
                <div className="h-4"></div>

                <Button variant="outline">Generar gráfica</Button>
                <div className="h-6"></div>


            </form> 

            <Table responsive="sm">
                <thead>
                    <tr>
                        {vpdGrid[0]?.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {vpdGrid.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                const cellStr = String(cell);
                                return (
                                    <td key={cellIndex} style={{ backgroundColor: cellStr.includes('blue') ? '#5564eb' : cellStr.includes('green') ? '#009975' : cellStr.includes('purple') ? '#800080' : '#1f104f',
                                        color: 'white',
                                        textAlign: 'center',
                                        padding: '7.5px'  
                                    }}>
                                        {cellStr.split(' ')[0]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div> 
            
    );
}

export default VPDChart;