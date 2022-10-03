import { Routes } from "@solidjs/router"
import { Suspense } from "solid-js"
import { Body, FileRoutes, Head, Html as HTML, Meta, Scripts, Title } from "solid-start"
import { ErrorBoundary } from "solid-start/error-boundary"
import { StyleRegistry } from "solid-styled"

export default function Root() {
  return (
    <HTML lang="en">
      <Head>
        <Title>SolidStart - With MDX</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <StyleRegistry>
          <ErrorBoundary>
            <Suspense>
              <main>
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
            </Suspense>
          </ErrorBoundary>
        </StyleRegistry>
        <Scripts />
      </Body>
    </HTML>
  )
}
