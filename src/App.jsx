import { ApolloProvider } from "@apollo/client"
import Home from "./pages/Home"
import { client } from './lib/apollo'
import Router from "./Router"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )

}

export default App
