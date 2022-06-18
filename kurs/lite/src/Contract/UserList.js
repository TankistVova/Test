export const UserList =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shopCity",
				"type": "string"
			}
		],
		"name": "approveMoneyRequest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum Shopping.Roles",
				"name": "requiredRole",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "requiredShop",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "maxrole",
				"type": "bool"
			}
		],
		"name": "changeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Own_s",
				"type": "address"
			}
		],
		"name": "delShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sword",
				"type": "bytes32"
			}
		],
		"name": "LogIn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "logout",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requiredSum",
				"type": "uint256"
			}
		],
		"name": "newMoneyRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "NameShop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "OtwetContent",
				"type": "string"
			}
		],
		"name": "NewOtwet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "rate",
				"type": "uint8"
			},
			{
				"internalType": "uint32",
				"name": "answer",
				"type": "uint32"
			}
		],
		"name": "newReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Own_s",
				"type": "address"
			}
		],
		"name": "newShop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sword",
				"type": "bytes32"
			}
		],
		"name": "newUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "request",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "okReq",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "enum Shopping.Roles",
				"name": "requiredRole",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "requiredShop",
				"type": "string"
			}
		],
		"name": "upRoles",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"name": "get_hash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_role",
		"outputs": [
			{
				"internalType": "enum Shopping.Roles",
				"name": "role",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			}
		],
		"name": "getAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "User",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getComm",
		"outputs": [
			{
				"internalType": "uint32[]",
				"name": "",
				"type": "uint32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "getElevateRequest",
		"outputs": [
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "enum Shopping.Roles",
				"name": "requiredRole",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "requiredShop",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getFio",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getLog",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shopCity",
				"type": "string"
			}
		],
		"name": "getMoneyRequest",
		"outputs": [
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMoneyRequests",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "moneyRequesters",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shop",
				"type": "string"
			}
		],
		"name": "getO",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "OtwetId",
				"type": "uint32"
			}
		],
		"name": "getOtwet",
		"outputs": [
			{
				"internalType": "address",
				"name": "Otwet4ik",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "NameShop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "OtwetContent",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getReq",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "requesters",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "reviewId",
				"type": "uint32"
			}
		],
		"name": "getReview",
		"outputs": [
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "shop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "answer",
				"type": "uint32"
			},
			{
				"internalType": "uint32[]",
				"name": "answers",
				"type": "uint32[]"
			},
			{
				"internalType": "uint8",
				"name": "rate",
				"type": "uint8"
			},
			{
				"internalType": "address[]",
				"name": "likes",
				"type": "address[]"
			},
			{
				"internalType": "address[]",
				"name": "dislikes",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "shop",
				"type": "string"
			}
		],
		"name": "getS",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSellers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "SellerArray",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "getShopReviews",
		"outputs": [
			{
				"internalType": "uint32[]",
				"name": "reviewIds",
				"type": "uint32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "logged",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "enum Shopping.Roles",
				"name": "role",
				"type": "uint8"
			},
			{
				"internalType": "enum Shopping.Roles",
				"name": "maxrole",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "shop",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserReviews",
		"outputs": [
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "uint32[]",
				"name": "reviewIds",
				"type": "uint32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "logged",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sword",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "enum Shopping.Roles",
				"name": "role",
				"type": "uint8"
			},
			{
				"internalType": "enum Shopping.Roles",
				"name": "maxrole",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "logged",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "shop",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]