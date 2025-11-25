# 🌀 Spiral Dynamics

> **Version:** 0.1 — 2025-02-08  
> **Status:** idea  
> **Tags:** amundson, sig, dynamics

---

## 1️⃣ Overview

Spiral Dynamics describes how agents **move through SIG space** over time. It provides equations of motion for the spiral coordinates `(r, θ, τ)` as agents learn, act, and evolve.

---

## 2️⃣ Equations of Motion

### Radial Evolution (Maturity)

```
dr/dt = α·(σ_max - r) + β·learning_rate(K)
```

Where:
- `α` = decay toward equilibrium
- `σ_max` = maximum capability potential
- `β` = learning coefficient
- `K` = current knowledge state

**Interpretation:** Radial position grows as the agent learns and matures, but is bounded by maximum potential and tends toward equilibrium.

### Angular Evolution (Semantic Drift)

```
dθ/dt = ω₀ + γ·∇_θ U(A)
```

Where:
- `ω₀` = base rotation rate (cognitive cadence)
- `γ` = sensitivity to attractor field
- `∇_θ U(A)` = angular gradient of attractor potential

**Interpretation:** Agents naturally rotate through semantic space at a base rate, but are pulled toward attractors (goals) that bend their trajectory.

### Revolution Counter (Epoch Progression)

```
τ(t) = floor(θ(t) / 2π)
```

**Interpretation:** Each full revolution marks an "epoch" in the agent's development. The revolution counter `τ` tracks long-term history.

---

## 3️⃣ Attractor Fields

### Single Attractor

```
U(r, θ) = -k / ||(r, θ) - (r_A, θ_A)||
```

Creates a "gravity well" that pulls agents toward attractor position `(r_A, θ_A)`.

### Multiple Attractors

```
U(r, θ) = Σᵢ -kᵢ / ||(r, θ) - (r_i, θ_i)||
```

Multiple goals create a potential landscape with ridges, valleys, and saddle points.

### Attractor Interference

When attractors overlap:

```
U_interference = U₁ + U₂ + 2·√(U₁·U₂)·cos(Δφ)
```

Where `Δφ` = phase difference between attractors.

- **Constructive:** Aligned goals reinforce each other
- **Destructive:** Conflicting goals create null regions (contradiction basins)

---

## 4️⃣ Phase Portrait

```
          θ
          │     ╭────────────────╮
          │    ╱                  ╲
          │   ╱   Attractor A₁    ╲
          │  │        ◉            │
          │   ╲                   ╱
          │    ╲                 ╱
          │     ╲               ╱
          │      ╲    ╳        ╱   ← Saddle (contradiction)
          │       ╲   │       ╱
          │        ╲  │      ╱
          │         ╲ │     ╱
          │          ╲│    ╱
          │           │   ╱
          │    ◉      │  ╱
          │  A₂       │ ╱
          │           │╱
          └───────────┼───────────► r
                      │
```

---

## 5️⃣ How It Maps to Code

```typescript
interface SpiralDynamics {
  // State
  r: number;
  theta: number;
  tau: number;
  
  // Parameters
  alpha: number;      // decay rate
  beta: number;       // learning coefficient
  omega0: number;     // base rotation
  gamma: number;      // attractor sensitivity
  
  // Methods
  step(dt: number, attractors: Attractor[]): void;
  getPosition(): SIGCoordinate;
  getPotential(attractors: Attractor[]): number;
  getGradient(attractors: Attractor[]): Vector2;
}

function step(state: SpiralDynamics, dt: number, attractors: Attractor[]): void {
  const gradient = getGradient(state, attractors);
  
  state.r += (state.alpha * (sigmaMax - state.r) + state.beta * learningRate) * dt;
  state.theta += (state.omega0 + state.gamma * gradient.theta) * dt;
  state.tau = Math.floor(state.theta / (2 * Math.PI));
}
```

---

## 🔗 Related Concepts

- [SIG Overview](/sig/sig-overview.md) – Coordinate system definition
- [Foundations](foundations.md) – Core axioms
- [Agent Behavior](/agents/agent-behavior.md) – Cognitive dynamics

---

## ❓ Open Questions

1. What determines the base rotation rate `ω₀` for different agent types?
2. How do we calibrate `α`, `β`, `γ` from empirical observations?
3. Can we derive attractor positions from high-level goal specifications?
