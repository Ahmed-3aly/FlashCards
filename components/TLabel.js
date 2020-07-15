import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

export default class TLabel extends React.Component
{
	static propTypes = {
        Color: PropTypes.string.isRequired,
        Content: PropTypes.string.isRequired,
        Size: PropTypes.number.isRequired,
	}
    render() {
        const { Color, Content, Size } = this.props
        return (
            <Text
                style={{
                    color: Color,
                    fontSize: Size,
                    textAlign: "center"
                }}
            >
                {Content}
            </Text>
        )
    }
}
