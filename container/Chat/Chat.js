import React, { PureComponent, Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Platform, ActivityIndicator, RefreshControl, ScrollView, Alert } from 'react-native'; //eslint-disable-line
import PropTypes from 'prop-types';
import loGet from 'lodash/get';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import moment from 'moment';

import { normalizeMin } from './Message';
import Images from './images';
import Message from './Message';
import AppStyles from './AppStyles';
import Colors from './colors';

const userId ='5e37ffbdf36a3271e372f9d5';
const messages = 
[
  {'tag':-1,'_id':'5e61cd92fc9a540013806931','message':'Mãi mãi là bao xa','conversation':'5e474e17f36a3271e372f9e2','from':'5e37ffbdf36a3271e372f9d5','createdAt':'2020-03-06T04:12:02.344Z','updatedAt':'2020-03-06T04:12:02.344Z','__v':0},
  {'tag':-1,'_id':'5e474e27f36a3271e372f9e4','message':'hâhhaa','conversation':'5e474e17f36a3271e372f9e2','from':'5e37ffbdf36a3271e372f9d5','createdAt':'2020-02-15T01:49:27.600Z','updatedAt':'2020-02-15T01:49:27.600Z','__v':0},
  {'tag':-1,'_id':'5e61cd92fc9a540013806931','message':'Tôi không sao cả hâhha','conversation':'5e474e17f36a3271e372f9e2','from':'5e37ffbdf36a3271e372f9d5','createdAt':'2020-03-06T04:12:02.344Z','updatedAt':'2020-03-06T04:12:02.344Z','__v':0},
  {'tag':-1,'_id':'5e474e27f36a3271e372f9e4','message':'Gà gà','conversation':'5e474e17f36a3271e372f9e2','from':'5e37ffbdf36a3271e372f9d5','createdAt':'2020-02-15T01:49:27.600Z','updatedAt':'2020-02-15T01:49:27.600Z','__v':0},
  {'tag':-1,'_id':'5e474e1ef36a3271e372f9e3','message':'Hi','conversation':'5e474e17f36a3271e372f9e2','from':'5e03364f20b01450f32c4ce6','createdAt':'2020-02-15T01:49:18.729Z','updatedAt':'2020-02-15T01:49:18.729Z','__v':0},
  {'tag':-1,'_id':'5e474e1ef36a3271e372f9e3','message':'Hi','conversation':'5e474e17f36a3271e372f9e2','from':'5e03364f20b01450f32c4ce6','createdAt':'2020-02-15T01:49:18.729Z','updatedAt':'2020-02-15T01:49:18.729Z','__v':0},
];
const conversation = 
{'isRamdom':true,
  'usersMembers':[
    {'facebookID':'495572051193164','active':true,'showAvatar':false,'findChat':false,'isRamdom':true,'flagFind':1,'intro':'meow','gender':'female','like':'any','_id':'5e03364f20b01450f32c4ce6','color':'rgb(228, 204, 203)','username':'495572051193164','fullname':'An Tran','avatar':'https://graph.facebook.com/495572051193164/picture?type=large','onlineAt':'2020-02-15T01:48:59.573Z','offlineAt':'2020-02-15T01:49:54.911Z','createdAt':'2019-12-25T10:13:35.764Z','updatedAt':'2020-02-15T01:49:54.911Z','__v':0},
    {'facebookID':'946412032367728','active':true,'showAvatar':false,'findChat':false,'isRamdom':true,'flagFind':1,'intro':'Hi bạn ^^','gender':'female','like':'any','_id':'5e37ffbdf36a3271e372f9d5','color':'rgb(248, 237, 203)','username':'946412032367728','fullname':'Trần Tùng','avatar':'https://graph.facebook.com/946412032367728/picture?type=large','onlineAt':'2020-04-16T10:06:20.307Z','offlineAt':'2020-04-16T10:06:18.993Z','createdAt':'2020-02-03T11:10:53.714Z','updatedAt':'2020-04-16T10:06:20.307Z','__v':0}],
  'countReply':2,'_id':'5e474e17f36a3271e372f9e2','createdAt':'2020-02-15T01:49:11.089Z',
  'updatedAt':'2020-03-06T04:12:02.348Z','__v':0,
  'lastMessage':
  {'tag':-1,'_id':'5e61cd92fc9a540013806931','message':'Hhaha','conversation':'5e474e17f36a3271e372f9e2','from':'5e37ffbdf36a3271e372f9d5','createdAt':'2020-03-06T04:12:02.344Z','updatedAt':'2020-03-06T04:12:02.344Z','__v':0},
};

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
    };
    this.time;
  }

  static propTypes = {
    onShowModal: PropTypes.func,
    onPressDeleteConversation: PropTypes.func,
    intro: PropTypes.string,
    onlineAt: PropTypes.any,
    offlineAt: PropTypes.any,
    isLoadsuccess: PropTypes.bool,
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ change: !this.state.change });
    }, 1000 * 60 * 2);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { onShowModal, onlineAt, offlineAt } = this.props;
    const online = (
      moment(onlineAt).valueOf() > moment(offlineAt).valueOf() ||
      moment().diff(moment(offlineAt), 'minute') <= 3
    );

    return (
      <View style={styles.viewHeader}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6} >
          <Image
            style={styles.imgBack}
            source={Images.arrowLeft} />
        </TouchableOpacity>
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 45,
        }}>
          <Text numberOfLines={1} style={[AppStyles.TextH4]}>Online {moment(offlineAt).fromNow()}</Text>
        </View>
       <>
          {online && <View
            style={styles.viewOnline}
          />}
          <TouchableOpacity
            onPress={onShowModal}
            style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Text numberOfLines={1} style={[AppStyles.TextH2B, styles.name]}> Hahaha</Text>
            </View>
          </TouchableOpacity>
        </>
      </View>
    );
  }
}

