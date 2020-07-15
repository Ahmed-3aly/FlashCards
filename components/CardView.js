import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../utils/colors';
import CardAnswer from './CardAnswer';
import TButton from './TButton';
import TLabel from './TLabel';

export default class CardView extends React.Component
{
    static propTypes = {
        Card: PropTypes.object.isRequired,
        SaveAnswerCallBack: PropTypes.func.isRequired,
	}
    state = {
        ShowAnswer: false,
    }
    setAnswer(show) {
        this.setState({
            ShowAnswer: show
        })
    }
    render() {
        const { ShowAnswer } = this.state
        const {
            Card,
            SaveAnswerCallBack
        } = this.props
        return (
            <View>
                <TLabel
                    Size={20}
                    Color={COLORS.FORE}
                    Content={Card.Q}
                />
                {!ShowAnswer && (
                    <TButton
                        HINT={COLORS.HINT}
                        Disabled={false}
                        Content='SHOW ANSWER'
                        CallBack={() => this.setAnswer(true)}
                    />
                )}
                {ShowAnswer && (
                    <CardAnswer
                        Content={Card.A}
                        SaveCallBack={(x) => {
                            this.setAnswer(false)
                            SaveAnswerCallBack(x)
                        }}
                    />
                )}
            </View>
        )
    }
}
