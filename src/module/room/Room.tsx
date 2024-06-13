import './Room.css'

function Room() {
    return (
        <table id='room-container'>
            <thead id='room-header'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Num of Player</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id='room-list'>
                <tr>
                    <td>#114141</td>
                    <td>Trần của ak</td>
                    <td>Werewolf</td>
                    <td>5/10</td>
                    <td>Playing</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Room;