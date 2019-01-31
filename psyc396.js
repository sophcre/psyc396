
var timeline = []; //create timeline

var countdown_images = ["img/countdown/5.png","img/countdown/4.png","img/countdown/3.png","img/countdown/2.png","img/countdown/1.png"]
var countdown = {
  type:'animation',
  stimuli: countdown_images,
  sequence_reps: 1,
  frame_time: 500,
  post_trial_gap: 1000
};

var welcome = { //welcome message
  type: "html-keyboard-response",
  stimulus: "Welcome to our lab!"+
  "<p>Press any key to begin the experiment.</p>",
  post_trial_gap: 500
};

timeline.push(welcome);  //push to timeline


var participantInfo = {
  type:"survey-text",
  preamble: "First, please fill out the following participant form.",
  questions: [{prompt:"Participant ID number:"},{prompt:"Age:"},{prompt:"Gender:"}]
};

timeline.push(participantInfo);

var instruction1 = {
  type: "html-keyboard-response",
  stimulus: "This experiment has 3 parts."+
  "<p> During the first part, 3 consecutive images will appear on the screen. The last one is identical either to the first one or to the second one. </p>"+
  "<p>After the presentation of the 3 stimuli, you will be asked to determine to which of the first 2 stimuli the third is identical.<p>"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instruction1);

var instructionPracticeAbx = {
  type: "html-keyboard-response",
  stimulus: "First, let's start with a pratice run. The following trials are only there for you to get accustomed to the task. Their results are not compiled.  "+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instructionPracticeAbx);

