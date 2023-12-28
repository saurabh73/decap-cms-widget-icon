import React, { useState } from 'react';
import { icons } from './icons';
import IconPickerContainer from './IconPickerContainer';

export type ControlProps = {
  onChange(value: string): void;
  forID: string;
  value?: string;
  classNameWrapper: string;
  field: {
    get(path: string, defaultValue: string): string;
  };
};

export const IconControl = React.forwardRef<any, ControlProps>(
  function IconControl(
    { forID, field, value, classNameWrapper, onChange },
    ref
  ) {
    const iconFamily = field.get('iconFamily', 'fi');
    const iconList = icons[iconFamily];

    const [showIconPicker, setShowIconPicker] = useState<boolean>(false);

    const handleClick = () => {
      setShowIconPicker(!showIconPicker);
    };

    //   const handleClear = () => {
    //     onChange('');
    //   };

    const handleClose = () => {
      setShowIconPicker(false);
    };

    const handleChange = (icon: string) => {
      onChange(icon);
      handleClose();
    };

    React.useImperativeHandle(
      ref,
      () => ({
        isValid() {
          return { error: false };
        },
      }),
      []
    );

    return (
      <div className={classNameWrapper}>
        <button
          id={forID}
          onClick={handleClick}
          style={{
            paddingLeft: '1rem', // px-4
            paddingRight: '1rem', // px-4
            paddingTop: '0.5rem', // py-2
            paddingBottom: '0.5rem', // py-2
            fontWeight: 500, // font-medium
            color: '#62626f', // text-[#62626f]
            backgroundColor: '#dfdfe3', // bg-[#dfdfe3]
            border: '1px solid #dfdfe3', // border border-[#dfdfe3]
            borderRadius: '0.25rem', // rounded
          }}
        >
          {value || 'Select Icon'}
        </button>

        {showIconPicker && (
          <IconPickerContainer
            items={iconList}
            itemsPerPage={102}
            iconFamily={iconFamily}
            onChangeItem={handleChange}
          />
        )}
      </div>
    );
  }
);
