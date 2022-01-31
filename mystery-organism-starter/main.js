// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//factory function
const pAequorFactory = (uniqueNumber, dnaStrand) => {
  let newPAequor = {
    specimenNum: uniqueNumber,
    dna: dnaStrand,
    mutate() {
      let mutatedBaseIndex = Math.floor(Math.random() * 15)
      let mutatedBaseValue = this.dna[mutatedBaseIndex];
      let newBaseValue = returnRandBase();
      //check if potential replacement is same as old value
      while (newBaseValue === mutatedBaseValue) {
          console.log(newBaseValue);
          newBaseValue = returnRandBase();
        continue;
      }
      this.dna[mutatedBaseIndex] = newBaseValue; 
      return this.dna;
    },
    compare(pAequorObject) {
      let counter = 0;
      //comparing bases of two DNA strands
      for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequorObject.dna[i])
          counter+=1;
      }
      //checking percentage they have in common and printing it
      let percentageInCommon = (counter / 15) * 100;
      console.log(`specimen ${this.specimen} and specimen ${pAequorObject.specimen} have ${percentageInCommon}% DNA in common`)
    },
    willLikelySurvive() {
      let counter = 0;
      //counting number of 'C' and 'G' bases
      for (base of this.dna) {
          if (base === 'C' || base === 'G') {
            counter += 1;
          }          
      }
      
      //checking for percentage value over 60%
      if (((counter / 15) * 100) >= 60) {
        return true;
      } else {
        return false;
      }
    },
  }
  return newPAequor;
}


//creating pAequor instances
const pAequorArray = [];
for (let i = pAequorArray.length; pAequorArray.length < 30; i++) {
  let newPAequorObject = pAequorFactory(pAequorArray.length + 1, mockUpStrand());
  if (newPAequorObject.willLikelySurvive()) {
    pAequorArray.push(newPAequorObject);
  }
}


