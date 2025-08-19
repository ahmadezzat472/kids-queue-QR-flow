import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { QrCode, Home, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center space-y-8 py-16">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900">
              <QrCode className="w-16 h-16 text-purple-600" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-purple-600">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/generator">
              <QrCode className="mr-2 h-4 w-4" />
              Create QR Code
            </Link>
          </Button>
        </div>
        
        <Button 
          onClick={() => window.history.back()} 
          variant="ghost" 
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
