// App.tsx
import { AuthProvider } from "./modules/identity/context/authContext";
import { CartProvider } from "./modules/cart/context/CartContext"; // ✅ Importa el CartProvider
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout";

function App() {
  return (
    <AuthProvider>
      <CartProvider> 
        <Layout>
          <AppRoutes />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
