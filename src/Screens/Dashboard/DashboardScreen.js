
import React, { useEffect } from 'react'
import { useState } from 'react';
import { StatusBar, View, SafeAreaView, FlatList, TextInput  } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { defaultSearchAction, querySearchAction } from 'Redux/Actions';
import styles from './DashboardStyle'
import VideoResults from 'Components/VideoResults'
import ChannelResults from 'Components/ChannelResults'
import { AntDesign } from '@expo/vector-icons';
import AccountBox from 'Components/AccountBox'

export default function DashboardScreen(props) {
    const [searchQuery, setSearchQuery] = useState('')
    

    const changeSearchQuery = (searchText) => {
        setSearchQuery(searchText)
    }


    const submitSearch = () => {
        dispatch(querySearchAction(searchQuery))
        setSearchQuery('')
    }

    useEffect(() => {
        console.log("Chal bhai");
        // dispatch(defaultSearchAction())
    }, [])



    
    const SearchReducer = useSelector((state) => state.defaultSearch)
    
    const dispatch = useDispatch()

    return (
        <View
            style={styles.FullContainer}
        >
            <StatusBar
                animated={true}
                barStyle='dark-content'
            />
            <SafeAreaView
                style={styles.Container}
            >

<AccountBox
navigation={props.navigation}
/>
               
                <View
                    style={styles.SearchBarContainer}
                >
                    <AntDesign name="search1" style={styles.IconStyle} />

                    <TextInput
                        style={styles.SearchBar}
                        placeholder="React"
                        value={searchQuery}
                        onChangeText={changeSearchQuery}
                        keyboardType='web-search'
                        returnKeyType='go'
                        onSubmitEditing={submitSearch}
                    />
                </View>
                {SearchReducer.length > 0 &&
                    <FlatList
                        data={SearchReducer}
                        keyExtractor={(item) => {
                            return item.etag
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item) => {
                            if (item.item.id.kind === 'youtube#channel') {

                                return <ChannelResults data={item} />
                            }
                            if (item.item.id.kind === 'youtube#video') {

                                return <VideoResults data={item} />
                            }
                        }}
                    />
                }


            </SafeAreaView>
        </View>
    )
}
