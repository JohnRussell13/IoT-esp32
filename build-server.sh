# server
sudo apt update
sudo apt install nodejs -y
sudo apt install npm -y

mkdir node-server
cd node-server

npm init

npm i express
npm i mongoose
npm i cors
npm i dotenv
npm i -g nodemon

# client
cd ..
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

npx create-react-app react-client
cd react-client
npm start
