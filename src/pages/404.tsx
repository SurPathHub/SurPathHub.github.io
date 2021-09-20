import * as React from "react"

import Seo from "../components/Seo"
import DefaultLayout from "./layouts/DefaultLayout";

const NotFoundPage = () => (
  <DefaultLayout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
