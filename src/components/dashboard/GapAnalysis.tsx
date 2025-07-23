import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, TrendingUp, Target, CheckCircle, XCircle } from 'lucide-react';
import { categories, industries, technologies } from '@/data/mockData';

interface GapItem {
  topic: string;
  category: string;
  competitorCoverage: number;
  ourCoverage: number;
  opportunity: 'high' | 'medium' | 'low';
  type: 'content-gap' | 'format-gap' | 'audience-gap';
}

export function GapAnalysis() {
  const [selectedDimension, setSelectedDimension] = useState<'category' | 'industry' | 'technology'>('category');
  
  const contentGaps: GapItem[] = [
    {
      topic: 'AI Ethics and Governance',
      category: 'AI/ML',
      competitorCoverage: 85,
      ourCoverage: 20,
      opportunity: 'high',
      type: 'content-gap'
    },
    {
      topic: 'Zero Trust Architecture',
      category: 'Cybersecurity',
      competitorCoverage: 70,
      ourCoverage: 30,
      opportunity: 'high',
      type: 'content-gap'
    },
    {
      topic: 'Quantum Computing Applications',
      category: 'Emerging Tech',
      competitorCoverage: 60,
      ourCoverage: 10,
      opportunity: 'medium',
      type: 'content-gap'
    },
    {
      topic: 'Sustainable Cloud Computing',
      category: 'Cloud Computing',
      competitorCoverage: 45,
      ourCoverage: 15,
      opportunity: 'medium',
      type: 'content-gap'
    }
  ];

  const formatGaps: GapItem[] = [
    {
      topic: 'Interactive Webinars',
      category: 'Format',
      competitorCoverage: 80,
      ourCoverage: 25,
      opportunity: 'high',
      type: 'format-gap'
    },
    {
      topic: 'Video Case Studies',
      category: 'Format',
      competitorCoverage: 65,
      ourCoverage: 40,
      opportunity: 'medium',
      type: 'format-gap'
    },
    {
      topic: 'Podcast Series',
      category: 'Format',
      competitorCoverage: 55,
      ourCoverage: 20,
      opportunity: 'medium',
      type: 'format-gap'
    }
  ];

  const audienceGaps: GapItem[] = [
    {
      topic: 'C-Suite Decision Makers',
      category: 'Audience',
      competitorCoverage: 75,
      ourCoverage: 35,
      opportunity: 'high',
      type: 'audience-gap'
    },
    {
      topic: 'Mid-Market Companies',
      category: 'Audience',
      competitorCoverage: 60,
      ourCoverage: 25,
      opportunity: 'high',
      type: 'audience-gap'
    },
    {
      topic: 'Technical Practitioners',
      category: 'Audience',
      competitorCoverage: 50,
      ourCoverage: 70,
      opportunity: 'low',
      type: 'audience-gap'
    }
  ];

  const ourAdvantages = [
    {
      topic: 'DevOps Best Practices',
      category: 'DevOps',
      ourCoverage: 85,
      competitorCoverage: 45,
      advantage: 'high'
    },
    {
      topic: 'API Security',
      category: 'Cybersecurity',
      ourCoverage: 70,
      competitorCoverage: 35,
      advantage: 'high'
    },
    {
      topic: 'Microservices Architecture',
      category: 'Cloud Computing',
      ourCoverage: 65,
      competitorCoverage: 40,
      advantage: 'medium'
    }
  ];

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAdvantageColor = (advantage: string) => {
    switch (advantage) {
      case 'high': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const GapCard = ({ gap, showAdvantage = false }: { gap: any; showAdvantage?: boolean }) => (
    <div className="p-4 border border-border rounded-lg space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-foreground">{gap.topic}</h4>
          <p className="text-sm text-muted-foreground">{gap.category}</p>
        </div>
        <Badge 
          className={showAdvantage ? getAdvantageColor(gap.advantage) : getOpportunityColor(gap.opportunity)}
          variant="outline"
        >
          {showAdvantage ? `${gap.advantage} advantage` : `${gap.opportunity} opportunity`}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Competitors</span>
          <span className="font-medium">{showAdvantage ? gap.competitorCoverage : gap.competitorCoverage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-red-500 h-2 rounded-full" 
            style={{ width: `${showAdvantage ? gap.competitorCoverage : gap.competitorCoverage}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Our Coverage</span>
          <span className="font-medium">{gap.ourCoverage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full" 
            style={{ width: `${gap.ourCoverage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Gap: {Math.abs(gap.competitorCoverage - gap.ourCoverage)}%</span>
        {showAdvantage ? (
          <CheckCircle className="w-4 h-4 text-green-600" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-amber-600" />
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-900 dark:text-red-100">Critical Gaps</p>
                <p className="text-2xl font-bold text-red-600">{contentGaps.filter(g => g.opportunity === 'high').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-900 dark:text-amber-100">Medium Gaps</p>
                <p className="text-2xl font-bold text-amber-600">{contentGaps.filter(g => g.opportunity === 'medium').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-900 dark:text-green-100">Our Advantages</p>
                <p className="text-2xl font-bold text-green-600">{ourAdvantages.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Opportunities</p>
                <p className="text-2xl font-bold text-blue-600">{contentGaps.length + formatGaps.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gap Analysis Tabs */}
      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Content Gaps</TabsTrigger>
          <TabsTrigger value="format">Format Gaps</TabsTrigger>
          <TabsTrigger value="audience">Audience Gaps</TabsTrigger>
          <TabsTrigger value="advantages">Our Advantages</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content Topic Gaps</CardTitle>
              <CardDescription>
                Topics where competitors have significantly more coverage than us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentGaps.map((gap, index) => (
                  <GapCard key={index} gap={gap} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="format" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content Format Gaps</CardTitle>
              <CardDescription>
                Content formats where competitors are outperforming us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formatGaps.map((gap, index) => (
                  <GapCard key={index} gap={gap} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Audience Segment Gaps</CardTitle>
              <CardDescription>
                Audience segments where we have lower coverage than competitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {audienceGaps.map((gap, index) => (
                  <GapCard key={index} gap={gap} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advantages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Our Competitive Advantages</CardTitle>
              <CardDescription>
                Areas where we significantly outperform competitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ourAdvantages.map((advantage, index) => (
                  <GapCard key={index} gap={advantage} showAdvantage />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommended Actions</CardTitle>
          <CardDescription>Strategic recommendations based on gap analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">🚨 Immediate Action Required</h4>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Develop AI Ethics content series to close 65% gap</li>
                <li>• Create Zero Trust Architecture whitepaper and webinar</li>
                <li>• Launch C-Suite focused content campaign</li>
              </ul>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">⚠️ Medium Priority</h4>
              <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                <li>• Explore quantum computing thought leadership opportunities</li>
                <li>• Increase video content production by 40%</li>
                <li>• Develop mid-market specific case studies</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Leverage Strengths</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Amplify DevOps content across more channels</li>
                <li>• Create API Security certification program</li>
                <li>• Develop microservices best practices framework</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}