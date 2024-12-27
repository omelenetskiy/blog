import React from 'react';
import { adapterMap, componentMap } from '@/adapters/map';
import { EntrySys, Metadata } from 'contentful';

export type ComposeProps = {
  sys: EntrySys & {
    contentType: {
      sys: {
        id: keyof typeof adapterMap;
      };
    };
  };
  metadata: Metadata;
  fields: unknown;
} & {
  [key: string]: unknown;
};

export const Compose = (props: ComposeProps): React.ReactElement | null => {
  if (!props) return null;

  const { sys, fields, metadata, ...rest } = props;

  const sysId = sys?.contentType?.sys?.id;

  if (!sysId) {
    console.error('Invalid entry provided to Compose:', {
      sys,
      fields,
      metadata,
    });
    return null;
  }

  const adapter = adapterMap[sysId];
  const Component = componentMap[sysId];

  if (!adapter || !Component) {
    console.error(
      `No adapter or component found for type: ${sys.contentType.sys.id}`,
    );
    return null;
  }

  const originalProps = adapter({ sys, fields, metadata, ...rest });
  const mergedProps = { ...originalProps, ...rest };

  return <Component {...mergedProps} />;
};
