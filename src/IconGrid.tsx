import React from 'react';
import { DynamicIcon } from './DynamicIcon';

type IconGridProps = {
  items: string[];
  iconFamily: string;
  onChange: (icon: string) => void;
};

const IconGrid = ({ items, iconFamily, onChange }: IconGridProps) => {
  return (
    <div
      style={{
        width: '100%', // w-full
        paddingBottom: '1rem', // pb-4
        borderBottom: '1px solid #e0e0e0', // border-b border-gray-200
        display: 'flex', // items-container
        flexWrap: 'wrap', // items-container
      }}
    >
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginTop: '0.5rem',
        }}
      >
        {items.map(icon => (
          <div
            key={icon}
            onClick={() => onChange(icon)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '0.5rem',
              border: '2px solid transparent', // base border
              borderRadius: '0.25rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              width: '2.25rem', // w-9
              height: '2.25rem', // h-9
            }}
          >
            <DynamicIcon iconLib={iconFamily} iconName={icon} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default IconGrid;
