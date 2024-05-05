import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout'
import Page from './pages/page'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3brZ_2txg8oJhEiKCxuly0xmiCl29_ms",
  authDomain: "portfolio-e42aa.firebaseapp.com",
  projectId: "portfolio-e42aa",
  storageBucket: "portfolio-e42aa.appspot.com",
  messagingSenderId: "237490501820",
  appId: "1:237490501820:web:2ade7d9a57a67721f5b8b9",
  measurementId: "G-18WERZW5QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  
  return <Router>
    <Layout>
      <Page />
    </Layout>
  </Router>
}

export default App
