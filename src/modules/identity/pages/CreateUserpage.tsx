import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/authContext";
import { createUser } from "../services/adminService";


const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 10px;
`;

const CreateUserPage: React.FC = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", firstName: "", lastName: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isAdmin = user?.roles?.some(r => r.toLowerCase() === "admin");

if (!isAdmin) return <p>Acceso denegado.</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log("Entro al handlersubit");
    console.log("Datos enviados:", JSON.stringify(form, null, 2));

    try {
      await createUser(form);
      console.log("Entro al ");
      setSuccess("Usuario creado correctamente");
      setForm({ email: "", password: "", firstName: "", lastName: "" });

      console.log(form);
    } catch (error: any) {
      console.error("Error al crear usuario:", error.response?.data || error.message);
      setError("Hubo un error al crear el usuario");
    }
  };

  return (
    <FormContainer>
      <h2>Crear nuevo usuario</h2>
      <form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" autoComplete="off" value={form.email} onChange={handleChange} />
        <Input name="password" placeholder="Contraseña" autoComplete="new-password" value={form.password} onChange={handleChange} type="password" />
        <Input name="firstName" placeholder="Nombre" value={form.firstName} onChange={handleChange} />
        <Input name="lastName" placeholder="Apellido" value={form.lastName} onChange={handleChange} />
        <Button type="submit">Crear usuario</Button>
      </form>
      {error && <Error>{error}</Error>}
      {success && <p>{success}</p>}
    </FormContainer>
  );
};

export default CreateUserPage;
