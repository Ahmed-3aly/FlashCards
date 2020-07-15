import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { handleInit } from '../actions/shared';
import { COLORS } from '../utils/colors';
import DeckView from './DeckView';
import TEmpty from './TEmpty';
import THeader from './THeader';

class DeckList extends React.Component
{
	static propTypes = {
        Items: PropTypes.array.isRequired,
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(handleInit())
    }    
    render() {
        const { Items, navigation } = this.props
        if (Items === null || typeof Items === 'undefined') {
            return null
        }
        const isEmpty = Items.length === 0
        return (
            <View>
                <THeader
                    Content='DECKS'
                />
                {isEmpty &&
                    <TEmpty />
                }
                <FlatList
                    data={Items}
                    renderItem={({ item }) => {
                        return (<TouchableOpacity
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: COLORS.HINT,
                            }}
                            key={item.Name}
                            onPress={() => {
                                navigation.navigate(
                                    'DeckDetails',
                                    { Name: item.Name }
                                )
                            }}
                        >
                            <DeckView
                                Name={item.Name}
                                Size={item.Size}
                            />
                        </TouchableOpacity>)
                    }}
                />
            </View>
        )
    }
}

function mapStateToProps({
    Decks,
    Cards
}) {
    if (Decks === null || typeof Decks === 'undefined') {
        return {
            Items: []
        }
    }
    const Items = Decks.map(x => ({
        Name: x,
        Size: Cards.filter(y => y.Name === x).length
    }))
    return {
        Items: Items
    }
}

export default connect(mapStateToProps)(DeckList)
