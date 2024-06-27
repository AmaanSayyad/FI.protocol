# FI-Protocol

Feedback Incentivized (FI-Protocol) is a revolutionary platform designed to transform the way bugs are reported and feedback is given. By leveraging cutting-edge technologies, including Chainlink Cross-Chain Interoperability Protocol (CCIP) and Fully Homomorphic Encryption (FHE) technology provided by Inco Network, our platform ensures that all interactions remain confidential and secure. This project is built using Inco's fhEVM, allowing us to streamline the complexities of cryptography while enabling confidential smart contracts.

## Vision
Our vision is to create a secure, transparent, and rewarding ecosystem where users can confidently report bugs and provide feedback. We aim to enhance bug reporting and development processes by incentivizing active participation through rewards, while maintaining the privacy and security of user data.

## Solution
In traditional bug reporting systems, users often hesitate to share detailed information due to privacy concerns. Feedback Incentivized solves this problem by utilizing Inco Network's FHE technology to encrypt all bug reports and feedback. This ensures that sensitive information remains confidential while still allowing companies to verify and act upon the reports.

## What it does
FI-Protocol offers a user-friendly bug-reporting platform that incentivizes users with tokens for reporting errors. This facilitates direct communication between users and companies, providing actionable feedback for swift issue resolution and platform enhancement. By leveraging Chainlink CCIP, the platform ensures secure, transparent, and reliable operations across multiple blockchains.

## Technology Stack | Tools | Libraries:
Metis Sepolia Testnet Deployment 
- FICOIN : 
https://sepolia-explorer.metisdevops.link/address/0x72105396D6b1c1378581D5Be21683A6470c1F2aE
- Feedback Main Contract : 
https://sepolia-explorer.metisdevops.link/address/0x8A9bBa3013d2A4Cf17d081157C9F90b6D4aA6eE4

Polygon Amoy Testnet Deployment <br/>
- FICOIN : 
https://www.oklink.com/amoy/address/0xbfff78bb02925e4d8671d0d90b2a6330fcaedd87 <br/>
- Feedback Main Contract : 
https://www.oklink.com/amoy/address/0xdd0570edb234a1753e5ad3f8be8fa7515cda1c12 <br/>

Scroll Sepolia Testnet Deployment <br/>
- FICOIN : <br/>
https://sepolia.scrollscan.com/address/0x09788a0B60eCCd3FE8B951e181B2391e177dFdab

CCIP Deployements  <br/>
- Cross Chain Source Feedback Register Contract (Polygon Amoy Testnet Network) :
https://www.oklink.com/amoy/tx/0xeec7a4302f4ef1286ec5da95ad4ba94da05e865b24c950495b60949614d418a2

- Cross Chain Destination Feedback Register Contract (Optimism Sepolia Testnet Network) :
https://sepolia-optimism.etherscan.io/address/0x99BEE918893511aa03Bc802DA3995D6476f6acae

- CCIP Explorer Link
https://ccip.chain.link/msg/0x73ecd982ebdce21e3789350917329035698eb5c467937d026448c2681a6e01eb

![WhatsApp Image 2024-06-03 at 1 31 41 AM](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/4debd5de-dacd-4787-b942-646127e798d8)

![WhatsApp Image 2024-06-03 at 1 31 46 AM](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/f4631409-1df7-40a7-8dda-f65071f46ead)


- Inco Network 

https://explorer.testnet.inco.org/address/0xBFff78BB02925E4D8671D0d90B2a6330fcAedd87
- MERN
- Hardhat 
- Encrypted Types 
- TFHE Library

<img width="683" alt="Screenshot 2024-05-25 at 1 52 26 AM" src="https://github.com/Kali-Decoder/FI-Protocol/assets/82640789/9f16645c-cc1f-4377-bf48-dfc3913ae55a">
<br/>

- Encrypted ERC20 
- Adding Burn Token Functionality in Encrypted ERC20

<img width="745" alt="Screenshot 2024-05-25 at 1 54 06 AM" src="https://github.com/Kali-Decoder/FI-Protocol/assets/82640789/f2abb8ad-5473-47e8-b65a-9e0b6b5a9e1c">
<br/><br/>

- Chainlink CCIP: Implemented Chainlink CCIP for cross-chain transfers and communication across chains to make it convenient for users and ease their struggle of jumping between chains.
- Polygon Amoy: Deployed FI-Protocol on the Polygon PoS network, utilizing its high throughput and low transaction fees to revolutionize financial services within our platform.
- Avalanche Fuji C-Chain: Utilized Avalanche's Fuji testnet for its high throughput and low latency, deploying parts of our platform to leverage these features for a seamless user experience.
- Scroll: Deployed FI-Protocol on Scroll's Sepolia Testnet, leveraging its EVM compatibility to ensure seamless interaction with our smart contracts.
- Metis: We drew inspiration from existing applications on Metis and implemented features to merge x-to-earn with financial blockchain mechanics. Deployed contracts too.

