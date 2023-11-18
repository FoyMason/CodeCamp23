const sheetName = "current_car_inventory";  
export var url = `https://script.google.com/macros/s/AKfycbxORO0fi3ysDfrVHlPwd3UQauk90b4NegadtJcXf33R85oX8_PKrM4ryqVT0rA5A0dbww/exec?sheetName=`;
    
 export async function fetchData(url, sheetname, setData) {
    
      const fullUrl = url+sheetname
      const responseData =  fetch(fullUrl)
      .then((response)=>{
        response.json().then((data)=>{
          setData(data, console.log(data))
          
        })
      }).catch((error)=>{console.log(error)})
      
      
      }
      
export const objectify = (list, type) => {
  let listOfObjects = []
  if(type === 'current car inventory'){
    const x=list.shift()
    const keys=['orderId','customer','year','make','model','service','progress','notes','cost','date']
    for(let i = 0; i<list.length; i++){
      let freshObject = {}
      for(let k=0;k<list[i].length; k++){
        if(keys[k] === 'notes'){
          freshObject[keys[k]] = [list[i][k]]
        } else{
          freshObject[keys[k]] = list[i][k]

        }
      }
      listOfObjects.push(freshObject)
    }
    return listOfObjects
    

  }
}