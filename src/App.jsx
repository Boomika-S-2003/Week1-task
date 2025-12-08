import Movies from "./Movies.jsx"
import {Hero} from "./Movies.jsx"
import {Heroine} from './Movies.jsx'
import {Villain} from './Movies.jsx'

const App=()=>{

    return(
        <>
        <div>
            Movie Name : Ratchasan(Release Year: 2018)
        </div>

        <hr/>

        <Movies/>

        <br />

        <Hero/>
        <br />

        <Heroine/>
        <br />
        <Villain/>

        </>
    )
}

export default App

