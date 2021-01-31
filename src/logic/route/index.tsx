import React, { FC, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './config'
import Loading from './loading'
const RouteIndex: FC = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Switch>
                    {
                        routes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                component={route.component}
                            />
                        )
                    }
                </Switch>
            </Suspense>
        </>
    )
}
export default RouteIndex