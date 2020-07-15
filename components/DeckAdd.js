import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { handleDeckPush } from '../actions/shared';
import { COLORS } from '../utils/colors';
import TButton from './TButton';
import THeader from './THeader';
import TInput from './TInput';

class DeckAdd extends React.Component {
    state = {
        text: "",
    }
    disabled() {
        const { text } = this.state
        if (text === null) {
            return true
        }
        if (typeof text === 'undefined') {
            return true
        }
        if (text.length === 0) {
            return true
        }
        return false
    }
    onClick(text) {
        const { Decks, dispatch, goBack } = this.props
        if (text === null || typeof text === 'undefined' || text.length === 0) {
            return
        }
        if (Decks === null) {
            return
        }
        const match = Decks.filter(x => x === text)
        if (match.length > 0) {
            return
        }
        dispatch(handleDeckPush(text))
        this.setState({ text: '' })
        goBack()
    }
    render() {
        const { Decks } = this.props
        const { text } = this.state
        if (Decks === null) {
            return null
        }
        return (
            <View>
                <THeader
                    Content='DECK ADD?'
                />
                <TInput
                    Content={text}
                    CallBack={(e) => this.setState({ text: e })}
                />
                <TButton
                    HINT={COLORS.HINT}
                    Content='DECK ADD'
                    Disabled={this.disabled()}
                    CallBack={() => this.onClick(text)}
                />
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { Decks } = state
    return {
        goBack: navigation.goBack,
        Decks,
    }
}

export default connect(mapStateToProps)(DeckAdd)
