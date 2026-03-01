---
id: 02-master-data-and-product-flow
title: 02. Master Data and Product Flow
---

## Concept Explanation

Master data is the foundational business data used across systems, such as item codes, supplier IDs, pack sizes, store IDs, and lead times. If master data is wrong, downstream planning, ordering, and replenishment decisions fail.

## Business Use Case

A product is configured with incorrect pack size in one system. Planning expects 12 units per case, but warehouse and store systems treat it as 24. This mismatch causes receiving errors and shelf replenishment delays.

## Users Involved

- Master Data Analyst: creates and maintains item and supplier records
- Merchandising Team: defines assortment details
- IT Integration Team: syncs data across systems
- QA Engineer: validates data flow and mapping rules

## Tools and Technologies Used

- Master Data Management (MDM) platforms
- ERP item and vendor master modules
- API or batch integration tools (ETL)
- Data quality dashboards and exception reports
