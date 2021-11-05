import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart() {
    const data = [
        {
          name: 'Jan',
          'Active Users': 4000
        },
        {
          name: 'Feb',
          'Active Users': 3000
        },
        {
          name: 'Mar',
          'Active Users': 2000
        },
        {
          name: 'Apr',
          'Active Users': 2780
        },
        {
          name: 'May',
          'Active Users': 1890
        },
        {
          name: 'Jun',
          'Active Users': 2390
        },
        {
          name: 'Jul',
          'Active Users': 3490
        },
        {
            name: 'Aug',
            'Active Users': 2780
          },
          {
            name: 'Sep',
            'Active Users': 1890
          },
          {
            name: 'Oct',
            'Active Users': 2390
          },
          {
            name: 'Nov',
            'Active Users': 3490
          },
          {
            name: 'Dec',
            'Active Users': 3490
          }
      ];
      
    return (
        <div className="chart">
            <h3 className="chartTitle">
                Users Analytics
            </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart
                width={500}
                height={200}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#5ac3f2"/>               
                <Tooltip />
                <Line type="monotone" dataKey="Active Users" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Chart
