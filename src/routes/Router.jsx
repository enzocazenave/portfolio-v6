import { Route, Switch } from 'wouter'
import { HomePage } from '../pages'
import { Sidebar } from '../components'

export default function Router () {
  return (
    <div className="antialiased mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 grid-cols-1">
        <Sidebar />
        <div></div>

        <div className="flex-1 py-24">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </div>
  )
}