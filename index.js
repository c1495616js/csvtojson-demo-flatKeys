const csv1=require('csvtojson/v1');
const csv=require('csvtojson');
let test = 'one.period.period, two\r\n"v1","v2"\r\n"v3","v4"'
  let rows = [];
csv1({flatKeys:true}).fromString(test).on("json", (json) => {
  // console.log("json", json)
  const keys = Object.keys(json);
  keys.forEach(key => {
    if (!json[key].replace) {
      json[key] = "";
    }
    json[key] = json[key].replace("\\,", ",");
  });
  rows.push(json);
  console.log('csv1::', rows);
})

csv({flatKeys:true}).fromString(test).then((json)=>{
  console.log('csv2::',json);  
})


  