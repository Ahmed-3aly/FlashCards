import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../utils/colors';
import TButton from './TButton';
import TLabel from './TLabel';

export default class CardAnswer extends React.Component
{
	static propTypes = {
		Content: PropTypes.string.isRequired,
        SaveCallBack: PropTypes.func.isRequired,
	}
    render() {
        const { Content, SaveCallBack } = this.props
        return (
            <View>
                <TLabel
                    Size={18}
                    Color={COLORS.HINT}
                    Content={Content}
                />
                <TLabel
                    Size={16}
                    Color={COLORS.FORE}
                    Content='YOUR GUESS WAS?'
                />
                <TButton
                    HINT={COLORS.WRONG}
                    Disabled={false}
                    Content='WRONG'
                    CallBack={() => SaveCallBack(false)}
                />
                <TButton
                    HINT={COLORS.RIGHT}
                    Disabled={false}
                    Content='RIGHT'
                    CallBack={() => SaveCallBack(true)}
                />
            </View>
        )
    }
}
