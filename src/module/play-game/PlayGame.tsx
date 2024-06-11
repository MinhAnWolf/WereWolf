import { useEffect, useState } from 'react';
import { User } from '../../core/model/User';
import './PlayGame.css'

function PlayGame() {
    const [timePlay, setTimePlay] = useState(30);
    useEffect(() => {
        console.log("run use effect");
        
        const countDown = setInterval(() => {     
            setTimePlay(prevTime => {
                console.log(prevTime);
                if (prevTime <= 0) {
                    clearInterval(countDown);
                    return 0;
                }

                return prevTime - 1;
            })
        }, 1000)

        return () => clearInterval(countDown);
    }, [])

    return (
        <div className='play-game-container'>
            <div className="player">

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x74do000djz08a0bb6fg1_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://xuyenthan.wordpress.com/wp-content/uploads/2018/12/yr2ilgj-imgur.png" alt="" />
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png" alt="" />
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png" alt="" />
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png" alt="" />
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png" alt="" />
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png" alt="" />
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <img src="https://storage.prompt-hunt.workers.dev/clf2x6g1i0009l308pws355fq_1" alt="" />
                    </div>

                    <div className="theback">
                        <img src="https://hstatic.net/363/1000016363/10/2016/7-1/dx-villager.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="manager-play">
                <div className="vertical-line"></div>
                <div className='container-time'>
                    <div className='time'>
                        <h3>{timePlay}</h3>
                    </div>

                    <div className='sun-night'>
                        <img src="https://hoangphucphoto.com/wp-content/uploads/2023/05/anh-dct-1.jpg" alt="" />
                    </div>
                </div>
                <hr />
                <div className='box-chat'>
                    <div className='game-management-item-chat'>
                        <p>Màn đêm buông xún</p>
                    </div>

                    <div className='chat-player'>
                        
                    </div>
                </div>
                <div className='action-chat'>
                    <input type="text" />
                    <button>Send</button>
                </div>
            </div>

        </div>
    )
}

export default PlayGame;