import React from 'react';
import { DynamicIcon } from './DynamicIcon';

export type PreviewProps = {
  value: string;
  field: {
    get(path: string, defaultValue: string): string;
  };
};

export const IconPreview = ({ value, field }: PreviewProps) => {
  const iconFamily = field.get('iconFamily', 'fi');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100px',
        padding: '16px',
      }}
    >
      <label
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          textTransform: 'uppercase',
          marginBottom: '10px',
          color: '#62626f',
          fontSize: '12px',
          fontWeight: '600',
        }}
      >
        Icon Preview
      </label>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          width: '48px',
          padding: '16px',
          borderRadius: '0.5rem',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          color: '#62626f',
        }}
      >
        <DynamicIcon
          iconLib={iconFamily}
          iconName={value}
          iconProps={{ size: 48 }}
        />
      </div>
    </div>
  );
};
