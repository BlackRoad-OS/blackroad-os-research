# 🧠 Agent Behavior

> **Version:** 0.1 — 2025-02-08  
> **Status:** draft  
> **Tags:** agents, behavior, cognition, trinary-logic

---

## 1️⃣ What Is Agent Behavior?

Agent behavior encompasses **how agents think, decide, and act** – the cognitive architecture that transforms inputs into outputs while maintaining coherent internal state.

Key dimensions:
- **Beliefs** – What the agent holds to be true (trinary: +1, 0, -1)
- **Capabilities** – What the agent can do (weighted skills mapped to SIG)
- **Goals** – What the agent is trying to achieve (attractor targets)
- **Policies** – Constraints on action (safety rails, compliance rules)

---

## 2️⃣ Formalism

### Belief State

Beliefs use **trinary logic** {+1, 0, -1}:

| Value | Meaning | Implication |
|-------|---------|-------------|
| +1 | Affirmed | Agent believes proposition is true |
| 0 | Unknown | Agent has no position (uncertainty preserved) |
| -1 | Negated | Agent believes proposition is false |

Belief aggregation across agents:

```
Φ(b₁, b₂, ..., bₙ) = {
  +1  if Σbᵢ > threshold
  -1  if Σbᵢ < -threshold
  0   otherwise (contradiction or insufficient evidence)
}
```

### Capability Model

Capabilities map to SIG factor trees:

```
Capability := {
  id:       FactorID          -- prime slot in SIG
  strength: σ ∈ [0, 1]        -- confidence score
  requires: Capability[]      -- prerequisite capabilities
  produces: OutputType[]      -- what this capability generates
}
```

### Decision Architecture

```
Decision := {
  context:    K(t)            -- current knowledge state
  goal:       Attractor       -- target equilibrium
  candidates: Action[]        -- possible actions
  selected:   Action          -- chosen action
  rationale:  JournalEntry    -- PS-SHA∞ logged reasoning
}

select(candidates, goal, context) :=
  argmax(a ∈ candidates, utility(a, goal, context))
  subject to: compliant(a, policies)
```

### State Machine

```
       ┌─────────┐
       │  IDLE   │
       └────┬────┘
            │ task_received
            ▼
       ┌─────────┐
       │ ANALYZE │◄────────────┐
       └────┬────┘             │
            │ plan_ready       │ replanning
            ▼                  │
       ┌─────────┐             │
       │ EXECUTE │─────────────┘
       └────┬────┘   contradiction
            │ complete
            ▼
       ┌─────────┐
       │ JOURNAL │
       └────┬────┘
            │ logged
            ▼
       ┌─────────┐
       │  IDLE   │
       └─────────┘
```

---

## 3️⃣ How It Maps to Code

### Type Definitions (TypeScript-style)

```typescript
type TriState = -1 | 0 | 1;

interface Belief {
  proposition: string;
  value: TriState;
  confidence: number;  // 0-1
  source: AgentIdentity;
  timestamp: Date;
}

interface Capability {
  id: string;
  strength: number;  // σ ∈ [0, 1]
  requires: string[];
  produces: string[];
}

interface AgentState {
  identity: AgentIdentity;
  beliefs: Map<string, Belief>;
  capabilities: Map<string, Capability>;
  currentGoal: Attractor | null;
  sigCoordinates: SIGCoordinate;
}

interface AgentBehaviorEngine {
  perceive(input: Observation): void;
  reason(goal: Attractor): Decision;
  act(decision: Decision): ActionResult;
  reflect(result: ActionResult): void;
}
```

### Key Operations

| Operation | Description | Effect |
|-----------|-------------|--------|
| `perceive` | Ingest new information | Updates beliefs |
| `reason` | Deliberate on goal | Produces decision |
| `act` | Execute chosen action | Produces result |
| `reflect` | Learn from outcome | Modifies capabilities/beliefs |

---

## 🔗 Related Concepts

- [Trinary Logic](/papers/agent-architecture/trinary-logic.md) – Detailed aggregation rules
- [Contradiction Handling](/papers/agent-architecture/contradiction-handling.md) – Managing disagreement
- [Agent Identity](agent-identity.md) – Who the agent is
- [SIG Overview](/sig/sig-overview.md) – Spatial embedding of capabilities

---

## ❓ Open Questions

1. How do we handle belief revision when new evidence contradicts high-confidence beliefs?
2. What's the optimal threshold for trinary aggregation in multi-agent settings?
3. How do capability strengths evolve over time (learning curves)?

---

## 🔐 COMPLIANCE HOOK

**Affects:** Decision audit trails, explainability requirements

Production systems implementing agent behavior MUST:
- Log all decisions with rationale for audit
- Implement policy constraints as hard barriers
- Provide explainability hooks for regulatory review

Policy details → `blackroad-os-operator` / governance documentation
