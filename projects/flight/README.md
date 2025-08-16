# Flight Booking SQL Project

This project simulates a real-world SQL scenario using a fictional company called **SkyHub Travel**, a fast-growing online flight booking platform.

It was completed as part of the *Real-World SQL Portfolio Builder*, and showcases SQL skills in answering business questions using real-life data structures.

## Project Summary

**Goal**: Help SkyHub Travel understand customer behavior, booking patterns, revenue trends, and operational performance by writing advanced SQL queries.

**Database**: 3 main tables loaded with a few hundred rows of sample data.

## Dataset Overview

| **Table**   | **Description**                                     |
|-------------|-----------------------------------------------------|
| customers | User profiles, signup dates, and country            |
| flights   | Flight data (route, departure, airline)         |
| bookings  | Booking history including price, status, customer   |


## Quick start: Create the database and load CSVs
- Create a dedicated PostgreSQL database for this project (don’t use the default `postgres` DB).
- Create two schemas in that DB: `staging` (for raw CSV loads) and `skyhub` (for clean, constrained tables).
- Import the three CSV files into `staging` tables that match the file columns exactly.
- Create final tables in `skyhub` with primary keys, foreign keys, and helpful indexes.
- Transform and insert data from `staging` into `skyhub` (coerce types, trim text, normalize status values).
- Run sanity checks: table counts, orphan FK checks, status distribution, and booking_date ranges.
- Commit each step (schemas, staging tables, loads, final tables, transforms, checks) as separate Git commits for clear incremental progress.

(continue expanding on this as part of your project)