const TextPanel = (props) => {
    return (
        <div className='TextPanel' >
            <div className='TextPanel__Title' >{props.title}</div>
            <div className='TextPanel__p1' >{props.p1}</div>
            <div className='TextPanel__p2' >{props.p2}</div>
            <div className='TextPanel__p3' >{props.p3}</div>
            {props.children}
        </div>
    )
}
export default TextPanel;