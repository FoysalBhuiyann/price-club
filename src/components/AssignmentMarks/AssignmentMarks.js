import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: 'Assingment 1',
            Marks: 56,
            Quiz: 2400,
            amt: 60,
        },
        {
            name: 'Assingment 2',
            Marks: 54,
            Quiz: 1398,
            amt: 60,
        },
        {
            name: 'Assingment 3',
            Marks: 54,
            Quiz: 9800,
            amt: 60,
        },
        {
            name: 'Assingment 4',
            Marks: 21,
            Quiz: 3908,
            amt: 60,
        },
        {
            name: 'Assingment 5',
            Marks: 54,
            Quiz: 4800,
            amt: 60,
        },
        {
            name: 'Assingment 6',
            Marks: 32,
            Quiz: 3800,
            amt: 60,
        },
        {
            name: 'Assingment 7',
            Marks: 52,
            Quiz: 4300,
            amt: 60,
        },
    ];
    return (
        <div>
            <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="Marks" stroke="#8884d8" activeDot={{ r: 8 }} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;