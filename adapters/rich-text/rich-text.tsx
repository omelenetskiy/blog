import React from 'react';
import {
  BLOCKS,
  INLINES,
  MARKS,
  Document,
  Block,
  Inline,
} from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { Typography } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Compose } from '@/adapters/compose';

export const RichText = (document: Document): React.JSX.Element => {
  const options: Options = {
    renderText: (text: string) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <strong className="font-bold">{text}</strong>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => (
        <em className="italic">{text}</em>
      ),
      [MARKS.UNDERLINE]: (text: React.ReactNode) => (
        <span className="underline">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="h1" component="h1">
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_2]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="h2" component="h2">
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_3]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="h3" component="h3">
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_4]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="h4" component="h4">
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_5]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="h5" component="h5">
          {children}
        </Typography>
      ),
      [BLOCKS.HEADING_6]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="h6" component="h6">
          {children}
        </Typography>
      ),
      [BLOCKS.PARAGRAPH]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Typography variant="body1" component="p">
          {children}
        </Typography>
      ),
      [BLOCKS.UL_LIST]: (_node: Block | Inline, children: React.ReactNode) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node: Block | Inline, children: React.ReactNode) => (
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => <li>{children}</li>,
      [BLOCKS.HR]: () => <Separator className="my-4" />,
      [BLOCKS.QUOTE]: (_node: Block | Inline, children: React.ReactNode) => (
        <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
          {children}
        </blockquote>
      ),
      [BLOCKS.TABLE]: (node: Block | Inline, children: React.ReactNode) => {
        const [headerRow, ...body] = React.Children.toArray(children);
        return (
          <Table className="my-4">
            {headerRow && (
              <TableHeader className="bg-muted/50 font-medium transition-colors hover:bg-muted/50">
                {headerRow}
              </TableHeader>
            )}
            <TableBody>{body}</TableBody>
          </Table>
        );
      },
      [BLOCKS.TABLE_ROW]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => <TableRow>{children}</TableRow>,
      [BLOCKS.TABLE_CELL]: (
        _node: Block | Inline,
        children: React.ReactNode,
      ) => <TableCell>{children}</TableCell>,
      [BLOCKS.TABLE_HEADER_CELL]: (
        node: Block | Inline,
        children: React.ReactNode,
      ) => <TableHead>{children}</TableHead>,
      [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        return <Compose {...node.data.target} className="my-4" />;
      },
      [INLINES.HYPERLINK]: (
        node: Block | Inline,
        children: React.ReactNode,
      ) => (
        <Link
          href={node.data.uri}
          className="font-medium text-primary underline underline-offset-4"
        >
          {children}
        </Link>
      ),
      [INLINES.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        return <Compose {...node.data.target} className="my-4" />;
      },
    },
  };

  return <div>{documentToReactComponents(document, options)}</div>;
};
