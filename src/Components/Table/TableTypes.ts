// Interfaz base para una columna
export interface TableColumnBase {
  id: string;
}

// Columna de texto
export interface TextColumn extends TableColumnBase {
  type: "text"; // Literal exacto
  value: string;
}

// Columna de elemento de React
export interface ReactElementColumn extends TableColumnBase {
  type: "element"; // Literal exacto
  element: React.ReactNode;
}

// Tipo que agrupa todas las posibles columnas
export type TableColumn = TextColumn | ReactElementColumn;

// Interfaz para una fila del cuerpo de la tabla
export interface TableRow {
  id: string;
  columns: TableColumn[];
}

// Interfaz para una fila del encabezado de la tabla (solo texto)
export interface TableHeaderRow {
  id: string;
  columns: TextColumn[];
}

// Interfaz para la tabla completa
export interface Table {
  header: TableHeaderRow[];
  rows: TableRow[];
}
