import { useState } from "react";
import { Calculator, Car, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";

const LoanCalculator = () => {
  const navigate = useNavigate();
  const [vehicleValue, setVehicleValue] = useState(10000000);
  const [loanPercentage, setLoanPercentage] = useState(70);
  const [interestRate, setInterestRate] = useState(1.5);
  const [months, setMonths] = useState(12);

  const loanAmount = (vehicleValue * loanPercentage) / 100;
  const monthlyInterestRate = interestRate / 100;
  const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CR', { 
      style: 'currency', 
      currency: 'CRC',
      minimumFractionDigits: 0 
    }).format(amount);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-primary">Calcula</span> tu Préstamo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Usa nuestra calculadora para estimar el monto de tu préstamo 
            y las cuotas mensuales según el valor de tu vehículo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-primary" />
                <span>Datos del Vehículo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="vehicleValue">Valor del Vehículo</Label>
                <Input
                  id="vehicleValue"
                  type="number"
                  value={vehicleValue}
                  onChange={(e) => setVehicleValue(Number(e.target.value))}
                  placeholder="10,000,000"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Ingresa el valor estimado de tu vehículo en colones
                </p>
              </div>

              <div>
                <Label>Porcentaje del Préstamo: {loanPercentage}%</Label>
                <Slider
                  value={[loanPercentage]}
                  onValueChange={(value) => setLoanPercentage(value[0])}
                  max={70}
                  min={30}
                  step={5}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>30%</span>
                  <span>70%</span>
                </div>
              </div>

              <div>
                <Label>Tasa de Interés Mensual: {interestRate}%</Label>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  max={5}
                  min={1.5}
                  step={0.1}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1.5%</span>
                  <span>5%</span>
                </div>
              </div>

              <div>
                <Label>Plazo en Meses: {months}</Label>
                <Slider
                  value={[months]}
                  onValueChange={(value) => setMonths(value[0])}
                  max={60}
                  min={6}
                  step={6}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>6 meses</span>
                  <span>60 meses</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Loan Amount */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <DollarSign className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Monto del Préstamo</h3>
                </div>
                <div className="text-3xl font-bold mb-2">
                  {formatCurrency(loanAmount)}
                </div>
                <p className="text-primary-foreground/80">
                  {loanPercentage}% del valor de tu vehículo
                </p>
              </CardContent>
            </Card>

            {/* Monthly Payment */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Car className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Cuota Mensual</h3>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {formatCurrency(monthlyPayment)}
                </div>
                <p className="text-muted-foreground">
                  Por {months} meses
                </p>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Resumen del Préstamo</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor del vehículo:</span>
                    <span className="font-medium">{formatCurrency(vehicleValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monto a financiar:</span>
                    <span className="font-medium">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total a pagar:</span>
                    <span className="font-medium">{formatCurrency(monthlyPayment * months)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-muted-foreground">Intereses totales:</span>
                    <span className="font-medium text-primary">
                      {formatCurrency((monthlyPayment * months) - loanAmount)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              className="w-full"
              onClick={() => navigate("/solicitar-prestamo")}
            >
              Solicitar Este Préstamo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;