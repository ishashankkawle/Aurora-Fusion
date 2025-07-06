
'use client'; // Ensures this is a Client Component

import GlobalProvider from '../_context/GlobalContext';

export default function Providers({ children }) {

  return (
      <GlobalProvider>
          {children} {/* Ensures all pages have access to AuthContext */}
      </GlobalProvider>
  );
}
