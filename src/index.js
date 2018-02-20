/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
	var first = 0;

	if (preferences.length<3) {return(0)};

 	while (preferences[first]>preferences.length) {
 		first++
 	};

 	var sumTr = 0;
 	var second;
 	var third;

 	while (first<preferences.length) {
 		second = preferences[first]-1;
 		third = preferences[second]-1;
 		if (second>first && third>first && preferences[third]-1==first) {
 			sumTr++
 		};
 		first++;
 	};

 	return(sumTr);

};
