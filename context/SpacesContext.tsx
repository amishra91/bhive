'use client';

import React, { ReactNode, createContext, useContext } from 'react';

import data from '@/constants/data.json';
import { facilities } from '@/constants';

interface Space {
  id: string;
  name: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: { [key: string]: { value: number } };
  discountPercentage: number;
}

interface SpacesContextType {
  spaces: Space[];
  facilities: { label: string; icon: string }[];
}

const SpacesContext = createContext<SpacesContextType | undefined>(undefined);

export const SpacesProvider = ({ children }: { children: ReactNode }) => {
  const spaces: Space[] = data.map((space) => ({
    ...space,
    discountPercentage: space.day_pass_discounts_percentage?.['10']?.value ?? 0,
  }));

  return (
    <SpacesContext.Provider value={{ spaces, facilities }}>
      {children}
    </SpacesContext.Provider>
  );
};

export const useSpaces = () => {
  const context = useContext(SpacesContext);
  if (!context) {
    throw new Error('useSpaces must be used within a SpacesProvider');
  }
  return context;
};
