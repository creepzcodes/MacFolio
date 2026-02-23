import { Dock, Navbar, Welcome } from "#components"
import { Finder, Resume, Safari, Terminal } from "#windows"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)

const App = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
        </div>
    )
}
export default App
