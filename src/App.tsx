import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout'
import Page from './pages/page'

function App() {
  return <Router>
    <Layout>
      <Page />
    </Layout>
  </Router>
}

export default App
