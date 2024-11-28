
export default function TextForm() {

    let number=Math.random()*100;

  return (
    <div className="container border p-5">
       <h2>Your random number is {Math.floor(number)}</h2>
    </div>
  )
}
