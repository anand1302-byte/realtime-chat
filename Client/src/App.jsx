import Message from "./components/Messager"
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {

  const  clientId = '266676099421-gl1mi84dk1re9q6ilhk58tur48lb9h6q.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Message/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}
export default App
