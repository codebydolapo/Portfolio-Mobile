import styles from "../styles/navbar.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger } from '../reducers/actions'
// import Window from './window'
// import { addConnectedAddress, removeConnectedAddress } from "../reducers/actions"


function Navbar() {

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState() {
        if (hamburgerState == false) {
            dispatch(activateHamburger())
        } else if (hamburgerState == true) {
            dispatch(deactivateHamburger())
        }
    }


    return (
        hamburgerState ?
            <div className={`w-full h-[50px] bg-[#fff] flex flex-row fixed top-0 z-[5] `}>
                <div className={`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
                    <img className={`md:h-[40px] md:w-[40px] rounded-full mr-3 xs:w-[30px] xs:h-[30px]`} src='/icons/logo.jpg' alt='' />
                </div>
                <div className={`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
                    <div className={`${styles.hamburger}`} onClick={handleBurgerState}>
                        <div className={`${styles.lineActive}`} id={`${hamburgerState && styles.line1}`}></div>
                        <div className={`${styles.middleLineActive}`} id={`${hamburgerState && styles.line2}`}></div>
                        <div className={`${styles.lineActive}`} id={`${hamburgerState && styles.line3}`}></div>
                    </div>
                </div>
            </div>
            :
            <div className={`w-full h-[50px] bg-[#000] flex flex-row fixed top-0 self-center z-[5]`}>
                <div className={`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
                    <img className={`md:h-[40px] md:w-[40px] rounded-full mr-3 xs:w-[30px] xs:h-[30px]`} src='/icons/logo.jpg' alt='' />
                </div>
                <div className={`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
                    
                        <div className={`${styles.hamburger}`} onClick={handleBurgerState}>
                            <div className={`${styles.lineInactive}`} id={`${hamburgerState && styles.line1}`}></div>
                            <div className={`${styles.middleLineInactive}`} id={`${hamburgerState && styles.line2}`}></div>
                            <div className={`${styles.lineInactive}`} id={`${hamburgerState && styles.line3}`}></div>
                        </div>
                </div>
            </div>
    )
}

export default Navbar

