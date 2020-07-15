import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/colors';

export default class TButton extends React.Component
{
	static propTypes = {
        HINT: PropTypes.string.isRequired,
        Content: PropTypes.string.isRequired,
        Disabled: PropTypes.bool.isRequired,
        CallBack: PropTypes.func.isRequired,
	}
    render() {
        const { HINT, Content, Disabled, CallBack } = this.props
        return (
            <TouchableOpacity
                style={{
                    marginTop: 20,
                    backgroundColor: HINT,
                    padding: 10,
                    borderRadius: 7,
                    marginLeft: 40,
                    marginRight: 40,
                }}
                disabled={Disabled}
                onPress={CallBack}
            >
                <Text
                    style={{
                        color: COLORS.BACK,
                        fontSize: 22,
                        textAlign: 'center',
                    }}
                >
                    {Content}
                </Text>
            </TouchableOpacity>
        )
    }
}
