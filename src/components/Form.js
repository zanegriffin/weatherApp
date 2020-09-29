import React, {useRef} from 'react'

const Form = (props) => {

    let inputRefZipcode = useRef()

    let handleClick = (event) => {
        event.preventDefault()
        props.weatherData(inputRefZipcode.current.value)
        // console.log('zipcode: ', inputRefZipcode.current.value)
        inputRefZipcode.current.value = ''
        
    }

    return(
        <>
        <form>
            <input placeholder='zipcode' ref={inputRefZipcode}></input>
            <button onClick={handleClick}>Submit</button>
        </form>
        </>
    )
}

export default Form