#include <Arduino.h>                                                                              // Not sure
#include <WiFi.h>                                                                                 // Used for WiFi connection
#include <WiFiMulti.h>                                                                            // Used for WiFi connection
#include <HTTPClient.h>                                                                           // Used for HTTP connection
#include <dht.h>                                                                                  // Used for DHT11
#include <stdio.h>                                                                                // Used for sprintf

#define USERNAME "****"                                                                           // WiFi username
#define PASSWORD "****"                                                                           // WiFi password

#define PIN_PHOTO 36                                                                              // Light sensor MH Photoresistor connected to PIN 36
#define PIN_DHT11 13                                                                              // Moisture/Temp sensor DHT11 connected to PIN 13

#define BUFF_SIZE 128                                                                             // Max package size
#define ADDRESS "http://ec2-54-86-62-253.compute-1.amazonaws.com/sensors"                         // Public endpoint address
#define PAUSE 60000                                                                               // Pause between samples in ms

dht DHT;                                                                                          // Used for sampling DHT11
WiFiMulti wifiMulti;                                                                              // Used for WiFi connection

unsigned int light;                                                                               // Temp storage for light sensor value
char package[BUFF_SIZE];                                                                          // POST package

void setup() {
  Serial.begin(9600);                                                                             // Baud rate for serial communication (used for HTTP error)
  
  for(uint8_t t = 4; t > 0; t--) {                                                                // Wait (used for better WiFi connectivity)
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }
  wifiMulti.addAP(USERNAME, PASSWORD);                                                            // Connect on WiFi
}

void loop() {
if((wifiMulti.run() == WL_CONNECTED)) {                                                           // Start if connected
    HTTPClient http;                                                                              // HTTP Client
    http.begin(ADDRESS);                                                                          // Begin HTTP request for a given address
    http.addHeader("Content-Type", "application/json");                                           // Package type is JSON
  
    light = analogRead(PIN_PHOTO);                                                                // Read light sensor
    DHT.read11(PIN_DHT11);                                                                        // Read moisture and temperature sensor

    sprintf(package, "{\"moist\": %f,", DHT.humidity);                                            // Add the moisture value to the package
    sprintf(package, "%s\"light\": %u,", package, light);                                         // Add the light value to the package
    sprintf(package, "%s\"temp\": %f}", package, DHT.temperature);                                // Add the temperature value to the package

    Serial.printf("Sending package:\n%s\n", package);                                             // Print package
    
    int httpCode = http.POST(package);                                                            // Send POST request
  
    if(httpCode > 0) {                                                                            // If valid HTTP code
      Serial.printf("[HTTP] POST... code: %d\n", httpCode);                                       // Print HTTP code for debugging
      if(httpCode == HTTP_CODE_CREATED) {                                                         // If successful POST request
        String payload = http.getString();                                                        // Read response
        Serial.printf("Response:\n");                                                             // Print repsonse
        Serial.print(payload);
      }
    }
    else {
      Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());  // Print the error code
    }
    http.end();                                                                                   // End the HTTP request
  }
  delay(PAUSE);                                                                                   // Wait until next sample
}
