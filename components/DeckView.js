import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../utils/colors';
import TLabel from './TLabel';

export default class DeckView extends React.Component
{
    static propTypes = {
        Name: PropTypes.string.isRequired,
        Size: PropTypes.number.isRequired,
	}
    render() {
        const { Name, Size } = this.props
        const CARDS = 'CARDS: ' + Size
        return (
            <View
                style={{
                    padding: 20,
                }}
            >
                <TLabel
                    Content={Name}
                    Color={COLORS.FORE}
                    Size={20}
                />
                <TLabel
                    Content={CARDS}
                    Color={COLORS.FORE}
                    Size={16}
                />
            </View>
        )
    }
}
