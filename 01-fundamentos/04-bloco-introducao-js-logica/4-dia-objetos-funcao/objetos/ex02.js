let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals:{
        golden:2,
        silver:3
    },
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018]
}
//A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log("A jogadora " + player.name + " foi eleita a melhor do mundo por " +
            player.bestInTheWorld.length + " vezes") 