export const PROBLEMS = {
  
  // easy problems
  
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a stock on the i-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a later day to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 1 (price = 1) and sell on day 4 (price = 6), profit = 6 - 1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transaction is done, so the maximum profit is 0.",
      },
    ],
    constraints: [
      "1 ≤ prices.length ≤ 10⁵",
      "0 ≤ prices[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find and return the element that appears exactly once.",
      notes: [
        "You must implement a solution with a linear runtime complexity and use only constant extra space.",
      ],
    },
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴",
      "Each element appears exactly twice except for one element which appears exactly once",
    ],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test cases
console.log(singleNumber([2,2,1]));       // Expected: 1
console.log(singleNumber([4,1,2,1,2]));   // Expected: 4
console.log(singleNumber([1]));           // Expected: 1`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))        # Expected: 1
print(singleNumber([4,1,2,1,2]))    # Expected: 4
print(singleNumber([1]))            # Expected: 1`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));      // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2}));  // Expected: 4
        System.out.println(singleNumber(new int[]{1}));          // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Divide and Conquer",
    description: {
      text: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
      notes: [
        "You may assume that the majority element always exists in the array.",
      ],
    },
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2]",
        output: "2",
      },
    ],
    constraints: [
      "n == nums.length",
      "1 ≤ n ≤ 5 * 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "The majority element always exists in the array",
    ],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
  
}

// Test cases
console.log(majorityElement([3,2,3]));              // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2]));      // Expected: 2`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))               # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))       # Expected: 2`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3}));              // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2}));      // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2",
      python: "3\n2",
      java: "3\n2",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if open brackets are closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
      {
        input: 's = "([)]"',
        output: "false",
      },
      {
        input: 's = "{[]}"',
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists only of parentheses characters '()[]{}'",
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()"));      // Expected: true
console.log(isValid("()[]{}"));  // Expected: true
console.log(isValid("(]"));      // Expected: false
console.log(isValid("([)]"));    // Expected: false
console.log(isValid("{[]}"));    // Expected: true`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))       # Expected: True
print(isValid("()[]{}"))   # Expected: True
print(isValid("(]"))       # Expected: False
print(isValid("([)]"))     # Expected: False
print(isValid("{[]}"))     # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));       // Expected: true
        System.out.println(isValid("()[]{}"));   // Expected: true
        System.out.println(isValid("(]"));       // Expected: false
        System.out.println(isValid("([)]"));     // Expected: false
        System.out.println(isValid("{[]}"));     // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\nfalse\ntrue",
      python: "True\nTrue\nFalse\nFalse\nTrue",
      java: "true\ntrue\nfalse\nfalse\ntrue",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps.",
      notes: [
        "Given n, return the number of distinct ways you can climb to the top.",
      ],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "1 step + 1 step, or 2 steps.",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "1+1+1, 1+2, or 2+1.",
      },
    ],
    constraints: [
      "1 ≤ n ≤ 45",
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "You are given a large integer represented as an integer array digits, where each digits[i] is the i-th digit of the number.",
      notes: [
        "Digits are ordered from most significant to least significant.",
        "Increment the large integer by one and return the resulting array of digits.",
      ],
    },
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
        explanation: "The integer 123 + 1 becomes 124.",
      },
      {
        input: "digits = [4,3,2,1]",
        output: "[4,3,2,2]",
        explanation: "The integer 4321 + 1 becomes 4322.",
      },
      {
        input: "digits = [9]",
        output: "[1,0]",
        explanation: "The integer 9 + 1 becomes 10.",
      },
    ],
    constraints: [
      "1 ≤ digits.length ≤ 100",
      "0 ≤ digits[i] ≤ 9",
      "digits does not contain leading zeros unless the number is 0 itself",
    ],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
  
}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

