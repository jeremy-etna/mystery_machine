let fs = require("fs");

function parseArgs() {
    let args = process.argv.slice(2);

    let parsedArgs = {
        patterns: [],
        files: []
    }

    // (?:-e\s+(\w+)|([\w.]+))
    
    for(let i = 0; i < args.length; i++) {
        if(args[i] == "-e" && i + 1 < args.length) {
            if(args[i + 1] != "") {
                parsedArgs.patterns.push(args[i + 1]);
            } else {
                parsedArgs.patterns.push("[^]");
            }
            i++;
            continue;
        }
        parsedArgs.files.push(args[i]);
    }

    //console.log(parsedArgs);

    return parsedArgs;
}

function pattern_particulier(args) {
    let result = [];

    for(let i = 0; i < args.patterns.length; i++) {
        let pattern = args.patterns[i];
        let regex = new RegExp(pattern, "g");

        for(let j = 0; j < args.files.length; j++) {
            let file = args.files[j];
            let content = fs.readFileSync(file, "utf-8");
            while((match = regex.exec(content)) !== null) {
                result.push({
                    file: file,
                    pattern: (pattern === "[^]" ? "" : match[0]),
                    offset: match.index
                });
            }

            //FIXME: Le script ne marche pas si le pattern est "[^]" car il manque un dernier token à la fin
            //Complètement inexplicable, donc c'est un FIXME absolument honteux

            if(pattern === "[^]") {
                result.push({
                    file: file,
                    pattern: "",
                    offset: content.length
                });
            }
        }
    }

    //console.log(result.length);

    return result;
}

function main() {
    let results = pattern_particulier(parseArgs());

    console.log(JSON.stringify(results, undefined, 2));
}

main();