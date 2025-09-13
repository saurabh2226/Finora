import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Send,
  Receipt,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    {
      id: 1,
      name: "Primary Checking",
      type: "Checking",
      balance: 12450.32,
      accountNumber: "****4521"
    },
    {
      id: 2,
      name: "High Yield Savings",
      type: "Savings",
      balance: 28750.00,
      accountNumber: "****7830"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      description: "Amazon Purchase",
      amount: -89.99,
      date: "2024-01-15",
      category: "Shopping",
      status: "completed"
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 3200.00,
      date: "2024-01-15",
      category: "Income",
      status: "completed"
    },
    {
      id: 3,
      description: "Coffee Shop",
      amount: -4.50,
      date: "2024-01-14",
      category: "Food",
      status: "completed"
    },
    {
      id: 4,
      description: "Electric Bill",
      amount: -125.30,
      date: "2024-01-13",
      category: "Utilities",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Finora</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Settings</Button>
            <Button variant="ghost" size="sm">Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex</h2>
          <p className="text-muted-foreground">Here's your financial overview for today</p>
        </div>

        {/* Account Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {accounts.map((account) => (
            <Card key={account.id} className="border-none shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{account.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
                  </div>
                  <Badge variant="secondary">{account.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-foreground">
                      {showBalance ? `$${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBalance(!showBalance)}
                      className="p-1 h-8 w-8"
                    >
                      {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Send className="w-4 h-4 mr-1" />
                      Send
                    </Button>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Receipt className="w-5 h-5" />
                    <span>Recent Transactions</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-6 border-b last:border-b-0">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 
                            ? 'bg-success/10' 
                            : 'bg-destructive/10'
                        }`}>
                          {transaction.amount > 0 ? (
                            <ArrowDownRight className="w-5 h-5 text-success" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-destructive" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.amount > 0 ? 'text-success' : 'text-foreground'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>This Month</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Income</p>
                  <p className="text-2xl font-bold text-success">+$6,400</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expenses</p>
                  <p className="text-2xl font-bold text-foreground">-$2,847</p>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">Net Change</p>
                  <p className="text-2xl font-bold text-success">+$3,553</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Send className="w-4 h-4 mr-2" />
                  Send Money
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Receipt className="w-4 h-4 mr-2" />
                  Pay Bills
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Request Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;