import React from 'react'
import Select from 'react-select'
export default function SelectDropdown() {
 const options = [
  {value:'java',label:'Java'},
  {value:'javascript', label:'JavaScript'},
  {value:'React',label:'React'},
  {value:'vue', label:'Vue'},
  {value:'Angular',label:'Angular'},
]

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderRadius:'10px',
      padding:'12px 16px',
      border: '1px solid rgba(0, 0, 0, 0.10);',
      borderBottomLeftRadius:'0px',
      borderBottomRightRadius:'0px',
      borderColor:state.isFocused?'transparent':0,
      outline:state.isFocused?'none !important':'none !important',
      outline:'none !important',
      boxShadow:'none',
      overflow:'hidden',
      zIndex:'9',
      ":hover": {border : '1px solid rgba(0, 0, 0, 0.10);'}
    }),
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px rgba(17,17,17,0.1) solid',
      padding:'15px 20px',
      marginTop:'-4px',
      marginBottom:'8px',
      borderRadius:"12px",
      padding:'10px 16px',
      color: state.isSelected? 'white': '#666666',
      background: state.isSelected ? '#311432' : 'transparent',
      fontWeight:'500',
      ":hover":{background : '#311432', color:'white', },
      ":focus": {background:'#311432', color:'white'},
      transition:"all 0.3s ease-in-out",
      
    }),
    menu: (provided, state) => ({
      ...provided,
      marginTop:'0px',
      borderRadius:'10px',
      borderTopRightRadius:'0px',
      borderTopLeftRadius:'0px',
      padding:'12px 8px 0px 8px',
      overflow:'hidden',
      border:'1px solid rgba(0, 0, 0, 0.10);',
     
    }),

    placeholder: (provided, state) => ({
      ...provided,
      color:'#666666',
      fontWeight:'500',
      fontSize:'16px',
      opacity:'50%',
      border:'none'
    
    }),
    input: (provided, state) => ({
      ...provided,
      borderColor:state.isFocused?'yellow' :'none',
      ringColor:state.isFocused?'none' :'none',
      outline: state.isFocused?'none' :'none',
      padding:'0px',
  fontFamily:'Arial, Helvetica, sans-serif'

      
    }),
  }

  return (
    <div className='select-component'>
      <Select options={options} defaultValue={options[1]} styles={customStyles}  className="custom-select" isSearchable={false} />
    </div>
  )
}
