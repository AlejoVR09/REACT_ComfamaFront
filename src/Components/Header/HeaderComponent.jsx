
import ModalButton from '../ModalButton/ModalButton'
import Form from '../Form/Form'
import './HeaderComponent.css'
const HeaderComponent = () => {
     return(
        <>
            <div className="header_flexbox">
                <div className='header_flexbox-element flexbox-son1'>dasdas</div>
                <ModalButton
                    buttonText=''
                    modalContent={<Form></Form>}
                />
            </div>
        </>
     )
}

export default HeaderComponent