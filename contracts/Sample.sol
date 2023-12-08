// SPDX-License-Identifier: MIT
pragma solidity >=0.8.19 <0.9.0;

contract Sample {
    constructor() {
        owner = msg.sender;
    }

    address public immutable owner;

    event EchoEvent(string _message);

    function echo(string memory _message) external {
        emit EchoEvent(_message);
    }
}
