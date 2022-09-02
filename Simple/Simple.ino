#include <dht.h>

#define PIN_PHOTO 36  // Light sensor MH Photoresistor connected to PIN A0
#define PIN_DHT11 13 // Moisture/Temp sensor DHT11 connected to PIN A1

dht DHT;

void setup(){
  Serial.begin(9600);
}

void loop(){
  unsigned int AnalogValue;
  AnalogValue = analogRead(PIN_PHOTO);
  Serial.print("Current light intesity = ");
  Serial.println(AnalogValue);
  
  DHT.read11(PIN_DHT11);
  Serial.print("  humidity = ");
  Serial.print(DHT.humidity);
  Serial.print("%");
  Serial.print("  temperature = ");
  Serial.print(DHT.temperature); 
  Serial.println("C");

  delay(1000);
}
