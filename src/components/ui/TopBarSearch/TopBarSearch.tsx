import React, {useState} from 'react';
import {Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Styles} from "./Styles";
import {indexStyles, indexStyleVariables} from "../../../materials/styles";
import StocksServices from "../../../services/stockServices/StocksServices";
import {ITickerDescription} from "../../../types/ITickerDescription";
import SearchItem from "./Results/SearchItem";
import {useNavigation} from "@react-navigation/native";
import {IHomeNavigationProps} from "../../../types/IHomeStackParams";
import TickerPage from "../../../pages/Tabs/SharedStack/TickerPage/TickerPage";

const TopBarSearch = () => {


    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([] as ITickerDescription[])
    const [searchIsResults, setSearchIsResults] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [timer, setTimer] = useState<any>()


    const navigator = useNavigation<IHomeNavigationProps>()

    const reset = () => {
        setSearchResults([])
        setSearchIsResults(false)
        setIsFetching(false)
        setSearchInput("")
    }

    const inputSearch = (val: string) => {

        setSearchInput(val)
        clearTimeout(timer)
        if (val.length < 1) {
            reset()
            return
        }

        const newTimer = setTimeout(async () => {
            setIsFetching(true)
            const resp = await StocksServices.GetTickerSearch(val)
            if (resp.data.length < 1) {
                setSearchIsResults(false)
            } else {
                setSearchIsResults(true)
            }
            setSearchResults(resp.data)
            setIsFetching(false)
        }, 400)
        setTimer(newTimer)
    }

    const handleTickerClick = (ticker: string) => {
        navigator.navigate("TickerPage", {ticker: ticker})
    }

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.input}
                placeholder={"Search"}
                placeholderTextColor={indexStyleVariables.secondColor}
                selectionColor={"white"}
                autoCorrect={false}
                value={searchInput}
                onChangeText={inputSearch}
            />

            {searchIsResults ?
                <>

                    {isFetching ?
                        <Text style={[Styles.fetchingText, indexStyles.font]}>
                            fetching
                        </Text> :
                        <TouchableOpacity
                            onPress={() => {
                                Keyboard.dismiss()
                                reset()
                            }}
                            style={Styles.cancelTextContainer}
                        >
                            <Text
                                style={[indexStyles.font, Styles.cancelText]}

                            >
                                cancel
                            </Text>
                        </TouchableOpacity>
                    }

                    <ScrollView style={Styles.resultsContainer}>
                        {
                            searchResults.map((val, index) => {
                                return (
                                    <SearchItem
                                        key={val.id}
                                        ticker={val.ticker}
                                        company_name={val.company_name}
                                        exchange={val.exchange}
                                        id={val.id}
                                        index={index}
                                        onClick={
                                            () => handleTickerClick(val.ticker)
                                        }

                                    />
                                )
                            })
                        }
                    </ScrollView>
                </>

                :
                null
            }
        </View>
    );
};

export default TopBarSearch;