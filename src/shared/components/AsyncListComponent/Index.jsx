import {FlatList, Pressable, SectionList, Text, View} from "react-native";
import style from "../../../screen/Menu/style";
import useFetch from "../../../app/hooks/useFetch";
import {groupAlphabetBy} from "../../../utils/groupAlphabetBy";
import RenderHeader from "../../../screen/Menu/components/Header/Index";
import {useContext, useState} from "react";
import {UserNameContext} from "../../../context/UserNameContext";

const ToolTip = ({isEnabled, onClick}) => {
    return (
        <View style={{position: 'absolute', bottom: -35, right: 0}}>
            {isEnabled && (
                <Pressable
                    style={{backgroundColor: '#ec1212', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 50}}
                    onPress={onClick}><Text style={{color: '#ffffff'}}>Logout</Text></Pressable>
            )}
        </View>
    )
}
const Header = (props) => {
    const [enabled, setEnable] = useState()
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15,marginBottom:15}}>
            <Text style={[style.poppins, style["header-1"]]}>
                {props.header}
            </Text>
            <Pressable onPress={() => setEnable(!enabled)}>
                <Text>Hallo, {props.userName}</Text>
                <ToolTip isEnabled={enabled}
                         onClick={() => console.log('ok')}/>
            </Pressable>
        </View>
    );
}

const ListComponent = (props) => {
    const {getUserName} = useContext(UserNameContext)
    const [data, error, loading] = useFetch(props.service())
    const groupedItem = groupAlphabetBy(data?.data, props.by)
    const items = props.isIndexed ? groupedItem : data.data
    return (
        <View style={{width: '100%', height: '100%'}}>
            <Header
                header={props.header}
                userName={getUserName()}/>
            {
                loading && (
                    <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[style.poppins]}>Loading...</Text>
                    </View>
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
                (!loading && !error) && props.isIndexed ? (<View style={{width: '100%', paddingHorizontal: 15}}>
                    <SectionList
                        sections={groupedItem}
                        renderItem={(data) => props.renderItem(data)}
                        renderSectionHeader={(data) => RenderHeader(data.section)}
                        keyExtractor={(item) => item?.id}
                    />
                </View>) : (
                    <View>
                        <FlatList data={items} renderItem={({item}) => props.renderItem(item)}/>
                    </View>
                )
            }
        </View>
    )
}
export default ListComponent