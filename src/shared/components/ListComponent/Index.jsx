import {FlatList, SectionList, Text, TouchableOpacity, View} from "react-native";
import useFetch from "../../../app/hooks/useFetch";
import {groupAlphabetBy} from "../../../utils/groupAlphabetBy";
import RenderHeader from "../../../screen/Menu/components/Header/Index";
import {useState} from "react";
import {ActionBar, ActionBarBody} from "../ActionBar/Index";
import {Icon} from "../Index";
import Lottie from "lottie-react-native";

export const ListComponent = (props) => {
    const [data, error, loading] = useFetch(props.service())
    const groupedItem = groupAlphabetBy(data?.data, props.by)
    const items = props.isIndexed ? groupedItem : data.data
    const [actionBarActive, setActionBarActive] = useState(false)
    const actionBarItem = [
        {
            text: 'Add menu', id: 1, route: 'Table', icon: 'md-fast-food'
        }, {text: 'Add table', id: 2, route: 'Menu', icon: 'md-list'}
    ]
    return (
        <View style={{width: '100%', height: '100%'}}>
            {
                loading && (
                    <Lottie source={require('../../../../assets/animation.json')} autoPlay loop/>
                )
            }
            {
                error && (
                    <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Error.. service unavailable</Text>
                    </View>
                )
            }
            {
                (!loading && !error) && props.isIndexed ? (
                    <View style={{width: '100%', height: '100%'}}>
                        <SectionList
                            sections={groupedItem}
                            renderItem={(data) => props.renderItem({data, ...props})}
                            renderSectionHeader={(data) => RenderHeader(data.section)}
                            keyExtractor={(item) => item?.id}
                        />
                    </View>
                ) : (
                    <View>
                        <FlatList data={items} renderItem={({item}) => props.renderItem(item)}/>
                    </View>
                )
            }
            <ActionBar isActive={actionBarActive} onPress={() => setActionBarActive(!actionBarActive)}>
                <ActionBarBody>
                    {
                        actionBarItem.map((item) => {
                            return (
                                <View style={{flexDirection: 'row', marginVertical: 15}} key={item.id}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            props.navigation.navigate(item.route)
                                            setActionBarActive(false)
                                        }}
                                        style={{flexDirection: 'row'}}
                                    >
                                        <Icon name={item.icon}/><Text style={{marginLeft: 5}}>{item.text}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ActionBarBody>
            </ActionBar>
        </View>
    )
}