import loadable from '@loadable/component';
import React from 'react';
import { IconBaseProps } from 'react-icons';

function importIcons(iconLib: string) {
  const libs: Record<string, Promise<any>> = {
    ci: import(`react-icons/ci/index.js`),
    di: import(`react-icons/di/index.js`),
    fi: import(`react-icons/fi/index.js`),
    go: import(`react-icons/go/index.js`),
    gr: import(`react-icons/gr/index.js`),
    hi: import(`react-icons/hi/index.js`),
    im: import(`react-icons/im/index.js`),
    lu: import(`react-icons/lu/index.js`),
    rx: import(`react-icons/rx/index.js`),
    sl: import(`react-icons/sl/index.js`),
    ti: import(`react-icons/ti/index.js`),
  };
  return libs[iconLib];
}

type DynamicIconProp = {
  iconName: string;
  iconLib: string;
  iconProps?: IconBaseProps;
};

export function DynamicIcon({ iconName, iconLib, iconProps }: DynamicIconProp) {
  console.log("DynamicIcon", iconLib, iconName);
  const ElementIcon = loadable(() => importIcons(iconLib), {
    resolveComponent: el => el[iconName],
  });

  return <ElementIcon {...iconProps} />;
}
