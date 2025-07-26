import * as React from "react";
import { cn } from "@/utils/index";
import * as tableStyles from "./table.css";
import { tableLightTheme, tableDarkTheme } from "./table.theme.css";
import { useTheme } from "@/hooks";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  const { getThemeClass } = useTheme();
  const themeClass = getThemeClass(tableLightTheme, tableDarkTheme);

  return (
    <div className={themeClass}>
      <div data-slot="table-container" className={tableStyles.tableContainer}>
        <table
          data-slot="table"
          className={cn(tableStyles.table, className)}
          {...props}
        />
      </div>
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(tableStyles.tableHeader, className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(tableStyles.tableBody, className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(tableStyles.tableFooter, className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(tableStyles.tableRow, className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(tableStyles.tableHead, className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(tableStyles.tableCell, className)}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(tableStyles.tableCaption, className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
