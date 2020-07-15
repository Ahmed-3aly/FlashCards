import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import CardView from './CardView';
import DeckView from './DeckView';
import TButton from './TButton';
import THeader from './THeader';
import TLabel from './TLabel';

class Quiz extends React.Component
{
	static propTypes = {
		Name: PropTypes.string.isRequired,
        Data: PropTypes.array.isRequired,
    }
    state = {
        index: 0,
        score: 0
    }
    reset() {
        this.setState({
            index: 0,
            score: 0
        })
    }
    saveAnswer(correct) {
        const { Data } = this.props
        const score = this.state.score + (correct ? 1 : 0)
        const index = this.state.index + 1
        const size = Data.length
        if (index <= (size - 1)) {
            this.setState((s) => {
                return {
                    score: score,
                    index: index,
                }
            })
        }
        else {
            clearLocalNotification().then(setLocalNotification)
            this.setState((s) => {
                return {
                    score: score,
                    index: -1,
                }
            })
        }
    }
    render() {
        const { Name, Data, goBack } = this.props
        if (Data === null || typeof Data === 'undefined') {
            return null
        }
        const { index, score } = this.state
        const showResult = index === -1
        const Card = Data[index]
        const showCard = (!(Card === null || typeof Card === 'undefined'))
        return (
            <View>
                <THeader
                    Content='QUIZ'
                />
                <DeckView
                    Name={Name}
                    Size={Data.length}
                />
                <TLabel
                    Content={'SCORE: ' + score}
                    Color={COLORS.FORE}
                    Size={16}
                />
                {showResult && (
                    <View>
                        <TButton
                            HINT={COLORS.FORE}
                            Disabled={false}
                            Content='AGAIN'
                            CallBack={() => this.reset()}
                        />
                        <TButton
                            HINT={COLORS.HINT}
                            Disabled={false}
                            Content='BACK'
                            CallBack={() => goBack()}
                        />
                    </View>
                )}
                {showCard && (
                    <View>
                        <TLabel
                            Size={16}
                            Color={COLORS.HINT}
                            Content={(index + 1) + ' OF ' + Data.length}
                        />
                        <CardView
                            Card={Card}
                            SaveAnswerCallBack={(x) => this.saveAnswer(x)}
                        />
                    </View>
                )}
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { Name } = navigation.state.params
    const { Cards } = state
    if (Cards === null || typeof Cards === 'undefined') {
        return {
            goBack: navigation.goBack,
            Name,
            Data: [],
        }
    }
    const Data = Cards.filter(x => x.Name === Name)
    return {
        goBack: navigation.goBack,
        Name,
        Data
    }
}

export default connect(mapStateToProps)(Quiz)
