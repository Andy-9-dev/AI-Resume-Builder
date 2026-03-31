import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentResume, setCurrentResume] = useState(null);
  const [resumes, setResumes] = useState([]);
  const [coverLetters, setCoverLetters] = useState([]);
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const login = useCallback((userData) => {
    setUser(userData);
    // In real app, would authenticate with backend
    console.log('User logged in:', userData);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setCurrentResume(null);
    setResumes([]);
    setCoverLetters([]);
  }, []);

  const addNotification = useCallback((notification) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { ...notification, id }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const value = {
    user,
    setUser,
    login,
    logout,
    currentResume,
    setCurrentResume,
    resumes,
    setResumes,
    coverLetters,
    setCoverLetters,
    jobDescriptions,
    setJobDescriptions,
    onboardingComplete,
    setOnboardingComplete,
    isLoading,
    setIsLoading,
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
