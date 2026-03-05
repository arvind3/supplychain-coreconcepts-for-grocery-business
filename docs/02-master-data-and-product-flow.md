---
id: 02-master-data-and-product-flow
title: 02. Master Data and Product Flow
---

## Master Data Is an Operational Control Surface

In grocery retail, master data is not an IT back-office artifact. It is a live operating control surface that drives ordering, receiving, replenishment, and customer promises. A single wrong attribute can propagate across planning and execution layers within hours.

Critical data domains include:

- Item attributes: SKU hierarchy, pack size, units of measure, shelf life, storage conditions.
- Supplier attributes: lead time, minimum order quantity, order calendar, service constraints.
- Network attributes: store/DC mapping, route calendars, cut-off times.
- Commercial attributes: cost, retail price, promotion flags, substitution rules.

## Product Flow From Source to Shelf

A typical grocery product flow has multiple checkpoints:

1. Item setup in merchandising and master data systems.
1. Supplier enablement through EDI/API and purchase order agreement.
1. Forecast and replenishment consumption of lead time, case pack, and service rules.
1. Inbound receipt and quantity validation at DC or store.
1. Store receiving, backroom placement, and shelf replenishment.
1. POS consumption and demand feedback back into planning.

If data definitions differ by system, each checkpoint can fail in a different way. This creates hidden cost because teams spend time reconciling discrepancies instead of executing flow.

## Data Governance That Works

Strong grocery operators enforce three governance layers:

- Ownership: explicit data steward by domain (item, supplier, location, calendar).
- Validation: rule-based checks before promotion to production (unit conversion, shelf-life thresholds, mandatory attributes).
- Monitoring: exception dashboards with aging, severity, and financial impact.

Effective teams also measure data quality as an operational KPI. Example metrics include first-pass item setup accuracy, critical-field completeness, and mean time to correct defects.

## Grocery Scenario: Pack-Size Mismatch in Beverage Category

A large chain launches a summer beverage promotion. Planning assumes one case equals 12 bottles, but a subset of SKUs was configured as 24 in the warehouse system after a supplier packaging change.

Operational impact:

- Forecast-to-order quantities are underestimated.
- DC receiving rejects part of inbound ASNs due to unit mismatch.
- Store replenishment receives fewer sellable units than expected.
- Promotion weekend shows stockouts despite "on-paper" inventory.

Recovery playbook:

- Freeze affected SKU replenishment auto-rules.
- Correct item master at source and propagate via controlled integration job.
- Reconcile open purchase orders and shipment notices.
- Backfill stores with emergency allocations.
- Run post-mortem and strengthen pack-conversion validation.

## Practical Guidance for Teams

- Version critical attributes (case pack, lead time, shelf life) and track change history.
- Enforce no-touch windows before major promotions.
- Require cross-functional signoff for master-data changes impacting high-velocity SKUs.
- Build synthetic test cases that assert unit conversion consistency across ERP, WMS, and store systems.

Master data quality is often the difference between a smooth promo and a public shelf-out event.

## Visual: Master Data to Shelf Data Flow

```mermaid
flowchart LR
    MDM[Master Data System] --> ERP[ERP]
    ERP --> PLAN[Forecast and Replenishment]
    ERP --> SUPP[Supplier EDI/API]
    SUPP --> WMS[Warehouse Management]
    WMS --> STORE[Store Inventory System]
    STORE --> POS[POS and OMS]
    POS --> PLAN
```

## Transition to Chapter 3

After data foundations, execution quality depends on role clarity. The next chapter defines decision ownership across the grocery supply chain.

