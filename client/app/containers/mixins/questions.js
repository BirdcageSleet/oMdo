module.exports = {
  getInitialState: function() {
    this.questions = {
      slider: [
        {
          category: 'feeling',
          text: 'How are you feeling in this moment?',
          minText: 'Depressed',
          maxText: 'Overjoyed'
        },
        {
          category: 'anxiety',
          text: 'How anxious are you right now?',
          minText: 'Panicky',
          maxText: 'Not at all'
        },
        {
          category: 'energy',
          text: 'How energetic are you right now?',
          minText: 'Falling asleep',
          maxText: 'Alert and awake'
        }
      ],
      selector: [
        {
          category: 'sleep',
          text: 'How did you sleep last night?',
          options: ['Insomnia', 'Tossed and turned', 'Normally', 'Pretty well', 'Very restful']
        },
        {
          category: 'mood',
          text: 'Which of the following best describes your mood in this moment?',
          options: ['Sad', 'Aggravated', 'Normal', 'Agreeable', 'High spirits']
        }
      ],
      boolean: [
        {
          category: 'event',
          text: 'Have any significant or noteworthy events happened to you since your last check-in?',
        }
      ]
    }
    return null;
  }
};
