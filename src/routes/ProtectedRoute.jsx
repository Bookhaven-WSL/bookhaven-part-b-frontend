export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    if (!token) {
      
      return <Navigate to="/" />;
    }
  
    
    return <Outlet />;
  };