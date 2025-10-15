import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";

const LoanApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loanAmount, setLoanAmount] = useState([50000]);
  const [errors, setErrors] = useState<{[key: string]: boolean}>({});
  
  const [formData, setFormData] = useState({
    // Datos Personales
    nombres: "",
    apellidos: "",
    email: "",
    estadoCivil: "",
    hijos: "0",
    telefono: "",
    nacionalidad: "",
    identificacion: "",
    fotoId: null,
    
    // Datos del Vehículo
    marca: "",
    modelo: "",
    año: "",
    placa: "",
    montoSolicitado: 50000,
    
    // Datos Residencia
    direccion: "",
    ciudad: "",
    sector: "",
    tiempoResidencia: "",
    tipoVivienda: "",
    
    // Datos de Empleo
    empresa: "",
    cargo: "",
    tiempoEmpleo: "",
    salario: "",
    tipoEmpleo: ""
  });

  const steps = [
    { number: 1, title: "Datos Personales" },
    { number: 2, title: "Datos del Vehículo" },
    { number: 3, title: "Datos Residencia" },
    { number: 4, title: "Datos de Empleo" }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2
    }).format(value);
  };

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: boolean} = {};
    let isValid = true;

    switch (step) {
      case 1: // Datos Personales
        if (formData.nombres.trim() === "") { newErrors.nombres = true; isValid = false; }
        if (formData.apellidos.trim() === "") { newErrors.apellidos = true; isValid = false; }
        if (formData.email.trim() === "") { newErrors.email = true; isValid = false; }
        if (formData.estadoCivil === "") { newErrors.estadoCivil = true; isValid = false; }
        if (formData.telefono.trim() === "") { newErrors.telefono = true; isValid = false; }
        if (formData.nacionalidad === "") { newErrors.nacionalidad = true; isValid = false; }
        if (formData.identificacion.trim() === "") { newErrors.identificacion = true; isValid = false; }
        break;
      case 2: // Datos del Vehículo
        if (formData.marca.trim() === "") { newErrors.marca = true; isValid = false; }
        if (formData.modelo.trim() === "") { newErrors.modelo = true; isValid = false; }
        if (formData.año.trim() === "") { newErrors.año = true; isValid = false; }
        if (formData.placa.trim() === "") { newErrors.placa = true; isValid = false; }
        break;
      case 3: // Datos Residencia
        if (formData.direccion.trim() === "") { newErrors.direccion = true; isValid = false; }
        if (formData.ciudad.trim() === "") { newErrors.ciudad = true; isValid = false; }
        if (formData.sector.trim() === "") { newErrors.sector = true; isValid = false; }
        if (formData.tiempoResidencia === "") { newErrors.tiempoResidencia = true; isValid = false; }
        if (formData.tipoVivienda === "") { newErrors.tipoVivienda = true; isValid = false; }
        break;
      case 4: // Datos de Empleo
        if (formData.empresa.trim() === "") { newErrors.empresa = true; isValid = false; }
        if (formData.cargo.trim() === "") { newErrors.cargo = true; isValid = false; }
        if (formData.tiempoEmpleo === "") { newErrors.tiempoEmpleo = true; isValid = false; }
        if (formData.salario.trim() === "") { newErrors.salario = true; isValid = false; }
        if (formData.tipoEmpleo === "") { newErrors.tipoEmpleo = true; isValid = false; }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (!validateStep(currentStep)) {
      alert("Por favor completa todos los campos obligatorios marcados en rojo antes de continuar.");
      return;
    }
    
    // Limpiar errores si la validación es exitosa
    setErrors({});
    
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (!validateStep(currentStep)) {
      alert("Por favor completa todos los campos obligatorios marcados en rojo antes de enviar la solicitud.");
      return;
    }
    
    // Aquí se procesaría el formulario
    console.log("Formulario enviado:", formData);
    alert("Solicitud enviada exitosamente. Nos contactaremos contigo en 24 horas.");
    navigate("/");
  };

  const renderPersonalData = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nombres" className={errors.nombres ? "text-red-500" : ""}>Nombres *</Label>
          <Input
            id="nombres"
            placeholder="Nombre"
            value={formData.nombres}
            onChange={(e) => {
              setFormData({...formData, nombres: e.target.value});
              if (errors.nombres && e.target.value.trim() !== "") {
                setErrors({...errors, nombres: false});
              }
            }}
            className={errors.nombres ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.nombres && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
        <div>
          <Label htmlFor="apellidos" className={errors.apellidos ? "text-red-500" : ""}>Apellidos *</Label>
          <Input
            id="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={(e) => {
              setFormData({...formData, apellidos: e.target.value});
              if (errors.apellidos && e.target.value.trim() !== "") {
                setErrors({...errors, apellidos: false});
              }
            }}
            className={errors.apellidos ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.apellidos && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>Correo electrónico *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Indiquenos su correo electrónico"
          value={formData.email}
          onChange={(e) => {
            setFormData({...formData, email: e.target.value});
            if (errors.email && e.target.value.trim() !== "") {
              setErrors({...errors, email: false});
            }
          }}
          className={errors.email ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label className={errors.estadoCivil ? "text-red-500" : ""}>Estado Civil *</Label>
        <RadioGroup 
          value={formData.estadoCivil} 
          onValueChange={(value) => {
            setFormData({...formData, estadoCivil: value});
            if (errors.estadoCivil) {
              setErrors({...errors, estadoCivil: false});
            }
          }}
          className={errors.estadoCivil ? "border border-red-500 rounded p-2" : ""}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="soltero" id="soltero" />
            <Label htmlFor="soltero">Soltero(A)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="casado" id="casado" />
            <Label htmlFor="casado">Casado(A)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="divorciado" id="divorciado" />
            <Label htmlFor="divorciado">Divorciado(A)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="union" id="union" />
            <Label htmlFor="union">Unión Libre</Label>
          </div>
        </RadioGroup>
        {errors.estadoCivil && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="hijos">Hijos/dependientes *</Label>
        <Select value={formData.hijos} onValueChange={(value) => setFormData({...formData, hijos: value})}>
          <SelectTrigger>
            <SelectValue placeholder="0" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5+">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="telefono" className={errors.telefono ? "text-red-500" : ""}>Teléfono o Whatsapp *</Label>
        <Input
          id="telefono"
          placeholder="(809) 234-5678"
          value={formData.telefono}
          onChange={(e) => {
            setFormData({...formData, telefono: e.target.value});
            if (errors.telefono && e.target.value.trim() !== "") {
              setErrors({...errors, telefono: false});
            }
          }}
          className={errors.telefono ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.telefono && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="nacionalidad" className={errors.nacionalidad ? "text-red-500" : ""}>Nacionalidad *</Label>
        <Select 
          value={formData.nacionalidad} 
          onValueChange={(value) => {
            setFormData({...formData, nacionalidad: value});
            if (errors.nacionalidad) {
              setErrors({...errors, nacionalidad: false});
            }
          }}
        >
          <SelectTrigger className={errors.nacionalidad ? "border-red-500 focus:border-red-500" : ""}>
            <SelectValue placeholder="Dominicano(A)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dominicano">Dominicano(A)</SelectItem>
            <SelectItem value="haitiano">Haitiano(A)</SelectItem>
            <SelectItem value="americano">Americano(A)</SelectItem>
            <SelectItem value="otro">Otro</SelectItem>
          </SelectContent>
        </Select>
        {errors.nacionalidad && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="identificacion" className={errors.identificacion ? "text-red-500" : ""}>Identificación *</Label>
        <Input
          id="identificacion"
          placeholder="Cédula o Pasaporte"
          value={formData.identificacion}
          onChange={(e) => {
            setFormData({...formData, identificacion: e.target.value});
            if (errors.identificacion && e.target.value.trim() !== "") {
              setErrors({...errors, identificacion: false});
            }
          }}
          className={errors.identificacion ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.identificacion && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label>Foto de la identificación *</Label>
        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground">
            Haz clic o arrastra un archivo a esta área para subirlo.
          </p>
        </div>
      </div>
    </div>
  );

  const renderVehicleData = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="marca" className={errors.marca ? "text-red-500" : ""}>Marca del vehículo *</Label>
          <Input
            id="marca"
            placeholder="Toyota, Honda, Nissan..."
            value={formData.marca}
            onChange={(e) => {
              setFormData({...formData, marca: e.target.value});
              if (errors.marca && e.target.value.trim() !== "") {
                setErrors({...errors, marca: false});
              }
            }}
            className={errors.marca ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.marca && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
        <div>
          <Label htmlFor="modelo" className={errors.modelo ? "text-red-500" : ""}>Modelo *</Label>
          <Input
            id="modelo"
            placeholder="Corolla, Civic, Sentra..."
            value={formData.modelo}
            onChange={(e) => {
              setFormData({...formData, modelo: e.target.value});
              if (errors.modelo && e.target.value.trim() !== "") {
                setErrors({...errors, modelo: false});
              }
            }}
            className={errors.modelo ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.modelo && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="año" className={errors.año ? "text-red-500" : ""}>Año *</Label>
          <Input
            id="año"
            placeholder="2020"
            value={formData.año}
            onChange={(e) => {
              setFormData({...formData, año: e.target.value});
              if (errors.año && e.target.value.trim() !== "") {
                setErrors({...errors, año: false});
              }
            }}
            className={errors.año ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.año && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
        <div>
          <Label htmlFor="placa" className={errors.placa ? "text-red-500" : ""}>Placa *</Label>
          <Input
            id="placa"
            placeholder="A123456"
            value={formData.placa}
            onChange={(e) => {
              setFormData({...formData, placa: e.target.value});
              if (errors.placa && e.target.value.trim() !== "") {
                setErrors({...errors, placa: false});
              }
            }}
            className={errors.placa ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.placa && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
      </div>

      <div>
        <Label>¿Cuánto dinero necesitas? *</Label>
        <div className="mt-4 space-y-4">
          <div className="px-4">
            <Slider
              value={loanAmount}
              onValueChange={(value) => {
                setLoanAmount(value);
                setFormData({...formData, montoSolicitado: value[0]});
              }}
              max={1000000}
              min={50000}
              step={5000}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$50,000</span>
            <span className="text-lg font-semibold text-primary">
              {formatCurrency(loanAmount[0])}
            </span>
            <span>$1,000,000</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResidenceData = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="direccion" className={errors.direccion ? "text-red-500" : ""}>Dirección completa *</Label>
        <Input
          id="direccion"
          placeholder="Calle, número, sector"
          value={formData.direccion}
          onChange={(e) => {
            setFormData({...formData, direccion: e.target.value});
            if (errors.direccion && e.target.value.trim() !== "") {
              setErrors({...errors, direccion: false});
            }
          }}
          className={errors.direccion ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.direccion && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="ciudad" className={errors.ciudad ? "text-red-500" : ""}>Ciudad *</Label>
          <Input
            id="ciudad"
            placeholder="Santo Domingo"
            value={formData.ciudad}
            onChange={(e) => {
              setFormData({...formData, ciudad: e.target.value});
              if (errors.ciudad && e.target.value.trim() !== "") {
                setErrors({...errors, ciudad: false});
              }
            }}
            className={errors.ciudad ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.ciudad && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
        <div>
          <Label htmlFor="sector" className={errors.sector ? "text-red-500" : ""}>Sector *</Label>
          <Input
            id="sector"
            placeholder="Bella Vista, Naco..."
            value={formData.sector}
            onChange={(e) => {
              setFormData({...formData, sector: e.target.value});
              if (errors.sector && e.target.value.trim() !== "") {
                setErrors({...errors, sector: false});
              }
            }}
            className={errors.sector ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.sector && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="tiempoResidencia" className={errors.tiempoResidencia ? "text-red-500" : ""}>Tiempo en la residencia actual *</Label>
        <Select 
          value={formData.tiempoResidencia} 
          onValueChange={(value) => {
            setFormData({...formData, tiempoResidencia: value});
            if (errors.tiempoResidencia) {
              setErrors({...errors, tiempoResidencia: false});
            }
          }}
        >
          <SelectTrigger className={errors.tiempoResidencia ? "border-red-500 focus:border-red-500" : ""}>
            <SelectValue placeholder="Selecciona..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="menos-1">Menos de 1 año</SelectItem>
            <SelectItem value="1-2">1-2 años</SelectItem>
            <SelectItem value="3-5">3-5 años</SelectItem>
            <SelectItem value="mas-5">Más de 5 años</SelectItem>
          </SelectContent>
        </Select>
        {errors.tiempoResidencia && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="tipoVivienda" className={errors.tipoVivienda ? "text-red-500" : ""}>Tipo de vivienda *</Label>
        <Select 
          value={formData.tipoVivienda} 
          onValueChange={(value) => {
            setFormData({...formData, tipoVivienda: value});
            if (errors.tipoVivienda) {
              setErrors({...errors, tipoVivienda: false});
            }
          }}
        >
          <SelectTrigger className={errors.tipoVivienda ? "border-red-500 focus:border-red-500" : ""}>
            <SelectValue placeholder="Selecciona..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="propia">Propia</SelectItem>
            <SelectItem value="alquilada">Alquilada</SelectItem>
            <SelectItem value="familiar">Casa familiar</SelectItem>
            <SelectItem value="otra">Otra</SelectItem>
          </SelectContent>
        </Select>
        {errors.tipoVivienda && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>
    </div>
  );

  const renderEmploymentData = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="empresa" className={errors.empresa ? "text-red-500" : ""}>Empresa donde labora *</Label>
        <Input
          id="empresa"
          placeholder="Nombre de la empresa"
          value={formData.empresa}
          onChange={(e) => {
            setFormData({...formData, empresa: e.target.value});
            if (errors.empresa && e.target.value.trim() !== "") {
              setErrors({...errors, empresa: false});
            }
          }}
          className={errors.empresa ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.empresa && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="cargo" className={errors.cargo ? "text-red-500" : ""}>Cargo/Posición *</Label>
        <Input
          id="cargo"
          placeholder="Gerente, Vendedor, Contador..."
          value={formData.cargo}
          onChange={(e) => {
            setFormData({...formData, cargo: e.target.value});
            if (errors.cargo && e.target.value.trim() !== "") {
              setErrors({...errors, cargo: false});
            }
          }}
          className={errors.cargo ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.cargo && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="tiempoEmpleo" className={errors.tiempoEmpleo ? "text-red-500" : ""}>Tiempo en el empleo actual *</Label>
        <Select 
          value={formData.tiempoEmpleo} 
          onValueChange={(value) => {
            setFormData({...formData, tiempoEmpleo: value});
            if (errors.tiempoEmpleo) {
              setErrors({...errors, tiempoEmpleo: false});
            }
          }}
        >
          <SelectTrigger className={errors.tiempoEmpleo ? "border-red-500 focus:border-red-500" : ""}>
            <SelectValue placeholder="Selecciona..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="menos-6">Menos de 6 meses</SelectItem>
            <SelectItem value="6-12">6-12 meses</SelectItem>
            <SelectItem value="1-2">1-2 años</SelectItem>
            <SelectItem value="3-5">3-5 años</SelectItem>
            <SelectItem value="mas-5">Más de 5 años</SelectItem>
          </SelectContent>
        </Select>
        {errors.tiempoEmpleo && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="salario" className={errors.salario ? "text-red-500" : ""}>Salario mensual *</Label>
        <Input
          id="salario"
          placeholder="50,000"
          value={formData.salario}
          onChange={(e) => {
            setFormData({...formData, salario: e.target.value});
            if (errors.salario && e.target.value.trim() !== "") {
              setErrors({...errors, salario: false});
            }
          }}
          className={errors.salario ? "border-red-500 focus:border-red-500" : ""}
        />
        {errors.salario && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>

      <div>
        <Label htmlFor="tipoEmpleo" className={errors.tipoEmpleo ? "text-red-500" : ""}>Tipo de empleo *</Label>
        <Select 
          value={formData.tipoEmpleo} 
          onValueChange={(value) => {
            setFormData({...formData, tipoEmpleo: value});
            if (errors.tipoEmpleo) {
              setErrors({...errors, tipoEmpleo: false});
            }
          }}
        >
          <SelectTrigger className={errors.tipoEmpleo ? "border-red-500 focus:border-red-500" : ""}>
            <SelectValue placeholder="Selecciona..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fijo">Empleo fijo</SelectItem>
            <SelectItem value="contrato">Por contrato</SelectItem>
            <SelectItem value="independiente">Trabajador independiente</SelectItem>
            <SelectItem value="negocio">Negocio propio</SelectItem>
          </SelectContent>
        </Select>
        {errors.tipoEmpleo && <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Solicitar Préstamo</h1>
              <p className="text-muted-foreground">
                Completa los siguientes pasos para solicitar tu préstamo con garantía vehicular
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex items-center ${
                      step.number < steps.length ? 'flex-1' : ''
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.number
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {step.number}
                    </div>
                    <span className="ml-2 text-sm font-medium hidden md:block">
                      {step.title}
                    </span>
                    {step.number < steps.length && (
                      <div className="flex-1 h-0.5 bg-muted mx-4 hidden md:block">
                        <div
                          className={`h-full transition-all duration-300 ${
                            currentStep > step.number ? 'bg-primary' : 'bg-muted'
                          }`}
                          style={{
                            width: currentStep > step.number ? '100%' : '0%'
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / 4) * 100} className="h-2" />
            </div>

            {/* Form Card */}
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep - 1].title}</CardTitle>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && renderPersonalData()}
                {currentStep === 2 && renderVehicleData()}
                {currentStep === 3 && renderResidenceData()}
                {currentStep === 4 && renderEmploymentData()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Anterior
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button onClick={nextStep}>
                      Siguiente
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                      Enviar Solicitud
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoanApplication;