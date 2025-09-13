import { useState } from "react";
import { Button } from "@/components/ui/button";
import Landing from "@/components/Landing";
import Dashboard from "@/components/Dashboard";
import AuthLogin from "@/components/AuthLogin";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'dashboard'>('landing');

  const handleViewChange = (view: 'landing' | 'login' | 'dashboard') => {
    setCurrentView(view);
  };

  // Demo navigation bar for testing different views
  const DemoNav = () => (
    <div className="fixed top-4 right-4 z-50 bg-card border rounded-lg p-2 shadow-lg">
      <div className="flex space-x-2">
        <Button 
          size="sm" 
          variant={currentView === 'landing' ? 'default' : 'outline'}
          onClick={() => handleViewChange('landing')}
        >
          Landing
        </Button>
        <Button 
          size="sm" 
          variant={currentView === 'login' ? 'default' : 'outline'}
          onClick={() => handleViewChange('login')}
        >
          Login
        </Button>
        <Button 
          size="sm" 
          variant={currentView === 'dashboard' ? 'default' : 'outline'}
          onClick={() => handleViewChange('dashboard')}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <DemoNav />
      {currentView === 'landing' && <Landing />}
      {currentView === 'login' && <AuthLogin />}
      {currentView === 'dashboard' && <Dashboard />}
    </>
  );
};

export default Index;
