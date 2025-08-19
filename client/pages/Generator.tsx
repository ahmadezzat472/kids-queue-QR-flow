import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { QrCode, Download, Share2, Palette, Settings, Eye } from "lucide-react";
import Layout from "../components/Layout";

const Generator = () => {
  const [formData, setFormData] = useState({
    destinationUrl: "",
    campaignName: "",
    school: "",
    additionalTags: "",
  });
  const [qrType, setQrType] = useState("standard");
  const [branded, setBranded] = useState(true);
  const [logo, setLogo] = useState(true);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateQRCode = () => {
    console.log("Generating QR code with:", formData);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <QrCode className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Create a QR Code
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quickly generate QR codes for campaigns, enrollment links, or
            wishlist pages. Customize your code with branding and tags.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <span>QR Code Settings</span>
                </CardTitle>
                <CardDescription>
                  Configure your QR code options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Destination URL */}
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-sm font-medium">
                    Destination Link <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="destination"
                    placeholder="https://example.com"
                    value={formData.destinationUrl}
                    onChange={(e) =>
                      handleInputChange("destinationUrl", e.target.value)
                    }
                    className="bg-background"
                  />
                </div>

                {/* Campaign Name */}
                <div className="space-y-2">
                  <Label htmlFor="campaign" className="text-sm font-medium">
                    Campaign Name
                  </Label>
                  <Input
                    id="campaign"
                    placeholder="Enter campaign name"
                    value={formData.campaignName}
                    onChange={(e) =>
                      handleInputChange("campaignName", e.target.value)
                    }
                    className="bg-background"
                  />
                </div>

                {/* School/Classroom */}
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-sm font-medium">
                    School / Classroom
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("school", value)
                    }
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a school or classroom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elementary">
                        Elementary School
                      </SelectItem>
                      <SelectItem value="middle">Middle School</SelectItem>
                      <SelectItem value="high">High School</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="corporate">
                        Corporate Training
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Tags */}
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-sm font-medium">
                    Additional Tags
                  </Label>
                  <Input
                    id="tags"
                    placeholder="Add tags separated by commas"
                    value={formData.additionalTags}
                    onChange={(e) =>
                      handleInputChange("additionalTags", e.target.value)
                    }
                    className="bg-background"
                  />
                  <Badge
                    variant="secondary"
                    className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    CSV
                  </Badge>
                </div>

                <Separator />

                {/* QR Code Type */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">QR Code Type</Label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-sm">Standard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
                      <span className="text-sm text-muted-foreground">
                        Branded
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
                      <span className="text-sm text-muted-foreground">
                        + Logo
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Generate a standard QR code without branding
                  </p>
                </div>

                {/* Generate Button */}
                <Button
                  onClick={generateQRCode}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  size="lg"
                >
                  📱 Generate QR Code
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div>
            <Card className="border-0 shadow-xl bg-white/70 dark:bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <span>Preview</span>
                </CardTitle>
                <CardDescription>Your QR code will appear here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-gray-900 rounded-lg border-2 border-dashed border-purple-200 dark:border-purple-800 flex flex-col items-center justify-center p-8">
                  {formData.destinationUrl ? (
                    <div className="text-center space-y-4">
                      <div className="w-48 h-48 bg-white rounded-lg shadow-lg flex items-center justify-center border">
                        <div className="space-y-2 text-purple-600">
                          <QrCode className="w-24 h-24 mx-auto" />
                          <p className="text-sm font-medium">QR Code</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">
                          Destination: {formData.destinationUrl}
                        </p>
                        {formData.campaignName && (
                          <Badge variant="outline" className="text-xs">
                            {formData.campaignName}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4 text-muted-foreground">
                      <QrCode className="w-16 h-16 mx-auto" />
                      <div className="space-y-2">
                        <p className="font-medium">
                          Enter a destination link to generate
                        </p>
                        <p className="text-sm">QR Code</p>
                      </div>
                    </div>
                  )}
                </div>

                {formData.destinationUrl && (
                  <div className="mt-6 space-y-3">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Generator;
