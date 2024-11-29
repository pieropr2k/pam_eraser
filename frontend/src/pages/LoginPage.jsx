import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";
import "../css/AuthForms.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, error, isAuthenticated } = useAuth();
  console.log(error);
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);
    /*
    { 
    try {
signin(data);
    } catch (e) {
      console.log(error);   
      console.log(e);     
      console.log(e, "error");     
    }
    

  };
  */

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="forms flex items-center justify-center">
      <Card>
        {
         // Editas el componente Message su diseño
        error && <Message message={error}  />
        }
        <h1 className="text-2xl font-bold">Entrar</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            label="Write your email"
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email", { required: true })}
          />
          <p className="errors-label">{errors.email?.message}</p>

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p className="errors-label">{errors.password?.message}</p>

          <Button className={"my-3"}>Login</Button>
        </form>

        <p className="flex gap-x-2 justify-between mt-1">
          No tienes una cuenta? <Link to="/register" className="text-sky-500">Crear nueva</Link>
        </p>
      </Card>
    </div>
  );
}

export default LoginPage;