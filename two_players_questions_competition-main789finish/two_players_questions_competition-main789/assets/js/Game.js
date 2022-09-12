
let game_started = false
let game_one_over = false
let accept_answers = false
let game_one_winner_player_id
const show_badges = true /////////// f/g/b. . . . on/of

function actually_start_game() {
    shuffleArray("1");
    set_player_text_names()
    const current_question_id = questions_data['current_question_id']
    load_next_question(current_question_id)

    // Show game one tutorial
    document.getElementById('Modal_GameOne_Tutorial').style.display = 'block'
    accept_answers = false
}

function end_game() {

    // Find which player has the bigger score
    const p1 = get_player_data(1)
    const p2 = get_player_data(2)

    const modal = document.getElementById("Modal_EndGameOne");
    modal.style.display = "block";

    if (p1['score'] > p2['score']) {
        document.getElementById('end_game_one_text').innerText = `The winner of round one is: ${p1['name']}`
        game_one_winner_player_id = 1
    }
    else if (p1['score'] < p2['score']) {
        document.getElementById('end_game_one_text').innerText = `The winner of round one is: ${p2['name']}`
        game_one_winner_player_id = 2
    }
    else {
        document.getElementById('end_game_one_text').innerHTML = `There is no winner, Its a draw!<br>Please restart the game!`
        document.getElementById('game_one_restart').style.display = 'block'
        document.getElementById('go_to_round_two').remove()
        document.getElementById('end_game_one_close_btn').remove()
    }

}

// Set the question text
function set_question_text(_question_data) {
    const question_text = document.getElementById('question_text')
    question_text.innerHTML = _question_data['text']
}

// Set the four question answers
function set_question_answers(_question_data) {
    const q1_text = document.getElementById('q1_text')
    const q2_text = document.getElementById('q2_text')
    const q3_text = document.getElementById('q3_text')
    const q4_text = document.getElementById('q4_text')

    q1_text.innerHTML = _question_data['answers'][0]
    q2_text.innerHTML = _question_data['answers'][1]
    q3_text.innerHTML = _question_data['answers'][2]
    q4_text.innerHTML = _question_data['answers'][3]
}

// Set player text names
function set_player_text_names() {
    document.getElementById('p1_name').innerText = get_player_data(1)['name']
    document.getElementById('p2_name').innerText = get_player_data(2)['name']
}

// Check which player has pressed the key
function check_which_player_pressed(_keyCode) {
    // Check player one keys
    const p1_pressed = p1_controls.find(control => {
        return control['key'] === _keyCode
    })

    if (p1_pressed !== undefined) {
        return {
            player: 1,
            target_answer: p1_pressed['target_answer']
        }
    }

    const p2_pressed = p2_controls.find(control => {
        return control['key'] === _keyCode
    })

    if (p2_pressed !== undefined) {
        return {
            player: 2,
            target_answer: p2_pressed['target_answer']
        }
    }
}

// Check if player has pressed the correct answer button
function check_if_correct_answer(_player_id, _chosen_answer_id) {
    const question_id = questions_data['current_question_id']

    // Get question correct answer
    const correct_question_answer = get_question_data(question_id)['correct_answer']
    // const correct_question_answer = questions[question_id]['correct_answer']

    // Check if player chose the correct answer
    if (correct_question_answer === _chosen_answer_id) {
        accept_answers = false
        increase_player_score(_player_id)
        update_player_score_text(_player_id)

        // Mark correct answer with green and wrong answers with red
        mark_correct_and_wrong_answers(question_id)

        // Show timer for the next question
        show_timer_for_next_question(question_id)

        // // Check if there are more questions
        // if (question_id === questions.length) {
        //     // Reached the end of questions > Move to part two of the game
        //     // end_game()
        //     game_over = true
        //     console.log('done')
        // }
        // else {
        //     // Mark correct answer with green and wrong answers with red
        //     mark_correct_and_wrong_answers(question_id)
        //
        //     // Show timer for the next question
        //     show_timer_for_next_question(question_id)
        // }
    }
    else {
        console.log('bad')
        accept_answers = false

        // Mark correct answer with green and wrong answers with red
        mark_correct_and_wrong_answers(question_id)

        // Show timer for the next question
        show_timer_for_next_question(question_id)
    }
}

