# Next.js node-fetch Error in getServerSideProps

This repository demonstrates a common error encountered when using `node-fetch` within the `getServerSideProps` function in a Next.js application.  The error arises because `node-fetch` is not automatically available in the serverless environment used by Next.js.

## Problem

The provided `pages/about.js` uses `node-fetch` to fetch data from an external API.  When this page is accessed, a runtime error occurs because `node-fetch` needs to be explicitly added to the Next.js environment.