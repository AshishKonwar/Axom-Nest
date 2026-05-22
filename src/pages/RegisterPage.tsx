import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Phone, Home, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: "tenant" | "owner";
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<RegisterForm>({
    defaultValues: { role: "tenant" },
  });

  const onSubmit = async (_data: RegisterForm) => {
    await new Promise((r) => setTimeout(r, 800));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="blob absolute -top-32 -right-32 w-96 h-96 bg-accent/20" />
      <div className="blob absolute bottom-0 -left-20 w-64 h-64 bg-white/10 animate-float-slow" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-glass-lg p-8"
      >
        <Link to="/" className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <Home className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl text-slate-900">
            Axom<span className="text-primary">Nest</span>
          </span>
        </Link>

        <h1 className="text-2xl font-bold text-slate-900 mb-1">Create account</h1>
        <p className="text-slate-400 text-sm mb-6">Join AxomNest — it's free</p>

        <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-xl">
          {(["tenant", "owner"] as const).map((role) => (
            <label
              key={role}
              className={`flex-1 text-center py-2 text-sm font-semibold rounded-lg cursor-pointer transition-all ${
                watch("role") === role ? "bg-primary text-white shadow-sm" : "text-slate-500"
              }`}
            >
              <input {...register("role")} type="radio" value={role} className="hidden" />
              {role === "tenant" ? "Looking for PG" : "PG Owner"}
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input {...register("name", { required: "Name is required" })} placeholder="Your full name" className="pl-10" />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input {...register("email", { required: "Email is required" })} type="email" placeholder="you@example.com" className="pl-10" />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input {...register("phone", { required: "Phone is required" })} type="tel" placeholder="+91 98765 43210" className="pl-10" />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="pl-10 pr-10"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <Button type="submit" className="w-full mt-2" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Creating account…
              </span>
            ) : "Create account"}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