# Test cases
print(plusOne([1,2,3]))      # Expected: [1, 2, 4]
print(plusOne([4,3,2,1]))    # Expected: [4, 3, 2, 2]
print(plusOne([9]))          # Expected: [1, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));   // Expected: [1, 2, 4]
        System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1}))); // Expected: [4, 3, 2, 2]
        System.out.println(Arrays.toString(plusOne(new int[]{9})));       // Expected: [1, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]",
      python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
      java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: [
        "An anagram is a word or phrase formed by rearranging the letters of another using all original letters exactly once.",
      ],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car"));         // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car"));         // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "merge-two-sorted-lists": {
  id: "merge-two-sorted-lists",
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Merge two sorted linked lists and return the merged list as a sorted list.",
    notes: [
      "The returned list should be made by splicing together the nodes of the first two lists."
    ],
  },
  examples: [
    {
      input: "list1 = [1,2,4], list2 = [1,3,4]",
      output: "[1,1,2,3,4,4]",
    },
    {
      input: "list1 = [], list2 = []",
      output: "[]",
    },
    {
      input: "list1 = [], list2 = [0]",
      output: "[0]",
    },
  ],
  constraints: [
    "The number of nodes in both lists is in the range [0, 50]",
    "-100 ≤ Node.val ≤ 100",
    "Both list1 and list2 are sorted in non-decreasing order",
  ],
  starterCode: {
    javascript: `function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

// Test cases
console.log( mergeTwoLists([1,2,4], [1,3,4]) ); // Expected: [1,1,2,3,4,4]
console.log( mergeTwoLists([], []) ); // Expected: []
console.log( mergeTwoLists([], [0]) ); // Expected: [0]`,
    python: `def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Test cases
print(mergeTwoLists([1,2,4], [1,3,4]))  # Expected: [1,1,2,3,4,4]
print(mergeTwoLists([], []))           # Expected: []
print(mergeTwoLists([], [0]))          # Expected: [0]`,
    java: `import java.util.*;

class Solution {
    public static List<Integer> mergeTwoLists(List<Integer> list1, List<Integer> list2) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(mergeTwoLists(Arrays.asList(1,2,4), Arrays.asList(1,3,4))); // [1,1,2,3,4,4]
        System.out.println(mergeTwoLists(Arrays.asList(), Arrays.asList())); // []
        System.out.println(mergeTwoLists(Arrays.asList(), Arrays.asList(0))); // [0]
    }
}`,
  },
  expectedOutput: {
    javascript: "[1,1,2,3,4,4]\n[]\n[0]",
    python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
    java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
  },
  },

  "remove-duplicates-from-sorted-array": {
  id: "remove-duplicates-from-sorted-array",
  title: "Remove Duplicates from Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Remove duplicates in-place so that each element appears only once and return the new length.",
    notes: [
      "The relative order of elements should be kept the same.",
      "Modify the array in-place."
    ],
  },
  examples: [
    {
      input: "nums = [1,1,2]",
      output: "2, nums = [1,2,_]",
    },
    {
      input: "nums = [0,0,1,1,1,2,2,3,3,4]",
      output: "5, nums = [0,1,2,3,4,_]",
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 3 * 10⁴",
    "-100 ≤ nums[i] ≤ 100",
    "nums is sorted in non-decreasing order"
  ],
  starterCode: {
    javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}

// Test cases
let arr1 = [1,1,2];
console.log(removeDuplicates(arr1)); // Expected: 2

let arr2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr2)); // Expected: 5`,
    python: `def removeDuplicates(nums):
    # Write your solution here
    pass

# Test cases
arr1 = [1,1,2]
print(removeDuplicates(arr1))  # Expected: 2

arr2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(arr2))  # Expected: 5`,
    java: `class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates(new int[]{1,1,2})); // Expected: 2
        System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4})); // Expected: 5
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n5",
    python: "2\n5",
    java: "2\n5",
  }
  },

  "intersection-of-two-arrays-ii": {
  id: "intersection-of-two-arrays-ii",
  title: "Intersection of Two Arrays II",
  difficulty: "Easy",
  category: "Array • Hash Table",
  description: {
    text: "Given two arrays, return an array of their intersection where each element appears as many times as it shows in both arrays.",
      notes: [],
  },
  examples: [
    {
      input: "nums1 = [1,2,2,1], nums2 = [2,2]",
      output: "[2,2]"
    },
    {
      input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
      output: "[4,9]"
    }
  ],
  constraints: [
    "1 ≤ nums1.length, nums2.length ≤ 1000",
    "0 ≤ nums1[i], nums2[i] ≤ 1000"
  ],
  starterCode: {
    javascript: `function intersect(nums1, nums2) {
  // Write your solution here
  
}

