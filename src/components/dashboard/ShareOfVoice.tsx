import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getShareOfVoiceData, competitors } from '@/data/mockData';

export function ShareOfVoice() {
  const shareData = getShareOfVoiceData();
  
  const categoryShareData = [
    { category: 'AI/ML', acme: 25, techflow: 20, innovate: 30, nexus: 15, quantum: 10 },
    { category: 'Cloud', acme: 20, techflow: 35, innovate: 15, nexus: 20, quantum: 10 },
    { category: 'Security', acme: 15, techflow: 25, innovate: 20, nexus: 25, quantum: 15 },
    { category: 'Analytics', acme: 30, techflow: 15, innovate: 25, nexus: 20, quantum: 10 },
    { category: 'DevOps', acme: 35, techflow: 20, innovate: 15, nexus: 15, quantum: 15 },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-semibold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-6">
      {/* Overall Share of Voice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Overall Share of Voice</CardTitle>
            <CardDescription>Based on total engagement across all content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={shareData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {shareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      `${value.toLocaleString()} engagement`,
                      name
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Competitor Rankings</CardTitle>
            <CardDescription>Detailed breakdown by engagement and content volume</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {shareData
                .sort((a, b) => b.percentage - a.percentage)
                .map((competitor, index) => (
                <div key={competitor.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                         style={{ backgroundColor: competitor.color }}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{competitor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {competitor.contentCount} pieces
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{competitor.percentage}%</div>
                    <div className="text-sm text-muted-foreground">
                      {competitor.value.toLocaleString()} engagement
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Share of Voice by Category */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Share of Voice by Content Category</CardTitle>
          <CardDescription>Percentage breakdown showing competitor dominance in each category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryShareData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                  labelFormatter={(label) => `Category: ${label}`}
                />
                <Legend />
                {competitors.map(competitor => (
                  <Bar 
                    key={competitor.id}
                    dataKey={competitor.id} 
                    name={competitor.name}
                    fill={competitor.color}
                    stackId="share"
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Share of Voice Insights</CardTitle>
          <CardDescription>Strategic observations from the data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Market Leader</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                {shareData[0]?.name} dominates with {shareData[0]?.percentage}% share of voice, 
                particularly strong in DevOps content.
              </p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Opportunity Gap</h4>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Cloud computing shows the most balanced competition - opportunity for increased presence.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Niche Dominance</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                InnovateLabs leads in AI/ML content with 30% share - consider this competitive threat.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}