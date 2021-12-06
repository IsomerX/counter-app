import './Wrapper.css'

const Wrapper = (prop) => {
    return (
        <div className="wrapper">
            {prop.children}
        </div>
    )
}

export default Wrapper;