import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { CompetitorHeatmap } from '@/components/dashboard/CompetitorHeatmap';
import { ShareOfVoice } from '@/components/dashboard/ShareOfVoice';
import { GapAnalysis } from '@/components/dashboard/GapAnalysis';
import { BarChart3, Grid3X3, PieChart, Target, Users } from 'lucide-react';

function App() {
  return (
    <DashboardLayout>
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-fit">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="heatmap" className="flex items-center space-x-2">
            <Grid3X3 className="w-4 h-4" />
            <span className="hidden sm:inline">Heatmap</span>
          </TabsTrigger>
          <TabsTrigger value="share-of-voice" className="flex items-center space-x-2">
            <PieChart className="w-4 h-4" />
            <span className="hidden sm:inline">Share of Voice</span>
          </TabsTrigger>
          <TabsTrigger value="gap-analysis" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span className="hidden sm:inline">Gap Analysis</span>
          </TabsTrigger>
          <TabsTrigger value="competitors" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Competitors</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <DashboardOverview />
        </TabsContent>

        <TabsContent value="heatmap">
          <CompetitorHeatmap />
        </TabsContent>

        <TabsContent value="share-of-voice">
          <ShareOfVoice />
        </TabsContent>

        <TabsContent value="gap-analysis">
          <GapAnalysis />
        </TabsContent>

        <TabsContent value="competitors">
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Competitor Profiles</h3>
            <p className="text-muted-foreground">
              Detailed competitor analysis and profiles coming soon...
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}

export default App;