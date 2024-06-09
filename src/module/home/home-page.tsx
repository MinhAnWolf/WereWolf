import { useReducer } from 'react';
import Chat from '../chat/Chat';
import './home-page.css'
import tabReducer from '../../reducer/TabReducer';

const Home = () => {
    const [state, dispatch] = useReducer(tabReducer, {type: 0, payload: <Home />});

    return (
        <div id='home'>
            <div className='box1'>
                <div className='slide-event'>
                    <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7oPaAG2feHBJv6JkSRdnix/821a51dd8140927e7f578adc3a5e7e10/WWW_Page_Meta_Image.jpg" alt="" />
                </div>
                <div className='play'>
                    <div className='rank'>
                        <div className="card">
                            <img src="https://cdn.britannica.com/04/84704-050-7E762815/Basil-Rathbone-movies-Arthur-Conan-Doyle-one.jpg" alt="Avatar" />
                            <div className="container">
                                <button onClick={() => dispatch({type: 2})}>Play</button>
                            </div>
                        </div>
                    </div>
                    <div className='normal'>
                        <div className="card">
                            <img src="https://i.ebayimg.com/images/g/It0AAOSwBttkLWja/s-l1600.jpg" alt="Avatar" />
                            <div className="container">
                                <button>Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box2'>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Home;