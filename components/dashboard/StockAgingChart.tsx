"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '0-14', count: 12, color: '#00D4AA' },
  { name: '15-29', count: 18, color: '#00D4AA' },
  { name: '30-44', count: 8, color: '#F59E0B' },
  { name: '45-59', count: 3, color: '#FF4D4D' },
  { name: '60+', count: 1, color: '#FF4D4D' },
];

export default function StockAgingChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E2A40" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#8896AB', fontSize: 12, fontWeight: 500 }} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#8896AB', fontSize: 12 }} 
        />
        <Tooltip 
          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          contentStyle={{ 
            backgroundColor: '#0F1729', 
            border: '1px solid #1E2A40', 
            borderRadius: '8px',
            fontSize: '12px'
          }}
          itemStyle={{ color: '#FFFFFF' }}
        />
        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
