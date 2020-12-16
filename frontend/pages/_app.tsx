import React from "react"
import { CustomTheme } from "../components/CustomTheme"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../graphql/client"

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <CustomTheme>
        <Component {...pageProps} />
      </CustomTheme>
    </ApolloProvider>
  )
}
export default CustomApp
