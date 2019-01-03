
jsPsych.plugins['ABX'] = (function(){

  //example of new plugin copied from jspych's website 
  var plugin = {};

  plugin.info = {
    name: 'ABX',
    parameters: {
    }
  }

  plugin.trial = function(display_element, trial){
    var html_content = '<p>This is the first paragraph</p>';
    html_content += '<p>This is the second paragraph</p>';

    display_element.innerHTML = html_content;
    jsPsych.finishTrial();
  }

  


  return plugin;

})();


var timeline = []; //create timeline

var abx = {
  type: "ABX"
}

timeline.push(abx);

var welcome = { //welcole message
  type: "html-keyboard-response",
  stimulus: "Welcome to our lab!"+
  "<p>Press any key to begin the experiment.</p>"
};

timeline.push(welcome);  //push to timeline


var instructions1 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "The second task is a category learning task."+
  "<p>Stimuli will be presented one by one. Each stimulus belongs to one of 2 categories: 'Kalamite' or 'Lakamite'.</p>"+
  " Your goal is to learn to properly categorize them. Feedback will be provided to help you accomplish this task."+
      "<p>Press any key to continue.</p>",
};

timeline.push(instructions1);

var instructions2 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Every time a stimulus is presented to you, press either 'k' (Kalamite) or 'l' (Lakamite) on the keyboard, depending on the category to which you think the stimulus belongs to." +
  "<p>You will then receive feedback according to your answer ('Correct' or 'Incorrect').</p>"+
      "<p>Press any key to continue.</p>",
    post_trial_gap: 500
};

timeline.push(instructions2);

var instructions3 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "First, lets start with a test run."+
      "<p>Press any key to begin.</p>",
    post_trial_gap: 500
};

timeline.push(instructions3);

var countdown_images = ["img/countdown/5.png","img/countdown/4.png","img/countdown/3.png","img/countdown/2.png","img/countdown/1.png"]
var countdown = {
  type:'animation',
  stimuli: countdown_images,
  sequence_reps: 1,
  frame_time: 500,
  post_trial_gap: 1000
};

timeline.push(countdown);

var fixation = { //define other variable which will be used
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
  { stimulus: "img/test_run/fig1.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75}, //tagging the different stimuli
  { stimulus: "img/test_run/fig2.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76}
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

var instructions4 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Great! Now, the real category learning task."+
      "<p>Press any key to begin.</p>",
    post_trial_gap: 500
};

timeline.push(instructions4);

timeline.push(countdown)

/* test trials */
var categorization_stimuli = [
  //75=k, 76=l
  { stimulus: "Stimuli Visuels/dis_inclu_A_N6k4p2/fig2.png", data: {test_part: 'categorization', correct_response: 'k'}, response:75}, //tagging the different stimuli
  { stimulus: "Stimuli Visuels/dis_inclu_B_N6k4p2/fig2.png", data: {test_part: 'categorization', correct_response: 'l'}, response:76}
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
  trial_duration: 1600
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
  repetitions: 5 //nb of times will loop through entries in timeline_variables
}


timeline.push(categorization_procedure); //push test procedure to timeline

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
