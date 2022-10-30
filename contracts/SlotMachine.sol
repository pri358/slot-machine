pragma solidity ^0.8.9;

contract SlotMachine {

    mapping(address=>int) public players;
    uint256 public contractBalance;

    function play() public payable {
        uint256 userBalance = msg.value;
        require(userBalance > 0);
        contractBalance = address(this).balance;
        uint256 winBalance = calculateWinOrLoss();
        if(winBalance > 0){
            payable(msg.sender).transfer(winBalance);
            contractBalance = address(this).balance;
        }
    }

    function calculateWinOrLoss() internal pure returns (uint256) {
        return 100;
    }

    function random() internal view returns (uint8) {
        return uint8(uint256(keccak256(abi.encodePacked(block.timestamp))) % 100) + 1; // 1 ~ 100 (Only for testing.)
    }

}