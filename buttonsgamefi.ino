#include <Keyboard.h>
#define axis_X 2
#define axis_Y 3
#define RedAnswerOne    2
#define YellowAnswerTwo  3
#define BlueAnswerThree    4
#define GreenAnswerFour  5
#define RedAnswerOne2    6
#define YellowAnswerTwo2  7                                           
#define BlueAnswerThree2   8
#define GreenAnswerFour2  9
void setup() {
    pinMode(RedAnswerOne,INPUT_PULLUP);
  pinMode(YellowAnswerTwo,INPUT_PULLUP);
  pinMode(BlueAnswerThree  ,INPUT_PULLUP);
  pinMode(GreenAnswerFour,INPUT_PULLUP);
  pinMode(RedAnswerOne2,INPUT_PULLUP);
  pinMode(YellowAnswerTwo2,INPUT_PULLUP);
  pinMode(BlueAnswerThree2  ,INPUT_PULLUP);
  pinMode(GreenAnswerFour2,INPUT_PULLUP);
 Keyboard.begin();
}
unsigned long startPressTime;
unsigned long finishPressTime;
int pressedMSec;
void loop() {
 RedAnswerONE();
  YellowAnswerTWO();
  BlueAnswerTHREE();
  GreenAnswerFOUR();
   RedAnswerONE2();
  YellowAnswerTWO2();
  BlueAnswerTHREE2();
  GreenAnswerFOUR2();
joystick();
}
  void RedAnswerONE(){
  if(digitalRead(RedAnswerOne)==LOW){
    delay(100);
     Keyboard.write('a');
    startPressTime=millis();
    while(digitalRead(RedAnswerOne)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
    Serial.print("the pressed is:");
    Serial.println("red answer 1");
    Serial.println("player2");
    Serial.println(" ");
  }
  }
    void YellowAnswerTWO(){
  if(digitalRead(YellowAnswerTwo)==LOW){
    delay(100);
     Keyboard.write('b');
    startPressTime=millis();
    while(digitalRead(YellowAnswerTwo)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
   
       Serial.print("the pressed is:");
      Serial.println("yellow answer 2");
      Serial.println("player2");
    Serial.println("");
  }
    }
  void BlueAnswerTHREE(){
  if(digitalRead(BlueAnswerThree )==LOW){
    delay(100);
    Keyboard.write('c');
    startPressTime=millis();
    while(digitalRead(BlueAnswerThree )==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
    Serial.print("the pressed is:");
     Serial.println("blue answer 3");
     Serial.println("player2");
    Serial.println("");

  }
  }
    void GreenAnswerFOUR(){
  if(digitalRead(GreenAnswerFour)==LOW){
    delay(100);
    Keyboard.write('d');
    startPressTime=millis();
    while(digitalRead(GreenAnswerFour)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
     Serial.print("the pressed is:");
     Serial.println("green answer 4");
     Serial.println("player2");
    Serial.println("");

  }
  }
void RedAnswerONE2(){
  if(digitalRead(RedAnswerOne2)==LOW){
    delay(100);
     Keyboard.write('e');
    startPressTime=millis();
    while(digitalRead(RedAnswerOne2)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
    Serial.print("the pressed is:");
    Serial.println("red answer 1");
    Serial.println("player2");
    Serial.println(" ");
  }
  }
    void YellowAnswerTWO2(){
  if(digitalRead(YellowAnswerTwo2)==LOW){
    delay(100);
     Keyboard.write('f');
    startPressTime=millis();
    while(digitalRead(YellowAnswerTwo2)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
   
       Serial.print("the pressed is:");
      Serial.println("yellow answer 2");
      Serial.println("player2");
    Serial.println("");
  }
    }
    
  void BlueAnswerTHREE2(){
  if(digitalRead(BlueAnswerThree2 )==LOW){
    delay(100);
    Keyboard.write('g');
    startPressTime=millis();
    while(digitalRead(BlueAnswerThree2 )==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
    Serial.print("the pressed is:");
     Serial.println("blue answer 3");
     Serial.println("player2");
    Serial.println("");

  }
  }
    void GreenAnswerFOUR2(){
  if(digitalRead(GreenAnswerFour2)==LOW){
    delay(100);
    Keyboard.write('h');
    startPressTime=millis();
    while(digitalRead(GreenAnswerFour2)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
  
     Serial.print("the pressed is:");
     Serial.println("green answer 4");
     Serial.println("player2");
    Serial.println("");
  }
    }
    void joystick(){
int VRX = analogRead(axis_X);
int VRY = analogRead(axis_Y);
    if(VRY > 750){
  Keyboard.write(217);
  delay(500);
    }
    else if (VRY < 250){
Keyboard.write(218);
delay(500);
    }
    else if(VRX >750){
Keyboard.write(215);
delay(500);
    }
    else if(VRX <250){
 Keyboard.write(216);
 delay(500);
    }
    }

    