// Test cases
console.log(intersect([1,2,2,1], [2,2])); // Expected: [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // Expected: [4,9]`,
    python: `def intersect(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(intersect([1,2,2,1], [2,2]))        # Expected: [2,2]
print(intersect([4,9,5], [9,4,9,8,4]))    # Expected: [4,9]`,
    java: `import java.util.*;

class Solution {
    public static List<Integer> intersect(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(intersect(new int[]{1,2,2,1}, new int[]{2,2}));   // [2,2]
        System.out.println(intersect(new int[]{4,9,5}, new int[]{9,4,9,8,4})); // [4,9]
    }
}`,
  },
  expectedOutput: {
    javascript: "[2,2]\n[4,9]",
    python: "[2, 2]\n[4, 9]",
    java: "[2, 2]\n[4, 9]",
  }
  },

  "move-zeroes": {
  id: "move-zeroes",
  title: "Move Zeroes",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Move all zeros to the end of the array while maintaining the relative order of non-zero elements.",
    notes: ["Modify nums in-place."],
  },
  examples: [
    {
      input: "nums = [0,1,0,3,12]",
      output: "[1,3,12,0,0]"
    },
    {
      input: "nums = [0]",
      output: "[0]"
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁴"
  ],
  starterCode: {
    javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
let arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr); // Expected: [1,3,12,0,0]`,
    python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
arr = [0,1,0,3,12]
moveZeroes(arr)
print(arr)  # Expected: [1,3,12,0,0]`,
    java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] nums = {0,1,0,3,12};
        moveZeroes(nums);
        System.out.println(Arrays.toString(nums)); // [1,3,12,0,0]
    }
}`,
  },
  expectedOutput: {
    javascript: "[1,3,12,0,0]",
    python: "[1, 3, 12, 0, 0]",
    java: "[1, 3, 12, 0, 0]",
  }
  },

  "palindrome-linked-list": {
  id: "palindrome-linked-list",
  title: "Palindrome Linked List",
  difficulty: "Easy",
  category: "Linked List • Two Pointers",
  description: {
    text: "Given the head of a singly linked list, return true if it is a palindrome.",
    notes: [],
  },
  examples: [
    {
      input: "head = [1,2,2,1]",
      output: "true"
    },
    {
      input: "head = [1,2]",
      output: "false"
    }
  ],
  constraints: [
    "1 ≤ number of nodes ≤ 10⁵",
    "0 ≤ Node.val ≤ 9"
  ],
  starterCode: {
    javascript: `function isPalindromeLinkedList(head) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindromeLinkedList([1,2,2,1])); // Expected: true
console.log(isPalindromeLinkedList([1,2]));     // Expected: false`,
    python: `def isPalindromeLinkedList(head):
    # Write your solution here
    pass

# Test cases
print(isPalindromeLinkedList([1,2,2,1]))  # Expected: True
print(isPalindromeLinkedList([1,2]))      # Expected: False`,
    java: `import java.util.*;

class Solution {
    public static boolean isPalindromeLinkedList(List<Integer> head) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindromeLinkedList(Arrays.asList(1,2,2,1))); // true
        System.out.println(isPalindromeLinkedList(Arrays.asList(1,2)));    // false
    }
}`,
  },
  expectedOutput: {
    javascript: "true\nfalse",
    python: "True\nFalse",
    java: "true\nfalse",
  }
  },

  // medium problems

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "three-sum": {
  id: "three-sum",
  title: "3Sum",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that i != j, j != k, and i != k, and nums[i] + nums[j] + nums[k] == 0.",
    notes: [
      "The solution set must not contain duplicate triplets."
    ],
  },
  examples: [
    {
      input: "nums = [-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]"
    },
    {
      input: "nums = [0,1,1]",
      output: "[]"
    },
    {
      input: "nums = [0,0,0]",
      output: "[[0,0,0]]"
    }
  ],
  constraints: [
    "3 ≤ nums.length ≤ 3000",
    "-10⁵ ≤ nums[i] ≤ 10⁵"
  ],
  starterCode: {
    javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1]));          // Expected: []
