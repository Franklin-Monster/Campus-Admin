import Main from '@p/Main'
import { withRouter, Redirect } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default withRouter(App)
