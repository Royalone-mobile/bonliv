import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Resource } from './Resource';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class SideMenu extends Component<{}> {
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Resource.colors.colorGray }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='access-time' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Tidrapportera</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='work' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Mitt schema</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='attach-money' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Mina lonespecifikationer </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='local-hospital' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Se lediga behov</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Feather size={24} name='mail' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Konkakta ansvarig</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='person' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Min profil</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='edit' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Redigera profil</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
                        <Icon size={24} name='exit-to-app' style={{ color: Resource.colors.colorWhite }} />
                        <Text style={{ color: Resource.colors.colorWhite, marginLeft: 20 }}>Logga ut</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}