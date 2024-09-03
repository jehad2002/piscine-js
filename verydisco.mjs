function transformWord(word) {
    const length = word.length;
    const halfLength = Math.ceil(length / 2);
    
    const firstHalf = word.slice(0, halfLength);
    const secondHalf = word.slice(halfLength);
    
    const transformedWord = secondHalf + firstHalf;
    
    return transformedWord;
}
const args = process.argv.slice(2); 
const input = args.join(' '); 

const words = input.split(' ');

words.forEach(word => {
    const transformed = transformWord(word);
    console.log(transformed);
});
