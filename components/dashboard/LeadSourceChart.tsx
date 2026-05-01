"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'New', count: 45 },
  { name: 'Contacted', count: 38 },
  { name: 'Test Drive', count: 12 },
  { name: 'Offer', count: 8 },
  { name: 'Won', count: 25 },
];

export default function LeadSourceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        layout="vertical" 
        data={data} 
        margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#1E2A40" />
        <XAxis type="number" hide />
        <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#8896AB', fontSize: 12, fontWeight: 500 }} 
        />
        <Tooltip 
          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          contentStyle={{ 
            backgroundColor: '#0F1729', 
            border: '1px solid #1E2A40', 
            borderRadius: '8px',
            fontSize: '12px'
          }}
        />
        <Bar 
          dataKey="count" 
          fill="#00D4AA" 
          radius={[0, 4, 4, 0]} 
          barSize={24}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
