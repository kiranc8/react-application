import './App.css';

function App() {
  let formArray = [
    {
      "id": 1,
      "title": "title 1",
      "children": [
        {
          "id": 2,
          "title": " title 2",
          "children": [
            {
              "id": 3,
              "title": " title 3",
              "children": [
                {
                  "id": 4,
                  "title": " title 4",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": " title 6",
      "children": []
    },
    {
      "id": 7,
      "title": " title 7",
      "children": [
        {
          "id": 8,
          "title": " title 8",
          "children": [
            {
              "id": 9,
              "title": " title 9",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": 10,
      "title": " title 10",
      "children": []
    }
  ]

 function getDropDown(formArray){
  const result = [];
  formArray.forEach(item=>{
    if('title' in item){
      result.push({'title':item['title']});
    }
    if('children' in item && Array.isArray(item['children'])){
      result.push(...getDropDown(item['children']))
    }
  })
  return result;
 }

 function getTitles(formArray){
  const output = [];
  let result = [];
  formArray.forEach(item=>{
    result=[];
    if('title' in item){
      result.push(item['title']);
    }
    if('children' in item && Array.isArray(item['children'])){
    getTitles(item['children']);
    }
    output.push(result);
  })
  
  return output;
 }
 const titles = getTitles(formArray);
 console.log(titles);
 const dropdown = getDropDown(formArray);
 console.log(dropdown);

  return (
    <div className='wrapper'>
      <div className='input-fields'>
        <select className='dropdown-list'>
          {
            dropdown.map(item=>{
              return(
                <option>{item.title}</option>
              )
            })
          }
        </select>
        <input className='input-title' type="text" name="title" placeholder='Enter Title' />
        <button className='add-button'>Add to form</button>
      </div>
      <div className='form-array'>
        {
          formArray.map(item => {
            return (
              <p>{item.title}</p>
            )

          })
        }
      </div>
    </div>
  );
}

export default App;
