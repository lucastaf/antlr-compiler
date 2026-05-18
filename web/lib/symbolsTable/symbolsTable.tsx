import type { VariableDeclare } from "../../../shared/types";

export default function SymbolTable(props: { variables: VariableDeclare[] }) {
  const { variables } = props;

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Simbolo</th>
            <th>Tipo</th>
            <th>É constante</th>
            <th>Inicio</th>
            <th>Fim</th>
          </tr>
        </thead>
        <tbody>
          {variables.map((variable, i) => (
            <tr key={i}>
              <td>{variable.name}</td>
              <td>{variable.type}</td>
              <td>{variable.isConst ? "S" : "N"}</td>
              <td>{variable.start}</td>
              <td>{variable.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
