import { AuthProvider } from "./modules/identity/context/authContext";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AuthProvider>
  );
}

export default App;