## Features and Functionality
- Confidential Bug Reporting: Users can submit bug reports encrypted with Fully Homomorphic Encryption (FHE), ensuring their sensitive information is protected from unauthorized access.
- Incentive Mechanism: Users are rewarded with Feedback Incentivized (FI) tokens and AI-generated NFTs for submitting valid bug reports, incentivizing active participation.
- Verification and Credibility: Each bug report, once validated, generates a timestamped NFT, enhancing the credibility of the reporter and providing proof of submission.
- AI-Driven Recognition: Accepted bug reports trigger the creation of an AI NFT, boosting the reporter's standing on the leaderboard and increasing their reward multiplier.
- Stake and Earn: Users can stake Inco tokens as collateral to receive FI tokens, creating a seamless integration with the Inco Network and expanding the ecosystem's token utility.

FI-Protocol aims to generate revenue through partnerships with digital platform owners, who can benefit from the improved quality and reliability of their platforms. FI-Protocol can expand Inco Network's token supply by rewarding users with Inco Network tokens for their bug reports, thereby increasing the utility and adoption of Inco Network tokens, Inco Network can use FI-Protocol as a platform where the smart contract researchers, smart contract auditing developers, blockchain devs / common users of Inco Network can report bugs/errors they found in Inco Network platform.

## Impact on Inco Network
FI-Protocol has the potential to expand Inco Network's token supply by rewarding users with Inco Network tokens for their bug reports. FI-Protocol can enhance Inco Network's market reach by attracting new users and developers to the platform, thereby increasing the demand for Inco Network tokens.

## Future
1. The users and companies will stake Inco Network tokens as a collateral to get FI tokens which they will use to report bugs and resolve bugs.
2. The bugs reported by the users if accepted by the company, then the bug report will get generated into NFT's which will have a timestamp that will help to prove if two or more users have reported the bugs at same time and the model will trigger function to reward the early submitter.
3. The reported bugs if accepted by companies then a function triggers that will automatically generate a AI NFT to the user which will increase the credibility of the bug reporter in the leaderboard and provide a booster multiplier to receive more Tokens.
4. This NFT can also be utilized as a swap for the Inco Network Token Airdrop or FI Tokens for contributing actively in the Inco Network ecosystem.
5. The model can easily adapt the layer.xyz / zealy kind of model functionality for the Inco Network ecosystem.
6. Launch on Inco Network Mainnet

- Applying for Grants: Seeking funding to further develop and expand the platform.
- Mainnet Launch: Deploying FI-Protocol on the mainnet for real-world use.
- User Testing: Conducting extensive user testing to refine the platform.
- Promoting the Product: Marketing FI-Protocol to attract a wider audience.
- Mobile App Development: Launching Android and iOS applications for FI-Protocol.
- Gasless Transactions: We aim to implement gasless transactions to enhance user convenience.
- Supporting More Tokens and Chains: Support 50+ new tokens and 20+ new chains within the next few months after the end of the hackathon.

Feedback Incentivized aims to provide a secure, transparent, and rewarding environment for users to contribute to the development of more robust software solutions, all while leveraging the unique confidentiality and encryption capabilities of Inco Network.


## Platform ( UI | UX TRACK )
### Landing Page:
![291031554-0daf0b0a-41fd-4b10-bf59-279cdf9e3557](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/ce61fe17-0b57-45ac-bf59-6fd3104932f9)

### Issue Creation Page:
![291031552-56802235-9fc1-4781-a519-4d7de6c4ce62](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/82316d6f-d64f-452f-b355-345a6bee7ab6)

### User Dashboard:
![291031551-528fccd9-b3ca-468e-9d03-e0edfd6a0f30](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/915d9c89-bd6b-471d-8a13-684d7570cb7c)

### User Referral:
![291031548-15cd4ce6-75a6-4c50-9e84-cf6af0db0c1a](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/ec5d6e36-8612-4d5c-8eee-e64523c70d49)

### Issue History:
![291030800-26497b29-32dc-4ebf-9a1e-872bdbb68b5e](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/88c024b1-45b7-44e1-afa9-057e47e8e2dd)

![291030802-c2022767-16ea-4a31-98ac-8c9c5a0d618b](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/c3a32bfa-81ad-42d1-bbee-41ec2ef44f23)

### Company Dashboard:
![291031949-a4fd886b-a992-485c-bd43-9569f3a9f368](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/aaeb4ce5-5b76-4590-8a9d-55393f0b012e)

### Company Checks Issue after Stake Complete and Accepts and Decline:
![291031949-a4fd886b-a992-485c-bd43-9569f3a9f368](https://github.com/Kali-Decoder/FI-Protocol/assets/69464744/1933a823-831a-4aa1-baee-8a2524228fc3)