console.log(threeSum([0,0,0]));          // Expected: [[0,0,0]]`,
    python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))           # Expected: []
print(threeSum([0,0,0]))           # Expected: [[0,0,0]]`,
    java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1}));          // []
        System.out.println(threeSum(new int[]{0,0,0}));          // [[0,0,0]]
    }
}`,
  },
  expectedOutput: {
    javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
    python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
  }
  },

  "group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Array • Hash Table • String",
  description: {
    text: "Given an array of strings strs, group the anagrams together.",
    notes: [
      "You can return the answer in any order."
    ]
  },
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]'
    },
    {
      input: 'strs = [""]',
      output: '[[""]]'
    },
    {
      input: 'strs = ["a"]',
      output: '[["a"]]'
    }
  ],
  constraints: [
    "1 ≤ strs.length ≤ 10⁴",
    "0 ≤ strs[i].length ≤ 100",
    "strs[i] consists of lowercase English letters"
  ],
  starterCode: {
    javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
    python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
    java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
  },
  expectedOutput: {
    javascript: '[["eat","tea","ate"],["tan","nat"],["bat"]]\n[[""]]\n[["a"]]',
    python: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]\n[['']]\n[['a']]",
    java: "[[eat, tea, ate], [tan, nat], [bat]]\n[[]]\n[[a]]",
  }
  },

  "product-of-array-except-self": {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array • Prefix",
  description: {
    text: "Return an array answer such that answer[i] is the product of all elements except nums[i].",
    notes: [
      "Solve without using division.",
      "Must run in O(n) time."
    ],
  },
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]"
    },
    {
      input: "nums = [-1,1,0,-3,3]",
      output: "[0,0,9,0,0]"
    }
  ],
  constraints: [
    "2 ≤ nums.length ≤ 10⁵",
    "-30 ≤ nums[i] ≤ 30"
  ],
  starterCode: {
    javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
    python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))         # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))     # Expected: [0, 0, 9, 0, 0]`,
    java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // [0,0,9,0,0]
    }
}`,
  },
  expectedOutput: {
    javascript: "[24,12,8,6]\n[0,0,9,0,0]",
    python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
    java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
  }
  },
  
  "sort-colors": {
  id: "sort-colors",
  title: "Sort Colors",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Sort an array containing 0, 1, and 2 using only constant extra space.",
    notes: ["You must solve it in one pass if possible."],
  },
  examples: [
    {
      input: "nums = [2,0,2,1,1,0]",
      output: "[0,0,1,1,2,2]"
    },
    {
      input: "nums = [2,0,1]",
      output: "[0,1,2]"
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 300",
    "nums[i] ∈ {0,1,2}"
  ],
  starterCode: {
    javascript: `function sortColors(nums) {
  // Write your solution here
  
}

