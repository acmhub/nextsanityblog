# Blog made using Next.js 13, Sanity v3, TailwindCSS, TypeScript

## How to use locally

1. Execute `npm install` or `yarn` to install all the packages.
2. Head over to [sanity.io](https://sanity.io) and create an account.
    - From your [sanity dashboard](https://sanity.io/manage) create a new project.
    - Add `http://localhost:3000` as a CORS origin.
    - Copy the `PROJECT ID`
3. In your project directory, create a `.env.local` file with the following structure:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2022-11-15
```

4. Paste in your previously copied project id.
