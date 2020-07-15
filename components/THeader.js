import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from '../utils/colors';
import TLabel from './TLabel';

export default class THeader extends React.Component
{
	static propTypes = {
        Content: PropTypes.string.isRequired,
	}
    render() {
        const { Content } = this.props
        return (
            <TLabel
                Color={COLORS.FORE}
                Size={22}
                Content={Content}
            />
        )
    }
}
