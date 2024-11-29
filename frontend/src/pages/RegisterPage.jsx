import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/authContext";
import "../css/AuthForms.css";

const RegisterPage = () => {
  const { signup,  error, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="mt-5 flex items-center justify-center">
      <Card>
        {
          // Editas el componente Message su diseño
          error && <Message message={error}  />
        }
        <h1 className="text-3xl font-bold mb-6">Registrar</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Escribe tu nombre"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )} 

          

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirmar Contraseña:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}

          <Button className={"mt-1.5 mb-2.5"}>Registrar</Button>
        </form>
        <p className="mt-1">
          Tienes una cuenta?
          <Link className="ml-1 text-sky-500" to="/login">
            Logeate
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default RegisterPage;