var abxPracticeImages1 = ["img/practice_stimuli/fig1.png","img/practice_stimuli/fig2.png","img/practice_stimuli/fig1.png"]
var abxPracticeImages2 = ["img/practice_stimuli/fig3.png","img/practice_stimuli/fig4.png","img/practice_stimuli/fig4.png"]
var abxPracticeImages3 = ["img/practice_stimuli/fig1.png","img/practice_stimuli/fig5.png","img/practice_stimuli/fig1.png"]
var abxPracticeImages4 = ["img/practice_stimuli/fig6.png","img/practice_stimuli/fig4.png","img/practice_stimuli/fig6.png"]
var abx_practice1 = {
  type: 'abx',
  stimuli: abxPracticeImages1,
  prompt: "<p>Press f if this stimulus is identical to the first stimulus presented and g if it is identical to the second one.</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};
var abx_practice2 = {
  type: 'abx',
  stimuli: abxPracticeImages2,
  prompt: "<p>Press f if this stimulus is identical to the first stimulus presented and g if it is identical to the second one.</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};
var abx_practice3 = {
  type: 'abx',
  stimuli: abxPracticeImages3,
  prompt: "<p>Press f if this stimulus is identical to the first stimulus presented and g if it is identical to the second one.</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};
var abx_practice4 = {
  type: 'abx',
  stimuli: abxPracticeImages4,
  prompt: "<p>Press f if this stimulus is identical to the first stimulus presented and g if it is identical to the second one.</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};
timeline.push(countdown);
timeline.push(abx_practice1);
timeline.push(abx_practice2);
timeline.push(abx_practice3);
timeline.push(abx_practice4);

var instructionAbx = {
  type: "html-keyboard-response",
  stimulus: "Good! That was only a practice run. You will now be asked the same assessment question for several triplets of stimuli."+
  "<p> These results will be compiled.<p>"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instructionAbx);

var abx1_images = ["img/Stimuli Visuels/dis_inclu_A_N6k4p2/fig1.png","img/Stimuli Visuels/dis_inclu_B_N6k4p2/fig2.png","img/Stimuli Visuels/dis_inclu_A_N6k4p2/fig1.png"] //inter
var abx2_images = ["img/Stimuli Visuels/dis_inclu_A_N6k4p2/fig20.png","img/Stimuli Visuels/dis_inclu_A_N6k4p2/fig22.png","img/Stimuli Visuels/dis_inclu_A_N6k4p2/fig22.png"] //intra
var abx1 = {
  type: 'abx',
  stimuli: abx1_images,
  prompt: "<p>Press f if this stimulus is identical to the first stimulus presented and g if it is identical to the second one.</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};
var abx2 = {
  type: 'abx',
  stimuli: abx2_images,
  prompt: "<p>Press f if this stimulus is identical to the first stimulus presented and g if it is identical to the second one.</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};

//var abx_procedure = { //link variables to timeline
  //timeline: [abx1],
  //timeline_variables: test_stimuli, //randomize the order of presentation
  //randomize_order: true,
  //repetitions: 2//nb of times will loop through entries in timeline_variables
//}

timeline.push(countdown);
//timeline.push(abx_procedure);
timeline.push(abx1);
timeline.push(abx2);


var instructions2 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Great! The second task is a category learning task."+
  "<p>Stimuli will be presented one by one. Each stimulus belongs to one of 2 categories: 'Kalamite' or 'Lakamite'.</p>"+
  " Your goal is to learn to properly categorize them. Feedback will be provided to help you accomplish this task."+
      "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instructions2);

var instructions3 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Every time a stimulus is presented to you, press either 'k' (Kalamite) or 'l' (Lakamite) on the keyboard, depending on the category to which you think the stimulus belongs to." +
  "<p>You will then receive feedback according to your answer ('Correct' or 'Incorrect'), which you can use to learn to properly categorize the stimuli.</p>"+
      "<p>Press any key to continue.</p>",
    post_trial_gap: 500
};

timeline.push(instructions3);

var instructions4 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "First, lets start with a test run."+
  "<p>The following trials are only there for you to get accustomed to the task. Their results are not compiled.<p>"+
      "<p>Press any key to begin.</p>",
    post_trial_gap: 500
};

timeline.push(instructions4);


timeline.push(countdown);

var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:70px;">.</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: function(){  /*doit définir comme une fonction parce que defini fixation juste
    une fois alors doit dire de caller la fonction et non prendre la valeur de l'output*/
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  }, /*The return value from calling jsPsych.randomization.sampleWithoutReplacement is an array of
  length 1, so we add the [0] selection at the end to get the value out of the array.*/
  data: {test_part: 'fixation'}  //tagginf the fixation as such
}

//test run
var test_stimuli = [
  { stimulus: "img/practice_stimuli/fig1.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75}, //tagging the different stimuli
  { stimulus: "img/practice_stimuli/fig2.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76},
  { stimulus: "img/practice_stimuli/fig3.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75}, //tagging the different stimuli
  { stimulus: "img/practice_stimuli/fig4.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76},
  { stimulus: "img/practice_stimuli/fig5.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75}, //tagging the different stimuli
  { stimulus: "img/practice_stimuli/fig6.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76}
];

var test_run = {
  type: "categorize-image",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [75, 76],
  key_answer: jsPsych.timelineVariable('response'), //liking the simuli to their tags (data)
  correct_text: "Correct",
  incorrect_text: "Incorrect",
  show_stim_with_feedback: false,
  timeout_message: "Please respond faster.",
  stimulus_duration: 800,
  feedback_duration: 2000,
  trial_duration: 1600
}

var test_procedure = { //link variables to timeline
  timeline: [fixation, test_run],
  timeline_variables: test_stimuli, //randomize the order of presentation
  randomize_order: true,
  repetitions: 1 //nb of times will loop through entries in timeline_variables
}

timeline.push(test_procedure);

var instructions5 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Great! Now, the real category learning task."+
  "<p>This task is seperated in 4 sections each containing the same amount of stimuli to be categorized. Between each section, you will be asked to answers some assessment questions.</p>"+
  "<p>Every time a stimulus is presented to you, press either 'k' (Kalamite) or 'l' (Lakamite) on the keyboard, depending on the category to which you think the stimulus belongs to.</p>"+
      "<p>Press any key to begin.</p>",
    post_trial_gap: 500
};

timeline.push(instructions5);

timeline.push(countdown)

/* test trials */
var categorization_stimuli = [
  //75=k, 76=l
  { stimulus: "img/Stimuli Visuels/dis_inclu_A_N6k4p2/fig2.png", data: {test_part: 'categorization', correct_response: 'k'}, response:75}, //tagging the different stimuli
  { stimulus: "img/Stimuli Visuels/dis_inclu_B_N6k4p2/fig2.png", data: {test_part: 'categorization', correct_response: 'l'}, response:76}
];

var categorization = {
  type: "categorize-image",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [75, 76],
  key_answer: jsPsych.timelineVariable('response'), //liking the simuli to their tags (data)
  correct_text: "Correct",
  incorrect_text: "Incorrect",
  show_stim_with_feedback: false,
  timeout_message: "Please respond faster.",
  stimulus_duration: 800,
  feedback_duration: 2000,
  trial_duration: 1600,
  //data: jsPsych.timelineVariable('data'),
  //on_finish: function(data){
    //data.correct = data.key_press == jsPsych.pluginAPI(data.correct_response); //stores whether the participant responded correctly
  /*converts the character representation of a key into the numeric representation (e.g., calling the function on the value 'f' generates the value 70).
  If this numeric value matches data.key_press then data.correct will be true. Otherwise, it will be false.*/
//}
}


var categorization_procedure = { //link variables to timeline
  timeline: [fixation, categorization],
  timeline_variables: categorization_stimuli, //randomize the order of presentation
  randomize_order: true,
  repetitions: 2 //nb of times will loop through entries in timeline_variables
}

var assessment_questions = {
  type:"survey-text",
  preamble: "Great! You have completed a section of the categorization task. Now, please answer the following assessment questions.",
  questions: [{prompt:"Are you able to distinguish the Kalamite and the Lakamite categories?"},{prompt:"If so, how are you proceeding?"}]
};

var starOfBlock = {
  type: "html-keyboard-response",
  stimulus: "Thank you."+
      "<p>Press any key to begin the next section of the categorization task.</p>",
    post_trial_gap: 500
};

//4 blocks of categorization
timeline.push(categorization_procedure); //push test procedure to timeline
timeline.push(assessment_questions);
timeline.push(starOfBlock);
timeline.push(categorization_procedure);
timeline.push(assessment_questions);
timeline.push(starOfBlock);
timeline.push(categorization_procedure);
timeline.push(assessment_questions);
timeline.push(starOfBlock);
timeline.push(categorization_procedure);
timeline.push(assessment_questions);

var instructions6 = {
  type: "html-keyboard-response",
  stimulus: "Great! You've finished the second par of the experiment."+
  "<p>The last part is similar to the first one.</p>"+
      "<p>Press any key to begin.</p>",
  post_trial_gap: 500
};

var instructions7 = {
  type: "html-keyboard-response",
  stimulus: "3 consecutive images will appear on the screen. The last one is identical to either to first one or the second one. </p>"+
  "<p>After the presentation of the three stimuli, you will be asked to determine to which of the first 2 stimuli the third is identical.<p>"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instructions6);
timeline.push(instructions7);
timeline.push(countdown);
//timeline.push(abx_procedure);
timeline.push(abx1);
timeline.push(abx2);

var end_text = {
  type: "html-button-response",
  stimulus: "Great! You have now completed the experiment."+
  "<p>Thank you for your participation!</p>",
  choices:["Exit experiment"]
};

timeline.push(end_text);

var debrief_block = {
  type: "html-keyboard-response",
  stimulus: function() {

    var trials = jsPsych.data.get().filter({test_part: 'test'});
    var correct_trials = trials.filter({correct: true});
    var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
    var rt = Math.round(correct_trials.select('rt').mean());

    return "<p>You responded correctly on "+accuracy+"% of the trials.</p>"+
    "<p>Your average response time was "+rt+"ms.</p>"+
    "<p>Press any key to complete the experiment. Thank you!</p>";

  }
};

timeline.push(debrief_block);


//start the experiment
jsPsych.init({  //run experiment
  timeline: timeline,
  on_finish: function() {
  jsPsych.data.displayData();
}
});
