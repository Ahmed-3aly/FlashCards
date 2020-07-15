import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../utils/colors';

const styles = StyleSheet.create({
    LOCAL: {
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        height: 40,
        padding: 10,
        borderColor: COLORS.HINT,
        borderWidth: 1,
        color: COLORS.FORE,
    },
});

export default class TInput extends React.Component
{
	static propTypes = {
        Content: PropTypes.string.isRequired,
        CallBack: PropTypes.func.isRequired,
	}
    render() {
        const { Content, CallBack } = this.props
        return (
            <TextInput
                style={styles.LOCAL}
                value={Content}
                onChangeText={(e) => CallBack(e)}
            />
        )
    }
}
