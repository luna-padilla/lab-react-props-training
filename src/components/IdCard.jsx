function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return <div>
   <p>lastName={lastName}</p>
   <p> firstName={firstName}</p>
   <p> gender={gender}</p>
   <p>height={height}</p> 
   <p> birth={birth.toDateString()}</p>
  <img src={picture}></img>  
 
  </div>;
}
export default IdCard;
