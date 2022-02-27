import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, onPress, Alert} from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class main extends React.Component {
  state = {
    hours: "",
    minutes: "",
    seconds: "",
    totalSeconds: 0,
  }
  
  handleStart = () => {
    this.setState({
      totalSeconds: parseInt(this.state.hours*3600)+parseInt(this.state.minutes*60)+parseInt(this.state.seconds),
      seconds:String(parseInt(this.state.seconds)-1),
    }),
    this.changeTimer(this.state.totalSeconds)
  }

  handleStop = () => {
    alert("");
  }

  changeTimer = (total) => {
    while(true){
      setTimeout(() => {
        if(this.state.total==0)
        this.setState({
          total:total-1,
        })
      }, 1000);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Surgit</Text>
        </View>
        <View style={styles.timerContainerTop}>
          <TextInput
            style={styles.timeDisplay}
            placeholder="hrs"
            placeholderTextColor="#808080"
            keyboardType="numeric"
            onChangeText={(hours) => this.setState({hours})}
            value={this.state.hours}
          />
          <Text style={styles.timeDisplay}>:</Text>
          <TextInput
            style={styles.timeDisplay}
            placeholder="min"
            placeholderTextColor="#808080"
            keyboardType="numeric"
            onChangeText={(minutes) => this.setState({minutes})}
            value={this.state.minutes}
          />
          <Text style={styles.timeDisplay}>:</Text>
          <TextInput
            style={styles.timeDisplay}
            placeholder="sec"
            placeholderTextColor="#808080"
            keyboardType="numeric"
            onChangeText={(seconds) => this.setState({seconds})}
            value={this.state.seconds}
          />
        </View>

        <View style={styles.timerContainerBottom}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={this.handleStart}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.stopButton}
            onPress={this.handleStop}
          >
            <Text style={styles.buttonText}>STOP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  headerContainer: {
    height: deviceHeight/10,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  headerText: {
    fontSize: deviceHeight/25.0,
    marginTop: deviceHeight/25.0,
    color: '#fff',
  },  

  timerContainerTop: {
    height: deviceHeight/10.0,
    width: deviceWidth/1.10,
    marginTop: deviceHeight/50.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 10.0,
    borderTopRightRadius: 10.0,
    backgroundColor: '#111111',
  },
  timeDisplay: {
    fontSize: deviceHeight/40.0,
    color: '#fff',
  },

  timerContainerBottom: {
    height: deviceHeight/15.0,
    width: deviceWidth/1.10,
    marginTop: deviceHeight/200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 10.0,
    borderBottomRightRadius: 10.0,
    backgroundColor: '#111111',
  }, 
  startButton: {
    height: deviceHeight/30,
    width: deviceWidth/5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: "green",
  },
  stopButton: {
    height: deviceHeight/30,
    width: deviceWidth/5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: deviceHeight/60,
    color: 'white',
  },
});

