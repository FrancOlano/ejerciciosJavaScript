function tirarMoneda(){
    let caraOCruz = Math.round(Math.random())
    if(caraOCruz == 1){
        console.log('cara');
    }
    else if (caraOCruz == 0){
        console.log('cruz');
    }
}
tirarMoneda()