#include <Keyboard.h>
#define RedButone    2
#define YellowButone 3
#define BlueButone    4
#define GreenButone  5
#define RedButtow   6
#define YellowButtow  7                                           
#define BlueButtow   8
#define GreenButtow  9
#define OkJoyBut  10
#define NumOfButtons 8         
int BUTTONS[NumOfButtons]={RedButone ,YellowButone,BlueButone,GreenButone ,RedButtow ,YellowButtow,BlueButtow ,GreenButtow};
int KEYBOARDCHAR[NumOfButtons]={'a','b','c','d','e','f','g','h'};
bool BUTPRESS[NumOfButtons] ;
unsigned long ButtonTime;
void setup() {
  for(int ButINPUT=0;ButINPUT< NumOfButtons;ButINPUT++){
    pinMode(BUTTONS[ButINPUT],INPUT_PULLUP);
  }
  ButtonTime =millis();
  Keyboard.begin();
}
void loop() {
ButtonChar();
}
void ButtonChar(){
  for(int BUT=0;BUT< NumOfButtons; BUT++){
    if (digitalRead(BUTTONS[BUT]) == HIGH) {
      BUTPRESS[BUT] = false;
    if (!BUTPRESS[BUT] && (digitalRead(BUTTONS[BUT]) == LOW) && (millis() - ButtonTime <100)) {
      BUTPRESS[BUT] = true;
      ButtonTime =millis();
      
    Keyboard.write(KEYBOARDCHAR[BUT]);
    delay(50);
 }            
  }
   }
    }
