import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Suspense, lazy } from "react";
import theme from "./theme";
import ProtectedRoute from "./routes/authRoute";
import PageNotFound from "./screens/PageNotFound";

const LoginPageLazy = lazy(() => import("./screens/LoginPage"));
const ChatPageLazy = lazy(() => import("./screens/chatPage"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPageLazy />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <ChatPageLazy />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
