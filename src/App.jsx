import { ApolloProvider } from "@apollo/client"
import { client } from './lib/apollo'
import Router from "./Router"
import { BrowserRouter } from "react-router-dom"
import ThemeContextProvider from "./hooks/useTheme"
function App() {

  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeContextProvider>
    </ApolloProvider>
  )

}

export default App