// On keyword key down event
document.addEventListener("keydown", function(event) {
    // event.preventDefault()

    if (!accept_answers) return

    // Get pressed key
    const pressed_key = event.keyCode

    // Check which player has pressed
    const player_pressed = check_which_player_pressed(pressed_key)

    // If key has not been pressed by a player controls
    if (!player_pressed && !game_one_over) return

    if (!game_one_over && pressed_key!==75) {
        check_if_correct_answer(player_pressed['player'], player_pressed['target_answer'])
    }
    else {
        // If pressed K
        if (pressed_key === 75) {
            // Check
            check_if_correct_answer_g2(1)
        }
        else {
            // Check if answer has been checked
            const is_checked = document.getElementById(`answer_${player_pressed['target_answer']}_overlay`).getAttribute('checked')
            if (is_checked === 'false') {
                mark_chosen_question(player_pressed['target_answer'])
            }
            else {
                unmark_chosen_question(player_pressed['target_answer'])
            }
        }
    }

})


// Update player score text
function update_player_score_text(_player_id) {
    if (_player_id === 1) {
        const score = document.getElementById('p1_score')
        const player_score = get_player_data(_player_id)['score']
        score.innerText = player_score
    }
    else if (_player_id === 2) {
        const score = document.getElementById('p2_score')
        const player_score = get_player_data(_player_id)['score']
        score.innerText = player_score
    }
}

// Show UI about the round winner
function show_round_winner(_player_id) {
    const player_name = get_player_data(_player_id)['name']
    // alert(`The winner of this round is: ${player_name}`)

    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById('modal_text').innerText = `The winner of this question is: ${player_name}`
}

function load_next_question(_current_question_id) {
    // Check if reached the end of the questions
    if (_current_question_id === questions.length) {
        end_game()
        console.log('end')
    }
    else {
        if (game_one_over) {

        }
        accept_answers = true
        const data = get_question_data(_current_question_id)

        // Check if there are more questions in game two
        if (data === undefined) {
            // End game two
            show_end_game_two_modal()
        }
        else {
            set_question_text(data)
            set_question_answers(data)

            document.getElementById("header").innerText = `Question #${_current_question_id+1}`
        }
    }
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";

    if (game_over) {
        end_game()
    }
}

// Mark correct answer with green and wrong answers with red
function mark_correct_and_wrong_answers(_question_id) {
    // Mark all answers with red
    document.getElementById('answer_1_overlay').innerText = '✖'
    document.getElementById('answer_2_overlay').innerText = '✖'
    document.getElementById('answer_3_overlay').innerText = '✖'
    document.getElementById('answer_4_overlay').innerText = '✖'

    // Get question correct answer
    const correct_answer_id = get_question_data(_question_id)['correct_answer']

    // Mark correct question with red
    document.getElementById(`answer_${correct_answer_id}_overlay`).innerText = '✔'

}

// Clear answers marking
function clear_answers_marking() {
    document.getElementById('answer_1_overlay').innerText = ''
    document.getElementById('answer_2_overlay').innerText = ''
    document.getElementById('answer_3_overlay').innerText = ''
    document.getElementById('answer_4_overlay').innerText = ''
}


function show_timer_for_next_question(_question_id) {
    document.getElementById('header').innerText = 'Next Question In 3 Seconds...'
    let sec_between_questions = 2
    const downloadTimer = setInterval(function(){
        if(sec_between_questions <= 0){
            clearInterval(downloadTimer);

            // Clear answers marking
            clear_answers_marking()

            // There are still questions > Show next question
            load_next_question(_question_id+1)
            questions_data['current_question_id'] = _question_id+1
        }
        else {
            document.getElementById("header").innerText = `Next Question In ${sec_between_questions} Seconds...`
        }
        sec_between_questions -= 1;
    }, 1000);
}

function restart_game_one() {
    location.reload()
}

function close_g1_tutorial() {
    document.getElementById('Modal_GameOne_Tutorial').style.display = 'none'
    accept_answers = true
}


// Check if to show badges
const badges = document.getElementsByClassName('btn_badge')
Array.prototype.forEach.call(badges, function(el) {
    if (show_badges) {
        el.style.display = "block";
    }
    else {
        el.style.display = "none";
    }
})
