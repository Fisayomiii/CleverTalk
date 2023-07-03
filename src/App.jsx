import { Toaster } from 'react-hot-toast';
import Mapp from './page/Mapp';

function App() {

    return (
        <>

            <Mapp />
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default App