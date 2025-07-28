
const Model = ({children, toggleModel}) => {


  function handleToggleModel(e){
    if(e.target.id === "model"){
      toggleModel()
    }
  }


  return (
    <div id="model" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
    onClick={handleToggleModel}
    >

        {children}
    </div>
  )
}

export default Model