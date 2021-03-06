import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert, Animated} from 'react-native';

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
    if(parseInt(this.state.seconds)-1<=0){
      Alert.alert(
        "What is log10?",
        "Choose the correct answer"
        [
          {
            text: "One",
            onPress: () => alert("Correct")
          },
          {
            text: "10",
            onPress: () => alert("Incorrect")
          },
          {
            text: "0",
            onPress: () => alert("Incorrect")
          }
        ]
      );
    }
    this.setState({
      //totalSeconds: parseInt(this.state.hours*3600)+parseInt(this.state.minutes*60)+parseInt(this.state.seconds),
      seconds:String(parseInt(this.state.seconds)-1),
    })
    //this.changeTimer(this.state.totalSeconds)
  }

  handleStop = () => {
    
  }

/*CURRENTLY VERY BUGGY UNDER EXPO CLI, BUT OPERATING*/
  /*changeTimer = (total) => {
    while(true){
      setTimeout(() => {
        if(this.state.minutes!=0 && this.state.seconds==0){
          this.setState({
            seconds:59,
            minutes:parseInt(this.state.minutes)-1;
          })
        }
        else if(this.state.hours!=0 && this.state.minutes==0){
          this.setState({
            minutes:59,
            hours:parseInt(this.state.hours)-1;
          })
        }
        this.setState({
          total:total-1,
        })
      }, 1000);
    }
  }
*/

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Surgit</Text>
        </View>

        <View style={styles.descContainer}>
          <Text style={styles.timeDisplay}>Select your timer. Make sure to choose the right answer to turn off the timer.</Text>
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

  descContainer: {
    height: deviceHeight/10.0,
    width: deviceWidth/1.10,
    marginTop: deviceHeight/200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10.0,
    backgroundColor: '#111111',
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
    fontStyle: "italic",
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

