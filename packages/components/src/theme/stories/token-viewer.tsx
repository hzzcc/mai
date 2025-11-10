import type { ReactNode } from 'react';

import { listTokens, tokenToCssVar } from '../create-theme-provider';

import styles from './sparks-theme.module.scss';

interface ColumnProps<T> {
  header: string;
  cell: (props: { row: T }) => ReactNode;
}

interface TableProps<T extends { propertyName: string }> {
  className?: string;
  data: T[];
  columns: ColumnProps<T>[];
}

function Table<T extends { propertyName: string }>({
  className,
  data,
  columns,
}: TableProps<T>) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.propertyName}>
            {columns.map((column) => (
              <td key={column.header}>{column.cell({ row })}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface ThemeToken {
  propertyName: string;
  cssVariable: string;
  value: string;
  preview?: ReactNode;
}

export type TokenViewerProps = {
  theme: object;
};

export const TokenViewer = ({ theme }: TokenViewerProps) => {
  const tokens = listTokens(theme);

  const themeTokens: ThemeToken[] = tokens.map(([key, value]) => {
    const [cssVarKey] = tokenToCssVar(key, value);
    const token: ThemeToken = {
      propertyName: key,
      cssVariable: cssVarKey,
      value,
    };

    if (value.startsWith('#') || value.startsWith('rgb')) {
      token.preview = (
        <div
          style={{
            backgroundColor: value as string,
            width: 30,
            height: 30,
            border: '1px solid lightgray',
          }}
        />
      );
    }
    return token;
  });

  const columns: ColumnProps<ThemeToken>[] = [
    { header: 'Property Name', cell: ({ row }) => row?.propertyName },
    { header: 'CSS Variable', cell: ({ row }) => row?.cssVariable },
    { header: 'Value', cell: ({ row }) => row?.value },
    { header: 'Preview', cell: ({ row }) => row?.preview || `"${row.value}"` },
  ];

  return (
    <div className={styles.tokenViewer}>
      <Table data={themeTokens} columns={columns} />
    </div>
  );
};
