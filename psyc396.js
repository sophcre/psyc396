
//Lists of stimuli used throughout the experiment

//List of all stimuli accessible to the experiment
var listAllStim= ["img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig1.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig2.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig3.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig4.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig5.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig6.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig7.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig8.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig9.png",
"img/Stimuli Visuels/dis_inclu_A_N8k6p2/fig10.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig1.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig2.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig3.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig4.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig5.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig6.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig7.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig8.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig9.png",
"img/Stimuli Visuels/dis_inclu_B_N8k6p2/fig10.png"
//...
];

//creating a list which contains the stimuli we want to use in the experiment, N, p and k are numbers corresponding to the caracterization parameters we want to test
function selectCategorizationStim(list,N,k,p){
  var stimuli = [];
  for(i in list){
    if (list[i].search("dis_inclu_A_N"+N+"k"+k+"p"+p)!=-1||list[i].search("dis_inclu_B_N"+N+"k"+k+"p"+p)!=-1){
      stimuli.push(list[i])
    }
  }
  return stimuli;
}
var list_categorization_stimuli = selectCategorizationStim(listAllStim,8,6,2); //**Change depending on categorization parameters we want to test

//creating a list of the stimuli belonging to the category A
var list_stimuli_A = [];

for (i in list_categorization_stimuli){
  if (list_categorization_stimuli[i].search("dis_inclu_B")==-1){ //part of category A, if unsuccesfull returns -1
    list_stimuli_A.push(list_categorization_stimuli[i])
  }
}
//creating a list of the stimuli belonging to the category B
var list_stimuli_B = [];

for (i in list_categorization_stimuli){
  if (list_categorization_stimuli[i].search("dis_inclu_A")==-1){ //part of category B, if unsuccesfull returns -1
    list_stimuli_B.push(list_categorization_stimuli[i])
  }
}

//list of stimuli used for the practice trials (ABX and categorization)
var list_practice_stim = ["img/practice_stimuli/fig1.png",
"img/practice_stimuli/fig2.png",
"img/practice_stimuli/fig3.png",
"img/practice_stimuli/fig4.png",
"img/practice_stimuli/fig5.png",
"img/practice_stimuli/fig6.png",
"img/practice_stimuli/fig7.png",
"img/practice_stimuli/fig8.png"];

