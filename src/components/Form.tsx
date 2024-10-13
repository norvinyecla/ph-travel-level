const Form = (props: FormProps) => {
    return (props.show === true) && <>
        <div> 
            <h5>{props.name}</h5>
        </div>
    </>
}

type FormProps = {
    show: boolean,
    name: string
}

export default Form;
