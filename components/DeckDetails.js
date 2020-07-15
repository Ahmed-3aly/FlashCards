import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../utils/colors';
import DeckView from './DeckView';
import TButton from './TButton';
import THeader from './THeader';

class DeckDetails extends React.Component
{
	static propTypes = {
        Name: PropTypes.string.isRequired,
        Size: PropTypes.number.isRequired,
	}
    render() {
        const { Name, Size, navigation } = this.props
        if (Name === null || typeof Name === 'undefined') {
            return null
        }
        const isEmpty = Size === 0
        const QUIZ_LABEL = isEmpty ? 'DECK EMPTY!' : 'START QUIZ'
        const QUIZ_COLOR = isEmpty ? COLORS.FORE : COLORS.HINT
        return (
            <View>
                <THeader
                    Content='DECK DETAILS'
                />
                <DeckView
                    Name={Name}
                    Size={Size}
                />
                <TButton
                    HINT={COLORS.HINT}
                    Disabled={false}
                    Content='CARD ADD'
                    CallBack={() => {
                        navigation.navigate(
                            'CardAdd',
                            { Name: Name }
                        )
                    }}
                />
                <TButton
                    HINT={QUIZ_COLOR}
                    Disabled={Size === 0}
                    Content={QUIZ_LABEL}
                    CallBack={() => {
                        navigation.navigate(
                            'Quiz',
                            { Name: Name }
                        )
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
            Name,
            Size: 0,
        }
    }
    return {
        Name,
        Size: Cards.filter(y => y.Name === Name).length,
    }
}

export default connect(mapStateToProps)(DeckDetails)
