// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }
    return (
        <div>Keypad
            <form>
                <input type = "password" onChange = {handleChange}/>
            </form>
        </div>
    )
}

export default Keypad;