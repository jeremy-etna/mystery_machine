# Mystery Machine Project

This project is a collection of JavaScript scripts that perform various tasks, such as data processing, pattern matching, and hashtag analysis. Each script is independent and can be executed separately with specific inputs.

## Files and Scripts

### 1. flowrent_pagny.js
This file includes multiple functionalities:
- **Workflow Execution**: Executes a sequence of tasks with hashing using the `crypto` module to generate hashes based on a sequence of steps.
- **Pattern Matcher**: Searches for patterns in files and outputs their positions. Patterns are specified with `-e` flags followed by file paths.
- **Schedule Analysis (schoolsOut)**: Analyzes a school schedule to determine the maximum number of rooms needed based on overlapping course times.

### 2. money_for_nothing.js
Processes an array of predicted prices and identifies points where the price increases continuously. Outputs an array of indices where each price increase starts and ends.

**Example Usage**:
node money_for_nothing.js "[1, 3, 5, 4, 6]"

### 3. morning_sunshine.js
Calculates annual profit based on building layouts, floor rents, and orientations. Extra profit potential is factored in for east-facing orientations.

**Example Usage**:
node morning_sunshine.js '[{"height":10,"floor_layout":[{"monthly_rent":1000,"orientations":["E"]}]}]'

### 4. tweety_one_pilots.js
Analyzes hashtags in tweets from a JSON file, filtering hashtags based on a specified percentage threshold and outputting those that meet or exceed the threshold.

**Example Usage**:
node tweety_one_pilots.js tweets.json

**tweets.json** structure:
{
  "percentage_threshold": 10,
  "tweets": [
    {"hashtags": ["#example", "#test"]},
    {"hashtags": ["#example"]}
  ]
}

## Setup and Installation

1. **Clone the project**:
   git clone https://github.com/your-username/mystery_machine.git
   cd mystery_machine

2. **Install Dependencies**:
   Ensure Node.js is installed as some scripts require Node’s built-in modules, like `fs` and `crypto`.

## Running the Scripts

Each script can be run independently using `node`. Make sure to provide inputs as JSON strings or file paths according to the script requirements.

## Example Commands

- **Pattern Matcher**:
  node index.js -e "pattern" file.txt
