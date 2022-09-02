#include <dht.h>

#define PIN_PHOTO 36  // Light sensor MH Photoresistor connected to PIN 36
#define PIN_DHT11 13 // Moisture/Temp sensor DHT11 connected to PIN 13

dht DHT;
unsigned int light;

void setup(){
  Serial.begin(9600);
}

void loop(){
  AnalogValue = analogRead(PIN_PHOTO);
  Serial.print("Current light intesity = ");
  Serial.print(light);
  
  DHT.read11(PIN_DHT11);
  Serial.print("  moisture = ");
  Serial.print(DHT.humidity);
  Serial.print("%");
  Serial.print("  temperature = ");
  Serial.print(DHT.temperature); 
  Serial.println("C");

  delay(1000);
}
