// 组件列表
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  View,
  Alert,
  Image,
  Modal,
  Platform,
  ListView,
  FlatList,
  StatusBar,
  TextInput,
  ScrollView,
  StyleSheet,
  PixelRatio,
  Dimensions,
  AppRegistry,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

// import img
import { Images } from '../resource/index'
// theme color
import { themeColor } from '../themes/index'
// Get the width and height of the current device
const { width, height } = Dimensions.get('window')

class InformationList extends Component {
  static propTypes = {
    style:PropTypes.object,
    avatarR:PropTypes.number || PropTypes.string,
    avatarUri:PropTypes.string,
    title:PropTypes.number || PropTypes.string,
    subTitle:PropTypes.number || PropTypes.string,
    contentStyle:PropTypes.object,
    content:PropTypes.number || PropTypes.string,
    imgArr:PropTypes.array,
    imgArrStyle:PropTypes.object,
    bottomList:PropTypes.array,
    contentFun:PropTypes.func
  }
  static defaultProps = {
    style:{
      width:'100%',
      backgroundColor:'#F2F2F2',
      padding:16
    },
    avatarR:60,
    avatarUri:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
    title:'Article Title',
    subTitle:'2017-12-20 9:30',
    contentStyle:{
      fontSize:14,
      color:'#333',
      lineHeight:22,
      letterSpacing:1,
      marginBottom:10,
      marginTop:10
    },
    content:'UI即User Interface（用户界面）的简称。泛指用户的操作界面，包含移动APP，网页，智能穿戴设备等。UI设计主要指界面的样式，美观程度。而使用上，对软件的人机交互、操作逻辑、界面美观的整体设计则是同样重要的另一个门道。',
    imgArr:[
      'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
      'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
      'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
      'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
      'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg'
    ],
    imgArrStyle:{
      width:'30%',
      height:width*.2,
      marginRight:'3%',
      marginBottom:'3%'
    },
    bottomList:[
      {
        image:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        count:'333'
      },
      {
        image:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        count:'666'
      },
      {
        image:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        count:'999'
      },
    ],
    contentFun:()=>{
      Alert.alert('点我干嘛！')
    }
  }
  
