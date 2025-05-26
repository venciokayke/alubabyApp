import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { User, Mail, Key, Eye, EyeOff } from "lucide-react";

const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Você precisa aceitar os Termos de Uso e Política de Privacidade.");
      return;
    }
    console.log("Signing up with:", {
      fullName,
      email,
      password,
      agreedToTerms,
    });
    localStorage.setItem("userName", fullName);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEEBD6] p-6">
      <img
        src="assets\BebeLogo.png"
        alt="AluBaby Logo"
        className="w-[100px] h-[100px] mb-3"
      />

      <img
        src="assets\AluBabyTexto.png"
        alt="AluBabyText Logo"
        className="w-auto h-[70px] mb-2"
      />

      <h1 className="text-3xl font-bold text-[#5DB3D3] mb-2 text-center">
        Crie sua conta
      </h1>
      <p className="text-gray-600 mb-5 text-center max-w-xs">
        Economize até 70% no enxoval do seu bebê!
      </p>

      <form onSubmit={handleSignUp} className="w-full max-w-sm space-y-3">
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type="text"
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="pl-10 pr-4 py-3 text-base border-gray-300 rounded-full shadow-sm focus:ring-[#5DB3D3] focus:border-[#5DB3D3]"
            required
          />
        </div>

        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 pr-4 py-3 text-base border-gray-300 rounded-full shadow-sm focus:ring-[#5DB3D3] focus:border-[#5DB3D3]"
            required
          />
        </div>

        <div className="relative">
          <Key
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 py-3 text-base border-gray-300 rounded-full shadow-sm focus:ring-[#5DB3D3] focus:border-[#5DB3D3]"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#5DB3D3]"
            aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            className="ml-3 border-gray-400 data-[state=checked]:bg-[#5DB3D3] data-[state=checked]:border-[#5DB3D3]"
          />
          <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            Aceito os{" "}
            <Link to="#" className="text-[#5DB3D3] underline">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link to="#" className="text-[#5DB3D3] underline">
              Política de Privacidade
            </Link>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#5DB3D3] hover:bg-[#4CA1C0] text-white py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Cadastrar
        </Button>
      </form>

      <p className="mt-5 text-gray-700">
        Já tem uma conta?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#5DB3D3] hover:underline"
        >
          Entrar
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
