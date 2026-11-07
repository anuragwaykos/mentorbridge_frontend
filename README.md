# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## What the app does now (dummy data, no backend yet)

- Home: header, skill menu, top mentors, banner
- All Mentors: filter by skill (click a skill again to remove the filter)
- Mentor page (/app/:id): 7 days of slots, "Book a session", related mentors
- Create Account / Login (dummy: any email and a password of 6+ letters works)
- My Sessions: shows booked sessions, you can cancel them
- My Profile: view and edit your details
- About and Contact pages
- Data is saved in the browser (localStorage), so refreshing does not log you out
