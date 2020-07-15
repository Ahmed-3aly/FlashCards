import React from 'react';
import { COLORS } from '../utils/colors';
import TLabel from './TLabel';

export default class TEmpty extends React.Component
{
    render() {
        return (
            <TLabel
                Color={COLORS.HINT}
                Size={20}
                Content='EMPTY!'
            />
        )
    }
}
