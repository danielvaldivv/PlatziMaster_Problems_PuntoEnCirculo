function pointInsideCircle(name, radio, positionPoint, positionCircle) {
  // Get coordinates
  const xPointInitial = positionPoint[0];
  const yPointInitial = positionPoint[1];
  const xCircleInitial = positionCircle[0];
  const yCircleInitial = positionCircle[1];

  let xPointFinal;
  let yPointFinal;

  // Calculate distance between circle center and point position.
  (xCircleInitial !== 0)
    ? xPointFinal = xPointInitial - xCircleInitial
    : xPointFinal = xPointInitial;

  (yCircleInitial !== 0)
    ? yPointFinal = yPointInitial - yCircleInitial
    : yPointFinal = yPointInitial;

  const pointDistance = (Math.pow(xPointFinal, 2) + Math.pow(yPointFinal, 2))

  // valitation of radio and point distance.
  let isInside;
  (radio > pointDistance)
    ? isInside = true
    : isInside  = false

  // Print Info.
  console.group(name)
    console.log('radio: ',radio)
    console.log('positionPoint: ', positionPoint)
    console.log('positionCircle: ', positionCircle)
    console.log('pointDistance: ', pointDistance)
    console.log('isInside: ', isInside)
  console.groupEnd(name)
}
// Mocked Info.
pointInsideCircle('proveOne', 5, [1,1], [0,0])
pointInsideCircle('proveTwo', 1, [1,1], [5,5])
pointInsideCircle('proveThree', 1, [2,2], [1,1])
pointInsideCircle('proveFour', 2, [3,3], [3,3])
pointInsideCircle('proveFive', 1, [3,3], [0,0])