// Test case
let arr = [2,0,2,1,1,0];
sortColors(arr);
console.log(arr); // Expected: [0,0,1,1,2,2]`,
    python: `def sortColors(nums):
    # Write your solution here
    pass

# Test case
arr = [2,0,2,1,1,0]
sortColors(arr)
print(arr)  # Expected: [0,0,1,1,2,2]`,
    java: `import java.util.*;

class Solution {
    public static void sortColors(int[] nums) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] arr = {2,0,2,1,1,0};
        sortColors(arr);
        System.out.println(Arrays.toString(arr)); // [0,0,1,1,2,2]
    }
}`,
  },
  expectedOutput: {
    javascript: "[0,0,1,1,2,2]",
    python: "[0, 0, 1, 1, 2, 2]",
    java: "[0, 0, 1, 1, 2, 2]",
  }
  },

  "set-matrix-zeroes": {
  id: "set-matrix-zeroes",
  title: "Set Matrix Zeroes",
  difficulty: "Medium",
  category: "Matrix",
  description: {
    text: "Given an m x n matrix, if an element is 0, set its entire row and column to 0 in-place.",
    notes: ["You must do it in-place."],
  },
  examples: [
    {
      input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
      output: "[[1,0,1],[0,0,0],[1,0,1]]"
    },
    {
      input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
      output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
    }
  ],
  constraints: [
    "1 ≤ m, n ≤ 200",
  ],
  starterCode: {
    javascript: `function setZeroes(matrix) {
  // Write your solution here
  
}

// Test case
const m = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(m);
console.log(m);`,
    python: `def setZeroes(matrix):
    # Write your solution here
    pass

# Test case
m = [[1,1,1],[1,0,1],[1,1,1]]
setZeroes(m)
print(m)`,
    java: `import java.util.*;

class Solution {
    public static void setZeroes(int[][] matrix) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[][] m = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(m);
        System.out.println(Arrays.deepToString(m));
    }
}`,
  },
  expectedOutput: {
    javascript: "[[1,0,1],[0,0,0],[1,0,1]]",
    python: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
    java: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
  }
  },

  "number-of-islands": {
  id: "number-of-islands",
  title: "Number of Islands",
  difficulty: "Medium",
  category: "Graph • DFS • BFS",
  description: {
    text: "Given a 2D grid map of '1's (land) and '0's (water), return the number of islands.",
    notes: [
      "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically."
    ],
  },
  examples: [
    {
      input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
      output: "1"
    },
    {
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: "3"
    }
  ],
  constraints: [
    "1 ≤ m, n ≤ 300"
  ],
  starterCode: {
    javascript: `function numIslands(grid) {
  // Write your solution here
  
}

// Test cases
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));`,
    python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))`,
    java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        char[][] g = {
          {'1','1','1','1','0'},
          {'1','1','0','1','0'},
          {'1','1','0','0','0'},
          {'0','0','0','0','0'}
        };
        System.out.println(numIslands(g));
    }
}`,
  },
  expectedOutput: {
    javascript: "1",
    python: "1",
    java: "1",
  }
  },

  "coin-change": {
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: {
    text: "Given coins of different denominations and a total amount, return the fewest coins needed to make that amount.",
    notes: [
      "Return -1 if the amount cannot be made."
    ]
  },
  examples: [
    {
      input: "coins = [1,2,5], amount = 11",
      output: "3",
      explanation: "11 = 5 + 5 + 1"
    },
    {
      input: "coins = [2], amount = 3",
      output: "-1"
    },
    {
      input: "coins = [1], amount = 0",
      output: "0"
    }
  ],
  constraints: [
    "1 ≤ coins.length ≤ 12",
    "1 ≤ amount ≤ 10⁴"
  ],
  starterCode: {
    javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3`,
    python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3`,
    java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // 3
    }
}`,
  },
  expectedOutput: {
    javascript: "3",
    python: "3",
    java: "3",
  }
  },

  // hard problems

  "median-of-two-sorted-arrays": {
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Array • Binary Search • Divide & Conquer",
  description: {
    text: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
    notes: [
      "The overall run time complexity must be O(log (m+n))."
    ]
  },
  examples: [
    {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.0"
    },
    {
      input: "nums1 = [1,2], nums2 = [3,4]",
      output: "2.5"
    }
  ],
  constraints: [
    "nums1.length == m",
    "nums2.length == n",
    "0 ≤ m, n ≤ 1000",
    "1 ≤ m + n ≤ 2000",
    "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"
  ],
  starterCode: {
    javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
  
}

// Test cases
console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
    python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))  # Expected: 2
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.5`,
    java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2})); // 2
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // 2.5
    }
}`,
  },
  expectedOutput: {
    javascript: "2\n2.5",
    python: "2\n2.5",
    java: "2.0\n2.5",
  }
  },

  "merge-k-sorted-lists": {
  id: "merge-k-sorted-lists",
  title: "Merge k Sorted Lists",
  difficulty: "Hard",
  category: "Linked List • Heap • Divide & Conquer",
  description: {
    text: "Merge k sorted linked lists and return it as one sorted linked list.",
    notes: []
  },
  examples: [
    {
      input: "lists = [[1,4,5],[1,3,4],[2,6]]",
      output: "[1,1,2,3,4,4,5,6]"
    },
    {
      input: "lists = []",
      output: "[]"
    },
    {
      input: "lists = [[]]",
      output: "[]"
    }
  ],
  constraints: [
    "k == lists.length",
    "0 ≤ k ≤ 10⁴",
    "0 ≤ lists[i].length ≤ 500",
    "-10⁴ ≤ Node.val ≤ 10⁴",
    "Total nodes ≤ 10⁵"
  ],
  starterCode: {
    javascript: `function mergeKLists(lists) {
  // Write your solution here
  
}

