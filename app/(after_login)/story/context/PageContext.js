import { createContext, useContext, useState } from 'react';

// Create the context
const PageContext = createContext();

// Custom hook to use the context
export const usePageContext = () => useContext(PageContext);

// Provider component to wrap your app with
export const PageProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState(''); // Initial title
  const [pageNumber, setPageNumber] = useState(''); // Initial page number
  const [length,setLength]=useState('');
  const setPage = (title, number1,number2) => {
    setPageTitle(title);
    setPageNumber(number1);
    setLength(number2);
  };

  return (
    <PageContext.Provider value={{ pageTitle, pageNumber, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
