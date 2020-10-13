import data from './data.json'


const CategoriesSet = new Set(data.map(data => data.category))
const CategoriesUnique = Array.from(CategoriesSet).sort()

console.log(CategoriesUnique)

const CategoriesWithCounts = data.reduce((obj, item) => {
    // check if cat exists as a key on obj
    if (item.category in obj) {
      obj[item.category] += 1
    } else {
        obj[item.category] = 1 
    }
    // if so add 
      // 1 to the value of this key
    // else 
      // set this key with a value of 1
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  console.log(CategoriesWithCounts)

const CategoriesObjectList = CategoriesUnique.reduce((acc, cat) => {
   acc.push({name:cat, count: CategoriesWithCounts[cat]})
   return acc
}, []) 

console.log(CategoriesObjectList)


export default data

export {CategoriesWithCounts, CategoriesUnique, CategoriesObjectList}