  render() {
    const { style, avatarR, avatarUri, title, subTitle, contentStyle, content, imgArr, imgArrStyle, bottomList, contentFun} = this.props
    return (
      <View style={style}>
        {/* top */}
        <View
          style={{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
          }}>
          {/* avatar */}
          <Image
            resizeMode='cover'
            style={{marginRight:6,width:avatarR,height:avatarR,borderRadius:avatarR*.5}}
            source={{uri:avatarUri}}/>
          {/* user */}
          <View 
            style={{
              height:avatarR,
              justifyContent:'center',
              alignItems:'flex-start'}}>
            <Text style={{fontSize:18,color:'#333',lineHeight:22,marginBottom:6}}>{title}</Text>
            <Text style={{fontSize:14,color:'#666',lineHeight:22}}>{subTitle}</Text>
          </View>
        </View>
        {/* content */}
        <View>
          <TouchableOpacity
            onPress={()=>{
              contentFun()
            }}>
            <Text style={contentStyle}>{content}</Text>
          </TouchableOpacity>
        </View>
        {/* image */}
        <View
          style={{
            width:'100%',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'flex-start',
            alignItems:'center'
          }}>
          {
            imgArr.map((i,n)=>{
              return(
                <Image
                  resizeMode='cover'
                  style={imgArrStyle}
                  source={{uri:i}}/>
              )
            })
          }
        </View>
        {/* bottom */}
        <View 
          style={{
            flexDirection:'row',
            alignItems:'center',
            marginTop:10,
            marginBottom:10,
            justifyContent:'flex-start'}}>
          {
            bottomList.map((i,n)=>{
              return(
                <View 
                  style={{
                    flexDirection:'row',
                    marginRight:20,
                    justifyContent:'space-between',
                    alignItems:'center'}}>
                  <Image
                    resizeMode='cover'
                    style={{width:10,height:10}}
                    source={{uri:i.image}}/>
                  <Text style={{fontSize:14,marginLeft:6}}>{i.count}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

class CommentList extends Component {
  static propTypes = {
    contentStyle:PropTypes.object,
    avatarStyle:PropTypes.object,
    avatarUri:PropTypes.string,
    userName:PropTypes.string||PropTypes.number,
    commentContent:PropTypes.string||PropTypes.number,
    zFun:PropTypes.func
  }

  static defaultProps = {
    contentStyle:{
      padding:16,
      width:'100%',
      backgroundColor:'#F2F2F2'
    },
    avatarStyle:{
      width:40,
      height:40,
      borderRadius:20
    },
    avatarUri:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
    userName:'Article Title',
    commentContent:'UI的世界丰富多彩，等待你去探索和发现！UI的世界丰富多彩，等待你去探索和发现！UI的世界丰富多彩，等待你去探索和发现！',
    zFun:()=>{
      Alert.alert('赞一个！')
    }

  } 

  render(){
    const { contentStyle, avatarStyle, avatarUri, userName, commentContent, zFun } = this.props
    return(
      <View style={contentStyle}>
        <View 
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
          }}>
          {/* left */}
          <View 
            style={{
              flexDirection:'row',
              alignItems:'center'
            }}>
            <Image
              resizeMode='cover'
              style={avatarStyle}
              source={{uri:avatarUri}}/>
            <Text style={{marginLeft:12}}>{userName}</Text>
          </View>
          {/* right */}
          <TouchableOpacity 
            onPress={()=>{
              zFun()
            }}
            style={{
              flexDirection:'row',
              alignItems:'center'
            }}>
            <Image
              resizeMode='cover'
              style={{width:20,height:20}}
              source={Images.z1}/>
            <Text style={{marginLeft:12}}>{8}</Text>
          </TouchableOpacity>
        </View>
        {/* content */}
        <View 
          style={{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
          }}>
          <View style={avatarStyle}></View>
          <View 
            style={{
              width:width-72,
              padding:12,
              marginTop:4,
              marginBottom:4
            }}>
            <Text style={{lineHeight:22,letterSpacing:1}}>{commentContent}</Text>
          </View>
        </View>
        {/* bottom time */}
        <View style={{flexDirection:'row'}}>
          <View style={avatarStyle}></View>
          <View style={{padding:12}}>
            <Text style={{color:'#666'}}>2019-02-22</Text>
          </View>
        </View>
      </View>
    )
  }
}

class HomeTab extends Component {
  static propTypes = {
    contentStyle:PropTypes.object,
    itemStyle:PropTypes.object,
    itemList:PropTypes.array,
    tabFun:PropTypes.func
  }

  static defaultProps = {
    contentStyle:{
      padding:16,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'#F2F2F2'
    },
    itemStyle:{
      width:60,
      height:60,
      borderRadius:30,
      overflow:'hidden'
    },
    itemList:[
      {
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'TAB1'
      },
      {
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'TAB2'
      },
      {
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'TAB3'
      },
      {
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'TAB4'
      }
    ],
    tabFun:()=>{
      Alert.alert('分类信息')
    }
  }

  render(){
    const { contentStyle, itemStyle, itemList, tabFun } = this.props
    return(
      <View style={contentStyle}>
        {
          itemList.map((item,index)=>{
            return(
              <TouchableOpacity 
                onPress={()=>{
                  tabFun()
                }}
                style={{justifyContent:'center',alignItems:'center'}}>
                <View style={itemStyle}>
                  <Image
                    resizeMode='cover'
                    style={{width:'100%',height:'100%'}}
                    source={{uri:item.img}}/>
                </View>
                <View>
                  <Text 
                    style={{
                      marginTop:6,
                      fontSize:14,
                      color:'#666'
                    }}>
                  {item.title}
                </Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

}

class CommodityList extends Component{
  static propTypes = {
    contentStyle:PropTypes.object,
    title:PropTypes.string||PropTypes.number,
    imguri:PropTypes.string,
    score:PropTypes.number,
    subTitle:PropTypes.string,
    price:PropTypes.string

  }

  static defaultProps = {
    contentStyle:{
      padding:16,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    title:'UI一个充满着神秘色彩的学科，本书通过全面的讲解，带你走进一个奇幻的世界！',
    imguri:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
    score:3,
    subTitle:'3000+ 购买',
    price:'$ 200.00'

  }

  render(){
    const { contentStyle, imguri, title, subTitle, score, price } = this.props
    return(
      <View 
        style={contentStyle}>
        <Image
          resizeMode='cover'
          style={{width:width*.3,height:width*.26}}
          source={{uri:imguri}}/>
        <View 
          style={{
            width:width*.7-50,
            height:width*.26,
            justifyContent:'space-between',
            alignItems:'flex-start'
          }}>
          <Text 
            numberOfLines={2}
            style={{
              fontSize:16,
              color:'#333',
              lineHeight:20,
              letterSpacing:1,
              fontWeight:'600'}}>
            {title}
          </Text>
          {/* bottom */}
          <View
            style={{
              width:'100%',
              flexDirection:'row',
              alignItems:'flex-end',
              justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize:13,color:'#666',lineHeight:22,marginBottom:10}}>
                {subTitle}
              </Text>
              <Text style={{fontSize:14,color:'#333'}}>
                {
                  [1,2,3,4,5].map((i,n)=>{
                    return(
                      <Text style={{color:n<score?'#f66':'#333'}}>★</Text>
                    )
                  })
                } {score}.0
              </Text>
            </View>
            <Text style={{fontSize:18,color:'#333',fontWeight:'600'}}>{price}</Text>
          </View>
        </View>
      </View>
    )
  }
}

class ScrollingList extends Component{
  static propTypes = {
    contentStyle:PropTypes.object,
    DataArr:PropTypes.array,
    itemStyle:PropTypes.object,
    itemFun:PropTypes.func
  }
  static defaultProps = {
    contentStyle:{
      width:'100%',
      padding:16
    },
    DataArr:[
      {
        key: 0,
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'课程列表信息展示中心',
        subTitle:'当前课程有三大类型'
      }, 
      {
        key: 1,
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'课程列表信息展示中心',
        subTitle:'当前课程有三大类型'
      }, 
      {
        key: 2,
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'课程列表信息展示中心',
        subTitle:'当前课程有三大类型'
      }, 
      {
        key: 3,
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'课程列表信息展示中心',
        subTitle:'当前课程有三大类型'
      }, 
      {
        key: 4,
        img:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg',
        title:'课程列表信息展示中心',
        subTitle:'当前课程有三大类型'
      }
    ],
    itemStyle:{
      marginRight:10,
      width:width*.3,
      height:width*.32
    },
    itemFun:()=>{
      Alert.alert('详情页面!')
    }
  }

  render(){
    const { contentStyle, DataArr, itemStyle, itemFun } = this.props
    return(
      <View style={contentStyle}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={DataArr}
          renderItem={({item}) => {
            return(
              <View style={itemStyle}>
                {/* Img */}
                <TouchableOpacity
                  style={{width:'100%',height:'70%'}}
                  onPress={()=>{
                    itemFun()
                  }}> 
                  <Image
                    resizeMode='cover'
                    style={{width:'100%',height:'100%'}}
                    source={{uri:item.img}}/>  
                </TouchableOpacity> 
                {/* title */}
                <View 
                  style={{
                    justifyContent:'center',alignItems:'flex-start',
                    width:'100%',height:'30%'}}>
                  <Text 
                    numberOfLines={1}
                    style={{fontSize:14,color:'#333',fontWeight:'600',marginBottom:3}}>
                    {item.title}
                  </Text>
                  <Text 
                    numberOfLines={1}
                    style={{fontSize:12,color:'#666'}}>
                    {item.subTitle}
                  </Text>
                </View>
              </View>
            )
          }}/>
      </View>
    )
  }
}

class LoginPage extends Component{
  constructor(props){
    super(props)
    this.state={
      username:undefined,
      password:undefined
    }
  }

  static propTypes = {
    bgUri:PropTypes.string,
    logoUri:PropTypes.string,
    contentStyle:PropTypes.object,
    loginIn:PropTypes.func,
    agreement:PropTypes.func,
    register:PropTypes.func
  }

  static defaultProps = {
    bgUri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=179629761,1449053634&fm=26&gp=0.jpg',
    logoUri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036044083,1484439347&fm=200&gp=0.jpg',
    contentStyle:{
      flex:1,
      backgroundColor:'#F2F2F2',
      justifyContent:'center',
      alignItems:'center',
      position:'relative'
    },
    loginIn:(a,b)=>{
      Alert.alert(a+b)
    },
    agreement:()=>{
      Alert.alert('用户协议')
    },
    register:()=>{
      Alert.alert('用户注册')
    }
  }

  submit = () => {
    const { username, password } = this.state
    if(username===undefined||username===''){
      return Alert.alert('请输入用户名称')
    }
    if(password===undefined||password===''){
      return Alert.alert('请输入用户密码')
    }
    return true
  }

  render(){
    const { contentStyle, loginIn, agreement, register, logoUri, bgUri } = this.props
    const { username, password } = this.state
    return(
      <View style={contentStyle}>
        <Image  
          blurRadius={0}
          resizeMode='cover'
          style={{width:'100%',height:'100%',position:'absolute'}}
          source={{uri:bgUri}}/>
        <Image
          resizeMode='cover'
          style={{position:'absolute',width:80,height:80,borderRadius:40,top:height*.16}}
          source={{uri:logoUri}}/>
        <View 
          style={{
            width:'80%'
          }}>
          {/* user */}
          <View 
            style={{
              width:'100%',
              height:40,
              flexDirection:'row',
              alignItems:'center',
              marginBottom:20,
              justifyContent:'space-between',
              backgroundColor:'rgba(256,256,256,.8)'}}>
            <View 
              style={{
                width:'12%',
                justifyContent:'center',
                alignItems:'center'
              }}>
              <Image
                resizeMode='cover'
                style={{width:20,height:20}}
                source={Images.user}/>
            </View>
            <TextInput
              onChangeText={(text)=>{
                this.setState({username:text})
              }}
              style={{width:'88%'}}
              placeholder='请输入用户名称'/>
          </View>
          {/* pass */}
          <View 
            style={{
              width:'100%',
              height:40,
              flexDirection:'row',
              alignItems:'center',
              marginBottom:20,
              justifyContent:'space-between',
              backgroundColor:'rgba(256,256,256,.8)'}}>
            <View 
              style={{
                width:'12%',
                justifyContent:'center',
                alignItems:'center'
              }}>
              <Image
                resizeMode='cover'
                style={{width:20,height:20}}
                source={Images.pass}/>
            </View>
            <TextInput
              onChangeText={(text)=>{
                this.setState({
                  password:text
                })
              }}
              secureTextEntry={true}
              style={{width:'88%'}}
              placeholder='请输入用户密码'/>
          </View>
          {/* submit */}
          <TouchableOpacity
            onPress={()=>{
              if(this.submit()){
                loginIn(username,password)
              }
            }}
            style={{
              width:'100%',
              height:40,
              justifyContent:'center',
              alignItems:'center',
              marginBottom:20,
              backgroundColor:themeColor.dominantColor
            }}>
            <Text style={{fontSize:16,color:'#fff',fontWeight:'600'}}>登录</Text>
          </TouchableOpacity>
          {/* 更多/注册账号 */}
          <View 
            style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              width:'100%',
            }}>
            <TouchableOpacity
              onPress={()=>{
                agreement()
              }}>
              <Text style={{color:themeColor.dominantColor}}>用户协议及须知</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                register()
              }}>
              <Text style={{color:themeColor.dominantColor}}>没有账号，去注册</Text>
            </TouchableOpacity>
          </View>
          {/* 调整占位 */}
          <View style={{width:'100%',height:height*.1}}></View>
        </View>
      </View>
    )
  }
}

class PersonalPage extends Component{
  static propTypes = {
    contentStyle:PropTypes.object,
    editFun:PropTypes.func,
    listItem:PropTypes.array,
    islogin:PropTypes.bool,
    loginOut:PropTypes.func
  }

  static defaultProps = {
    contentStyle:{
      flex:1,
      backgroundColor:'#F2F2F2',
    },
    editFun:()=>{
      Alert.alert('编辑用户信息！')
    },
    listItem:[
      {
        img:Images.star,
        title:'我的收藏',
        func:()=>{
          Alert.alert('1')
        }
      },
      {
        img:Images.star,
        title:'我的作品',
        func:()=>{
          Alert.alert('2')
        }
      },
      {
        img:Images.star,
        title:'我的订单',
        func:()=>{
          Alert.alert('3')
        }
      },
      {
        img:Images.star,
        title:'个人设置',
        func:()=>{
          Alert.alert('4')
        }
      },
      {
        img:Images.star,
        title:'关于我们',
        func:()=>{
          Alert.alert('5')
        }
      },
    ],
    islogin:true,
    loginOut:()=>{
      Alert.alert('退出登录')
    }
  }

  render(){
    const { contentStyle, editFun, listItem, islogin, loginOut } = this.props
    return(
      <View style={contentStyle}>
        <View 
          style={{
            width:'100%',
            height:height*.24,
            padding:16,
            backgroundColor:'#fff',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderBottomColor:'#ccc',
            borderBottomWidth:10,
          }}>
          <View 
            style={{
              flexDirection:'row',
              justifyContent:'flex-start',
              alignItems:'center'
            }}>
            <Image
              resizeMode='cover'
              style={{width:80,height:80,borderRadius:40}}
              source={{uri:'http://www.jituwang.com/uploads/allimg/150414/258777-15041412250367.jpg'}}/>
            <View 
              style={{
                width:width*.5,
                justifyContent:'center',
                alignItems:'flex-start',
                height:80,
                paddingLeft:12
              }}>
              <Text 
                style={{
                  fontSize:20,
                  fontWeight:'600',
                  color:'#333',
                  letterSpacing:1,
                  marginBottom:6
                }}>
                用户名称
              </Text>
              <Text
                style={{
                  color:'#666',
                  letterSpacing:1
                }}>用户信息简介 </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={()=>{
              editFun()
            }} 
            style={{
              justifyContent:'center',
              alignItems:'center',
              width:'22%',height:80}}>
            <Image
              resizeMode='cover'
              style={{width:18,height:18}}
              source={Images.right}/>
          </TouchableOpacity>
        </View>
        {/* list */}
        <View 
          style={{
            padding:16,
            width:'100%',
          }}>
          {
            listItem.map((i,n)=>{
              return(
                <TouchableOpacity
                  onPress={()=>{
                    (i.func)()
                  }} 
                  style={{
                    width:'100%',
                    backgroundColor:'#fff',
                    padding:12,
                    height:60,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginBottom:1
                  }}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                      resizeMode='cover'
                      style={{width:20,height:20,marginRight:6}}
                      source={i.img}/>
                    <Text style={{fontSize:16,lineHeight:20}}>{i.title}</Text>
                  </View>
                  <Image
                    resizeMode='cover'
                    style={{width:16,height:16}}
                    source={Images.right}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
        {/* loginout */}
        <View 
          style={{
            padding:16,
            width:'100%',
            overflow:'hidden',
            height:islogin?80:0,
          }}>
          <TouchableOpacity 
            onPress={()=>{
              loginOut()
            }}
            style={{
              width:'100%',
              height:'100%',
              backgroundColor:'#fff',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <Text style={{fontSize:16,color:themeColor.dominantColor}}>退出登录</Text>  
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class Label extends Component{
  static propTypes = {
    contentStyle:PropTypes.object,
    itemStyle:PropTypes.object,
    labelList:PropTypes.array
  }

  static defaultProps = {
    contentStyle:{
      width:'100%',
      padding:16,
      flexDirection:'row',
      justifyContent:'flex-start',
      flexWrap:'wrap',
      alignItems:'center'
    },
    itemStyle:{
      justifyContent:'center',
      alignItems:'center',
      padding:6,
      paddingLeft:12,
      borderRadius:12,
      paddingRight:12,
      marginRight:12,
      marginBottom:12,
      backgroundColor:'#ccc'
    },
    labelList:[
      {
        title:'五险一金'
      },
      {
        title:'餐补'
      },
      {
        title:'年假'
      },
      {
        title:'交通便利'
      },
      {
        title:'饭补'
      },
      {
        title:'五险一金'
      },
      {
        title:'餐补'
      },
      {
        title:'年假'
      },
      {
        title:'交通便利'
      }
    ]

  }

  render(){
    const { contentStyle, itemStyle, labelList } = this.props
    return(
      <View style={contentStyle}>
        {
          labelList.map((i,n)=>{
            return(
              <View style={itemStyle}>
                <Text style={{fontSize:12,color:'#333'}}>{i.title}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

class Progress extends Component{
  static propTypes = {
    contentStyle:PropTypes.object,
    title:PropTypes.string||PropTypes.number,
    num:PropTypes.number
  }

  static defaultProps = {
    contentStyle:{
      width:'100%',
      padding:16,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    title:'数学函数',
    num:.6

  }

  render(){
    const { contentStyle, title, num } = this.props
     return(
      <View style={contentStyle}>
        <Text>{title}:</Text>
        <View 
          style={{
            justifyContent:'center',
            alignItems:'center',
            position:'relative',
            marginLeft:6
          }}>
          <View 
            style={{
              justifyContent:'center',
              alignItems:'center',
              width:width*.6,
              height:12,
              borderRadius:6,
              overflow:'hidden',
              backgroundColor:'rgba(153,153,153,.3)'
            }}>
            <View 
              style={{
                width:num*width*.6,
                height:'100%',
                backgroundColor:'#f66',
                position:'absolute',
                left:0
              }}>
            </View>
            {/* progress */}
            <View 
              style={{
                height:12,
                position:'absolute'
              }}>
              <Text 
                style={{
                  fontSize:10,
                  color:themeColor.dominantColor
                }}>
                {`${num*100}/${100}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class Popup extends Component{
  static PropTypes = {
    isShow:PropTypes.bool,
    isTransparent:PropTypes.bool,
    title:PropTypes.string||PropTypes.number,
    content:PropTypes.string||PropTypes.number,
    trueFun:PropTypes.func,
    falseFun:PropTypes.func
  }

  static defaultProps = {
    isShow:true,
    isTransparent:true,
    title:'内容标题',
    content:'我是需要显示的提示信息，根据提示选择指定的操作，确认或者取消操作!',
    trueFun:()=>{
      Alert.alert('确定操作！')
    },
    falseFun:()=>{
      Alert.alert('取消操作！')
    }
  }

  render(){
    const { isShow, isTransparent, title, content, trueFun, falseFun } = this.props
    return(
      <View>
        <Modal
          transparent={isTransparent}
          visible={isShow}>
          <View 
            style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'rgba(0,0,0,.3)'}}>
            <View
              style={{
                width:'80%',
                height:height*.3,
                borderRadius:6,
                padding:16,
                alignItems:'center',
                justifyContent:'flex-start',
                backgroundColor:'#fff'
              }}>
              <Text style={{fontSize:20,fontWeight:'600',letterSpacing:1}}>{title}</Text>
              <View 
                style={{
                  width:'100%',
                  height:120,
                  marginTop:20,
                  marginBottom:20,
                  backgroundColor:'#F2F2F2',
                  padding:6
                }}>
                <Text style={{fontSize:14,color:'#333',lineHeight:22,letterSpacing:1}}>{content}</Text>
              </View>
              <View 
                style={{
                  width:'100%',
                  height:40,
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center'}}>
                <TouchableOpacity 
                  onPress={()=>{
                    trueFun()
                  }}
                  style={{
                    width:'40%',
                    height:40,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:themeColor.dominantColor
                  }}>
                  <Text style={{fontSize:16,color:'#fff',fontWeight:'600',letterSpacing:1}}>确定</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{
                    falseFun()
                  }}
                  style={{
                    width:'40%',
                    height:40,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:themeColor.dominantColor
                  }}>
                  <Text style={{fontSize:16,color:'#fff',fontWeight:'600',letterSpacing:1}}>取消</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
} 

export {
  InformationList,
  CommentList,
  HomeTab,
  CommodityList,
  ScrollingList,
  LoginPage,
  PersonalPage,
  Label,
  Progress,
  Popup

}

const styles = StyleSheet.create({

})