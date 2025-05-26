import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Key, Eye, EyeOff } from "lucide-react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login: para o protótipo, apenas navegamos para home.
    // O nome do usuário (se cadastrado) será pego do localStorage na HomePage.
    console.log("Login attempt with:", { email, password });
    // Se não houver nome no localStorage, HomePage usará um nome padrão.
    // Se você quiser forçar um nome aqui para teste sem cadastro:
    // localStorage.setItem('userName', 'Usuário Logado');
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

      <h1 className="text-3xl font-bold text-[#5DB3D3] mb-8">
        Acesse sua conta
      </h1>

      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
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

        <Button
          type="submit"
          className="w-full bg-[#5DB3D3] hover:bg-[#4CA1C0] text-white py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Entrar
        </Button>
      </form>

      <Link to="#" className="text-[#5DB3D3] mt-6 hover:underline">
        Esqueci minha senha
      </Link>

      <p className="mt-12 text-gray-700">
        Não tem uma conta?{" "}
        <Link
          to="/signup"
          className="font-semibold text-[#5DB3D3] hover:underline"
        >
          Cadastre-se
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
