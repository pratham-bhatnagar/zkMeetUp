// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Allowlist {
    struct AllowlistInfo {
        address creator;
        mapping(address => bool) allowlisted;
    }

    mapping(uint256 => AllowlistInfo) public allowlists;

    function createAllowlist(uint256 _id) public {
        require(allowlists[_id].creator == address(0), "Allowlist already exists");
        allowlists[_id].creator = msg.sender;
    }

    function addToAllowlist(uint256 _id, address _user) public {
        require(allowlists[_id].creator == msg.sender, "Only the creator can add users");
        require(!allowlists[_id].allowlisted[_user], "User is already in the allowlist");
        allowlists[_id].allowlisted[_user] = true;
    }

    function addMultipleToAllowlist(uint256 _id, address[] memory _users) public {
        require(allowlists[_id].creator == msg.sender, "Only the creator can add users");
        for (uint256 i = 0; i < _users.length; i++) {
            require(!allowlists[_id].allowlisted[_users[i]], "User is already in the allowlist");
            allowlists[_id].allowlisted[_users[i]] = true;
        }
    }

    function removeFromAllowlist(uint256 _id, address _user) public {
        require(allowlists[_id].creator == msg.sender, "Only the creator can remove users");
        allowlists[_id].allowlisted[_user] = false;
    }

    function isEligible(uint256 _id, address _user) public view returns (bool) {
        return allowlists[_id].allowlisted[_user];
    }
}
