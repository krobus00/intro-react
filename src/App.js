import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Second from './pages/Second'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/second' component={Second} />
        <Route path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
