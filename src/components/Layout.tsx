// src/components/Layout.tsx
import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f1f3f5;
`;

const Footer = styled.footer`
  background: #222;
  color: white;
  text-align: center;
  padding: 10px;
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <Footer>© 2024 J2 Store</Footer>
    </Container>
  );
}

export default Layout;
