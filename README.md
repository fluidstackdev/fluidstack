# FluidStack (2019 edition)
The constantly evolving modern web stack.

## Description

FluidStack is an production-ready e-commerce app designed as a reference implementation of best practices to help developers build better products. It serves as a central place to find examples of common patterns needed across web development, built by the community for the community.

## Motivation

Building web apps can be challenging considering the amount of technologies that are available. While there are tons of services out there to help you build your product, each of them create examples based on their business activity, making it often hard to connect the dots.

That's why at Prisma, Stripe, ZEIT and Algolia, we're dedicated to unify our efforts to provide a reference implementation to showcase many best practices of each layers in your app in one single place.

## Why e-commerce ?

Most applications rely on a common set of challenges that can be hard to get right. We think e-commerce is one of many domains that gather the most of these challenges while also being friendly to everyone.

## Stack

- 💨 Data-layer for database access, CI/CD migrations and data visualisation with Prisma
- ⭐ One-click serverless deploy with Now (ZEIT)
- 🤗 SEO-friendly & server-side rendered with NextJS (ZEIT)
- 💸 Ready-to-sell Stripe integration
- 🔍 Blazing-fast search capabilities with Algolia

## Features

- Fully customisable products
- Multi-authentication support
- Internationalisation
- Role permissions support
- Text-search capabilities
- Multi-currencies
- Multi-criteria filtering
- Handcrafted backoffice to manage your shop

## Design goals

### End-to-end type-safety

End-to-end type-safe means that your entire application, from the database accesses to your frontend is type-safe.

It incredibly enhance the developer experience by providing auto-completion everywhere across your app, compile-time errors, higher confidence in code, better refactoring capabilities, and faster iterations.

- Type-safe database access (Prisma)
- Type-safe API layer (Nexus)
- Type-safe front-end (GraphQL code generation)
