import { Suspense, useMemo } from "react";
import { GraphCanvas, lightTheme } from "reagraph";
import type { GraphEdge, GraphNode } from "reagraph";
import type { ProgramTreeNode, ProgramTreeRuleNode } from "../../../shared/types";

const RULE_FILL = "#c7d2fe";
const TERMINAL_FILL = "#f8fafc";
const EDGE_FILL = "#94a3b8";

function buildGraph(root: ProgramTreeRuleNode): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  let edgeSeq = 0;

  function visit(node: ProgramTreeNode, parentId: string | null) {
    if (node.kind === "rule") {
      const label =
        node.alt !== undefined && node.alt !== 0
          ? `${node.name}:${node.alt}`
          : node.name;
      nodes.push({
        id: node.id,
        label,
        fill: RULE_FILL,
        size: 8,
      });
      if (parentId !== null) {
        edges.push({
          id: `e-${edgeSeq++}`,
          source: parentId,
          target: node.id,
          fill: EDGE_FILL,
          arrowPlacement: "none",
          interpolation: "linear",
        });
      }
      for (const child of node.children) {
        visit(child, node.id);
      }
    } else {
      const raw = node.text;
      const display =
        raw === ""
          ? "ε"
          : raw.length > 40
            ? `${raw.slice(0, 37)}…`
            : raw;
      nodes.push({
        id: node.id,
        label: display,
        subLabel: node.tokenName,
        fill: TERMINAL_FILL,
        size: 6,
      });
      if (parentId !== null) {
        edges.push({
          id: `e-${edgeSeq++}`,
          source: parentId,
          target: node.id,
          fill: EDGE_FILL,
          arrowPlacement: "none",
          interpolation: "linear",
        });
      }
    }
  }

  visit(root, null);
  return { nodes, edges };
}

export interface ParseTreeGraphProps {
  root: ProgramTreeRuleNode;
}

export function ParseTreeGraph({ root }: ParseTreeGraphProps) {
  const { nodes, edges } = useMemo(() => buildGraph(root), [root]);

  return (
    <div className="h-[min(70vh,560px)] min-h-[420px] w-full overflow-hidden rounded-lg border border-slate-200/80 bg-slate-50 shadow-inner">
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Loading parse tree…
          </div>
        }
      >
        <GraphCanvas
          animated
          layoutType="treeTd2d"
          theme={lightTheme}
          nodes={nodes}
          edges={edges}
          labelType="all"
          defaultNodeSize={7}
          draggable={false}
        />
      </Suspense>
    </div>
  );
}
