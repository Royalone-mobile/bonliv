import * as React from "react";
import { Text, View } from "react-native";
import { Resource } from './Resource';
import { connect } from 'react-redux';
import {loadPassports} from '../actions';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props { 
    loadPassports:any,
    loading:boolean,
    refreshing:boolean,
    loadingMore: boolean,
    passports: any[]
}

interface State {
    tab_position: number;
}

class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tab_position: 0,
        };
    }

    componentDidMount() {

    }

      
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <View style={{height:30, marginHorizontal:10, backgroundColor:Resource.colors.colorLightRed , marginTop:20}}>
                    <Text style={{color:Resource.colors.colorWhite, marginLeft:10}}>Vecka 35, 2018</Text>
                    </View>

                <Card style = {{ marginHorizontal:10, marginTop:10, paddingVertical:10}}>
                    <Card.Content style={{flexDirection:'row'}}>
                        <View>
                            <Title>Sunderby Sjukhus - Adelning BC</Title>
                            <Paragraph>Schemalagt 24h</Paragraph>
                        </View>
                        <View style={{justifyContent:'center', marginLeft:30}}>
                            <Icon size={24} name='edit' />
                        </View>
                    </Card.Content>
                </Card>

                <View style={{height:30, marginHorizontal:10, backgroundColor:Resource.colors.colorLightRed , marginTop:20}}>
                    <Text style={{color:Resource.colors.colorWhite, marginLeft:10}}>Vecka 35, 2018</Text>
                    </View>

                <Card style = {{ marginHorizontal:10, marginTop:10, paddingVertical:10}}>
                    <Card.Content style={{flexDirection:'row'}}>
                        <View>
                            <Title>Sunderby Sjukhus - Adelning BC</Title>
                            <Paragraph>Schemalagt 24h</Paragraph>
                        </View>
                        <View style={{justifyContent:'center', marginLeft:30}}>
                            <Icon size={24} name='edit' />
                        </View>
                    </Card.Content>
                </Card>

                <View style={{height:30, marginHorizontal:10, backgroundColor:Resource.colors.colorLightRed , marginTop:20}}>
                    <Text style={{color:Resource.colors.colorWhite, marginLeft:10}}>Vecka 35, 2018</Text>
                    </View>

                <Card style = {{ marginHorizontal:10, marginTop:10, paddingVertical:10}}>
                    <Card.Content style={{flexDirection:'row'}}>
                        <View>
                            <Title>Sunderby Sjukhus - Adelning BC</Title>
                            <Paragraph>Schemalagt 24h</Paragraph>
                        </View>
                        <View style={{justifyContent:'center', marginLeft:30}}>
                            <Icon size={24} name='edit' />
                        </View>
                    </Card.Content>
                </Card>

                <View style={{height:30, marginHorizontal:10, backgroundColor:Resource.colors.colorLightRed , marginTop:20}}>
                    <Text style={{color:Resource.colors.colorWhite, marginLeft:10}}>Vecka 35, 2018</Text>
                    </View>

                <Card style = {{ marginHorizontal:10, marginTop:10, paddingVertical:10}}>
                    <Card.Content style={{flexDirection:'row'}}>
                        <View>
                            <Title>Sunderby Sjukhus - Adelning BC</Title>
                            <Paragraph>Schemalagt 24h</Paragraph>
                        </View>
                        <View style={{justifyContent:'center', marginLeft:30}}>
                            <Icon size={24} name='edit' />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state:any) => {
    const {
      loading, refreshing, loadingMore, passports   
    } = state.home;
 
    return {
      loading,
      refreshing, 
      loadingMore,
      passports
    };
  };
  

export default connect(mapStateToProps, {
    loadPassports
})(Home);
