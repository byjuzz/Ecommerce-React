import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Correo y contraseña son obligatorios");
      return;
    }

    try {
      setSubmitting(true);
      await login(form);
      navigate("/");
    } catch (err) {
      setError("Credenciales inválidas");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Correo"
      />
      <input
        name="password"
        type="password"
        autoComplete="current-password"
        value={form.password}
        onChange={handleChange}
        placeholder="Contraseña"
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Ingresando..." : "Iniciar sesión"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginPage;
