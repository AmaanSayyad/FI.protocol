// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./EncryptedRewardToken.sol";
import {TFHE} from  "fhevm/lib/TFHE.sol";

contract FeedbackPlatform {
    address public owner;
    EncryptedRewardToken private rewardToken;
    struct Issue {
        uint256 issueId;
        string title;
        string description;
        string companyName;
        bool status; // true for accepted, false for rejected
        address creater;
        uint amountStaked;
        bool viewAccess;
    }

    struct User {
        uint256 numberOfIssues;
        uint256 rejectedIssues;
        uint256 acceptedIssues;
        uint256 totalBalance;
    }

    mapping(address => Issue[]) public issues;
    mapping(uint256 => Issue) public issueIdToIssue;
    mapping(address => User) public users;
    mapping(address => bool) private isRegistered;
    uint256 public totalIssues;

    event IssueRegistered(
        uint256 issueId,
        string title,
        string companyName,
        bool status
    );
    event IssueStatusUpdated(uint256 issueId, bool newStatus);
    event UserRegistered(address user);

    modifier notUser() {
        require(
            !isRegistered[msg.sender],
            "Only the owner can call this function"
        );
        _;
    }

    constructor(address _loyalityTokenAddress) {
        owner = msg.sender;
        rewardToken = EncryptedRewardToken(_loyalityTokenAddress);
        bytes memory amount = abi.encode(100 * (10 ** 18));
        rewardToken.mint(address(this), amount);
    }

    function registerUser() external {
        require(!isRegistered[msg.sender], "User already registered");
        users[msg.sender].numberOfIssues = 0;
        users[msg.sender].rejectedIssues = 0;
        users[msg.sender].acceptedIssues = 0;
        users[msg.sender].totalBalance = 0;
        euint32 amount = TFHE.asEuint32(100 * (10 ** 18));
        rewardToken.transfer(msg.sender, amount);
        emit UserRegistered(msg.sender);
        isRegistered[msg.sender] = true;
    }

    function registerIssue(
        string memory _title,
        string memory _description,
        string memory _companyName,
        uint holdAmount
    ) external {
        require(holdAmount > 0, "Amount must be greater than 0");

        euint32 amount = TFHE.asEuint32(holdAmount);
        rewardToken.transferFrom(msg.sender, address(this), amount);

        // Stake Some Tokens Based on Confidence Level

        totalIssues++;
        Issue memory newIssue = Issue({
            issueId: totalIssues,
            title: _title,
            description: _description,
            companyName: _companyName,
            status: false,
            creater: msg.sender,
            amountStaked: holdAmount,
            viewAccess: false
        });

        users[msg.sender].numberOfIssues++;
        issues[msg.sender].push(newIssue);
        issueIdToIssue[totalIssues] = newIssue;
        emit IssueRegistered(totalIssues, _title, _companyName, false);
    }

    function viewIssue(uint256 _issueId) external notUser {
        require(_issueId <= totalIssues, "Invalid issue ID");
        Issue storage currentIssue = issueIdToIssue[_issueId];
        euint32 amount = TFHE.asEuint32(
            issueIdToIssue[_issueId].amountStaked * (10 ** 18)
        );
        rewardToken.transferFrom(msg.sender, address(this), amount);

        currentIssue.viewAccess = true;
    }

    function updateIssueStatus(
        uint256 _issueId,
        bool _newStatus
    ) external notUser {
        require(_issueId <= totalIssues, "Invalid issue ID");

        Issue storage currentIssue = issueIdToIssue[_issueId];
        currentIssue.status = _newStatus;

        if (_newStatus) {
            users[currentIssue.creater].acceptedIssues++;
            euint32 amount = TFHE.asEuint32(
                ((issueIdToIssue[_issueId].amountStaked * 15) / 10) * (10 ** 18)
            );
            (rewardToken).transfer(currentIssue.creater, amount);
        } else {
            users[currentIssue.creater].rejectedIssues++;
            euint32 amount = TFHE.asEuint32(
                (issueIdToIssue[_issueId].amountStaked) * (10 ** 18)
            );

            (rewardToken).transfer(currentIssue.creater, amount);

            (rewardToken).transfer(msg.sender, amount);
        }

        emit IssueStatusUpdated(_issueId, _newStatus);
    }

    function getIssues() external view returns (Issue[] memory) {
        return issues[msg.sender];
    }

    function getUserData() external view returns (User memory) {
        return users[msg.sender];
    }

    function claimTokens(address receiver , uint amount) public returns (bool) {
        bytes memory _amount = abi.encode(amount * (10 ** 18));
        rewardToken.burn(receiver,_amount);
        users[receiver].totalBalance += amount;
        return true;
    }
}
