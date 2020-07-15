import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { handleCardPush } from '../actions/shared';
import { COLORS } from '../utils/colors';
import DeckView from './DeckView';
import TButton from './TButton';
import THeader from './THeader';
import TInput from './TInput';

class CardAdd extends React.Component
{
	static propTypes = {
        Name: PropTypes.string.isRequired,
        Size: PropTypes.number.isRequired,
    }
    state = {
        question: "",
        answer: "",
    }
    isValid() {
        const { question, answer } = this.state
        return  typeof question !== 'undefined' && question !== '' &&
                typeof answer !== 'undefined' && answer !== ''
    }
    render() {
        const { Name, Size, dispatch, goBack } = this.props
        const { question, answer } = this.state
        return (
            <View>
                <THeader
                    Content='CARD ADD?'
                />
                <DeckView
                    Name={Name}
                    Size={Size}
                />
                <TInput
                    Content={question}
                    CallBack={(e) => this.setState({ question: e })}
                />
                <TInput
                    Content={answer}
                    CallBack={(e) => this.setState({ answer: e })}
                />
                <TButton
                    HINT={COLORS.HINT}
                    Content='CARD ADD'
                    Disabled={!this.isValid()}
                    CallBack={() => {
                        dispatch(handleCardPush(
                            Name,
                            question,
                            answer
                        ))
                        this.setState({
                            question: "",
                            answer: ""
                        })
                        goBack()
                    }}
                />
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
            Size: 0,
        }
    }
    return {
        goBack: navigation.goBack,
        Name,
        Size: Cards.filter(y => y.Name === Name).length,
    }
}

export default connect(mapStateToProps)(CardAdd)
