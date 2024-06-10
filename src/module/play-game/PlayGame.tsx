import { useState } from 'react';
import { User } from '../../core/model/User';
import './PlayGame.css'

function PlayGame() {
    // const listSlot = new Array<User>();
    // listSlot.push()
    // const [slotPlayer, setSlotPlayer] = useState([
    //    {
    //     id:
    //    } 
    // ])

    return (
        <div className='play-game-container'>
            <div className="player">

                <div className="thecard">

                    <div className="thefront">
                        <h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
                    </div>

                    <div className="theback">
                        <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                    </div>

                </div>

                <div className="thecard">

                    <div className="thefront">
                        <h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
                    </div>

                    <div className="theback">
                        <h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                    </div>

                </div>

            </div>
            <div className="chat">
                <div className="vertical-line"></div>
            </div>

        </div>
    )
}

export default PlayGame;