# Workspace Agentic Rules — Mandatory MCP & Adaptive Execution Protocol

## ⚡ MANDATORY AUTO-APPLIED MCP & ADAPTIVE PROTOCOL
- **Universal Auto-Application**: These rules automatically apply to this repository and all future sessions.
- **Auto-Run All MCP Tools (Existing & Newly Added) on Every Code Change**:
  1. **Memory MCP** (`memory`): Automatically persist repository architecture, security hardening, dependency updates, and code mutations into the knowledge graph (`create_entities`, `add_observations`) on every session and after every change.
  2. **CodeGraph MCP** (`codegraph`): Automatically resolve codebase AST, symbol references, function callers/callees, and file import graphs before making code modifications.
  3. **Context7 MCP** (`context7`): Automatically fetch live, version-accurate documentation whenever working with external frameworks, SDKs, or libraries.
  4. **Sequential Thinking MCP** (`sequential-thinking`): Automatically execute step-by-step reasoning for multi-file refactoring, debugging, and architectural changes.
  5. **Dynamic / Newly Added MCPs**: Any newly added or registered MCP tools will automatically be discovered, enabled, and auto-executed on code changes.
- **Dynamic Adaptivity**: Dynamically infer project conventions, runtime environments, framework versions, styling engines, and domain constraints before executing any code changes.
