const fs = require('fs');

function schoolsOut(file) {
    const schedule = JSON.parse(
        fs.readFileSync(file, 'utf8')
    );

    //Array de la taille du nombre de minutes dans une journée (60 * 24)
    const timeline = new Array(1440).fill(0);
    let rooms_needed = 0;

    for (const course of schedule) {
        //On convertit l'heure de début et l'heure de fin en
        //nombre de minutes depuis 00:00
        const min = parseInt(
            course['start'].substring(0, 2)) * 60 + 
            parseInt(course['start'].substring(3, 5)
            );

        const max = parseInt(
            course['end'].substring(0, 2)) * 60 + 
            parseInt(course['end'].substring(3, 5)
            );

        //Pour chaque minute, on incrémente le nombre de cours sur cette minute
        for (let i = min; i < max; i++) {
            timeline[i]++;
            if(timeline[i] > rooms_needed) {
                rooms_needed = timeline[i];
            }
        }
    }

    //On retourne le maximum de cours sur une minute
    return rooms_needed;
}

function main() {
    console.log(schoolsOut(process.argv[2]));
}

main();