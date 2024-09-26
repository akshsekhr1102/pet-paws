"use client";

import { createContext, useState, ReactNode } from "react";

type SearchContextProviderProps = {
  children: ReactNode;
};

type TSearchContext = {
  searchQuery: string; // Fixed typo here
  handleChangeSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null); // Fixed context name

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  // State
  const [searchQuery, setSearchQuery] = useState<string>(""); // Specify initial state type

  // Event handler
  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery, // Fixed typo here
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
