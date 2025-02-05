const DNAtoRNA = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
};
const RNAtoDNA = {
    C: "G",
    G: "C",
    A: "T",
    U: "A",
};

function RNA(dna) {
    return dna
        .split("")
        .map((change) => DNAtoRNA[change])
        .join("");
}

function DNA(rna) {
    return rna
        .split("")
        .map((change) => RNAtoDNA[change])
        .join("");
}