import {parseArgs} from "jsr:@std/cli/parse-args";

const resort  = {
    Whistler:{
        elevation:2214,
        snow:"Powder",
        expectedSnowfall:"20"
    },
    Mengjie:{
        elevation:2234,
        snow:"Poe",
        expectedSnowfall:"24"
    },
    Ladyzhou:{
        elevation:2004,
        snow:"Extra",
        expectedSnowfall:"23"
    },

}
const args = parseArgs(Deno.args,{
    alias:{
        resort:"r",
        help: "h"
    },
    default:{
        resort:"Whistler"
    }
});
const resortName = args.resort as keyof typeof resort;
const resorts = resort[resortName]

if (!resorts){
    console.error(`Resort ${resortName} not found, try another one. The default name is Whistler`);
    Deno.exit(1)
}

if (args.help){
    console.log(`
    Usage: ski-cli --resort <resortName>
    -h, --help Show help
    -r, --resort Name of the ski resort (defualt : Whistler)
    `)
    Deno.exit(0)
}

console.log(`
    %c
    Resort:${resortName},
    Elevation:${resorts.elevation} feet,
    Snow: ${resorts.snow},
    Expectedsnowfall: ${resorts.expectedSnowfall} cm
`, "color:blue");