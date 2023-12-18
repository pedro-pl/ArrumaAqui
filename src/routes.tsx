import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { ChoiceRole } from './pages/ChoiceRole'
import { SignIn } from './pages/signIn'
import { SignUp } from './pages/signUp'

export function Router(){
    return(
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/escolha-de-funcao/:page' element={<ChoiceRole/>}/>
                <Route path='/login/:role' element={<SignIn/>}/>
                <Route path='/cadastro/:role' element={<SignUp/>}/>
            </Routes>
    )
}