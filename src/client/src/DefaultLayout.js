import React from 'react'
function DefaultLayout(props){
    return(
        <div>
            <div className='header bs1'>
                <div>
                    <h1>Bin-Laden Cars</h1>
                   
                </div>
            </div>
            <div className='content'>
                {props.children}
            </div>

        </div>
    
    )
}

export default DefaultLayout