// Test cases
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]])); // Expected: [1,1,2,3,4,4,5,6]`,
    python: `def mergeKLists(lists):
    # Write your solution here
    pass

# Test cases
print(mergeKLists([[1,4,5],[1,3,4],[2,6]]))  # Expected: [1,1,2,3,4,4,5,6]`,
    java: `import java.util.*;

class Solution {
    public static List<Integer> mergeKLists(List<List<Integer>> lists) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(mergeKLists(Arrays.asList(
            Arrays.asList(1,4,5),
            Arrays.asList(1,3,4),
            Arrays.asList(2,6)
        )));
    }
}`,
  },
  expectedOutput: {
    javascript: "[1,1,2,3,4,4,5,6]",
    python: "[1, 1, 2, 3, 4, 4, 5, 6]",
    java: "[1, 1, 2, 3, 4, 4, 5, 6]",
  }
  },

  "word-ladder": {
  id: "word-ladder",
  title: "Word Ladder",
  difficulty: "Hard",
  category: "Graph • BFS",
  description: {
    text: "Return the length of the shortest transformation sequence from beginWord to endWord.",
    notes: [
      "Only one letter can be changed at a time.",
      "Each new word must exist in the wordList."
    ]
  },
  examples: [
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
      output: "5"
    },
    {
      input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
      output: "0"
    }
  ],
  constraints: [
    "1 ≤ wordList.length ≤ 5000",
    "wordList[i].length == beginWord.length",
    "Only lowercase letters"
  ],
  starterCode: {
    javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
  
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Expected: 5`,
    python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

print(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))`,
    java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(ladderLength("hit","cog",Arrays.asList("hot","dot","dog","lot","log","cog"))); // 5
    }
}`,
  },
  expectedOutput: {
    javascript: "5",
    python: "5",
    java: "5",
  }
  },

  "n-queens": {
  id: "n-queens",
  title: "N-Queens",
  difficulty: "Hard",
  category: "Backtracking",
  description: {
    text: "Place n queens on an n×n chessboard so that no two queens attack each other.",
    notes: [
      "Return all distinct board configurations."
    ]
  },
  examples: [
    {
      input: "n = 4",
      output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'
    }
  ],
  constraints: [
    "1 ≤ n ≤ 9"
  ],
  starterCode: {
    javascript: `function solveNQueens(n) {
  // Write your solution here
  
}

// Test case
console.log(solveNQueens(4));`,
    python: `def solveNQueens(n):
    # Write your solution here
    pass

