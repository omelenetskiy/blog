import React from 'react';

export const StorybookWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="w-[500px]">{children}</div>;
};
