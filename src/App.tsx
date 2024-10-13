import './App.css'
import Shape from "./components/Shape.tsx";
import useAppStore from './store/appStore.tsx';

function App() {
    const currentlySelected = useAppStore((state) => state.shapes.currentlySelected);

    return (
        <div>
            <p>{currentlySelected}</p>
            <Shape name={'apple'} />
            <Shape name={'banana'} />
            <Shape name={'cherry'} />
        </div>
    )
}

export default App
