
function init() {
    p1_join()
    p2_join()
}

// On player one join
function p1_join() {
    const btn = document.getElementById('player_one_save')
    const player_name = document.getElementById('player_one_name')

    btn.addEventListener('click', () => {
        const p1_name = player_name.value

        // If name is empty
        if (p1_name==='') {
            player_name.style.border = '2px solid red'
        }
        else {
            player_name.style.border = ''

            // Save player one name
            set_player_data(1, 'name', p1_name)

            // Disable input
            player_name.setAttribute('disabled', 'disabled')

            // Disable save button
            btn.setAttribute('disabled', 'disabled')

            // Change save button text
            btn.innerText = `${p1_name} has joined the game!`

            // Change save button background
            btn.style.background = 'green'
        }

        // Check if players can start the game
        can_start_game()
    })
}

// On player two join
function p2_join() {
    const btn = document.getElementById('player_two_save')
    const player_name = document.getElementById('player_two_name')

    btn.addEventListener('click', () => {
        const p2_name = player_name.value
        // If name is empty
        if (p2_name==='') {
            player_name.style.border = '2px solid red'
        }
        else {
            player_name.style.border = ''

            // Save player one name
            set_player_data(2, 'name', p2_name)

            // Disable input
            player_name.setAttribute('disabled', 'disabled')

            // Disable save button
            btn.setAttribute('disabled', 'disabled')

            // Change save button text
            btn.innerText = `${p2_name} has joined the game!`

            // Change save button background
            btn.style.background = 'green'
        }

        // Check if players can start the game
        can_start_game()
    })
}

// Check if players can start the game
function can_start_game() {
    const btn = document.getElementById('start_game')

    // Check if player one has joined
    let p1_joined = false
    if (get_player_data(1)['name'] !== '') {
        p1_joined = true
    }

    // Check if player two has joined
    let p2_joined = false
    if (get_player_data(2)['name'] !== '') {
        p2_joined = true
    }

    if (p1_joined && p2_joined) {
        // Enable join button
        btn.removeAttribute('disabled')

        start_game()
    }
}

// When click start game
function start_game() {
    const btn = document.getElementById('start_game')
    btn.addEventListener('click', () => {

        // Hide welcome section
        const welcome_section = document.getElementById('welcome_section')
        welcome_section.style.display = 'none'

        // Show game section
        const game_section = document.getElementById('game_section')
        game_section.style.display = 'block'

        // Mark game as started
        game_started = true
        actually_start_game()
    })
}

init()


document.getElementById('auto').addEventListener('click', () => {
    document.getElementById('player_one_name').value = 'Player 1'
    document.getElementById('player_two_name').value = 'Player 2'
    document.getElementById('player_one_save').click()
    document.getElementById('player_two_save').click()
})
