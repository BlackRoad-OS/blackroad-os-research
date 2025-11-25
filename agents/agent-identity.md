# 🔐 Agent Identity

> **Version:** 0.1 — 2025-02-08  
> **Status:** draft  
> **Tags:** agents, ps-sha-infinity, identity

---

## 1️⃣ What Is Agent Identity?

Agent identity is the **persistent, cryptographically verifiable binding** that anchors an agent across:
- Time (state transitions, version upgrades)
- Space (migrations, deployments, federated meshes)
- Trust boundaries (delegations, sub-agent spawning)

Unlike mutable state (beliefs, capabilities, outputs), identity is **invariant** – it answers "who" while other systems handle "what" and "how."

---

## 2️⃣ Formalism

### Core Components

```
AgentIdentity := {
  rootSeed:      bytes[32]           -- cryptographic seed
  derivationPath: string              -- hierarchical path (e.g., "m/0/1/42")
  anchor:        PS-SHA∞.Hash         -- first hash in worldline chain
  publicKey:     bytes[33]            -- derived verification key
  lineage:       AgentIdentity[]      -- parent chain (if spawned/delegated)
}
```

### PS-SHA∞ Anchoring

Each agent's identity is anchored via PS-SHA∞:

```
anchor₀ = SHA256(rootSeed || derivationPath || timestamp₀)
anchorₙ = SHA256(anchorₙ₋₁ || eventₙ || timestampₙ)
```

This creates an **infinite cascade** where:
- Partial prefixes still verify lineage
- Forks create child anchors without losing ancestry
- Every action is cryptographically bound to identity

### SIG Coordinates

Identity maps to SIG space via:

```
(r, θ, τ) = SIG.project(anchor, factor_tree)
```

Where:
- `r` = maturity/energy (derived from chain length)
- `θ` = semantic angle (derived from capability profile)
- `τ` = revolution count (epoch marker)

---

## 3️⃣ How It Maps to Code

### Type Definitions (TypeScript-style)

```typescript
interface AgentIdentity {
  rootSeed: Uint8Array;        // 32 bytes
  derivationPath: string;
  anchor: PSShAHash;
  publicKey: Uint8Array;       // 33 bytes (compressed)
  lineage: AgentIdentity[];
}

interface AgentIdentityService {
  create(seed: Uint8Array): AgentIdentity;
  derive(parent: AgentIdentity, index: number): AgentIdentity;
  verify(identity: AgentIdentity, signature: Uint8Array, message: Uint8Array): boolean;
  getWorldline(identity: AgentIdentity): WorldlineEntry[];
}
```

### Key Operations

| Operation | Description | PS-SHA∞ Effect |
|-----------|-------------|----------------|
| `create` | Mint new root identity | Creates anchor₀ |
| `derive` | Spawn child agent | Creates fork with lineage link |
| `verify` | Check signature | Validates against public key |
| `attest` | Record action | Extends worldline chain |

---

## 🔗 Related Concepts

- [PS-SHA∞ Definition](/ps-sha-infinity/definition.md) – Full hashing specification
- [Agent Behavior](agent-behavior.md) – What agents do (vs. who they are)
- [Lucidia Architecture](/lucidia/architecture.md) – Generation-0 kernel

---

## ❓ Open Questions

1. How do we handle identity recovery after catastrophic key loss?
2. What's the optimal rotation schedule for delegated keys?
3. How do identity anchors interact with cross-mesh federation?

---

## 🔐 COMPLIANCE HOOK

**Affects:** Identity verification, audit trails, regulatory reporting

Production systems implementing agent identity MUST:
- Store key material in HSM or equivalent secure enclave
- Log all derivation events for audit
- Implement key rotation per org security policy

Policy details → `blackroad-os-infra` / compliance documentation
