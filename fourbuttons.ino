//this code for the player 1
#define RedAnswerOne    6
#define YellowAnswerTwo  11
#define BlueAnswerThree    10
#define GreenAnswerFour    9

byte counter;
void setup() {
  pinMode(RedAnswerOne,INPUT_PULLUP);
  pinMode(YellowAnswerTwo,INPUT_PULLUP);
  pinMode(BlueAnswerThree  ,INPUT_PULLUP);
  pinMode(GreenAnswerFour,INPUT_PULLUP);
  Serial.begin(9600);
}
unsigned long startPressTime;
unsigned long finishPressTime;
int pressedMSec;
void loop() {
 RedAnswerONE();
  YellowAnswerTWO();
  BlueAnswerTHREE();
  GreenAnswerFOUR();
}
  void RedAnswerONE(){
  if(digitalRead(RedAnswerOne)==LOW){
    startPressTime=millis();
    while(digitalRead(RedAnswerOne)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
    Serial.print("the pressed is:");
    Serial.println("red answer 1");
    Serial.println("player1");
    Serial.println(" ");
  }
  }
    void YellowAnswerTWO(){
  if(digitalRead(YellowAnswerTwo)==LOW){
    startPressTime=millis();
    while(digitalRead(YellowAnswerTwo)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
       Serial.print("the pressed is:");
      Serial.println("yellow answer 2");
      Serial.println("player1");
    Serial.println("");
  
    
  }
    }
  void BlueAnswerTHREE(){
  if(digitalRead(BlueAnswerThree )==LOW){
    startPressTime=millis();
    while(digitalRead(BlueAnswerThree )==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
    Serial.print("the pressed is:");
     Serial.println("blue answer 3");
     Serial.println("player1");
    Serial.println("");
    
  }
  }
    void GreenAnswerFOUR(){
  if(digitalRead(GreenAnswerFour)==LOW){
    startPressTime=millis();
    while(digitalRead(GreenAnswerFour)==LOW);
    finishPressTime=millis();
    pressedMSec=finishPressTime-startPressTime;
     Serial.print("the pressed is:");
     Serial.println("green answer 4");
     Serial.println("player1");
    Serial.println("");
  
  }
    }
