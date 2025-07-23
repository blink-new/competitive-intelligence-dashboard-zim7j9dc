import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, FileText, Users, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockContent, competitors } from '@/data/mockData';

export function DashboardOverview() {
  const totalContent = mockContent.length * 8; // Simulating more content
  const totalEngagement = mockContent.reduce((sum, item) => sum + item.engagement, 0) * 8;
  const avgEngagement = Math.round(totalEngagement / totalContent);
  
  const metrics = [
    {
      title: 'Total Content Pieces',
      value: totalContent.toLocaleString(),
      change: '+12%',
      trend: 'up',
      icon: FileText,
      description: 'vs last month'
    },
    {
      title: 'Total Engagement',
      value: totalEngagement.toLocaleString(),
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      description: 'views, likes, shares'
    },
    {
      title: 'Active Competitors',
      value: competitors.length.toString(),
      change: '0%',
      trend: 'neutral',
      icon: Users,
      description: 'tracked companies'
    },
    {
      title: 'Avg Engagement',
      value: avgEngagement.toLocaleString(),
      change: '-3%',
      trend: 'down',
      icon: Target,
      description: 'per content piece'
    }
  ];

  const topTopics = [
    { name: 'AI/ML', count: 15, change: '+25%' },
    { name: 'Cloud Computing', count: 12, change: '+18%' },
    { name: 'Cybersecurity', count: 10, change: '+8%' },
    { name: 'Digital Transformation', count: 8, change: '+12%' },
    { name: 'DevOps', count: 6, change: '-5%' }
  ];

  const topCompetitors = competitors.map(comp => ({
    name: comp.name,
    contentCount: Math.floor(Math.random() * 15) + 5,
    engagement: Math.floor(Math.random() * 5000) + 1000,
    color: comp.color
  })).sort((a, b) => b.engagement - a.engagement);

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="metric-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </span>
                  </div>
                  <div className={`flex items-center space-x-1 text-xs ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-muted-foreground'
                  }`}>
                    {metric.trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
                    {metric.trend === 'down' && <ArrowDownRight className="w-3 h-3" />}
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Content Topics</CardTitle>
            <CardDescription>Most discussed topics this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTopics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{topic.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{topic.count} pieces</Badge>
                    <span className={`text-xs ${
                      topic.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {topic.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Competitors */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Competitor Leaderboard</CardTitle>
            <CardDescription>Ranked by total engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCompetitors.map((competitor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold"
                         style={{ backgroundColor: competitor.color }}>
                      {index + 1}
                    </div>
                    <span className="font-medium">{competitor.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{competitor.contentCount} pieces</Badge>
                    <span className="text-sm text-muted-foreground">
                      {competitor.engagement.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Insights</CardTitle>
          <CardDescription>AI-generated insights from this month's data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Content Gap Opportunity</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Competitors are heavily focusing on AI/ML content. Consider increasing our coverage in this area.
              </p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Trending Topic</h4>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Cloud security content is gaining 25% more engagement compared to last month.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Competitive Advantage</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                We have 40% more DevOps content than our closest competitor this month.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}