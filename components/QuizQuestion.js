import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ReactDOM from 'react-dom';

const questions = [
  {
    key: 1,
    question: 'question1 ?',
    options: ['option1', 'option2', 'option3'],
    answer: 'option2',
    score: 10,
  },
  {
    key: 2,
    question: 'question2 ?',
    options: ['option1', 'option2', 'option3'],
    answer: 'option1',
    score: 10,
  },
  {
    key: 3,
    question: 'question3 ?',
    options: ['option1', 'option2', 'option3'],
    answer: 'option3',
    score: 10,
  },
];

export default class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalScore: 0,
      answered: questions.map(() => false), // All questions' answered state = false at statup
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {questions.map(({
          question, options, answer, score,
        }, index) => (
          <View>
            <View>
              <Text>{question}</Text>
            </View>

            {/* Options  */}
            <View>
              {options.map(({ option }) => (
                <TouchableOpacity
                  onPress={() => {
                    let { totalScore, answered } = this.state;

                    if (!answered[index] && option === answer) {
                      answered[index] = true;
                      this.setState({
                        totalScore: totalScore + score,
                        answered,
                      });
                    }
                  }}
                >
                  <View>
                    <Text>{option}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    );
  }
}

// ReactDOM.render(<QuizQuestion />, document.getElementById('root'));