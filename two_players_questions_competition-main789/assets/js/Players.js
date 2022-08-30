
const players_data = [
    {
        id: 1,
        name: '',
        score: 0
    },
    {
        id: 2,
        name: '',
        score: 0
    }
]

let p1_controls = [
    {
        key: 65, // A
        target_answer: 1
    },
    {
        key: 66, // B
        target_answer: 2
    },
    {
        key: 67, // C
        target_answer: 3
    },
    {
        key: 68, // D
        target_answer: 4
    },
]

const p2_controls = [
    {
        key: 69, // E
        target_answer: 1
    },
    {
        key: 70, // F
        target_answer: 2
    },
    {
        key: 71, // G
        target_answer: 3
    },
    {
        key: 72, // H
        target_answer: 4
    },
]

// Get player data by his id
function get_player_data(_player_id) {
    return players_data.find(player_data => {
        return player_data['id'] === _player_id
    })
}

// Set player data by his id (key: value)
function set_player_data(_player_id, _key, _value) {
    players_data.map(player_data => {
        if (player_data['id'] === _player_id) {
            player_data[_key] = _value
        }
    })
}



function increase_player_score(_player_id) {
    players_data.map(player_data => {
        if (player_data['id'] === _player_id) {
            player_data['score'] += 1
        }
    })
}
