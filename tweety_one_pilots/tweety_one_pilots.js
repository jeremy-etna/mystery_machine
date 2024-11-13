const fs = require('fs');

function analyseHashtags(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const inputData = JSON.parse(data);
    const percentageThreshold = inputData.percentage_threshold;
    const tweets = inputData.tweets;

    const hashtagCounts = {};
    let totalHashtags = 0;

    tweets.forEach(tweet => {
        tweet.hashtags.forEach(hashtag => {
            hashtagCounts[hashtag] = (hashtagCounts[hashtag] || 0) + 1;
            totalHashtags++;
        });
    });

    const hashtagsArray = Object.keys(hashtagCounts).map(hashtag => ({
        hashtag,
        count: hashtagCounts[hashtag],
        percentage: (hashtagCounts[hashtag] / totalHashtags) * 100
    }));

    const filteredHashtags = hashtagsArray
        .filter(hashtag => hashtag.percentage >= percentageThreshold)
        .map(hashtag => hashtag.hashtag);

    return JSON.stringify(filteredHashtags, null, 2);
}

function main() {
    const fileName = process.argv[2];
    if (!fileName) {
        console.error("Error. No file given in argument.");
        return;
    }
    const result = analyseHashtags(fileName);
    console.log(result);
}

main();
