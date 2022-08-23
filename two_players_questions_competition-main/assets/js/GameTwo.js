
let already_chosen_answer = false
let chosen_answer_id

function start_game_two() {
    // Show game two tutorial
    document.getElementById('Modal_GameTwo_Tutorial').style.display = 'block'

    game_one_over = true

    // Close modal
    const modal = document.getElementById("Modal_EndGameOne");
    modal.style.display = "none";

    // Change player controls

    remove_player_two_from_game()
    show_next_question_btn()

    // Set next question id
    questions_data['current_question_id'] = 20

    load_next_question(questions_data['current_question_id'])

    // Change player controls
    p1_controls = [
        {
            key: 38, // Arrow Up
            target_answer: 1
        },
        {
            key: 40, // Arrow Down
            target_answer: 2
        },
        {
            key: 37, // Arrow Left
            target_answer: 3
        },
        {
            key: 39, // Arrow Right
            target_answer: 4
        },
    ]

    // Change player score
    const score = get_player_data(game_one_winner_player_id)['score']
    set_player_data(1, 'score', score)
    document.getElementById('p1_score').innerText = score

    // Change player name
    document.getElementById('p1_name').innerText = get_player_data(game_one_winner_player_id)['name']

    // Change player controls badge text
    change_player_controls_badge_text()

    accept_answers = false
}

function change_player_controls_badge_text() {
    document.getElementById('p1_control_a1').innerText = '↑'
    document.getElementById('p1_control_a2').innerText = '↓'
    document.getElementById('p1_control_a3').innerText = '←'
    document.getElementById('p1_control_a4').innerText = '→'
}

function remove_player_two_from_game() {
    // Hide player two controls badges
    const els = document.getElementsByClassName("badge2")
    Array.prototype.forEach.call(els, function(el) {
        el.style.display = "none";
    })

    // Set player two out of the game
    document.getElementById('p2_name').innerText = 'Not Playing'
    document.getElementById('p2_score_section').remove()
}


// Show next question button
function show_next_question_btn() {
    document.getElementById('next_question').style.display = 'block'
}

// Mark the chosen answer
function mark_chosen_question(_chosen_answer_id) {
    if (!already_chosen_answer) {
        document.getElementById(`answer_${_chosen_answer_id}_overlay`).setAttribute('checked', 'true')
        document.getElementById(`answer_${_chosen_answer_id}_overlay`).style.border = '5px solid black'
        already_chosen_answer = true
        chosen_answer_id = _chosen_answer_id
    }
}

function unmark_chosen_question(_chosen_answer_id) {
    console.log('here')
    document.getElementById(`answer_${_chosen_answer_id}_overlay`).setAttribute('checked', 'false')
    document.getElementById(`answer_${_chosen_answer_id}_overlay`).style.border = 'none'
    already_chosen_answer = false
    chosen_answer_id = null
}

// Check if player has pressed the correct answer button
function check_if_correct_answer_g2(_player_id) {
    // If no answer has been chosen
    if (chosen_answer_id === null) return

    const question_id = questions_data['current_question_id']

    // Get question correct answer
    const correct_question_answer = get_question_data(question_id)['correct_answer']

    // Check if player chose the correct answer
    if (correct_question_answer === chosen_answer_id) {
        unmark_chosen_question(chosen_answer_id)

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
        alert('Wrong Answer!')
        unmark_chosen_question(chosen_answer_id)

        // Mark correct answer with green and wrong answers with red
        mark_correct_and_wrong_answers(question_id)

        // Show timer for the next question
        show_timer_for_next_question(question_id)
    }
}


function show_end_game_two_modal() {
    document.getElementById('Modal_EndGameTwo').style.display = 'block'
    document.getElementById('g2_player_score').innerText = get_player_data(1)['score']

}

function close_g2_tutorial() {
    document.getElementById('Modal_GameTwo_Tutorial').style.display = 'none'
    accept_answers = true
}