//Practice stimuli and their correct response, used for cateforization practice trials
var practice_stimuli_cat = [
  { stimulus: "img/practice_stimuli/fig1.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75},
  { stimulus: "img/practice_stimuli/fig2.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75},
  { stimulus: "img/practice_stimuli/fig3.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75},
  { stimulus: "img/practice_stimuli/fig4.png", data: {test_part: 'test_run', correct_response: 'k'}, response:75},
  { stimulus: "img/practice_stimuli/fig5.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76},
  { stimulus: "img/practice_stimuli/fig6.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76},
  { stimulus: "img/practice_stimuli/fig7.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76},
  { stimulus: "img/practice_stimuli/fig8.png", data: {test_part: 'test_run', correct_response: 'l'}, response:76}
];

//Experiment

var timeline = [];

//countdown used at the start of different parts of the experiment
var countdown_images = ["img/countdown/5.png","img/countdown/4.png","img/countdown/3.png","img/countdown/2.png","img/countdown/1.png"]
var countdown = {
  type:'animation',
  stimuli: countdown_images,
  sequence_reps: 1,
  frame_time: 500,
  post_trial_gap: 1000
};

//fixation cross used for categorization trials
var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:70px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
  },
  data: {test_part: 'fixation'}
}

var welcome = { //welcome message
  type: "html-keyboard-response",
  stimulus: "Welcome to our lab!"+
  "<p>Press any key to begin the experiment.</p>",
  post_trial_gap: 500
};

timeline.push(welcome);

var participantInfo = {
  type:"survey-text",
  preamble: "First, please fill out the following participant form.",
  questions: [{prompt:"Participant ID number:"},{prompt:"Age:"},{prompt:"Gender:"}]
};

timeline.push(participantInfo);

var instruction1 = {
  type: "html-keyboard-response",
  stimulus: "This experiment is in three parts."+
  "<p> Part 1: </p>"+
  "<p>Three patterns will appear, quickly, one after the other.</p>"+
  "<p>The first two patterns (1 and 2) are different. The third pattern is either the same as 1 or 2. So, it is always either 1,2-1 or 1,2-2.</p>"+
  "<p>All you have to do is press the 'f' key ('f', for 'first') to signal that the third pattern was the same as the first pattern or the 'g' key if it was the same as the second pattern, when you see the question mark.</p>"+
  "<p>(So for 1,2-1 press 'f' and for 1,2-2 press 'g'.)</p>"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instruction1);

var instruction1_2 = {
  type: "html-keyboard-response",
  stimulus:"Please position your index fingers over the 'f' and 'g' keys so you use your left index finger for 'f' and your right index finger for 'g'"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instruction1_2);

var instructionPracticeAbx = {
  type: "html-keyboard-response",
  stimulus: "First, let's start with some practice, just so you get used to the procedure."+
  "<p>These patterns are not the ones that you will see in the actual experiment (these are easier) and the results do not count.</p>"+
  "<p>The three patterns will appear quickly one after the other.<p/>"+
  "<p>Then, when you see the question mark, press 'f' if the 3rd pattern was the same as the first pattern, and 'g' if it was the same as the second.</p>"+
  "<p>Try to respond quickly, but correctly.</p>"+
  "<p>Position your index fingers over 'f' and 'g' and press any key to continue</p>",
  post_trial_gap: 500
};


timeline.push(instructionPracticeAbx);

//ABX practice trials

function choice_abx_stim_practice (list_practice_stim){ //this function selects stimuli for a ABX pratice trial
  var chosen = jsPsych.randomization.sampleWithoutReplacement(list_practice_stim,2); //selects randomly A and B
  if (Math.round(Math.random()) == 1){  // selects randomly if the third stimulus is identical to A or B (random selections since only practice runs)
    chosen.push(chosen[0]);
  }
  else{
    chosen.push(chosen[1]);
  }
  return chosen
}

var trials_abx_practice = []; //stores sitmuli necessary for each abx practice trials

for (var i=0;i<10;i++){ //adds stimuli for each ABX practice trials to the array trials_abx_practice
  var abx_stim_practice = {
    stimuli: choice_abx_stim_practice(list_practice_stim)
  }
  trials_abx_practice.push(abx_stim_practice);
}

var abx_practice = {
  type: 'abx',
  stimuli: jsPsych.timelineVariable('stimuli'),
  prompt: "<p>?</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g']
};

var abx_procedure_practice = {
  timeline: [abx_practice],
  timeline_variables: trials_abx_practice,
  randomize_order: true,
  repetitions: 1,
  timing_stims : 50,
  timing_gap : 2000,
  timeout: 3000
};

timeline.push(countdown);
timeline.push(abx_procedure_practice);

var endAbxPractice = {
  type: "html-keyboard-response",
  stimulus: "Good! That was only a practice run. Now we will do it with the real patterns (which are harder) and the results will count."+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(endAbxPractice);

var instructionAbx = {
  type: "html-keyboard-response",
  stimulus:"Position your index fingers over 'f' and 'g'"+
  "<p>The three patterns will appear quickly one after the other.</p>"+
  "<p>Then, when you see the question mark, press 'f' if the 3rd pattern was the same as the first pattern and 'g' if it was the same as the second.</p>"+
  "<p>Try to respond quickly, but correctly.</p>"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instructionAbx);

//ABX trials

function abx_stimChoice(list_stimA, list_stimB, X){ //randomly chooses a stimulus from list_stimA and list_stimB. Third stimulus is identical to the first stimulus if X='A' and to the second if X='B'
  var stimChoice = [];
  var stimA = jsPsych.randomization.sampleWithoutReplacement(list_stimA,1);
  var stimB = jsPsych.randomization.sampleWithoutReplacement(list_stimB,1)
  stimChoice.push(stimA);
  stimChoice.push(stimB);

  if(X == 'A'){
    stimChoice.push(stimA)
  }
  else{
    stimChoice.push(stimB)
  }
  return stimChoice;
}

var trials_abx = []; //will store stimuli necessary to all abx trials

for(var i=0; i<12; i++){ //adds 12 intra trials for which the response is A to trials_abx
  var stim_abx = {
    stimuli: abx_stimChoice(list_stimuli_A,list_stimuli_A,'A')
  }
  trials_abx.push(stim_abx);
}
for(var i=0; i<12; i++){ //adds 12 intra trials for which the response is B to trials_abx
  var stim_abx = {
    stimuli: abx_stimChoice(list_stimuli_A,list_stimuli_A,'B')
  }
  trials_abx.push(stim_abx);
}
for(var i=0; i<12; i++){ //adds 12 inter trials for which the response is A to trials_abx
  var stim_abx = {
    stimuli: abx_stimChoice(list_stimuli_A,list_stimuli_B,'A')
  }
  trials_abx.push(stim_abx);
}
for(var i=0; i<12; i++){ //adds 12 inter trials for which the response is B to trials_abx
  var stim_abx = {
    stimuli: abx_stimChoice(list_stimuli_A,list_stimuli_B,'B')
  }
  trials_abx.push(stim_abx);
}

var abx = {
  type: 'abx',
  stimuli: jsPsych.timelineVariable('stimuli'),
  prompt: "<p>?</p>",
  timeout: -1,
  prompt_position:2,
  key_first: 'f',
  key_second: 'g',
  choices: ['f','g'],
  timing_stims : 50,
  timing_gap : 2000,
  timeout: 3000
}

var abx_procedure = {
  timeline: [abx],
  timeline_variables: trials_abx,
  randomize_order: true,
  repetitions: 1,
}

timeline.push(countdown);
timeline.push(abx_procedure);

var instructions2 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Part 2:"+
  "<p>Great, you have completed the first part of the experiment! The second task is a category learning task.</p>"+
  "<p>The patterns will now be presented one by one.</p>"+
  "<p>The patterns are all different, but there are two kinds: 'Kalospheres' or 'Lakospheres'.</p>"+
      "<p>Your task is to learn which are which. You will get feedback to let you know whether you were right or wrong.</p>"+
      "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

timeline.push(instructions2);

var instructions3 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Each time a sphere is presented to you, press 'k' if you think it's a Kalosphere or 'l' if you think it's a Lakosphere." +
  "<p>After you respond, the computer will give you feedback ('Correct' or 'Incorrect').</p>"+
  "<p>At first you will have no idea which is which, but as you do more trial-and-error you will start to get it right more and more often.</p>"+
      "<p>Press any key to continue.</p>",
    post_trial_gap: 500
};

timeline.push(instructions3);

var instructions4 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "First, let's start with some practice, just so you get used to the procedure."+
  "<p>These patterns are not the ones that you will see in the actual experiment (these are easier) and the results do not count.<p>"+
      "<p>Press any key to begin.</p>",
    post_trial_gap: 500
};

timeline.push(instructions4);

//Categorization practice trials

var practice_cat = {
  type: "categorize-image",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [75, 76],
  key_answer: jsPsych.timelineVariable('response'), //liking the simuli to their tags (data)
  correct_text: "Correct",
  incorrect_text: "Incorrect",
  show_stim_with_feedback: false,
  timeout_message: "Please respond faster.",
  stimulus_duration: 200,
  feedback_duration: 2000,
  trial_duration: 1600
}

var practice_cat_procedure = {
  timeline: [fixation, practice_cat],
  timeline_variables: practice_stimuli_cat,
  randomize_order: true,
  repetitions: 1
}

timeline.push(countdown);
timeline.push(practice_cat_procedure);

var instructions5 = { //instrutions with html formatting
  type: "html-keyboard-response",
  stimulus: "Great! Now, the real category learning task."+
  "<p>The trial-and-error training will be 4 blocks of 50 trials each, with a rest in between each block.</p>"+
  "<p>Between each block, you will be asked a few questions about how you are doing.</p>"+
  "<p>Each time a pattern is presented to you, press 'k' if you think it's a Kalosphere or 'l' if you think it's a Lakosphere.</p>"+
  "<p>After you respond, the computer will give you feedback ('Correct' or 'Incorrect').</p>"+
  "<p>At first you will have no idea which is which, but as you do more trial-and-error you will start to get it right more and more often.</p>"+
      "<p>Press any key to begin.</p>",
    post_trial_gap: 500
};

timeline.push(instructions5);

//Categorization trials

var categorization_stimuli = [ ]; // will store categorization stimuli with correct answer

for (i in list_categorization_stimuli){ //links the stimuli to the correct response and adds to categorization_stimuli array
  var corr_res = "";
  var resp = 0;
  if (list_categorization_stimuli[i].search("dis_inclu_A")==-1){ //part of category B, if unsuccesfull returns -1
    corr_res = 'l';
    resp = 76;
  }
  else{ //part of category A
    corr_res = 'k';
    resp = 75;
  }
  var tagged_stim = { stimulus: list_categorization_stimuli[i], data: {test_part: 'categorization', correct_response: corr_res}, response:resp};
  categorization_stimuli.push(tagged_stim);
}

var categorization = {
  type: "categorize-image",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [75, 76],
  key_answer:jsPsych.timelineVariable('response'),
  correct_text: "Correct",
  incorrect_text: "Incorrect",
  show_stim_with_feedback: false,
  timeout_message: "Please respond faster.",
  stimulus_duration: 200,
  feedback_duration: 2000,
  trial_duration: 1600,
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function choosing_stim(list, x){ //returns an array of x elements chosen randomly from list and the remaining array
  var stimuli = [];

  shuffledList = shuffle(list)

  for(i=0;i<x;i++){ //takes the last x elements of the randomly shuffled array and removes them from the original array
    if(shuffledList.length != 0){
      stimuli.push(shuffledList.pop())
    }
  }
  return {
    stimuli : stimuli,
    shuffledList: shuffledList
  }
};

 //4 blocks of categorization trials
var choosing = choosing_stim(categorization_stimuli,50);
var stimCat1 = choosing.stimuli;
var remainingStim = choosing.shuffledList;
var categorization_procedure1 = {
  timeline: [fixation, categorization],
  timeline_variables: stimCat1,
  randomize_order: true,
  repetitions: 1,
};
choosing = choosing_stim(remainingStim,50);
stimCat2 = choosing.stimuli;
remainingStim = choosing.shuffledList;
var categorization_procedure2 = {
  timeline: [fixation, categorization],
  timeline_variables: stimCat2,
  randomize_order: true,
  repetitions: 1,
};
choosing = choosing_stim(remainingStim,50);
stimCat3 = choosing.stimuli;
remainingStim = choosing.shuffledList;
var categorization_procedure3 = {
  timeline: [fixation, categorization],
  timeline_variables: stimCat3,
  randomize_order: true,
  repetitions: 1,
};
choosing = choosing_stim(remainingStim,50);
stimCat4 = choosing.stimuli;
remainingStim = choosing.shuffledList;
var categorization_procedure4 = {
  timeline: [fixation, categorization],
  timeline_variables: stimCat4,
  randomize_order: true,
  repetitions: 1,
};

var assessment_questions = { //assement questions to be asked between each ctegorization block
  type:"survey-text",
  preamble: "Great! You have completed Great! You have completed a block of 50 trials. Here are a few questions:",
  questions: [{prompt:"Do you think you can tell Kalospheres and Lakospheres apart?"},{prompt:"If you can, how are you doing it?"},{prompt:"What is the difference between the Kalospheres and the Lakospheres?"}]
};

var starOfBlock = {
  type: "html-keyboard-response",
  stimulus: "Thank you."+
      "<p>Press any key to begin the next section of the categorization task.</p>",
    post_trial_gap: 500
};

timeline.push(countdown)
timeline.push(categorization_procedure1);
timeline.push(assessment_questions);
timeline.push(starOfBlock);
timeline.push(countdown)
timeline.push(categorization_procedure2);
timeline.push(assessment_questions);
timeline.push(starOfBlock);
timeline.push(countdown)
timeline.push(categorization_procedure3);
timeline.push(assessment_questions);
timeline.push(starOfBlock);
timeline.push(countdown)
timeline.push(categorization_procedure4);
timeline.push(assessment_questions);

var instructions6 = {
  type: "html-keyboard-response",
  stimulus:"Part 3:"+
  "<p>Great! You've finished the second part of the experiment.</p>"+
  "<p>Part 3 is the same as Part 1</p>"+
      "<p>Press any key to begin.</p>",
  post_trial_gap: 500
};

var instructions7 = {
  type: "html-keyboard-response",
  stimulus: "<p>Three patterns will appear, quickly, one after the other.</p>"+
  "<p>The first two patterns (1 and 2) are different. The third pattern is either the same as 1 or 2. So, it is always either 1,2-1 or 1,2-2.</p>"+
  "<p>All you have to do is press the 'f' key ('f' for 'first') to signal that the third pattern was the same as the first pattern or the 'g' key if it was the same as the second pattern, when you see the question mark.</p>"+
  "<p>(So for 1,2-1 press f  and for 1,2-2 press g.)</p>"+
  "<p>Press any key to continue.</p>",
  post_trial_gap: 500
};

//Second ABX

timeline.push(instructions6);
timeline.push(instructions7);

timeline.push(instructionPracticeAbx);
timeline.push(countdown);
timeline.push(abx_procedure_practice);
timeline.push(endAbxPractice);

timeline.push(instructionAbx);
timeline.push(countdown);
timeline.push(abx_procedure);


var end_text = {
  type: "html-button-response",
  stimulus: "Great! You have now completed the experiment."+
  "<p>Thank you for your participation!</p>",
  choices:["Exit experiment"]
};

timeline.push(end_text);

//start the experiment
jsPsych.init({  //run experiment
  timeline: timeline,
  on_finish: function() {
  jsPsych.data.get().localSave('csv','mydata.csv');

}
});
