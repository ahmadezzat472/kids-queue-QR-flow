import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { 
  BarChart3, 
  QrCode, 
  TrendingUp, 
  Users, 
  Download, 
  Filter,
  Calendar,
  Eye,
  MapPin,
  Clock
} from "lucide-react";
import Layout from "../components/Layout";

const Analytics = () => {
  const [filters, setFilters] = useState({
    campaign: "All Campaigns",
    fromDate: "2024-01-01",
    toDate: "2024-12-31"
  });

  const metrics = [
    {
      title: "Total QR Codes",
      value: "4",
      icon: QrCode,
      color: "from-green-500 to-green-600",
      textColor: "text-green-600"
    },
    {
      title: "Total Scans",
      value: "526",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      title: "Unique Scans",
      value: "430",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600"
    }
  ];

  const analyticsData = [
    {
      campaignName: "Summer Enrollment 2024",
      destinationLink: "https://kidqueue.com/enroll/summer-2024",
      totalScans: 247,
      uniqueScans: 189,
      firstScan: "6/16/2024",
      mostRecent: "7/2/2024"
    },
    {
      campaignName: "Fall Waitlist Campaign",
      destinationLink: "https://kidqueue.com/waitlist/fall-2024",
      totalScans: 156,
      uniqueScans: 134,
      firstScan: "6/20/2024",
      mostRecent: "7/8/2024"
    },
    {
      campaignName: "Open House Event",
      destinationLink: "https://kidqueue.com/events/open-house",
      totalScans: 89,
      uniqueScans: 76,
      firstScan: "5/15/2024",
      mostRecent: "7/4/2024"
    },
    {
      campaignName: "Parent Newsletter",
      destinationLink: "https://kidqueue.com/newsletter/signup",
      totalScans: 34,
      uniqueScans: 31,
      firstScan: "4/22/2024",
      mostRecent: "7/1/2024"
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                QR Code Analytics
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Track engagement and scan history of your QR codes.
            </p>
          </div>
          
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* All Placeholders */}
        <Card className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <QrCode className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">All Placeholders</h3>
              <p className="text-sm text-muted-foreground">All analytics banner</p>
              <p className="text-sm text-muted-foreground">CVars</p>
            </div>
          </CardContent>
        </Card>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <p className={`text-3xl font-bold ${metric.textColor}`}>{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-purple-600" />
              <span>Filters</span>
            </CardTitle>
            <CardDescription>Filter your analytics data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-purple-600">Campaigns</Label>
                <Select value={filters.campaign} onValueChange={(value) => setFilters(prev => ({ ...prev, campaign: value }))}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Campaigns">All Campaigns</SelectItem>
                    <SelectItem value="Summer Enrollment 2024">Summer Enrollment 2024</SelectItem>
                    <SelectItem value="Fall Waitlist Campaign">Fall Waitlist Campaign</SelectItem>
                    <SelectItem value="Open House Event">Open House Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">From Date</Label>
                <Input
                  type="date"
                  value={filters.fromDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, fromDate: e.target.value }))}
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">To Date</Label>
                <Input
                  type="date"
                  value={filters.toDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, toDate: e.target.value }))}
                  className="bg-background"
                />
              </div>
              
              <div className="flex items-end gap-2">
                <Button className="bg-primary">Apply</Button>
                <Button variant="outline">Clear</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Another Placeholder */}
        <Card className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <TrendingUp className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">All Placeholders</h3>
              <p className="text-sm text-muted-foreground">or some placeholder text</p>
              <p className="text-sm text-muted-foreground">CVars2</p>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Data Table */}
        <Card className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Analytics Data</CardTitle>
              <CardDescription>Detailed campaign performance metrics</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 hover:from-green-600 hover:to-green-700">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 text-sm font-medium text-muted-foreground">Campaign Name</th>
                    <th className="pb-3 text-sm font-medium text-muted-foreground">Destination Link</th>
                    <th className="pb-3 text-sm font-medium text-muted-foreground">Total Scans</th>
                    <th className="pb-3 text-sm font-medium text-muted-foreground">Unique Scans</th>
                    <th className="pb-3 text-sm font-medium text-muted-foreground">First Scan</th>
                    <th className="pb-3 text-sm font-medium text-muted-foreground">Most Recent</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.map((item, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-4">
                        <div className="font-medium text-foreground">{item.campaignName}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer truncate max-w-xs">
                          {item.destinationLink}
                        </div>
                      </td>
                      <td className="py-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {item.totalScans}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {item.uniqueScans}
                        </Badge>
                      </td>
                      <td className="py-4 text-sm text-muted-foreground">{item.firstScan}</td>
                      <td className="py-4 text-sm text-muted-foreground">{item.mostRecent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
