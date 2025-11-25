# Concepts

> Canonical definitions for BlackRoad OS research terminology 📘

---

## 🔐 PS-SHA∞
A persistent, hash-chained identity and journaling construct that records every agent action or state transition. It anchors authenticity and replayability across deployments and orchestrations.

## 🌀 Spiral Information Geometry
A geometric metaphor for mapping identities and knowledge onto a spiral manifold. It highlights path dependency, growth, and recurrence by positioning capabilities and factors along angular and radial dimensions.

## 🤖 Agent
A bounded, task-executing entity with defined capabilities, beliefs, and identity bindings. Agents emit journal entries and can be orchestrated individually or in pods.

## 🧬 Amundson Equations
A unified mathematical framework that bridges information geometry (SIG), identity mechanics (PS-SHA∞), and cognitive dynamics (agent behavior) using physics-inspired formalisms.

## 💪 Capability
A discrete skill or function an agent can execute. Capabilities can be composed, weighted, and mapped into SIG factor trees for planning and auditing.

## 📋 Task
A unit of work assigned to an agent or pod. Tasks reference capabilities, expected outcomes, and journal entries that record execution details.

## 📡 Event
A notable occurrence captured in the system, often triggering journal entries or orchestration decisions. Contradictions and policy checks emit events for review.

## 📜 Journal Entry
A PS-SHA∞-aligned record capturing `actorId`, `actionType`, `timestamp`, `payload`, and hash links to prior entries. It forms the verifiable worldline of an agent or system.

## ⚖️ Trinary Logic
A reasoning framework with states {+1, 0, -1} representing true, unknown, and negated values. It keeps uncertainty and conflict explicit for downstream reconciliation.

## 🎼 Orchestrator
A coordination layer that routes tasks, aggregates beliefs, resolves contradictions, and enforces journaling policies across agents.

## 👥 Agent Pod
A group of agents operating as a unit for resiliency or task coverage. Pods share SIG context and may share portions of a PS-SHA∞ worldline while maintaining individual accountability.

## 💰 Finance Layer
A cluster of finance-specialized agents (close, treasury, FP&A, compliance, etc.) governed by a finance orchestrator and audited through PS-SHA∞.

## ⚠️ Contradiction Quarantine
A pattern where conflicting outputs are isolated, journaled, and held for mediation before actions are taken. This prevents silent failure and preserves evidence for audit.

## 🎯 Attractor
A target equilibrium state in SIG space representing a goal, constraint, or operating principle. Agents evolve toward attractors over time.

## 🧬 Factor Tree
A hierarchical structure mapping capabilities and competencies into prime-indexed slots on the SIG spiral. Enables compositional reasoning about agent abilities.

## 🧠 Worldline
The complete history of an agent's identity and actions as recorded in the PS-SHA∞ hash chain. Enables causal replay and audit.

## 🔐 COMPLIANCE HOOK
A documentation pattern marking concepts that affect regulated domains (identity, ledger, trading logic). Indicates where production policy constraints must be enforced.

## 🔑 Identity Conservation
The principle that agent identity is invariant across all transformations. Identity may be derived or delegated but never created from nothing or destroyed.

## 🧠 Lucidia
The Generation-0 Conscious Agent Kernel providing mesh-based routing, QLM-inspired cognition, and contradiction handling for BlackRoad OS agents.
