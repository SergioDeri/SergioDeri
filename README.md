# Sergio Deri

Backend & Full Stack Developer from Montevideo, Uruguay, with 5+ years building software and solving complex VoIP and contact center problems.

**Portfolio:** [sergioderi.dev](https://sergioderi.dev) · **LinkedIn:** [sergio-deri](https://www.linkedin.com/in/sergio-deri)

## Projects

- [**tostad.app**](https://tostad.app)
- [**ElegilosVos**](https://elegilosvos.sergioderi.dev/): football fans pick their team's starting eleven before each match and see how the crowd's choice compares with the coach's.

## About this repository

This is the source of my portfolio, a single-page site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). All the content lives in `src/data/`.

### Run it locally

```sh
npm install
cp .env.example .env
npm run dev
```

The contact form uses [Web3Forms](https://web3forms.com). Set `PUBLIC_WEB3FORMS_KEY` in `.env` to receive messages.

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Build the production site     |
| `npm run check` | Run the Astro type checker    |
| `npm test`      | Run the tests                 |
