const exceptedRouteNames = ["login", "register"]

const authMiddleware = (to, from, next) => {
    const token = window.localStorage.getItem('JwtToken');


    if (token) {
        if (exceptedRouteNames.includes(to.name)) {
            console.log('token and login, register')
            next({name: 'home'})
        }

        console.log('token, home')
        next()

    } else {
        if (!exceptedRouteNames.includes(to.name)) {
            console.log('no token, home')
            next({name: 'login'})
        }
        console.log('no token, login')
        next()
    }

}


export default authMiddleware;