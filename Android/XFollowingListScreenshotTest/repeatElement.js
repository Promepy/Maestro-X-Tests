function duplicateIndexDifference() {
  const arr = output.items;
  var i = 0
  var firstIndex = arr.indexOf(arr[i]);
  var lastIndex = arr.lastIndexOf(arr[i]);
  for (; i < arr.length; i++) {
    firstIndex = arr.indexOf(arr[i]);
    lastIndex = arr.lastIndexOf(arr[i]);
    if (firstIndex !== lastIndex) {
      output.duplicateCount = lastIndex - firstIndex;
      output.isLastScreen = true;
      output.logging = ["Last Screen", output.duplicateCount, i, firstIndex, arr[i], arr, output.isLastScreen];
      return;
    }
  }
  //output.duplicateCount = 0;
  //output.isLastScreen = true;
  output.logging = ["Last Screen", output.duplicateCount, i, firstIndex, arr[i], arr];
  console.log("No Duplicates");
}


//arr = ["nights & weekends","buildspace","Brackeys","Harkirat Singh","Nikhil Kamath","Sharan Hegde","Ishan Sharma","Kalpit Veerwal","Crypto Samrat","Solanium","Cognizant","XAYA","Game Developers Confer…","#100daysOfCode","Ai Club gvp","Mounika Kalahasthi","DeepAI","Sanskar Tiwari","Google DeepMind","TensorFlow","Andrew Ng","SF Machine Learning","Machine Learning Lab","Machine Learning Lab","Machine Learning and NLP","freeCodeCamp.org","100DaysOfCode","Python Software Founda…","Flutter Daily","r/FlutterDev","Dart Language","Flutter","Women Techmakers Vizag","GDG Vizag","YouTube","X","Google","Google for Developers","Women Techmakers Vizag","GDG Vizag","YouTube","X","Google","Google for Developers","Android Developers","Women Techmakers Vizag"]
duplicateIndexDifference();