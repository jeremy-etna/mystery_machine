import process from 'process';

function calculateProfit(buildings) {
    let gain = 0;
    let highest = 0;

    for (let i = buildings.length - 1; i >= 0; i--) {
        const building = buildings[i];

        if (building.height > highest) {
            building.floor_layout.forEach(floor_layout => {
                if (floor_layout.orientations.includes('E')) {
                    gain += Math.ceil(floor_layout.monthly_rent * 0.05) * (building.height - highest);
                }
            });

            highest = building.height;
        }
    }
    console.log(gain * 12);
    return gain * 12;
}

function main() {
    calculateProfit(JSON.parse(process.argv[2]));
}

main()

