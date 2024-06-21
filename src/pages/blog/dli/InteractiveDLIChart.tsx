// InteractiveChart.tsx
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { calculateDLISimple, calculateNumericalAccurateDLI } from './calculateDLI';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InteractiveChart: React.FC = () => {
  // default values for PAR measurements
  //                     0, 1, 2, 3, 4,   5,   6,   7,   8,   9,  10,  11,   12,  13,  14,  15,  16,  17,  18, 19, 20, 21, 22, 23
  const defaultValues = [0, 0, 0, 0, 25, 200, 300, 500, 600, 720, 760, 820, 820,  720, 650, 400, 200, 50,  0,  0,  0,  0,  0, 0]; 
  const [parMeasurements, setParMeasurements] = useState(defaultValues);
  const [calculationMethod, setCalculationMethod] = useState('numerical');

  const handlePointDrag = (hour: number, value: number) => {
    const updatedMeasurements = [...parMeasurements];
    updatedMeasurements[hour] = value;
    setParMeasurements(updatedMeasurements);
  };

  const data = {
    labels: Array.from({ length: 24 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Mediciones de PAR',
        data: parMeasurements,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const hour = context.dataIndex;
            const value = context.raw;
            return `Hora ${hour}: ${value} µmol·m⁻²·s⁻¹`;
          },
        },
      },
    },
    onClick: (e: any, element: any) => {
      if (element.length) {
        const hour = element[0].index;
        const value = prompt('Ingresa un valor de PAR:', parMeasurements[hour]);
        if (value !== null) {
          handlePointDrag(hour, parseFloat(value));
        }
      }
    },
  };

  const calculateDLI = () => {
    if (calculationMethod === 'simple') {
      return calculateDLISimple(parMeasurements);
    } else {
      return calculateNumericalAccurateDLI(parMeasurements);
    }
  };

  return (
    <>
      <Line data={data} options={options} />
      <div className="h-4"></div>
      <div>
        <label htmlFor="calculation-method">Selecciona el algoritmo de cálculo de DLI:</label>
        <select
          id="calculation-method"
          value={calculationMethod}
          onChange={(e) => setCalculationMethod(e.target.value)}
        >
          <option value="simple">Simple</option>
          <option value="numerical">Numéricamente preciso</option>
        </select>
      </div>
      <div className="h-4"></div>
      <div>
        <h2>Resultado de DLI</h2>
        <p>El DLI calculado es: {calculateDLI()} mol·m⁻²·d⁻¹</p>
      </div>
    </>
  );
};

export default InteractiveChart;