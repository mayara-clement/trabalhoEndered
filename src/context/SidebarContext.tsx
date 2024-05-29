import React, { createContext, useState, ReactNode } from "react";

// Define the interface for the context value
interface SidebarContextProps {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
}

const initialValue: SidebarContextProps = {
  isCollapsed: false,
  toggleSidebarcollapse: () => {} // Initial empty function
};

const SidebarContext = createContext<SidebarContextProps>(initialValue);

// Specify ReactNode as the type for children
const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
