const Form = (props: FormProps) => {
    return (props.show === true) && <>
        <div> 
            <h4>Header test</h4>
           <input type='number' />
        </div>
    </>
}

type FormProps = {
    show: boolean
}

export default Form;
