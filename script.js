// @ts-nocheck
 
const storeValues= ()=>{
    console.log(document.getElementById('ids').value); 
    console.log(document.getElementById('roll').value);
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
  let studentDetails={
    "id":document.getElementById('ids').value,
   "roll":document.getElementById('roll').value,
   "name":document.getElementById('name').value,
   "email":document.getElementById('email').value,
  }
  console.log(studentDetails);
    axios
.post('https://studentdatabase-6ffa7-default-rtdb.firebaseio.com/students.json',studentDetails)
  .then((res)=>console.log(res))
  .then((err)=>console.log(err))
console.log("inside method");
alert("done");
}


const fetchValues = ()=>{
  let promise = axios.get('https://studentdatabase-6ffa7-default-rtdb.firebaseio.com/students.json');
  promise.then(response=>{
          let studentDetails=[];
          let datas=response.data; 
          for(const key in datas)
          {
            studentDetails.push({...datas[key],id:key})
          }
             console.log(studentDetails);
         console.log(studentDetails[0].email);        
         document.getElementById('student-data').innerHTML=``;      
      for(const key in studentDetails)
      {
    document.getElementById('student-data').innerHTML += `<br>
    <li>Roll ${studentDetails[key].roll}</li>
    <li>name ${studentDetails[key].name}</li>
    <li>Email ${studentDetails[key].email} </li> <br>`;

      }
})

}


