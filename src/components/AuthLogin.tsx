import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, EyeOff, Shield, Lock } from "lucide-react";

const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfaCode, setMfaCode] = useState("");
  const [step, setStep] = useState<'login' | 'mfa'>('login');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate MFA step
    setStep('mfa');
  };

  const handleMFA = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle MFA verification
    console.log('MFA verification:', mfaCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-success/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
              <CreditCard className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Finora</h1>
          </div>
          <p className="text-muted-foreground">Secure access to your financial future</p>
        </div>

        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">
              {step === 'login' ? 'Sign In' : 'Verify Identity'}
            </CardTitle>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm text-muted-foreground">Bank-level security</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Continue Securely
                </Button>
              </form>
            ) : (
              <form onSubmit={handleMFA} className="space-y-4">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-8 h-8 text-warning" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enter the 6-digit code from your authenticator app
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mfa">Authentication Code</Label>
                  <Input
                    id="mfa"
                    type="text"
                    value={mfaCode}
                    onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    className="text-center text-2xl tracking-wider"
                    maxLength={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Verify & Access Account
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => setStep('login')}
                >
                  Back to Login
                </Button>
              </form>
            )}

            <div className="pt-4 border-t">
              <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <Badge variant="secondary" className="space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>256-bit SSL</span>
                </Badge>
                <Badge variant="secondary" className="space-x-1">
                  <Lock className="w-3 h-3" />
                  <span>2FA Protected</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Button variant="link" className="p-0 h-auto text-primary">
              Open Account
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;