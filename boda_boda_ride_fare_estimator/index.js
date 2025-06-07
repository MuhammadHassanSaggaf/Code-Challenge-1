// calculateBodaFare: computes total boda boda fare based on distance
function calculateBodaFare(distanceInKm){
  const baseFare = 100;
  const chargePerKm = 20;
  const totalFare = baseFare + (distanceInKm * chargePerKm);
  return totalFare
}

const distanceInKm = Number(prompt('Mpaka wapi mzee, ni kilomita ngapi mpaka huko ?').trim())

const bei = calculateBodaFare(distanceInKm)

if (isNaN(distanceInKm)){
  console.log('Hebu rudia tena, umesema kilomita ngapi ?')
} else {
  console.log(`Kufika mpaka huko itakuwa ${bei} shillings tu! Panda tuende.`)

}