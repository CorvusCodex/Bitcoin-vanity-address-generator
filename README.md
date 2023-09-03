# Multithread Bitcoin vanity address generator

This tool generates a random Bitcoin key pair and checks if the generated address contains a user-specified phrase. If the address contains the phrase, the tool outputs the address and private key. Otherwise, it outputs a message indicating that no address was found containing the phrase.

A Bitcoin address that contains a specific phrase or word is known as a **vanity address**. Vanity addresses can make it easier to remember or share your Bitcoin address, and can also be used to personalize your wallet or associate it with a specific brand or identity.

<h3 align="left">Support:</h3>
<p><a href="https://www.buymeacoffee.com/corvuscodex"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="corvuscodex" /></a></p><br><br>

<br><br>
Or donate: <br><br>
BTC: bc1q7wth254atug2p4v9j3krk9kauc0ehys2u8tgg3 <br><br>
ETH & BNB: 0x68B6D33Ad1A3e0aFaDA60d6ADf8594601BE492F0

## Installation

To install this tool, you will need to have Node.js installed on your system. Once you have Node.js installed, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal or command prompt and navigate to the directory where you cloned the repository.
3. Run the command `npm install` to install the dependencies.

## Usage

To use this tool, follow these steps:

1. Open a terminal or command prompt and navigate to the directory where you cloned the repository.
2. Run the command `node index.js` to start the tool.
3. When prompted, enter the phrase you want to use and press Enter.
4. The tool will generate random key pairs until it finds an address containing the specified phrase. Once an address is found, it will be displayed along with the private key.

## Dependencies

This tool uses several dependencies to provide its functionality:

- `coinkey`: A JavaScript component for working with private keys, public keys, and addresses for cryptocurrencies such as Bitcoin, Litecoin, and Dogecoin.
- `crypto`: A built-in Node.js module that provides cryptographic functionality.
- `readline`: A built-in Node.js module that provides an interface for reading data from a Readable stream (such as `process.stdin`) one line at a time.
- `worker_threads`: A built-in Node.js module that allows you to create multiple threads and execute JavaScript tasks in parallel.

>Support my work:<br>
>BTC: bc1q7wth254atug2p4v9j3krk9kauc0ehys2u8tgg3<br>
>ETH & BNB: 0x68B6D33Ad1A3e0aFaDA60d6ADf8594601BE492F0<br>
>Buy me a coffee: https://www.buymeacoffee.com/CorvusCodex

## Disclaimer

The code within this repository comes with no guarantee, the use of this code is your responsibility. I take NO responsibility and/or liability for how you choose to use any of the source code available here. By using any of the files available in this repository, you understand that you are AGREEING TO USE AT YOUR OWN RISK. Once again, ALL files available here are for EDUCATION and/or RESEARCH purposes ONLY. It is not allowed to use this script for any illegal or unethical activities.


MIT License

Copyright (c) 2023 CorvusCodex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