print(solveNQueens(4))`,
    java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(solveNQueens(4));
    }
}`,
  },
  expectedOutput: {
    javascript: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    python: '[[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]',
    java: "[[.Q.., ...Q, Q..., ..Q.], [..Q., Q..., ...Q, .Q..]]",
  }
  },

  "shortest-path-visiting-all-nodes": {
    id: "shortest-path-visiting-all-nodes",
    title: "Shortest Path Visiting All Nodes",
    difficulty: "Hard",
    category: "Graph • Bitmask DP • BFS",
    description: {
      text: "Given an undirected, connected graph of n nodes (0..n-1), find the length of the shortest path that visits every node at least once.",
      notes: [
        "You may start and stop at any node. You may revisit nodes and edges."
      ]
    },
    examples: [
      {
        input: "graph = [[1,2,3],[0],[0],[0]]",
        output: "4",
        explanation: "One shortest path is 1->0->2->0->3 (length 4)."
      },
      {
        input: "graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]",
        output: "4"
      }
    ],
    constraints: [
      "1 ≤ n = graph.length ≤ 12",
      "0 ≤ graph[i][j] < n",
      "Graph is connected"
    ],
    starterCode: {
      javascript: `function shortestPathLength(graph) {
  // Write your solution here (use BFS + bitmask DP)
  
}

// Test cases
console.log(shortestPathLength([[1,2,3],[0],[0],[0]])); // Expected: 4
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])); // Expected: 4`,
      python: `def shortestPathLength(graph):
    # Write your solution here (BFS + bitmask DP)
    pass

# Test cases
print(shortestPathLength([[1,2,3],[0],[0],[0]]))  # Expected: 4
print(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]]))  # Expected: 4`,
      java: `import java.util.*;

class Solution {
    public static int shortestPathLength(List<List<Integer>> graph) {
        // Write your solution here (BFS + bitmask DP)
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(shortestPathLength(Arrays.asList(
          Arrays.asList(1,2,3),
          Arrays.asList(0),
          Arrays.asList(0),
          Arrays.asList(0)
        ))); // 4
        System.out.println(shortestPathLength(Arrays.asList(
          Arrays.asList(1),
          Arrays.asList(0,2,4),
          Arrays.asList(1,3,4),
          Arrays.asList(2),
          Arrays.asList(1,2)
        ))); // 4
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n4",
      python: "4\n4",
      java: "4\n4",
    },
  },

  "word-ladder-ii": {
    id: "word-ladder-ii",
    title: "Word Ladder II",
    difficulty: "Hard",
    category: "Graph • BFS • Backtracking • DP (reconstruct paths)",
    description: {
      text: "Given beginWord, endWord and a wordList, return all shortest transformation sequences from beginWord to endWord. Each step changes exactly one letter and resulting word must be in wordList.",
      notes: [
        "Return sequences in any order. If no transformation exists, return an empty list."
      ]
    },
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]'
      },
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "[]"
      }
    ],
    constraints: [
      "1 ≤ wordList.length ≤ 5000",
      "All words have same length ≤ 10",
      "Lowercase English letters only"
    ],
    starterCode: {
      javascript: `function findLadders(beginWord, endWord, wordList) {
  // Write your solution here (BFS to build graph of shortest paths, then backtrack)
  
}

// Test cases
console.log(findLadders("hit","cog",["hot","dot","dog","lot","log","cog"])); // Expect two sequences
console.log(findLadders("hit","cog",["hot","dot","dog","lot","log"])); // Expect: []`,
      python: `def findLadders(beginWord, endWord, wordList):
    # Write your solution here (BFS layers + backtrack)
    pass

# Test cases
print(findLadders("hit","cog",["hot","dot","dog","lot","log","cog"]))  # Expect two sequences
print(findLadders("hit","cog',["hot","dot","dog","lot","log"]))  # Expect: []`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here (BFS layers + backtrack)
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(findLadders("hit","cog",Arrays.asList("hot","dot","dog","lot","log","cog")));
        System.out.println(findLadders("hit","cog",Arrays.asList("hot","dot","dog","lot","log")));
    }
}`,
    },
    expectedOutput: {
      javascript: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]\n[]',
      python: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]\n[]',
      java: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]\n[]',
    },
  },
  
  "longest-increasing-path-in-a-matrix": {
    id: "longest-increasing-path-in-a-matrix",
    title: "Longest Increasing Path in a Matrix",
    difficulty: "Hard",
    category: "Graph • DP • DFS • Topological (DAG)",
    description: {
      text: "Given an m x n matrix, return the length of the longest increasing path in the matrix. From each cell you can move in four directions. You may NOT move diagonally or move outside the boundary.",
      notes: [
        "Treat cells as nodes in a directed acyclic graph (edges to strictly greater neighbors) and use DFS+memo or topological DP."
      ]
    },
    examples: [
      {
        input: "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
        output: "4",
        explanation: "Longest increasing path is [1,2,6,9] (length 4)."
      },
      {
        input: "matrix = [[3,4,5],[3,2,6],[2,2,1]]",
        output: "4",
        explanation: "One path is [3,4,5,6]."
      }
    ],
    constraints: [
      "m == matrix.length",
      "n == matrix[i].length",
      "1 ≤ m, n ≤ 200",
      "-2^31 ≤ matrix[i][j] ≤ 2^31 - 1"
    ],
    starterCode: {
      javascript: `function longestIncreasingPath(matrix) {
  // Write your solution here (DFS + memo or topo)
  
}

