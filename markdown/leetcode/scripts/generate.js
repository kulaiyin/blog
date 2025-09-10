
import path from "path"
import fs from "fs"
import url from 'url';

const json = {
    "data": {
        "problemsetPanelQuestionList": {
            "questions": [
                {
                    "difficulty": "EASY",
                    "id": 1,
                    "paidOnly": false,
                    "questionFrontendId": "1",
                    "status": "TO_DO",
                    "title": "Two Sum",
                    "titleSlug": "two-sum",
                    "translatedTitle": "\u4e24\u6570\u4e4b\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5509818571151348,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 2,
                    "paidOnly": false,
                    "questionFrontendId": "2",
                    "status": "TO_DO",
                    "title": "Add Two Numbers",
                    "titleSlug": "add-two-numbers",
                    "translatedTitle": "\u4e24\u6570\u76f8\u52a0",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4590735923531391,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 3,
                    "paidOnly": false,
                    "questionFrontendId": "3",
                    "status": "TO_DO",
                    "title": "Longest Substring Without Repeating Characters",
                    "titleSlug": "longest-substring-without-repeating-characters",
                    "translatedTitle": "\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",
                    "topicTags": [
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "x571onh",
                            "name": "Sliding Window",
                            "slug": "sliding-window",
                            "nameTranslated": "\u6ed1\u52a8\u7a97\u53e3",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4148493657487304,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 4,
                    "paidOnly": false,
                    "questionFrontendId": "4",
                    "status": "TO_DO",
                    "title": "Median of Two Sorted Arrays",
                    "titleSlug": "median-of-two-sorted-arrays",
                    "translatedTitle": "\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dp403",
                            "name": "Divide and Conquer",
                            "slug": "divide-and-conquer",
                            "nameTranslated": "\u5206\u6cbb",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4378496705804854,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 5,
                    "paidOnly": false,
                    "questionFrontendId": "5",
                    "status": "TO_DO",
                    "title": "Longest Palindromic Substring",
                    "titleSlug": "longest-palindromic-substring",
                    "translatedTitle": "\u6700\u957f\u56de\u6587\u5b50\u4e32",
                    "topicTags": [
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.39839127306420413,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 6,
                    "paidOnly": false,
                    "questionFrontendId": "6",
                    "status": "TO_DO",
                    "title": "Zigzag Conversion",
                    "titleSlug": "zigzag-conversion",
                    "translatedTitle": "Z \u5b57\u5f62\u53d8\u6362",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5401142995788268,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 7,
                    "paidOnly": false,
                    "questionFrontendId": "7",
                    "status": "TO_DO",
                    "title": "Reverse Integer",
                    "titleSlug": "reverse-integer",
                    "translatedTitle": "\u6574\u6570\u53cd\u8f6c",
                    "topicTags": [
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.3561767718111825,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 8,
                    "paidOnly": false,
                    "questionFrontendId": "8",
                    "status": "TO_DO",
                    "title": "String to Integer (atoi)",
                    "titleSlug": "string-to-integer-atoi",
                    "translatedTitle": "\u5b57\u7b26\u4e32\u8f6c\u6362\u6574\u6570 (atoi)",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.21719665841606425,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 9,
                    "paidOnly": false,
                    "questionFrontendId": "9",
                    "status": "TO_DO",
                    "title": "Palindrome Number",
                    "titleSlug": "palindrome-number",
                    "translatedTitle": "\u56de\u6587\u6570",
                    "topicTags": [
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5638756729543775,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 10,
                    "paidOnly": false,
                    "questionFrontendId": "10",
                    "status": "TO_DO",
                    "title": "Regular Expression Matching",
                    "titleSlug": "regular-expression-matching",
                    "translatedTitle": "\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.30955788229888076,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 11,
                    "paidOnly": false,
                    "questionFrontendId": "11",
                    "status": "TO_DO",
                    "title": "Container With Most Water",
                    "titleSlug": "container-with-most-water",
                    "translatedTitle": "\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",
                    "topicTags": [
                        {
                            "id": "n7hqh",
                            "name": "Greedy",
                            "slug": "greedy",
                            "nameTranslated": "\u8d2a\u5fc3",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6149900390274172,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 12,
                    "paidOnly": false,
                    "questionFrontendId": "12",
                    "status": "TO_DO",
                    "title": "Integer to Roman",
                    "titleSlug": "integer-to-roman",
                    "translatedTitle": "\u6574\u6570\u8f6c\u7f57\u9a6c\u6570\u5b57",
                    "topicTags": [
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6900413300479105,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 13,
                    "paidOnly": false,
                    "questionFrontendId": "13",
                    "status": "TO_DO",
                    "title": "Roman to Integer",
                    "titleSlug": "roman-to-integer",
                    "translatedTitle": "\u7f57\u9a6c\u6570\u5b57\u8f6c\u6574\u6570",
                    "topicTags": [
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6425942754381104,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 14,
                    "paidOnly": false,
                    "questionFrontendId": "14",
                    "status": "TO_DO",
                    "title": "Longest Common Prefix",
                    "titleSlug": "longest-common-prefix",
                    "translatedTitle": "\u6700\u957f\u516c\u5171\u524d\u7f00",
                    "topicTags": [
                        {
                            "id": "n4z5r",
                            "name": "Trie",
                            "slug": "trie",
                            "nameTranslated": "\u5b57\u5178\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4494303235147901,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 15,
                    "paidOnly": false,
                    "questionFrontendId": "15",
                    "status": "TO_DO",
                    "title": "3Sum",
                    "titleSlug": "3sum",
                    "translatedTitle": "\u4e09\u6570\u4e4b\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.39750244887083724,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 16,
                    "paidOnly": false,
                    "questionFrontendId": "16",
                    "status": "TO_DO",
                    "title": "3Sum Closest",
                    "titleSlug": "3sum-closest",
                    "translatedTitle": "\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.44828608092890293,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 17,
                    "paidOnly": false,
                    "questionFrontendId": "17",
                    "status": "TO_DO",
                    "title": "Letter Combinations of a Phone Number",
                    "titleSlug": "letter-combinations-of-a-phone-number",
                    "translatedTitle": "\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",
                    "topicTags": [
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6253373628934648,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 18,
                    "paidOnly": false,
                    "questionFrontendId": "18",
                    "status": "TO_DO",
                    "title": "4Sum",
                    "titleSlug": "4sum",
                    "translatedTitle": "\u56db\u6570\u4e4b\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.3684118416914383,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 19,
                    "paidOnly": false,
                    "questionFrontendId": "19",
                    "status": "TO_DO",
                    "title": "Remove Nth Node From End of List",
                    "titleSlug": "remove-nth-node-from-end-of-list",
                    "translatedTitle": "\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c N \u4e2a\u7ed3\u70b9",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5178193379088735,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 20,
                    "paidOnly": false,
                    "questionFrontendId": "20",
                    "status": "TO_DO",
                    "title": "Valid Parentheses",
                    "titleSlug": "valid-parentheses",
                    "translatedTitle": "\u6709\u6548\u7684\u62ec\u53f7",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.45031013572276185,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 21,
                    "paidOnly": false,
                    "questionFrontendId": "21",
                    "status": "TO_DO",
                    "title": "Merge Two Sorted Lists",
                    "titleSlug": "merge-two-sorted-lists",
                    "translatedTitle": "\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6799680400843762,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 22,
                    "paidOnly": false,
                    "questionFrontendId": "22",
                    "status": "TO_DO",
                    "title": "Generate Parentheses",
                    "titleSlug": "generate-parentheses",
                    "translatedTitle": "\u62ec\u53f7\u751f\u6210",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7900411853426854,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 23,
                    "paidOnly": false,
                    "questionFrontendId": "23",
                    "status": "TO_DO",
                    "title": "Merge k Sorted Lists",
                    "titleSlug": "merge-k-sorted-lists",
                    "translatedTitle": "\u5408\u5e76 K \u4e2a\u5347\u5e8f\u94fe\u8868",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dp403",
                            "name": "Divide and Conquer",
                            "slug": "divide-and-conquer",
                            "nameTranslated": "\u5206\u6cbb",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xp2oh0e",
                            "name": "Heap (Priority Queue)",
                            "slug": "heap-priority-queue",
                            "nameTranslated": "\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xp2r1vv",
                            "name": "Merge Sort",
                            "slug": "merge-sort",
                            "nameTranslated": "\u5f52\u5e76\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6254808772261852,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 24,
                    "paidOnly": false,
                    "questionFrontendId": "24",
                    "status": "TO_DO",
                    "title": "Swap Nodes in Pairs",
                    "titleSlug": "swap-nodes-in-pairs",
                    "translatedTitle": "\u4e24\u4e24\u4ea4\u6362\u94fe\u8868\u4e2d\u7684\u8282\u70b9",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7468140628241025,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 25,
                    "paidOnly": false,
                    "questionFrontendId": "25",
                    "status": "TO_DO",
                    "title": "Reverse Nodes in k-Group",
                    "titleSlug": "reverse-nodes-in-k-group",
                    "translatedTitle": "K \u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6973277854683448,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 26,
                    "paidOnly": false,
                    "questionFrontendId": "26",
                    "status": "TO_DO",
                    "title": "Remove Duplicates from Sorted Array",
                    "titleSlug": "remove-duplicates-from-sorted-array",
                    "translatedTitle": "\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5821018894122795,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 27,
                    "paidOnly": false,
                    "questionFrontendId": "27",
                    "status": "TO_DO",
                    "title": "Remove Element",
                    "titleSlug": "remove-element",
                    "translatedTitle": "\u79fb\u9664\u5143\u7d20",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6036514783859082,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 28,
                    "paidOnly": false,
                    "questionFrontendId": "28",
                    "status": "TO_DO",
                    "title": "Find the Index of the First Occurrence in a String",
                    "titleSlug": "find-the-index-of-the-first-occurrence-in-a-string",
                    "translatedTitle": "\u627e\u51fa\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u7684\u4e0b\u6807",
                    "topicTags": [
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ydzvgh",
                            "name": "String Matching",
                            "slug": "string-matching",
                            "nameTranslated": "\u5b57\u7b26\u4e32\u5339\u914d",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4502078071772708,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 29,
                    "paidOnly": false,
                    "questionFrontendId": "29",
                    "status": "TO_DO",
                    "title": "Divide Two Integers",
                    "titleSlug": "divide-two-integers",
                    "translatedTitle": "\u4e24\u6570\u76f8\u9664",
                    "topicTags": [
                        {
                            "id": "nizi1",
                            "name": "Bit Manipulation",
                            "slug": "bit-manipulation",
                            "nameTranslated": "\u4f4d\u8fd0\u7b97",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.2246131630972835,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 30,
                    "paidOnly": false,
                    "questionFrontendId": "30",
                    "status": "TO_DO",
                    "title": "Substring with Concatenation of All Words",
                    "titleSlug": "substring-with-concatenation-of-all-words",
                    "translatedTitle": "\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",
                    "topicTags": [
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "x571onh",
                            "name": "Sliding Window",
                            "slug": "sliding-window",
                            "nameTranslated": "\u6ed1\u52a8\u7a97\u53e3",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.3811636792324918,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 31,
                    "paidOnly": false,
                    "questionFrontendId": "31",
                    "status": "TO_DO",
                    "title": "Next Permutation",
                    "titleSlug": "next-permutation",
                    "translatedTitle": "\u4e0b\u4e00\u4e2a\u6392\u5217",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.41408127276354906,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 32,
                    "paidOnly": false,
                    "questionFrontendId": "32",
                    "status": "TO_DO",
                    "title": "Longest Valid Parentheses",
                    "titleSlug": "longest-valid-parentheses",
                    "translatedTitle": "\u6700\u957f\u6709\u6548\u62ec\u53f7",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4030232852971612,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 33,
                    "paidOnly": false,
                    "questionFrontendId": "33",
                    "status": "TO_DO",
                    "title": "Search in Rotated Sorted Array",
                    "titleSlug": "search-in-rotated-sorted-array",
                    "translatedTitle": "\u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4538796009860073,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 34,
                    "paidOnly": false,
                    "questionFrontendId": "34",
                    "status": "ATTEMPTED",
                    "title": "Find First and Last Position of Element in Sorted Array",
                    "titleSlug": "find-first-and-last-position-of-element-in-sorted-array",
                    "translatedTitle": "\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.45651088756155617,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 35,
                    "paidOnly": false,
                    "questionFrontendId": "35",
                    "status": "TO_DO",
                    "title": "Search Insert Position",
                    "titleSlug": "search-insert-position",
                    "translatedTitle": "\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.485340836337727,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 36,
                    "paidOnly": false,
                    "questionFrontendId": "36",
                    "status": "TO_DO",
                    "title": "Valid Sudoku",
                    "titleSlug": "valid-sudoku",
                    "translatedTitle": "\u6709\u6548\u7684\u6570\u72ec",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.643771191754103,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 37,
                    "paidOnly": false,
                    "questionFrontendId": "37",
                    "status": "TO_DO",
                    "title": "Sudoku Solver",
                    "titleSlug": "sudoku-solver",
                    "translatedTitle": "\u89e3\u6570\u72ec",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6753180489997752,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 38,
                    "paidOnly": false,
                    "questionFrontendId": "38",
                    "status": "TO_DO",
                    "title": "Count and Say",
                    "titleSlug": "count-and-say",
                    "translatedTitle": "\u5916\u89c2\u6570\u5217",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6157179884337275,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 39,
                    "paidOnly": false,
                    "questionFrontendId": "39",
                    "status": "TO_DO",
                    "title": "Combination Sum",
                    "titleSlug": "combination-sum",
                    "translatedTitle": "\u7ec4\u5408\u603b\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7403732812303481,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 40,
                    "paidOnly": false,
                    "questionFrontendId": "40",
                    "status": "TO_DO",
                    "title": "Combination Sum II",
                    "titleSlug": "combination-sum-ii",
                    "translatedTitle": "\u7ec4\u5408\u603b\u548c II",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6009752598967807,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 41,
                    "paidOnly": false,
                    "questionFrontendId": "41",
                    "status": "TO_DO",
                    "title": "First Missing Positive",
                    "titleSlug": "first-missing-positive",
                    "translatedTitle": "\u7f3a\u5931\u7684\u7b2c\u4e00\u4e2a\u6b63\u6570",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4775588376589794,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 42,
                    "paidOnly": false,
                    "questionFrontendId": "42",
                    "status": "TO_DO",
                    "title": "Trapping Rain Water",
                    "titleSlug": "trapping-rain-water",
                    "translatedTitle": "\u63a5\u96e8\u6c34",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyj5r5",
                            "name": "Monotonic Stack",
                            "slug": "monotonic-stack",
                            "nameTranslated": "\u5355\u8c03\u6808",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.655985480040317,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 43,
                    "paidOnly": false,
                    "questionFrontendId": "43",
                    "status": "TO_DO",
                    "title": "Multiply Strings",
                    "titleSlug": "multiply-strings",
                    "translatedTitle": "\u5b57\u7b26\u4e32\u76f8\u4e58",
                    "topicTags": [
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyjfe6",
                            "name": "Simulation",
                            "slug": "simulation",
                            "nameTranslated": "\u6a21\u62df",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4479794608356404,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 44,
                    "paidOnly": false,
                    "questionFrontendId": "44",
                    "status": "TO_DO",
                    "title": "Wildcard Matching",
                    "titleSlug": "wildcard-matching",
                    "translatedTitle": "\u901a\u914d\u7b26\u5339\u914d",
                    "topicTags": [
                        {
                            "id": "n7hqh",
                            "name": "Greedy",
                            "slug": "greedy",
                            "nameTranslated": "\u8d2a\u5fc3",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.344975129596072,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 45,
                    "paidOnly": false,
                    "questionFrontendId": "45",
                    "status": "TO_DO",
                    "title": "Jump Game II",
                    "titleSlug": "jump-game-ii",
                    "translatedTitle": "\u8df3\u8dc3\u6e38\u620f II",
                    "topicTags": [
                        {
                            "id": "n7hqh",
                            "name": "Greedy",
                            "slug": "greedy",
                            "nameTranslated": "\u8d2a\u5fc3",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.45131951225887285,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 46,
                    "paidOnly": false,
                    "questionFrontendId": "46",
                    "status": "TO_DO",
                    "title": "Permutations",
                    "titleSlug": "permutations",
                    "translatedTitle": "\u5168\u6392\u5217",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.8053125236659109,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 47,
                    "paidOnly": false,
                    "questionFrontendId": "47",
                    "status": "TO_DO",
                    "title": "Permutations II",
                    "titleSlug": "permutations-ii",
                    "translatedTitle": "\u5168\u6392\u5217 II",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6678752300334853,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 48,
                    "paidOnly": false,
                    "questionFrontendId": "48",
                    "status": "TO_DO",
                    "title": "Rotate Image",
                    "titleSlug": "rotate-image",
                    "translatedTitle": "\u65cb\u8f6c\u56fe\u50cf",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7882667645241038,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 49,
                    "paidOnly": false,
                    "questionFrontendId": "49",
                    "status": "TO_DO",
                    "title": "Group Anagrams",
                    "titleSlug": "group-anagrams",
                    "translatedTitle": "\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.699492627523642,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 50,
                    "paidOnly": false,
                    "questionFrontendId": "50",
                    "status": "TO_DO",
                    "title": "Pow(x, n)",
                    "titleSlug": "powx-n",
                    "translatedTitle": "Pow(x, n)",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.3892937940486789,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 51,
                    "paidOnly": false,
                    "questionFrontendId": "51",
                    "status": "TO_DO",
                    "title": "N-Queens",
                    "titleSlug": "n-queens",
                    "translatedTitle": "N \u7687\u540e",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7552481211732793,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 52,
                    "paidOnly": false,
                    "questionFrontendId": "52",
                    "status": "TO_DO",
                    "title": "N-Queens II",
                    "titleSlug": "n-queens-ii",
                    "translatedTitle": "N \u7687\u540e II",
                    "topicTags": [
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.8317326530442104,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 53,
                    "paidOnly": false,
                    "questionFrontendId": "53",
                    "status": "TO_DO",
                    "title": "Maximum Subarray",
                    "titleSlug": "maximum-subarray",
                    "translatedTitle": "\u6700\u5927\u5b50\u6570\u7ec4\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dp403",
                            "name": "Divide and Conquer",
                            "slug": "divide-and-conquer",
                            "nameTranslated": "\u5206\u6cbb",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5628701862410898,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 54,
                    "paidOnly": false,
                    "questionFrontendId": "54",
                    "status": "TO_DO",
                    "title": "Spiral Matrix",
                    "titleSlug": "spiral-matrix",
                    "translatedTitle": "\u87ba\u65cb\u77e9\u9635",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyjfe6",
                            "name": "Simulation",
                            "slug": "simulation",
                            "nameTranslated": "\u6a21\u62df",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5401156025872192,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 55,
                    "paidOnly": false,
                    "questionFrontendId": "55",
                    "status": "TO_DO",
                    "title": "Jump Game",
                    "titleSlug": "jump-game",
                    "translatedTitle": "\u8df3\u8dc3\u6e38\u620f",
                    "topicTags": [
                        {
                            "id": "n7hqh",
                            "name": "Greedy",
                            "slug": "greedy",
                            "nameTranslated": "\u8d2a\u5fc3",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.44082154810421265,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 56,
                    "paidOnly": false,
                    "questionFrontendId": "56",
                    "status": "TO_DO",
                    "title": "Merge Intervals",
                    "titleSlug": "merge-intervals",
                    "translatedTitle": "\u5408\u5e76\u533a\u95f4",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5194321304283321,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 57,
                    "paidOnly": false,
                    "questionFrontendId": "57",
                    "status": "TO_DO",
                    "title": "Insert Interval",
                    "titleSlug": "insert-interval",
                    "translatedTitle": "\u63d2\u5165\u533a\u95f4",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.42851622088884367,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 58,
                    "paidOnly": false,
                    "questionFrontendId": "58",
                    "status": "TO_DO",
                    "title": "Length of Last Word",
                    "titleSlug": "length-of-last-word",
                    "translatedTitle": "\u6700\u540e\u4e00\u4e2a\u5355\u8bcd\u7684\u957f\u5ea6",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.48208179691553205,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 59,
                    "paidOnly": false,
                    "questionFrontendId": "59",
                    "status": "TO_DO",
                    "title": "Spiral Matrix II",
                    "titleSlug": "spiral-matrix-ii",
                    "translatedTitle": "\u87ba\u65cb\u77e9\u9635 II",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyjfe6",
                            "name": "Simulation",
                            "slug": "simulation",
                            "nameTranslated": "\u6a21\u62df",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7040151764848743,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 60,
                    "paidOnly": false,
                    "questionFrontendId": "60",
                    "status": "TO_DO",
                    "title": "Permutation Sequence",
                    "titleSlug": "permutation-sequence",
                    "translatedTitle": "\u6392\u5217\u5e8f\u5217",
                    "topicTags": [
                        {
                            "id": "nbdc3",
                            "name": "Recursion",
                            "slug": "recursion",
                            "nameTranslated": "\u9012\u5f52",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5435698798996321,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 61,
                    "paidOnly": false,
                    "questionFrontendId": "61",
                    "status": "TO_DO",
                    "title": "Rotate List",
                    "titleSlug": "rotate-list",
                    "translatedTitle": "\u65cb\u8f6c\u94fe\u8868",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.41422284103464735,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 62,
                    "paidOnly": false,
                    "questionFrontendId": "62",
                    "status": "TO_DO",
                    "title": "Unique Paths",
                    "titleSlug": "unique-paths",
                    "translatedTitle": "\u4e0d\u540c\u8def\u5f84",
                    "topicTags": [
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "rwhb85",
                            "name": "Combinatorics",
                            "slug": "combinatorics",
                            "nameTranslated": "\u7ec4\u5408\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6975589716864115,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 63,
                    "paidOnly": false,
                    "questionFrontendId": "63",
                    "status": "TO_DO",
                    "title": "Unique Paths II",
                    "titleSlug": "unique-paths-ii",
                    "translatedTitle": "\u4e0d\u540c\u8def\u5f84 II",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4235857129973678,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 64,
                    "paidOnly": false,
                    "questionFrontendId": "64",
                    "status": "TO_DO",
                    "title": "Minimum Path Sum",
                    "titleSlug": "minimum-path-sum",
                    "translatedTitle": "\u6700\u5c0f\u8def\u5f84\u548c",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7222362028253289,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 65,
                    "paidOnly": false,
                    "questionFrontendId": "65",
                    "status": "TO_DO",
                    "title": "Valid Number",
                    "titleSlug": "valid-number",
                    "translatedTitle": "\u6709\u6548\u6570\u5b57",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.28017349437310907,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 66,
                    "paidOnly": false,
                    "questionFrontendId": "66",
                    "status": "TO_DO",
                    "title": "Plus One",
                    "titleSlug": "plus-one",
                    "translatedTitle": "\u52a0\u4e00",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4692159053020402,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 67,
                    "paidOnly": false,
                    "questionFrontendId": "67",
                    "status": "TO_DO",
                    "title": "Add Binary",
                    "titleSlug": "add-binary",
                    "translatedTitle": "\u4e8c\u8fdb\u5236\u6c42\u548c",
                    "topicTags": [
                        {
                            "id": "nizi1",
                            "name": "Bit Manipulation",
                            "slug": "bit-manipulation",
                            "nameTranslated": "\u4f4d\u8fd0\u7b97",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyjfe6",
                            "name": "Simulation",
                            "slug": "simulation",
                            "nameTranslated": "\u6a21\u62df",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5401911293281525,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 68,
                    "paidOnly": false,
                    "questionFrontendId": "68",
                    "status": "TO_DO",
                    "title": "Text Justification",
                    "titleSlug": "text-justification",
                    "translatedTitle": "\u6587\u672c\u5de6\u53f3\u5bf9\u9f50",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyjfe6",
                            "name": "Simulation",
                            "slug": "simulation",
                            "nameTranslated": "\u6a21\u62df",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5672709397164899,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 69,
                    "paidOnly": false,
                    "questionFrontendId": "69",
                    "status": "TO_DO",
                    "title": "Sqrt(x)",
                    "titleSlug": "sqrtx",
                    "translatedTitle": "x \u7684\u5e73\u65b9\u6839 ",
                    "topicTags": [
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.38801362017247176,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 70,
                    "paidOnly": false,
                    "questionFrontendId": "70",
                    "status": "TO_DO",
                    "title": "Climbing Stairs",
                    "titleSlug": "climbing-stairs",
                    "translatedTitle": "\u722c\u697c\u68af",
                    "topicTags": [
                        {
                            "id": "vhos7",
                            "name": "Memoization",
                            "slug": "memoization",
                            "nameTranslated": "\u8bb0\u5fc6\u5316\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5541308230117415,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 71,
                    "paidOnly": false,
                    "questionFrontendId": "71",
                    "status": "TO_DO",
                    "title": "Simplify Path",
                    "titleSlug": "simplify-path",
                    "translatedTitle": "\u7b80\u5316\u8def\u5f84",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4770753723205432,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 72,
                    "paidOnly": false,
                    "questionFrontendId": "72",
                    "status": "TO_DO",
                    "title": "Edit Distance",
                    "titleSlug": "edit-distance",
                    "translatedTitle": "\u7f16\u8f91\u8ddd\u79bb",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6383841671469378,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 73,
                    "paidOnly": false,
                    "questionFrontendId": "73",
                    "status": "TO_DO",
                    "title": "Set Matrix Zeroes",
                    "titleSlug": "set-matrix-zeroes",
                    "translatedTitle": "\u77e9\u9635\u7f6e\u96f6",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7100543658230805,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 74,
                    "paidOnly": false,
                    "questionFrontendId": "74",
                    "status": "TO_DO",
                    "title": "Search a 2D Matrix",
                    "titleSlug": "search-a-2d-matrix",
                    "translatedTitle": "\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5158031896127093,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 75,
                    "paidOnly": false,
                    "questionFrontendId": "75",
                    "status": "TO_DO",
                    "title": "Sort Colors",
                    "titleSlug": "sort-colors",
                    "translatedTitle": "\u989c\u8272\u5206\u7c7b",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6302979548793459,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 76,
                    "paidOnly": false,
                    "questionFrontendId": "76",
                    "status": "TO_DO",
                    "title": "Minimum Window Substring",
                    "titleSlug": "minimum-window-substring",
                    "translatedTitle": "\u6700\u5c0f\u8986\u76d6\u5b50\u4e32",
                    "topicTags": [
                        {
                            "id": "wzve3",
                            "name": "Hash Table",
                            "slug": "hash-table",
                            "nameTranslated": "\u54c8\u5e0c\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "x571onh",
                            "name": "Sliding Window",
                            "slug": "sliding-window",
                            "nameTranslated": "\u6ed1\u52a8\u7a97\u53e3",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4810295205253638,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 77,
                    "paidOnly": false,
                    "questionFrontendId": "77",
                    "status": "TO_DO",
                    "title": "Combinations",
                    "titleSlug": "combinations",
                    "translatedTitle": "\u7ec4\u5408",
                    "topicTags": [
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7774971779151402,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 78,
                    "paidOnly": false,
                    "questionFrontendId": "78",
                    "status": "TO_DO",
                    "title": "Subsets",
                    "titleSlug": "subsets",
                    "translatedTitle": "\u5b50\u96c6",
                    "topicTags": [
                        {
                            "id": "nizi1",
                            "name": "Bit Manipulation",
                            "slug": "bit-manipulation",
                            "nameTranslated": "\u4f4d\u8fd0\u7b97",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.8236977057616085,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 79,
                    "paidOnly": false,
                    "questionFrontendId": "79",
                    "status": "TO_DO",
                    "title": "Word Search",
                    "titleSlug": "word-search",
                    "translatedTitle": "\u5355\u8bcd\u641c\u7d22",
                    "topicTags": [
                        {
                            "id": "n8id6",
                            "name": "Depth-First Search",
                            "slug": "depth-first-search",
                            "nameTranslated": "\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4953646785404231,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 80,
                    "paidOnly": false,
                    "questionFrontendId": "80",
                    "status": "TO_DO",
                    "title": "Remove Duplicates from Sorted Array II",
                    "titleSlug": "remove-duplicates-from-sorted-array-ii",
                    "translatedTitle": "\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879 II",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6348554076738365,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 81,
                    "paidOnly": false,
                    "questionFrontendId": "81",
                    "status": "TO_DO",
                    "title": "Search in Rotated Sorted Array II",
                    "titleSlug": "search-in-rotated-sorted-array-ii",
                    "translatedTitle": "\u641c\u7d22\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4 II",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "drclh",
                            "name": "Binary Search",
                            "slug": "binary-search",
                            "nameTranslated": "\u4e8c\u5206\u67e5\u627e",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.41534713961636216,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 82,
                    "paidOnly": false,
                    "questionFrontendId": "82",
                    "status": "TO_DO",
                    "title": "Remove Duplicates from Sorted List II",
                    "titleSlug": "remove-duplicates-from-sorted-list-ii",
                    "translatedTitle": "\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20 II",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5519431559115953,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 83,
                    "paidOnly": false,
                    "questionFrontendId": "83",
                    "status": "TO_DO",
                    "title": "Remove Duplicates from Sorted List",
                    "titleSlug": "remove-duplicates-from-sorted-list",
                    "translatedTitle": "\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5460936185403159,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 84,
                    "paidOnly": false,
                    "questionFrontendId": "84",
                    "status": "TO_DO",
                    "title": "Largest Rectangle in Histogram",
                    "titleSlug": "largest-rectangle-in-histogram",
                    "translatedTitle": "\u67f1\u72b6\u56fe\u4e2d\u6700\u5927\u7684\u77e9\u5f62",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyj5r5",
                            "name": "Monotonic Stack",
                            "slug": "monotonic-stack",
                            "nameTranslated": "\u5355\u8c03\u6808",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.47953139621496593,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 85,
                    "paidOnly": false,
                    "questionFrontendId": "85",
                    "status": "TO_DO",
                    "title": "Maximal Rectangle",
                    "titleSlug": "maximal-rectangle",
                    "translatedTitle": "\u6700\u5927\u77e9\u5f62",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "uw538v",
                            "name": "Matrix",
                            "slug": "matrix",
                            "nameTranslated": "\u77e9\u9635",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "xeyj5r5",
                            "name": "Monotonic Stack",
                            "slug": "monotonic-stack",
                            "nameTranslated": "\u5355\u8c03\u6808",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5593838181982507,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 86,
                    "paidOnly": false,
                    "questionFrontendId": "86",
                    "status": "TO_DO",
                    "title": "Partition List",
                    "titleSlug": "partition-list",
                    "translatedTitle": "\u5206\u9694\u94fe\u8868",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.657864564930523,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "HARD",
                    "id": 87,
                    "paidOnly": false,
                    "questionFrontendId": "87",
                    "status": "TO_DO",
                    "title": "Scramble String",
                    "titleSlug": "scramble-string",
                    "translatedTitle": "\u6270\u4e71\u5b57\u7b26\u4e32",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.471776498584172,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 88,
                    "paidOnly": false,
                    "questionFrontendId": "88",
                    "status": "TO_DO",
                    "title": "Merge Sorted Array",
                    "titleSlug": "merge-sorted-array",
                    "translatedTitle": "\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",
                    "topicTags": [
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "do5us",
                            "name": "Two Pointers",
                            "slug": "two-pointers",
                            "nameTranslated": "\u53cc\u6307\u9488",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "1v8x3g",
                            "name": "Sorting",
                            "slug": "sorting",
                            "nameTranslated": "\u6392\u5e8f",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5493028662010258,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 89,
                    "paidOnly": false,
                    "questionFrontendId": "89",
                    "status": "TO_DO",
                    "title": "Gray Code",
                    "titleSlug": "gray-code",
                    "translatedTitle": "\u683c\u96f7\u7f16\u7801",
                    "topicTags": [
                        {
                            "id": "nizi1",
                            "name": "Bit Manipulation",
                            "slug": "bit-manipulation",
                            "nameTranslated": "\u4f4d\u8fd0\u7b97",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.753565941339401,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 90,
                    "paidOnly": false,
                    "questionFrontendId": "90",
                    "status": "TO_DO",
                    "title": "Subsets II",
                    "titleSlug": "subsets-ii",
                    "translatedTitle": "\u5b50\u96c6 II",
                    "topicTags": [
                        {
                            "id": "nizi1",
                            "name": "Bit Manipulation",
                            "slug": "bit-manipulation",
                            "nameTranslated": "\u4f4d\u8fd0\u7b97",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "wg0rh",
                            "name": "Array",
                            "slug": "array",
                            "nameTranslated": "\u6570\u7ec4",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6401825245484832,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 91,
                    "paidOnly": false,
                    "questionFrontendId": "91",
                    "status": "TO_DO",
                    "title": "Decode Ways",
                    "titleSlug": "decode-ways",
                    "translatedTitle": "\u89e3\u7801\u65b9\u6cd5",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.3460861505291845,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 92,
                    "paidOnly": false,
                    "questionFrontendId": "92",
                    "status": "TO_DO",
                    "title": "Reverse Linked List II",
                    "titleSlug": "reverse-linked-list-ii",
                    "translatedTitle": "\u53cd\u8f6c\u94fe\u8868 II",
                    "topicTags": [
                        {
                            "id": "d9m3t",
                            "name": "Linked List",
                            "slug": "linked-list",
                            "nameTranslated": "\u94fe\u8868",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.5771744098213225,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 93,
                    "paidOnly": false,
                    "questionFrontendId": "93",
                    "status": "TO_DO",
                    "title": "Restore IP Addresses",
                    "titleSlug": "restore-ip-addresses",
                    "translatedTitle": "\u590d\u539f IP \u5730\u5740",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.617240285083605,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 94,
                    "paidOnly": false,
                    "questionFrontendId": "94",
                    "status": "TO_DO",
                    "title": "Binary Tree Inorder Traversal",
                    "titleSlug": "binary-tree-inorder-traversal",
                    "translatedTitle": "\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",
                    "topicTags": [
                        {
                            "id": "nn04j",
                            "name": "Stack",
                            "slug": "stack",
                            "nameTranslated": "\u6808",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "nt875",
                            "name": "Tree",
                            "slug": "tree",
                            "nameTranslated": "\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "n8id6",
                            "name": "Depth-First Search",
                            "slug": "depth-first-search",
                            "nameTranslated": "\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ehgq01",
                            "name": "Binary Tree",
                            "slug": "binary-tree",
                            "nameTranslated": "\u4e8c\u53c9\u6811",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7830487924057636,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 95,
                    "paidOnly": false,
                    "questionFrontendId": "95",
                    "status": "TO_DO",
                    "title": "Unique Binary Search Trees II",
                    "titleSlug": "unique-binary-search-trees-ii",
                    "translatedTitle": "\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811 II",
                    "topicTags": [
                        {
                            "id": "nt875",
                            "name": "Tree",
                            "slug": "tree",
                            "nameTranslated": "\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ncljh",
                            "name": "Binary Search Tree",
                            "slug": "binary-search-tree",
                            "nameTranslated": "\u4e8c\u53c9\u641c\u7d22\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "dnl25",
                            "name": "Backtracking",
                            "slug": "backtracking",
                            "nameTranslated": "\u56de\u6eaf",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ehgq01",
                            "name": "Binary Tree",
                            "slug": "binary-tree",
                            "nameTranslated": "\u4e8c\u53c9\u6811",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7463582045331095,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 96,
                    "paidOnly": false,
                    "questionFrontendId": "96",
                    "status": "TO_DO",
                    "title": "Unique Binary Search Trees",
                    "titleSlug": "unique-binary-search-trees",
                    "translatedTitle": "\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811",
                    "topicTags": [
                        {
                            "id": "nt875",
                            "name": "Tree",
                            "slug": "tree",
                            "nameTranslated": "\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ncljh",
                            "name": "Binary Search Tree",
                            "slug": "binary-search-tree",
                            "nameTranslated": "\u4e8c\u53c9\u641c\u7d22\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "deo8r",
                            "name": "Math",
                            "slug": "math",
                            "nameTranslated": "\u6570\u5b66",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ehgq01",
                            "name": "Binary Tree",
                            "slug": "binary-tree",
                            "nameTranslated": "\u4e8c\u53c9\u6811",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.7150880613204922,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 97,
                    "paidOnly": false,
                    "questionFrontendId": "97",
                    "status": "TO_DO",
                    "title": "Interleaving String",
                    "titleSlug": "interleaving-string",
                    "translatedTitle": "\u4ea4\u9519\u5b57\u7b26\u4e32",
                    "topicTags": [
                        {
                            "id": "dofid",
                            "name": "String",
                            "slug": "string",
                            "nameTranslated": "\u5b57\u7b26\u4e32",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "d2tn7",
                            "name": "Dynamic Programming",
                            "slug": "dynamic-programming",
                            "nameTranslated": "\u52a8\u6001\u89c4\u5212",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.4623476125973586,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 98,
                    "paidOnly": false,
                    "questionFrontendId": "98",
                    "status": "TO_DO",
                    "title": "Validate Binary Search Tree",
                    "titleSlug": "validate-binary-search-tree",
                    "translatedTitle": "\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811",
                    "topicTags": [
                        {
                            "id": "nt875",
                            "name": "Tree",
                            "slug": "tree",
                            "nameTranslated": "\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "n8id6",
                            "name": "Depth-First Search",
                            "slug": "depth-first-search",
                            "nameTranslated": "\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ncljh",
                            "name": "Binary Search Tree",
                            "slug": "binary-search-tree",
                            "nameTranslated": "\u4e8c\u53c9\u641c\u7d22\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ehgq01",
                            "name": "Binary Tree",
                            "slug": "binary-tree",
                            "nameTranslated": "\u4e8c\u53c9\u6811",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.39773943590955796,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "MEDIUM",
                    "id": 99,
                    "paidOnly": false,
                    "questionFrontendId": "99",
                    "status": "TO_DO",
                    "title": "Recover Binary Search Tree",
                    "titleSlug": "recover-binary-search-tree",
                    "translatedTitle": "\u6062\u590d\u4e8c\u53c9\u641c\u7d22\u6811",
                    "topicTags": [
                        {
                            "id": "nt875",
                            "name": "Tree",
                            "slug": "tree",
                            "nameTranslated": "\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "n8id6",
                            "name": "Depth-First Search",
                            "slug": "depth-first-search",
                            "nameTranslated": "\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ncljh",
                            "name": "Binary Search Tree",
                            "slug": "binary-search-tree",
                            "nameTranslated": "\u4e8c\u53c9\u641c\u7d22\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ehgq01",
                            "name": "Binary Tree",
                            "slug": "binary-tree",
                            "nameTranslated": "\u4e8c\u53c9\u6811",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6149482516275843,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                },
                {
                    "difficulty": "EASY",
                    "id": 100,
                    "paidOnly": false,
                    "questionFrontendId": "100",
                    "status": "TO_DO",
                    "title": "Same Tree",
                    "titleSlug": "same-tree",
                    "translatedTitle": "\u76f8\u540c\u7684\u6811",
                    "topicTags": [
                        {
                            "id": "nt875",
                            "name": "Tree",
                            "slug": "tree",
                            "nameTranslated": "\u6811",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "n8id6",
                            "name": "Depth-First Search",
                            "slug": "depth-first-search",
                            "nameTranslated": "\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "n30w2",
                            "name": "Breadth-First Search",
                            "slug": "breadth-first-search",
                            "nameTranslated": "\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",
                            "__typename": "CommonTagNode"
                        },
                        {
                            "id": "ehgq01",
                            "name": "Binary Tree",
                            "slug": "binary-tree",
                            "nameTranslated": "\u4e8c\u53c9\u6811",
                            "__typename": "CommonTagNode"
                        }
                    ],
                    "frequency": null,
                    "isInMyFavorites": false,
                    "acRate": 0.6348692900311073,
                    "contestPoint": null,
                    "__typename": "ProblemSetQuestionNode"
                }
            ],
            "totalLength": 4044,
            "finishedLength": 1,
            "panelName": "\u9898\u5e93",
            "hasMore": true
        }
    }
}

const questions = json.data.problemsetPanelQuestionList.questions

for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    const template = `# ${question.translatedTitle}
[来源](https://leetcode.cn/problems/${question.titleSlug}/)

## 实现

### typescript 实现

<<< @/leetcode/test/${index + 1}.${question.translatedTitle}.ts

`
    const id = index + 1;
    const fileTitle = `${id}.${question.translatedTitle}`

    // 获取当前模块的 URL
    const moduleUrl = import.meta.url;
    // 将模块 URL 转换为文件路径
    const filePath = url.fileURLToPath(moduleUrl);
    // 获取当前文件所在的目录路径
    const dirPath = path.dirname(filePath);
    const target = path.join(dirPath, `../questions/${fileTitle}.md`)
    const testTarget = path.join(dirPath, `../test/${fileTitle}.ts`)
    // console.log(target)
    if (!fs.existsSync(target)) {
        fs.writeFileSync(target, template)
    }
    // 生成test执行文件
    if (!fs.existsSync(testTarget)) {
        fs.writeFileSync(testTarget, `// # ${question.translatedTitle}

import { describe, it, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  return [];
}

describe("${question.translatedTitle}", () => {
  let result: unknown;
  let expected: unknown;
  it("测试用例1", () => {
    result = twoSum([2, 7, 11, 15], 9);
    expected = [0, 1];
    expect(result).eql(expected);
  });
});
            `)
    }
}

// 生成列表
for (const index in questions) {
    const question = questions[index];
    let title = `${Number(index) + 1}.${question.translatedTitle}`
    title = title.replaceAll(" ", "")
    const template = `- [ ] [${title}](./questions/${title}.md)`
    // console.log(template)
}