class Chat extends PureComponent {

  constructor(props) {
    super(props);
    this.state = ({
      text: '',
      convetsationId: '',
      isChat: false,
      isOpen: false,
    });
  }

  renderHeader = () => {
    const partner = loGet(conversation, ['partner'], {});
    const intro = loGet(partner, ['intro'], '');
    const { onlineAt, offlineAt } = partner;

    return (<Header
      isLoadsuccess={()=>{}}
      onShowModal={() => this.setState({ isOpen: true })}
      onPressDeleteConversation={()=>{}}
      onlineAt={onlineAt}
      offlineAt={offlineAt}
      intro={intro} />);
  }

  renderMessage = ({ item, index }) => {

    const top = loGet(messages, [index + 1, 'from'], '');
    const nomal = loGet(item, ['from'], '');
    const bottom = loGet(messages, [index - 1, 'from'], '');

    const sefl = userId === loGet(item, ['from'], '');
    const { message } = item;
    const topHightlight = top === nomal;
    const bottomHightlight = bottom === nomal;

    return <Message sefl={sefl} message={message} topHightlight={topHightlight} bottomHightlight={bottomHightlight} />;
  }


  renderBoxChat = () => {
    const { isChat } = this.state;
    return (
      <View style={styles.viewSend}>
        <TextInput
          numberOfLines={1}
          style={[AppStyles.TextH3, styles.inputText]}
          placeholder={'write...'}
          placeholderTextColor={Colors.primary}
          selectionColor={Colors.primary}
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableOpacity
          activeOpacity={isChat ? 1 : 0.6}
          onPress={()=>{}} >
          <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
            {isChat ?
              <ActivityIndicator color={Colors.primary} /> :
              <Image
                style={styles.imgSend}
                source={Images.send} />}
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: normalizeMin(500), height: 20, backgroundColor: 'white' }} />
        {this.renderHeader()}
        <View style={styles.containerFlalist} >
          <FlatList
            inverted
            ref={ref => this.scrollView = ref}
            style={styles.scroll}
            data={messages}
            renderItem={this.renderMessage}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={()=>{}}
                titleColor={Colors.primary}
                tintColor={Colors.primary}
                colors={[Colors.primary, Colors.third, '#ff6600']}
              />
            }
            ListHeaderComponent={() => <View style={{ height: 5 }} />}
            keyExtractor={(item) => item._id}
            onEndReached={()=>{}}
            initialNumToRender={5}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              (<>
                <View style={{height:5}} />
                {false &&<View style={{ marginTop: 5 }} >
                  <ActivityIndicator color={Colors.primary} />
                </View>}
                </>)
            }
          />
        </View>

        {this.renderBoxChat()}
        {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
      </View>

    );
  }
}

Chat.propTypes = {
};


export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.background,
  },
  viewHeader: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  name: {
    color: Colors.primary,
  },
  imgBack: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 5,
    tintColor: Colors.primary,
  },
  imgreCycle: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 5,
    tintColor: Colors.primary,
  },
  viewSend: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 5,
    color: Colors.primary,
    paddingVertical: 0,
  },
  imgSend: {
    width: 35,
    height: 35,
    marginLeft: 5,
    tintColor: Colors.primary,
  },
  viewOnline: {
    width: 16, height: 16,
    backgroundColor: '#42B729',
    borderRadius: 8, marginRight: 10,
  },
  viewModal: {
    backgroundColor: 'white',
    padding: 15, marginHorizontal: 15, marginBottom: 15,
    borderRadius: 5,
    width: 'auto',
    height: (normalizeMin(500) - 30) * 1.3,
    // borderRadius: 10,
  },
  imageClose: {
    height: 30, width: 30, resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginLeft: 10,
    tintColor: Colors.primary,
  },
  containerFlalist: { flex: 1, backgroundColor: '#f4f4f4' },
  viewChat: {
    maxWidth: normalizeMin(320),
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 18,
    minHeight: 34, justifyContent: 'center', alignItems: 'center',
  },
});