// Test cases
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // Expected: 4`,
      python: `def longestIncreasingPath(matrix):
    # Write your solution here (DFS + memo)
    pass

# Test cases
print(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))  # Expected: 4`,
      java: `class Solution {
    public static int longestIncreasingPath(int[][] matrix) {
        // Write your solution here (DFS + memo)
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestIncreasingPath(new int[][]{
          {9,9,4},{6,6,8},{2,1,1}
        })); // 4
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "cherry-pickup": {
    id: "cherry-pickup",
    title: "Cherry Pickup",
    difficulty: "Hard",
    category: "DP • Graph • Grid • DFS",
    description: {
      text: "Given an n x n grid of values (0 empty, 1 cherry, -1 thorn), two robots start at (0,0) and must reach (n-1,n-1) then return to (0,0). Maximize cherries collected; thorns block paths.",
      notes: [
        "Classic DP reduces two trips to simultaneous traversal (two walkers) with state (r1,c1,r2) or use memoized DFS on combined state."
      ]
    },
    examples: [
      {
        input: "grid = [[0,1,-1],[1,0,-1],[1,1,1]]",
        output: "5",
        explanation: "Pick path to collect maximum cherries and avoid thorns."
      }
    ],
    constraints: [
      "n == grid.length",
      "1 ≤ n ≤ 50",
      "grid[i][j] ∈ {-1,0,1}"
    ],
    starterCode: {
      javascript: `function cherryPickup(grid) {
  // Write your solution here (DP with memo on combined positions)
  
}

// Test case
console.log(cherryPickup([[0,1,-1],[1,0,-1],[1,1,1]])); // Expected: 5`,
      python: `def cherryPickup(grid):
    # Write your solution here (DP on two walkers)
    pass

# Test case
print(cherryPickup([[0,1,-1],[1,0,-1],[1,1,1]]))  # Expected: 5`,
      java: `import java.util.*;

class Solution {
    public static int cherryPickup(int[][] grid) {
        // Write your solution here (DP with memo)
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(cherryPickup(new int[][]{{0,1,-1},{1,0,-1},{1,1,1}})); // 5
    }
}`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
    },
  },

  "shortest-path-visiting-all-points-with-costs": {
    id: "shortest-path-visiting-all-points-with-costs",
    title: "Shortest Path Visiting All Points with Costs (TSP variant)",
    difficulty: "Hard",
    category: "Graph • Bitmask DP • TSP",
    description: {
      text: "Given n points and a cost matrix/calc function between points, find the minimum cost to visit all points at least once (start anywhere). This is the classical TSP-style bitmask DP on graphs.",
      notes: [
        "Use bitmask DP with O(n * 2^n) states. n is small (≤ 15)."
      ]
    },
    examples: [
      {
        input: "points = [[0,0],[1,0],[1,1]], cost = manhattan distance",
        output: "2",
        explanation: "One optimal sequence visits all with total manhattan cost 2."
      }
    ],
    constraints: [
      "1 ≤ n ≤ 15 (due to 2^n complexity)",
      "Costs are non-negative integers"
    ],
    starterCode: {
      javascript: `function tspMinCost(points, costFunc) {
  // Write your solution here (bitmask DP)
  // costFunc(i,j) -> non-negative integer cost between i and j
  
}

// Example using Manhattan cost
function manhattan(a,b){ return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]); }

// Test case
console.log(tspMinCost([[0,0],[1,0],[1,1]], manhattan)); // Expected: 2`,
      python: `def tspMinCost(points, costFunc):
    # Write your solution here (bitmask DP)
    # costFunc(i,j) returns cost between point i and j
    pass

# Example using Manhattan cost
def manhattan(a,b): return abs(a[0]-b[0]) + abs(a[1]-b[1])

# Test case
print(tspMinCost([[0,0],[1,0],[1,1]], manhattan))  # Expected: 2`,
      java: `import java.util.*;

class Solution {
    public static int tspMinCost(int[][] points, BiFunction<Integer,Integer,Integer> costFunc) {
        // Write your solution here (bitmask DP)
        return 0;
    }

    public static void main(String[] args) {
        int[][] pts = {{0,0},{1,0},{1,1}};
        System.out.println(tspMinCost(pts, (i,j) -> Math.abs(pts[i][0]-pts[j][0]) + Math.abs(pts[i][1]-pts[j][1]))); // 2
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};