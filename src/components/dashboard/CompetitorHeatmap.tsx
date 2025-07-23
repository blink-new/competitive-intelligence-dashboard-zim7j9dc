import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { generateHeatmapData, competitors, categories } from '@/data/mockData';

export function CompetitorHeatmap() {
  const [selectedCell, setSelectedCell] = useState<{ competitor: string; category: string } | null>(null);
  const heatmapData = generateHeatmapData();

  const getIntensity = (value: number) => {
    const maxValue = Math.max(...heatmapData.map(d => d.value));
    return value / maxValue;
  };

  const getColorIntensity = (value: number, baseColor: string) => {
    const intensity = getIntensity(value);
    const opacity = Math.max(0.1, intensity);
    return `${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
  };

  const getCellData = (competitor: string, category: string) => {
    return heatmapData.find(d => d.competitor === competitor && d.category === category);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Competitor vs Content Category Heatmap</CardTitle>
          <CardDescription>
            Visualizing content volume across competitors and categories. Darker colors indicate higher activity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <TooltipProvider>
              <div className="min-w-[800px]">
                {/* Header with categories */}
                <div className="grid grid-cols-9 gap-2 mb-2">
                  <div className="p-3"></div> {/* Empty corner */}
                  {categories.map(category => (
                    <div key={category} className="p-3 text-center">
                      <span className="text-xs font-medium text-muted-foreground transform -rotate-45 inline-block">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Heatmap grid */}
                {competitors.map(competitor => (
                  <div key={competitor.id} className="grid grid-cols-9 gap-2 mb-2">
                    {/* Competitor name */}
                    <div className="p-3 flex items-center">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: competitor.color }}
                        ></div>
                        <span className="text-sm font-medium">{competitor.name}</span>
                      </div>
                    </div>

                    {/* Category cells */}
                    {categories.map(category => {
                      const cellData = getCellData(competitor.name, category);
                      const value = cellData?.value || 0;
                      
                      return (
                        <Tooltip key={`${competitor.id}-${category}`}>
                          <TooltipTrigger asChild>
                            <div
                              className={`heatmap-cell p-3 h-12 flex items-center justify-center cursor-pointer border-2 transition-all duration-200 ${
                                selectedCell?.competitor === competitor.name && selectedCell?.category === category
                                  ? 'border-primary scale-105'
                                  : 'border-transparent hover:border-primary/50'
                              }`}
                              style={{
                                backgroundColor: value > 0 ? getColorIntensity(value, competitor.color) : '#f1f5f9'
                              }}
                              onClick={() => setSelectedCell({ competitor: competitor.name, category })}
                            >
                              <span className="text-sm font-semibold text-foreground">
                                {value}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="text-center">
                              <p className="font-semibold">{competitor.name}</p>
                              <p className="text-sm">{category}</p>
                              <p className="text-sm text-muted-foreground">
                                {value} content pieces
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Content Volume:</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">Low</span>
                <div className="flex space-x-1">
                  {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: `#2563EB${Math.round(opacity * 255).toString(16).padStart(2, '0')}` }}
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">High</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Click cells for details</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Cell Details */}
      {selectedCell && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {selectedCell.competitor} - {selectedCell.category}
            </CardTitle>
            <CardDescription>Detailed breakdown of content in this category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getCellData(selectedCell.competitor, selectedCell.category)?.content.map(content => (
                <div key={content.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{content.title}</h4>
                    <Badge variant="outline">{content.contentType}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{content.summary}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Published: {new Date(content.publishDate).toLocaleDateString()}</span>
                    <span>Engagement: {content.engagement.toLocaleString()}</span>
                    <Badge variant="secondary" className="text-xs">{content.tone}</Badge>
                  </div>
                </div>
              )) || (
                <p className="text-muted-foreground text-center py-8">
                  No content found for this combination
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}