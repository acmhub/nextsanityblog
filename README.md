# NextSanityBlog

A blog created using NextJS 13, Sanity v3 CMS, TypeScript and TailwindCSS.

## Demo

![homepage](https://i.imgur.com/LHQ1Bfp.png)
![article pge](https://i.imgur.com/1SQIBT9.png)

## Features

-   NextJS 13 with appDir experimntal features and route groups
-   TypeScript
-   Sanity v3 CMS with embedded studio and preview functionality
-   RichText Component
-   Static Site Generated Homepage and Blog Posts
-   Fully responsive
-

## How to run locally

1. Clone the project

```bash
  git clone https://github.com/acmhub/nextsanityblog
```

2. Execute `npm install` or `yarn` to install all the packages.
3. Head over to [sanity.io](https://sanity.io) and create an account.
    - From your [sanity dashboard](https://sanity.io/manage) create a new project.
    - Add `http://localhost:3000` as a CORS origin.
    - Copy the `PROJECT ID`
4. In your project directory, create a `.env.local` file with the following structure:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2022-11-15
```

5. Paste in your previously copied project id.
6. Run `npm run dev` or `yarn dev`.
7. Go to [http://localhost:3000/studio](http://localhost:3000/studio) and start adding blog posts, authors and categories.
