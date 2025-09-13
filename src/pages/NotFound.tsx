import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
            <CreditCard className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Finora</h1>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-6xl font-bold text-primary mb-2">404</h2>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h3>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved to a secure location.
            </p>
          </div>
          
          <Button className="inline-flex items-center space-x-2" asChild>
            <a href="/">
              <Home className="w-4 h-4" />
              <span>Return to Banking Home</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
