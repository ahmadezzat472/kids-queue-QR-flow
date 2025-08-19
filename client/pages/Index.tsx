import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  QrCode, 
  BarChart3, 
  Zap, 
  Shield, 
  Download, 
  Eye,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Target
} from "lucide-react";
import Layout from "../components/Layout";

const Index = () => {
  const [qrText, setQrText] = useState("");
  const [generatedQR, setGeneratedQR] = useState(false);

  const generateQR = () => {
    if (qrText.trim()) {
      setGeneratedQR(true);
    }
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate QR codes instantly with our optimized engine"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track scans, locations, and engagement metrics in real-time"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and privacy protection"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Fast loading times worldwide with our distributed network"
    }
  ];

  const stats = [
    { label: "QR Codes Generated", value: "2.5M+", icon: QrCode },
    { label: "Total Scans", value: "847K", icon: Eye },
    { label: "Active Users", value: "15.2K", icon: Users },
    { label: "Success Rate", value: "99.9%", icon: TrendingUp }
  ];

  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8 py-12">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Now with Advanced Analytics
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              QR Codes Made
              <br />
              <span className="text-purple-600">Beautiful</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create, customize, and track QR codes with powerful analytics. 
              The complete solution for modern businesses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              Start Creating Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Analytics Demo
              <BarChart3 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Quick Generator */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/50 dark:bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quick QR Generator</CardTitle>
              <CardDescription>
                Create a QR code instantly - no signup required
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="url" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="url">URL</TabsTrigger>
                  <TabsTrigger value="text">Text</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="phone">Phone</TabsTrigger>
                </TabsList>
                
                <TabsContent value="url" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="url">Website URL</Label>
                        <Input
                          id="url"
                          placeholder="https://example.com"
                          value={qrText}
                          onChange={(e) => setQrText(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button onClick={generateQR} className="w-full sm:w-auto">
                          <QrCode className="mr-2 h-4 w-4" />
                          Generate
                        </Button>
                      </div>
                    </div>
                    
                    {generatedQR && qrText && (
                      <div className="mt-6 p-6 bg-muted/50 rounded-lg text-center space-y-4">
                        <div className="w-48 h-48 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-dashed border-purple-300">
                          <div className="space-y-2 text-purple-600">
                            <QrCode className="w-16 h-16 mx-auto" />
                            <p className="text-sm font-medium">QR Code Preview</p>
                            <p className="text-xs text-muted-foreground break-all">{qrText}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download PNG
                          </Button>
                          <Button size="sm" variant="outline">
                            <Target className="mr-2 h-4 w-4" />
                            Track Analytics
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="text">
                  <div className="space-y-4">
                    <Label htmlFor="text">Text Content</Label>
                    <Input
                      id="text"
                      placeholder="Enter any text"
                      value={qrText}
                      onChange={(e) => setQrText(e.target.value)}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="email">
                  <div className="space-y-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="contact@example.com"
                      value={qrText}
                      onChange={(e) => setQrText(e.target.value)}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="phone">
                  <div className="space-y-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      value={qrText}
                      onChange={(e) => setQrText(e.target.value)}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-white/50 dark:bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Features */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="text-purple-600">QRFlow</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and analyze QR codes at scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-8 py-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of businesses using QRFlow for their QR code needs
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              <Link to="/generator">
                Create QR Code
                <QrCode className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/analytics">
                View Analytics
                <BarChart3 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
