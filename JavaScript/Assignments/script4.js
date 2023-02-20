let India = {
    Population:100000000,
    Type: "Not Island",
    language: "Hindi"
};
let Portugal = {
    Population:40000000,
    Type: "Not Island",
    language: "English",
};
let England = {
    Population:60000000,
    Type: "Not Island",
    language: "h    ",
};
let Pakistan = {
    Population:400000,
    Type: "Not Island",
    language: "Urdu",
};
let SarahCondition = {
    Population:50000000,
    Type: "Not Island",
    language: "English",
}

if ( (SarahCondition.Population = India.Population) && (SarahCondition.Type == India.Type) && (SarahCondition.language == India.language))
console.log("You should live in India");
else if ((SarahCondition.Population = England.Population) && (SarahCondition.Type == England.Type) && (SarahCondition.language == England.language))
console.log("You should live in England :)");
else if ((SarahCondition.Population = Pakistan.Population) && (SarahCondition.Type == Pakistan.Type) && (SarahCondition.language == Pakistan.language))
console.log("You should live in Pakistan :)");
else if ((SarahCondition.Population = Portugal.Population) && (SarahCondition.Type == Portugal.Type) && (SarahCondition.language == Portugal.language))
console.log("You should live in Portugal :)");
else console.log("Don't Live anywhere Sarah");
