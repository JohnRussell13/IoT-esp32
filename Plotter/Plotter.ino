#include <dht.h>

#define PIN_PHOTO 36  // Light sensor MH Photoresistor connected to PIN A0
#define PIN_DHT11 13 // Moisture/Temp sensor DHT11 connected to PIN A1

dht DHT;
unsigned int AnalogValue;

void setup(){
  Serial.begin(9600);
  Serial.println("Light[%] Humidity[%] Temperature[C]");
}

void loop(){
  AnalogValue = analogRead(PIN_PHOTO);
  DHT.read11(PIN_DHT11);
  Serial.print((float(4095-AnalogValue))/4095*100);
  Serial.print(",");
  Serial.print(DHT.humidity);
  Serial.print(",");
  Serial.println(DHT.temperature);
}
